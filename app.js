let num = document.getElementById("num");
let unit_choose = document.getElementById("unit_choose");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let ans=0;

num.addEventListener("keydown",function(event){
    if(event.key === 'Enter')
    {
        convert();
    }
})

function convert(){
    if(unit_choose.value == 'farhenheit'){
        ans = (((num.value)-32)*5)/9;
        ans=ans.toFixed(2);
        result.innerHTML = ans + ' C';
    }else{
        ans = (num.value)*(9/5)+32;
        ans=ans.toFixed(2);
        result.innerHTML = ans + ' F';
    }
    result.style.border = "1px solid black";
    num.focus();
}