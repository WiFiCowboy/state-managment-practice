import React from "react";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./context/MovieContext";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
