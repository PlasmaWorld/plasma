"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5653],{70145:function(t,e,r){r.d(e,{S:function(){return StandardErc1155}});var a=r(24181),n=r(76657);let StandardErc1155=class StandardErc1155{get chainId(){return this._chainId}constructor(t,e,r){this.contractWrapper=t,this.storage=e,this.erc1155=new n.E(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,e){return this.erc1155.balanceOf(t,e)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,e){return this.erc1155.isApproved(t,e)}transfer=(0,a.d)((()=>{var t=this;return async function(e,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(e,r,a,n)}})());transferBatch=(0,a.d)((()=>{var t=this;return async function(e,r,a,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0];return t.erc1155.transferBatch.prepare(e,r,a,n,s)}})());setApprovalForAll=(0,a.d)(async(t,e)=>this.erc1155.setApprovalForAll.prepare(t,e));airdrop=(0,a.d)((()=>{var t=this;return async function(e,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(e,r,a,n)}})())}},49236:function(t,e,r){r.d(e,{h:function(){return hasERC20Allowance}});var a=r(50345);async function hasERC20Allowance(t,e,n){let s=t.getProvider(),o=(await Promise.resolve().then(r.t.bind(r,49242,19))).default,i=new a.cq(s,e,o,{},t.storage),c=await t.getSignerAddress(),d=t.address,p=await i.read("allowance",[c,d]);return p.gte(n)}},62613:function(t,e,r){r.d(e,{a:function(){return isWinningBid},g:function(){return getAllInBatches},h:function(){return handleTokenApproval},i:function(){return isTokenApprovedForTransfer},m:function(){return mapOffer},v:function(){return validateNewListingParam}});var a=r(64146),n=r(2593),s=r(38776),o=r(71013),i=r(50345),c=r(73775);async function isTokenApprovedForTransfer(t,e,n,s,i){try{let c=(await r.e(5025).then(r.t.bind(r,25025,19))).default,d=new a.CH(n,c,t),[p,l]=await Promise.all([d.supportsInterface(o.I),d.supportsInterface(o.a)]);if(p){let o;let c=(await Promise.resolve().then(r.t.bind(r,70332,19))).default,d=new a.CH(n,c,t),p=await d.isApprovedForAll(i,e);if(p)return!0;try{o=await d.getApproved(s)}catch(t){}return o?.toLowerCase()===e.toLowerCase()}if(!l)return console.error("Contract does not implement ERC 1155 or ERC 721."),!1;{let s=(await Promise.resolve().then(r.t.bind(r,8455,19))).default,o=new a.CH(n,s,t);return await o.isApprovedForAll(i,e)}}catch(t){return console.error("Failed to check if token is approved",t),!1}}async function handleTokenApproval(t,e,a,n,s){let c=(await r.e(5025).then(r.t.bind(r,25025,19))).default,d=new i.cq(t.getSignerOrProvider(),a,c,t.options,t.storage),[p,l]=await Promise.all([d.read("supportsInterface",[o.I]),d.read("supportsInterface",[o.a])]);if(p){let o=(await Promise.resolve().then(r.t.bind(r,70332,19))).default,c=new i.cq(t.getSignerOrProvider(),a,o,t.options,t.storage),d=await c.read("isApprovedForAll",[s,e]);if(!d){let t=(await c.read("getApproved",[n])).toLowerCase()===e.toLowerCase();t||await c.sendTransaction("setApprovalForAll",[e,!0])}}else if(l){let n=(await Promise.resolve().then(r.t.bind(r,8455,19))).default,o=new i.cq(t.getSignerOrProvider(),a,n,t.options,t.storage),c=await o.read("isApprovedForAll",[s,e]);c||await o.sendTransaction("setApprovalForAll",[e,!0])}else throw Error("Contract must implement ERC 1155 or ERC 721.")}function validateNewListingParam(t){(0,s.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,s.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,s.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,s.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,s.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,s.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type&&(0,s.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function mapOffer(t,e,r){return{quantity:r.quantityDesired,pricePerToken:r.pricePerToken,currencyContractAddress:r.currency,buyerAddress:r.offeror,quantityDesired:r.quantityWanted,currencyValue:await (0,c.a)(t,r.currency,r.quantityWanted.mul(r.pricePerToken)),listingId:e}}function isWinningBid(t,e,r){if(r=n.O$.from(r),t=n.O$.from(t),e=n.O$.from(e),t.eq(n.O$.from(0)))return!1;let a=e.sub(t).mul(i.dz).div(t);return a.gte(r)}async function getAllInBatches(t,e,r){let a=[];for(;e-t>o.D;)a.push(r(t,t+o.D-1)),t+=o.D;return a.push(r(t,e-1)),await Promise.all(a)}},65653:function(t,e,r){r.r(e),r.d(e,{Pack:function(){return Pack}});var a=r(2593),n=r(61744),s=r(9279),o=r(73775),i=r(49236),c=r(82383),d=r(50345),p=r(45997),l=r(84360),u=r(62613),h=r(71013),g=r(24181),w=r(72555),f=r(85565),k=r(24891),v=r(70145),A=r(27761),m=r(22505),y=r(94049),P=r(1604);let W=P.z.object({contractAddress:d.b9}),C=W.extend({quantity:d.cv}),I=W.extend({tokenId:d.b6}),R=W.extend({tokenId:d.b6,quantity:d.b6}),b=C.omit({quantity:!0}).extend({quantityPerReward:d.cv}),T=R.omit({quantity:!0}).extend({quantityPerReward:d.b6}),q=b.extend({totalRewards:d.b6.default("1")}),S=T.extend({totalRewards:d.b6.default("1")}),O=P.z.object({erc20Rewards:P.z.array(q).default([]),erc721Rewards:P.z.array(I).default([]),erc1155Rewards:P.z.array(S).default([])}),E=O.extend({packMetadata:y.N,rewardsPerPack:d.b6.default("1"),openStartTime:p.R.default(new Date)});r(13550),r(62822),r(71770),r(64063);let PackVRF=class PackVRF{featureName=d.dE.name;constructor(t,e,r,a,n){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new d.cq(t,e,A,a,r);this.contractWrapper=s,this.storage=r,this.chainId=n,this.events=new l.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}open=(0,g.d)((()=>{var t=this;return async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;return g.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[e,r],overrides:{gasLimit:n},parse:e=>{let r=a.O$.from(0);try{let a=t.contractWrapper.parseLogs("PackOpenRequested",e?.logs);r=a[0].args.requestId}catch(t){}return{receipt:e,id:r}}})}})());claimRewards=(0,g.d)((()=>{var t=this;return async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e5;return g.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:e},parse:async e=>{let r=t.contractWrapper.parseLogs("PackOpened",e?.logs);if(0===r.length)throw Error("PackOpened event not found");let a=r[0].args.rewardUnitsDistributed;return await t.parseRewards(a)}})}})());async parseRewards(t){let e=[],r=[],a=[];for(let s of t)switch(s.tokenType){case 0:{let t=await (0,o.f)(this.contractWrapper.getProvider(),s.assetContract);e.push({contractAddress:s.assetContract,quantityPerReward:n.formatUnits(s.totalAmount,t.decimals).toString()});break}case 1:r.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString()});break;case 2:a.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString(),quantityPerReward:s.totalAmount.toString()})}return{erc20Rewards:e,erc721Rewards:r,erc1155Rewards:a}}async addPackOpenEventListener(t){return this.events.addEventListener("PackOpened",async e=>{t(e.data.packId.toString(),e.data.opener,await this.parseRewards(e.data.rewardUnitsDistributed))})}async canClaimRewards(t){let e=await (0,d.aL)(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[e])}async openAndClaim(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5,n=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[t,e,r],{gasLimit:a.O$.from(5e5)}),s=a.O$.from(0);try{let t=this.contractWrapper.parseLogs("PackOpenRequested",n?.logs);s=t[0].args.requestId}catch(t){}return{receipt:n,id:s}}async getLinkBalance(){let t=(await Promise.resolve().then(r.t.bind(r,49242,19))).default;return this.getLinkContract(t).balanceOf(this.contractWrapper.address)}async transferLink(t){let e=(await Promise.resolve().then(r.t.bind(r,49242,19))).default;await this.getLinkContract(e).transfer(this.contractWrapper.address,t)}getLinkContract(t){let e=d.aY[this.chainId];if(!e)throw Error(`No LINK token address found for chainId ${this.chainId}`);let r=new d.cq(this.contractWrapper.getSignerOrProvider(),e,t,this.contractWrapper.options,this.storage);return new m.E(r,this.storage,this.chainId)}};let Pack=class Pack extends v.S{static contractRoles=d.dF;get vrf(){return(0,p.a)(this._vrf,d.dE)}constructor(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new d.cq(t,e,n,a.gasless&&"openzeppelin"in a.gasless?{...a,gasless:{...a.gasless,openzeppelin:{...a.gasless.openzeppelin,useEOAForwarder:!0}}}:a,r);super(i,r,s),this.abi=d.bj.parse(n||[]),this.metadata=new l.C(this.contractWrapper,d.c1,this.storage),this.app=new l.b(this.contractWrapper,this.metadata,this.storage),this.roles=new k.C(this.contractWrapper,Pack.contractRoles),this.royalties=new f.C(this.contractWrapper,this.metadata),this.encoder=new o.C(this.contractWrapper),this.estimator=new l.G(this.contractWrapper),this.events=new l.a(this.contractWrapper),this.interceptor=new w.C(this.contractWrapper),this.owner=new f.a(this.contractWrapper),this._vrf=this.detectVrf()}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t),this._vrf?.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,d.H)("transfer"),s.d]);return!t}async getPackContents(t){let{contents:e,perUnitAmounts:r}=await this.contractWrapper.read("getPackContents",[t]),s=[],i=[],c=[];for(let t=0;t<e.length;t++){let d=e[t],p=r[t];switch(d.tokenType){case 0:{let t=await (0,o.f)(this.contractWrapper.getProvider(),d.assetContract),e=n.formatUnits(p,t.decimals),r=n.formatUnits(a.O$.from(d.totalAmount).div(p),t.decimals);s.push({contractAddress:d.assetContract,quantityPerReward:e,totalRewards:r});break}case 1:i.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString()});break;case 2:c.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:a.O$.from(d.totalAmount).div(p).toString()})}}return{erc20Rewards:s,erc721Rewards:i,erc1155Rewards:c}}create=(0,g.d)(async t=>{let e=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(e,t)});addPackContents=(0,g.d)(async(t,e)=>{let[r,a]=await Promise.all([this.contractWrapper.getSignerAddress(),O.parseAsync(e)]),{contents:n,numOfRewardUnits:s}=await this.toPackContentArgs(a);return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,n,s,r],parse:t=>{let e=this.contractWrapper.parseLogs("PackUpdated",t?.logs);if(0===e.length)throw Error("PackUpdated event not found");let r=e[0].args.packId;return{id:r,receipt:t,data:()=>this.erc1155.get(r)}}})});createTo=(0,g.d)(async(t,e)=>{let[r,a,n]=await Promise.all([(0,h.b)(e.packMetadata,this.storage),E.parseAsync(e),(0,d.aL)(t)]),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:i}=a,{contents:c,numOfRewardUnits:p}=await this.toPackContentArgs({erc20Rewards:s,erc721Rewards:o,erc1155Rewards:i});return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[c,p,r,a.openStartTime,a.rewardsPerPack,n],parse:t=>{let e=this.contractWrapper.parseLogs("PackCreated",t?.logs);if(0===e.length)throw Error("PackCreated event not found");let r=e[0].args.packId;return{id:r,receipt:t,data:()=>this.erc1155.get(r)}}})});open=(0,g.d)((()=>{var t=this;return async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;if(t._vrf)throw Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return g.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[e,r],overrides:{gasLimit:a},parse:async e=>{let r=t.contractWrapper.parseLogs("PackOpened",e?.logs);if(0===r.length)throw Error("PackOpened event not found");let a=r[0].args.rewardUnitsDistributed,s=[],i=[],c=[];for(let e of a)switch(e.tokenType){case 0:{let r=await (0,o.f)(t.contractWrapper.getProvider(),e.assetContract);s.push({contractAddress:e.assetContract,quantityPerReward:n.formatUnits(e.totalAmount,r.decimals).toString()});break}case 1:i.push({contractAddress:e.assetContract,tokenId:e.tokenId.toString()});break;case 2:c.push({contractAddress:e.assetContract,tokenId:e.tokenId.toString(),quantityPerReward:e.totalAmount.toString()})}return{erc20Rewards:s,erc721Rewards:i,erc1155Rewards:c}}})}})());async toPackContentArgs(t){let e=[],r=[],{erc20Rewards:n,erc721Rewards:s,erc1155Rewards:o}=t,d=this.contractWrapper.getProvider(),p=await this.contractWrapper.getSignerAddress();for(let t of n){let a=await (0,c.n)(d,t.quantityPerReward,t.contractAddress),n=a.mul(t.totalRewards),s=await (0,i.h)(this.contractWrapper,t.contractAddress,n);if(!s)throw Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${n});

`);r.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:0,totalAmount:n,tokenId:0})}for(let t of s){let a=await (0,u.i)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,p);if(!a)throw Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);r.push("1"),e.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(let t of o){let n=await (0,u.i)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,p);if(!n)throw Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:2,totalAmount:a.O$.from(t.quantityPerReward).mul(a.O$.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:e,numOfRewardUnits:r}}async prepare(t,e,r){return g.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectVrf(){if((0,l.d)(this.contractWrapper,"PackVRF"))return new PackVRF(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}}}}]);