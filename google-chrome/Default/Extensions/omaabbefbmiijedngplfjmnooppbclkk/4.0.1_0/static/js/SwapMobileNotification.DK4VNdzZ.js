import{k as _e,b8 as Ie,av as H,al as Xe,aa as de,cL as et,cq as tt,aC as st,gs as nt,cy as b,b$ as Q,gt as fe,c0 as le,b7 as ot,bK as at,cd as F,bs as rt,bb as it,gu as pe,gv as $e,b9 as ct,r as u,gw as dt,ca as k,bQ as ae,gx as lt,bR as pt,bS as re,i as y,j as t,K as S,eT as ue,br as Fe,be as ut,Q as v,s as i,U as Pe,N as J,e3 as mt,a9 as Ne,gy as ht,T as g,cb as Be,am as me,n as _,bZ as xt,gz as gt,cf as T,cm as te,gA as ft,ch as wt,ci as jt,cj as yt,ck as St,c7 as Oe,gB as I,c9 as bt,e5 as vt,gC as At,gD as Ct,dH as kt,g0 as Tt,g1 as G,b0 as Re,aw as _t,aX as Ee,gE as Le,co as It,o as $t,eL as Ft,gF as Pt,A as Nt,gG as Bt,bT as Me,gH as Ot,gI as Rt,gJ as Et,at as Lt,dW as Mt}from"./main.BJ1Zz46B.js";import{b as He,a as D,c as V,d as U,f as $,g as Y,e as we,h as he,i as xe,p as We,u as De}from"./useSwapMobileNotification.i_qU80ol.js";import{a as Ht,b as Wt,c as Dt,d as Vt}from"./useSwapAssets.Bd_DJwwt.js";import{E as Ut}from"./ExternalLink.CEZJI97q.js";import{E as Zt,f as qt}from"./Error.DJxZjTJ9.js";import{H as zt}from"./HideForState.Czycm-mQ.js";const je={slippagePercent:1,maxPriceImpact:.3},X=()=>{const e=_e();return Ie([H.SWAP_OPTIONS],async()=>{const s=await e.storage.get(H.SWAP_OPTIONS);return{slippagePercent:s?.slippagePercent||je.slippagePercent,maxPriceImpact:s?.maxPriceImpact||je.maxPriceImpact}})},Gt=()=>{const e=_e(),s=Xe();return de(async n=>{const o=await e.storage.get(H.SWAP_OPTIONS);await e.storage.set(H.SWAP_OPTIONS,{...o,...n}),await s.invalidateQueries([H.SWAP_OPTIONS])})};function Kt(){const e=ot(),{swapService:s}=He(),n=at(),{data:o}=X(),r=n.web_swaps_referral_address;return de(a=>{if(!o)throw new Error("SwapOptions query was not resolved yet");return s.encodeSwap({swap:Jt(a),options:{senderAddress:e.rawAddress,slippage:new F(o.slippagePercent).div(100).decimalPlaces(5).toString(),...r&&{referralAddress:b.Address.parse(r).toRawString()},...a.excessAddress&&{excessAddress:a.excessAddress}}})})}function Qt(e={}){const{mutateAsync:s}=Kt(),{data:n}=et(),{excessAccount:o}=tt(),{data:r}=st(),a=nt(),d=async(c,...l)=>({encoded:await s(...l),variant:c});return de(async c=>{const l=[d("external",c)],m=r?r.batterySettings.enabledForSwaps:!0;(e.forceCalculateBattery||n?.batteryUnitsBalance.gt(0)&&m)&&l.push(d("battery",{...c,excessAddress:b.Address.parse(o).toRawString()})),Q(c.trade.from.asset.address)||l.push(d("gasless",{...c,excessAddress:b.Address.parse(a.relayAddress).toRawString()}));const p=await Promise.all(l),f=p.find(w=>w.variant==="external").encoded,h={valid_until:(Date.now()+10*60*1e3)/1e3,messages:[{address:b.Address.parse(f.to).toString({bounceable:!0}),amount:f.value,payload:f.body}]},j=p.find(w=>w.variant==="battery")?.encoded;j&&(h.messagesVariants={[fe.BATTERY]:{messages:[{address:b.Address.parse(j.to).toString({bounceable:!0}),amount:j.value,payload:j.body}]}});const x=p.find(w=>w.variant==="gasless")?.encoded;return x&&(h.messagesVariants||(h.messagesVariants={}),h.messagesVariants[fe.GASLESS]={messages:[{address:b.Address.parse(x.to).toString({bounceable:!0}),amount:x.value,payload:x.body}],options:{asset:le(c.trade.from.asset.address)}}),h})}const Jt=e=>{if(e.provider==="stonfi")return{provider:"stonfi",stonfiTrade:e.trade.rawTrade};if(e.provider==="dedust")return{provider:"dedust",dedustTrade:e.trade.rawTrade};rt()},W=new Map,se=["stonfi","dedust"],Yt=$e([]);let N=0;function P(){const e=it(),[s,n]=pe(Yt),[o]=D(),[r]=V(),[a]=U(),[d,c]=$(),l=Y(),{swapService:m}=He(),p=Ie({queryKey:[ct.swapCalculate,o.id,r.id,a?.shiftedBy(o.decimals).toFixed(0)],queryFn:async({signal:f})=>{n([]),c(void 0),N=N+1;const h=N;if(l)return[];Se(o),Se(r);const j=dt(a,o.decimals);let x=[];return new Promise((w,Z)=>{let A=0;se.forEach(async q=>{try{const C=m.calculateSwap(ye(o.address),ye(r.address),j.toFixed(0),q);f&&(f.onabort=()=>C.cancel());const z=await C,ee=await Xt(z,e,o,r);if(h!==N){Z(new Error("Calculation cancelled"));return}const ge=B(ee)[0];x=B(x.concat(ge)),x[0].trade&&c(x[0]),n(Ye=>B([...Ye,ge])),A=A+1,A===se.length&&w(x)}catch(C){if(h!==N){Z(new Error("Calculation cancelled"));return}console.error(C);const z={provider:q,trade:null};x=B(x.concat(z)),x[0].trade&&c(x[0]),n(ee=>B([...ee,z])),A=A+1,A===se.length&&w(x)}})})},cacheTime:0});return u.useMemo(()=>({...p,fetchedSwaps:s}),[p,s])}const ye=e=>Q(e)?"ton":b.Address.isAddress(e)?e.toRawString():e,ie=e=>e==="ton"?"TON":b.Address.parse(e),B=e=>e.slice().sort((s,n)=>s.trade?n.trade?n.trade.to.weiAmount.comparedTo(s.trade.to.weiAmount):-1:1),Xt=async(e,s,n,o)=>{const r=await es(e.trades,s);if(e.provider==="dedust")return e.trades.length===0?[{provider:"dedust",trade:null}]:e.trades.map(a=>({provider:"dedust",trade:{from:new k({asset:n,weiAmount:a.fromAmount}),to:new k({asset:o,weiAmount:a.toAmount}),path:a.path.map(d=>r.find(c=>we(c.address,ie(d)))),blockchainFee:new k({asset:ae,weiAmount:a.blockchainFee}),rawTrade:a.dedustRawTrade}}));if(e.provider==="stonfi"){const a=e.trades[0];return a?[{provider:"stonfi",trade:{from:new k({asset:n,weiAmount:a.fromAmount}),to:new k({asset:o,weiAmount:a.toAmount}),blockchainFee:new k({asset:ae,weiAmount:a.blockchainFee}),rawTrade:a.stonfiRawTrade,path:a.path.map(d=>r.find(c=>we(c.address,ie(d))))}}]:[{provider:"stonfi",trade:null}]}return[]},es=async(e,s)=>{const n=e.flatMap(o=>o.path.map(ie));return Promise.all(n.map(o=>ts(s,o)))},Se=e=>{W.has(e.address)||W.set(e.address,Promise.resolve(e))},ts=async(e,s)=>{if(Q(s))return ae;if(W.has(s))return W.get(s);if(b.Address.isAddress(s)){const o=new lt(e.tonApiV2).getJettonInfo({accountId:s.toRawString()}).then(r=>({symbol:r.metadata.symbol,decimals:Number(r.metadata.decimals),name:r.metadata.name,blockchain:re.TON,address:s,id:pt(re.TON,s),image:r.preview,verification:r.verification}));return W.set(s,o),o}else throw new Error("Unable to get asset info for extra currency.")},ss=({onClick:e,isEncodingProcess:s,size:n="medium"})=>{const{t:o}=y(),[r]=U(),[a]=D(),{data:d}=he(),{isFetching:c,data:l}=P(),[m]=$(),p=xe(),{data:f}=X();return Y()?t.jsx(S,{size:n,secondary:!0,disabled:!0,children:o("swap_enter_amount")}):!c&&l?.every(w=>!w.trade)?t.jsx(S,{size:n,disabled:!0,children:o("swap_trade_is_not_available")}):c&&!m?.trade||!d||p===void 0||!f?t.jsx(S,{size:n,secondary:!0,loading:!0,children:o("continue")}):!m||!m.trade?t.jsx(S,{size:n,secondary:!0,disabled:!0,children:o("swap_trade_is_not_available")}):r?.gt(ue(d,a.decimals))?t.jsx(S,{size:n,secondary:!0,disabled:!0,children:o("swap_not_enough_funds")}):p?.gt(f.maxPriceImpact)?t.jsx(S,{size:n,secondary:!0,disabled:!0,children:o("swap_price_impact_too_high")}):t.jsx(S,{size:n,primary:!0,onClick:e,loading:s,children:o("continue")})},ns=u.forwardRef(({className:e,isDisabled:s},n)=>{const{t:o}=y(),[r,a]=Ht(),d=Fe();return t.jsx(ut,{id:"swap-search",value:r,onChange:c=>a(c),ref:n,disabled:s,label:o("swap_search"),clearButton:!0,className:e,size:"small",autoFocus:d==="swap_widget_web"?100:"notification"})}),os=i.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`,as=i(Pe)`
    display: block;
    margin-top: 4px;
    color: ${e=>e.theme.textSecondary};
