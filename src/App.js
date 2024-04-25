import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import HeadlineCard from "./components/HeadlineCard/HeadlineCard";
import Food from "./components/Food/Food";
import Category from "./components/Category/Category";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Category/>
    </>
  );
}

export default App;
