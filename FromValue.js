document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault();


        let formData = {
            firstName: document.getElementById("firstName").value.trim(),
            lastName: document.getElementById("lastName").value.trim(),
            email: document.getElementById("email").value.trim(),
            phoneNumber: document.getElementById("phoneNumber").value.trim(),
            companyName: document.getElementById("companyName").value.trim(),
            jobTitle: document.getElementById("jobTitle").value.trim(),
            companySize: document.getElementById("companySize").value,
            companySize2: document.getElementById("companySize2").value,
            country: document.getElementById("country").value,
            industry: document.getElementById("industry").value,
            termsAccepted: document.getElementById("terms1").checked,
            newsletter: document.getElementById("terms2").checked
        };

        
        for (let key in formData) {
            if ((formData[key] === "" || formData[key] === false) && key !== "newsletter") {
                alert("Please fill out all required fields.");
                return;
            }
        }

        
        localStorage.setItem("formData", JSON.stringify(formData));

    
        alert("Form submitted successfully!");

        
        document.getElementById("userForm").reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    const listItems = document.querySelectorAll("ul li");

    function handleScrollAnimation() {
        const rect = heroText.getBoundingClientRect();
        
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            heroText.style.animation = "fadeSlideUp 1s ease-out forwards";
        } else {
            heroText.style.animation = "none"; // Reset when out of view
        }

        listItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top < window.innerHeight * 0.8 && itemRect.bottom > 0) {
                item.style.animation = `fadeSlideUp 0.8s ease-out forwards`;
                item.style.animationDelay = `${index * 0.3}s`;
            } else {
                item.style.animation = "none"; // Reset when out of view
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Trigger once on load
});

