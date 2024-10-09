import Footer from "@/components/layout/Footer";
import SubNavigation from "@/components/layout/SubNavigation";
import React from "react";

const Page = ({ params }) => {
  return (
    <div className="bg-light-green">
      <SubNavigation />
      Design Catalog: {params.catalog}
      <Footer textColor="black" />
    </div>
  );
};

export default Page;
