$(function() {
    // VARS
    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    console.log("WW", WIW);
    console.log("WH", WIH);

    console.log("VW", verge.viewportW());
    console.log("VH", verge.viewportH());
    // let WIW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    // let WIH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    let Rocket_Width = 150;
    let Rocket_Height = 290;
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
    SECTION.css('height', WIH + "px");
    ELM.css('height', WIH + "px");
    EARTH_LAYER.css('height', (WIH / 2) + "px")
    EARTH_LAYER.css('margin-top', -(WIH / 4) + "px")
    PIPE.css('height', (WIH / 1.5) + "px")
    PIPE.css('margin-top', -(WIH / 1.5) / 2 + "px")

    $('.space-bg-img').css('height', WIH + "px")
    if (WIW < 480) {
        STARS_COUNT = 25;
        PIPE.css('height', (WIH / 1.5) + "px")
    }

    var isMob = false;
    if (WIW < 480) {
        STARS_COUNT = 25;
        PIPE.css('height', (WIH / 1.5) + "px")
        isMob = true;
    }

    var STARS_ARRAY = ["star-yellow", "star-grey", "star-whitet"];

    var STARS_SIZE_ARRAY = ["tiny", "small", "medium", "big"];

    for (var i = 0; i < STARS_COUNT; i++) {
        var randomStar = Math.floor(Math.random() * STARS_ARRAY.length);
        var randomStarSize = Math.floor(Math.random() * STARS_SIZE_ARRAY.length);
        var star = '<div class="star ' + STARS_SIZE_ARRAY[randomStarSize] + '" style="z-index: 9;animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * ($(window).height() - 50) + 'px; left: ' + Math.random() * $(window).width() + 'px;"><img src="./assets/sky/' + STARS_ARRAY[randomStar] + '.svg"/></div>';
        $('#space').append(star);
    }
    ////////////////////////////////////////////////////// HORIZONTAL SCROll
    for (var i = 0; i < 30; i++) {
        var randomStar = Math.floor(Math.random() * STARS_ARRAY.length);
        var randomStarSize = Math.floor(Math.random() * STARS_SIZE_ARRAY.length);
        var star = '<div class="star ' + STARS_SIZE_ARRAY[randomStarSize] + '" style="z-index: 9;animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * ($(window).height() / 2) + 'px; left: ' + Math.random() * $(window).width() + 'px;"><img src="./assets/sky/' + STARS_ARRAY[randomStar] + '.svg"/></div>';
        $('#sky').append(star);
    }
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

    ////////////////////////////////////////////////////// POPUP
    // for (var p = 0; p < 25; p++) {
    //     var pop_ups = '<div class="popup_bubble" style="z-index: 200; top: ' + Math.random() * ($(window).height() / 2) + 'px; left: ' + Math.random() * ($(window).width() / 2) + 'px;  "> </div>';
    //     $('.text_pop_up').append(pop_ups);
    // }
    ////////////////////////////////////////////////////// FLAMES
    let oldValue = 0
    let newValue = 0
    window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        if (oldValue < newValue) {
            // console.log("Up");
        } else if (oldValue > newValue) {
            // console.log("Down");
        }
        oldValue = newValue;
    });

    // ROCKET
    var controller_ROCKET = new ScrollMagic.Controller();
    var tween_ROCKET = new TimelineMax()
        .to("#rocket", 1, {
            x: 0,
            y: (WIH / 2) - (Rocket_Height),
            onComplete: () => {
                console.log("STEP - 1")
            },
            ease: 'Power4.out'
        })
        .to("#rocket", 0.5, {
            x: 0,
            onComplete: () => {
                console.log("STEP - 2")
            },
            ease: 'Power4.out'
        })
        .to("#rocket", 0.5, {
            x: -100,
            onComplete: () => {
                console.log("STEP - 3")
            },
            ease: 'Power4.out'
        })
        .to("#rocket", 0.5, {
            x: 0,
            y: (WIH / 2 - Rocket_Height),
            onComplete: () => {
                console.log("STEP - 4")
            },
            ease: 'Power4.out'
        })
        .to("#rocket", 1, {
            x: 0,
            y: (WIH / 2) - (Rocket_Height / 2),
            onComplete: () => {
                console.log("STEP - 5")
            },
            ease: 'Power4.out'
        })
        // .to("#rocket", 1, {
        //     x: 0,
        //     y: (WIH / 2) - (Rocket_Height / 2) - rocket_base_offset,
        //     scale: 0.5,
        //     onComplete: () => { console.log("STEP - 6") },
        //     ease: 'Power4.out'
        // })
        // .to("#rocket", 0.5, {
        //     x: 0,
        //     scale: 0.1,
        //     y: 0,
        //     onComplete: () => { console.log("STEP - 7") },
        //     ease: 'Power4.out'
        // })
        // .to("#rocket", 0.5, {
        //     x: 0,
        //     scale: 0.25,
        //     rotation: 270,
        //     y: 200,
        //     onComplete: () => { console.log("STEP - 8") },
        //     ease: 'Power4.out'
        // })
        // .to("#rocket", 0.5, {
        //     // x: -(WIW / 2) + Rocket_Width,
        //     x: 0,
        //     scale: 1,
        //     y: 100,
        //     ease: 'Power4.out'
        // })

    // tween_ROCKET.call(function() {
    //     $('#rocket').toggleClass("addSmoke");
    // }, null, null, 0);

    // build scene
    var scene_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#rocket_trigger",
            // duration: 3000,
            duration: "200%",
            offset: WIH
        })
        .setTween(tween_ROCKET)
        // .addIndicators({ name: "ROCKET" })
        .addTo(controller_ROCKET)
        .triggerHook(1);
    scene_ROCKET.on("start", function(event) {
        $('#rocket').addClass("addSmoke");
        $('.launcher-base').show();
        $('.launcher-base').show();
        // console.log("STARTED....");
    });

    scene_ROCKET.on("progress", function(event) {
        // console.log("Scene progress changed to " + event.progress);
    });
    //  bind scroll to anchor links

    $(document).on("click", "a[href^='#']", function(e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();
            TweenMax.to(window, {
                duration: 1,
                scrollTo: e.target.getAttribute("href")
            });
            // trigger scroll
            controller_ROCKET.scrollTo(id);
            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });


    // change behaviour of controller to animate scroll instead of jump
    controller_ROCKET.scrollTo(function(newpos) {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: newpos
            }
        });
    });
    // ROCKET END
    var controller_SPACE = new ScrollMagic.Controller();
    var controller_SKY = new ScrollMagic.Controller();
    var controller_LAND = new ScrollMagic.Controller();
    var controller_EARTH = new ScrollMagic.Controller();
    var controller_UNDERWATER = new ScrollMagic.Controller();
    var controller_SUB_2 = new ScrollMagic.Controller();
    // ------------------- SPACE ----------------------
    var tween_SPACE_btn = new TimelineMax()
        .to("#space_btn", 0.5, {
            x: 0,
        })
        .to("#space_btn", 0.5, {
            x: 120,
        });
    var scene_SPACE = new ScrollMagic.Scene({
            triggerElement: "#space",
            duration: "50%",
            offset: WIH / 4
        })
        .setTween([tween_SPACE_btn, ])
        // .setClassToggle("body", "overflowY_hide")
        // .addIndicators({ name: "SPACE_NAV" })
        .addTo(controller_SPACE)
        .triggerHook(0.5);
    // ------------------- SPACE NAV ----------------------
    var scene_SPACE_NAV = new ScrollMagic.Scene({
            triggerElement: "#space",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-space", "visible")
        // .addIndicators({ name: "SPACE" })
        .addTo(controller_SPACE)
        .triggerHook(0.5);
    // ------------------- SPACE NAV END ----------------------

    // ------------------- SPACE ----------------------
    var tween_SPACE_btn = new TimelineMax()
        .to("#space_btn", 0.5, {
            x: 0,
        })
        .to("#space_btn", 0.5, {
            x: 120,
        });
    var scene_SKY = new ScrollMagic.Scene({
            triggerElement: "#space",
            // duration: 500,
            duration: "25%",
            offset: WIH / 4
        })
        // .setTween([tween_LAND_btn])
        .setClassToggle("#space_pop_up", "visible")
        // .addIndicators({ name: "SPACE_TEXT" })
        .addTo(controller_SPACE)
        .triggerHook(0.25);
    // ------------------- SKY ----------------------
    var tween_SKY_btn = new TimelineMax()
        .to("#sky_btn", 0.5, {
            x: 0,
        })
        .to("#sky_btn", 0.5, {
            x: 120,
        });
    var scene_SKY = new ScrollMagic.Scene({
            triggerElement: "#sky",
            // duration: 500,
            duration: "25%",
            offset: WIH / 4
        })
        // .setTween([tween_LAND_btn])
        .setClassToggle("#sky_pop_up", "visible")
        // .addIndicators({ name: "SKY_TEXT" })
        .addTo(controller_SKY)
        .triggerHook(0.25);
    // ------------------- SKY NAV ----------------------
    var scene_SKY_NAV = new ScrollMagic.Scene({
            triggerElement: "#sky",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-sky", "visible")
        // .addIndicators({ name: "SKY_NAV" })
        .addTo(controller_SKY)
        .triggerHook(0.5);
    // ------------------- SKY NAV END ----------------------

    // ------------------- LAND ----------------------
    var tween_LAND_btn = new TimelineMax()
        .to("#land_btn", 0.5, {
            x: 0,
        })
        .to("#land_btn", 0.5, {
            x: 120,
        });
    var scene_LAND = new ScrollMagic.Scene({
            triggerElement: "#land",
            // duration: 500,
            duration: "25%",
            offset: WIH / 4
        })
        // .setTween([tween_LAND_btn])
        .setClassToggle("#land_pop_up", "visible")
        // .addIndicators({ name: "LAND" })
        .addTo(controller_LAND)
        .triggerHook(0.25);
    // ------------------- LOGO SCENE ----------------------
    var tween_LOGO = TweenMax.fromTo("#logo", 1, {
        y: 0,
        autoAlpha: 0
    }, {
        y: LOGO_RES_Y_OFFSET,
        autoAlpha: 1
    });
    var scene_LOGO = new ScrollMagic.Scene({
            triggerElement: "#trigger_LOGO",
            duration: "50%",
            offset: -WIH / 2
        })
        .setTween([tween_LOGO])
        // .addIndicators({  name: "LOGO" })
        .triggerHook(0)
        // .on("start", function(event) {})
        // .on("end", function(event) {})
        // .on("enter", function(event) {})
        // .on("progress", function(event) {})
        // .on("remove", function(event) {})
        // .on("update", function(event) {})
        // .on("leave", function(event) {}).on("enter", callback).on("leave", callback)
        .addTo(controller_ROCKET);

    // ------------------- EARTH ----------------------
    // ------------------- EARTH TEXT ----------------------
    // var tween_LAND_btn = new TimelineMax()
    //     .to("#earth_btn", 0.5, {
    //         x: 0,
    //     })
    //     .to("#earth_btn", 0.5, {
    //         x: 120,
    //     });
    var scene_EARTH_TEXT = new ScrollMagic.Scene({
            triggerElement: "#earth",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle("#earth_pop_up", "visible")
        // .addIndicators({ name: "EARTH_TEXT" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);
    // ------------------- LAND NAV ----------------------
    var scene_SKY_NAV = new ScrollMagic.Scene({
            triggerElement: "#land",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-land", "visible")
        // .addIndicators({ name: "LAND_NAV" })
        .addTo(controller_LAND)
        .triggerHook(0.5);
    // ------------------- SKY NAV END ----------------------
    // https://mukeshnavneet.github.io/docs/assets/earth/pipe-5.svg
    var images = [
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-1.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-2.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-2.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-3.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-4.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-5.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-6.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-bot.svg",
    ];
    var obj = {
        curImg: 0
    };
    // create tween
    var tween_pipe_sequence = TweenMax.to(obj, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        repeat: 0, // repeat 3 times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function() {
            $("#pipe-sequence").attr("src", images[obj.curImg]); // set the image source
        }
    });

    var tween_EARTH_btn = new TimelineMax()
        .to("#earth_btn", 1, {
            x: 0,
        })
        .to("#earth_btn", 1, {
            x: 120,
        })
        .to("#earth_btn", 1, {
            x: 0,
        });

    var scene_tween_pipe_sequence = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "110%",
            offset: "10%"
        })
        .setTween([tween_pipe_sequence])
        // .addIndicators({   name: "scene_tween_pipe_sequence" })
        .addTo(controller_EARTH)
        .triggerHook(1);

    var scene_EARTH = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "20%",
            offset: "0px"
        })
        .setTween([tween_EARTH_btn])
        // .addIndicators({ name: "EARTH" })
        .addTo(controller_EARTH)
        .triggerHook(1);

    scene_EARTH.on("start", function(event) {
        $('#rocket').removeClass("addSmoke");
    });

    scene_EARTH.on("leave", function(event) {
        $('#rocket').addClass("addSmoke");
    });

    var tween_EARTH_rocket = new TimelineMax()
        .to("#rocket", 1, {
            scale: 0.5,
        })
        .to("#rocket", 1, {
            scale: 0.5,
        })
        .to("#rocket", 1, {
            scale: 0.5,
            // rotation:-135
        });

    var scene_EARTH_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "50%",
            offset: "0px"
        }).setTween([tween_EARTH_rocket])
        // .addIndicators({ name: "scene_EARTH_ROCKET" })
        .addTo(controller_EARTH)
        .triggerHook(1);

    scene_EARTH_ROCKET.on("start", function(event) {
        $('.smoke-to-left').hide();
        $('.smoke-to-right').hide();
    });
    scene_EARTH_ROCKET.on("leave", function(event) {
        $('.smoke-to-left').show();
        $('.smoke-to-right').show();
        setTimeout(function() {
            $('.smoke-to-left').hide();
            $('.smoke-to-right').hide();
        }, 2000)
    });

    //////////////////////////SMOKEEEEEEEEEEEEEEEEE/////////
    var tween_SMOKE_ROCKET = new TimelineMax()
        .to('.smoke-to-left', 1, {
            scale: 0.5,
            y: 10,
        })
        .to('.smoke-to-left', 1, {
            scale: 0,
            y: 0
        });
    var scene_SMOKE_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "50%",
            offset: "0px"
        }).setTween([tween_EARTH_rocket])
        // .addIndicators({ name: "scene_EARTH_ROCKET" })
        .addTo(controller_EARTH)
        .triggerHook(1);

    // ------------------- PIPE MOVEMENT ----------------------
    // TweenMax.set(".pipe-start", { x: 100 });
    // var tween_PIPE_MOVE = new TimelineMax()
    //     .to(".pipe-start", 1, {
    //         x: 0,
    //     })
    //     .to(".pipe-start", 1, {
    //         x: 0,
    //     })
    //     .to(".pipe", 1, {
    //         x: -50,
    //     });

    // var scene_PIPE = new ScrollMagic.Scene({
    //         triggerElement: "#earth",
    //         // duration: 500,
    //         duration: "100%",
    //         offset: -(WIH / 2 - Rocket_Height)
    //     })
    //     .addIndicators({ name: "PIPE" })
    //     .setTween([tween_PIPE_MOVE])
    //     .addTo(controller_ROCKET)
    //     .triggerHook(0.5);

    // ------------------- PIPE FOR ROCKET ----------------------
    // ------------------- EARTH NAV ----------------------
    var scene_SKY_NAV = new ScrollMagic.Scene({
            triggerElement: "#earth",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-earth", "visible")
        // .addIndicators({ name: "SKY_NAV" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);
    // ------------------- EARTH NAV END ----------------------
    var scene_PIPE = new ScrollMagic.Scene({
            triggerElement: ".pipe-start",
            // duration: 500,
            duration: "100%",
            offset: -(WIH / 2 - Rocket_Height)
        })
        // .addIndicators({ name: "PIPE" })
        // .setTween([tween_PIPE_MOVE])
        .addTo(controller_ROCKET)
        .triggerHook(0.5);
    scene_PIPE.on("start", function(event) {
        // $('#rocket').hide();
    });
    scene_PIPE.on("leave", function(event) {
        // $('#rocket').show();
    });

    // ------------------- UNDERWATER ----------------------

    var scene_UNDERWATER = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "150%",
            offset: -WIH / 2
        })
        // .setTween([tween_LAND_btn, ])
        // .addIndicators({ name: "UNDERWATER" })
        .addTo(controller_UNDERWATER)
        .triggerHook(0.5);

    // ------------------- EARTH TEXT ----------------------

    // var tween_LAND_btn = new TimelineMax()
    //     .to("#earth_btn", 0.5, {
    //         x: 0,
    //     })
    //     .to("#earth_btn", 0.5, {
    //         x: 120,
    //     });

    var scene_UNDERWATER_TEXT = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            duration: "30%",
            offset: 10
        })
        .setClassToggle("#sea_pop_up", "visible")
        // .addIndicators({ name: "UNDERWATER_TEXT" })
        .addTo(controller_UNDERWATER)
        .triggerHook(0.25);

    var tween_UNDERWATER_btn = new TimelineMax()
        .to("#sea_btn", 1, {
            x: 0,
        })
        .to("#sea_btn", 1, {
            x: 120,
        })
        .to("#sea_btn", 1, {
            x: 0,
        });

    var tween_UNDERWATER_rocket = new TimelineMax()
        .to("#rocket", 1, {
            scale: 0.2,
            y: 100
        })
        .to("#rocket", 1, {
            scale: 1,
            rotation: -90,
            x: 0,
            y: 100
        })
    var scene_UNDERWATER_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "50%",
            offset: "0px"
        })
        .setTween([tween_UNDERWATER_rocket])
        // .addIndicators({ name: "scene_UNDERWATER_ROCKET" })
        .addTo(controller_UNDERWATER)
        .triggerHook(1);

    scene_UNDERWATER.on("start", function(event) {
        $('#rocket').removeClass("addSmoke");
        $('#rocket').addClass("submarine");
        $('#rocket img').attr("src", './assets/medow/submarine.svg');
    });

    scene_UNDERWATER.on("leave", function(event) {
        $('#rocket img').attr("src", './assets/medow/rocket_red.svg');
        $('#rocket').addClass("addSmoke");
        $('#rocket').removeClass("submarine");
    });
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    var controller_UNDERWATER2 = new ScrollMagic.Controller();

    var tween_UNDERWATER_rocket2 = new TimelineMax()
        .fromTo("#rocket2", 0.2, {
            scale: 1,
            y: 0,
            x: 25
                // rotation:-180
        }, {
            scale: 1,
            y: 0,
            x: 25
                // rotation:-180
        })
    var scene_UNDERWATER_ROCKET2 = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "100%",
            offset: "0px"
        })
        .setPin("#rocket2")
        .setTween([tween_UNDERWATER_rocket2])
        // .addIndicators({ name: "scene_UNDERWATER_ROCKET2" })
        .addTo(controller_UNDERWATER2)
        .triggerHook(1);
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    var controller_UNDERWATER3 = new ScrollMagic.Controller();

    var tween_UNDERWATER_rocket3 = new TimelineMax()
        .to("#rocket2", 0.2, {
            scale: 1,
            rotation: -90,
            y: 0
        })
        .to("#rocket2", 0.2, {
            scale: 1.75,
            y: 100,
            x: -50,
            rotation: -90
        })
    var scene_UNDERWATER_ROCKET3 = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "50%",
            offset: 0
        })
        .setTween([tween_UNDERWATER_rocket3])
        .addIndicators({ name: "scene_UNDERWATER_ROCKET22" })
        .addTo(controller_UNDERWATER3)
        .triggerHook(0.5);
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    // ------------------- EARTH NAV ----------------------
    var scene_SEA_NAV = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            duration: "50%",
            offset: WIH / 4
        })
        // .setClassToggle(".in-sea", "visible")
        // .addIndicators({ name: "SKY_NAV" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);
    // ------------------- EARTH NAV END ----------------------
    // var tween_SUB_2 = new TimelineMax()
    //     .to("#sea_btn", 1, {
    //         x: 0,
    //     })
    //     .to("#sea_btn", 1, {
    //         x: 120,
    //     })
    //     .to("#sea_btn", 1, {
    //         x: 0,
    //     });
    // var scene_SUB2 = new ScrollMagic.Scene({
    //         triggerElement: "#underwater",
    //         duration: "60%",
    //         offset: 0
    //     })
    //     .setTween([tween_SUB_2])
    //     // .addIndicators({ name: "SEA_SUB2" })
    //     .addTo(controller_SUB_2)
    //     .triggerHook(1);



    // var cloudTl = new TimelineMax({ repeat: -1, force3D: true });
    // cloudTl.to(".fish-center-top", 10, { x: WIW + 100, ease: Linear.easeInOut }, 1)
    // .to("#cloud02", 5, { x: WIW, ease: Linear.easeNone }, 0.9)
    // .to("#cloud03", 9, { x: WIW, ease: Linear.easeNone }, 1)
    // .to("#cloud04", 4, { x: WIW, ease: Linear.easeNone }, 1.5);

    /////////////////////////////////////////////////// POPUP
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

    $space_btn.on("click", function name(params) {
        $space_pop_up.addClass("animate__bounceIn");
        $space_pop_up.show();
        setTimeout(() => {
            $space_pop_up.hide();
        }, 4000);
    })

    $sky_btn.on("click", function name(params) {
        $("#touch-me-not").removeClass("hide-btn");
        TweenMax.to("#touch-me-not img", 0.5, {
            width: "200px"
        })
        TweenMax.to(".cloud-text", 0.5, {
            autoAlpha: 0,
            scale: 0,
        })
        $sky_pop_up.addClass("animate__bounceIn");
        $sky_pop_up.show();
        setTimeout(() => {
            $sky_pop_up.hide();
        }, 4000);
    })

    // $touch_me_not.on("click", function name(params) {
    //     $touch_me_not_popup.find("div").addClass("animate__bounceIn");
    //     $touch_me_not_popup.show();
    // })

    $touch_me_not_IMG = $("#touch-me-not img")

    $cloud_text = $(".cloud-text")


    $touch_me_not_IMG.hover(over, null);
    $touch_me_not.hover(null, out);

    TweenMax.to($touch_me_not_IMG, 0.5, {
        x: "0%",
        width: "200px",
    })
    TweenMax.to($cloud_text, 0.5, {
        autoAlpha: 1,
        scale: 0
    })

    let res_SIZE = (isMob == true) ? WIW * 2 : "200px";

    function over() {
        $touch_me_not.addClass("hide-btn");
        TweenMax.to($touch_me_not, 0.5, {
            x: "-50%",
            width: WIW,
        })
        TweenMax.to($touch_me_not_IMG, 0.5, {
            x: "0%",
            width: WIW,
        })
        TweenMax.to($cloud_text, 0.5, {
            autoAlpha: 1,
            scale: 1,
        })
    }

    function out() {
        $touch_me_not.removeClass("hide-btn");
        TweenMax.to($touch_me_not, 0.5, {
            x: "-50%",
            width: "200px",
        })
        TweenMax.to($touch_me_not_IMG, 0.5, {
            x: "0%",
            width: "200px",
        })
        TweenMax.to($cloud_text, 0.5, {
            autoAlpha: 1,
            scale: 0
        })
    }

    $back_btn.on("click", function name(params) {
        $touch_me_not_popup.addClass("animate__bounceIn");
        $touch_me_not_popup.hide();
        $('html, body').animate({
            scrollTop: $("#space").offset().top
        }, 2000);
    })

    $land_btn.on("click", function name(params) {
        $land_pop_up.addClass("animate__bounceIn");
        $land_pop_up.show();
        setTimeout(() => {
            $land_pop_up.hide();
        }, 4000);
    })

    $earth_btn.on("click", function name(params) {
        $earth_pop_up.addClass("animate__bounceIn");
        $earth_pop_up.show();
        setTimeout(() => {
            $earth_pop_up.hide();
        }, 4000);
    })

    $sea_btn.on("click", function name(params) {
        $sea_pop_up.addClass("animate__bounceIn");
        $sea_pop_up.show();
        setTimeout(() => {
            $sea_pop_up.hide();
        }, 4000);
    })

    $('.text_btn').hover(
        function() {
            $(this).addClass('animate__wobble');
        },
        function() {
            $(this).removeClass('animate__wobble');
        }
    );
    // scrollbar.addListener(() => { scene_ROCKET.refresh() })
    //////////////////////////// MODAL ////////////////////////////////

    $(".close-button").click(function() {
        TweenMax.to(".actual-message", 0.5, {
            marginTop: "10%",
            opacity: 0,
            ease: "ease-in"
        });

        TweenMax.to(".modal", 0.5, {
            opacity: 0,
            y: "-100%",
        });
    });

    $(".register-btn").click(function() {
        console.log("REG");
        TweenMax.fromTo(".actual-message", 0.5, {
            marginTop: "10%",
            opacity: 0,
            ease: Back.easeOut,
            delay: 1.5
        }, {
            marginTop: "10%",
            opacity: 1,
            ease: "ease-in"
        });

        TweenMax.fromTo(".modal", 0.5, {
            opacity: 0,
            y: "-100%",
        }, {
            opacity: 1,
            y: "0%",
        });
    });


});

// function goToSkyFun() {
//     controller_ROCKET.scrollTo("#sky");
// }

// function goToSpaceFun() {
//     controller_ROCKET.scrollTo("#space");
// }

// function goToSpaceRightFun() {
//     controller_ROCKET.scrollTo("#space_h");
// }

// function goToUnderwaterFun() {
//     controller_ROCKET.scrollTo("#underwater");
// }

// function goToEarthFun() {
//     controller_ROCKET.scrollTo("#earth");
// }