
// author: Mitwa Patel, 000905034
// date: 17th June, 2023

// This file represents solutions for the assigned problems.
// It includes reading input from a web page using JavaScript and writing output to specified HTML elements using JavaScript 


// Group-1:

// Question_1

/**
 * function to solve problem 1 of group-1.
 * It provides answer as output based on user's input
 */
function group_1_choice_1(){
    let inputElement = document.getElementById("input-g1Q1");
    let outputElement = document.getElementById("output-g1Q1");
    let inputValue = Number.parseInt(inputElement.value);

    if (inputValue === 0 || (inputValue >= 13 && inputValue <= 17)){
        outputElement.value = "In Range";
    }

    else if (inputValue < 13 || inputValue > 17){
        outputElement.value = "Out of range";
    }

    else{
        outputElement.value = "Not a number";
    }
}


// Question_3

/**
 * function to solve problem 3 of group-1.
 * It provides answer as output based on user's input
 */
function group_1_choice_3(){
    let inputElement = document.querySelector("#input-g1Q3");
    let outputElement = document.querySelector("#output-g1Q3");
    let side = Number.parseInt(inputElement.value);

    if (side >= 0){
        outputElement.value = "Perimeter = " + 4*side + "\nArea = " + side*side;
    }
    else{
        outputElement.value = "Can't calculate" ;
    }

}


// Group-2:

// Question_1

/**
 * function to solve problem 1 of group-2.
 * It provides answer as output based on user's input
 */
function group_2_choice_1(){
    let inputElement = document.querySelector("#input-g2Q1").value;
    let outputElement = document.querySelector("#output-g2Q1");
    inputElement = inputElement.toLowerCase();
    
    if (inputElement === "a" || inputElement === "e"|| inputElement === "i" || inputElement === "o" || inputElement === "u"){
        outputElement.value = "A Vowel";
    }

    else if (inputElement === "y"){
        outputElement.value = "Sometimes";
    }

    else{
        outputElement.value = "Not a vowel";
    }
}


// Question_3

/**
 * function to solve problem 3 of group-2.
 * It provides answer as output based on user's input
 */
function group_2_choice_3(){
    let inputElement = document.querySelector("#input-g2Q3").value;
    let outputElement = document.querySelector("#output-g2Q3");

    if (inputElement>=0){
        let product = 1;
        for (i=inputElement; i>=1; i--){
            product=product*i;
        }

        outputElement.value = product;
    }
    else{
        outputElement.value = "Cannot compute factorial value";
    }

}


// Group-3:

// Question_1

/**
 * function to solve problem 1 of group-3.
 * It provides answer as output based on user's input
 */
function group_3_choice_1(){
    let inputElement = document.querySelector("#input-g3Q1").value;
    let outputElement = document.querySelector("#output-g3Q1");
    if (inputElement.length<=20 && inputElement.length>=10){
        let sum = 0;
        for(i=0; i<inputElement.length; i++){
            if(inputElement[i] > 1){
                sum = 0;
                break;
            }
            let result = 2**(inputElement.length-i-1)*inputElement[i];
            sum = sum + result;
        }
       outputElement.value = sum; 
    }

    else{
        outputElement.value = 0;
    }
}

