import React from "react";
import { Navbar } from "../components/Navbar";
import { ProfilesID } from "../components/ProfilesID";
import { CountProfiles } from "../components/CountProfiles";
import { ProfilesIDList } from "../components/ProfilesIDList";
import { PageLink } from "../components/PageLink";

export const Homepage = () => {
  return (
    <main className="font-helvetica md:flex lg:flex md:flex-col lg:flex-col md:justify-center lg:justify-center md:items-center lg:items-center">
      <div className="px-5 md:px-10 md:max-w-5xl lg:max-w-5xl">
        <Navbar />
        <ProfilesID />
        <CountProfiles />
        <ProfilesIDList />
      </div>
      <div className="lg:px-20">
        <PageLink />
      </div>
    </main>
  );
};
