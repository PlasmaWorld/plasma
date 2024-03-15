"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5163],{81764:function(t,e,a){a.d(e,{g:function(){return getValidPublicRPCUrl},i:function(){return isTwUrl}});var r=a(22555);function isTwUrl(t){let e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||e.endsWith(".thirdweb-dev.com")||"localhost"===e||"0.0.0.0"===e}function getValidPublicRPCUrl(t){return(0,r.OZ$)(t).map(t=>{try{let e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}})}},85163:function(t,e,a){a.d(e,{SmartWalletConnector:function(){return SmartWalletConnector}});var r=a(27021),i=a(6881),s=a(16441),n=a(38197),o=a(84243),c=a(2593),l=a(82169),h=a(48088),d=a(97013),u=a(9279),g=a(19485),p=a(29251),y=a(61744),m=a(81764),w=a(84694),f=a(51364),A=a(69552),P=a(99003),v=a(24181),O=a(29324),I=a(50345),T=a(22555);async function hexlifyUserOp(t){let e=await i.resolveProperties(t);return Object.keys(e).map(t=>{let a=e[t];return"string"==typeof a&&a.startsWith("0x")||(a=s.hexValue(a)),[t,a]}).reduce((t,e)=>{let[a,r]=e;return{...t,[a]:r}},{})}async function getUserOpHashV06(t,e,a){let r=await i.resolveProperties(t),s={sender:r.sender,nonce:r.nonce,initCodeHash:n.keccak256(r.initCode),callDataHash:n.keccak256(r.callData),callGasLimit:r.callGasLimit,verificationGasLimit:r.verificationGasLimit,preVerificationGas:r.preVerificationGas,maxFeePerGas:r.maxFeePerGas,maxPriorityFeePerGas:r.maxPriorityFeePerGas,paymasterAndDataHash:n.keccak256(r.paymasterAndData)},c=o.$.encode([{components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes32",name:"initCodeHash"},{type:"bytes32",name:"callDataHash"},{type:"uint256",name:"callGasLimit"},{type:"uint256",name:"verificationGasLimit"},{type:"uint256",name:"preVerificationGas"},{type:"uint256",name:"maxFeePerGas"},{type:"uint256",name:"maxPriorityFeePerGas"},{type:"bytes32",name:"paymasterAndDataHash"}],name:"hashedUserOp",type:"tuple"}],[{...s}]),l=n.keccak256(c),h=o.$.encode(["bytes32","address","uint256"],[l,e,a]);return n.keccak256(h)}a(65007);let generateRandomUint192=()=>{let t=BigInt(Math.floor(4294967296*Math.random())),e=BigInt(Math.floor(4294967296*Math.random())),a=BigInt(Math.floor(4294967296*Math.random())),r=BigInt(Math.floor(4294967296*Math.random())),i=BigInt(Math.floor(4294967296*Math.random())),s=BigInt(Math.floor(4294967296*Math.random()));return t<<BigInt(160)|e<<BigInt(128)|a<<BigInt(96)|r<<BigInt(64)|i<<BigInt(32)|s},randomNonce=()=>{let t=generateRandomUint192().toString(16);return t.length%2!=0&&(t="0"+t),t="0x"+t,c.O$.from(s.concat([t,"0x0000000000000000"]))};let PaymasterAPI=class PaymasterAPI{};let HttpRpcClient=class HttpRpcClient{constructor(t,e,a,r,i){this.bundlerUrl=t,this.entryPointAddress=e,this.chainId=a;let s={};if((0,m.i)(this.bundlerUrl)){let t="undefined"!=typeof globalThis&&"APP_BUNDLE_ID"in globalThis?globalThis.APP_BUNDLE_ID:void 0;i?s["x-secret-key"]=i:r&&(s["x-client-id"]=r,t&&(s["x-bundle-id"]=t)),"undefined"!=typeof globalThis&&"TW_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_AUTH_TOKEN&&(s.authorization=`Bearer ${globalThis.TW_AUTH_TOKEN}`),"undefined"!=typeof globalThis&&"TW_CLI_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_CLI_AUTH_TOKEN&&(s.authorization=`Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`,s["x-authorize-wallet"]="true"),(0,w.s)(s)}this.userOpJsonRpcProvider=new l.r({url:this.bundlerUrl,headers:s},{name:"Connected bundler network",chainId:a}),this.initializing=this.validateChainId()}async validateChainId(){let t=await this.userOpJsonRpcProvider.send("eth_chainId",[]),e=parseInt(t);if(e!==this.chainId)throw Error(`bundler ${this.bundlerUrl} is on chainId ${e}, but provider is on chainId ${this.chainId}`)}async sendUserOpToBundler(t){await this.initializing;let e=await hexlifyUserOp(t),a=[e,this.entryPointAddress];return await this.printUserOperation("eth_sendUserOperation",a),await this.userOpJsonRpcProvider.send("eth_sendUserOperation",[e,this.entryPointAddress])}async estimateUserOpGas(t){await this.initializing;let e=await hexlifyUserOp(t),a=[e,this.entryPointAddress];return await this.printUserOperation("eth_estimateUserOperationGas",a),await this.userOpJsonRpcProvider.send("eth_estimateUserOperationGas",[e,this.entryPointAddress])}async printUserOperation(t,e){}};let VerifyingPaymasterAPI=class VerifyingPaymasterAPI extends PaymasterAPI{constructor(t,e,a,r){super(),this.paymasterUrl=t,this.entryPoint=e,this.clientId=a,this.secretKey=r}async getPaymasterAndData(t){let e={"Content-Type":"application/json"};if((0,m.i)(this.paymasterUrl)){if(this.secretKey&&this.clientId)throw Error("Cannot use both secret key and client ID. Please use secretKey for server-side applications and clientId for client-side applications.");this.secretKey?e["x-secret-key"]=this.secretKey:this.clientId&&(e["x-client-id"]=this.clientId,"undefined"!=typeof globalThis&&"APP_BUNDLE_ID"in globalThis&&(e["x-bundle-id"]=globalThis.APP_BUNDLE_ID)),"undefined"!=typeof globalThis&&"TW_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_AUTH_TOKEN&&(e.authorization=`Bearer ${globalThis.TW_AUTH_TOKEN}`),"undefined"!=typeof globalThis&&"TW_CLI_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_CLI_AUTH_TOKEN&&(e.authorization=`Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`,e["x-authorize-wallet"]="true"),(0,w.s)(e)}let a=await fetch(this.paymasterUrl,{method:"POST",headers:e,body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[await hexlifyUserOp(t),this.entryPoint]})}),r=await a.json();if(!a.ok){let t=r.error||a.statusText,e=r.code||"UNKNOWN";throw Error(`Paymaster error: ${t}
Status: ${a.status}
Code: ${e}`)}if(r.result)return"string"==typeof r.result?{paymasterAndData:r.result}:r.result;{let t=r.error?.message||r.error||a.statusText||"unknown error";throw Error(`Paymaster error from ${this.paymasterUrl}: ${t}`)}}};let getVerifyingPaymaster=(t,e,a,r)=>new VerifyingPaymasterAPI(t,e,a,r);let UserOperationEventListener=class UserOperationEventListener{constructor(t,e,a,r,i,s,n){this.resolve=t,this.reject=e,this.entryPoint=a,this.sender=r,this.userOpHash=i,this.nonce=s,this.timeout=n,(0,A._)(this,"resolved",!1),this.boundLisener=this.listenerCallback.bind(this)}start(){let t=this.entryPoint.filters.UserOperationEvent(this.userOpHash);setTimeout(async()=>{let e=await this.entryPoint.queryFilter(t,-10);e.length>0?this.listenerCallback(e[0]):this.entryPoint.once(t,this.boundLisener)},100)}stop(){this.entryPoint.off("UserOperationEvent",this.boundLisener)}async listenerCallback(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];let r=arguments[arguments.length-1];if(!r.args){console.error("got event without args",r);return}if(r.args.userOpHash!==this.userOpHash){console.log(`== event with wrong userOpHash: sender/nonce: event.${r.args.sender}@${r.args.nonce.toString()}!= userOp.${this.sender}@${parseInt(this.nonce?.toString())}`);return}let i=await r.getTransactionReceipt();r.args.success||await this.extractFailureReason(i),this.stop(),this.resolve(i),this.resolved=!0}async extractFailureReason(t){t.status=0;let e=await this.entryPoint.queryFilter(this.entryPoint.filters.UserOperationRevertReason(this.userOpHash,this.sender),t.blockHash);if(e[0]){let t=e[0].args.revertReason;t.startsWith("0x08c379a0")&&(t=o.$.decode(["string"],"0x"+t.substring(10)).toString()),this.reject(Error(`UserOp failed with reason: ${t}`))}}};let ERC4337EthersSigner=class ERC4337EthersSigner extends h.Signer{constructor(t,e,a,r,s){super(),i.defineReadOnly(this,"provider",a),this.config=t,this.originalSigner=e,this.erc4337provider=a,this.httpRpcClient=r,this.smartAccountAPI=s}async sendTransaction(t,e){let a=await i.resolveProperties(t);await this.verifyAllNecessaryFields(a);let r=randomNonce(),s=await this.smartAccountAPI.createUnsignedUserOp(this.httpRpcClient,{target:a.to||"",data:a.data?.toString()||"0x",value:a.value,gasLimit:a.gasLimit,nonce:r,maxFeePerGas:a.maxFeePerGas,maxPriorityFeePerGas:a.maxPriorityFeePerGas},e),n=await this.smartAccountAPI.signUserOp(s),o=await this.erc4337provider.constructUserOpTransactionResponse(n);try{await this.httpRpcClient.sendUserOpToBundler(n)}catch(t){throw this.unwrapError(t)}return o}unwrapError(t){try{let e="Unknown Error";if(t.error)e=`The bundler has failed to include UserOperation in a batch: ${t.error}`;else if(t.body&&"string"==typeof t.body){let a=JSON.parse(t.body),r=t.status||"UNKNOWN",i=a?.code||"UNKNOWN",s=a?.error?.message||a?.error?.data||a?.error||t.reason;if(s?.includes("FailedOp")){let t="",a=s.match(/FailedOp\((.*)\)/);if(a){let e=a[1].split(",");t=`(paymaster address: ${e[1]})`,s=e[2]}e=`The bundler has failed to include UserOperation in a batch: ${s} ${t}`}else e=`RPC error: ${s}
Status: ${r}
Code: ${i}`}let a=Error(e);return a.stack=t.stack,a}catch(t){}return t}async verifyAllNecessaryFields(t){if(!t.to)throw Error("Missing call target");if(!t.data&&!t.value)throw Error("Missing call data or value")}connect(t){throw Error("changing providers is not supported")}async getAddress(){return this.address||(this.address=await this.erc4337provider.getSenderAccountAddress()),this.address}async signMessage(t){let e=await this.smartAccountAPI.checkAccountPhantom();if(e&&this.config.deployOnSign){console.log("Account contract not deployed yet. Deploying account before signing message");let t=await this.sendTransaction({to:await this.getAddress(),data:"0x"});await t.wait()}return await this.originalSigner.signMessage(t)}async signTransaction(t,e){let a=await i.resolveProperties(t);await this.verifyAllNecessaryFields(a);let r=randomNonce(),s=await this.smartAccountAPI.createUnsignedUserOp(this.httpRpcClient,{target:a.to||"",data:a.data?.toString()||"0x",value:a.value,gasLimit:a.gasLimit,nonce:r},e),n=await this.smartAccountAPI.signUserOp(s),o=JSON.stringify(await hexlifyUserOp(n));return o}};let ERC4337EthersProvider=class ERC4337EthersProvider extends d.Zk{constructor(t,e,a,r,i,s,n){super({name:"ERC-4337 Custom Network",chainId:t}),this.chainId=t,this.config=e,this.originalSigner=a,this.originalProvider=r,this.httpRpcClient=i,this.entryPoint=s,this.smartAccountAPI=n,this.signer=new ERC4337EthersSigner(e,a,this,i,n)}getSigner(){return this.signer}async perform(t,e){if("sendTransaction"===t||"getTransactionReceipt"===t)throw Error("Should not get here. Investigate.");return"estimateGas"===t?c.O$.from(5e5):await this.originalProvider.perform(t,e)}async getTransaction(t){return await super.getTransaction(t)}async getTransactionReceipt(t){let e=await t,a=await this.getSenderAccountAddress();return await new Promise((t,r)=>{new UserOperationEventListener(t,r,this.entryPoint,a,e).start()})}async getSenderAccountAddress(){return await this.smartAccountAPI.getAccountAddress()}async waitForTransaction(t,e,a){let r=await this.getSenderAccountAddress();return await new Promise((e,i)=>{let s=new UserOperationEventListener(e,i,this.entryPoint,r,t,void 0,a);s.start()})}async constructUserOpTransactionResponse(t){let e=await i.resolveProperties(t),a=await this.smartAccountAPI.getUserOpHash(e),waitForUserOp=async()=>await new Promise((t,r)=>{new UserOperationEventListener(t,r,this.entryPoint,e.sender,a,e.nonce).start()});return{hash:a,confirmations:0,from:e.sender,nonce:0,gasLimit:c.O$.from(e.callGasLimit),value:c.O$.from(0),data:s.hexValue(e.callData),chainId:this.chainId,wait:async t=>{let a=await waitForUserOp();return 0!==e.initCode.length&&await this.smartAccountAPI.checkAccountPhantom(),a}}}async detectNetwork(){return this.originalProvider.detectNetwork()}};let BaseAccountAPI=class BaseAccountAPI{constructor(t){(0,A._)(this,"isPhantom",!0),this.provider=t.provider,this.entryPointAddress=t.entryPointAddress,this.accountAddress=t.accountAddress,this.paymasterAPI=t.paymasterAPI,this.gasless=t.gasless,this.entryPointView=f.EntryPoint__factory.connect(t.entryPointAddress,t.provider).connect(u.d)}async checkAccountPhantom(){if(!this.isPhantom)return this.isPhantom;let t=await this.provider.getCode(this.getAccountAddress());return t.length>2&&(this.isPhantom=!1),this.isPhantom}async getInitCode(){return await this.checkAccountPhantom()?await this.getAccountInitCode():"0x"}async getVerificationGasLimit(){return 1e5}async getUserOpHash(t){let e=await this.provider.getNetwork().then(t=>t.chainId);return getUserOpHashV06(t,this.entryPointAddress,e)}async getAccountAddress(){return this.senderAddress||(this.accountAddress?this.senderAddress=this.accountAddress:this.senderAddress=await this.getCounterFactualAddress()),this.senderAddress}async estimateCreationGas(t){if(!t||"0x"===t)return 0;let e=t.substring(0,42),a="0x"+t.substring(42);return await this.provider.estimateGas({to:e,data:a})}async createUnsignedUserOp(t,e,a){var r;let i=await this.getInitCode(),s=((r=e.value)&&""!==r?c.O$.from(r.toString()):null)??c.O$.from(0),n=a?.batchData?e.data:await this.prepareExecute(e.target,s,e.data).then(t=>t.encode()),{maxFeePerGas:o,maxPriorityFeePerGas:l}=e;if(!o||!l){let t=await (0,v.a)(this.provider);if(l||(l=t.maxPriorityFeePerGas??void 0),!o){o=t.maxFeePerGas??void 0;let e=await this.provider.getNetwork(),a=e.chainId;(a===T.Lll.chainId||a===T.M8s.chainId||a===T.m3x.chainId)&&(l=o)}}if(!o||!l)throw Error("maxFeePerGas or maxPriorityFeePerGas could not be calculated, please pass them explicitely");let[h,d]=await Promise.all([this.getAccountAddress(),e.nonce?Promise.resolve(e.nonce):this.getNonce()]),u={sender:h,nonce:d,initCode:i,callData:n,maxFeePerGas:o,maxPriorityFeePerGas:l,callGasLimit:c.O$.from(1e6),verificationGasLimit:c.O$.from(1e6),preVerificationGas:c.O$.from(1e6),paymasterAndData:"0x",signature:"0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c"},g=a?.gasless!==void 0?a.gasless:this.gasless;if(g){let e=await this.paymasterAPI.getPaymasterAndData(u),a=e.paymasterAndData;if(a&&"0x"!==a&&(u.paymasterAndData=a),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas)u.callGasLimit=c.O$.from(e.callGasLimit),u.verificationGasLimit=c.O$.from(e.verificationGasLimit),u.preVerificationGas=c.O$.from(e.preVerificationGas);else{let e;try{e=await t.estimateUserOpGas(u)}catch(t){throw this.unwrapBundlerError(t)}if(u.callGasLimit=c.O$.from(e.callGasLimit),u.verificationGasLimit=c.O$.from(e.verificationGasLimit),u.preVerificationGas=c.O$.from(e.preVerificationGas),a&&"0x"!==a){let t=await this.paymasterAPI.getPaymasterAndData(u);t.paymasterAndData&&"0x"!==t.paymasterAndData&&(u.paymasterAndData=t.paymasterAndData)}}}else{let e;try{e=await t.estimateUserOpGas(u)}catch(t){throw this.unwrapBundlerError(t)}u.callGasLimit=c.O$.from(e.callGasLimit),u.verificationGasLimit=c.O$.from(e.verificationGasLimit),u.preVerificationGas=c.O$.from(e.preVerificationGas)}return{...u,signature:""}}async signUserOp(t){let e=await this.getUserOpHash(t),a=await this.signUserOpHash(e);return{...t,signature:a}}async getUserOpReceipt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3,r=Date.now()+e;for(;Date.now()<r;){let e=await this.entryPointView.queryFilter(this.entryPointView.filters.UserOperationEvent(t));if(e[0])return e[0].transactionHash;await new Promise(t=>setTimeout(t,a))}return null}unwrapBundlerError(t){let e=t?.error?.message||t.error||t.message||t;return Error(e)}};let AccountAPI=class AccountAPI extends BaseAccountAPI{constructor(t,e){super({...t,provider:e}),this.params=t,this.sdk=O.T.fromPrivateKey(O.L,t.chain,{clientId:t.clientId,secretKey:t.secretKey,supportedChains:"object"==typeof t.chain?[t.chain]:void 0})}async getChainId(){return await this.provider.getNetwork().then(t=>t.chainId)}async getAccountContract(){return this.accountContract||(this.params.accountInfo?.abi?this.accountContract=await this.sdk.getContract(await this.getAccountAddress(),this.params.accountInfo.abi):this.accountContract=await this.sdk.getContract(await this.getAccountAddress(),P.A)),this.accountContract}async getAccountInitCode(){let t=await this.getFactoryContract();console.log("Deploying smart wallet via factory");let e=await this.params.localSigner.getAddress(),a=await this.params.factoryInfo.createAccount(t,e);try{console.log("Cost to deploy smart wallet: ",(await a.estimateGasCost()).ether,"ETH")}catch(t){console.error("Cost to deploy smart wallet: unknown",t)}return s.hexConcat([t.getAddress(),a.encode()])}async getFactoryContract(){return this.factoryContract||(this.params.factoryInfo?.abi?this.factoryContract=await this.sdk.getContract(this.params.factoryAddress,this.params.factoryInfo.abi):this.factoryContract=await this.sdk.getContract(this.params.factoryAddress)),this.factoryContract}async getCounterFactualAddress(){if(this.params.accountAddress)return this.params.accountAddress;let t=await this.getFactoryContract(),e=await this.params.localSigner.getAddress();return this.params.factoryInfo.getAccountAddress(t,e)}async getNonce(){if(await this.checkAccountPhantom())return c.O$.from(0);let t=await this.getAccountContract();return this.params.accountInfo.getNonce(t)}async prepareExecute(t,e,a){let r=await this.getAccountContract();return this.params.accountInfo.execute(r,t,e,a)}async prepareExecuteBatch(t,e,a){let r=await this.getAccountContract();return r.prepare("executeBatch",[t,e,a])}async signUserOpHash(t){return await this.params.localSigner.signMessage(s.arrayify(t))}async isAcountDeployed(){return!await this.checkAccountPhantom()}};let SmartWalletConnector=class SmartWalletConnector extends r.C{constructor(t){super(),this.config=t}async initialize(t){let e=this.config,a=(0,I.a_)(e.chain,{clientId:e.clientId,secretKey:e.secretKey});this.chainId=(await a.getNetwork()).chainId;let r=this.config.bundlerUrl||`https://${this.chainId}.bundler.thirdweb.com`,i=this.config.paymasterUrl||`https://${this.chainId}.bundler.thirdweb.com/v2`,s=e.entryPointAddress||P.E,n=e.deployOnSign??!0,o=await t.personalWallet.getSigner(),c={chain:e.chain,localSigner:o,entryPointAddress:s,bundlerUrl:r,paymasterAPI:this.config.paymasterAPI?this.config.paymasterAPI:getVerifyingPaymaster(i,s,this.config.clientId,this.config.secretKey),gasless:e.gasless,deployOnSign:n,factoryAddress:e.factoryAddress,accountAddress:t.accountAddress,factoryInfo:e.factoryInfo||this.defaultFactoryInfo(),accountInfo:e.accountInfo||this.defaultAccountInfo(),clientId:e.clientId,secretKey:e.secretKey};this.personalWallet=t.personalWallet;let l=new AccountAPI(c,a);this.aaProvider=function(t,e,a,r){let i=f.EntryPoint__factory.connect(t.entryPointAddress,a),s=new HttpRpcClient(t.bundlerUrl,t.entryPointAddress,r,t.clientId,t.secretKey);return new ERC4337EthersProvider(r,t,t.localSigner,a,s,i,e)}(c,l,a,this.chainId),this.accountApi=l}async connect(t){return await this.initialize(t),await this.getAddress()}getProvider(){if(!this.aaProvider)throw Error("Personal wallet not connected");return Promise.resolve(this.aaProvider)}async getSigner(){if(!this.aaProvider)throw Error("Personal wallet not connected");return Promise.resolve(this.aaProvider.getSigner())}async getAddress(){let t=await this.getSigner();return t.getAddress()}async isConnected(){try{let t=await this.getAddress();return!!t}catch(t){return!1}}async disconnect(){this.personalWallet=void 0,this.aaProvider=void 0}async switchChain(t){let e=await this.getProvider(),a=(await e.getNetwork()).chainId;if(a!==t)throw Error("Not supported.")}setupListeners(){return Promise.resolve()}updateChains(t){}async hasPermissionToExecute(t){let e=await this.getAccountContract(),a=await this.getSigner(),r=await a.getAddress(),i=(await e.account.getAllSigners()).filter(t=>g.getAddress(t.signer)===g.getAddress(r))[0]?.permissions;return!!i&&i.approvedCallTargets.includes(t.getTarget())}async send(t,e){let a=await this.getSigner();return a.sendTransaction({to:t.getTarget(),data:t.encode(),value:await t.getValue()},e)}async execute(t,e){let a=await this.send(t,e),r=await a.wait();return{receipt:r}}async sendBatch(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");let a=await this.getSigner(),{tx:r,batchData:i}=await this.prepareBatchTx(t);return await a.sendTransaction({to:await a.getAddress(),data:r.encode(),value:0},{...e,batchData:i})}async executeBatch(t,e){let a=await this.sendBatch(t,e),r=await a.wait();return{receipt:r}}async sendRaw(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");let a=await this.getSigner();return a.sendTransaction(t,e)}async executeRaw(t,e){let a=await this.sendRaw(t,e),r=await a.wait();return{receipt:r}}async sendBatchRaw(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");let a=await this.getSigner(),r=await this.prepareBatchRaw(t);return a.sendTransaction({to:await a.getAddress(),data:r.tx.encode(),value:0},{...e,batchData:r.batchData})}async executeBatchRaw(t,e){let a=await this.sendBatchRaw(t,e),r=await a.wait();return{receipt:r}}async estimate(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");return this.estimateTx({target:t.getTarget(),data:t.encode(),value:await t.getValue(),gasLimit:await t.getOverrides().gasLimit,maxFeePerGas:await t.getOverrides().maxFeePerGas,maxPriorityFeePerGas:await t.getOverrides().maxPriorityFeePerGas,nonce:await t.getOverrides().nonce},e)}async estimateRaw(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");let a=await i.resolveProperties(t);return this.estimateTx({target:a.to||u.d,data:a.data?.toString()||"",value:a.value||c.O$.from(0),gasLimit:a.gasLimit,maxFeePerGas:a.maxFeePerGas,maxPriorityFeePerGas:a.maxPriorityFeePerGas,nonce:a.nonce},e)}async estimateBatch(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");let{tx:a,batchData:r}=await this.prepareBatchTx(t);return this.estimateTx({target:a.getTarget(),data:a.encode(),value:await a.getValue(),gasLimit:await a.getOverrides().gasLimit,maxFeePerGas:await a.getOverrides().maxFeePerGas,maxPriorityFeePerGas:await a.getOverrides().maxPriorityFeePerGas,nonce:await a.getOverrides().nonce},{...e,batchData:r})}async estimateBatchRaw(t,e){if(!this.accountApi)throw Error("Personal wallet not connected");let{tx:a,batchData:r}=await this.prepareBatchRaw(t);return this.estimateTx({target:a.getTarget(),data:a.encode(),value:await a.getValue(),gasLimit:await a.getOverrides().gasLimit,maxFeePerGas:await a.getOverrides().maxFeePerGas,maxPriorityFeePerGas:await a.getOverrides().maxPriorityFeePerGas,nonce:await a.getOverrides().nonce},{...e,batchData:r})}async deploy(t){if(!this.accountApi)throw Error("Personal wallet not connected");let e=await this.getSigner(),a=await e.sendTransaction({to:await e.getAddress(),data:"0x"},{...t,batchData:{targets:[],data:[],values:[]}}),r=await a.wait();return{receipt:r}}async isDeployed(){if(!this.accountApi)throw Error("Personal wallet not connected");return await this.accountApi.isAcountDeployed()}async deployIfNeeded(t){let e=await this.isDeployed();e||await this.deploy(t)}async grantPermissions(t,e){await this.deployIfNeeded();let a=await this.getAccountContract();return a.account.grantPermissions(t,e)}async revokePermissions(t){await this.deployIfNeeded();let e=await this.getAccountContract();return e.account.revokeAccess(t)}async addAdmin(t){await this.deployIfNeeded();let e=await this.getAccountContract();return e.account.grantAdminPermissions(t)}async removeAdmin(t){await this.deployIfNeeded();let e=await this.getAccountContract();return e.account.revokeAdminPermissions(t)}async getAllActiveSigners(){let t=await this.isDeployed();if(t){let t=await this.getAccountContract();return t.account.getAllAdminsAndSigners()}{let t=await this.personalWallet?.getSigner();if(!t)throw Error("Personal wallet not connected");return[{isAdmin:!0,signer:await t.getAddress(),permissions:{startDate:new Date(0),expirationDate:new Date(0),nativeTokenLimitPerTransaction:c.O$.from(0),approvedCallTargets:[]}}]}}async getAccountContract(){let t=await this.isDeployed();if(!t)throw Error("Account contract is not deployed yet. You can deploy it manually using SmartWallet.deploy(), or by executing a transaction from this wallet.");let e=O.T.fromSigner(await this.getSigner(),this.config.chain,{clientId:this.config.clientId,secretKey:this.config.secretKey});return this.config.accountInfo?.abi?e.getContract(await this.getAddress(),this.config.accountInfo.abi):e.getContract(await this.getAddress())}async getFactoryContract(){let t=O.T.fromSigner(await this.getSigner(),this.config.chain,{clientId:this.config.clientId,secretKey:this.config.secretKey});return this.config.factoryInfo?.abi?t.getContract(this.config.factoryAddress,this.config.factoryInfo.abi):t.getContract(this.config.factoryAddress)}defaultFactoryInfo(){return{createAccount:async(t,e)=>t.prepare("createAccount",[e,p.Y0("")]),getAccountAddress:async(t,e)=>await t.call("getAddress",[e,p.Y0("")])}}defaultAccountInfo(){return{execute:async(t,e,a,r)=>t.prepare("execute",[e,a,r]),getNonce:async t=>t.call("getNonce",[])}}async estimateTx(t,e){if(!this.accountApi||!this.aaProvider)throw Error("Personal wallet not connected");let a=c.O$.from(0),[r,s]=await Promise.all([this.getProvider(),this.isDeployed()]);s||(a=await this.estimateDeploymentGasLimit());let[n,o]=await Promise.all([this.accountApi.createUnsignedUserOp(this.aaProvider.httpRpcClient,t,e),(0,v.b)(r)]),l=await i.resolveProperties(n),h=c.O$.from(l.callGasLimit),d=h.mul(o),u=a.mul(o),g=u.add(d);return{ether:y.formatEther(g),wei:g,details:{deployGasLimit:a,transactionGasLimit:h,gasPrice:o,transactionCost:d,deployCost:u,totalCost:g}}}async estimateDeploymentGasLimit(){if(!this.accountApi)throw Error("Personal wallet not connected");let t=await this.accountApi.getInitCode(),[e,a]=await Promise.all([this.accountApi.estimateCreationGas(t),this.accountApi.getVerificationGasLimit()]);return c.O$.from(a).add(e)}async prepareBatchRaw(t){if(!this.accountApi)throw Error("Personal wallet not connected");let e=await Promise.all(t.map(t=>i.resolveProperties(t))),a=e.map(t=>t.to||u.d),r=e.map(t=>t.data||"0x"),s=e.map(t=>t.value||c.O$.from(0));return{tx:await this.accountApi.prepareExecuteBatch(a,s,r),batchData:{targets:a,data:r,values:s}}}async prepareBatchTx(t){if(!this.accountApi)throw Error("Personal wallet not connected");let e=t.map(t=>t.getTarget()),a=t.map(t=>t.encode()),r=await Promise.all(t.map(t=>t.getValue()));return{tx:await this.accountApi.prepareExecuteBatch(e,r,a),batchData:{targets:e,data:a,values:r}}}}}}]);