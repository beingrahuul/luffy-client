import styled from 'styled-components'

//components
import CardContainer from '../components/CardContainer'
import BannerSlider from '../components/BannerSlider'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1c1e22;
  gap: 20px;

  @media screen and (max-width: 479px) {
    
  }

`


function Home() {

  return (
    <Container>
      <BannerSlider />
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/trending-movies"  title = "Trending Movies"  />
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/trending-series"  title = "Trending Shows" />
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/latest-movies"  title = "Latest Movies"  />
      <CardContainer url ="https://luffy-server-production.up.railway.app/home/latest-series"  title = "Latest Series" />
    </Container>
  )
}

export default Home
