let ratting = document.querySelectorAll("span");
let submit = document.querySelector("button");
let result = document.querySelector(".result")
let thanks = document.querySelector(".thanks");
let rating = document.querySelector(".rating")
let rattingNumber;

ratting.forEach(ele => {
    ele.addEventListener("click",getRatting)
})
submit.addEventListener("click",submitResult);

function getRatting(ele){
    ratting.forEach(spanEle =>{
        if(spanEle.classList.contains("selected-ratting")){
            spanEle.classList.remove("selected-ratting");
        }
    })
    ele.target.classList.toggle("selected-ratting");
    rattingNumber = ele.target.innerHTML;
}
function submitResult(){
    if(rattingNumber !== undefined){
        result.innerHTML = `You selected ${rattingNumber} out of 5`;
        rating.style.display = "none";
        thanks.classList.remove("thanks");
    }
}

