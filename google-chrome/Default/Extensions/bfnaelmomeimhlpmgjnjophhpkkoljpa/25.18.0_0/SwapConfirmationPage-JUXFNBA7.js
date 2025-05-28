import{a as tt}from"./chunk-YTYWVMBX.js";import{Ra as ot}from"./chunk-YNOMEZGR.js";import"./chunk-7IWA7VDF.js";import"./chunk-F6R6PZOR.js";import"./chunk-MDZMKEZM.js";import"./chunk-Z2IREGI3.js";import"./chunk-H7JFZ3YS.js";import"./chunk-J75C23KI.js";import"./chunk-FQRSH645.js";import{e as X,f as Y,g as R}from"./chunk-U3NMDQK3.js";import"./chunk-SGGLIP2Q.js";import"./chunk-MOFSVQWA.js";import"./chunk-HUWYOARQ.js";import"./chunk-CRVSDQKM.js";import"./chunk-QNLMWMRR.js";import"./chunk-CCAASF45.js";import"./chunk-FTCKELIN.js";import"./chunk-D5MQIHZE.js";import"./chunk-WAL4SSJC.js";import"./chunk-3NW35I2P.js";import"./chunk-7TOQ3J6S.js";import"./chunk-QM77BPVG.js";import"./chunk-KI5DTAW7.js";import"./chunk-HCYB2VG2.js";import"./chunk-VECUKCNS.js";import"./chunk-Z2TWY6BT.js";import"./chunk-VDRJSOTK.js";import"./chunk-RALT2YVD.js";import"./chunk-7D7ZBNJK.js";import"./chunk-X3FFOAGQ.js";import"./chunk-7ZVEM3WY.js";import"./chunk-ZVRCX2UV.js";import{c as Q}from"./chunk-NSWARKFZ.js";import{W as q,c as K,ib as k,l as Z,p,qa as J}from"./chunk-I6U22RLL.js";import{Xb as G}from"./chunk-5HSK4GMQ.js";import"./chunk-UCBZOSRF.js";import"./chunk-27IHK2SF.js";import{p as U}from"./chunk-QCTV7K6S.js";import"./chunk-WUU3X3IN.js";import"./chunk-4AX42N6B.js";import"./chunk-XNDOEJ4N.js";import"./chunk-XIAMBEDX.js";import"./chunk-M56YM2VY.js";import"./chunk-WN5BOODY.js";import"./chunk-OCBCUAFE.js";import"./chunk-HKKBRKQE.js";import"./chunk-LWEFQGDN.js";import{Qd as j,Ya as C}from"./chunk-3GZCHS7Y.js";import"./chunk-3LY6FUZT.js";import"./chunk-SK6BTSEQ.js";import{H as g,L as z,R as L,S as B,Ta as E,Ua as _,na as W,x as b}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import"./chunk-UCPKAIVR.js";import"./chunk-NL7NWYRL.js";import{a as O}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-O2N6PUOM.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as M,h as T,n as y}from"./chunk-3KENBVE7.js";T();y();var e=M(O());T();y();var i=M(O());var it=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${t=>t.addScreenPadding?"16px":"0"};
`,Tt=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,yt=p.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,Ct=p.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  padding: 16px;
`,bt=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,qt=p.div`
  position: relative;
`,Jt=p.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${g.colors.legacy.accentSuccess};
  }
`,kt=p(k).attrs({size:28,weight:500,color:g.colors.legacy.textPrimary})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,et=p(k).attrs({size:16,weight:400,color:g.colors.legacy.textSecondary})`
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  span {
    color: ${g.colors.legacy.textSecondary};
    font-weight: bold;
  }
`,ht=p(k).attrs({size:16,weight:500,color:g.colors.legacy.accentPrimary})`
  margin-top: 18px;
  text-decoration: none;
  ${t=>t.opacity!==0&&Z`
      &:hover {
        cursor: pointer;
        color: ${g.colors.legacy.accentPrimaryLight};
      }
    `}
