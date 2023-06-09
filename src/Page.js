import React from "react";
import Header from "./Header";
import Footer from  "./Footer";
import MainContent from "./MainContent";
import './Page.css';

export default function Page() {
  return (
    <div className="page-container  ">
    
       <Header />
    <MainContent />
   <Footer />
    </div>
   

  );

}