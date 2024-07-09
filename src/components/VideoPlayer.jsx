import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Hls from 'hls.js';

// context
import { useEpisode } from '../context/EpisodeContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 900px;
  background-color: #a6bbfa;
  color: white;
`;

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const { playerData, loading, error } = useEpisode();

  useEffect(() => {
    if (loading) {
      console.log('loading');
      return;
    }
    if (error) {
      console.log('error');
      return;
    }
    if (!playerData || !playerData.sources || !playerData.sources[0] || !playerData.sources[0].url) {
      console.log('no data');
      return;
    }

    console.log('playerData: ', playerData);

    const videoElement = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(playerData.sources[0].url);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
      });
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = playerData.sources[0].url;
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.play();
      });
    }
  }, [playerData, loading, error]);

  return (
    <Container>
      <video ref={videoRef} controls style={{ width: '100%', height: '100%' }} />
    </Container>
  );
};

export default VideoPlayer;
