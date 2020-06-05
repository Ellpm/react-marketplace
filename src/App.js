import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import preloader from "./assets/images/preloader.svg";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Catalog />
        <Footer />
      </>
    );
  }
}
