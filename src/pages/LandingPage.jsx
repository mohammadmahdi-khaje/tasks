import React from "react";

import Header from "../components/Header";
import Pagbox from "../components/Pagbox";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LeftSideBox from "../components/LeftSideBox";
import Listbox from "../components/Listbox";
import Popup from "../components/Popup";

function DefultPage() {
  return (
    <>
      <Header />
      <Pagbox />
      <Listbox />
      <LeftSideBox />
      <Navigation />
      <Footer />
    </>
  );
}

export default DefultPage;
