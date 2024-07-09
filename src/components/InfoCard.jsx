import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 385px;
  color: white;
  background-color: #2F323B;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
`

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 425px;
  width: 345px;
`

const Poster = styled.img`
  width: 80%;
  height: 85%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 325px;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const IMDB = styled.div`
  font-size: 14px;
  font-weight: 600;
  background-color: #F6BE4F;
  color: black;
  padding: 5px;
`

const Misc = styled.p`
  font-size: 14px;
  margin: 0;
`

const ExtraContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  align-items: center;
`

const Extra = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Description = styled.p`
  font-size: 14px;
  margin: 10px 0;
`

const InfoCard = ({content}) => {
  return (
    <Container>
      <PosterContainer>
        <Poster src={content.image} />
      </PosterContainer>

      <InfoContainer>
        <Title>{content.title}</Title>
        <Group>
          <IMDB>{`IMDb ${content.rating === null ? 'N/A' : content.rating}`}</IMDB>
          <Misc>{content.duration}</Misc>
        </Group>
        <Description>
          {content.description.length > 200 ? content.description.slice(0, 200) + "..." : content.description}
        </Description>

        <Extra>
          <Misc>Release Date :</Misc>
          <ExtraContainer>
            <Misc>{content.releaseDate}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc>Genre :</Misc>
          <ExtraContainer>
            <Misc>{content.genres.sort().join(", ")}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc>Casts :</Misc>
          <ExtraContainer>
            <Misc>{content.casts.sort().join(", ")}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc>Production :</Misc>
          <ExtraContainer>
            <Misc>{content.production}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc>country :</Misc>
          <ExtraContainer>
            <Misc>{content.country}</Misc>
          </ExtraContainer>
        </Extra>
      </InfoContainer>
    </Container>
  )
}

export default InfoCard