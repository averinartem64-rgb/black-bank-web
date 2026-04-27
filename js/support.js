document.addEventListener("DOMContentLoaded", () => {

    // FAQ раскрытие
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // Форма
    const form = document.getElementById("supportForm");
    const message = document.getElementById("supportMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        message.textContent = "Сообщение отправлено. Мы ответим вам в ближайшее время.";
        form.reset();
    });

});