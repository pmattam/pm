// $('.code').slideUp();
let text = ["FULL STACK SOFTWARE ENGINEER", "NICE TO MEET YOU :)", "PRATHYUSHA MATTAM"];
let counter = 0;
// var elem = document.querySelector('#change-text');
let $changeText = $('.change-text');
//var inst = setInterval(change, 1000);

let change = () => {
    $changeText.fadeIn('slow');
    $changeText.text(text[counter]);
    //elem.textContent = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
};

setInterval(change, 2000);


// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the header
var header = document.querySelector(".header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//For Hamburger Menu

//show and hide display menu
$('.hamburger-menu').click(function() {
    $('.hamburger-display').toggle();
});

// Transition to different parts of page
$(".home_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#image-div").offset().top
    }, 1500);
    $('.hamburger-display').toggle();
});
$(".contact_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-id").offset().top
    }, 1500);
    $('.hamburger-display').toggle();
});

$(".profile_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top
    }, 1500);
    $('.hamburger-display').toggle();
});

$(".portfolio_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-id").offset().top
    }, 1500);
    $('.hamburger-display').toggle();

});

$(".skills_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-id").offset().top
    }, 1500);
    $('.hamburger-display').toggle();

});
$("#ximg").click(function() {
    $('.hamburger-display').toggle();
});

//For projects

$('.one').hover(function() {
    $('.one').addClass('animated pulse');
}, function() {
    $('.one').removeClass('animated pulse');
});

$('.two').hover(function() {
    $('.two').addClass('animated pulse');
}, function() {
    $('.two').removeClass('animated pulse');
});

$('.two-s').hover(function() {
    $('.two-s').addClass('animated pulse');
}, function() {
    $('.two-s').removeClass('animated pulse');
});

$('.one .repo-demo .demo-btn').click(function() {
    $('.two-demo-code').slideUp();
    $('.one-demo-code').slideToggle();
});

$('.two .repo-demo .demo-btn').click(function() {
    $('.one-demo-code').slideUp();
    $('.two-demo-code').slideToggle();
});

$('.two-s .repo-demo-s .demo-btn-s').click(function() {
    $('.one-demo-code').slideUp();
    $('.two-demo-code').slideToggle();
});

$('.code .hide-button').click(function() {
    $('.code').slideUp();
});

//For Contact Icons

$('.bt1').hover(function() {
    $('.bt1').addClass('animated pulse');
}, function() {
    $('.bt1').removeClass('animated pulse');
});

$('.bt2').hover(function() {
    $('.bt2').addClass('animated pulse');
}, function() {
    $('.bt2').removeClass('animated pulse');
});

$('.bt3').hover(function() {
    $('.bt3').addClass('animated pulse');
}, function() {
    $('.bt3').removeClass('animated pulse');
});

$('.bt4').hover(function() {
    $('.bt4').addClass('animated pulse');
}, function() {
    $('.bt4').removeClass('animated pulse');
});

$('.bt5').hover(function() {
    $('.bt5').addClass('animated pulse');
}, function() {
    $('.bt5').removeClass('animated pulse');
});