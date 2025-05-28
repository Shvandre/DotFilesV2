import{b7 as U,fL as Oe,cs as ie,ct as P,cv as ce,cT as z,ba as H,b8 as de,fM as K,cw as le,fl as ue,aa as fe,fN as xe,r as x,cD as me,i as _,fO as We,j as e,cp as Y,fP as he,aZ as Z,fQ as pe,K as T,N as Q,fR as $e,cW as Ve,a_ as V,a$ as F,cy as M,be as Me,fk as Ue,cA as q,ca as ge,cB as je,cY as we,fS as ke,L as $,e as E,fT as Pe,C as ze,fU as be,fV as _e,s as l,cd as Ae,bQ as Se,U as B,B as ye,bd as Ce,fW as Te,aB as He,bv as Ke,k as O,at as Qe,R as Ge,fX as Xe,bK as ve,aR as Ne,v as Le,f as C,am as Ye,fY as Ze,b5 as qe,b4 as Je,aC as Ie,fZ as es,f_ as ss,X as ts,f1 as ns,f$ as ee,g0 as as,g1 as rs,g2 as os,D as is,E as cs,F as G,g3 as ds,g4 as ls,g5 as us,g6 as fs,g7 as xs,g8 as se,g9 as ms,dF as hs}from"./main.BJ1Zz46B.js";import{u as J}from"./useTonRecipient.DmtG0SwI.js";import{u as Ee,t as ps,a as gs,I as js}from"./Nfts.DY4vvDnj.js";function te(s){return!!s.dns}function I(s){const t=U();return s.sale!==void 0||!Oe(t.rawAddress,s.owner?.address)}const De=s=>{const t=ie(P),n=ce(t),a=z(),o=H().activeTonWallet.rawAddress;return de(["estimate-link-nft",s.nftAddress,s.linkToAddress,a,n,o],async()=>{const i=new K(o);return a.estimate(await t(),i.encodeNftLink(s))},{enabled:!!t})},Re=s=>{const t=le(),n=z(),a=H(),r=ue(),o=a.activeTonWallet.rawAddress;return fe(async()=>{const i=new K(o);return await n.send(await t(P),xe,i.encodeNftLink(s)),r("link-dns"),!0})};function Fe(s,t){const[n,a]=x.useState(!1),[r,o]=x.useState(!1),[i,u]=x.useState(!1),d=x.useRef(s.data),c=async()=>{const m=await s.refetch();if(i&&a(!1),t(m.data,d.current)){a(!1),o(!0);return}d.current=m.data,setTimeout(c,1e3)};return x.useEffect(()=>()=>u(!0),[]),{isLoading:n,isCompleted:r,data:s.data,refetch:(m=1e4)=>{d.current=s.data,a(!0),u(!1),o(!1),setTimeout(()=>{n&&u(!0)},m),c()}}}const ne=({nft:s})=>{const t=me(),{t:n}=_(),a=We(s),{data:r,isLoading:o}=a,i=r?.wallet?.address||"",{refetch:u,isLoading:d,isCompleted:c}=Fe(a,(m,f)=>!!f?.wallet?.address!=!!m?.wallet?.address);return x.useEffect(()=>{c&&t(n(i?"dns_address_linked":"dns_address_unlinked"))},[c,i]),i?e.jsx(Cs,{nft:s,linkedAddress:i,isLoading:d,refetch:u}):e.jsx(bs,{nft:s,isLoading:o||d,refetch:u})},ws=l(B)`
    cursor: pointer;
    color: ${s=>s.isDisabled?s.theme.textSecondary:s.theme.textAccent};
    pointer-events: ${s=>s.isDisabled?"none":"unset"};
`,ks=new Ae(.02),Be=ge.fromRelativeAmount({asset:Se,amount:ks}),bs=({nft:s,isLoading:t,refetch:n})=>{const a=Y(),{t:r}=_(),[o,i]=x.useState(),u=U(),[d,c]=x.useState(u.rawAddress),m=N=>{if(o==="wallet")return i("confirm");i(void 0),N?n():c(u.rawAddress)},{recipient:f,isLoading:h}=J(s.address),{refetch:p,...g}=De({nftAddress:s.address,linkToAddress:d}),j=x.useCallback(async N=>{c(N),await p(),i("confirm")},[p,s.address]),w=Re({nftAddress:s.address,linkToAddress:d}),A=he(d,u.rawAddress),S=Z(),k=()=>e.jsxs(q,{onClose:m,recipient:f,assetAmount:Be,fitContent:!0,estimation:g,...w,children:[e.jsx(je,{}),e.jsx(we,{}),e.jsxs(ke,{children:[e.jsx($,{hover:!1,children:e.jsxs(E,{children:[e.jsx(Pe,{children:r(A?"dns_current_address":"wallet_address")}),e.jsx(ze,{right:!0,text:V(F(d,S)),secondary:e.jsx(ws,{isDisabled:w.isLoading,onClick:()=>i("wallet"),children:r("replace")})})]})}),e.jsx(be,{}),e.jsx(_e,{})]})]}),b=x.useCallback(()=>e.jsx(Ss,{onSave:j,isLoading:g.isFetching,domain:s.dns}),[j,g.isFetching]),D=I(s),v=()=>{if(g.error){a(g.error);return}i("confirm")},y=pe(s.dns);return e.jsxs(e.Fragment,{children:[e.jsx(T,{type:"button",size:"large",secondary:!0,fullWidth:!0,disabled:D,loading:g.isFetching||h||t,onClick:v,children:r(y?"nft_link_username_button":"nft_link_domain_button")}),e.jsx(Q,{title:r(o==="wallet"?"wallet_address":"send_screen_steps_comfirm_title"),isOpen:!!o,hideButton:!0,handleClose:()=>m(),backShadow:!0,children:o==="wallet"?b:k})]})},_s=l(ye)`
    color: ${s=>s.theme.textSecondary};
    margin-bottom: 1.5rem;
`,As=l(Ce)`
    align-items: flex-start;
`,Ss=({onSave:s,isLoading:t,domain:n})=>{const{t:a}=_(),[r,o]=x.useState(""),[i,u]=x.useState(!1),d=x.useMemo(()=>{if(!i)return!0;try{return M.Address.parse(r),!0}catch{return!1}},[i,r]),c=m=>{m.stopPropagation(),m.preventDefault(),u(!0);try{s(M.Address.parse(r).toRawString())}catch(f){console.error(f)}};return e.jsxs(As,{onSubmit:c,children:[e.jsx(_s,{children:a("add_dns_address").replace("%1%",n)}),e.jsx(Me,{id:"dns-address",disabled:t,isValid:d,value:r,onChange:o,label:a("wallet_address"),clearButton:!0}),e.jsx(Ue,{}),e.jsx(T,{fullWidth:!0,size:"large",primary:!0,disabled:!r,loading:t,children:"Save"})]})},ys=l(B)`
    text-align: center;
    color: ${s=>s.theme.accentOrange};
`,ae="",Cs=({nft:s,linkedAddress:t,isLoading:n,refetch:a})=>{const r=Y(),{t:o}=_(),i=U(),[u,d]=x.useState(!1),c=b=>{d(!1),b===!0&&a()},{recipient:m,isLoading:f}=J(s.address),h=De({nftAddress:s.address,linkToAddress:ae}),p=Re({nftAddress:s.address,linkToAddress:ae}),g=()=>e.jsxs(q,{onClose:c,recipient:m,assetAmount:Be,fitContent:!0,estimation:h,...p,children:[e.jsx(je,{}),e.jsx(we,{}),e.jsxs(ke,{children:[e.jsx(be,{}),e.jsx(_e,{})]})]}),j=I(s),w=pe(s.dns),A=()=>{if(h.error){r(h.error);return}d(!0)},S=Z(),k=Object.values(Ve(i)?$e(i.publicKey,S):{}).every(({address:b})=>!he(b.toRawString(),t));return e.jsxs(e.Fragment,{children:[e.jsx(T,{type:"button",size:"large",secondary:!0,fullWidth:!0,disabled:j,loading:h.isFetching||f||n,onClick:A,children:o("nft_unlink_domain_button").replace("{{address}}",V(F(t,S)))}),k&&!n&&e.jsx(ys,{children:o(w?"tme_linked_with_another_address_warn":"dns_linked_with_another_address_warn")}),e.jsx(Q,{title:o("confirm_unlink"),isOpen:u,hideButton:!0,handleClose:()=>c(),backShadow:!0,children:g})]})},Ts=s=>{const t=ie(P),n=ce(t),a=z(),o=H().activeTonWallet.rawAddress;return de(["estimate-nft-renew",s.nftAddress,a,n,o],async()=>{const i=new K(o);return a.estimate(await t(),i.encodeNftRenew(s))},{enabled:!!t})},vs=s=>{const t=le(),n=z(),a=H(),r=ue(),o=a.activeTonWallet.rawAddress;return fe(async()=>{const i=new K(o);return await n.send(await t(P),xe,i.encodeNftRenew(s)),r("renew-dns"),!0})},Ns=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Ls=l(T)`
    margin-bottom: 0.75rem;
`,Es=l(B)`
    color: ${s=>s.danger?s.theme.accentRed:s.theme.textSecondary};
`,Ds=ge.fromRelativeAmount({asset:Se,amount:new Ae(.02)}),Rs=1e3*60*60*24*366,Fs={year:"numeric",hour:void 0,minute:void 0},Bs=({nft:s})=>{const t=me(),n=I(s),a=Y(),{t:r,i18n:{language:o}}=_(),i=new Intl.RelativeTimeFormat(He(o),{style:"long"}),u=Te(s),{data:d,isLoading:c}=u,{refetch:m,isLoading:f,isCompleted:h}=Fe(u,(y,N)=>!!y?.getTime()&&y.getTime()!==N?.getTime());x.useEffect(()=>{h&&t(r("renew_nft_renewed"))},[h]);const p=Ee(Date.now()+Rs,Fs),[g,j]=x.useState(!1),w=y=>{j(!1),y&&m()},{recipient:A,isLoading:S}=J(s.address),k=Ts({nftAddress:s.address}),b=vs({nftAddress:s.address}),D=()=>{if(k.error){a(k.error);return}j(!0)};if(!c&&!d)return null;const v=ps(d);return e.jsxs(e.Fragment,{children:[e.jsxs(Ns,{children:[e.jsx(Ls,{type:"button",disabled:n||f,loading:c||k.isFetching||S,onClick:D,size:"large",secondary:!0,fullWidth:!0,children:f?r("renew_nft_in_progress"):r("dns_renew_until_btn").replace("%{untilDate}",p)}),v!==""&&e.jsx(Es,{danger:Number(v)<=30,children:r("renew_nft_expiration_date").replace("%1%",i.format(Number(v),"days"))})]}),e.jsx(Q,{isOpen:g,hideButton:!0,handleClose:()=>w,backShadow:!0,children:()=>e.jsx(q,{onClose:w,recipient:A,assetAmount:Ds,fitContent:!0,estimation:k,...b})})]})},re=s=>{const{marketplace:t}=s.metadata,n=M.Address.parse(s.address).toString();switch(t){case"getgems.io":return`https://getgems.io/nft/${n}`;default:return`https://getgems.io/nft/${n}`}},R=({url:s})=>{const{t}=_(),n=O();return e.jsx(Qe,{children:e.jsx(T,{size:"large",secondary:!0,fullWidth:!0,onClick:a=>{a.preventDefault(),a.stopPropagation(),n.openPage(s)},children:t("nft_open_in_marketplace")})})},W=({nftItem:s})=>{const t=O(),{t:n}=_(),a=U();return e.jsxs(e.Fragment,{children:[e.jsx(T,{primary:!0,size:"large",fullWidth:!0,disabled:s.sale!==void 0||s.owner?.address!==a.rawAddress,onClick:r=>{r.preventDefault(),r.stopPropagation(),t.uiEvents.emit("transferNft",{method:"transferNft",params:s})},children:n("nft_transfer_nft")}),s.sale&&e.jsx(Ws,{children:n("nft_on_sale_text")})]})},Os=l(B)`
    width: 100%;
    color: ${s=>s.theme.textSecondary};
`,Ws=l(Os)`
    width: 100%;
    padding: 0 1rem;
    text-align: left;
`,$s=({kind:s,nftItem:t})=>{if(Ke())return e.jsx(e.Fragment,{children:e.jsx(R,{url:re(t)})});switch(s){case"token":return e.jsxs(e.Fragment,{children:[e.jsx(W,{nftItem:t}),e.jsx(R,{url:re(t)})]});case"ton.dns":return e.jsxs(e.Fragment,{children:[e.jsx(W,{nftItem:t}),e.jsx(R,{url:`https://dns.ton.org/#${t.dns?.slice(0,-4)}`}),te(t)&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{nft:t}),e.jsx(Bs,{nft:t})]})]});case"telegram.number":{const a=t.metadata.name.replace(/\s/g,"").slice(1);return e.jsxs(e.Fragment,{children:[e.jsx(W,{nftItem:t}),e.jsx(R,{url:`https://fragment.com/number/${a}`})]})}case"telegram.name":return e.jsxs(e.Fragment,{children:[e.jsx(W,{nftItem:t}),e.jsx(R,{url:`https://fragment.com/username/${t.dns?.slice(0,-5)}`}),te(t)&&e.jsx(ne,{nft:t})]})}},Vs=l.div`
    width: 100%;
`,Ms=l.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
`,Us=l(C)`
    cursor: pointer;
    color: ${s=>s.theme.textAccent};
