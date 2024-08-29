(globalThis.webpackChunk_snx_v3_governance=globalThis.webpackChunk_snx_v3_governance||[]).push([[4791,1492,9909,4247,9761],{69725:(e,r,t)=>{"use strict";var n=t(48834).Buffer,i=new(0,t(87554).ec)("secp256k1"),o=t.g.crypto||t.g.msCrypto||{},a=o.subtle||o.webkitSubtle,c=t(5634);const u=n.from("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","hex"),s=n.alloc(32,0);function f(e,r){if(!e)throw new Error(r||"Assertion failed")}function l(e){return r=e,!(!n.isBuffer(r)||32!==r.length)&&(e.compare(s)>0&&e.compare(u)<0);var r}function h(e){var r=new Uint8Array(e);return void 0===o.getRandomValues?n.from(c.randomBytes(e)):(o.getRandomValues(r),n.from(r))}function y(e){return new Promise((function(r){var t=c.createHash("sha512").update(e).digest();r(new Uint8Array(t))}))}function p(e){return function(r,t,i){return new Promise((function(o){if(a){return a.importKey("raw",t,{name:"AES-CBC"},!1,[e]).then((function(t){var n={name:"AES-CBC",iv:r};return a[e](n,t,i)})).then((function(e){o(n.from(new Uint8Array(e)))}))}if("encrypt"===e){var u=c.createCipheriv("aes-256-cbc",t,r);let e=u.update(i),a=u.final();o(n.concat([e,a]))}else if("decrypt"===e){var s=c.createDecipheriv("aes-256-cbc",t,r);let e=s.update(i),a=s.final();o(n.concat([e,a]))}}))}}var d=p("encrypt"),w=p("decrypt");var b=function(e){return f(32===e.length,"Bad private key"),f(l(e),"Bad private key"),n.from(i.keyFromPrivate(e).getPublic("arr"))};var g=function(e,r){return new Promise((function(t){f(n.isBuffer(e),"Bad private key"),f(n.isBuffer(r),"Bad public key"),f(32===e.length,"Bad private key"),f(l(e),"Bad private key"),f(65===r.length||33===r.length,"Bad public key"),65===r.length&&f(4===r[0],"Bad public key"),33===r.length&&f(2===r[0]||3===r[0],"Bad public key");var o=i.keyFromPrivate(e),a=i.keyFromPublic(r),c=o.derive(a.getPublic());t(n.from(c.toArray()))}))};r.HI=function(e,r,t){var i,o,a,u;return t=t||{},new Promise((function(r){for(var n=t.ephemPrivateKey||h(32);!l(n);)n=t.ephemPrivateKey||h(32);o=b(n),r(g(n,e))})).then((function(e){return y(e)})).then((function(e){i=t.iv||h(16);var n=e.slice(0,32);return u=e.slice(32),d(i,n,r)})).then((function(e){a=e;var r=n.concat([i,o,a]);return function(e,r){return new Promise((function(t){var i=c.createHmac("sha256",n.from(e));i.update(r),t(i.digest())}))}(u,r)})).then((function(e){return{iv:i,ephemPublicKey:o,ciphertext:a,mac:e}}))},r.pe=function(e,r){var t;return g(e,r.ephemPublicKey).then((function(e){return y(e)})).then((function(e){t=e.slice(0,32);var i,o,a,u=e.slice(32),s=n.concat([r.iv,r.ephemPublicKey,r.ciphertext]);return i=u,o=s,a=r.mac,new Promise((function(e){var r=c.createHmac("sha256",n.from(i));r.update(o),e(function(e,r){if(e.length!==r.length)return!1;for(var t=0,n=0;n<e.length;n++)t|=e[n]^r[n];return 0===t}(r.digest(),a))}))})).then((function(e){return f(e,"Bad MAC"),w(r.iv,t,r.ciphertext)})).then((function(e){return n.from(new Uint8Array(e))}))}},44089:(e,r,t)=>{"use strict";t.r(r),t.d(r,{calculateContractAddress:()=>D,cipher:()=>o,createIdentity:()=>b,decryptWithPrivateKey:()=>N,default:()=>ne,encryptWithPublicKey:()=>z,hash:()=>a,hex:()=>c,publicKey:()=>i,publicKeyByPrivateKey:()=>R,recover:()=>V,recoverPublicKey:()=>L,sign:()=>M,signTransaction:()=>H,txDataByCompiled:()=>q,util:()=>n,vrs:()=>u});var n={};t.r(n),t.d(n,{addLeading0x:()=>x,hexToUnit8Array:()=>A,removeLeading0x:()=>m,uint8ArrayToHex:()=>k});var i={};t.r(i),t.d(i,{compress:()=>E,decompress:()=>P,toAddress:()=>S});var o={};t.r(o),t.d(o,{parse:()=>U,stringify:()=>T});var a={};t.r(a),t.d(a,{SIGN_PREFIX:()=>J,keccak256:()=>G});var c={};t.r(c),t.d(c,{compress:()=>Q,decompress:()=>ee});var u={};t.r(u),t.d(u,{fromString:()=>re,toString:()=>te});var s=t(59256),f=t(67640),l=t(42366),h=t(4358),y=t(47144),p=t(48834).Buffer,d=128,w=s.keccak256;function b(e){var r=function(e){if(e){if(!p.isBuffer(e))throw new Error("EthCrypto.createPrivateKey(): given entropy is no Buffer");if(p.byteLength(e,"utf8")<d)throw new Error("EthCrypto.createPrivateKey(): Entropy-size must be at least "+d);return w(e)}var r=w(f.concat([l.O(32),l.O(32)])),t=f.concat([f.concat([l.O(32),r]),l.O(32)]);return w(t)}(e),t=new h.Wallet(r);return{privateKey:r,publicKey:(0,y.stripHexPrefix)(t.publicKey).slice(2),address:t.address}}var g=t(38460),v=t(48834).Buffer;function m(e){return e.startsWith("0x")?e.substring(2):e}function x(e){return e.startsWith("0x")?e:"0x"+e}function k(e){return v.from(e).toString("hex")}function A(e){return new Uint8Array(v.from(e,"hex"))}var K=t(48834).Buffer;function E(e){return 64===K.from(e,"hex").length&&(e="04"+e),k((0,g.publicKeyConvert)(A(e),!0))}function P(e){64===K.from(e,"hex").length&&(e="04"+e);var r=k((0,g.publicKeyConvert)(A(e),!1));return r=r.substring(2)}function S(e){e=P(e);var r=(0,y.pubToAddress)((0,y.toBuffer)(x(e)));return(0,y.toChecksumAddress)(x(r.toString("hex")))}var B=t(69725),C=t(48834).Buffer;function T(e){if("string"==typeof e)return e;var r=E(e.ephemPublicKey);return C.concat([C.from(e.iv,"hex"),C.from(r,"hex"),C.from(e.mac,"hex"),C.from(e.ciphertext,"hex")]).toString("hex")}function U(e){if("string"!=typeof e)return e;var r=C.from(e,"hex"),t={iv:r.toString("hex",0,16),ephemPublicKey:r.toString("hex",16,49),mac:r.toString("hex",49,81),ciphertext:r.toString("hex",81,r.length)};return t.ephemPublicKey="04"+P(t.ephemPublicKey),t}var I=t(48834).Buffer;function N(e,r){r=U(r);var t=m(e),n={iv:I.from(r.iv,"hex"),ephemPublicKey:I.from(r.ephemPublicKey,"hex"),ciphertext:I.from(r.ciphertext,"hex"),mac:I.from(r.mac,"hex")};return(0,B.pe)(I.from(t,"hex"),n).then((function(e){return e.toString()}))}var O=t(48834).Buffer;function z(e,r,t){var n="04"+(e=P(e));return(0,B.HI)(O.from(n,"hex"),O.from(r),t||{}).then((function(e){return{iv:e.iv.toString("hex"),ephemPublicKey:e.ephemPublicKey.toString("hex"),ciphertext:e.ciphertext.toString("hex"),mac:e.mac.toString("hex")}}))}function R(e){return e=x(e),(0,y.privateToPublic)((0,y.toBuffer)(e)).toString("hex")}function L(e,r){var t=(e=m(e)).substring(0,e.length-2),n="1c"===e.slice(-2)?1:0,i=k((0,g.ecdsaRecover)(A(t),n,A(m(r)),!1));return i=i.slice(2)}function V(e,r){return S(L(e,r))}var Z=t(48834).Buffer;function M(e,r){if(66!==(r=x(r)).length)throw new Error("EthCrypto.sign(): Can only sign hashes, given: "+r);var t=(0,g.ecdsaSign)(new Uint8Array(Z.from(m(r),"hex")),new Uint8Array(Z.from(m(e),"hex"))),n=1===t.recid?"1c":"1b";return"0x"+Z.from(t.signature).toString("hex")+n}var j=t(83498),F=t(48834).Buffer;function H(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(S(R(r))!=e.from)throw new Error("EthCrypto.signTransaction(): rawTx.from does not match the address of the privateKey");var n=F.from(r.replace(/^.{2}/g,""),"hex");return j.Transaction.fromTxData(e,t).sign(n).serialize().toString("hex")}function W(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return W(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?W(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=t(50986);function q(e,r,t){"string"==typeof e&&(e=JSON.parse(e));var n=new $.lV(e,"0x"+r);return n.getDeployTransaction.apply(n,_(t)).data}function D(e,r){var t=(0,y.generateAddress)((0,y.toBuffer)(x(e)),(0,y.toBuffer)(r)).toString("hex");return(0,y.toChecksumAddress)(x(t))}var X=t(41731);function G(e){var r=[],t=[];return Array.isArray(e)?e.forEach((function(e){r.push(e.type),t.push(e.value)})):(r.push("string"),t.push(e)),X.keccak256(r,t)}var J="Ethereum Signed Message:\n32",Y=t(48834).Buffer;function Q(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=m(e),!0===r)return Y.from(e,"hex").toString("base64");for(var t="";e.length%4!=0;)e="0"+e;for(var n=0;n<e.length;n+=4)t+=String.fromCharCode(parseInt(e.substring(n,n+4),16));return t}function ee(e){if(!0===(arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return x(Y.from(e,"base64").toString("hex"));for(var r="",t=0;t<e.length;t++)r+=((0==t?"":"000")+e.charCodeAt(t).toString(16)).slice(-4);return x(r=r.toLowerCase())}function re(e){var r=f.splitSignature(e);return{v:"0x".concat(r.v.toString(16)),r:r.r,s:r.s}}function te(e){return f.joinSignature(e)}const ne={createIdentity:b,publicKey:i,decryptWithPrivateKey:N,encryptWithPublicKey:z,cipher:o,publicKeyByPrivateKey:R,recover:V,recoverPublicKey:L,sign:M,signTransaction:H,txDataByCompiled:q,calculateContractAddress:D,hash:a,hex:c,vrs:u,util:n}},38460:(e,r,t)=>{e.exports=t(21007)(t(69161))},69161:(e,r,t)=>{const n=new(0,t(87554).ec)("secp256k1"),i=n.curve,o=i.n.constructor;function a(e){const r=e[0];switch(r){case 2:case 3:return 33!==e.length?null:function(e,r){let t=new o(r);if(t.cmp(i.p)>=0)return null;t=t.toRed(i.red);let a=t.redSqr().redIMul(t).redIAdd(i.b).redSqrt();return 3===e!==a.isOdd()&&(a=a.redNeg()),n.keyPair({pub:{x:t,y:a}})}(r,e.subarray(1,33));case 4:case 6:case 7:return 65!==e.length?null:function(e,r,t){let a=new o(r),c=new o(t);if(a.cmp(i.p)>=0||c.cmp(i.p)>=0)return null;if(a=a.toRed(i.red),c=c.toRed(i.red),(6===e||7===e)&&c.isOdd()!==(7===e))return null;const u=a.redSqr().redIMul(a);return c.redSqr().redISub(u.redIAdd(i.b)).isZero()?n.keyPair({pub:{x:a,y:c}}):null}(r,e.subarray(1,33),e.subarray(33,65));default:return null}}function c(e,r){const t=r.encode(null,33===e.length);for(let r=0;r<e.length;++r)e[r]=t[r]}e.exports={contextRandomize:()=>0,privateKeyVerify(e){const r=new o(e);return r.cmp(i.n)<0&&!r.isZero()?0:1},privateKeyNegate(e){const r=new o(e),t=i.n.sub(r).umod(i.n).toArrayLike(Uint8Array,"be",32);return e.set(t),0},privateKeyTweakAdd(e,r){const t=new o(r);if(t.cmp(i.n)>=0)return 1;if(t.iadd(new o(e)),t.cmp(i.n)>=0&&t.isub(i.n),t.isZero())return 1;const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},privateKeyTweakMul(e,r){let t=new o(r);if(t.cmp(i.n)>=0||t.isZero())return 1;t.imul(new o(e)),t.cmp(i.n)>=0&&(t=t.umod(i.n));const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},publicKeyVerify:e=>null===a(e)?1:0,publicKeyCreate(e,r){const t=new o(r);if(t.cmp(i.n)>=0||t.isZero())return 1;return c(e,n.keyFromPrivate(r).getPublic()),0},publicKeyConvert(e,r){const t=a(r);if(null===t)return 1;return c(e,t.getPublic()),0},publicKeyNegate(e,r){const t=a(r);if(null===t)return 1;const n=t.getPublic();return n.y=n.y.redNeg(),c(e,n),0},publicKeyCombine(e,r){const t=new Array(r.length);for(let e=0;e<r.length;++e)if(t[e]=a(r[e]),null===t[e])return 1;let n=t[0].getPublic();for(let e=1;e<t.length;++e)n=n.add(t[e].pub);return n.isInfinity()?2:(c(e,n),0)},publicKeyTweakAdd(e,r,t){const n=a(r);if(null===n)return 1;if((t=new o(t)).cmp(i.n)>=0)return 2;const u=n.getPublic().add(i.g.mul(t));return u.isInfinity()?2:(c(e,u),0)},publicKeyTweakMul(e,r,t){const n=a(r);if(null===n)return 1;if((t=new o(t)).cmp(i.n)>=0||t.isZero())return 2;return c(e,n.getPublic().mul(t)),0},signatureNormalize(e){const r=new o(e.subarray(0,32)),t=new o(e.subarray(32,64));return r.cmp(i.n)>=0||t.cmp(i.n)>=0?1:(1===t.cmp(n.nh)&&e.set(i.n.sub(t).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport(e,r){const t=r.subarray(0,32),n=r.subarray(32,64);if(new o(t).cmp(i.n)>=0)return 1;if(new o(n).cmp(i.n)>=0)return 1;const{output:a}=e;let c=a.subarray(4,37);c[0]=0,c.set(t,1);let u=33,s=0;for(;u>1&&0===c[s]&&!(128&c[s+1]);--u,++s);if(c=c.subarray(s),128&c[0])return 1;if(u>1&&0===c[0]&&!(128&c[1]))return 1;let f=a.subarray(39,72);f[0]=0,f.set(n,1);let l=33,h=0;for(;l>1&&0===f[h]&&!(128&f[h+1]);--l,++h);return f=f.subarray(h),128&f[0]||l>1&&0===f[0]&&!(128&f[1])?1:(e.outputlen=6+u+l,a[0]=48,a[1]=e.outputlen-2,a[2]=2,a[3]=c.length,a.set(c,4),a[4+u]=2,a[5+u]=f.length,a.set(f,6+u),0)},signatureImport(e,r){if(r.length<8)return 1;if(r.length>72)return 1;if(48!==r[0])return 1;if(r[1]!==r.length-2)return 1;if(2!==r[2])return 1;const t=r[3];if(0===t)return 1;if(5+t>=r.length)return 1;if(2!==r[4+t])return 1;const n=r[5+t];if(0===n)return 1;if(6+t+n!==r.length)return 1;if(128&r[4])return 1;if(t>1&&0===r[4]&&!(128&r[5]))return 1;if(128&r[t+6])return 1;if(n>1&&0===r[t+6]&&!(128&r[t+7]))return 1;let a=r.subarray(4,4+t);if(33===a.length&&0===a[0]&&(a=a.subarray(1)),a.length>32)return 1;let c=r.subarray(6+t);if(33===c.length&&0===c[0]&&(c=c.slice(1)),c.length>32)throw new Error("S length is too long");let u=new o(a);u.cmp(i.n)>=0&&(u=new o(0));let s=new o(r.subarray(6+t));return s.cmp(i.n)>=0&&(s=new o(0)),e.set(u.toArrayLike(Uint8Array,"be",32),0),e.set(s.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign(e,r,t,a,c){if(c){const e=c;c=n=>{const i=e(r,t,null,a,n);if(!(i instanceof Uint8Array&&32===i.length))throw new Error("This is the way");return new o(i)}}const u=new o(t);if(u.cmp(i.n)>=0||u.isZero())return 1;let s;try{s=n.sign(r,t,{canonical:!0,k:c,pers:a})}catch(e){return 1}return e.signature.set(s.r.toArrayLike(Uint8Array,"be",32),0),e.signature.set(s.s.toArrayLike(Uint8Array,"be",32),32),e.recid=s.recoveryParam,0},ecdsaVerify(e,r,t){const c={r:e.subarray(0,32),s:e.subarray(32,64)},u=new o(c.r),s=new o(c.s);if(u.cmp(i.n)>=0||s.cmp(i.n)>=0)return 1;if(1===s.cmp(n.nh)||u.isZero()||s.isZero())return 3;const f=a(t);if(null===f)return 2;const l=f.getPublic();return n.verify(r,c,l)?0:3},ecdsaRecover(e,r,t,a){const u={r:r.slice(0,32),s:r.slice(32,64)},s=new o(u.r),f=new o(u.s);if(s.cmp(i.n)>=0||f.cmp(i.n)>=0)return 1;if(s.isZero()||f.isZero())return 2;let l;try{l=n.recoverPubKey(a,u,t)}catch(e){return 2}return c(e,l),0},ecdh(e,r,t,c,u,s,f){const l=a(r);if(null===l)return 1;const h=new o(t);if(h.cmp(i.n)>=0||h.isZero())return 2;const y=l.getPublic().mul(h);if(void 0===u){const r=y.encode(null,!0),t=n.hash().update(r).digest();for(let r=0;r<32;++r)e[r]=t[r]}else{s||(s=new Uint8Array(32));const r=y.getX().toArray("be",32);for(let e=0;e<32;++e)s[e]=r[e];f||(f=new Uint8Array(32));const t=y.getY().toArray("be",32);for(let e=0;e<32;++e)f[e]=t[e];const n=u(s,f,c);if(!(n instanceof Uint8Array&&n.length===e.length))return 2;e.set(n)}return 0}}},21007:e=>{const r="Impossible case. Please create issue.",t="The tweak was out of range or the resulted private key is invalid",n="The tweak was out of range or equal to zero",i="Unknow error on context randomization",o="Private Key is invalid",a="Public Key could not be parsed",c="Public Key serialization error",u="The sum of the public keys is not valid",s="Signature could not be parsed",f="The nonce generation function failed, or the private key was invalid",l="Public key could not be recover",h="Scalar was invalid (zero or overflow)";function y(e,r){if(!e)throw new Error(r)}function p(e,r,t){if(y(r instanceof Uint8Array,`Expected ${e} to be an Uint8Array`),void 0!==t)if(Array.isArray(t)){const n=`Expected ${e} to be an Uint8Array with length [${t.join(", ")}]`;y(t.includes(r.length),n)}else{const n=`Expected ${e} to be an Uint8Array with length ${t}`;y(r.length===t,n)}}function d(e){y("Boolean"===b(e),"Expected compressed to be a Boolean")}function w(e=(e=>new Uint8Array(e)),r){return"function"==typeof e&&(e=e(r)),p("output",e,r),e}function b(e){return Object.prototype.toString.call(e).slice(8,-1)}e.exports=e=>({contextRandomize(r){if(y(null===r||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),null!==r&&p("seed",r,32),1===e.contextRandomize(r))throw new Error(i)},privateKeyVerify:r=>(p("private key",r,32),0===e.privateKeyVerify(r)),privateKeyNegate(t){switch(p("private key",t,32),e.privateKeyNegate(t)){case 0:return t;case 1:throw new Error(r)}},privateKeyTweakAdd(r,n){switch(p("private key",r,32),p("tweak",n,32),e.privateKeyTweakAdd(r,n)){case 0:return r;case 1:throw new Error(t)}},privateKeyTweakMul(r,t){switch(p("private key",r,32),p("tweak",t,32),e.privateKeyTweakMul(r,t)){case 0:return r;case 1:throw new Error(n)}},publicKeyVerify:r=>(p("public key",r,[33,65]),0===e.publicKeyVerify(r)),publicKeyCreate(r,t=!0,n){switch(p("private key",r,32),d(t),n=w(n,t?33:65),e.publicKeyCreate(n,r)){case 0:return n;case 1:throw new Error(o);case 2:throw new Error(c)}},publicKeyConvert(r,t=!0,n){switch(p("public key",r,[33,65]),d(t),n=w(n,t?33:65),e.publicKeyConvert(n,r)){case 0:return n;case 1:throw new Error(a);case 2:throw new Error(c)}},publicKeyNegate(t,n=!0,i){switch(p("public key",t,[33,65]),d(n),i=w(i,n?33:65),e.publicKeyNegate(i,t)){case 0:return i;case 1:throw new Error(a);case 2:throw new Error(r);case 3:throw new Error(c)}},publicKeyCombine(r,t=!0,n){y(Array.isArray(r),"Expected public keys to be an Array"),y(r.length>0,"Expected public keys array will have more than zero items");for(const e of r)p("public key",e,[33,65]);switch(d(t),n=w(n,t?33:65),e.publicKeyCombine(n,r)){case 0:return n;case 1:throw new Error(a);case 2:throw new Error(u);case 3:throw new Error(c)}},publicKeyTweakAdd(r,n,i=!0,o){switch(p("public key",r,[33,65]),p("tweak",n,32),d(i),o=w(o,i?33:65),e.publicKeyTweakAdd(o,r,n)){case 0:return o;case 1:throw new Error(a);case 2:throw new Error(t)}},publicKeyTweakMul(r,t,i=!0,o){switch(p("public key",r,[33,65]),p("tweak",t,32),d(i),o=w(o,i?33:65),e.publicKeyTweakMul(o,r,t)){case 0:return o;case 1:throw new Error(a);case 2:throw new Error(n)}},signatureNormalize(r){switch(p("signature",r,64),e.signatureNormalize(r)){case 0:return r;case 1:throw new Error(s)}},signatureExport(t,n){p("signature",t,64);const i={output:n=w(n,72),outputlen:72};switch(e.signatureExport(i,t)){case 0:return n.slice(0,i.outputlen);case 1:throw new Error(s);case 2:throw new Error(r)}},signatureImport(t,n){switch(p("signature",t),n=w(n,64),e.signatureImport(n,t)){case 0:return n;case 1:throw new Error(s);case 2:throw new Error(r)}},ecdsaSign(t,n,i={},o){p("message",t,32),p("private key",n,32),y("Object"===b(i),"Expected options to be an Object"),void 0!==i.data&&p("options.data",i.data),void 0!==i.noncefn&&y("Function"===b(i.noncefn),"Expected options.noncefn to be a Function");const a={signature:o=w(o,64),recid:null};switch(e.ecdsaSign(a,t,n,i.data,i.noncefn)){case 0:return a;case 1:throw new Error(f);case 2:throw new Error(r)}},ecdsaVerify(r,t,n){switch(p("signature",r,64),p("message",t,32),p("public key",n,[33,65]),e.ecdsaVerify(r,t,n)){case 0:return!0;case 3:return!1;case 1:throw new Error(s);case 2:throw new Error(a)}},ecdsaRecover(t,n,i,o=!0,a){switch(p("signature",t,64),y("Number"===b(n)&&n>=0&&n<=3,"Expected recovery id to be a Number within interval [0, 3]"),p("message",i,32),d(o),a=w(a,o?33:65),e.ecdsaRecover(a,t,n,i)){case 0:return a;case 1:throw new Error(s);case 2:throw new Error(l);case 3:throw new Error(r)}},ecdh(r,t,n={},i){switch(p("public key",r,[33,65]),p("private key",t,32),y("Object"===b(n),"Expected options to be an Object"),void 0!==n.data&&p("options.data",n.data),void 0!==n.hashfn?(y("Function"===b(n.hashfn),"Expected options.hashfn to be a Function"),void 0!==n.xbuf&&p("options.xbuf",n.xbuf,32),void 0!==n.ybuf&&p("options.ybuf",n.ybuf,32),p("output",i)):i=w(i,32),e.ecdh(i,r,t,n.data,n.hashfn,n.xbuf,n.ybuf)){case 0:return i;case 1:throw new Error(a);case 2:throw new Error(h)}}})},38087:()=>{},74854:()=>{},66602:()=>{}}]);
//# sourceMappingURL=4791.55cbadbd.js.map