`,rs=i.div`
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 24px;

    > * {
        flex: 1;
    }
`,is=i(J)`
    ${e=>e.theme.displayType==="full-width"&&"max-width: 400px;"}
`,cs=({isOpen:e,onClose:s,tokenSymbol:n})=>{const{t:o}=y();return t.jsx(t.Fragment,{children:t.jsx(is,{isOpen:e,handleClose:s,children:()=>t.jsxs(os,{children:[t.jsx(v,{children:o("swap_import_token_title").replace("%token%",n)}),t.jsx(as,{children:o("swap_unknown_token_description")}),t.jsxs(rs,{children:[t.jsx(S,{primary:!0,onClick:()=>s(!1),children:o("cancel")}),t.jsx(S,{secondary:!0,onClick:()=>s(!0),children:o("swap_import")})]})]})})})},ds=i.div`
    overflow-y: auto;
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    height: calc(100% - 54px);

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`,ls=i.div`
    width: 100%;
    height: 1px;
    background-color: ${e=>e.theme.separatorCommon};
`,ps=({walletSwapAssets:e,onSelect:s})=>{const[n,o]=u.useState(e.slice(0,25)),r=u.useRef(null);u.useEffect(()=>{o(e.slice(0,25))},[e]);const a=()=>{if(!r?.current)return;r.current.scrollHeight-r.current.clientHeight-r.current.scrollTop<300&&o(c=>e.slice(0,c.length+25))};return t.jsx(ds,{ref:r,onScroll:mt(a,100),children:e.length?n.map((d,c)=>t.jsxs(u.Fragment,{children:[t.jsx(Ue,{onClick:()=>s(d.assetAmount.asset),swapAsset:d}),c!==e.length-1&&t.jsx(ls,{})]},d.assetAmount.asset.id)):t.jsx(us,{onSelect:s})})},be=i.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.textSecondary};
`,us=({onSelect:e})=>{const{t:s}=y(),{data:n,isFetching:o}=Wt(),[r,a]=u.useState(!1),{mutate:d}=Dt();if(o)return t.jsx(be,{children:t.jsx(me,{})});if(!n)return t.jsx(be,{children:t.jsx(Pe,{children:s("swap_tokens_not_found")})});const c=l=>{a(!1),l&&(d(n.assetAmount.asset),e(n.assetAmount.asset))};return t.jsxs(t.Fragment,{children:[t.jsx(cs,{isOpen:r,onClose:c,tokenSymbol:n.assetAmount.asset.symbol}),t.jsx(Ue,{onClick:()=>a(!0),swapAsset:n})]})},ms=i.button`
    border: none;
    width: 100%;
    padding: 8px 1rem;
    display: flex;
    gap: 12px;
    background-color: transparent;

    transition: background-color 0.15s ease-in-out;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${e=>e.theme.backgroundContent};
    }
`,hs=i.img`
    height: 40px;
    width: 40px;
    border-radius: 100%;
`,xs=i.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 52px);
`,Ve=i.div`
    display: flex;
    align-items: center;
    gap: 4px;

    > *:first-child {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > ${v} {
        color: ${e=>e.theme.textPrimary};
    }

    > *:nth-child(3) {
        margin-left: auto;
    }
`,gs=i(Ut)`
    &:hover {
        > svg {
            color: ${e=>e.theme.iconSecondary};
        }
    }
`,fs=i(Ve)`
    color: ${e=>e.theme.textSecondary};

    > *:nth-child(2) {
        margin-left: auto;
    }
`,ws=i(v)`
    color: ${e=>e.isZero?e.theme.textTertiary:e.theme.textPrimary};
`,Ue=({swapAsset:e,onClick:s})=>{const n=e.assetAmount.relativeAmount.isZero(),{fiat:o}=Ne(),r=Fe();let a;Q(e.assetAmount.asset.address)?a="https://tonviewer.com/price":a=`https://tonviewer.com/${e.assetAmount.asset.address.toString({urlSafe:!0})}`;const d=c=>{c.stopPropagation()};return t.jsxs(ms,{onClick:s,children:[t.jsx(hs,{src:e.assetAmount.asset.image}),t.jsxs(xs,{children:[t.jsxs(Ve,{children:[t.jsx(v,{children:e.assetAmount.asset.symbol}),r==="swap_widget_web"?t.jsx("div",{}):t.jsx(gs,{href:a,onClick:d,children:t.jsx(ht,{})}),t.jsx(ws,{isZero:n,children:e.assetAmount.stringRelativeAmount})]}),t.jsxs(fs,{children:[t.jsx(g,{children:e.assetAmount.asset.name}),!n&&t.jsx(g,{children:Be(o,e.fiatAmount)})]})]})]})},Ze=$e(void 0),js=e=>{const[s,n]=pe(Ze);return u.useCallback(()=>n(()=>({onClose:e})),[n,e])},ys=i(J)`
    padding-bottom: 0;
`,Ss=()=>{const{t:e}=y(),[s,n]=pe(Ze),o=r=>{s?.onClose(r),n(void 0)};return t.jsx(t.Fragment,{children:t.jsx(ys,{isOpen:!!s,handleClose:()=>o(void 0),title:e("swap_tokens"),footer:t.jsx("div",{}),mobileFullScreen:!0,children:()=>t.jsx(ks,{onSelect:o})})})},bs=i(ns)`
    margin-bottom: 1rem;
`,vs=i.div`
    ${e=>e.theme.proDisplayType==="desktop"?_`
                  height: 580px;
              `:e.theme.proDisplayType==="mobile"?_`
                  height: calc(var(--app-height) - env(safe-area-inset-bottom));
              `:_`
                  height: calc(var(--app-height) - 8rem);
              `}
`,As=i.div`
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    height: 1px;
    background-color: ${e=>e.theme.separatorCommon};
`,Cs=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`,ks=({onSelect:e})=>{const s=Vt();return t.jsxs(vs,{children:[t.jsx(bs,{isDisabled:!s}),t.jsx(As,{}),s?t.jsx(ps,{onSelect:e,walletSwapAssets:s}):t.jsx(Cs,{children:t.jsx(me,{})})]})},qe=i(v)`
    display: block;
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
    color: ${e=>e.theme.textPrimary};

    transition: color 0.15s ease-in-out;
`,Ts=i.button`
    border: none;
    display: flex;
    align-items: center;
    background: none;
    padding: 0;
    cursor: pointer;
    gap: 6px;
    height: 36px;
    width: fit-content;

    &:hover {
        > ${qe} {
            color: ${e=>e.theme.textSecondary};
        }
    }
`,_s=i.img`
    height: 24px;
    width: 24px;
    border-radius: 100%;
    flex-shrink: 0;
`,ze=({token:e,onTokenChange:s,className:n})=>{const o=u.useCallback(a=>a&&s(a),[s]),r=js(o);return t.jsxs(Ts,{className:n,onClick:r,children:[t.jsx(_s,{src:e.image}),t.jsx(qe,{children:e.symbol}),t.jsx(xt,{})]})},Is=i.input`
    border: none;
    background: none;
    text-align: right;
    outline: none;
    width: 30px;
    color: ${e=>e.isErrored?e.theme.accentRed:e.theme.textPrimary};
    font-family: inherit;

    ${gt}

    &::placeholder {
        color: ${e=>e.theme.textTertiary};
    }
`,$s=({value:e,onChange:s,decimals:n,className:o,isErrored:r})=>{const[a,d]=u.useState(""),c=m=>{let p=wt(m);if(!p){d(""),s(void 0);return}if(jt(p,n)&&yt(p)){if(!p.endsWith(T())){const f=new F(te(p).replace(T(),".")),h=new F(te(a).replace(T(),"."));f.eq(h)||(s(f),p=St(p))}d(p)}};u.useEffect(()=>{if(!e)d("");else if(!a.endsWith(T()))try{new F(te(a).replace(T(),".")).eq(e)||d(ft(e))}catch{}},[e]);const l=T();return t.jsx(Is,{id:"swap-amount",value:a,onChange:m=>c(m.target.value),placeholder:`0${l}00`,className:o,isErrored:r,inputMode:"decimal"})},Fs=i(g)`
    color: ${e=>e.theme.textSecondary};
    cursor: default;
`,Ge=({amount:e,asset:s})=>{const{fiat:n}=Ne(),{data:o,isLoading:r}=Oe(le(s.address));if(!e)return t.jsx("div",{});if(!r&&!o?.prices)return t.jsx("div",{});if(r)return t.jsx(I,{width:"80px",height:"12px",margin:"2px 0"});const a=Be(n,new F(o.prices).multipliedBy(e));return t.jsxs(Fs,{children:["≈ ",a]})},ve=i(g)`
    color: ${e=>e.theme.textSecondary};
`,Ps=i.div`
    display: flex;
    height: 16px;
    align-items: center;
`,Ns=i.button`
    border: none;
    background: none;
    color: ${e=>e.theme.accentBlue};
    height: fit-content;
    margin-left: 0.5rem;

    > * {
        display: block;
        height: fit-content;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,Bs=()=>{const[e,s]=U(),[n]=D(),{data:o}=he();return t.jsx(Ke,{balance:o,decimals:n.decimals,onMax:()=>s(ue(o,n.decimals))})},Os=()=>{const[e]=V(),s=bt({address:e.address,blockchain:re.TON});return t.jsx(Ke,{balance:s,decimals:e.decimals})},Ke=({balance:e,decimals:s=0,onMax:n})=>{const{t:o}=y(),r=vt();return t.jsxs(Ps,{children:[t.jsxs(ve,{children:[o("swap_balance"),": "]}),e?t.jsx(ve,{children:r(e,s)}):t.jsx(I,{width:"80px",height:"12px",margin:"2px 0"}),n&&t.jsx(Ns,{disabled:!e||e.isZero(),onClick:n,children:t.jsx(At,{children:o("swap_max")})})]})},Rs=i.div`
    position: relative;
    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    padding: 6px 12px;
`,Es=i.div`
    color: ${e=>e.theme.textSecondary};
    gap: 8px;
    display: flex;

    padding: 4px 0;

    > *:first-child {
        margin-right: auto;
    }

    > * {
        cursor: default;
    }
`,Ls=i.div`
    display: flex;
    gap: 8px;
    padding: 6px 0;
`,Ms=i.div`
    display: flex;
    gap: 8px;
    padding: 4px 0;
    align-items: center;
    height: 16px;

    > * {
        margin-left: auto;
    }
`,Hs=i(ze)`
    flex-shrink: 0;
`,Ws=i($s)`
    flex: 1;
`,Ds=({children:e})=>{const{t:s}=y(),[n,o]=U(),[r,a]=D(),{data:d}=he();return t.jsxs(Rs,{children:[t.jsxs(Es,{children:[t.jsx(g,{children:s("swap_send")}),t.jsx(Bs,{})]}),t.jsxs(Ls,{children:[t.jsx(Hs,{token:r,onTokenChange:a}),t.jsx(Ws,{value:n,onChange:Ct(o),decimals:r.decimals,isErrored:!!d&&!!n&&n.gt(ue(d,r.decimals))})]}),t.jsx(Ms,{children:t.jsx(Ge,{amount:n,asset:r})}),e]})},Vs=i.div`
    padding: 0 12px 12px;
    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    height: fit-content;
`,Us=i.div`
    color: ${e=>e.theme.textSecondary};
    padding: 10px 0;
    display: flex;
    align-items: center;
    > * {
        cursor: default;
    }
`,Zs=()=>{const{t:e}=y();return Y()?t.jsx("div",{}):t.jsxs(Vs,{children:[t.jsx(Us,{children:t.jsx(g,{children:e("swap_provider")})}),t.jsx(Ae,{provider:"stonfi"}),t.jsx(Ae,{provider:"dedust"})]})},qs=i.div`
    height: 56px;
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    border: 1px solid ${e=>e.isActive?e.theme.accentBlue:e.theme.separatorCommon};
    padding: 0 12px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};

    transition: border-color 0.15s ease-in-out;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`,zs=i.img`
    width: 24px;
    height: 24px;
    border-radius: 6px;
