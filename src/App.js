import React from "react";

import "./index.css"

import BooksPage from "./pages/BooksPage";
import Header from "./components/Header";

function App() {
    return (
        <div className="container">
            <Header />
            <BooksPage />
        </div>
    );
}

export default App;