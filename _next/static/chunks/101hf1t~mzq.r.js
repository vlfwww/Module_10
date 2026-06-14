(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22682,e=>{"use strict";let t;var s=e.i(71645),i=e.i(14272),r=e.i(40143),n=e.i(15823),a=e.i(19273),o=class extends n.Subscribable{#e;#t=void 0;#s;#i;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,a.shallowEqualObjects)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.hashKey)(t.mutationKey)!==(0,a.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(e){this.#r(),this.#n(e)}getCurrentResult(){return this.#t}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#r(),this.#n()}mutate(e,t){return this.#i=t,this.#s?.removeObserver(this),this.#s=this.#e.getMutationCache().build(this.#e,this.options),this.#s.addObserver(this),this.#s.execute(e)}#r(){let e=this.#s?.state??(0,i.getDefaultState)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#n(e){r.notifyManager.batch(()=>{if(this.#i&&this.hasListeners()){let t=this.#t.variables,s=this.#t.context,i={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#i.onSuccess?.(e.data,t,s,i)}catch(e){Promise.reject(e)}try{this.#i.onSettled?.(e.data,null,t,s,i)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#i.onError?.(e.error,t,s,i)}catch(e){Promise.reject(e)}try{this.#i.onSettled?.(void 0,e.error,t,s,i)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}},u=e.i(12598);function l(e,t){let i=(0,u.useQueryClient)(t),[n]=s.useState(()=>new o(i,e));s.useEffect(()=>{n.setOptions(e)},[n,e]);let l=s.useSyncExternalStore(s.useCallback(e=>n.subscribe(r.notifyManager.batchCalls(e)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),c=s.useCallback((e,t)=>{n.mutate(e,t).catch(a.noop)},[n]);if(l.error&&(0,a.shouldThrowError)(n.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:c,mutateAsync:l.mutate}}var c=e.i(75555),h=e.i(73911),d=e.i(86491),p=n,m=e.i(93803),f=e.i(80166),y=class extends p.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#a=null,this.#o=(0,m.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#u=void 0;#l=void 0;#t=void 0;#c;#h;#o;#a;#d;#p;#m;#f;#y;#g;#v=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#u.addObserver(this),g(this.#u,this.options)?this.#b():this.updateResult(),this.#I())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return v(this.#u,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return v(this.#u,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#R(),this.#x(),this.#u.removeObserver(this)}setOptions(e){let t=this.options,s=this.#u;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,a.resolveQueryBoolean)(this.options.enabled,this.#u))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#Q(),this.#u.setOptions(this.options),t._defaulted&&!(0,a.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#u,observer:this});let i=this.hasListeners();i&&b(this.#u,s,this.options,t)&&this.#b(),this.updateResult(),i&&(this.#u!==s||(0,a.resolveQueryBoolean)(this.options.enabled,this.#u)!==(0,a.resolveQueryBoolean)(t.enabled,this.#u)||(0,a.resolveStaleTime)(this.options.staleTime,this.#u)!==(0,a.resolveStaleTime)(t.staleTime,this.#u))&&this.#w();let r=this.#C();i&&(this.#u!==s||(0,a.resolveQueryBoolean)(this.options.enabled,this.#u)!==(0,a.resolveQueryBoolean)(t.enabled,this.#u)||r!==this.#g)&&this.#S(r)}getOptimisticResult(e){var t,s;let i=this.#e.getQueryCache().build(this.#e,e),r=this.createResult(i,e);return t=this,s=r,(0,a.shallowEqualObjects)(t.getCurrentResult(),s)||(this.#t=r,this.#h=this.options,this.#c=this.#u.state),r}getCurrentResult(){return this.#t}trackResult(e,t){return new Proxy(e,{get:(e,s)=>(this.trackProp(s),t?.(s),"promise"===s&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#o.status||this.#o.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,s))})}trackProp(e){this.#v.add(e)}getCurrentQuery(){return this.#u}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),s=this.#e.getQueryCache().build(this.#e,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#b({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#b(e){this.#Q();let t=this.#u.fetch(this.options,e);return e?.throwOnError||(t=t.catch(a.noop)),t}#w(){this.#R();let e=(0,a.resolveStaleTime)(this.options.staleTime,this.#u);if(h.environmentManager.isServer()||this.#t.isStale||!(0,a.isValidTimeout)(e))return;let t=(0,a.timeUntilStale)(this.#t.dataUpdatedAt,e);this.#f=f.timeoutManager.setTimeout(()=>{this.#t.isStale||this.updateResult()},t+1)}#C(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#u):this.options.refetchInterval)??!1}#S(e){this.#x(),this.#g=e,!h.environmentManager.isServer()&&!1!==(0,a.resolveQueryBoolean)(this.options.enabled,this.#u)&&(0,a.isValidTimeout)(this.#g)&&0!==this.#g&&(this.#y=f.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||c.focusManager.isFocused())&&this.#b()},this.#g))}#I(){this.#w(),this.#S(this.#C())}#R(){void 0!==this.#f&&(f.timeoutManager.clearTimeout(this.#f),this.#f=void 0)}#x(){void 0!==this.#y&&(f.timeoutManager.clearInterval(this.#y),this.#y=void 0)}createResult(e,t){let s,i=this.#u,r=this.options,n=this.#t,o=this.#c,u=this.#h,l=e!==i?e.state:this.#l,{state:c}=e,h={...c},p=!1;if(t._optimisticResults){let s=this.hasListeners(),n=!s&&g(e,t),a=s&&b(e,i,t,r);(n||a)&&(h={...h,...(0,d.fetchState)(c.data,e.options)}),"isRestoring"===t._optimisticResults&&(h.fetchStatus="idle")}let{error:f,errorUpdatedAt:y,status:v}=h;s=h.data;let R=!1;if(void 0!==t.placeholderData&&void 0===s&&"pending"===v){let e;n?.isPlaceholderData&&t.placeholderData===u?.placeholderData?(e=n.data,R=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#m?.state.data,this.#m):t.placeholderData,void 0!==e&&(v="success",s=(0,a.replaceData)(n?.data,e,t),p=!0)}if(t.select&&void 0!==s&&!R)if(n&&s===o?.data&&t.select===this.#d)s=this.#p;else try{this.#d=t.select,s=t.select(s),s=(0,a.replaceData)(n?.data,s,t),this.#p=s,this.#a=null}catch(e){this.#a=e}this.#a&&(f=this.#a,s=this.#p,y=Date.now(),v="error");let x="fetching"===h.fetchStatus,Q="pending"===v,w="error"===v,C=Q&&x,S=void 0!==s,T={status:v,fetchStatus:h.fetchStatus,isPending:Q,isSuccess:"success"===v,isError:w,isInitialLoading:C,isLoading:C,data:s,dataUpdatedAt:h.dataUpdatedAt,error:f,errorUpdatedAt:y,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:h.dataUpdateCount>l.dataUpdateCount||h.errorUpdateCount>l.errorUpdateCount,isFetching:x,isRefetching:x&&!Q,isLoadingError:w&&!S,isPaused:"paused"===h.fetchStatus,isPlaceholderData:p,isRefetchError:w&&S,isStale:I(e,t),refetch:this.refetch,promise:this.#o,isEnabled:!1!==(0,a.resolveQueryBoolean)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==T.data,s="error"===T.status&&!t,r=e=>{s?e.reject(T.error):t&&e.resolve(T.data)},n=()=>{r(this.#o=T.promise=(0,m.pendingThenable)())},a=this.#o;switch(a.status){case"pending":e.queryHash===i.queryHash&&r(a);break;case"fulfilled":(s||T.data!==a.value)&&n();break;case"rejected":s&&T.error===a.reason||n()}}return T}updateResult(){let e=this.#t,t=this.createResult(this.#u,this.options);if(this.#c=this.#u.state,this.#h=this.options,void 0!==this.#c.data&&(this.#m=this.#u),(0,a.shallowEqualObjects)(t,e))return;this.#t=t;let s=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.#v.size)return!0;let i=new Set(s??this.#v);return this.options.throwOnError&&i.add("error"),Object.keys(this.#t).some(t=>this.#t[t]!==e[t]&&i.has(t))};this.#n({listeners:s()})}#Q(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#u)return;let t=this.#u;this.#u=e,this.#l=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#I()}#n(e){r.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#t)}),this.#e.getQueryCache().notify({query:this.#u,type:"observerResultsUpdated"})})}};function g(e,t){return!1!==(0,a.resolveQueryBoolean)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==(0,a.resolveQueryBoolean)(t.retryOnMount,e))||void 0!==e.state.data&&v(e,t,t.refetchOnMount)}function v(e,t,s){if(!1!==(0,a.resolveQueryBoolean)(t.enabled,e)&&"static"!==(0,a.resolveStaleTime)(t.staleTime,e)){let i="function"==typeof s?s(e):s;return"always"===i||!1!==i&&I(e,t)}return!1}function b(e,t,s,i){return(e!==t||!1===(0,a.resolveQueryBoolean)(i.enabled,e))&&(!s.suspense||"error"!==e.state.status)&&I(e,s)}function I(e,t){return!1!==(0,a.resolveQueryBoolean)(t.enabled,e)&&e.isStaleByTime((0,a.resolveStaleTime)(t.staleTime,e))}e.i(47167),e.i(43476);var R=s.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),x=s.createContext(!1);x.Provider;var Q=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});let w=`
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
`,C=`
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
`,S=`
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
`,_=`
  mutation ChangeTodoStatus($id: Int!, $newStatus: String!) {
    changeTodoStatus(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`,O=`
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
`,q=`
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
`,k=`
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
`;var E=e.i(6193),j=e.i(81949);e.s(["useChangeTodoStatus",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({id:e,newStatus:t})=>(0,E.graphqlRequest)(_,{id:e,newStatus:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useCreateTodo",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:e=>(0,E.graphqlRequest)(C,{input:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteAllTrash",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`delete_${e.id}: deleteTodo(id: ${e.id}) { id success }`).join("\n"),s=`
        mutation DeleteAllTrash {
          ${t}
        }`;return(0,E.graphqlRequest)(s,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteTodos",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:e=>(0,E.graphqlRequest)(S,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useTodos",0,e=>(function(e,t,i){let n,o=s.useContext(x),l=s.useContext(R),c=(0,u.useQueryClient)(i),d=c.defaultQueryOptions(e);c.getDefaultOptions().queries?._experimental_beforeQuery?.(d);let p=c.getQueryCache().get(d.queryHash),m=!1!==e.subscribed;if(d._optimisticResults=o?"isRestoring":m?"optimistic":void 0,d.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=d.staleTime;d.staleTime="function"==typeof t?(...s)=>e(t(...s)):e(t),"number"==typeof d.gcTime&&(d.gcTime=Math.max(d.gcTime,1e3))}n=p?.state.error&&"function"==typeof d.throwOnError?(0,a.shouldThrowError)(d.throwOnError,[p.state.error,p]):d.throwOnError,(d.suspense||d.experimental_prefetchInRender||n)&&!l.isReset()&&(d.retryOnMount=!1),s.useEffect(()=>{l.clearReset()},[l]);let f=!c.getQueryCache().get(d.queryHash),[y]=s.useState(()=>new t(c,d)),g=y.getOptimisticResult(d),v=!o&&m;if(s.useSyncExternalStore(s.useCallback(e=>{let t=v?y.subscribe(r.notifyManager.batchCalls(e)):a.noop;return y.updateResult(),t},[y,v]),()=>y.getCurrentResult(),()=>y.getCurrentResult()),s.useEffect(()=>{y.setOptions(d)},[d,y]),d?.suspense&&g.isPending)throw Q(d,y,l);if((({result:e,errorResetBoundary:t,throwOnError:s,query:i,suspense:r})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(r&&void 0===e.data||(0,a.shouldThrowError)(s,[e.error,i])))({result:g,errorResetBoundary:l,throwOnError:d.throwOnError,query:p,suspense:d.suspense}))throw g.error;if(c.getDefaultOptions().queries?._experimental_afterQuery?.(d,g),d.experimental_prefetchInRender&&!h.environmentManager.isServer()&&g.isLoading&&g.isFetching&&!o){let e=f?Q(d,y,l):p?.promise;e?.catch(a.noop).finally(()=>{y.updateResult()})}return d.notifyOnChangeProps?g:y.trackResult(g)})({queryKey:["todosList",e],queryFn:async()=>await (0,E.graphqlRequest)(w,{status:e})},y,void 0),"useToggleChecklistItem",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({todoId:e,itemId:t})=>(0,E.graphqlRequest)(O,{todoId:e,itemId:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUnarchiveAll",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`unarchive_${e.id}: changeTodoStatus(id: ${e.id}, newStatus: NOTES) { id }`).join("\n"),s=`
        mutation UnarchiveAll {
          ${t}
        }
      `;return(0,E.graphqlRequest)(s,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUncheckAllItems",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:e=>(0,E.graphqlRequest)(q,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateGlobalBackground",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:async e=>{let t=localStorage.getItem("access_token");return(await j.default.put("/api/background",{backgroundImage:e},{headers:{Authorization:`Bearer ${t}`}})).data},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodo",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({id:e,input:t})=>(0,E.graphqlRequest)(T,{id:e,input:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodoBackground",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({id:e,backgroundImage:t})=>(0,E.graphqlRequest)(k,{id:e,backgroundImage:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})}],22682)},4858,e=>{"use strict";var t=e.i(43476),s=e.i(71645);e.i(85269);var i=e.i(22831),r=e.i(30917);let n=r.default.div.withConfig({displayName:"Input.styles__InputGroup",componentId:"sc-3110149d-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  &:has(input:disabled) .labelWrapper p {
    color: var(--input-disabled-color);
  }
`,a=r.default.div.withConfig({displayName:"Input.styles__Label",componentId:"sc-3110149d-1"})`
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
`,u=r.default.div.withConfig({displayName:"Input.styles__StatusIndicator",componentId:"sc-3110149d-3"})`
  display: flex;
  align-items: center;
`,l=r.default.div.withConfig({displayName:"Input.styles__InputWrapper",componentId:"sc-3110149d-4"})`
  position: relative;
  width: 100%;
`,c=r.default.input.withConfig({displayName:"Input.styles__InputField",componentId:"sc-3110149d-5"})`
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
`,h=r.default.button.withConfig({displayName:"Input.styles__EyeButton",componentId:"sc-3110149d-6"})`
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
`,d=r.default.div.withConfig({displayName:"Input.styles__ErrorWrapper",componentId:"sc-3110149d-7"})`
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
`,y=r.default.span.withConfig({displayName:"Input.styles__SuccessText",componentId:"sc-3110149d-11"})`
  color: var(--input-success);
`,g=r.default.img.withConfig({displayName:"Input.styles__InfoIcon",componentId:"sc-3110149d-12"})`
  width: 16px;
  height: 16px;
`,v=s.default.forwardRef(({label:e,iconSrc:r,type:v,errorMessage:b,isError:I,isValid:R,pageType:x,...Q},w)=>{let{t:C}=(0,i.useTranslation)(),[S,T]=(0,s.useState)(!1),_=(0,s.useId)(),O="password"===v,q=O&&S?"text":v,k=R&&"signin"!==x,E=k&&"signup"===x&&O,j=I||E;return(0,t.jsxs)(n,{children:[(0,t.jsxs)(a,{children:[(0,t.jsxs)(o,{children:[r&&(0,t.jsx)("img",{src:r,alt:"","aria-hidden":"true"}),(0,t.jsx)("p",{children:e})]}),(0,t.jsxs)(u,{"aria-live":"polite",children:[k&&(0,t.jsx)("img",{src:"/assets/images/check.svg",alt:"✓"}),I&&(0,t.jsx)("img",{src:"/assets/images/cross-small.svg",alt:"✕"})]})]}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{ref:w,$isError:!!I,type:q,placeholder:`${C("input.enter")} ${e.toLowerCase()}`,"aria-invalid":I?"true":"false","aria-describedby":I?_:void 0,...Q}),O&&(0,t.jsx)(h,{type:"button",onClick:()=>T(e=>!e),"aria-label":C("input.toggle_password"),children:(0,t.jsx)("img",{src:S?"/assets/images/fi-rr-eye-crossed.svg":"/assets/images/fi-rr-eye.svg",alt:"","aria-hidden":"true"})})]}),(0,t.jsx)(d,{$visible:!!j,id:_,role:I?"alert":void 0,children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)("img",{src:I?"/assets/images/fi-sr-info.svg":"/assets/images/fi-sr-thumbs-up.svg",alt:"","aria-hidden":"true"}),E?(0,t.jsx)(y,{children:C("input.password_strong")}):(0,t.jsx)(f,{children:b})]}),I&&(0,t.jsx)(g,{src:"/assets/images/Info Tooltip.svg",alt:"info","aria-hidden":"true"})]})})]})});v.displayName="Input";let b=s.default.memo(v);e.s(["default",0,b],4858)},28732,e=>{e.v({label:"Switch-module__PHpUvq__label",slider:"Switch-module__PHpUvq__slider",switch:"Switch-module__PHpUvq__switch",switchContainer:"Switch-module__PHpUvq__switchContainer",switchInput:"Switch-module__PHpUvq__switchInput"})},84725,e=>{"use strict";var t=e.i(43476),s=e.i(71645),i=e.i(28732);let r=s.default.memo(({checked:e,onChange:r,label:n})=>{let a=(0,s.useId)();return(0,t.jsxs)("div",{className:i.default.switchContainer,children:[(0,t.jsxs)("label",{className:i.default.switch,htmlFor:a,children:[(0,t.jsx)("input",{id:a,type:"checkbox",checked:e,className:i.default.switchInput,onChange:r}),(0,t.jsx)("span",{className:i.default.slider})]}),n&&(0,t.jsx)("label",{className:i.default.label,htmlFor:a,children:n})]})});e.s(["default",0,r])}]);