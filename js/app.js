/*

* LINDO FOR ETERNITY
* Application Controller
  */

/* ==========================================
DOM REFERENCES
========================================== */

const lobbyScreen =
    document.getElementById(
        "lobbyScreen"
    );

const waitingScreen =
    document.getElementById(
        "waitingScreen"
    );

const gameScreen =
    document.getElementById(
        "gameScreen"
    );

const resultScreen =
    document.getElementById(
        "resultScreen"
    );

const createRoomBtn =
    document.getElementById(
        "createRoomBtn"
    );

const joinRoomBtn =
    document.getElementById(
        "joinRoomBtn"
    );

const cancelRoomBtn =
    document.getElementById(
        "cancelRoomBtn"
    );

const playAgainBtn =
    document.getElementById(
        "playAgainBtn"
    );

const roomInput =
    document.getElementById(
        "roomInput"
    );

const roomCodeDisplay =
    document.getElementById(
        "roomCodeDisplay"
    );

const quoteText =
    document.getElementById(
        "quoteText"
    );

const quoteReference =
    document.getElementById(
        "quoteReference"
    );

const answerButtons =
    document.getElementById(
        "answerButtons"
    );

const hintBtn =
    document.getElementById(
        "hintBtn"
    );

const hintCount =
    document.getElementById(
        "hintCount"
    );

const hintText =
    document.getElementById(
        "hintText"
    );

const liveStatus =
    document.getElementById(
        "liveStatus"
    );

const roundNumber =
    document.getElementById(
        "roundNumber"
    );

const chichyScoreEl =
    document.getElementById(
        "chichyScore"
    );

const allInAllScoreEl =
    document.getElementById(
        "allInAllScore"
    );

const finalChichyScore =
    document.getElementById(
        "finalChichyScore"
    );

const finalAllInAllScore =
    document.getElementById(
        "finalAllInAllScore"
    );

const resultMessage =
    document.getElementById(
        "resultMessage"
    );

const toast =
    document.getElementById(
        "toast"
    );

const hearts =
    document.getElementById(
        "hearts"
    );

const celebrationLayer =
    document.getElementById(
        "celebrationLayer"
    );

/* ==========================================
SCREEN SWITCHING
========================================== */

function showScreen(screen) {
    [lobbyScreen, waitingScreen, gameScreen, resultScreen].forEach(el => el.classList.add("hidden"));
    screen.classList.remove("hidden");
    screen.classList.remove("screen");
    void screen.offsetWidth;
    screen.classList.add("screen");

}

/* ==========================================
TOAST
========================================== */

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}

/* ==========================================
PLAYER NAMES
========================================== */

function localPlayerName() {
    return isChichys ? "Chichy's" : "All_in_All";

}

function remotePlayerName() {
    return isChichys ? "All_in_All" : "Chichy's";

}

/* ==========================================
FLOATING HEARTS
========================================== */

function createBackgroundHearts() {
    const symbols = ["♥", "♡", "❤"];

    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");
        heart.className = "heart";
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = 12 + Math.random() * 20 + "px";
        heart.style.animationDuration = 10 + Math.random() * 14 + "s";
        heart.style.animationDelay = -Math.random() * 18 + "s";
        hearts.appendChild(heart);
    }

}

/* ==========================================
CREATE ROOM
========================================== */

createRoomBtn.addEventListener("click", () => {
    createRoom();
});

/* ==========================================
JOIN ROOM
========================================== */

joinRoomBtn.addEventListener(
    "click",
    () => {

        const code = roomInput.value.trim();

        if (!/^\d{4}$/.test(code)) {
            showToast("Please enter the 4-digit room code ❤️");
            return;
        }

        joinRoom(code);

    }
);

/* ==========================================
ROOM INPUT
========================================== */

roomInput.addEventListener(
    "input",
    () => {

        roomInput.value = roomInput.value.replace(/\D/g, "").slice(0, 4);

    }
);

roomInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            joinRoomBtn.click();
        }

    }
);

/* ==========================================
BACK
========================================== */

cancelRoomBtn.addEventListener(
    "click",
    () => {

        destroyPeer();

        roomCode = "";

        showScreen(lobbyScreen);

    }
);

/* ==========================================
GAME BACK NAVIGATION
========================================== */

const gameBackBtn = document.getElementById("gameBackBtn");

gameBackBtn.addEventListener(
    "click",
    () => {
        destroyPeer();
        roomCode = "";
        showScreen(lobbyScreen);
    }
);

/* ==========================================
GAME HINTS
========================================== */

hintBtn.addEventListener(
    "click",
    () => {
        if (typeof revealHint === "function") {
            revealHint();
        }
    }
);

/* ==========================================
PLAY AGAIN
========================================== */

playAgainBtn.addEventListener(
    "click",
    () => {
        playAgain();

    }
);

/* ==========================================
INITIALIZATION
========================================== */

function initializeApp() {

    createBackgroundHearts();

    updateScoreboard();

    showScreen(lobbyScreen);

}

initializeApp();
