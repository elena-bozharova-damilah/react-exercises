import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.tsx';
import Exercise1 from './components/challenges/challenge1/Exercise1.tsx';
import Exercise2 from './components/challenges/challenge2/Exercise2.tsx';
import Comparison from './components/pure-components-concept/Comparison.tsx';
import Exercise4 from './components/challenges/challenge4/Exercise4.tsx';
import { RenderingLists } from './components/rendering-lists/RenderingLists.tsx';
import Exercise3 from './components/challenges/challenge3/Exercise3.tsx';
import Exercise5 from './components/challenges/challenge5/Exercise5.tsx';
import Exercise6 from './components/challenges/challenge6/Exercise6.tsx';
import Exercise7 from './components/challenges/challenge7/Exercise7.tsx';


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="impure-components" element={ <Comparison/> } />
        <Route path="rendering-lists" element={ <RenderingLists/> } />
        <Route path="exercise/1" element={ <Exercise1/> } />
        <Route path="exercise/2" element={ <Exercise2/> } />
        <Route path="exercise/3" element={ <Exercise3/> } />
        <Route path="exercise/4" element={ <Exercise4/> } />
        <Route path="exercise/5" element={ <Exercise5/> } />
        <Route path="exercise/6" element={ <Exercise6/> } />
        <Route path="exercise/7" element={ <Exercise7/> } />
      </Routes>
    </div>
  );
}

export default App;
