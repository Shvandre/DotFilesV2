import{a as U}from"./chunk-K2LULK7Q.js";import{a as z}from"./chunk-EA2HKHKG.js";import{c as I,g as V,l as b,n as F,o as H}from"./chunk-7IWA7VDF.js";import"./chunk-F6R6PZOR.js";import"./chunk-Z2IREGI3.js";import"./chunk-J75C23KI.js";import{a as L,b as P}from"./chunk-MOFSVQWA.js";import{a as p,b as f,e as W}from"./chunk-HUWYOARQ.js";import"./chunk-CRVSDQKM.js";import{b as S}from"./chunk-QNLMWMRR.js";import{g as k}from"./chunk-FTCKELIN.js";import"./chunk-WAL4SSJC.js";import{g as T}from"./chunk-3NW35I2P.js";import"./chunk-7TOQ3J6S.js";import{a as x}from"./chunk-QM77BPVG.js";import"./chunk-HCYB2VG2.js";import"./chunk-VECUKCNS.js";import"./chunk-VDRJSOTK.js";import"./chunk-7D7ZBNJK.js";import"./chunk-X3FFOAGQ.js";import"./chunk-7ZVEM3WY.js";import{c as w}from"./chunk-NSWARKFZ.js";import{ib as l,p as i}from"./chunk-I6U22RLL.js";import"./chunk-WUU3X3IN.js";import"./chunk-4AX42N6B.js";import"./chunk-XNDOEJ4N.js";import"./chunk-M56YM2VY.js";import"./chunk-WN5BOODY.js";import"./chunk-OCBCUAFE.js";import"./chunk-HKKBRKQE.js";import"./chunk-LWEFQGDN.js";import{$b as A}from"./chunk-3GZCHS7Y.js";import"./chunk-3LY6FUZT.js";import"./chunk-SK6BTSEQ.js";import{Fa as v,H as d,L as C,x as s}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import"./chunk-UCPKAIVR.js";import{Y as y,t as h}from"./chunk-NL7NWYRL.js";import{a as O}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as j,h as u,n as g}from"./chunk-3KENBVE7.js";u();g();var t=j(O());var G=o=>{let{t:e}=s(),{searchResults:r,isLoading:n,hasError:a,isSuccess:m,showApy:D,onRefetch:B,setSearchTerm:M}=z(),c=(0,t.useRef)();return(0,t.useEffect)(()=>{setTimeout(()=>c.current?.focus(),200)},[]),t.default.createElement(H,{isLoading:n},a?t.default.createElement(I,{title:e("errorAndOfflineSomethingWentWrong"),description:e("validatorListErrorFetching"),refetch:B}):t.default.createElement(Q,null,t.default.createElement(X,null,t.default.createElement(k,{ref:c,tabIndex:0,placeholder:e("commandSearch"),onChange:_=>M(_.currentTarget.value),maxLength:50})),m&&r.length?t.default.createElement(q,{data:r,showApy:D}):t.default.createElement(K,null)),t.default.createElement(x,null,t.default.createElement(w,{onClick:o.onClose},e("commandCancel"))))},Lt=G,K=()=>{let{t:o}=s();return t.default.createElement(C,{padding:"screen"},t.default.createElement(l,{size:16,color:d.colors.legacy.textSecondary},o("validatorListNoResults")))},N=84,q=o=>{let{data:e,showApy:r}=o;return t.default.createElement(t.default.Fragment,null,t.default.createElement(Z,{showApy:r}),t.default.createElement(b,null,t.default.createElement(v,null,({height:n,width:a})=>t.default.createElement(V,{height:n,itemCount:e.length,itemData:e,itemSize:N,width:a},J))))},J=({index:o,style:e,data:r})=>{let n=r[o];return t.default.createElement("div",{key:n.identityPubkey,style:e},t.default.createElement($,{voteAccountPubkey:n.voteAccountPubkey,formattedPercentValue:n.totalApy?y(n.totalApy/100,{format:"0.00%"}):"",activatedStake:n.activatedStake,name:n.info?.name,keybaseUsername:n.info?.keybaseUsername,iconUrl:n.info?.iconUrl}))},Q=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,X=i.div`
  position: relative;
`,Y=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,E=i(W).attrs(()=>({iconSize:12,lineHeight:19,fontWeight:500,fontSize:16}))``,Z=({showApy:o})=>{let{t:e}=s();return t.default.createElement(Y,null,t.default.createElement(E,{tooltipAlignment:"bottomLeft",info:t.default.createElement(f,null,t.default.createElement(p,null,e("validatorInfoDescription")))},e("validatorInfoTooltip")),o?t.default.createElement(E,{tooltipAlignment:"bottomRight",info:t.default.createElement(f,null,t.default.createElement(p,null,e("validatorApyInfoDescription")))},e("validatorApyInfoTooltip")):null)},$=o=>{let{pushDetailView:e,popDetailView:r}=T(),n=(0,t.useRef)(null),{data:a}=S(o.keybaseUsername),m=o.name??o.keybaseUsername??A(o.voteAccountPubkey);return t.default.createElement(R,{ref:n,onClick:()=>{e(t.default.createElement(U,{voteAccountPubkey:o.voteAccountPubkey,onClose:r}))}},t.default.createElement(tt,{iconUrl:o.iconUrl??a}),t.default.createElement(ot,null,t.default.createElement(et,null,t.default.createElement(l,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},h(m,20)),t.default.createElement(l,{size:14,color:d.colors.legacy.textSecondary,lineHeight:19,textAlign:"left",noWrap:!0},t.default.createElement(P,{format:"0,0"},o.activatedStake))),t.default.createElement(l,{size:14,weight:400,lineHeight:19,textAlign:"left",noWrap:!0},o.formattedPercentValue)))},R=i(F)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,tt=i(L).attrs({width:44})``,ot=i.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
`,et=i.div`
  display: flex;
  flex-direction: column;
`;export{G as ValidatorListPage,Lt as default};
//# sourceMappingURL=ValidatorListPage-VS7MSNU6.js.map
