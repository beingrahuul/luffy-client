import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 385px;
  color: #A7A7A7;
  background-color: #272B36;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-radius: 10px;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    border-radius: 0px;
    width: 100%;
    margin-bottom: 0px;
  } 
`

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 425px;
  width: 345px;
  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    height: 325px;
    width: 245px;
  } 
`

const Poster = styled.img`
  width: 80%;
  height: 85%;
  object-fit: cover;
  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {

  } 
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 325px;
  gap: 10px;
  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {

  } 
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin: 0;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 20px;
  }   
`

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    justify-content: flex-start;
    gap: 20px;
  } 
`

const IMDB = styled.div`
  font-size: 14px;
  font-weight: 600;
  background-color: #F6BE4F;
  color: black;
  padding: 5px;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 12px;
  } 
`

const Misc = styled.p`
  font-size: 14px;
  margin: 0;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 12px;
  } 
`

const ExtraContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  align-items: center;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {

  } 
`

const Extra = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {

  } 
`

const Description = styled.p`
  font-size: 14px;
  margin: 10px 0;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 12px;
  } 
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