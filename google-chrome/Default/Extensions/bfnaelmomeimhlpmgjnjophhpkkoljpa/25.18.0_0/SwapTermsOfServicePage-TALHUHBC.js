import{Ra as g}from"./chunk-YNOMEZGR.js";import"./chunk-7IWA7VDF.js";import"./chunk-F6R6PZOR.js";import"./chunk-MDZMKEZM.js";import"./chunk-Z2IREGI3.js";import"./chunk-H7JFZ3YS.js";import"./chunk-J75C23KI.js";import"./chunk-FQRSH645.js";import"./chunk-U3NMDQK3.js";import"./chunk-SGGLIP2Q.js";import"./chunk-MOFSVQWA.js";import"./chunk-HUWYOARQ.js";import"./chunk-CRVSDQKM.js";import"./chunk-QNLMWMRR.js";import"./chunk-CCAASF45.js";import"./chunk-FTCKELIN.js";import"./chunk-D5MQIHZE.js";import"./chunk-WAL4SSJC.js";import"./chunk-3NW35I2P.js";import"./chunk-7TOQ3J6S.js";import"./chunk-QM77BPVG.js";import"./chunk-KI5DTAW7.js";import"./chunk-HCYB2VG2.js";import"./chunk-VECUKCNS.js";import"./chunk-Z2TWY6BT.js";import{a as w}from"./chunk-VDRJSOTK.js";import"./chunk-RALT2YVD.js";import"./chunk-7D7ZBNJK.js";import"./chunk-X3FFOAGQ.js";import"./chunk-7ZVEM3WY.js";import"./chunk-ZVRCX2UV.js";import{d as T}from"./chunk-NSWARKFZ.js";import{ib as a,ja as u,p as o}from"./chunk-I6U22RLL.js";import{Ib as y,jb as S}from"./chunk-5HSK4GMQ.js";import"./chunk-UCBZOSRF.js";import"./chunk-27IHK2SF.js";import"./chunk-QCTV7K6S.js";import"./chunk-WUU3X3IN.js";import"./chunk-4AX42N6B.js";import"./chunk-XNDOEJ4N.js";import"./chunk-XIAMBEDX.js";import"./chunk-M56YM2VY.js";import"./chunk-WN5BOODY.js";import"./chunk-OCBCUAFE.js";import"./chunk-HKKBRKQE.js";import"./chunk-LWEFQGDN.js";import"./chunk-3GZCHS7Y.js";import"./chunk-3LY6FUZT.js";import"./chunk-SK6BTSEQ.js";import{H as i,x as f}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import"./chunk-UCPKAIVR.js";import"./chunk-NL7NWYRL.js";import{W as p,X as d,a as x}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-O2N6PUOM.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as C,h as l,n as m}from"./chunk-3KENBVE7.js";l();m();var e=C(x());var O=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,k=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,h=o(a).attrs({size:28,weight:500,color:i.colors.legacy.textPrimary})`
  margin-top: 24px;
`,P=o(a).attrs({size:16,weight:500,color:i.colors.legacy.textSecondary})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: ${i.colors.legacy.textPrimary};
  }
  label {
    color: ${i.colors.legacy.accentPrimary};
    cursor: pointer;
  }
`,b=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=o.div`
  margin-top: auto;
  width: 100%;
`,B=()=>{let{t:n}=f(),{mutateAsync:t}=y(),{handleHideModalVisibility:r,handleShowModalVisibility:s}=g(),v=(0,e.useCallback)(()=>{s("swapConfirmation",void 0,{event:"showSwapModal",payload:{data:{uiContext:"SwapConfirmation"}}}),r("swapTermsOfService")},[s,r]),c=S({goToConfirmation:v});return{onAgreeClick:(0,e.useCallback)(()=>{t(!0),c()},[t,c]),onCancelClick:()=>{r("swapTermsOfService")},t:n}},M=()=>{self.open(p,"_blank")},F=()=>{self.open(d,"_blank")},L=e.default.memo(({onAgreeClick:n,onCancelClick:t,t:r})=>e.default.createElement(O,null,e.default.createElement(k,null,e.default.createElement(b,null,e.default.createElement(u,null),e.default.createElement(h,null,r("termsOfServicePrimaryText")),e.default.createElement(P,null,e.default.createElement(w,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:M},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:F},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(T,{primaryText:r("termsOfServiceActionButtonAgree"),secondaryText:r("commandCancel"),onPrimaryClicked:n,onSecondaryClicked:t})))),_=()=>{let n=B();return e.default.createElement(L,{...n})},X=_;export{_ as SwapTermsOfServicePage,X as default};
//# sourceMappingURL=SwapTermsOfServicePage-TALHUHBC.js.map
