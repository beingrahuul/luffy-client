import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #ffd020;
  color: #000;

  a{
    color: #000;
    font-weight: 600;
    text-decoration: none;
  }

  p{
      margin: 0px;
      padding: 10px;
    }

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 9px;
    gap: 0px;
    display: block;
    height: 100%;
    p{
      margin: 0px;
      padding: 10px;
    }
  } 
`;

const Alert = () => {
  return (
    <Container>
      <p>We are working on improving the website. Please be patient with us. If you want to report a bug or have any suggestion? contact me at <a href="mailto:theluffymovies@gmail.com">"theluffymovies@gmail.com"</a></p>
    </Container>
  )
}

export default Alert