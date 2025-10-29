import React from "react";
import { Timeline } from "../components/TimeLine";
import { experiences } from "../constants";
import { exp } from "three/tsl";

const Experiances = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiances;