`,X=l(ye)`
    color: ${s=>s.theme.textSecondary};
`,Ps=Ge.memo(({nftItem:s})=>{const{t}=_(),{data:n}=Xe(s.address),{data:a,isLoading:r}=Te(s),o=Ee(a,{year:"numeric",hour:void 0,minute:void 0}),i=n??s,u=O(),d=ve(),c=i.owner?.address,m=M.Address.parse(i.address).toString(),f=Z(),h=d.NFTOnExplorerUrl??"https://tonviewer.com/nft/%s",p=F(m,f,!0);return e.jsxs(Vs,{children:[e.jsxs(Ms,{children:[e.jsx(Ne,{children:t("nft_details")}),e.jsx(Us,{onClick:()=>u.openPage(h.replace("%s",m)),children:t("nft_view_in_explorer")})]}),e.jsxs(Le,{margin:!1,children:[c&&e.jsx($,{onClick:()=>u.copyToClipboard(F(c,f)),children:e.jsxs(E,{children:[e.jsx(X,{children:t("nft_owner_address")}),e.jsx(C,{children:V(F(c,f))})]})}),!!(a||r)&&e.jsx($,{hover:!1,children:e.jsxs(E,{children:[e.jsx(X,{children:t("dns_expiration_date")}),a?e.jsx(C,{children:o}):e.jsx(Ye,{})]})}),e.jsx($,{onClick:()=>u.copyToClipboard(p),children:e.jsxs(E,{children:[e.jsx(X,{children:t("nft_contract_address")}),e.jsx(C,{children:V(p)})]})})]})]})}),oe=l.div`
    display: flex;
    flex-direction: column;
    padding: 0.875rem 1rem;
