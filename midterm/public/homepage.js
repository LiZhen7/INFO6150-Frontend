"use strict";

const headerButton = document.querySelector('header button');
headerButton.addEventListener('click', function() {
    const submenu = document.querySelector('.submenu');
    submenu.classList.toggle('shown');
});