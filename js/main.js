//Change Header Height

$('.header').height($(window).height());

// Count My Textarea Lengths
let count = document.getElementById("count")

let text = document.getElementById("text");

let max_length = text.getAttribute("maxlength")

text.oninput = function () {
    count.innerHTML = max_length - this.value.length;

    if (count.innerHTML == 0) {

        count.style.color = "red";

    } else if (count.innerHTML <= 150) {
        count.style.color = "yellow"
    } else {
        count.style.color = ""
    }
}


// Check Testimonials

var leftArrow = $('.testim .fa-chevron-left'),

    rightArrow = $('.testim .fa-chevron-right');

function checkClients() {

    if ($('.client:first').hasClass('active')) {

        leftArrow.fadeOut();

    } else {

        leftArrow.fadeIn();
    }

    if ($('.client:last').hasClass('active')) {

        rightArrow.fadeOut();

    } else {

        rightArrow.fadeIn();
    }

}

checkClients();

$('.testim i').click(function () {

    if ($(this).hasClass('fa-chevron-right')) {

        $('.testim .active').fadeOut(100, function () {

            $(this).removeClass('active').next('.client').addClass('active').fadeIn();

            checkClients();

        });

    } else {

        $('.testim .active').fadeOut(100, function () {

            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

            checkClients();

        });

    }

});


$(function () {

    // Show Or Hide Menue
    $(".fa-bars").click(function () {

        $("nav").toggleClass("hidemenu")
    })

    // Smoothly Scroll To Elment
    $("nav ul li a").click(function (e) {

        e.preventDefault();
        
        $("nav").toggleClass("hidemenu")

        $(".nav_bar").toggleClass("hidemenu");

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        });

    });


    // Show The Arrow-up If Window scrollY Is >= 700
    $(window).scroll(function () {

        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })

    // Click To Go Down
    $(".fa-chevron-down").click(function () {

        $(window).scrollTop(4000)
    })
})
