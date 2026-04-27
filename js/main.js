document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки, начинающиеся с #
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            
            // Если это ссылка наверх
            if (id === '#top') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Скрипт загружен, ссылки активны");
});