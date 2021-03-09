let mainSlider = document.querySelector('.main-slider');
let mainSliderItems = mainSlider.querySelectorAll('.slides .slide');


function switchSlide () {
    // document.querySelector('.main-slider .slide').classList.add('show');
    setTimeout(function () {
			for(let i = 0; i < 3; i++) {
				mainSliderItems[i].classList.add('show');
			}
			document.querySelector('.slides .slide.show').classList.remove('show');


    }, 10000)
}

switchSlide();
