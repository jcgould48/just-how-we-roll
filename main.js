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

function mean(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i += 1) {
        total += arr[i];
    }
    return total / arr.length;
}

function median(arr) {
    let median = 0;
    let numLength = arr.length;
    arr.sort();
    if (numLength % 2 === 0){
        median = (arr[numLength / 2 - 1] + arr[numLength / 2]) / 2;
    } else { 
        median = arr[(numLength - 1) / 2];
    }
 
    return median;
}




 document.querySelector('#d6-roll').src= "images/start/d6.png"

 function rollSix(){
    let rollSixResult = getRandomNumber(6);
    document.querySelector('#d6-roll').src = `images/d6/${rollSixResult}.png`
    sixes.push(rollSixResult)
    console.log(sixes)
    document.querySelector('#d6-rolls-mean').innerText = mean(sixes);
    document.querySelector('#d6-rolls-median').innerText = median(sixes)
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
