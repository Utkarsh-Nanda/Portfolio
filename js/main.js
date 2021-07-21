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

  // sticky navigation menu
  let nav_offset_top = $(".header_area").height() + 100;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
  // smooth scrolling
  $(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 30,
        },
        300
      );
    }
  });
  $(".site-banner .bottom-links a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 30,
        },
        300
      );
    }
  });
});
