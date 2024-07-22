import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 340px;
  color: #A7A7A7;
  background-color: #272B36;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 20px;

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
  height: 350px;
  width: 220px;
  margin: 25px 0;
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
  width: 100%;
  height: 100%;
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
  width: 300px;
  gap: 25px;
  color: #a7a7a7;
  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {

  } 
`

const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 15px;
  align-items: center;

`

const Title = styled.h1`
  font-size: 20px;
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
  background-color: #ffd020;
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

  console.log(content)
  return (
    <Container>
      <PosterContainer>
        {
          content.image === "N/A" ? (
            <Poster src="https://i.imgur.com/CVBcGsU.jpeg" />
          ) : (
            <Poster src={content.image} />
          )
        }
      </PosterContainer>

      <InfoContainer>
        <Title>{content.title}</Title>
        <Group>
          <IMDB>{`IMDb ${content.rating === null ? 'N/A' : content.rating}`}</IMDB>
          <Misc>{content.duration}</Misc>
        </Group>
        <Description>
          {content.description.length > 150 ? content.description.slice(0, 150) + "..." : content.description}
        </Description>
        <ExtraInfo>
        <Extra>
          <Misc style={{color:"white"}}>Release Date :</Misc>
          <ExtraContainer>
            <Misc>{content.releaseDate}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc style={{color:"white"}}>Genre :</Misc>
          <ExtraContainer>
            <Misc>{content.genres.sort().join(", ")}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc style={{color:"white"}}>Casts :</Misc>
          <ExtraContainer>
            <Misc>{content.casts.sort().join(", ")}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc style={{color:"white"}}>Production :</Misc>
          <ExtraContainer>
            <Misc>{content.production}</Misc>
          </ExtraContainer>
        </Extra>

        <Extra>
          <Misc style={{color:"white"}}>country :</Misc>
          <ExtraContainer>
            <Misc>{content.country}</Misc>
          </ExtraContainer>
        </Extra>
        </ExtraInfo>
      </InfoContainer>
    </Container>
  )
}

export default InfoCard