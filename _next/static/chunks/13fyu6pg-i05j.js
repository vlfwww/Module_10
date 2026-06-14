(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4858,e=>{"use strict";var a=e.i(43476),r=e.i(71645);e.i(85269);var t=e.i(22831),s=e.i(30917);let i=s.default.div.withConfig({displayName:"Input.styles__InputGroup",componentId:"sc-3110149d-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,l=s.default.div.withConfig({displayName:"Input.styles__Label",componentId:"sc-3110149d-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`,o=s.default.div.withConfig({displayName:"Input.styles__LabelWrapper",componentId:"sc-3110149d-2"})`
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
`,n=s.default.div.withConfig({displayName:"Input.styles__StatusIndicator",componentId:"sc-3110149d-3"})`
  display: flex;
  align-items: center;
`,d=s.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-3110149d-4"})`
  position: relative;
  width: 100%;
`,u=s.default.input.withConfig({displayName:"Input.styles__InputField",componentId:"sc-3110149d-5"})`
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
`,p=s.default.button.withConfig({displayName:"Input.styles__EyeButton",componentId:"sc-3110149d-6"})`
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
`,m=s.default.div.withConfig({displayName:"Input.styles__ErrorWrapper",componentId:"sc-3110149d-7"})`
  display: grid;
  grid-template-rows: ${({$visible:e})=>e?"1fr":"0fr"};
  margin-top: ${({$visible:e})=>e?"8px":"0px"};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,c=s.default.div.withConfig({displayName:"Input.styles__ErrorContainer",componentId:"sc-3110149d-8"})`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,f=s.default.div.withConfig({displayName:"Input.styles__ErrorTextWrapper",componentId:"sc-3110149d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
  font: 400 0.875rem "Poppins";
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`,_=s.default.span.withConfig({displayName:"Input.styles__ErrorText",componentId:"sc-3110149d-10"})`
  color: var(--input-error);
`,g=s.default.span.withConfig({displayName:"Input.styles__SuccessText",componentId:"sc-3110149d-11"})`
  color: var(--input-success);
`,v=s.default.img.withConfig({displayName:"Input.styles__InfoIcon",componentId:"sc-3110149d-12"})`
  width: 16px;
  height: 16px;
`,x=r.default.forwardRef(({label:e,iconSrc:s,type:x,errorMessage:h,isError:y,isValid:b,pageType:I,...j},w)=>{let{t:T}=(0,t.useTranslation)(),[N,C]=(0,r.useState)(!1),E=(0,r.useId)(),W="password"===x,F=W&&N?"text":x,P=b&&"signin"!==I,S=P&&"signup"===I&&W,L=y||S;return(0,a.jsxs)(i,{children:[(0,a.jsxs)(l,{children:[(0,a.jsxs)(o,{children:[s&&(0,a.jsx)("img",{src:s,alt:"","aria-hidden":"true"}),(0,a.jsx)("p",{children:e})]}),(0,a.jsxs)(n,{"aria-live":"polite",children:[P&&(0,a.jsx)("img",{src:"/assets/images/check.svg",alt:"✓"}),y&&(0,a.jsx)("img",{src:"/assets/images/cross-small.svg",alt:"✕"})]})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)(u,{ref:w,$isError:!!y,type:F,placeholder:`${T("input.enter")} ${e.toLowerCase()}`,"aria-invalid":y?"true":"false","aria-describedby":y?E:void 0,...j}),W&&(0,a.jsx)(p,{type:"button",onClick:()=>C(e=>!e),"aria-label":T("input.toggle_password"),children:(0,a.jsx)("img",{src:N?"/assets/images/fi-rr-eye-crossed.svg":"/assets/images/fi-rr-eye.svg",alt:"","aria-hidden":"true"})})]}),(0,a.jsx)(m,{$visible:!!L,id:E,role:y?"alert":void 0,children:(0,a.jsxs)(c,{children:[(0,a.jsxs)(f,{children:[(0,a.jsx)("img",{src:y?"/assets/images/fi-sr-info.svg":"/assets/images/fi-sr-thumbs-up.svg",alt:"","aria-hidden":"true"}),S?(0,a.jsx)(g,{children:T("input.password_strong")}):(0,a.jsx)(_,{children:h})]}),y&&(0,a.jsx)(v,{src:"/assets/images/Info Tooltip.svg",alt:"info","aria-hidden":"true"})]})})]})});x.displayName="Input";let h=r.default.memo(x);e.s(["default",0,h],4858)},47062,e=>{e.v({errorContainer:"Textarea-module__vLHIuW__errorContainer",errorText:"Textarea-module__vLHIuW__errorText",errorTextWrapper:"Textarea-module__vLHIuW__errorTextWrapper",errorWrapper:"Textarea-module__vLHIuW__errorWrapper",infoText:"Textarea-module__vLHIuW__infoText",inputError:"Textarea-module__vLHIuW__inputError",inputGroup:"Textarea-module__vLHIuW__inputGroup",label:"Textarea-module__vLHIuW__label",textareaField:"Textarea-module__vLHIuW__textareaField"})},45057,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(47062);let s=r.default.forwardRef(({label:e,iconSrc:s,className:i,value:l,onFocus:o,onBlur:n,...d},u)=>{let p="string"==typeof l?l.length:0,[m,c]=(0,r.useState)(!1),f=(0,r.useCallback)(e=>{c(!0),o?.(e)},[o]),_=(0,r.useCallback)(e=>{c(!1),n?.(e)},[n]),g=p>=200&&m;return(0,a.jsxs)("div",{className:t.default.inputGroup,children:[(0,a.jsxs)("div",{className:t.default.label,children:[s&&(0,a.jsx)("img",{src:s,alt:"pencil",className:t.default.icon}),(0,a.jsx)("p",{children:e})]}),(0,a.jsx)("textarea",{ref:u,className:`${t.default.textareaField} ${g?t.default.inputError:""} ${i}`,value:l,maxLength:200,onFocus:f,onBlur:_,...d}),(0,a.jsx)("div",{className:`${t.default.errorWrapper} ${t.default.visible}`,children:(0,a.jsx)("div",{className:t.default.errorContainer,children:(0,a.jsxs)("div",{className:t.default.errorTextWrapper,children:[(0,a.jsx)("img",{src:g?"/assets/images/fi-sr-info.svg":"/assets/images/Info Tooltip.svg",alt:"status",className:g?"":t.default.greyIcon}),(0,a.jsx)("span",{className:g?t.default.errorText:t.default.infoText,children:g?"Reached the 200 text limit":"Max 200 chars"})]})})})]})});s.displayName="Textarea";let i=r.default.memo(s);e.s(["default",0,i])},64922,e=>{e.v({avatarImage:"ProfileForm-module__v183EG__avatarImage",avatarInfo:"ProfileForm-module__v183EG__avatarInfo",avatarSection:"ProfileForm-module__v183EG__avatarSection",changePhotoBtn:"ProfileForm-module__v183EG__changePhotoBtn",infoForm:"ProfileForm-module__v183EG__infoForm",saveBtn:"ProfileForm-module__v183EG__saveBtn",serverErrorText:"ProfileForm-module__v183EG__serverErrorText",serverSuccessText:"ProfileForm-module__v183EG__serverSuccessText",statusMessageSection:"ProfileForm-module__v183EG__statusMessageSection",userName:"ProfileForm-module__v183EG__userName"})},16431,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(53145);e.i(85269);var s=e.i(22831),i=e.i(64922),l=e.i(97815),o=e.i(20922),n=e.i(4858),d=e.i(45057),u=e.i(6648),p=e.i(84724),m=e.i(17064),c=e.i(71268);let f=r.default.memo(()=>{let{t:e}=(0,s.useTranslation)(),{user:f,updateUserInfo:_,isLoading:g}=(0,l.useAuth)(),v=(0,r.useRef)(null),{showNotification:x}=(0,p.useNotification)(),[h,y]=(0,r.useState)(null),b=h||(0,c.getUserAvatarPath)(f)||"/assets/images/default-avatar.svg",{register:I,handleSubmit:j,reset:w,watch:T,formState:{errors:N,touchedFields:C,isValid:E}}=(0,t.useForm)({defaultValues:{username:f?.username||"",email:f?.email||"",description:f?.description||""},mode:"onTouched"}),W=T("username")||"",F=T("email")||"",P=T("description")||"";(0,r.useEffect)(()=>{f&&(w({username:f.username||"",email:f.email||"",description:f.description||""}),y(null))},[f,w]);let S=(0,r.useCallback)(async a=>{try{await _({...a,profileImage:h||f?.profileImage||""}),y(null),x(e("profile_form.notifications.updated"),"success")}catch(a){x(a instanceof Error?a.message:e("profile_form.notifications.error"),"error")}},[h,x,e,_,f?.profileImage]),L=(0,r.useCallback)(a=>{let r=a.target.files?.[0];if(!r||!r.type.startsWith("image/"))return void x(e("profile_form.notifications.invalid_image"),"warning");let t=new FileReader;t.onloadend=()=>{y(t.result)},t.readAsDataURL(r)},[x,e]),k=(0,r.useCallback)(()=>{v.current?.click()},[]);return(0,a.jsxs)("div",{className:i.default.infoForm,role:"form","aria-labelledby":"profile-title",children:[(0,a.jsx)("h2",{id:"profile-title",className:i.default.srOnly,style:{display:"none"},children:e("profile_form.title")}),(0,a.jsxs)("div",{className:i.default.avatarSection,children:[(0,a.jsx)("input",{type:"file",ref:v,style:{display:"none"},accept:"image/*",onChange:L,"aria-hidden":"true"}),(0,a.jsx)(m.Avatar,{alt:f?.username||"User",src:b,className:i.default.avatarImage}),(0,a.jsxs)("div",{className:i.default.avatarInfo,children:[(0,a.jsx)("p",{className:i.default.userName,children:f?.username}),(0,a.jsx)("button",{type:"button",className:i.default.changePhotoBtn,onClick:k,disabled:g,children:e("profile_form.change_photo")})]})]}),(0,a.jsxs)("form",{onSubmit:j(S),children:[(0,a.jsx)(n.default,{"data-testid":"username-input",label:e("profile_form.username"),iconSrc:"/assets/images/fi-sr-user.svg",pageType:"profile",disabled:g,isError:C.username&&!!N.username,isValid:C.username&&!N.username&&W.length>=3,errorMessage:N.username?.message,...I("username",{required:e("profile_form.errors.username_required"),minLength:{value:3,message:e("profile_form.errors.username_short")}})}),(0,a.jsx)(n.default,{label:e("profile_form.email"),iconSrc:"/assets/images/envelope.svg",type:"email",pageType:"profile",disabled:g,isError:C.email&&!!N.email,isValid:C.email&&!N.email&&F.length>0,errorMessage:N.email?.message,...I("email",{required:e("profile_form.errors.email_required"),validate:a=>(0,o.validateEmail)(a)||e("profile_form.errors.email_invalid")})}),(0,a.jsx)(d.default,{label:e("profile_form.description"),iconSrc:"/assets/images/pencil.svg",placeholder:e("profile_form.desc_placeholder"),disabled:g,value:P,...I("description",{maxLength:{value:200,message:e("profile_form.errors.desc_max")}})}),(0,a.jsx)(u.default,{type:"submit","data-testid":"update-btn",className:i.default.saveBtn,disabled:!E||g,children:g?e("profile_form.saving"):e("profile_form.save_changes")})]})]})});e.s(["default",0,f])},33369,e=>{e.n(e.i(16431))}]);