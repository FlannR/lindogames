/*

* LINDO FOR ETERNITY
* Game Engine
  */

const TOTAL_ROUNDS = 10;

let currentRound = 0;

let chichyScore = 0;
let allInAllScore = 0;

let currentQuote = null;
let currentQuoteIndex = null;

let localAnswer = null;
let remoteAnswer = null;
let hasHint = false;
let hintUses = 3;

let gameStarted = false;
let resultShown = false;

let roundTimer = null;

/* ==========================================
RESET
========================================== */

function resetGameState() {
    currentRound = 0;

    chichyScore = 0;
    allInAllScore = 0;

    currentQuote = null;
    currentQuoteIndex = null;

    localAnswer = null;
    remoteAnswer = null;
    hasHint = false;
    hintUses = 3;

    gameStarted = false;
    resultShown = false;

    clearTimeout(roundTimer);

    updateScoreboard();
    updateHintDisplay();

}

/* ==========================================
START HOST GAME
========================================== */

function startGameAsHost() {
    gameStarted = true;

    currentRound = 0;

    nextRound();

}

/* ==========================================
NEXT ROUND
========================================== */

function nextRound() {
    if (!isChichys) return;

    if (currentRound >= TOTAL_ROUNDS) {
        finishGame();
        return;
    }

    currentRound++;

    localAnswer = null;
    remoteAnswer = null;

    currentQuoteIndex = Math.floor(Math.random() * QUOTES.length);
    currentQuote = QUOTES[currentQuoteIndex];

    renderQuote();

    sendMessage({ type: "ROUND", round: currentRound, quoteIndex: currentQuoteIndex });

    liveStatus.textContent = "Choose your answer ❤️";

    updateScoreboard();

}

/* ==========================================
RENDER QUOTE
========================================== */

function renderQuote() {
    if (!currentQuote) return;

    roundNumber.textContent = currentRound;
    quoteText.textContent = currentQuote.phrase;
    quoteReference.textContent = hasHint ? currentQuote.reference : "";

    renderAnswers(currentQuote.options);
    updateHintDisplay();

}

/* ==========================================
ANSWER BUTTONS
========================================== */

function renderAnswers(options) {
    answerButtons.innerHTML = "";

    const shuffled = [...options].sort(() => Math.random() - 0.5);

    shuffled.forEach(option => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = option;
        button.disabled = false;
        button.addEventListener("click", () => submitAnswer(option, button));
        answerButtons.appendChild(button);
    });

}

/* ==========================================
SUBMIT ANSWER
========================================== */

function submitAnswer(
    answer,
    button
) {
    if (localAnswer !== null) return;

    localAnswer = answer;

    document.querySelectorAll(".answer").forEach(btn => btn.disabled = true);

    button.classList.add("selected");

    liveStatus.textContent = `${localPlayerName()} has locked in! ❤️`;

    sendMessage({ type: "ANSWER", answer, round: currentRound });

    evaluateRoundIfReady();

}

/* ==========================================
EVALUATE ROUND
========================================== */

function evaluateRoundIfReady() {
    if (localAnswer === null || remoteAnswer === null) return;

    // Chichy's device is authoritative.
    if (!isChichys) return;

    const quote = QUOTES[currentQuoteIndex];
    const chichyAnswer = localAnswer;
    const allInAllAnswer = remoteAnswer;

    const chichyCorrect = chichyAnswer === quote.speaker;
    const allInAllCorrect = allInAllAnswer === quote.speaker;

    if (chichyCorrect) chichyScore++;
    if (allInAllCorrect) allInAllScore++;

    updateScoreboard();

    sendMessage({
        type: "ROUND_RESULT",
        round: currentRound,
        correctAnswer: quote.speaker,
        chichyCorrect,
        allInAllCorrect,
        chichyScore,
        allInAllScore
    });

    showRoundResult(quote.speaker, chichyCorrect, allInAllCorrect);

    clearTimeout(roundTimer);

    roundTimer = setTimeout(() => {
        if (currentRound >= TOTAL_ROUNDS) {
            finishGame();
        } else {
            nextRound();
        }
    }, 1700);

}

