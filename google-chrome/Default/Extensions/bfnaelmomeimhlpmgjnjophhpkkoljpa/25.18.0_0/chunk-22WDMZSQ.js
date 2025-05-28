import{a as V,b as $}from"./chunk-W4AP4G2F.js";import{a as X}from"./chunk-GGXP4DHI.js";import{Ra as U}from"./chunk-YNOMEZGR.js";import{d as E}from"./chunk-NSWARKFZ.js";import{V as L,ib as z,p as d}from"./chunk-I6U22RLL.js";import{e as T,f as y,g as D,h as F,i as S}from"./chunk-5HSK4GMQ.js";import{c as H}from"./chunk-WN5BOODY.js";import{Pd as M}from"./chunk-3GZCHS7Y.js";import{H as f,R as h,x as w}from"./chunk-BY5XXL4W.js";import{P as I}from"./chunk-WP4K54AS.js";import{a as v}from"./chunk-57IY32VM.js";import{f as b,h as m,n as p}from"./chunk-3KENBVE7.js";m();p();var i=b(v()),G=b(X());m();p();var n=b(v());m();p();var r=new T(H);var Y=d(h.button)`
  background-color: ${f.colors.legacy.bgRow};
  &:hover {
    background-color: ${f.colors.legacy.bgButton};
  }
  border: none;
  appearance: none;
  transition: background-color 0.2s ease-in-out;
  border-radius: 16px;
  cursor: pointer;
  height: 100%;
  padding: 10px 12px;
  width: 100%;
`,Z=d(h.div)`
  align-items: center;
  display: flex;
`,_=d.img`
  margin-right: 12px;
  width: 44px;
`,R=d(z).attrs({lineHeight:17,size:14})`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  text-align: left;
`,tt=d.div`
  position: relative;
  top: -15px;
  right: -3px;
  background-color: ${f.colors.legacy.bgButton};
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
`,ot=({banner:t})=>{let{t:o}=w(),e=V(),{mutateAsync:s}=S(),{handleShowModalVisibility:u,handleHideModalVisibility:c}=U(),a=(0,n.useCallback)(l=>{let A=y(t);switch(r.onBannerClick(A),t.bannerType){case"Deep Link":{let{destinationType:C,url:x,caip19:k}=t;e(l,{destinationType:C,url:x,caip19:k});break}case"Modal":{let{interstitial:C,destinationType:x,url:k}=t,{title:J,lineItems:K=[],imageUrl:N,primaryButtonText:O=o("commandContinue"),secondaryButtonText:Q=o("commandDismiss")}=C,g=D(t),W=K.map(P=>({icon:P.imageUrl,subtitle:P.description,title:P.title}));u("interstitial",{bodyTitle:J,details:W,icon:N,onDismiss:()=>{r.onInterstitialDismiss(g)},FooterComponent:()=>n.default.createElement(E,{primaryText:O,secondaryText:Q,onPrimaryClicked:()=>{e(l,{destinationType:x,url:k}),r.onInterstitialPrimaryClick(g),c("interstitial")},onSecondaryClicked:()=>{r.onInterstitialSecondaryClick(g),c("interstitial")}})}),r.onInterstitialSeen(g);break}}},[t,u,c,o,e]),B=(0,n.useCallback)(l=>{l.stopPropagation(),s({actionBannerId:t.id});let A=y(t);r.onBannerDismiss(A)},[t,s]);return(0,n.useMemo)(()=>({banner:t,onClickBanner:a,onCloseBanner:B}),[t,a,B])},nt=n.default.memo(({banner:t,onClickBanner:o,onCloseBanner:e})=>n.default.createElement(Y,{layout:!0,onClick:o},n.default.createElement(Z,{layout:!0},n.default.createElement(_,{src:t.imageUrl}),n.default.createElement(R,{weight:600},t.description),n.default.createElement(tt,{onClick:e},n.default.createElement(L,{fill:f.colors.legacy.textPrimary,width:8}))))),q=t=>{let o=ot(t);return n.default.createElement(nt,{...o})};var et=()=>{let{data:t={banners:[]}}=F(),{data:o}=M(),{banners:e}=t,s=(0,G.default)(o),u=(0,i.useCallback)(a=>{if(!o||s!==o)return;let B=e[a],l=y(B);r.onBannerSeen(l)},[e,o,s]),c=(0,i.useMemo)(()=>e.map(a=>({key:a.id,node:i.default.createElement(q,{banner:a})})),[e]);return(0,i.useMemo)(()=>({identifier:o??"",items:c,itemHeight:74,onIndexChange:u}),[c,o,u])},it=i.default.memo(({identifier:t,items:o,onIndexChange:e,itemHeight:s})=>i.default.createElement($,{items:o,onIndexChange:e,key:t,itemHeight:s})),rt=()=>{let t=et();return i.default.createElement(it,{...t})},Lt=()=>{let{data:[t]}=I(["kill-action-banners"]);return t?null:i.default.createElement(rt,null)};export{Lt as a};
//# sourceMappingURL=chunk-22WDMZSQ.js.map
