gsap.registerPlugin(ScrollTrigger);

gsap.to(".heading1",{
    ease: "power3.out",
    opacity: 1,
    duration: 5,
})
gsap.to(".heading2",{
    delay: 1,
    ease: "power3.out",
    opacity: 1,
    duration: 5,
})

gsap.to(".demo1",{
    opacity: 1,
    duration: 0.5,
    ScrollTrigger: {
        trigger: "#page1",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,
    }
})
gsap.to(".demo2",{
    opacity: 1,
    duration: 0.5,
    ScrollTrigger: {
        trigger: "#page1",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,
    }
})
gsap.to(".demo3",{
    opacity: 1,
    duration: 0.5,
    ScrollTrigger: {
        trigger: "#page1",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,
    }
})
gsap.to(".demo4",{
    opacity: 1,
    duration: 0.5,
    ScrollTrigger: {
        trigger: "#page1",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,
    }
})
gsap.to(".demo5",{
    opacity: 1,
    duration: 0.5,
    ScrollTrigger: {
        trigger: "#page1",
        start: "top -100%",
        end: "bottom top",
        scrub: true,
        stagger: 0.1,
    }
})