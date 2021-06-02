/* eslint-disable no-unused-vars */
import "./CommunityCard.scss";

const CommunityCard = ({
  id,
  name,
  address,
  exchanges,
  hospitalities,
  hostings,
  products,
  vonlunteers,
  workshops,
}) => {
  return (
    <div className="CommunityCard">
      <p>{name}</p>
    </div>
  );
};

export default CommunityCard;
