import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './routs/Home';
import About from './routs/About';
import About1 from './routs/About1';
import Movies from './routs/Movies';
import Users from "./routs/Users";
import User from "./routs/User";
import Events from "./routs/Events";
import Event from "./routs/Event";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickButton from "./components/QuickButton";
import './App.scss';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/about" element={<About1 />} />
      </Routes>
      <Footer />
      <QuickButton />
    </div>
  );
}

export default App;
