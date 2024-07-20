import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InfinitySpin } from "react-loader-spinner"

// player
import { MediaPlayer, MediaProvider, Track } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

// context
import { useEpisode } from '../context/EpisodeContext';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 900px;
  aspect-ratio: 16 / 9;
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
  const [currentQuality, setCurrentQuality] = useState('auto');

  useEffect(() => {
    if (playerData && playerData.sources) {
      setCurrentQuality(playerData.sources.find(source => source.quality === 'auto')?.quality || playerData.sources[0].quality);
    }
  }, [playerData]);

  const getCurrentSource = () => {
    if (!playerData || !playerData.sources) return null;
    return playerData.sources.find(source => source.quality === currentQuality) || playerData.sources[0];
  };

  return (
    <Container>
      {loading ? (
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      ) : error ? (
        <h1>{error}</h1>
      ) : playerData && (
        <MainContainer>
          <MediaPlayer
            title={title}
            src={getCurrentSource()?.url}
            load="idle"
            posterLoad='visible'
            viewType='video'
            streamType='on-demand'
            logLevel='warn'
            crossOrigin
            playsInline
          >
            <MediaProvider >
              
              {playerData.subtitles.map(sub => (
                <Track
                  key={sub.lang}
                  src={sub.url}
                  kind="subtitles"
                  label={sub.lang}
                  default={sub.lang === "English" && "default"}
                />
              ))}
              
            </MediaProvider>
            <DefaultVideoLayout
              icons={defaultLayoutIcons}
            />
          </MediaPlayer>
        </MainContainer>
      )}
    </Container>
  );
};

export default VideoPlayer;