(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276],{62131:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token/[contractAddress]/[tokenId]",function(){return r(11370)}])},27302:function(e,n,r){"use strict";r.d(n,{Z:function(){return Container}});var l=r(85893);r(67294);var c=r(31555),d=r.n(c);function Container(e){let{maxWidth:n,children:r}=e;return(0,l.jsx)("div",{className:"".concat(d().container," ").concat(d()[n]),children:r})}},12488:function(e,n,r){"use strict";r.d(n,{Z:function(){return Skeleton}});var l=r(85893);r(67294);var c=r(86377),d=r.n(c);function Skeleton(e){let{height:n,width:r}=e;return(0,l.jsx)("div",{style:{width:r,height:n,borderRadius:"inherit"},className:d().skeleton})}},11370:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return A},default:function(){return TokenPage}});var l=r(85893),c=r(73854),d=r(67294),m=r(27302),f=r(92424),h=r(33839),_=r.n(h),g=r(41664),x=r.n(g),y=r(33507),b=r(12488),N=r(86501),k=r(41434),w=r(97633),C=r(46670),E=r(54211);let[O,P]=[(0,y.Z)(),(0,y.Z)()];var A=!0;function TokenPage(e){var n,r,h,g,y,A,V,F,S;let{nft:B,contractMetadata:H}=e,[L,z]=(0,d.useState)(),{contract:R,isLoading:Y}=(0,c.cqn)(f.YJ,"marketplace-v3"),{contract:q}=(0,c.cqn)(f.f2),{data:Q,isLoading:U}=(0,c.aBe)(R,{tokenContract:f.f2,tokenId:B.metadata.id}),{data:X,isLoading:K}=(0,c.QQ5)(R,{tokenContract:f.f2,tokenId:B.metadata.id}),{data:et,isLoading:en}=(0,c.pc1)(q,"Transfer",{queryFilter:{filters:{tokenId:B.metadata.id},order:"desc"}});async function createBidOrOffer(){let e;if(!L){(0,N.ZP)("Please enter a bid value",{icon:"❌",style:k.Z,position:"bottom-center"});return}if(null==X?void 0:X[0])e=await (null==R?void 0:R.englishAuctions.makeBid(X[0].id,L));else if(null==Q?void 0:Q[0])e=await (null==R?void 0:R.offers.makeOffer({assetContractAddress:f.f2,tokenId:B.metadata.id,totalPrice:L}));else throw Error("No valid listing found for this NFT");return e}async function buyListing(){let e;if(null==X?void 0:X[0])e=await (null==R?void 0:R.englishAuctions.buyoutAuction(X[0].id));else if(null==Q?void 0:Q[0])e=await (null==R?void 0:R.directListings.buyFromListing(Q[0].id,1));else throw Error("No valid listing found for this NFT");return e}let{lang:ei,god:ea,user:er}=(0,E.o)(),es=(0,C.fv)(()=>({get colorScheme(){return er.theme.value||"dark"}}));return(0,l.jsx)(w.Me,{theme:{fontFamily:"Oxanium, sans-serif;",colorScheme:es.colorScheme},withGlobalStyles:!0,withNormalizeCSS:!0,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.x7,{position:"bottom-center",reverseOrder:!1}),(0,l.jsx)(m.Z,{maxWidth:"lg",children:(0,l.jsxs)("div",{className:_().container,children:[(0,l.jsxs)("div",{className:_().metadataContainer,children:[(0,l.jsx)(c.CHu,{metadata:B.metadata,className:_().image}),(0,l.jsxs)("div",{className:_().descriptionContainer,children:[(0,l.jsx)("h3",{className:_().descriptionTitle,children:"Description"}),(0,l.jsx)("p",{className:_().description,children:B.metadata.description}),(0,l.jsx)("h3",{className:_().descriptionTitle,children:"Traits"}),(0,l.jsx)("div",{className:_().traitsContainer,children:Object.entries((null==B?void 0:null===(n=B.metadata)||void 0===n?void 0:n.attributes)||{}).map(e=>{let[n,r]=e;return(0,l.jsxs)("div",{className:_().traitContainer,children:[(0,l.jsx)("p",{className:_().traitName,children:n}),(0,l.jsx)("p",{className:_().traitValue,children:(null==r?void 0:r.toString())||""})]},n)})}),(0,l.jsx)("h3",{className:_().descriptionTitle,children:"History"}),(0,l.jsx)("div",{className:_().traitsContainer,children:null==et?void 0:et.map((e,n)=>{var r,c,d,m;return(0,l.jsxs)("div",{className:_().eventsContainer,children:[(0,l.jsxs)("div",{className:_().eventContainer,children:[(0,l.jsx)("p",{className:_().traitName,children:"Event"}),(0,l.jsx)("p",{className:_().traitValue,children:n===et.length-1?"Mint":"Transfer"})]}),(0,l.jsxs)("div",{className:_().eventContainer,children:[(0,l.jsx)("p",{className:_().traitName,children:"From"}),(0,l.jsxs)("p",{className:_().traitValue,children:[null===(r=e.data.from)||void 0===r?void 0:r.slice(0,4),"...",null===(c=e.data.from)||void 0===c?void 0:c.slice(-2)]})]}),(0,l.jsxs)("div",{className:_().eventContainer,children:[(0,l.jsx)("p",{className:_().traitName,children:"To"}),(0,l.jsxs)("p",{className:_().traitValue,children:[null===(d=e.data.to)||void 0===d?void 0:d.slice(0,4),"...",null===(m=e.data.to)||void 0===m?void 0:m.slice(-2)]})]}),(0,l.jsx)("div",{className:_().eventContainer,children:(0,l.jsx)(x(),{className:_().txHashArrow,href:"".concat(f.t0,"/tx/").concat(e.transaction.transactionHash),target:"_blank",children:"↗"})})]},e.transaction.transactionHash)})})]})]}),(0,l.jsxs)("div",{className:_().listingContainer,children:[H&&(0,l.jsxs)("div",{className:_().contractMetadataContainer,children:[(0,l.jsx)(c.W85,{src:H.image,className:_().collectionImage}),(0,l.jsx)("p",{className:_().collectionName,children:H.name})]}),(0,l.jsx)("h1",{className:_().title,children:B.metadata.name}),(0,l.jsxs)("p",{className:_().collectionName,children:["Token ID #",B.metadata.id]}),(0,l.jsxs)(x(),{href:"/profile/".concat(B.owner),className:_().nftOwnerContainer,children:[(0,l.jsx)("div",{className:_().nftOwnerImage,style:{background:"linear-gradient(90deg, ".concat(O,", ").concat(P,")")}}),(0,l.jsxs)("div",{className:_().nftOwnerInfo,children:[(0,l.jsx)("p",{className:_().label,children:"Current Owner"}),(0,l.jsxs)("p",{className:_().nftOwnerAddress,children:[B.owner.slice(0,8),"...",B.owner.slice(-4)]})]})]}),(0,l.jsx)("div",{className:_().pricingContainer,children:(0,l.jsxs)("div",{className:_().pricingInfo,children:[(0,l.jsx)("p",{className:_().label,children:"Price"}),(0,l.jsx)("div",{className:_().pricingValue,children:Y||U||K?(0,l.jsx)(b.Z,{width:"120",height:"24"}):(0,l.jsx)(l.Fragment,{children:Q&&Q[0]?(0,l.jsxs)(l.Fragment,{children:[null===(r=Q[0])||void 0===r?void 0:r.currencyValuePerToken.displayValue," "+(null===(h=Q[0])||void 0===h?void 0:h.currencyValuePerToken.symbol)]}):X&&X[0]?(0,l.jsxs)(l.Fragment,{children:[null===(g=X[0])||void 0===g?void 0:g.buyoutCurrencyValue.displayValue," "+(null===(y=X[0])||void 0===y?void 0:y.buyoutCurrencyValue.symbol)]}):"Not for sale"})}),(0,l.jsx)("div",{children:K?(0,l.jsx)(b.Z,{width:"120",height:"24"}):(0,l.jsx)(l.Fragment,{children:X&&X[0]&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:_().label,style:{marginTop:12},children:"Bids starting from"}),(0,l.jsxs)("div",{className:_().pricingValue,children:[null===(A=X[0])||void 0===A?void 0:A.minimumBidCurrencyValue.displayValue," "+(null===(V=X[0])||void 0===V?void 0:V.minimumBidCurrencyValue.symbol)]})]})})})]})}),Y||U||K?(0,l.jsx)(b.Z,{width:"100%",height:"164"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.tnh,{contractAddress:f.YJ,action:async()=>await buyListing(),className:_().btn,onSuccess:()=>{(0,N.ZP)("Purchase success!",{icon:"✅",style:k.Z,position:"bottom-center"})},onError:e=>{(0,N.ZP)("Purchase failed! Reason: ".concat(e.message),{icon:"❌",style:k.Z,position:"bottom-center"})},children:"Buy at asking price"}),(0,l.jsx)("div",{className:"".concat(_().listingTimeContainer," ").concat(_().or),children:(0,l.jsx)("p",{className:_().listingTime,children:"or"})}),(0,l.jsx)("input",{className:_().input,defaultValue:(null==X?void 0:null===(S=X[0])||void 0===S?void 0:null===(F=S.minimumBidCurrencyValue)||void 0===F?void 0:F.displayValue)||0,type:"number",step:1e-6,onChange:e=>{z(e.target.value)}}),(0,l.jsx)(c.tnh,{contractAddress:f.YJ,action:async()=>await createBidOrOffer(),className:_().btn,onSuccess:()=>{(0,N.ZP)("Bid success!",{icon:"✅",style:k.Z,position:"bottom-center"})},onError:e=>{console.log(e),(0,N.ZP)("Bid failed! Reason: ".concat(e.message),{icon:"❌",style:k.Z,position:"bottom-center"})},children:"Place bid"})]})]})]})})]})})}},33507:function(e,n,r){"use strict";function randomColor(){let e="#";for(let n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}r.d(n,{Z:function(){return randomColor}})},41434:function(e,n){"use strict";n.Z={borderRadius:"4px",background:"#222528",color:"#fff","white-space":"pre-wrap","word-break":"break-word"}},31555:function(e){e.exports={container:"Container_container__0SGNv",xs:"Container_xs__byb0N",sm:"Container_sm__Gz7TQ",md:"Container_md__HErVP",lg:"Container_lg__dEnf8",xl:"Container_xl__trH3_"}},86377:function(e){e.exports={skeleton:"Skeleton_skeleton__kQAlG",pulse:"Skeleton_pulse__n0deY"}},33839:function(e){e.exports={container:"Token_container__CNJxv",metadataContainer:"Token_metadataContainer__NXo6z",listingContainer:"Token_listingContainer__KEv8I",image:"Token_image__THR7w",input:"Token_input__mtVaC",contractMetadataContainer:"Token_contractMetadataContainer__W04ui",imageContainer:"Token_imageContainer__UKE4B",crossButton:"Token_crossButton__T99yY",collectionImage:"Token_collectionImage__Lpjxv",collectionName:"Token_collectionName__FH4Mn",title:"Token_title__eeB_J",nftOwnerContainer:"Token_nftOwnerContainer__15rAB",nftOwnerImage:"Token_nftOwnerImage__5IWAs",nftOwnerInfo:"Token_nftOwnerInfo__jLeIk",label:"Token_label__Tb918",nftOwnerAddress:"Token_nftOwnerAddress__P0d3_",descriptionContainer:"Token_descriptionContainer__ScydP",descriptionTitle:"Token_descriptionTitle__dbr58",traitsContainer:"Token_traitsContainer__BrwT9",traitContainer:"Token_traitContainer__U27l_",eventsContainer:"Token_eventsContainer__Zn60F",traitValue:"Token_traitValue__XwN_d",traitName:"Token_traitName__fuEIa",eventContainer:"Token_eventContainer__oHYks",txHashArrow:"Token_txHashArrow__r_yPm",pricingContainer:"Token_pricingContainer__Q0y0k",pricingInfo:"Token_pricingInfo__hnOl7",pricingValue:"Token_pricingValue__lAxuo",buyButton:"Token_buyButton__I9joZ",listingTimeContainer:"Token_listingTimeContainer__ZZbVs",listingTime:"Token_listingTime__qVFcG",or:"Token_or__myhNn",btn:"Token_btn__LsuZc"}},86501:function(e,n,r){"use strict";let l,c;r.d(n,{x7:function(){return Ie},ZP:function(){return ei}});var d,m=r(67294);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,o=(e,n)=>{let r="",l="",c="";for(let d in e){let m=e[d];"@"==d[0]?"i"==d[1]?r=d+" "+m+";":l+="f"==d[1]?o(m,d):d+"{"+o(m,"k"==d[1]?"":n)+"}":"object"==typeof m?l+=o(m,n?n.replace(/([^,])+/g,e=>d.replace(/(^:.*)|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n)):d):null!=m&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,m):d+":"+m+";")}return r+(n&&c?n+"{"+c+"}":c)+l},x={},s=e=>{if("object"==typeof e){let n="";for(let r in e)n+=r+s(e[r]);return n}return e},i=(e,n,r,l,c)=>{var d;let m=s(e),f=x[m]||(x[m]=(e=>{let n=0,r=11;for(;n<e.length;)r=101*r+e.charCodeAt(n++)>>>0;return"go"+r})(m));if(!x[f]){let n=m!==e?e:(e=>{let n,r,l=[{}];for(;n=h.exec(e.replace(_,""));)n[4]?l.shift():n[3]?(r=n[3].replace(g," ").trim(),l.unshift(l[0][r]=l[0][r]||{})):l[0][n[1]]=n[2].replace(g," ").trim();return l[0]})(e);x[f]=o(c?{["@keyframes "+f]:n}:n,r?"":"."+f)}let y=r&&x.g?x.g:null;return r&&(x.g=x[f]),d=x[f],y?n.data=n.data.replace(y,d):-1===n.data.indexOf(d)&&(n.data=l?d+n.data:n.data+d),f},p=(e,n,r)=>e.reduce((e,l,c)=>{let d=n[c];if(d&&d.call){let e=d(r),n=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=n?"."+n:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let n=this||{},r=e.call?e(n.p):e;return i(r.unshift?r.raw?p(r,[].slice.call(arguments,1),n.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(n.p):r),{}):r,t(n.target),n.g,n.o,n.k)}u.bind({g:1});let y,b,N,k=u.bind({k:1});function j(e,n){let r=this||{};return function(){let l=arguments;function a(c,d){let m=Object.assign({},c),f=m.className||a.className;r.p=Object.assign({theme:b&&b()},m),r.o=/ *go\d+/.test(f),m.className=u.apply(r,l)+(f?" "+f:""),n&&(m.ref=d);let h=e;return e[0]&&(h=m.as||e,delete m.as),N&&h[0]&&N(m),y(h,m)}return n?n(a):a}}var W=e=>"function"==typeof e,T=(e,n)=>W(e)?e(n):e,w=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},C=new Map,$=e=>{if(C.has(e))return;let n=setTimeout(()=>{C.delete(e),dist_u({type:4,toastId:e})},1e3);C.set(e,n)},J=e=>{let n=C.get(e);n&&clearTimeout(n)},v=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[n.toast,...e.toasts].slice(0,20)};case 1:return n.toast.id&&J(n.toast.id),{...e,toasts:e.toasts.map(e=>e.id===n.toast.id?{...e,...n.toast}:e)};case 2:let{toast:r}=n;return e.toasts.find(e=>e.id===r.id)?v(e,{type:1,toast:r}):v(e,{type:0,toast:r});case 3:let{toastId:l}=n;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===n.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==n.toastId)};case 5:return{...e,pausedAt:n.time};case 6:let c=n.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},E=[],O={toasts:[],pausedAt:void 0},dist_u=e=>{O=v(O,e),E.forEach(e=>{e(O)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[n,r]=(0,m.useState)(O);(0,m.useEffect)(()=>(E.push(r),()=>{let e=E.indexOf(r);e>-1&&E.splice(e,1)}),[n]);let l=n.toasts.map(n=>{var r,l;return{...e,...e[n.type],...n,duration:n.duration||(null==(r=e[n.type])?void 0:r.duration)||(null==e?void 0:e.duration)||P[n.type],style:{...e.style,...null==(l=e[n.type])?void 0:l.style,...n.style}}});return{...n,toasts:l}},G=(e,n="blank",r)=>({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||w()}),dist_h=e=>(n,r)=>{let l=G(n,e,r);return dist_u({type:2,toast:l}),l.id},dist_n=(e,n)=>dist_h("blank")(e,n);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,n,r)=>{let l=dist_n.loading(n.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(dist_n.success(T(n.success,e),{id:l,...r,...null==r?void 0:r.success}),e)).catch(e=>{dist_n.error(T(n.error,e),{id:l,...r,...null==r?void 0:r.error})}),e};var Z=(e,n)=>{dist_u({type:1,toast:{id:e,height:n}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:n,pausedAt:r}=I(e);(0,m.useEffect)(()=>{if(r)return;let e=Date.now(),l=n.map(n=>{if(n.duration===1/0)return;let r=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(r<0){n.visible&&dist_n.dismiss(n.id);return}return setTimeout(()=>dist_n.dismiss(n.id),r)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[n,r]);let l=(0,m.useCallback)(()=>{r&&dist_u({type:6,time:Date.now()})},[r]),c=(0,m.useCallback)((e,r)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:d}=r||{},m=n.filter(n=>(n.position||d)===(e.position||d)&&n.height),f=m.findIndex(n=>n.id===e.id),h=m.filter((e,n)=>n<f&&e.visible).length;return m.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,n)=>e+(n.height||0)+c,0)},[n]);return{toasts:n,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:c}}},A=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,V=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,S=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,L=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,z=k`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${z} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=j("div")`
  position: absolute;
`,q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:n,type:r,iconTheme:l}=e;return void 0!==n?"string"==typeof n?m.createElement(U,null,n):n:"blank"===r?null:m.createElement(q,null,m.createElement(H,{...l}),"loading"!==r&&m.createElement(Y,null,"error"===r?m.createElement(S,{...l}):m.createElement(R,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,n)=>{let r=e.includes("top")?1:-1,[l,c]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(r),ge(r)];return{animation:n?`${k(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=m.memo(({toast:e,position:n,style:r,children:l})=>{let c=e.height?Ae(e.position||n||"top-center",e.visible):{opacity:0},d=m.createElement(M,{toast:e}),f=m.createElement(K,{...e.ariaProps},T(e.message,e));return m.createElement(X,{className:e.className,style:{...c,...r,...e.style}},"function"==typeof l?l({icon:d,message:f}):m.createElement(m.Fragment,null,d,f))});d=m.createElement,o.p=void 0,y=d,b=void 0,N=void 0;var Ee=({id:e,className:n,style:r,onHeightUpdate:l,children:c})=>{let d=m.useCallback(n=>{if(n){let i=()=>{l(e,n.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return m.createElement("div",{ref:d,className:n,style:r},c)},Re=(e,n)=>{let r=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...l}},en=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:n="top-center",toastOptions:r,gutter:l,children:c,containerStyle:d,containerClassName:f})=>{let{toasts:h,handlers:_}=D(r);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...d},className:f,onMouseEnter:_.startPause,onMouseLeave:_.endPause},h.map(r=>{let d=r.position||n,f=Re(d,_.calculateOffset(r,{reverseOrder:e,gutter:l,defaultPosition:n}));return m.createElement(Ee,{id:r.id,key:r.id,onHeightUpdate:_.updateHeight,className:r.visible?en:"",style:f},"custom"===r.type?T(r.message,r):c?c(r):m.createElement(et,{toast:r,position:d}))}))},ei=dist_n}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=62131)}),_N_E=e.O()}]);