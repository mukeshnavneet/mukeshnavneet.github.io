(function($) {

    // let WIW = window.innerWidth;
    // let WIH = window.innerHeight;
    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    ////////////////////////////////////////////////////// VARS

    var $rocket = $("#rocket");
    var $sea = $("#underwater");
    var $sea_pop_up = $("#sea_pop_up");

    ////////////////////////////////////////////////////// SEA
    var rocket_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $sea,
                scrub: 0.5,
                start: '' + -(WIH / 1.5) + ', center ',
                end: '' + WIH / 2 + ', 50%',
                // markers: true,
                id: "UNDERWATER",
                toggleClass: {
                    targets: $rocket,
                    className: "addBubbles"
                },
                onEnter: ({
                    progress,
                    direction,
                    isActive
                }) => {
                    console.log(progress, direction, isActive)
                    $('#rocket img').attr("src", './assets/medow/submarine.svg');
                    $('#rocket').addClass("submarine");
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
                    $('#rocket img').attr("src", './assets/medow/rocket_red.svg');
                    $('#rocket').removeClass("submarine");

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
            scale: 0.1,
            duration: 0.25,
            ease: 'none'
        })
        .to($rocket, {
            y: -WIH / 3,
            rotation: -90,
            scale: 1,
            duration: 1,
            ease: 'none'
        });
    ////////////////////////////////////////////////////// TEXT TL

    var sea_text_tl = gsap.timeline({
            scrollTrigger: {
                trigger: $sea,
                scrub: 1,
                start: '' + -(WIH / 2) + ', top ',
                end: '' + WIH / 4 + ', top',
                // markers: true,
                id: "UNDERWATER_TEXT",
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
        }).from($sea_pop_up, {
            x: 400,
            duration: 1,
            ease: 'none'
        })
        .to($sea_pop_up, {
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'none'
        });


})(jQuery);