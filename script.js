const displayDiv = document.getElementById("result");
const buttons = document.getElementsByTagName("button");
const eqButt = document.getElementById("equals");
const acBtn = document.getElementById("ac-btn");
const delBtn = document.getElementById("del-btn");


for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", () => {
    displayDiv.innerText += buttons[i].value;
  });

}
eqButt.addEventListener("click", () => {
  const result = eval(displayDiv.textContent);
  displayDiv.innerText = result;

})

acBtn.addEventListener("click", () => {
  displayDiv.innerText = "";
})


delBtn.addEventListener("click", () => {
  displayDiv.textContent = displayDiv.textContent.toString().slice(0,-1);
})