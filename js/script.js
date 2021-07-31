'use strict';

let styles = document.querySelector('#styles');
let switchWrapper = document.querySelector('.mode');
let switchCircle = document.querySelector('.mode__circle');

switchWrapper.addEventListener('click', function(event) {
    let attr = styles.getAttribute('href');
    if(/1/.test(attr)) {
        styles.setAttribute('href', attr.replace(1, 2));
        // switchWrapper.style.justifyContent = 'flex-end';
        let pos = 0;
        setInterval(function() {
            if(pos <= 25) switchCircle.style.left = pos + 'px';
            pos++;
        }, 1);
    } 
    else {
        styles.setAttribute('href', attr.replace(2, 1));
        switchWrapper.style.justifyContent = 'flex-start';
        let pos = parseInt(switchCircle.style.left);
        setInterval(function() {
            if(pos >= 0) switchCircle.style.left = pos + 'px';
            pos--;
        }, 1);
    }
})
