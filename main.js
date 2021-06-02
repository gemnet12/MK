const player1 = {
    name: 'Scorpion',
    hp: 15,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 
    weapon: ['Kunai'],
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

const player2 = {
    name: 'Subzero',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif', 
    weapon: ['Kunai'],
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

function createPlayer(player, playerObj) {
    const $player1 = document.createElement('div');
    $player1.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    

    const $life = document.createElement('div');
    $life.style.width = `${playerObj.hp}%`;
    $life.classList.add('life');

    
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    const $character = document.createElement('div');
    $character.classList.add('character');
   

    const $img = document.createElement('img');
    $img.src = playerObj.img;

    $character.appendChild($img);

    $player1.appendChild($character);
    $player1.appendChild($progressbar);

    const $arena = document.querySelector('.arenas') ;
    $arena.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);