const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 0.75, stagger: 0.3, delay: 1.3 });

tl.fromTo("#navbar", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
