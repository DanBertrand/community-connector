/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Div = styled.div`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;

  padding: 0.25em 1em;
  margin: 10%;
  border: 2px solid palevioletred;
`;

function StyledDiv(props) {
  return <Div>{props.children}</Div>;
}

const Step1 = ({ next, communityData, updateData, forward }) => {
  const [name, setName] = useState(communityData.name || "");
  const [address, setAddress] = useState(communityData.address || "");

  const save = (e) => {
    e.preventDefault();
    updateData({
      name: name,
      address: address,
    });
    next();
  };

  const body = (
    <StyledDiv>
      <form onSubmit={save}>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Address
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Next</button>
      </form>
    </StyledDiv>
  );

  return forward ? <Fade right>{body}</Fade> : <Fade left>{body}</Fade>;
};

export default Step1;
