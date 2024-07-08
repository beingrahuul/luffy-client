import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useEpisode } from '../context/EpisodeContext'

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #22252F;
  color: white;
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


const Server = ({mediaId}) => {

  const [server, setServer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { episodeId } = useEpisode();

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
        console.log("Server data: ", data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }
  , [episodeId, mediaId])


  return (
    <Container>
      {
        loading ? <p>Loading...</p> : 
        error ? <p>{error}</p> : (
          server.map((server, index) => (
            <Button key={index}>
              {server.name}
            </Button>
          ))
        )
      }
    </Container>
  )
}

export default Server