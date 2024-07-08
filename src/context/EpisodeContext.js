import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the episode ID
const EpisodeContext = createContext();

export const useEpisode = () => {
  return useContext(EpisodeContext);
};

export const EpisodeProvider = ({ children }) => {
  const [episodeId, setEpisodeId] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    if (episodeId !== null) {
      fetchEpisodeDetails(episodeId);
    }
  }, [episodeId]);

  const fetchEpisodeDetails = async (id) => {
    try {
      console.log('Fetching episode details for episode ID:', id);
    } catch (error) {
      console.error('Failed to fetch episode details', error);
    }
  };

  return (
    <EpisodeContext.Provider value={{ episodeId, setEpisodeId, episodeData }}>
      {children}
    </EpisodeContext.Provider>
  );
};
