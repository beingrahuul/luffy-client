import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1c1e22;
  color: white;
  text-align: center;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <p>Page Not Found</p>
    </NotFoundContainer>
  );
};

export default NotFound;
