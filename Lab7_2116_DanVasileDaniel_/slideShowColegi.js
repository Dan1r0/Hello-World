varslideIndex =0;
showSlidesColegi();
  
  function showSlidesColegi() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
   for(i = 0; i< slides.length; 1++) {
       slides[i].style.display = "none";
   }

   slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
     slides[slideIndex - 1].style.dysplay = "block";
     setTimeout(showsSlidesColegi, 3000); // Change image every 3 seconds
  }
