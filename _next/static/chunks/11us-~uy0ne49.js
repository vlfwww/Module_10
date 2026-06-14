(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4858,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var a=e.i(22831),o=e.i(30917);let l=o.default.div.withConfig({displayName:"Input.styles__InputGroup",componentId:"sc-3110149d-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,r=o.default.div.withConfig({displayName:"Input.styles__Label",componentId:"sc-3110149d-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`,n=o.default.div.withConfig({displayName:"Input.styles__LabelWrapper",componentId:"sc-3110149d-2"})`
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
`,s=o.default.div.withConfig({displayName:"Input.styles__StatusIndicator",componentId:"sc-3110149d-3"})`
  display: flex;
  align-items: center;
`,d=o.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-3110149d-4"})`
  position: relative;
  width: 100%;
`,c=o.default.input.withConfig({displayName:"Input.styles__InputField",componentId:"sc-3110149d-5"})`
  background-color: var(--bg-page);
  color: ${({$isError:e})=>e?"var(--input-error)":"var(--text-secondary)"};
  border-radius: 8px;
  padding: 14px;
  font: 400 0.875rem "Poppins";
  border: 1px solid ${({$isError:e})=>e?"var(--input-error)":"var(--border-color)"};
  outline: none;
  width: 100%;
  transition: all 0.3s ease-out;

  &:focus {
    border-color: ${({$isError:e})=>e?"var(--input-error)":"var(--input-focus)"};
    color: ${({$isError:e})=>e?"var(--input-error)":"var(--text-main)"};
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
`,p=o.default.button.withConfig({displayName:"Input.styles__EyeButton",componentId:"sc-3110149d-6"})`
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
`,m=o.default.div.withConfig({displayName:"Input.styles__ErrorWrapper",componentId:"sc-3110149d-7"})`
  display: grid;
  grid-template-rows: ${({$visible:e})=>e?"1fr":"0fr"};
  margin-top: ${({$visible:e})=>e?"8px":"0px"};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,u=o.default.div.withConfig({displayName:"Input.styles__ErrorContainer",componentId:"sc-3110149d-8"})`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,x=o.default.div.withConfig({displayName:"Input.styles__ErrorTextWrapper",componentId:"sc-3110149d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
  font: 400 0.875rem "Poppins";
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`,h=o.default.span.withConfig({displayName:"Input.styles__ErrorText",componentId:"sc-3110149d-10"})`
  color: var(--input-error);
`,g=o.default.span.withConfig({displayName:"Input.styles__SuccessText",componentId:"sc-3110149d-11"})`
  color: var(--input-success);
`,f=o.default.img.withConfig({displayName:"Input.styles__InfoIcon",componentId:"sc-3110149d-12"})`
  width: 16px;
  height: 16px;
`,b=i.default.forwardRef(({label:e,iconSrc:o,type:b,errorMessage:_,isError:v,isValid:y,pageType:w,...C},k)=>{let{t:I}=(0,a.useTranslation)(),[j,N]=(0,i.useState)(!1),T=(0,i.useId)(),S="password"===b,M=S&&j?"text":b,P=y&&"signin"!==w,W=P&&"signup"===w&&S,$=v||W;return(0,t.jsxs)(l,{children:[(0,t.jsxs)(r,{children:[(0,t.jsxs)(n,{children:[o&&(0,t.jsx)("img",{src:o,alt:"","aria-hidden":"true"}),(0,t.jsx)("p",{children:e})]}),(0,t.jsxs)(s,{"aria-live":"polite",children:[P&&(0,t.jsx)("img",{src:"/assets/images/check.svg",alt:"✓"}),v&&(0,t.jsx)("img",{src:"/assets/images/cross-small.svg",alt:"✕"})]})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{ref:k,$isError:!!v,type:M,placeholder:`${I("input.enter")} ${e.toLowerCase()}`,"aria-invalid":v?"true":"false","aria-describedby":v?T:void 0,...C}),S&&(0,t.jsx)(p,{type:"button",onClick:()=>N(e=>!e),"aria-label":I("input.toggle_password"),children:(0,t.jsx)("img",{src:j?"/assets/images/fi-rr-eye-crossed.svg":"/assets/images/fi-rr-eye.svg",alt:"","aria-hidden":"true"})})]}),(0,t.jsx)(m,{$visible:!!$,id:T,role:v?"alert":void 0,children:(0,t.jsxs)(u,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)("img",{src:v?"/assets/images/fi-sr-info.svg":"/assets/images/fi-sr-thumbs-up.svg",alt:"","aria-hidden":"true"}),W?(0,t.jsx)(g,{children:I("input.password_strong")}):(0,t.jsx)(h,{children:_})]}),v&&(0,t.jsx)(f,{src:"/assets/images/Info Tooltip.svg",alt:"info","aria-hidden":"true"})]})})]})});b.displayName="Input";let _=i.default.memo(b);e.s(["default",0,_],4858)},28732,e=>{e.v({label:"Switch-module__PHpUvq__label",slider:"Switch-module__PHpUvq__slider",switch:"Switch-module__PHpUvq__switch",switchContainer:"Switch-module__PHpUvq__switchContainer",switchInput:"Switch-module__PHpUvq__switchInput"})},84725,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(28732);let o=i.default.memo(({checked:e,onChange:o,label:l})=>{let r=(0,i.useId)();return(0,t.jsxs)("div",{className:a.default.switchContainer,children:[(0,t.jsxs)("label",{className:a.default.switch,htmlFor:r,children:[(0,t.jsx)("input",{id:r,type:"checkbox",checked:e,className:a.default.switchInput,onChange:o}),(0,t.jsx)("span",{className:a.default.slider})]}),l&&(0,t.jsx)("label",{className:a.default.label,htmlFor:r,children:l})]})});e.s(["default",0,o])},47062,e=>{e.v({errorContainer:"Textarea-module__vLHIuW__errorContainer",errorText:"Textarea-module__vLHIuW__errorText",errorTextWrapper:"Textarea-module__vLHIuW__errorTextWrapper",errorWrapper:"Textarea-module__vLHIuW__errorWrapper",infoText:"Textarea-module__vLHIuW__infoText",inputError:"Textarea-module__vLHIuW__inputError",inputGroup:"Textarea-module__vLHIuW__inputGroup",label:"Textarea-module__vLHIuW__label",textareaField:"Textarea-module__vLHIuW__textareaField"})},45057,e=>{"use strict";var t=e.i(43476),i=e.i(71645),a=e.i(47062);let o=i.default.forwardRef(({label:e,iconSrc:o,className:l,value:r,onFocus:n,onBlur:s,...d},c)=>{let p="string"==typeof r?r.length:0,[m,u]=(0,i.useState)(!1),x=(0,i.useCallback)(e=>{u(!0),n?.(e)},[n]),h=(0,i.useCallback)(e=>{u(!1),s?.(e)},[s]),g=p>=200&&m;return(0,t.jsxs)("div",{className:a.default.inputGroup,children:[(0,t.jsxs)("div",{className:a.default.label,children:[o&&(0,t.jsx)("img",{src:o,alt:"pencil",className:a.default.icon}),(0,t.jsx)("p",{children:e})]}),(0,t.jsx)("textarea",{ref:c,className:`${a.default.textareaField} ${g?a.default.inputError:""} ${l}`,value:r,maxLength:200,onFocus:x,onBlur:h,...d}),(0,t.jsx)("div",{className:`${a.default.errorWrapper} ${a.default.visible}`,children:(0,t.jsx)("div",{className:a.default.errorContainer,children:(0,t.jsxs)("div",{className:a.default.errorTextWrapper,children:[(0,t.jsx)("img",{src:g?"/assets/images/fi-sr-info.svg":"/assets/images/Info Tooltip.svg",alt:"status",className:g?"":a.default.greyIcon}),(0,t.jsx)("span",{className:g?a.default.errorText:a.default.infoText,children:g?"Reached the 200 text limit":"Max 200 chars"})]})})})]})});o.displayName="Textarea";let l=i.default.memo(o);e.s(["default",0,l])},24820,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var a=e.i(22831),o=e.i(6648),l=e.i(4858),r=e.i(45057),n=e.i(84725),s=e.i(30917);let d=s.default.div.withConfig({displayName:"ChecklistSection.styles__ScrollableItems",componentId:"sc-ca2299ea-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,c=s.default.div.withConfig({displayName:"ChecklistSection.styles__ItemRow",componentId:"sc-ca2299ea-1"})`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,p=s.default.button.withConfig({displayName:"ChecklistSection.styles__DeleteItemButton",componentId:"sc-ca2299ea-2"})`
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
`,m=i.default.memo(({item:e,index:o,onTextChange:r,onDelete:n})=>{let{t:s}=(0,a.useTranslation)(),d=(0,i.useCallback)(t=>{r(e.id,t.target.value)},[e.id,r]),m=(0,i.useCallback)(()=>{n(e.id)},[e.id,n]);return(0,t.jsxs)(c,{role:"listitem",children:[(0,t.jsx)(l.default,{"data-testid":"todo-input",type:"text",label:s("checklist.todo_label",{number:o+1}),value:e.text||"",maxLength:80,onChange:d}),(0,t.jsx)(p,{type:"button",onClick:m,"aria-label":s("checklist.delete"),children:(0,t.jsx)("img",{src:"/assets/images/trash-svgrepo-com.svg",alt:"delete","aria-hidden":"true"})})]})}),u=i.default.memo(({items:e,onTextChange:i,onDelete:a})=>0===e.length?null:(0,t.jsx)(d,{role:"list",children:e.map((e,o)=>e?(0,t.jsx)(m,{item:e,index:o,onTextChange:i,onDelete:a},e.id):null)}));var x=e.i(48787),h=e.i(65658),g=e.i(22682);let f=(0,s.default)(x.animated.div).withConfig({displayName:"NoteModal.styles__Overlay",componentId:"sc-65d9c2c2-0"})`
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
`,b=(0,s.default)(x.animated.div).withConfig({displayName:"NoteModal.styles__ModalWindow",componentId:"sc-65d9c2c2-1"})`
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
`,_=s.default.form.withConfig({displayName:"NoteModal.styles__ModalForm",componentId:"sc-65d9c2c2-2"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`,v=s.default.div.withConfig({displayName:"NoteModal.styles__Header",componentId:"sc-65d9c2c2-3"})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
  min-width: 0;

  & .modal-header-title {
    font: 400 2.25rem "Poppins";
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
    & .modal-header-title {
      font: 400 1rem "Poppins";
    }
  }
  @media (max-width: 365px) {
    & .modal-header-title {
      font: 400 0.8rem "Poppins";
    }
  }
`,y=s.default.button.withConfig({displayName:"NoteModal.styles__CloseButton",componentId:"sc-65d9c2c2-4"})`
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
`,w=s.default.div.withConfig({displayName:"NoteModal.styles__FormContent",componentId:"sc-65d9c2c2-5"})`
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
`,C=s.default.div.withConfig({displayName:"NoteModal.styles__ItemsSection",componentId:"sc-65d9c2c2-6"})`
  margin-top: 8px;
`,k=s.default.div.withConfig({displayName:"NoteModal.styles__ItemsHeaderRow",componentId:"sc-65d9c2c2-7"})`
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
`,I=s.default.p.withConfig({displayName:"NoteModal.styles__ErrorMessage",componentId:"sc-65d9c2c2-8"})`
  color: var(--input-error);
  font: 500 1.063rem "Poppins";
  text-align: center;
  margin-top: 20px;
`,j=s.default.div.withConfig({displayName:"NoteModal.styles__Footer",componentId:"sc-65d9c2c2-9"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  flex-shrink: 0;
`,N=s.default.div.withConfig({displayName:"NoteModal.styles__BackgroundSection",componentId:"sc-65d9c2c2-10"})`
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,T=s.default.div.withConfig({displayName:"NoteModal.styles__BackgroundHeaderRow",componentId:"sc-65d9c2c2-11"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: var(--text-main);
    font: 400 1rem "Poppins";
    margin: 0;
  }
`,S=s.default.div.withConfig({displayName:"NoteModal.styles__PreviewContainer",componentId:"sc-65d9c2c2-12"})`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border-color);
`,M=s.default.div.withConfig({displayName:"NoteModal.styles__BackgroundPreview",componentId:"sc-65d9c2c2-13"})`
  width: 100%;
  height: 100%;
  background-image: url("${({$src:e})=>e}");
  background-size: cover;
  background-position: center;
`,P=s.default.button.withConfig({displayName:"NoteModal.styles__RemoveBgButton",componentId:"sc-65d9c2c2-14"})`
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
`,W=s.default.div.withConfig({displayName:"NoteModal.styles__NotesList",componentId:"sc-65d9c2c2-15"})`
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
`,$=s.default.p.withConfig({displayName:"NoteModal.styles__NoteText",componentId:"sc-65d9c2c2-16"})`
  font: 400 1rem "Inter";
  color: var(--text-main);
  word-break: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin-bottom: 10px;
`,H=s.default.div.withConfig({displayName:"NoteModal.styles__CheckboxRow",componentId:"sc-65d9c2c2-17"})`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  input {
    display: none;
  }

  label {
    font: 400 1rem "Inter";
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
`,L=i.default.memo(({isOpen:e,onClose:s,onSubmit:d,initialData:c})=>{let{t:p}=(0,a.useTranslation)(),{isEditMode:m,title:x,content:L,modalItems:E,currentBg:F,validationError:R,fileInputRef:B,isBgUpdating:U,modalTransition:z,handleAddItem:q,handleItemTextChange:D,handleItemDelete:O,handleBgFileChange:G,handleRemoveBg:A,handleFormSubmit:K,handleCheckboxToggle:Y,handleEditModeToggle:J,handleTitleChange:Q,handleContentChange:V,handleUploadClick:X,handleStopPropagation:Z}=function({isOpen:e,onSubmit:t,initialData:a}){let[o,l]=(0,i.useState)(!1),{mutate:r}=(0,g.useToggleChecklistItem)(),{data:n}=(0,g.useTodos)("NOTES"),[s,d]=(0,i.useState)(""),[c,p]=(0,i.useState)(""),[m,u]=(0,i.useState)([]),[x,f]=(0,i.useState)(null),[b,_]=(0,i.useState)(null),v=(0,i.useRef)(null),{mutate:y,isPending:w}=(0,g.useUpdateTodoBackground)(),C=(0,h.useTransition)(e,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{tension:280,friction:22}});(0,i.useEffect)(()=>(e?(document.body.style.overflow="hidden",l(!a)):document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e,a]),(0,i.useEffect)(()=>{if(a?.id&&n?.todos){let e=n.todos.find(e=>e.id===a.id);e&&u(e.items||[])}},[n,a?.id]),(0,i.useEffect)(()=>{if(e&&a){d(a.title||""),p(a.content||""),u(a.items||[]);let e=a.backgroundImage;f(e&&"none"!==e?e:null)}else e||(d(""),p(""),u([]),f(null));_(null)},[e,a]);let k=(0,i.useCallback)((e,t)=>{_(null),e(t)},[]),I=(0,i.useCallback)(()=>{_(null),u(e=>[...e,{id:Math.floor(2e9*Math.random()),text:"",isCompleted:!1}])},[]),j=(0,i.useCallback)((e,t)=>{_(null),u(i=>i.map(i=>i&&i.id===e?{...i,text:t}:i))},[]),N=(0,i.useCallback)(e=>{u(t=>t.filter(t=>t&&t.id!==e))},[]),T=(0,i.useCallback)(e=>{let t=e.target.files?.[0];if(!t||!a?.id)return;let i=new FileReader;i.onload=()=>{let e=i.result;y({id:a.id,backgroundImage:e},{onSuccess:()=>f(e)})},i.readAsDataURL(t)},[a?.id,y]),S=(0,i.useCallback)(()=>{a?.id&&y({id:a.id,backgroundImage:"none"},{onSuccess:()=>f(null)})},[a?.id,y]),M=(0,i.useCallback)(e=>{if(e.preventDefault(),!o)return;let i=s.trim().length>0,a=c.trim().length>0,l=m.some(e=>e&&e.text.trim().length>0);if(!i&&!a&&!l)return void _("The note cannot be empty.");let r=m.filter(e=>e&&"number"==typeof e.id&&e.text.trim().length>0).map(e=>({...e,text:e.text.trim()}));t(s.trim(),c.trim(),r)},[o,s,c,m,t]),P=(0,i.useCallback)(e=>{u(t=>t.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t)),a?.id&&r({todoId:a.id,itemId:e},{onSuccess:e=>{let t=e.toggleChecklistItem?.items;t&&u(t)},onError:()=>{u(t=>t.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t))}})},[a?.id,r]),W=(0,i.useCallback)(()=>{l(e=>!e)},[]),$=(0,i.useCallback)(e=>{k(d,e.target.value)},[k]),H=(0,i.useCallback)(e=>{k(p,e.target.value)},[k]),L=(0,i.useCallback)(()=>{v.current?.click()},[]);return{isEditMode:o,title:s,content:c,modalItems:m,currentBg:x,validationError:b,fileInputRef:v,isBgUpdating:w,modalTransition:C,handleAddItem:I,handleItemTextChange:j,handleItemDelete:N,handleBgFileChange:T,handleRemoveBg:S,handleFormSubmit:M,handleCheckboxToggle:P,handleEditModeToggle:W,handleTitleChange:$,handleContentChange:H,handleUploadClick:L,handleStopPropagation:(0,i.useCallback)(e=>{e.stopPropagation()},[])}}({isOpen:e,onSubmit:d,initialData:c}),ee=c?m?p("note_modal.edit_title"):x||`NOTE ${c.id}`:p("note_modal.create_title");return z((e,i)=>i?(0,t.jsx)(f,{onClick:s,style:{opacity:e.opacity},children:(0,t.jsx)(b,{style:e,onClick:Z,role:"dialog","aria-modal":"true",children:(0,t.jsxs)(_,{onSubmit:K,children:[(0,t.jsxs)(v,{children:[(0,t.jsx)("div",{className:"modal-header-title",children:ee}),c&&(0,t.jsx)(n.default,{"data-testid":"edit-mode-switch",label:p("note_modal.edit_mode"),checked:m,onChange:J}),(0,t.jsx)(y,{type:"button",onClick:s,"aria-label":p("common.cancel"),children:(0,t.jsx)("img",{src:"/assets/images/cross.svg",alt:"close","aria-hidden":"true"})})]}),(0,t.jsx)(w,{children:m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{"data-testid":"modal-title-input",label:p("note_modal.title_label"),iconSrc:"/assets/images/envelope.svg",maxLength:50,value:x,onChange:Q}),(0,t.jsx)(r.default,{"data-testid":"modal-description-input",label:p("note_modal.desc_label"),iconSrc:"/assets/images/pencil.svg",placeholder:p("note_modal.desc_placeholder"),value:L,onChange:V}),c&&(0,t.jsxs)(N,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)("p",{children:p("note_modal.bg_section")}),(0,t.jsx)("input",{type:"file",ref:B,style:{display:"none"},accept:".jpg,.jpeg,.png",onChange:G,disabled:U}),(0,t.jsx)(o.default,{type:"button",onClick:X,disabled:U,children:U?p("note_modal.uploading"):F?p("note_modal.change_btn"):p("note_modal.upload_btn")})]}),F&&(0,t.jsxs)(S,{children:[(0,t.jsx)(M,{$src:F}),(0,t.jsx)(P,{type:"button",onClick:A,"data-testid":"remove-bg",children:p("note_modal.remove_btn")})]})]}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)("p",{children:p("note_modal.checklist_section")}),(0,t.jsx)(o.default,{type:"button",onClick:q,"data-testid":"add-todo-btn",children:p("note_modal.add_item")})]}),(0,t.jsx)(u,{items:E,onTextChange:D,onDelete:O})]})]}):(0,t.jsxs)(W,{children:[(0,t.jsx)($,{children:L||p("note_card.no_description")}),E.length>0?E.map(e=>{let i=c?`note-${c.id}-item-${e.id}`:`item-${e.id}`;return(0,t.jsxs)(H,{children:[(0,t.jsx)("input",{type:"checkbox",id:i,checked:e.isCompleted,onChange:()=>Y(e.id)}),(0,t.jsx)("label",{htmlFor:i,children:e.text})]},e.id)}):(0,t.jsx)($,{children:p("note_card.no_items")})]})}),m&&R&&(0,t.jsx)(I,{role:"alert",children:p("note_modal.error_empty")}),m&&(0,t.jsx)(j,{children:(0,t.jsx)(o.default,{type:"submit","data-testid":"modal-submit-button",children:c?p("note_modal.save"):p("note_modal.create")})})]})})}):null)});e.s(["default",0,L],24820)},4820,e=>{e.n(e.i(24820))}]);