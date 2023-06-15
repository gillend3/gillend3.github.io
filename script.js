function executeEasyMode() {
  document.getElementById("input-box").addEventListener("keydown", function(event) {
  if (event.keyCode === 8 || event.keyCode === 46) {
    event.preventDefault();
  console.log("Easy Mode Executed");
  }
  });
}

function executedHardMode() {
  var counter = 0;
  var maxBackspaces = 10;
  var inputBox = document.getElementById("input-box");

  inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Backspace" || event.key = "Delete") {
      counter++;
      if (counter >= maxBackspaces) {
        inputBox.innerHTML = "";
        counter = 0;
      }
    }
  });
}
