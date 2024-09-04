import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000000;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none; // Removes the border
`;

const Embed = ({type, id}) => {
  return (
    <Container>
      <MainContainer>
        <StyledIframe
          src= {type === "movie" ? `https://vidsrc.pro/embed/movie/${id}` : "https://vidsrc.pro/embed/movie/1022789"}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></StyledIframe>
      </MainContainer>
    </Container>
  )
}

export default Embed;
