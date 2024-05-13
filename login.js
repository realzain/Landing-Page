document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Dummy signup logic (assuming success)
    // You might want to replace this with actual signup logic
    var successMessage = "Account created successfully for " + fullname + ". You can now log in.";
    document.getElementById("signupForm").reset();
    document.getElementById("successMessage").textContent = successMessage;
});
