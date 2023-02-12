import Container from "@mui/material/Container";
import React from "react";
import Header from "./header";
import NavigationMenu from "./navigationMenu";

type LayoutProps = {
  children: React.ReactNode; // children must be ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Container>
        {/* HEADER COMPONENT */}
        <Header />
        {/* NAVIGATION COMPONENT */}
        <NavigationMenu />

        {children}
      </Container>
    </div>
  );
};

export default Layout;
