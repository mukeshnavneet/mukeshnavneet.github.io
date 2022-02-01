$(function() {
  // VARS
  let WIW = window.innerWidth;
  let WIH = window.innerHeight;
  if (WIW < 480) {}

  ///////////////////////////

  let $STEP6 = document.getElementById('step3');
  let $stars_overlay = document.querySelector('.stars-overlay');
  let $space_overlay = document.querySelector('.space-overlay');

  // var setSTARS = gsap.set($stars_overlay, {
  //   y: -WIH,
  //   // x: WIW*2,
  //   alpha: 1
  // });
  var STEP5_tl = gsap.timeline();
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

  STEP5_tl.to($stars_overlay, {
    alpha: 1,
    duration:0.5,
    ease: 'none'
  }).to($stars_overlay, {
    alpha: 0,
    duration: 0.5,
    ease: 'none'
  }).to($space_overlay, {
    alpha: 1,
    duration:0.5,
    ease: 'none'
  })
  .to($space_overlay, {
    alpha: 1,
    duration:0.5,
    ease: 'none'
  }).to($space_overlay, {
    alpha: 0,
    duration: 0.5,
    ease: 'none'
  });

  ScrollTrigger.create({
    trigger: 'step5',
    animation: STEP5_tl,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: '' + WIH * 5 + ', 100%',
    end: '' + WIH * 5.5 + ', 90%',
    // toggleClass: "active",
    // pin: true,
    scrub: 1,
    // onUpdate: self => {
    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
    onEnter: function() {
    //animateFrom($stars_overlay)
    },
    onEnterBack: function() {
    //animateFrom($stars_overlay, -1)
    },
  });


});
