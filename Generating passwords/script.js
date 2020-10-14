// const swticher = document.querySelector('#swticher');
const slider = document.querySelector('#slider');
const password = document.querySelector('#password');
const generate = document.querySelector('#generate');
const copybBtn = document.querySelector('#copy-btn')

const symbols = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%&*()-_=+{}[]'



function genetating() {
    let pass ='';
    let lengthpassword = lengthpass(); 
        for(let i = 1; i<=lengthpassword; i++){
            pass += symbols.charAt(Math.floor(Math.random()*symbols.length))
        }
    return pass
}

const lengthpass = () =>{
    lengthpassword = Math.floor(Math.random()*7+8);
    return lengthpassword;
}


slider.addEventListener('click',()=>{
    slider.classList.toggle('active');
    document.body.classList.toggle('dark')
})

generate.addEventListener('click',()=>{
    password.innerHTML = genetating();
})




