import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="ftr_sub_box">
          <div className="icon">
            
            <IoCall></IoCall>
          </div>
          Toll free 1800 200 1234
        </div>
        <div className="ftr_sub_box">
          <FaFacebook></FaFacebook> www.facebook.com/cripumps
        </div>
        <div className="ftr_sub_box">
          <span>
            <FaGlobe></FaGlobe>
          </span>
          www.cirgroups.com
        </div>
      </div>
    </>
  );
}
export default Footer;
