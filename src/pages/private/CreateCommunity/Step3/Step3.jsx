import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Display from "./Display";
import Fade from "react-reveal/Fade";

const Div = styled.div`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;

  padding: 0.25em 1em;
  margin: 10%;
  border: 2px solid palevioletred;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
  text-align: center;
`;

function StyledDiv(props) {
  return <Div>{props.children}</Div>;
}
const Step3 = ({ next, communityData, updateData, forward }) => {
  const [hostings, setHostings] = useState(communityData.hostings || []);
  const [entry, setEntry] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [available, setAvailable] = useState(true);

  const add = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      available: available,
      type: entry,
    };

    setHostings([...hostings, data]);
    setEntry("");
  };

  const body = (
    <>
      <h1>Hosting</h1>
      <StyledDiv>
        <div>Carpark</div>
        <div>Camping</div>
        <div>Room</div>
        <span onClick={() => setEntry("carpark")}>+</span>
        <span onClick={() => setEntry("campsite")}>+</span>
        <span onClick={() => setEntry("room")}>+</span>
        {hostings && <Display hostings={hostings} />}
      </StyledDiv>
      {entry && (
        <StyledDiv>
          <form onSubmit={add}>
            <h2>{entry}</h2>
            <label>
              Title
              <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </label>
            <label>
              Description
              <textarea onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
              Available right now ?
              <input
                type="checkbox"
                defaultChecked="true"
                onChange={(e) => setAvailable(e.target.checked)}
              />
            </label>
            <button type="submit">Add</button>
          </form>
        </StyledDiv>
      )}
      <button type="button" onClick={next}>
        Next
      </button>
    </>
  );

  useEffect(() => {
    updateData({
      hostings: hostings,
    });
  }, [hostings]);

  return forward ? <Fade right>{body}</Fade> : <Fade left>{body}</Fade>;
};

export default Step3;
