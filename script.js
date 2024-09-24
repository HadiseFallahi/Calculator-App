const inputField = document.getElementById("input");
const resultField = document.getElementById("result");

function appendToResult(value) {
  inputField.value += value;
}

function clearResult() {
  inputField.value = "";
  resultField.value = "";
}

function calculateResult() {
  const result = eval(inputField.value);
  resultField.value = result;
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
