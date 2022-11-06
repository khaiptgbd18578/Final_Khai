import React from "react";
import Header from "../layout/Header";
import Footer from '../layout/Footer';
import ShopSection from '../components/homeComponents/ShopSection';
import CalltoActionSection from '../components/homeComponents/CalltoActionSection';
import ContactInfo from '../components/homeComponents/ContactInfo';
const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
        <ShopSection />
        <CalltoActionSection />
        <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
