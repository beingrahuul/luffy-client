import styled from 'styled-components'

//image
//import BACK from "../images/footer.png"
import LogoIMG from '../images/logo.jpeg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 284px;
  width: 100%;
  background-image: url("https://res.cloudinary.com/dtpb5qjjf/image/upload/f_auto/v1722446390/nocqzawov5pf3gs8cy0s.png");
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
    justify-content: center;
  } 
`


const Footer = () => {
  return (
    <Container>
      <MainContainer>
        Working on making site better will be updated soon(there are few bugs, working on it)
      </MainContainer>
    </Container>
  )
}

export default Footer