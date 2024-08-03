import styled from 'styled-components'

//components
import CardContainer from '../components/CardContainer'
import BannerSlider from '../components/BannerSlider'
import ShareThis from '../components/ShareThis'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1c1e22;
  gap: 20px;
  z-index: -1;
`


function Home() {

  const url = window.location.href
  return (
    <Container>
      <BannerSlider/>
      <ShareThis  url={url}/>
      <CardContainer url ="http://localhost:6969/tmdb/trending/movie/en-us/1"  title = "Trending Movies"  />
      <CardContainer url ="http://localhost:6969/tmdb/trending/tv/en-us/1"  title = "Trending TV"  />
      <CardContainer url ="http://localhost:6969/tmdb/Latest/movie/en-us/1"  title = "Latest Movies"  />
      <CardContainer url ="http://localhost:6969/tmdb/Latest/tv/en-us/1"  title = "Latest TV"  />
    </Container>
  )
}

export default Home
