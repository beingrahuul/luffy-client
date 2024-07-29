import styled from 'styled-components'
import { useState } from 'react'
import { useEpisode } from '../context/EpisodeContext';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  border-radius: 5px;
  color: white;
  gap: 20px;
  padding: 20px 0px;

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
  width: 95%;
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
    overflow-y: scroll;
    scrollbar-width: none;

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
    height: 89%;
    font-size: 12px;
  }
`

const EpisodesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 0;
  overflow: hidden;

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
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  width: calc(16.6% - 40px);
  background-color: #272B36;
  margin: 10px;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #4c4c4c;
  }


  @media screen and (max-width: 479px) {
    width: calc(50% - 45px);
    font-size: 10px;
    width: 150px;
    height: 40px;
    padding: 10px;
  }
`

const EpisodeTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  p{
    margin: 0;
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
                style={{ 
                  backgroundColor: episode.id === ep ? '#ffd020' : '#272b36' , 
                  color: episode.id === ep ? '#323232' : '#a7a7a7'
                }}
              >

                <EpisodeTitle>
                {episode.title.split(":").slice(0,2).map((item, index) => (
                  <p key={index}>
                    {item.length > 16 ? `${item.substring(0, 16)}..` : item}
                  </p>
                ))}
                </EpisodeTitle>
              </Episode>
            ))}
          </EpisodesContainer>
        </>
      )}
    </Container>
  )
}

export default Episodes
