import{a as C}from"./chunk-VDRJSOTK.js";import{a as N}from"./chunk-7DLZOABD.js";import"./chunk-RALT2YVD.js";import{a as P}from"./chunk-7D7ZBNJK.js";import"./chunk-X3FFOAGQ.js";import"./chunk-7ZVEM3WY.js";import{a as U}from"./chunk-ZVRCX2UV.js";import"./chunk-NSWARKFZ.js";import{d as T,ib as l,m as v,p as a,t as I}from"./chunk-I6U22RLL.js";import{a as z}from"./chunk-RIMV42ZS.js";import{c as L}from"./chunk-MDGK3JFM.js";import{U as w,X as y}from"./chunk-5HSK4GMQ.js";import"./chunk-UCBZOSRF.js";import"./chunk-27IHK2SF.js";import"./chunk-QCTV7K6S.js";import"./chunk-WUU3X3IN.js";import"./chunk-4AX42N6B.js";import"./chunk-XNDOEJ4N.js";import"./chunk-XIAMBEDX.js";import"./chunk-M56YM2VY.js";import{a as B}from"./chunk-WN5BOODY.js";import{a as W}from"./chunk-OCBCUAFE.js";import"./chunk-HKKBRKQE.js";import"./chunk-LWEFQGDN.js";import"./chunk-3GZCHS7Y.js";import"./chunk-3LY6FUZT.js";import"./chunk-SK6BTSEQ.js";import{H as p,x}from"./chunk-BY5XXL4W.js";import"./chunk-WP4K54AS.js";import{A as S}from"./chunk-UCPKAIVR.js";import"./chunk-NL7NWYRL.js";import{a as k}from"./chunk-57IY32VM.js";import"./chunk-TVMPABNZ.js";import"./chunk-4M6V6BRQ.js";import"./chunk-O2N6PUOM.js";import"./chunk-UNDMYLJW.js";import"./chunk-ICCUGV36.js";import{f as c,h as n,n as s}from"./chunk-3KENBVE7.js";n();s();var O=c(k());var J=c(z());n();s();var e=c(k());n();s();var r=c(k());var m=p.colors.legacy.accentAlert,A=a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${p.colors.brand.white};
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,K=a.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,G=a.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,F=a.a`
  text-decoration: underline;
  color: ${m};
`,d=new B,_=({origin:o,subdomain:t})=>{let{t:g}=x(),f=o?y(o):"",M=o??"",u=new URL(M).hostname,h=t==="true"?u:f,$=async()=>{if(t==="true"){let b=await d.get("userWhitelistedSubdomains"),i=JSON.parse(`${b}`);i?i.push(u):i=[u],i=[...new Set(i)],d.set("userWhitelistedSubdomains",JSON.stringify(i))}else{let b=await d.get("userWhitelistedOrigins"),i=JSON.parse(`${b}`);i?i.push(f):i=[f],i=[...new Set(i)],d.set("userWhitelistedOrigins",JSON.stringify(i))}self.location.href=o};return r.default.createElement(A,null,r.default.createElement(G,null,r.default.createElement(K,null,r.default.createElement(I,{width:128,fill:p.colors.brand.white})),r.default.createElement(l,{size:30,color:m,weight:"600"},g("blocklistOriginDomainIsBlocked",{domainName:h||g("blocklistOriginThisDomain")})),r.default.createElement(l,{color:m},g("blocklistOriginSiteIsMalicious")),r.default.createElement(l,{color:m},r.default.createElement(C,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",r.default.createElement(F,{href:w,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",r.default.createElement(F,{href:w,rel:"noopener",target:"_blank"},"please file an issue"),".")),h?r.default.createElement(l,{color:m,onClick:$,hoverUnderline:!0},g("blocklistOriginIgnoreWarning",{domainName:o})):r.default.createElement(r.default.Fragment,null)))};var H=()=>{let o;try{o=new URLSearchParams(self.location.search).get("origin")||"",new URL(o)}catch{o=""}return o},j=()=>new URLSearchParams(self.location.search).get("subdomain")||"",E=()=>{let o=(0,e.useMemo)(H,[]),t=(0,e.useMemo)(j,[]);return e.default.createElement(T,{future:{v7_startTransition:!0}},e.default.createElement(P,null,e.default.createElement(_,{origin:o,subdomain:t})))};W();S.init({provider:N});L("frontend");var q=document.getElementById("root"),Q=(0,J.createRoot)(q);Q.render(O.default.createElement(v,{theme:U},O.default.createElement(E,null)));
//# sourceMappingURL=Phishing.js.map
