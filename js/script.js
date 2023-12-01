
//Hamburger menu
const hamburger = document.querySelector(".hamburger"); //The container where the hamburger menu is located within
const navbarflex = document.querySelector(".navbarflex"); //The navigation bar 

hamburger.addEventListener("click", () => { //If user clicks onto the hamburger menu "icon"
    navbarflex.classList.toggle("active"); //Toggle and off for navbarflex active css class
})



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
        //Displaying the new total cost
        value.innerHTML = "$"+total_cost
    }
    else if (code === "resetcode") //To reapply to code if needed or change another code to be used
    {
        localStorage.clear(); //Clearing of the local storage
        alert("Code resetted")
    }
    else if (code === "First1" && count!==0) //If code is already redeemed
    {
        alert("Code has already been redeemed");
    }
    else //If its a invalid code
    {
        alert("Invalid code.");
        value.innerHTML = "$"+total_cost
    }

}
let code;
let total_cost = localStorage.getItem("total_cost") || 39; //Original total cost, || means if "total_cost" is undefined, use the default value which is 39
let count = localStorage.getItem("count") || 0

let value = document.getElementById("value")
value.innerHTML = "$"+total_cost
//Checking if the button is pressed
var button = document.getElementById("codebutton");
button.addEventListener("click",CheckCode)

