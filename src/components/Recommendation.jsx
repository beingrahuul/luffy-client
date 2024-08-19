import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 0;
  overflow: hidden;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`
const TitleContainer  = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 100%;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 479px) {
    margin-left: 10px;
  }
`



const Recommendation = ({id, type}) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false) 

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://luffy-server-20-production.up.railway.app/tmdb/recommendations/${type}/${id}`;
      //const TEST_URL = `http://localhost:6969/tmdb/recommendations/${type}/${id}`;

      setLoading(true);
      setError(null);
      try {
        const res = await fetch(URL)
        const data = await res.json()
        setData(data.results)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchData()
  }
  , [id, type])

  return (
    <>
    <TitleContainer>
      <Title>Watch Next</Title>
    </TitleContainer>
    <Container>
      {data.slice(0, 16).map((item, index) => (
          <Card key={index} item={item} />
      ))}
    </Container>
    </>
  )
}

export default Recommendation