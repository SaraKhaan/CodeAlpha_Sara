function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the clicked button value to the display
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch (error) {
        display.value = 'Error'; // Show error if evaluation fails
        setTimeout(clearDisplay, 1500); // Clear after a short delay
    }
}