`,zs=l.div`
    border-top: 1px solid ${s=>s.theme.separatorCommon};
`,Hs=l(C)`
    margin-bottom: 0.5rem;
`,Ks=l.span`
    position: relative;
    top: 3px;
    margin-left: 4px;
`,Qs="0:b774d95eb20543f186c06b371ab88ad704f7e256130caf96189368a7d0cb6ccf",Gs="0:80d78a35f955a14b679faa887ff4cd5bfc0f43b4a4eea2a7e6927f3701b273c2",Xs="0:0e41dc1dc3c9067ed24248580e12b3359818d83dee0304fabcf80845eafafdb2",Ys=l(ms)`
    word-break: break-word;

    user-select: none;
`,Zs=l(hs)`
    color: ${s=>s.theme.textSecondary};
    border: 1px solid ${s=>s.theme.buttonTertiaryBackground};
    border-radius: 6px;
    padding: 3.5px 6px 4.5px;
    text-transform: uppercase;

    position: relative;
    top: -3px;

    white-space: nowrap;
`,qs=l(B)`
    color: ${s=>s.isTrusted?s.theme.textSecondary:s.theme.accentOrange};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,Js=l.div`
    text-align: center;
`,Is=l.div`
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,et=l.div`
    .drop-down-container {
        z-index: 100;
        top: calc(100% + 12px);
        right: 0;
    }
