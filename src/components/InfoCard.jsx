import styled from 'styled-components';
import WATCH from '../icons/Watch.svg';
import { TMDB_POSTER_BASE_URL } from '../contants';

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

  @media screen and (max-width: 479px) {
    border-radius: 0px;
    max-width: 100%;
    margin-bottom: 0px;
    align-items: flex-start;
  } 
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: calc(220 * 1.5);
  margin: 25px 0;

  @media screen and (max-width: 479px) {
    height: 107px;
    width: 70px;
    margin: 15px 0px 10px 20px;
  } 
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  gap: 25px;
  color: #a7a7a7;

  @media screen and (max-width: 479px) {
    margin-left: 20px;
    gap: 10px;
  } 
`;

const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 15px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin: 0;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 479px) {
    justify-content: flex-start;
    gap: 20px;
  } 
`;

const IMDB = styled.div`
  font-size: 14px;
  font-weight: 600;
  background-color: #ffd020;
  color: black;
  padding: 5px;

  @media screen and (max-width: 479px) {
    font-size: 12px;
  } 
`;

const Misc = styled.div`
  display: flex;
  font-size: 14px;
  margin: 0;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;

  img {
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
`;

const ExtraContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  align-items: center;
`;

const Extra = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 10px 0;

  @media screen and (max-width: 479px) {
    font-size: 12px;
  } 
`;

const InfoCard = ({ content }) => {
  

  console.log(content);
  const handleClick = (type) => {
    // navigate(`/genre/${type}`);
    console.log(`/genre/${type}`);
  };

  return (
    <Container>
      <PosterContainer>
        <Poster 
          src={content.poster_path === null ? "https://i.imgur.com/CVBcGsU.jpeg" : `${TMDB_POSTER_BASE_URL}${content.poster_path}`} 
          alt= {content.title || 'Poster'}
          />
      </PosterContainer>

      <InfoContainer>
        <Title>
          {
            content.title ? content.title : content.name
          }     
        </Title>
        <Group>
          <IMDB>{`IMDb ${content.vote_average === null ? 'N/A' : content.vote_average.toFixed(1)}`}</IMDB>
          <Misc>
            <img src={WATCH} alt='Watch icon' />
            {content.runtime ? content.runtime : "N/A"}
          </Misc>
        </Group>
        <Description>
          {content.overview.length > 150 ? content.overview.slice(0, 150) + "..." : content.overview}
        </Description>
        <ExtraInfo>
          <Extra>
            <Misc style={{ color: "white" }}>Release Date :</Misc>
            <ExtraContainer>
              <Misc>{content.release_date ? content.release_date : content.first_air_date}</Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Genre :</Misc>
            <ExtraContainer>
              <Misc>
                {content.genres.map((s, index) => (
                  <span key={index} onClick={() => handleClick(s.name)}>
                    {`${s.name}${index < content.genres.length - 1 ? ', ' : ''}`}
                  </span>
                ))}
              </Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Language :</Misc>
            <ExtraContainer>
              <Misc>
                {
                  content.spoken_languages.map((s, index) => (
                    <span key={index}>
                      {`${s.name}${index < content.spoken_languages.length - 1 ? ', ' : ''}`}
                    </span>
                  ))
                }
              </Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Production :</Misc>
            <ExtraContainer>
              <Misc>
                {
                  content.production_companies.map((s, index) => (
                    <span key={index} onClick={() => handleClick(s.name)}>
                      {`${s.name}${index < content.production_companies.length - 1 ? ', ' : ''}`}
                    </span>
                  ))
                }
              </Misc>
            </ExtraContainer>
          </Extra>

          <Extra>
            <Misc style={{ color: "white" }}>Country :</Misc>
            <ExtraContainer>
              <Misc>
                {
                  content.production_countries.map((s, index) => (
                    <span key={index} onClick={() => handleClick(s.name)}>
                      {`${s.name}${index < content.production_countries.length - 1 ? ', ' : ''}`}
                    </span>
                  ))
                }
              </Misc>
            </ExtraContainer>
          </Extra>
        </ExtraInfo>
      </InfoContainer>
    </Container>
  );
};

export default InfoCard;
