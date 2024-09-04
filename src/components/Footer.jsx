import styled from 'styled-components'

//image
import BACK from "../images/footer.png"


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
    height: 200px;
  } 
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color:  #000000BF;
  flex-direction: column;
  gap: 20px;

  p{
    margin: 0;
    padding: 10px;
  }

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
        <p>Working on making site better will be updated soon(there are few bugs, working on it). If you want to report a bug or have any suggestion? contact me at <a href="mailto:theluffymovies@gmail.com">"theluffymovies@gmail.com"</a> </p>
      </MainContainer>
    </Container>
  )
}

export default Footer