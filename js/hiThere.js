
const hiThereFullText = '"Hi there!"';
const hiThere = document.getElementById('hiThere');
const hiThereContainer = document.getElementById('hiThereContainer')
const mainContainer = document.getElementById('main');

// wait to perform function until 200ms
// gives viewer enough time to notice page first
setTimeout(function(){
    addOnTextLoop();
}, 200);


function addOnTextLoop(){

    // start at first string character
    // add next string character to DOM
    // every 120 ms
    let hiThereCount = 0;
    const hiThereInterval = setInterval(function() {
  
        if(hiThereCount > hiThereFullText.length - 1){
            // switch to main content
            switchContainers();
            clearInterval(hiThereInterval);
        } else {
            hiThere.innerText = hiThereFullText.slice(0, hiThereCount + 1);
            hiThereCount += 1;
        }
    }, 120);
}

function switchContainers() {
    setTimeout(function(){
        hiThereContainer.setAttribute('style', 'display: none;')
        mainContainer.setAttribute('style', 'display: block;')
        mainContainer.classList = "container fadeIn";
    }, 200);
}
