function initSlider () {
  const sliderImages = document.querySelectorAll(".image");
  const nextSlide = document.querySelector(".arrow-right");
  const previousSlide = document.querySelector(".arrow-left");
  const sliderDots = document.querySelectorAll(".dot");
  const list = document.querySelectorAll(".listnav");
  const itemCount = sliderImages.length;
  let count = 0;
  
  function showNextItem() {
    sliderImages[count].classList.remove('active');
    sliderDots[count].classList.remove('dot_active')
    list[count].classList.remove('listnav_active')
      if(count < itemCount - 1) {
      count++;
    } else {
      count = 0;
    }
      sliderImages[count].classList.add('active');
      sliderDots[count].classList.add('dot_active')
      list[count].classList.add('listnav_active')
  }
    function showPreviousItem() {
      sliderImages[count].classList.remove('active');
      sliderDots[count].classList.remove('dot_active')
      list[count].classList.remove('listnav_active')
  
    if(count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }
  
    sliderImages[count].classList.add('active');
    sliderDots[count].classList.add('dot_active')
    list[count].classList.add('listnav_active')
  }
  
  
/* sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', ()=>{
    dot.classList.add('dot_active')
    list[index].classList.add('listnav_active')
    sliderImages[index].classList.add('active')
    })
}) */

  nextSlide.addEventListener('click', showNextItem);
  previousSlide.addEventListener('click', showPreviousItem);

}
document.addEventListener("DOMContentLoaded", function() {
  initSlider();
});