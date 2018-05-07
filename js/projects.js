
// ImageWalker class walks takes an image tag from the dom
// and a list of images paths. The result is an image tag
// that walks over the image paths every two seconds when a
// user hovers over the image element.
class ImageWalker {
    constructor(elementId, imagePaths) {

        this.elementId = document.getElementById(elementId);
        this.imagePaths = imagePaths; // array of image paths relevant to image tag
        this.count = 1;
        this.intervalFunction = function() {
            // placeholder for start interval,
            // declared in class in order to use
            // as a way to cancel the setInterval later
        };


        // start and stop are called when the element is hovered over
        const self = this;

        // start
        this.elementId.addEventListener('click', function(){
            self.start();
        })
    }

    // begin walking through images
    start(){
        const self = this;

        // start interval to loop over images every two seconds
            self.elementId.src = self.imagePaths[self.count];
            self.count++;

            // if we have reached the last image, return to the
            // first image in the array and start all over
            if(self.count > self.imagePaths.length - 1 ){
                self.count = 0;
            }

    }

}



// image paths to loop over
const projectOneImages = [
    "./img/retrain-dash-empty.PNG",
    "./img/retrain.PNG",
    "./img/retrain-dash.PNG",
];

// grab the image html element
const imageWalkerOne = new ImageWalker('project-1', projectOneImages);

// image paths to loop over
const projectTwoImages = [
    "./img/revibeForum.PNG",
    "./img/revibeComments.PNG",
    "./img/revibeFestivalSearch.PNG",
    "./img/revibeProfile.PNG",
];

const imageWalkerTwo = new ImageWalker('project-2', projectTwoImages);


// image paths to loop over
const projectThreeImages = [
    "./img/coffee-1.PNG",
    "./img/coffee-2.PNG",
    "./img/coffee-3.PNG",
    "./img/coffee-4.PNG",
    "./img/coffee-5.PNG",
    "./img/coffee-6.PNG"
];

const imageWalkerThree = new ImageWalker('project-3', projectThreeImages);

// image paths to loop over
const projectFourImages = [
    "./img/utube-1.PNG",
    "./img/utube-2.PNG",
    "./img/utube-3.PNG",
    "./img/utube-4.PNG",
    "./img/utube-5.PNG"
];

const imageWalkerFour = new ImageWalker('project-4', projectFourImages);





