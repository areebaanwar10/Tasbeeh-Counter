let count = 0;
let totalCount = 0;

const countDisplay = document.getElementById("count-display");
const totalDisplay = document.getElementById("total-display");
const countbtn = document.getElementById("count-btn");
const resetbtn = document.getElementById("reset-btn");
// const textDisplay = document.getElementById("text-display");
const textmsg = document.getElementById("text-msg");



countbtn.addEventListener("click", function(){
    count++;
    totalCount++;
    countDisplay.textContent = count;
    totalDisplay.textContent = totalCount;
    if(count === 33){
        textmsg.textContent = "MashaAllah! 33 Completed";
    }else if (count === 100){
        textmsg.textContent = "MashaAllah! 100 Completed";
    }else{
        textmsg.textContent = "Target: 33 / 100";
    }
});

resetbtn.addEventListener("click", function(){
count = 0;
totalCount = 0;
countDisplay.textContent = count;
totalDisplay.textContent = totalCount;
});







 




// sss
