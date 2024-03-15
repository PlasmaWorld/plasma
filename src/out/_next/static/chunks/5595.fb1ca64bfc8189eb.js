(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5595],{45997:function(e,t,r){"use strict";r.d(t,{E:function(){return l},R:function(){return s},S:function(){return o},a:function(){return assertEnabled}});var a=r(2593),i=r(1604),n=r(50345);let s=i.z.union([i.z.date().transform(e=>a.O$.from(Math.floor(e.getTime()/1e3))),i.z.number().transform(e=>a.O$.from(e))]),o=s.default(new Date(0)),l=s.default(new Date(Date.now()+31536e7));function assertEnabled(e,t){if(!e)throw new n.x(t);return e}},94049:function(e,t,r){"use strict";r.d(t,{B:function(){return l},C:function(){return c},N:function(){return f},a:function(){return u},s:function(){return setErc20Allowance}});var a=r(50345),i=r(1604),n=r(73775);let s=i.z.object({}).catchall(i.z.union([a.cw,i.z.unknown()])),o=i.z.union([i.z.array(s),s]).optional().nullable(),l=i.z.object({name:i.z.union([i.z.string(),i.z.number()]).optional().nullable(),description:i.z.string().nullable().optional().nullable(),image:a.cx.nullable().optional(),animation_url:a.cx.optional().nullable()}),u=l.extend({external_url:a.cx.nullable().optional(),background_color:a.cy.optional().nullable(),properties:o,attributes:o}).catchall(i.z.union([a.cw,i.z.unknown()])),f=i.z.union([u,i.z.string()]),c=u.extend({id:i.z.string(),uri:i.z.string(),image:i.z.string().nullable().optional(),external_url:i.z.string().nullable().optional(),animation_url:i.z.string().nullable().optional()});async function setErc20Allowance(e,t,i,s){if((0,n.i)(i))s.value=t;else{let n=(await Promise.resolve().then(r.t.bind(r,49242,19))).default,o=e.getSigner(),l=e.getProvider(),u=new a.cq(o||l,i,n,e.options,e.storage),f=await e.getSignerAddress(),c=e.address,h=await u.read("allowance",[f,c]);return h.lt(t)&&await u.sendTransaction("approve",[c,t]),s}}},55595:function(e,t,r){"use strict";r.d(t,{A:function(){return newContractModelToAbstract},B:function(){return z},C:function(){return E},D:function(){return convertQuantityToBigNumber},E:function(){return prepareClaim},F:function(){return C},H:function(){return processClaimConditionInputs},I:function(){return abstractContractModelToLegacy},J:function(){return abstractContractModelToNew},K:function(){return updateExistingClaimConditions},L:function(){return resolveOrGenerateId},M:function(){return W},S:function(){return H},a:function(){return approveErc20Allowance},f:function(){return fetchSnapshotEntryForAddress},n:function(){return I},r:function(){return D},s:function(){return _},t:function(){return j},u:function(){return q},v:function(){return $},w:function(){return V},x:function(){return Q},y:function(){return transformResultToClaimCondition},z:function(){return legacyContractModelToAbstract}});var a,i,n=r(21046),s=r(61744),o=r(31886),l=r(9279),u=r(38197),f=r(2593),c=r(16441),h=r(29251),d=r(50345),m=r(73775),p=r(82383),y=r(48764),g=r(56351),b=r.n(g),w=r(99269);let Base=class Base{print(){Base.print(this)}bufferIndexOf(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r?this.binarySearch(e,t,y.Buffer.compare):this.linearSearch(e,t,(e,t)=>e.equals(t))}static binarySearch(e,t,r){let a=0,i=e.length-1;for(;a<=i;){let n=Math.floor((a+i)/2),s=r(e[n],t);if(0===s){for(let a=n-1;a>=0;a--)if(0!==r(e[a],t))return a+1;return 0}s<0?a=n+1:i=n-1}return -1}binarySearch(e,t,r){return Base.binarySearch(e,t,r)}static linearSearch(e,t,r){for(let a=0;a<e.length;a++)if(r(e[a],t))return a;return -1}linearSearch(e,t,r){return Base.linearSearch(e,t,r)}static bufferify(e){if(!y.Buffer.isBuffer(e)){if("object"==typeof e&&e.words)return y.Buffer.from(e.toString(convertWordsToBuffer),"hex");if(Base.isHexString(e))return y.Buffer.from(e.replace(/^0x/,""),"hex");if("string"==typeof e)return y.Buffer.from(e);if("bigint"==typeof e)return y.Buffer.from(e.toString(16),"hex");else if(e instanceof Uint8Array)return y.Buffer.from(e.buffer);else if("number"==typeof e){let t=e.toString();return t.length%2&&(t=`0${t}`),y.Buffer.from(t,"hex")}else if(ArrayBuffer.isView(e))return y.Buffer.from(e.buffer,e.byteOffset,e.byteLength)}return e}bigNumberify(e){return Base.bigNumberify(e)}static bigNumberify(e){if("bigint"==typeof e)return e;if("string"==typeof e)return e.startsWith("0x")&&Base.isHexString(e)?BigInt("0x"+e.replace("0x","").toString()):BigInt(e);if(y.Buffer.isBuffer(e))return BigInt("0x"+e.toString("hex"));if(e instanceof Uint8Array)return function(e){let t=Array.from(e).map(e=>e.toString(16).padStart(2,"0")).join("");return BigInt(`0x${t}`)}(e);if("number"==typeof e)return BigInt(e);throw Error("cannot bigNumberify")}static isHexString(e){return"string"==typeof e&&/^(0x)?[0-9A-Fa-f]*$/.test(e)}static print(e){console.log(e.toString())}bufferToHex(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Base.bufferToHex(e,t)}static bufferToHex(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return`${t?"0x":""}${(e||y.Buffer.alloc(0)).toString("hex")}`}bufferify(e){return Base.bufferify(e)}bufferifyFn(e){return t=>{let r=e(t);if(y.Buffer.isBuffer(r))return r;if(this.isHexString(r))return y.Buffer.from(r.replace("0x",""),"hex");if("string"==typeof r)return y.Buffer.from(r);if("bigint"==typeof r)return y.Buffer.from(t.toString(16),"hex");if(ArrayBuffer.isView(r))return y.Buffer.from(r.buffer,r.byteOffset,r.byteLength);let a=function(e){let t=new Uint8Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=parseInt(e.substring(r,r+2),16);return t.buffer}(t.toString("hex")),i=e(a),n=function(e){let t=new Uint8Array(e);return Array.from(t).map(e=>e.toString(16).padStart(2,"0")).join("")}(i);return y.Buffer.from(n,"hex")}}isHexString(e){return Base.isHexString(e)}log2(e){return 1===e?0:1+this.log2(e/2|0)}zip(e,t){return e.map((e,r)=>[e,t[r]])}static hexZeroPad(e,t){return"0x"+e.replace("0x","").padStart(t,"0")}};var v=Base;function convertWordsToBuffer(e){let t=e.words,r=new ArrayBuffer(4*t.length),a=new Uint8Array(r);for(let e=0;e<t.length;e++)a[4*e]=t[e]>>24&255,a[4*e+1]=t[e]>>16&255,a[4*e+2]=t[e]>>8&255,a[4*e+3]=255&t[e];return r}let thirdweb_dev_merkletree_esm_MerkleTree=class thirdweb_dev_merkletree_esm_MerkleTree extends v{duplicateOdd=!1;concatenator=y.Buffer.concat;hashLeaves=!1;isBitcoinTree=!1;leaves=[];layers=[];sortLeaves=!1;sortPairs=!1;sort=!1;fillDefaultHash=null;complete=!1;constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(super(),r.complete){if(r.isBitcoinTree)throw Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash){if("function"==typeof r.fillDefaultHash)this.fillDefaultHash=r.fillDefaultHash;else if(y.Buffer.isBuffer(r.fillDefaultHash)||"string"==typeof r.fillDefaultHash)this.fillDefaultHash=(e,t)=>r.fillDefaultHash;else throw Error('method "fillDefaultHash" must be a function, Buffer, or string')}this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(t),this.processLeaves(e)}getOptions(){return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:this.fillDefaultHash?.toString()??null,duplicateOdd:this.duplicateOdd}}processLeaves(e){if(this.hashLeaves&&(e=e.map(this.hashFn)),this.leaves=e.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(y.Buffer.compare)),this.fillDefaultHash)for(let e=this.leaves.length;e<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));e++)this.leaves.push(this.bufferify(this.fillDefaultHash(e,this.hashFn)));this.createHashes(this.leaves)}createHashes(e){for(this.layers=[e];e.length>1;){let t=this.layers.length;this.layers.push([]);let r=this.complete&&1===t&&!Number.isInteger(Math.log2(e.length))?2*e.length-2**Math.ceil(Math.log2(e.length)):e.length;for(let a=0;a<e.length;a+=2){if(a>=r){this.layers[t].push(...e.slice(r));break}if(a+1===e.length&&e.length%2==1){let r=e[e.length-1],i=r;if(this.isBitcoinTree){i=this.hashFn(this.concatenator([b()(r),b()(r)])),i=b()(this.hashFn(i)),this.layers[t].push(i);continue}if(this.duplicateOdd);else{this.layers[t].push(e[a]);continue}}let i=e[a],n=a+1===e.length?i:e[a+1],s=null;s=this.isBitcoinTree?[b()(i),b()(n)]:[i,n],this.sortPairs&&s.sort(y.Buffer.compare);let o=this.hashFn(this.concatenator(s));this.isBitcoinTree&&(o=b()(this.hashFn(o))),this.layers[t].push(o)}e=this.layers[t]}}addLeaf(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(e=this.hashFn(e)),this.processLeaves(this.leaves.concat(e))}addLeaves(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(e=e.map(this.hashFn)),this.processLeaves(this.leaves.concat(e))}getLeaves(e){return Array.isArray(e)?(this.hashLeaves&&(e=e.map(this.hashFn),this.sortLeaves&&(e=e.sort(y.Buffer.compare))),this.leaves.filter(t=>-1!==this.bufferIndexOf(e,t,this.sortLeaves))):this.leaves}getLeaf(e){return e<0||e>this.leaves.length-1?y.Buffer.from([]):this.leaves[e]}getLeafIndex(e){e=this.bufferify(e);let t=this.getLeaves();for(let r=0;r<t.length;r++){let a=t[r];if(a.equals(e))return r}return -1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map(e=>this.bufferToHex(e))}static marshalLeaves(e){return JSON.stringify(e.map(e=>thirdweb_dev_merkletree_esm_MerkleTree.bufferToHex(e)),null,2)}static unmarshalLeaves(e){let t=null;if("string"==typeof e)t=JSON.parse(e);else if(e instanceof Object)t=e;else throw Error("Expected type of string or object");if(!t)return[];if(!Array.isArray(t))throw Error("Expected JSON string to be array");return t.map(thirdweb_dev_merkletree_esm_MerkleTree.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce((e,t)=>(Array.isArray(t)?e.push(t.map(e=>this.bufferToHex(e))):e.push(t),e),[])}getLayersFlat(){let e=this.layers.reduce((e,t)=>(Array.isArray(t)?e.unshift(...t):e.unshift(t),e),[]);return e.unshift(y.Buffer.from([0])),e}getHexLayersFlat(){return this.getLayersFlat().map(e=>this.bufferToHex(e))}getLayerCount(){return this.getLayers().length}getRoot(){return 0===this.layers.length?y.Buffer.from([]):this.layers[this.layers.length-1][0]||y.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(e,t){if(void 0===e)throw Error("leaf is required");e=this.bufferify(e);let r=[];if(!Number.isInteger(t)){t=-1;for(let r=0;r<this.leaves.length;r++)0===y.Buffer.compare(e,this.leaves[r])&&(t=r)}if(t<=-1)return[];for(let e=0;e<this.layers.length;e++){let a=this.layers[e],i=t%2,n=i?t-1:this.isBitcoinTree&&t===a.length-1&&e<this.layers.length-1?t:t+1;n<a.length&&r.push({position:i?"left":"right",data:a[n]}),t=t/2|0}return r}getHexProof(e,t){return this.getProof(e,t).map(e=>this.bufferToHex(e.data))}getProofs(){let e=[];return this.getProofsDFS(this.layers.length-1,0,[],e),e}getProofsDFS(e,t,r,a){let i=t%2;if(-1===e){i||a.push([...r].reverse());return}if(t>=this.layers[e].length)return;let n=this.layers[e],s=i?t-1:t+1,o=!1;s<n.length&&(o=!0,r.push({position:i?"left":"right",data:n[s]})),this.getProofsDFS(e-1,2*t,r,a),this.getProofsDFS(e-1,2*t+1,r,a),o&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map(e=>this.bufferToHex(e.data))}getPositionalHexProof(e,t){return this.getProof(e,t).map(e=>["left"===e.position?0:1,this.bufferToHex(e.data)])}getProofIndices(e,t){let r=2**t,a=new Set;for(let t of e){let e=r+t;for(;e>1;)a.add(1^e),e=e/2|0}let i=e.map(e=>r+e),n=Array.from(a).sort((e,t)=>e-t).reverse();a=i.concat(n);let s=new Set,o=[];for(let e of a)if(!s.has(e))for(o.push(e);e>1&&(s.add(e),s.has(1^e));)e=e/2|0;return o.filter(t=>!e.includes(t-r))}getProofIndicesForUnevenTree(e,t){let r=Math.ceil(Math.log2(t)),a=[];for(let e=0;e<r;e++){let r=t%2!=0;r&&a.push({index:e,leavesCount:t}),t=Math.ceil(t/2)}let i=[],n=e;for(let e=0;e<r;e++){let t=n.map(e=>e%2==0?e+1:e-1),r=t.filter(e=>!n.includes(e)),s=a.find(t=>{let{index:r}=t;return r===e});s&&n.includes(s.leavesCount-1)&&(r=r.slice(0,-1)),i.push(r),n=[...new Set(n.map(e=>e%2==0?e/2:e%2==0?(e+1)/2:(e-1)/2))]}return i}getMultiProof(e,t){this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),t||(t=e,e=this.getLayersFlat());let r=this.isUnevenTree();if(r&&t.every(Number.isInteger))return this.getMultiProofForUnevenTree(t);if(!t.every(Number.isInteger)){let e=t;this.sortPairs&&(e=e.sort(y.Buffer.compare));let r=e.map(e=>this.bufferIndexOf(this.leaves,e,this.sortLeaves)).sort((e,t)=>e===t?0:e>t?1:-1);if(!r.every(e=>-1!==e))throw Error("Element does not exist in Merkle tree");let a=[],i=[],n=[];for(let e=0;e<this.layers.length;e++){let t=this.layers[e];for(let e=0;e<r.length;e++){let s=r[e],o=this.getPairNode(t,s);a.push(t[s]),o&&i.push(o),n.push(s/2|0)}r=n.filter((e,t,r)=>r.indexOf(e)===t),n=[]}return i.filter(e=>!a.includes(e))}return this.getProofIndices(t,Math.log2(e.length/2|0)).map(t=>e[t])}getMultiProofForUnevenTree(e,t){t||(t=e,e=this.getLayers());let r=[],a=t;for(let t of e){let e=[];for(let r of a){if(r%2==0){let i=r+1;if(!a.includes(i)&&t[i]){e.push(t[i]);continue}}let i=r-1;if(!a.includes(i)&&t[i]){e.push(t[i]);continue}}r=r.concat(e);let i=new Set;for(let e of a){if(e%2==0){i.add(e/2);continue}if(e%2==0){i.add((e+1)/2);continue}i.add((e-1)/2)}a=Array.from(i)}return r}getHexMultiProof(e,t){return this.getMultiProof(e,t).map(e=>this.bufferToHex(e))}getProofFlags(e,t){let r;if(!Array.isArray(e)||e.length<=0)throw Error("Invalid Inputs!");if(!(r=e.every(Number.isInteger)?[...e].sort((e,t)=>e===t?0:e>t?1:-1):e.map(e=>this.bufferIndexOf(this.leaves,e,this.sortLeaves)).sort((e,t)=>e===t?0:e>t?1:-1)).every(e=>-1!==e))throw Error("Element does not exist in Merkle tree");let a=t.map(e=>this.bufferify(e)),i=[],n=[];for(let e=0;e<this.layers.length;e++){let t=this.layers[e];r=r.reduce((e,r)=>{let s=i.includes(t[r]);if(!s){let e=this.getPairNode(t,r),s=a.includes(t[r])||a.includes(e);e&&n.push(!s),i.push(t[r]),i.push(e)}return e.push(r/2|0),e},[])}return n}verify(e,t,r){let a=this.bufferify(t);if(r=this.bufferify(r),!Array.isArray(e)||!t||!r)return!1;for(let t=0;t<e.length;t++){let r=e[t],i=null,n=null;if("string"==typeof r)i=this.bufferify(r),n=!0;else if(Array.isArray(r))n=0===r[0],i=this.bufferify(r[1]);else if(y.Buffer.isBuffer(r))i=r,n=!0;else if(r instanceof Object)i=this.bufferify(r.data),n="left"===r.position;else throw Error("Expected node to be of type string or object");let s=[];this.isBitcoinTree?(s.push(b()(a)),s[n?"unshift":"push"](b()(i)),a=this.hashFn(this.concatenator(s)),a=b()(this.hashFn(a))):(this.sortPairs?-1===y.Buffer.compare(a,i)?s.push(a,i):s.push(i,a):(s.push(a),s[n?"unshift":"push"](i)),a=this.hashFn(this.concatenator(s)))}return 0===y.Buffer.compare(a,r)}verifyMultiProof(e,t,r,a,i){let n=this.isUnevenTree();if(n)return this.verifyMultiProofForUnevenTree(e,t,r,a,i);let s=Math.ceil(Math.log2(a));e=this.bufferify(e),r=r.map(e=>this.bufferify(e)),i=i.map(e=>this.bufferify(e));let o={};for(let[e,a]of this.zip(t,r))o[2**s+e]=a;for(let[e,r]of this.zip(this.getProofIndices(t,s),i))o[e]=r;let l=Object.keys(o).map(e=>Number(e)).sort((e,t)=>e-t);l=l.slice(0,l.length-1);let u=0;for(;u<l.length;){let e=l[u];if(e>=2&&({}).hasOwnProperty.call(o,1^e)){let t=[o[e-e%2],o[e-e%2+1]];this.sortPairs&&(t=t.sort(y.Buffer.compare));let r=t[1]?this.hashFn(this.concatenator(t)):t[0];o[e/2|0]=r,l.push(e/2|0)}u+=1}return!t.length||({}).hasOwnProperty.call(o,1)&&o[1].equals(e)}verifyMultiProofWithFlags(e,t,r,a){e=this.bufferify(e),t=t.map(this.bufferify),r=r.map(this.bufferify);let i=t.length,n=a.length,s=[],o=0,l=0,u=0;for(let e=0;e<n;e++){let n=a[e]?o<i?t[o++]:s[l++]:r[u++],f=o<i?t[o++]:s[l++],c=[n,f].sort(y.Buffer.compare);s[e]=this.hashFn(this.concatenator(c))}return 0===y.Buffer.compare(s[n-1],e)}verifyMultiProofForUnevenTree(e,t,r,a,i){e=this.bufferify(e),r=r.map(e=>this.bufferify(e)),i=i.map(e=>this.bufferify(e));let n=this.calculateRootForUnevenTree(t,r,a,i);return e.equals(n)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){let e=this.getLayers().map(e=>e.map(e=>this.bufferToHex(e,!1))),t=[];for(let r=0;r<e.length;r++){let a=[];for(let i=0;i<e[r].length;i++){let n={[e[r][i]]:null};if(t.length){n[e[r][i]]={};let a=t.shift(),s=Object.keys(a)[0];if(n[e[r][i]][s]=a[s],t.length){let a=t.shift(),s=Object.keys(a)[0];n[e[r][i]][s]=a[s]}}a.push(n)}t.push(...a)}return t[0]}resetTree(){this.leaves=[],this.layers=[]}getPairNode(e,t){let r=t%2==0?t+1:t-1;return r<e.length?e[r]:null}toTreeString(){let e=this.getLayersAsObject();return(0,w.asTree)(e,!0,!1)}toString(){return this.toTreeString()}isUnevenTree(e){let t=e?.length||this.getDepth();return!this.isPowOf2(t)}isPowOf2(e){return e&&!(e&e-1)}calculateRootForUnevenTree(e,t,r,a){let i=this.zip(e,t).sort((e,t)=>{let[r]=e,[a]=t;return r-a}),n=i.map(e=>{let[t]=e;return t}),s=this.getProofIndicesForUnevenTree(n,r),o=0,l=[];for(let e=0;e<s.length;e++){let t=s[e],r=o;o+=t.length,l[e]=this.zip(t,a.slice(r,o))}let u=[i];for(let e=0;e<l.length;e++){let t=l[e].concat(u[e]).sort((e,t)=>{let[r]=e,[a]=t;return r-a}).map(e=>{let[,t]=e;return t}),r=u[e].map(e=>{let[t]=e;return t}),a=[...new Set(r.map(e=>e%2==0?e/2:e%2==0?(e+1)/2:(e-1)/2))],i=[];for(let e=0;e<a.length;e++){let r=a[e],n=t[2*e],s=t[2*e+1],o=s?this.hashFn(this.concatenator([n,s])):n;i.push([r,o])}u.push(i)}return u[u.length-1][0][1]}};var T=r(45997),S=r(1604),x=r(94049),k=r(57632),B=r(48764).Buffer;function abstractContractModelToLegacy(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot,pricePerToken:e.pricePerToken,currency:e.currency,quantityLimitPerTransaction:e.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:e.waitTimeInSecondsBetweenClaims||0}}function abstractContractModelToNew(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot,pricePerToken:e.pricePerToken,currency:e.currency,quantityLimitPerWallet:e.maxClaimablePerWallet,metadata:e.metadata||""}}function convertQuantityToBigNumber(e,t){return"unlimited"===e?n.Bz:s.parseUnits(e,t)}async function parseSnapshotInputs(e){let t=Array.from({length:Math.ceil(e.length/25e3)},(t,r)=>e.slice(25e3*r,25e3*r+25e3)),r=[],a=await Promise.all(t.map(e=>d.bK.parseAsync(e)));for(let e of a)r.push(...e);return r}let C=((a={})[a.V1=1]="V1",a[a.V2=2]="V2",a);let ShardedMerkleTree=class ShardedMerkleTree{constructor(e,t,r,a,i){this.storage=e,this.shardNybbles=a,this.baseUri=t,this.originalEntriesUri=r,this.tokenDecimals=i,this.shards={},this.trees={}}static async fromUri(e,t){try{let r=await t.downloadJSON(e);if(r.isShardedMerkleTree)return ShardedMerkleTree.fromShardedMerkleTreeInfo(r,t)}catch(e){return}}static async fromShardedMerkleTreeInfo(e,t){return new ShardedMerkleTree(t,e.baseUri,e.originalEntriesUri,e.shardNybbles,e.tokenDecimals)}static hashEntry(e,t,r,a){switch(a){case C.V1:return o.keccak256(["address","uint256"],[e.address,convertQuantityToBigNumber(e.maxClaimable,t)]);case C.V2:return o.keccak256(["address","uint256","uint256","address"],[e.address,convertQuantityToBigNumber(e.maxClaimable,t),convertQuantityToBigNumber(e.price||"unlimited",r),e.currencyAddress||l.d])}}static async fetchAndCacheDecimals(e,t,r){if(!r)return 18;let a=e[r];if(void 0===a){let i=await (0,m.f)(t,r);a=i.decimals,e[r]=a}return a}static async buildAndUpload(e,t,r,a,i){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2,s=await parseSnapshotInputs(e),o={};for(let e of s){let t=e.address.slice(2,2+n).toLowerCase();void 0===o[t]&&(o[t]=[]),o[t].push(e)}let l={},f=await Promise.all(Object.entries(o).map(async e=>{let[a,n]=e;return[a,new thirdweb_dev_merkletree_esm_MerkleTree(await Promise.all(n.map(async e=>{let a=await ShardedMerkleTree.fetchAndCacheDecimals(l,r,e.currencyAddress);return ShardedMerkleTree.hashEntry(e,t,a,i)})),u.keccak256,{sort:!0}).getHexRoot()]})),c=Object.fromEntries(f),h=new thirdweb_dev_merkletree_esm_MerkleTree(Object.values(c),u.keccak256,{sort:!0}),d=[];for(let[e,t]of Object.entries(o)){let r={proofs:h.getProof(c[e]).map(e=>"0x"+e.data.toString("hex")),entries:t};d.push({data:JSON.stringify(r),name:`${e}.json`})}let m=await a.uploadBatch(d),p=m[0].slice(0,m[0].lastIndexOf("/")),y=await a.upload(s),g={merkleRoot:h.getHexRoot(),baseUri:p,originalEntriesUri:y,shardNybbles:n,tokenDecimals:t,isShardedMerkleTree:!0},b=await a.upload(g);return{shardedMerkleInfo:g,uri:b}}async getProof(e,t,r){let a=e.slice(2,2+this.shardNybbles).toLowerCase(),i=this.shards[a],n={};if(void 0===i)try{let e=this.baseUri.endsWith("/")?this.baseUri:`${this.baseUri}/`;i=this.shards[a]=await this.storage.downloadJSON(`${e}${a}.json`);let s=await Promise.all(i.entries.map(async e=>{let a=await ShardedMerkleTree.fetchAndCacheDecimals(n,t,e.currencyAddress);return ShardedMerkleTree.hashEntry(e,this.tokenDecimals,a,r)}));this.trees[a]=new thirdweb_dev_merkletree_esm_MerkleTree(s,u.keccak256,{sort:!0})}catch(e){return null}let s=i.entries.find(t=>t.address.toLowerCase()===e.toLowerCase());if(!s)return null;let o=await ShardedMerkleTree.fetchAndCacheDecimals(n,t,s.currencyAddress),l=ShardedMerkleTree.hashEntry(s,this.tokenDecimals,o,r),f=this.trees[a].getProof(l).map(e=>"0x"+e.data.toString("hex"));return d.bL.parseAsync({...s,proof:f.concat(i.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(e){return console.warn("Could not fetch original snapshot entries",e),[]}}};async function fetchSnapshotEntryForAddress(e,t,r,a,i,n){if(!r)return null;let s=r[t];if(s){let r=await i.downloadJSON(s);if(r.isShardedMerkleTree&&r.merkleRoot===t){let t=await ShardedMerkleTree.fromShardedMerkleTreeInfo(r,i);return await t.getProof(e,a,n)}let o=await d.bM.parseAsync(r);if(t===o.merkleRoot)return o.claims.find(t=>t.address.toLowerCase()===e.toLowerCase())||null}return null}function legacyContractModelToAbstract(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot.toString(),pricePerToken:e.pricePerToken,currency:e.currency,maxClaimablePerWallet:e.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:e.waitTimeInSecondsBetweenClaims}}function newContractModelToAbstract(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot.toString(),pricePerToken:e.pricePerToken,currency:e.currency,maxClaimablePerWallet:e.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:e.metadata}}async function approveErc20Allowance(e,t,a,i,n){let o=e.getSigner(),l=e.getProvider(),u=(await Promise.resolve().then(r.t.bind(r,49242,19))).default,c=new d.cq(o||l,t,u,e.options,e.storage),h=await e.getSignerAddress(),m=e.address,p=await c.read("allowance",[h,m]),y=f.O$.from(a).mul(f.O$.from(i)).div(s.parseUnits("1",n));p.lt(y)&&await c.sendTransaction("approve",[m,p.add(y)])}async function prepareClaim(e,t,r,a,i,o,u,h,d){let y=convertQuantityToBigNumber(r.maxClaimablePerWallet,i),g=[c.hexZeroPad([0],32)],b=r.price,w=r.currencyAddress;try{if(!r.merkleRootHash.toString().startsWith(l.d)){let t=await fetchSnapshotEntryForAddress(e,r.merkleRootHash.toString(),await a(),o.getProvider(),u,d);if(t)g=t.proof,y="unlimited"===t.maxClaimable?n.Bz:s.parseUnits(t.maxClaimable,i),b=void 0===t.price||"unlimited"===t.price?n.Bz:await (0,p.n)(o.getProvider(),t.price,t.currencyAddress||l.d),w=t.currencyAddress||l.d;else if(d===C.V1)throw Error("No claim found for this address")}}catch(e){if(e?.message==="No claim found for this address")throw e;console.warn("failed to check claim condition merkle root hash, continuing anyways",e)}let v=await o.getCallOverrides()||{},T=b.toString()!==n.Bz.toString()?b:r.price,S=w!==l.d?w:r.currencyAddress;return T.gt(0)&&((0,m.i)(S)?v.value=f.O$.from(T).mul(t).div(s.parseUnits("1",i)):h&&await approveErc20Allowance(o,S,T,t,i)),{overrides:v,proofs:g,maxClaimable:y,price:T,currencyAddress:S,priceInProof:b,currencyAddressInProof:w}}let P=S.z.object({name:S.z.string(),symbol:S.z.string(),decimals:S.z.number()}),A=P.extend({value:d.b5,displayValue:S.z.string()}),M=S.z.object({name:S.z.string().optional()}).catchall(S.z.unknown()),L=S.z.object({startTime:T.S,currencyAddress:S.z.string().default(d.aV),price:d.cv.default(0),maxClaimableSupply:d.cz,maxClaimablePerWallet:d.cz,waitInSeconds:d.b6.default(0),merkleRootHash:d.cA.default(c.hexZeroPad([0],32)),snapshot:S.z.optional(d.bK).nullable(),metadata:M.optional()}),O=S.z.array(L),N=L.extend({availableSupply:d.cz,currentMintSupply:d.cz,currencyMetadata:A.default({value:f.O$.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:d.b5,waitInSeconds:d.b5,startTime:d.b5.transform(e=>new Date(1e3*e.toNumber())),snapshot:d.bK.optional().nullable()});async function createSnapshot(e,t,r,a,i){let n=await parseSnapshotInputs(e),s=n.map(e=>e.address),o=new Set(s).size<s.length;if(o)throw new d.s;let l=await ShardedMerkleTree.buildAndUpload(n,t,r,a,i);return{merkleRoot:l.shardedMerkleInfo.merkleRoot,snapshotUri:l.uri}}async function processSnapshotData(e,t,r,a,i){let n=[],s=await Promise.all(e.map(async e=>{if(e.snapshot&&e.snapshot.length>0){let s=await createSnapshot(e.snapshot,t,r,a,i);n.push(s),e.merkleRootHash=s.merkleRoot}else e.merkleRootHash=c.hexZeroPad([0],32);return e}));return{inputsWithSnapshots:s,snapshotInfos:n}}async function convertToContractModel(e,t,r,a){let i;let n=e.currencyAddress===l.d?d.aV:e.currencyAddress,s=convertQuantityToBigNumber(e.maxClaimableSupply,t),o=convertQuantityToBigNumber(e.maxClaimablePerWallet,t);return e.metadata&&(i="string"==typeof e.metadata?e.metadata:await a.upload(e.metadata)),{startTimestamp:e.startTime,maxClaimableSupply:s,supplyClaimed:0,maxClaimablePerWallet:o,pricePerToken:await (0,p.n)(r,e.price,n),currency:n,merkleRoot:e.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:e.waitInSeconds||0,metadata:i}}async function processClaimConditionInputs(e,t,r,a,i){let{inputsWithSnapshots:n,snapshotInfos:s}=await processSnapshotData(e,t,r,a,i),o=await O.parseAsync(n),l=(await Promise.all(o.map(e=>convertToContractModel(e,t,r,a)))).sort((e,t)=>(function(e,t){let r=f.O$.from(e),a=f.O$.from(t);return r.eq(a)?0:r.gt(a)?1:-1})(e.startTimestamp,t.startTimestamp));return{snapshotInfos:s,sortedConditions:l}}async function fetchSnapshot(e,t,r){if(!t)return null;let a=t[e];if(a){let t=await r.downloadJSON(a);if(t.isShardedMerkleTree&&t.merkleRoot===e){let e=await ShardedMerkleTree.fromUri(a,r);return e?.getAllEntries()||null}{let r=await d.bM.parseAsync(t);if(e===r.merkleRoot)return r.claims.map(e=>({address:e.address,maxClaimable:e.maxClaimable,price:e.price,currencyAddress:e.currencyAddress}))}}return null}function convertToReadableQuantity(e,t){return e.toString()===n.Bz.toString()?"unlimited":s.formatUnits(e,t)}async function transformResultToClaimCondition(e,t,r,a,i,n){let s;let o=await (0,m.a)(r,e.currency,e.pricePerToken),l=convertToReadableQuantity(e.maxClaimableSupply,t),u=convertToReadableQuantity(e.maxClaimablePerWallet,t),c=convertToReadableQuantity(f.O$.from(e.maxClaimableSupply).sub(e.supplyClaimed),t),h=convertToReadableQuantity(e.supplyClaimed,t);return e.metadata&&(s=await i.downloadJSON(e.metadata)),N.parseAsync({startTime:e.startTimestamp,maxClaimableSupply:l,maxClaimablePerWallet:u,currentMintSupply:h,availableSupply:c,waitInSeconds:e.waitTimeInSecondsBetweenClaims?.toString(),price:f.O$.from(e.pricePerToken),currency:e.currency,currencyAddress:e.currency,currencyMetadata:o,merkleRootHash:e.merkleRoot,snapshot:n?await fetchSnapshot(e.merkleRoot,a,i):void 0,metadata:s})}async function updateExistingClaimConditions(e,t,r){if(e>=r.length)throw Error(`Index out of bounds - got index: ${e} with ${r.length} conditions`);let a=r[e].currencyMetadata.decimals,i=r[e].price,n=s.formatUnits(i,a),o=await L.parseAsync({...r[e],price:n,...t}),l=await N.parseAsync({...o,price:i});return r.map((t,r)=>{let i;i=r===e?l:t;let n=s.formatUnits(i.price,a);return{...i,price:n}})}let E=((i={}).NotEnoughSupply="There is not enough supply to claim.",i.AddressNotAllowed="This address is not on the allowlist.",i.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",i.ClaimPhaseNotStarted="Claim phase has not started yet.",i.AlreadyClaimed="You have already claimed the token.",i.WrongPriceOrCurrency="Incorrect price or currency.",i.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",i.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",i.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",i.NoClaimConditionSet="There is no claim condition set.",i.NoWallet="No wallet connected.",i.Unknown="No claim conditions found.",i);function resolveOrGenerateId(e){if(void 0!==e)return c.hexlify(e);{let e=B.alloc(16);return(0,k.Z)({},e),c.hexlify(h.Y0(e.toString("hex")))}}let z=S.z.object({to:d.b9.refine(e=>e.toLowerCase()!==l.d,{message:"Cannot create payload to mint to zero address"}),price:d.cv.default(0),currencyAddress:d.b8.default(d.aV),mintStartTime:T.S,mintEndTime:T.E,uid:S.z.string().optional().transform(e=>resolveOrGenerateId(e)),primarySaleRecipient:d.b9.default(l.d)}),H=z.extend({quantity:d.cv}),I=H.extend({mintStartTime:d.b5,mintEndTime:d.b5}),R=z.extend({metadata:x.N,royaltyRecipient:S.z.string().default(l.d),royaltyBps:d.cB.default(0)}),F=R.extend({metadata:x.N.default(""),uri:S.z.string(),royaltyBps:d.b5,mintStartTime:d.b5,mintEndTime:d.b5}),U=R.extend({metadata:x.N.default(""),quantity:d.b6}),D=U.extend({tokenId:d.b6}),_=F.extend({tokenId:d.b5,quantity:d.b5}),j=R.extend({metadata:x.N.default(""),quantity:d.b5.default(1)}),q=F.extend({quantity:d.b5.default(1)}),W=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],$=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],V=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],Q=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}]},56351:function(e,t,r){var a=r(48764).Buffer;e.exports=function(e){for(var t=new a(e.length),r=0,i=e.length-1;r<=i;++r,--i)t[r]=e[i],t[i]=e[r];return t}},99269:function(e){e.exports=function(){function growBranch(e,t,r,a,i,n,s){var o,l,u,f="",c=0,h=a.slice(0);if(h.push([t,r])&&a.length>0&&(a.forEach(function(e,r){r>0&&(f+=(e[1]?" ":"│")+"  "),u||e[0]!==t||(u=!0)}),f+=(o=r?"└":"├",e?o+="─ ":o+="──┐",o+e),i&&("object"!=typeof t||t instanceof Date)&&(f+=": "+t),u&&(f+=" (circular ref.)"),s(f)),!u&&"object"==typeof t){var d=function(e,t){var r=[];for(var a in e)e.hasOwnProperty(a)&&(!t||"function"!=typeof e[a])&&r.push(a);return r}(t,n);d.forEach(function(e){l=++c===d.length,growBranch(e,t[e],l,h,i,n,s)})}}var e={};return e.asLines=function(e,t,r,a){growBranch(".",e,!1,[],t,"function"!=typeof r&&r,a||r)},e.asTree=function(e,t,r){var a="";return growBranch(".",e,!1,[],t,r,function(e){a+=e+"\n"}),a},e}()}}]);