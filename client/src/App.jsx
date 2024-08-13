import React from "react";
import { BrowserRouter } from "react-router-dom";
//minuto 27:09
export default function App() {
  return <BrowserRouter >
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-out" element={<SignOut />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
}