/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useFetch from "../../../../components/hooks/useFetch";
import CommunityCard from "./CommunityCard/CommunityCard";
import "./DisplayCommunity.scss";

const DisplayCommunity = () => {
  const { data, error, get, isLoading } = useFetch();
  // const [input, setInput] = useState("");
  // const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    get(`/communities`);
  }, []);

  console.log("data", data);

  return (
    <div className="DisplayCommunity">
      {data &&
        data.map((community) => (
          <CommunityCard
            key={community.id}
            id={community.id}
            name={community.name}
            address={community.address}
            exchanges={community.exchanges}
            hospitalities={community.hospitalities}
            hostings={community.hostings}
            products={community.products}
            volunteers={community.volunteers}
            workshops={community.workshops}
          />
        ))}
    </div>
  );
};

export default DisplayCommunity;
