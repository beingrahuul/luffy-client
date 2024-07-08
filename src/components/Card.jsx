import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 242px;
  min-height: 377px;
  background-color: #303030;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;


  &:hover {
    transform: scale(1.05);
  }

`

const ImageContainer = styled.div`
  width: 100%;
  height: 285px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  width: 85%;
  margin-top: 20px;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0;
`

const MiscContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Misc = styled.p`
  font-size: 14px;
  color: white;
  margin: 0;
`

const Card = ({item, comingSoon}) => {

  const handleClick = () => {
    window.location.href = `/${
      item.id
    }`
  }
  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <Image src={item.poster} />
      </ImageContainer>

      <InfoContainer>
        {comingSoon ? (
            <MiscContainer>
              <Misc>{item.type}</Misc>
              <Misc>{item.releaseDate}</Misc>
            </MiscContainer>
        ) : (
            <MiscContainer>
              <Misc>{item.quality}</Misc>
              <Group>
                <Misc>{item.type === "TV" ? item.season : item.duration}</Misc>
                <Misc>{item.type === "TV" ? item.ep_no : item.releaseDate}</Misc>
              </Group>
            </MiscContainer>
            )  
        }
        <Title>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Title>
      </InfoContainer>
    </Container>
  )
}

export default Card