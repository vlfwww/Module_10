"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[33],{4914(e,r,a){a.d(r,{A:()=>i});a(9950);const i=a.p+"static/media/envelope.f39d20f0552f1142a649d5ef37d20755.svg"},8437(e,r,a){a.d(r,{A:()=>i});a(9950);const i=a.p+"static/media/eye.d79b974afe802a619814ca1d5f031964.svg"},9382(e,r,a){a.d(r,{A:()=>i});a(9950);const i=a.p+"static/media/fi-sr-info.c365a0f7a2780b67c2e284e6a1a1de22.svg"},5706(e,r,a){a.d(r,{A:()=>N});var i=a(9950);const s="AppLayout_mainPageWrapper__jC7w7",t="AppLayout_contentWrapper__EfM07",n="AppLayout_pageContent__+aKSu",o="AppLayout_mainContent__ieEDt",d="AppLayout_sidebar__nWdHx";var l=a(9763),c=a(5030),p=a(7688),m=a(8015);const h={headerWrapper:"Header_headerWrapper__+-U6q",header:"Header_header__F3i6E",logoWrapper:"Header_logoWrapper__oGSLf",burgerIcon:"Header_burgerIcon__nErVb",buttonsWrapper:"Header_buttonsWrapper__r3d0E",profileInfo:"Header_profileInfo__rTU+4",mobileMenu:"Header_mobileMenu__DUtJm",mobileHeader:"Header_mobileHeader__gHh3K",mobileAuthLinks:"Header_mobileAuthLinks__D0+yW",mobileLink:"Header_mobileLink__GWIfC",open:"Header_open__88KQT",overlay:"Header_overlay__4+15H",desktopMenu:"Header_desktopMenu__o9loT"},u={nav:"Sidebar_nav__ymllC",navItem:"Sidebar_navItem__xmJZ3",active:"Sidebar_active__WBDWO"};var b=a(4414);const v=e=>{let{className:r}=e;const{t:a}=(0,c.Bd)();return(0,b.jsx)("aside",{className:r||u.sidebar,children:(0,b.jsxs)("nav",{className:u.nav,"aria-label":a("sidebar.nav_label"),children:[(0,b.jsx)(p.k2,{to:"/",className:e=>{let{isActive:r}=e;return`${u.navItem} ${r?u.active:""}`},children:a("sidebar.notes")}),(0,b.jsx)(p.k2,{to:"/profile",className:e=>{let{isActive:r}=e;return`${u.navItem} ${r?u.active:""}`},children:a("sidebar.profile")}),(0,b.jsx)(p.k2,{to:"/archive",className:e=>{let{isActive:r}=e;return`${u.navItem} ${r?u.active:""}`},children:a("sidebar.archive")}),(0,b.jsx)(p.k2,{to:"/trash",className:e=>{let{isActive:r}=e;return`${u.navItem} ${r?u.active:""}`},children:a("sidebar.trash")})]})})};const x=a.p+"static/media/logo.981e615ddd2334a8737e87c3b419de57.svg";const g=a.p+"static/media/menu-burger.e5e0371f23c9c59fcab7c2254422b336.svg";var f=a(8437),_=a(4360);const j=e=>{let{pageType:r}=e;const{t:a}=(0,c.Bd)(),{isAuthenticated:s,user:t}=(0,l.As)(),[n,o]=(0,i.useState)(!1),d=(0,i.useCallback)(()=>{o(e=>!e)},[]),u=(0,_.m)(t)||f.A;return(0,b.jsx)("div",{className:h.headerWrapper,children:(0,b.jsxs)("header",{className:h.header,children:[(0,b.jsxs)("div",{className:h.logoWrapper,children:[(0,b.jsx)("img",{src:x,alt:"Sidekick"}),(0,b.jsx)("p",{children:"sidekick"})]}),(0,b.jsx)("button",{className:h.burgerIcon,onClick:d,"aria-label":a("header.menu"),"aria-expanded":n,children:(0,b.jsx)("img",{src:g,alt:"","aria-hidden":"true"})}),(0,b.jsx)("div",{className:h.desktopMenu,children:s?(0,b.jsxs)("div",{className:h.profileInfo,children:[(0,b.jsx)(m.A,{alt:(null===t||void 0===t?void 0:t.email)||"User",src:u}),(0,b.jsx)("p",{children:null===t||void 0===t?void 0:t.username})]}):"signin"!==r&&"signup"!==r&&(0,b.jsxs)("div",{className:h.buttonsWrapper,children:[(0,b.jsx)(p.N_,{to:"/signup",className:h.link,children:a("header.signup")}),(0,b.jsx)(p.N_,{to:"/signin",className:h.link,children:a("header.signin")})]})}),(0,b.jsxs)("nav",{className:`${h.mobileMenu} ${n?h.open:""}`,"aria-hidden":!n,children:[(0,b.jsxs)("div",{className:h.mobileHeader,children:[(0,b.jsxs)("div",{className:h.logoWrapper,children:[(0,b.jsx)("img",{src:x,alt:"Logo"}),(0,b.jsx)("p",{children:"sidekick"})]}),(0,b.jsx)("p",{children:null===t||void 0===t?void 0:t.username}),s&&(0,b.jsx)(m.A,{alt:"User",src:u})]}),(0,b.jsx)("div",{onClick:()=>o(!1),children:s?(0,b.jsx)(v,{}):(0,b.jsxs)("div",{className:h.mobileAuthLinks,children:[(0,b.jsx)(p.N_,{to:"/signup",className:h.mobileLink,children:a("header.signup")}),(0,b.jsx)(p.N_,{to:"/signin",className:h.mobileLink,children:a("header.signin")})]})})]}),n&&(0,b.jsx)("div",{className:h.overlay,onClick:d,"aria-hidden":"true"})]})})},y="Footer_footer__Oq3H4",k=()=>(0,b.jsx)("footer",{className:y,role:"contentinfo",children:(0,b.jsx)("p",{children:"\xa9 2026 sidekick"})});var A=a(708);const N=e=>{let{children:r,hideSidebar:a=!1,pageType:i="notes"}=e;const{theme:c}=(0,A.t)(),{isAuthenticated:p}=(0,l.As)(),m=p&&!a;return(0,b.jsxs)("div",{className:s,"data-theme":c,children:[(0,b.jsx)(j,{pageType:i}),(0,b.jsx)("div",{className:t,children:(0,b.jsxs)("div",{className:n,children:[m&&(0,b.jsx)("div",{role:"complementary","aria-label":"Sidebar navigation",children:(0,b.jsx)(v,{className:d})}),(0,b.jsx)("main",{className:o,id:"main-content",children:r})]})}),(0,b.jsx)(k,{})]})}},5580(e,r,a){a.d(r,{A:()=>o});var i=a(9950);const s=a(132).Ay.button`
  background-color: var(--accent-color);
  border: none;
  border-radius: 8px;
  text-align: center;
  padding: 14px 48px;
  font: 400 0.875rem "Poppins";
  color: var(--text-modal-button);
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 14px 24px;
  }

  &:hover {
    background-color: var(--btn-hover);
  }

  &:active {
    background-color: var(--btn-active);
  }

  &:disabled {
    background-color: var(--btn-disabled);
    cursor: not-allowed;
  }
