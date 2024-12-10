// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import HistoricalSites from './pages/HistoricalSites';
import MonumentsPage from './pages/MonumentsPage';
import FestivalsPage from './pages/FestivalsPage';
import VirtualToursPage from './pages/VirtualToursPage';
import ArtAndCraftPage from './pages/ArtAndCraftPage';
import CuisinePage from './pages/CuisinePage';
import DanceAndMusicPage from './pages/DanceAndMusicPage';
import CulturalFactsPage from './pages/CulturalFactsPage';
import AboutPage from './pages/AboutPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import Footer from './pages/Footer';
import ContactPage from './pages/Contactpage';
import Navbar from './pages/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/historical-sites" element={<HistoricalSites />} />
        <Route path="/monuments" element={<MonumentsPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/virtual-tours" element={<VirtualToursPage />} />
        <Route path="/art-and-craft" element={<ArtAndCraftPage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/dance-and-music" element={<DanceAndMusicPage />} />
        <Route path="/cultural-facts" element={<CulturalFactsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/place/:placeName' element={<PlaceDetailPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
