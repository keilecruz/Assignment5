// App is used to define the routes for the gallery and details pages of the application.
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import ShowDetail from "./pages/ShowDetail.jsx";

import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Gallery />} />

            <Route path="/shows/:id" element={<ShowDetail />} />
        </Routes>
    );
}

export default App;