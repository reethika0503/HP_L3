document.addEventListener("DOMContentLoaded", function () {
  function generateRandomNumber() {
    // Generate a random number between 1 and 8
    return Math.floor(Math.random() * 8) + 1;
  }

  function resetPage() {
    // Refresh the page
    location.reload();
  }

  // Initial setup
  let randomNumber = generateRandomNumber();
  const chosenSequenceIndexSpan = document.getElementById("chosenSequenceIndex");
  const tryAgainButton = document.getElementById("tryAgainButton");
  const messageElement = document.getElementById("message");

  chosenSequenceIndexSpan.textContent = randomNumber;

  // Find all droppable elements
  const droppableElements = document.querySelectorAll('.droppable');

  // Add a click event listener to each droppable element
  droppableElements.forEach((droppable) => {
    droppable.addEventListener("click", function () {
      // Check if the clicked tile matches the random number
      const clickedNumber = parseInt(droppable.getAttribute('data-draggable-id'));

      if (clickedNumber === randomNumber) {
        // Show the inner box for the correct droppable
        const innerBox = droppable.querySelector(".inner-box");
        innerBox.style.display = "block";

        // Display "Congratulations!" message
        messageElement.textContent = "Congratulations!";
      } else {
        // Display "Try Again" message
        messageElement.textContent = "Try Again!";
      }
    });
  });

  // Add a click event listener to the Try Again button
  tryAgainButton.addEventListener("click", resetPage);
});
