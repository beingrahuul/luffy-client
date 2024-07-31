import styled from "styled-components";
import PropTypes from "prop-types";
import { InfinitySpin, MutatingDots, Rings } from "react-loader-spinner";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || '100vh'};
  width: ${({ width }) => width || '100vw'};
  background-color: ${({ bgcolor }) => bgcolor || 'black'};
  color: white;
`;

const Loader = ({ height, width, bgcolor, type }) => {
  const renderLoader = () => {
    switch (type) {
      case 'infinity':
        return (
          <InfinitySpin
            visible={true}
            width="200"
            color="#FFD020"
            ariaLabel="infinity-spin-loading"
          />
        );
      case 'magGlass':
        return (
          <Rings
            visible={true}
            height="80"
            width="80"
            color="#FFD020"
            ariaLabel="rings-loading"
          />
        );
      case 'mutatingDots':
        return (
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#FFD020"
            secondaryColor="#FFD020"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container height={height} width={width} bgcolor={bgcolor}>
      {renderLoader()}
    </Container>
  );
};

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bgcolor: PropTypes.string,
  type: PropTypes.oneOf(['infinity', 'magGlass', 'mutatingDots']).isRequired,
};

Loader.defaultProps = {
  height: '100vh',
  width: '100vw',
  bgcolor: 'black',
};

export default Loader;
