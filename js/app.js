const tl = gsap.timeline({defaults: {ease: 'power1.out'} });

tl.to('.text', {y: "0%", duration: 1.5, stagger: 0.5, delay: 0.3});

tl.fromTo('#navbar', {opacity: 0 }, { opacity: 1, duration: 2}, '-=4');

