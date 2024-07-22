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
`


function Home() {

  return (
    <Container>
      <BannerSlider />
      <CardContainer url ="http://localhost:8080/home/trending-movies"  title = "Trending Movies"  />
      <CardContainer url ="http://localhost:8080/home/trending-series"  title = "Trending Shows" />
      <CardContainer url ="http://localhost:8080/home/latest-movies"  title = "Latest Movies"  />
      <CardContainer url ="http://localhost:8080/home/latest-series"  title = "Latest Series" />
    </Container>
  )
}

export default Home
