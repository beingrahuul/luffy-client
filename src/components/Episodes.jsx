import styled from 'styled-components'
import { useState } from 'react'
import { useEpisode } from '../context/EpisodeContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  background-color: #2c2c2c;
  border-radius: 5px;
  color: white;
  gap: 20px;
  padding: 20px 0px;
  margin: 20px;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    width: 100%;
    border-radius: 0px;
  }
`

const SeasonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 60px;
  gap: 20px;
  overflow-y: scroll;
  scrollbar-width: none;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    gap: 10px;
    height: 50px;
  }

`

const Season = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 90%;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding-top: 3px;
  border-bottom: 3px solid transparent;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    min-width: 70px;
    font-size: 12px;
  }
`

const EpisodesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  gap: 20px;
  width: 90%;
  background-color: #2c2c2c;
  border-radius: 5px;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    gap: 10px;
  }
`

const Episode = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  font-size: 14px;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #4c4c4c;
  }

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 10px;
    width: 150px;
    height: 40px;
    padding: 0px 10px;
  }
`

const Episodes = ({data}) => {

  console.log(data)

  const groupEpisodesBySeason = (episodes) => {
    return episodes.reduce((acc, episode) => {
        const { season } = episode;
        if (!acc[season]) {
            acc[season] = [];
        }
        acc[season].push(episode);
        return acc;
    }, {});
  };

  const groupedEpisodes = groupEpisodesBySeason(data);
  const { episodeId, setEpisodeId } = useEpisode(); 
  const [season, setSeason] = useState(1);
  const [ep, setEp] = useState(null || episodeId);

  const handleClick = (episodeId) => {
    setEp(episodeId)
    setEpisodeId(episodeId)
  }

  return (
    <Container>
      {data.length === 0 ? <h1>No episodes found</h1> : (
        <>
          <SeasonsContainer>
            {Object.keys(groupedEpisodes).map((seasonNumber, index) => (
              <Season
                key={index}
                style={{ borderBottom: season === Number(seasonNumber) ? '3px solid #4CAF50' : '3px solid transparent' }}
                onClick={() => setSeason(Number(seasonNumber))}
              >
                Season {seasonNumber}
              </Season>
            ))}
          </SeasonsContainer>

          <EpisodesContainer>
            {(groupedEpisodes[season] || []).map((episode, index) => (
              <Episode 
                key={index} 
                onClick={() => handleClick(episode.id)}
                style={{ backgroundColor: episode.id === ep ? '#4CAF50' : '#3c3c3c' }}
              >
                <p>{episode.title.length > 25 ? episode.title.slice(0, 25) + "..." : episode.title}</p>
              </Episode>
            ))}
          </EpisodesContainer>
        </>
      )}
    </Container>
  )
}

export default Episodes
