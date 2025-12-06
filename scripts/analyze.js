const BACKEND_URL = "https://smurf-backend-yg7w.onrender.com";

async function analyzePlayer(gameName, tagLine, region = "eu") {
    const url = `${BACKEND_URL}/api/riot/analyze/${gameName}/${tagLine}?region=${region}`;
    const res = await fetch(url);
    return await res.json();
}

window.analyzePlayer = analyzePlayer;
