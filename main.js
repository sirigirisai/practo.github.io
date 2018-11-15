/*******swiper******** */
var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /***carousel cards***/
  var swiper = new Swiper('.articles-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.article-next',
      prevEl: '.article-prev',
    },
    pagination:{
      el:'.swiper-pagination',
      clickable:true,
    },
  });
