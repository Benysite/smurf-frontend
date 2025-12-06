const BACKEND_URL = "https://smurf-backend-yg7w.onrender.com";

async function analyzePlayer(gameName, tagLine, region = "eu") {
    const url = `${BACKEND_URL}/api/riot/analyze/${gameName}/${tagLine}?region=${region}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;

    } catch (err) {
        console.error("Erreur analyse :", err);
        return null;
    }
}
