import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost  } from "./page";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#d1bba7] sm:px-8 px-4 py-4 border-b border-b-[#000000] rounded">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain rounded" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
      
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>

    <footer className="w-full flex justify-between items-center bg-[#d1bba7] sm:px-8 px-4 py-4 border-b border-b-[#000000] ">
      <h2>© Copyright mymernproject.com. All Rights Reserved.</h2>
    </footer>
  </BrowserRouter>
);


export default App;
