import styled from 'styled-components'
import RecommendCard from './RecommendCard'

const Container = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 0;
  overflow: hidden;
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
`



const Recommendation = ({data}) => {
  return (
    <>
    <TitleContainer>
      <Title>Watch Next</Title>
    </TitleContainer>
    <Container>
      {data.map((item, index) => (
          <RecommendCard key={index} item={item} />
      ))}
    </Container>
    </>
  )
}

export default Recommendation