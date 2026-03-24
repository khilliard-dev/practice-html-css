const colors = ["#ff7eb9", "#ffb3d9", "#ffcce6", "#ff99cc", "#ff5fa2"];
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * colors.length);
  document.querySelector("header h1").style.color = colors[random];
});