import React from "react";

import "./index.css"

import BooksPage from "./pages/BooksPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <BooksPage />
            <Footer />
        </div>
    );
}

export default App;