import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Item.css"

export default class Item extends Component {


  render() {  
    return (
      <div className="card">
        <div className="imageBox">
          <img
            src={this.props.pack ? this.props.pack.card : "/img/noimage.png"}
            alt="no card"
          ></img>
        </div>
        <br />
        <p className="title">{this.props.scu}</p>
        <div className="price">Цена: {Math.ceil(this.props.price)} руб.</div>
        <button>В корзину</button>
      </div>
    );
  }
}
