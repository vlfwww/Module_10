"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[14],{2690(e,t,i){i.d(t,{A:()=>a});i(9950);const a=i.p+"static/media/fi-sr-info-grey.c564f9735bec7a485f5dd2ef05f051c2.svg"},2809(e,t,i){i.d(t,{A:()=>a});i(9950);const a=i.p+"static/media/pencil.ed03a3d45b6c2da9994c52c1b90df9d5.svg"},4560(e,t,i){i.d(t,{A:()=>p});var a=i(9950);const n="Switch_switchContainer__jIFwf",r="Switch_switch__LMz3O",o="Switch_switchInput__l607N",s="Switch_slider__IWjo6",l="Switch_label__oz7RZ";var d=i(4414);const c=e=>{let{checked:t,onChange:i,label:c,...p}=e;const x=(0,a.useId)();return(0,d.jsxs)("div",{className:n,"data-testid":`switch-${c}`,...p,children:[(0,d.jsxs)("label",{className:r,htmlFor:x,children:[(0,d.jsx)("input",{id:x,type:"checkbox",checked:t,className:o,onChange:i}),(0,d.jsx)("span",{className:s})]}),c&&(0,d.jsx)("label",{className:l,htmlFor:x,children:c})]})},p=a.memo(c)},4984(e,t,i){i.d(t,{A:()=>d});var a=i(9950);const n={inputGroup:"Textarea_inputGroup__cqkHG",label:"Textarea_label__SHZ-Y",textareaField:"Textarea_textareaField__qdZMP",inputError:"Textarea_inputError__oXs6X",errorWrapper:"Textarea_errorWrapper__Wu+Ie",errorContainer:"Textarea_errorContainer__aRyES",errorTextWrapper:"Textarea_errorTextWrapper__ofAyG",errorText:"Textarea_errorText__PLJMy",infoText:"Textarea_infoText__u6dZM"};var r=i(9382),o=i(2690),s=i(4414);const l=a.forwardRef((e,t)=>{let{label:i,iconSrc:l,className:d,value:c,onFocus:p,onBlur:x,...m}=e;const u=200,h="string"===typeof c?c.length:0,[g,b]=(0,a.useState)(!1),f=h>=u&&g;return(0,s.jsxs)("div",{className:n.inputGroup,children:[(0,s.jsxs)("div",{className:n.label,children:[l&&(0,s.jsx)("img",{src:l,alt:"pencil",className:n.icon}),(0,s.jsx)("p",{children:i})]}),(0,s.jsx)("textarea",{ref:t,className:`${n.textareaField} ${f?n.inputError:""} ${d}`,value:c,maxLength:u,onFocus:e=>{b(!0),p&&p(e)},onBlur:e=>{b(!1),x&&x(e)},...m}),(0,s.jsx)("div",{className:`${n.errorWrapper} ${n.visible}`,children:(0,s.jsx)("div",{className:n.errorContainer,children:(0,s.jsxs)("div",{className:n.errorTextWrapper,children:[(0,s.jsx)("img",{src:f?r.A:o.A,alt:"status",className:f?"":n.greyIcon}),(0,s.jsx)("span",{className:f?n.errorText:n.infoText,children:f?"Reached the 200 text limit":"Max 200 chars"})]})})})]})});l.displayName="Textarea";const d=l},9143(e,t,i){i.r(t),i.d(t,{default:()=>ie});var a=i(9950),n=i(5030),r=i(2253),o=i(357);const s="AuthMessage_container__ZPLmM",l="AuthMessage_signIn__vxsxP",d="AuthMessage_signUp__XjH-8";var c=i(7688),p=i(4414);const x=()=>{const{t:e}=(0,n.Bd)();return(0,p.jsxs)("div",{className:s,role:"status",children:[(0,p.jsxs)("p",{className:l,children:[e("auth_message.signin_part1"),(0,p.jsx)(c.N_,{to:"/signin",children:e("auth_message.signin_link")}),e("auth_message.signin_part2")]}),(0,p.jsxs)("p",{className:d,children:[e("auth_message.signup_part1"),(0,p.jsx)(c.N_,{to:"/signup",children:e("auth_message.signup_link")})]})]})};var m=i(8355),u=i(5580),h=i(2626),g=i(4984),b=i(4560);const f=i.p+"static/media/trash-svgrepo-com.514d4b79865de96e1c23ba575a54b360.svg";var v=i(132);const _=v.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=v.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,j=v.Ay.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  & img {
    width: 24px;
    height: 24px;
  }
  [data-theme="dark"] & img {
    filter: invert(1);
  }
