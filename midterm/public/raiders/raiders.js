"use strict";

const headerButton = document.querySelector('header button');
const formButton = document.querySelector('.raiders-form__submit');
const select = document.querySelector('label #level');
const guidance = document.querySelector('main .guidance');

headerButton.addEventListener('click', function() {
    const submenu = document.querySelector('.submenu');
    submenu.classList.toggle('shown');
});

formButton.addEventListener('click',function(e) {
    e.preventDefault();
    if(select.value == 1) {
        guidance.innerHTML = "<h3>About item</h3><p>In the game, summoners can buy or synthesize all kinds of props and equipments they need in the item store, thus enhancing the champion's various attributes. In terms of categories, items are generally divided into 'attack', 'defense', 'spell', 'movement speed', and 'consumables'. In the game, the system will recommend some general items for player to choose, if you do not know the champion, you can choose item according to the system recommendation. As you get to know your champion, you have more flexibility to choose your item to suit different types of gameplay.</p>";
    }else if(select.value == 2){
        guidance.innerHTML = "<h3>About Summoner Skills</h3><p>There are many summoner skills to choose from in the game, but you can only choose 2 summoner skills per match. These abilities have a direct impact on the battlefield. For example: summoners can heal their champions, teleport their friends, improve their towers, and so on. Summoner spells do not cost the hero mana, but there is a cooldown between each use. Also note that some summoner skills require a certain level to be used, such as Healing, which requires a summoner level of 2. Summoner skill is the final step in the hero's ability, the right skill can instantly change the situation, and even affect the outcome of a game</p>";
    }else if(select.value == 3){
        guidance.innerHTML = "<h3>About Runes</h3><p>Rune system is a very special system in league of Legends. Its main function is to strengthen the summoner's ability (such as health, critical strike, attack speed, etc.). The summoner can select different runes based on the type and quest of the champion he/she manipulates to give bonuses to his/her champion base stats. Runes are important parts of differentiating advanced players. If your opponent has a rune bonus and you don't, you will probably lose at the start. Using different runes for each type of champion will give your champion an advantage in line, walk, kill, and so on in the early game.</p>";
    }else {
        guidance.innerHTML = "<h3>Champions Information</h3><p>Lineup is the key to start, how to match the champion lineup is a huge question. For the first time into the league of legends, we can start from the understanding of the conventional configuration. Under normal circumstances, the team will choose tank type champions to go top lane (commonly known as 'top'), mage type champions to choose middle lane (commonly known as 'mid'), high mobility champions to select in the wild area (commonly known as 'jungle'), striker type champions (also referred to as 'ADC') and support champions to choose bot lane (commonly known as 'bot').</p>";
    }
});