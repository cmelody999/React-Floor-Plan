import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan(props) {
  return (
    <div id="floorPlan">
      <div id="row-1">
        <Bedroom className="bedroom" bedNum={1} />
        <Bath className="bath" size="Full" />
        <LivingRoom />
        <Kitchen />
      </div>
      <div id="row-2">
        <Bedroom className="bedroom" bedNum={2} />
        <Bath size="Half" />
        <Bedroom className="bedroom" bedNum={3} />
      </div>
    </div>
  );
}

export default FloorPlan;
