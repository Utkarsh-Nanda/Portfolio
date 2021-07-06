// $(document).ready(function () {
//   $(".site-main .project-area .owl-carousel").owlCarousel({
//     loop: true,
//     autoplay: true,
//     dots: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       544: {
//         items: 2,
//       },
//     },
//   });
// });

$(document).ready(function () {
  $(".carousel .owl-carousel").owlCarousel({
    loop: true,
    // autoWidth: true,
    autoplay: true,
    dots: true,
    // margin: 10,
    // responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        // nav: true,
      },
    },
  });
});
