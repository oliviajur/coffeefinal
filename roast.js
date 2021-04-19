const images = document.querySelector ('.images-container');
const next = document.getElementById('next');
const prev = document.getElementById ('prev');

const first_card_clone = images.children[0].cloneNode(true);
const last_card_clone = images.children[images.children.length-1].cloneNode(true);
//we have cloned the 1st and last image and placed them inside the flexbox
//once you scroll to the clone 1 card we will jump them back to the "original" one
images.insertBefore (last_card_clone, images.children[0]);
images.appendChild (first_card_clone);

//putting this transform here to make sure we start at 1 and not the clone 4
images.style.transitionDuration = "0.0s";
images.style.transform = `translate(-750px)`; 

let current_card = 1; //the index here used to be 0 but when we added those clones and then we had to change it to 1, to startr on th e1 box

next.addEventListener ('click', () => {
    if (current_card < images.children.length - 1 ){ //this if statement is to prevernt off viewport scrolling, when we hit hte end of the image carousel we prevent them from clicking next
        current_card++;

        images.style.transitionDuration = "0.5s";
        images.style.transform = `translate(-${current_card * 750}px)`; //this is an example of string interpolation
        
        if (current_card == images.children.length - 1){
            setTimeout(() => {
                images.style.transitionDuration = "0.0s";
                images.style.transform = `translate(-750px)`; 
                //we then have to reset to the current card to be able to loop though it
                current_card = 1;
            }, 600); //putting this code into a timeout, so it delays its scroll to 1
            
        }//so this if statement is saying that if we get to the last card (clone1) then we gotta jump cak to the starts
    }else{
        return;
    }    
});

prev.addEventListener ('click', () => {
    if (current_card > 0 ){ //as long as current card is greater then 0 youre allowed to go previous
        current_card--; //decrementing curretn card

        images.style.transitionDuration = "0.5s";
        images.style.transform = `translate(-${current_card * 750}px)`; 
                
        if (current_card == 0){
            setTimeout(() => {
                images.style.transitionDuration = "0.0s";
                images.style.transform = `translate(-${(images.children.length - 2) * 750}px)`; 
                //we then have to reset to the current card to be able to loop though it
                current_card = images.children.length - 2;
            }, 600); //putting this code into a timeout, so it delays its scroll to 1
            
        }
    }else{
        return;
    }    
});

console.log("ajmemeni")