document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calcBtn');
    
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const amount = parseFloat(document.getElementById('loanAmount').value);
            const months = parseFloat(document.getElementById('loanMonths').value);
            const resultDisplay = document.getElementById('loanResult');

            // Простая валидация (банк не выдает кредит на 0 месяцев)
            if (isNaN(amount) || isNaN(months) || months <= 0 || amount <= 0) {
                resultDisplay.innerText = "Введите корректные данные";
                resultDisplay.style.color = "red";
                return;
            }

            const annualRate = 0.175; // 17.5%
            const monthlyRate = annualRate / 12;

            // Аннуитетный платеж
            const payment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

            resultDisplay.style.color = "#ffd700";
            resultDisplay.innerText = `Ежемесячный платёж: ${payment.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽`;
        });
    }
});