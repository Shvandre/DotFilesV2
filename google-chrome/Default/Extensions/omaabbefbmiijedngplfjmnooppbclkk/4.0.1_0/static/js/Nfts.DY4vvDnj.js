import{i as v,r as i,aB as b,n as l,s as r,k,j as t,R as j,a9 as w,ga as N,fW as y,gb as D,gc as C,gd as S,ge as I}from"./main.BJ1Zz46B.js";function Y(e,n){const{i18n:o}=v();return i.useMemo(()=>e?new Intl.DateTimeFormat(b(o.language),{month:"short",day:"numeric",year:new Date().getFullYear()-1===new Date(e).getFullYear()?"numeric":void 0,hour:"numeric",minute:"numeric",...n}).format(e):"",[e,o.language,n])}function $(e){if(!e)return"";const n=Math.floor((new Date(e).getTime()-Date.now())/(1e3*60*60*24));return n<0?"0":n.toString()}const B=r.div`
    display: grid;
    margin: 0 0 2rem 0;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`,E=r.div`
    position: relative;
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.backgroundContent};
    transition: background-color 0.1s ease;

    border-radius: ${e=>e.theme.cornerSmall};

    overflow: hidden;

    ${e=>{if(e.ios){if(e.isHover)return l`
                    background-color: ${e.theme.backgroundContentTint};
                `}else return e.hover?l`
                    cursor: pointer;

                    &:hover {
                        background-color: ${e.theme.backgroundContentTint};
                    }
                `:void 0}}
`,F=r.div`
    width: 100%;
    position: relative;
`,T=r.div`
    width: 100%;
    padding-bottom: 100%;

    ${e=>e.url&&l`
            background-image: url('${e.url}');
        `}
    background-size: cover;
`,H=r.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.75rem 0.5rem;
    white-space: nowrap;
`,L=r.div`
    position: absolute;
    top: 10px;
    right: 8px;
`,R=r.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 32px;
    width: 32px;
`,A=j.memo(({nft:e,resolution:n,onOpen:o,hideText:s})=>{const m=e.sale!==void 0,g=e.previews?.find(p=>p.resolution===n),{ios:f}=w(),[x,c]=i.useState(!1),a=i.useRef(null),u=i.useContext(N),{data:d}=y(e);i.useLayoutEffect(()=>{a.current&&u&&a.current.contains(u)?c(!0):c(!1)},[a.current,u,c]);const h=d&&Number($(d))<=30;return t.jsxs(E,{hover:!0,isHover:x,ios:f,ref:a,onClick:()=>o(e),children:[t.jsxs(F,{children:[t.jsx(T,{url:g?.url}),m&&t.jsx(L,{children:t.jsx(D,{})}),h&&t.jsx(R,{children:t.jsx(C,{})})]}),!s&&t.jsxs(H,{children:[t.jsx(S,{nft:e}),t.jsx(I,{nft:e})]})]})}),z=({nfts:e,className:n})=>{const o=k();return t.jsx(B,{className:n,children:(e??[]).map(s=>s.metadata?.render_type==="hidden"?t.jsx(t.Fragment,{}):t.jsx(A,{nft:s,resolution:"500x500",onOpen:()=>o.openNft(s)},s.address))})};export{T as I,z as N,E as a,$ as t,Y as u};
