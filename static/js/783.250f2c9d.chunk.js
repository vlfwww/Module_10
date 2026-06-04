"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[783],{1018(e,a,s){s.d(a,{A:()=>$});var r=s(9950);const i="AppLayout_mainPageWrapper__jC7w7",t="AppLayout_contentWrapper__EfM07",n="AppLayout_pageContent__+aKSu",o="AppLayout_mainContent__ieEDt",l="AppLayout_sidebar__nWdHx";var d=s(9763),c=s(5030),p=s(8015);const u={headerWrapper:"Header_headerWrapper__+-U6q",header:"Header_header__F3i6E",logoWrapper:"Header_logoWrapper__oGSLf",burgerIcon:"Header_burgerIcon__nErVb",buttonsWrapper:"Header_buttonsWrapper__r3d0E",profileInfo:"Header_profileInfo__rTU+4",mobileMenu:"Header_mobileMenu__DUtJm",mobileHeader:"Header_mobileHeader__gHh3K",mobileAuthLinks:"Header_mobileAuthLinks__D0+yW",mobileLink:"Header_mobileLink__GWIfC",open:"Header_open__88KQT",overlay:"Header_overlay__4+15H",desktopMenu:"Header_desktopMenu__o9loT"};var h=s(7688);const m={nav:"Sidebar_nav__ymllC",navItem:"Sidebar_navItem__xmJZ3",active:"Sidebar_active__WBDWO"};var v=s(4414);const x=e=>{let{className:a}=e;const{t:s}=(0,c.Bd)();return(0,v.jsx)("aside",{className:a||m.sidebar,children:(0,v.jsxs)("nav",{className:m.nav,"aria-label":s("sidebar.nav_label"),children:[(0,v.jsx)(h.k2,{to:"/",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"notes-link",children:s("sidebar.notes")}),(0,v.jsx)(h.k2,{to:"/profile",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"profile-link",children:s("sidebar.profile")}),(0,v.jsx)(h.k2,{to:"/archive",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"archive-link",children:s("sidebar.archive")}),(0,v.jsx)(h.k2,{to:"/trash",className:e=>{let{isActive:a}=e;return`${m.navItem} ${a?m.active:""}`},"data-testid":"trash-link",children:s("sidebar.trash")})]})})};var b=s(1494),_=s(132),g=s(8355);const j=(0,_.Ay)(g.CS.div)`
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
`,f=e=>{let{onLogout:a,onClose:s,springStyle:r,menuRef:i,t:t}=e;return(0,v.jsxs)(j,{ref:i,style:r,onClick:e=>e.stopPropagation(),role:"menu",children:[(0,v.jsx)(h.N_,{to:"/profile",onClick:s,style:{textDecoration:"none",color:"inherit"},children:(0,v.jsx)(k,{children:t("header.profile")})}),(0,v.jsx)(k,{onClick:()=>{a(),s()},children:t("header.logout")})]})},N=r.memo(f);const A=s.p+"static/media/default-avatar.9fbe207878b576610c89cd54ba310607.svg";const y=s.p+"static/media/logo.981e615ddd2334a8737e87c3b419de57.svg";const C=s.p+"static/media/menu-burger.e5e0371f23c9c59fcab7c2254422b336.svg",W=e=>{let{pageType:a}=e;const{t:s}=(0,c.Bd)(),{isAuthenticated:i,user:t,logout:n}=(0,d.As)(),o=(0,h.Zp)(),[l,m]=(0,r.useState)(!1),_=(0,r.useCallback)(()=>m(e=>!e),[]),[j,k]=(0,r.useState)(!1),f=r.useRef(null),W=(0,r.useCallback)(()=>{n(),o("/signin")},[n,o]),H=(0,g.pn)(j,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{duration:150}});(0,r.useEffect)(()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&k(!1)};return j&&document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[j]);const L=(0,r.useCallback)(()=>{k(e=>!e)},[]),S=(0,b.m)(t)||A;return(0,v.jsx)("div",{className:u.headerWrapper,children:(0,v.jsxs)("header",{className:u.header,children:[(0,v.jsxs)("div",{className:u.logoWrapper,children:[(0,v.jsx)("img",{src:y,alt:"Sidekick"}),(0,v.jsx)("p",{children:"sidekick"})]}),(0,v.jsx)("button",{className:u.burgerIcon,onClick:_,"aria-label":s("header.menu"),"aria-expanded":l,children:(0,v.jsx)("img",{src:C,alt:"","aria-hidden":"true"})}),(0,v.jsx)("div",{className:u.desktopMenu,children:i?(0,v.jsxs)("div",{className:u.profileInfo,onClick:L,style:{position:"relative",cursor:"pointer"},children:[(0,v.jsx)(p.A,{src:S}),(0,v.jsx)("p",{children:null===t||void 0===t?void 0:t.username}),H((e,a)=>a&&(0,v.jsx)(N,{menuRef:f,springStyle:e,onClose:L,onLogout:W,t:s}))]}):"signin"!==a&&"signup"!==a&&(0,v.jsxs)("div",{className:u.buttonsWrapper,children:[(0,v.jsx)(h.N_,{to:"/signup",className:u.link,children:s("header.signup")}),(0,v.jsx)(h.N_,{to:"/signin",className:u.link,children:s("header.signin")})]})}),(0,v.jsxs)("nav",{className:`${u.mobileMenu} ${l?u.open:""}`,"aria-hidden":!l,children:[(0,v.jsxs)("div",{className:u.mobileHeader,children:[(0,v.jsxs)("div",{className:u.logoWrapper,children:[(0,v.jsx)("img",{src:y,alt:"Logo"}),(0,v.jsx)("p",{children:"sidekick"})]}),i&&(0,v.jsx)(p.A,{alt:"User",src:S})]}),(0,v.jsx)("div",{onClick:()=>m(!1),children:i?(0,v.jsx)(x,{}):(0,v.jsxs)("div",{className:u.mobileAuthLinks,children:[(0,v.jsx)(h.N_,{to:"/signup",className:u.mobileLink,children:s("header.signup")}),(0,v.jsx)(h.N_,{to:"/signin",className:u.mobileLink,children:s("header.signin")})]})})]}),l&&(0,v.jsx)("div",{role:"presentation",className:u.overlay,onClick:_,"aria-hidden":"true"})]})})},H="Footer_footer__Oq3H4",L=()=>(0,v.jsx)("footer",{className:H,role:"contentinfo",children:(0,v.jsx)("p",{children:"\xa9 2026 sidekick"})});var S=s(9221);const $=e=>{let{children:a,hideSidebar:s=!1,pageType:r="notes"}=e;const{theme:c}=(0,S.t0)(),{isAuthenticated:p}=(0,d.As)(),u=p&&!s;return(0,v.jsxs)("div",{className:i,"data-theme":c,children:[(0,v.jsx)(W,{pageType:r}),(0,v.jsx)("div",{className:t,children:(0,v.jsxs)("div",{className:n,children:[u&&(0,v.jsx)("div",{"aria-label":"Sidebar navigation",children:(0,v.jsx)(x,{className:l})}),(0,v.jsx)("main",{className:o,id:"main-content",children:a})]})}),(0,v.jsx)(L,{})]})}},5580(e,a,s){s.d(a,{A:()=>o});var r=s(9950);const i=s(132).Ay.button`
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
`;var t=s(4414);const n=e=>{let{children:a,onClick:s,className:r,type:n,isFullWidth:o=!1,...l}=e;return(0,t.jsx)(i,{className:r,onClick:s,type:n,$fullWidth:o,...l,children:a})},o=r.memo(n)},291(e,a,s){s.r(a),s.d(a,{default:()=>b});var r=s(9950),i=s(5030),t=s(2253),n=s(357),o=s(5580),l=s(1018),d=s(7241),c=s(2388),p=s(2981),u=s(9221),h=s(8876),m=s(4582),v=s(4414);const x=()=>{const{t:e}=(0,i.Bd)(),{isListView:a}=(0,u.t0)(),{showNotification:s}=(0,m.h)(),{data:x,isLoading:b,isError:_,error:g,refetch:j}=(0,h.Zw)("TRASH"),{mutate:k}=(0,h.np)(),{mutate:f}=(0,h.Cr)(),{mutate:N}=(0,h.ol)(),A=(0,r.useMemo)(()=>(null===x||void 0===x?void 0:x.todos)||[],[null===x||void 0===x?void 0:x.todos]),y=(0,r.useCallback)(a=>{k(a,{onSuccess:()=>{s(e("notification_messages.todo_deleted_forever"),"success")}})},[k,s,e]),C=(0,r.useCallback)(()=>{A.length>0&&N(A,{onSuccess:()=>s(e("notification_messages.trash_cleared"),"success")})},[A,N,s,e]),W=(0,r.useCallback)(a=>{f({id:a,newStatus:"ARCHIVED"},{onSuccess:()=>s(e("notification_messages.todo_archived"),"success")})},[f,s,e]);return b?(0,v.jsx)(l.A,{children:(0,v.jsx)(c.A,{message:e("trash_page.loading")})}):_?(0,v.jsx)(l.A,{children:(0,v.jsx)(p.A,{message:g instanceof Error?g.message:e("trash_page.error"),onRetry:j})}):(0,v.jsxs)(l.A,{pageType:"trash",children:[(0,v.jsx)("div",{className:t.A.buttonWrapper,children:(0,v.jsx)(o.A,{type:"button",onClick:C,children:e("trash_page.delete_all")})}),A.length>0?(0,v.jsx)("div",{className:`${t.A.noteCardsWrapper} ${a?t.A.listView:""}`,role:"list","aria-label":"Trash bin notes",children:(0,v.jsx)(d.A,{children:A.map(e=>(0,v.jsx)("div",{role:"listitem",children:(0,v.jsx)(n.A,{pageType:"trash",...e,viewType:a?"list":"grid",onDelete:y,onArchive:W})},e.id))})}):(0,v.jsx)("p",{className:t.A.zeroActiveNotes,"aria-live":"polite",children:e("trash_page.empty")})]})},b=r.memo(x)},1494(e,a,s){s.d(a,{m:()=>r});const r=e=>{const a=null===e||void 0===e?void 0:e.profileImage;if(!a)return"";if(a.startsWith("http")||a.startsWith("blob:")||a.startsWith("data:"))return a;let s="/Module_10";s&&!s.endsWith("/")?s+="/":s||(s="/");return`${s}${a.startsWith("/")?a.slice(1):a}`}}}]);