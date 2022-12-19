import React from "react";
import StudioHeader from "../../components/Header/StudioHeader";
import StudioSidebar from "../../components/Sidebar/StudioSidebar";
import StudioContent from "../../components/StudioContent/StudioContent";
import Upload from "../../components/Upload/Upload";


const StudioPage = () => {
  return (
    <>
      <wt-iron-overlay-backdrop class="opened" opened>
        <StudioHeader />
        <StudioSidebar />
        <StudioContent />
      </wt-iron-overlay-backdrop>
      <Upload />
    </>
  );
};

export default StudioPage;
