var counter = 0;
var maxBackspaces = 10;
var inputBox = document.getElementById("input-box");

inputBox.addEventListener("keydown", function(event) {
  if (event.key === "Backspace" || event.key === "Delete") {
    if (counter >= maxBackspaces) {
      event.preventDefault(); // Prevent backspace or delete action
      inputBox.innerHTML = ""; // Clear the input box
      counter = 0; // Reset the counter
    } else {
      counter++;
    }
  }
});

function executeMode(checked, mode) {
  if (mode === 'easy') {
    if (checked) {
      inputBox.removeEventListener("keydown", handleHardMode);
    } else {
      inputBox.addEventListener("keydown", handleHardMode);
    }
  } else if (mode === 'hard') {
    if (checked) {
      inputBox.addEventListener("keydown", handleHardMode);
    } else {
      inputBox.removeEventListener("keydown", handleHardMode);
    }
  }
}

function handleHardMode(event) {
  if (event.key === "Backspace" || event.key === "Delete") {
    if (counter >= maxBackspaces) {
      event.preventDefault(); // Prevent backspace or delete action
      inputBox.innerHTML = ""; // Clear the input box
      counter = 0; // Reset the counter
    } else {
      counter++;
    }
  }
}
