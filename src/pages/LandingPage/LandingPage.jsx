import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Categorybar from "../../components/Categorybar/Categorybar";
import Content from '../../components/Content/Content'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Categorybar />
      <Content />
    </>
  );
};

export default LandingPage;
