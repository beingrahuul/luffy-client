import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

//icons
import WATCH from '../icons/Watch.svg'

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
    max-width: 100%;
    margin-bottom: 0px;
    align-items: flex-start;
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
    height: 107px;
    width: 70px;
    margin: 15px 0px 10px 20px;
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
    margin-left: 20px;
    gap: 10px;
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

const Misc = styled.div`
  display: flex;
  font-size: 14px;
  margin: 0;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;

  @media screen and (max-width: 1299px) {
    
  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 12px;
  } 

  img{
    height: 15px;
    width: 15px;

    @media screen and (max-width: 479px) {
      height: 13px;
      width: 13px;
    }
  } 

  span {
    font-size: 14px;
    color: #A7A7A7;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: #ffd020;
    }
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

const InfoCard = ({ content }) => {
  
  const navigate = useNavigate()

  const handleClick = (type) => {
    navigate(`/genre/${type}`)
  }

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
          <Misc><img src={WATCH} alt='watch' />{content.duration}</Misc>
        </Group>
        <Description>
          {content.description.length > 150 ? content.description.slice(0, 150) + "..." : content.description}
        </Description>
        <ExtraInfo>
          <Extra>
            <Misc style={{ color: "white" }}>Release Date :</Misc>
            <ExtraContainer>
              <Misc>{content.releaseDate}</Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Genre :</Misc>
            <ExtraContainer>
              <Misc>
                {content.genres.map((s, index) => (
                  <span key={index} onClick={() => handleClick(s)}>
                    {`${s}${index < content.genres.length - 1 ? ', ' : ''}`}
                  </span>
                ))}
              </Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Casts :</Misc>
            <ExtraContainer>
              <Misc>{content.casts.sort().join(", ")}</Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Production :</Misc>
            <ExtraContainer>
              <Misc>{content.production}</Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Country :</Misc>
            <ExtraContainer>
              <Misc>{content.country}</Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Views :</Misc>
            <ExtraContainer>
              <Misc>{content.views}</Misc>
            </ExtraContainer>
          </Extra>
        </ExtraInfo>
      </InfoContainer>
    </Container>
  )
}

export default InfoCard