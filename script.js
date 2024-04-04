document.addEventListener("DOMContentLoaded", function () {
    const billTotalInput = document.getElementById("billTotal");
    const tipRangeInput = document.getElementById("tip");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalBillwithtipInput = document.getElementById("totalBillwithtip");
    const container = document.querySelector('.container');

    billTotalInput.addEventListener("input", updateTip);
    tipRangeInput.addEventListener("input", updateTip);

   function updateTip() {
    const billTotalText = billTotalInput.value;
    const billTotal = parseFloat(billTotalText);
    const tipPercentage = parseFloat(tipRangeInput.value);

    if (isNaN(billTotal) || billTotalText.trim() === '' || /\D/.test(billTotalText)) {
        alert("Please enter a valid number for the Bill Total.");
        billTotalInput.value = billTotalText.replace(/\D/g, ''); 
    }

    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalBillwithtip = billTotal + tipAmount;

    tipPercentageInput.value = tipPercentage.toFixed(2) + "%";
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillwithtipInput.value = totalBillwithtip.toFixed(2);
}


    function changeBackground() {
        const lightColors = [
            ["#ffeadb", "#fcb071"], 
            ["#f0fff0", "#d2fefe"], 
            ["#fff9c4", "#c2e0f0"], 
            ["#e0f7fa", "#d6ffc2"] 
        ];

        const randomGradient = lightColors[Math.floor(Math.random() * lightColors.length)];
        const randomDirection = Math.floor(Math.random() * 4); 
        let gradientString = "";

        switch (randomDirection) {
            case 0:
                gradientString = `linear-gradient(to right, ${randomGradient[0]}, ${randomGradient[1]})`;
                break;
            case 1:
                gradientString = `linear-gradient(to left, ${randomGradient[0]}, ${randomGradient[1]})`;
                break;
            case 2:
                gradientString = `linear-gradient(to top, ${randomGradient[0]}, ${randomGradient[1]})`;
                break;
            case 3:
                gradientString = `linear-gradient(to bottom, ${randomGradient[0]}, ${randomGradient[1]})`;
                break;
        }

        container.style.background = gradientString;
    }

    setInterval(changeBackground, 2000); 
});
