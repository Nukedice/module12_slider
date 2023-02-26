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
  
  
sliderDots.forEach((dot, index) => {  
  dot.addEventListener('click', ()=>{
    document.querySelector('.dot_active').classList.remove('dot_active')
    document.querySelector('.listnav_active').classList.remove('listnav_active')
    document.querySelector('.active').classList.remove('active')
    dot.classList.add('dot_active')
    list[index].classList.add('listnav_active')
    sliderImages[index].classList.add('active')
    })
})
list.forEach((title, index) => {
  title.addEventListener('click', ()=>{
    document.querySelector('.dot_active').classList.remove('dot_active')
    document.querySelector('.listnav_active').classList.remove('listnav_active')
    document.querySelector('.active').classList.remove('active')
    title.classList.add('listnav_active')
    sliderDots[index].classList.add('dot_active')
    sliderImages[index].classList.add('active')
    })
})

  nextSlide.addEventListener('click', showNextItem);
  previousSlide.addEventListener('click', showPreviousItem);
  /* setInterval(showNextItem, 3000) */
}
document.addEventListener("DOMContentLoaded", function() {
  initSlider();
}); 

  
