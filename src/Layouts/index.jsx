import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateLayout from "./Private/PrivateLayout";
import PublicLayout from "./Public/PublicLayout";

const MainLayout = () => {
  if (true) {
    return (
      <Router>
        <PrivateLayout />
      </Router>
    );
  } else {
    return (
      <Router>
        <PublicLayout />
      </Router>
    );
  }
};
export default MainLayout;
