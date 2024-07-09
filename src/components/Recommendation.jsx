import styled from 'styled-components'
import CardContainer from './CardContainer'

const Container = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
`


const Recommendation = ({data}) => {
  return (
    <Container>
      <CardContainer title={"Recommendation"} data={data} recommedation={true} />
    </Container>
  )
}

export default Recommendation