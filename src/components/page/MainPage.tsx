import React from "react";
import AppBar from "../mui/appBar/AppBar";
import Header from "../mui/header/Header";
import CardKomfort from "../mui/cardMoney/CardKomfort";
import CardKumush from "../mui/cardMoney/CardKumush";
import CardAltyn from "../mui/cardMoney/CardAltyn";
import CardPlatin from "../mui/cardMoney/CardPlatin";
import CarouselImages from "../mui/carousel/CarouselImages";
import SurooJoop from "../mui/surooJop/SurooJoop";
import Footer from "../mui/footer/Footer";

const MainPage = () => {
  return (
    <div className="main-page">
      <AppBar />
      <Header />
      <SurooJoop />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <CarouselImages />
      </div>
      <div
        className="ermek"
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "1500px",
        }}
      >
        <li>
          <CardKomfort />
        </li>
        <li>
          <CardKumush />
        </li>
        <li>
          <CardAltyn />
        </li>
        <li>
          <CardPlatin />
        </li>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <Footer />
    </div>
  );
};

export default MainPage;
