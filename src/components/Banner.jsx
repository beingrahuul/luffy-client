import styled from 'styled-components'

//images
import BANNER from '../images/background.jpeg';

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  min-height: 600px;
  background-image: url(${BANNER});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`

const Description = styled.p`
  color: white;
  font-size: 34px;
  font-weight: bold;
  width: 30%;
  margin: 100px;

  span {
    color: #FF0000;
  }
`


const Banner = () => {
  return (
    <Container>
      <Description>
        Browse more than <span>10,000</span> Movies and TV Shows and watch it anytime.
      </Description>
    </Container>
  )
}

export default Banner