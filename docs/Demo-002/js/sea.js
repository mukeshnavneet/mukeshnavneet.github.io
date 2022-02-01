$(function() {
  // VARS
  let WIW = window.innerWidth;
  let WIH = window.innerHeight;
  if (WIW < 480) {}

  ///////////////////////////

  let $STEP6 = document.getElementById('step6');
  let $earth = document.querySelector('.earth');
  let $space_overlay = document.querySelector('.space-overlay');



  ////////////////////////////////////////////////////// BUBBLES
  function renderBubbles() {
    for (var b = 0; b < 50; b++) {
      var bubbles = '<div class="bubble" style="z-index: 9;animation: moveBubbles ' + ((Math.random() * 3) + 3) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * $(window).height() + 'px; left: ' + Math.random() * $(window).width() + 'px; transform:scale(' + Math.random() + ')"> </div>';
      $('.bubbles').append(bubbles);
    }
  }


  var STEP6_SEA_tl = gsap.timeline();
  var STEP6_tl = gsap.timeline();
  // var setSEA = gsap.set($STEP6, {
  //   y: WIH * 2,
  //   alpha: 0
  // });
  // STEP6_SEA_tl.add(setSEA);

  STEP6_tl.from($earth, {
    alpha: 1,
    duration: 1,
    ease: 'none'
  }).to($earth, {
    alpha: 0,
    duration: 1,
    ease: 'none'
  })
  // .to($space_overlay, {
  //   alpha: 1,
  //   duration: 1,
  //   ease: 'none'
  // })
  // .to($space_overlay, {
  //   alpha: 0,
  //   duration: 1,
  //   ease: 'none'
  // })

  ScrollTrigger.create({
    trigger: 'step5',
    animation: STEP6_tl,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: '' + WIH * 4.5 + ', 90%',
    end: '' + (WIH * 6) - 25 + ', 90%',
    toggleClass: "active",
    // pin: true,
    scrub: 1,
    // onUpdate: self => {
    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
    onEnter: function() {
      //animateFrom($stars_overlay)
      renderBubbles();
    },
    onEnterBack: function() {
      //animateFrom($stars_overlay, -1)
    },
  });


});
