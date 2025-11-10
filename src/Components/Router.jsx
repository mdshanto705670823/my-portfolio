import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { About } from "./About";

import { Contact } from "./Contact";
import { Skills } from "./Skills";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
