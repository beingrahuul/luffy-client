import styled from 'styled-components';

//icons
import SEARCH from '../icons/search.svg';
import NOTI from '../icons/notification.svg';
import SETTING from '../icons/setting.svg';

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
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  border: 2px solid black;
  overflow: hidden;
  height: 50px;
  width: 500px;
`

const Search = styled.input`
  height: 100%;
  width: 85%;
  padding: 10px 0px 10px 20px;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`

const SearchButton = styled.div`
  background-color: #D63837;
  height: 100%;
  width: 15%;
  border-left: 2px solid black;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const SearchImage = styled.img`
  width: 40px;
  height: 40px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  gap: 40px;
`

const ButtonImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const Account = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  cursor: pointer;
`

const AccountImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>Luffy.</Logo>
      </LogoContainer>

      <SearchContainer>
        <Search type="text" placeholder="Search for Movies and TV shows" />
        <SearchButton>
          <SearchImage src={SEARCH} alt="search" />
        </SearchButton>
      </SearchContainer>

      <LinkContainer>
        <Link href="/">Home</Link>
        <Link href="/">Genre</Link>
        <Link href="/">Tv Shows</Link>
      </LinkContainer>

      <ButtonContainer>
        <ButtonImage src={SETTING} />
        <ButtonImage src={NOTI} />
        <Account>
          <AccountImage src="https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg" alt="account" />
        </Account>
      </ButtonContainer>
    </Container>
  )
}

export default Navbar;