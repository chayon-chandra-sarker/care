import React from "react";
import Container from "../Container/Container";
import Count500 from "./Count500";
import Count24 from "./Count24";
import Count120 from "./Count120";
import Count99 from "./Count99";

const Trust = () => {
  return (
    <div className="bg-[#EBEFEF] py-10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="font-extrabold text-2xl md:text-4xl text-[#0B4665]">
              <Count500 value={5000} suffix="+"></Count500>
            </h2>
            <p className="font-medium text-sm md:text-2xl text-[#41474D] mt-2">
              CERTIFIED CAREGIVERS
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-2xl md:text-4xl text-[#0B4665]">
              <Count24 value={24} suffix="/7"></Count24>
            </h2>
            <p className="font-medium text-sm md:text-2xl text-[#41474D] mt-2">
              EXPERT SUPPORT
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-2xl md:text-4xl text-[#0B4665]">
              <Count120 value={120} suffix="K+"></Count120>
            </h2>
            <p className="font-medium text-sm md:text-2xl text-[#41474D] mt-2">
              FAMILIES TRUSTED US
            </p>
          </div>

          <div>
            <h2 className="font-extrabold text-2xl md:text-4xl text-[#0B4665]">
              <Count99 value={99} suffix="%"></Count99>
            </h2>
            <p className="font-medium text-sm md:text-2xl text-[#41474D] mt-2">
              RELIABILITY RATING
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trust;