`,Lt=({description:t,header:n,icon:o,onClose:r,title:c,txLink:s,isClosable:l,disclaimer:m})=>{let{t:a}=b(),f=()=>{s&&self.open(s)};return i.default.createElement(it,null,n,i.default.createElement(Tt,null,i.default.createElement(B,{mode:"wait",initial:!0},i.default.createElement(L.div,{key:c,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},o)),i.default.createElement(kt,null,c),i.default.createElement(et,null,t),s&&i.default.createElement(B,{mode:"wait",initial:!1},i.default.createElement(L.div,{key:s,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},i.default.createElement(ht,{opacity:1,onClick:f},a("swapTxConfirmationViewTransaction"))))),l&&r?i.default.createElement(yt,null,i.default.createElement(et,null,m),l&&r?i.default.createElement(Q,{onClick:r},a("commandClose")):null):null)};var nt=({ledgerAction:t,numberOfTransactions:n,cancel:o,ledgerApp:r})=>i.default.createElement(it,{addScreenPadding:!0},i.default.createElement(Y,{ledgerAction:t,numberOfTransactions:n,cancel:o,ledgerApp:r}));var Bt=t=>self.open(t,"_blank"),rt=({txErrorTitle:t,txErrorMessage:n,txErrorHelpButtonLink:o,txLink:r,onClose:c})=>i.default.createElement(Lt,{header:i.default.createElement(Ct,null,i.default.createElement(bt,{onClick:()=>Bt(o)},i.default.createElement(q,{fill:"white"}))),icon:i.default.createElement(tt,{type:"failure"}),description:n,onClose:c,title:t,txLink:r,isClosable:!0});var Et=t=>self.open(t,"_blank"),At=()=>{let{handleHideModalVisibility:t}=ot(),n=K(),{data:o}=j(),c=o?.type==="ledger",s="swapConfirmation",l=(0,e.useCallback)(()=>{t(s)},[t,s]),m=(0,e.useCallback)(()=>{l(),n("/notifications")},[l,n]);return G({isLedger:c,goToSwapTab:l,goToActivityTab:m})},Pt=({txError:t,txErrorTitle:n,txErrorMessage:o,txErrorHelpButtonLink:r,txLink:c,executeSwap:s,numberOfTransactions:l,addressType:m,onClose:a})=>X(t)?e.default.createElement(R,{ledgerActionError:t,onRetryClick:s,onCancelClick:a}):t?e.default.createElement(rt,{txErrorTitle:n,txErrorMessage:o,txLink:c,onClose:a,txErrorHelpButtonLink:r}):e.default.createElement(nt,{ledgerAction:s,numberOfTransactions:l,cancel:a,ledgerApp:U(m)}),Nt=e.default.memo(t=>{let n=(0,e.useRef)(null),{t:o}=b(),r=o("swapTxConfirmationViewTransaction"),{addressType:c,executeSwap:s,isLedger:l,isBridge:m,sellAsset:a,buyAsset:f,estimatedTime:st,isFailure:at,isSuccess:A,isClosable:pt,notEnoughSol:ct,numberOfTransactions:lt,txError:mt,txErrorTitle:P,txErrorMessage:N,txLink:h,txErrorHelpButtonLink:v,isReadyToExecute:dt,onClose:I,onSwapSuccess:ut}=t,[D,gt]=(0,e.useState)(!1),d,u,V,w,$=o("commandClose"),H,S,x=pt||!1;if((0,e.useEffect)(()=>{!S&&setTimeout(()=>{!D&&n.current?.start(),gt(!0)},200)},[D,S]),l&&!h&&dt)return e.default.createElement(Pt,{isBridge:m,txError:mt,txErrorTitle:P,txErrorMessage:N,txErrorHelpButtonLink:v,txLink:h,numberOfTransactions:lt,addressType:c,executeSwap:s,onClose:I});if(m&&a){let F=`${a.amount} ${a.symbol}`,ft=C.getNetworkName(a.networkID),wt=`${f.amount} ${f.symbol}`,St=C.getNetworkName(f.networkID);d=o("swapTxBridgeSubmitting"),u=o("swapTxBridgeSubmittingDescription",{sellAmount:F,sellNetwork:ft,buyAmount:wt,buyNetwork:St})}else u=`${f.symbol||o("swapTxConfirmationTokens")} ${o("swapTxConfirmationTokensWillBeDeposited")} `,d=o("swapTxConfirmationSwappingTokens");return ct&&(d=o("notEnoughSolPrimaryText"),u=o("notEnoughSolSecondaryText"),S=e.default.createElement(J,{width:E,height:E}),w={theme:"primary"},x=!0),A&&(m?(d=o("swapTxBridgeSubmitted"),u=o("swapTxBridgeSubmittedDescription",{estimatedTime:st}),V=o("swapTxBridgeSubmittedDisclaimer")):(d=o("swapTxConfirmationTokensDepositedTitle"),u=o("swapTxConfirmationTokensDepositedBody")),w={theme:"primary"},x=!0,n.current?.success()),at&&(d=P,u=N,w={theme:"secondary"},$=o("commandClose"),x=!0,H=e.default.createElement(z,{alignItems:"flex-end"},e.default.createElement(W,{icon:"HelpCircle",size:32,onClick:()=>Et(v),backgroundColor:[null,"bgButton"],color:["textSecondary","textPrimary"],label:o("commandHelp")})),n.current?.fail()),e.default.createElement(_,{ref:n,title:d,txLink:h,txTitle:r,description:u,disclaimer:V,isClosable:x,buttonVariant:w,buttonText:$,onClose:A?ut:I,header:H,customIcon:S})}),vt=()=>{let t=At();return(0,e.useEffect)(()=>{!t.isReadyToExecute||t.isLedger||t.executeSwap()},[t.isReadyToExecute,t.isLedger]),e.default.createElement(Nt,{...t})},fo=vt;export{vt as SwapConfirmationPage,fo as default};
//# sourceMappingURL=SwapConfirmationPage-JUXFNBA7.js.map
