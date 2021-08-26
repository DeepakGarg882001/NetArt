import React from "react";
import Textbox_1 from "./Textbox_1";
function Mainbox_1() {
  return (
    <>
      <div className="mainbox_1">
        <div className="subbox_1">
          <img
            id="trofie_img"
            src="image/1.png"
            alt="There is some error in path"
          />
        </div>
        <div className="subbox_2">
          <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>

          <Textbox_1></Textbox_1>

          <img
            id="award_img"
            src="image/2.png"
            alt="There is some error in path"
          />
          <p className="textbox_2">
            Government of India has awarded the{" "}
            <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
    </>
  );
}

export default Mainbox_1;
