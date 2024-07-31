import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // React Router navigation

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
    width: calc(16.66% - 20px);
  }

  @media screen and (max-width: 991px) {
    width: calc(25% - 20px);    
  }

  @media screen and (max-width: 640px) {
    width: calc(33.33% - 20px);    
  }

  @media screen and (max-width: 479px) {
    width: calc(50% - 20px);  
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
  padding: .5rem;
  color: white;
`;

const Title = styled.h3`
  font-size: 14px; /* Adjusted font size */
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
  font-size: 12px; /* Adjusted font size */
  color: white;
  margin: 0;
`;

const RecommendCard = ({ item }) => {
  const navigate = useNavigate(); // React Router navigation

  const handleClick = () => {
    navigate(`/${item.id}`); // Use navigate for routing
  };

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <Image src={item.image === "/images/no_thumbnail.jpg" ? "https://i.imgur.com/CVBcGsU.jpeg" : item.image} />
      </ImageContainer>

      <InfoContainer>
        <MiscContainer>
          <Misc>
            {item.type === "TV Series" ? `SS ${item.seasons || "N/A"}` : `${item.duration || "N/A"} min`}
          </Misc>
          <Misc>{item.type}</Misc>
        </MiscContainer>
        <Title>{item.title.length > 24 ? `${item.title.substring(0, 24)}...` : item.title}</Title>
      </InfoContainer>
    </Container>
  );
};

export default RecommendCard;
