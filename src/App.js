import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/artworks`);
        console.log("res", res);
        setData(res?.data?.artworks);
        const message = res?.data?.message || "success";
        // console.log(message);
      } catch (error) {
        const message = error?.response?.data?.message || "some error occurred";
        console.error(message, error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      {/* <Header /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery GalleryData={data} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload  />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
