
const rob = document.getElementById('rob');
const exc = document.getElementById('exc');
const ara = document.getElementById('ara');
const lib = document.getElementById('lib');
//********************************** image hover **********************************
gsap.from('.card',{
    opacity: 1,
    y: 70,
    duration: 1
  });
  
  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(ara, {rotation:20, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    ara.addEventListener("mouseenter", () => hover.play());
    ara.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });

  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(lib, {rotation:-50, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    lib.addEventListener("mouseenter", () => hover.play());
    lib.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });

  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(rob, {rotation:-50, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    rob.addEventListener("mouseenter", () => hover.play());
    rob.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });


  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(exc, {rotation:-50, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    exc.addEventListener("mouseenter", () => hover.play());
    exc.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });


/********************************** image click **********************************/
document.getElementById("exc").onclick = function() {myFunction()};

function myFunction() {
    var el= document.getElementById("exc");
    el.parentNode.removeChild(el);
} 



document.getElementById("rob").onclick = function() {myFunction2()};

function myFunction2() {
    var el2= document.getElementById("rob");
    el2.parentNode.removeChild(el2);
}   



document.getElementById("lib").onclick = function() {myFunction3()};

function myFunction3() {
    var el3= document.getElementById("lib");
    el3.parentNode.removeChild(el3);
}  


document.getElementById("ara").onclick = function() {myFunction4()};

function myFunction4() {
    var el4= document.getElementById("ara");
    el4.parentNode.removeChild(el4);
}  
 