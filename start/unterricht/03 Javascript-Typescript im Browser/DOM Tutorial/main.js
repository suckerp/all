//###############################################################################################
// Helper
//###############################################################################################
//materialize 
var M;
var list = document.getElementById("liste");
function addItemToList(item) {
    var newListItem = document.createElement("li");
    newListItem.innerHTML = "\n    <div>\n      " + item + "\n      <a href=\"#!\" class=\"secondary-content\">\n        <i class=\"material-icons\">delete</i>\n      </a>\n    </div>\n  ";
    newListItem.className = "collection-item";
    list.appendChild(newListItem);
}
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (x) { return x.json(); })
    .then(function (posts) { return posts.map(function (x) { return x.title; }); })
    .then(function (titles) {
    titles.forEach(function (title) {
        addItemToList(title);
    });
});
