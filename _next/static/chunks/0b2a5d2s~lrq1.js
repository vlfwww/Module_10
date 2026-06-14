(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4858,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var s=e.i(22831),a=e.i(30917);let r=a.default.div.withConfig({displayName:"Input.styles__InputGroup",componentId:"sc-3110149d-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,n=a.default.div.withConfig({displayName:"Input.styles__Label",componentId:"sc-3110149d-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`,l=a.default.div.withConfig({displayName:"Input.styles__LabelWrapper",componentId:"sc-3110149d-2"})`
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
`,p=a.default.input.withConfig({displayName:"Input.styles__InputField",componentId:"sc-3110149d-5"})`
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
`,c=a.default.button.withConfig({displayName:"Input.styles__EyeButton",componentId:"sc-3110149d-6"})`
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
`,u=a.default.div.withConfig({displayName:"Input.styles__ErrorWrapper",componentId:"sc-3110149d-7"})`
  display: grid;
  grid-template-rows: ${({$visible:e})=>e?"1fr":"0fr"};
  margin-top: ${({$visible:e})=>e?"8px":"0px"};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,m=a.default.div.withConfig({displayName:"Input.styles__ErrorContainer",componentId:"sc-3110149d-8"})`
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
`,g=a.default.span.withConfig({displayName:"Input.styles__ErrorText",componentId:"sc-3110149d-10"})`
  color: var(--input-error);
`,f=a.default.span.withConfig({displayName:"Input.styles__SuccessText",componentId:"sc-3110149d-11"})`
  color: var(--input-success);
`,x=a.default.img.withConfig({displayName:"Input.styles__InfoIcon",componentId:"sc-3110149d-12"})`
  width: 16px;
  height: 16px;
`,v=i.default.forwardRef(({label:e,iconSrc:a,type:v,errorMessage:y,isError:w,isValid:_,pageType:b,...I},j)=>{let{t:C}=(0,s.useTranslation)(),[N,P]=(0,i.useState)(!1),k=(0,i.useId)(),$="password"===v,S=$&&N?"text":v,T=_&&"signin"!==b,U=T&&"signup"===b&&$,E=w||U;return(0,t.jsxs)(r,{children:[(0,t.jsxs)(n,{children:[(0,t.jsxs)(l,{children:[a&&(0,t.jsx)("img",{src:a,alt:"","aria-hidden":"true"}),(0,t.jsx)("p",{children:e})]}),(0,t.jsxs)(o,{"aria-live":"polite",children:[T&&(0,t.jsx)("img",{src:"/assets/images/check.svg",alt:"✓"}),w&&(0,t.jsx)("img",{src:"/assets/images/cross-small.svg",alt:"✕"})]})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(p,{ref:j,$isError:!!w,type:S,placeholder:`${C("input.enter")} ${e.toLowerCase()}`,"aria-invalid":w?"true":"false","aria-describedby":w?k:void 0,...I}),$&&(0,t.jsx)(c,{type:"button",onClick:()=>P(e=>!e),"aria-label":C("input.toggle_password"),children:(0,t.jsx)("img",{src:N?"/assets/images/fi-rr-eye-crossed.svg":"/assets/images/fi-rr-eye.svg",alt:"","aria-hidden":"true"})})]}),(0,t.jsx)(u,{$visible:!!E,id:k,role:w?"alert":void 0,children:(0,t.jsxs)(m,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)("img",{src:w?"/assets/images/fi-sr-info.svg":"/assets/images/fi-sr-thumbs-up.svg",alt:"","aria-hidden":"true"}),U?(0,t.jsx)(f,{children:C("input.password_strong")}):(0,t.jsx)(g,{children:y})]}),w&&(0,t.jsx)(x,{src:"/assets/images/Info Tooltip.svg",alt:"info","aria-hidden":"true"})]})})]})});v.displayName="Input";let y=i.default.memo(v);e.s(["default",0,y],4858)},28732,e=>{e.v({label:"Switch-module__PHpUvq__label",slider:"Switch-module__PHpUvq__slider",switch:"Switch-module__PHpUvq__switch",switchContainer:"Switch-module__PHpUvq__switchContainer",switchInput:"Switch-module__PHpUvq__switchInput"})},84725,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(28732);let a=i.default.memo(({checked:e,onChange:a,label:r})=>{let n=(0,i.useId)();return(0,t.jsxs)("div",{className:s.default.switchContainer,children:[(0,t.jsxs)("label",{className:s.default.switch,htmlFor:n,children:[(0,t.jsx)("input",{id:n,type:"checkbox",checked:e,className:s.default.switchInput,onChange:a}),(0,t.jsx)("span",{className:s.default.slider})]}),r&&(0,t.jsx)("label",{className:s.default.label,htmlFor:n,children:r})]})});e.s(["default",0,a])}]);