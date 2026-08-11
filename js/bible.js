/*

* LINDO FOR ETERNITY
* Bible API
  */

const BIBLE_API_BASE = "https://bible-api.com/";

/*

* Retrieve a Bible passage dynamically.
  */
async function fetchBibleVerse(reference) {
    try {
        const response = await fetch(BIBLE_API_BASE + encodeURIComponent(reference));

        if (!response.ok) throw new Error("Bible API request failed");

        const data = await response.json();
        return trimBiblePhrase(data.text || "");
    } catch (error) {
        console.warn("Bible API unavailable:", error);
        return null;
    }
}

/*

* Convert a Bible passage into a short
* mobile-friendly phrase.
  */
function trimBiblePhrase(text) {
    const cleaned =
        text
            .replace(/\s+/g, " ")
            .trim();

    if (!cleaned) {
        return "";
    }

    const firstSentence =
        cleaned.match(
            /^.*?[.!?](?:\s|$)/
        );

    if (firstSentence && firstSentence[0].length <= 60) {
        return firstSentence[0].trim();
    }

    if (cleaned.length <= 60) {
        return cleaned;
    }

    const shortened =
        cleaned
            .slice(0, 60)
            .replace(/\s+\S*$/, "")
            .trim();

    return shortened + "…";
}
