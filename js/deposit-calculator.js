// Добавь это в существующий js/calculators.js
const depositBtn = document.getElementById('calcDepositBtn');

if (depositBtn) {
    depositBtn.addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('amount').value);
        const months = parseFloat(document.getElementById('months').value);
        const resultDisplay = document.getElementById('result');

        if (isNaN(amount) || isNaN(months) || amount <= 0 || months <= 0) {
            resultDisplay.innerText = "Укажите сумму и срок";
            resultDisplay.style.color = "#ff4444";
            return;
        }

        const rate = 0.15; // 15%
        // Формула простых процентов (как у тебя)
        const total = amount * (1 + rate * (months / 12));

        resultDisplay.style.color = "#00ff88"; // Зеленый для прибыли
        resultDisplay.innerText = `Итоговая сумма: ${total.toLocaleString('ru-RU')} ₽`;
    });
}