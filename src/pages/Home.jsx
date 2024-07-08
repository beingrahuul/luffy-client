import { useState, useEffect } from 'react'
import styled from 'styled-components'

//components
import Banner from '../components/Banner'
import CardContainer from '../components/CardContainer'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2F323B;
  gap: 20px;
`

function Home() {
  const [home, setHome] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://luffy-server-production.up.railway.app/home")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setHome(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Banner />
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : (
        <>
          <CardContainer data={home.trendingMovies}  title = "Trending Movies" comingSoon={false}/>
          <CardContainer data={home.trendingSeries}  title = "Trending Shows" comingSoon={false}/>
          <CardContainer data={home.latestMovies}  title = "Latest Movies" comingSoon={false}/>
          <CardContainer data={home.latestSeries}  title = "Latest Series" comingSoon={false}/>
        </>
      )}
    </Container>
  )
}

export default Home
