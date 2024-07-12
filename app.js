(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            const targetElement = document.getElementById(button.dataset.id);
            if (targetElement) {
                document.querySelector(".active").classList.remove("active");
                targetElement.classList.add("active");
            } else {
                console.error(`Element with ID "${button.dataset.id}" not found.`);
            }
        });
    });
})();
