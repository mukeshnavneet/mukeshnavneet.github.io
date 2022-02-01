(function($) {

    // let WIW = window.innerWidth;
    // let WIH = window.innerHeight;
    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    ////////////////////////////////////////////////////// VARS
    var $rocket = $("#rocket");
    var $logo = $("#logo");

    ////////////////////////////////////////////////////// ROCKET
    var rocket_tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'html',
                scrub: 0.5,
                start: 'top, top ',
                end: '' + WIH * 3 + ', 100%',
                // markers: true,
                id: "ROCKET",
                toggleClass: {
                    targets: $rocket,
                    className: "addSmoke"
                }
            }
        }).from($rocket, {
            scale: 1,
            rotation: 90,
            y: -WIH / 2.5,
            duration: 1,
            ease: 'none'
        })
        .to($rocket, {
            x: -100,
            y: -100,
            scale: 0.75,
            duration: 1,
            ease: 'none'
        })
        .to($rocket, {
            x: 0,
            y: -100,
            scale: 0.75,
            duration: 1,
            ease: 'none'
        })
        .to($rocket, {
            x: 100,
            y: -100,
            scale: 0.75,
            duration: 1,
            ease: 'none'
        })
        .to($rocket, {
            rotation: 0,
            scale: 0.5,
            x: 0,
            y: 92,
            duration: 1,
            ease: 'none'
        });

    // ScrollTrigger.create({
    //     trigger: 'html',
    //     animation: rocket_tl,
    //     directional: false,
    //     // Uncomment these to see how they affect the ScrollTrigger
    //     markers: true,
    //     start: ' top, 10%',
    //     end: '' + WIH * 3 + ', 90%',
    //     toggleClass: "active",
    //     // pin: true,
    //     scrub: 0.5,
    //     onEnter: ({
    //         progress,
    //         direction,
    //         isActive
    //     }) => {
    //         //console.log(progress, direction, isActive)
    //     },
    //     onEnterBack: ({
    //         progress,
    //         direction,
    //         isActive
    //     }) => {
    //         //console.log(progress, direction, isActive)
    //     },
    //     onLeave: ({
    //         progress,
    //         direction,
    //         isActive
    //     }) => {
    //         //console.log(progress, direction, isActive)
    //     },
    //     onLeaveBack: ({
    //         progress,
    //         direction,
    //         isActive
    //     }) => {
    //         //console.log(progress, direction, isActive)
    //     },
    //     onRefresh: ({
    //         progress,
    //         direction,
    //         isActive
    //     }) => {
    //         //console.log(progress, direction, isActive)
    //     },
    //     onUpdate: self => {
    //         // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    //     }
    // });
    ////////////////////////////////////////////////////// LOGO
    var logo_tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#trigger_LOGO',
                scrub: 0.5,
                start: '' + -(WIH / 2) + ', top ',
                end: '' + WIH + ', 100%',
                // markers: true,
                id: "LOGO",
                toggleClass: {
                    targets: $rocket,
                    className: "addSmoke"
                }
            }
        }).from($logo, {
            scale: 1,
            // rotation: 40,
            duration: 1,
            alpha: 0,
            ease: 'none'
        })
        .to($logo, {
            // y: -200,
            alpha: 1,
            duration: 1,
            ease: 'none'
        });

})(jQuery);