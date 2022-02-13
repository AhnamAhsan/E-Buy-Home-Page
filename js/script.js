$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('#backToTop').fadeIn(1000)
    } else {
      $('#backToTop').fadeOut(1000)
    }
  })

  $('#backToTop').on('click', function () {
    $('html,body').animate({
      scrollTop:0,
    },1000)
  })
   $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
  })
  $("a").on("click", function (event) {
    event.preventDefault();
    if (this.hash !== "") {
      var hash = this.hash;

      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000
      );
    }
  });
})