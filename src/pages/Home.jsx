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
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/trending/movie/en-us/1"  title = "Trending Movies"  type="movie"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/trending/tv/en-us/1"  title = "Trending TV"  type="tv"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/Latest/movie/en-us/1"  title = "Latest Movies"  type="movie"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/Latest/tv/en-us/1"  title = "Latest TV"  type="tv"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/withKeywords/tv/,/first_air_date.desc/1?country=KR"  title = "Latest K-Drama"  type="tv"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/withKeywords/tv/,/vote_count.desc/1?country=KR"  title = "Popular K-Drama"  type="tv"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/withKeywords/tv/210024/first_air_date.desc/1"  title = "Latest Anime"  type="tv"/>
      <CardContainer url ="https://luffy-server-20-production.up.railway.app/tmdb/withKeywords/tv/210024/vote_count.desc/1"  title = "Popular Anime"  type="tv"/>
    </Container>
  )
}

export default Home
