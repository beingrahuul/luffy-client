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
  const URL = "https://luffy-server-production.up.railway.app/home";
  const TEST_URL = "http://localhost:8080/home";
  return (
    <Container>
      <BannerSlider/>
      <ShareThis  url={url}/>
      <CardContainer url ="http://localhost:8080/home/trending-movies"  title = "Trending Movies"  />
      <CardContainer url ="http://localhost:8080/trending-series"  title = "Trending Shows" />
      <CardContainer url ="http://localhost:8080/home/latest-movies"  title = "Latest Movies"  />
      <CardContainer url ="http://localhost:8080/home/latest-series"  title = "Latest Series" />
    </Container>
  )
}

export default Home
