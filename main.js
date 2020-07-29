const shoppingItem = document.querySelector('#shopping-item');
const addButton = document.querySelector('.add-item')
const shoppingTable = document.querySelector('.shopping-table');
const clearAll = document.querySelector('.clear-all');

const load = document.querySelector('#load');
const main = document.querySelector('.main');

let shoppingList;
let deleteButton;

// Preloader
window.onload = () =>{
    load.classList.add('load');
    window.setTimeout(() => {
        load.classList.remove('load');
        main.style.display = 'block'
        document.querySelector('.preloader').style.display = 'none'
    },1000)
}


localStorage.length < 1 ? shoppingList = [] : shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

const addShopingItem = (item) =>{
    shoppingTable.innerHTML += `
            <tr>
                <td class='item'>${shoppingList[item]}</td>
                <td><button class="btn remove-item"><i class="fas fa-minus-circle"></i></button></td>
            </tr>
        `;
    clearAll.style.display = 'block'
}

shoppingList.forEach((element,i) => {
    addShopingItem(i);
    
});

const deleteShopingItem = e =>{
    const rowNumber = e.target.parentNode.parentNode.rowIndex;   
    e.target.parentNode.parentNode.parentNode.parentNode.remove();
    shoppingList.splice(rowNumber,1);
    console.log(shoppingList);
    localStorage.removeItem('shoppingList');
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

    if (shoppingList.length <1){
    clearAll.style.display = 'none'
}
};

addButton.addEventListener('click',() => {

    if (shoppingItem.value.length < 1){
        shoppingItem.classList.add('error');
        shoppingItem.focus();
        checkButtonExist();
    } else {
        shoppingList.push(shoppingItem.value);
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        addShopingItem(shoppingList.length-1)

        shoppingItem.value = null;
        shoppingItem.classList.remove('error')
        checkButtonExist();
    }
});

const checkButtonExist = () => {
    if (shoppingList.length > 0) {
        deleteButton = document.querySelectorAll('.remove-item');
        for( key of deleteButton){
            key.addEventListener('click', (e) => {
                deleteShopingItem(e);
            })
        }
    }
};


   


const deleteShopingItemAll = () => {
    shoppingTable.innerHTML= '';
}

clearAll.addEventListener('click',() => {
    // shoppingList = [];
    clearAll.style.display = 'none'
    localStorage.removeItem('shoppingList');
    deleteShopingItemAll();
    
    
})


checkButtonExist();








