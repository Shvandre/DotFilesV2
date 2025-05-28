import{a as N,c as D,d as F,g as G}from"./chunk-NCFRSBEV.js";import{a as f}from"./chunk-CJWA4EXL.js";import"./chunk-YTYWVMBX.js";import"./chunk-5OORY5CX.js";import"./chunk-ZL5Z5BHT.js";import"./chunk-WD6CRZ7D.js";import{a as T}from"./chunk-EBFT33VU.js";import"./chunk-2ZR4MGIO.js";import"./chunk-YNOMEZGR.js";import"./chunk-7IWA7VDF.js";import"./chunk-F6R6PZOR.js";import"./chunk-MDZMKEZM.js";import"./chunk-Z2IREGI3.js";import"./chunk-H7JFZ3YS.js";import{a as L}from"./chunk-J75C23KI.js";import"./chunk-FQRSH645.js";import"./chunk-U3NMDQK3.js";import"./chunk-SGGLIP2Q.js";import"./chunk-MOFSVQWA.js";import"./chunk-HUWYOARQ.js";import"./chunk-CRVSDQKM.js";import"./chunk-QNLMWMRR.js";import"./chunk-CCAASF45.js";import"./chunk-FTCKELIN.js";import"./chunk-D5MQIHZE.js";import"./chunk-WAL4SSJC.js";import{d as _}from"./chunk-3NW35I2P.js";import{a as u}from"./chunk-7TOQ3J6S.js";import"./chunk-QM77BPVG.js";import"./chunk-5DJLQGMU.js";import{a as S}from"./chunk-4MIW5TSR.js";import"./chunk-KI5DTAW7.js";import"./chunk-HCYB2VG2.js";import"./chunk-VECUKCNS.js";import"./chunk-GYUGWQHP.js";import"./chunk-Z2TWY6BT.js";import"./chunk-VDRJSOTK.js";import"./chunk-RALT2YVD.js";import"./chunk-7D7ZBNJK.js";import"./chunk-X3FFOAGQ.js";import"./chunk-7ZVEM3WY.js";import"./chunk-ZVRCX2UV.js";import"./chunk-NSWARKFZ.js";import{p as s,w as O}from"./chunk-I6U22RLL.js";import"./chunk-5HSK4GMQ.js";import"./chunk-UCBZOSRF.js";import"./chunk-27IHK2SF.js";import"./chunk-QCTV7K6S.js";import"./chunk-WUU3X3IN.js";import"./chunk-4AX42N6B.js";import"./chunk-XNDOEJ4N.js";import"./chunk-XIAMBEDX.js";import"./chunk-M56YM2VY.js";import"./chunk-WN5BOODY.js";import"./chunk-OCBCUAFE.js";import"./chunk-HKKBRKQE.js";import"./chunk-LWEFQGDN.js";import{Gd as E,zd as B}from"./chunk-3GZCHS7Y.js";import"./chunk-3LY6FUZT.js";import"./chunk-SK6BTSEQ.js";import{H as e,R as P,S as $}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import"./chunk-UCPKAIVR.js";import{d as v}from"./chunk-NL7NWYRL.js";import{a as H}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-O2N6PUOM.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as A,h as n,n as i}from"./chunk-3KENBVE7.js";n();i();var t=A(H());n();i();var a=A(H());n();i();var I=s(u)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${o=>o.$isExpanded?e.colors.legacy.black:e.colors.legacy.bgButton} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o=>o.$isExpanded?"white":e.colors.legacy.textSecondary};
    transition: fill 200ms ease;
    position: relative;
    ${o=>o.top?`top: ${o.top}px;`:""}
    ${o=>o.right?`right: ${o.right}px;`:""}
  }
`;var V=s(L).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.bgWallet};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderSecondary};
  height: 46px;
  opacity: ${o=>o.opacity??"1"};
`,q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,M=s.div`
  width: 24px;
  height: 24px;
`,W=({onBackClick:o,totalSteps:c,currentStepIndex:l,isHidden:d,showBackButtonOnFirstStep:r,showBackButton:g=!0})=>a.default.createElement(V,{opacity:d?0:1},g&&(r||l!==0)?a.default.createElement(I,{right:1,onClick:o},a.default.createElement(O,null)):a.default.createElement(M,null),a.default.createElement(q,null,v(c).map(p=>{let m=p<=l?e.colors.legacy.accentPrimary:e.colors.legacy.bgButton;return a.default.createElement(u,{key:p,diameter:12,color:m})})),a.default.createElement(M,null));n();i();var K=()=>{let{mutateAsync:o}=E(),{hardwareStepStack:c,pushStep:l,popStep:d,currentStep:r,setOnConnectHardwareAccounts:g,setOnConnectHardwareDone:y,setExistingAccounts:p}=N(),{data:m=[],isFetched:x,isError:k}=B(),C=_(c,(h,U)=>h?.length===U.length),X=c.length>(C??[]).length,b=C?.length===0,j={initial:{x:b?0:X?150:-150,opacity:b?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},J=(0,t.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),d())},[r,d]);return T(()=>{g(async h=>{await o(h),await S.set(f,!await S.get(f))}),y(()=>self.close()),l(t.default.createElement(G,null))},c.length===0),(0,t.useEffect)(()=>{p({data:m,isFetched:x,isError:k})},[m,x,k,p]),t.default.createElement(D,null,t.default.createElement(W,{totalSteps:3,onBackClick:J,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),t.default.createElement($,{mode:"wait"},t.default.createElement(P.div,{style:{display:"flex",flexGrow:1},key:`${c.length}_${C?.length}`,...j},t.default.createElement(F,null,r()))))},Po=K;export{Po as default};
//# sourceMappingURL=SettingsConnectHardware-NCFEV6YU.js.map
