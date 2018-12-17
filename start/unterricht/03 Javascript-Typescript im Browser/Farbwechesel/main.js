var button = document.getElementById("button");
button.style.backgroundColor = "red";
button.addEventListener("click", function () {
    if (button.style.backgroundColor === "red") {
        button.style.backgroundColor = "blue";
    }
    else {
        button.style.backgroundColor = "red";
    }
});
