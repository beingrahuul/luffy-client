import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: white;
`

const Carousel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
  gap: 30px 10px;
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

function CardContainer({ data, title, recommedation }) {

  const [showMore, setShowMore] = useState(false)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Carousel>

        {showMore === false ? 
        
        (data.slice(0, 12).map((item) => (
          <Card key={item.id} item={item} recommedation={recommedation} />
        ))) : 
        
        (data.map((item) => (
          <Card key={item.id} item={item} recommedation={recommedation} />
        )))}
      </Carousel>

      <ButtonContainer>
        <Button onClick={handleClick}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default CardContainer