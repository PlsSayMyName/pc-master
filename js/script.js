const mainSlider = document.querySelector('.main-slider');
const mainSliderItems = mainSlider.querySelectorAll('.slides .slide');

const backToTopButton = document.querySelector('.up');

const checkInput = document.querySelector('input[name="option"]');
const disableBtn = document.querySelector('.form .form-group .form-button');

const readMoreBtn = document.querySelector('.read-more');
let hiddenText = document.querySelectorAll('.hidden-text');

// Reviews slider
function getProductSlider() {
    if (document.querySelectorAll('.product-slider')) {
        let productSliders = document.querySelectorAll('.product-slider');
        for (let slider of productSliders) {
            let slideCount = 0;
            let place = slider.querySelector('.reviews-slides');
            let itemSliderItems = place.querySelectorAll('.reviews-slide');
            let arrowL = slider.querySelectorAll('.reviews-slide-arrow-left');
            let arrowR = slider.querySelectorAll('.reviews-slide-arrow-right');

            const arrowLeft = [].forEach.call(arrowL, function(el){
                el.addEventListener('click', function() {
                    productSlideLeft();
                });
            });

            const arrowRight = [].forEach.call(arrowR, function(el){
                el.addEventListener('click', function() {
                    productSlideRight();
                });
            });

            slider.addEventListener('touchmove', function(e) {
                handleTouchMove(e, productSlideRight, productSlideLeft);
            });
            function productSlideLeft() {
                if (!place.dataset.p) {
                    place.dataset.p = 0;
                }
                let itemsWidth = 0;
                let nowLeft = 0;
                if (place.style.left) {
                    nowLeft = Math.abs(place.style.left.replace(/\D/g, ''));
                }
                let nextSlide = 0;
                for (let item of itemSliderItems) {
                    itemsWidth += Math.round(item.offsetWidth + Number(place.dataset.p));
                    if (itemsWidth < nowLeft) {
                        nextSlide = itemsWidth;
                    };
                }
                let left = nextSlide;
                if (left < 0) {
                    left = 0;
                } else {
                    slideCount--;
                }
                place.style.left = '-' + left + 'px';
								console.log('LEFT!');
            };
            function productSlideRight() {
								let placeWidth = place.offsetWidth;
                if (!place.dataset.p) {
                    place.dataset.p = 5;
                }
                let itemsWidth = 0;
                let nowLeft = 0;
                if (place.style.left) {
                    nowLeft = Math.abs(place.style.left.replace(/\D/g, ''));
                }
                let nextSlide = 0;
                for (let item of itemSliderItems) {
                    itemsWidth += Math.round(item.offsetWidth + Number(place.dataset.p));
                    if (nextSlide === 0 && itemsWidth > nowLeft) {
                        nextSlide = itemsWidth;
                    };
                }
                let left = nextSlide;
                if (left > itemsWidth - placeWidth) {
                    left = itemsWidth - placeWidth;
                }
                place.style.left = '-' + left + 'px';
								console.log('RIGHT!');

            };
        }

    }
}
getProductSlider();


// Back to top arrow
function animateToTop(e) {
    e.preventDefault();
    let scrollToTop = window.setInterval(function() {
        let pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 100 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 16);
}

// disabled form button unless checked
checkInput.addEventListener('change', () => {
    if (checkInput.checked) {
        disableBtn.removeAttribute('disabled');
    } else {
        disableBtn.setAttribute('disabled', 'true');
    }
});

// Readmore
readMoreBtn.addEventListener('click', () => {
    for(item of hiddenText) {
        item.style.display = 'flex';
    }
})


// Modal windows
let customer = document.querySelectorAll('.popup-1');
for (let item of customer) {
    item.addEventListener('click', function () {
        document.querySelector('#customer').style.display = 'flex';
    });
}

let closeWin = document.querySelectorAll('.window-background');
for (let item of closeWin) {
    item.onclick = function () {
        if (item.querySelector('.window-close:hover') || !item.querySelector('div:hover') || item.querySelector('.window-body button:hover')) {
            item.style.display = 'none';
        }
    }
};

let reviews = document.querySelectorAll('.reviews .reviews-slider .reviews-slide');
for (let item of reviews) {
    item.querySelector('button').addEventListener('click', function () {
        document.querySelector('#zoom').style.display = 'flex';
    });
}
