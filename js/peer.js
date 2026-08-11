/*

* LINDO FOR ETERNITY
* PeerJS Multiplayer Layer
  */

const PEER_PREFIX = "lindo-eternity-";

let peer = null;
let connection = null;

let isChichys = false;
let roomCode = "";

/* ==========================================
CONNECTION STATUS
========================================== */

function setConnectionStatus(connected) {
    const dot = document.getElementById("connectionDot");
    if (!dot) return;
    dot.classList.toggle("connected", connected);

}

/* ==========================================
DESTROY CONNECTION
========================================== */

function destroyPeer() {
    if (connection) {
        try { connection.close(); } catch (err) { }
    }

    if (peer) {
        try { peer.destroy(); } catch (err) { }
    }

    connection = null;
    peer = null;

    setConnectionStatus(false);

}

/* ==========================================
SEND DATA
========================================== */

function sendMessage(message) {
    if (!connection || !connection.open) return false;

    try {
        connection.send(message);
        return true;
    } catch (error) {
        console.error("Send failed:", error);
        return false;
    }

}

/* ==========================================
SETUP CONNECTION
========================================== */

function setupConnection(conn) {
    connection = conn;

    // Move to the game screen as soon as the data connection exists.
    showScreen(gameScreen);

    const onOpen = () => {
        setConnectionStatus(true);
        showToast(`Connected! ${remotePlayerName()} is here ❤️`);

        if (isChichys) {
            resetGameState();
            sendMessage({ type: "GAME_START" });
            startGameAsHost();
        } else {
            liveStatus.textContent = "Chichy's is getting the first quote ready... ❤️";
        }
    };

    connection.on("data", message => handleMessage(message));
    connection.on("open", onOpen);
    if (connection.open) {
        onOpen();
    }

    connection.on("close", () => {
        setConnectionStatus(false);
        if (!resultShown) showToast(`${remotePlayerName()} disconnected.`);
    });

    connection.on("error", error => {
        console.error("Connection error:", error);
        setConnectionStatus(false);
        showToast("Something went wrong with the connection.");
    });

}

/* ==========================================
CREATE ROOM
========================================== */

function createRoom() {
    isChichys = true;

    roomCode = generateRoomCode();

    roomCodeDisplay.textContent = roomCode;

    showScreen(waitingScreen);

    createHostPeer();

}

function createHostPeer() {
    destroyPeer();

    const peerId = PEER_PREFIX + roomCode;

    peer = new Peer(peerId);

    peer.on("open", id => {
        console.log("Chichy's room ready:", id);
    });

    peer.on("connection", conn => {
        setupConnection(conn);
        if (isChichys && !gameStarted) {
            showScreen(gameScreen);
        }
    });

    peer.on("error", error => {
        console.error("Peer error:", error);

        // If another room happens to use the same ID, generate another code.
        if (error && error.type === "unavailable-id") {
            roomCode = generateRoomCode();
            roomCodeDisplay.textContent = roomCode;
            createHostPeer();
            return;
        }

        showToast("Unable to create the room.");
    });

}

/* ==========================================
JOIN ROOM
========================================== */

function joinRoom(code) {
    isChichys = false;

    roomCode = code;

    showScreen(gameScreen);

    resetGameState();

    liveStatus.textContent = "Connecting to Chichy's... ❤️";

    connectToHost();

}

function connectToHost() {
    destroyPeer();

    peer = new Peer();

    peer.on("open", () => {
        const hostId = PEER_PREFIX + roomCode;
        const conn = peer.connect(hostId, { reliable: true });
        setupConnection(conn);
    });

    peer.on("error", error => {
        console.error("Peer error:", error);
        showToast("Could not find that room. Check the code and try again.");
        setTimeout(() => showScreen(lobbyScreen), 1200);
    });

}

function handleMessage(message) {
    if (!message || typeof message.type !== "string") return;

    switch (message.type) {
        case "GAME_START":
            if (!isChichys) {
                resetGameState();
                showScreen(gameScreen);
                liveStatus.textContent = "Chichy's is getting the first quote ready... ❤️";
            }
            break;

        case "ROUND":
            if (!isChichys) {
                currentRound = message.round || currentRound;
                currentQuoteIndex = message.quoteIndex;
                currentQuote = (Array.isArray(QUOTES) && QUOTES.length > currentQuoteIndex) ? QUOTES[currentQuoteIndex] : null;
                if (!currentQuote) {
                    showToast("Quote not found for this room. Ensure both devices use the same js/qoutes.js");
                    return;
                }
                localAnswer = null;
                remoteAnswer = null;
                hasHint = false;
                quoteReference.textContent = "";
                hintText.textContent = "";
                renderQuote();
                liveStatus.textContent = "Choose your answer ❤️";
                updateHintDisplay();
                updateScoreboard();
                document.querySelectorAll(".answer").forEach(btn => btn.disabled = false);
            }
            break;

        case "ANSWER":
            if (isChichys) {
                if (message.round === currentRound) {
                    remoteAnswer = message.answer;
                    evaluateRoundIfReady();
                } else {
                    console.warn(`Ignored ANSWER for round ${message.round}; current round is ${currentRound}.`);
                }
            }
            break;

        case "ROUND_RESULT":
            if (message.round === currentRound) {
                chichyScore = message.chichyScore;
                allInAllScore = message.allInAllScore;
                updateScoreboard();
                showRoundResult(message.correctAnswer, message.chichyCorrect, message.allInAllCorrect);
            } else {
                console.warn(`Skipped ROUND_RESULT for round ${message.round}; current round is ${currentRound}.`);
            }
            break;

        case "GAME_OVER":
            chichyScore = message.chichyScore;
            allInAllScore = message.allInAllScore;
            updateScoreboard();
            showResultScreen();
            break;

        case "PLAY_AGAIN":
            if (!isChichys) {
                resetGameState();
                showScreen(gameScreen);
                liveStatus.textContent = "Chichy's is choosing your next adventure... ❤️";
            }
            break;

        default:
            console.warn("Unknown message type:", message.type);
    }
}

/* ==========================================
RANDOM ROOM CODE
========================================== */

function generateRoomCode() {
    return String(Math.floor(1000 + Math.random() * 9000));

}

/* ==========================================
CLEANUP
========================================== */

window.addEventListener(
    "beforeunload",
    () => {
        destroyPeer();
    }
);
