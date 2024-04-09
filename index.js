// Get the display element
var display = document.getElementById("display");

// Function to append text to the display
function appendToDisplay(value) {
    // Append the given value to the existing value in the display
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    // Clear the display by setting its value to an empty string
    display.value = "";
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the expression in the display using JavaScript's eval function
        var result = eval(display.value);

        // Check if the result is NaN (Not a Number) or infinite
        if (isNaN(result) || !isFinite(result)) {
            // If the result is NaN or infinite, display "Error" in the display
            display.value = "Error";
        } else {
            // If the result is valid, display the result in the display
            display.value = result;
        }
    } catch (error) {
        // If an error occurs during evaluation (e.g., syntax error), display "Error" in the display
        display.value = "Error";
    }
}
