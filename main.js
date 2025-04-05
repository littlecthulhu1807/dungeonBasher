//TestMonster
class Monster{

    Monster(name,hp,minXp,maxXp,minGold,maxGold){

    };
}

class Player{

    Player(name, xp, damage, gold, level){

    };
}


//HTML Var Setups
const DAMAGE_HTML = document.getElementById("damage_html");
let damageValue = parseFloat(DAMAGE_HTML.innerHTML)

const ATTACKBAR = document.querySelector(".center_attack_bar");
const ATTACKBARPROGRESS = document.querySelector(".center_attack_bar_progress");

const CENTER_CONTAINER_HTML = document.querySelector(".game_container_center");

const WEAPON_IMAGE_HTML = document.getElementById("weapon_image");
const MONSTER_IMAGE_HTML = document.getElementById("monster_image");



//Game-Logic Values
let gameloop = true;

let attackSpeed = 2000;
let deltaTimeInterval = 100;
let timer = 0;


//Game Functions
function attack(){
    console.log(`Attacked for ${damageValue} damage`);

    //visual effects
    WEAPON_IMAGE_HTML.classList.toggle(`active`);

    //Create a Damage Indicator
    const div = document.createElement("div");
    div.innerHTML = `${Math.round(damageValue)} DAMAGE!`;
    div.style.cssText = `color: red; position: absolute; top: 50%; left: 50%; font-size: 1.5rem; pointer-events: none; z-index: 10; font-weight: bold;`
    CENTER_CONTAINER_HTML.appendChild(div);

    div.classList.add(`fade-up`);
    timeout(div);
    reset();
}

//Destroy Damage indicator afer 800ms
const timeout = (div) => {
    setTimeout(() => {
        div.remove();
    }, 800)
}

const reset = () => {
    setTimeout(() => {
        WEAPON_IMAGE_HTML.classList.toggle(`active`);
    }, 200 * (attackSpeed/2000))
}





//execute every 100 ms (every 1/10 sec || 1s = 1000ms)
setInterval(() => {

    timer += deltaTimeInterval;
    ATTACKBARPROGRESS.style.width = `${((timer / 10) / (attackSpeed / 1000))}%`

    if(timer === attackSpeed){
        attack();
        timer = 0;
    }

}, deltaTimeInterval)