import React from 'react';
// import { ReactDOM } from 'react-dom';
// import { Route, Switch } from 'react-router-dom';
// import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import './App.css';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     
     {/* <Router>
       <Routes>
         <Route exact path='/' element={<WatchList />} />
         <Route  exact path='/watched'element= {<Watched />} />
         <Route exact path='/add' element={<Add />} />
       </Routes>
     </Router> */}
  
   
    <div>
      <Header />
      <WatchList />
      <Watched />
      <Add />
    </div>
    </GlobalProvider>
  );
}

export default App;

