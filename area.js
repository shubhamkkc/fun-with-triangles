const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const calculateButton = document.querySelector("#button")
const outputs = document.querySelector("#output")

function calculateArea(b ,h){
    const area = 1/2 * (b * h);
    return area; 
}
function finalArea(){
    const area = calculateArea(Number(input1.value),Number(input2.value))
    if(input1.value>0 && input2.value>0){
    outputs.innerText = "Area is " + area;
    }
    else{
        outputs.innerText = "Please enter a valid base or height length"
    }

}
 
calculateButton.addEventListener("click", finalArea)