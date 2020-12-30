const pat = document.querySelector("#patient");
const doc = document.querySelector("#doctor");
const reg = document.querySelector("#register");
const btn = document.querySelector("#btn");
const patBtn = document.querySelector("#pat-btn");
const docBtn = document.querySelector("#doc-btn");
const recBtn = document.querySelector("#rec-btn");
const txt = document.querySelector("#top-txt");

docBtn.addEventListener("click", function () {
  txt.innerText = "Login as Doctor";
  patBtn.style.background = "none";
  patBtn.style.color = "black";
  docBtn.style.background = "#6408bc";
  docBtn.style.color = "white";
  recBtn.style.background = "none";
  recBtn.style.color = "black";

  //movement
  pat.style.left = "-50%";
  doc.style.left = "50%";
  reg.style.left = "150%";

  //opacity
  pat.style.opacity = "0";
  doc.style.opacity = "1";
  reg.style.opacity = "0";
});
patBtn.addEventListener("click", function () {
  txt.innerText = "Register as a Patient";
  patBtn.style.background = "#6408bc";
  patBtn.style.color = "white";
  docBtn.style.background = "none";
  docBtn.style.color = "black";
  recBtn.style.background = "none";
  recBtn.style.color = "black";

  pat.style.left = "50%";
  doc.style.left = "150%";

  reg.style.left = "300%";

  //opacity
  pat.style.opacity = "1";
  doc.style.opacity = "0";
  reg.style.opacity = "0";
});
recBtn.addEventListener("click", function () {
  txt.innerText = "Login as an Admin";
  patBtn.style.background = "none";
  patBtn.style.color = "black";
  docBtn.style.background = "none";
  docBtn.style.color = "black";
  recBtn.style.background = "#6408bc";
  recBtn.style.color = "white";

  pat.style.left = "-200%";
  doc.style.left = "-100%";
  reg.style.left = "50%";

  //opacity
  pat.style.opacity = "0";
  doc.style.opacity = "0";
  reg.style.opacity = "1";
});
