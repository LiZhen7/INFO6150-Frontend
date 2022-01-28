"use strict";

const headerButton = document.querySelector('header button');
const mainButton = document.querySelector('main button');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const region = document.querySelector('#region');

headerButton.addEventListener('click', function() {
    const submenu = document.querySelector('.submenu');
    submenu.classList.toggle('shown');
});

setInterval(buttonAbility,0);

function buttonAbility() {
    if(!username.value || !password.value || !email.value || !region.value) {
        mainButton.disabled = 'true';
    }else {
        mainButton.disabled = '';
    }
};