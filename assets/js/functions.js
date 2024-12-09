// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Initialize button text based on saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme); // Apply saved theme
  themeToggle.textContent = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
}

// Toggle Theme on Button Click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update button text
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    themeToggle.textContent = "Light Mode";
  } else {
    localStorage.removeItem("theme");
    themeToggle.textContent = "Dark Mode";
  }
});



function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Update every second







document.getElementById("submitEnhancedForm").addEventListener("click", function () {
  // Collect form data
  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const age = parseFloat(document.getElementById("age").value);
  const experience = parseFloat(document.getElementById("experience").value);
  const rating = parseFloat(document.getElementById("rating").value);
  const projects = parseFloat(document.getElementById("projects").value);
  const score = parseFloat(document.getElementById("score").value);

  // Validate email and phone
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email format!");
    return;
  }
  if (!/^[0-9\-+\s]+$/.test(phone)) {
    alert("Invalid phone number!");
    return;
  }


  
  // Calculate the average of numeric attributes
  const average = (age + experience + rating + projects + score) / 5;

  // Display the results dynamically
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>Name:</strong> ${name} ${surname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Average of Numeric Attributes:</strong> <span style="color: ${
      average < 40 ? "red" : average < 70 ? "orange" : "green"
    };">${average.toFixed(2)}</span></p>
  `;
});
