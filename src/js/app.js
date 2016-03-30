/* particlesJS.load(@dom-id, @path-json*/
var flag = true;
particlesJS.load('stu-particles', '../js/data/particles.json', hideLoading);

function hideLoading() {
    $('.loading').addClass('hidden');
};
// Trianglify create
var pattern = Trianglify({
    width: window.innerWidth,
    height: 500
});
// Backgrout trianglify
$('.stu-trianglify').append(pattern.canvas());
// Declare angularjs
angular.module('startupbyme', ['ngMessages']);
// Document ready
$(document).ready(function() {
    $('.technologies-image').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [{
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});
