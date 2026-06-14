(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22682,e=>{"use strict";let t;var i=e.i(71645),s=e.i(14272),r=e.i(40143),a=e.i(15823),n=e.i(19273),o=class extends a.Subscribable{#e;#t=void 0;#i;#s;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,n.shallowEqualObjects)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,n.hashKey)(t.mutationKey)!==(0,n.hashKey)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(e){this.#r(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#r(),this.#a()}mutate(e,t){return this.#s=t,this.#i?.removeObserver(this),this.#i=this.#e.getMutationCache().build(this.#e,this.options),this.#i.addObserver(this),this.#i.execute(e)}#r(){let e=this.#i?.state??(0,s.getDefaultState)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#a(e){r.notifyManager.batch(()=>{if(this.#s&&this.hasListeners()){let t=this.#t.variables,i=this.#t.context,s={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#s.onSuccess?.(e.data,t,i,s)}catch(e){Promise.reject(e)}try{this.#s.onSettled?.(e.data,null,t,i,s)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#s.onError?.(e.error,t,i,s)}catch(e){Promise.reject(e)}try{this.#s.onSettled?.(void 0,e.error,t,i,s)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}},l=e.i(12598);function d(e,t){let s=(0,l.useQueryClient)(t),[a]=i.useState(()=>new o(s,e));i.useEffect(()=>{a.setOptions(e)},[a,e]);let d=i.useSyncExternalStore(i.useCallback(e=>a.subscribe(r.notifyManager.batchCalls(e)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),u=i.useCallback((e,t)=>{a.mutate(e,t).catch(n.noop)},[a]);if(d.error&&(0,n.shouldThrowError)(a.options.throwOnError,[d.error]))throw d.error;return{...d,mutate:u,mutateAsync:d.mutate}}var u=e.i(75555),c=e.i(73911),h=e.i(86491),p=a,m=e.i(93803),f=e.i(80166),g=class extends p.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#n=null,this.#o=(0,m.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#l=void 0;#d=void 0;#t=void 0;#u;#c;#o;#n;#h;#p;#m;#f;#g;#y;#x=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#l.addObserver(this),y(this.#l,this.options)?this.#b():this.updateResult(),this.#v())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return x(this.#l,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return x(this.#l,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#_(),this.#w(),this.#l.removeObserver(this)}setOptions(e){let t=this.options,i=this.#l;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,n.resolveQueryBoolean)(this.options.enabled,this.#l))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#I(),this.#l.setOptions(this.options),t._defaulted&&!(0,n.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#l,observer:this});let s=this.hasListeners();s&&b(this.#l,i,this.options,t)&&this.#b(),this.updateResult(),s&&(this.#l!==i||(0,n.resolveQueryBoolean)(this.options.enabled,this.#l)!==(0,n.resolveQueryBoolean)(t.enabled,this.#l)||(0,n.resolveStaleTime)(this.options.staleTime,this.#l)!==(0,n.resolveStaleTime)(t.staleTime,this.#l))&&this.#C();let r=this.#k();s&&(this.#l!==i||(0,n.resolveQueryBoolean)(this.options.enabled,this.#l)!==(0,n.resolveQueryBoolean)(t.enabled,this.#l)||r!==this.#y)&&this.#R(r)}getOptimisticResult(e){var t,i;let s=this.#e.getQueryCache().build(this.#e,e),r=this.createResult(s,e);return t=this,i=r,(0,n.shallowEqualObjects)(t.getCurrentResult(),i)||(this.#t=r,this.#c=this.options,this.#u=this.#l.state),r}getCurrentResult(){return this.#t}trackResult(e,t){return new Proxy(e,{get:(e,i)=>(this.trackProp(i),t?.(i),"promise"===i&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#o.status||this.#o.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,i))})}trackProp(e){this.#x.add(e)}getCurrentQuery(){return this.#l}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),i=this.#e.getQueryCache().build(this.#e,t);return i.fetch().then(()=>this.createResult(i,t))}fetch(e){return this.#b({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#b(e){this.#I();let t=this.#l.fetch(this.options,e);return e?.throwOnError||(t=t.catch(n.noop)),t}#C(){this.#_();let e=(0,n.resolveStaleTime)(this.options.staleTime,this.#l);if(c.environmentManager.isServer()||this.#t.isStale||!(0,n.isValidTimeout)(e))return;let t=(0,n.timeUntilStale)(this.#t.dataUpdatedAt,e);this.#f=f.timeoutManager.setTimeout(()=>{this.#t.isStale||this.updateResult()},t+1)}#k(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#l):this.options.refetchInterval)??!1}#R(e){this.#w(),this.#y=e,!c.environmentManager.isServer()&&!1!==(0,n.resolveQueryBoolean)(this.options.enabled,this.#l)&&(0,n.isValidTimeout)(this.#y)&&0!==this.#y&&(this.#g=f.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||u.focusManager.isFocused())&&this.#b()},this.#y))}#v(){this.#C(),this.#R(this.#k())}#_(){void 0!==this.#f&&(f.timeoutManager.clearTimeout(this.#f),this.#f=void 0)}#w(){void 0!==this.#g&&(f.timeoutManager.clearInterval(this.#g),this.#g=void 0)}createResult(e,t){let i,s=this.#l,r=this.options,a=this.#t,o=this.#u,l=this.#c,d=e!==s?e.state:this.#d,{state:u}=e,c={...u},p=!1;if(t._optimisticResults){let i=this.hasListeners(),a=!i&&y(e,t),n=i&&b(e,s,t,r);(a||n)&&(c={...c,...(0,h.fetchState)(u.data,e.options)}),"isRestoring"===t._optimisticResults&&(c.fetchStatus="idle")}let{error:f,errorUpdatedAt:g,status:x}=c;i=c.data;let _=!1;if(void 0!==t.placeholderData&&void 0===i&&"pending"===x){let e;a?.isPlaceholderData&&t.placeholderData===l?.placeholderData?(e=a.data,_=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#m?.state.data,this.#m):t.placeholderData,void 0!==e&&(x="success",i=(0,n.replaceData)(a?.data,e,t),p=!0)}if(t.select&&void 0!==i&&!_)if(a&&i===o?.data&&t.select===this.#h)i=this.#p;else try{this.#h=t.select,i=t.select(i),i=(0,n.replaceData)(a?.data,i,t),this.#p=i,this.#n=null}catch(e){this.#n=e}this.#n&&(f=this.#n,i=this.#p,g=Date.now(),x="error");let w="fetching"===c.fetchStatus,I="pending"===x,C="error"===x,k=I&&w,R=void 0!==i,T={status:x,fetchStatus:c.fetchStatus,isPending:I,isSuccess:"success"===x,isError:C,isInitialLoading:k,isLoading:k,data:i,dataUpdatedAt:c.dataUpdatedAt,error:f,errorUpdatedAt:g,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:c.dataUpdateCount>d.dataUpdateCount||c.errorUpdateCount>d.errorUpdateCount,isFetching:w,isRefetching:w&&!I,isLoadingError:C&&!R,isPaused:"paused"===c.fetchStatus,isPlaceholderData:p,isRefetchError:C&&R,isStale:v(e,t),refetch:this.refetch,promise:this.#o,isEnabled:!1!==(0,n.resolveQueryBoolean)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==T.data,i="error"===T.status&&!t,r=e=>{i?e.reject(T.error):t&&e.resolve(T.data)},a=()=>{r(this.#o=T.promise=(0,m.pendingThenable)())},n=this.#o;switch(n.status){case"pending":e.queryHash===s.queryHash&&r(n);break;case"fulfilled":(i||T.data!==n.value)&&a();break;case"rejected":i&&T.error===n.reason||a()}}return T}updateResult(){let e=this.#t,t=this.createResult(this.#l,this.options);if(this.#u=this.#l.state,this.#c=this.options,void 0!==this.#u.data&&(this.#m=this.#l),(0,n.shallowEqualObjects)(t,e))return;this.#t=t;let i=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,i="function"==typeof t?t():t;if("all"===i||!i&&!this.#x.size)return!0;let s=new Set(i??this.#x);return this.options.throwOnError&&s.add("error"),Object.keys(this.#t).some(t=>this.#t[t]!==e[t]&&s.has(t))};this.#a({listeners:i()})}#I(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#l)return;let t=this.#l;this.#l=e,this.#d=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#v()}#a(e){r.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#t)}),this.#e.getQueryCache().notify({query:this.#l,type:"observerResultsUpdated"})})}};function y(e,t){return!1!==(0,n.resolveQueryBoolean)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==(0,n.resolveQueryBoolean)(t.retryOnMount,e))||void 0!==e.state.data&&x(e,t,t.refetchOnMount)}function x(e,t,i){if(!1!==(0,n.resolveQueryBoolean)(t.enabled,e)&&"static"!==(0,n.resolveStaleTime)(t.staleTime,e)){let s="function"==typeof i?i(e):i;return"always"===s||!1!==s&&v(e,t)}return!1}function b(e,t,i,s){return(e!==t||!1===(0,n.resolveQueryBoolean)(s.enabled,e))&&(!i.suspense||"error"!==e.state.status)&&v(e,i)}function v(e,t){return!1!==(0,n.resolveQueryBoolean)(t.enabled,e)&&e.isStaleByTime((0,n.resolveStaleTime)(t.staleTime,e))}e.i(47167),e.i(43476);var _=i.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),w=i.createContext(!1);w.Provider;var I=(e,t,i)=>t.fetchOptimistic(e).catch(()=>{i.clearReset()});let C=`
  query GetTodos($status: String) {
    todos(status: $status) {
      id
      title
      content
      items {
        id
        text
        isCompleted
      }
      createdAt
      status
      backgroundImage
    }
  }
`,k=`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      content
      items {
        id
        text
        isCompleted
      }
    }
  }
`,R=`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      success
    }
  }
