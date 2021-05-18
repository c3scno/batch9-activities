//switch view mode
document.getElementById("mode-toggle").addEventListener("click", function() {
    this.classList.toggle("click");
    document.documentElement.classList.toggle("dark-mode");
})
//switch time mode
document.getElementById("time-toggle").addEventListener("click", function() {
    this.classList.toggle("click");
    document.getElementById("time12").classList.toggle("none");
    document.getElementById("time").classList.toggle("none");
})

//enables 'enter' key to unfocus name & focus
document.getElementById("name").addEventListener("keydown", function(event) {
    if (event.which === 13) {
        this.blur();
    }
})

document.getElementById("focus").addEventListener("keydown", function(event) {
    if (event.which === 13) {
        this.blur();
    }
})

//disables reload on enter
$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  })