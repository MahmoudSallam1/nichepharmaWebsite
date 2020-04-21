// ================================functionality of slideshow========================================
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// ================================functionality of slideshow========================================
// ========================adding contact form backend===============================
function getInputValue() {
  // Selecting the input element and get its value 
  var nameInput = document.getElementById("name").value;
  var mailInput = document.getElementById("email").value;
  var messageInput = document.getElementById("message").value;
  //details
  var settings = {
    "async": true,
    "crossDomain": false,
    "url": "https://nichepharma.com/email-senders/nichepharma.php?fromEmail=" + mailInput + "&name=" + nameInput + "&body=" + messageInput + "&subject=TEST",
    "method": "GET",
    "headers": {
      "User-Agent": "PostmanRuntime/7.17.1",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "cab2de23-6db1-48ed-be77-a918661ed54e,83701098-539d-4362-ba9a-dd6f67bb00c2",
      "Host": "nichepharma.com",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  alert('Your Message Has Been Successfuly Sent , We Will Contact You As Soon As Possible!');
}
const button = document.querySelector('#sendRequest');
button.addEventListener('click', getInputValue);
// ========================end of adding contact form backend===============================
$(document).ready(function () {
  $('#headerVideoLink').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});

typeWriter(".typo-animation","true",100);

// collapsing navvbar on mobile
$(document).on('click','.navbar-collapse.show',function(e) {
  $(this).collapse('hide');
});

