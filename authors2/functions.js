var modal = document.getElementById('authors_modal1');
var btn = document.getElementById('authors_closeBtn');
var span = document.getElementsByClassName("authors_close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

