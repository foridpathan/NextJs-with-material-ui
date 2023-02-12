import Container from "@mui/material/Container";
import React from "react";
import Header from "./header";
import NavigationMenu from "./navigationMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Container>
        <Header />
        <NavigationMenu />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
