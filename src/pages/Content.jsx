import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { useEpisode } from '../context/EpisodeContext';

//components
import VideoPlayer from '../components/VideoPlayer'
import InfoCard from '../components/InfoCard'
import Episodes from '../components/Episodes'
import Server from '../components/Server'


const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  padding-top: 40px;
  background-color: #22252F;
  color: white;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  color: white;
`

const LeftContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  gap: 40px;
`

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
`



const Content = ({type}) => {

  const {tempId} = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [content, setContent] = useState(null)

  const { setEpisodeId, setMediaId } = useEpisode();

  const id = `${type}/${tempId}`
  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await fetch("https://luffy-server-production.up.railway.app/info", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id})
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setEpisodeId(data.episodes[0].id)
        setMediaId(data.id)
        setContent(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id, setEpisodeId, setMediaId])

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <>
          <MainContainer>

            <LeftContainer>
              <VideoPlayer content={content}/>

              <Server />
              {type === "tv" && <Episodes data={content.episodes} />}
            </LeftContainer>
            
            <RightContainer>
              <InfoCard content={content}/>
            </RightContainer>

          </MainContainer>
        </>
      )}
    </Container>
  )
}

export default Content