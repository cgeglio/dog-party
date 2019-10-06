  var span = document.querySelector("span")
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    span.innerText = (form.elements.value.value);
    event.preventDefault();
  });

  how.addEventListener("click", function() {
    event.preventDefault();
    var how = document.getElementById("how")
    var text = document.getElementById("ipsum1");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });

  what.addEventListener("click", function() {
    event.preventDefault();
    var what = document.getElementById("what")
    var text = document.getElementById("ipsum2");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });

  facts.addEventListener("click", function() {
    event.preventDefault();
    var facts = document.getElementById("facts")
    var text = document.getElementById("ipsum3");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });


var selection = document.getElementById("selection");
var changeTextButton = document.querySelector(".change-filler");
var takeText = document.querySelector("textarea");
var ipsum1 = document.getElementById("ipsum1");
var ipsum2 = document.getElementById("ipsum2");
var ipsum3 = document.getElementById("ipsum3");


changeTextButton.addEventListener('click', function () {
      event.preventDefault();
      if (selection.value === "ipsum1") {
        ipsum1.innerText = takeText.value;
      }
      if (selection.value === "ipsum2") {
        ipsum2.innerText = takeText.value;
      }
      if (selection.value === "ipsum3") {
        ipsum3.innerText = takeText.value;
      }
    });
