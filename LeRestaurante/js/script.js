'use strict'

// scroll method

let next = document.querySelector('#next'),
    back = document.querySelector('#back'),
    scrollBlock = document.querySelectorAll('.menu__scroll');

let count = 0,
    arrLength = scrollBlock.length;


scrollFor();
scrollBlock[count].classList.add('menu__scroll_active');

function scrollFor() {
    scrollBlock.forEach(function(item, i) {
        scrollBlock[i].style.display = "none";
    });
}

next.addEventListener('click', function() {
    back.style.display = "flex";
    scrollBlock[count].classList.remove('menu__scroll_active');
    ++count;
    if(count == arrLength) {
        count = 0;
        scrollBlock[count].classList.add('menu__scroll_active');
    } else {
        scrollBlock[count].classList.add('menu__scroll_active');
    }
});

back.addEventListener('click', function() {
    scrollBlock[count].classList.remove('menu__scroll_active');
    --count;
    if(count < 0) {
        count = arrLength - 1;
        scrollBlock[count].classList.add('menu__scroll_active');
    } else {
        scrollBlock[count].classList.add('menu__scroll_active');
    }
});

// scroll method end