var counter = 0;
var maxBackspaces = 10;
var inputBox = document.getElementById("input-box");
var hardModeEnabled = false;

inputBox.addEventListener("keydown", function(event) {
  if (hardModeEnabled && (event.key === "Backspace" || event.key === "Delete")) {
    if (counter >= maxBackspaces) {
      event.preventDefault(); // Prevent backspace or delete action
      inputBox.innerHTML = ""; // Clear the input box
      counter = 0; // Reset the counter
    } else {
      counter++;
    }
  }
});

function executeMode(mode) {
  if (mode === 'easy') {
    hardModeEnabled = false;
  } else if (mode === 'hard') {
    hardModeEnabled = true;
  }
}
