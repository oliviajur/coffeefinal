const light = document.getElementById('light');
const medium = document.getElementById('medium');
const dark = document.getElementById('dark');

//********************************** image hover **********************************
gsap.from('.card',{
    opacity: 1,
    y: 70,
    duration: 1
  });
  
  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(light, {rotation:50, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    light.addEventListener("mouseenter", () => hover.play());
    light.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });

  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(medium, {rotation:-30, duration: 0.5, delay: 1, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    medium.addEventListener("mouseenter", () => hover.play());
    medium.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });

  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(dark, {rotation:70, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    dark.addEventListener("mouseenter", () => hover.play());
    dark.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });

/********************************** image click **********************************/
document.getElementById("light").onclick = function() {myFunction()};

function myFunction() {
    var el= document.getElementById("light");
    el.parentNode.removeChild(el);
} 


document.getElementById("medium").onclick = function() {myFunction1()};

function myFunction1() {
    var el= document.getElementById("medium");
    el.parentNode.removeChild(el);
} 


document.getElementById("dark").onclick = function() {myFunction2()};

function myFunction2() {
    var el= document.getElementById("dark");
    el.parentNode.removeChild(el);
} 