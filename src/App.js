import React from 'react';
import {Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Add from "./components/Add";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList"; 
import './App.css';

function App() {
  return (
    <Router>
      <h1>Hello</h1>
      <Header />
      <Routes>
        <Route exact path='/' element={<WatchList />} />
         <Route  exact path='/watched'element= {<Watched />} />
         <Route exact path='/add' element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
