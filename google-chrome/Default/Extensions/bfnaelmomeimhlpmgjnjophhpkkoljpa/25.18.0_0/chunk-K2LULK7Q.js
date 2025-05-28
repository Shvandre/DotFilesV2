import{c as q}from"./chunk-EA2HKHKG.js";import{a as G,b as _}from"./chunk-F6R6PZOR.js";import{b as K}from"./chunk-MOFSVQWA.js";import{b as H}from"./chunk-CRVSDQKM.js";import{a as U,f as O,i as W}from"./chunk-QNLMWMRR.js";import{k as f}from"./chunk-3NW35I2P.js";import{a as N}from"./chunk-VDRJSOTK.js";import{a as D,d as z}from"./chunk-NSWARKFZ.js";import{ib as n,p as r}from"./chunk-I6U22RLL.js";import{a as M,o as B,w as F}from"./chunk-4AX42N6B.js";import{S as E,fa as I}from"./chunk-XNDOEJ4N.js";import{Dc as L,rc as V}from"./chunk-HKKBRKQE.js";import{$b as w,H as h,I as b,L as yo,ne as P,tb as k}from"./chunk-3GZCHS7Y.js";import{H as a,x as g}from"./chunk-BY5XXL4W.js";import{W as v}from"./chunk-NL7NWYRL.js";import{a as So}from"./chunk-57IY32VM.js";import{f as fo,h as T,n as A}from"./chunk-3KENBVE7.js";T();A();var o=fo(So());var xo=i=>{let{t}=g(),{voteAccountPubkey:l}=i,{showStakeAccountCreateAndDelegateStatusModal:Y,closeAllModals:j}=H(),J=()=>{i.onClose(),j()},{data:X}=P("solana"),{data:Z}=E(),R=Z?.totalQuantityString??"";I(X,"STAKE_FUNGIBLE");let{cluster:oo,connection:u}=L(),s=F(u),to=k("solana"),{data:eo}=V({query:{data:to}}),no=eo?.usd,e=(0,o.useMemo)(()=>s.results?.find(go=>go.voteAccountPubkey===l),[s.results,l]),ao=e?.info?.name??e?.info?.keybaseUsername??w(l),ro=q(u),[m,S]=(0,o.useState)(""),c=v(m),p=h(1+(O(u).data??0)),y=U({balance:R,cluster:oo,rentExemptionMinimum:p}),io=()=>S(y.toString()),so=c.isLessThan(p),lo=c.isGreaterThan(y),mo=c.isFinite(),d=m&&so?t("validatorViewAmountSOLRequiredToStakeInterpolated",{amount:p}):m&&lo?t("validatorViewInsufficientBalance"):"",co=ro.isPending,x=mo&&!d&&!co,uo=()=>{Y({lamports:b(c).toNumber(),votePubkey:l,usdPerSol:no,onClose:J,validatorName:ao})},{data:C=null}=W(),po=C?B(C,e?.commission??0):null;return o.default.createElement(Co,null,s.isPending?o.default.createElement(D,null):s.isError||!e?o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(Q,null,o.default.createElement(n,{size:16,color:a.colors.legacy.textSecondary,lineHeight:20},t("validatorViewErrorFetching")," ",s.error?.message??""))):o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(Q,null,o.default.createElement(n,{size:16,color:a.colors.legacy.textSecondary,lineHeight:20,margin:"0 0 20px 0"},o.default.createElement(N,{i18nKey:"validatorViewDescriptionInterpolated"},"Choose how much SOL you\u2019d like to ",o.default.createElement("br",null),"stake with this validator. ",o.default.createElement($,{href:M},"Learn more"))),o.default.createElement(G,{value:m,symbol:"SOL",alignSymbol:"right",buttonText:t("maxInputMax"),width:47,warning:!!d,onSetTarget:io,onUserInput:S}),o.default.createElement(Ao,null,o.default.createElement(n,{color:d?a.colors.legacy.accentAlert:"transparent",size:16,textAlign:"left"},d)),o.default.createElement(ho,{onEdit:i.onClose}),o.default.createElement(_,{identifier:e.voteAccountPubkey,name:e.info?.name,keybaseUsername:e.info?.keybaseUsername,iconUrl:e.info?.iconUrl,website:e.info?.website,data:[{label:t("validatorCardEstimatedApy"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},po,"%")},{label:t("validatorCardCommission"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},e.commission,"%")},{label:t("validatorCardTotalStake"),value:o.default.createElement(n,{textAlign:"right",weight:500,size:14,noWrap:!0},o.default.createElement(K,null,e.activatedStake))}]})),o.default.createElement(To,null,o.default.createElement(z,{primaryText:t("validatorViewActionButtonStake"),secondaryText:t("commandClose"),onPrimaryClicked:uo,onSecondaryClicked:i.onClose,primaryTheme:x?"primary":"default",primaryDisabled:!x}))))},ot=xo,Co=r.div`
  display: grid;
  grid-template-rows: 42px auto 47px;
  height: 100%;
`,Q=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,$=r.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${a.colors.legacy.accentPrimary};
  text-decoration: none;
  cursor: pointer;
`,To=r.section`
  display: flex;
  gap: 15px;
`,Ao=r.div`
  width: 100%;
`,vo=r(n)`
  width: 100%;
  margin-top: 15px;
  > a {
    color: ${a.colors.legacy.accentPrimary};
    cursor: pointer;
  }
`,ho=i=>{let{t}=g();return o.default.createElement(vo,{size:16,color:a.colors.legacy.textSecondary,lineHeight:20,textAlign:"left"},t("validatorViewValidator")," \u2022 ",o.default.createElement($,{onClick:i.onEdit},t("commandEdit")))};export{xo as a,ot as b};
//# sourceMappingURL=chunk-K2LULK7Q.js.map
