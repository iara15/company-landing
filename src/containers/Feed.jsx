import { Box } from "@mui/material";
import React from "react";
import Header from "./Header.jsx";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import FourthSection from "./FourthSection.jsx";
import Footer from "./Footer.jsx";

const Feed = () => {
  return (
    <Box>
        <>
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <Footer />
        </>
    </Box>
  );
};

export default Feed;