`,w=e=>{let{items:t,onTextChange:i,onDelete:a}=e;const{t:r}=(0,n.Bd)();return 0===t.length?null:(0,p.jsx)(_,{role:"list",children:t.map((e,t)=>e?(0,p.jsxs)(y,{role:"listitem","data-testid":"check-row",children:[(0,p.jsx)(h.A,{type:"text",label:r("checklist.todo_label",{number:t+1}),value:e.text||"",onChange:t=>i(e.id,t.target.value),"data-testid":"todo-input"}),(0,p.jsx)(j,{type:"button",onClick:()=>a(e.id),"aria-label":r("checklist.delete"),children:(0,p.jsx)("img",{src:f,alt:"","aria-hidden":"true"})})]},e.id):null)})},k=a.memo(w);var A=i(8876);const C=i.p+"static/media/cross.77c54657d0ca3ce67802c44a0b7a8784.svg";var S=i(4914),N=i(2809);const T=(0,v.Ay)(m.CS.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--modal-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(20px);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    position: fixed;
    top: 48px;
    align-items: center;
    padding-top: 20px;
    height: calc(100vh - 48px);
  }
`,E=(0,v.Ay)(m.CS.div)`
  background-color: var(--bg-modal);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  color: var(--text-main);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    width: 95%;
    padding: 12px;
  }
`,I=v.Ay.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`,$=v.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
  flex-shrink: 0;
  & p {
    font:
      400 2.25rem "Poppins",
      sans-serif;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    & p {
      font:
        400 1rem "Poppins",
        sans-serif;
    }
  }
  @media (max-width: 365px) {
    & p {
      font:
        400 0.8rem "Poppins",
        sans-serif;
    }
  }
`,P=v.Ay.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  [data-theme="dark"] & img {
    filter: invert(1);
  }
  & img {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }
`,F=v.Ay.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }
`,M=v.Ay.div`
  margin-top: 8px;
`,R=v.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  & p {
    color: var(--text-main);
    font:
      400 1rem "Poppins",
      sans-serif;
    margin: 0;
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`,W=v.Ay.p`
  color: var(--input-error);
  font:
    500 1.063rem "Poppins",
    sans-serif;
  text-align: center;
  margin-top: 20px;
`,z=v.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  flex-shrink: 0;
`,D=v.Ay.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,L=v.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: var(--text-main);
    font:
      400 1rem "Poppins",
      sans-serif;
    margin: 0;
  }
`,Z=v.Ay.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border-color);
`,B=v.Ay.div`
  width: 100%;
  height: 100%;
  background-image: url("${e=>{let{$src:t}=e;return t}}");
  background-size: cover;
  background-position: center;
`,O=v.Ay.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  color: #fff;
  font:
    400 0.75rem "Poppins",
    sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
  }
`,G=v.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  min-height: 0;
  max-height: 550px;
  overflow-y: scroll;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 4px;
  }
`,H=v.Ay.p`
  font:
    400 1rem "Inter",
    sans-serif;
  color: var(--text-main);
  word-break: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin-bottom: 10px;
`,V=v.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  input {
    display: none;
  }

  label {
    font:
      400 1rem "Inter",
      sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    color: var(--text-main);
    flex: 1;
    min-width: 0;
    word-break: break-word;
    white-space: pre-wrap;
  }

  label::before {
    content: "";
    display: inline-block;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-color);
    border-radius: 4px;
    background-color: var(--bg-content);
    transition: all 0.2s;
  }

  input:checked + label::before {
    background-color: var(--accent-color);
    content: "✓";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }

  label:active::before {
    outline: 4px solid rgba(211, 244, 224, 1);
  }
