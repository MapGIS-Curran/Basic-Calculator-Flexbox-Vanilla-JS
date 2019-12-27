// When you're starting the JavaScript-y parts of a project, it can be hard to know where to start. I like to begin by thinking about what functionality I need, and making a list (this is why I built the UI first, so it's easier to visualise the functionality).

// Here's my list:
// 1) When the user clicks a number or operator button, the display should update with the value of the button.
// 2) When the clear button is clicked, the display should reset/clear.
// 3) When the equals button is clicked, the display should update with the result of the equation that is displayed.


// Update the display when a number or operator button click. Some things that jump out when re-reading that functionality:
// We'll need to get all the buttons and their values from the DOM.
// We'll need to add an event listener to handle the clicks.
// We're updating the display, so we'll need to get the display from the DOM as well.

// Let's start by updating the display when an operator button or number button is clicked. We will handle the clear and equals later.

// Why are the equals and clear buttons code seperate? Can I not get all the buttons at once and add all the event listeners at once?

// The answer is yes, you can do whatever you want as there is no "right" way to write code. However splitting the code out in this way has a few advantages:
// 1) It keeps similar logic together, enforcing good seperation of concerns for our functions.
// 2) If we have to add more buttons & logic, we don't touch existing code.
// 3) It makes the code easier to read & reason about; it's easier to see which buttons do what.

// Get our buttons from the DOM. In this case it's a good idea to assign DOM elements to top level variables, as it makes it easier for us to access these elements without having to repeatedly use document.querySelectorAll() throughout the code. It also helps if the querySelector changed for some reason (e.g from .display to .calculator-input-display), as we only have to change the querySelector in one place. When we use querySelectorAll(), this returns a NodeList (this is basically a list of matching elements, which we can loop over). This means we can loop over our buttons variable and attach an onclick listener.
const buttons = document.querySelectorAll('.btn-number, .btn-operator')

// We need to get the equals button from the DOM. Notice we use querySelector here instead of querySelectorAll as we know there is only one element with this selector. querySelector returns a single element instead of a NodeList which means we don't need to use a loop!
const equalsButton = document.querySelector('.btn-equals')

// It helps if the querySelector changed for some reason (e.g from .display to .calculator-input-display), as we only have to change the querySelector in one place:
const display = document.querySelector('.display')

// Remember, it's good practice to seperate data from presentation whenever possible. So let's create a variable called displayData to hold the data for our display.
let displayData = "";

// We're using the forEach() higher order function to loop over the buttons that were returned from our querySelectorAll() function.
buttons.forEach(button => {

    //for each button, we want to add a "click" event listener
    button.addEventListener('click', () => { 

        // We need to get the value of the clicked button from the data-num attribute we added earlier. When we want to get attributes from DOM elements, we can use the                   getAttribute(name) function.
        const buttonValue = button.getAttribute('data-num');

        // Update our displayData variable with the value of the clicked button
        displayData += buttonValue;

        //output the displayData value to the display element
        display.textContent = displayData;
    })
})

// We'll add an eventListener, and use the eval() function to evaluate the displayData expression. We'll set this evaluated expression to our displayData variable, and update our display:
equalsButton.addEventListener('click', () => { 
    // use the eval() function to evaluate the expression and output it to the display
    displayData=eval(displayData)
    display.textContent = displayData
})

// The last thing we need to do is clear the display when the C button is clicked. Just like before, we will get the clear button from the DOM. 
const clearButton = document.querySelector('.btn-clear')
// Add our eventListener:
clearButton.addEventListener('click', () => {
  // Here, we are resetting our displayData variable to empty string, which effectively clears the display. Finally, we're updating our display in the usual way.
  displayData = "";
  display.textContent = displayData;
})
