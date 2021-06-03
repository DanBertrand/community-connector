/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useFetch from "../../../components/hooks/useFetch";
import { GiCrosscutSaw, GiPaintedPottery, GiCarrot } from "react-icons/gi";
import { FaCarrot } from "react-icons/fa";

const CommunityProfile = (params) => {
  const { data, error, get, isLoading } = useFetch();

  console.log(params.match.params.id);

  useEffect(() => {
    get(`/communities/${params.match.params.id}`);
  }, []);

  console.log("Community:", data);

  return (
    data && (
      <div className="CommunityProfile">
        <h1>{data.name}</h1>
        <p>{data.address}</p>
        {data.members && <div>Members: {data.members.length}</div>}
        {data.workshops && (
          <div>
            <GiCrosscutSaw />
            <GiPaintedPottery />
            Workshops: <span>{data.workshops.length}</span>
          </div>
        )}
        {data.products && (
          <div>
            <FaCarrot />
            <GiCarrot />
            Products: <span>{data.products.length}</span>
          </div>
        )}
      </div>
    )
  );
};

export default CommunityProfile;
