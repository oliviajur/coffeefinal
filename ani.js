gsap.registerPlugin(ScrollTrigger);
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');


//this timeline contains the intorduction primary animations for the landing page
var tl = gsap.timeline({default:{duration: 1}})
tl.from(".box2", {y:70, opacity: 0})
  .fromTo('.imageani1', 0.4, {scale:0},{scale:1}, 0.5)
  .fromTo('.imageani2', 0.4, {scale:0},{scale:1}, 0.3)
  .fromTo('.imageani3', 0.4, {scale:0},{scale:1}, 0.6)
  .fromTo('.imageani4', 0.4, {scale:0},{scale:1}, 0.7)
  .from('.box3', {opacity:0, y:-15, ease:'Power3.easeInOut' })
  .from('.box1', {opacity:0, y:-15, ease:'Power3.easeInOut' })
  .from('.box4', {opacity:0, y:10, ease:'Power3.easeInOut', delay:0.1 })
//this timeline contains the introduction primary animations for the landing page

//********************************** this timeline contains the scrolling primary animations for the landing page
var targets = document.querySelectorAll(".imageani1");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 5},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 50%",
        end: "center 20%"
      }
    })
    .fromTo(target, {x: 20, y: 60, ease:'back.out(1.7)'}, {x:-100, y: -700,ease:'back.out(1.7)', y:-200})
    .from(target, {opacity: 1, duration: 0.8 }, 0)
    .to(target, {opacity: 1, duration: 0.2,}, 0.8)
  });

var targets = document.querySelectorAll(".imageani2");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 5},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 50%",
        end: "center 20%"
      }
    })
    .fromTo(target, {x:0, y: 50, ease:'back.out(1.7)'}, {x:-100,y: -100, ease:'back.out(1.7)', y:-150})
    .from(target, {opacity: 1, duration: 0.2 }, 0)
    .to(target, {opacity: 1, duration: 0.2,}, 0.8)
  });
  
var targets = document.querySelectorAll(".imageani3");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 5},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 50%",
        end: "center 20%"
      }
    })
    .fromTo(target, {x: 4, y: 20, ease:'back.out(1.7)'}, {x: 200, y:-250, ease:'back.out(1.7)'})
    .from(target, {opacity: 1, duration: 0.8 }, 0)
    .to(target, {opacity: 1, duration: 0.2,}, 0.8)
  });  

var targets = document.querySelectorAll(".imageani4");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 5},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 50%",
        end: "center 20%"
      }
    })
    .fromTo(target, {x: 5, y: 2, ease:'back.out(1.7)'}, {x: 100, y: -200, ease:'back.out(1.7)'})
    .from(target, {opacity: 1, duration: 0.2 }, 0)
    .to(target, {opacity: 1, duration: 0.2,}, 0.8)
  });  
//********************************** this timeline contains the scrolling primary animations for the landing page


//********************************** image hover **********************************
gsap.from('.imageani1',{
  opacity: 0,
  y: 60,
  duration: 0.5
});

gsap.utils.toArray(".imageani1").forEach(h1 => {
  let hover = gsap.to(image1, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
  image1.addEventListener("mouseenter", () => hover.play());
  image1.addEventListener("mouseleave", () => hover.reverse());
});

gsap.from('.imageani2',{
  opacity: 0,
  y: 50,
  duration: 0.5
});

gsap.utils.toArray(".imageani2").forEach(h1 => {
  let hover = gsap.to(image2, {scaleX: 1.05, scaleY:1.05, rotation:-10, duration: 0.5, paused: true, ease: "Expo.easeOut"});
  image2.addEventListener("mouseenter", () => hover.play());
  image2.addEventListener("mouseleave", () => hover.reverse());
});

gsap.from('.imageani3',{
  opacity: 0,
  y: 20,
  duration: 0.5
});

gsap.utils.toArray(".imageani3").forEach(h1 => {
  let hover = gsap.to(image3, {scaleX: 1.05, scaleY:1.05, rotation:15, duration: 0.5, paused: true, ease: "Expo.easeOut"});
  image3.addEventListener("mouseenter", () => hover.play());
  image3.addEventListener("mouseleave", () => hover.reverse());
});

gsap.from('.imageani4',{
  opacity: 0,
  y: 2,
  duration: 0.5
});

gsap.utils.toArray(".imageani4").forEach(h1 => {
  let hover = gsap.to(image4, {scaleX: 1.05, scaleY:1.05, rotation:-50, duration: 0.5, paused: true, ease: "Expo.easeOut"});
  image4.addEventListener("mouseenter", () => hover.play());
  image4.addEventListener("mouseleave", () => hover.reverse());
});

//********************************** hover **********************************

//this timeline contains the animations for the primary page
var targets = document.querySelectorAll(".box5");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 1},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 80%",
        end: "center top"
      }
    })
    .fromTo(target, {y: 100}, {y: 50})
    .from(target, {opacity: 0, duration: 0.2 }, 0)
    .to(target, {opacity: 1, duration: 0.2,}, 0.8)
  });

  var targets = document.querySelectorAll(".box6");
  targets.forEach(target => {
      const tl = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center 80%",
          end: "center top"
        }
      })
      .fromTo(target, {y: 100}, {y: 50})
      .from(target, {opacity: 0, duration: 0.2 }, 0)
      .to(target, {opacity: 1, duration: 0.2,}, 0.8)
    });