/* ==========================================
SHOW ROUND RESULT
========================================== */

function showRoundResult(
    correctAnswer,
    chichyCorrect,
    allInAllCorrect
) {
    document.querySelectorAll(".answer").forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.remove("selected");
            button.classList.add("correct");
        }

        if (button.classList.contains("selected") && button.textContent !== correctAnswer) {
            button.classList.remove("selected");
            button.classList.add("wrong");
        }
    });

    if (chichyCorrect && allInAllCorrect) {
        liveStatus.textContent = "Both of you got it! Perfectly in sync. 💕";
    } else if (chichyCorrect) {
        liveStatus.textContent = "Chichy's got it! ❤️";
    } else if (allInAllCorrect) {
        liveStatus.textContent = "All_in_All got it! ❤️";
    } else {
        liveStatus.textContent = `The answer was ${correctAnswer}.`;
    }

}

/* ==========================================
FINISH
========================================== */

function finishGame() {
    if (resultShown) return;

    resultShown = true;

    sendMessage({ type: "GAME_OVER", chichyScore, allInAllScore });

    showResultScreen();

}

/* ==========================================
RESULT SCREEN
========================================== */

function showResultScreen() {
    finalChichyScore.textContent = chichyScore;
    finalAllInAllScore.textContent = allInAllScore;

    if (chichyScore > allInAllScore) {
        resultMessage.textContent = "Chichy's won this round, but Chido holds Mcklin's heart forever!";
    } else if (allInAllScore > chichyScore) {
        resultMessage.textContent = "All_in_All won this round! Chido is the queen of Mcklin's world!";
    } else {
        resultMessage.textContent = "A perfect match! Mcklin and Chido are completely in sync!";
    }

    showScreen(resultScreen);
    launchCelebration();

}

/* ==========================================
PLAY AGAIN
========================================== */

function playAgain() {
    resetGameState();

    resultShown = false;

    sendMessage({ type: "PLAY_AGAIN" });

    showScreen(gameScreen);

    if (isChichys) {
        nextRound();
    } else {
        liveStatus.textContent = "Chichy's is choosing your next adventure... ❤️";
    }

}

function revealHint() {
    if (hintUses <= 0) return;
    if (hasHint) return;

    hasHint = true;
    hintUses -= 1;

    hintText.textContent = currentQuote ? `Verse hint: ${currentQuote.reference}` : "";
    quoteReference.textContent = currentQuote ? currentQuote.reference : "";
    updateHintDisplay();
}

function updateHintDisplay() {
    hintCount.textContent = hintUses;
    hintBtn.disabled = hintUses <= 0 || hasHint;
    hintText.style.display = hasHint ? "block" : "none";
}

/* ==========================================
SCOREBOARD
========================================== */

function updateScoreboard() {
    chichyScoreEl.textContent = chichyScore;
    allInAllScoreEl.textContent = allInAllScore;

}

/* ==========================================
CELEBRATION
========================================== */

function launchCelebration() {
    celebrationLayer.innerHTML = "";

    const pieces = ["♥", "♡", "❤", "✦", "✧", "•"];

    for (let i = 0; i < 90; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay = Math.random() * 0.9 + "s";
        piece.style.fontSize = 9 + Math.random() * 15 + "px";
        celebrationLayer.appendChild(piece);
    }

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");
        heart.className = "burst-heart";
        heart.textContent = i % 2 === 0 ? "♥" : "💗";
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 280;
        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");
        heart.style.setProperty("--r", Math.random() * 100 - 50 + "deg");
        celebrationLayer.appendChild(heart);
    }

    setTimeout(() => {
        celebrationLayer.innerHTML = "";
    }, 4500);

}
