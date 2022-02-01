$(function() {
    // VARS
    let WIW = window.innerWidth;
    let WIH = window.innerHeight;

    let Rocket_Width = 200;
    let Rocket_Height = 369;
    let launchpad_Height = 30;
    let rocket_base_offset = 60;

    var SECTION = $("section")
    var ELM = $(".elm")
    var EARTH_LAYER = $(".earth-layer")
    var PIPE = $(".pipe")
    var LOGO_RES_Y_OFFSET = 100;

    if (WIW < 530) {
        Rocket_Height = 369 / 2;
        Rocket_Width = 200 / 2;
        rocket_base_offset = 30
        LOGO_RES_Y_OFFSET = 50;
    }
    let STARS_COUNT = 100;
    // Set Section Height
    // SECTION.css('height', WIH + "px");
    ELM.css('height', WIH + "px");
    EARTH_LAYER.css('height', (WIH / 2) + "px")
    EARTH_LAYER.css('margin-top', -(WIH / 4) + "px")
    PIPE.css('height', (WIH / 1.5) + "px")
    PIPE.css('margin-top', -(WIH / 1.5) / 2 + "px")

    if (WIW < 480) {
        STARS_COUNT = 25;
        PIPE.css('height', (WIH / 1.5) + "px")
    }

    var STARS_ARRAY = ["star-yellow", "star-grey", "star-whitet"];

    var STARS_SIZE_ARRAY = ["tiny", "small", "medium", "big"];

    for (var i = 0; i < STARS_COUNT; i++) {
        var randomStar = Math.floor(Math.random() * STARS_ARRAY.length);
        var randomStarSize = Math.floor(Math.random() * STARS_SIZE_ARRAY.length);
        var star = '<div class="star ' + STARS_SIZE_ARRAY[randomStarSize] + '" style="z-index: 9;animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * ($(window).height()) + 'px; left: ' + Math.random() * $(window).width() + 'px;"><img src="./assets/sky/' + STARS_ARRAY[randomStar] + '.svg"/></div>';
        $('#space').append(star);
    }

    ////////////////////////////////////////////////////// HORIZONTAL SCROll
    // var controller_h = new ScrollMagic.Controller({vertical: false});
    // var tween_ROCKET_H = new TimelineMax()
    //     .to("#rocket", 0.5, {
    //         // rotation: 40,
    //      })
    // // build scene
    // var scene_h = new ScrollMagic.Scene({duration: "100%"})
    // 				.setTween(tween_ROCKET_H)
    // 				// .setPin("#rocket")
    // 				.addIndicators({name: "rotate_h"}) // add indicators (requires plugin)
    // 				.addTo(controller_h);
    ////////////////////////////////////////////////////// BUBBLES

    for (var b = 0; b < 50; b++) {
        var bubbles = '<div class="bubble" style="z-index: 9;animation: moveBubbles ' + ((Math.random() * 3) + 3) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * $(window).height() + 'px; left: ' + Math.random() * $(window).width() + 'px; transform:scale(' + Math.random() + ')"> </div>';
        $('.bubbles').append(bubbles);
    }

    ////////////////////////////////////////////////////// SCROLL TO SECTION

    let links = gsap.utils.toArray("nav a");

    gsap.utils.toArray("nav a").forEach(function(a) {
        a.addEventListener("click", function(e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
        });
    });

    function setActive(link) {
        links.forEach(el => el.classList.remove("active"));
        link.classList.add("active");
    }

    // $(document).on("click", "a[href^='#']", function(e) {
    //     var id = $(this).attr("href");
    //     if ($(id).length > 0) {
    //         e.preventDefault();

    //         // trigger scroll
    //         gsap.to(window, { duration: 1, scrollTo: id });
    //         // trigger scroll
    //         // controller_ROCKET.scrollTo(id);

    //         // if supported by the browser we can even update the URL.
    //         if (window.history && window.history.pushState) {
    //             history.pushState("", document.title, id);
    //         }
    //     }
    // });

    //////////////////////////////////////////////////////

    var $space_pop_up = $("#space_pop_up")
    var $space_btn = $("#space_btn")
        // SKY BTN
    var $sky_pop_up = $("#sky_pop_up")
    var $sky_btn = $("#sky_btn")
    var $touch_me_not_popup = $("#touch-me-not-popup")
    var $touch_me_not = $("#touch-me-not")
    var $back_btn = $(".back-btn")
        // LAND BTN
    var $land_pop_up = $("#land_pop_up")
    var $land_btn = $("#land_btn")
        //EARTH BTN
    var $earth_pop_up = $("#earth_pop_up")
    var $earth_btn = $("#earth_btn")
        //SEA BTN
    var $sea_pop_up = $("#sea_pop_up")
    var $sea_btn = $("#sea_btn")
    var $touch_me_not_IMG = $("#touch-me-not img");

    var $cloud_text = $(".cloud-text");

    // function over() {
    //     $touch_me_not.addClass("hide-btn");
    //     TweenMax.to($touch_me_not_IMG, 0.5, { x: "0", width: "100%" })
    //     TweenMax.to($cloud_text, 0.5, { autoAlpha: 1, scale: 1, })
    // }

    // function out() {
    //     $touch_me_not.removeClass("hide-btn");
    //     TweenMax.to($touch_me_not_IMG, 0.5, { x: "0", width: "200px" })
    //     TweenMax.to($cloud_text, 0.5, { autoAlpha: 0, scale: 0, })
    // }

    // $back_btn.on("click", function name(params) {
    //     $touch_me_not_popup.addClass("animate__bounceIn");
    //     $touch_me_not_popup.hide();
    //     $('html, body').animate({
    //         scrollTop: $("#space").offset().top
    //     }, 2000);
    // })

    $sky_btn.on("click", function name(params) {
        $("#touch-me-not").removeClass("hide-btn");
        TweenMax.to("#touch-me-not img", 0.5, { width: "200px" })
        TweenMax.to(".cloud-text", 0.5, { autoAlpha: 0, scale: 0, })
        $sky_pop_up.addClass("animate__bounceIn");
        $sky_pop_up.show();
        setTimeout(() => {
            $sky_pop_up.hide();
        }, 4000);
    })


    $($touch_me_not_IMG).hover(over, null);
    $touch_me_not.hover(null, out);
    TweenMax.to($touch_me_not_IMG, 0.5, { x: "0%", width: "200px", })
    TweenMax.to($cloud_text, 0.5, { autoAlpha: 1, scale: 0 })

    function over() {
        $touch_me_not.addClass("hide-btn");
        TweenMax.to($touch_me_not_IMG, 0.5, { x: "0", width: "100%" })
        TweenMax.to($cloud_text, 0.5, { autoAlpha: 1, scale: 1, })
    }

    function out() {
        $touch_me_not.removeClass("hide-btn");
        TweenMax.to($touch_me_not_IMG, 0.5, { x: "0", width: "200px" })
        TweenMax.to($cloud_text, 0.5, { autoAlpha: 0, scale: 0, })
    }
    $(".close-button").click(function() {
        gsap.to(".actual-message", 0.5, {
            marginTop: "10%",
            opacity: 0,
            ease: "ease-in"
        });

        gsap.to(".modal", 0.5, {
            opacity: 0,
            y: "-100%",
        });
    });


    $(".register-btn").click(function() {
        console.log("REG");
        gsap.fromTo(".actual-message", 0.5, {
            marginTop: "10%",
            opacity: 0,
            ease: Back.easeOut,
            delay: 1.5
        }, {
            marginTop: "10%",
            opacity: 1,
            ease: "ease-in"
        });

        gsap.fromTo(".modal", 0.5, {
            opacity: 0,
            y: "-100%",
        }, {
            opacity: 1,
            y: "0%",
        });
    });

});

gsap.utils.toArray("nav a").forEach(function(a) {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
    });
});

// gsap.from(".actual-message", 0.4, {
//     marginTop: "10%",
//     opacity: 0,
//     ease: Back.easeOut,
//     delay: 1.5
// });

// gsap.from(".modal", 0.4, {
//     opacity: 0,
//     delay: 1.2
// });