"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[136],{6382(e,t,n){n.d(t,{A:()=>T});var o=n(9950),i=n(5030);const r={notesList:"NoteCard_notesList__GL9Uv",noteText:"NoteCard_noteText__8HpoR",checkboxRow:"NoteCard_checkboxRow__v-TW0"};var a=n(4414);const s=e=>{let{items:t,showCheckboxes:n,onCheckboxChange:o,noteId:s,content:d}=e;const{t:l}=(0,i.Bd)(),u=Array.isArray(t)?t:[];return(0,a.jsx)("div",{className:r.notesList,children:n?u.length>0?u.map(e=>{const t=`note-${s}-item-${e.id}`;return(0,a.jsxs)("div",{className:r.checkboxRow,children:[(0,a.jsx)("input",{type:"checkbox",id:t,checked:e.isCompleted,onChange:()=>o(e.id)}),(0,a.jsx)("label",{htmlFor:t,children:e.text})]},e.id)}):(0,a.jsx)("p",{className:r.noteText,children:l("note_card.no_items")}):(0,a.jsx)("div",{className:r.contentWrapper,children:(0,a.jsx)("p",{className:r.noteText,children:d||l("note_card.no_description")})})})},d=o.memo(s);var l=n(132),u=n(8355);const c={"bottom-right":l.AH`
    top: 100%;
    left: 100%;
    right: auto;
    bottom: auto;
  `,"bottom-left":l.AH`
    top: 100%;
    right: 100%;
    left: auto;
    bottom: auto;
  `,"top-right":l.AH`
    bottom: 100%;
    left: 100%;
    top: auto;
    right: auto;
  `,"top-left":l.AH`
    bottom: 100%;
    right: 100%;
    top: auto;
    left: auto;
  `},m={"bottom-right":"top left","bottom-left":"top right","top-right":"bottom left","top-left":"bottom right"},p=(0,l.Ay)(u.CS.div)`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-content);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
  font: 400 1.125rem "Poppins";
  position: absolute;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  color: var(--text-main);
  transform-origin: ${e=>{let{$placement:t}=e;return m[t]}};

  ${e=>{let{$placement:t}=e;return c[t]}}
`,h=l.Ay.div`
  padding: 8px 16px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-menu-link-hover);
    border-radius: 8px;
  }
`,g=e=>{let{pageType:t,onDelete:n,onUnarchive:r,onArchive:s,onToggleCheckboxes:d,showCheckboxes:l,onUncheckAll:u,placement:c="bottom-right",menuRef:m,springStyle:g}=e;const{t:b}=(0,i.Bd)(),x=(0,o.useCallback)((e,t)=>{"Enter"!==e.key&&" "!==e.key||!t||(e.preventDefault(),t())},[]);return(0,a.jsxs)(p,{ref:m,$placement:c,style:g,onClick:e=>e.stopPropagation(),role:"menu","aria-label":"Note options",children:["notes"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:n,onKeyDown:e=>x(e,n),children:b("kebab_menu.delete")}),(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:d,onKeyDown:e=>x(e,d),children:b(l?"kebab_menu.hide_checkboxes":"kebab_menu.show_checkboxes")}),u&&(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:u,onKeyDown:e=>x(e,u),children:b("kebab_menu.uncheck_all")}),(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:s,onKeyDown:e=>x(e,s),children:b("kebab_menu.archive")})]}),"trash"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:n,onKeyDown:e=>x(e,n),children:b("kebab_menu.delete_forever")}),(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:s,onKeyDown:e=>x(e,s),children:b("kebab_menu.archive")})]}),"archive"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:r,onKeyDown:e=>x(e,r),children:b("kebab_menu.unarchive")}),(0,a.jsx)(h,{role:"menuitem",tabIndex:0,onClick:n,onKeyDown:e=>x(e,n),children:b("kebab_menu.delete")})]})]})},b=o.memo(g);const x=n.p+"static/media/menu.57f5d71a0bb86061fd1d1371db89d4a7.svg";var k=n(3721);const v=l.Ay.div`
  background-color: var(--bg-layout-edge);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 18px;
  position: relative;
  width: ${e=>{let{$viewType:t}=e;return"list"===t?"100%":"280px"}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  z-index: ${e=>{let{$isMenuOpen:t}=e;return t?20:1}};
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  background-image: ${e=>{let{$backgroundImage:t}=e;return t?`url("${t}")`:"none"}};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${e=>{let{$viewType:t}=e;return"list"===t&&"min-height: 100px; display: flex; align-items: flex-start; gap: 40px; flex-direction:column;"}}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--input-focus);
    z-index: ${e=>{let{$isMenuOpen:t}=e;return t?20:2}};
  }
  height: 100%;
  @media (max-width: 1040px) {
    width: 100%;
  }
