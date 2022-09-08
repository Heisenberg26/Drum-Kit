var arr = document.querySelectorAll("button").length;

for (let index = 0; index < arr; index++) {
    
document.querySelectorAll("button")[index].addEventListener("click",myFunction);
}
function myFunction()
{
    alert("You have clicked the button");
}