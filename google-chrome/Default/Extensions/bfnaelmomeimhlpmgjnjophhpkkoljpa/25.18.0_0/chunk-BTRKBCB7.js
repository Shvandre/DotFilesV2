import{a as y}from"./chunk-ZL5Z5BHT.js";import{f as v}from"./chunk-Z2TWY6BT.js";import{p as s}from"./chunk-I6U22RLL.js";import{a as w,b as q}from"./chunk-UCBZOSRF.js";import{H as l}from"./chunk-BY5XXL4W.js";import{la as b,r as R}from"./chunk-NL7NWYRL.js";import{a as M}from"./chunk-57IY32VM.js";import{a as I}from"./chunk-ICCUGV36.js";import{f as x,h as c,n as a}from"./chunk-3KENBVE7.js";c();a();var o=x(M()),g=x(I());var T={isConnected:!1,lastMessage:null,postMessage:b},$=o.default.createContext(T);function E(){let[e,r]=(0,o.useState)(null),[u,d]=(0,o.useState)(null),{isSidebarOpen:m}=y(),f=n=>{let t=q(n);!t||typeof t.url!="string"||!t.url||!t.req||typeof t.req.method!="string"||!t.req.method||d({...t,url:R(t.url.toString())})};(0,o.useEffect)(()=>{let n;return(async()=>{if(m){let p=i=>{i.name==="popup/sidepanel"&&(r(i),i.onMessage.addListener(f),i.onDisconnect.addListener(()=>{r(null),d(null)}))};g.default.runtime.onConnect.addListener(p)}else{let i=`notification/${(await v()).id}`;n=g.default.runtime.connect({name:i}),r(n),n.onMessage.addListener(f),n.onDisconnect.addListener(()=>{self.close(),r(null),d(null)})}})(),()=>{n?.disconnect()}},[m]);let B=(0,o.useCallback)(n=>{e&&e.postMessage(w(n))},[e]);return[!!e,u,B]}function h(){let e=(0,o.useContext)($);if(!e)throw new Error("Missing background connection context");return e}function A(){let{lastMessage:e}=h();return e}function N(){let e=A(),{postMessage:r}=h();return(0,o.useCallback)(u=>{if(e){if(e.req.id!==u.id)throw new Error(`Request id: ${e.req.id} does not match response id: ${u.id}`);r(u)}else throw new Error("No request received from the background yet")},[e,r])}c();a();c();a();var C=s.div`
  ${e=>!e.plain&&`
    box-shadow: ${e.theme?.footer?.boxShadow??"0px -6px 10px rgba(0, 0, 0, 0.25)"};
    background-color: ${e.theme?.footer?.backgroundColor??l.colors.legacy.bgRow};
    border-top: ${e.theme?.footer?.borderTop??`1px solid ${l.colors.legacy.borderSecondary}`};
  `}
`;var Q=s.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > * {
    margin-top: 27px;
  }
`,V=s.div`
  flex: 1;
  overflow: auto;
  padding: 0px 16px;
`,X=s.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: ${l.colors.legacy.bgWallet};
`,Y=s(C)`
  flex: none;
  padding: 14px 20px;
`,Z=s.div`
  padding: 20px;
  height: 100%;
`;export{C as a,$ as b,E as c,A as d,N as e,Q as f,V as g,X as h,Y as i,Z as j};
//# sourceMappingURL=chunk-BTRKBCB7.js.map
