import{n as f,s as c,i as p,j as t,f as x,dF as B,U as I,r as l,o as L,dG as _,dH as b,L as y,aL as P,A as C,bQ as S,v as A,c7 as U,dI as D,dJ as K,a9 as M,bx as H,dK as J,c0 as W,dL as q,dM as z,dN as G,dO as Q,dP as V,dQ as X,dR as Y,bS as Z}from"./main.BJ1Zz46B.js";import{N as R}from"./Nfts.DY4vvDnj.js";import{e as w}from"./useSwapMobileNotification.i_qU80ol.js";import{H as ee}from"./TonActions.DtV0hPgg.js";import"./HideForState.Czycm-mQ.js";const T=c.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;

    ${e=>e.theme.proDisplayType==="mobile"&&f`
            padding: 0.5rem 1rem 0.5rem 0;
        `}
`,j=c.img`
    width: 44px;
    height: 44px;
    border-radius: ${e=>e.theme.cornerFull};

    pointer-events: none;

    ${e=>e.theme.proDisplayType==="mobile"&&f`
            width: 40px;
            height: 40px;
        `}
`,te=c.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`,se=c.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`,ne=c(x)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`,re=c(B)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.displayType==="full-width"?e.theme.backgroundContent:e.theme.backgroundContentAttention};
    color: ${e=>e.theme.textSecondary};
`,oe=c.div`
    display: flex;
    justify-content: space-between;
`,N=c(I)`
    color: ${e=>e.theme.textSecondary};
`,ie=c(x)`
    color: ${e=>e.theme.textSecondary};
`,ae=c.span`
    color: ${e=>e.theme.accentOrange};
`,v=({name:e,symbol:n,balance:o,secondary:s,fiatAmount:r,label:i,rate:a,verification:m})=>{const{t:g}=p();return t.jsxs(te,{children:[t.jsxs(se,{children:[t.jsxs(ne,{children:[n??e,i?t.jsx(re,{className:"coin-label",children:i}):null]}),t.jsx(ie,{}),t.jsx(x,{children:o})]}),t.jsxs(oe,{children:[t.jsx(N,{children:m&&m!=="whitelist"?t.jsx(ae,{children:g("approval_unverified_token")}):t.jsxs(t.Fragment,{children:[s," ",t.jsx(le,{data:a})]})}),t.jsx(N,{children:r})]})]})},ce=c.span`
  margin-left: 0.5rem;
  opacity: 0.64;

  ${e=>e.positive?f`
                color: ${e.theme.accentGreen};
            `:f`
                color: ${e.theme.accentRed};
            `}}
`,le=({data:e})=>{if(!e||!e.diff24h||e.diff24h==="0.00%")return null;const n=e.diff24h.startsWith("+");return t.jsx(ce,{positive:n,children:e.diff24h})},de=c(j)`
    border-radius: unset;
