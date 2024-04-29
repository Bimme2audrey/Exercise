
document.addEventListener("DOMContentLoaded", function() {
    // Get the project and skill sections
    const projectSection = document.querySelector(".project-section");
    const skillSection = document.querySelector(".skill-section");

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animations
    function handleAnimations() {
        if (isInViewport(projectSection)) {
            projectSection.classList.add("slide-in-left");
        }
        if (isInViewport(skillSection)) {
            skillSection.classList.add("slide-in-right");
        }
    }

    // Event listener for scrolling
    window.addEventListener("scroll", handleAnimations);

    // Initial check
    handleAnimations();
});


document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarLinks = document.getElementById("navbarLinks");

    navbarToggle.addEventListener("click", function() {
        navbarLinks.classList.toggle("active");

        // Toggle the hamburger icon
        const toggleIcon = navbarToggle.querySelectorAll(".toggle-icon");
        toggleIcon.forEach(icon => icon.classList.toggle("active"));
    });
});
