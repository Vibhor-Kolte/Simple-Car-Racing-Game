const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

// console.log(score);
// console.log(startScreen);
// console.log(gameArea);

let player = { speed:5};
let car = document.createElement('div');
car.setAttribute('class','car');
car.innerText = "Car Object";
gameArea.appendChild(car);

 
startScreen.addEventListener('click', start);

function start(){
    console.log("In Start");

    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');

    player.start = true;
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    window.requestAnimationFrame(gamePlay);
    
    
    player.x = car.offsetLeft;
    player.y = car.offsetTop; 

    /*  left: 50px; top: 120px;  */
    console.log("top position:- " + car.offsetTop + "..." + player.y);
    console.log("left position:- " + car.offsetLeft + "..." + player.x);
}

function gamePlay(){
    console.log("In Game Play");
    let road = gameArea.getBoundingClientRect();
    // console.log(road);

    if(player.start){

        if(keys.ArrowUp && player.y > 50){
            player.y -= player.speed;
            car.style.top = player.y + 'px';
        }
        else if(keys.ArrowDown && player.y < (road.height-100)){car.style.top = (player.y += player.speed) + 'px';}
        else if(keys.ArrowLeft && player.x > 0){car.style.left = (player.x -= player.speed) + 'px';}
        else if(keys.ArrowRight && player.x < (road.width-50)){car.style.left = (player.x += player.speed) + 'px';}

        // console.log("top position:- " + car.offsetTop + "..." + player.y);
        // console.log("left position:- " + car.offsetLeft + "..." + player.x);

        window.requestAnimationFrame(gamePlay);
    }
}
/*
    ..............
*/
let keys = {ArrowUp:false, ArrowDown:false, ArrowRight: false, ArrowLeft:false};

console.log(keys);

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);
// document.addEventListener('keyright',keyRight);
// document.addEventListener('keyleft',keyLeft);

function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
    // console.log(e.key);
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