`,me=l.forwardRef(({assetAmount:e,className:n},o)=>{const s=L(),{data:r}=_(),{fiatPrice:i,fiatAmount:a}=b(r,e.relativeAmount);return t.jsx(y,{onClick:()=>s(C.coins+"/"+e.asset.id,{replace:!1}),className:n,ref:o,children:t.jsxs(T,{children:[e.asset.id===P.id?t.jsx(de,{src:e.image}):t.jsx(j,{src:e.image}),t.jsx(v,{name:e.asset.name,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:i,fiatAmount:a,label:"TRC20",rate:r})]})})}),fe=l.forwardRef(({balance:e,className:n},o)=>{const{t:s}=p(),r=L(),{data:i}=U(D.TON),{fiatPrice:a,fiatAmount:m}=b(i,e.relativeAmount);return t.jsx(y,{onClick:()=>r(C.coins+"/ton",{replace:!1}),className:n,ref:o,children:t.jsxs(T,{children:[t.jsx(j,{src:"https://wallet.tonkeeper.com/img/toncoin.svg"}),t.jsx(v,{name:s("Toncoin"),symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:a,fiatAmount:m,rate:i})]})})}),ue=l.forwardRef(({balance:e,className:n},o)=>K(e.asset)?t.jsx(me,{ref:o,assetAmount:e,className:n}):t.jsx(xe,{ref:o,balance:e,className:n})),xe=l.forwardRef(({balance:e,className:n},o)=>{const{t:s}=p(),r=L(),{fiat:i}=M(),{data:a}=H(),m=l.useMemo(()=>{const h=a?.balances.find(F=>w(F.jetton.address,e.asset.address));return h?.price?J(h.price,i):void 0},[a,i]),{fiatPrice:g,fiatAmount:O}=b(m,e.relativeAmount),$=l.useMemo(()=>a?.balances.find(h=>w(h.jetton.address,e.asset.address))?.jetton.verification,[a,i]);return t.jsx(y,{onClick:()=>r(C.coins+`/${encodeURIComponent(W(e.asset.address))}`,{replace:!1}),className:n,ref:o,children:t.jsxs(T,{children:[t.jsx(j,{src:e.asset.image}),t.jsx(v,{name:e.asset.name??s("Unknown_COIN"),verification:$,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:g,fiatAmount:O,rate:m})]})})}),k=({assets:e})=>{const[n,o]=l.useMemo(()=>[e.find(s=>s.asset.id===S.id),e.filter(s=>s.asset.id!==S.id)],[e]);return t.jsxs(t.Fragment,{children:[t.jsx(A,{noUserSelect:!0,children:t.jsx(fe,{balance:n})}),t.jsx(A,{noUserSelect:!0,children:o.map(s=>t.jsx(ue,{balance:s},s.asset.id))})]})},he=({assets:e,nfts:n})=>t.jsxs(t.Fragment,{children:[t.jsx(k,{assets:e}),t.jsx(R,{nfts:n})]}),pe=c.div`
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    justify-content: center;
    gap: 2.25rem;

    user-select: none;
`,E=c.div`
    cursor: pointer;

    padding: 0.5rem;
    margin: -0.5rem;
    box-sizing: border-box;

    ${e=>e.active?f`
                  color: ${e.theme.textPrimary};
              `:f`
                  color: ${e.theme.textSecondary};
              `}
`,je=c.div`
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: -0.5rem;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.accentBlue};
`;var d;(function(e){e[e.TOKENS=0]="TOKENS",e[e.COLLECTIBLES=1]="COLLECTIBLES"})(d||(d={}));const ge=({tab:e,onTab:n})=>{const{t:o}=p(),s=l.useRef(null),r=l.useRef(null);return l.useEffect(()=>{if(s.current&&r.current){const i=s.current.childNodes[e],a=40;r.current.style.width=a+"px",r.current.style.left=i.offsetLeft+(i.clientWidth-a)/2+"px",window.requestAnimationFrame(()=>{r.current&&(r.current.style.transition="all 0.3s ease-in-out")})}},[s,r,e]),t.jsxs(pe,{ref:s,children:[t.jsx(E,{active:e===d.TOKENS,onClick:()=>n(d.TOKENS),children:t.jsx(x,{children:o("jettons_list_title")})}),t.jsx(E,{active:e===d.COLLECTIBLES,onClick:()=>n(d.COLLECTIBLES),children:t.jsx(x,{children:o("wallet_collectibles_tab_lable")})}),t.jsx(je,{ref:r})]})},u="collectibles",Le=({assets:e,nfts:n})=>{const o=q(),[s,r]=z(),i=l.useMemo(()=>new URLSearchParams(s).get(u)==="open"?d.COLLECTIBLES:d.TOKENS,[s,o]),a=l.useCallback(m=>{m===d.COLLECTIBLES?s.has(u)||s.append(u,"open"):s.has(u)&&s.delete(u),r(s,{replace:!0})},[s,r]);return t.jsxs(t.Fragment,{children:[t.jsx(ge,{tab:i,onTab:a}),i===d.COLLECTIBLES?t.jsx(R,{nfts:n}):t.jsx(k,{assets:e})]})},be=({assets:e,nfts:n})=>e.length+n.length<11||e.length<4?t.jsx(he,{assets:e,nfts:n}):t.jsx(Le,{assets:e,nfts:n}),Ae=()=>{const{isFetched:e}=G(),{assets:n,error:o}=Q(),{data:s,isFetching:r}=V(),i=!n||r;return!s||!n||!e?t.jsx(X,{}):t.jsxs(t.Fragment,{children:[t.jsx(Y,{error:o,isFetching:i}),t.jsx(ee,{chain:Z.TON}),t.jsx(be,{assets:n,nfts:s})]})};export{Ae as default};
