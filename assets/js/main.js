const vitName = document.querySelector('#vit-name');
const vitFood = document.querySelector('#vit-food');
const vitBenefits = document.querySelector('#vit-benefits');
const vitPerDay = document.querySelector('#vit-per-day');
const vitSource = document.querySelector('#vit-source');
const submit = document.querySelector('#submit');
let inputValue = document.querySelector('#input-value');
const error = document.querySelector('#error');
const vitaminListButton = document.querySelector('#vitamin-list-button');
const vitaminList = document.querySelector('.vitamin-list');
const columnOne = document.querySelector('.column-1');
const columnTwo = document.querySelector('column-2');
const removeWord = 'vitamin';
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        getInput()
    }
});
submit.addEventListener("click", getInput);
function clearDisplay(){
    vitName.innerHTML = "";
    vitFood.innerHTML = "";
    vitBenefits.innerHTML = "";
    vitPerDay.innerHTML = "";
    vitSource.innerHTML = "";
    columnOne.style.display = "none";
    columnTwo.style.display = "none";
    // vitaminList.style.display ="none";
}

vitaminListButton.addEventListener("click", displayList);
function displayList(){
    vitaminList.style.display = "block";
}

//If name contains 'B' then pull up all vitamins starting with b

function getInput() {
    let vitamin = inputValue.value;
    //checks to make sure the user typed something in, if not, display error message
    if (vitamin === "") {
        clearDisplay()
        error.innerHTML = "Please enter the name of a vitamin";
    }
    //if the user types in "vitamin c" instead of "c" this checks, then removes the word vitamin
    //if they don't type "vitamin, it continues. It also changes lower case to upper case"
    else if (vitamin.indexOf(removeWord != -1) || vitamin.indexOf(removeWord == 0)) {
        error.innerHTML = "";
        vitamin = vitamin.replace("vitamin ", "");
        let vitaminUpper = vitamin.toUpperCase();
        //if the name property of an object in the vitamins array is equal to the user input after formatting

        if (vitamins.some(vitamins => vitamins.name === vitaminUpper)) {
            function displayName(vitaminName) {
                return vitaminName.name === vitaminUpper;
            }
            //Finds the current vitamin by formatted name and displays the rest of the properties
            let currentVitamin = vitamins.find(vitaminName => displayName(vitaminName));
            vitName.innerHTML = `<strong>Vitamin ${currentVitamin.name}</strong>`;
            vitFood.innerHTML = `<strong>Food Sources:</strong><br> ${currentVitamin.food}`;
            vitBenefits.innerHTML =`<strong>Benefits:</strong><br> ${currentVitamin.benefits}`;
            vitPerDay.innerHTML =`<strong>Recommended DV:</strong><br> ${currentVitamin.perDay}`;
            vitSource.innerHTML=`<strong>Source: </strong><br> ${currentVitamin.source}`;
        } else {
            clearDisplay()
            error.innerHTML = "We do not have the vitamin you are looking for, please try again"
        }
    }
}

