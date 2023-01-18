var button = document.querySelector(".show-cat");
//console.log(button);
var cat = document.querySelector(".cat");
//console.log(cat);

//when user clicks on the button, function is triggered
//to show cat image

button.addEventListener("click", function () {
  cat.classList.add("show");
});
