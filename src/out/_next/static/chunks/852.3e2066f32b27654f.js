"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{84360:function(t,r,e){e.d(r,{C:function(){return ContractMetadata},G:function(){return GasCostEstimator},a:function(){return ContractEvents},b:function(){return ContractAppURI},d:function(){return detectContractFeature},h:function(){return hasFunction}});var a=e(50345),n=e(24181),o=e(61744),s=e(40721);function detectContractFeature(t,r){let e=(0,a.ai)(t.abi,r,t.extensions);return e}function hasFunction(t,r){return t in r.readContract.functions}let ContractMetadata=class ContractMetadata{featureName=a.c_.name;constructor(t,r,e){this.contractWrapper=t,this.schema=r,this.storage=e}parseOutputMetadata(t){return this.schema.output.parseAsync(t)}parseInputMetadata(t){return this.schema.input.parseAsync(t)}async get(){let t;if(this.supportsContractMetadata(this.contractWrapper)){let r=await this.contractWrapper.read("contractURI",[]);r&&r.includes("://")&&(t=await this.storage.downloadJSON(r))}if(!t)try{let r,e,n;try{hasFunction("name",this.contractWrapper)&&(r=await this.contractWrapper.read("name",[]))}catch(t){}try{hasFunction("symbol",this.contractWrapper)&&(e=await this.contractWrapper.read("symbol",[]))}catch(t){}try{n=await (0,a.K)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options)}catch(t){}t={name:r||n?.name,symbol:e,description:n?.info.title}}catch(t){throw Error("Could not fetch contract metadata")}return this.parseOutputMetadata(t)}set=(0,n.d)(async t=>{let r=await this._parseAndUploadMetadata(t),e=this.contractWrapper;if(this.supportsContractMetadata(e))return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setContractURI",args:[r],parse:t=>({receipt:t,data:this.get})});throw new a.x(a.c_)});update=(0,n.d)(async t=>await this.set.prepare({...await this.get(),...t}));async _parseAndUploadMetadata(t){let r=await this.parseInputMetadata(t);return this.storage.upload(r)}supportsContractMetadata(t){return detectContractFeature(t,"ContractMetadata")}};let ContractEvents=class ContractEvents{constructor(t){this.contractWrapper=t}addTransactionListener(t){this.contractWrapper.addListener(a.aZ.Transaction,t)}removeTransactionListener(t){this.contractWrapper.off(a.aZ.Transaction,t)}addEventListener(t,r){let e=this.contractWrapper.readContract.interface.getEvent(t),a=this.contractWrapper.address,n={address:a,topics:[this.contractWrapper.readContract.interface.getEventTopic(e)]},wrappedListener=t=>{let e=this.contractWrapper.readContract.interface.parseLog(t);r(this.toContractEvent(e.eventFragment,e.args,t))};return this.contractWrapper.getProvider().on(n,wrappedListener),()=>{this.contractWrapper.getProvider().off(n,wrappedListener)}}listenToAllEvents(t){let r=this.contractWrapper.address,e={address:r},wrappedListener=r=>{try{let e=this.contractWrapper.readContract.interface.parseLog(r);t(this.toContractEvent(e.eventFragment,e.args,r))}catch(t){console.error("Could not parse event:",r,t)}};return this.contractWrapper.getProvider().on(e,wrappedListener),()=>{this.contractWrapper.getProvider().off(e,wrappedListener)}}removeEventListener(t,r){let e=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(e.name,r)}removeAllListeners(){this.contractWrapper.readContract.removeAllListeners();let t=this.contractWrapper.address;this.contractWrapper.getProvider().removeAllListeners({address:t})}async getAllEvents(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromBlock:0,toBlock:"latest",order:"desc"},r=await this.contractWrapper.readContract.queryFilter({},t.fromBlock,t.toBlock),e=r.sort((r,e)=>"desc"===t.order?e.blockNumber-r.blockNumber:r.blockNumber-e.blockNumber);return this.parseEvents(e)}async getEvents(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromBlock:0,toBlock:"latest",order:"desc"},e=this.contractWrapper.readContract.interface.getEvent(t),a=r.filters?e.inputs.map(t=>r.filters[t.name]):[],n=this.contractWrapper.readContract.filters[e.name](...a),o=await this.contractWrapper.readContract.queryFilter(n,r.fromBlock,r.toBlock),s=o.sort((t,e)=>"desc"===r.order?e.blockNumber-t.blockNumber:t.blockNumber-e.blockNumber);return this.parseEvents(s)}parseEvents(t){return t.map(t=>{let r=Object.fromEntries(Object.entries(t).filter(t=>"function"!=typeof t[1]&&"args"!==t[0]));if(t.args){let e=Object.entries(t.args),a=e.slice(e.length/2,e.length),n={};for(let[t,r]of a)n[t]=r;return{eventName:t.event||"",data:n,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}})}toContractEvent(t,r,e){let a=Object.fromEntries(Object.entries(e).filter(t=>"function"!=typeof t[1]&&"args"!==t[0])),n={};return t.inputs.forEach((t,e)=>{if(Array.isArray(r[e])){let a=t.components;if(a){let o=r[e];if("tuple[]"===t.type){let r=[];for(let t=0;t<o.length;t++){let e=o[t],n={};for(let t=0;t<a.length;t++){let r=a[t].name;n[r]=e[t]}r.push(n)}n[t.name]=r}else{let r={};for(let t=0;t<a.length;t++){let e=a[t].name;r[e]=o[t]}n[t.name]=r}}}else n[t.name]=r[e]}),{eventName:t.name,data:n,transaction:a}}};let GasCostEstimator=class GasCostEstimator{constructor(t){this.contractWrapper=t}async gasCostOf(t,r){let[e,a]=await Promise.all([this.contractWrapper.getProvider().getGasPrice(),this.contractWrapper.estimateGas(t,r)]);return o.formatEther(a.mul(e))}async gasLimitOf(t,r){return this.contractWrapper.estimateGas(t,r)}async currentGasPriceInGwei(){let t=await this.contractWrapper.getProvider().getGasPrice();return o.formatUnits(t,"gwei")}};let ContractAppURI=class ContractAppURI{featureName=a.c$.name;constructor(t,r,e){this.contractWrapper=t,this.metadata=r,this.storage=e}async get(){return detectContractFeature(this.contractWrapper,"AppURI")?await this.contractWrapper.read("appURI",[]):(0,s.ov)((await this.metadata.get()).app_uri||"",this.storage.getGatewayUrls())}set=(0,n.d)(async t=>detectContractFeature(this.contractWrapper,"AppURI")?n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAppURI",args:[t]}):await this.metadata.update.prepare({app_uri:t}))}},72555:function(t,r,e){e.d(r,{C:function(){return ContractInterceptor}});let ContractInterceptor=class ContractInterceptor{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},50852:function(t,r,e){e.r(r),e.d(r,{Vote:function(){return Vote}});var a,n=e(2593),o=e(32046),s=e(61744),c=e(64146),i=e(73775),p=e(50345),d=e(24181),l=e(84360),h=e(72555);let u=((a={})[a.Against=0]="Against",a[a.For=1]="For",a[a.Abstain=2]="Abstain",a);e(13550),e(62822),e(71770);let Vote=class Vote{get chainId(){return this._chainId}constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.cq(t,r,n,a,e);this._chainId=o,this.abi=p.bj.parse(n||[]),this.contractWrapper=s,this.storage=e,this.metadata=new l.C(this.contractWrapper,p.cn,this.storage),this.app=new l.b(this.contractWrapper,this.metadata,this.storage),this.encoder=new i.C(this.contractWrapper),this.estimator=new l.G(this.contractWrapper),this.events=new l.a(this.contractWrapper),this.interceptor=new h.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){let r=await this.getAll(),e=r.filter(r=>r.proposalId.eq(n.O$.from(t)));if(0===e.length)throw Error("proposal not found");return e[0]}async getAll(){let t=await this.contractWrapper.read("getAllProposals",[])??[],r=await Promise.all(t.map(t=>Promise.all([this.contractWrapper.read("state",[t.proposalId]),this.getProposalVotes(t.proposalId)])));return r.map((r,e)=>{let[a,n]=r,o=t[e];return{proposalId:o.proposalId,proposer:o.proposer,description:o.description,startBlock:o.startBlock,endBlock:o.endBlock,state:a,votes:n,executions:o[3].map((t,r)=>({toAddress:o.targets[r],nativeTokenValue:t,transactionData:o.calldatas[r]}))}})}async getProposalVotes(t){let r=await this.contractWrapper.read("proposalVotes",[t]);return[{type:u.Against,label:"Against",count:r.againstVotes},{type:u.For,label:"For",count:r.forVotes},{type:u.Abstain,label:"Abstain",count:r.abstainVotes}]}async hasVoted(t,r){return r||(r=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await (0,p.aL)(r)])}async canExecute(t){await this.ensureExists(t);let r=await this.get(t),e=r.executions.map(t=>t.toAddress),a=r.executions.map(t=>t.nativeTokenValue),n=r.executions.map(t=>t.transactionData),s=o.id(r.description);try{return await this.contractWrapper.callStatic().execute(e,a,n,s),!0}catch(t){return!1}}async balance(){let t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:s.formatUnits(t,18)}}async balanceOfToken(t){let r=(await Promise.resolve().then(e.t.bind(e,49242,19))).default,a=new c.CH(await (0,p.aL)(t),r,this.contractWrapper.getProvider());return await (0,i.a)(this.contractWrapper.getProvider(),t,await a.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch(r){throw Error(`Proposal ${t} not found`)}}async settings(){let[t,r,e,a,n]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),o=await (0,i.f)(this.contractWrapper.getProvider(),e);return{votingDelay:t.toString(),votingPeriod:r.toString(),votingTokenAddress:e,votingTokenMetadata:o,votingQuorumFraction:a.toString(),proposalTokenThreshold:n.toString()}}propose=(0,d.d)(async(t,r)=>{r||(r=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);let e=r.map(t=>t.toAddress),a=r.map(t=>t.nativeTokenValue),n=r.map(t=>t.transactionData);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[e,a,n,t],parse:t=>{let r=this.contractWrapper.parseLogs("ProposalCreated",t?.logs);return{id:r[0].args.proposalId,receipt:t}}})});vote=(0,d.d)((()=>{var t=this;return async function(r,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return await t.ensureExists(r),d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[r,e,a]})}})());execute=(0,d.d)(async t=>{await this.ensureExists(t);let r=await this.get(t),e=r.executions.map(t=>t.toAddress),a=r.executions.map(t=>t.nativeTokenValue),n=r.executions.map(t=>t.transactionData),s=o.id(r.description);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[e,a,n,s]})});async prepare(t,r,e){return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);