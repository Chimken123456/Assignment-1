
// //Promo Code
// function CheckCode(){ //Checking the code whether if its valid
//     code = document.getElementById("code").value; //Getting the value of the text entered which is the promo code
//     if (code === "First1" && count == 0 ) //If redeemed properly
//     {
//         alert("Code redeemed successfully. Total cost is deducted by $10");
//         count++
//         value.innerHTML = "$" + (total_cost-10)


        
//     }
//     else if (code === "First1" && count === 1)
//     {
//         alert("Code has already been redeemed");
//     }
//     else //If its a invalid code
//     {
//         alert("Invalid code.");
//         value.innerHTML = "$"+total_cost
//     }

// }
// let code;
// let cost;


// //Changing innerHTML to $39
// let value = document.getElementById("value")
// value.innerHTML = "$"+total_cost

// //Checking if the button is pressed
// var button = document.getElementById("codebutton");
// button.addEventListener("click",CheckCode) 



//Promo Code
function CheckCode(){ //Checking the code whether if its valid
    code = document.getElementById("code").value; //Getting the value of the text entered which is the promo code
    if (code === "First1" && count === 0 ) //If redeemed properly
    {
        alert("Code redeemed successfully. Total cost is deducted by $10");
        total_cost = total_cost-10;
        count ++;
        //Changing value of total_cost and count in the local storage
        localStorage.setItem("total_cost", total_cost);
        localStorage.setItem("count",count)
    }
    else if (code === "ResetCode")
    {
        localStorage.clear();
        alert("Code resetted")
    }
    else if (code === "First1" && count!==0)
    {
        alert("Code has already been redeemed");
    }
    else //If its a invalid code
    {
        alert("Invalid code.");
    }

}
let code;
let cost;
let total_cost = localStorage.getItem("total_cost") || 39; //Original total cost, || means if "total_cost" is undefined, use the default value which is 39
let count = localStorage.getItem("count") || 0

//Changing innerHTML to $39
let value = document.getElementById("value")
value.innerHTML = "$"+total_cost

//Checking if the button is pressed
var button = document.getElementById("codebutton");
button.addEventListener("click",CheckCode)


