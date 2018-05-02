
const hiThereFullText = "Hi there!";
const hiThere = document.getElementById('hiThere');

// wait to perform function until 500ms
// gives viewer enough time to notice page first
setTimeout(function(){

  let hiThereCount = 0;
  const hiThereInterval = setInterval(function() {

      if(hiThereCount > hiThereFullText.length - 1){
          clearInterval(hiThereInterval);
      } else {
          hiThere.innerText = hiThereFullText.slice(0, hiThereCount + 1);
          hiThereCount += 1;
      }
  }, 120);

}, 500);
