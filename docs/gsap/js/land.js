(function($) {

    // let WIW = window.innerWidth;
    // let WIH = window.innerHeight;
    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    ////////////////////////////////////////////////////// VARS

    var $rocket = $("#rocket");
    var $land = $("#land");
    var $land_pop_up = $("#land_pop_up");

    ////////////////////////////////////////////////////// TEXT TL

    var land_text_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $land,
                scrub: 1,
                start: '' + -(WIH / 2) + ', top ',
                end: '' + WIH / 2 + ', top',
                // markers: true,
                id: "LAND_TEXT",
                // toggleClass: {
                //     targets: $land_pop_up,
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
        }).from($land_pop_up, {
            x: "100%",
            duration: 1,
            ease: 'none'
        })
        .to($land_pop_up, {
            x: -300,
            scale: 1,
            duration: 1,
            ease: 'none'
        });


    ////////////////////////////////////////////////////// SMOKE TL
    var land_text_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $land,
                scrub: 1,
                start: '' + -(WIH / 2) + ', top ',
                end: '' + WIH / 2 + ', top',
                // markers: true,
                id: "LAND_SMOKE",
                toggleClass: {
                    targets: $land_pop_up,
                    className: "visible"
                },
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
        }).from($land_pop_up, {
            x: "100%",
            duration: 1,
            ease: 'none'
        })
        .to($land_pop_up, {
            x: -300,
            scale: 1,
            duration: 1,
            ease: 'none'
        });

})(jQuery);