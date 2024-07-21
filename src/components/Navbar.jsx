import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//LOGO
import LogoIMG from '../images/logo.jpeg';

//Icons
import Menu from "../icons/Menu.svg"


const Container = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: ${({ ishome }) => (ishome ? '#0000004e' : '#000')};
  position: ${({ ishome }) => (ishome ? 'fixed' : 'relative')};
  align-items: center;
  z-index: 100;
  gap: 20px;

  @media screen and (max-width: 1299px) {

  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    position: relative;
    width: 100vw;
    gap: 0px;
  }
`

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 40px;
  
  @media screen and (max-width: 479px) {
    gap: 10px;
    margin: 0px;
    justify-content: space-around;
  }
`

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 40px;
  
  @media screen and (max-width: 479px) {
    display: none;
  }
`

const MobileLinkGroup = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
  }
`  

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 5px;
  border-radius: 50%;
`

const Logo = styled.h1`
  font-size: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #FFD020;
  }

  @media screen and (max-width: 1299px) {

  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 16px;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  height: 50px;
  width: 480px;
  

  @media screen and (max-width: 1299px) {

  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
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
  background-color: #3e3e3ee6;

  @media screen and (max-width: 1299px) {

  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    font-size: 14px;
    padding: 10px 0px 10px 15px;
  }
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1299px) {

  }

  @media screen and (max-width: 991px) {


  }

  @media screen and (max-width: 640px) {

  }

  @media screen and (max-width: 479px) {
    display: none;
  }
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`

const Icons = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 0;
  width: 100vw;
  height: calc(100vh - 150px);
  background-color: #000000ec;
  z-index: 100;
  padding-top: 15px;
  gap: 15px;
`

const Part = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  color: white;
  font-size: 16px;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`

const SubPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  color: white;
  gap: 10px;
  font-size: 14px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 60px;
  height: 15px;
`



const Line = styled.div`
  width: 85%;
  height: 1px;
  background-color: #494949;
  border-radius: 1px;
`

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState(false);
  const location = useLocation();
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

  const ishome = location.pathname === '/';

  const handleClick = () => {
    navigate('/');
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <Container ishome={ishome}>
      <Group>
        <LogoContainer onClick={handleClick}>
          <LogoImage src={LogoIMG} />
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
      </Group>

      <LinkGroup>
        <LinkContainer>
          <Link href="/">Home</Link>
          <Link href="/">Genre</Link>
          <Link href="/">Country</Link>
          <Link href="/">Movies</Link>
          <Link href="/">Tv Shows</Link>
        </LinkContainer>
      </LinkGroup>

      <MobileLinkGroup>
        <Icons src={Menu} onClick={toggleMenu} />
      </MobileLinkGroup>

      {menu && (
        <MobileMenu>

          <Part>Home</Part>

          <Line />
          <Part>
            Genre
            <SubPart>
              <Item>Action</Item>
              <Item>Comedy</Item>
              <Item>Animation</Item>
              <Item>Adventure</Item>
              <Item>History</Item>
              <Item>Crime</Item>
              <Item>Drama</Item>
              <Item>Music</Item>
              <Item>Family</Item>
              <Item>Horror</Item>
              <Item>Romance</Item>
              <Item>Mystery</Item>
              <Item>Kids</Item>
              <Item>News</Item>
              <Item>Reality</Item>
              <Item>Thriller</Item>
              <Item>Sci Fi</Item>
              <Item>Talk</Item>
              <Item>Western</Item>
              <Item>War</Item>
            </SubPart>
          </Part>

          <Line />
          <Part>Country</Part>

          <Line />
          <Part>Movies</Part>

          <Line />
          <Part>Tv Shows</Part>

        </MobileMenu>
      )}
    </Container>
  );
}

export default Navbar;