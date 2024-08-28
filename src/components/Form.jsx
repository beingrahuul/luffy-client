import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.jpeg";

const mainContainer = styled.div``;

const UpperContainer = styled.div``;

const middlecontainer = styled.div``;

const inputcontainer = styled.div``;

const logo = styled.img``;

const heading = styled.h1``;

const para = styled.p``;

const input = styled.input``;
const button = styled.button``;

function Form() {
  return (
    <mainContainer>
      <UpperContainer>
        <logo src={Logo} alt="This is main logo" />
        <heading>Make a wish</heading>
        <para>
          If your favorite movie or TV show is missing from our library, please
          let us know. We’ll do our best to add it as quickly as we can.
        </para>
      </UpperContainer>

      <middlecontainer>
       <inputcontainer>
       <para>Title</para>
       <input ></input>
       </inputcontainer>

      </middlecontainer>

    </mainContainer>
  );
}

export default Form;
