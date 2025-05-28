import{r as o,dm as W,k as X,dn as Y,a9 as x,j as t,dp as z,dq as B,dr as L,Q as E,T as I,aS as T,s as l,v as w,L as F,i as K,aR as Q,ds as q,f as D,A as U,dt as P,du as A,b8 as G,b9 as J,dv as V,at as $,S as Z,I as M,dw as g,bK as N,dx as ee,dy as te,dz as ne,dc as se,dd as re,de as C}from"./main.BJ1Zz46B.js";function oe(){const e=o.useRef(!1);return o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),o.useCallback(()=>e.current,[])}const k={width:void 0,height:void 0};function ie(e){const{ref:n,box:s="content-box"}=e,[{width:r,height:c},a]=o.useState(k),f=oe(),i=o.useRef({...k}),p=o.useRef(void 0);return p.current=e.onResize,o.useEffect(()=>{if(!n.current||typeof window>"u"||!("ResizeObserver"in window))return;const m=new ResizeObserver(([u])=>{const d=s==="border-box"?"borderBoxSize":s==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",h=R(u,d,"inlineSize"),j=R(u,d,"blockSize");if(i.current.width!==h||i.current.height!==j){const S={width:h,height:j};i.current.width=h,i.current.height=j,p.current?p.current(S):f()&&a(S)}});return m.observe(n.current,{box:s}),()=>{m.disconnect()}},[s,n,f]),{width:r,height:c}}function R(e,n,s){return e[n]?Array.isArray(e[n])?e[n][0][s]:e[n][s]:n==="contentBoxSize"?e.contentRect[s==="inlineSize"?"width":"height"]:void 0}function ce(){const e=o.useRef(null),[n,s]=o.useState({width:0,height:0,scrollWidth:0,scrollHeight:0}),r=o.useCallback(()=>{s({width:e.current?.offsetWidth||0,height:e.current?.offsetHeight||0,scrollWidth:e.current?.scrollWidth||0,scrollHeight:e.current?.scrollHeight||0})},[]);return ie({ref:e,onResize:r}),[e,n]}const ae=(e,n,s)=>{const r=new Date,c=W.stringify({utm_source:"tonkeeper",utm_campaign:n==="recommendation"?"recom":`feat-${r.getMonth()+1}-${r.getFullYear()}`,utm_medium:s}),a=e.includes("?")?"&":"?";return`${e}${a}${c}`};function v(e,n,s,r){const c=o.useRef(n);o.useLayoutEffect(()=>{c.current=n},[n]),o.useEffect(()=>{if(!e)return;const a=s?.current??window;if(!(a&&a.addEventListener))return;const f=i=>c.current(i);return a.addEventListener(e,f,r),()=>{a.removeEventListener(e,f,r)}},[e,s,r])}function de({callback:e,precisionXPx:n,precisionYPx:s}){const r=o.useRef({clientX:0,clientY:0}),c=o.useRef(null),a=o.useCallback(i=>{r.current={clientY:i.clientY,clientX:i.clientX}},[]),f=o.useCallback(i=>{const p=Math.abs(i.clientX-r.current.clientX)<(n??10),m=Math.abs(i.clientY-r.current.clientY)<(s??10);p&&m&&e()},[e,n,s]);return v("mousedown",a,c),v("mouseup",f,c),c}function H(e,n,s){const r=X(),c=Y(),a=o.useCallback(()=>{c(e,n),r.openPage(ae(e,n,s),{forceExternalBrowser:!0})},[e,r,c]);return de({callback:a})}const ue=l.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 1rem;
    gap: 1rem;
`,le=l.button`
    border: none;
    background: transparent;
    height: fit-content;
    width: fit-content;
    color: ${e=>e.theme.textAccent};
    cursor: pointer;
    padding: 4px 8px;
`,he=l.div`
    padding-left: 1rem;
    padding-right: 1rem;
`,y=l(w)`
    width: ${e=>e.width} !important;
    margin-left: ${e=>e.marginLeft} !important;
    margin-bottom: 0;
`,O=l.div`
    margin-left: auto;
    margin-right: 1rem;
    color: ${e=>e.theme.iconTertiary};
    transition: transform 0.15s ease;
`,fe=l(F)`
    padding-left: 1rem;

    &:hover ${O} {
        transform: translateX(2px);
    }
`,pe=({category:e,className:n})=>{const{t:s}=K(),{browserLength:r}=x(),[c,{width:a}]=ce(),f=a-36,i=o.useMemo(()=>e.apps.reduce((u,d,h)=>(h%(r??3)===0?u.push([d]):u[u.length-1].push(d),u),[]),[e.apps]),p=o.useMemo(()=>i.map(u=>u.map(d=>d.url).join("")),[i]),m=i.length>1;return t.jsxs("div",{className:n,ref:c,children:[t.jsxs(ue,{children:[t.jsx(Q,{children:e.title}),m&&t.jsx(q,{to:U.browser+P.category+"/"+e.id,children:t.jsx(le,{children:t.jsx(D,{children:s("browser_apps_all")})})})]}),m?t.jsx(A,{gap:"8px",infinite:!1,children:i.map((u,d)=>t.jsx(y,{width:d===0||d===i.length-1?(f-28).toString()+"px":"unset",marginLeft:d===0?"-34px":"0",children:u.map(h=>t.jsx(b,{item:h},h.url))},p[d]))}):i.map((u,d)=>t.jsx(he,{children:t.jsx(y,{width:"100%",children:u.map(h=>t.jsx(b,{item:h},h.url))},p[d])},p[d]))]})},b=({item:e})=>{const{tonendpoint:n}=x(),s=H(e.url,"recommendation",n.getTrack());return t.jsx(fe,{ref:s,children:t.jsxs(z,{children:[t.jsx(B,{src:e.icon}),t.jsxs(L,{children:[t.jsx(E,{children:e.name}),t.jsx(I,{children:e.description})]}),t.jsx(O,{children:t.jsx(T,{})})]})},e.url)};function me(e){let n=e.length;for(;n!=0;){let s=Math.floor(Math.random()*n);n--,[e[n],e[s]]=[e[s],e[n]]}}function _(){const{tonendpoint:e}=x();return G([J.featuredRecommendations],async()=>{const n=await e.getAppsPopular();return n.categories=n.categories.filter(s=>s.id!=="featured"),n.apps&&me(n.apps),n})}const ge=()=>{const{id:e}=V(),{data:n}=_(),s=n?.categories.find(r=>r.id===e);return t.jsxs($,{children:[t.jsx(Z,{title:s?.title}),t.jsx(M,{children:s?t.jsx(w,{children:s.apps.map(r=>t.jsx(b,{item:r},r.url))}):t.jsxs(w,{children:[t.jsx(g,{}),t.jsx(g,{}),t.jsx(g,{}),t.jsx(g,{}),t.jsx(g,{})]})})]})},xe=l.div`
    width: 100%;
    aspect-ratio: 2 / 1;

    background-image: ${e=>`url(${e.img})`};
    background-size: cover;
    border-radius: ${e=>e.theme.cornerSmall};

    display: inline-flex !important;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
`,je=l(z)`
    margin-left: 1rem;
`,we=({apps:e,className:n,...s})=>{const c=N().featured_play_interval||1e3*10;return t.jsx(A,{className:n,gap:"8px",autoplay:!0,centerPadding:"16px",autoplaySpeed:c,...s,children:e.map(a=>t.jsx(be,{item:a},a.url))})},be=({item:e})=>{const{tonendpoint:n}=x(),s=H(e.url,"featured",n.getTrack());return t.jsx(xe,{img:e.poster,ref:s,children:t.jsxs(je,{children:[t.jsx(B,{src:e.icon}),t.jsxs(L,{color:e.textColor,children:[t.jsx(E,{children:e.name}),t.jsx(I,{children:e.description})]})]})})},Se=l(M)`
    padding: 0;
`,Ce=l(we)`
    margin-bottom: 1rem;
`,ke=l(pe)`
    margin-bottom: 1rem;
`,Re=l.div`
    padding: 0 1rem;
`,ve=()=>{const{data:e}=_(),n=ee();return o.useEffect(()=>{e&&n()},[n,e]),t.jsxs($,{children:[t.jsx(te,{}),t.jsx(Se,{children:e?t.jsxs(t.Fragment,{children:[e.apps.length>0?t.jsx(Ce,{apps:e.apps}):null,e.categories.map(s=>t.jsx(ke,{category:s},s.id))]}):t.jsx(Re,{children:t.jsx(ne,{})})})]})},Be=()=>{const{path:e}=se();return t.jsxs(re,{children:[t.jsx(C,{path:e+`${P.category}/:id`,component:ge}),t.jsx(C,{path:"*",component:ve})]})};export{Be as default};
