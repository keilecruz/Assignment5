# Assignment 5 : React - TVMaze Show Gallery

## Link to the TVmaze Show Gallery Website


## Project Description
This project is a React-based TV show gallery to which it uses TVmaze API to search for television shows and display information about that specific show. When users search up a show it will display to a minimum of 10 related shows, and by selecting the shows title it will then take the user to see it's details and display cast members. The application itself uses react and react router when navigating between the gallery and details page, but it also includes loading messages, error handling, and fallback text's for any missing information.

## Steps on how to run Project

1. Install node.js and npm 
2. Open Terminal in project directory
3. Install the projects independecies

   ```bash
    npm install

4. start the server

   ```bash
    npm run dev

5. Open the local URL that is provided by Vite into your browser


## React Concepts

| # | Required React Concept | File(s) |
|---|---|---|
| 1 | Components and props | `App.jsx`, `SearchForm.jsx`, `ShowList.jsx`, `ShowCard.jsx`, `CastList.jsx`, `ShowDetail.jsx` |
| 2 | Lists and keys | `ShowList.jsx`, `ShowCard.jsx`, `CastList.jsx` |
| 3 | Conditional rendering | `Gallery.jsx`, `ShowList.jsx`, `ShowCard.jsx`, `ShowDetail.jsx` |
| 4 | Controlled form | `SearchForm.jsx` |
| 5 | State with `useState` | `Gallery.jsx`, `SearchForm.jsx`, `ShowCard.jsx`, `ShowDetail.jsx` |
| 6 | Effects and fetch | `Gallery.jsx`, `ShowCard.jsx`, `ShowDetail.jsx` |
| 7 | Lifted state | `Gallery.jsx`, `SearchForm.jsx`, `ShowList.jsx` |
| 8 | Routing | `main.jsx`, `App.jsx`, `ShowCard.jsx`, `ShowDetail.jsx` |

## Brief Reflection