`,f=l.Ay.p`
  color: var(--text-main);
  font: 600 1.25rem "Inter";
  margin-bottom: ${e=>{let{$viewType:t}=e;return"list"===t?"0":"16px"}};
  min-width: ${e=>{let{$viewType:t}=e;return"list"===t?"200px":"auto"}};
`,y=l.Ay.div`
  position: absolute;
  bottom: 18px;
  right: 18px;
  z-index: 1;
`,w=l.Ay.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: var(--bg-menu-link-hover);
    border-radius: 4px;
  }

  & img {
    width: 20px;
    height: 20px;

    [data-theme="dark"] & {
      filter: invert(1);
    }
  }
`,C=["bottom-left","top-right","top-left"];function _(e,t,n){switch(e){case"bottom-right":return{top:t.bottom,left:t.right,bottom:t.bottom+n.height,right:t.right+n.width};case"bottom-left":return{top:t.bottom,left:t.left-n.width,bottom:t.bottom+n.height,right:t.left};case"top-right":return{top:t.top-n.height,left:t.right,bottom:t.top,right:t.right+n.width};case"top-left":return{top:t.top-n.height,left:t.left-n.width,bottom:t.top,right:t.left}}}function $(e,t,n){return e.top>=n&&e.left>=n&&e.bottom<=t.height-n&&e.right<=t.width-n}function I(e,t,n){const[i,r]=(0,o.useState)("bottom-right");return(0,o.useLayoutEffect)(()=>{if(!e)return;const o=()=>{const e=t.current,o=n.current;if(!e||!o)return;const i=e.getBoundingClientRect(),a=o.getBoundingClientRect();r(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{width:window.innerWidth,height:window.innerHeight},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8;const i="bottom-right";if($(_(i,e,t),n,o))return i;for(const r of C)if($(_(r,e,t),n,o))return r;return"top-left"}(i,{width:a.width,height:a.height}))};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e,t,n]),i}const j=e=>{let{pageType:t,id:n,onDelete:r,onUnarchive:s,onArchive:l,onEdit:c,title:m,content:p,viewType:h,items:g=[],backgroundImage:C=null,..._}=e;const{t:$}=(0,i.Bd)(),[j,T]=(0,o.useState)(!1),[S,L]=(0,o.useState)(!1),A=(0,o.useRef)(null),K=(0,o.useRef)(null),E=I(j,A,K),{mutate:P}=(0,k.lt)(),{mutate:F}=(0,k.y2)(),D=(0,u.pn)(j,{from:{opacity:0,transform:"scale(0.9)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.9)"},config:{tension:300,friction:20}}),N=(0,o.useCallback)(e=>{P({todoId:n,itemId:e})},[n,P]),q=(0,o.useCallback)(()=>{F(n),T(!1)},[n,F]),z=(0,o.useCallback)(()=>{L(e=>!e),T(!1)},[]),R=(0,o.useCallback)(()=>r(n),[n,r]),Q=(0,o.useCallback)(()=>null===l||void 0===l?void 0:l(n),[n,l]),U=(0,o.useCallback)(()=>null===s||void 0===s?void 0:s(n),[n,s]),W=(0,o.useCallback)(()=>T(!1),[]),B=(0,o.useCallback)(e=>{e.stopPropagation(),T(e=>!e)},[]),H=(0,o.useCallback)(()=>{"notes"===t&&c&&c({id:n,title:m,content:p,items:g,..._})},[t,c,n,m,p,g,_]),M=null===g||void 0===g?void 0:g.some(e=>e.isCompleted);return(0,a.jsxs)(v,{$viewType:h,$isMenuOpen:j,$backgroundImage:C,onMouseLeave:W,onClick:"notes"===t?H:void 0,"aria-expanded":j,children:[(0,a.jsx)(f,{$viewType:h,children:m}),(0,a.jsx)("div",{onClick:e=>e.stopPropagation(),children:(0,a.jsx)(d,{items:g,showCheckboxes:S,onCheckboxChange:N,noteId:n,content:p})}),(0,a.jsxs)(y,{ref:A,children:[(0,a.jsx)(w,{onClick:B,"aria-label":$("note_list.menu_label"),"aria-haspopup":"menu",children:(0,a.jsx)("img",{src:x,alt:"","aria-hidden":"true"})}),D((e,n)=>n?(0,a.jsx)(b,{pageType:t,onDelete:R,onToggleCheckboxes:z,showCheckboxes:S,onArchive:Q,onUnarchive:U,onUncheckAll:S&&M?q:void 0,placement:E,menuRef:K,springStyle:e}):null)]})]})},T=o.memo(j)},3721(e,t,n){n.d(t,{Cr:()=>u,gt:()=>c,np:()=>l,ol:()=>g,Zw:()=>d,lt:()=>p,cE:()=>b,y2:()=>h,YG:()=>x,TN:()=>m,fN:()=>k});var o=n(7091),i=n(5441),r=n(1778);var a=n(3854),s=n(4929);const d=e=>(0,o.I)({queryKey:["todosList",e],queryFn:async()=>await(0,a.L)("\n  query GetTodos($status: String) {\n    todos(status: $status) {\n      id\n      title\n      content\n      items {\n        id\n        text\n        isCompleted\n      }\n      createdAt\n      status\n      backgroundImage\n    }\n  }\n",{status:e})}),l=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>(0,a.L)("\n  mutation DeleteTodo($id: Int!) {\n    deleteTodo(id: $id) {\n      id\n      success\n    }\n  }\n",{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},u=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>{let{id:t,newStatus:n}=e;return(0,a.L)("\n  mutation ChangeTodoStatus($id: Int!, $newStatus: String!) {\n    changeTodoStatus(id: $id, newStatus: $newStatus) {\n      id\n      status\n    }\n  }\n",{id:t,newStatus:n})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},c=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>(0,a.L)("\n  mutation CreateTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      id\n      title\n      content\n      items {\n        id\n        text\n        isCompleted\n      }\n    }\n  }\n",{input:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},m=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>{let{id:t,input:n}=e;return(0,a.L)("\n  mutation UpdateTodo($id: Int!, $input: UpdateTodoInput!) {\n    updateTodo(id: $id, input: $input) {\n      id\n      title\n      content\n      items {\n        id\n        text\n        isCompleted\n      }\n    }\n  }\n",{id:t,input:n})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},p=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>{let{todoId:t,itemId:n}=e;return(0,a.L)("\n  mutation ToggleChecklistItem($todoId: Int!, $itemId: Int!) {\n    toggleChecklistItem(todoId: $todoId, itemId: $itemId) {\n      id\n      title\n      content\n      status\n      items {\n        id\n        text\n        isCompleted\n      }\n    }\n  }\n",{todoId:t,itemId:n})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},h=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>(0,a.L)("\n  mutation UncheckAllItems($id: Int!) {\n    uncheckAllItems(id: $id) {\n      id\n      title\n      content\n      status\n      items {\n        id\n        text\n        isCompleted\n      }\n    }\n  }\n",{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},g=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:async e=>{if(!e||0===e.length)return null;const t=`\n        mutation DeleteAllTrash {\n          ${e.map(e=>`delete_${e.id}: deleteTodo(id: ${e.id}) { id success }`).join("\n")}\n        }`;return(0,a.L)(t,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},b=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:async e=>{if(!e||0===e.length)return null;const t=`\n        mutation UnarchiveAll {\n          ${e.map(e=>`unarchive_${e.id}: changeTodoStatus(id: ${e.id}, newStatus: NOTES) { id }`).join("\n")}\n        }\n      `;return(0,a.L)(t,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},x=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:async e=>{const t=localStorage.getItem("access_token");return(await s.A.put("/api/background",{backgroundImage:e},{headers:{Authorization:`Bearer ${t}`}})).data},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},k=()=>{const e=(0,i.jE)();return(0,r.n)({mutationFn:e=>{let{id:t,backgroundImage:n}=e;return(0,a.L)("\n  mutation UpdateTodoBackground($id: Int!, $backgroundImage: String!) {\n    updateTodoBackground(id: $id, backgroundImage: $backgroundImage) {\n      id\n      title\n      content\n      status\n      backgroundImage\n      items {\n        id\n        text\n        isCompleted\n      }\n    }\n  }\n",{id:t,backgroundImage:n})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})}},2253(e,t,n){n.d(t,{A:()=>o});const o={buttonWrapper:"Pages_buttonWrapper__BCRkW",noteCardsWrapper:"Pages_noteCardsWrapper__dLu6Z",listView:"Pages_listView__hsS1p",profileCard:"Pages_profileCard__wg0--",actions:"Pages_actions__jHjHY",actionsTitle:"Pages_actionsTitle__RS4mm",userInfo:"Pages_userInfo__agy8P",zeroActiveNotes:"Pages_zeroActiveNotes__Cn2od",errorPageWrapper:"Pages_errorPageWrapper__WrMin",errorContent:"Pages_errorContent__-Qz7z"}}}]);