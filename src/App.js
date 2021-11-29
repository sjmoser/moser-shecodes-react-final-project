import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/sjmoser"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sarah Moser
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sjmoser/moser-shecodes-react-final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
