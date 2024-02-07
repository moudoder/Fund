$(document).ready(function () {
  $("select").selectize();

  $('.carry-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  });


  $('.rates-slider').slick({
  	variableWidth: true,
  	speed: 3000, // медленная смена слайдов - скорость бегущей строки
    autoplay: true, // устанавливаем автозапуск слайдера
    autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
    cssEase: 'linear', // делаем анимацию однотонной при смене слайда
    pauseOnFocus: false,
    pauseOnHover: false,
  })


  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  $('.open-urgency').on('click', function() {
    $('.modal-urgency').fadeIn()
    return false;
  })
  $('.modal-window__close').on('click', function() {
    $('.modal-urgency').fadeOut()
    return false;
  })
})