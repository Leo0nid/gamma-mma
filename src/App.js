import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Federation from './pages/Federation';
import Fighters from './pages/Fighters';
import Events from './pages/Events';
import News from './pages/News';
import Couches from './pages/Couches';
import Online_store from './pages/Online_store';
import Trainings from './pages/Trainings';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/federation" element={<Federation/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/fighters" element={<Fighters/>}/>
      <Route path="/couches" element={<Couches/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/trainings " element={<Trainings/>}/>
      <Route path="/online_store" element={<Online_store/>}/>
      </Routes>
    </Router>
  )
}

export default App
