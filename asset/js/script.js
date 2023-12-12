var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var ico = this.lastChild;
    //console.log(ico.getAttribute("src"))
    if(ico.getAttribute("src") === "asset/icon/plus-solid.svg"){
      ico.setAttribute("src", "asset/icon/minus-solid.svg")
    }else{
      ico.setAttribute("src", "asset/icon/plus-solid.svg")
    }
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}