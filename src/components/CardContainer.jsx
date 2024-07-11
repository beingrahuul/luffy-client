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
  font-size: 24px;
  font-weight: 600;
  color: white;
`

const Carousel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  overflow-x: scroll;
  gap: 20px;
  height: 400px;

  &::-webkit-scrollbar {
    display: none;
  }
`

function CardContainer({data, title, recommedation}) {
  
  return (
    <Container>
      <Title>{title}</Title>
      <Carousel>
        {data.map((item) => (
          <Card key={item.id} item={item} recommedation = {recommedation}/>
        ))}
      </Carousel>
    </Container>
  )
}

export default CardContainer