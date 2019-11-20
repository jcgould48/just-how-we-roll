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
    let rollResult = getRandomNumber(6);
    document.querySelector('#d6-roll').src = `images/d6/${rollResult}.png`
    sixes.push(rollResult)
    console.log(sixes)
    document.querySelector('#d6-rolls-mean').innerText = mean(sixes);
    document.querySelector('#d6-rolls-median').innerText = median(sixes)
    document.querySelector('#d6-rolls-mode').innerText = mode(sixes)
}

document.querySelector('#double-d6-roll-1').src= "images/start/d6.png"
document.querySelector('#double-d6-roll-2').src= "images/start/d6.png"

function rollDouble(){
    let rollResult1= getRandomNumber(6);
    let rollResult2= getRandomNumber(6);
    document.querySelector('#double-d6-roll-1').src = `images/d6/${rollResult1}.png`
    document.querySelector('#double-d6-roll-2').src = `images/d6/${rollResult2}.png`
    doubleSixes.push(rollResult1, rollResult2)
    console.log(doubleSixes)
    document.querySelector('#double-d6-rolls-mean').innerText = mean(doubleSixes);
    document.querySelector('#double-d6-rolls-median').innerText = median(doubleSixes)
    document.querySelector('#double-d6-rolls-mode').innerText = mode(doubleSixes)
}

document.querySelector('#d12-roll').src= "images/start/d12.jpeg"

function rollTwelve(){
    let rollResult = getRandomNumber(12);
    document.querySelector('#d12-roll').src = `images/numbers/${rollResult}.png`
    twelves.push(rollResult)
    console.log(twelves)
    document.querySelector('#d12-rolls-mean').innerText = mean(twelves);
    document.querySelector('#d12-rolls-median').innerText = median(twelves)
    document.querySelector('#d12-rolls-mode').innerText = mode(twelves)
}

document.querySelector('#d20-roll').src= "images/start/d20.jpg"

function rollTwenty(){
    let rollResult = getRandomNumber(20);
    document.querySelector('#d20-roll').src = `images/numbers/${rollResult}.png`
    twenties.push(rollResult)
    console.log(twenties)
    document.querySelector('#d20-rolls-mean').innerText = mean(twenties);
    document.querySelector('#d20-rolls-median').innerText = median(twenties)
    document.querySelector('#d20-rolls-mode').innerText = mode(twenties)
}



/*******************
 * EVENT LISTENERS *
 *******************/
document.querySelector("#d6-button").addEventListener("click", rollSix);
document.querySelector("#double-d6-buttons").addEventListener("click", rollDouble);
document.querySelector("#d12-button").addEventListener("click", rollTwelve);
document.querySelector("#d20-button").addEventListener("click", rollTwenty);
document.querySelector("#reset-button").addEventListener("click", reset);

/****************
 * MATH SECTION *
 ****************/

function mean(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return (total / arr.length).toFixed(2);
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

function mode(arr){
    
let current = 0;
let second = 0;
let answer = '';
for(let i = 0; i<arr.length; i++){
    for(let k = 0; k<arr.length; k++){
        if(i<1){
            if(arr[i]===arr[k]){
            current++
            answer = arr[i]
            }
        } else{
            if(arr[i]===arr[k]){
            second++
            }
        }
        }
        if(current >= second){
            second=0;
        } else {
            answer = arr[i]
            current = second;
            second=0
    }
}
return answer
}


/*********
 * RESET *
 *********/

function reset() {
document.querySelector('#d6-roll').src= "images/start/d6.png"
document.querySelector('#double-d6-roll-1').src= "images/start/d6.png"
document.querySelector('#double-d6-roll-2').src= "images/start/d6.png"
document.querySelector('#d12-roll').src= "images/start/d12.jpeg"
document.querySelector('#d20-roll').src= "images/start/d20.jpg"

sixes.length = 0;
doubleSixes.length = 0;
twelves.length= 0;
twenties.length = 0;

resetText();
  }

  function resetText(){
   let textSelect= document.querySelectorAll('.avgs')
   for(let i=0; i<textSelect.length;i++){
       textSelect[i].innerText = ''
   }
  }
  