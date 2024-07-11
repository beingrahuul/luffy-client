import styled, { keyframes } from 'styled-components';
import { InfinitySpin } from "react-loader-spinner"


// context
import { useEpisode } from '../context/EpisodeContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 900px;
  background-color: #000000;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const pulse = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;


const Warpper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #99bf9975;
  margin: 0 auto;

  .circle {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: #33cc33;
    margin: auto;
    transform: scale(1, 1);

    &.pulse {
      animation-timing-function: ease;
      animation: ${pulse} 1s infinite;
      background-color: lighten(#33cc33, 25%);
    }
  }

  svg {
    fill: darken(#33cc33, 12%);
    stroke: darken(#33cc33, 12%);
    stroke-linejoin: round;
    stroke-width: 5;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      fill: darken(#33cc33, 17%);
      stroke: darken(#33cc33, 17%);
      transform: scale(1.2, 1.2);
    }
  }
`;





const VideoPlayer = ({ data }) => {

  const { playerData, loading, error } = useEpisode();

  return (
    <Container>
      {loading ?
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        /> :
        error ? <h1>{error}</h1> :
          playerData && (
            <MainContainer>
              <Image src={data} alt="video" />
              <Warpper>
                <div className="circle pulse"></div>
                <div class="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <polygon points="40,30 65,50 40,70"></polygon>
                  </svg>
                </div>
              </Warpper>
            </MainContainer>
          )
      }
    </Container>
  );
};

export default VideoPlayer;
