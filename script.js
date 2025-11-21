const bmiCalcBtn = document.getElementById("bmiCalcBtn");
bmiCalcBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const heightRaw = document.getElementById("height").value;
    const weightRaw = document.getElementById("weight").value;
    const outputEl = document.getElementById("bmiOutput");

    const height = parseFloat(heightRaw);
    const weight = parseFloat(weightRaw);

    if (!isFinite(height) || !isFinite(weight) || height <= 0 || weight <= 0) {
        outputEl.textContent = "Please enter valid positive height and weight.";
        return;
    }

    // If user entered height in centimeters (e.g. 170), convert to meters.
    let heightMeters = height;
    if (heightMeters > 3) {
        heightMeters = heightMeters / 100;
    }

    const bmiValue = weight / (heightMeters * heightMeters);
    const bmi = bmiValue.toFixed(2);

    let message = `Your BMI is ${bmi}. `;
    if (bmiValue < 18.5) message += "You're underweight.";
    else if (bmiValue < 25) message += "You're in the normal range.";
    else if (bmiValue < 30) message += "You're overweight.";
    else message += "You're in the obese range.";

    outputEl.textContent = message;
});
