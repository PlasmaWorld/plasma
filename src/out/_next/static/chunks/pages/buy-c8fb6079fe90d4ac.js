(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{74153:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buy",function(){return n(46879)}])},27302:function(e,t,n){"use strict";n.d(t,{Z:function(){return Container}});var r=n(85893);n(67294);var i=n(31555),a=n.n(i);function Container(e){let{maxWidth:t,children:n}=e;return(0,r.jsx)("div",{className:"".concat(a().container," ").concat(a()[t]),children:n})}},2167:function(e,t,n){"use strict";n.d(t,{Z:function(){return NFTComponent}});var r=n(85893),i=n(73854);n(67294);var a=n(92424),s=n(12488),l=n(4387),c=n.n(l);function NFTComponent(e){var t,n,l,o;let{nft:d}=e,{contract:u,isLoading:x}=(0,i.cqn)(a.YJ,"marketplace-v3"),{data:h,isLoading:m}=(0,i.aBe)(u,{tokenContract:a.f2,tokenId:d.metadata.id}),{data:f,isLoading:g}=(0,i.QQ5)(u,{tokenContract:a.f2,tokenId:d.metadata.id});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.CHu,{metadata:d.metadata,className:c().nftImage}),(0,r.jsxs)("p",{className:c().nftTokenId,children:["Token ID #",d.metadata.id]}),(0,r.jsx)("p",{className:c().nftName,children:d.metadata.name}),(0,r.jsx)("div",{className:c().priceContainer,children:x||m||g?(0,r.jsx)(s.Z,{width:"100%",height:"100%"}):h&&h[0]?(0,r.jsx)("div",{className:c().nftPriceContainer,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:c().nftPriceLabel,children:"Price"}),(0,r.jsx)("p",{className:c().nftPriceValue,children:"".concat(null===(t=h[0])||void 0===t?void 0:t.currencyValuePerToken.displayValue,"\n          ").concat(null===(n=h[0])||void 0===n?void 0:n.currencyValuePerToken.symbol)})]})}):f&&f[0]?(0,r.jsx)("div",{className:c().nftPriceContainer,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:c().nftPriceLabel,children:"Minimum Bid"}),(0,r.jsx)("p",{className:c().nftPriceValue,children:"".concat(null===(l=f[0])||void 0===l?void 0:l.minimumBidCurrencyValue.displayValue,"\n          ").concat(null===(o=f[0])||void 0===o?void 0:o.minimumBidCurrencyValue.symbol)})]})}):(0,r.jsx)("div",{className:c().nftPriceContainer,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:c().nftPriceLabel,children:"Price"}),(0,r.jsx)("p",{className:c().nftPriceValue,children:"Not for sale"})]})})})]})}},48698:function(e,t,n){"use strict";n.d(t,{Z:function(){return NFTGrid}});var r=n(85893),i=n(41664),a=n.n(i);n(67294);var s=n(92424),l=n(12488),c=n(2167),o=n(38323),d=n.n(o);function NFTGrid(e){let{isLoading:t,data:n,overrideOnclickBehavior:i,emptyText:o="No NFTs found for this collection."}=e;return(0,r.jsx)("div",{className:d().nftGridContainer,children:t?[...Array(20)].map((e,t)=>(0,r.jsx)("div",{className:d().nftContainer,children:(0,r.jsx)(l.Z,{width:"100%",height:"312px"},t)},t)):n&&n.length>0?n.map(e=>i?(0,r.jsx)("div",{className:d().nftContainer,onClick:()=>i(e),children:(0,r.jsx)(c.Z,{nft:e})},e.metadata.id):(0,r.jsx)(a(),{href:"/token/".concat(s.f2,"/").concat(e.metadata.id),className:d().nftContainer,children:(0,r.jsx)(c.Z,{nft:e})},e.metadata.id)):(0,r.jsx)("p",{children:o})})}},30224:function(e,t,n){"use strict";n.d(t,{e:function(){return PaginationHelper}});var r=n(85893),i=n(54090),a=n(67294);let PaginationHelper=e=>{let{page:t,setPage:n,noOfPages:s,loading:l}=e,[c,o]=(0,a.useState)(!1),[d,u]=(0,a.useState)(t),x=(0,i.Z)(String(d),500);return(0,a.useEffect)(()=>{x?(o(!0),n(Number(x)),o(!1)):n(1)},[x]),(0,r.jsx)("div",{className:"flex items-center gap-2 md:ml-auto",children:c||l?(0,r.jsx)("div",{className:"h-6 w-6 animate-spin rounded-full border-b-2 border-white/50"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:"rounded-lg bg-white/5 px-4 py-2 text-white shadow-2xl disabled:opacity-50",onClick:()=>n(t-1),disabled:1===t,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),(0,r.jsx)("input",{type:"number",className:"w-16 rounded-lg bg-white/5 p-2 text-white shadow-2xl focus:border-0 focus:outline-none focus:ring-0 active:border-0 active:outline-none active:ring-0",onChange:e=>u(Number(e.target.value)),value:d}),(0,r.jsx)("button",{className:"rounded-lg bg-white/5 px-4 py-2 text-white shadow-2xl",onClick:()=>n(t+1),disabled:t===s,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})})}},12488:function(e,t,n){"use strict";n.d(t,{Z:function(){return Skeleton}});var r=n(85893);n(67294);var i=n(86377),a=n.n(i);function Skeleton(e){let{height:t,width:n}=e;return(0,r.jsx)("div",{style:{width:n,height:t,borderRadius:"inherit"},className:a().skeleton})}},55120:function(e,t,n){"use strict";n.d(t,{ez:function(){return r},iF:function(){return a},mz:function(){return i}});let r="0x66175072D37124123d6d88e552c5eF16c2d1F39c",i="https://testnet.iotexscan.io/",a="0x66175072D37124123d6d88e552c5eF16c2d1F39c"},54090:function(e,t,n){"use strict";var r=n(67294);t.Z=(e,t)=>{let[n,i]=(0,r.useState)(e);return(0,r.useEffect)(()=>{let n=setTimeout(()=>{i(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}},77298:function(e,t,n){"use strict";n.d(t,{W:function(){return SearchIcon}});var r=n(85893);let SearchIcon=()=>(0,r.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,r.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})},46879:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Buy}});var r=n(85893),i=n(27302),a=n(48698),s=n(67294),l=n(55120),c=n(54090),o=n(77298),d=n(73854),u=n(64593),x=n(30224),NFT_Footer=e=>{let{page:t,setPage:n,nftsPerPage:i,totalCount:a,loading:s}=e;if(!a)return null;let l=Math.ceil(a.toNumber()/i);return(0,r.jsxs)("div",{className:"mb-4 mt-10 flex w-full flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0",children:[(0,r.jsxs)("h3",{className:"text-2xl font-bold text-[#646D7A]",children:[(t-1)*i+i," / ",a.toNumber().toLocaleString()]}),(0,r.jsx)(x.e,{page:t,noOfPages:l,setPage:n,loading:s}),(0,r.jsx)("div",{children:(0,r.jsxs)("footer",{className:"footer footer-center py-24 lg:py-32 text-white rounded",children:[(0,r.jsxs)("div",{className:"grid grid-flow-col gap-4 text-white font-semibold text-lg",children:[(0,r.jsx)("a",{href:"/buy",className:"link link-hover px-5 py-2 border border-sky-500 border-opacity-20 rounded-full",children:"Buy a PlasmaWorld"}),(0,r.jsx)("a",{href:"/sell",className:"link link-hover px-5 py-2 border border-sky-500 border-opacity-20 rounded-full",children:"Sell"})]}),(0,r.jsxs)("div",{className:"grid grid-flow-col gap-4",children:[(0,r.jsx)("a",{href:"/privacy-policy",className:"link link-hover",children:"Privacy Policy"}),(0,r.jsx)("a",{href:"/ToS",className:"link link-hover",children:"Terms of Service"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"grid grid-flow-col gap-4 cursor-pointer",children:[(0,r.jsx)("a",{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,r.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),(0,r.jsx)("a",{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,r.jsx)("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),(0,r.jsx)("a",{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,r.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]})}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"\xa9 2024 PlasmaWorld . All right reserved."})})]})})]})};function Buy(){let{contract:e}=(0,d.cqn)(l.iF),[t,n]=(0,s.useState)(1),[x,h]=(0,s.useState)(""),m=(0,c.Z)(x,500),{data:f,isLoading:g}=(0,d.a14)(e,{count:12,start:(t-1)*12}),{data:v}=(0,d.kbg)(e),{data:j,isLoading:p}=(0,d.gSY)(e),[N,w]=(0,s.useState)(null),[_,b]=(0,s.useState)(!1),fetchNFT=async()=>{let t=await (null==e?void 0:e.erc721.get(m));w(t),b(!1)};return(0,s.useEffect)(()=>{m?(b(!0),fetchNFT()):w(null)},[m]),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"m-0 bg-[#0A0A0A] p-0 font-inter text-neutral-200",children:[(0,r.jsx)(u.q,{children:(0,r.jsx)("title",{children:null==j?void 0:j.name})}),(0,r.jsxs)("div",{className:"z-20 mx-auto flex min-h-screen w-full flex-col px-4",children:[j?(0,r.jsxs)("div",{className:"mb-8 text-center",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-white",children:j.name}),(0,r.jsx)("h2",{className:"text-xl font-bold text-white",children:j.description})]}):p?(0,r.jsxs)("div",{className:"mx-auto mb-8 text-center",children:[(0,r.jsx)("div",{className:"mx-auto h-8 w-96 animate-pulse rounded-lg bg-gray-800"}),(0,r.jsx)("div",{className:"mx-auto mt-4 h-8 w-96 animate-pulse rounded-lg bg-gray-800"})]}):null,(0,r.jsxs)("div",{className:"mx-auto mb-8 flex h-12 w-96 max-w-full items-center rounded-lg border border-white/10 bg-white/5 px-4 text-xl text-white",children:[(0,r.jsx)(o.W,{}),(0,r.jsx)("input",{type:"text",onChange:e=>{e.target.value.match(/^[0-9]*$/)&&Number(e.target.value)>0?h(e.target.value):h("")},placeholder:"Search by ID",className:"w-full bg-transparent px-4 text-white focus:outline-none"})]}),_?(0,r.jsx)("div",{className:"mx-auto !h-60 !w-60 animate-pulse rounded-lg bg-gray-800"}):null,x&&N&&!_?(0,r.jsx)(a.Z,{isLoading:!1,data:[N]}):null,g&&(0,r.jsx)("div",{className:"mx-auto flex flex-wrap items-center justify-center gap-8",children:Array.from({length:12}).map((e,t)=>(0,r.jsx)("div",{className:"!h-60 !w-60 animate-pulse rounded-lg bg-gray-800"},t))}),(0,r.jsxs)(i.Z,{maxWidth:"lg",children:[(0,r.jsx)("h1",{children:"Buy NFTs"}),(0,r.jsx)("p",{children:"Browse which NFTs are available from the collection."}),f&&!x&&(0,r.jsx)(a.Z,{isLoading:!1,data:f})]}),!x&&(0,r.jsx)(NFT_Footer,{page:t,setPage:n,nftsPerPage:12,totalCount:v,loading:g})]})]})})}},31555:function(e){e.exports={container:"Container_container__0SGNv",xs:"Container_xs__byb0N",sm:"Container_sm__Gz7TQ",md:"Container_md__HErVP",lg:"Container_lg__dEnf8",xl:"Container_xl__trH3_"}},4387:function(e){e.exports={nftImage:"NFT_nftImage__lUUuZ",nftTokenId:"NFT_nftTokenId__tHbXZ",nftName:"NFT_nftName__1j6fi",priceContainer:"NFT_priceContainer__jF25U",nftPriceContainer:"NFT_nftPriceContainer__gYOmL",nftPriceLabel:"NFT_nftPriceLabel__0_v_K",nftPriceValue:"NFT_nftPriceValue__f16pj"}},86377:function(e){e.exports={skeleton:"Skeleton_skeleton__kQAlG",pulse:"Skeleton_pulse__n0deY"}},38323:function(e){e.exports={nftGridContainer:"Buy_nftGridContainer__LaErk",nftContainer:"Buy_nftContainer__L0Q7H"}}},function(e){e.O(0,[4593,9774,2888,179],function(){return e(e.s=74153)}),_N_E=e.O()}]);