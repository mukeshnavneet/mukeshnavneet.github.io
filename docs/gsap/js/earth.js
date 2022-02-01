(function($) {

    // let WIW = window.innerWidth;
    // let WIH = window.innerHeight;
    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    ////////////////////////////////////////////////////// VARS
    var $rocket = $("#rocket")
    var $earth = $("#earth")
    var $launcher_base = $("#launcher-base")
    var $earth_pop_up = $("#earth_pop_up");

    ////////////////////////////////////////////////////// ROCKET
    var rocket_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $earth,
                scrub: 0.5,
                start: '' + -(WIH / 2) + ', center ',
                end: '' + WIH / 2 + ', 50%',
                // markers: true,
                id: "EARTH",
                toggleClass: { targets: $launcher_base, className: "addSmoke" },
                onEnter: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onEnterBack: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onLeave: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onLeaveBack: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onRefresh: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onUpdate: self => {
                    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                }
            }
        }).from($rocket, {
            scale: 0.5,
            duration: 0.5,
            ease: 'none'
        })
        .to($rocket, {
            scale: 0.5,
            duration: 1,
            ease: 'none'
        })
        .to($rocket, {
            scale: 0.5,
            duration: 1,
            ease: 'none'
        })
        .to($rocket, {
            scale: 0.5,
            duration: 1,
            ease: 'none'
        });

    ////////////////////////////////////////////////////// TEXT TL

    var earth_text_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $earth,
                scrub: 1,
                start: '' + -(WIH / 2) + ', top ',
                end: '' + WIH / 2 + ', top',
                // markers: true,
                id: "EARTH_TEXT",
                // toggleClass: {
                //     targets: $sea_pop_up,
                //     className: "visible"
                // },
                onEnter: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onEnterBack: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onLeave: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onLeaveBack: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onRefresh: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    //console.log(progress, direction, isActive)
                },
                onUpdate: self => {
                    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                }
            }
        }).from($earth_pop_up, {
            x: "100%",
            duration: 1,
            ease: 'none'
        })
        .to($earth_pop_up, {
            x: -300,
            scale: 1,
            duration: 1,
            ease: 'none'
        });


})(jQuery);