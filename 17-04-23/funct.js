var button = document.querySelector(".button");
var container = document.querySelector(".container");
var crossButton = document.querySelector(".crossButton")

button.addEventListener("click", function() {
  toggleButton(true)
})

function toggleButton(toggle) {
  container.style.display = toggle ? 'flex' : "none"
}




crossButton.addEventListener("click", function() {
  toggleButton(false)
})