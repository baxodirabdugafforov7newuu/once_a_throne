window.addEventListener("scroll", function () {
    document.querySelector("main").style.transform = `translateY(${window.scrollY * 0.1}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".explore-btn");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-btn");

    // Open Modal
    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).classList.add("show");
        });
    });

    // Close Modal
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.closest(".modal").classList.remove("show");
        });
    });

    // Close modal when clicking outside the content
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".timeline-wrapper").forEach((wrapper, index) => {
        const timeline = wrapper.querySelector(".timeline");
        const leftBtn = wrapper.querySelector(".left-btn");
        const rightBtn = wrapper.querySelector(".right-btn");
        const timelineContainer = wrapper.querySelector(".timeline-container");

        // Debugging logs to check if elements are found
        console.log(`Timeline Wrapper ${index + 1}:`, wrapper);
        console.log("Timeline:", timeline);
        console.log("Left Button:", leftBtn);
        console.log("Right Button:", rightBtn);
        console.log("Timeline Container:", timelineContainer);

        if (!timeline || !leftBtn || !rightBtn) {
            console.error("Missing elements inside timeline-wrapper!");
            return; // Skip this iteration if elements are missing
        }

        const eventWidth = timeline.scrollWidth / timeline.children.length;
        const eventsPerPage = 3;
        const scrollAmount = eventWidth * eventsPerPage;

        // Scroll timeline left
        leftBtn.addEventListener("click", () => {
            console.log(`Scrolling timeline ${index + 1} left`);
            timeline.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        // Scroll timeline right
        rightBtn.addEventListener("click", () => {
            console.log(`Scrolling timeline ${index + 1} right`);
            timeline.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        // Navigation buttons (if timelineContainer exists)
        if (timelineContainer) {
            const navNext = wrapper.querySelector(".nav-next");
            const navPrev = wrapper.querySelector(".nav-prev");

            console.log("Nav Next:", navNext);
            console.log("Nav Prev:", navPrev);

            if (navNext) {
                navNext.addEventListener("click", () => {
                    console.log(`Navigating next in wrapper ${index + 1}`);
                    timelineContainer.scrollBy({ left: 320, behavior: "smooth" });
                });
            }

            if (navPrev) {
                navPrev.addEventListener("click", () => {
                    console.log(`Navigating previous in wrapper ${index + 1}`);
                    timelineContainer.scrollBy({ left: -320, behavior: "smooth" });
                });
            }
        }
    });
});





