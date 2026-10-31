# Assignment 5 : React - TVMaze Show Gallery

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

When working on this assignment, what I found more easier than the vanilla JavaScript version was being able to create seperate components for the search form, show cards, gallery, and details page instead of just having all the html elements in just one large javascript file. For my application, gallery search and search results reside in the 'Gallery.jsx' since they are needed to display and update the gallery. The search input value resides in the 'SearchForm.jsx' since the components manage the user's typing. Meanwhile the selected show's information and cast reside in the 'ShowDetail.jsx' and 'ShowCard.jsx". The reason why these states where put in these selected files is because it keeps the application organized and is more easier to manage. 

I also did use React and React Router for this assignment to which it was helpful since it allowed me to navigate between the gallery and individual show detail pages without having to reload the entire website. I used Link to navigate between pages and useParams to retrieve a show's ID from the URL. An AI tool was used only to identify and fix errors for this development since I was having a bit trouble trying to fetch the data from the TVmaze API and was running into errors. I do think from the assistance in troubleshooting my code I was able to get a better understanding on how API requests, React components, and React Router worked.
