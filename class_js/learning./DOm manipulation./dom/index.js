function propose() {
    // Step 1: Good Morning message
    alert("Good Morning!");

    // Step 2: Ask how they're doing
    let howAreYou = prompt("How are you?type--well/good/fine,not well.");

    // Step 3: If they're well, proceed with the proposal
    if (howAreYou.toLowerCase() === "well" || howAreYou.toLowerCase() === "good" || howAreYou.toLowerCase() === "fine") {
        let askQuestion = prompt("I wanna ask a question, should I? (yes/no)");

        // If they say yes, proceed with the proposal
        while (askQuestion.toLowerCase() !== "yes") {
            askQuestion = prompt("You need to say yes, you couldn't type no! So, kindly proceed with yes.");
        }

        let loveAnswer = prompt("Do you love me? (yes/no)");

        // If they say no to love, insist they can't say no
        while (loveAnswer.toLowerCase() !== "yes") {
            loveAnswer = prompt("You can't say that, because you fell first and I fell harder, so you can't deny! Do you love me?");
        }

        let marryAnswer = prompt("Will you marry me? (yes/no)");

        // If they say no to marriage, insist they can't say no
        while (marryAnswer.toLowerCase() !== "yes") {
            marryAnswer = prompt("There is no chance of saying no, so choose yes! Will you marry me?");
        }

        alert("Love you, my love!");
    } else {
        // Step 4: If they're not well
        alert("No issue, take some rest.");
    }
}

// Call the function
propose();
