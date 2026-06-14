(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4858,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var s=e.i(22831),a=e.i(30917);let r=a.default.div.withConfig({displayName:"Input.styles__InputGroup",componentId:"sc-3110149d-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,l=a.default.div.withConfig({displayName:"Input.styles__Label",componentId:"sc-3110149d-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`,n=a.default.div.withConfig({displayName:"Input.styles__LabelWrapper",componentId:"sc-3110149d-2"})`
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
`,o=a.default.div.withConfig({displayName:"Input.styles__StatusIndicator",componentId:"sc-3110149d-3"})`
  display: flex;
  align-items: center;
`,d=a.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-3110149d-4"})`
  position: relative;
  width: 100%;
`,u=a.default.input.withConfig({displayName:"Input.styles__InputField",componentId:"sc-3110149d-5"})`
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
`,p=a.default.button.withConfig({displayName:"Input.styles__EyeButton",componentId:"sc-3110149d-6"})`
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
`,m=a.default.div.withConfig({displayName:"Input.styles__ErrorWrapper",componentId:"sc-3110149d-7"})`
  display: grid;
  grid-template-rows: ${({$visible:e})=>e?"1fr":"0fr"};
  margin-top: ${({$visible:e})=>e?"8px":"0px"};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,c=a.default.div.withConfig({displayName:"Input.styles__ErrorContainer",componentId:"sc-3110149d-8"})`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,h=a.default.div.withConfig({displayName:"Input.styles__ErrorTextWrapper",componentId:"sc-3110149d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
  font: 400 0.875rem "Poppins";
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`,f=a.default.span.withConfig({displayName:"Input.styles__ErrorText",componentId:"sc-3110149d-10"})`
  color: var(--input-error);
`,g=a.default.span.withConfig({displayName:"Input.styles__SuccessText",componentId:"sc-3110149d-11"})`
  color: var(--input-success);
`,x=a.default.img.withConfig({displayName:"Input.styles__InfoIcon",componentId:"sc-3110149d-12"})`
  width: 16px;
  height: 16px;
`,_=i.default.forwardRef(({label:e,iconSrc:a,type:_,errorMessage:b,isError:y,isValid:v,pageType:w,...j},I)=>{let{t:C}=(0,s.useTranslation)(),[N,T]=(0,i.useState)(!1),S=(0,i.useId)(),k="password"===_,F=k&&N?"text":_,A=v&&"signin"!==w,E=A&&"signup"===w&&k,G=y||E;return(0,t.jsxs)(r,{children:[(0,t.jsxs)(l,{children:[(0,t.jsxs)(n,{children:[a&&(0,t.jsx)("img",{src:a,alt:"","aria-hidden":"true"}),(0,t.jsx)("p",{children:e})]}),(0,t.jsxs)(o,{"aria-live":"polite",children:[A&&(0,t.jsx)("img",{src:"/assets/images/check.svg",alt:"✓"}),y&&(0,t.jsx)("img",{src:"/assets/images/cross-small.svg",alt:"✕"})]})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(u,{ref:I,$isError:!!y,type:F,placeholder:`${C("input.enter")} ${e.toLowerCase()}`,"aria-invalid":y?"true":"false","aria-describedby":y?S:void 0,...j}),k&&(0,t.jsx)(p,{type:"button",onClick:()=>T(e=>!e),"aria-label":C("input.toggle_password"),children:(0,t.jsx)("img",{src:N?"/assets/images/fi-rr-eye-crossed.svg":"/assets/images/fi-rr-eye.svg",alt:"","aria-hidden":"true"})})]}),(0,t.jsx)(m,{$visible:!!G,id:S,role:y?"alert":void 0,children:(0,t.jsxs)(c,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)("img",{src:y?"/assets/images/fi-sr-info.svg":"/assets/images/fi-sr-thumbs-up.svg",alt:"","aria-hidden":"true"}),E?(0,t.jsx)(g,{children:C("input.password_strong")}):(0,t.jsx)(f,{children:b})]}),y&&(0,t.jsx)(x,{src:"/assets/images/Info Tooltip.svg",alt:"info","aria-hidden":"true"})]})})]})});_.displayName="Input";let b=i.default.memo(_);e.s(["default",0,b],4858)},24765,e=>{e.v({authCard:"AuthForm-module__wS5QrG__authCard",authContainer:"AuthForm-module__wS5QrG__authContainer",authForm:"AuthForm-module__wS5QrG__authForm",authPageWrapper:"AuthForm-module__wS5QrG__authPageWrapper",errorText:"AuthForm-module__wS5QrG__errorText",footerText:"AuthForm-module__wS5QrG__footerText",link:"AuthForm-module__wS5QrG__link",policyText:"AuthForm-module__wS5QrG__policyText",submitButton:"AuthForm-module__wS5QrG__submitButton",subtitle:"AuthForm-module__wS5QrG__subtitle"})},71636,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(22016),a=e.i(53145);e.i(85269);var r=e.i(22831),l=e.i(24765),n=e.i(6648),o=e.i(4858),d=e.i(97815),u=e.i(23183);let p=i.default.memo(({title:e,subtitle:p,buttonText:m,onSubmit:c,error:h,setError:f,pageType:g,validationRules:x})=>{let{isLoading:_}=(0,d.useAuth)(),{t:b}=(0,r.useTranslation)(),{register:y,handleSubmit:v,formState:{errors:w,touchedFields:j},watch:I}=(0,a.useForm)({defaultValues:{email:"",password:""},mode:"onTouched"}),C=I("email"),N=I("password"),T=(0,i.useCallback)(async e=>{h&&f(""),await c(e.email,e.password)},[h,c,f]),S=(0,i.useCallback)(e=>{e.preventDefault(),v(T)(e)},[v,T]);return(0,t.jsx)("div",{className:l.default.authContainer,children:(0,t.jsxs)("div",{className:l.default.authCard,role:"form","aria-labelledby":"form-title",children:[(0,t.jsx)("h1",{id:"form-title",className:l.default.title,children:e}),(0,t.jsx)("p",{className:l.default.subtitle,children:p}),(0,t.jsxs)("form",{className:l.default.authForm,onSubmit:S,children:[(0,t.jsx)(o.default,{label:b("auth.email"),iconSrc:"/assets/images/envelope.svg",type:"email",pageType:g,disabled:_,isError:j.email&&!!w.email,isValid:j.email&&!w.email&&C.length>0,errorMessage:w.email?.message,...y("email",x.email)}),(0,t.jsx)(o.default,{label:b("auth.password"),iconSrc:"/assets/images/eye.svg",type:"password",pageType:g,disabled:_,isValid:j.password&&!w.password&&N.length>0,isError:"signin"===g&&!!h||j.password&&!!w.password,errorMessage:"signin"===g?h:w.password?.message,...y("password",x.password)}),(0,t.jsx)(n.default,{type:"submit",className:l.default.submitButton,disabled:_,isFullWidth:!0,children:_?b("auth.please_wait"):m})]}),h&&"signup"===g&&(0,t.jsx)("p",{className:l.default.errorText,role:"alert",children:h}),"signin"===g?(0,t.jsxs)("p",{className:l.default.footerText,children:[b("auth.signin_prompt"),(0,t.jsx)(s.default,{href:_?"#":u.routes.signup,prefetch:!1,className:_?l.default.linkDisabled:l.default.link,children:b("auth.signup_link")})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{className:l.default.policyText,children:[b("auth.terms_prefix"),(0,t.jsx)("span",{className:l.default.link,children:b("auth.terms")})," ",(0,t.jsx)("br",{}),b("auth.privacy")]}),(0,t.jsxs)("p",{className:l.default.footerText,children:[b("auth.signup_prompt"),(0,t.jsx)(s.default,{href:_?"#":u.routes.signin,prefetch:!1,className:_?l.default.linkDisabled:l.default.link,children:b("auth.signin_link")})]})]})]})})});e.s(["default",0,p])},42448,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(18566);e.i(85269);var a=e.i(22831),r=e.i(97815),l=e.i(71636),n=e.i(6713),o=e.i(20922);let d=i.default.memo(()=>{let{t:e}=(0,a.useTranslation)(),[d,u]=(0,i.useState)(""),{login:p,isAuthenticated:m}=(0,r.useAuth)(),c=(0,s.useRouter)(),h=(0,s.useSearchParams)().get("from")||"/";(0,i.useEffect)(()=>{m&&c.replace(h)},[m,c,h]);let f=(0,i.useCallback)(async(t,i)=>{try{u(""),await p(t,i)}catch{u(e("signin.error_failed"))}},[p,e]),g=(0,i.useMemo)(()=>({email:{required:e("signin.email_req"),validate:t=>(0,o.validateEmail)(t)||e("signin.email_invalid")},password:{required:e("signin.pass_req")}}),[e]);return(0,t.jsx)(n.default,{hideSidebar:!0,pageType:"signin",children:(0,t.jsx)(l.default,{title:e("signin.title"),subtitle:e("signin.subtitle"),buttonText:e("signin.button"),onSubmit:f,error:d,setError:u,pageType:"signin",validationRules:g},"signin-form")})});e.s(["default",0,d])}]);