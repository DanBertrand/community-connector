/* eslint-disable no-unused-vars */
// import "./CommunityCard.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  GiCrosscutSaw,
  GiPaintedPottery,
  GiCarrot,
  GiStrong,
} from "react-icons/gi";
import {
  FaCarrot,
  FaRegHandshake,
  FaHandsHelping,
  FaPrayingHands,
  FaHandshake,
  FaHands,
} from "react-icons/fa";

const Card = styled.div`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const CommunityCard = ({
  id,
  name,
  address,
  exchanges,
  hospitalities,
  hostings,
  products,
  volunteers,
  workshops,
}) => {
  return (
    <Link to={`community/${id}`} style={{ textDecoration: "none" }}>
      <Card className="CommunityCard">
        <p>{name}</p>
        <p>{address}</p>
        {workshops && workshops.length > 0 && (
          <div>
            <GiCrosscutSaw />
            <GiPaintedPottery />
          </div>
        )}
        {products && products.length > 0 && (
          <div>
            <FaCarrot />
            <GiCarrot />
          </div>
        )}
        {volunteers && volunteers.length > 0 && (
          <div>
            <GiStrong />
            <GiCarrot />
          </div>
        )}
        {exchanges && exchanges.length > 0 && (
          <div>
            <FaRegHandshake />
            <FaHandsHelping />
            <FaPrayingHands />
            <FaHandshake />
            <FaHands />
            <GiCarrot />
          </div>
        )}
      </Card>
    </Link>
  );
};

export default CommunityCard;
