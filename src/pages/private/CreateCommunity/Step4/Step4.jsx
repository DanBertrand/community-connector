import React from "react";
import styled from "styled-components";

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
const Step4 = ({ save }) => {
  return (
    <StyledDiv>
      <button onClick={save} type="button">
        Create !
      </button>{" "}
    </StyledDiv>
  );
};

export default Step4;
