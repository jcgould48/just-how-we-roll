/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}


/*******************
 * YOUR CODE BELOW *
 *******************/
document.querySelector('#d6-roll').src= "images/start/d6.png"
function rollSix(){
    let rollSixResult = getRandomNumber(6);
    document.querySelector('#d6-roll').src = `images/d6/${rollSixResult}.png`
    sixes.push(rollSixResult)
}

/*******************
 * EVENT LISTENERS *
 *******************/
document.querySelector("#d6-button").addEventListener("click", rollSix);
// document.querySelector("#double-d6").addEventListener("click", rollDouble);
// document.querySelector("#d12").addEventListener("click", rollTwelve);
// document.querySelector("#d20").addEventListener("click", rollTwenty);

/****************
 * MATH SECTION *
 ****************/


/*********
 * RESET *
 *********/
