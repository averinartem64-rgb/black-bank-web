document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("partnersForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        message.textContent = "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
        form.reset();
    });

});