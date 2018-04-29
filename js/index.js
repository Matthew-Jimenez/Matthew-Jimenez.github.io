// FIXME: Perfect case to use a class, since we are going to do this atleast 3 times

// image paths to loop over
const projectOneImages = [
    "./img/retrain-dash-empty.PNG",
    "./img/retrain.PNG",
    "./img/retrain-dash.PNG",
];

// grab the image html element
const projectOne = document.getElementById('project-1');

// start the count at 1 initially because we are already
// on the first image when the page loads up
let count = 1;

// start interval to loop over images every two seconds
setInterval(function () {
    projectOne.src = projectOneImages[count];
    count++;

    // if we have reached the last image, return to the
    // first image in the array and start all over
    if(count > projectOneImages.length - 1 ){
        count = 0;
    }

}, 2000);

