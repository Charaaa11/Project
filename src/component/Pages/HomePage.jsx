import React from "react";
import SigninBlock from "../Auth/SigninBlock";
import SignupBlock from "../Auth/SignupBlock";
import MoreToExploreBlock from "../blocks/HomePage/MoreToExploreBlock";
import MustGoList from "../blocks/HomePage/MustGoList";
import NextTripBlock from "../blocks/HomePage/NextTripBlock";
import PlanTrip from "../blocks/HomePage/PlanTrip";
import Searchblock from "../blocks/HomePage/Searchblock";
import StreamBlock from "../blocks/HomePage/StreamBlock";
import { auth, logout, useAuth as currentuser } from "../Data/Firebase";
import { Context } from "../../App";

function Main({ RegData }) {
  return (
    <main>
      <Searchblock />
      <PlanTrip />
{/*       <MustGoList RegData={RegData} /> */}
      <NextTripBlock />
{/*       <MustGoList RegData={RegData} /> */}
      <MoreToExploreBlock/>
      <StreamBlock />
    </main>
  );
}

export default Main;
