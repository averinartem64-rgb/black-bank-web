document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".vacancy-btn");
    const message = document.getElementById("vacancyMessage");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            message.textContent = "Спасибо за отклик! Наш HR свяжется с вами.";
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        });
    });

});