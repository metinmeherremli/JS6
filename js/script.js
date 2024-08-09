var clic = document.getElementById("clic")
var paraqraph = document.getElementById("ptag")

var username = prompt("Please enter your name")
var userage = prompt("Please enter your age")
    
function klik() {
    if (userage < 18) {
        paraqraph.innerText = username + " You can not  use our vebsite"
    } else {
        paragraph.innertext = username + " " + 
        "You can use our web site"
    }
}