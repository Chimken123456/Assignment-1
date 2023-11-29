//Promo Code
function CheckCode(){
    let status = false;
    code = document.getElementById("code").value;
    if (code === "First1" && count === 0 )
    {
        alert("Code redeemed successfully. Total cost is deducted by $10");
        total_cost = total_cost-10;
        count ++;
        status = true;
        
    }
    else if (code === "First1" && count === 1)
    {
        alert("Code has already been redeemed");
    }
    else
    {
        alert("Invalid code.");
    }
    return status;
}
let code;
let cost;
let count = 0;
let total_cost = 39;
let value = document.getElementById("value")
value.innerHTML = "$"+total_cost
var button = document.getElementById("codebutton");
button.addEventListener("click",CheckCode)


