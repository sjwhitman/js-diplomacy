'use strict';

/*
Q: When someone clicks the button with the class “color-changer”,
all elements with the class “color-change” should turn red
(you can do this by adding the class “red” to them).


*/
function onClick() {
    const elementsToChange = document.querySelectorAll(".color-change");
    for (const element of elementsToChange) {
        element.classList.add("red");
    };
    
}

function onClick2() {
    console.log('waluigi')
}


/**
 * - I need to intercept the submit event (how?)
 *   - I need to intercent the right event, which is
 *     oninput
 * - I need to prevent default behavior
 * - I need to read the input value (how?)
 * - I need to parse the input value (how?)
 * - if input is not a number or >= 10
 *   - change text element with ID formFeedback to
 *     Please enter a smaller number
 * - else
 *   - change text element with ID formFeedback to
 *     You are good to go!   
 */
function onInput(e) {

    e.preventDefault();
    const userInput = e.target.elements.number.value;
    const parsedUserInput = Number(userInput);

    //console.log(typeof userInput);
    if(userInput !== '' && !Number.isNaN(parsedUserInput) && parsedUserInput < 10){
        //console.log("If statement accessed")
        document.querySelector("#formFeedback").innerHTML = "You are good to go!"
    }
    else{
        //console.log("else statement");
        document.querySelector("#formFeedback").innerHTML = "Please enter a smaller number"
    }
    return false;
}

/**
 * When someone submits the form, prevent its default behavior
 * (it should not redirect to a new page). Instead, validate
 * the input in the text input with ID “number-input”. If it
 * is not a number or greater than or equal to 10, change the
 * text of the element with ID “formFeedback” to say
 * ‘Please enter a smaller number’. Otherwise, change the text
 *  of that element to say “You are good to go!.”
 */

