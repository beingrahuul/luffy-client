import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


//components
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const Search = () => {

  const { query } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://luffy-server-production.up.railway.app/search", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query, pageno:1 }),
          signal: abortController.signal
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data.results);
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
  }, [query]);

  return (
    <Container>
      <Title>Search Results for {query}</Title>
      <MainContainer>
      {loading ? (
        <h1>Loading...</h1>
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
  );
};

export default Search;
