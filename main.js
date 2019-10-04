  var span = document.querySelector("span")
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    span.innerText = (form.elements.value.value);
    event.preventDefault();
  });


  // var how = document.getElementById("how")
  // var text = document.getElementById("ipsum1");
  // how.addEventListener("click", function() {
  //   text.style.display = "none";
  //   event.preventDefault();
  //     if (text = "none") {
  //       how.addEventListener("click", function() {
  //       ipsum1.style.display = "block" });
  //     }
  // });

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

  
