import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>React Beershop</div>
        <div>Корзина</div>
      </div>
    );
  }
}
