import HeadLayout from '../components/headLayout';
import styles from "../styles/registrationStyles.module.css"
import React from 'react';

export default function Login() {
    return (
        <HeadLayout>
        </HeadLayout>
    )
}

// function App() {
//     return <Registration {...registrationData} />;
//   }
  
//   export default App;
  
//   function Registration(props) {
//     const {
//       overlapGroup4,
//       logo1,
//       spanText1,
//       logo2,
//       spanText2,
//       logo3,
//       spanText3,
//       spanText4,
//       divider,
//       spanText5,
//       spanText6,
//       overlapGroup3,
//       spanText7,
//       spanText8,
//       spanText9,
//       spanText10,
//       logo4,
//       username1Props,
//       username2Props,
//     } = props;
  
//     return (
//       <div className="container-center-horizontal">
//         <div className="registrationscreen">
//           <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
//             <Rectangle1 />
//             <div className="sns-login-3">
//               <div className="overlap-group">
//                 <img className="logo-1" src={logo1} />
//                 <div className="sign-in-with-googlevalign-text-middleoutfit-medium-black-13px">
//                   <span>
//                     <span className="outfit-medium-black-13px">{spanText1}</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="sns-login-2">
//               <div className="overlap-group1">
//                 <img className="logo" src={logo2} />
//                 <div className="sign-in-with-facebookvalign-text-middleoutfit-medium-black-13px">
//                   <span>
//                     <span className="outfit-medium-black-13px">{spanText2}</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="sns-login-1">
//               <div className="overlap-group2">
//                 <img className="logo" src={logo3} />
//                 <div className="sign-in-with-twittervalign-text-middleoutfit-medium-black-13px">
//                   <span>
//                     <span className="outfit-medium-black-13px">{spanText3}</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <p className="or-sign-in-with-social-mediaoutfit-light-black-13px">
//               <span className="outfit-light-black-13px">{spanText4}</span>
//             </p>
//             <img className="divider" src={divider} />
//             <p className="already-have-an-account-sign-in">
//               <span className="outfit-light-black-13px">{spanText5}</span>
//               <span className="span1">{spanText6}</span>
//             </p>
//             <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
//               <div className="sign-upvalign-text-middleoutfit-medium-white-15px">
//                 <span>
//                   <span className="outfit-medium-white-15px">{spanText7}</span>
//                 </span>
//               </div>
//             </div>
//             <div className="terms-and-policy">
//               <div className="rectangle-4"></div>
//               <p className="by-clicking-sign-upvalign-text-middleoutfit-medium-black-15px">
//                 <span>
//                   <span className="span0">{spanText8}</span>
//                   <span className="span1-1">{spanText9}</span>
//                 </span>
//               </p>
//             </div>
//             <Username>{username1Props.children}</Username>
//             <Username className={username2Props.className}>
//               {username2Props.children}
//             </Username>
//             <h1 className="titleoutfit-medium-black-30px">
//               <span className="outfit-medium-black-30px">{spanText10}</span>
//             </h1>
//             <img className="logo-2" src={logo4} />
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   function Rectangle1() {
//     return <div className="rectangle-1"></div>;
//   }
  
//   function Username(props) {
//     const { children, className } = props;
  
//     return (
//       <div className={`password ${className || ""}`}>
//         <div className="password-1outfit-medium-black-15px">
//           <span className="span-1outfit-medium-black-15px">{children}</span>
//         </div>
//         <div className="rectangle-3"></div>
//       </div>
//     );
//   }
  
//   const username1Data = {
//     children: "Password",
//   };
  
//   const username2Data = {
//     children: "Username",
//     className: "username",
//   };
  
//   const registrationData = {
//     overlapGroup4: "bg-1.png",
//     logo1: "logo-2.png",
//     spanText1: "Sign in with Google",
//     logo2: "logo-3.png",
//     spanText2: "Sign in with Facebook",
//     logo3: "logo-4.png",
//     spanText3: "Sign in with Twitter",
//     spanText4: "Or sign in with social media",
//     divider: "divider-1.png",
//     spanText5: "Already have an account? ",
//     spanText6: "Sign In",
//     overlapGroup3: "rectangle-5-1.png",
//     spanText7: "Sign Up",
//     spanText8: "By clicking sign up you agree to our ",
//     spanText9: "terms and policy",
//     spanText10: "Sign Up",
//     logo4: "logo-1.png",
//     username1Props: username1Data,
//     username2Props: username2Data,
//   };