const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle")
const output = document.querySelector("#output")


function calculateSumOfAngles(angle1,angle2,angle3)
{
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
function isTriangle(){
  const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(inputs[0].value>0 && inputs[1].value>0 && inputs[2].value>0)
    {
        if (sumOfAngles === 180){
        output.innerText ="YEAH! The angles form a triangle";
        }
        else{
        output.innerText ="Hmm! The angles didn't form a triangle";
        }
    }
    else{
        output.innerText ="Angles can't be negative";
    }

}
isTriangleBtn.addEventListener("click",isTriangle)