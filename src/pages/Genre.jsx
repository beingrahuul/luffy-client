import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"

//components
import Loader from "../components/Loader";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (max-width: 479px) {
    margin-top: 20px;
  }
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;


const Genre = () => {
  const {type} = useParams()

  

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);


  useEffect(() => {
    const abortController = new AbortController();
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://luffy-server-production.up.railway.app/genre", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
                                genre: type === "Sci-Fi" ? "science-fiction" : type,
                                pageno: pageno
                              }),
          signal: abortController.signal
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
        //setPageno(Number(data.currentPage));
        //setHasNextPage(data.hasNextPage);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();

    return () => {
      abortController.abort();
    };
  }, [type, pageno]);

  return (
    <Container>
      <Title>{type.charAt(0).toUpperCase() + type.slice(1)} Movies and TV Shows</Title>
      <MainContainer>
      {loading ? (
        <Loader height="400px" width="100vw" bgcolor={"#1C1E22"} type={"mutatingDots"}/>
      ) : error ? (
        <h1>{error}</h1>
      ) : results.length === 0 ? (
        <h1>No results found</h1>
      ) : (
        results.map((result, index) => (
          <Card key={index} item={result} />
        ))
      )}

      </MainContainer>
    </Container>
  )
}

export default Genre