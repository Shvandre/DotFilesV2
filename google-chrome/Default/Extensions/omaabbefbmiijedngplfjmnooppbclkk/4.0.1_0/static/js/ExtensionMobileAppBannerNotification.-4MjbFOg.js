import{a9 as x,br as h,hd as f,r as a,i as g,co as b,he as _,hf as j,j as t,N as w,K as c,hg as y,s as r,B,g9 as E}from"./main.BJ1Zz46B.js";import{d as k}from"./index.D14i0AOK.js";import{E as v}from"./ExternalLink.CEZJI97q.js";const C=()=>{const{mainnetConfig:e}=x(),n=e.pro_mobile_app_appstore_link,o=h(),{data:s}=f();return a.useMemo(()=>!n||s===void 0||s?.dismissMobileQRBanner?null:n,[o,n,s])},A=r.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`,M=r.div`
    padding: 16px;
    border-radius: ${e=>e.theme.cornerSmall};
    background-color: ${e=>e.theme.constantWhite};
    margin-bottom: 20px;
    width: fit-content;
`,N=r(B)`
    color: ${e=>e.theme.textSecondary};
    margin-bottom: 32px;
    max-width: 366px;
    text-wrap: balance;
`,S=r(E)`
    margin-bottom: 4px;
    max-width: 326px;
    text-wrap: balance;
`,W=r(v)`
    width: 100%;
`,Q=({className:e})=>{const{t:n}=g(),o=C(),s=b(),{mutate:d}=_(),[p,i]=a.useState(!1),u=!!navigator?.userAgent&&/iPhone/.test(navigator.userAgent),l=j(y);a.useEffect(()=>{o&&l.length===0&&i(!0)},[o,l.length]);const m=()=>{i(!1),d({dismissMobileQRBanner:!0})};return t.jsx(w,{isOpen:p,handleClose:m,children:()=>!!o&&t.jsxs(A,{className:e,children:[t.jsx(M,{children:t.jsx(k.QRCode,{size:160,value:o,bgColor:s.constantWhite,fgColor:s.constantBlack,quietZone:0})}),t.jsx(S,{children:n("pro_download_mobile_banner_title")}),t.jsx(N,{children:n("pro_download_mobile_banner_description")}),t.jsx(W,{href:o,children:u?t.jsx(c,{primary:!0,size:"large",fullWidth:!0,children:n("update_download")}):t.jsx(c,{secondary:!0,size:"large",fullWidth:!0,children:n("pro_download_mobile_banner_description_link")})})]})})};export{Q as ExtensionMobileAppBannerNotification,Q as default};
