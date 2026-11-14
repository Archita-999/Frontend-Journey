# Frontend Journey

A beginner frontend project built while learning HTML, CSS and JavaScript. It started as a single page and grew into a small portfolio with two working apps: a to-do list and a weather app.

**Live demo:** https://archita-999.github.io/Frontend-Journey/

## Features

- Responsive layout with a navbar, hero section and project cards that adapt to mobile screens
- Counter and reset buttons built with DOM events
- **To-do list:** add tasks with the Add button or the Enter key, mark them as done, delete them, or clear everything. Empty tasks are not added.
- Tasks are saved in the browser with localStorage, so they are still there after a refresh
- **Weather app:** choose a city (Mumbai or Delhi) and get the current temperature and wind speed from the Open-Meteo API, with a loading message and an error message if the request fails
- Quiz App with instant feedback, a final score and a play-again option.
## Built with

HTML, CSS (Flexbox, Grid, media queries) and JavaScript (DOM, events, fetch with async/await, localStorage)

## What I learned

- Structuring a page with semantic HTML and styling it with Flexbox, Grid and media queries
- JavaScript fundamentals: conditions, loops, functions, arrays and objects
- Updating the page with the DOM and handling click and keyboard events
- Saving data with localStorage and fetching live data from an API
- Using the browser console, Git and GitHub to find, fix and save my work

### Bugs I fixed along the way

- **An infinite loop that froze Chrome.** I wrote `1 <= 10` instead of `i <= 10` in a loop condition. The condition was always true, so the loop never stopped. I learned to read loop conditions slowly and to use the console and its line numbers to track problems down.
- **An element that JavaScript could not find.** My HTML used `id="greetBtn"` but my JavaScript looked for `greenBtn`. The console showed `Cannot read properties of null`. Now I copy and paste ids instead of typing them.
- **CSS that failed silently.** A comma in `margin: 40px, auto;` made the browser ignore the whole line, so a section was not centered. I learned that CSS does not show errors, so I check spelling and syntax line by line.

## Run it locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**, or open the file directly in a browser.

## What I want to add next

- Show the selected city's name in the weather heading
- More cities in the weather app
- Rebuild this portfolio in React

## About me

I am Archita Patel, an MSc IT student with a UI/UX design background (Google UX Design Certificate). I am learning frontend development so I can design and build interfaces end to end.

GitHub: [github.com/Archita-999](https://github.com/Archita-999)