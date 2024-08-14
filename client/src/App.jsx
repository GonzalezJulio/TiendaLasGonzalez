import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignOut />} />
       
        <Route element={<PrivateRouter />}>

          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/carts" element={<Carts />} />
          
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
