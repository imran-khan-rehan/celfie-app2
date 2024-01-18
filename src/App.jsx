import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from "./pages/introPage";
import Home from "./pages/home";
import ChatPage from "./pages/chatPage";
import Profile from "./pages/profile";
import "./App.css";

function App() {
  return (
    <div className=" w-screen h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/chatPage" element={<div className=" w-full h-full bg-[#202946] overflow-hidden"></div>} />
          <Route path="/chatPage/:profileName" element={<ChatPage />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