`;var t=a(4414);const n=e=>{let{children:r,onClick:a,className:i,type:n,...o}=e;return(0,t.jsx)(s,{className:i,onClick:a,type:n,...o,children:r})},o=i.memo(n)},2626(e,r,a){a.d(r,{A:()=>W});var i=a(9950),s=a(5030),t=a(132);const n=t.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,o=t.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`,d=t.Ay.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font: 500 0.875rem "Poppins";
    color: var(--text-main);
    margin: 0;
  }

  & img {
    width: 16px;
    height: 16px;

    [data-theme="dark"] & {
      filter: invert(1);
    }
  }
`,l=t.Ay.div`
  display: flex;
  align-items: center;
`,c=t.Ay.div`
  position: relative;
  width: 100%;
`,p=t.Ay.input`
  background-color: var(--bg-page);
  color: ${e=>{let{$isError:r}=e;return r?"var(--input-error)":"var(--text-secondary)"}};
  border-radius: 8px;
  padding: 14px;
  font: 400 0.875rem "Poppins";
  border: 1px solid ${e=>{let{$isError:r}=e;return r?"var(--input-error)":"var(--border-color)"}};
  outline: none;
  width: 100%;
  transition: all 0.3s ease-out;

  &:focus {
    border-color: ${e=>{let{$isError:r}=e;return r?"var(--input-error)":"var(--input-focus)"}};
    color: ${e=>{let{$isError:r}=e;return r?"var(--input-error)":"var(--text-main)"}};
  }

  &:disabled {
    border: 1px solid var(--input-disabled-color);
    background-color: var(--bg-input-disabled);

    &::placeholder {
      color: var(--input-disabled-color);
      font: 400 0.875rem "Poppins";
    }
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }

  &::-webkit-contacts-auto-fill-button,
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
  }
