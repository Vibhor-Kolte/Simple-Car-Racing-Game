const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

// console.log(score);
// console.log(startScreen);
// console.log(gameArea);

let player = {};
 
startScreen.addEventListener('click', start);

function start(){
    console.log("In Start");

    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');

    player.start = true;
    window.requestAnimationFrame(gamePlay);
    
    let car = document.createElement('div');
    car.setAttribute('class','car');
    car.innerText = "Car Object";
    gameArea.appendChild(car);
}

function gamePlay(){
    console.log("In Game Play");
    if(player.start){
        window.requestAnimationFrame(gamePlay);
    }
}

let keys = {ArrowUp:false, ArrowDown:false, ArrowRight: false, ArrowLeft:false};

console.log(keys);

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);
// document.addEventListener('keyright',keyRight);
// document.addEventListener('keyleft',keyLeft);

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
    console.log(e.key);
    // console.log(keys);
}

function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;
    console.log(e.key);
}

// function keyRight(e){
//     e.preventDefault();
//     keys[e.key] = true;
//     console.log(e.key);
// }

// function keyLeft(e){
//     e.preventDefault();
//     keys[e.key] = true;
//     console.log(e.key);
// }