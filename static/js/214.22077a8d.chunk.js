"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[214],{1018(e,a,r){r.d(a,{A:()=>w});var s=r(9950);const i="AppLayout_mainPageWrapper__jC7w7",t="AppLayout_contentWrapper__EfM07",n="AppLayout_pageContent__+aKSu",o="AppLayout_mainContent__ieEDt",l="AppLayout_sidebar__nWdHx";var c=r(9763),d=r(5030),p=r(8015);const u={headerWrapper:"Header_headerWrapper__+-U6q",header:"Header_header__F3i6E",logoWrapper:"Header_logoWrapper__oGSLf",burgerIcon:"Header_burgerIcon__nErVb",buttonsWrapper:"Header_buttonsWrapper__r3d0E",profileInfo:"Header_profileInfo__rTU+4",mobileMenu:"Header_mobileMenu__DUtJm",mobileHeader:"Header_mobileHeader__gHh3K",mobileAuthLinks:"Header_mobileAuthLinks__D0+yW",mobileLink:"Header_mobileLink__GWIfC",open:"Header_open__88KQT",overlay:"Header_overlay__4+15H",desktopMenu:"Header_desktopMenu__o9loT"};var h=r(7688);const m={nav:"Sidebar_nav__ymllC",navItem:"Sidebar_navItem__xmJZ3",active:"Sidebar_active__WBDWO"};var v=r(4414);const x=e=>{let{className:a}=e;const{t:r}=(0,d.Bd)();return(0,v.jsx)("aside",{className:a||m.sidebar,children:(0,v.jsxs)("nav",{className:m.nav,"aria-label":r("sidebar.nav_label"),children:[(0,v.jsx)(h.k2,{to:"/",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"notes-link",children:r("sidebar.notes")}),(0,v.jsx)(h.k2,{to:"/profile",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"profile-link",children:r("sidebar.profile")}),(0,v.jsx)(h.k2,{to:"/archive",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"archive-link",children:r("sidebar.archive")}),(0,v.jsx)(h.k2,{to:"/trash",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"trash-link",children:r("sidebar.trash")})]})})};var g=r(1494),_=r(132),b=r(8355);const j=(0,_.Ay)(b.CS.div)`
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
`,k=_.Ay.div`
  padding: 8px 16px;
  cursor: pointer;
  color: var(--text-main);
  text-decoration: none;
  border-radius: 8px;

  &:hover {
    background-color: var(--bg-menu-link-hover);
  }
