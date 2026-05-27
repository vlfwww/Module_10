"use strict";(globalThis.webpackChunknotes_app=globalThis.webpackChunknotes_app||[]).push([[14],{2690(e,t,i){i.d(t,{A:()=>a});i(9950);const a=i.p+"static/media/fi-sr-info-grey.c564f9735bec7a485f5dd2ef05f051c2.svg"},2809(e,t,i){i.d(t,{A:()=>a});i(9950);const a=i.p+"static/media/pencil.ed03a3d45b6c2da9994c52c1b90df9d5.svg"},4984(e,t,i){i.d(t,{A:()=>d});var a=i(9950);const n={inputGroup:"Textarea_inputGroup__cqkHG",label:"Textarea_label__SHZ-Y",textareaField:"Textarea_textareaField__qdZMP",inputError:"Textarea_inputError__oXs6X",errorWrapper:"Textarea_errorWrapper__Wu+Ie",errorContainer:"Textarea_errorContainer__aRyES",errorTextWrapper:"Textarea_errorTextWrapper__ofAyG",errorText:"Textarea_errorText__PLJMy",infoText:"Textarea_infoText__u6dZM"};var r=i(9382),o=i(2690),s=i(4414);const l=a.forwardRef((e,t)=>{let{label:i,iconSrc:l,className:d,value:c,onFocus:p,onBlur:x,...u}=e;const m=200,h="string"===typeof c?c.length:0,[g,b]=(0,a.useState)(!1),f=h>=m&&g;return(0,s.jsxs)("div",{className:n.inputGroup,children:[(0,s.jsxs)("div",{className:n.label,children:[l&&(0,s.jsx)("img",{src:l,alt:"pencil",className:n.icon}),(0,s.jsx)("p",{children:i})]}),(0,s.jsx)("textarea",{ref:t,className:`${n.textareaField} ${f?n.inputError:""} ${d}`,value:c,maxLength:m,onFocus:e=>{b(!0),p&&p(e)},onBlur:e=>{b(!1),x&&x(e)},...u}),(0,s.jsx)("div",{className:`${n.errorWrapper} ${n.visible}`,children:(0,s.jsx)("div",{className:n.errorContainer,children:(0,s.jsxs)("div",{className:n.errorTextWrapper,children:[(0,s.jsx)("img",{src:f?r.A:o.A,alt:"status",className:f?"":n.greyIcon}),(0,s.jsx)("span",{className:f?n.errorText:n.infoText,children:f?"Reached the 200 text limit":"Max 200 chars"})]})})})]})});l.displayName="Textarea";const d=l},9143(e,t,i){i.r(t),i.d(t,{default:()=>Y});var a=i(9950),n=i(5030),r=i(2253),o=i(6382);const s="AuthMessage_container__ZPLmM",l="AuthMessage_signIn__vxsxP",d="AuthMessage_signUp__XjH-8";var c=i(7688),p=i(4414);const x=()=>{const{t:e}=(0,n.Bd)();return(0,p.jsxs)("div",{className:s,role:"status",children:[(0,p.jsxs)("p",{className:l,children:[e("auth_message.signin_part1"),(0,p.jsx)(c.N_,{to:"/signin",children:e("auth_message.signin_link")}),e("auth_message.signin_part2")]}),(0,p.jsxs)("p",{className:d,children:[e("auth_message.signup_part1"),(0,p.jsx)(c.N_,{to:"/signup",children:e("auth_message.signup_link")})]})]})};var u=i(8355),m=i(5580),h=i(2626),g=i(4984);const b=i.p+"static/media/trash-svgrepo-com.514d4b79865de96e1c23ba575a54b360.svg";var f=i(132);const v=f.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_=f.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,y=f.Ay.button`
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
`,j=e=>{let{items:t,onTextChange:i,onDelete:a}=e;const{t:r}=(0,n.Bd)();return 0===t.length?null:(0,p.jsx)(v,{role:"list",children:t.map((e,t)=>e?(0,p.jsxs)(_,{role:"listitem",children:[(0,p.jsx)(h.A,{type:"text",label:r("checklist.todo_label",{number:t+1}),value:e.text||"",onChange:t=>i(e.id,t.target.value)}),(0,p.jsx)(y,{type:"button",onClick:()=>a(e.id),"aria-label":r("checklist.delete"),children:(0,p.jsx)("img",{src:b,alt:"","aria-hidden":"true"})})]},e.id):null)})},k=a.memo(j);const A=i.p+"static/media/cross.77c54657d0ca3ce67802c44a0b7a8784.svg";var w=i(4914),C=i(2809),T=i(3721);const S=(0,f.Ay)(u.CS.div)`
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
`,N=(0,f.Ay)(u.CS.div)`
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
`,P=f.Ay.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`,E=f.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
  flex-shrink: 0;
  & p {
    font: 400 2.25rem "Poppins";
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    & p {
      font: 400 1rem "Poppins";
    }
  }
  @media (max-width: 365px) {
    & p {
      font: 400 0.8rem "Poppins";
    }
  }
`,M=f.Ay.button`
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
`,$=f.Ay.div`
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
`,R=f.Ay.div`
  margin-top: 8px;
`,W=f.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  & p {
    color: var(--text-main);
    font: 400 1rem "Poppins";
    margin: 0;
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`,D=f.Ay.p`
  color: var(--input-error);
  font: 500 1.063rem "Poppins";
  text-align: center;
  margin-top: 20px;
`,I=f.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  flex-shrink: 0;
`,z=f.Ay.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,B=f.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: var(--text-main);
    font: 400 1rem "Poppins";
    margin: 0;
  }
`,F=f.Ay.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border-color);
`,L=f.Ay.div`
  width: 100%;
  height: 100%;
  background-image: url("${e=>{let{$src:t}=e;return t}}");
  background-size: cover;
  background-position: center;
`,G=f.Ay.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  color: #fff;
  font: 400 0.75rem "Poppins";
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
  }
`,H=e=>{let{isOpen:t,onClose:i,onSubmit:r,initialData:o}=e;const{t:s}=(0,n.Bd)(),[l,d]=(0,a.useState)(""),[c,x]=(0,a.useState)(""),[b,f]=(0,a.useState)([]),[v,_]=(0,a.useState)(null),[y,j]=(0,a.useState)(null),H=(0,a.useRef)(null),{mutate:Z,isPending:O}=(0,T.fN)(),V=(0,u.pn)(t,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{tension:280,friction:22}});(0,a.useEffect)(()=>(document.body.style.overflow=t?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[t]),(0,a.useEffect)(()=>{if(t&&o){d(o.title||""),x(o.content||""),f(o.items||[]);const e=o.backgroundImage;_(e&&"none"!==e?e:null)}else t||(d(""),x(""),f([]),_(null));j(null)},[t,o]);const X=(0,a.useCallback)((e,t)=>{j(null),e(t)},[]),q=(0,a.useCallback)(()=>{j(null),f(e=>[...e,{id:Math.floor(2e9*Math.random()),text:"",isCompleted:!1}])},[]),U=(0,a.useCallback)((e,t)=>{j(null),f(i=>i.map(i=>i&&i.id===e?{...i,text:t}:i))},[]),J=(0,a.useCallback)(e=>{f(t=>t.filter(t=>t&&t.id!==e))},[]),Y=e=>{var t;const i=null===(t=e.target.files)||void 0===t?void 0:t[0];if(!i||null===o||void 0===o||!o.id)return;const a=new FileReader;a.onload=()=>{const e=a.result;Z({id:o.id,backgroundImage:e},{onSuccess:()=>_(e)})},a.readAsDataURL(i)},K=(0,a.useCallback)(()=>{null!==o&&void 0!==o&&o.id&&Z({id:o.id,backgroundImage:"none"},{onSuccess:()=>_(null)})},[null===o||void 0===o?void 0:o.id,Z]),Q=e=>{e.preventDefault();const t=l.trim().length>0,i=c.trim().length>0,a=b.some(e=>e&&e.text.trim().length>0);if(!t&&!i&&!a)return void j("The note cannot be empty.");const n=b.filter(e=>e&&"number"===typeof e.id&&e.text.trim().length>0).map(e=>({...e,text:e.text.trim()}));r(l.trim(),c.trim(),n)};return V((e,t)=>t?(0,p.jsx)(S,{onClick:i,style:{opacity:e.opacity},children:(0,p.jsx)(N,{style:e,onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true",children:(0,p.jsxs)(P,{onSubmit:Q,children:[(0,p.jsxs)(E,{children:[(0,p.jsx)("p",{children:s(o?"note_modal.edit_title":"note_modal.create_title")}),(0,p.jsx)(M,{type:"button",onClick:i,"aria-label":s("common.cancel"),children:(0,p.jsx)("img",{src:A,alt:"","aria-hidden":"true"})})]}),(0,p.jsxs)($,{children:[(0,p.jsx)(h.A,{label:s("note_modal.title_label"),iconSrc:w.A,value:l,onChange:e=>X(d,e.target.value)}),(0,p.jsx)(g.A,{label:s("note_modal.desc_label"),iconSrc:C.A,placeholder:s("note_modal.desc_placeholder"),value:c,onChange:e=>X(x,e.target.value)}),o&&(0,p.jsxs)(z,{children:[(0,p.jsxs)(B,{children:[(0,p.jsx)("p",{children:s("note_modal.bg_section")}),(0,p.jsx)("input",{type:"file",ref:H,style:{display:"none"},accept:".jpg,.jpeg,.png",onChange:Y,disabled:O}),(0,p.jsx)(m.A,{type:"button",onClick:()=>{var e;return null===(e=H.current)||void 0===e?void 0:e.click()},disabled:O,children:s(O?"note_modal.uploading":v?"note_modal.change_btn":"note_modal.upload_btn")})]}),v&&(0,p.jsxs)(F,{children:[(0,p.jsx)(L,{$src:v}),(0,p.jsx)(G,{type:"button",onClick:K,children:s("note_modal.remove_btn")})]})]}),(0,p.jsxs)(R,{children:[(0,p.jsxs)(W,{children:[(0,p.jsx)("p",{children:s("note_modal.checklist_section")}),(0,p.jsx)(m.A,{type:"button",onClick:q,children:s("note_modal.add_item")})]}),(0,p.jsx)(k,{items:b,onTextChange:U,onDelete:J})]})]}),y&&(0,p.jsx)(D,{role:"alert",children:s("note_modal.error_empty")}),(0,p.jsx)(I,{children:(0,p.jsx)(m.A,{type:"submit",children:s(o?"note_modal.save":"note_modal.create")})})]})})}):null)};var Z=i(5706),O=i(7241),V=i(9763),X=i(708),q=i(2981),U=i(2388),J=i(4582);const Y=()=>{const{t:e}=(0,n.Bd)(),{isAuthenticated:t}=(0,V.As)(),{isListView:i}=(0,X.t)(),{showNotification:s}=(0,J.h)(),{data:l,isLoading:d,isError:c,error:u,refetch:h}=(0,T.Zw)("NOTES"),{mutate:g}=(0,T.Cr)(),{mutate:b}=(0,T.gt)(),{mutate:f}=(0,T.TN)(),[v,_]=(0,a.useState)(!1),[y,j]=(0,a.useState)(null),k=(null===l||void 0===l?void 0:l.todos)||[],A=(0,a.useCallback)((t,i,a)=>{if(y)f({id:y.id,input:{title:t,content:i,items:a}},{onSuccess:()=>{s(e("notification_messages.todo_updated"),"success"),j(null)}});else{const n=a.map(e=>({text:e.text}));b({title:t,content:i,items:n},{onSuccess:()=>{s(e("notification_messages.todo_created"),"success"),_(!1)}})}},[y,b,f,s,e]),w=(0,a.useCallback)(t=>{g({id:t,newStatus:"TRASH"},{onSuccess:()=>s(e("notification_messages.todo_deleted"),"success")})},[g,s,e]),C=(0,a.useCallback)(t=>{g({id:t,newStatus:"ARCHIVED"},{onSuccess:()=>s(e("notification_messages.todo_archived"),"success")})},[g,s,e]),S=(0,a.useCallback)(e=>{j(e)},[]),N=(0,a.useCallback)(()=>{_(!1),j(null)},[]),P=(0,a.useCallback)(()=>{_(!0)},[]);return t?d?(0,p.jsx)(Z.A,{children:(0,p.jsx)(U.A,{message:e("main_page.loading")})}):c?(0,p.jsx)(Z.A,{children:(0,p.jsx)(q.A,{message:u instanceof Error?u.message:e("main_page.error"),onRetry:h})}):(0,p.jsxs)(Z.A,{pageType:"notes",children:[(0,p.jsx)("div",{className:r.A.buttonWrapper,children:(0,p.jsx)(m.A,{onClick:P,children:e("main_page.create_note")})}),0===k.length?(0,p.jsx)("p",{className:r.A.zeroActiveNotes,children:e("main_page.empty")}):(0,p.jsx)("div",{className:`${r.A.noteCardsWrapper} ${i?r.A.listView:""}`,role:"list","aria-label":"Notes list",children:(0,p.jsx)(O.A,{children:k.map(e=>(0,p.jsx)("div",{role:"listitem",children:(0,p.jsx)(o.A,{pageType:"notes",...e,viewType:i?"list":"grid",onDelete:w,onArchive:C,onEdit:S})},e.id))})}),(0,p.jsx)(H,{isOpen:v||!!y,onClose:N,onSubmit:A,initialData:y})]}):(0,p.jsx)(Z.A,{children:(0,p.jsx)(x,{})})}}}]);