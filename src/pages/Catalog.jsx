import React, { Component } from "react";
import preloader from "../assets/images/preloader.svg";
import { connect } from "react-redux";
import { getBeerSaga } from "../redux/action";
import Item from "./Components/Item"
import './Catalog.css'
class Catalog extends Component {
  componentDidMount() {
    this.props.getBeerSaga();
  }

  render() {
    const { beer } = this.props;

    if (this.props.isFetching) {
      return (
        <div className="list">
          {beer.length ? (
            beer.map((item) => {              
              return (
                <Item
                key={item.id}
                  scu={item.scu_name}
                  pack={item.packshoot[0]}
                  price={item.price}
                />
              );
            })
          ) : (
            <div>Add task</div>
          )}
        </div>
      );
    } else return <img src={preloader} alt="..loading" />;
  }
}

const mapStateToProps = (state) => ({
  beer: state.beer,
  isFetching: state.isFetching,
});

const mapDispatchToProps = {
  getBeerSaga,
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
