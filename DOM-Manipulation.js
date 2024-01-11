// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
    // Accessing Elements
    const heading = document.getElementById("main-heading");
    const paragraph = document.getElementById("demo-paragraph");
    const button = document.getElementById("change-text-btn");
  
    // Event Listener for Button Click
    button.addEventListener("click", function() {
      // Change Text Content
      heading.textContent = "DOM Manipulation is Fun!";
      
      // Change HTML Content
      paragraph.innerHTML = "<em>Text changed dynamically!</em>";
  
      // Add a CSS class dynamically
      paragraph.classList.add("highlight");
    });
  
  });
  