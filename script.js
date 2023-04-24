// navbar //
const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});
///////////////////////////////


"use strict";
      const arrowBtnLeft = document.querySelector(".btn-arrow-left");
      const arrowBtnRight = document.querySelector(".btn-arrow-right");

      const slides = document.querySelectorAll(".slide");
      const dotsContainer = document.querySelector(".dots");

      let curSlide = 0;

      // functions
      const goToSlide = (slide) => {
        slides.forEach((s, i) => {
          s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
      };

      const nextSlide = function () {
        curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const prevSlide = function () {
        curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const createDots = () => {
        slides.forEach((_, i) =>
          dotsContainer.insertAdjacentHTML(
            "beforeend",
            `<button class='dot' data-slide='${i}'></button>`
          )
        );
      };

      const activateDot = (slide) => {
        document
          .querySelectorAll(".dot")
          .forEach((dot) => dot.classList.remove("dot--active"));
        document
          .querySelectorAll(`.dot[data-slide="${slide}"]`)
          .forEach((dot) => dot.classList.add("dot--active"));
      };

      // inital
      const init = () => {
        goToSlide(0);
        createDots();
        activateDot(0);
      };
      init();

      // event listeners
      arrowBtnLeft.addEventListener("click", prevSlide);
      arrowBtnRight.addEventListener("click", nextSlide);

      dotsContainer.addEventListener("click", function (e) {
        // if needed to work only on dots and not on dot container
        if (e.target.classList.contains("dot")) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });


// shop // 
/// slide 01  ///
      /// S 1 ///
    function changeImageSrc1(anything){
        document.querySelector('.img1').src = anything;
    }
      /// S 2 ///
      function changeImageSrc2(anything){
        document.querySelector('.img2').src = anything;
    }
      /// S 3 ///
      function changeImageSrc3(anything){
        document.querySelector('.img3').src = anything;
    }
      /// S 4 ///
      function changeImageSrc4(anything){
        document.querySelector('.img4').src = anything;
    }
      /// S 5 ///
      function changeImageSrc5(anything){
        document.querySelector('.img5').src = anything;
    }
      /// S 6 ///
      function changeImageSrc6(anything){
        document.querySelector('.img6').src = anything;
    }
      /// S 7 ///
      function changeImageSrc7(anything){
        document.querySelector('.img7').src = anything;
    }
      /// S 8 ///
      function changeImageSrc8(anything){
        document.querySelector('.img8').src = anything;
    }
      /// S 9 ///
      function changeImageSrc9(anything){
        document.querySelector('.img9').src = anything;
    }
/// slide 02  ///
      /// S 1 ///
      function changeImageSrc11(anything){
        document.querySelector('.img11').src = anything;
    }
      /// S 2 ///
      function changeImageSrc22(anything){
        document.querySelector('.img22').src = anything;
    }
      /// S 3 ///
      function changeImageSrc33(anything){
        document.querySelector('.img33').src = anything;
    }
      /// S 4 ///
      function changeImageSrc44(anything){
        document.querySelector('.img44').src = anything;
    }
      /// S 5 ///
      function changeImageSrc55(anything){
        document.querySelector('.img55').src = anything;
    }
      /// S 6 ///
      function changeImageSrc66(anything){
        document.querySelector('.img66').src = anything;
    }
      /// S 7 ///
      function changeImageSrc77(anything){
        document.querySelector('.img77').src = anything;
    }
      /// S 8 ///
      function changeImageSrc88(anything){
        document.querySelector('.img88').src = anything;
    }
      /// S 9 ///
      function changeImageSrc99(anything){
        document.querySelector('.img99').src = anything;
    }
/// slide 03  ///
      /// S 1 ///
      function changeImageSrc111(anything){
        document.querySelector('.img111').src = anything;
    }
      /// S 2 ///
      function changeImageSrc222(anything){
        document.querySelector('.img222').src = anything;
    }
      /// S 3 ///
      function changeImageSrc333(anything){
        document.querySelector('.img333').src = anything;
    }
      /// S 4 ///
      function changeImageSrc444(anything){
        document.querySelector('.img444').src = anything;
    }
      /// S 5 ///
      function changeImageSrc555(anything){
        document.querySelector('.img555').src = anything;
    }
      /// S 6 ///
      function changeImageSrc666(anything){
        document.querySelector('.img666').src = anything;
    }
      /// S 7 ///
      function changeImageSrc777(anything){
        document.querySelector('.img777').src = anything;
    }
      /// S 8 ///
      function changeImageSrc888(anything){
        document.querySelector('.img888').src = anything;
    }
      /// S 9 ///
      function changeImageSrc999(anything){
        document.querySelector('.img999').src = anything;
    }
/// slide 03  ///
      /// S 1 ///
      function changeImageSrc1111(anything){
        document.querySelector('.img1111').src = anything;
    }
      /// S 2 ///
      function changeImageSrc2222(anything){
        document.querySelector('.img2222').src = anything;
    }
      /// S 3 ///
      function changeImageSrc3333(anything){
        document.querySelector('.img3333').src = anything;
    }
      /// S 4 ///
      function changeImageSrc4444(anything){
        document.querySelector('.img4444').src = anything;
    }
      /// S 5 ///
      function changeImageSrc5555(anything){
        document.querySelector('.img5555').src = anything;
    }
      /// S 6 ///
      function changeImageSrc6666(anything){
        document.querySelector('.img6666').src = anything;
    }
      /// S 7 ///
      function changeImageSrc7777(anything){
        document.querySelector('.img7777').src = anything;
    }
      /// S 8 ///
      function changeImageSrc8888(anything){
        document.querySelector('.img8888').src = anything;
    }
      /// S 9 ///
      function changeImageSrc9999(anything){
        document.querySelector('.img9999').src = anything;
    }

