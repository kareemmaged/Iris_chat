$(document).ready(function () {
  var text = "Interior Design";
  var index = 0;
  var speed = 90; // typing speed in milliseconds

  function typeWriter() {
    if (index < text.length) {
      $(".txt").append(text.charAt(index));
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

// $(document).scroll(function () {
//   if ($(this).scrollTop() > 150) {
//     $(".arw_bs").fadeIn(100);
//   } else {
//     $(".arw_bs").fadeOut(100);
//   }
// });


