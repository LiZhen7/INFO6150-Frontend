const button = document.querySelector('button');
const input = document.querySelector('.label__input');
const obj = {};

setInterval(buttonAbility, 0);

button.addEventListener('click',function(e) {
    e.preventDefault();
    if(!obj[input.value]) {
        obj[input.value] = 1;
        document.querySelector('.info__report').innerText = `The count for ${input.value} is ${obj[input.value]}`;
    }else {
        obj[input.value]++;
        document.querySelector('.info__report').innerText = `The count for ${input.value} is ${obj[input.value]}`;
    }
    console.log(input.value);
});

function buttonAbility() {
    if(!input.value) {
        button.disabled = "true";
    }else {
        button.disabled = "";
    }
};