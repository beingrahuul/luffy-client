import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// LOGO
import LogoIMG from '../images/logo.jpeg';

// Icons
import Menu from "../icons/Menu.svg"
import SEARCH from "../icons/search.svg"
import CROSS from "../icons/Cross.svg"

const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #000000;
  position: relative;
  align-items: center;
  z-index: 100;
  gap: 20px;
  @media screen and (max-width: 479px) {
    position: relative;
    width: 100vw;
    gap: 0px;
    z-index: 999999;
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 40px;
  @media screen and (max-width: 479px) {
    gap: 10px;
    margin: 20px;
    justify-content: space-between;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 40px;
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const MobileLinkGroup = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 5px;
  border-radius: 50%;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #FFD020;
  cursor: pointer;
  @media screen and (max-width: 479px) {
    font-size: 16px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  height: 46px;
  width: 450px;
  background-color: #1c1e22;
  color: white;
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const CopyMobileSearchContainer = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
    align-items: center;
    border-radius: 30px;
    overflow: hidden;
    height: 46px;
    width: 90%;
    background-color: #1c1e22;
    color: white;
  }
`;

const MobileSearchContainer = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`;

const MobileSearch = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100vw;
    height: 100%;
    background-color: #000000;
    z-index: 100;
    padding-top: 15px;
    gap: 15px;
  }
`;

const Search = styled.input`
  height: 100%;
  width: 100%;
  padding: 10px 0px 10px 30px;
  outline: none;
  border: none;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  background-color: #1c1e22;
  color: white;
  @media screen and (max-width: 479px) {
    width: 100%;
    height: 40px;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  align-items: center;
  position: relative;
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const Link = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 400;
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:hover .dropdown {
    display: flex;
  }
`;

const Dropdown = styled.div`
  display: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 360px;
  background-color: #43454B;
  padding: 10px;
  border-radius: 2px;
  z-index: 100;
`;

const DropdownItem = styled.div`
  color: #EBEBEB;
  text-decoration: none;
  width: calc(33.3% - 30px);
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    color: #FFD020;
  }
`;

const Icons = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    padding-top: 15px;
    gap: 15px;
  }
`;

const Part = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  color: white;
  font-size: 16px;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;

const SubPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  color: white;
  gap: 10px;
  font-size: 14px;
`;


const Line = styled.div`
  width: 85%;
  height: 1px;
  background-color: #494949;
  border-radius: 1px;
`;

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value === '') {
      navigate(`/`);
    } else {
      navigate(`/search/${value}`);
    }
  };

  const handleClick = (to) => {
    navigate(to);
    setSearch('');
    setSearchToggle(false);
    setMenu(false);
  };

  const toggleMenu = () => {
    setMenu(!menu);
    if (searchToggle) {
      setSearchToggle(!searchToggle);
    }
  };

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
    if (menu) {
      setMenu(!menu);
    }
  };

  return (
    <Container>
      <Group>
        <LogoContainer onClick={() => handleClick('/')}>
          <LogoImage src={LogoIMG} />
          <Logo>Luffy</Logo>
        </LogoContainer>

        <SearchContainer>
          <Search
            type="text"
            placeholder="Search for Movies and TV shows"
            value={search}
            onChange={handleChange}
          />
          <SearchIcon src={SEARCH} />
        </SearchContainer>

        <MobileSearchContainer>
          <SearchIcon src={SEARCH} onClick={handleSearch} />
        </MobileSearchContainer>
      </Group>

      <LinkGroup>
        <LinkContainer>
          <Link onClick={() => handleClick('/')}>Home</Link>        
          <Link onClick={() => handleClick('/')}>Movies</Link>
          <Link onClick={() => handleClick('/')}>TV Shows</Link>
        </LinkContainer>
      </LinkGroup>

      <MobileLinkGroup>
        <Icons src={Menu} onClick={toggleMenu} />
      </MobileLinkGroup>

      {menu && (
        <MobileMenu>
          <Part>Home</Part>
          <Line />
        
          <Line />
          
          <Line />
          <Part>Movies</Part>
          <Line />
          <Part>Tv Shows</Part>
        </MobileMenu>
      )}

      {searchToggle && (
        <MobileSearch>
          <CopyMobileSearchContainer>
            <Search
              type="text"
              placeholder="Search for Movies and TV shows"
              value={search}
              onChange={handleChange}
            />
            <SearchIcon src={CROSS} onClick={handleSearch} />
          </CopyMobileSearchContainer>
        </MobileSearch>
      )}
    </Container>
  );
};

export default Navbar;
