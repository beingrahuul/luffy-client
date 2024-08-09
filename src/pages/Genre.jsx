import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"

//components
import Loader from "../components/Loader";
import Card from "../components/Card";

//icons
import RIGHT from "../icons/right.svg";
import LEFT from "../icons/left.svg";

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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #e3ebfa;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const PageNumber = styled.div`
  color: black;
  background-color: #ffd020;
  margin: 0 10px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Extra = styled.div`
  color: #6c757d;
  background-color: #1c1e22;
  margin: 0 10px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
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
      const URL = "https://luffy-server-production.up.railway.app/genre";
      //const TEST_URL = "http://localhost:8080/genre";
      try {
        const response = await fetch(URL, {
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
        if(!data.success){
          throw new Error(data.message);
        }
        setResults(data.result.results);
        setPageno(Number(data.result.currentPage));
        setHasNextPage(data.result.hasNextPage);
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


    //set page number to 1 when query changes
    useEffect(() => {
      setPageno(1);
    }, [type]);
  
    // Pagination
    const handleNextPage = () => {
      setPageno(prevPageno => prevPageno + 1);
    };
  
    const handlePrevPage = () => {
      setPageno(prevPageno => prevPageno - 1);
    };

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

      {!loading && error === null &&
      (
        <PaginationContainer>
          <Button onClick={handlePrevPage} disabled={pageno === 1}>
            <Icon src={LEFT} alt="prev" />
          </Button>
          {!hasNextPage && pageno !== 1 && <Extra onClick={handlePrevPage}>{pageno - 1}</Extra>}
          <PageNumber>{pageno}</PageNumber>
          {hasNextPage && <Extra onClick={handleNextPage}>{pageno + 1}</Extra>}
          <Button onClick={handleNextPage} disabled={!hasNextPage}>
            <Icon src={RIGHT} alt="next" />
          </Button>
        </PaginationContainer>
      )
      }
    </Container>
  )
}

export default Genre