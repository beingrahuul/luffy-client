import styled from 'styled-components';
import {useState } from 'react';
import { useNavigate} from 'react-router-dom';


const Container = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  justify-content: space-around;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #D63837;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  border: 2px solid black;
  overflow: hidden;
  height: 50px;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 40px;
  }
`

const Search = styled.input`
  height: 100%;
  width: 100%;
  padding: 10px 0px 10px 20px;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: "Poppins", sans-serif;


  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`


const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
`

const Navbar = () => {

  const [search, setSearch ] = useState('');

  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value === '') {
      navigate(`/`);
    } else {
      navigate(`/search/${value}`);
    }
  }

  return (
    <Container>
      <LogoContainer>
        <Logo>Luffy.</Logo>
      </LogoContainer>

      <SearchContainer>
        <Search 
          type="text" 
          placeholder="Search for Movies and TV shows" 
          value={search}
          onChange={handleChange}  
        />
      </SearchContainer>

      <LinkContainer>
        <Link href="/">Home</Link>
        <Link href="/">Genre</Link>
        <Link href="/">Country</Link>
        <Link href="/">Movies</Link>
        <Link href="/">Tv Shows</Link>
      </LinkContainer>
    </Container>
  )
}

export default Navbar;