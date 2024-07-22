import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Loader from './Loader'


const MainContainer = styled.div`
  max-width: 1520px;
  min-height: calc(100vh - 400px);
  margin: 0px auto;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;

  @media screen and (max-width: 1299px) {
    padding: 0px;
  }

  @media screen and (max-width: 991px) {
    padding: 0px;
  }

  @media screen and (max-width: 640px) {
    padding: 0px;    
  }

  @media screen and (max-width: 479px) {
    padding: 0px;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 1299px) {
    font-size: 20px;
    margin: 20px 0px 0px 10px;
  }

  @media screen and (max-width: 991px) {
    font-size: 20px;
    margin: 20px 0px 0px 10px;

  }

  @media screen and (max-width: 640px) {
    font-size: 20px;   
    margin: 20px 0px 0px 10px;
  }

  @media screen and (max-width: 479px) {
    font-size: 20px;
    margin: 20px 0px 0px 10px;
  }
`

const Carousel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  margin: -10px;
  margin-bottom: 0;
  overflow: hidden;


  @media screen and (max-width: 1299px) {
    margin: 0px;
  }

  @media screen and (max-width: 991px) {
    margin: 0px;
  }

  @media screen and (max-width: 640px) {
    margin: 0px;    
  }

  @media screen and (max-width: 479px) {
    margin: 0px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 49px;
  background-color: #1c1c1c;
  border: 2px solid #FFD020;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333333;
  }

`

function CardContainer({ title, url }) {

  const [showMore, setShowMore] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setData(data.results)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData(url)
  }, [url])


  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <MainContainer>
      <Container>
        <Title>{title}</Title>
        <Carousel>
          {loading ? (
            <Loader height="50vh" width="100vw" type={"mutatingDots"} bgcolor={"#1C1E22"} />
          ) : error ? (
            <h1>Error: {error}</h1>
          ) : (
            showMore === false ?

              (data.slice(0, 16).map((item) => (
                <Card key={item.id} item={item} />
              ))) :

              (data.map((item) => (
                <Card key={item.id} item={item}/>
              )))
          )
          }
        </Carousel>

        <ButtonContainer>
          <Button onClick={handleClick}>
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </ButtonContainer>
      </Container>
    </MainContainer>
  )
}

export default CardContainer