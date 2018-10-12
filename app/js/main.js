

$(window).on('scroll', function () {
    stickyNavigation();
});

// permet de fixer ou détacher le menu de droite.
function stickyNavigation() {
    var lnStickyNavigation = $('.scroll-down').offset().top + 20;
    if ($(window).scrollTop() > lnStickyNavigation) {
        $('body').addClass('fixed');
    } else {
        $('body').removeClass('fixed');
    }
}


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    // Position dans l'ecan
    var scrollPos = $(document).scrollTop();
    // Taille de la fenetre
    var heightWindow = $(window).height();
    // Taille de la page
    var heightPage = $(document).height();

    // show navigation classique = si ancre dépassé 
    $('#navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
    });

    // show navigation fin = si on touche le bas de la page
    if (scrollPos + heightWindow == heightPage) {
        $('#navigation a').removeClass("active");
        $('#navigation a').last().addClass("active");
    }

}