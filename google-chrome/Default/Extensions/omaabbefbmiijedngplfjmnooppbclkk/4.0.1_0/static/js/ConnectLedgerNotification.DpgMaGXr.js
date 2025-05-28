import{i as k,r as t,gp as b,j as o,H as w,J as I,a1 as y,gq as h,k as q,N,s as S,gr as A}from"./main.BJ1Zz46B.js";const B=S.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`,R=S(A)`
    margin: 1rem 0;
`,_=S.div`
    margin-top: 1rem;
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,F=({ledgerParams:e,onClose:u})=>{const{t:i}=k(),[d,n]=t.useState(!1),[l,c]=t.useState(0),{mutateAsync:p,data:a,isLoading:C,isDeviceConnected:r,reset:f}=b(),j=async()=>{try{const m=await p();try{if("tonProof"in e){const x=await m.getAddressProof(e.path,e.tonProof);n(!0),setTimeout(()=>e.onSubmit(x),500);return}const s=[];for(const x of e.transactions){const v=await m.signTransaction(e.path,x);s.push(v),c(E=>E+1)}n(!0),setTimeout(()=>e.onSubmit(s),500)}catch(s){console.error(s),typeof s=="object"&&s&&"message"in s&&s.message.includes("0x6985")?u(new h("Cancel auth request")):u(s)}}catch(m){console.debug(m)}};t.useEffect(()=>{j()},[]);const L=()=>{f(),j()};let g="connect";r&&(g="open-ton"),a&&(g="confirm-tx"),d&&(g="all-completed");const T="transactions"in e?{transactionsToSign:e.transactions.length,signingTransactionIndex:l,action:"transaction"}:{action:"ton-proof"};return o.jsxs(B,{children:[o.jsx(R,{...T,currentStep:g}),o.jsx(w,{children:o.jsx(I,{children:o.jsxs(_,{children:[o.jsx(y,{secondary:!0,onClick:()=>u(new h("Cancel auth request")),children:i("cancel")}),o.jsx(y,{primary:!0,loading:C||!!a||d,onClick:L,children:i("try_again")})]})})})]})},z=()=>{const e=q(),{t:u}=k(),[i,d]=t.useState(void 0),[n,l]=t.useState(void 0),c=t.useCallback(()=>{d(void 0),l(void 0)},[]),p=t.useCallback(r=>{e.uiEvents.emit("response",{method:"response",id:n,params:r}),c()},[e,n,c]),a=t.useCallback(r=>{n&&e.uiEvents.emit("response",{method:"response",id:n,params:r??new Error("Unknown Ledger error")}),c()},[n,e,c]);t.useEffect(()=>{const r=f=>{d(f.params),l(f.id)};return e.uiEvents.on("ledger",r),()=>{e.uiEvents.off("ledger",r)}},[e]);const C=t.useCallback(()=>{if(!(!i||!n))return o.jsx(F,{ledgerParams:{...i,onSubmit:p},onClose:a})},[e,i,n,a,p]);return o.jsx(N,{isOpen:i!=null&&n!=null,handleClose:()=>a(new h("Cancel auth request")),title:u("ledger_connect_header"),children:C})};export{F as LedgerContent,z as default};
