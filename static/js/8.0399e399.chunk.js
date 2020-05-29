(this["webpackJsonphospital-management"]=this["webpackJsonphospital-management"]||[]).push([[8],{108:function(n,e,t){"use strict";var r={patientRegistrationApi:"".concat("https://5ed118b64e6d7200163a05c0.mockapi.io/","api/v1/register"),newsfeedApi:"".concat("https://5ed118b64e6d7200163a05c0.mockapi.io/","api/v1/newsfeed"),authtokenApi:"".concat("https://5ed118b64e6d7200163a05c0.mockapi.io/","api/v1/auth_token")};e.a=r},113:function(n,e,t){"use strict";var r=t(140),i=t.n(r),a=t(4),o=t(32),c=t(76),u=function(n,e,t){switch(n){case 401:window.location.pathname="/";break;case 400:t.push(window.location.href),e(Object(o.a)({value:!0,message:c.i.errorMsg,variant:"error"}));break;default:e(Object(o.a)({value:!0,message:c.i.errorMsg,variant:"error"}))}},d=function(n){var e=n,t=JSON.parse(localStorage.getItem("tempAuthToken"));return t&&!e.headers.Authorization&&(e.headers.Authorization="token ".concat(t)),n},s=i.a.create({headers:{Accept:"application/json","Content-Type":"application/json"}});s.interceptors.request.use(d,(function(n){return Promise.reject(n)})),s.interceptors.response.use((function(n){return n}),(function(n){return function(e,t){var r=Object(a.a)({},n);if(n.response){var i=n.response.headers.status||n.response.status;r.status=i,u(i,e,t)}return Promise.reject(r)}}));e.a=s},114:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(75),o=t(279),c=t(10),u=t(7),d=t(77);function s(){var n=Object(c.a)(["\n  margin: 5px;\n  "," {\n    margin: 10px;\n  }\n  .MuiFormHelperText-root {\n    width: 200px;\n    color: ",";\n  }\n"]);return s=function(){return n},n}var l=u.d.div(s(),d.a.mediumScreen,(function(n){return n.theme.errorRed}));e.a=function(n){return i.a.createElement(l,null,i.a.createElement(a.b,Object.assign({},n,{as:o.a,helperText:i.a.createElement(a.a,{name:n.name})})))}},164:function(n,e,t){"use strict";t(0);var r=t(10),i=t(7),a=t(75),o=t(77);function c(){var n=Object(r.a)(["\n      border: 1px solid ",";\n      outline: none;\n\n    "]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n      border: 1px solid ",";\n    "]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  font-size: 0.8rem;\n  line-height: 1rem;\n  font-style: normal;\n  font-weight: 400;\n  width: 230px;\n  padding: 0.25rem 0.75rem;\n  outline: none;\n  ","\n\n  ","\n  "," {\n    border-radius: 0;\n  }\n"]);return d=function(){return n},n}Object(i.d)(a.b)(d(),(function(n){return n.theme.pureWhite}),(function(n){return n.theme.veryLightGrey}),(function(n){return n.valid&&Object(i.c)(u(),(function(n){return n.theme.valid}))}),(function(n){return n.error&&Object(i.c)(c(),(function(n){return n.theme.errorRed}))}),o.a.mediumScreen)},69:function(n,e,t){"use strict";t.r(e);var r=t(23),i=t(11),a=t(113),o=t(108),c=t(32),u=t(76),d=function(n,e,t){return function(t){try{a.a.get("".concat(o.a.patientRegistrationApi,"?email=").concat(n.email,"&&password=").concat(n.password)).then((function(n){var r;0!==(null===(r=n.data)||void 0===r?void 0:r.length)?(t(function(n){return{type:i.a,loginDetails:n}}(n.data)),s().then((function(n){window.localStorage&&localStorage.setItem("tempAuthToken",n.data.token),e({type:"LOGIN_SUCCESS"})})),t(Object(c.a)({value:!0,message:u.i.successLogin,variant:"success"}))):t(Object(c.a)({value:!0,message:u.i.wrongEmailPassword,variant:"error"}))}))}catch(r){t(Object(c.a)({value:!0,message:u.i.errorMsg,variant:"error"}))}}},s=function(){return a.a.get(o.a.authtokenApi)},l=t(0),m=t.n(l),p=t(75),f=t(126),h=t(10),g=t(7),b=t(77),x=t(87);function v(){var n=Object(h.a)(["\n  text-align: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  "," {\n    margin: 0 auto !important;\n    width: 60px;\n    text-align: inherit;\n  }\n  button {\n    "," {\n      width:100%;\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(h.a)(["\n  "," {\n    width: 100px;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(h.a)(["\n  text-align: center;\n  "," {\n    text-align: left;\n  }\n"]);return y=function(){return n},n}function j(){var n=Object(h.a)(["\n  margin: 9%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return j=function(){return n},n}var S=g.d.section(j()),O=g.d.h2(y(),b.a.mediumScreen),k=(Object(g.d)(x.f)(w(),b.a.mediumScreen),g.d.div(v(),b.a.mediumScreen,b.a.mobileScreen)),E=t(96),T=(t(164),t(114)),A=t(33),I={email:f.c().email(A.b.invalidEmail).required(A.b.requireEmail),password:f.c().required(A.b.requirePassword).matches(u.f,A.b.invalidPassword)},M=t(22),z=Object(p.e)({mapPropsToValues:function(){return{email:"",password:""}},validationSchema:f.a().shape(I),handleSubmit:function(n,e){var t=e.props,r=e.setSubmitting;t.loginUser(n);var i=setTimeout((function(){r(!1),clearTimeout(i)}),1e3)},displayName:"Login Form"})((function(n){n.errors,n.touched;var e=n.isSubmitting,t=(n.valid,n.handleSubmit);return m.a.createElement(p.c,{name:"login",method:"post",onSubmit:t},m.a.createElement(x.b,null,m.a.createElement(T.a,{name:"email",label:"Email",type:"email",autoComplete:"off",placeholder:"ex: myname@example.com"})),m.a.createElement(x.b,null,m.a.createElement(T.a,{name:"password",label:"Password",type:"password",autoComplete:"off",autoCorrect:"off"})),m.a.createElement(k,null,m.a.createElement(E.a,{tabindex:3,primary:!0,type:"submit",disabled:e},e?"Logging...":"Login")))}));e.default=Object(r.b)(null,(function(n){return{loginUser:function(e,t,r){return n(d(e,t))}}}))((function(n){var e=Object(M.c)();return m.a.createElement(S,null,m.a.createElement(O,null,"Login"),m.a.createElement(z,{loginUser:function(t){return function(t){n.handleClose(),n.loginUser(t,e,n.history)}(t)}}))}))},76:function(n,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"g",(function(){return a})),t.d(e,"f",(function(){return o})),t.d(e,"i",(function(){return c})),t.d(e,"d",(function(){return u})),t.d(e,"e",(function(){return d})),t.d(e,"h",(function(){return s})),t.d(e,"a",(function(){return l}));var r=[{label:"Male",value:1},{label:"Female",value:2}],i=[{label:"India",value:1},{label:"United States",value:2},{label:"Afghanistan",value:3},{label:"Albania",value:4}],a=/\d{5}([- ]*)\d{6}/,o=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,c={successRegistrationMsg:"Registered Successfully",errorMsg:"Something wrong happened",successLogin:"Login successful",wrongEmailPassword:"Incorrect email / password. Pleaase check."},u=[{label:"Home",redirectTo:"/home"},{label:"About Us",redirectTo:"/aboutus"},{label:"Services",redirectTo:"/services"},{label:"Our Doctors",redirectTo:"/our-doctors"},{label:"Contact US",redirectTo:"/contact"},{label:"Careers",redirectTo:"/careers"}],d=["/images/slider-images/slider-baby.jpg","/images/slider-images/slider-baby-blue.jpg","/images/slider-images/slider-theater.jpg"],s={startX:"",distX:"",distY:"",threshold:50,restraint:100,allowedTime:200,elapsedTime:"",startTime:""},l=[{path:"/images/slider-images/patient1.jpg",writeup:"I just want to thank everyone involved with my Brand new knee.\n      I am very excited about being able to do the things I love to do,\n       like playing with my grand children & working in my yard.\n       All you need to do for your healthcare is to check into Wecare Hospitals\n       and your well-being is taken care of.",name:"Andria Martin",country:"Brazil"},{path:"/images/slider-images/patient2.jpg",writeup:"I was so impressed with the standards of the hospital and especially the Wonderful attention of all the staff.\n\n    The nursing care is second to none. I had my right knee joint replaced and I was amazed at the speed of my own recovery time.\n     I was honored to give a lecture to nurses and staff on Kenya and I wish Wecare Hospitals and its staff all the best for the future.",name:"David Brown",country:"USA"},{path:"/images/slider-images/patient3.jpg",writeup:"The efficiency which I received at 3.00 am upon my arrival at Wecare was comparable to a five star hotel service.\n     Wecare's doctors are amazing professionals. The international patients department, the very reason for my visit took care of all our needs,\n    and I look forward to my second visit to Wecare for further check-up.",name:"John Varghese",country:"India"}]},77:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={mediumScreen:"@media (min-width: 1024px)",mobileScreen:"@media (max-width: 831px)",smallScreen:"@media (max-width: 376px)",portrait:"@media screen and (orientation: portrait)",landscape:"@media screen and (orientation: landscape)"}},87:function(n,e,t){"use strict";t.d(e,"g",(function(){return j})),t.d(e,"e",(function(){return S})),t.d(e,"h",(function(){return O})),t.d(e,"c",(function(){return k})),t.d(e,"d",(function(){return E})),t.d(e,"f",(function(){return T})),t.d(e,"b",(function(){return A})),t.d(e,"a",(function(){return I}));var r=t(10),i=t(7),a=t(77);function o(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  "," {\n    flex-direction: column;\n  }\n  button {\n    margin: 10px;\n    "," {\n      width: 100%;\n      margin-bottom: 10px;\n    }\n  }\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 0;\n  "," {\n    flex-direction: row;\n    margin-bottom: 10px;\n  }\n  .areacode {\n    width: 80px;\n    margin-right: 5px;\n  }\n  .datepicker {\n    width: 230px;\n  }\n  .switch {\n    .MuiSwitch-colorSecondary.Mui-checked {\n      color: ",";\n    }\n    .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {\n      background-color: ",";\n    }\n  }\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  text-align: left;\n  color: ",";\n  font-size: 0.786em;\n  margin-top: 3px;\n  padding-bottom: 15px;\n  "," {\n    text-align: center;\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  text-align: center;\n  font-weight: bold;\n  padding: 3px;\n  white-space: normal;\n  word-break: break-word;\n  "," {\n    text-align: left;\n    flex-direction: row;\n    width: 250px;\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  padding: 6px;\n  display: flex;\n  flex-direction: column;\n  "," {\n    padding: 12px;\n  }\n"]);return s=function(){return n},n}function l(){var n=Object(r.a)(["\n  display: flex;\n"]);return l=function(){return n},n}function m(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  padding: 8%;\n  "," {\n    padding: 2%;\n  }\n  .genderWidth,\n  .marital-stat,\n  .country-width {\n    .MuiFormControl-root {\n      width: 200px;\n    }\n  }\n  .address {\n    width: 100%;\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  display: block;\n  padding: 0.3rem 0.75rem;\n  margin-left: 0.5rem;\n  white-space: pre-line;\n  "," {\n    margin-top: 0.5rem;\n  }\n"]);return f=function(){return n},n}function h(){var n=Object(r.a)(["\n  height: 18px;\n  width: 18px;\n  "," {\n    height: 40px;\n    width: 40px;\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return g=function(){return n},n}function b(){var n=Object(r.a)([""]);return b=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  width: 100%;\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  font-size: 17px;\n  font-weight: inherit;\n  text-align: center;\n  "," {\n    text-align: left;\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n  text-align: center;\n  "," {\n    text-align: left;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 20px;\n  margin-right: 20px;\n  .medicine {\n    width: 93%;\n    line-height: 2rem;\n    "," {\n      width: 50%;\n    }\n  }\n  .country-state-inputs-margin {\n    "," {\n      margin-left: 10px;\n    }\n  }\n  section:last-of-type {\n    border-bottom: 0;\n  }\n  section:first-of-type {\n    border-top: 1px solid ",";\n  }\n  .text-input-select {\n    width: 256px;\n  }\n  .flex-wrap-padding {\n    padding: 12px;\n    margin-right: 0;\n    "," {\n      align-items: center;\n    }\n  }\n  .align-address {\n    "," {\n      align-items: inherit;\n    }\n  }\n  .address-line {\n    "," {\n      width: 516px;\n    }\n  }\n  .phone-number {\n    margin: 5px;\n    "," {\n      margin: 10px;\n    }\n  }\n  .address-section {\n    display: flex;\n    align-items: flex-start;\n  }\n"]);return y=function(){return n},n}var j=i.d.div(y(),a.a.mediumScreen,a.a.mediumScreen,(function(n){return n.theme.veryLightGrey}),a.a.mobileScreen,a.a.mediumScreen,a.a.mediumScreen,a.a.mediumScreen),S=i.d.h2(w(),a.a.mediumScreen);S.SubHeading=i.d.h3(v(),a.a.mediumScreen),S.Wrap=i.d.section(x()),S.Left=i.d.span(b()),S.Right=i.d.span(g());i.d.img(h(),a.a.mediumScreen),i.d.div(f(),(function(n){return n.theme.ligntPink}),(function(n){return n.theme.errorBrown}),a.a.mobileScreen);var O=i.d.section(p(),(function(n){return n.theme.veryLightGrey}),a.a.mediumScreen),k=i.d.div(m()),E=i.d.div(l()),T=(i.d.div(s(),a.a.mediumScreen),i.d.label(d(),a.a.mediumScreen)),A=(i.d.label(u(),(function(n){return n.theme.lightGrey}),a.a.mobileScreen),i.d.span(c(),a.a.mediumScreen,(function(n){return n.theme.speechBlue}),(function(n){return n.theme.speechBlue}))),I=i.d.div(o(),a.a.mobileScreen,a.a.mobileScreen)},96:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(10),o=t(7);function c(){var n=Object(a.a)(["\n      background: ",";\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n        0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    "]);return c=function(){return n},n}function u(){var n=Object(a.a)(["\n  border: 1px solid ",";\n  padding: 6px 16px;\n  min-width: 64px;\n  line-height: 1.75;\n  color: ",";\n  text-shadow: 0 1px ",";\n  cursor: pointer;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  border-radius: 3px;\n  background: linear-gradient(\n    to top,\n    "," 0%,\n    "," 100%\n  );\n  box-shadow: 0 1px "," inset,\n    0 1px ",";\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  ","\n  K\n"]);return u=function(){return n},n}var d=o.d.button(u(),(function(n){return n.theme.veryLightGrey}),(function(n){return n.primary?n.theme.pureWhite:n.theme.veryDarkGrey}),(function(n){return n.theme.pureWhite}),(function(n){return n.theme.whiteSmoke}),(function(n){return n.theme.whisper}),(function(n){return n.theme.pureWhite}),(function(n){return n.theme.gainsboro}),(function(n){return n.primary&&Object(o.c)(c(),(function(n){return n.theme.speechBlue}))}));e.a=function(n){return i.a.createElement(d,n)}}}]);
//# sourceMappingURL=8.0399e399.chunk.js.map