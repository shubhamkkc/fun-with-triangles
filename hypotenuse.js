const side1 = document.querySelector("#input1")
const side2 = document.querySelector("#input2")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputE1 = document.querySelector("#output")


function calculateSumOfSquares(a,b){
const sumOfSquares = a*a + b*b;
return sumOfSquares;
}

function calculateHypotenuse(){
    
const sumOfSquares = calculateSumOfSquares(Number(side1.value),Number(side2.value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
if(side1.value>0 && side2.value>0){
outputE1.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}
else{
    outputE1.innerText = "Please enter a valid length of perpendicular or base."
}
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);