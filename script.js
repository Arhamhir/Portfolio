document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    const pageLinkMap = {
        "homepage.html": "home-link",
        "project.html": "project-link",
        "interest.html": "interest-link",
        "socials.html": "socials-link"
    };

    const activeLinkId = pageLinkMap[currentPage];

    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add("active");
    }
});

