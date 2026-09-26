/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", async function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const phoneError =
            document.getElementById("phoneError");

        const successMessage =
            document.getElementById("successMessage");


        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        successMessage.textContent = "";


        let valid = true;


        /* NAME */

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        } else if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            valid = false;

        }


        /* EMAIL */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;

        }


        /* PHONE */

        const phonePattern =
            /^[0-9+\-\s]{10,15}$/;

        if (phone === "") {

            phoneError.textContent =
                "Please enter your phone number.";

            valid = false;

        } else if (!phonePattern.test(phone)) {

            phoneError.textContent =
                "Please enter a valid phone number.";

            valid = false;

        }


        /* SEND CONTACT TO BACKEND */

        if (valid) {

            try {

                successMessage.textContent =
                    "Submitting your enquiry...";


                const response = await fetch(
                    "http://127.0.0.1:5000/api/contacts",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            name: name,
                            email: email,
                            phone: phone,
                            message: message
                        })
                    }
                );


                const result =
                    await response.json();


                if (response.ok && result.success) {

                    successMessage.textContent =
                        "Thank you! Your enquiry has been received.";

                    form.reset();

                } else {

                    successMessage.textContent =
                        result.message ||
                        "Something went wrong. Please try again.";

                }


            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );

                successMessage.textContent =
                    "Unable to connect to the server. Please try again.";

            }

        }

    });

}


/* ================= APPOINTMENT FORM ================= */

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* GET FORM VALUES */

            const name =
                document
                    .getElementById("appointmentName")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("appointmentEmail")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("appointmentPhone")
                    .value
                    .trim();

            const date =
                document
                    .getElementById("appointmentDate")
                    .value;

            const time =
                document
                    .getElementById("appointmentTime")
                    .value;

            const treatment =
                document
                    .getElementById("appointmentTreatment")
                    .value;

            const message =
                document
                    .getElementById("appointmentMessage")
                    .value
                    .trim();


            /* ERROR ELEMENTS */

            const nameError =
                document.getElementById(
                    "appointmentNameError"
                );

            const emailError =
                document.getElementById(
                    "appointmentEmailError"
                );

            const phoneError =
                document.getElementById(
                    "appointmentPhoneError"
                );

            const dateError =
                document.getElementById(
                    "appointmentDateError"
                );

            const timeError =
                document.getElementById(
                    "appointmentTimeError"
                );

            const treatmentError =
                document.getElementById(
                    "appointmentTreatmentError"
                );

            const successMessage =
                document.getElementById(
                    "appointmentSuccessMessage"
                );


            /* CLEAR ERRORS */

            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            dateError.textContent = "";
            timeError.textContent = "";
            treatmentError.textContent = "";
            successMessage.textContent = "";


            let valid = true;


            /* NAME VALIDATION */

            if (name === "") {

                nameError.textContent =
                    "Please enter your name.";

                valid = false;

            } else if (name.length < 2) {

                nameError.textContent =
                    "Name must contain at least 2 characters.";

                valid = false;

            }


            /* EMAIL VALIDATION */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {

                emailError.textContent =
                    "Please enter your email.";

                valid = false;

            } else if (!emailPattern.test(email)) {

                emailError.textContent =
                    "Please enter a valid email address.";

                valid = false;

            }


            /* PHONE VALIDATION */

            const phonePattern =
                /^[0-9+\-\s]{10,15}$/;

            if (phone === "") {

                phoneError.textContent =
                    "Please enter your phone number.";

                valid = false;

            } else if (!phonePattern.test(phone)) {

                phoneError.textContent =
                    "Please enter a valid phone number.";

                valid = false;

            }


            /* DATE VALIDATION */

            if (date === "") {

                dateError.textContent =
                    "Please select an appointment date.";

                valid = false;

            } else {

                const selectedDate =
                    new Date(date + "T00:00:00");

                const today =
                    new Date();

                today.setHours(0, 0, 0, 0);

                if (selectedDate < today) {

                    dateError.textContent =
                        "Appointment date cannot be in the past.";

                    valid = false;

                }

            }


            /* TIME VALIDATION */

            if (time === "") {

                timeError.textContent =
                    "Please select an appointment time.";

                valid = false;

            }


            /* TREATMENT VALIDATION */

            if (treatment === "") {

                treatmentError.textContent =
                    "Please select a treatment.";

                valid = false;

            }


            /* SEND APPOINTMENT TO BACKEND */

            if (valid) {

                try {

                    successMessage.textContent =
                        "Booking your appointment...";


                    const response = await fetch(
                        "http://127.0.0.1:5000/api/appointments",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body: JSON.stringify({

                                name: name,

                                email: email,

                                phone: phone,

                                date: date,

                                time: time,

                                treatment: treatment,

                                message: message

                            })
                        }
                    );


                    const result =
                        await response.json();


                    /* SUCCESS */

                    if (
                        response.ok &&
                        result.success
                    ) {

                        successMessage.textContent =
                            "Your appointment request has been submitted successfully!";

                        appointmentForm.reset();

                    } else {

                        successMessage.textContent =
                            result.message ||
                            "Unable to book appointment. Please try again.";

                    }


                } catch (error) {

                    console.error(
                        "Appointment form error:",
                        error
                    );

                    successMessage.textContent =
                        "Unable to connect to the server. Please try again.";

                }

            }

        }
    );

}