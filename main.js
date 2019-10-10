// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// // Your JavaScript code goes here!

// //grab the stuff that I want to change
// let deactivatedHeart = document.querySelector(".like-glyph");

// //event handlers
// const toggleHeart = event => {
//   //change class to activated-heart
//   event.target.classList.add("activated-heart");
// };

// //add event listeners
// deactivatedHeart.addEventListener("click", toggleHeart);

//==============================================================================

//grab shit
container = document.getElementById("card-container");

//dom manipulation

//event handlers
const toggleHeart = event => {
  if (event.target.className === "like-glyph") {
    mimicServerCall()
      .then(serverMessage => {
        event.target.classList.toggle("activated-heart");
      })
      .catch(() => {
        document.getElementById("modal").className = "";
        setTimeout(() => {
          document.getElementById("modal").className = "hidden";
        }, 300);
      });
  } else if (event.target.className.includes("activated-heart")) {
    event.target.classList.toggle("activated-heart");
  }
};
//event listeners
container.addEventListener("click", toggleHeart);

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
