import React, { Component } from 'react';
import '../style/bottomBar.css';
// import { Link } from 'react-router-dom';


class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="bottomBar">
            <div className = "addBtn">
                <div className = "plusImg"></div>
            </div>
            <div className = "tapBar">
                <div className = "ideaTap">아이디어</div>
                <div className = "projectTap">프로젝트</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Bottom;