import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid bg-primary p-0">
      <Header />
      <section className="min-h-body">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
