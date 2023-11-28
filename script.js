//Promo Code
function CheckCode(){
    code = document.getElementById("code").value
    console.log(code)
    if (code === "First1")
    {
        alert("Code redeemed successfully.");
    }
    else
    {
        alert("Wrong code.")
    }
}

let code;
var button = document.getElementById("codebutton");

button.addEventListener("click",CheckCode)

//Adding items to cart

//my method
// can try mix and match item and cart in the array. array[0] is the item and array[0+6] will be its corresponding name as well as its cart
/*
By dg that, i can let the user press the cart, trace back to the array array[cart_num -6] and find the image.
In js, can make a dictionary and store all the neccessary information such as item id, name, price, img link.
From there we use the image link found in the array and search it in the dictionary
and then display
*/


