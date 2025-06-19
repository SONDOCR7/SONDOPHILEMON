document.addEventListener("DOMContentLoaded", function () {
    window.openModal = function () {
        const modal = document.getElementById("project-modal");
        if (modal) modal.style.display = "flex";
    };

    window.closeModal = function () {
        const modal = document.getElementById("project-modal");
        if (modal) modal.style.display = "none";
    };
});