`,st=l(Le)`
    margin: 0;

    svg {
        color: ${s=>s.theme.accentBlue};
    }
`,tt=({onClose:s,nftItem:t})=>{const{mutateAsync:n,isLoading:a}=Ze(),{mutate:r,isLoading:o}=qe(),{mutateAsync:i}=Je(),{data:u}=Ie(),d=t.trust!==es.Whitelist,c=!!u?.trustedNfts.includes(t.collection?.address||t.address),m=x.useRef(null),{t:f}=_(),{data:h}=ss(t),{description:p}=t.metadata,g=t.dns??t.metadata.name,j=x.useMemo(()=>{switch(t.collection?.address){case Qs:return"ton.dns";case Gs:return"telegram.name";case Xs:return"telegram.number";default:return"token"}},[t]),w=t?.collection?.name,A=t.previews?.find(L=>L.resolution==="1500x1500"),{isOpen:S,onClose:k,onOpen:b}=ts(),D=L=>{L==="mark_spam"?n(t).then(s):L==="mark_trusted"&&r(t),k()},v=ve(),y=O(),N=v.NFTOnExplorerUrl??"https://tonviewer.com/nft/%s";return e.jsxs(Ce,{children:[s&&e.jsxs(ns,{children:[e.jsx(ee,{onClick:s,children:e.jsx(as,{})}),e.jsxs(Js,{children:[e.jsx(Ne,{children:t.dns??t.metadata.name}),d&&e.jsxs(qs,{isTrusted:c,onClick:b,children:[f("suspicious_label_full")," ",e.jsx(rs,{color:c?"textSecondary":"accentOrange"})]})]}),e.jsx(os,{isOpen:S,onClose:D,isTrusted:c}),e.jsx(et,{children:e.jsx(is,{containerClassName:"drop-down-container",payload:L=>e.jsxs(st,{children:[e.jsx(G,{onClick:()=>{L(),i(t).then(s)},children:e.jsxs(E,{children:[e.jsx(C,{children:f("nft_actions_hide_nft")}),e.jsx(ds,{})]})}),e.jsx(G,{onClick:()=>{L(),n(t).then(s)},children:e.jsxs(E,{children:[e.jsx(C,{children:f("nft_actions_hide_and_report")}),e.jsx(ls,{})]})}),e.jsx(G,{onClick:()=>y.openPage(N.replace("%s",t.address)),children:e.jsxs(E,{children:[e.jsx(C,{children:f("nft_actions_view_on_explorer")}),e.jsx(us,{})]})})]}),children:e.jsx(ee,{children:e.jsx(cs,{})})})})]}),d&&!c&&e.jsxs(Is,{children:[e.jsx(T,{warn:!0,type:"button",onClick:()=>n(t).then(s),loading:a,children:f("suspicious_buttons_report")}),e.jsx(T,{type:"button",onClick:()=>r(t),loading:o,children:f("suspicious_buttons_not_spam")})]}),e.jsxs(gs,{children:[A&&e.jsx(js,{ref:m,url:A.url}),e.jsxs(oe,{children:[e.jsxs(Ys,{children:[g,t.sale&&e.jsxs(e.Fragment,{children:["  ",e.jsx(Zs,{children:f("nft_on_sale")})]})]}),w&&e.jsxs(fs,{open:!0,margin:"small",children:[w,t.approvedBy&&t.approvedBy.length>0&&e.jsx(Ks,{children:e.jsx(xs,{})})]}),p&&e.jsx(se,{text:p,margin:"last",contentColor:!0})]}),h&&h.metadata?.description&&e.jsxs(e.Fragment,{children:[e.jsx(zs,{}),e.jsxs(oe,{children:[e.jsx(Hs,{children:f("nft_about_collection")}),e.jsx(se,{text:h.metadata.description,margin:"last",contentColor:!0})]})]})]}),e.jsx($s,{nftItem:t,kind:j}),e.jsx(Ps,{nftItem:t,kind:j})]})},ot=()=>{const s=O(),[t,n]=x.useState(void 0),a=x.useCallback(()=>{n(void 0)},[n]);x.useEffect(()=>{const o=i=>{n(i.params)};return s.uiEvents.on("nft",o),()=>{s.uiEvents.off("nft",o)}},[s,n]);const r=x.useCallback(()=>{if(t)return e.jsx(tt,{onClose:a,nftItem:t})},[t,a]);return e.jsx(Q,{isOpen:t!==void 0,hideButton:!0,handleClose:a,backShadow:!0,mobileFullScreen:!0,children:r})};export{ot as default};
