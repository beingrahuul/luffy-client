import styled from 'styled-components'

//image

const Container = styled.div`
  flex-shrink: 0;
  width: calc(12.5% - 20px);
  background-color: #272B36;
  margin: 10px;
  position: relative;
  overflow: hidden;
  font-size: .9em;
  border-radius: .5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 1299px) {
    width: calc(25% - 20px);
  }

  @media screen and (max-width: 991px) {
    width: calc(25% - 20px) !important;
  }

  @media screen and (max-width: 640px) {
    width: calc(33.33% - 20px) !important;    
  }

  @media screen and (max-width: 479px) {
    width: calc(50% - 20px) !important;
  }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 148%;
    overflow: hidden;
    display: block;
`

const Image = styled.img`
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const InfoContainer = styled.div`
  position: relative;
  padding: .5rem;
  color: #e5e5e5;
`

const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  margin: 10px 0px 0px 0px;
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
  font-size: 10px;
  color: #bdbdbd;
  margin: 0;
`

const Card = ({ item }) => {

  const handleClick = () => {
    window.location.href = `/${item.id
      }`
  }
  return (
    <Container onClick={handleClick}>
      <ImageContainer>
      <Image
          src={
            item.poster === "/images/no_thumbnail.jpg" || item.image === "/images/no_thumbnail.jpg" || item.poster === "N/A"
              ? "https://i.imgur.com/CVBcGsU.jpeg"
              : item.poster || item.image
          }
          alt={item.title}
          loading="lazy"
        />
      </ImageContainer>

      <InfoContainer>
        <MiscContainer>
          <Misc>{item.quality}</Misc>
          <Group>
            <Misc>{item.type === "TV" ? item.season : item.duration}</Misc>
            <Misc>{item.type === "TV" ? item.ep_no : item.releaseDate}</Misc>
          </Group>
        </MiscContainer>
        <Title>{item.title.length > 21 ? `${item.title.substring(0, 21)}...` : item.title}</Title>
      </InfoContainer>
    </Container>
  )
}

export default Card