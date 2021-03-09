let mainSlider = document.querySelector('.main-slider');
let mainSliderItems = mainSlider.querySelectorAll('.slides .slide');
// let mainSliderBubbles = mainSlider.querySelectorAll('.bubles div');
// let cont = doc.querySelector('.main-slider .bubles .selected').dataset.num;
let i = 0;
// for (let bubble of mainSliderBubbles) {
//     bubble.addEventListener('click', function () {
//         switchSlide(this.dataset.num);
//         i = this.dataset.num -1 ;
//     });
// }

// let interval = mainSliderBubbles.length * 2400;
// setInterval (function () {
//     i++;
//     switchSlide(mainSliderBubbles[i].dataset.num);
//     if (i == mainSliderBubbles.length - 1) {
//         i = -1;
//     }
// }, interval);

function switchSlide (num) {
    document.querySelector('.main-slider .slide').classList.add('show');
    setTimeout(function () {
				document.querySelector('.slides .slide.show').classList.remove('show');
        // mainSlider.querySelector('.bubles .selected').classList.remove('selected');
        mainSliderItems[num].classList.add('show');
        // mainSliderBubbles[num].classList.add('selected');
    }, 10000)
    setTimeout(function () {
        document.querySelector('.main-slider .slides').classList.remove('show');
    }, 2400)
}

switchSlide();
