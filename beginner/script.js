const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    /* NAME */

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    } else if (name.length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        isValid = false;
    }


    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    /* MESSAGE */

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    /* SUCCESS */

    if (isValid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted.";

        form.reset();
    }

});