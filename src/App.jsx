import { useState } from "react";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import moon from './components/png/moon.png'
import sun from './components/png/sun.png'
const App = () => {
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState(sun);
  const ToggleMode = () => {
    if (mode === "dark" && icon === sun) {
      setMode("light");
      setIcon(moon)
      document.body.style.backgroundColor = "aliceblue";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#171717";
      setIcon(sun)
    }
  };

  return (
    <>
      <Navbar
        title="Textutil"
        mode={mode}
        ToggleMode={ToggleMode}
        icon={icon}
      />
         <Toaster
          position="top-center"
          background="#060417"
          reverseOrder={false}
        />
      <Routes>
        <Route 
          path="/"
          element={
            <div className="container">
              <Textform
                heading="Try TextUtils - JSON To String, String TO JSON, Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
              />
            </div>
          }
        ></Route>
        <Route  path="/About" element={<Aboutus mode={mode} />}></Route>
      </Routes>
    </>
  );
};

export default App;
