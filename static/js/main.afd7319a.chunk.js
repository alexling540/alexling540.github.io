(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/vaporwave_trees.852e9fb0.png"},30:function(e,t,n){e.exports=n.p+"static/media/Project_Ags.7f69efb1.png"},31:function(e,t,n){e.exports=n.p+"static/media/Project_PARK.6fd9956f.png"},34:function(e,t,n){e.exports=n(60)},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(23),c=n.n(o),l=(n(39),n(16)),i=n(24),u=n(19),s=n.n(u),m=n(4),d=n(11),h=(n(40),n(41),n(3)),p=n(5),b=n(9),f=n(6),g=n(7),v=n(8),E=n(10),k=(n(43),n(25)),C=n.n(k);function y(){var e=Object(v.a)(["\n  background: ",";\n  li {\n    > a {\n      color: ",";\n      &:after {\n        background: ",";\n      }\n    }\n    &.active a {\n      color: ",";\n    }\n  }\n"]);return y=function(){return e},e}function j(){var e=Object(v.a)(["\n  background: ",";\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  li {\n    color: ",";\n    svg {\n      background-image: linear-gradient(to bottom, transparent 50%, "," 50%);\n      stroke: ",";\n    }\n    &.active svg {\n      stroke: ",";\n    }\n    img {\n      background-image: linear-gradient(to bottom, transparent 50%, "," 50%);\n    }\n    a:after {\n      background: ",";\n    }\n  }\n"]);return O=function(){return e},e}function w(){var e=Object(v.a)(["\n  background: ",";\n  div:nth-child(1) {\n    visibility: ",";\n    opacity: ",";\n  }\n  div:nth-child(2) {\n    visibility: ",";\n    opacity: ",";\n  }\n  div:nth-child(3) {\n    visibility: ",";\n    opacity: ",";\n  }\n"]);return w=function(){return e},e}function x(){var e=Object(v.a)(["\n  .active a {\n    color: ",";\n  }\n"]);return x=function(){return e},e}var S=m.c.div(x(),(function(e){return e.theme.accentColor})),A=m.c.div(w(),(function(e){return e.theme.accentColor}),(function(e){return"dark"===e.theme.name?"visible":"hidden"}),(function(e){return"dark"===e.theme.name?1:0}),(function(e){return"light"===e.theme.name?"visible":"hidden"}),(function(e){return"light"===e.theme.name?1:0}),(function(e){return"vaporwave"===e.theme.name?"visible":"hidden"}),(function(e){return"vaporwave"===e.theme.name?1:0})),N=m.c.nav(O(),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor})),F=m.c.span(j(),(function(e){return e.theme.accentColor})),M=m.c.nav(y(),(function(e){return e.theme.backgroundColorLight}),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor})),P=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).props=e,r.renderDesktopMenu=r.renderDesktopMenu.bind(Object(b.a)(r)),r.renderMobileMenu=r.renderMobileMenu.bind(Object(b.a)(r)),r}return Object(p.a)(n,[{key:"renderDesktopMenu",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{id:"themeToggle",onClick:this.props.toggleTheme},a.a.createElement("div",null,a.a.createElement(d.c,{strokeWidth:"1.5"})),a.a.createElement("div",null,a.a.createElement(d.e,{strokeWidth:"1.5"})),a.a.createElement("div",null,a.a.createElement("img",{src:C.a,alt:""}))),a.a.createElement(N,null,a.a.createElement("ul",null,this.props.sections.map((function(e,t){return a.a.createElement("li",{"data-menuanchor":e.anchor,key:t},a.a.createElement("a",{href:"#"+e.anchor},e.icon),a.a.createElement("div",{className:"nav-title",key:t},e.title))})))))}},{key:"renderMobileMenu",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{id:"burgerCheckbox",type:"checkbox"}),a.a.createElement("label",{htmlFor:"burgerCheckbox"},a.a.createElement(F,null),a.a.createElement(F,null),a.a.createElement(F,null)),a.a.createElement(M,null,a.a.createElement("ul",null,this.props.sections.map((function(e,t){return a.a.createElement("li",{"data-menuanchor":e.anchor,key:t},a.a.createElement("a",{href:"#"+e.anchor},e.title))})))))}},{key:"render",value:function(){return a.a.createElement(S,{id:"menu"},a.a.createElement(E.BrowserView,{viewClassName:"menu-desktop"},this.renderDesktopMenu()),a.a.createElement(E.MobileView,{viewClassName:"menu-mobile"},this.renderMobileMenu()))}}]),n}(a.a.Component),D=n(29),T=n.n(D),W=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e={strings:this.props.strings,typeSpeed:50,backSpeed:50};this.typed=new T.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"wrap"},a.a.createElement("div",{className:"type-wrap"},a.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}})))}}]),n}(r.Component),I=(n(46),function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.BrowserView,{renderWithFragment:!0},a.a.createElement("div",{className:"intro-picture",style:{backgroundImage:"url('https://images.pexels.com/photos/207130/pexels-photo-207130.jpeg')"}}),a.a.createElement("div",{className:"intro-banner"},a.a.createElement(W,{strings:["Welcome"]}))),a.a.createElement(E.MobileView,{renderWithFragment:!0},"Welcome"))}}]),n}(a.a.Component)),L=n(21),B=n(14),J=n.n(B),V=n(15);function _(){var e=Object(v.a)(["\n  color: ",";\n  &:first-letter {\n    color: ",";\n  }\n"]);return _=function(){return e},e}var R=m.c.h1(_(),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor})),U=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(R,null,this.props.children)}}]),n}(a.a.Component),q=n(32);n(54);function G(){var e=Object(v.a)(["\n  .skills-title {\n    color: ",";\n  }\n  .skill-name {\n    color: ",";\n  }\n  .skill-line {\n    border-color: ",";\n    .rc-progress-line-path {\n      stroke: ",";\n    }\n  }\n"]);return G=function(){return e},e}var K=m.c.div(G(),(function(e){return e.theme.textColor}),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor})),H=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:this.props.style,className:"skills-table"},a.a.createElement("div",{className:"skills-title"},"Skills"),this.props.skills.map((function(e,t){return a.a.createElement(K,{key:t,className:"skill-row"},a.a.createElement("span",{className:"skill-name"},e.name),a.a.createElement(q.a,{className:"skill-line",percent:e.percent,strokeLinecap:"square",trailColor:"transparent"}))})))}}]),n}(a.a.Component);n(55);function Y(){var e=Object(v.a)(["\n  text-align: justify;\n  color: ",";\n"]);return Y=function(){return e},e}function Q(){var e=Object(v.a)(["\n  color: ",";\n  > span {\n    border: 2px solid ",";\n    &:hover {\n      background: ",";\n      svg, span {\n        color: black;\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var Z=m.c.a(Q(),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.accentColor})),$=m.c.p(Y(),(function(e){return e.theme.textColor})),z={spaceBetween:20,pagination:{el:".swiper-pagination",type:"bullets",clickable:!1},loop:!0},X=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).props=e,r.renderAbout=r.renderAbout.bind(Object(b.a)(r)),r.renderTimeline=r.renderTimeline.bind(Object(b.a)(r)),r.renderSkills=r.renderSkills.bind(Object(b.a)(r)),r.renderContent=r.renderContent.bind(Object(b.a)(r)),r}return Object(p.a)(n,[{key:"renderAbout",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("img",{src:"",alt:"",style:{width:"100%"}})),a.a.createElement("div",null,a.a.createElement($,null,"Howdy! I'm Alexander Ling, a Junior at Texas A&M majoring in Computer Science.")),a.a.createElement(Z,{href:"https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",id:"download-resume"},a.a.createElement("span",null,a.a.createElement("span",null,"View Resume"),a.a.createElement(V.a,{height:24,width:24}))))}},{key:"renderTimeline",value:function(){return a.a.createElement(m.a,null,(function(e){return a.a.createElement(L.Timeline,null,a.a.createElement(L.TimelineEvent,{title:"Texas A&M University",subtitle:"2018-Present",container:"card",bubbleStyle:{background:e.backgroundColor,borderColor:e.accentColor},icon:a.a.createElement(V.b,null),iconColor:e.accentColor,cardHeaderStyle:{background:e.accentColor}},"Studying Computer Science at Texas A&M University"))}))}},{key:"renderSkills",value:function(){return a.a.createElement(H,{skills:[{name:"C++",percent:60},{name:"Java",percent:20},{name:"JavaScript",percent:0},{name:"PostgreSQL",percent:0}]})}},{key:"renderContent",value:function(){return E.isMobileOnly?a.a.createElement(J.a,z,a.a.createElement("div",null,this.renderAbout()),a.a.createElement("div",null,this.renderTimeline()),a.a.createElement("div",null,this.renderSkills())):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"third"},this.renderAbout()),a.a.createElement("div",{className:"third"},this.renderTimeline()),a.a.createElement("div",{className:"third"},this.renderSkills()))}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,"About Me"),a.a.createElement("div",{className:"section-content"},this.renderContent()))}}]),n}(a.a.Component);n(56);function ee(){var e=Object(v.a)(["\n  color: ",";\n  &:link, &:visited {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n  }\n"]);return ee=function(){return e},e}var te=m.c.a(ee(),(function(e){return e.theme.accentColor2}),(function(e){return e.theme.accentColor2}),(function(e){return e.theme.accentColor})),ne=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).props=e,r}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-img"},a.a.createElement("img",{src:this.props.data.image,alt:""})),a.a.createElement("div",{className:"card-title h5"},this.props.data.title),a.a.createElement("div",{className:"card-body"},this.props.data.text.map((function(e,t){return a.a.createElement("p",{className:"card-text",key:t},e)})),a.a.createElement("div",{className:"list-group-flush list-group"},this.props.data.links.map((function(e,t){return a.a.createElement("div",{className:"list-group-item",key:t},a.a.createElement(te,{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.text))})))))}}]),n}(a.a.Component),re=n(30),ae=n.n(re),oe=n(31),ce=n.n(oe),le=(n(57),n(58),[{title:"Ag's Guide to Foods And Brews",image:ae.a,text:["A website where you can search for recipes and pair them with a beverage!","Built using Vue.js and Vuetify and querying from Spoonacular, Edamam, and Punk APIs using Axios.","A CSCE 315 Programming Studio group project with fellow Ags. We built this website using the AGILE process."],links:[{text:"Repository",link:"https://github.tamu.edu/jarrett/Group7FinalProject"},{text:"Demo",link:"https://pages.github.tamu.edu/jarrett/Group7FinalProject/#/"}]},{title:"P.A.R.K Sports Management",image:ce.a,text:["A Java application displaying information regarding college sports, with additional functionality to find a victory chain from one team to another, a player relation chain from one to another, and more!","This runnable JAR is built with Java Swing, using the Java Database Connectivity (JDBC) API to query information from our PostgreSQL server.","A CSCE 315 Programming Studio group project with fellow Ags. We built this application using the Waterfall process."],links:[{text:"Repository",link:"https://github.tamu.edu/peterluong/group14databaseproject"}]},{title:"This website",image:"",text:[],links:[]}]),ie=E.isMobile?E.isMobileOnly?1:2:3,ue={slidesPerView:ie,loop:le.length>ie,spaceBetween:20,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0},se=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,"Projects"),a.a.createElement("div",{className:"section-content"},a.a.createElement(J.a,ue,le.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement(ne,{data:e}))})))))}}]),n}(r.Component),me=n(62),de=n(63),he=n(64),pe=n(65);n(59);function be(){var e=Object(v.a)(["\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return be=function(){return e},e}function fe(){var e=Object(v.a)(["\n  color: ",";\n  border-bottom-color: "," !important;\n  &:focus {\n    border-bottom-color: "," !important;\n  }\n"]);return fe=function(){return e},e}function ge(){var e=Object(v.a)(["\n  color: ",";\n  border-bottom-color: "," !important;\n  &:focus {\n    border-bottom-color: "," !important;\n  }\n"]);return ge=function(){return e},e}function ve(){var e=Object(v.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return ve=function(){return e},e}var Ee=m.c.a(ve(),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor})),ke=m.c.input(ge(),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor2}),(function(e){return e.theme.accentColor})),Ce=m.c.textarea(fe(),(function(e){return e.theme.textColor}),(function(e){return e.theme.accentColor2}),(function(e){return e.theme.accentColor})),ye=m.c.button(be(),(function(e){return e.theme.accentColor2}),(function(e){return e.theme.accentColor})),je=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).props=e,r.renderContactInfo=r.renderContactInfo.bind(Object(b.a)(r)),r.renderSendEmail=r.renderSendEmail.bind(Object(b.a)(r)),r.renderContent=r.renderContent.bind(Object(b.a)(r)),r}return Object(p.a)(n,[{key:"renderContactInfo",value:function(){var e=[{icon:a.a.createElement(me.a,null),text:"Phone",href:"#section-contact",target:"_self"},{icon:a.a.createElement(de.a,null),text:"alexling.js@gmail.com",href:"mailto:alexling.js@gmail.com",target:"_self"},{icon:a.a.createElement(he.a,null),text:"alexling540",href:"https://github.com/alexling540",target:"_blank"},{icon:a.a.createElement(pe.a,null),text:"alexander-ling-6b8a28178",href:"https://www.linkedin.com/in/alexander-ling-6b8a28178/",target:"_blank"}];return a.a.createElement("ul",{style:{textAlign:"left"}},e.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(Ee,{href:e.href,target:e.target,rel:"noopener noreferrer"},a.a.createElement("div",null,e.icon,a.a.createElement("span",null,e.text))))})))}},{key:"renderSendEmail",value:function(){return a.a.createElement("form",null,a.a.createElement("div",null,a.a.createElement(ke,{placeholder:"Your Name",type:"text",id:"contact-Name"})),a.a.createElement("div",null,a.a.createElement(ke,{placeholder:"Your Email",type:"email",id:"contact-Email"})),a.a.createElement("div",null,a.a.createElement(Ce,{rows:"3",placeholder:"Your message...",id:"contact-Message"})),a.a.createElement(ye,{type:"submit"},"Submit"))}},{key:"renderContent",value:function(){return E.isMobileOnly?a.a.createElement(a.a.Fragment,null,this.renderContactInfo()):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"half"},this.renderContactInfo()),a.a.createElement("div",{className:"half"},this.renderSendEmail()))}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,"Contact Me"),a.a.createElement("div",{className:"section-content"},this.renderContent()))}}]),n}(a.a.Component),Oe={name:"dark",textColor:"white",accentColor:"#86C232",accentColor2:"#61892F",backgroundColorLighter:"#6B6E70",backgroundColorLight:"#474B4F",backgroundColor:"#222629",backgroundColorDark:"#16191b"},we={name:"light",textColor:"black",accentColor:"#00A8E8",accentColor2:"#007EA7",backgroundColorLight:"#FFFFFF",backgroundColor:"#D3F6F8",backgroundColorDark:"#C6D8D9"};var xe=function(){var e=[{anchor:"section-intro",title:"Home",icon:a.a.createElement(d.a,null),section:a.a.createElement(I,null)},{anchor:"section-about",title:"About",icon:a.a.createElement(d.f,null),section:a.a.createElement(X,null)},{anchor:"section-projects",title:"Projects",icon:a.a.createElement(d.d,null),section:a.a.createElement(se,null)},{anchor:"section-contact",title:"Contact",icon:a.a.createElement(d.b,null),section:a.a.createElement(je,null)}],t=new Array(e.length-1).fill(Oe.backgroundColor).concat(Oe.backgroundColorDark),n=new Array(e.length-1).fill(we.backgroundColor).concat(we.backgroundColorDark),o=Object(i.useMediaPredicate)("(prefers-color-scheme: light)")?"light":"dark",c=function(e){return"light"===e?n:t},u=Object(r.useState)(o),h=Object(l.a)(u,2),p=h[0],b=h[1],f=Object(r.useState)(c(p)),g=Object(l.a)(f,2),v=g[0],E=g[1],k=Object(r.useState)(!0),C=Object(l.a)(k,2),y=C[0],j=C[1];return a.a.createElement(m.b,{theme:"light"===p?we:Oe},a.a.createElement("div",{className:"App"},a.a.createElement(P,{toggleTheme:function(){"light"===p?(j(!1),b("dark"),E(t)):"dark"===p?(j(!1),b("light"),E(n)):(j(!1),b(o),c(p))},sections:e}),a.a.createElement(s.a,{licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",css3:!0,menu:"#menu",touchSensitivity:15,verticalCentered:!1,sectionsColor:v,animateAnchor:y,render:function(t){t.state,t.fullpageApi;return a.a.createElement(s.a.Wrapper,null,e.map((function(e,t){return a.a.createElement("div",{className:"section","data-anchor":e.anchor,key:t},e.section)})))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.afd7319a.chunk.js.map