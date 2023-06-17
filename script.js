document.getElementById("input-box").addEventListener("keydown", function(event) {
  if (event.keyCode === 8 || event.keyCode === 46) {
    event.preventDefault();
  }
});
