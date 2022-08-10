import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './index.css';
import App from './App'
import NewsPage from './Pages/NewsPage/NewsPage';
import Diaspora from './Pages/Diaspora/Diaspora';
import Media from './Pages/Media/Media'
import Boss from './Pages/Boss/Boss'
import Contacts from './Pages/Contacts/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Pages/Main/Main';
import AboutNews from './Pages/AboutNews/AboutNews';
// import Main from './Pages/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main/>} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/diaspora" element={<Diaspora />} />
          <Route path="/media" element={<Media/>} />
          <Route path="/boss" element={<Boss/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about-news" element={<AboutNews/>} />
        </Routes>
      </BrowserRouter>
);


