const form = document.getElementById("userForm");

// Function to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // Check if input fields are empty
    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill out all fields."); // Display an alert if any field is empty
    } else {
        // If fields are not empty, you can perform further actions, like sending the form data to a server
        window.alert("Form submitted!\nName: " + name + "\nEmail: " + email);
        // Here you can add code to send the form data to a server using AJAX or fetch API
    }
    window.location.href="index.html";
});