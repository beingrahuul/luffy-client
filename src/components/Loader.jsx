import styled from "styled-components"
import { InfinitySpin, MutatingDots, Rings } from "react-loader-spinner"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height ? height : '100vh'};
  width: ${({ width }) => width ? width : '100vw'};
  background-color: ${({ bgcolor }) => bgcolor ? bgcolor : 'black'};
  color: white;
`


const Loader = ({ height, width, bgcolor, type }) => {
  return (
    <Container height={height} width={width} bgcolor={bgcolor}>
      {type === 'infinity' &&
        <InfinitySpin
          visible={true}
          width="200"
          color="#FFD020"
          ariaLabel="infinity-spin-loading"
        />}

      {
        type === 'magGlass' &&
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#FFD020"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      }

      {type === "mutatingDots" &&
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#FFD020"
          secondaryColor="#FFD020"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      }

    </Container>
  )
}

export default Loader