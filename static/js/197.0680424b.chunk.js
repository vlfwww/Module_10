"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[197],{4914(e,r,i){i.d(r,{A:()=>a});i(9950);const a=i.p+"static/media/envelope.f39d20f0552f1142a649d5ef37d20755.svg"},9382(e,r,i){i.d(r,{A:()=>a});i(9950);const a=i.p+"static/media/fi-sr-info.c365a0f7a2780b67c2e284e6a1a1de22.svg"},1018(e,r,i){i.d(r,{A:()=>I});var a=i(9950);const s="AppLayout_mainPageWrapper__jC7w7",t="AppLayout_contentWrapper__EfM07",n="AppLayout_pageContent__+aKSu",o="AppLayout_mainContent__ieEDt",d="AppLayout_sidebar__nWdHx";var l=i(9763),c=i(5030),p=i(8015);const u={headerWrapper:"Header_headerWrapper__+-U6q",header:"Header_header__F3i6E",logoWrapper:"Header_logoWrapper__oGSLf",burgerIcon:"Header_burgerIcon__nErVb",buttonsWrapper:"Header_buttonsWrapper__r3d0E",profileInfo:"Header_profileInfo__rTU+4",mobileMenu:"Header_mobileMenu__DUtJm",mobileHeader:"Header_mobileHeader__gHh3K",mobileAuthLinks:"Header_mobileAuthLinks__D0+yW",mobileLink:"Header_mobileLink__GWIfC",open:"Header_open__88KQT",overlay:"Header_overlay__4+15H",desktopMenu:"Header_desktopMenu__o9loT"};var m=i(7688);const h={nav:"Sidebar_nav__ymllC",navItem:"Sidebar_navItem__xmJZ3",active:"Sidebar_active__WBDWO"};var b=i(4414);const x=e=>{let{className:r}=e;const{t:i}=(0,c.Bd)();return(0,b.jsx)("aside",{className:r||h.sidebar,children:(0,b.jsxs)("nav",{className:h.nav,"aria-label":i("sidebar.nav_label"),children:[(0,b.jsx)(m.k2,{to:"/",className:e=>{let{isActive:r}=e;return`${h.navItem} ${r?h.active:""}`},"data-testid":"notes-link",children:i("sidebar.notes")}),(0,b.jsx)(m.k2,{to:"/profile",className:e=>{let{isActive:r}=e;return`${h.navItem} ${r?h.active:""}`},"data-testid":"profile-link",children:i("sidebar.profile")}),(0,b.jsx)(m.k2,{to:"/archive",className:e=>{let{isActive:r}=e;return`${h.navItem} ${r?h.active:""}`},"data-testid":"archive-link",children:i("sidebar.archive")}),(0,b.jsx)(m.k2,{to:"/trash",className:e=>{let{isActive:r}=e;return`${h.navItem} ${r?h.active:""}`},"data-testid":"trash-link",children:i("sidebar.trash")})]})})};var v=i(1494),g=i(132),f=i(8355);const _=(0,g.Ay)(f.CS.div)`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-content);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
  font:
    400 1.125rem "Poppins",
    sans-serif;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: var(--text-main);
  transform-origin: top right;
`,j=g.Ay.div`
  padding: 8px 16px;
  cursor: pointer;
  color: var(--text-main);
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    background-color: var(--bg-menu-link-hover);
  }
