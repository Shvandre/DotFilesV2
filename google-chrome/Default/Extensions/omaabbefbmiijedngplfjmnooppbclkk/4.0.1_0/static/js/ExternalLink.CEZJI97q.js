import{n as i,s as d,br as $,k as p,hh as m,j as u}from"./main.BJ1Zz46B.js";const b=d.a`
    text-decoration: unset;
    cursor: pointer;

    ${t=>t.$contents&&"display: contents"};
    ${t=>t.$colored&&i`
            color: ${t.theme.accentBlueConstant};

            > * {
                color: ${t.theme.accentBlueConstant};
            }
        `};
`,h=d.button`
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    ${t=>t.$contents&&"display: contents"};
    ${t=>t.$colored&&i`
            color: ${t.theme.accentBlueConstant};

            > * {
                color: ${t.theme.accentBlueConstant};
            }
        `};
`,x=({className:t,href:e,onClick:o,children:r,contents:s,colored:c})=>{const a=$(),l=p();return a==="web"||a==="swap_widget_web"?m(e,l.authorizedOpenUrlProtocols)?u.jsx(b,{className:t,href:e,target:"_blank",rel:"noopener noreferrer",onClick:n=>o?.(n),$contents:s,$colored:c,children:r}):null:u.jsx(h,{onClick:n=>{o?.(n),l.openPage(e)},className:t,$contents:s,$colored:c,children:r})};export{x as E};
