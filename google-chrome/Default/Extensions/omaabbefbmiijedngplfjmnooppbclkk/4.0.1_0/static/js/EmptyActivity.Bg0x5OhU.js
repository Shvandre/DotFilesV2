import{i as c,k as l,r as d,hY as x,j as e,Q as p,at as u,ap as y,hZ as m,h_ as h,s,U as j,K as f}from"./main.BJ1Zz46B.js";const v=s.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`,B=s(j)`
    color: ${t=>t.theme.textSecondary};
    margin-bottom: 1.5rem;
`,g=s.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`,o=s(f)`
    display: flex;
    gap: 6px;

    > svg {
        color: ${t=>t.theme.buttonTertiaryForeground};
    }
`,w=()=>{const{t}=c(),i=l(),[a,n]=d.useState(!1),{data:r}=x();return e.jsxs(v,{children:[e.jsx(p,{children:t("activity_empty_transaction_title")}),e.jsx(B,{children:t("activity_empty_transaction_caption")}),e.jsxs(g,{children:[e.jsx(u,{children:e.jsxs(o,{size:"small",onClick:()=>n(!0),children:[e.jsx(y,{}),t("exchange_title")]})}),e.jsxs(o,{size:"small",onClick:()=>i.uiEvents.emit("receive",{method:"receive",params:{}}),children:[e.jsx(m,{}),t("wallet_receive")]})]}),e.jsx(h,{buy:r,open:a,handleClose:()=>n(!1)})]})};export{w as default};
