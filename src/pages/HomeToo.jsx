import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1c1e22;
  gap: 20px;
  height: 100vh;
  color: #fff;
  text-align: center;
  font-size: 24px;
  padding: 20px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #ccc;
`;

const HomeToo = () => {
  return (
    <Container>
      <h1>Site Temporarily Unavailable</h1>
      <Message>
        Due to personal commitments, I'm pausing work on this site as I don't have time to manage it at the moment. 
        We'll continue later—thank you for your patience and support!
      </Message>
    </Container>
  );
};

export default HomeToo;
