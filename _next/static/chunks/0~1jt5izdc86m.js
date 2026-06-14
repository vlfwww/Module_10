(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,80416,e=>{"use strict";var r=e.i(43476);e.i(85269);var t=e.i(22831);let i=({className:e})=>(0,r.jsx)("svg",{width:"95",height:"95",viewBox:"0 0 95 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,children:(0,r.jsx)("path",{d:"M92.1959 2.1959C90.7894 0.789867 88.8821 0 86.8934 0C84.9047 0 82.9974 0.789867 81.5909 2.1959L47.1959 36.5909L12.8009 2.1959C11.3944 0.789867 9.48713 0 7.4984 0C5.50967 0 3.60236 0.789867 2.1959 2.1959C0.789867 3.60236 0 5.50967 0 7.4984C0 9.48713 0.789867 11.3944 2.1959 12.8009L36.5909 47.1959L2.1959 81.5909C0.789867 82.9974 0 84.9047 0 86.8934C0 88.8821 0.789867 90.7894 2.1959 92.1959C3.60236 93.6019 5.50967 94.3918 7.4984 94.3918C9.48713 94.3918 11.3944 93.6019 12.8009 92.1959L47.1959 57.8009L81.5909 92.1959C82.9974 93.6019 84.9047 94.3918 86.8934 94.3918C88.8821 94.3918 90.7894 93.6019 92.1959 92.1959C93.6019 90.7894 94.3918 88.8821 94.3918 86.8934C94.3918 84.9047 93.6019 82.9974 92.1959 81.5909L57.8009 47.1959L92.1959 12.8009C93.6019 11.3944 94.3918 9.48713 94.3918 7.4984C94.3918 5.50967 93.6019 3.60236 92.1959 2.1959Z",fill:"currentColor"})});var s=e.i(6648),l=e.i(30917);let a=l.default.div.withConfig({displayName:"ErrorView.styles__ErrorContainer",componentId:"sc-999fd327-0"})`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding: 40px;
  min-height: 60vh;

  .crossIcon {
    width: 95px;
    height: 95px;
    color: var(--text-main);
  }

  h1 {
    font:
      600 3.75rem "Inter",
      sans-serif;
    color: var(--text-main);
    margin: 0;
  }

  p {
    font:
      600 3.75rem "Inter",
      sans-serif;
    color: var(--text-main);
    margin: 0;
  }
`;e.s(["default",0,({message:e,onRetry:l})=>{let{t:n}=(0,t.useTranslation)();return(0,r.jsxs)(a,{role:"alert",children:[(0,r.jsx)(i,{className:"crossIcon"}),(0,r.jsx)("h1",{children:n("error_view.title")}),(0,r.jsx)("p",{children:e||n("error_view.default_message")}),l&&(0,r.jsx)(s.default,{onClick:l,children:n("error_view.retry")})]})}],80416)},8821,e=>{"use strict";var r=e.i(43476),t=e.i(71645);e.i(85269);var i=e.i(22831),s=e.i(6713),l=e.i(80416);let a=t.default.memo(({message:e,onRetry:t})=>{let{t:a}=(0,i.useTranslation)();return(0,r.jsx)(s.default,{hideSidebar:!0,children:(0,r.jsx)("div",{role:"alert","aria-live":"assertive",children:(0,r.jsx)(l.default,{message:e||a("error_page.default_message"),onRetry:t})})})});e.s(["default",0,a])}]);