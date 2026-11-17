document.addEventListener('DOMContentLoaded', function(){
$('.main-slider').slick({
    dots: true,          
    arrows: false,     
    infinite: true,
    speed: 600,
    vertical: true,
    verticalSwiping: true,
    autoplay: false,    
    pauseOnHover: false
    });

$('.slider').slick({
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false
    });

$('.category-slider').slick({
        slidesToShow: 6,   
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: true,       
        dots: false,    
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
         
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
$('.feature-slider').slick({
    slidesToShow: 4,   
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: true,       
    dots: false,    
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.trending-items').slick({
    slidesToShow: 3,   
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: true,       
    dots: false,    
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.review').slick({
    slidesToShow: 1.5,   
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: true,       
    dots: false,    
    autoplay: true,
    autoplaySpeed:2000,
    prevArrow: '.prev',
    nextArrow: '.next',
     responsive: [
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1
            }
        }
    ]
   
});
});



new WOW().init()

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
});

const dropdown = document.querySelector('.category-dropdown');
const showMore = dropdown.querySelector('.show-more');
const showMoreIcon = showMore.querySelector('i');
const showMoreText = showMore.querySelector('span');

showMore.addEventListener('click', (e) => {
    e.preventDefault();

    const isOpen = dropdown.classList.toggle('open');

    showMoreIcon.classList.toggle('fa-circle-plus', !isOpen);
    showMoreIcon.classList.toggle('fa-circle-minus', isOpen);

    showMoreText.textContent = isOpen ? 'Show less...' : 'Show more...';
});


const topNav = document.querySelector('nav .topNav');
const downNav = document.querySelector('nav .downNav');

window.addEventListener('scroll', () => {
    const stick = window.scrollY > topNav.offsetHeight;

    downNav.classList.toggle('sticky', stick);
});


const searchBox = document.querySelector('.search-box');
const searchCategory = searchBox.querySelector('.category');
const searchItems = searchBox.querySelectorAll('.search-dropdown li');
const categoryLabel = searchCategory.querySelector('span');

searchCategory.addEventListener('click', (e) => {
    e.stopPropagation();
    searchBox.classList.toggle('open');
});

searchItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();

        searchItems.forEach((li) => li.classList.remove('active'));
        item.classList.add('active');

        categoryLabel.textContent = item.textContent;
        searchBox.classList.remove('open');
    });
});

document.addEventListener('click', () => {
    searchBox.classList.remove('open');
});




