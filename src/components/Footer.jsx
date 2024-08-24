import styled from "styled-components";
import "./Footer.css";

//image
//import BACK from "../images/footer.png"
import LogoIMG from "../images/logo.jpeg";
import Contect from "../icons/contact.svg";
import Request from "../icons/request.svg";
import Discord from "../icons/discord.svg";
import Notice from "../icons/notification.svg";
import Telegram from "../icons/telegram.svg";
import Reddit from "../icons/reddit.svg";

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
            {/* This is contact section*/}
            <div className="contect">
              <img src={Contect} alt="Contect" />
              <h1>Contact</h1>
            </div>

            {/* This is request section*/}
            <div className="request">
              <img src={Request} alt="request" />
              <h1>Request</h1>
            </div>

            {/* This is DMCA notice*/}

            <div className="dmca">
              <img src={Notice} alt="DMCA" />
              <h1>DMCA</h1>
            </div>
          </div>

             {/* This is button section*/}

             <div className="btn">
              <div className="telegram">
                <button><img src={Telegram} alt="Telegram" />Join on Telegram</button>
              </div>

              <div className="discord">
                <button><img src={Discord} alt="Discord" /> Join on Discord</button>
              </div>

              <div className="reddit">
                <button><img src={gma} alt="" /> Join on Discord</button>

              </div>


             </div>


        </div>
      </div>
    </>
  );
};

export default Footer;
