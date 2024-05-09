export const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const jsonData = await response.json();

        if (!response.ok) {
            if (jsonData.error && jsonData.error.includes("Unique constraint failed")) {
                throw new Error("The email address is already in use.");
            }
            throw new Error(jsonData.message || "An error occurred");
        }

        return jsonData;
    } catch (error) {
        console.error("Error in postData:", error);
        throw error;
    }
};

export const getData = async (url, params = {}) => {
    try {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${query}`);
        return await response.json();
    } catch (error) {
        console.error("Error in getData:", error);
        throw error;
    }
};

export const generateGrid = (clues) => {
    const gridSize = 10;
    let grid = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => "0"));

    clues.forEach(clue => {
        const label = `${clue.number}-${clue.answer.charAt(0)}`;
        for (let i = 0; i < clue.answer.length; i++) {
            const r = clue.direction === "across" ? clue.row - 1 : clue.row - 1 + i;
            const c = clue.direction === "across" ? clue.col - 1 + i : clue.col - 1;
            grid[r][c] = i === 0 ? label : "1";
        }
    });

    return grid;
};

export function formatDate() {
    const date = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

export function formatTime() {
    const date = new Date();
    const options = { hour: "numeric", minute: "numeric" };
    return date.toLocaleTimeString("en-US", options);
}