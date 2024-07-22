import styled from 'styled-components'

//image
import BACK from "../images/footer.png"
import LogoIMG from '../images/logo.jpeg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 284px;
  width: 100%;
  background-image: url(${BACK});
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
  } 
`
const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color:  #000000BF;
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
  } 
`

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
    gap: 20px;
  } 
`

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    gap: 20px;
  } 
`

const Group = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 40px;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
`

const Logo = styled.h1`
  font-size: 24px;
  color: #FFD020;


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
`

const MiscContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Misc = styled.h1`
  font-size: 16px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #FFD020;
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
`

const Desc  = styled.p`
  font-size: 12px;
  color: #8E8E8E;
  text-align: center;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 10px;
  } 
`

const Footer = () => {
  return (
    <Container>
      <MainContainer>
        <UpperContainer>
          <Group>
            <LogoContainer>
              <LogoImage src={LogoIMG} alt="Logo" />
              <Logo>Luffy</Logo>
            </LogoContainer>
          </Group>

          <Group style={{justifyContent: "center", margin:"0px"}}>
            <MiscContainer>
              <Misc>Contact</Misc>
              <Misc>Request</Misc>
            </MiscContainer>
          </Group>

          <Group>
          </Group>
        </UpperContainer>

        <LowerContainer>
          <Desc>Copyright © luffy.to. All Rights Reserved</Desc>
          <Desc>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</Desc>
        </LowerContainer>
        
      </MainContainer>
    </Container>
  )
}

export default Footer