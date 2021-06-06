
const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 
    weapon: ['Kunai'],
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

const player2 = {
    player: 2,
    name: 'Subzero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif', 
    weapon: ['Kunai'],
    attack: function() {
        console.log(`${this.name} Fight...`);
    }
}

function createElement(tag, className) {
    let $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer( playerObj ) {
    const $player = createElement('div', `player${playerObj.player}` );
    const $progressbar = createElement('div', 'progressbar' );
    const $life = createElement('div', 'life' );
    const $name = createElement('div', 'name' );
    const $character = createElement('div', 'character' );
    const $img = createElement('img', );

    $life.style.width = `100%`;
    $name.innerText = playerObj.name;
    $progressbar.appendChild($name);
    $progressbar.appendChild($life); 
    $img.src = playerObj.img;
    $character.appendChild($img);
    $player.appendChild($character);
    $player.appendChild($progressbar);

    return $player;
}

function randomizer() {
    return Math.ceil(Math.random() * 20);
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomizer();
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        player.hp = 0;
       
    }
}

function playerLose(name) {
    const $losetitle = createElement('div', 'loseTitle');
    $losetitle.innerText = `${name} wins`;
    return $losetitle;
}

$randomButton.addEventListener('click', function() {
    if (player1.hp > 0 && player2.hp > 0 ) {
    changeHP(player1);
    changeHP(player2);
    }
    else if (player1.hp == 0 ) {
        $arena.appendChild(playerLose(player2.name));
        $randomButton.disabled = true;
    }
    else if (player2.hp == 0 ) {
        $arena.appendChild(playerLose(player1.name));
        $randomButton.disabled = true;
    }
})

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
 

