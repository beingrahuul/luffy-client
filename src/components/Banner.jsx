import styled from 'styled-components';


const Container = styled.div`
  margin: 20px;
  display: flex;
  width: 90vw;
  height: 550px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
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
  background-color: #00000065;

`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const IMDB = styled.div`
  font-size: 14px;
  font-weight: 600;
  background-color: #f6be4f;
  color: black;
  padding: 5px;
`;

const Misc = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  background-color: #f6be4f;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #f8b838;
  }
`;

const Banner = ({ data }) => {
  return (
    <Container>
      <BannerImage src={data.cover} alt="banner" />
      <InfoContainer>
        <Title>{data.title}</Title>
        <Group>
          <IMDB>IMDb {data.rating}</IMDB>
          <Misc>{data.releaseDate.split('-')[0]}</Misc>
          <Misc>{data.duration}</Misc>
          {data.genres.slice(0, 3).map((item) => (
            <Misc key={item}>{item}</Misc>
          ))}
        </Group>
        <Description>{data.description.length > 300 ? `${data.description.slice(0, 300)}...` : data.description}</Description>
        <Button>Play</Button>
      </InfoContainer>
    </Container>
  );
};

export default Banner;
