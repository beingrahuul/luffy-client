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
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/trending-movies"  title = "Trending Movies"  />
      <CardContainer url ="https://luffy-server-production.up.railway.app/trending-series"  title = "Trending Shows" />
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/latest-movies"  title = "Latest Movies"  />
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/latest-series"  title = "Latest Series" />
    </Container>
  )
}

export default Home
