(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22682,e=>{"use strict";let t;var s=e.i(71645),r=e.i(14272),i=e.i(40143),n=e.i(15823),u=e.i(19273),a=class extends n.Subscribable{#e;#t=void 0;#s;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,u.shallowEqualObjects)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,u.hashKey)(t.mutationKey)!==(0,u.hashKey)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#n(e)}getCurrentResult(){return this.#t}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#n()}mutate(e,t){return this.#r=t,this.#s?.removeObserver(this),this.#s=this.#e.getMutationCache().build(this.#e,this.options),this.#s.addObserver(this),this.#s.execute(e)}#i(){let e=this.#s?.state??(0,r.getDefaultState)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#n(e){i.notifyManager.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,s=this.#t.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#r.onSuccess?.(e.data,t,s,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(e.data,null,t,s,r)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#r.onError?.(e.error,t,s,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(void 0,e.error,t,s,r)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}},o=e.i(12598);function l(e,t){let r=(0,o.useQueryClient)(t),[n]=s.useState(()=>new a(r,e));s.useEffect(()=>{n.setOptions(e)},[n,e]);let l=s.useSyncExternalStore(s.useCallback(e=>n.subscribe(i.notifyManager.batchCalls(e)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),h=s.useCallback((e,t)=>{n.mutate(e,t).catch(u.noop)},[n]);if(l.error&&(0,u.shouldThrowError)(n.options.throwOnError,[l.error]))throw l.error;return{...l,mutate:h,mutateAsync:l.mutate}}var h=e.i(75555),c=e.i(73911),d=e.i(86491),p=n,y=e.i(93803),m=e.i(80166),f=class extends p.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#u=null,this.#a=(0,y.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#o=void 0;#l=void 0;#t=void 0;#h;#c;#a;#u;#d;#p;#y;#m;#f;#v;#R=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#o.addObserver(this),v(this.#o,this.options)?this.#g():this.updateResult(),this.#b())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return R(this.#o,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return R(this.#o,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#Q(),this.#T(),this.#o.removeObserver(this)}setOptions(e){let t=this.options,s=this.#o;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,u.resolveQueryBoolean)(this.options.enabled,this.#o))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#I(),this.#o.setOptions(this.options),t._defaulted&&!(0,u.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#o,observer:this});let r=this.hasListeners();r&&g(this.#o,s,this.options,t)&&this.#g(),this.updateResult(),r&&(this.#o!==s||(0,u.resolveQueryBoolean)(this.options.enabled,this.#o)!==(0,u.resolveQueryBoolean)(t.enabled,this.#o)||(0,u.resolveStaleTime)(this.options.staleTime,this.#o)!==(0,u.resolveStaleTime)(t.staleTime,this.#o))&&this.#S();let i=this.#C();r&&(this.#o!==s||(0,u.resolveQueryBoolean)(this.options.enabled,this.#o)!==(0,u.resolveQueryBoolean)(t.enabled,this.#o)||i!==this.#v)&&this.#O(i)}getOptimisticResult(e){var t,s;let r=this.#e.getQueryCache().build(this.#e,e),i=this.createResult(r,e);return t=this,s=i,(0,u.shallowEqualObjects)(t.getCurrentResult(),s)||(this.#t=i,this.#c=this.options,this.#h=this.#o.state),i}getCurrentResult(){return this.#t}trackResult(e,t){return new Proxy(e,{get:(e,s)=>(this.trackProp(s),t?.(s),"promise"===s&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#a.status||this.#a.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,s))})}trackProp(e){this.#R.add(e)}getCurrentQuery(){return this.#o}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),s=this.#e.getQueryCache().build(this.#e,t);return s.fetch().then(()=>this.createResult(s,t))}fetch(e){return this.#g({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#t))}#g(e){this.#I();let t=this.#o.fetch(this.options,e);return e?.throwOnError||(t=t.catch(u.noop)),t}#S(){this.#Q();let e=(0,u.resolveStaleTime)(this.options.staleTime,this.#o);if(c.environmentManager.isServer()||this.#t.isStale||!(0,u.isValidTimeout)(e))return;let t=(0,u.timeUntilStale)(this.#t.dataUpdatedAt,e);this.#m=m.timeoutManager.setTimeout(()=>{this.#t.isStale||this.updateResult()},t+1)}#C(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#o):this.options.refetchInterval)??!1}#O(e){this.#T(),this.#v=e,!c.environmentManager.isServer()&&!1!==(0,u.resolveQueryBoolean)(this.options.enabled,this.#o)&&(0,u.isValidTimeout)(this.#v)&&0!==this.#v&&(this.#f=m.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||h.focusManager.isFocused())&&this.#g()},this.#v))}#b(){this.#S(),this.#O(this.#C())}#Q(){void 0!==this.#m&&(m.timeoutManager.clearTimeout(this.#m),this.#m=void 0)}#T(){void 0!==this.#f&&(m.timeoutManager.clearInterval(this.#f),this.#f=void 0)}createResult(e,t){let s,r=this.#o,i=this.options,n=this.#t,a=this.#h,o=this.#c,l=e!==r?e.state:this.#l,{state:h}=e,c={...h},p=!1;if(t._optimisticResults){let s=this.hasListeners(),n=!s&&v(e,t),u=s&&g(e,r,t,i);(n||u)&&(c={...c,...(0,d.fetchState)(h.data,e.options)}),"isRestoring"===t._optimisticResults&&(c.fetchStatus="idle")}let{error:m,errorUpdatedAt:f,status:R}=c;s=c.data;let Q=!1;if(void 0!==t.placeholderData&&void 0===s&&"pending"===R){let e;n?.isPlaceholderData&&t.placeholderData===o?.placeholderData?(e=n.data,Q=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#y?.state.data,this.#y):t.placeholderData,void 0!==e&&(R="success",s=(0,u.replaceData)(n?.data,e,t),p=!0)}if(t.select&&void 0!==s&&!Q)if(n&&s===a?.data&&t.select===this.#d)s=this.#p;else try{this.#d=t.select,s=t.select(s),s=(0,u.replaceData)(n?.data,s,t),this.#p=s,this.#u=null}catch(e){this.#u=e}this.#u&&(m=this.#u,s=this.#p,f=Date.now(),R="error");let T="fetching"===c.fetchStatus,I="pending"===R,S="error"===R,C=I&&T,O=void 0!==s,q={status:R,fetchStatus:c.fetchStatus,isPending:I,isSuccess:"success"===R,isError:S,isInitialLoading:C,isLoading:C,data:s,dataUpdatedAt:c.dataUpdatedAt,error:m,errorUpdatedAt:f,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:c.dataUpdateCount>l.dataUpdateCount||c.errorUpdateCount>l.errorUpdateCount,isFetching:T,isRefetching:T&&!I,isLoadingError:S&&!O,isPaused:"paused"===c.fetchStatus,isPlaceholderData:p,isRefetchError:S&&O,isStale:b(e,t),refetch:this.refetch,promise:this.#a,isEnabled:!1!==(0,u.resolveQueryBoolean)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==q.data,s="error"===q.status&&!t,i=e=>{s?e.reject(q.error):t&&e.resolve(q.data)},n=()=>{i(this.#a=q.promise=(0,y.pendingThenable)())},u=this.#a;switch(u.status){case"pending":e.queryHash===r.queryHash&&i(u);break;case"fulfilled":(s||q.data!==u.value)&&n();break;case"rejected":s&&q.error===u.reason||n()}}return q}updateResult(){let e=this.#t,t=this.createResult(this.#o,this.options);if(this.#h=this.#o.state,this.#c=this.options,void 0!==this.#h.data&&(this.#y=this.#o),(0,u.shallowEqualObjects)(t,e))return;this.#t=t;let s=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.#R.size)return!0;let r=new Set(s??this.#R);return this.options.throwOnError&&r.add("error"),Object.keys(this.#t).some(t=>this.#t[t]!==e[t]&&r.has(t))};this.#n({listeners:s()})}#I(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#o)return;let t=this.#o;this.#o=e,this.#l=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#b()}#n(e){i.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#t)}),this.#e.getQueryCache().notify({query:this.#o,type:"observerResultsUpdated"})})}};function v(e,t){return!1!==(0,u.resolveQueryBoolean)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==(0,u.resolveQueryBoolean)(t.retryOnMount,e))||void 0!==e.state.data&&R(e,t,t.refetchOnMount)}function R(e,t,s){if(!1!==(0,u.resolveQueryBoolean)(t.enabled,e)&&"static"!==(0,u.resolveStaleTime)(t.staleTime,e)){let r="function"==typeof s?s(e):s;return"always"===r||!1!==r&&b(e,t)}return!1}function g(e,t,s,r){return(e!==t||!1===(0,u.resolveQueryBoolean)(r.enabled,e))&&(!s.suspense||"error"!==e.state.status)&&b(e,s)}function b(e,t){return!1!==(0,u.resolveQueryBoolean)(t.enabled,e)&&e.isStaleByTime((0,u.resolveStaleTime)(t.staleTime,e))}e.i(47167),e.i(43476);var Q=s.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),T=s.createContext(!1);T.Provider;var I=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});let S=`
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
`,O=`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      success
    }
  }
`,q=`
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
`,E=`
  mutation ChangeTodoStatus($id: Int!, $newStatus: String!) {
    changeTodoStatus(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`,M=`
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
`,w=`
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
`;var x=e.i(6193),F=e.i(81949);e.s(["useChangeTodoStatus",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:({id:e,newStatus:t})=>(0,x.graphqlRequest)(E,{id:e,newStatus:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useCreateTodo",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:e=>(0,x.graphqlRequest)(C,{input:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteAllTrash",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`delete_${e.id}: deleteTodo(id: ${e.id}) { id success }`).join("\n"),s=`
        mutation DeleteAllTrash {
          ${t}
        }`;return(0,x.graphqlRequest)(s,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useDeleteTodos",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:e=>(0,x.graphqlRequest)(O,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useTodos",0,e=>(function(e,t,r){let n,a=s.useContext(T),l=s.useContext(Q),h=(0,o.useQueryClient)(r),d=h.defaultQueryOptions(e);h.getDefaultOptions().queries?._experimental_beforeQuery?.(d);let p=h.getQueryCache().get(d.queryHash),y=!1!==e.subscribed;if(d._optimisticResults=a?"isRestoring":y?"optimistic":void 0,d.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=d.staleTime;d.staleTime="function"==typeof t?(...s)=>e(t(...s)):e(t),"number"==typeof d.gcTime&&(d.gcTime=Math.max(d.gcTime,1e3))}n=p?.state.error&&"function"==typeof d.throwOnError?(0,u.shouldThrowError)(d.throwOnError,[p.state.error,p]):d.throwOnError,(d.suspense||d.experimental_prefetchInRender||n)&&!l.isReset()&&(d.retryOnMount=!1),s.useEffect(()=>{l.clearReset()},[l]);let m=!h.getQueryCache().get(d.queryHash),[f]=s.useState(()=>new t(h,d)),v=f.getOptimisticResult(d),R=!a&&y;if(s.useSyncExternalStore(s.useCallback(e=>{let t=R?f.subscribe(i.notifyManager.batchCalls(e)):u.noop;return f.updateResult(),t},[f,R]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),s.useEffect(()=>{f.setOptions(d)},[d,f]),d?.suspense&&v.isPending)throw I(d,f,l);if((({result:e,errorResetBoundary:t,throwOnError:s,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&void 0===e.data||(0,u.shouldThrowError)(s,[e.error,r])))({result:v,errorResetBoundary:l,throwOnError:d.throwOnError,query:p,suspense:d.suspense}))throw v.error;if(h.getDefaultOptions().queries?._experimental_afterQuery?.(d,v),d.experimental_prefetchInRender&&!c.environmentManager.isServer()&&v.isLoading&&v.isFetching&&!a){let e=m?I(d,f,l):p?.promise;e?.catch(u.noop).finally(()=>{f.updateResult()})}return d.notifyOnChangeProps?v:f.trackResult(v)})({queryKey:["todosList",e],queryFn:async()=>await (0,x.graphqlRequest)(S,{status:e})},f,void 0),"useToggleChecklistItem",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:({todoId:e,itemId:t})=>(0,x.graphqlRequest)(M,{todoId:e,itemId:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUnarchiveAll",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:async e=>{if(!e||0===e.length)return null;let t=e.map(e=>`unarchive_${e.id}: changeTodoStatus(id: ${e.id}, newStatus: NOTES) { id }`).join("\n"),s=`
        mutation UnarchiveAll {
          ${t}
        }
      `;return(0,x.graphqlRequest)(s,{})},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUncheckAllItems",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:e=>(0,x.graphqlRequest)(w,{id:e}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateGlobalBackground",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:async e=>{let t=localStorage.getItem("access_token");return(await F.default.put("/api/background",{backgroundImage:e},{headers:{Authorization:`Bearer ${t}`}})).data},onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodo",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:({id:e,input:t})=>(0,x.graphqlRequest)(q,{id:e,input:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})},"useUpdateTodoBackground",0,()=>{let e=(0,o.useQueryClient)();return l({mutationFn:({id:e,backgroundImage:t})=>(0,x.graphqlRequest)(k,{id:e,backgroundImage:t}),onSuccess:()=>{e.invalidateQueries({queryKey:["todosList"]})}})}],22682)}]);