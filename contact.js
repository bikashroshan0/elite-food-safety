
/* ==========================================
   ELITE FOOD SAFETY - EMAILJS CONTACT FORM
========================================== */

// EMAILJS CONFIGURATION
const EMAILJS_PUBLIC_KEY = "vC90snqUXKl852oVj";
const EMAILJS_SERVICE_ID = "service_4jhj0uz";
const EMAILJS_TEMPLATE_ID = "template_i6hbfqn";

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    // No form on this page
    if (!enquiryForm) return;

    // Get submit button directly from the form
    const submitBtn = enquiryForm.querySelector(
        'button[type="submit"]'
    );

    // Initialize EmailJS
    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

    enquiryForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        if (!enquiryForm.reportValidity()) return;

        const originalButtonHTML = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        try {

            // Send enquiry through EmailJS
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                enquiryForm
            );

            // Display success message
            const contactGrid = enquiryForm.closest(".contact-grid");

            contactGrid.innerHTML = `
                <div style="
                    grid-column: 1 / -1;
                    background: #ffffff;
                    padding: 70px 25px;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 10px 35px rgba(0,0,0,0.08);
                ">

                    <div style="
                        color: #16c45b;
                        font-size: 65px;
                        margin-bottom: 20px;
                    ">
                        <i class="fa-regular fa-circle-check"></i>
                    </div>

                    <h2 style="margin-bottom: 15px;">
                        Message Sent!
                    </h2>

                    <p style="margin-bottom: 30px;">
                        We have received your message and will contact
                        you shortly.
                    </p>

                    <button type="button"
                        class="button primary"
                        id="sendAnotherMessage">
                        Send Another Message
                    </button>

                </div>
            `;

            document.getElementById("sendAnotherMessage")
                .addEventListener("click", function () {
                    window.location.reload();
                });

        } catch (error) {

            console.error("EmailJS Error:", error);

            alert(
                "Unable to send your enquiry. Please try again later."
            );

            submitBtn.disabled = false;
            submitBtn.innerHTML = originalButtonHTML;

        }

    });

});

