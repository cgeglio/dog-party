window.onload = function() {
  var span = document.querySelector("span")
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    span.innerText = (form.elements.value.value);
    event.preventDefault();
  });
}
