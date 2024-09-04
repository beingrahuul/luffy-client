import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEpisode } from '../context/EpisodeContext';

// components
import VideoPlayer from '../components/VideoPlayer';
import InfoCard from '../components/InfoCard';
import Episodes from '../components/Episodes';
import Server from '../components/Server';
import Loader from '../components/Loader';
import Recommendation from '../components/Recommendation';
import ShareThis from '../components/ShareThis';
//import Embed from '../components/Embed';

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

  const [seasons, setSeasons] = useState(null);
  const [seasonsLoading, setSeasonsLoading] = useState(true);
  const [seasonsError, setSeasonsError] = useState(null);

  const { setEpisodeId, setMediaId } = useEpisode();

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      const URL = `https://luffy-server-20-production.up.railway.app/tmdb/details/${type}/${id}/`;

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) setContent(data);
      } catch (error) {
        if (isMounted) setError(error.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [id, type]);

  useEffect(() => {

    let isMounted = true;

    const fetchData = async () => {

      setSeasonsLoading(true);
      setSeasonsError(null);
      const URL = `https://consumet-api-production-5b89.up.railway.app/meta/tmdb/info/${id}?type=${type}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setMediaId(data.id);

          if (type === 'movie') {
            setEpisodeId(data.episodeId);
          } else {
            setSeasons(data.seasons);
            setEpisodeId(data.seasons[0]?.episodes[0]?.id || null);
          }
        }
      } catch (error) {
        if (isMounted) setSeasonsError(error.message);
      }finally {
        if (isMounted) setSeasonsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id, type, setEpisodeId, setMediaId]);

  return (
    <Container>
      {loading ? (
        <Loader height="100vh" width="100vw" bgcolor="#1C1E22" type="mutatingDots" />
      ) : error ? (
        <h1 style={{ color: 'red' }}>Error: {error}</h1>
      ) : (
        <>
          <MainContainer>
            <LeftContainer>
              <VideoPlayer cover={content.backdrop_path} title={content.title} />

              {/*<Embed id={id} type={type} />*/}
              <Server />
              <ShareThis url={window.location.href} />
              {type === 'tv' && (
                <Episodes
                  data={seasons}
                  loading={seasonsLoading}
                  error={seasonsError}
                />
              )  
              }
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
