import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.jpeg";

// Main container that centers the content and handles responsiveness
const MainContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: auto;
  padding: 20px;
  margin: 0 auto;
  background-color: #1c1e22;
 

  @media (max-width: 768px) { /* Tablet */
    padding: 15px;
    max-width: 350px;
  }

  @media (max-width: 480px) { /* Mobile */
    padding: 10px;
    max-width: 300px;
  }
`;

const UpperContainer = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const MiddleContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const InputContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const Heading = styled.h1`
  font-family: "Roboto";
  font-weight: 900;
  font-size: 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Para = styled.p`
  font-family: "Roboto";
  font-weight: 750;
  color: #a7a7a7;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Label = styled.label`
  display: block;
  font-family: "Roboto";
  font-weight: 750;
  margin-top: 10px;
  color: #a7a7a7;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 94%;
  padding: 10px;
  margin-top: 8px;
  font-family: "Roboto";
  font-weight: 750;
  border-radius: 4px;
  color: #939393;
  background-color: #3d414d;
  border: 1px solid #3d414d;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const Textarea = styled.textarea`
  width: 94%;
  padding: 10px;
  margin-top: 8px;
  font-family: "Roboto";
  font-weight: 750;
  border-radius: 4px;
  background-color: #3d414d;
  color: #939393;
  border: 1px solid #3d414d;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  font-family: "Roboto";
  font-weight: 950;
  margin-top: 20px;
  background-color: #ffd020;
  border: 1px solid #ffd020;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 14px;
  }
`;

function Form() {
  return (
    <MainContainer>
      <UpperContainer>
        <LogoImage src={Logo} alt="This is main logo" />
        <Heading>Make a wish</Heading>
        <Para>
          If your favorite movie or TV show is missing from our library, please
          let us know. We’ll do our best to add it as quickly as we can.
        </Para>
      </UpperContainer>

      <MiddleContainer>
        <InputContainer>
          <Label>Title</Label>
          <Input type="text" placeholder="Movie/TV Show" />
        </InputContainer>

        <InputContainer>
          <Label>IMDB Link or any reference</Label>
          <Input type="url" placeholder="Enter Link" />
        </InputContainer>

        <InputContainer>
          <Label>Write anything else you want to share</Label>
          <Textarea placeholder="Write anything else you want to share" rows="4" />
        </InputContainer>

        <Button>Submit Request</Button>
      </MiddleContainer>
    </MainContainer>
  );
}

export default Form;
