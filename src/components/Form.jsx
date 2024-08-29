import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.jpeg";

// Main container that centers the content and handles responsiveness
const MainContainer = styled.div`
 
`;

const UpperContainer = styled.div`
 
`;

const MiddleContainer = styled.div`
  
`;

const InputContainer = styled.div`
  
`;

const LogoImage = styled.img`
 
`;

const Heading = styled.h1`
  
`;

const Para = styled.p`
 
`;

const Label = styled.label`
  
`;

const Input = styled.input`
 
`;

const Textarea = styled.textarea`
 
`;

const Button = styled.button`
  
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
          <Textarea type="text" placeholder="Write anything else you want to share" rows="4" />
        </InputContainer>

        <Button>Submit Request</Button>
      </MiddleContainer>
    </MainContainer>
  );
}

export default Form;

