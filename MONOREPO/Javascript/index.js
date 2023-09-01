const form = document.getElementById("checkboxForm");
const shuffleButton = document.getElementById("shuffleButton");
const changeButton = document.getElementById("changeButton");
const showSelectedButton = document.getElementById("showSelectedButton");
const outputDiv = document.getElementById("output");
const checkboxInputs = form.querySelectorAll("input[type='checkbox']");


const originalLabels = ["Internship", "Pabau", "Employment", "Career"];
const newLabels = ["Junior", "Intermediate", "Senior", "Expert"];
let isLabelChanged = false;

// Shuffle button
shuffleButton.addEventListener("click", () => {
    const checkboxLabel = form.querySelector(".checkboxLabel");
    const checkboxes = Array.from(checkboxLabel.querySelectorAll(".checkboxContainer"));
    checkboxes.sort(() => Math.random() - 0.5).forEach(checkbox => checkboxLabel.appendChild(checkbox));
});

// Change Values Button
changeButton.addEventListener("click", () => {
    const labelElements = form.querySelectorAll(".checkboxContainer label");
    labelElements.forEach((label, index) => {
        label.childNodes[1].nodeValue = isLabelChanged ? originalLabels[index] : newLabels[index];
    });
    isLabelChanged = !isLabelChanged;
});

//Show Selected Values Button
showSelectedButton.addEventListener("click", () => {
    const selectedCheckboxes = Array.from(checkboxInputs).filter(checkbox => checkbox.checked);
    const selectedValues = selectedCheckboxes.map(checkbox => {
        const index = originalLabels.indexOf(checkbox.value);
        if (index !== 0) {
            return isLabelChanged ? newLabels[index] : originalLabels[index];
        }
        return checkbox.value;
    });
    outputDiv.textContent = `Selected Values: ${selectedValues.join(", ")}`;
});