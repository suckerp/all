var inputField1 = document.getElementById("input1");
var inputField2 = document.getElementById("input2");
inputField1.addEventListener("input", function () {
    inputField2.value = inputField1.value;
});
inputField2.addEventListener("input", function () {
    inputField1.value = inputField2.value;
});
