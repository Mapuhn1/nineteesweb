    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const fetched = await response.json();
        console.log(fetched); // Print fetched data to console
        showdata(fetched);    // Call function to display the data
    }
    getPosts();
    const webpage = document.querySelector("body");
    const main = document.querySelector("main");


    // Function to display the data
    function showdata(details) {
        // Clear main content before appending new elements
        main.innerHTML = '';
        // Loop through each item in the details array
        for (post of details) {
            const card = document.createElement("div");
            card.className = "cardDisplay";
            // Insert dynamic content into the new div
            card.innerHTML = `
                <h2>Title: ${post.title}</h2>
                <p>User ID: ${post.userId}</p>
                <p>Body: ${post.body}</p>
                `;
            main.appendChild(card); // Append each card to the main section
        }
        // Append main to body only once (not inside the loop)
        webpage.appendChild(main);
    }
    // Event listener for sorting data by title
    const btn = document.getElementById("sortData");
    btn.addEventListener("click", () => {
        // Sort data by title (assuming `fetchedData` is accessible)
        const sortedData = fetchedData.sort((a, b) => a.title.localeCompare(b.title));
        showdata(sortedData);  // Re-display sorted data
    });
