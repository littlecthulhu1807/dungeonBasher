import {Monster} from "./gameLogic/monster.js"
import {Player} from "./gameLogic/player.js"

//HTML Var Setups
const DAMAGE_HTML = document.getElementById("damage_html");
const GOLD_HTML = document.getElementById("gold_html");
const XP_HTML = document.getElementById("xp_html");

const ATTACKBAR = document.querySelector(".center_attack_bar");
const ATTACKBARPROGRESS = document.querySelector(".center_attack_bar_progress");

const CENTER_CONTAINER_HTML = document.querySelector(".game_container_center");

const WEAPON_IMAGE_HTML = document.getElementById("weapon_image");
const MONSTER_IMAGE_HTML = document.getElementById("monster_image");

const MONSTER_HEALTHBAR_PROGRESS_HTML = document.querySelector(".center_health_bar_progress");

const MONSTER_HP_Current_HTML = document.getElementById("healthbar_current_val");
const MONSTER_HP_MAX_HTML = document.getElementById("healthbar_max_val");
let monsterHpCurrentValue = parseFloat(MONSTER_HP_Current_HTML.innerHTML);
let monsterHpMaxValue = parseFloat(MONSTER_HP_MAX_HTML.innerHTML);



//Game-Logic Values
let gameloop = true;

let attackSpeed = 2000;
let deltaTimeInterval = 100;
let timer = 0;

//debug Values
let damageValue = parseFloat(DAMAGE_HTML.innerHTML);
let goldValue = parseFloat(GOLD_HTML.innerHTML);
let xpValue = parseFloat(XP_HTML.innerHTML);


//Game Functions
function attack(){
    //visual effects
    WEAPON_IMAGE_HTML.classList.toggle(`active`);

    //Create a Damage Indicator
    const div = document.createElement("div");
    div.innerHTML = `${Math.round(damageValue)} DAMAGE!`;
    div.style.cssText = `color: red; position: absolute; top: 50%; left: 50%; font-size: 1.5rem; pointer-events: none; z-index: 10; font-weight: bold;`
    CENTER_CONTAINER_HTML.appendChild(div);

    //attack
    monsterHpCurrentValue = monsterHpCurrentValue - damageValue;
    if (monsterHpCurrentValue <= 0){
        monsterHpCurrentValue = 10;

        goldValue += 10;
        xpValue += 5;
    }
    GOLD_HTML.innerHTML = goldValue;
    XP_HTML.innerHTML = xpValue;
    MONSTER_HP_Current_HTML.innerHTML = monsterHpCurrentValue;
    MONSTER_HEALTHBAR_PROGRESS_HTML.style.width = `${((monsterHpCurrentValue / monsterHpMaxValue) * 100)}%`



    //Indicator and reset
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