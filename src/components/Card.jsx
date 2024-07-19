import styled from 'styled-components'

//image

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 334.9px;
  background-color: #303030;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

`

const ImageContainer = styled.div`
  width: 100%;
  height: 270px;
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
  margin-top: 10px;
`

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
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
  font-size: 12px;
  color: white;
  margin: 0;
`

const Card = ({item, recommedation}) => {

  const handleClick = () => {
    window.location.href = `/${
      item.id
    }`
  }

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        {
          item.poster === "/images/no_thumbnail.jpg" || item.image === "/images/no_thumbnail.jpg" ? (
            <Image src="https://i.imgur.com/CVBcGsU.jpeg" />
          ) : (
            <Image src={item.poster ? item.poster : item.image} />
          )
        }
      </ImageContainer>

      <InfoContainer>
        {recommedation ? (
            <MiscContainer>
              <Misc>{item.type}</Misc>
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