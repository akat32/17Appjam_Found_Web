import React, { Component } from 'react';
import '../style/signin.css';
// import { Link } from 'react-router-dom';


class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <div className = "logoBox">
            <div className = "logoImg"></div>
        </div>
        <div className = "userInfo">
            <div className = "innerBox">
                <div className = "userImg"></div>
                <input type="text" className="inputID"/>
            </div>
            <div className = "innerBox">
                <div className = "lockImg"></div>
                <input type="password" className="inputPW"/>
            </div>
            <button className = "signinBtn">LOGIN</button>
        </div>
        <p className = "findIDPW"><a>아이디 찾기</a><span> / </span><a>비밀번호 찾기</a></p>
        <p className = "notUser">아직 회원이 아니신가요? <a className = "goSignup">회원가입</a></p>
      </div>
    );
  }
}

export default Signin;