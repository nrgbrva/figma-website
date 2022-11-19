import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
$(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
  });
