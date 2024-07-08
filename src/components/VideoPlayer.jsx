import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 900px;
  background-color: #a6bbfa;
  color: white;
`

const CoverIamge = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const VideoPlayer = ({content}) => {
  return (
    <Container>
      <CoverIamge src={content.cover} />
    </Container>
  )
}

export default VideoPlayer