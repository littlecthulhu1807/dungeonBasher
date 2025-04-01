
//HTML Var Setups
const DAMAGE_HTML = document.getElementById("damage_html");
let damageValue = parseFloat(DAMAGE_HTML.innerHTML)

const ATTACKBAR = document.querySelector(".center_attack_bar");
const ATTACKBARPROGRESS = document.querySelector(".center_attack_bar_progress");


//Game-Logic Values
let gameloop = true;

let attackSpeed = 2000;
let deltaTimeInterval = 100;
let timer = 0;



//execute every 100 ms (every 1/10 sec || 1s = 1000ms)
setInterval(() => {

    timer += deltaTimeInterval;
    ATTACKBARPROGRESS.style.width = `${((timer / 10) / (attackSpeed / 1000))}%`

    if(timer === attackSpeed){
        console.log(`Attacked for ${damageValue} damage`);

        timer = 0;
    }

}, deltaTimeInterval)