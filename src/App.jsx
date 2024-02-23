import { useState } from "react";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
import moon from './components/png/moon.png'
import sun from './components/png/sun.png'
const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState(sun);
  const ToggleMode = () => {
    if (mode === "dark" && icon === sun) {
      setMode("light");
      setIcon(moon)
      document.body.style.backgroundColor = "#ffff";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#23272f";
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
      <Alert alert={alert} />
      <Routes>
        <Route 
          path="/"
          element={
            <div className="container">
              <Textform
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces "
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
