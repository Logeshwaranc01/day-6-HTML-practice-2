const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["#2F3C7E", "#FBEAEB","#101820", "#FEE715","#F96167", "#F9E795","#990011", "#FCF6F5"]
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})