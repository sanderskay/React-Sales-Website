(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c(20),n=c.n(s),a=(c(28),c(18)),r=c(3),l=c(10),o=c(13),j=(c(29),c(1)),b=["btn--primary","btn--outline"],d=["btn--medium","btn--large","btn--mobile","btn--wide"],h=["primary","blue","red","green"],x=function(e){var t=e.children,c=e.type,i=e.onClick,s=e.buttonStyle,n=e.buttonSize,a=e.buttonColor,r=b.includes(s)?s:b[0],l=d.includes(n)?n:d[0],o=h.includes(a)?a:null;return Object(j.jsx)("button",{className:"btn ".concat(r," ").concat(l," ").concat(o),onClick:i,type:c,children:t})},m=(c(31),c(0));var u=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!0),b=Object(a.a)(n,2),d=b[0],h=b[1],u=function(){return s(!1)},O=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(i.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m.b.Provider,{value:{color:"#fff"},children:Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-container container",children:[Object(j.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:u,children:[Object(j.jsx)(o.a,{className:"navbar-icon"}),"JULIAN SANDERS-KAY"]}),Object(j.jsx)("div",{className:"menu-icon",onClick:function(){return s(!c)},children:c?Object(j.jsx)(l.f,{}):Object(j.jsx)(l.a,{})}),Object(j.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/",className:"nav-links",onClick:u,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/services",className:"nav-links",onClick:u,children:"Services"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/products",className:"nav-links",onClick:u,children:"Products"})}),Object(j.jsx)("li",{className:"nav-btn",children:d?Object(j.jsx)(r.b,{to:"/sign-up",className:"btn-link",children:Object(j.jsx)(x,{buttonStyle:"btn--outline",children:"Sign Up"})}):Object(j.jsx)(r.b,{to:"/sign-up",className:"btn-link",onClick:u,children:Object(j.jsx)(x,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"Sign Up"})})})]})]})})})})},O=c(4),g=c(9);c(37);var p=function(e){var t=e.lightBg,c=e.topLine,i=e.lightText,s=e.lightTextDesc,n=e.headline,a=e.description,l=e.buttonLabel,o=e.img,b=e.alt,d=e.imgStart;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"},children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(j.jsx)("div",{className:"top-line",children:c}),Object(j.jsx)("h1",{className:i?"heading":"heading dark",children:n}),Object(j.jsx)("p",{className:s?"home__hero-subtitle":"home__hero-subtitle dark",children:a}),Object(j.jsx)(r.b,{to:"/sign-up",children:Object(j.jsx)(x,{buttonSize:"btn--wide",buttonColor:"blue",children:l})})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("div",{className:"home__hero-img-wrapper",children:Object(j.jsx)("img",{src:o,alt:b,className:"home__hero-img"})})})]})})})})},v=c(22),N=c(23);c(38);var f=function(){return Object(j.jsx)(m.b.Provider,{value:{color:"#fff",size:64},children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"pricing__section",children:Object(j.jsxs)("div",{className:"pricing__wrapper",children:[Object(j.jsx)("h1",{className:"pricing__heading",children:"Pricing"}),Object(j.jsxs)("div",{className:"pricing__container",children:[Object(j.jsx)(r.b,{to:"/sign-up",className:"pricing__container-card",children:Object(j.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(l.c,{})}),Object(j.jsx)("h3",{children:"Starter"}),Object(j.jsx)("h4",{children:"$8.99"}),Object(j.jsx)("p",{children:"per month"}),Object(j.jsxs)("ul",{className:"pricing__container-features",children:[Object(j.jsx)("li",{children:"100 Transactions"}),Object(j.jsx)("li",{children:"2% Cash Back"}),Object(j.jsx)("li",{children:"$10,000 Limit"})]}),Object(j.jsx)(x,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})}),Object(j.jsx)(r.b,{to:"/sign-up",className:"pricing__container-card",children:Object(j.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(v.a,{})}),Object(j.jsx)("h3",{children:"Gold"}),Object(j.jsx)("h4",{children:"$29.99"}),Object(j.jsx)("p",{children:"per month"}),Object(j.jsxs)("ul",{className:"pricing__container-features",children:[Object(j.jsx)("li",{children:"1000 Transactions"}),Object(j.jsx)("li",{children:"2.5% Cash Back"}),Object(j.jsx)("li",{children:"$100,000 Limit"})]}),Object(j.jsx)(x,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})}),Object(j.jsx)(r.b,{to:"/sign-up",className:"pricing__container-card",children:Object(j.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(N.a,{})}),Object(j.jsx)("h3",{children:"Diamond"}),Object(j.jsx)("h4",{children:"$99.99"}),Object(j.jsx)("p",{children:"per month"}),Object(j.jsxs)("ul",{className:"pricing__container-features",children:[Object(j.jsx)("li",{children:"Unlimited Transactions"}),Object(j.jsx)("li",{children:"5% Cash Back"}),Object(j.jsx)("li",{children:"No Limit"})]}),Object(j.jsx)(x,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})})]})]})})})})},y=c.p+"static/media/svg-1.48d08d0e.svg",S=c.p+"static/media/svg-5.c614f92c.svg",w=c.p+"static/media/svg-7.f9856b25.svg",_=c.p+"static/media/svg-8.a5a044be.svg",k={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:y,alt:"Credit Card"},T={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:S,alt:"Vault"},C={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:w,alt:"Vault"},L={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:_,alt:"Vault"};var A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,Object(g.a)({},k)),Object(j.jsx)(p,Object(g.a)({},C)),Object(j.jsx)(p,Object(g.a)({},T)),Object(j.jsx)(f,{}),Object(j.jsx)(p,Object(g.a)({},L))]})};c(39);var E=function(){return Object(j.jsxs)("div",{className:"footer-container",children:[Object(j.jsxs)("section",{className:"footer-subscription",children:[Object(j.jsx)("p",{className:"footer-subscription-heading",children:"Join our exclusive membership to receive the latest news and trends"}),Object(j.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(j.jsx)("div",{className:"input-areas",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(j.jsx)(x,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(j.jsxs)("div",{className:"footer-links",children:[Object(j.jsxs)("div",{className:"footer-link-wrapper",children:[Object(j.jsxs)("div",{className:"footer-link-items",children:[Object(j.jsx)("h2",{children:"About Us"}),Object(j.jsx)(r.b,{to:"/sign-up",children:"How it works"}),Object(j.jsx)(r.b,{to:"/",children:"Testimonials"}),Object(j.jsx)(r.b,{to:"/",children:"Careers"}),Object(j.jsx)(r.b,{to:"/",children:"Investors"}),Object(j.jsx)(r.b,{to:"/",children:"Terms of Service"})]}),Object(j.jsxs)("div",{className:"footer-link-items",children:[Object(j.jsx)("h2",{children:"Contact Us"}),Object(j.jsx)(r.b,{to:"/",children:"Contact"}),Object(j.jsx)(r.b,{to:"/",children:"Support"}),Object(j.jsx)(r.b,{to:"/",children:"Destinations"}),Object(j.jsx)(r.b,{to:"/",children:"Sponsorships"})]})]}),Object(j.jsxs)("div",{className:"footer-link-wrapper",children:[Object(j.jsxs)("div",{className:"footer-link-items",children:[Object(j.jsx)("h2",{children:"Videos"}),Object(j.jsx)(r.b,{to:"/",children:"Submit Video"}),Object(j.jsx)(r.b,{to:"/",children:"Ambassadors"}),Object(j.jsx)(r.b,{to:"/",children:"Agency"}),Object(j.jsx)(r.b,{to:"/",children:"Influencer"})]}),Object(j.jsxs)("div",{className:"footer-link-items",children:[Object(j.jsx)("h2",{children:"Social Media"}),Object(j.jsx)(r.b,{to:"/",children:"Instagram"}),Object(j.jsx)(r.b,{to:"/",children:"Facebook"}),Object(j.jsx)(r.b,{to:"/",children:"Youtube"}),Object(j.jsx)(r.b,{to:"/",children:"Twitter"})]})]})]}),Object(j.jsx)("section",{className:"social-media",children:Object(j.jsxs)("div",{className:"social-media-wrap",children:[Object(j.jsx)("div",{className:"footer-logo",children:Object(j.jsxs)(r.b,{to:"/",className:"social-logo",children:[Object(j.jsx)(o.a,{className:"navbar-icon"}),"JULIAN SANDERS-KAY"]})}),Object(j.jsxs)("div",{className:"social-icons",children:[Object(j.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(j.jsx)(l.b,{})}),Object(j.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(j.jsx)(l.d,{})}),Object(j.jsx)(r.b,{className:"social-icon-link",to:"//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",target:"_blank","aria-label":"Youtube",children:Object(j.jsx)(l.h,{})}),Object(j.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(j.jsx)(l.g,{})}),Object(j.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(j.jsx)(l.e,{})})]})]})})]})},D={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:y,alt:"Credit Card"};var U=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(p,Object(g.a)({},D))]})},B={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:_,alt:"Vault"};var I=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,Object(g.a)({},B))})},Y={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:w,alt:"Vault"};var z=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,Object(g.a)({},Y))})};var P=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{path:"/",exact:!0,component:A}),Object(j.jsx)(O.a,{path:"/services",exact:!0,component:U}),Object(j.jsx)(O.a,{path:"/products",exact:!0,component:I}),Object(j.jsx)(O.a,{path:"/sign-up",exact:!0,component:z}),Object(j.jsx)(O.a,{path:"*",exact:!0,component:A})]}),Object(j.jsx)(E,{})]})};n.a.render(Object(j.jsx)(P,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.166d1b09.chunk.js.map