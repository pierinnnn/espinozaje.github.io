window.onload = function() {
    const btns = document.querySelectorAll(".btn_fondo");
    const slides = document.querySelectorAll(".fondo");
    const slides1 = document.querySelectorAll(".fondoa");
    const btns1 = document.querySelectorAll(".btn_fondoa");
    let currentIndex = 0; 
    let currentIndex1 = 0; 

   
    var sliderNav = function(manual) {
       

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

       
        slides[manual].classList.add("active");
        currentIndex = manual; 


        btns.forEach((slide) => {
            slide.classList.remove("active");
        });

       
        btns[manual].classList.add("active");
        currentIndex = manual; 

    }



    var sliderNav1 = function(manual) {
       

        btns1.forEach((slides1) => {
            slides1.classList.remove("active");
        });

       
        btns1[manual].classList.add("active");
        currentIndex1 = manual; 

        slides1.forEach((slides1) => {
            slides1.classList.remove("active");
        });

       
        slides1[manual].classList.add("active");
        currentIndex1 = manual; 
    }















    
    var nextSlide = function() {
        currentIndex = (currentIndex + 1) % slides.length;
        sliderNav(currentIndex);
    };


    var nextSlide1 = function() {
        currentIndex1 = (currentIndex1 + 1) % slides1.length;
        sliderNav1(currentIndex1);
    };

   
    const interval = setInterval(nextSlide, 2000);
    const interval1 = setInterval(nextSlide1, 2000);
  
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            clearInterval(interval); 
            sliderNav(i); 
        });
    });



    btns1.forEach((btn1, i) => {
        btn1.addEventListener("click", () => {
            clearInterval(interval1); 
            sliderNav1(i); 
        });
    });
};
