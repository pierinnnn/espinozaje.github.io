window.onload = function() {
    const btns = document.querySelectorAll(".btn_fondo");
    const slides = document.querySelectorAll(".fondo");
    let currentIndex = 0; 

   
    var sliderNav = function(manual) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        currentIndex = manual; 
    }

    
    var nextSlide = function() {
        currentIndex = (currentIndex + 1) % slides.length;
        sliderNav(currentIndex);
    };

   
    const interval = setInterval(nextSlide, 2000);

  
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            clearInterval(interval); 
            sliderNav(i); 
        });
    });
};
