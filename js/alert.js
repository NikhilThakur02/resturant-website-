// Show the custom alert with a dynamic message
function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    document.getElementById("alertMessage").innerText = message; // Set custom message
    alertBox.style.display = "flex"; // Show the alert
    alertBox.style.opacity = "1"; // Ensure it's visible
}

// Close the alert
function closeAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.style.opacity = "0"; // Fade out effect
    setTimeout(() => { alertBox.style.display = "none"; }, 300); // Hide after fade-out
}
