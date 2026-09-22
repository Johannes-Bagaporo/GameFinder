const API_URL =
    "https://www.freetogame.com/api/games";

const searchInput =
    document.getElementById("searchInput");

const platformFilter =
    document.getElementById("platformFilter");

const searchButton =
    document.getElementById("searchButton");

const gamesContainer =
    document.getElementById("gamesContainer");

const status =
    document.getElementById("status");


let allGames = [];


async function loadGames() {

    status.textContent = "Loading games...";

    try {

        const response =
            await fetch(API_URL);

        if (!response.ok) {

            throw new Error(
                "Failed to load games."
            );

        }

        allGames =
            await response.json();

        displayGames(allGames);

    } catch (error) {

        console.error(error);

        status.textContent =
            "Unable to load games. Please try again.";

    }

}


function displayGames(games) {

    gamesContainer.innerHTML = "";

    if (games.length === 0) {

        status.textContent =
            "No games found.";

        return;
    }

    status.textContent =
        `${games.length} games found.`;

    games.forEach(game => {

        const card =
            document.createElement("article");

        card.className =
            "game-card";

        card.innerHTML = `

            <img
                src="${game.thumbnail}"
                alt="${game.title}"
            >

            <div class="game-info">

                <h2>
                    ${game.title}
                </h2>

                <p class="genre">
                    🎮 ${game.genre || "Unknown genre"}
                </p>

                <p>
                    💻 ${game.platform || "Unknown platform"}
                </p>

                <p>
                    📅 ${game.release_date || "Unknown"}
                </p>

                <p>
                    🏢 ${game.publisher || "Unknown publisher"}
                </p>

            </div>

        `;

        gamesContainer.appendChild(card);

    });

}


function filterGames() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();

    const platform =
        platformFilter.value;

    const filteredGames =
        allGames.filter(game => {

            const matchesSearch =
                game.title
                    .toLowerCase()
                    .includes(searchTerm);

            const matchesPlatform =
                platform === "all" ||
                game.platform
                    .toLowerCase()
                    .includes(platform);

            return matchesSearch &&
                matchesPlatform;

        });

    displayGames(filteredGames);

}


searchButton.addEventListener(
    "click",
    filterGames
);


searchInput.addEventListener(
    "keyup",
    function(event) {

        if (event.key === "Enter") {

            filterGames();

        }

    }
);


platformFilter.addEventListener(
    "change",
    filterGames
);


loadGames();