import{r as d,j as s,a as N,e as P,u as S,f as D,h as F,k as V,m as R,o as b,P as A,n as W,d as M,p as G,S as z}from"./index-1337d705.js";const H="_sliderBt_ukk0y_1",T="_sliderRight_ukk0y_15",O="_sliderLeft_ukk0y_20",$="_color_ukk0y_24",Y="_colors_ukk0y_31",U="_commodityBlock_ukk0y_38",X="_leftColumn_ukk0y_45",K="_sliderImg_ukk0y_58",Z="_sliderPhotosWindow_ukk0y_64",q="_oneImgSlider_ukk0y_1",x={sliderBt:H,sliderRight:T,sliderLeft:O,color:$,colors:Y,commodityBlock:U,leftColumn:X,sliderImg:K,sliderPhotosWindow:Z,oneImgSlider:q},J="_imgLine_z9w39_1",Q="_hiddenImgLine_z9w39_25",L={imgLine:J,hiddenImgLine:Q},C=d.memo(({currentElement:e,setCounterImg:i,flag:n})=>{const g=l=>{let h=e.img.indexOf(l.target.src);i(h)};return s.jsx("div",{className:n?L.imgLine+" "+L.hiddenImgLine:L.imgLine,children:e.img.map(l=>s.jsx("div",{className:L.imgOnLine,children:s.jsx("img",{onClick:g,src:l,alt:e.name})},l))})}),E="_windowShowImg_1ldk4_1",ss="_topLine_1ldk4_12",es="_wrapper_1ldk4_22",is="_img_1ldk4_29",os="_mainShow_1ldk4_41",ts="_count_1ldk4_45",ns="_blockLineLeftImg_1ldk4_49",ds="_closeShower_1ldk4_53",cs="_scale_1ldk4_58",rs="_btNav_1ldk4_64",m={windowShowImg:E,topLine:ss,wrapper:es,img:is,mainShow:os,count:ts,blockLineLeftImg:ns,closeShower:ds,scale:cs,btNav:rs},ls=({currentElement:e,setCounterImg:i,counterImg:n,setIsActiveShowWindow:g})=>{const[l,h]=d.useState(0),p=d.useRef(null),f=()=>{g(!1),document.body.style.overflow="unset"},k=t=>{t.target.tagName!="IMG"&&(g(!1),document.body.style.overflow="unset")},j=t=>{t.deltaY<0?n>0?i(a=>a-1):i(e.img.length-1):n<e.img.length-1?i(a=>a+1):i(0)},v=t=>{l?h(0):t.clientY<=t.target.offsetHeight/3.5?h(t.clientY):h(-t.clientY/3)},r=t=>{t.clientX>t.target/2?n>0?i(a=>a-1):i(e.img.length-1):n<e.img.length-1?i(a=>a+1):i(0)};d.useEffect(()=>{p.current.style.setProperty("--positionYVal",`${l}px`)},[l]),d.useEffect(()=>{h(0);const t=a=>{a.keyCode==37&&(n>0?i(w=>w-1):i(e.img.length-1)),a.keyCode==39&&(n<e.img.length-1?i(w=>w+1):i(0))};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[n]);const o=t=>{if(l==0){h(1);return}t.target.id==="btUp"?(h(a=>a+70),l>=window.innerHeight/5&&h(window.innerHeight/5)):t.target.id==="btDown"&&(h(a=>a-70),l<=-window.innerHeight/5&&h(-window.innerHeight/5))};return s.jsxs("div",{className:m.windowShowImg,children:[s.jsx("div",{className:m.topLine,children:s.jsxs("div",{className:m.wrapper,children:[s.jsxs("span",{className:m.count,children:[n+1," из ",e.img.length]}),s.jsx("span",{className:m.closeShower,onClick:f,children:"X"})]})}),s.jsxs("div",{onClick:k,className:m.mainShow,children:[s.jsx("div",{className:m.blockLineLeftImg,children:s.jsx(C,{currentElement:e,setCounterImg:i})}),s.jsx("div",{onWheel:j,onClick:window.innerWidth>=400?v:r,className:m.img,children:s.jsx("img",{ref:p,src:e.img[n],alt:"card",className:l!=0?m.scale:""})})]}),s.jsxs("div",{onClick:o,className:m.btNav,children:[s.jsx("span",{id:"btUp",title:"Вверх",className:m.btUp,children:"+"}),s.jsx("span",{id:"btDown",title:"Вниз",className:m.btBottom,children:"-"})]})]})},as="_backgroundSh_1ios3_1",hs="_lookedProd_1ios3_13",ms="_conteiner_1ios3_20",_s="_title_1ios3_26",gs="_products_1ios3_31",u={backgroundSh:as,lookedProd:hs,conteiner:ms,title:_s,products:gs},xs=d.memo(()=>{const e=N(i=>i.recentlyProdLooked.products);return s.jsxs("div",{className:u.lookedProd,children:[s.jsx("div",{className:u.backgroundSh}),s.jsxs("div",{className:u.conteiner,children:[s.jsx("div",{className:u.title,children:"Вы смотрели"}),s.jsx("div",{className:u.products,children:e.map((i,n)=>s.jsx(P,{img:i.img,name:i.name,cost:i.cost,link:i.link},i.name+n))})]})]})}),ps="_rightColumn_13yfb_1",ks="_title_13yfb_7",fs="_colorText_13yfb_16",js="_cost_13yfb_21",vs="_size_13yfb_28",ws="_formBt_13yfb_49",us="_addedInBasket_13yfb_60",ys="_addedInFavorite_13yfb_73",Ls="_trash_13yfb_86",Ns="_btOpenDesc_13yfb_90",bs="_descrInside_13yfb_100",Ss="_openDescAnimation_13yfb_108",Cs="_openDescription_13yfb_1",Bs="_closeDescAnimation_13yfb_112",Is="_closeDescription_13yfb_1",Ps="_description_13yfb_132",Ds="_similarProd_13yfb_138",c={rightColumn:ps,title:ks,colorText:fs,cost:js,size:vs,formBt:ws,addedInBasket:us,addedInFavorite:ys,trash:Ls,btOpenDesc:Ns,descrInside:bs,openDescAnimation:Ss,openDescription:Cs,closeDescAnimation:Bs,closeDescription:Is,description:Ps,similarProd:Ds},Fs=d.memo(({currentElement:e,booleanIsFavoriteList:i,setNoticeFavoriteList:n,setBooleanIsFavoriteList:g})=>{const[l,h]=d.useState(!1),[p,f]=d.useState(!1),k=S(),j=r=>{r.preventDefault(),h(!0),k(D(e))},v=r=>{r.preventDefault(),n(!0),setTimeout(()=>n(!1),3e3),i?(k(V(e)),g(!1)):(k(F(e)),g(!0))};return s.jsx("div",{className:c.rightColumn,children:s.jsxs("div",{className:c.title,children:[s.jsx("h1",{children:e.name}),s.jsx("div",{className:c.colorText,children:e.colorText}),s.jsxs("div",{className:c.cost,children:[e.cost," р"]}),s.jsx("div",{className:c.colors,children:e.color.map((r,o)=>s.jsx("div",{className:c.color,style:{backgroundColor:r}},r+o))}),s.jsx("div",{className:c.size,children:s.jsx("ul",{children:e.size.map(r=>s.jsx("li",{children:r},r))})}),s.jsx("div",{className:c.formBt,children:s.jsxs("form",{children:[s.jsx("button",{onClick:j,className:c.addedInBasket,children:l?"Добавлено в корзину":"Добавить в корзину"}),s.jsx("button",{onClick:v,className:c.addedInFavorite,children:i?s.jsx("div",{className:c.trash,children:s.jsxs("svg",{fill:"#292929",version:"1.1",id:"Capa_1",width:"45px",height:"45px",viewBox:"-281.3 -281.3 1047.60 1047.60",xmlSpace:"preserve",stroke:"#292929",strokeWidth:"0.00485",children:[s.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),s.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",s.jsxs("g",{children:[" ",s.jsxs("g",{children:[" ",s.jsx("rect",{x:"67.224",width:"350.535",height:"71.81"})," ",s.jsx("path",{d:"M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447 h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"})," "]})," "]})," "]})]})}):s.jsx("div",{className:c.heart,children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"30px",height:"30px",fill:"none",children:[s.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),s.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",s.jsx("path",{d:"M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z",stroke:"#000000",strokeWidth:"1.552",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})})})]})}),s.jsxs("div",{className:c.description,children:[s.jsxs("div",{onClick:()=>{f(!p)},className:c.btOpenDesc,children:[p?"Свернуть":"Развернуть"," описание"]}),s.jsx("div",{className:p?c.descrInside+" "+c.openDescAnimation:c.descrInside+" "+c.closeDescAnimation,children:e.description})]})]})})}),Vs="_noticeFavoriteAction_1s784_1",Rs="_deletedFav_1s784_22",As="_cross_1s784_26",y={noticeFavoriteAction:Vs,deletedFav:Rs,cross:As},Ws=({booleanIsFavoriteList:e})=>s.jsx(d.Fragment,{children:e?s.jsxs("div",{className:y.noticeFavoriteAction,children:[s.jsx("span",{children:"Товар добавлен в избранное"}),s.jsx("span",{onClick:()=>setNoticeFavoriteList(!1),className:y.cross,children:"x"})]}):s.jsxs("div",{className:y.noticeFavoriteAction+" "+y.deletedFav,children:[s.jsx("span",{children:"Товар удален из избранного"}),s.jsx("span",{onClick:()=>setNoticeFavoriteList(!1),className:y.cross,children:"x"})]})}),Gs=()=>{const[e,i]=d.useState(0),[n,g]=d.useState(null),[l,h]=d.useState(!1),p=N(_=>_.favoriteProd.allFavAdded),[f,k]=d.useState(!1),j=S(),v=N(_=>_.recentlyProdLooked.products);let{link:r}=R();if(!b[r])return s.jsx(A,{});const o=d.useMemo(()=>b[r],[r]),t=d.useMemo(()=>W[o.category][o.type].filter(_=>_.id!=o.id),[r]);M(`${o.name} - beauté`),d.useEffect(()=>{window.scrollTo(0,0),g(!!p.find(_=>_.link==o.link))},[r]),d.useEffect(()=>{j(G(o))},[o]);const a=()=>{e>0?i(_=>_-1):i(o.img.length-1)},w=()=>{e<o.img.length-1?i(_=>_+1):i(0)};let B=e+1>=o.img.length?e-(o.img.length-1):e+1;const I=()=>{k(!0),document.body.style.overflow="hidden",window.scrollTo(0,0)};return s.jsxs(d.Fragment,{children:[f&&s.jsx(ls,{currentElement:o,setCounterImg:i,counterImg:e,setIsActiveShowWindow:k}),l&&s.jsx(Ws,{booleanIsFavoriteList:n}),s.jsxs("div",{className:x.commodityBlock,children:[s.jsxs("div",{className:x.leftColumn,children:[s.jsx(C,{currentElement:o,setCounterImg:i,flag:!0}),s.jsxs("div",{className:x.sliderImg,children:[s.jsx("div",{onClick:a,className:x.sliderLeft+" "+x.sliderBt,children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"32px",height:"32px",fill:"none",children:[s.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),s.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",s.jsx("path",{d:"M5 12H19M5 12L11 6M5 12L11 18",stroke:"#000000",strokeWidth:"0.624",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})}),s.jsxs("div",{onClick:I,className:x.sliderPhotosWindow,children:[s.jsx("img",{id:x.oneImgSlider,src:o.img[e],alt:o.name}),s.jsx("img",{src:o.img[B],alt:o.name})]}),s.jsx("div",{onClick:w,className:x.sliderRight+" "+x.sliderBt,children:s.jsxs("svg",{viewBox:"0 0 24 24",width:"32px",height:"32px",fill:"none",children:[s.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),s.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",s.jsx("path",{d:"M5 12H19M5 12L11 6M5 12L11 18",stroke:"#000000",strokeWidth:"0.624",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})})]})]}),s.jsx(Fs,{currentElement:o,booleanIsFavoriteList:n,setNoticeFavoriteList:h,setBooleanIsFavoriteList:g})]}),t.length>0&&s.jsxs("div",{className:x.similarProd,children:[s.jsx(z,{dateCard:t,nameCategory:"Похожие товары",cat:"commodity"}),v.length>0&&s.jsx(xs,{})]})]})};export{Gs as default};
