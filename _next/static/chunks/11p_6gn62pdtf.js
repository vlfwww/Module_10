(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22682,e=>{"use strict";let t;var r=e.i(71645),s=e.i(14272),i=e.i(40143),n=e.i(15823),o=e.i(19273),a=class extends n.Subscribable{#e;#t=void 0;#r;#s;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,o.shallowEqualObjects)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#r,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,o.hashKey)(t.mutationKey)!==(0,o.hashKey)(this.options.mutationKey)?this.reset():this.#r?.state.status==="pending"&&this.#r.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#r?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#n(e)}getCurrentResult(){return this.#t}reset(){this.#r?.removeObserver(this),this.#r=void 0,this.#i(),this.#n()}mutate(e,t){return this.#s=t,this.#r?.removeObserver(this),this.#r=this.#e.getMutationCache().build(this.#e,this.options),this.#r.addObserver(this),this.#r.execute(e)}#i(){let e=this.#r?.state??(0,s.getDefaultState)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#n(e){i.notifyManager.batch(()=>{if(this.#s&&this.hasListeners()){let t=this.#t.variables,r=this.#t.context,s={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#s.onSuccess?.(e.data,t,r,s)}catch(e){Promise.reject(e)}try{this.#s.onSettled?.(e.data,null,t,r,s)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#s.onError?.(e.error,t,r,s)}catch(e){Promise.reject(e)}try{this.#s.onSettled?.(void 0,e.error,t,r,s)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}},u=e.i(12598);function l(e,t){let s=(0,u.useQueryClient)(t),[n]=r.useState(()=>new a(s,e));r.useEffect(()=>{n.setOptions(e)},[n,e]);let l=r.useSyncExternalStore(r.useCallback(e=>n.subscribe(i.notifyManager.batchCalls(e)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),c=r.useCallback((e,t)=>{n.mutate(e,t).catch(o.noop)},[n]);if(l.error&&(0,o.shouldThrowError)(n.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:c,mutateAsync:l.mutate}}var c=e.i(75555),h=e.i(73911),d=e.i(86491),p=n,m=e.i(93803),f=e.i(80166),b=class extends p.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#o=null,this.#a=(0,m.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#u=void 0;#l=void 0;#t=void 0;#c;#h;#a;#o;#d;#p;#m;#f;#b;#g;#y=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#u.addObserver(this),g(this.#u,this.options)?this.#v():this.updateResult(),this.#x())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return y(this.#u,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return y(this.#u,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#C(),this.#R(),this.#u.removeObserver(this)}setOptions(e){let t=this.options,r=this.#u;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,o.resolveQueryBoolean)(this.options.enabled,this.#u))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#_(),this.#u.setOptions(this.options),t._defaulted&&!(0,o.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#u,observer:this});let s=this.hasListeners();s&&v(this.#u,r,this.options,t)&&this.#v(),this.updateResult(),s&&(this.#u!==r||(0,o.resolveQueryBoolean)(this.options.enabled,this.#u)!==(0,o.resolveQueryBoolean)(t.enabled,this.#u)||(0,o.resolveStaleTime)(this.options.staleTime,this.#u)!==(0,o.resolveStaleTime)(t.staleTime,this.#u))&&this.#w();let i=this.#I();s&&(this.#u!==r||(0,o.resolveQueryBoolean)(this.options.enabled,this.#u)!==(0,o.resolveQueryBoolean)(t.enabled,this.#u)||i!==this.#g)&&this.#k(i)}getOptimisticResult(e){var t,r;let s=this.#e.getQueryCache().build(this.#e,e),i=this.createResult(s,e);return t=this,r=i,(0,o.shallowEqualObjects)(t.getCurrentResult(),r)||(this.#t=i,this.#h=this.options,this.#c=this.#u.state),i}getCurrentResult(){return this.#t}trackResult(e,t){return new Proxy(e,{get:(e,r)=>(this.trackProp(r),t?.(r),"promise"===r&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#a.status||this.#a.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,r))})}trackProp(e){this.#y.add(e)}getCurrentQuery(){return this.#u}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#v({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#v(e){this.#_();let t=this.#u.fetch(this.options,e);return e?.throwOnError||(t=t.catch(o.noop)),t}#w(){this.#C();let e=(0,o.resolveStaleTime)(this.options.staleTime,this.#u);if(h.environmentManager.isServer()||this.#t.isStale||!(0,o.isValidTimeout)(e))return;let t=(0,o.timeUntilStale)(this.#t.dataUpdatedAt,e);this.#f=f.timeoutManager.setTimeout(()=>{this.#t.isStale||this.updateResult()},t+1)}#I(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#u):this.options.refetchInterval)??!1}#k(e){this.#R(),this.#g=e,!h.environmentManager.isServer()&&!1!==(0,o.resolveQueryBoolean)(this.options.enabled,this.#u)&&(0,o.isValidTimeout)(this.#g)&&0!==this.#g&&(this.#b=f.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||c.focusManager.isFocused())&&this.#v()},this.#g))}#x(){this.#w(),this.#k(this.#I())}#C(){void 0!==this.#f&&(f.timeoutManager.clearTimeout(this.#f),this.#f=void 0)}#R(){void 0!==this.#b&&(f.timeoutManager.clearInterval(this.#b),this.#b=void 0)}createResult(e,t){let r,s=this.#u,i=this.options,n=this.#t,a=this.#c,u=this.#h,l=e!==s?e.state:this.#l,{state:c}=e,h={...c},p=!1;if(t._optimisticResults){let r=this.hasListeners(),n=!r&&g(e,t),o=r&&v(e,s,t,i);(n||o)&&(h={...h,...(0,d.fetchState)(c.data,e.options)}),"isRestoring"===t._optimisticResults&&(h.fetchStatus="idle")}let{error:f,errorUpdatedAt:b,status:y}=h;r=h.data;let C=!1;if(void 0!==t.placeholderData&&void 0===r&&"pending"===y){let e;n?.isPlaceholderData&&t.placeholderData===u?.placeholderData?(e=n.data,C=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#m?.state.data,this.#m):t.placeholderData,void 0!==e&&(y="success",r=(0,o.replaceData)(n?.data,e,t),p=!0)}if(t.select&&void 0!==r&&!C)if(n&&r===a?.data&&t.select===this.#d)r=this.#p;else try{this.#d=t.select,r=t.select(r),r=(0,o.replaceData)(n?.data,r,t),this.#p=r,this.#o=null}catch(e){this.#o=e}this.#o&&(f=this.#o,r=this.#p,b=Date.now(),y="error");let R="fetching"===h.fetchStatus,_="pending"===y,w="error"===y,I=_&&R,k=void 0!==r,T={status:y,fetchStatus:h.fetchStatus,isPending:_,isSuccess:"success"===y,isError:w,isInitialLoading:I,isLoading:I,data:r,dataUpdatedAt:h.dataUpdatedAt,error:f,errorUpdatedAt:b,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:h.dataUpdateCount>l.dataUpdateCount||h.errorUpdateCount>l.errorUpdateCount,isFetching:R,isRefetching:R&&!_,isLoadingError:w&&!k,isPaused:"paused"===h.fetchStatus,isPlaceholderData:p,isRefetchError:w&&k,isStale:x(e,t),refetch:this.refetch,promise:this.#a,isEnabled:!1!==(0,o.resolveQueryBoolean)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==T.data,r="error"===T.status&&!t,i=e=>{r?e.reject(T.error):t&&e.resolve(T.data)},n=()=>{i(this.#a=T.promise=(0,m.pendingThenable)())},o=this.#a;switch(o.status){case"pending":e.queryHash===s.queryHash&&i(o);break;case"fulfilled":(r||T.data!==o.value)&&n();break;case"rejected":r&&T.error===o.reason||n()}}return T}updateResult(){let e=this.#t,t=this.createResult(this.#u,this.options);if(this.#c=this.#u.state,this.#h=this.options,void 0!==this.#c.data&&(this.#m=this.#u),(0,o.shallowEqualObjects)(t,e))return;this.#t=t;let r=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#y.size)return!0;let s=new Set(r??this.#y);return this.options.throwOnError&&s.add("error"),Object.keys(this.#t).some(t=>this.#t[t]!==e[t]&&s.has(t))};this.#n({listeners:r()})}#_(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#u)return;let t=this.#u;this.#u=e,this.#l=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#x()}#n(e){i.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#t)}),this.#e.getQueryCache().notify({query:this.#u,type:"observerResultsUpdated"})})}};function g(e,t){return!1!==(0,o.resolveQueryBoolean)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==(0,o.resolveQueryBoolean)(t.retryOnMount,e))||void 0!==e.state.data&&y(e,t,t.refetchOnMount)}function y(e,t,r){if(!1!==(0,o.resolveQueryBoolean)(t.enabled,e)&&"static"!==(0,o.resolveStaleTime)(t.staleTime,e)){let s="function"==typeof r?r(e):r;return"always"===s||!1!==s&&x(e,t)}return!1}function v(e,t,r,s){return(e!==t||!1===(0,o.resolveQueryBoolean)(s.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&x(e,r)}function x(e,t){return!1!==(0,o.resolveQueryBoolean)(t.enabled,e)&&e.isStaleByTime((0,o.resolveStaleTime)(t.staleTime,e))}e.i(47167),e.i(43476);var C=r.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),R=r.createContext(!1);R.Provider;var _=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});let w=`
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
`,I=`
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
`,k=`
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
`,Q=`
  mutation ChangeTodoStatus($id: Int!, $newStatus: String!) {
    changeTodoStatus(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`,S=`
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
`,O=`
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
`,E=`
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
`;var j=e.i(6193),$=e.i(81949);e.s(["useChangeTodoStatus",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({id:e,newStatus:t})=>(0,j.graphqlRequest)(Q,{id:e,newStatus:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useCreateTodo",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:e=>(0,j.graphqlRequest)(I,{input:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteAllTrash",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`delete_${e.id}: deleteTodo(id: ${e.id}) { id success }`).join("\n"),r=`
        mutation DeleteAllTrash {
          ${t}
        }`;return(0,j.graphqlRequest)(r,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteTodos",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:e=>(0,j.graphqlRequest)(k,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useTodos",0,e=>(function(e,t,s){let n,a=r.useContext(R),l=r.useContext(C),c=(0,u.useQueryClient)(s),d=c.defaultQueryOptions(e);c.getDefaultOptions().queries?._experimental_beforeQuery?.(d);let p=c.getQueryCache().get(d.queryHash),m=!1!==e.subscribed;if(d._optimisticResults=a?"isRestoring":m?"optimistic":void 0,d.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=d.staleTime;d.staleTime="function"==typeof t?(...r)=>e(t(...r)):e(t),"number"==typeof d.gcTime&&(d.gcTime=Math.max(d.gcTime,1e3))}n=p?.state.error&&"function"==typeof d.throwOnError?(0,o.shouldThrowError)(d.throwOnError,[p.state.error,p]):d.throwOnError,(d.suspense||d.experimental_prefetchInRender||n)&&!l.isReset()&&(d.retryOnMount=!1),r.useEffect(()=>{l.clearReset()},[l]);let f=!c.getQueryCache().get(d.queryHash),[b]=r.useState(()=>new t(c,d)),g=b.getOptimisticResult(d),y=!a&&m;if(r.useSyncExternalStore(r.useCallback(e=>{let t=y?b.subscribe(i.notifyManager.batchCalls(e)):o.noop;return b.updateResult(),t},[b,y]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),r.useEffect(()=>{b.setOptions(d)},[d,b]),d?.suspense&&g.isPending)throw _(d,b,l);if((({result:e,errorResetBoundary:t,throwOnError:r,query:s,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&s&&(i&&void 0===e.data||(0,o.shouldThrowError)(r,[e.error,s])))({result:g,errorResetBoundary:l,throwOnError:d.throwOnError,query:p,suspense:d.suspense}))throw g.error;if(c.getDefaultOptions().queries?._experimental_afterQuery?.(d,g),d.experimental_prefetchInRender&&!h.environmentManager.isServer()&&g.isLoading&&g.isFetching&&!a){let e=f?_(d,b,l):p?.promise;e?.catch(o.noop).finally(()=>{b.updateResult()})}return d.notifyOnChangeProps?g:b.trackResult(g)})({queryKey:["todosList",e],queryFn:async()=>await (0,j.graphqlRequest)(w,{status:e})},b,void 0),"useToggleChecklistItem",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({todoId:e,itemId:t})=>(0,j.graphqlRequest)(S,{todoId:e,itemId:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUnarchiveAll",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`unarchive_${e.id}: changeTodoStatus(id: ${e.id}, newStatus: NOTES) { id }`).join("\n"),r=`
        mutation UnarchiveAll {
          ${t}
        }
      `;return(0,j.graphqlRequest)(r,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUncheckAllItems",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:e=>(0,j.graphqlRequest)(O,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateGlobalBackground",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:async e=>{let t=localStorage.getItem("access_token");return(await $.default.put("/api/background",{backgroundImage:e},{headers:{Authorization:`Bearer ${t}`}})).data},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodo",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({id:e,input:t})=>(0,j.graphqlRequest)(T,{id:e,input:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodoBackground",0,()=>{let e=(0,u.useQueryClient)();return l({mutationFn:({id:e,backgroundImage:t})=>(0,j.graphqlRequest)(E,{id:e,backgroundImage:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})}],22682)},80416,e=>{"use strict";var t=e.i(43476);e.i(85269);var r=e.i(22831);let s=({className:e})=>(0,t.jsx)("svg",{width:"95",height:"95",viewBox:"0 0 95 95",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,children:(0,t.jsx)("path",{d:"M92.1959 2.1959C90.7894 0.789867 88.8821 0 86.8934 0C84.9047 0 82.9974 0.789867 81.5909 2.1959L47.1959 36.5909L12.8009 2.1959C11.3944 0.789867 9.48713 0 7.4984 0C5.50967 0 3.60236 0.789867 2.1959 2.1959C0.789867 3.60236 0 5.50967 0 7.4984C0 9.48713 0.789867 11.3944 2.1959 12.8009L36.5909 47.1959L2.1959 81.5909C0.789867 82.9974 0 84.9047 0 86.8934C0 88.8821 0.789867 90.7894 2.1959 92.1959C3.60236 93.6019 5.50967 94.3918 7.4984 94.3918C9.48713 94.3918 11.3944 93.6019 12.8009 92.1959L47.1959 57.8009L81.5909 92.1959C82.9974 93.6019 84.9047 94.3918 86.8934 94.3918C88.8821 94.3918 90.7894 93.6019 92.1959 92.1959C93.6019 90.7894 94.3918 88.8821 94.3918 86.8934C94.3918 84.9047 93.6019 82.9974 92.1959 81.5909L57.8009 47.1959L92.1959 12.8009C93.6019 11.3944 94.3918 9.48713 94.3918 7.4984C94.3918 5.50967 93.6019 3.60236 92.1959 2.1959Z",fill:"currentColor"})});var i=e.i(6648),n=e.i(30917);let o=n.default.div.withConfig({displayName:"ErrorView.styles__ErrorContainer",componentId:"sc-999fd327-0"})`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding: 40px;
  min-height: 60vh;

  .crossIcon {
    width: 95px;
    height: 95px;
    color: var(--text-main);
  }

  h1 {
    font:
      600 3.75rem "Inter",
      sans-serif;
    color: var(--text-main);
    margin: 0;
  }

  p {
    font:
      600 3.75rem "Inter",
      sans-serif;
    color: var(--text-main);
    margin: 0;
  }
`;e.s(["default",0,({message:e,onRetry:n})=>{let{t:a}=(0,r.useTranslation)();return(0,t.jsxs)(o,{role:"alert",children:[(0,t.jsx)(s,{className:"crossIcon"}),(0,t.jsx)("h1",{children:a("error_view.title")}),(0,t.jsx)("p",{children:e||a("error_view.default_message")}),n&&(0,t.jsx)(i.default,{onClick:n,children:a("error_view.retry")})]})}],80416)},23453,e=>{e.v({actions:"Pages-module___let5W__actions",actionsTitle:"Pages-module___let5W__actionsTitle",buttonWrapper:"Pages-module___let5W__buttonWrapper",errorContent:"Pages-module___let5W__errorContent",errorPageWrapper:"Pages-module___let5W__errorPageWrapper",listView:"Pages-module___let5W__listView",noteCardsWrapper:"Pages-module___let5W__noteCardsWrapper",profileCard:"Pages-module___let5W__profileCard",userInfo:"Pages-module___let5W__userInfo",zeroActiveNotes:"Pages-module___let5W__zeroActiveNotes"})},88195,e=>{e.v({checkboxRow:"NoteCard-module__lOXE6W__checkboxRow",noteText:"NoteCard-module__lOXE6W__noteText",notesList:"NoteCard-module__lOXE6W__notesList"})},46430,57252,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.i(85269);var s=e.i(22831),i=e.i(88195);let n=r.default.memo(({items:e,showCheckboxes:r,onCheckboxChange:n,noteId:o,content:a})=>{let{t:u}=(0,s.useTranslation)(),l=Array.isArray(e)?e:[];return(0,t.jsx)("div",{className:i.default.notesList,children:r?l.length>0?l.map(e=>{let r=`note-${o}-item-${e.id}`;return(0,t.jsxs)("div",{className:i.default.checkboxRow,children:[(0,t.jsx)("input",{type:"checkbox",id:r,checked:e.isCompleted,onChange:()=>n(e.id)}),(0,t.jsx)("label",{htmlFor:r,children:e.text})]},e.id)}):(0,t.jsx)("p",{className:i.default.noteText,children:u("note_card.no_items")}):(0,t.jsx)("div",{className:i.default.contentWrapper,children:(0,t.jsx)("p",{className:i.default.noteText,children:a||u("note_card.no_description")})})})});var o=e.i(30917),a=e.i(48787);let u={"bottom-right":o.css`
    top: 100%;
    left: 100%;
    right: auto;
    bottom: auto;
  `,"bottom-left":o.css`
    top: 100%;
    right: 100%;
    left: auto;
    bottom: auto;
  `,"top-right":o.css`
    bottom: 100%;
    left: 100%;
    top: auto;
    right: auto;
  `,"top-left":o.css`
    bottom: 100%;
    right: 100%;
    top: auto;
    left: auto;
  `},l={"bottom-right":"top left","bottom-left":"top right","top-right":"bottom left","top-left":"bottom right"},c=(0,o.default)(a.animated.div).withConfig({displayName:"KebabMenu.styles__KebabMenuContainer",componentId:"sc-c83678b-0"})`
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
  transform-origin: ${({$placement:e})=>l[e]};

  ${({$placement:e})=>u[e]}
`,h=o.default.div.withConfig({displayName:"KebabMenu.styles__KebabMenuItem",componentId:"sc-c83678b-1"})`
  padding: 8px 16px;
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-menu-link-hover);
    border-radius: 8px;
  }
`,d=r.default.memo(({pageType:e,onDelete:i,onUnarchive:n,onArchive:o,onToggleCheckboxes:a,showCheckboxes:u,onUncheckAll:l,placement:d="bottom-right",menuRef:p,springStyle:m})=>{let{t:f}=(0,s.useTranslation)(),b=(0,r.useCallback)((e,t)=>{("Enter"===e.key||" "===e.key)&&t&&(e.preventDefault(),t())},[]);return(0,t.jsxs)(c,{ref:p,$placement:d,style:m,onClick:e=>e.stopPropagation(),role:"menu","aria-label":"Note options",children:["notes"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{role:"menuitem","data-testid":"delete-note-btn",tabIndex:0,onClick:i,onKeyDown:e=>b(e,i),children:f("kebab_menu.delete")}),(0,t.jsx)(h,{role:"menuitem",tabIndex:0,onClick:a,onKeyDown:e=>b(e,a),children:f(u?"kebab_menu.hide_checkboxes":"kebab_menu.show_checkboxes")}),l&&(0,t.jsx)(h,{role:"menuitem",tabIndex:0,onClick:l,onKeyDown:e=>b(e,l),children:f("kebab_menu.uncheck_all")}),(0,t.jsx)(h,{role:"menuitem",tabIndex:0,"data-testid":"archive-note-btn",onClick:o,onKeyDown:e=>b(e,o),children:f("kebab_menu.archive")})]}),"trash"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{"data-testid":"permanent-delete-btn",role:"menuitem",tabIndex:0,onClick:i,onKeyDown:e=>b(e,i),children:f("kebab_menu.delete_forever")}),(0,t.jsx)(h,{role:"menuitem",tabIndex:0,onClick:o,onKeyDown:e=>b(e,o),children:f("kebab_menu.archive")})]}),"archive"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{"data-testid":"unarchive-note-btn",role:"menuitem",tabIndex:0,onClick:n,onKeyDown:e=>b(e,n),children:f("kebab_menu.unarchive")}),(0,t.jsx)(h,{role:"menuitem",tabIndex:0,onClick:i,onKeyDown:e=>b(e,i),children:f("kebab_menu.delete")})]})]})});var p=e.i(22682);let m=o.default.div.withConfig({displayName:"NoteList.styles__CardWrapper",componentId:"sc-e1f9ee79-0"})`
  background-color: var(--bg-layout-edge);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 18px;
  position: relative;
  width: ${({$viewType:e})=>"list"===e?"100%":"280px"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  z-index: ${({$isMenuOpen:e})=>e?20:1};
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  background-image: ${({$backgroundImage:e})=>e?`url("${e}")`:"none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({$viewType:e})=>"list"===e&&"min-height: 100px; display: flex; align-items: flex-start; gap: 40px; flex-direction:column;"}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-color: var(--input-focus);
    z-index: ${({$isMenuOpen:e})=>e?20:2};
  }

  height: 100%;
  max-height: 400px;
  overflow: visible;

  @media (max-width: 1040px) {
    width: 100%;
  }
`,f=o.default.p.withConfig({displayName:"NoteList.styles__NoteTitle",componentId:"sc-e1f9ee79-1"})`
  color: var(--text-main);
  font: 600 1.25rem "Inter";
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  margin-bottom: ${({$viewType:e})=>"list"===e?"0":"12px"};
  min-width: ${({$viewType:e})=>"list"===e?"200px":"auto"};
`,b=o.default.div.withConfig({displayName:"NoteList.styles__KebabAnchor",componentId:"sc-e1f9ee79-2"})`
  position: absolute;
  bottom: 18px;
  right: 18px;
  z-index: 1;
`,g=o.default.button.withConfig({displayName:"NoteList.styles__KebabButton",componentId:"sc-e1f9ee79-3"})`
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
`;var y=e.i(65658);let v=["bottom-left","top-right","top-left"];function x(e,t,r){switch(e){case"bottom-right":return{top:t.bottom,left:t.right,bottom:t.bottom+r.height,right:t.right+r.width};case"bottom-left":return{top:t.bottom,left:t.left-r.width,bottom:t.bottom+r.height,right:t.left};case"top-right":return{top:t.top-r.height,left:t.right,bottom:t.top,right:t.right+r.width};case"top-left":return{top:t.top-r.height,left:t.left-r.width,bottom:t.top,right:t.left}}}function C(e,t,r){return e.top>=r&&e.left>=r&&e.bottom<=t.height-r&&e.right<=t.width-r}let R=r.default.memo(({pageType:e,id:i,onDelete:o,onUnarchive:a,onArchive:u,onEdit:l,title:c,content:h,viewType:R,items:_=[],backgroundImage:w=null,userId:I,status:k})=>{let{t:T}=(0,s.useTranslation)(),[Q,S]=(0,r.useState)(!1),[O,E]=(0,r.useState)(!1),j=(0,r.useRef)(null),$=(0,r.useRef)(null),q=function(e,t,s){let[i,n]=(0,r.useState)("bottom-right");return(0,r.useLayoutEffect)(()=>{if(!e)return;let r=()=>{let e=t.current,r=s.current;if(!e||!r)return;let i=e.getBoundingClientRect(),o=r.getBoundingClientRect();n(function(e,t,r={width:window.innerWidth,height:window.innerHeight},s=8){let i="bottom-right";if(C(x(i,e,t),r,s))return i;for(let i of v)if(C(x(i,e,t),r,s))return i;return"top-left"}(i,{width:o.width,height:o.height}))};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[e,t,s]),i}(Q,j,$),{mutate:M}=(0,p.useToggleChecklistItem)(),{mutate:L}=(0,p.useUncheckAllItems)(),D=(0,y.useTransition)(Q,{from:{opacity:0,transform:"scale(0.9)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0.9)"},config:{tension:300,friction:20}}),F=(0,r.useCallback)(e=>{M({todoId:i,itemId:e})},[i,M]),P=(0,r.useCallback)(()=>{L(i),S(!1)},[i,L]),K=(0,r.useCallback)(()=>{E(e=>!e),S(!1)},[]),U=(0,r.useCallback)(()=>o(i),[i,o]),W=(0,r.useCallback)(()=>u?.(i),[i,u]),B=(0,r.useCallback)(()=>a?.(i),[i,a]),N=(0,r.useCallback)(()=>S(!1),[]),A=(0,r.useCallback)(e=>{e.stopPropagation(),S(e=>!e)},[]),z=(0,r.useCallback)(()=>{"notes"===e&&l&&l({id:i,title:c??"",content:h,items:_,backgroundImage:w??void 0,userId:I??0,status:k})},[e,l,i,c,h,_,w,I,k]),H=_?.some(e=>e.isCompleted);return(0,t.jsxs)(m,{"data-testid":"card-wrapper",$viewType:R,$isMenuOpen:Q,$backgroundImage:w,onMouseLeave:N,onClick:"notes"===e?z:void 0,"aria-expanded":Q,children:[(0,t.jsx)(f,{$viewType:R,children:c}),(0,t.jsx)("div",{onClick:e=>e.stopPropagation(),children:(0,t.jsx)(n,{items:_,showCheckboxes:O,onCheckboxChange:F,noteId:i,content:h})}),(0,t.jsxs)(b,{ref:j,children:[(0,t.jsx)(g,{onClick:A,"data-testid":"kebab-menu-btn","aria-label":T("note_list.menu_label"),"aria-haspopup":"menu",children:(0,t.jsx)("img",{src:"/assets/images/menu.svg",alt:"kebab-menu","aria-hidden":"true"})}),D((r,s)=>s?(0,t.jsx)(d,{pageType:e,onDelete:U,onToggleCheckboxes:K,showCheckboxes:O,onArchive:W,onUnarchive:B,onUncheckAll:O&&H?P:void 0,placement:q,menuRef:$,springStyle:r}):null)]})]})});e.s(["default",0,R],46430);var _=r,w=e.i(80416);class I extends _.Component{state={hasError:!1};static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary catch:",e,t)}render(){return this.state.hasError?(0,t.jsx)(w.default,{}):this.props.children}}e.s(["default",0,I],57252)}]);