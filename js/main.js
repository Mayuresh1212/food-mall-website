$(document).ready(function(){
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });


    $('.nav-trigger').click(function(){
        $('.site-content-wrap').toggleClass('scaled');
    });
});

// $(window).on('scroll', function(){
//     if($(window).scrollTop()){
//         $("nav").addClass('sricky');
//     }
//     else{
//         $("nav").removeClass('sricky');
//     }
// });

// // window.addEventListener('scroll', function(){
// //     const navbar = document.querySelector('.navbar');
// //     navbar.classList.toggle("sticky", window.scrollY > 0);
// // });



// // ----------------CounterUp-------------


// // ----------------smooth scroll-------------
// // All animations will take exactly 500ms
// var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 1000,
// 	speedAsDuration: true
// })