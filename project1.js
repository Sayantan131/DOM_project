var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")

// var remove  = document.querySelector("#remove");

let flag = 1;

btn.addEventListener("click",function(){
if(flag == 0){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.color = "#000";
    flag = 1;
}
else{
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    btn.style.color = "#fff";
    flag = 0
}


})

// remove.addEventListener("click",function(){

// istatus.innerHTML = "Stranger";
// istatus.style.color = "red";

// })