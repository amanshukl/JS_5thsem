document.getElementById("calculateBtn").addEventListener("click", function () {
    const dobInput = document.getElementById("dob").value;
    const outputDiv = document.getElementById("output");

    if (!dobInput) {
        outputDiv.textContent = "Please select your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    outputDiv.textContent = `You are ${age} years old.`;
});