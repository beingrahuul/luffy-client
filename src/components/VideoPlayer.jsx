import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InfinitySpin } from "react-loader-spinner";

// player
import { MediaPlayer, MediaProvider, Track, Poster } from '@vidstack/react';
//import { defaultLayoutIcons, DefaultVideoLayout, DefaultAudioLayout } from '@vidstack/react/player/layouts/default';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';

import "./style/Videoplayer.css";

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

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
  }

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

  let hasSelectedDefault = false;

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
            aspectRatio='16/9'
            load='eager'
            posterLoad='eager'
            streamType='on-demand'
            storage='storage-key'
            keyTarget='player'
            viewType='video'
            logLevel='warn'
            crossOrigin
            playsInline
          >
            <MediaProvider>
              <Poster className='vds-poster' src={cover} alt='' />
              {playerData.subtitles.map(sub => {
                let isDefault = false;

                if (sub.lang.includes("English") && !hasSelectedDefault) {
                  isDefault = true;
                  hasSelectedDefault = true;
                }

                return (
                  <Track
                    key={sub.lang}
                    src={sub.url}
                    kind="subtitles"
                    label={sub.lang}
                    default={isDefault ? "default" : undefined}
                  />
                );
              })}
            </MediaProvider>
            <PlyrLayout icons={plyrLayoutIcons} />
          </MediaPlayer>
        </MainContainer>
      )}
    </Container>
  );
};

export default VideoPlayer;