`,m=t.Ay.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;

  & img {
    width: 16px;
    height: 16px;
  }
`,h=t.Ay.div`
  display: grid;
  grid-template-rows: ${e=>{let{$visible:r}=e;return r?"1fr":"0fr"}};
  margin-top: ${e=>{let{$visible:r}=e;return r?"8px":"0px"}};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,u=t.Ay.div`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=t.Ay.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font: 400 0.875rem "Poppins";
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`,v=t.Ay.span`
  color: var(--input-error);
`,x=t.Ay.span`
  color: var(--input-success);
`,g=t.Ay.img`
  width: 16px;
  height: 16px;
`;const f=a.p+"static/media/check.f07a2f9a993ecc59dbff51bb72e12762.svg";const _=a.p+"static/media/cross-small.e86080b321cdaf1993280b7f13dfca34.svg";var j=a(9382);const y=a.p+"static/media/Info Tooltip.06edae94368b6a0f68bf16e9b708a546.svg";const k=a.p+"static/media/fi-rr-eye.974f12854cfa4a468006a56a484d1695.svg";const A=a.p+"static/media/fi-rr-eye-crossed.241db066fc69a5310e94f48c9bd551b1.svg";const N=a.p+"static/media/fi-sr-thumbs-up.25294a99b12ba5cd95eddf65bf404f55.svg";var $=a(4414);const w=i.forwardRef((e,r)=>{let{label:a,iconSrc:t,type:w,errorMessage:W,isError:H,isValid:I,pageType:C,...L}=e;const{t:E}=(0,s.Bd)(),[S,T]=(0,i.useState)(!1),M=(0,i.useId)(),P="password"===w,U=P&&S?"text":w,B=H,D=I&&"signin"!==C,K=D&&"signup"===C&&P,q=B||K;return(0,$.jsxs)(n,{children:[(0,$.jsxs)(o,{children:[(0,$.jsxs)(d,{children:[t&&(0,$.jsx)("img",{src:t,alt:"","aria-hidden":"true"}),(0,$.jsx)("p",{children:a})]}),(0,$.jsxs)(l,{"aria-live":"polite",children:[D&&(0,$.jsx)("img",{src:f,alt:"\u2713"}),B&&(0,$.jsx)("img",{src:_,alt:"\u2715"})]})]}),(0,$.jsxs)(c,{children:[(0,$.jsx)(p,{ref:r,$isError:!!B,type:U,placeholder:`${E("input.enter")} ${a.toLowerCase()}`,"aria-invalid":H?"true":"false","aria-describedby":B?M:void 0,...L}),P&&(0,$.jsx)(m,{type:"button",onClick:()=>T(e=>!e),"aria-label":E("input.toggle_password"),children:(0,$.jsx)("img",{src:S?A:k,alt:"","aria-hidden":"true"})})]}),(0,$.jsx)(h,{$visible:!!q,id:M,role:H?"alert":void 0,children:(0,$.jsxs)(u,{children:[(0,$.jsxs)(b,{children:[(0,$.jsx)("img",{src:B?j.A:N,alt:"","aria-hidden":"true"}),K?(0,$.jsx)(x,{children:E("input.password_strong")}):(0,$.jsx)(v,{children:W})]}),B&&(0,$.jsx)(g,{src:y,alt:"","aria-hidden":"true"})]})})]})});w.displayName="Input";const W=i.memo(w)},4360(e,r,a){a.d(r,{m:()=>i});const i=e=>{const r=null===e||void 0===e?void 0:e.profileImage;if(!r)return"";if(r.startsWith("http")||r.startsWith("blob:")||r.startsWith("data:"))return r;let a="/Module_10";a&&!a.endsWith("/")?a+="/":a||(a="/");return`${a}${r.startsWith("/")?r.slice(1):r}`}}}]);