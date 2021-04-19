const frenchpress = document.getElementById('frenchpress');
const chemex = document.getElementById('chemex');
const moka = document.getElementById('moka');
const turkish = document.getElementById('turkish');
const espresso = document.getElementById('espresso');

gsap.from('.card',{
    opacity: 1,
    y: 70,
    duration: 1
  });


  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(frenchpress, {rotation:-30, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    frenchpress.addEventListener("mouseenter", () => hover.play());
    frenchpress.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });
  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(chemex, {rotation:30, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    chemex.addEventListener("mouseenter", () => hover.play());
    chemex.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });
  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(moka, {rotation:30, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    moka.addEventListener("mouseenter", () => hover.play());
    moka.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });
  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(turkish, {rotation:40, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    turkish.addEventListener("mouseenter", () => hover.play());
    turkish.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });
  gsap.utils.toArray(".card").forEach(img => {
    //let hover = gsap.to(ara, {scaleX: 1.05, scaleY:1.05, rotation:20, duration: 0.5, paused: true, ease: "Expo.easeOut"});
    let hover = gsap.to(espresso, {rotation:-40, duration: 0.5, delay: 0.7, opacity: 0.2, paused: true, ease: "Expo.easeOut"});
    espresso.addEventListener("mouseenter", () => hover.play());
    espresso.addEventListener("mouseleave", () => hover.reverse());
    console.log("hovering")
  });

/********************************** image click **********************************/
document.getElementById("frenchpress").onclick = function() {myFunction()};

function myFunction() {
    var el= document.getElementById("frenchpress");
    el.parentNode.removeChild(el);
} 



document.getElementById("chemex").onclick = function() {myFunction2()};

function myFunction2() {
    var el2= document.getElementById("chemex");
    el2.parentNode.removeChild(el2);
}   



document.getElementById("moka").onclick = function() {myFunction3()};

function myFunction3() {
    var el3= document.getElementById("moka");
    el3.parentNode.removeChild(el3);
}  


document.getElementById("turkish").onclick = function() {myFunction4()};

function myFunction4() {
    var el4= document.getElementById("turkish");
    el4.parentNode.removeChild(el4);
}  

document.getElementById("espresso").onclick = function() {myFunction4()};

function myFunction4() {
    var el4= document.getElementById("espresso");
    el4.parentNode.removeChild(el4);
}