`,y=e=>{let{onLogout:r,onClose:i,springStyle:a,menuRef:s,t:t}=e;return(0,b.jsxs)(_,{ref:s,style:a,onClick:e=>e.stopPropagation(),role:"menu",children:[(0,b.jsx)(m.N_,{to:"/profile",onClick:i,style:{textDecoration:"none",color:"inherit"},children:(0,b.jsx)(j,{children:t("header.profile")})}),(0,b.jsx)(j,{onClick:()=>{r(),i()},children:t("header.logout")})]})},k=a.memo(y);const A=i.p+"static/media/default-avatar.9fbe207878b576610c89cd54ba310607.svg";const N=i.p+"static/media/logo.981e615ddd2334a8737e87c3b419de57.svg";const w=i.p+"static/media/menu-burger.e5e0371f23c9c59fcab7c2254422b336.svg",$=e=>{let{pageType:r}=e;const{t:i}=(0,c.Bd)(),{isAuthenticated:s,user:t,logout:n}=(0,l.As)(),o=(0,m.Zp)(),[d,h]=(0,a.useState)(!1),g=(0,a.useCallback)(()=>h(e=>!e),[]),[_,j]=(0,a.useState)(!1),y=a.useRef(null),$=(0,a.useCallback)(()=>{n(),o("/signin")},[n,o]),W=(0,f.pn)(_,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{duration:150}});(0,a.useEffect)(()=>{const e=e=>{y.current&&!y.current.contains(e.target)&&j(!1)};return _&&document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[_]);const C=(0,a.useCallback)(()=>{j(e=>!e)},[]),H=(0,v.m)(t)||A;return(0,b.jsx)("div",{className:u.headerWrapper,children:(0,b.jsxs)("header",{className:u.header,children:[(0,b.jsxs)("div",{className:u.logoWrapper,children:[(0,b.jsx)("img",{src:N,alt:"Sidekick"}),(0,b.jsx)("p",{children:"sidekick"})]}),(0,b.jsx)("button",{className:u.burgerIcon,onClick:g,"aria-label":i("header.menu"),"aria-expanded":d,children:(0,b.jsx)("img",{src:w,alt:"","aria-hidden":"true"})}),(0,b.jsx)("div",{className:u.desktopMenu,children:s?(0,b.jsxs)("div",{className:u.profileInfo,onClick:C,style:{position:"relative",cursor:"pointer"},children:[(0,b.jsx)(p.A,{src:H}),(0,b.jsx)("p",{children:null===t||void 0===t?void 0:t.username}),W((e,r)=>r&&(0,b.jsx)(k,{menuRef:y,springStyle:e,onClose:C,onLogout:$,t:i}))]}):"signin"!==r&&"signup"!==r&&(0,b.jsxs)("div",{className:u.buttonsWrapper,children:[(0,b.jsx)(m.N_,{to:"/signup",className:u.link,children:i("header.signup")}),(0,b.jsx)(m.N_,{to:"/signin",className:u.link,children:i("header.signin")})]})}),(0,b.jsxs)("nav",{className:`${u.mobileMenu} ${d?u.open:""}`,"aria-hidden":!d,children:[(0,b.jsxs)("div",{className:u.mobileHeader,children:[(0,b.jsxs)("div",{className:u.logoWrapper,children:[(0,b.jsx)("img",{src:N,alt:"Logo"}),(0,b.jsx)("p",{children:"sidekick"})]}),s&&(0,b.jsx)(p.A,{alt:"User",src:H})]}),(0,b.jsx)("div",{onClick:()=>h(!1),children:s?(0,b.jsx)(x,{}):(0,b.jsxs)("div",{className:u.mobileAuthLinks,children:[(0,b.jsx)(m.N_,{to:"/signup",className:u.mobileLink,children:i("header.signup")}),(0,b.jsx)(m.N_,{to:"/signin",className:u.mobileLink,children:i("header.signin")})]})})]}),d&&(0,b.jsx)("div",{role:"presentation",className:u.overlay,onClick:g,"aria-hidden":"true"})]})})},W="Footer_footer__Oq3H4",C=()=>(0,b.jsx)("footer",{className:W,role:"contentinfo",children:(0,b.jsx)("p",{children:"\xa9 2026 sidekick"})});var H=i(9221);const I=e=>{let{children:r,hideSidebar:i=!1,pageType:a="notes"}=e;const{theme:c}=(0,H.t0)(),{isAuthenticated:p}=(0,l.As)(),u=p&&!i;return(0,b.jsxs)("div",{className:s,"data-theme":c,children:[(0,b.jsx)($,{pageType:a}),(0,b.jsx)("div",{className:t,children:(0,b.jsxs)("div",{className:n,children:[u&&(0,b.jsx)("div",{"aria-label":"Sidebar navigation",children:(0,b.jsx)(x,{className:d})}),(0,b.jsx)("main",{className:o,id:"main-content",children:r})]})}),(0,b.jsx)(C,{})]})}},5580(e,r,i){i.d(r,{A:()=>o});var a=i(9950);const s=i(132).Ay.button`
  background-color: var(--accent-color);
  border: none;
  border-radius: 8px;
  text-align: center;
  padding: 14px 48px;
  font:
    400 0.875rem "Poppins",
    sans-serif;
  color: var(--text-modal-button);
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;
  width: ${e=>{let{$fullWidth:r}=e;return r?"100%":"auto"}};

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
`;var t=i(4414);const n=e=>{let{children:r,onClick:i,className:a,type:n,isFullWidth:o=!1,...d}=e;return(0,t.jsx)(s,{className:a,onClick:i,type:n,$fullWidth:o,...d,children:r})},o=a.memo(n)},2626(e,r,i){i.d(r,{A:()=>W});var a=i(9950),s=i(5030),t=i(132);const n=t.Ay.div`
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
    font:
      500 0.875rem "Poppins",
      sans-serif;
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
  font:
    400 0.875rem "Poppins",
    sans-serif;
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
      font:
        400 0.875rem "Poppins",
        sans-serif;
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
`,u=t.Ay.button`
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
`,m=t.Ay.div`
  display: grid;
  grid-template-rows: ${e=>{let{$visible:r}=e;return r?"1fr":"0fr"}};
  margin-top: ${e=>{let{$visible:r}=e;return r?"8px":"0px"}};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,h=t.Ay.div`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=t.Ay.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font:
    400 0.875rem "Poppins",
    sans-serif;
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`,x=t.Ay.span`
  color: var(--input-error);
`,v=t.Ay.span`
  color: var(--input-success);
`,g=t.Ay.img`
  width: 16px;
  height: 16px;
`;const f=i.p+"static/media/check.f07a2f9a993ecc59dbff51bb72e12762.svg";const _=i.p+"static/media/cross-small.e86080b321cdaf1993280b7f13dfca34.svg";var j=i(9382);const y=i.p+"static/media/Info Tooltip.06edae94368b6a0f68bf16e9b708a546.svg";const k=i.p+"static/media/fi-rr-eye.974f12854cfa4a468006a56a484d1695.svg";const A=i.p+"static/media/fi-rr-eye-crossed.241db066fc69a5310e94f48c9bd551b1.svg";const N=i.p+"static/media/fi-sr-thumbs-up.25294a99b12ba5cd95eddf65bf404f55.svg";var w=i(4414);const $=a.forwardRef((e,r)=>{let{label:i,iconSrc:t,type:$,errorMessage:W,isError:C,isValid:H,pageType:I,...L}=e;const{t:S}=(0,s.Bd)(),[E,T]=(0,a.useState)(!1),M=(0,a.useId)(),P="password"===$,D=P&&E?"text":$,B=C,R=H&&"signin"!==I,U=R&&"signup"===I&&P,z=B||U;return(0,w.jsxs)(n,{children:[(0,w.jsxs)(o,{children:[(0,w.jsxs)(d,{children:[t&&(0,w.jsx)("img",{src:t,alt:"","aria-hidden":"true"}),(0,w.jsx)("p",{children:i})]}),(0,w.jsxs)(l,{"aria-live":"polite",children:[R&&(0,w.jsx)("img",{src:f,alt:"\u2713"}),B&&(0,w.jsx)("img",{src:_,alt:"\u2715"})]})]}),(0,w.jsxs)(c,{children:[(0,w.jsx)(p,{ref:r,$isError:!!B,type:D,placeholder:`${S("input.enter")} ${i.toLowerCase()}`,"aria-invalid":C?"true":"false","aria-describedby":B?M:void 0,...L}),P&&(0,w.jsx)(u,{type:"button",onClick:()=>T(e=>!e),"aria-label":S("input.toggle_password"),children:(0,w.jsx)("img",{src:E?A:k,alt:"","aria-hidden":"true"})})]}),(0,w.jsx)(m,{$visible:!!z,id:M,role:C?"alert":void 0,children:(0,w.jsxs)(h,{children:[(0,w.jsxs)(b,{children:[(0,w.jsx)("img",{src:B?j.A:N,alt:"","aria-hidden":"true"}),U?(0,w.jsx)(v,{children:S("input.password_strong")}):(0,w.jsx)(x,{children:W})]}),B&&(0,w.jsx)(g,{src:y,alt:"","aria-hidden":"true"})]})})]})});$.displayName="Input";const W=a.memo($)},1494(e,r,i){i.d(r,{m:()=>a});const a=e=>{const r=null===e||void 0===e?void 0:e.profileImage;if(!r)return"";if(r.startsWith("http")||r.startsWith("blob:")||r.startsWith("data:"))return r;let i="/Module_10";i&&!i.endsWith("/")?i+="/":i||(i="/");return`${i}${r.startsWith("/")?r.slice(1):r}`}}}]);