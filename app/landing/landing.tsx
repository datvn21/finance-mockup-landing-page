import React, { Suspense } from "react";
import CostUpdate from "./sections/CostUpdate";
import Highlight from "./sections/HighLight";
import Market from "./sections/Market";
import Economy from "./sections/Economy";
import Industrial from "./sections/Industrial";
import International from "./sections/international";
import OpinionAnalysis from "./sections/OpinionAnalysis";
import PolicyRegulation from "./sections/PolicyRegulation";
import Promise from "./sections/Promise";
import Library from "./sections/Library";
import Company from "./sections/Company";

export default function Landing() {
  return (
    <div className="flex-1 overflow-hidden mb-4 ">
      <Suspense fallback={<div>Loading...</div>}>
        <CostUpdate />
        <Highlight />
        <Market />
        <Economy />
        <Industrial />
        <International />
        <PolicyRegulation />
        <OpinionAnalysis />
        <Company />
        <Promise />
        <Library />
      </Suspense>
    </div>
  );
}
