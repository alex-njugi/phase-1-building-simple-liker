// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Hide the error modal when the page loads
document.getElementById("modal").classList.add("hidden");

// Select all the heart elements
const hearts = document.querySelectorAll(".like-glyph");

// Add event listeners to each heart
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    // Simulate a server request
    mimicServerCall()
      .then(() => {
        // Toggle heart appearance
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Show the error modal with the error message
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden");
        modal.querySelector("#modal-message").innerText = error;

        // Hide the modal after 3 seconds
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
