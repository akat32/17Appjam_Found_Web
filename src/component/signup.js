import React, { Component } from 'react';
import '../style/signup.css';
// import { Link } from 'react-router-dom';


class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className = "titleBox">
          <div className = "arrowBtn"></div>
          <span className = "signupIndex">회원가입</span>
        </div>
        <div className = "inputInfo">
          <input type="text" placeholder="이름"/><br/>
          <input type="tel" pattern="(010)-\d{4}-\d{4}" placeholder="전화번호"/><br/>
          <div className = "inputID">
            <input type="text" placeholder="아이디" className = "id"/>
            <button className = "chkID">중복확인</button>
          </div>
          <input type="password" placeholder="비밀번호"/><br/>
          <input type="password" placeholder="비밀번호 확인"/><br/>
          <input type="email" placeholder="이메일"/><br/>
        </div>
        <div className = "termsBox">
          <p className = "temrsP">약관 동의</p>
          <div className = "allAgree">
            <div className = "chk1">
              <div className = "chkImg"></div>
            </div>
            <span className = "span1">전체 약관에 동의합니다.</span>
          </div>
          <div className = "necessaryAgree">
            <div className = "chk2">
              <div className = "chkImg"></div>
            </div>
            <span className = "span2">이용 약관 (필수)</span>
          </div>
          <div className = "privacyAgree">
            <div className = "chk3">
              <div className = "chkImg"></div>
            </div>
            <span className = "span3">개인정보취급방침 (필수)</span>
          </div>
          <div className = "emailAgree">
            <div className = "chk4">
              <div className = "chkImg"></div>
            </div>
            <span className = "span4">이메일 수신 동의 (선택)</span>
          </div>
          <div className = "snsAgree">
            <div className = "chk5">
              <div className = "chkImg"></div>
            </div>
            <span className = "span5">SNS 수신 동의 (선택)</span>
          </div>
        </div>
        <div className = "boxLine"></div>
        <button className = "submit">가입 완료</button>
      </div>
    );
  }
}

export default Signup;