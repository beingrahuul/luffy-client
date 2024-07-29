import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { useEpisode } from '../context/EpisodeContext';

//components
import VideoPlayer from '../components/VideoPlayer'
import InfoCard from '../components/InfoCard'
import Episodes from '../components/Episodes'
import Server from '../components/Server'
//import Recommendation from '../components/Recommendation';
import Loader from '../components/Loader';
import Recommendation from '../components/Recommendation';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding-top: 40px;
  background-color: #1C1E22;
  color: white;
  flex-direction: column;

  @media screen and (max-width: 1299px) {
  
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    padding-top: 0px;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 95%;
  gap: 20px;
  color: white;


  @media screen and (max-width: 1299px) {
  
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    flex-direction: column;
    gap: 20px;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  gap: 40px;


  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    gap: 20px;
  }
`

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;


  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {

  }
`



const Content = ({type}) => {

  const {tempId} = useParams()
  console.log(type)
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
        console.log(data.episodes.length)
        if(data.episodes.length !== 0){
          setEpisodeId(data.episodes[0].id)
        }else{
          setEpisodeId(null)
        }
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
        <Loader height="100vh" width="100vw" bgcolor={"#1C1E22"} type={"mutatingDots"}/>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <>
          <MainContainer>

            <LeftContainer>
              <VideoPlayer cover={content.cover} title={content.title}/>

              <Server />
              {type === "tv" && <Episodes data={content.episodes} />}
              
            </LeftContainer>
            
            <RightContainer>
              <InfoCard content={content}/>
            </RightContainer>
          </MainContainer>
          <Recommendation data={content.recommendations} />
        </>
        
      )}
    </Container>
  )
}

export default Content