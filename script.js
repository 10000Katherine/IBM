// Function to add a new recommendation
function addRecommendation() {
  // Get the message from the form
  const message = document.getElementById("message").value;
  const name = document.getElementById("name").value;
  
  // Check if message is empty
  if (message.trim() === "") {
    alert("Please add a recommendation before submitting");
    return;
  }
  
  // Create a new recommendation element
  const newRecommendation = document.createElement("div");
  newRecommendation.className = "recommendation";
  
  // Format the recommendation with the name (if provided)
  const formattedName = name.trim() !== "" ? `- ${name}` : "";
  newRecommendation.innerHTML = `<p>" ${message} " ${formattedName}</p>`;
  
  // Add the new recommendation to the container
  const recommendationsContainer = document.querySelector(".recommendations-container");
  recommendationsContainer.appendChild(newRecommendation);
  
  // Clear the form
  document.getElementById("message").value = "";
  document.getElementById("name").value = "";
  
  // Show the confirmation popup
  showPopup(true);
}

// Function to show/hide the popup
function showPopup(isVisible) {
  const popup = document.getElementById("popup");
  popup.style.display = isVisible ? "flex" : "none";
}

// Add scroll event listener to show/hide scroll-to-top button
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.querySelector(".scroll-to-top");
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "flex";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  // Initially hide the button when page loads
  scrollToTopButton.style.display = "none";
});