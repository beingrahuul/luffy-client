import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TMDB_POSTER_BASE_URL, TMDB_BACKDROP_BASE_URL } from '../contants';

// components
import VideoPlayer from '../components/VideoPlayer';
import InfoCard from '../components/InfoCard';
import Loader from '../components/Loader';
import Recommendation from '../components/Recommendation';
import ShareThis from '../components/ShareThis';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding-top: 40px;
  background-color: #1C1E22;
  color: white;
  flex-direction: column;

  @media screen and (max-width: 479px) {
    padding-top: 0px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 95%;
  gap: 20px;
  color: white;

  @media screen and (max-width: 479px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  gap: 40px;

  @media screen and (max-width: 479px) {
    gap: 20px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;

  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

const Content = ({ type }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const URL = `https://luffy-server-20-production.up.railway.app/tmdb/details/${type}/${id}`;
      //const TEST_URL = `http://localhost:6969/tmdb/details/${type}/${id}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loader height="100vh" width="100vw" bgcolor="#1C1E22" type="mutatingDots" />
      ) : error ? (
        <h1 style={{ color: 'red' }}>Error: {error}</h1> // Style error message
      ) : (
        <>
          <MainContainer>
            <LeftContainer>
              <VideoPlayer cover={`${TMDB_POSTER_BASE_URL}${content.backdrop_path}`} title={content.title} />
              <ShareThis url={window.location.href} />
            </LeftContainer>
            <RightContainer>
              <InfoCard content={content} />
            </RightContainer>
          </MainContainer>
          <Recommendation id={id} type={type} />
        </>
      )}
    </Container>
  );
};

export default Content;
