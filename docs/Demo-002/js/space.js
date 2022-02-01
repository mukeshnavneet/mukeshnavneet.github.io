$(function() {
  // VARS
  let WIW = window.innerWidth;
  let WIH = window.innerHeight;
  if (WIW < 480) {}

  ///////////////////////////

  let $STEP2 = document.getElementById('step2');
  let $STEP3 = document.getElementById('step3');
  let $STEP4 = document.getElementById('step4');
  let $planet_top_right = document.querySelector('.planet-top-right');

  var STEP4_tl = gsap.timeline();

  STEP4_tl.to($planet_top_right,   {
    scale:0,
  }).to($planet_top_right,   {
    scale:3,
  });

  ScrollTrigger.create({
    trigger: 'html',
    animation: STEP4_tl,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    // start: '' + WIH * 2.5 + ', 10%',
    // end: '' + WIH * 4.5 + ', 90%',
    start: '' + WIH * 2.5 + ', 10%',
    end: '' + WIH * 5 + ', 90%',
    // toggleClass: "active",
    // pin: true,
    scrub: 1,
    // onUpdate: self => {
    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
    onEnter: function() {
      //animateFrom($space_overlay)
    },
    onEnterBack: function() {
      //animateFrom($space_overlay, -1)
    },
  });

  ScrollTrigger.create({
    trigger: $STEP4,
    animation: STEP4_tl,
    markers: true,
    start: '' + WIH/2 + ', 50%',
    end: '' + WIH * 2 + ', 95%',
    toggleClass: "active",
    scrub: 1,
    onEnter: function() { },
    onEnterBack: function() {},
  });

});