`,Gs=i.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
`,Ks=i.div`
    padding: 10px 0;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,ne=i(g)`
    color: ${e=>e.theme.textSecondary};
`,Qs={stonfi:{imageUrl:"https://wallet.tonkeeper.com/img/swap/stonfi.png",label:"STON.fi"},dedust:{imageUrl:"https://wallet.tonkeeper.com/img/swap/dedust.png",label:"DeDust"}},Ae=({provider:e})=>{const{t:s}=y(),[n,o]=$(),r=n?.provider===e,{fetchedSwaps:a,isFetching:d}=P(),c=a.find(w=>w.provider===e),l=c?.trade,[m]=V(),{data:p,isFetching:f}=Oe(le(m.address)),h=a.findIndex(w=>w.provider===e)===0&&!!c?.trade,j=Qs[e],{fiatAmount:x}=kt(p,l?.to.relativeAmount||new F(0));return t.jsxs(qs,{isDisabled:!c||!l,isActive:r,onClick:()=>c&&l&&o(c),children:[t.jsx(zs,{src:j.imageUrl}),t.jsxs(Gs,{children:[t.jsx(v,{children:j.label}),h&&t.jsx(ne,{children:s("swap_best_price")})]}),t.jsx(Ks,{children:!d&&!l?t.jsx(ne,{children:s("swap_trade_is_not_available")}):t.jsxs(t.Fragment,{children:[l?t.jsx(v,{children:l.to.stringAssetRelativeAmount}):t.jsx(I,{width:"60px",height:"14px",margin:"3px 0"}),p&&l?t.jsxs(ne,{children:["≈ ",x]}):f?t.jsx(I,{width:"60px",height:"12px",margin:"2px 0"}):t.jsx("div",{})]})})]})},Qe=i.div`
    transform: translateY(-100%);
    visibility: hidden;
    transition: transform ${e=>e.$transitionMS}ms ease-in-out,
        visibility ${e=>e.$transitionMS}ms ease-in-out;
