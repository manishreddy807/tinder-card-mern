import React from "react";
import Header from "./components/Header/Header";
import TinderCardCop from "./components/HomePage/TinderCardCop";
import { SwipeButtons } from "./components/swipeButtons";
// import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <TinderCardCop />
      <SwipeButtons />
    </>
    
  );
}

export default App;
