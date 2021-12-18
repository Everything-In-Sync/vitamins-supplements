const vitName = document.querySelector('#vit-name');
const vitFood = document.querySelector('#vit-food');
const vitBenefits = document.querySelector('#vit-benefits');
const vitPerDay = document.querySelector('#vit-per-day');
const submit = document.querySelector('#submit');
let inputValue = document.querySelector('#input-value');
const error = document.querySelector('#error');
const removeWord = 'vitamin';

submit.addEventListener("click", getInput);

function getInput(){
    let vitamin = inputValue.value;
    //checks to make sure the user typed something in, if not, display error message
    if (vitamin === ""){
        error.innerHTML = "Please enter the name of the vitamin";

    }
    //if the user types in "vitamin c" instead of "c" this checks, then removes the word vitamin
    //if they don't type "vitamin, it continues"
    else if (vitamin.indexOf(removeWord != -1) || vitamin.indexOf(removeWord == 0 )) { 
        error.innerHTML = "";
        vitamin = vitamin.replace("vitamin ", "");
        vitamin.toUpperCase()
        console.log(vitamin)
    }
}

if(vitamins.some(vitamins => vitamins.name === "C")){ //learn exactly what this is doing
    // alert("Object found inside the array.");
} else{
    // alert("Object not found.");
}

//on submit click grab the value property from the input box then clear it

