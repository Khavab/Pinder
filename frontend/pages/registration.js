import React from 'react'
import HeadLayout from '../components/headLayout'
import styles from '../styles/registration.module.css'

function Register() {
  return <Registration {...registrationData} />;
}

export default Register;

function Registration(props) {
  const {
    overlapGroup3,
    logo1,
    spanText1,
    logo2,
    spanText2,
    iconTwitter,
    spanText3,
    spanText4,
    divider,
    spanText5,
    spanText6,
    spanText7,
    logo3,
    username1Props,
    username2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
        <HeadLayout></HeadLayout>
      <div className="registrationscreen">
        <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <Rectangle1 />
          <div className="sns-login-3">
            <div className="overlap-group">
              <img className="logo" src={logo1} />
              <div className="sign-in-with-googlevalign-text-middleoutfit-medium-black-13px">
                <span>
                  <span className="outfit-medium-black-13px">{spanText1}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="sns-login-2">
            <div className="overlap-group1">
              <img className="logo-1" src={logo2} />
              <div className="sign-in-with-facebookvalign-text-middleoutfit-medium-black-13px">
                <span>
                  <span className="outfit-medium-black-13px">{spanText2}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="sns-login-1">
            <div className="twitter-container">
              <img className="icon-twitter" src={iconTwitter} />
              <div className="sign-in-with-twittervalign-text-middleoutfit-medium-black-13px">
                <span>
                  <span className="outfit-medium-black-13px">{spanText3}</span>
                </span>
              </div>
            </div>
          </div>
          <p className="or-sign-in-with-social-mediaoutfit-light-black-13px">
            <span className="outfit-light-black-13px">{spanText4}</span>
          </p>
          <img className="divider" src={divider} />
          <p className="already-have-an-account-sign-in">
            <span className="outfit-light-black-13px">{spanText5}</span>
            <span className="span1">{spanText6}</span>
          </p>
          <Username>{username1Props.children}</Username>
          <Username className={username2Props.className}>
            {username2Props.children}
          </Username>
          <h1 className="titleoutfit-medium-black-30px">
            <span className="outfit-medium-black-30px">{spanText7}</span>
          </h1>
          <img className="logo-2" src={logo3} />
        </div>
      </div>
    </div>
  );
}

function Rectangle1() {
  return <div className="rectangle-1"></div>;
}

function Username(props) {
  const { children, className } = props;

  return (
    <div className={`username ${className || ""}`}>
      <div className="passwordoutfit-medium-black-15px">
        <span className="span-1outfit-medium-black-15px">{children}</span>
      </div>
      <div className="rectangle-3"></div>
    </div>
  );
}

const username1Data = {
  children: "Password",
};

const username2Data = {
  children: "Username",
  className: "username-1",
};

const registrationData = {
  overlapGroup3: "bg-1.png",
  logo1: "logo-2.png",
  spanText1: "Sign in with Google",
  logo2: "logo-3.png",
  spanText2: "Sign in with Facebook",
  iconTwitter: "logo-4.png",
  spanText3: "Sign in with Twitter",
  spanText4: "Or sign in with social media",
  divider: "divider-1.png",
  spanText5: "Already have an account? ",
  spanText6: "Sign In",
  spanText7: "Sign Up",
  logo3: "logo-1.png",
  username1Props: username1Data,
  username2Props: username2Data,
};
