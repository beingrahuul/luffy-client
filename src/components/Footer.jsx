import styled from "styled-components";
import "./Footer.css";

//image
//import BACK from "../images/footer.png"
import LogoIMG from "../images/logo.jpeg";
import Contect from "../icons/contect.svg"


const Footer = () => {
  return (
    <>
      <div className="upperbox">
        <div className="lowerbox">
          {/* This is logo section */}
          <div className="logo">
            <img src={LogoIMG} alt="Logo" />
            <h1>Luffy</h1>
          </div>

           {/* This is middle section*/}

           <div className="information">
            <div className="contect">
              <img src="" alt="" />

            </div>

           </div>



          
        </div>
      </div>
    </>
  );
};

export default Footer;