////
var targets = document.querySelectorAll(".box7")
targets.forEach(target => {
        const tl = gsap.timeline({
          defaults: {duration: 1},
          scrollTrigger: {
            trigger: target,
            scrub: true,
            start: "center bottom",
        end: "center top"
      }
    })
    .fromTo(target, {y: 100}, {y: 50})
    .from(target, {opacity: 0, duration: 0.2}, 0)
    .to(target, {opacity: 1, duration: 0.2}, 0.8)
  })

  var targets = document.querySelectorAll(".box8");
  targets.forEach(target => {
      const tl = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center bottom",
          end: "center top"
        }
      })
      .fromTo(target, {y: 100}, {y: 50})
      .from(target, {opacity: 0, duration: 0.2 }, 0)
      .to(target, {opacity: 1, duration: 0.2,}, 0.8)
    });

////
var targets = document.querySelectorAll(".box9");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 1},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center center",
        end: "center 60%"
      }
    })
    .fromTo(target, {y: -50}, {y: 50})
    .from(target, {opacity: 0, duration: 0.2}, 0)
    .to(target, {opacity: 1, duration: 0.2}, 0.8)
  });  

  var targets = document.querySelectorAll(".box10");
  targets.forEach(target => {
      const tl = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center bottom",
          end: "center top"
        }
      })
      .fromTo(target, {y: 100}, {y: 50})
      .from(target, {opacity: 0, duration: 0.2 }, 0)
      .to(target, {opacity: 1, duration: 0.2,}, 0.8)
    });
///
var targets = document.querySelectorAll(".box11")
targets.forEach(target => {
        const tl = gsap.timeline({
          defaults: {duration: 1},
          scrollTrigger: {
            trigger: target,
            scrub: true,
            start: "center 60%",
        end: "top top"
      }
    })
    .fromTo(target, {y: -50}, {y: 50})
    .from(target, {opacity: 0, duration: 0.2}, 0)
    .to(target, {opacity: 1, duration: 0.2}, 0.8)
  })  

  var targets = document.querySelectorAll(".box12");
  targets.forEach(target => {
      const tl = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center bottom",
          end: "center 40%"
        }
      })
      .fromTo(target, {y: 100}, {y: 50})
      .from(target, {opacity: 0, duration: 0.2 }, 0)
      .to(target, {opacity: 1, duration: 0.2,}, 0.8)
    });

///
var targets = document.querySelectorAll(".box13");
targets.forEach(target => {
    const tl = gsap.timeline({
      defaults: {duration: 1},
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: "center 80%",
        end: "center bottom"
      }
    })
    .fromTo(target, {y: -50}, {y: 50})
    .from(target, {opacity: 0, duration: 0.2}, 0)
    .to(target, {opacity: 1, duration: 0.2}, 0.8)
  }); 

  var targets = document.querySelectorAll(".box14");
  targets.forEach(target => {
      const tl = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center 90%",
          end: "center 20%"
        }
      })
      .fromTo(target, {y: 100}, {y: 50})
      .from(target, {opacity: 0, duration: 0.2 }, 0)
      .to(target, {opacity: 1, duration: 0.2,}, 0.8)
    });

//
var targets = document.querySelectorAll(".box15")
targets.forEach(target => {
        const tl = gsap.timeline({
          defaults: {duration: 1},
          scrollTrigger: {
            trigger: target,
            scrub: true,
            start: "center 80%",
        end: "center 10%"
      }
    })
    .fromTo(target, {y: 50}, {y: -50})
    .from(target, {opacity: 0, duration: 0.2}, 0)
    .to(target, {opacity: 1, duration: 0.2}, 0.8)
  }) 

  var targets = document.querySelectorAll(".box16");
  targets.forEach(target => {
      const tl = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "center bottom",
          end: "center 70%"
        }
      })
      .fromTo(target, {y: 100}, {y: 50})
      .from(target, {opacity: 0, duration: 0.2 }, 0)
      .to(target, {opacity: 1, duration: 0.2,}, 0.8)
    });
//this timeline contains the animations for the primary page
//sidenote - the easier waay to seet this up would have been to put all the parameters into an array and create a 
//timeline function which would go through the array and animate the h1,h2 and pre element.


//this is the code that makes the images remove onclick
document.getElementById("image1").onclick = function() {myFunction()};

function myFunction() {
    var el= document.getElementById("image1");
    el.parentNode.removeChild(el);
}    


document.getElementById("image2").onclick = function() {myFunction2()};

function myFunction2() {
    var el2= document.getElementById("image2");
    el2.parentNode.removeChild(el2);
} 

document.getElementById("image3").onclick = function() {myFunction3()};

function myFunction3() {
    var el3= document.getElementById("image3");
    el3.parentNode.removeChild(el3);
} 

document.getElementById("image4").onclick = function() {myFunction4()};

function myFunction4() {
    var el4= document.getElementById("image4");
    el4.parentNode.removeChild(el4);
} 
//this is the code that makes the images remove onclick




