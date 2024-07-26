const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main2"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main2", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector("#main2").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


gsap.to("#bottle", {
    rotate: -15,
    scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main2",
        start: "top 5%",
        end: "top -590%",
        scrub: true,
        pin: true
    }
});

gsap.to("#bottle", {
    scale:"0.4",
    scrollTrigger: {
        trigger: "#page6 h1",
        scroller: "#main2",
        start: "top 200%",
        end: "top -583%",
        scrub: true,
        pin: true
    }
});

let tl = gsap.timeline()

tl.from("#page2-img",{
    opacity:0,
    duration:1,
    scale:0.1,
})

tl.from("#bottle",{
    opacity:0,
    duration:1,
    scale:0.2,
})

tl.from()