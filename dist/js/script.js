
let position = 0;
const slidesToShow = 3;
const slideToScroll = 1;
const container = document.querySelector('.reviews-slider');
const track = document.querySelector('.reviews-slider__track');
const items = document.querySelectorAll('.reviews-slider__slide')
const btnPrev = document.querySelector('.reviews-buttons__prev');
const btnNext = document.querySelector('.reviews-buttons__next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slideToScroll * itemWidth;
let currentItem = 1;
position = 0;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click',() => {
	position -= itemWidth;
	items[currentItem].classList.toggle('small');
	currentItem += 1;
	items[currentItem].classList.toggle('small');
	setPosition();
	checkBtns();
})

btnPrev.addEventListener('click', () => {
	position += itemWidth;
	items[currentItem].classList.toggle('small');
	currentItem -= 1;
	items[currentItem].classList.toggle('small');
	setPosition();
	checkBtns();
})


const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
	btnPrev.disabled = position === itemWidth;
	btnNext.disabled = position === -itemWidth;
	console.log(`position ${position}, ${-itemWidth}` )
}
checkBtns();

// GOOGLE MAPS

function initMap() {
	var coordinates = {lat: 55.748048, lng: 37.626898},
		popupContent = '<div class="content"><div class="content__header">г. Москва</div>ул. Садовническая, дом 5, офис 4-6<br>700 от м. Новокузнецкая<br>Тел: +7 (926) 423 01 00<br>info@glopt.ru</div>',
		markerImage = './img/marker.png',

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.748048, lng: 37.626898},
			zoom: 16
		}),

		marker = new google.maps.Marker({
				position: coordinates,
				map: map,
				icon: markerImage
		}),

		infowindow = new google.maps.InfoWindow({
			content: popupContent,
		});

	infowindow.open(map, marker);
}

// HAMBURGER

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.items-container'),
    menuItem = document.querySelectorAll('.items-container__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('items-container_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('items-container_active');
        })
    })
});

//modal
const modals = document.getElementsByName('modal'),
	  overlay = document.querySelector('.overlay'),
	  modal = document.querySelector('#request'),
	  thanx = document.querySelector('#thanx'),
	  close = document.querySelectorAll('.modal__close'),
	  accept = document.getElementsByName('accept'),
	  modalMini = document.querySelector('.modal_mini');

	  console.log(thanx)

		modals.forEach(button => {
			button.addEventListener('click', function() {
				overlay.classList.toggle('overlay_active');
				modal.classList.toggle('modal_active');
			})
		})

		close.forEach(cross => {
			cross.addEventListener('click', function() {
				overlay.classList.toggle('overlay_active');
				modal.classList.toggle('modal_active');
			})
		})

		accept.addEventListener('click', function() {
			modal.classList.toggle('modal_active');
			modalMini.classList.toggle('modal_mini_active');
		})
		