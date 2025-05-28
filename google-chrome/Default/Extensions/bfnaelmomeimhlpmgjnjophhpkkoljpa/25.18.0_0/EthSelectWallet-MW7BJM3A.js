import{e as f,g as y,h as A,i as k}from"./chunk-BTRKBCB7.js";import"./chunk-ZL5Z5BHT.js";import{d as g}from"./chunk-SGGLIP2Q.js";import"./chunk-5DJLQGMU.js";import"./chunk-Z2TWY6BT.js";import{ib as h,p as e,ua as x}from"./chunk-I6U22RLL.js";import"./chunk-UCBZOSRF.js";import"./chunk-OCBCUAFE.js";import{O as n}from"./chunk-3LY6FUZT.js";import{H as l,K as u,da as p,ia as d,x as m}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import"./chunk-UCPKAIVR.js";import"./chunk-NL7NWYRL.js";import{a as T}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as S,h as a,n as c}from"./chunk-3KENBVE7.js";a();c();var t=S(T());var _=e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 6px;
`,w=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,I=e.div`
  background: ${l.colors.legacy.bgRow};
  border-radius: 6px;
  padding: 12px 16px;
`,W=e.div`
  display: flex;
  flex-direction: row;
  color: ${l.colors.legacy.textPrimary};
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 8px;

  > span {
    min-height: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    width: 14px !important;
    border-radius: 3px !important;
  }
`,b=e.div`
  display: flex;
  gap: 16px;
`,P=e.div`
  padding: 27px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,G=t.default.memo(({requestId:i})=>{let{t:r}=m(),s=f(),[o,C]=(0,t.useState)(!1),M=(0,t.useCallback)(()=>{s({jsonrpc:"2.0",id:i,result:o?n.user_selectEthWallet.result.enum.ALWAYS_USE_PHANTOM:n.user_selectEthWallet.result.enum.CONTINUE_WITH_PHANTOM})},[i,s,o]),E=(0,t.useCallback)(()=>{s({jsonrpc:"2.0",id:i,result:o?n.user_selectEthWallet.result.enum.ALWAYS_USE_METAMASK:n.user_selectEthWallet.result.enum.CONTINUE_WITH_METAMASK})},[i,s,o]);return t.default.createElement(A,null,t.default.createElement(y,{style:{display:"flex",alignItems:"center"}},t.default.createElement(P,null,t.default.createElement(g,{icon:t.default.createElement(b,null,t.default.createElement(u.LogoFill,{size:64,color:"accentPrimary"}),t.default.createElement(x,{width:64,height:64})),primaryText:r("whichExtensionToConnectWith"),headerStyle:"small"}))),t.default.createElement(k,{plain:!0},t.default.createElement(_,null,t.default.createElement(w,null,t.default.createElement(p,{onClick:E,testID:"select_wallet--metamask"},r("useMetaMask"))),t.default.createElement(w,null,t.default.createElement(p,{theme:"primary",onClick:M,testID:"select_wallet--phantom"},r("usePhantom"))),t.default.createElement(I,null,t.default.createElement(W,null,t.default.createElement(d,{checked:o,onChange:()=>C(!o),label:{text:r("dontAskMeAgain"),color:"textPrimary"},shape:"square"})),t.default.createElement(h,{color:l.colors.legacy.textSecondary,size:13,weight:500,lineHeight:16,textAlign:"left"},r("configureInSettings"))))))}),K=G;export{G as EthSelectWallet,K as default};
//# sourceMappingURL=EthSelectWallet-MW7BJM3A.js.map
