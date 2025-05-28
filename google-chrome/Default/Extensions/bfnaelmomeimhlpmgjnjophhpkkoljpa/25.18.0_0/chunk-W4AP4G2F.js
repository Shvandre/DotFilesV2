import{m as V,r as B}from"./chunk-5DMQK7BZ.js";import{Ra as O}from"./chunk-YNOMEZGR.js";import{g as _,i as M}from"./chunk-3NW35I2P.js";import{c as N}from"./chunk-VECUKCNS.js";import{b as x}from"./chunk-Z2TWY6BT.js";import{c as w,ha as L,ia as H,l as h,p as o}from"./chunk-I6U22RLL.js";import{H as D}from"./chunk-BY5XXL4W.js";import{P as I}from"./chunk-WP4K54AS.js";import{a as v}from"./chunk-57IY32VM.js";import{f as k,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var n=k(v());l();m();var d=k(v());var E=5,A=5,u=2,G=A+2*u,S=14,J=S+2*u,W=A+2*u,q=o.div`
  display: flex;
  justify-content: ${t=>t.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${t=>(t.maxVisible-1)*G+J}px;
`,z=o.div`
  align-items: center;
  display: flex;
  ${t=>t.shouldShift&&h`
      transform: translateX(calc(-${W}px * ${t.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,K=o.div`
  align-items: center;
  background-color: ${D.colors.legacy.textSecondary};
  border-radius: 95px;
  display: flex;
  height: ${E}px;
  justify-content: center;
  margin: 0 ${u}px;
  min-width: ${A}px;
  transition: all 0.3s ease-in-out;
  ${t=>t.isActive&&h`
      min-width: ${S}px;
    `}
  ${t=>t.isSmall&&h`
      min-width: 3px;
      margin: 0 ${u}px;
      height: 3px;
    `}
`,Q=o.div`
  width: ${S}px;
  height: ${E}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${u}px;
  background-color: ${D.colors.legacy.accentPrimary};
  transition: transform 0.3s ease-in-out;
  ${t=>t.position&&h`
      transform: translateX(${t.position*W}px);
    `}
`,Y=({numOfItems:t,currentIndex:i,maxVisible:a=5})=>{let e=t>a?i>a-3:!1,c=e?i-(a-3):0;return d.default.createElement(q,{shouldCenter:a>t,maxVisible:a},d.default.createElement(z,{shouldShift:e,shiftAmount:c},Array.from({length:t}).map((f,s)=>{let b=(s===i-2||s===i+2)&&e;return d.default.createElement(K,{key:`pagination-dot-${s}`,isActive:i===s,isSmall:b})}),d.default.createElement(Q,{position:i})))},j=Y;var Z=o.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${t=>t.animate?`height: ${t.shouldCollapse?t.itemHeight+26:t.itemHeight+46}px`:""}
`,R=o.div`
  transition: transform 0.5s ease;
  width: 100%;
`,F=o(N)``,U=o.div`
  visibility: ${t=>t.isVisible?"visible":"hidden"};
`,tt=o.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,et=o.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${t=>`translateX(${t.currentIndex*-100}%)`};
`,nt=o.li`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  padding: ${t=>t.isActive?"0":t.isNext||t.isPrevious?"0 6px":"0"};
  height: ${t=>t.isActive?t.itemHeight:.9*t.itemHeight}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
`,ht=({items:t,onIndexChange:i,itemHeight:a})=>{let[e,c]=(0,n.useState)(0),f=(0,n.useCallback)(()=>{c(r=>r+1)},[]),s=(0,n.useCallback)(()=>{c(r=>r-1)},[]),b=e<t.length-1,y=e>0;(0,n.useEffect)(()=>{!t.length||e>t.length-1||i(e)},[t,i,e]),(0,n.useEffect)(()=>{t.length>0&&e>=t.length&&c(t.length-1)},[e,t]);let C=t.length<=1;return n.default.createElement(Z,{animate:t.length>0,shouldCollapse:C,itemHeight:a},n.default.createElement(R,null,n.default.createElement(et,{currentIndex:e},t.map((r,p)=>n.default.createElement(nt,{key:r.key,isActive:e===p,isNext:e+1===p,isPrevious:e-1===p,itemHeight:a},r.node))),!C&&n.default.createElement(tt,null,n.default.createElement(U,{isVisible:y},n.default.createElement(F,{onClick:s},n.default.createElement(L,null))),n.default.createElement(j,{numOfItems:t.length,currentIndex:e,maxVisible:5}),n.default.createElement(U,{isVisible:b},n.default.createElement(F,{onClick:f},n.default.createElement(H,null))))))};l();m();var g=k(v());l();m();var X=t=>{if(t==="Settings: Security & Privacy")return B;if(t==="Settings: Currency")return V};var ot=g.default.lazy(()=>import("./FungibleDetailPage-CUPRXSF7.js")),_t=()=>{let{showSettingsMenu:t}=M(),{handleShowModalVisibility:i}=O(),{pushDetailView:a}=_(),e=w(),{data:[c,f]}=I(["enable-merge-collectibles","enable-unlimited-fungibles"]),s=c||f;return(0,g.useCallback)((y,C)=>{let{destinationType:r,url:p,caip19:T}=C;switch(r){case"External Link":x({url:p});break;case"Buy":i("onramp");break;case"Collectibles":s?e("/",{state:{defaultTab:"collectibles",nonce:Date.now()}}):e("/collectibles");break;case"Explore":e("/explore");break;case"Swapper":e("/swap");break;case"Settings: Claim Username":i("quickClaimUsername");break;case"Settings: Import Seed Phrase":x({url:"onboarding.html?append=true"});break;case"Connect Hardware Wallet":x({url:"connect_hardware.html"});break;case"Convert to Jito":i("convertJitoInfo",{skipDismissRouting:!0});break;case"Token":{if(!T)return;a(g.default.createElement(ot,{caip19:T,title:void 0,entryPoint:"actionBanner"}));break}default:{let $=X(r);if(!$)return;t(y,g.default.createElement($,null))}}},[e,t,i,a,s])};export{_t as a,ht as b};
//# sourceMappingURL=chunk-W4AP4G2F.js.map
