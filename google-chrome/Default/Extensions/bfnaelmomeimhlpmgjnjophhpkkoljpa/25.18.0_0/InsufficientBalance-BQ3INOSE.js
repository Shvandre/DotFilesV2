import{a as s,c as f}from"./chunk-E34BP3MG.js";import{a as T}from"./chunk-YTYWVMBX.js";import{Ra as b,Z as I}from"./chunk-YNOMEZGR.js";import"./chunk-7IWA7VDF.js";import"./chunk-F6R6PZOR.js";import"./chunk-MDZMKEZM.js";import"./chunk-Z2IREGI3.js";import"./chunk-H7JFZ3YS.js";import"./chunk-J75C23KI.js";import"./chunk-FQRSH645.js";import"./chunk-U3NMDQK3.js";import"./chunk-SGGLIP2Q.js";import"./chunk-MOFSVQWA.js";import"./chunk-HUWYOARQ.js";import"./chunk-CRVSDQKM.js";import"./chunk-QNLMWMRR.js";import"./chunk-CCAASF45.js";import"./chunk-FTCKELIN.js";import"./chunk-D5MQIHZE.js";import"./chunk-WAL4SSJC.js";import"./chunk-3NW35I2P.js";import"./chunk-7TOQ3J6S.js";import"./chunk-QM77BPVG.js";import"./chunk-KI5DTAW7.js";import"./chunk-HCYB2VG2.js";import"./chunk-VECUKCNS.js";import"./chunk-Z2TWY6BT.js";import"./chunk-VDRJSOTK.js";import"./chunk-RALT2YVD.js";import"./chunk-7D7ZBNJK.js";import"./chunk-X3FFOAGQ.js";import"./chunk-7ZVEM3WY.js";import"./chunk-ZVRCX2UV.js";import{c as C,d as h}from"./chunk-NSWARKFZ.js";import{ib as l,p as o}from"./chunk-I6U22RLL.js";import"./chunk-5HSK4GMQ.js";import"./chunk-UCBZOSRF.js";import"./chunk-27IHK2SF.js";import"./chunk-QCTV7K6S.js";import"./chunk-WUU3X3IN.js";import"./chunk-4AX42N6B.js";import"./chunk-XNDOEJ4N.js";import"./chunk-XIAMBEDX.js";import"./chunk-M56YM2VY.js";import"./chunk-WN5BOODY.js";import"./chunk-OCBCUAFE.js";import"./chunk-HKKBRKQE.js";import"./chunk-LWEFQGDN.js";import{Ya as c,eb as y,tb as x}from"./chunk-3GZCHS7Y.js";import"./chunk-3LY6FUZT.js";import"./chunk-SK6BTSEQ.js";import{H as a,L as B,x as g}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import"./chunk-UCPKAIVR.js";import"./chunk-NL7NWYRL.js";import{a as M}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-O2N6PUOM.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as v,h as u,n as d}from"./chunk-3KENBVE7.js";u();d();var n=v(M());var P=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,S=o(l).attrs({size:28,weight:500,color:a.colors.legacy.textPrimary})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textSecondary})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=({networkId:t,token:r})=>{let{t:i}=g(),{handleHideModalVisibility:m}=b(),p=(0,n.useCallback)(()=>{m("insufficientBalance")},[m]),w=t&&y(x(c.getChainID(t))),{canBuy:k,openBuy:F}=I({caip19:w||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?c.getTokenSymbol(t):i("tokens");return n.default.createElement(P,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(T,{type:"failure",backgroundWidth:75}),n.default.createElement(S,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),r?n.default.createElement(B,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(s,{label:i("insufficientBalanceRemaining")},n.default.createElement(f,{color:a.colors.legacy.accentAlert},`${r.balance} ${e}`)),n.default.createElement(s,{label:i("insufficientBalanceRequired")},n.default.createElement(f,null,`${r.required} ${e}`))):null)),k?n.default.createElement(h,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:F,secondaryText:i("commandCancel"),onSecondaryClicked:p}):n.default.createElement(C,{onClick:p},i("commandCancel")))},L=$;export{$ as InsufficientBalance,L as default};
//# sourceMappingURL=InsufficientBalance-BQ3INOSE.js.map
