
// ImageWalker class walks takes an image tag from the dom
// and a list of images paths. The result is an image tag
// that changes images every 2 seconds
class ImageWalker {
    constructor(elementId, imagePaths) {
        this.elementId = document.getElementById(elementId);
        this.imagePaths = imagePaths; // array of image paths relevant to image tag
    }

    // begin walking through images
    start(){
        const self = this;


        // start the count at 1 initially because we are already
        // on the first image when the page loads up
        let count = 1;

        // start interval to loop over images every two seconds
        setInterval(function () {
            console.log(self.elementId);
            console.log(self.imagePaths);
            self.elementId.src = self.imagePaths[count];
            count++;

            // if we have reached the last image, return to the
            // first image in the array and start all over
            if(count > self.imagePaths.length - 1 ){
                count = 0;
            }

        }, 2000);
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

imageWalkerOne.start();




