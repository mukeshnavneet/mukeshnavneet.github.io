$(function() {
  // VARS
  let WIW = window.innerWidth;
  let WIH = window.innerHeight;
  let Rocket_Width = 200;
  let Rocket_Height = 369;
  let launchpad_Height = 30;
  let rocket_base_offset = 200;

  var SECTION = $("section")
  var ELM = $(".elm")
  var EARTH_LAYER = $(".earth-layer")
  var PIPE = $(".pipe")
  var LOGO_RES_Y_OFFSET = 100;

  if (WIW < 480) {
    Rocket_Height = 369 / 2;
    Rocket_Width = 200 / 2;
    rocket_base_offset = 300
    LOGO_RES_Y_OFFSET = 50;
  }

  let STARS_COUNT = 100;
  if (WIW < 480) {
    STARS_COUNT = 25;
  }
  //////////// STARS_COUNT
  if (WIW < 480) {
    STARS_COUNT = 25;
    PIPE.css('height', (WIH / 1.5) + "px")
  }

  var STARS_ARRAY = ["star-yellow", "star-grey", "star-whitet"];

  var STARS_SIZE_ARRAY = ["tiny", "small", "medium", "big"];

  for (var i = 0; i < STARS_COUNT; i++) {
    var randomStar = Math.floor(Math.random() * STARS_ARRAY.length);
    var randomStarSize = Math.floor(Math.random() * STARS_SIZE_ARRAY.length);
    var star = '<div class="star ' + STARS_SIZE_ARRAY[randomStarSize] + '" style="z-index: 9;animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * ($(window).height()*2) + 'px; left: ' + Math.random() * $(window).width()*2 + 'px;"><img src="./svg/sky/' + STARS_ARRAY[randomStar] + '.svg"/></div>';
    $('.stars').append(star);
  }
  // Set Section Height
  SECTION.css('height', WIH + "px");
  ELM.css('height', WIH + "px");
  // EARTH_LAYER.css('height', (WIH / 2) + "px");
  // PIPE.css('height', (WIH / 1.5) + "px");
  // PIPE.css('margin-top', -(WIH / 1.5) / 2 + "px");
  /////////////////////////// HORIZONTAL
  let sections = gsap.utils.toArray(".panel");
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      toggleClass: "active",
      // animation: colorChange,
      // snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=5000",
    }
  });
  /////////////////////////// EARTH
  let $earth = document.querySelector('.earth');
  var $touch_me_not_popup = $("#touch-me-not-popup");
  var $touch_me_not = $("#touch-me-not");
  var $touch_me_not_IMG = $("#touch-me-not img")
  var $cloud_text = $(".cloud-text")
  var $rocket = $(".rocket")
  let $STEP6 = document.getElementById('step6');

  let $space_overlay = document.querySelector('.space-overlay');
  let $sky_overlay = document.querySelector('.sky-overlay');
  let $stars_overlay = document.querySelector('.stars-overlay');
  let $STEP3 = document.getElementById('step3');
  let $stars = document.querySelector('stars');

  var rotate_Earth = gsap.timeline({
      scrollTrigger: {
        trigger: 'html',
        scrub: 0.2,
        start: 'top top',
        end: '+=5000',
      }
    }).to($earth, {
      rotation: 0,
      duration: 1,
      ease: 'none'
    })
    .to($earth, {
      rotation: 180,
      duration: 1,
      ease: 'none'
    })
    .to($earth, {
      rotation: 270,
      duration: 1,
      ease: 'none'
    })
    .to($earth, {
      rotation: 360,
      duration: 1,
      ease: 'none',
      scale: 0.5
    })
    .to($earth, {
      rotation: 360,
      duration: 1,
      ease: 'none',
      scale: 1
    })
    .to($earth, {
      rotation: 360,
      duration: 1,
      ease: 'none',
      scale: 10,
      // alpha: 0,
    });
  /////////////////////////// ROCKET
  var rocket = gsap.timeline({
      scrollTrigger: {
        trigger: 'html',
        scrub: 0.2,
        // start: 'top top',
        // end: '+=5000',
        start: 'top, top ',
        end: '' + WIH * 5.5 + ', 90%',
        toggleClass: {
          targets: ".rocket",
          className: "launched_rocket"
        }
      }
    }).to($rocket, {
      rotation: 45,
      y: -(WIH / 2),
      duration: 1,
      ease: 'none'
    })
    .to($rocket, {
      rotation: 90,
      duration: 1,
      ease: 'none'
    })
    .to($rocket, {
      rotation: 136,
      duration: 1,
      ease: 'none'
    })
    .to($rocket, {
      rotation: 180,
      duration: 1,
      ease: 'none'
    })
    .to($rocket, {
      rotation: 270,
      duration: 1,
      ease: 'none'
    });

  /////////////////////////// SEA OVERLAY

  /////////////////////////// SPACE OVERLAY

  var space_overlay = gsap.timeline({
      scrollTrigger: {
        trigger: 'html',
        scrub: 0.2,
        start: '3000',
        end: '+=1000',
      }
    })
    .to($space_overlay, {
      alpha: 1,
      duration: 5,
      ease: 'none'
    });
    
  var sky_overlay = gsap.timeline({
      scrollTrigger: {
        trigger: 'html',
        scrub: 0.2,
        start: '0',
        end: '+=1000',
      }
    })
    .to($sky_overlay, {
      alpha: 1,
      duration: 5,
      ease: 'none'
    })
  /////////////////////////// SPACE OVERLAY



  // var setSTARS = gsap.set($stars_overlay, {
  //   y: -WIH,
  //   // x: WIW*2,
  //   opacity: 1
  // });
  var STARS_tl = gsap.timeline();
  // var STARS_tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: 'step3',
  //     scrub: 1,
  //     start: ''+WIH*3+','+WIH*3+'',
  //     end:'' +WIH*4+', 100%',
  //     markers: true,
  //   }
  // });
  // STARS_tl.add(setSTARS);

  STARS_tl.to($stars_overlay, {
    opacity: 1,
    duration: 0.75,
    rotation: 90,
    ease: 'none'
  }) ;

  ScrollTrigger.create({
    trigger: 'step3',
    animation: STARS_tl,
    directional: false,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: '' + WIH * 1.5 + ', 10%',
    end: '' + WIH * 5 + ', 90%',
    toggleClass: "active",
    // pin: true,
    scrub: 0.5,
    onEnter: ({
      progress,
      direction,
      isActive
    }) => {
      console.log(progress, direction, isActive)
    },
    onEnterBack: ({
      progress,
      direction,
      isActive
    }) => {
      console.log(progress, direction, isActive)
    },
    onLeave: ({
      progress,
      direction,
      isActive
    }) => {
      console.log(progress, direction, isActive)
    },
    onLeaveBack: ({
      progress,
      direction,
      isActive
    }) => {
      console.log(progress, direction, isActive)
    },
    onRefresh: ({
      progress,
      direction,
      isActive
    }) => {
      console.log(progress, direction, isActive)
    },
    onUpdate: self => {
      // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    }
  });


});
