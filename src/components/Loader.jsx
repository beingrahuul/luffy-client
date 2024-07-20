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
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />}

      {
        type === 'magGlass' &&
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
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
          color="#4fa94d"
          secondaryColor="#4fa94d"
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