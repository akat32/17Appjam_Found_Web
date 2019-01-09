import React, { Component } from 'react';
import '../style/topBar.css';
// import { Link } from 'react-router-dom';


class Top extends Component {
  render() {
    return (
      <div className="top">
        <div className = "searchBar">
            <div className = "hamburgerBox"></div>
            <div className = "searchBox">
                <div className = "searchIcon"></div>
                <input className = "searchIndex" type = "text"/>
            </div>
        </div>
        <div className = "categoryBar">
            <ul className = "categoryList">
                <li className = "c1">IT</li>
                <li className = "c2">스포츠</li>
                <li className = "c3">교육</li>
                <li className = "c4">유통 및 판매</li>
                <li className = "c5">쇼핑</li>
                <li className = "c6">외식 및 요리</li>
                <li className = "c7">대여 및 배달</li>
                <li className = "c8">기타</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Top;
// https://codepen.io/eliasreyes/pen/NRwGAj