`,X=e=>{let{isOpen:t,onClose:i,onSubmit:r,initialData:o}=e;const{t:s}=(0,n.Bd)(),[l,d]=(0,a.useState)(!1),{mutate:c}=(0,A.lt)(),{data:x}=(0,A.Zw)("NOTES"),[f,v]=(0,a.useState)(""),[_,y]=(0,a.useState)(""),[j,w]=(0,a.useState)([]),[X,q]=(0,a.useState)(null),[U,J]=(0,a.useState)(null),Y=(0,a.useRef)(null),{mutate:K,isPending:Q}=(0,A.fN)(),ee=(0,m.pn)(t,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{tension:280,friction:22}});(0,a.useEffect)(()=>(t?(document.body.style.overflow="hidden",d(!o)):document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t,o]),(0,a.useEffect)(()=>{if(null!==o&&void 0!==o&&o.id&&null!==x&&void 0!==x&&x.todos){const e=x.todos.find(e=>e.id===o.id);e&&w(e.items||[])}},[x,null===o||void 0===o?void 0:o.id]),(0,a.useEffect)(()=>{if(t&&o){v(o.title||""),y(o.content||""),w(o.items||[]);const e=o.backgroundImage;q(e&&"none"!==e?e:null)}else t||(v(""),y(""),w([]),q(null));J(null)},[t,o]);const te=(0,a.useCallback)((e,t)=>{J(null),e(t)},[]),ie=(0,a.useCallback)(()=>{J(null),w(e=>[...e,{id:Math.floor(2e9*Math.random()),text:"",isCompleted:!1}])},[]),ae=(0,a.useCallback)((e,t)=>{J(null),w(i=>i.map(i=>i&&i.id===e?{...i,text:t}:i))},[]),ne=(0,a.useCallback)(e=>{w(t=>t.filter(t=>t&&t.id!==e))},[]),re=e=>{var t;const i=null===(t=e.target.files)||void 0===t?void 0:t[0];if(!i||null===o||void 0===o||!o.id)return;const a=new FileReader;a.onload=()=>{const e=a.result;K({id:o.id,backgroundImage:e},{onSuccess:()=>q(e)})},a.readAsDataURL(i)},oe=(0,a.useCallback)(()=>{null!==o&&void 0!==o&&o.id&&K({id:o.id,backgroundImage:"none"},{onSuccess:()=>q(null)})},[null===o||void 0===o?void 0:o.id,K]),se=e=>{if(e.preventDefault(),!l)return;const t=f.trim().length>0,i=_.trim().length>0,a=j.some(e=>e&&e.text.trim().length>0);if(!t&&!i&&!a)return void J("The note cannot be empty.");const n=j.filter(e=>e&&"number"===typeof e.id&&e.text.trim().length>0).map(e=>({...e,text:e.text.trim()}));r(f.trim(),_.trim(),n)},le=(0,a.useCallback)(e=>{w(t=>t.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t)),null!==o&&void 0!==o&&o.id&&c({todoId:o.id,itemId:e},{onSuccess:(e,t,i,a)=>{const n=e;n&&n.items&&w(n.items)},onError:()=>{w(t=>t.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t))}})},[null===o||void 0===o?void 0:o.id,c]),de=o?l?s("note_modal.edit_title"):f||`NOTE ${o.id}`:s("note_modal.create_title");return ee((e,t)=>t?(0,p.jsx)(T,{onClick:i,style:{opacity:e.opacity},children:(0,p.jsx)(E,{style:e,onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true",children:(0,p.jsxs)(I,{onSubmit:se,children:[(0,p.jsxs)($,{children:[(0,p.jsx)("p",{children:de}),o&&(0,p.jsx)(b.A,{"data-testid":"edit-mode-switch",label:s("note_modal.edit_mode"),checked:l,onChange:()=>d(!l)}),(0,p.jsx)(P,{type:"button",onClick:i,"aria-label":s("common.cancel"),children:(0,p.jsx)("img",{src:C,alt:"","aria-hidden":"true"})})]}),(0,p.jsx)(F,{children:l?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.A,{"data-testid":"modal-title-input",label:s("note_modal.title_label"),iconSrc:S.A,maxLength:50,value:f,onChange:e=>te(v,e.target.value)}),(0,p.jsx)(g.A,{"data-testid":"modal-description-input",label:s("note_modal.desc_label"),iconSrc:N.A,placeholder:s("note_modal.desc_placeholder"),value:_,onChange:e=>te(y,e.target.value)}),o&&(0,p.jsxs)(D,{children:[(0,p.jsxs)(L,{children:[(0,p.jsx)("p",{children:s("note_modal.bg_section")}),(0,p.jsx)("input",{type:"file",ref:Y,style:{display:"none"},accept:".jpg,.jpeg,.png",onChange:re,disabled:Q}),(0,p.jsx)(u.A,{type:"button",onClick:()=>{var e;return null===(e=Y.current)||void 0===e?void 0:e.click()},disabled:Q,children:s(Q?"note_modal.uploading":X?"note_modal.change_btn":"note_modal.upload_btn")})]}),X&&(0,p.jsxs)(Z,{children:[(0,p.jsx)(B,{$src:X}),(0,p.jsx)(O,{type:"button",onClick:oe,"data-testid":"remove-bg",children:s("note_modal.remove_btn")})]})]}),(0,p.jsxs)(M,{children:[(0,p.jsxs)(R,{children:[(0,p.jsx)("p",{children:s("note_modal.checklist_section")}),(0,p.jsx)(u.A,{type:"button",onClick:ie,"data-testid":"add-todo-btn",children:s("note_modal.add_item")})]}),(0,p.jsx)(k,{items:j,onTextChange:ae,onDelete:ne})]})]}):(0,p.jsxs)(G,{children:[(0,p.jsx)(H,{children:_||s("note_card.no_description")}),j.length>0?j.map(e=>{const t=o?`note-${o.id}-item-${e.id}`:`item-${e.id}`;return(0,p.jsxs)(V,{children:[(0,p.jsx)("input",{type:"checkbox",id:t,checked:e.isCompleted,onChange:()=>le(e.id)}),(0,p.jsx)("label",{htmlFor:t,children:e.text})]},e.id)}):(0,p.jsx)(H,{children:s("note_card.no_items")})]})}),l&&U&&(0,p.jsx)(W,{role:"alert",children:s("note_modal.error_empty")}),l&&(0,p.jsx)(z,{children:(0,p.jsx)(u.A,{type:"submit","data-testid":"modal-submit-button",children:s(o?"note_modal.save":"note_modal.create")})})]})})}):null)},q=a.memo(X);var U=i(1018),J=i(7241),Y=i(9763),K=i(9221),Q=i(2981),ee=i(2388),te=i(4582);const ie=()=>{const{t:e}=(0,n.Bd)(),{isAuthenticated:t}=(0,Y.As)(),{isListView:i}=(0,K.t0)(),{showNotification:s}=(0,te.h)(),{data:l,isLoading:d,isError:c,error:m,refetch:h}=(0,A.Zw)("NOTES"),{mutate:g}=(0,A.Cr)(),{mutate:b}=(0,A.gt)(),{mutate:f}=(0,A.TN)(),[v,_]=(0,a.useState)(!1),[y,j]=(0,a.useState)(null),w=(null===l||void 0===l?void 0:l.todos)||[],k=(0,a.useCallback)((t,i,a)=>{if(y)f({id:y.id,input:{title:t,content:i,items:a}},{onSuccess:()=>{s(e("notification_messages.todo_updated"),"success"),j(null)}});else{const n=a.map(e=>({text:e.text}));b({title:t,content:i,items:n},{onSuccess:()=>{s(e("notification_messages.todo_created"),"success"),_(!1)}})}},[y,b,f,s,e]),C=(0,a.useCallback)(t=>{g({id:t,newStatus:"TRASH"},{onSuccess:()=>s(e("notification_messages.todo_deleted"),"success")})},[g,s,e]),S=(0,a.useCallback)(t=>{g({id:t,newStatus:"ARCHIVED"},{onSuccess:()=>s(e("notification_messages.todo_archived"),"success")})},[g,s,e]),N=(0,a.useCallback)(e=>{j(e)},[]),T=(0,a.useCallback)(()=>{_(!1),j(null)},[]),E=(0,a.useCallback)(()=>{_(!0)},[]);return t?d?(0,p.jsx)(U.A,{children:(0,p.jsx)(ee.A,{message:e("main_page.loading")})}):c?(0,p.jsx)(U.A,{children:(0,p.jsx)(Q.A,{message:m instanceof Error?m.message:e("main_page.error"),onRetry:h})}):(0,p.jsxs)(U.A,{pageType:"notes",children:[(0,p.jsx)("div",{className:r.A.buttonWrapper,children:(0,p.jsx)(u.A,{onClick:E,children:e("main_page.create_note")})}),0===w.length?(0,p.jsx)("p",{className:r.A.zeroActiveNotes,children:e("main_page.empty")}):(0,p.jsx)("div",{className:`${r.A.noteCardsWrapper} ${i?r.A.listView:""}`,role:"list","aria-label":"Notes list","data-testid":"notes-list-container",children:(0,p.jsx)(J.A,{children:w.map(e=>(0,p.jsx)("div",{role:"listitem",children:(0,p.jsx)(o.A,{pageType:"notes",...e,viewType:i?"list":"grid",onDelete:C,onArchive:S,onEdit:N})},e.id))})}),(0,p.jsx)(q,{isOpen:v||!!y,onClose:T,onSubmit:k,initialData:y})]}):(0,p.jsx)(U.A,{children:(0,p.jsx)(x,{})})}}}]);