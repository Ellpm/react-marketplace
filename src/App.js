import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {Switch, Route} from "react-router-dom";
import {getBeerSaga} from './redux/action'
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import preloader from "./assets/images/preloader.svg";

class App extends React.Component {
  componentDidMount() {
    this.props.getBeerSaga();
  }
  render() {
    if (this.props.isFetching) {
      return (
        <>
          <Header />  
            <Switch>              
              <Route exact path={"/"} component={Home} />
            </Switch>
            <Footer />
        </>
      );
    } else {
      return <img src={preloader} alt="...loading" />;
    }
  }
}

const mapStateToProps = (state) => ({
  beer: state.beer,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getBeerSaga,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
