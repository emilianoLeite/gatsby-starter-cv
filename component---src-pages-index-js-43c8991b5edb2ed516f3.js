(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(142),s=a(157),c=a(151),d=a(143),p=a.n(d),m=a(150),u=a(152),h=a(154),f=a(153),g=function(e){var t=e.title,a=void 0===t?"about":t,n=e.text,i=void 0===n?"":n;return o.a.createElement(r.Fragment,null,o.a.createElement("h1",null,a),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))},b=(a(149),function(e){var t=e.className,a=e.name;e.level;return o.a.createElement("div",{className:t},o.a.createElement("label",{htmlFor:a+"-bar"},a),o.a.createElement("div",{id:a+"-bar",className:"skill__bar"},o.a.createElement("div",{className:"skill__level"})))});b.displaName="SkillBar";var v=Object(l.default)(b).withConfig({displayName:"skill-bar",componentId:"sc-5skm7n-0"})([".skill__bar{height:10px;background-color:lightgrey;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],function(e){return e.level||0}),x=function(e){var t=e.title,a=void 0===t?"Skills":t,n=e.skills,i=void 0===n?[]:n;return o.a.createElement(r.Fragment,null,o.a.createElement("h1",null,a),i.map(function(e){return o.a.createElement(v,{key:e.name,name:e.name,level:e.level})}))},y=a(175),w=a.n(y);function _(){var e=w()(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return _=function(){return e},e}var k=Object(l.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("h1",null,"Experience"),p.a.jobs&&p.a.jobs.map(function(e){return o.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},o.a.createElement("div",{className:"inner"},o.a.createElement("span",{className:"timeline__date"},o.a.createElement("span",{className:"timeline__month"},e.begin.month),o.a.createElement("span",{className:"timeline__year"},e.begin.year)),o.a.createElement("h2",{className:"timeline__title"},e.occupation," at ",e.company," ",o.a.createElement("br",null),o.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"present",")")),o.a.createElement("p",null,e.description)))}))}).withConfig({displayName:"timeline",componentId:"sc-1p0hdle-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303B;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303B;}.timeline__date{display:block;width:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303B;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n+2) div.inner{float:right;}.timeline__title{background:#25303B;}.timeline__title:after{background:#25303B;}.timeline__title--small{font-size:10px;}",""],function(e){return Object(s.config)().media.sm(_())}),E=a(176),N=a.n(E),C=(a(158),a(178)),I=a.n(C),j=a(179),z=a.n(j),S=Object(l.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}).withConfig({displayName:"loader",componentId:"rtdxs3-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),q="https://api.github.com/users/"+p.a.githubUsername+"/repos?type=owner&sort=updated&per_page=5&page=1",F=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=I()(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z()(q);case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.state.status;return o.a.createElement("div",{className:this.props.className},o.a.createElement("h2",null,"Latest repositories on Github"),"loading"===e&&o.a.createElement("div",{className:"repositories__loader"},o.a.createElement(S,null)),"ready"===e&&this.state.repos&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"repositories__content"},this.state.repos.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.name},o.a.createElement("div",{className:"repositories__repo"},o.a.createElement("a",{className:"repositories__repo-link",href:e.html_url},o.a.createElement("strong",null,e.name)),o.a.createElement("div",null,e.description),o.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),o.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),o.a.createElement("hr",null))}))))},t}(o.a.Component),T=Object(l.default)(F).withConfig({displayName:"repositories",componentId:"sc-8n2gji-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link{text-decoration:none;color:#25303B;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]),L=l.default.hr.withConfig({displayName:"pages__Separator",componentId:"g1kolw-0"})(["margin-top:24px;margin-bottom:16px;"]),B=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e="Hi! I'm Francisco!";return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(h.a,{title:e,keywords:["gatsbyjs","react","curriculum"]}),o.a.createElement(u.a,{heroImg:p.a.siteCover,title:e}),o.a.createElement(f.a,{className:this.props.className},o.a.createElement(s.Container,{className:"page-content",fluid:!0},o.a.createElement(s.Row,null,o.a.createElement(s.Col,{xs:4,className:"avatar"},o.a.createElement("img",{className:"avatar__image",src:"/images/avatar.jpeg",alt:"user avatar"}),o.a.createElement("div",{className:"social"},p.a.social.github&&o.a.createElement("a",{className:"social-link github",href:p.a.social.github},o.a.createElement(c.b,{className:"social-icon",size:"32"})),p.a.social.linkedin&&o.a.createElement("a",{className:"social-link linkedin",href:p.a.social.linkedin},o.a.createElement(c.c,{className:"social-icon",size:"32"})),p.a.social.twitter&&o.a.createElement("a",{className:"social-link twitter",href:p.a.social.twitter},o.a.createElement(c.d,{className:"social-icon",size:"32"})),p.a.social.email&&o.a.createElement("a",{className:"social-link email",href:"mailto:"+p.a.social.email},o.a.createElement(c.a,{className:"social-icon",size:"32"}))))),o.a.createElement(s.Row,null,o.a.createElement(s.Col,{xs:4,sm:4},o.a.createElement(g,{title:"About",text:p.a.authorDescription})),o.a.createElement(s.Col,{xs:4,sm:4},o.a.createElement(x,{title:"Skills",skills:p.a.skills}))),o.a.createElement(L,null),o.a.createElement(k,null),o.a.createElement(L,null),o.a.createElement(T,null))))},t}(o.a.Component);t.default=Object(l.default)(B).withConfig({displayName:"pages",componentId:"g1kolw-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"])},143:function(e,t){e.exports={siteTitle:"Francisco Santos",siteDescription:"Create your online curriculum in just a few minutes with this starter",authorName:"Francisco Santos",twitterUsername:"_franciscodf",githubUsername:"santosfrancisco",authorAvatar:"/images/avatar.jpeg",authorDescription:"Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />\n    In 2012 I started working as a support technician and I approached the developers.\n    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />\n    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>",skills:[{name:"HTML",level:70},{name:"CSS",level:60},{name:"Javascript",level:50},{name:"NodeJs",level:40},{name:"React",level:60},{name:"Git",level:70}],jobs:[{company:"Lendico",begin:{month:"apr",year:"2018"},duration:null,occupation:"Frontend developer",description:"I integrate the Frontend team responsible for developing and maintaining the online lending platform."},{company:"Anapro",begin:{month:"dec",year:"2016"},duration:"1 yr e 5 mos",occupation:"Fullstack developer",description:"Development and maintenance, corrective and preventive, of web applications for the real estate market."},{company:"Anapro",begin:{month:"set",year:"2012"},duration:"4 yrs e 3 mos",occupation:"Support Technician",description:"Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."}],social:{twitter:"https://twitter.com/_franciscodf",linkedin:"https://www.linkedin.com/in/santos-francisco",github:"https://github.com/santosfrancisco",email:"yoshi.df@gmail.com"},siteUrl:"https://santosfrancisco.github.io/gatsbystarter-cv",pathPrefix:"/gatsby-starter-cv",siteCover:"/images/cover.jpeg",googleAnalyticsId:"UA-131359385-1",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",headerLinks:[{label:"Francisco Santos",url:"/"}]}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(141),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(145),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var p=a(33);a.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),u=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},146:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,a){},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Francisco Santos",description:"Create your online curriculum in just a few minutes with this starter",author:"Francisco Santos"}}}}},150:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(143),s=a.n(l),c=a(7),d=a.n(c),p=a(144),m=a(142),u=a(151),h=m.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"dsp75d-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303B;"]),f=m.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"dsp75d-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#25303B;"]),g=m.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"dsp75d-2"})(["display:flex;flex-direction:row;"]),b=Object(m.default)(p.Link).withConfig({displayName:"header__HeaderLink",componentId:"dsp75d-3"})(["position:relative;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),v=Object(m.default)(function(e){var t=e.className;return i.a.createElement("a",{className:t,href:"https://github.com/"+s.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(u.b,{size:32}))}).withConfig({displayName:"header__GithubLink",componentId:"dsp75d-4"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),x=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=s.a.headerLinks;return i.a.createElement(h,null,i.a.createElement(f,null,i.a.createElement(g,null,e.map(function(e,t){return i.a.createElement(b,{to:e.url,key:"header-link-"+t},e.label)})),i.a.createElement(v,null)))},t}(i.a.Component),y=(a(147),function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{headerLinks:s.a.headerLinks}),i.a.createElement("div",null,t))});y.propTypes={children:o.a.node.isRequired};var w=y;a.d(t,"a",function(){return w})},152:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(144),s=a(143),c=a.n(s),d=a(142),p=d.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"uqwd53-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),m=d.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"uqwd53-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=d.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"uqwd53-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.className;return o.a.createElement(p,{className:a},o.a.createElement(m,null,o.a.createElement(u,null,t)))},t}(o.a.Component),f=Object(d.default)(h).withConfig({displayName:"hero",componentId:"uqwd53-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(l.withPrefix)(c.a.siteCover))+");"});a.d(t,"a",function(){return f})},153:function(e,t,a){"use strict";var n=a(142).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-10vqfep-0"})(["position:relative;border-radius:3px;width:80%;max-width:960px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);a.d(t,"a",function(){return n})},154:function(e,t,a){"use strict";var n=a(148),i=a(0),r=a.n(i),o=a(4),l=a.n(o),s=a(155),c=a.n(s),d=a(144);function p(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(d.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var m=p,u="1025518380";a.d(t,"a",function(){return m})}}]);
//# sourceMappingURL=component---src-pages-index-js-43c8991b5edb2ed516f3.js.map