`,T=`
  mutation UpdateTodo($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      content
      items {
        id
        text
        isCompleted
      }
    }
  }
`,S=`
  mutation ChangeTodoStatus($id: Int!, $newStatus: String!) {
    changeTodoStatus(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`,j=`
  mutation ToggleChecklistItem($todoId: Int!, $itemId: Int!) {
    toggleChecklistItem(todoId: $todoId, itemId: $itemId) {
      id
      title
      content
      status
      items {
        id
        text
        isCompleted
      }
    }
  }
`,Q=`
  mutation UncheckAllItems($id: Int!) {
    uncheckAllItems(id: $id) {
      id
      title
      content
      status
      items {
        id
        text
        isCompleted
      }
    }
  }
`,N=`
  mutation UpdateTodoBackground($id: Int!, $backgroundImage: String!) {
    updateTodoBackground(id: $id, backgroundImage: $backgroundImage) {
      id
      title
      content
      status
      backgroundImage
      items {
        id
        text
        isCompleted
      }
    }
  }
`;var O=e.i(6193),M=e.i(81949);e.s(["useChangeTodoStatus",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:({id:e,newStatus:t})=>(0,O.graphqlRequest)(S,{id:e,newStatus:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useCreateTodo",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:e=>(0,O.graphqlRequest)(k,{input:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteAllTrash",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`delete_${e.id}: deleteTodo(id: ${e.id}) { id success }`).join("\n"),i=`
        mutation DeleteAllTrash {
          ${t}
        }`;return(0,O.graphqlRequest)(i,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteTodos",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:e=>(0,O.graphqlRequest)(R,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useTodos",0,e=>(function(e,t,s){let a,o=i.useContext(w),d=i.useContext(_),u=(0,l.useQueryClient)(s),h=u.defaultQueryOptions(e);u.getDefaultOptions().queries?._experimental_beforeQuery?.(h);let p=u.getQueryCache().get(h.queryHash),m=!1!==e.subscribed;if(h._optimisticResults=o?"isRestoring":m?"optimistic":void 0,h.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=h.staleTime;h.staleTime="function"==typeof t?(...i)=>e(t(...i)):e(t),"number"==typeof h.gcTime&&(h.gcTime=Math.max(h.gcTime,1e3))}a=p?.state.error&&"function"==typeof h.throwOnError?(0,n.shouldThrowError)(h.throwOnError,[p.state.error,p]):h.throwOnError,(h.suspense||h.experimental_prefetchInRender||a)&&!d.isReset()&&(h.retryOnMount=!1),i.useEffect(()=>{d.clearReset()},[d]);let f=!u.getQueryCache().get(h.queryHash),[g]=i.useState(()=>new t(u,h)),y=g.getOptimisticResult(h),x=!o&&m;if(i.useSyncExternalStore(i.useCallback(e=>{let t=x?g.subscribe(r.notifyManager.batchCalls(e)):n.noop;return g.updateResult(),t},[g,x]),()=>g.getCurrentResult(),()=>g.getCurrentResult()),i.useEffect(()=>{g.setOptions(h)},[h,g]),h?.suspense&&y.isPending)throw I(h,g,d);if((({result:e,errorResetBoundary:t,throwOnError:i,query:s,suspense:r})=>e.isError&&!t.isReset()&&!e.isFetching&&s&&(r&&void 0===e.data||(0,n.shouldThrowError)(i,[e.error,s])))({result:y,errorResetBoundary:d,throwOnError:h.throwOnError,query:p,suspense:h.suspense}))throw y.error;if(u.getDefaultOptions().queries?._experimental_afterQuery?.(h,y),h.experimental_prefetchInRender&&!c.environmentManager.isServer()&&y.isLoading&&y.isFetching&&!o){let e=f?I(h,g,d):p?.promise;e?.catch(n.noop).finally(()=>{g.updateResult()})}return h.notifyOnChangeProps?y:g.trackResult(y)})({queryKey:["todosList",e],queryFn:async()=>await (0,O.graphqlRequest)(C,{status:e})},g,void 0),"useToggleChecklistItem",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:({todoId:e,itemId:t})=>(0,O.graphqlRequest)(j,{todoId:e,itemId:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUnarchiveAll",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`unarchive_${e.id}: changeTodoStatus(id: ${e.id}, newStatus: NOTES) { id }`).join("\n"),i=`
        mutation UnarchiveAll {
          ${t}
        }
      `;return(0,O.graphqlRequest)(i,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUncheckAllItems",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:e=>(0,O.graphqlRequest)(Q,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateGlobalBackground",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:async e=>{let t=localStorage.getItem("access_token");return(await M.default.put("/api/background",{backgroundImage:e},{headers:{Authorization:`Bearer ${t}`}})).data},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodo",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:({id:e,input:t})=>(0,O.graphqlRequest)(T,{id:e,input:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodoBackground",0,()=>{let e=(0,l.useQueryClient)();return d({mutationFn:({id:e,backgroundImage:t})=>(0,O.graphqlRequest)(N,{id:e,backgroundImage:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})}],22682)},4858,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var s=e.i(22831),r=e.i(30917);let a=r.default.div.withConfig({displayName:"Input.styles__InputGroup",componentId:"sc-3110149d-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,n=r.default.div.withConfig({displayName:"Input.styles__Label",componentId:"sc-3110149d-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .statusIndicator .stateIcon {
    width: 16px;
    height: 16px;
  }
`,o=r.default.div.withConfig({displayName:"Input.styles__LabelWrapper",componentId:"sc-3110149d-2"})`
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
`,l=r.default.div.withConfig({displayName:"Input.styles__StatusIndicator",componentId:"sc-3110149d-3"})`
  display: flex;
  align-items: center;
`,d=r.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-3110149d-4"})`
  position: relative;
  width: 100%;
`,u=r.default.input.withConfig({displayName:"Input.styles__InputField",componentId:"sc-3110149d-5"})`
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
`,c=r.default.button.withConfig({displayName:"Input.styles__EyeButton",componentId:"sc-3110149d-6"})`
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
`,h=r.default.div.withConfig({displayName:"Input.styles__ErrorWrapper",componentId:"sc-3110149d-7"})`
  display: grid;
  grid-template-rows: ${({$visible:e})=>e?"1fr":"0fr"};
  margin-top: ${({$visible:e})=>e?"8px":"0px"};
  transition:
    grid-template-rows 0.3s ease,
    margin-top 0.3s ease;
  overflow: hidden;
`,p=r.default.div.withConfig({displayName:"Input.styles__ErrorContainer",componentId:"sc-3110149d-8"})`
  min-height: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,m=r.default.div.withConfig({displayName:"Input.styles__ErrorTextWrapper",componentId:"sc-3110149d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
  font: 400 0.875rem "Poppins";
  min-width: 0;

  & img {
    width: 16px;
    height: 16px;
  }
`,f=r.default.span.withConfig({displayName:"Input.styles__ErrorText",componentId:"sc-3110149d-10"})`
  color: var(--input-error);
`,g=r.default.span.withConfig({displayName:"Input.styles__SuccessText",componentId:"sc-3110149d-11"})`
  color: var(--input-success);
`,y=r.default.img.withConfig({displayName:"Input.styles__InfoIcon",componentId:"sc-3110149d-12"})`
  width: 16px;
  height: 16px;
`,x=i.default.forwardRef(({label:e,iconSrc:r,type:x,errorMessage:b,isError:v,isValid:_,pageType:w,...I},C)=>{let{t:k}=(0,s.useTranslation)(),[R,T]=(0,i.useState)(!1),S=(0,i.useId)(),j="password"===x,Q=j&&R?"text":x,N=_&&"signin"!==w,O=N&&"signup"===w&&j,M=v||O;return(0,t.jsxs)(a,{children:[(0,t.jsxs)(n,{children:[(0,t.jsxs)(o,{children:[r&&(0,t.jsx)("img",{src:r,alt:"","aria-hidden":"true"}),(0,t.jsx)("p",{children:e})]}),(0,t.jsxs)(l,{"aria-live":"polite",children:[N&&(0,t.jsx)("img",{src:"/assets/images/check.svg",alt:"✓"}),v&&(0,t.jsx)("img",{src:"/assets/images/cross-small.svg",alt:"✕"})]})]}),(0,t.jsxs)(d,{children:[(0,t.jsx)(u,{ref:C,$isError:!!v,type:Q,placeholder:`${k("input.enter")} ${e.toLowerCase()}`,"aria-invalid":v?"true":"false","aria-describedby":v?S:void 0,...I}),j&&(0,t.jsx)(c,{type:"button",onClick:()=>T(e=>!e),"aria-label":k("input.toggle_password"),children:(0,t.jsx)("img",{src:R?"/assets/images/fi-rr-eye-crossed.svg":"/assets/images/fi-rr-eye.svg",alt:"","aria-hidden":"true"})})]}),(0,t.jsx)(h,{$visible:!!M,id:S,role:v?"alert":void 0,children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)("img",{src:v?"/assets/images/fi-sr-info.svg":"/assets/images/fi-sr-thumbs-up.svg",alt:"","aria-hidden":"true"}),O?(0,t.jsx)(g,{children:k("input.password_strong")}):(0,t.jsx)(f,{children:b})]}),v&&(0,t.jsx)(y,{src:"/assets/images/Info Tooltip.svg",alt:"info","aria-hidden":"true"})]})})]})});x.displayName="Input";let b=i.default.memo(x);e.s(["default",0,b],4858)},28732,e=>{e.v({label:"Switch-module__PHpUvq__label",slider:"Switch-module__PHpUvq__slider",switch:"Switch-module__PHpUvq__switch",switchContainer:"Switch-module__PHpUvq__switchContainer",switchInput:"Switch-module__PHpUvq__switchInput"})},84725,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(28732);let r=i.default.memo(({checked:e,onChange:r,label:a})=>{let n=(0,i.useId)();return(0,t.jsxs)("div",{className:s.default.switchContainer,children:[(0,t.jsxs)("label",{className:s.default.switch,htmlFor:n,children:[(0,t.jsx)("input",{id:n,type:"checkbox",checked:e,className:s.default.switchInput,onChange:r}),(0,t.jsx)("span",{className:s.default.slider})]}),a&&(0,t.jsx)("label",{className:s.default.label,htmlFor:n,children:a})]})});e.s(["default",0,r])},47062,e=>{e.v({errorContainer:"Textarea-module__vLHIuW__errorContainer",errorText:"Textarea-module__vLHIuW__errorText",errorTextWrapper:"Textarea-module__vLHIuW__errorTextWrapper",errorWrapper:"Textarea-module__vLHIuW__errorWrapper",infoText:"Textarea-module__vLHIuW__infoText",inputError:"Textarea-module__vLHIuW__inputError",inputGroup:"Textarea-module__vLHIuW__inputGroup",label:"Textarea-module__vLHIuW__label",textareaField:"Textarea-module__vLHIuW__textareaField"})},45057,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(47062);let r=i.default.forwardRef(({label:e,iconSrc:r,className:a,value:n,onFocus:o,onBlur:l,...d},u)=>{let c="string"==typeof n?n.length:0,[h,p]=(0,i.useState)(!1),m=(0,i.useCallback)(e=>{p(!0),o?.(e)},[o]),f=(0,i.useCallback)(e=>{p(!1),l?.(e)},[l]),g=c>=200&&h;return(0,t.jsxs)("div",{className:s.default.inputGroup,children:[(0,t.jsxs)("div",{className:s.default.label,children:[r&&(0,t.jsx)("img",{src:r,alt:"pencil",className:s.default.icon}),(0,t.jsx)("p",{children:e})]}),(0,t.jsx)("textarea",{ref:u,className:`${s.default.textareaField} ${g?s.default.inputError:""} ${a}`,value:n,maxLength:200,onFocus:m,onBlur:f,...d}),(0,t.jsx)("div",{className:`${s.default.errorWrapper} ${s.default.visible}`,children:(0,t.jsx)("div",{className:s.default.errorContainer,children:(0,t.jsxs)("div",{className:s.default.errorTextWrapper,children:[(0,t.jsx)("img",{src:g?"/assets/images/fi-sr-info.svg":"/assets/images/Info Tooltip.svg",alt:"status",className:g?"":s.default.greyIcon}),(0,t.jsx)("span",{className:g?s.default.errorText:s.default.infoText,children:g?"Reached the 200 text limit":"Max 200 chars"})]})})})]})});r.displayName="Textarea";let a=i.default.memo(r);e.s(["default",0,a])},24820,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var s=e.i(22831),r=e.i(6648),a=e.i(4858),n=e.i(45057),o=e.i(84725),l=e.i(30917);let d=l.default.div.withConfig({displayName:"ChecklistSection.styles__ScrollableItems",componentId:"sc-ca2299ea-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,u=l.default.div.withConfig({displayName:"ChecklistSection.styles__ItemRow",componentId:"sc-ca2299ea-1"})`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`,c=l.default.button.withConfig({displayName:"ChecklistSection.styles__DeleteItemButton",componentId:"sc-ca2299ea-2"})`
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
`,h=i.default.memo(({item:e,index:r,onTextChange:n,onDelete:o})=>{let{t:l}=(0,s.useTranslation)(),d=(0,i.useCallback)(t=>{n(e.id,t.target.value)},[e.id,n]),h=(0,i.useCallback)(()=>{o(e.id)},[e.id,o]);return(0,t.jsxs)(u,{role:"listitem",children:[(0,t.jsx)(a.default,{"data-testid":"todo-input",type:"text",label:l("checklist.todo_label",{number:r+1}),value:e.text||"",maxLength:80,onChange:d}),(0,t.jsx)(c,{type:"button",onClick:h,"aria-label":l("checklist.delete"),children:(0,t.jsx)("img",{src:"/assets/images/trash-svgrepo-com.svg",alt:"delete","aria-hidden":"true"})})]})}),p=i.default.memo(({items:e,onTextChange:i,onDelete:s})=>0===e.length?null:(0,t.jsx)(d,{role:"list",children:e.map((e,r)=>e?(0,t.jsx)(h,{item:e,index:r,onTextChange:i,onDelete:s},e.id):null)}));var m=e.i(48787),f=e.i(65658),g=e.i(22682);let y=(0,l.default)(m.animated.div).withConfig({displayName:"NoteModal.styles__Overlay",componentId:"sc-65d9c2c2-0"})`
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
`,x=(0,l.default)(m.animated.div).withConfig({displayName:"NoteModal.styles__ModalWindow",componentId:"sc-65d9c2c2-1"})`
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
`,b=l.default.form.withConfig({displayName:"NoteModal.styles__ModalForm",componentId:"sc-65d9c2c2-2"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`,v=l.default.div.withConfig({displayName:"NoteModal.styles__Header",componentId:"sc-65d9c2c2-3"})`
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
`,_=l.default.button.withConfig({displayName:"NoteModal.styles__CloseButton",componentId:"sc-65d9c2c2-4"})`
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
`,w=l.default.div.withConfig({displayName:"NoteModal.styles__FormContent",componentId:"sc-65d9c2c2-5"})`
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
`,I=l.default.div.withConfig({displayName:"NoteModal.styles__ItemsSection",componentId:"sc-65d9c2c2-6"})`
  margin-top: 8px;
`,C=l.default.div.withConfig({displayName:"NoteModal.styles__ItemsHeaderRow",componentId:"sc-65d9c2c2-7"})`
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
`,k=l.default.p.withConfig({displayName:"NoteModal.styles__ErrorMessage",componentId:"sc-65d9c2c2-8"})`
  color: var(--input-error);
  font: 500 1.063rem "Poppins";
  text-align: center;
  margin-top: 20px;
`,R=l.default.div.withConfig({displayName:"NoteModal.styles__Footer",componentId:"sc-65d9c2c2-9"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  flex-shrink: 0;
`,T=l.default.div.withConfig({displayName:"NoteModal.styles__BackgroundSection",componentId:"sc-65d9c2c2-10"})`
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,S=l.default.div.withConfig({displayName:"NoteModal.styles__BackgroundHeaderRow",componentId:"sc-65d9c2c2-11"})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    color: var(--text-main);
    font: 400 1rem "Poppins";
    margin: 0;
  }
`,j=l.default.div.withConfig({displayName:"NoteModal.styles__PreviewContainer",componentId:"sc-65d9c2c2-12"})`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--border-color);
`,Q=l.default.div.withConfig({displayName:"NoteModal.styles__BackgroundPreview",componentId:"sc-65d9c2c2-13"})`
  width: 100%;
  height: 100%;
  background-image: url("${({$src:e})=>e}");
  background-size: cover;
  background-position: center;
`,N=l.default.button.withConfig({displayName:"NoteModal.styles__RemoveBgButton",componentId:"sc-65d9c2c2-14"})`
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
`,O=l.default.div.withConfig({displayName:"NoteModal.styles__NotesList",componentId:"sc-65d9c2c2-15"})`
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
`,M=l.default.p.withConfig({displayName:"NoteModal.styles__NoteText",componentId:"sc-65d9c2c2-16"})`
  font: 400 1rem "Inter";
  color: var(--text-main);
  word-break: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin-bottom: 10px;
`,E=l.default.div.withConfig({displayName:"NoteModal.styles__CheckboxRow",componentId:"sc-65d9c2c2-17"})`
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
`,$=i.default.memo(({isOpen:e,onClose:l,onSubmit:d,initialData:u})=>{let{t:c}=(0,s.useTranslation)(),{isEditMode:h,title:m,content:$,modalItems:q,currentBg:F,validationError:P,fileInputRef:L,isBgUpdating:U,modalTransition:B,handleAddItem:D,handleItemTextChange:W,handleItemDelete:H,handleBgFileChange:K,handleRemoveBg:A,handleFormSubmit:z,handleCheckboxToggle:G,handleEditModeToggle:V,handleTitleChange:Y,handleContentChange:J,handleUploadClick:X,handleStopPropagation:Z}=function({isOpen:e,onSubmit:t,initialData:s}){let[r,a]=(0,i.useState)(!1),{mutate:n}=(0,g.useToggleChecklistItem)(),{data:o}=(0,g.useTodos)("NOTES"),[l,d]=(0,i.useState)(""),[u,c]=(0,i.useState)(""),[h,p]=(0,i.useState)([]),[m,y]=(0,i.useState)(null),[x,b]=(0,i.useState)(null),v=(0,i.useRef)(null),{mutate:_,isPending:w}=(0,g.useUpdateTodoBackground)(),I=(0,f.useTransition)(e,{from:{opacity:0,transform:"scale(0.95)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.95)"},config:{tension:280,friction:22}});(0,i.useEffect)(()=>(e?(document.body.style.overflow="hidden",a(!s)):document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e,s]),(0,i.useEffect)(()=>{if(s?.id&&o?.todos){let e=o.todos.find(e=>e.id===s.id);e&&p(e.items||[])}},[o,s?.id]),(0,i.useEffect)(()=>{if(e&&s){d(s.title||""),c(s.content||""),p(s.items||[]);let e=s.backgroundImage;y(e&&"none"!==e?e:null)}else e||(d(""),c(""),p([]),y(null));b(null)},[e,s]);let C=(0,i.useCallback)((e,t)=>{b(null),e(t)},[]),k=(0,i.useCallback)(()=>{b(null),p(e=>[...e,{id:Math.floor(2e9*Math.random()),text:"",isCompleted:!1}])},[]),R=(0,i.useCallback)((e,t)=>{b(null),p(i=>i.map(i=>i&&i.id===e?{...i,text:t}:i))},[]),T=(0,i.useCallback)(e=>{p(t=>t.filter(t=>t&&t.id!==e))},[]),S=(0,i.useCallback)(e=>{let t=e.target.files?.[0];if(!t||!s?.id)return;let i=new FileReader;i.onload=()=>{let e=i.result;_({id:s.id,backgroundImage:e},{onSuccess:()=>y(e)})},i.readAsDataURL(t)},[s?.id,_]),j=(0,i.useCallback)(()=>{s?.id&&_({id:s.id,backgroundImage:"none"},{onSuccess:()=>y(null)})},[s?.id,_]),Q=(0,i.useCallback)(e=>{if(e.preventDefault(),!r)return;let i=l.trim().length>0,s=u.trim().length>0,a=h.some(e=>e&&e.text.trim().length>0);if(!i&&!s&&!a)return void b("The note cannot be empty.");let n=h.filter(e=>e&&"number"==typeof e.id&&e.text.trim().length>0).map(e=>({...e,text:e.text.trim()}));t(l.trim(),u.trim(),n)},[r,l,u,h,t]),N=(0,i.useCallback)(e=>{p(t=>t.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t)),s?.id&&n({todoId:s.id,itemId:e},{onSuccess:e=>{let t=e.toggleChecklistItem?.items;t&&p(t)},onError:()=>{p(t=>t.map(t=>t.id===e?{...t,isCompleted:!t.isCompleted}:t))}})},[s?.id,n]),O=(0,i.useCallback)(()=>{a(e=>!e)},[]),M=(0,i.useCallback)(e=>{C(d,e.target.value)},[C]),E=(0,i.useCallback)(e=>{C(c,e.target.value)},[C]),$=(0,i.useCallback)(()=>{v.current?.click()},[]);return{isEditMode:r,title:l,content:u,modalItems:h,currentBg:m,validationError:x,fileInputRef:v,isBgUpdating:w,modalTransition:I,handleAddItem:k,handleItemTextChange:R,handleItemDelete:T,handleBgFileChange:S,handleRemoveBg:j,handleFormSubmit:Q,handleCheckboxToggle:N,handleEditModeToggle:O,handleTitleChange:M,handleContentChange:E,handleUploadClick:$,handleStopPropagation:(0,i.useCallback)(e=>{e.stopPropagation()},[])}}({isOpen:e,onSubmit:d,initialData:u}),ee=u?h?c("note_modal.edit_title"):m||`NOTE ${u.id}`:c("note_modal.create_title");return B((e,i)=>i?(0,t.jsx)(y,{onClick:l,style:{opacity:e.opacity},children:(0,t.jsx)(x,{style:e,onClick:Z,role:"dialog","aria-modal":"true",children:(0,t.jsxs)(b,{onSubmit:z,children:[(0,t.jsxs)(v,{children:[(0,t.jsx)("div",{className:"modal-header-title",children:ee}),u&&(0,t.jsx)(o.default,{"data-testid":"edit-mode-switch",label:c("note_modal.edit_mode"),checked:h,onChange:V}),(0,t.jsx)(_,{type:"button",onClick:l,"aria-label":c("common.cancel"),children:(0,t.jsx)("img",{src:"/assets/images/cross.svg",alt:"close","aria-hidden":"true"})})]}),(0,t.jsx)(w,{children:h?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{"data-testid":"modal-title-input",label:c("note_modal.title_label"),iconSrc:"/assets/images/envelope.svg",maxLength:50,value:m,onChange:Y}),(0,t.jsx)(n.default,{"data-testid":"modal-description-input",label:c("note_modal.desc_label"),iconSrc:"/assets/images/pencil.svg",placeholder:c("note_modal.desc_placeholder"),value:$,onChange:J}),u&&(0,t.jsxs)(T,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)("p",{children:c("note_modal.bg_section")}),(0,t.jsx)("input",{type:"file",ref:L,style:{display:"none"},accept:".jpg,.jpeg,.png",onChange:K,disabled:U}),(0,t.jsx)(r.default,{type:"button",onClick:X,disabled:U,children:U?c("note_modal.uploading"):F?c("note_modal.change_btn"):c("note_modal.upload_btn")})]}),F&&(0,t.jsxs)(j,{children:[(0,t.jsx)(Q,{$src:F}),(0,t.jsx)(N,{type:"button",onClick:A,"data-testid":"remove-bg",children:c("note_modal.remove_btn")})]})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)("p",{children:c("note_modal.checklist_section")}),(0,t.jsx)(r.default,{type:"button",onClick:D,"data-testid":"add-todo-btn",children:c("note_modal.add_item")})]}),(0,t.jsx)(p,{items:q,onTextChange:W,onDelete:H})]})]}):(0,t.jsxs)(O,{children:[(0,t.jsx)(M,{children:$||c("note_card.no_description")}),q.length>0?q.map(e=>{let i=u?`note-${u.id}-item-${e.id}`:`item-${e.id}`;return(0,t.jsxs)(E,{children:[(0,t.jsx)("input",{type:"checkbox",id:i,checked:e.isCompleted,onChange:()=>G(e.id)}),(0,t.jsx)("label",{htmlFor:i,children:e.text})]},e.id)}):(0,t.jsx)(M,{children:c("note_card.no_items")})]})}),h&&P&&(0,t.jsx)(k,{role:"alert",children:c("note_modal.error_empty")}),h&&(0,t.jsx)(R,{children:(0,t.jsx)(r.default,{type:"submit","data-testid":"modal-submit-button",children:u?c("note_modal.save"):c("note_modal.create")})})]})})}):null)});e.s(["default",0,$],24820)},4820,e=>{e.n(e.i(24820))}]);