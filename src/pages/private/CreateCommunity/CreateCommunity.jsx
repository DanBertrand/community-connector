/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useFetch from "../../../components/hooks/useFetch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

const CreateCommunity = () => {
  const [formStep, setFormStep] = useState(1);
  const [communityData, setCommunityData] = useState({});
  const [forward, setForward] = useState(true);
  const { data, error, post, isLoading } = useFetch();

  const next = () => {
    setForward(true);
    setFormStep(formStep + 1);
  };

  const updateData = (data) => {
    console.log("data", data);
    setCommunityData({ ...communityData, ...data });
  };

  const handleBack = () => {
    setForward(false);
    setFormStep(formStep - 1);
  };

  const save = () => {
    console.log("communityData", communityData);
    post("/communities", communityData);
  };

  console.log("Steps", formStep);

  return (
    <div className="CreateCommunity">
      <h1>CreateCommunity</h1>
      {formStep > 1 && <FaArrowLeft onClick={handleBack} />}
      {formStep === 1 && (
        <Step1
          updateData={updateData}
          next={next}
          communityData={communityData}
          forward={forward}
        />
      )}
      {formStep === 2 && (
        <Step2
          updateData={updateData}
          next={next}
          communityData={communityData}
          forward={forward}
        />
      )}
      {formStep === 3 && (
        <Step3
          updateData={updateData}
          next={next}
          communityData={communityData}
          forward={forward}
          save={save}
        />
      )}
    </div>
  );
};

export default CreateCommunity;
