import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Icons
import PLAY from '../icons/Play.svg';
import STAR from '../icons/star.svg';
import { TMDB_BACKDROP_BASE_URL } from '../contants';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 580px;
  overflow: hidden;
  position: relative;
  background: #f0f0f0;

  @media screen and (max-width: 1299px) {
    /* Add specific styles for this breakpoint if needed */
  }

  @media screen and (max-width: 991px) {
    /* Add specific styles for this breakpoint if needed */
  }

  @media screen and (max-width: 640px) {
    /* Add specific styles for this breakpoint if needed */
  }

  @media screen and (max-width: 479px) {
    height: 300px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
`;

const InfoContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  z-index: 2;
  color: white;
  gap: 20px;
  margin: 40px;
  border-radius: 10px;

  @media screen and (max-width: 1299px) {
    /* Add specific styles for this breakpoint if needed */
  }

  @media screen and (max-width: 991px) {
    /* Add specific styles for this breakpoint if needed */
  }

  @media screen and (max-width: 640px) {
    /* Add specific styles for this breakpoint if needed */
  }

  @media screen and (max-width: 479px) {
    width: 100%;
    margin: 10px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 479px) {
    font-size: 20px;
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: #adb5bd;

  @media screen and (max-width: 479px) {
    gap: 10px;
  }
`;

const IMDB = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;

  @media screen and (max-width: 479px) {
    font-size: 10px;
    padding: 5px;
    font-weight: 500;
  }

  img {
    width: 15px;
    height: 15px;

    @media screen and (max-width: 479px) {
      width: 10px;
      height: 10px;
    }
  }
`;

const Misc = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;

  @media screen and (max-width: 479px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  margin: 10px 0;
  color: #adb5bd;

  @media screen and (max-width: 479px) {
    font-size: 12px;
    margin: 5px 0;
  }
`;

const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.div`
  background-color: #ffd020;
  color: black;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 26px;
  gap: 15px;

  &:focus {
    outline: 2px solid #ffd020;
  }

  @media screen and (max-width: 479px) {
    padding: 12px;
    font-size: 12px;
    gap: 10px;
  }
`;

const ButtonImage = styled.img`
  width: 20px;
  height: 22px;
  margin-right: 10px;

  @media screen and (max-width: 479px) {
    width: 13px;
    height: 14px;
    margin: 0;
  }
`;

const ButtonText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Banner = React.memo(({ data }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`${data.media_type}/${data.id}`);
  }, [navigate, data.id, data.media_type]);

  return (
    <Container>
      <picture>
        <BannerImage src={`${TMDB_BACKDROP_BASE_URL}${data.backdrop_path}`} alt={`Cover image of ${data.title}`} loading="lazy" />
      </picture>
      <MainContainer>
        <InfoContainer>
          <Title>{data.title || data.name}</Title>
          <Group>
            <IMDB>
              <img src={STAR} alt="IMDB rating" />
              {data.vote_average === null ? 'N/A' : data.vote_average.toFixed(1)}
            </IMDB>
            <Misc>{data.release_date || data.first_air_date}</Misc>            
          </Group>
          <Description>
            {data.overview ? (data.overview.length > 150 ? `${data.overview.slice(0, 150)}...` : data.overview) : 'No description available'}
          </Description>
          <Button onClick={handleClick}>
            <ButtonImage src={PLAY} alt="Play" />
            <ButtonText>Watch Now</ButtonText>
          </Button>
        </InfoContainer>
      </MainContainer>
    </Container>
  );
});

export default Banner;
