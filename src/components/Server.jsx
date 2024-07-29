import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useEpisode } from '../context/EpisodeContext'
import Loader from './Loader'

//icons
import PLAY from '../icons/Play.svg'


const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #1C1E22;
  color: #A7A7A7;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 479px) {
    padding: 10px;
  }
`

const Heading = styled.p`
  font-size: 15px;
  margin: 10px;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 12px;
  }
`

const ServerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 109px;
  height: 43px;
  background-color: #FFFFFF;
  color: #323232;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    width: 80px;
    height: 30px;
    font-size: 12px;
    margin: 8px;
  }

`

const BtnImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;

  @media screen and (max-width: 479px) {
    width: 10px;
    height: 10px;

  }
`

const ButtonTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 109px;
  height: 43px;
  color: white;
  border: 1.5px solid #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    width: 80px;
    height: 30px;
    font-size: 12px;
    margin: 8px;
  }

`


const Server = () => {

  const [server, setServer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { episodeId, mediaId, selectedServer, setSelectedServer } = useEpisode();

  console.log(episodeId, mediaId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://luffy-server-production.up.railway.app/server", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({episodeId, mediaId})
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setServer(data)
        setSelectedServer(data[0])
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }
  , [episodeId, mediaId, setSelectedServer])


  return (
    <Container>
      <Heading>If current server doesn't work please try other server below.</Heading>
      <ServerContainer>
      {
        loading ? <Loader height="100%" width="100%" bgcolor={"#1C1E22"} type={"mutatingDots"}/> : 
        error ? <p>{error}</p> : (
          server.map((server, index) => (
            selectedServer === server ? 
              <Button key={index}>
                <BtnImage src={PLAY} alt="play" />
                {server.name} 
              </Button> :
              <ButtonTwo key={index} onClick={() => setSelectedServer(server)}> {server.name} </ButtonTwo>

          )
        ))
      }
      </ServerContainer>
    </Container>
  )
}

export default Server