import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useEpisode } from '../context/EpisodeContext'
import Loader from './Loader'

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #1C1E22;
  color: white;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.p`
  font-size: 24px;
  margin: 10px;
`

const ServerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: #4CAF50;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #45a049;
  }
`


const Server = () => {

  const [server, setServer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { episodeId, mediaId, selectedServer, setSelectedServer } = useEpisode();

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
      <Heading>Available Servers</Heading>
      <ServerContainer>
      {
        loading ? <Loader height="100%" width="100%" bgcolor={"#1C1E22"} type={"mutatingDots"}/> : 
        error ? <p>{error}</p> : (
          server.map((server, index) => (
            <Button 
              key={index}
              onClick={() => {
                setSelectedServer(server)
              }}
              style={{backgroundColor: selectedServer === server ? '#45a049' : '#4CAF50', color: selectedServer === server ? 'black' : 'white'  }}
            >
              {server.name}
            </Button>
          ))
        )
      }
      </ServerContainer>
    </Container>
  )
}

export default Server