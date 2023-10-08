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

    for(x=0; x<5;x++){
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class','roadLine');
        roadLine.y = x*150;
        roadLine.style.top = roadLine.y + 'px';
        gameArea.appendChild(roadLine);
    }    
    
    player.x = car.offsetLeft;
    player.y = car.offsetTop; 

    /*  left: 50px; top: 120px;  */
    // console.log("top position:- " + car.offsetTop + "..." + player.y);
    // console.log("left position:- " + car.offsetLeft + "..." + player.x);

    for(x=0; x<3;x++){
        let oponentCar = document.createElement('div');
        oponentCar.setAttribute('class','oponentCar');
        oponentCar.y = x*150;
        oponentCar.style.top = oponentCar.y + 'px';
        oponentCar.style.background = 'orange';
        oponentCar.style.left = Math.floor(Math.random()*350) + 'px';
        gameArea.appendChild(oponentCar);
    }
}

function gamePlay(){
    console.log("In Game Play");
    let road = gameArea.getBoundingClientRect();
    // console.log(road);

    if(player.start){

        moveLines();
        moveOpponentCar();

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

function moveLines(){
    let lines = document.querySelectorAll('.roadLine'); //try it out:- document.querySelector('.roadLine');
    lines.forEach(function(item){
        if(item.y >= 700){item.y -=750;}
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
}

function moveOpponentCar(){
    let lines = document.querySelectorAll('.oponentCar'); //try it out:- document.querySelector('.roadLine');
    lines.forEach(function(item){
        if(item.y >= 700){item.y -=750;}
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
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