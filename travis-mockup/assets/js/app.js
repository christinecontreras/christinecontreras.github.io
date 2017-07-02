// menu open
$(document).ready( function() {
  var preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $('.loader-container');
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
})

$('.js-toggle').click(function() {
    $(this).toggleClass('active');
    $('.js-overlay').toggleClass('open');
});

//nav button color change
$(document).scroll(function() {
    var navHeight = $('.menu').height() * 2,
        scroll_start = $(this).scrollTop(),
        scroll_width = $(window).width() > 768;
    if (scroll_start > navHeight) {
        $('.menu').addClass('menu-body');
        $('.menu').removeClass('menu-head');
        $( "img.brand__img" ).replaceWith('<img class="brand__img" src="assets/images/travis-logo-black.png" alt="Travis M | The M.Is.Understood logo" title="Travis M. logo">');
    } else {
        $('.menu').removeClass('menu-body');
        $('.menu').addClass('menu-head');
        $('img.brand__img').replaceWith('<img class="brand__img" src="assets/images/travis-logo.png" alt="Travis M | The M.Is.Understood logo" title="Travis M. logo">');
    }
    if (scroll_start > navHeight && scroll_width) {
      $('.menu__row li a').addClass('nav-body');
      $('.menu__row li a').removeClass('nav-head');
    } else {
      $('.menu__row li a').removeClass('nav-body');
      $('.menu__row li a').addClass('nav-head');
    }
});

$(function() {

  var $window = $(window),
  win_height_padded = $window.height() * 1.1;

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".reveal-scroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".reveal-scroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fade-up fade-down fade-right fade-left fade')
      }
    });
  }

  revealOnScroll();
});


//contact form inputs
function formBlur(id) {
    $(id).blur(function() {
        if ($(this).val() == '') {
            $(id).addClass("js-contact");
        }
    });
}

function formFocus(id) {
    $(id).focus(function() {
        $(id).removeClass('js-contact');
    });
}

var num = ['#contact-name', '#contact-email', '#contact-message'],
    length = num.length;
for (var i = 0; i < length; i++) {
    formFocus(num[i]);
    formBlur(num[i]);
}

//modal
$('.js-modal').click(function() {
  var modal = $(this).data('modal');
  $(modal).fadeIn('fast');
  $('.container').addClass('modal-open');
});

$('.button--close').click( function() {
  $(this).parents('#modal__subscribe').fadeOut('fast');
  $('.container').removeClass('modal-open');
});

//subscribe inputs
function subscribeBlur(id) {
    $(id).blur(function() {
        if ($(this).val() == '') {
            $(id).closest( '.modal__group' ).addClass('js-visible');
        }
    });
}

function subscribeFocus(id) {
    $(id).focus(function() {
        $(id).closest( '.modal__group' ).removeClass('js-visible');
    });
}

var num = ['#subscriber-name', '#subscriber-email', '#sidebar-name', '#sidebar-email'],
    length = num.length;
for (var i = 0; i < length; i++) {
    subscribeBlur(num[i]);
    subscribeFocus(num[i]);
}
