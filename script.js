function validateEmail(emailId) {
    var email = document.getElementById(emailId).value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        alert("Email field cannot be empty");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    } else {
        alert("Subscription successful!");
        return true;
    }
} 