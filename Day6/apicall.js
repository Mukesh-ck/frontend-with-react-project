const URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Success:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchData();