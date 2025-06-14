//step 1: Define the checkAnswer function
function checkAnswer() {
    // step 2: Set the correct answer
    const correctAnswer = "4";

    // step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    //if no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }
    const userAnswer = selectedOption.value;
    // Step 4: Compare and give feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";

    }
}
    // Step 5: Add event listener to button
    document.getElementById("submit-answer").addEventListener("click",checkAnswer);
