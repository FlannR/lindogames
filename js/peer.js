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

    connection.on("open", () => {
        setConnectionStatus(true);
        showToast(`Connected! ${remotePlayerName()} is here ❤️`);

        if (isChichys) {
            resetGameState();
            sendMessage({ type: "GAME_START" });
            startGameAsHost();
        } else {
            showScreen(gameScreen);
            liveStatus.textContent = "Chichy's is getting the first quote ready... ❤️";
        }
    });

    connection.on("data", message => handleMessage(message));

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

    peer.on("connection", conn => setupConnection(conn));

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
