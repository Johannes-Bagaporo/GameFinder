# 🎮 GameFinder

GameFinder is a full-stack web application that allows users to browse and search free-to-play video games using the FreeToGame API.

The project was originally intended to use the RAWG API. However, an alternative video game API was used after permission was given by the professor because RAWG was not working properly.

## Features

- Display real video game data from an external API
- Search for games by name
- Filter games by platform
- Display game thumbnails
- Display game genres
- Display available platforms
- Display release dates
- Display publishers
- Responsive design for desktop and mobile devices
- Error handling for failed requests and empty search results

## Technologies Used

- HTML
- CSS
- JavaScript
- FreeToGame API
- GitHub
- Netlify

## API Used

This project uses the FreeToGame API, a free video game database API focused on free-to-play games.

The application uses the following GET endpoint:

`https://www.freetogame.com/api/games`

The API does not require an API key, so no API credentials are stored in the source code.

## How It Works

When the website loads, JavaScript sends a GET request to the FreeToGame API.

The API returns game information in JSON format.

The application then processes the returned data and displays the games as cards.

Users can search for games using the search box and filter the results by platform.

## Interactive Features

### Search

Users can enter a game name into the search box. The application filters the available game data and displays matching results.

### Platform Filter

Users can select a platform from the dropdown menu, such as PC or Browser. The displayed results are then filtered based on the selected platform.

## Running the Project Locally

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

2. Open the project folder:

```bash
cd gamefinder
```

3. Open `index.html` using a local development server such as VS Code Live Server.

4. The application will load the game data from the FreeToGame API.

## API Key

No API key is required for this project.

The FreeToGame API can be accessed directly from the browser, so no backend proxy or serverless function is required for API authentication.

## Project Structure

```text
gamefinder/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## Live Application

YOUR_NETLIFY_LINK

## GitHub Repository

YOUR_GITHUB_REPOSITORY_LINK

## API Documentation

FreeToGame API documentation:
https://www.freetogame.com/api-doc