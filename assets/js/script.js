$(document).ready(function() {
    //trending
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.single-item').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    });

    //scroll menu link======
    //Scroll

    $(document).on('click', '[toscroll]', function (e) {
        e.preventDefault();
        $(".navbar-nav>li").removeClass("active");
        $(this).parent().addClass("active");
        var link = $(this).attr('toscroll');
        if ($(link).length > 0) {
            var posi = $(link).offset().top -50;
            $('body,html').animate({ scrollTop: posi }, 1000);
        }
    });

    //Menu Top

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 900) {
            $('.menu-bar').addClass('mz-menufix');
        } else {
            $('.menu-bar').removeClass('mz-menufix');
        }
    });




    $(window).scroll(function() {
        if ($(this).scrollTop() > 340) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
