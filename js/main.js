function openNav() {
  document.getElementById("Navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("Navigation").style.width = "0%";
}

document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});