`,Js=i.div`
    display: grid;
    grid-template-rows: ${e=>e.$isOpened?"1fr":"0fr"};
    overflow: ${e=>e.$animationCompleted&&e.$isOpened?"visible":"hidden"};
    transition: grid-template-rows ${e=>e.$transitionMS}ms ease-in-out;

    ${Qe} {
        ${e=>e.$isOpened&&_`
                transform: translateY(0);
                visibility: visible;
            `}
    }
`,Ys=i.div`
    min-height: 0;
    min-width: 0;
`,Xs=({children:e,isOpened:s,transitionMS:n=200})=>{const[o,r]=u.useState(!1),a=u.useRef();return u.useEffect(()=>{clearTimeout(a.current),s?a.current=setTimeout(()=>r(!0),200):r(!1)},[s]),t.jsx(Js,{$animationCompleted:o,$isOpened:s,$transitionMS:n,children:t.jsx(Ys,{children:t.jsx(Qe,{$transitionMS:n,children:e})})})},en=i.div``,tn=i.div`
    cursor: pointer;
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${e=>e.theme.textSecondary};

    svg {
        color: ${e=>e.theme.textSecondary};
    }
`,sn=i(Ee)`
    transform: ${e=>e.isOpened?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.2s ease-in-out;
    border: none;
`,O=i.div`
    position: relative;
    display: flex;
    padding: 4px 0;
    gap: 6px;
    align-items: center;

    > * {
        cursor: default;
    }
`,M=i.div`
    pointer-events: none;
    transform: translate3d(0, -10px, 0);
    z-index: 100;
    left: 0;
    right: 0;
    transition: all 0.15s ease-in-out;
    opacity: 0;
    position: absolute;
    background-color: ${e=>e.theme.backgroundContentTint};
    padding: 8px 12px;
    ${Re};
    ${_t};

    ${e=>e.placement==="top"?_`
                  transform: translate3d(0, 10px, 0);
                  bottom: 30px;
              `:_`
                  transform: translate3d(0, -10px, 0);
                  top: 30px;
              `}
`,K=i.div`
    cursor: pointer;

    &:hover + ${M} {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`,R=i(g)`
    color: ${e=>e.theme.textSecondary};
`,E=i(g)`
    margin-left: auto;
`,L=()=>t.jsx(I,{width:"60px",height:"12px",margin:"2px 0"}),nn=i(g)`
    color: ${e=>e.status==="low"?e.theme.accentGreen:e.status==="medium"||e.status==="unknown"?e.theme.accentOrange:e.theme.accentRed};
`,Ce=()=>{const{t:e}=y(),[s,n]=u.useState(!1),{isFetching:o}=P(),[r]=$(),a=xe(),{data:d}=X(),c=Y(),l=r?.trade;if(!o&&!l||c)return null;const m=()=>{n(p=>!p)};return t.jsxs(en,{children:[t.jsxs(tn,{onClick:m,children:[t.jsx(g,{children:e("swap_tx_info")}),t.jsx(sn,{transparent:!0,isOpened:s,children:t.jsx(Tt,{})})]}),t.jsxs(Xs,{isOpened:s,children:[t.jsxs(O,{children:[t.jsx(R,{children:e("swap_price_impact")}),t.jsx(K,{children:t.jsx(G,{})}),t.jsx(M,{placement:"top",children:e("swap_price_impact_tooltip")}),t.jsx(E,{children:a===void 0||!l?t.jsx(L,{}):t.jsx(nn,{status:We(a),children:a?t.jsxs(t.Fragment,{children:["≈ ",`${a.multipliedBy(100).decimalPlaces(2).toString().replace(".",T()).replace("-","+")}%`]}):e("swap_unknown_price_impact")})})]}),t.jsxs(O,{children:[t.jsx(R,{children:e("swap_minimum_received")}),t.jsx(K,{children:t.jsx(G,{})}),t.jsx(M,{placement:"top",children:e("swap_minimum_received_tooltip")}),t.jsx(E,{children:!l||!d?t.jsx(L,{}):t.jsxs(g,{children:["≈ ",new k({weiAmount:l.to.weiAmount.multipliedBy(100-d.slippagePercent).div(100),asset:l.to.asset}).stringAssetRelativeAmount]})})]}),t.jsxs(O,{children:[t.jsx(R,{children:e("swap_slippage")}),t.jsx(K,{children:t.jsx(G,{})}),t.jsx(M,{placement:"top",children:e("swap_slippage_tooltip")}),t.jsx(E,{children:!l||!d?t.jsx(L,{}):t.jsxs(g,{children:[d.slippagePercent,"%"]})})]}),t.jsxs(O,{children:[t.jsx(R,{children:e("swap_blockchain_fee")}),t.jsx(K,{children:t.jsx(G,{})}),t.jsx(M,{placement:"top",children:e("swap_blockchain_fee_tooltip")}),t.jsx(E,{children:l?t.jsxs(g,{children:["≈ ",l.blockchainFee.stringAssetRelativeAmount]}):t.jsx(L,{})})]}),t.jsxs(O,{children:[t.jsx(R,{children:e("swap_route")}),t.jsx(E,{children:l?t.jsx(g,{children:l.path.map(p=>p.symbol).join(" → ")}):t.jsx(L,{})})]})]})]})},on=i(g)`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${e=>e.impact==="medium"?e.theme.accentOrange:e.impact==="high"?e.theme.accentRed:e.theme.textSecondary};
    cursor: pointer;
    transition: color 0.15s ease-in-out;

    &:hover {
        ${e=>e.impact!=="medium"&&e.impact!=="high"&&_`
                color: ${e.theme.textPrimary};
            `};
    }
`,an=()=>t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.18144 1.65C4.63413 0.86592 4.86047 0.473881 5.11842 0.286474C5.64415 -0.0954914 6.35604 -0.0954914 6.88177 0.286474C7.13971 0.473881 7.36606 0.86592 7.81875 1.65L11.1096 7.35L11.1097 7.35001C11.5623 8.13408 11.7887 8.52612 11.822 8.84321C11.8899 9.48949 11.534 10.106 10.9403 10.3703C10.6491 10.5 10.1964 10.5 9.29099 10.5H2.7092C1.80382 10.5 1.35113 10.5 1.05986 10.3703C0.466204 10.106 0.110258 9.48949 0.178184 8.84321C0.211512 8.52612 0.437856 8.13408 0.890544 7.35L4.18144 1.65ZM5.1001 8.1C5.1001 7.60294 5.50304 7.2 6.0001 7.2C6.49715 7.2 6.9001 7.60294 6.9001 8.1C6.9001 8.59706 6.49715 9 6.0001 9C5.50304 9 5.1001 8.59706 5.1001 8.1ZM6.00002 2C5.53718 2 5.16822 2.38674 5.18997 2.84906L5.31946 5.60072C5.33656 5.96414 5.63619 6.25 6.00002 6.25C6.36384 6.25 6.66347 5.96414 6.68057 5.60072L6.81006 2.84906C6.83182 2.38674 6.46285 2 6.00002 2Z",fill:"currentColor"})}),rn=()=>{const[e,s]=u.useState("from"),[n]=$(),{isFetching:o}=P(),r=xe(),a=o&&!n?.trade||r===void 0;if(!o&&!n?.trade)return null;if(a)return t.jsx(I,{width:"100px",height:"12px",margin:"2px 0"});const c=n.trade,l=e==="from"?c.from:c.to,m=e==="from"?c.to:c.from;if(l.relativeAmount.isZero())return null;const p=m.relativeAmount.div(l.relativeAmount),f=k.fromRelativeAmount({amount:p,asset:m.asset}),h=We(r);return t.jsxs(on,{impact:h,onClick:()=>s(j=>j==="from"?"to":"from"),children:["1 ",l.asset.symbol," ≈ ",f.stringAssetRelativeAmount,(h==="medium"||h==="high")&&t.jsx(an,{})]})},ke=i.div`
    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    padding: 6px 12px;

    &:empty {
        display: none;
    }
`,cn=i.div`
    color: ${e=>e.theme.textSecondary};
    gap: 8px;
    display: flex;

    padding: 4px 0;

    > *:first-child {
        margin-right: auto;
    }

    > * {
        cursor: default;
    }
`,dn=i.div`
    display: flex;
    gap: 8px;
    padding: 6px 0;
`,ln=i.div`
    margin-left: auto;
    overflow: auto;

    cursor: default;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`,pn=i.div`
    display: flex;
    gap: 8px;
    padding: 4px 0;
    align-items: center;
    height: 16px;

    > :last-child {
        margin-left: auto;
    }
`,un=i(ze)`
    flex-shrink: 0;
`,mn=i(Le)`
    color: ${e=>e.theme.textTertiary};
`,hn=({separateInfo:e})=>{const{t:s}=y(),[n,o]=V(),{isFetching:r}=P(),[a]=$();return t.jsxs(t.Fragment,{children:[t.jsxs(ke,{children:[t.jsxs(cn,{children:[t.jsx(g,{children:s("swap_receive")}),t.jsx(Os,{})]}),t.jsxs(dn,{children:[t.jsx(un,{token:n,onTokenChange:o}),t.jsx(ln,{children:!a?.trade&&r?t.jsx(I,{width:"100px",height:"28px",margin:"4px 0"}):a?.trade?t.jsx(Le,{children:a.trade.to.stringRelativeAmount}):t.jsx(mn,{children:"0"})})]}),t.jsxs(pn,{children:[t.jsx(rn,{}),t.jsx(Ge,{amount:a?.trade?.to.relativeAmount,asset:n})]}),!e&&t.jsx(Ce,{})]}),e&&t.jsx(ke,{children:t.jsx(Ce,{})})]})},xn=i.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,gn=i(Ee)`
    height: 32px;
    width: 32px;
    position: absolute;
    right: calc(50% - 16px);
    bottom: -20px;
    border: none;

    background-color: ${e=>e.theme.buttonTertiaryBackground};

    > svg {
        transition: color 0.15s ease-in-out;
    }

    &:hover {
        background-color: ${e=>e.theme.buttonTertiaryBackgroundHighlighted};
        > svg {
            color: ${e=>e.theme.iconPrimary};
        }
    }
`,fn=({className:e})=>{const s=It(),{isLoading:n,mutateAsync:o}=Qt(),[r,a]=u.useState(null),[d]=$(),[c,l]=D(),[m,p]=V(),[f,h]=U(),j=$t(),[x,w]=De(),Z=async()=>{const C=await o(d);a(C)},A=()=>{l(m),p(c),d?.trade&&h(d.trade.to.relativeAmount)},q=C=>{a(null),C&&(j(Nt.activity),w(!1))};return t.jsxs(xn,{className:e,children:[t.jsx(Ds,{children:t.jsx(gn,{"data-testid":"change-swap",onClick:A,children:t.jsx(Ft,{})})}),t.jsx(hn,{}),s.displayType==="compact"&&t.jsx(Zs,{}),t.jsx(ss,{onClick:Z,isEncodingProcess:n||!!r,size:s.proDisplayType==="desktop"?"medium":"large"}),t.jsx(Pt,{handleClose:q,params:r,waitInvalidation:!0}),t.jsx(Ss,{})]})},Je=i.label`
    cursor: pointer;
    ${Re};
    ${Bt};
    box-sizing: border-box;

    text-align: center;

    padding: 8px 12px;

    background: ${e=>e.theme.fieldBackground};
    border: 1px solid transparent;
    transition: border-color 0.15s ease-in-out;
`,wn=i.input`
    display: none;

    &:checked + ${Je} {
        border: 1px solid ${e=>e.theme.accentBlue};
    }
`,jn=u.forwardRef((e,s)=>{const n=u.useId(),o=e.id||n,{className:r,children:a,...d}=e;return t.jsxs(t.Fragment,{children:[t.jsx(wn,{type:"radio",ref:s,id:o,...d}),t.jsx(Je,{className:r,htmlFor:o,children:a})]})}),yn=({isOpen:e,onClose:s})=>{const{t:n}=y();return t.jsx(t.Fragment,{children:t.jsx(J,{isOpen:e,handleClose:s,title:n("swap_settings"),children:()=>t.jsx(kn,{onClose:s})})})},Sn=i.div`
    padding-bottom: 10px;

    > * {
        display: block;
        cursor: default;
    }

    > ${g} {
        color: ${e=>e.theme.textSecondary};
    }
`,bn=i.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
`,vn=i(jn)`
    height: 36px;
    flex: 1;
`,An=i.div`
    display: flex;
    gap: 0.5rem;
    > * {
        flex: 1;
    }
`,ce=[.5,1,3,5],Te=ce[1],Cn=i.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`,kn=({onClose:e})=>{const{t:s}=y(),{data:n}=X(),{mutate:o}=Gt(),[r,a]=u.useState();if(u.useLayoutEffect(()=>{n?.slippagePercent&&(ce.includes(n?.slippagePercent)?a(n?.slippagePercent):(a(Te),o({slippagePercent:Te})))},[n?.slippagePercent]),!n)return t.jsx(Cn,{children:t.jsx(me,{})});const d=()=>{o({slippagePercent:r}),e?.()};return t.jsxs(t.Fragment,{children:[t.jsxs(Sn,{children:[t.jsx(v,{children:s("swap_slippage")}),t.jsx(g,{children:s("swap_slippage_description")})]}),t.jsx(bn,{children:ce.map(c=>t.jsxs(vn,{name:"slippage-percent",value:c,checked:r===c,onChange:()=>a(c),children:[c,"%"]},c))}),t.jsxs(An,{children:[t.jsx(S,{secondary:!0,onClick:e,children:s("cancel")}),t.jsx(S,{primary:!0,disabled:r===n.slippagePercent,onClick:d,children:s("save")})]})]})},Tn=()=>{const[e,s]=u.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(Me,{onClick:()=>s(!0),children:t.jsx(Ot,{})}),t.jsx(yn,{isOpen:e,onClose:()=>s(!1)})]})};let oe=!1;const _n=()=>{const{refetch:s,isFetching:n}=P(),[o,r]=u.useState(!1);return u.useEffect(()=>{if(oe=!1,n)r(!1);else{r(!0);const a=setTimeout(()=>{oe||(s(),oe=!0)},15e3);return()=>clearTimeout(a)}},[n]),t.jsx(Me,{onClick:()=>s(),children:o?t.jsx(Rt,{}):t.jsx(Et,{})})},Wn=()=>{const[e,s]=De();return t.jsx(Lt,{children:t.jsx(zt,{feature:Mt.swap,children:t.jsx(Zt,{fallbackRender:qt("Failed to display Swap page"),children:t.jsx(J,{isOpen:e,handleClose:()=>s(!1),title:t.jsx(Pn,{}),children:()=>t.jsx(Bn,{})})})})})},In=i.div`
    position: relative;
`,$n=i.div`
    display: flex;
`,Fn=i(v)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
`,Pn=()=>{const{t:e}=y();return t.jsxs(In,{children:[t.jsxs($n,{children:[t.jsx(_n,{}),t.jsx(Tn,{})]}),t.jsx(Fn,{children:e("wallet_swap")})]})},Nn=i.div`
    overflow-y: auto;
    min-height: calc(var(--app-height) - 7rem);
`,Bn=()=>t.jsx(Nn,{children:t.jsx(fn,{})});export{Wn as default};
