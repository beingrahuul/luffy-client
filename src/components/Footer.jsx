import styled from "styled-components";
import { NavLink } from "react-router-dom";

//image
//import BACK from "../images/footer.png"
import LogoIMG from "../images/logo.jpeg";
import Contect from "../icons/contact.svg";
import Request from "../icons/request.svg";
import Notice from "../icons/notification.svg";
import Telegram from "../icons/telegram.svg";
import Discord from "../icons/discord.svg";
import Reddit from "../icons/reddit.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 284px;
  width: 100%;
  background-image: url("https://s3-alpha-sig.figma.com/img/d3f1/d37d/2d97e767a5f7659a8e0df95bf542a23a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOIMM9Aa01I-EcErvfKK22YxTKGNpsf02Csx9dHC1MXhgXvnjbXqsH~uY5NwnId10pgzFpRR3ae96vLYTOLxidMIvBAP0jby9h8sv2ZnaDlv-R880bY13fJ95BC8rnPbfPJfobQkhRaxpu4Opp2E1oUNIYAy3vrtfbLe~dH4Con7PRaOJF67lRwas-~0ovu~feC9oFelIyQnO0Mvhudx-bAsYDwkVDEG-o3caLC8YpAiDQVl95cIlgaSoDedHIvanMOhlfI69uqlz16Qr~fzJNa6h1x4EA6x1ik0s2YxaYOXvtJFMDiOlYNkXK55nrkwJvdRjVJ5~8j8sON~PTZQmQ__");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 50px;

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    margin-top: 20px;
    height: 200px;
  }
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #000000bf;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    gap: 10px;
    justify-content: center;
  }
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 50px;

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  margin-top: -24px;

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    position: relative;
    gap: 5px;
    top: 7px;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 40px;

  @media screen and (max-width: 479px) {
    margin-left: 0px;
    justify-content: center;
  }

  &.Button {
    display: flex;
    flex-direction: column; /* Correct spelling to stack buttons vertically */
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40px;

    @media screen and (max-width: 479px) {
      display: flex;
      flex-direction: row;
      position: relative;
      top: -3px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    position: relative;
    top: 10px;
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 5px;
  border-radius: 50%;
  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    width: 40px;
    height: 40px;
  }

  &.img {
    width: 20px;
    height: 20px;

    @media screen and (max-width: 479px) {
      width: 10px;
      height: 10px;
    }
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #ffd020;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    font-size: 14px;
  }
`;

const MiscContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 479px) {
    position: relative;
    top: 30px;
  }

  @media screen and (max-width: 479px) {
    margin-top: -4px;
  }
`;

const Misc = styled.h1`
  font-size: 16px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #ffd020;
  }

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    font-size: 12px;
  }
`;

const Desc = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  text-align: center;

  @media screen and (max-width: 1299px) {
  }

  @media screen and (max-width: 991px) {
  }

  @media screen and (max-width: 640px) {
  }

  @media screen and (max-width: 479px) {
    font-size: 10px;
    width: 80%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0; /* Adds spacing between the buttons */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53%; /* Ensures the buttons take up full width */
  border-radius: 8px;

  @media screen and (max-width: 479px) {
    font-size: 6px;
    width: 25%;
    height: 10%;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Footer = () => {
  const Telepage = () => {
    window.open("https://t.me/+_M92X7_YbVRjZjg9", "_blank");
  };

  const Requestpage = () =>{
    
  }

  return (
    <Container>
      <MainContainer>
        <UpperContainer>
          <Group>
            <LogoContainer>
              <LogoImage src={LogoIMG} alt="Logo" loading="lazy" />
              <Logo>Luffy</Logo>
            </LogoContainer>
          </Group>

          <Group style={{ justifyContent: "center", margin: "0px" }}>
            <MiscContainer>
              <LogoImage src={Contect} alt="contect" />
              <Misc className="tag1">Contact</Misc>
            </MiscContainer>

            <MiscContainer>
              <LogoImage className="logo2" src={Request} alt="request" />

              <Misc className="tag2" onClick={Requestpage}>Request</Misc>
            </MiscContainer>

            <MiscContainer>
              <LogoImage className=" " src={Notice} alt="Notice" />
              <NavLink to="/dmca">
                <Misc className="tag3">DMCA</Misc>
              </NavLink>
            </MiscContainer>
          </Group>

          <Group>
            <Button onClick={Telepage}>
              <LogoImage className="img" src={Telegram} alt="Telegram" />
              Join On Telegram
            </Button>
            <Button>
              <LogoImage className="img" src={Discord} alt="Discord" />
              Join On Discord
            </Button>
            <Button>
              <LogoImage className="img" src={Reddit} alt="Reddit" />
              Join On Reddit
            </Button>
          </Group>
        </UpperContainer>

        <LowerContainer>
          <Desc>Copyright © luffy.to. All Rights Reserved</Desc>
          <Desc>
            Disclaimer: This site does not store any files on its server. All
            contents are provided by non-affiliated third parties.
          </Desc>
        </LowerContainer>
      </MainContainer>
    </Container>
  );
};

export default Footer;
