import{r as n,j as o}from"./index-1337d705.js";const k="_filter_wli1z_1",S="_costRange_wli1z_14",b="_inputs_wli1z_20",z="_inputsCost_wli1z_25",F="_dash_wli1z_48",I="_colors_wli1z_52",B="_colorsTitle_wli1z_57",O="_titleCost_wli1z_57",y="_sortTitle_wli1z_57",V="_dropColor_wli1z_68",D="_dropSortCost_wli1z_68",E="_activeDrop_wli1z_78",L="_checkboxColor_wli1z_82",P="_checkBoxCustom_wli1z_101",G="_btAccept_wli1z_124",M="_sortCost_wli1z_140",$="_costTitle_wli1z_149",H="_pickVarSortColor_wli1z_155",e={filter:k,costRange:S,inputs:b,inputsCost:z,dash:F,colors:I,colorsTitle:B,titleCost:O,sortTitle:y,dropColor:V,dropSortCost:D,activeDrop:E,checkboxColor:L,checkBoxCustom:P,btAccept:G,sortCost:M,costTitle:$,pickVarSortColor:H},Q="_svgArrowBottom_1w0c3_1",U="_rotateArrowAnimation_1w0c3_9",W="_rotateArrow_1w0c3_9",X="_rotateArrowAnimationReverse_1w0c3_13",q="_rotateArrowreverse_1w0c3_1",p={svgArrowBottom:Q,rotateArrowAnimation:U,rotateArrow:W,rotateArrowAnimationReverse:X,rotateArrowreverse:q},g=n.memo(({boolIsRotate:a})=>o.jsx("div",{className:a?p.svgArrowBottom+" "+p.rotateArrowAnimation:p.svgArrowBottom+" "+p.rotateArrowAnimationReverse,children:o.jsxs("svg",{fill:"#424242",height:"12px",width:"12px",version:"1.1",viewBox:"0 0 330 330",stroke:"#424242",children:[o.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),o.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",o.jsx("path",{id:"XMLID_225_",d:"M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"})," "]})]})})),K=n.memo(({filtredListProd:a,setFilterMainArray:u,setPagePagination:w})=>{const[i,_]=n.useState({cost:!1,color:!1,sort:!1}),[r,l]=n.useState({costRangeOne:0,costRangeTwo:"",color:[],sortFilter:""}),[h,d]=n.useState(!1),x=n.useMemo(()=>Array.from(new Set(a.map(t=>t.colorText))),[a]),C=n.useRef(null),f=t=>{if(t.stopPropagation(),t.target.id in i){let s=t.target.id,c={};for(let T in i)c[T]=!1;_({...c,[s]:!i[s]})}};n.useEffect(()=>{function t(s){s.target.id in i||_({cost:!1,color:!1,sort:!1})}return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]);const v=t=>{let s=t.target.parentElement.children;for(let c=0;c<s.length;c++)s[c].id&&(s[c].className="");t.target.tagName==="SPAN"&&t.target.id&&(l({...r,sortFilter:t.target.id}),t.target.className=`${e.pickVarSortColor}`),d(!0)},A=(t,s)=>{d(!0);let c=new Set([...r.color,t]);s||c.delete(t),c=Array.from(c),l({...r,color:c})},j=t=>{if(t.target.tagName==="INPUT"){if(t.target.id==="costInputOne")m(t.target,4),l({...r,costRangeOne:t.target.value});else if(t.target.id==="costInputTwo"){let s=t.target.value;m(t.target,5),+s<=+r.costRangeOne&&(s=+r.costRangeOne+500),l({...r,costRangeTwo:+s})}d(!0)}},m=(t,s)=>{t.value>s&&(t.value=t.value.slice(0,s))},R=()=>{let t=[...a];return(r.costRangeTwo||r.costRangeOne)&&(r.costRangeOne||l({...r,costRangeOne:0}),r.costRangeTwo||l({...r,costRangeTwo:8e4}),t=t.filter(s=>s.cost>=+r.costRangeOne&&+s.cost<=+r.costRangeTwo)),r.color.length>0&&(t=t.filter(s=>r.color.includes(s.colorText))),r.sortFilter&&(r.sortFilter=="down"?t=t.sort((s,c)=>+c.cost-+s.cost):t=t.sort((s,c)=>+s.cost-+c.cost)),t},N=()=>{u(R());try{w(1)}catch{console.log("")}finally{_({cost:!1,color:!1,sort:!1}),d(!1)}};return o.jsx("div",{className:e.filter,children:o.jsxs("form",{onClick:f,children:[o.jsxs("div",{className:e.costRange,children:[o.jsxs("label",{className:e.titleCost,htmlFor:"costInputOne",id:"cost",children:["Цена",o.jsx(g,{boolIsRotate:i.cost})]}),o.jsxs("div",{onChange:j,className:i.cost?e.inputsCost+" "+e.activeDrop:e.inputsCost,children:[o.jsxs("div",{className:e.inputs,children:[o.jsx("input",{type:"number",id:"costInputOne",min:"200",max:"49000"}),o.jsx("span",{className:e.dash,children:"-"}),o.jsx("input",{type:"number",id:"costInputTwo",min:"300",max:"50000"})]}),o.jsx("div",{className:e.costTitle,children:"Цена в руб."})]})]}),o.jsxs("div",{className:e.colors,children:[o.jsxs("span",{className:e.colorsTitle,id:"color",children:["Цвет",o.jsx(g,{boolIsRotate:i.color})]}),o.jsx("div",{className:i.color?e.dropColor+" "+e.activeDrop:e.dropColor,children:x.map((t,s)=>o.jsxs("div",{className:e.checkboxColor,children:[o.jsx("input",{ref:C,onChange:c=>A(t,c.target.checked),type:"checkbox",id:t+"id"}),o.jsx("span",{className:e.checkBoxCustom}),o.jsx("label",{htmlFor:t+"id",children:t})]},t))})]}),o.jsxs("div",{className:e.sortCost,children:[Object.values(r).some(t=>t!=!1)&&h?o.jsx("span",{onClick:N,className:e.btAccept,children:"Принять изменения"}):"",o.jsxs("span",{className:e.sortTitle,id:"sort",children:["Сортировать стоимость по:",r.sortFilter=="up"&&" возрастанию"||r.sortFilter=="down"&&" убыванию"]}),o.jsxs("div",{onClick:v,className:i.sort?e.dropSortCost+" "+e.activeDrop:e.dropSortCost,children:[o.jsx("span",{id:"up",children:"По возрастанию"}),o.jsx("span",{id:"down",children:"По убыванию"})]})]})]})})});export{K as F};
