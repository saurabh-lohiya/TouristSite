const slides = $('.slide');

const prev = $('#prev');

const next = $('#next');
const auto = false;
const intervalTime = 100;
let slideInterval;

var lCount = 1;
const nextSlide = () => {
	const current = $('.current');
	var lFirstSlide = $('.slide:first');
	current.removeClass('current');
	if (lCount != slides.length) {
		current.next().addClass('current');
		lCount++;
	} else{
		lFirstSlide.addClass('current');
		lCount = 1;
	}
	// setTimeout(() => current.removeClass('current'));
};

const previousSlide = () => {
	const current = $('.current');
	current.removeClass('current');
	if (lCount!= 1) {
		current.prev().addClass('current');
		lCount--;
	} else{
		$('.slide:nth-child(6)').addClass('current');
		lCount = 6;
	}
	// setTimeout(() => current.removeClass('current'));
};

next.on('click', e =>{
	nextSlide();

});

prev.on('click', e =>{
	previousSlide();
})


// next.on('click', e => {
//   nextSlide();
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// prev.on('click', e => {
//   prevSlide();
//   if (auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
// });

// // Auto slide
// if (auto) {
//   // Run next slide at interval time
//   slideInterval = setInterval(nextSlide, intervalTime);
// }

















// let colItem = $('.collection-item');

// let prev = $('#prev');

// let next = $('#next');

// let active = $('.active')
// // colItem.addClass('active');

// prev.bind('click', getPrevImg);

// next.bind('click', getNextImg);

// function getPrevImg(argument) {
// 	active = active.prev();
// 	// active.nextSibling.classList.remove('active');
// }

// function getNextImg(argument) {

// 	active = active.next();
// 	// active.previousSibling.classList.remove('active');
// }