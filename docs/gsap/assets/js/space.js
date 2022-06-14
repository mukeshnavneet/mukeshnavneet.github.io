(function($) {

    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    ////////////////////////////////////////////////////// VARS

    var $rocket = $("#rocket");
    var $space = $("#space");
    var $space_pop_up = $("#space_pop_up");
    ////////////////////////////////////////////////////// TEXT TL

    var space_text_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $space,
                scrub: 1,
                start: '' + -(WIH / 2) + ', top ',
                end: '' + WIH / 2 + ', top',
                // markers: true,
                id: "SKY_TEXT",
                // toggleClass: {
                //     targets: $space_pop_up,
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
        }).from($space_pop_up, {
            x: 400,
            duration: 1,
            ease: 'none'
        })
        .to($space_pop_up, {
            x: -300,
            scale: 1,
            duration: 1,
            ease: 'none'
        });

})(jQuery);