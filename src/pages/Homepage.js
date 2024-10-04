import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ProfilesID } from "../components/ProfilesID";
import { CountProfiles } from "../components/CountProfiles";
import { ProfilesIDList } from "../components/ProfilesIDList";
import { Footer } from "../components/Footer";
import { PageLink } from "../components/PageLink";

export const Homepage = () => {
  return (
    <div className="font-helvetica">
      <Header />
      <div className="md:px-3 lg:px-20">
        <Navbar />
        <ProfilesID />
        <CountProfiles />
      </div>
      <ProfilesIDList />
      <div className="lg:px-20">
        <PageLink />
      </div>

      <Footer />
    </div>
  );
};
