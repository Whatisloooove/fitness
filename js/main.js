
$(document).ready(function () {
    $('.partners-block').slick({
    dots: false,
        infinite: true,
        speed: 1800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [{
                breakpoint: 1366,
                settings: {
                slidesToShow: 4
            },
            },
            {
                breakpoint: 992,
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
                breakpoint: 578,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});