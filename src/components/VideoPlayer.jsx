import styled from 'styled-components';
import { InfinitySpin } from "react-loader-spinner"

//player
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';


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






const VideoPlayer = ({ cover, title }) => {

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
              <MediaPlayer
                title={title}
                src={playerData.sources[0].url}
                load="idle"
                posterLoad='visible'
                viewType='video'
                streamType='on-demand'
                logLevel='warn'
                crossOrigin
                playsInline
              >
                <MediaProvider />
                <DefaultVideoLayout thumbnails={cover} icons={defaultLayoutIcons} />
              </MediaPlayer>
            </MainContainer>
          )
      }
    </Container>
  );
};

export default VideoPlayer;
