const helloButton = document.getElementById("helloButton");
const themeButton = document.getElementById("themeButton");

// Click Me button
helloButton.addEventListener("click", function () {
  alert("Hello! Thanks for clicking the button 🎉");
});

// Dark mode button
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});