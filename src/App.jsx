import React from "react";
import "./index.css";
import Mainbox_1 from "./Mainbox_1";
import Mainbox_2 from "./Mainbox_2";
import Footer from "./Footer";

function App() {
  return (
    <>
      <img
        id="logo_img"
        src="image/logo.png"
        alt="There is some error in path"
      />

      <Mainbox_1></Mainbox_1>

      <p className="textbox_3">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>

      <img
        id="devices_img"
        src="image/3.png"
        alt="There is some error in path"
      />

      <p className="textbox_4">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>

      <hr />

      <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>

      <Mainbox_2></Mainbox_2>

      <Footer></Footer>
    </>
  );
}

export default App;
