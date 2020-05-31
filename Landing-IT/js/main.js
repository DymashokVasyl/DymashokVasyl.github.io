document.addEventListener('DOMContentLoaded', function () {

    const mobMenu = document.querySelector('.mob-menu');
    const navList = document.querySelector('.nav-list');

    mobMenu.addEventListener('click', () => {
        mobMenu.classList.toggle('active');
        navList.classList.toggle('open');
        document.body.style.overflow = 'hidden';

    });

    function scroll(count, el, timeout, step) {
        let i = 1;
        (function () {
            if (i <= count) {
                setTimeout(arguments.callee, timeout);
                document.querySelector('.' + el).innerHTML = i;
                i = i + step;
            } else {
                document.querySelector('.' + el).innerHTML = count;

            }
        })();
    }

            scroll(225, 'count-1', 10, 2);
            scroll(345, 'count-2', 10, 2);
            scroll(365, 'count-3', 10, 2);
            scroll(385, 'count-4', 10, 2);
            scroll(385, 'count-5', 10, 2);

    


})
