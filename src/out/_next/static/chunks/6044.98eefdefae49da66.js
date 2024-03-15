"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6044],{83287:function(t,e,i){i.d(e,{W:function(){return WagmiConnector}});var s=i(22555),n=i(65007);let WagmiConnector=class WagmiConnector extends n.Z{constructor(t){let{chains:e=s.gL9,options:i}=t;super(),this.chains=e,this.options=i}getBlockExplorerUrls(t){let e=t.explorers?.map(t=>t.url)??[];return e.length>0?e:void 0}isChainUnsupported(t){return!this.chains.some(e=>e.chainId===t)}updateChains(t){this.chains=t}}},83815:function(t,e,i){i.d(e,{A:function(){return AddChainError},C:function(){return ChainNotConfiguredError},R:function(){return ResourceUnavailableError},S:function(){return SwitchChainError},U:function(){return UserRejectedRequestError},a:function(){return ConnectorNotFoundError}});var s=i(69552);let RpcError=class RpcError extends Error{constructor(t,e){let{cause:i,code:s,data:n}=e;if(!Number.isInteger(s))throw Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw Error('"message" must be a nonempty string.');super(`${t}. Cause: ${JSON.stringify(i)}`),this.cause=i,this.code=s,this.data=n}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(t,e){let{cause:i,code:s,data:n}=e;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:i,code:s,data:n})}};let AddChainError=class AddChainError extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}};let ChainNotConfiguredError=class ChainNotConfiguredError extends Error{constructor(t){let{chainId:e,connectorId:i}=t;super(`Chain "${e}" not configured for connector "${i}".`),(0,s._)(this,"name","ChainNotConfigured")}};let ConnectorNotFoundError=class ConnectorNotFoundError extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}};let ResourceUnavailableError=class ResourceUnavailableError extends RpcError{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}};let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,s._)(this,"name","SwitchChainError")}};let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},81764:function(t,e,i){i.d(e,{g:function(){return getValidPublicRPCUrl},i:function(){return isTwUrl}});var s=i(22555);function isTwUrl(t){let e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||e.endsWith(".thirdweb-dev.com")||"localhost"===e||"0.0.0.0"===e}function getValidPublicRPCUrl(t){return(0,s.OZ$)(t).map(t=>{try{let e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}})}},76044:function(t,e,i){i.d(e,{WalletConnectConnector:function(){return WalletConnectConnector}});var s=i(71958),n=i(16074),r=i(69552),a=i(83815),o=i(19485),h=i(241),c=i(16441),d=i(98286),l=i(81764),u=i(83287);i(65007);let p=new Set([1,137,10,42161,56]),w="eip155",g="wagmi.requestedChains",C="wallet_addEthereumChain",m="last-used-chain-id";var f=new WeakMap,_=new WeakMap,v=new WeakMap,b=new WeakSet,y=new WeakSet,E=new WeakSet,I=new WeakSet,R=new WeakSet,S=new WeakSet,N=new WeakSet;let WalletConnectConnector=class WalletConnectConnector extends u.W{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,s._)(this,N),(0,s._)(this,S),(0,s._)(this,R),(0,s._)(this,I),(0,s._)(this,E),(0,s._)(this,y),(0,s._)(this,b),(0,r._)(this,"id",d.w.walletConnect),(0,r._)(this,"name","WalletConnect"),(0,r._)(this,"ready",!0),(0,n._)(this,f,{writable:!0,value:void 0}),(0,n._)(this,_,{writable:!0,value:void 0}),(0,n._)(this,v,{writable:!0,value:void 0}),(0,r._)(this,"onAccountsChanged",t=>{0===t.length?this.emit("disconnect"):t[0]&&this.emit("change",{account:o.getAddress(t[0])})}),(0,r._)(this,"onChainChanged",async t=>{let e=Number(t),i=this.isChainUnsupported(e);await (0,n.b)(this,v).setItem(m,String(t)),this.emit("change",{chain:{id:e,unsupported:i}})}),(0,r._)(this,"onDisconnect",async()=>{await (0,s.a)(this,I,_setRequestedChainsIds2).call(this,[]),await (0,n.b)(this,v).removeItem(m),this.emit("disconnect")}),(0,r._)(this,"onDisplayUri",t=>{this.emit("message",{type:"display_uri",data:t})}),(0,r._)(this,"onConnect",()=>{this.emit("connect",{provider:(0,n.b)(this,f)})}),(0,n.a)(this,v,t.options.storage),(0,s.a)(this,b,_createProvider2).call(this),this.filteredChains=this.chains.length>50?this.chains.filter(t=>p.has(t.chainId)):this.chains,this.showWalletConnectModal=!1!==this.options.qrcode}async connect(){let{chainId:t,pairingTopic:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let i=t;if(!i){let t=await (0,n.b)(this,v).getItem(m),e=t?parseInt(t):void 0;i=e&&!this.isChainUnsupported(e)?e:this.filteredChains[0]?.chainId}if(!i)throw Error("No chains found on connector.");let r=await this.getProvider();this.setupListeners();let a=await (0,s.a)(this,y,_isChainsStale2).call(this);if(r.session&&a&&await r.disconnect(),!r.session||a){let t=this.filteredChains.filter(t=>t.chainId!==i).map(t=>t.chainId);this.emit("message",{type:"connecting"}),await r.connect({pairingTopic:e,chains:[i],optionalChains:t.length>0?t:[i]}),await (0,s.a)(this,I,_setRequestedChainsIds2).call(this,this.filteredChains.map(t=>{let{chainId:e}=t;return e}))}let c=await r.enable();if(!c[0])throw Error("No accounts found on provider.");let d=o.getAddress(c[0]),l=await this.getChainId(),u=this.isChainUnsupported(l);return{account:d,chain:{id:l,unsupported:u},provider:new h.Q(r)}}catch(t){if(/user rejected/i.test(t?.message))throw new a.U(t);throw t}}async disconnect(){let cleanup=()=>{if("undefined"!=typeof localStorage)for(let t in localStorage)t.startsWith("wc@2")&&localStorage.removeItem(t)};cleanup();let t=await this.getProvider(),disconnectProvider=async()=>{try{await t.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{(0,s.a)(this,E,_removeListeners2).call(this),await (0,s.a)(this,I,_setRequestedChainsIds2).call(this,[]),cleanup()}};disconnectProvider()}async getAccount(){let{accounts:t}=await this.getProvider();if(!t[0])throw Error("No accounts found on provider.");return o.getAddress(t[0])}async getChainId(){let{chainId:t}=await this.getProvider();return t}async getProvider(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,n.b)(this,f)||await (0,s.a)(this,b,_createProvider2).call(this),t&&await this.switchChain(t),!(0,n.b)(this,f))throw Error("No provider found.");return(0,n.b)(this,f)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[e,i]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]);return new h.Q(e,t).getSigner(i)}async isAuthorized(){try{let[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),i=await (0,s.a)(this,y,_isChainsStale2).call(this);if(!t)return!1;if(i&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){let e=this.chains.find(e=>e.chainId===t);if(!e)throw new a.S(`Chain with ID: ${t}, not found on connector.`);try{let i=await this.getProvider(),n=(0,s.a)(this,S,_getNamespaceChainsIds2).call(this),r=(0,s.a)(this,N,_getNamespaceMethods2).call(this),a=n.includes(t);if(!a&&r.includes(C)){let n=e.explorers&&e.explorers[0],r=n?{blockExplorerUrls:[n.url]}:{};await i.request({method:C,params:[{chainId:c.hexValue(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:(0,l.g)(e),...r}]});let a=await (0,s.a)(this,R,_getRequestedChainsIds2).call(this);a.push(t),await (0,s.a)(this,I,_setRequestedChainsIds2).call(this,a)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:c.hexValue(t)}]}),e}catch(e){let t="string"==typeof e?e:e?.message;if(/user rejected request/i.test(t))throw new a.U(e);throw new a.S(e)}}async initProvider(){let{default:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:s}=await i.e(2692).then(i.bind(i,32692)),[r,...a]=this.filteredChains.map(t=>{let{chainId:e}=t;return e});r&&(0,n.a)(this,f,await t.init({showQrModal:this.showWalletConnectModal,projectId:this.options.projectId,optionalMethods:s,optionalEvents:e,chains:[r],optionalChains:a,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(t=>[t.chainId,t.rpc[0]||""])),qrModalOptions:this.options.qrModalOptions}))}async setupListeners(){(0,n.b)(this,f)&&((0,s.a)(this,E,_removeListeners2).call(this),(0,n.b)(this,f).on("accountsChanged",this.onAccountsChanged),(0,n.b)(this,f).on("chainChanged",this.onChainChanged),(0,n.b)(this,f).on("disconnect",this.onDisconnect),(0,n.b)(this,f).on("session_delete",this.onDisconnect),(0,n.b)(this,f).on("display_uri",this.onDisplayUri),(0,n.b)(this,f).on("connect",this.onConnect))}};async function _createProvider2(){return(0,n.b)(this,_)||(0,n.a)(this,_,this.initProvider()),(0,n.b)(this,_)}async function _isChainsStale2(){let t=(0,s.a)(this,N,_getNamespaceMethods2).call(this);if(t.includes(C)||!this.options.isNewChainsStale)return!1;let e=await (0,s.a)(this,R,_getRequestedChainsIds2).call(this),i=this.filteredChains.map(t=>{let{chainId:e}=t;return e}),n=(0,s.a)(this,S,_getNamespaceChainsIds2).call(this);return(!n.length||!!n.some(t=>i.includes(t)))&&!i.every(t=>e.includes(t))}function _removeListeners2(){(0,n.b)(this,f)&&((0,n.b)(this,f).removeListener("accountsChanged",this.onAccountsChanged),(0,n.b)(this,f).removeListener("chainChanged",this.onChainChanged),(0,n.b)(this,f).removeListener("disconnect",this.onDisconnect),(0,n.b)(this,f).removeListener("session_delete",this.onDisconnect),(0,n.b)(this,f).removeListener("display_uri",this.onDisplayUri),(0,n.b)(this,f).removeListener("connect",this.onConnect))}async function _setRequestedChainsIds2(t){await (0,n.b)(this,v).setItem(g,JSON.stringify(t))}async function _getRequestedChainsIds2(){let t=await (0,n.b)(this,v).getItem(g);return t?JSON.parse(t):[]}function _getNamespaceChainsIds2(){if(!(0,n.b)(this,f))return[];let t=n.b(this,f).session?.namespaces[w]?.chains?.map(t=>parseInt(t.split(":")[1]||""));return t??[]}function _getNamespaceMethods2(){if(!(0,n.b)(this,f))return[];let t=n.b(this,f).session?.namespaces[w]?.methods;return t??[]}}}]);