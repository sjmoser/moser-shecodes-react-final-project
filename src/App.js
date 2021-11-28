import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Sarah Moser and is{" "}
          <a href="https://github.com/sjmoser/moser-shecodes-react-final-project">
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