`,f=e=>{let{onLogout:a,onClose:r,springStyle:s,menuRef:i,t:t}=e;return(0,v.jsxs)(j,{ref:i,style:s,onClick:e=>e.stopPropagation(),role:"menu",children:[(0,v.jsx)(h.N_,{to:"/profile",onClick:r,style:{textDecoration:"none",color:"inherit"},children:(0,v.jsx)(k,{children:t("header.profile")})}),(0,v.jsx)(k,{onClick:()=>{a(),r()},children:t("header.logout")})]})},N=s.memo(f);const A=r.p+"static/media/default-avatar.9fbe207878b576610c89cd54ba310607.svg";const y=r.p+"static/media/logo.981e615ddd2334a8737e87c3b419de57.svg";const C=r.p+"static/media/menu-burger.e5e0371f23c9c59fcab7c2254422b336.svg",W=e=>{let{pageType:a}=e;const{t:r}=(0,d.Bd)(),{isAuthenticated:i,user:t,logout:n}=(0,c.As)(),o=(0,h.Zp)(),[l,m]=(0,s.useState)(!1),_=(0,s.useCallback)(()=>m(e=>!e),[]),[j,k]=(0,s.useState)(!1),f=s.useRef(null),W=(0,s.useCallback)(()=>{n(),o("/signin")},[n,o]),H=(0,b.pn)(j,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{duration:150}});(0,s.useEffect)(()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&k(!1)};return j&&document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[j]);const S=(0,s.useCallback)(()=>{k(e=>!e)},[]),L=(0,g.m)(t)||A;return(0,v.jsx)("div",{className:u.headerWrapper,children:(0,v.jsxs)("header",{className:u.header,children:[(0,v.jsxs)("div",{className:u.logoWrapper,children:[(0,v.jsx)("img",{src:y,alt:"Sidekick"}),(0,v.jsx)("p",{children:"sidekick"})]}),(0,v.jsx)("button",{className:u.burgerIcon,onClick:_,"aria-label":r("header.menu"),"aria-expanded":l,children:(0,v.jsx)("img",{src:C,alt:"","aria-hidden":"true"})}),(0,v.jsx)("div",{className:u.desktopMenu,children:i?(0,v.jsxs)("div",{className:u.profileInfo,onClick:S,style:{position:"relative",cursor:"pointer"},children:[(0,v.jsx)(p.A,{src:L}),(0,v.jsx)("p",{children:null===t||void 0===t?void 0:t.username}),H((e,a)=>a&&(0,v.jsx)(N,{menuRef:f,springStyle:e,onClose:S,onLogout:W,t:r}))]}):"signin"!==a&&"signup"!==a&&(0,v.jsxs)("div",{className:u.buttonsWrapper,children:[(0,v.jsx)(h.N_,{to:"/signup",className:u.link,children:r("header.signup")}),(0,v.jsx)(h.N_,{to:"/signin",className:u.link,children:r("header.signin")})]})}),(0,v.jsxs)("nav",{className:`${u.mobileMenu} ${l?u.open:""}`,"aria-hidden":!l,children:[(0,v.jsxs)("div",{className:u.mobileHeader,children:[(0,v.jsxs)("div",{className:u.logoWrapper,children:[(0,v.jsx)("img",{src:y,alt:"Logo"}),(0,v.jsx)("p",{children:"sidekick"})]}),i&&(0,v.jsx)(p.A,{alt:"User",src:L})]}),(0,v.jsx)("div",{onClick:()=>m(!1),children:i?(0,v.jsx)(x,{}):(0,v.jsxs)("div",{className:u.mobileAuthLinks,children:[(0,v.jsx)(h.N_,{to:"/signup",className:u.mobileLink,children:r("header.signup")}),(0,v.jsx)(h.N_,{to:"/signin",className:u.mobileLink,children:r("header.signin")})]})})]}),l&&(0,v.jsx)("div",{role:"presentation",className:u.overlay,onClick:_,"aria-hidden":"true"})]})})},H="Footer_footer__Oq3H4",S=()=>(0,v.jsx)("footer",{className:H,role:"contentinfo",children:(0,v.jsx)("p",{children:"\xa9 2026 sidekick"})});var L=r(9221);const w=e=>{let{children:a,hideSidebar:r=!1,pageType:s="notes"}=e;const{theme:d}=(0,L.t0)(),{isAuthenticated:p}=(0,c.As)(),u=p&&!r;return(0,v.jsxs)("div",{className:i,"data-theme":d,children:[(0,v.jsx)(W,{pageType:s}),(0,v.jsx)("div",{className:t,children:(0,v.jsxs)("div",{className:n,children:[u&&(0,v.jsx)("div",{"aria-label":"Sidebar navigation",children:(0,v.jsx)(x,{className:l})}),(0,v.jsx)("main",{className:o,id:"main-content",children:a})]})}),(0,v.jsx)(S,{})]})}},5580(e,a,r){r.d(a,{A:()=>o});var s=r(9950);const i=r(132).Ay.button`
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
  width: ${e=>{let{$fullWidth:a}=e;return a?"100%":"auto"}};

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
`;var t=r(4414);const n=e=>{let{children:a,onClick:r,className:s,type:n,isFullWidth:o=!1,...l}=e;return(0,t.jsx)(i,{className:s,onClick:r,type:n,$fullWidth:o,...l,children:a})},o=s.memo(n)},174(e,a,r){r.r(a),r.d(a,{default:()=>b});var s=r(9950),i=r(5030),t=r(2253),n=r(357),o=r(5580),l=r(1018),c=r(7241),d=r(2388),p=r(2981),u=r(4414);const h=e=>{let{message:a,onRetry:r}=e;const{t:s}=(0,i.Bd)();return(0,u.jsx)(l.A,{hideSidebar:!0,children:(0,u.jsx)("div",{role:"alert","aria-live":"assertive",children:(0,u.jsx)(p.A,{message:a||s("error_page.default_message"),onRetry:r})})})},m=s.memo(h);var v=r(9221),x=r(8876),g=r(4582);const _=()=>{const{t:e}=(0,i.Bd)(),{isListView:a}=(0,v.t0)(),{showNotification:r}=(0,g.h)(),{data:p,isLoading:h,error:_,refetch:b}=(0,x.Zw)("ARCHIVED"),{mutate:j}=(0,x.Cr)(),{mutate:k}=(0,x.cE)(),f=(0,s.useMemo)(()=>(null===p||void 0===p?void 0:p.todos)||[],[null===p||void 0===p?void 0:p.todos]),N=(0,s.useCallback)(()=>{f.length>0&&k(f,{onSuccess:()=>r(e("notification_messages.unarchived_all"),"success")})},[f,k,r,e]),A=(0,s.useCallback)(a=>{j({id:a,newStatus:"TRASH"},{onSuccess:()=>r(e("notification_messages.todo_deleted"),"success")})},[j,r,e]),y=(0,s.useCallback)(a=>{j({id:a,newStatus:"NOTES"},{onSuccess:()=>r(e("notification_messages.todo_unarchived"),"success")})},[j,r,e]);return h?(0,u.jsx)(l.A,{children:(0,u.jsx)(d.A,{message:e("archive_page.loading")})}):_?(0,u.jsx)(m,{message:_ instanceof Error?_.message:e("archive_page.error"),onRetry:b}):(0,u.jsxs)(l.A,{pageType:"archive",children:[(0,u.jsx)("div",{className:t.A.buttonWrapper,children:(0,u.jsx)(o.A,{className:t.A.unarchiveAll,onClick:N,children:e("archive_page.unarchive_all")})}),f.length>0?(0,u.jsx)("div",{className:`${t.A.noteCardsWrapper} ${a?t.A.listView:""}`,role:"list","aria-label":"Archived notes",children:(0,u.jsx)(c.A,{children:f.map(e=>(0,u.jsx)("div",{role:"listitem",children:(0,u.jsx)(n.A,{pageType:"archive",...e,viewType:a?"list":"grid",onDelete:A,onUnarchive:y})},e.id))})}):(0,u.jsx)("p",{className:t.A.zeroActiveNotes,"aria-live":"polite",children:e("archive_page.empty")})]})},b=s.memo(_)},1494(e,a,r){r.d(a,{m:()=>s});const s=e=>{const a=null===e||void 0===e?void 0:e.profileImage;if(!a)return"";if(a.startsWith("http")||a.startsWith("blob:")||a.startsWith("data:"))return a;let r="/Module_10";r&&!r.endsWith("/")?r+="/":r||(r="/");return`${r}${a.startsWith("/")?a.slice(1):a}`}}}]);