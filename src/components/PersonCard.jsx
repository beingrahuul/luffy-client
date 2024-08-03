import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TMDB_POSTER_BASE_URL } from '../contants';

const Container = styled.div`
  flex-shrink: 0;
  width: calc(12.5% - 20px);
  background-color: #272B36;
  margin: 10px;
  position: relative;
  overflow: hidden;
  font-size: 0.9em;
  border-radius: 0.5rem;
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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 148%;
  overflow: hidden;
  display: block;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  color: #e5e5e5;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  margin: 10px 0 0 0;
`;

const MiscContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Misc = styled.p`
  font-size: 10px;
  color: #bdbdbd;
  margin: 0;
`;

const PersonCard = ({ item }) => {
  const navigate = useNavigate();

  const getGender = (id) => {
    switch (id) {
      case 1:
        return "Female";
      case 2:
        return "Male";
      default:
        return "-";
  }
  };

  const handleClick = () => {
    const type = item.media_type ? item.media_type : 'movie';
    console.log(type);
  };

  return (
    <Container onClick={handleClick} role="button" aria-label={`Go to ${item.title}`}>
      <ImageContainer>
        <Image
          src={
            item.profile_path === null
              ? "https://i.imgur.com/CVBcGsU.jpeg"
              : `${TMDB_POSTER_BASE_URL}${item.profile_path}` 
          }
          alt={item.title}
          loading="lazy"
        />
      </ImageContainer>
      <InfoContainer>
        <MiscContainer>
          <Misc>{getGender(item.gender)}</Misc>
          <Misc>
            {
              item.known_for_department
            }
          </Misc>
        </MiscContainer>
        <Title>
          {
            item.title ? item.title.length > 21 ? `${item.title.substring(0, 21)}...` : item.title : 
            item.name.length > 21 ? `${item.name.substring(0, 21)}...` : item.name
          }
        </Title>
      </InfoContainer>
    </Container>
  );
};

export default memo(PersonCard);
