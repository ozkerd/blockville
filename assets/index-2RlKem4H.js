var Bo=Object.defineProperty;var Oo=(i,e,t)=>e in i?Bo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var A=(i,e,t)=>Oo(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pr="162";const En="",nn="srgb",bn="srgb-linear",mr="display-p3",Ms="display-p3-linear",ds="linear",et="srgb",fs="rec709",ps="p3";const Ir="300 es";class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dr=1234567;const yi=Math.PI/180,Pi=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function gr(i,e){return(i%e+e)%e}function ko(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Go(i,e,t){return i!==e?(t-i)/(e-i):0}function Ei(i,e,t){return(1-t)*i+t*e}function zo(i,e,t,n){return Ei(i,e,1-Math.exp(-t*n))}function Vo(i,e=1){return e-Math.abs(gr(i,e*2)-e)}function Ho(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wo(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xo(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qo(i,e){return i+Math.random()*(e-i)}function Yo(i){return i*(.5-Math.random())}function $o(i){i!==void 0&&(Dr=i);let e=Dr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ko(i){return i*yi}function Zo(i){return i*Pi}function ar(i){return(i&i-1)===0&&i!==0}function Jo(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ms(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jo(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bt={DEG2RAD:yi,RAD2DEG:Pi,generateUUID:zn,clamp:vt,euclideanModulo:gr,mapLinear:ko,inverseLerp:Go,lerp:Ei,damp:zo,pingpong:Vo,smoothstep:Ho,smootherstep:Wo,randInt:Xo,randFloat:qo,randFloatSpread:Yo,seededRandom:$o,degToRad:Ko,radToDeg:Zo,isPowerOfTwo:ar,ceilPowerOfTwo:Jo,floorPowerOfTwo:ms,setQuaternionFromProperEuler:jo,normalize:Pt,denormalize:ii};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,s,r,o,a,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],T=s[7],P=s[2],R=s[5],b=s[8];return r[0]=o*v+a*y+c*P,r[3]=o*p+a*_+c*R,r[6]=o*m+a*T+c*b,r[1]=l*v+h*y+u*P,r[4]=l*p+h*_+u*R,r[7]=l*m+h*T+u*b,r[2]=d*v+f*y+g*P,r[5]=d*p+f*_+g*R,r[8]=d*m+f*T+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new Oe;function eo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qo(){const i=gs("canvas");return i.style.display="block",i}const Ur={};function ec(i){i in Ur||(Ur[i]=!0,console.warn(i))}const Nr=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fr=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oi={[bn]:{transfer:ds,primaries:fs,toReference:i=>i,fromReference:i=>i},[nn]:{transfer:et,primaries:fs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ms]:{transfer:ds,primaries:ps,toReference:i=>i.applyMatrix3(Fr),fromReference:i=>i.applyMatrix3(Nr)},[mr]:{transfer:et,primaries:ps,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fr),fromReference:i=>i.applyMatrix3(Nr).convertLinearToSRGB()}},tc=new Set([bn,Ms]),Je={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Oi[e].toReference,s=Oi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Oi[i].primaries},getTransfer:function(i){return i===En?ds:Oi[i].transfer}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vn;class to{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=gs("canvas")),Vn.width=e.width,Vn.height=e.height;const n=Vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nc=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ls(s[o].image)):r.push(Ls(s[o]))}else r=Ls(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?to.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ic=0;class Ut extends hi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=Ut.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=zn(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=300;Ut.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,T=(f+1)/2,P=(m+1)/2,R=(h+d)/4,b=(u+v)/4,D=(g+p)/4;return _>T&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=b/n):T>P?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=R/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=b/r,s=D/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sc extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Ut(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class io extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rc extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let p=1-a;const m=c*d+l*f+h*g+u*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),R=Math.atan2(P,m*y);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const T=a*y;if(c=c*p+d*T,l=l*p+f*T,h=h*p+g*T,u=u*p+v*T,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Br.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Br.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new I,Br=new Ui;class Tn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(r,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pi),Gi.subVectors(this.max,pi),Hn.subVectors(e.a,pi),Wn.subVectors(e.b,pi),Xn.subVectors(e.c,pi),gn.subVectors(Wn,Hn),_n.subVectors(Xn,Wn),Cn.subVectors(Hn,Xn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Cn.z,Cn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Cn.z,0,-Cn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Cn.y,Cn.x,0];return!Ds(t,Hn,Wn,Xn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,Hn,Wn,Xn,Gi))?!1:(zi.crossVectors(gn,_n),t=[zi.x,zi.y,zi.z],Ds(t,Hn,Wn,Xn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],$t=new I,ki=new Tn,Hn=new I,Wn=new I,Xn=new I,gn=new I,_n=new I,Cn=new I,pi=new I,Gi=new I,zi=new I,Pn=new I;function Ds(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pn.fromArray(i,r);const a=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),c=e.dot(Pn),l=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ac=new Tn,mi=new I,Us=new I;class Ss{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ac.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mi.subVectors(e,this.center);const t=mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mi.copy(e.center).add(Us)),this.expandByPoint(mi.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new I,Ns=new I,Vi=new I,vn=new I,Fs=new I,Hi=new I,Bs=new I;class so{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ns.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(Ns);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vi),a=vn.dot(this.direction),c=-vn.dot(Vi),l=vn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ns).addScaledVector(Vi,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,s,r){Fs.subVectors(t,e),Hi.subVectors(n,e),Bs.crossVectors(Fs,Hi);let o=this.direction.dot(Bs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,e);const c=a*this.direction.dot(Hi.crossVectors(vn,Hi));if(c<0)return null;const l=a*this.direction.dot(Fs.cross(vn));if(l<0||c+l>o)return null;const h=-a*vn.dot(Bs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oc,e,cc)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),xn.crossVectors(n,Bt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),xn.crossVectors(n,Bt)),xn.normalize(),Wi.crossVectors(Bt,xn),s[0]=xn.x,s[4]=Wi.x,s[8]=Bt.x,s[1]=xn.y,s[5]=Wi.y,s[9]=Bt.y,s[2]=xn.z,s[6]=Wi.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],T=n[11],P=n[15],R=s[0],b=s[4],D=s[8],F=s[12],x=s[1],w=s[5],$=s[9],K=s[13],L=s[2],z=s[6],B=s[10],q=s[14],H=s[3],J=s[7],j=s[11],Q=s[15];return r[0]=o*R+a*x+c*L+l*H,r[4]=o*b+a*w+c*z+l*J,r[8]=o*D+a*$+c*B+l*j,r[12]=o*F+a*K+c*q+l*Q,r[1]=h*R+u*x+d*L+f*H,r[5]=h*b+u*w+d*z+f*J,r[9]=h*D+u*$+d*B+f*j,r[13]=h*F+u*K+d*q+f*Q,r[2]=g*R+v*x+p*L+m*H,r[6]=g*b+v*w+p*z+m*J,r[10]=g*D+v*$+p*B+m*j,r[14]=g*F+v*K+p*q+m*Q,r[3]=y*R+_*x+T*L+P*H,r[7]=y*b+_*w+T*z+P*J,r[11]=y*D+_*$+T*B+P*j,r[15]=y*F+_*K+T*q+P*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+p*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],y=u*p*l-v*d*l+v*c*f-a*p*f-u*c*m+a*d*m,_=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,T=h*v*l-g*u*l+g*a*f-o*v*f-h*a*m+o*u*m,P=g*u*c-h*v*c-g*a*d+o*v*d+h*a*p-o*u*p,R=t*y+n*_+s*T+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=y*b,e[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*b,e[2]=(a*p*r-v*c*r+v*s*l-n*p*l-a*s*m+n*c*m)*b,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*b,e[4]=_*b,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*b,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*b,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*b,e[8]=T*b,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*m-t*u*m)*b,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*m+t*a*m)*b,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*b,e[12]=P*b,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*p+t*u*p)*b,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*p-t*a*p)*b,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,y=c*l,_=c*h,T=c*u,P=n.x,R=n.y,b=n.z;return s[0]=(1-(v+m))*P,s[1]=(f+T)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-T)*R,s[5]=(1-(d+m))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(g+_)*b,s[9]=(p-y)*b,s[10]=(1-(d+v))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qn.set(s[0],s[1],s[2]).length();const o=qn.set(s[4],s[5],s[6]).length(),a=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const l=1/r,h=1/o,u=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=2e3){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===2e3)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=2e3){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===2e3)g=(o+r)*u,v=-2*u;else if(a===2001)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new I,Kt=new ot,oc=new I(0,0,0),cc=new I(1,1,1),xn=new I,Wi=new I,Bt=new I,Or=new ot,kr=new Ui;class an{constructor(e=0,t=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Or.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Or,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kr.setFromEuler(this),this.setFromQuaternion(kr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lc=0;const Gr=new I,Yn=new Ui,un=new ot,Xi=new I,gi=new I,hc=new I,uc=new Ui,zr=new I(1,0,0),Vr=new I(0,1,0),Hr=new I(0,0,1),dc={type:"added"},fc={type:"removed"},Os={type:"childadded",child:null},ks={type:"childremoved",child:null};class Mt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new I,t=new an,n=new Ui,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Oe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(zr,e)}rotateY(e){return this.rotateOnAxis(Vr,e)}rotateZ(e){return this.rotateOnAxis(Hr,e)}translateOnAxis(e,t){return Gr.copy(e).applyQuaternion(this.quaternion),this.position.add(Gr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zr,e)}translateY(e){return this.translateOnAxis(Vr,e)}translateZ(e){return this.translateOnAxis(Hr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xi.copy(e):Xi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(gi,Xi,this.up):un.lookAt(Xi,gi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),Yn.setFromRotationMatrix(un),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dc),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fc),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new I(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new I,dn=new I,Gs=new I,fn=new I,$n=new I,Kn=new I,Wr=new I,zs=new I,Vs=new I,Hs=new I;class rn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zt.subVectors(s,t),dn.subVectors(n,t),Gs.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(dn),c=Zt.dot(Gs),l=dn.dot(dn),h=dn.dot(Gs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(o,fn.y),c.addScaledVector(a,fn.z),c)}static isFrontFacing(e,t,n,s){return Zt.subVectors(n,t),dn.subVectors(e,t),Zt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Zt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;$n.subVectors(s,n),Kn.subVectors(r,n),zs.subVectors(e,n);const c=$n.dot(zs),l=Kn.dot(zs);if(c<=0&&l<=0)return t.copy(n);Vs.subVectors(e,s);const h=$n.dot(Vs),u=Kn.dot(Vs);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector($n,o);Hs.subVectors(e,r);const f=$n.dot(Hs),g=Kn.dot(Hs);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Kn,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Wr.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Wr,a);const m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector($n,o).addScaledVector(Kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Ws(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=gr(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ws(o,r,e+1/3),this.g=Ws(o,r,e),this.b=Ws(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=ao[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Je.fromWorkingColorSpace(wt.copy(this),e),Math.round(vt(wt.r*255,0,255))*65536+Math.round(vt(wt.g*255,0,255))*256+Math.round(vt(wt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,s=wt.g,r=wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=nn){Je.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,s=wt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(qi);const n=Ei(Mn.h,qi.h,t),s=Ei(Mn.s,qi.s,t),r=Ei(Mn.l,qi.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new ke;ke.NAMES=ao;let pc=0;class ui extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _s extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new I,Yi=new pe;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ec("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class oo extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class co extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mc=0;const Vt=new ot,Xs=new Mt,Zn=new I,Ot=new Tn,_i=new Tn,_t=new I;class At extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eo(e)?co:oo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ot.min,_i.min),Ot.expandByPoint(_t),_t.addVectors(Ot.max,_i.max),Ot.expandByPoint(_t)):(Ot.expandByPoint(_i.min),Ot.expandByPoint(_i.max))}Ot.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_t.fromBufferAttribute(a,l),c&&(Zn.fromBufferAttribute(e,l),_t.add(Zn)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;const l=new I,h=new I,u=new I,d=new pe,f=new pe,g=new pe,v=new I,p=new I;function m(D,F,x){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[D].add(v),a[F].add(v),a[x].add(v),c[D].add(p),c[F].add(p),c[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,F=y.length;D<F;++D){const x=y[D],w=x.start,$=x.count;for(let K=w,L=w+$;K<L;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const _=new I,T=new I,P=new I,R=new I;function b(D){P.fromBufferAttribute(s,D),R.copy(P);const F=a[D];_.copy(F),_.sub(P.multiplyScalar(P.dot(F))).normalize(),T.crossVectors(R,F);const w=T.dot(c[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,w)}for(let D=0,F=y.length;D<F;++D){const x=y[D],w=x.start,$=x.count;for(let K=w,L=w+$;K<L;K+=3)b(e.getX(K+0)),b(e.getX(K+1)),b(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xr=new ot,Ln=new so,$i=new Ss,qr=new I,Jn=new I,jn=new I,Qn=new I,qs=new I,Ki=new I,Zi=new pe,Ji=new pe,ji=new pe,Yr=new I,$r=new I,Kr=new I,Qi=new I,es=new I;class k extends Mt{constructor(e=new At,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ki.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(qs.fromBufferAttribute(u,e),o?Ki.addScaledVector(qs,h):Ki.addScaledVector(qs.sub(t),h))}t.add(Ki)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),Ln.copy(e.ray).recast(e.near),!($i.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere($i,qr)===null||Ln.origin.distanceToSquared(qr)>(e.far-e.near)**2))&&(Xr.copy(r).invert(),Ln.copy(e.ray).applyMatrix4(Xr),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,P=_;T<P;T+=3){const R=a.getX(T),b=a.getX(T+1),D=a.getX(T+2);s=ts(this,m,e,n,l,h,u,R,b,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),T=a.getX(p+2);s=ts(this,o,e,n,l,h,u,y,_,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,P=_;T<P;T+=3){const R=T,b=T+1,D=T+2;s=ts(this,m,e,n,l,h,u,R,b,D),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,T=p+2;s=ts(this,o,e,n,l,h,u,y,_,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function gc(i,e,t,n,s,r,o,a){let c;if(e.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===0,a),c===null)return null;es.copy(a),es.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(es);return l<t.near||l>t.far?null:{distance:l,point:es.clone(),object:i}}function ts(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Jn),i.getVertexPosition(c,jn),i.getVertexPosition(l,Qn);const h=gc(i,e,t,n,Jn,jn,Qn,Qi);if(h){s&&(Zi.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,c),ji.fromBufferAttribute(s,l),h.uv=rn.getInterpolation(Qi,Jn,jn,Qn,Zi,Ji,ji,new pe)),r&&(Zi.fromBufferAttribute(r,a),Ji.fromBufferAttribute(r,c),ji.fromBufferAttribute(r,l),h.uv1=rn.getInterpolation(Qi,Jn,jn,Qn,Zi,Ji,ji,new pe)),o&&(Yr.fromBufferAttribute(o,a),$r.fromBufferAttribute(o,c),Kr.fromBufferAttribute(o,l),h.normal=rn.getInterpolation(Qi,Jn,jn,Qn,Yr,$r,Kr,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};rn.getNormal(Jn,jn,Qn,u.normal),h.face=u}return h}class Nt extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(v,p,m,y,_,T,P,R,b,D,F){const x=T/b,w=P/D,$=T/2,K=P/2,L=R/2,z=b+1,B=D+1;let q=0,H=0;const J=new I;for(let j=0;j<B;j++){const Q=j*w-K;for(let le=0;le<z;le++){const ye=le*x-$;J[v]=ye*y,J[p]=Q*_,J[m]=L,l.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(le/b),u.push(1-j/D),q+=1}}for(let j=0;j<D;j++)for(let Q=0;Q<b;Q++){const le=d+Q+z*j,ye=d+Q+z*(j+1),V=d+(Q+1)+z*(j+1),te=d+(Q+1)+z*j;c.push(le,ye,te),c.push(ye,V,te),H+=6}a.addGroup(f,H,F),f+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=ci(i[t]);for(const s in n)e[s]=n[s]}return e}function _c(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lo(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}const vc={clone:ci,merge:Lt};var xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xc,this.fragmentShader=Mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=_c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ho extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new I,Zr=new pe,Jr=new pe;class Xt extends ho{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,Zr,Jr),t.subVectors(Jr,Zr)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Sc extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(ei,ti,e,t);s.layers=this.layers,this.add(s);const r=new Xt(ei,ti,e,t);r.layers=this.layers,this.add(r);const o=new Xt(ei,ti,e,t);o.layers=this.layers,this.add(o);const a=new Xt(ei,ti,e,t);a.layers=this.layers,this.add(a);const c=new Xt(ei,ti,e,t);c.layers=this.layers,this.add(c);const l=new Xt(ei,ti,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uo extends Ut{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yc extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nt(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new k(s,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ys=new I,Ec=new I,Tc=new Oe;class Nn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ys.subVectors(n,t).cross(Ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tc.getNormalMatrix(e),s=this.coplanarPoint(Ys).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ss,ns=new I;class _r{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],y=s[13],_=s[14],T=s[15];if(n[0].setComponents(c-r,d-l,p-f,T-m).normalize(),n[1].setComponents(c+r,d+l,p+f,T+m).normalize(),n[2].setComponents(c+o,d+h,p+g,T+y).normalize(),n[3].setComponents(c-o,d-h,p-g,T-y).normalize(),n[4].setComponents(c-a,d-u,p-v,T-_).normalize(),t===2e3)n[5].setComponents(c+a,d+u,p+v,T+_).normalize();else if(t===2001)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ns.x=s.normal.x>0?e.max.x:e.min.x,ns.y=s.normal.y>0?e.max.y:e.min.y,ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fo(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,h){const u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];t?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class mn extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let _=0;_<l;_++){const T=_*u-r;g.push(T,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const _=y+l*m,T=y+l*(m+1),P=y+1+l*(m+1),R=y+1+l*m;f.push(_,T,R),f.push(T,P,R)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}var bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ac=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ic=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,el=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nl="gl_FragColor = linearToOutputTexel( gl_FragColor );",il=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,al=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ol=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ll=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ul=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ml=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_l=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ml=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,El=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Al=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ll=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Il=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ul=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ol=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gl=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ql=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$l=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ql=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ih=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ah=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ch=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ph=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_h=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ah=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ch=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$h=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,su=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ru=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:bc,alphahash_pars_fragment:Ac,alphamap_fragment:Rc,alphamap_pars_fragment:Cc,alphatest_fragment:Pc,alphatest_pars_fragment:Lc,aomap_fragment:Ic,aomap_pars_fragment:Dc,batching_pars_vertex:Uc,batching_vertex:Nc,begin_vertex:Fc,beginnormal_vertex:Bc,bsdfs:Oc,iridescence_fragment:kc,bumpmap_pars_fragment:Gc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:Vc,clipping_planes_pars_vertex:Hc,clipping_planes_vertex:Wc,color_fragment:Xc,color_pars_fragment:qc,color_pars_vertex:Yc,color_vertex:$c,common:Kc,cube_uv_reflection_fragment:Zc,defaultnormal_vertex:Jc,displacementmap_pars_vertex:jc,displacementmap_vertex:Qc,emissivemap_fragment:el,emissivemap_pars_fragment:tl,colorspace_fragment:nl,colorspace_pars_fragment:il,envmap_fragment:sl,envmap_common_pars_fragment:rl,envmap_pars_fragment:al,envmap_pars_vertex:ol,envmap_physical_pars_fragment:xl,envmap_vertex:cl,fog_vertex:ll,fog_pars_vertex:hl,fog_fragment:ul,fog_pars_fragment:dl,gradientmap_pars_fragment:fl,lightmap_fragment:pl,lightmap_pars_fragment:ml,lights_lambert_fragment:gl,lights_lambert_pars_fragment:_l,lights_pars_begin:vl,lights_toon_fragment:Ml,lights_toon_pars_fragment:Sl,lights_phong_fragment:yl,lights_phong_pars_fragment:El,lights_physical_fragment:Tl,lights_physical_pars_fragment:wl,lights_fragment_begin:bl,lights_fragment_maps:Al,lights_fragment_end:Rl,logdepthbuf_fragment:Cl,logdepthbuf_pars_fragment:Pl,logdepthbuf_pars_vertex:Ll,logdepthbuf_vertex:Il,map_fragment:Dl,map_pars_fragment:Ul,map_particle_fragment:Nl,map_particle_pars_fragment:Fl,metalnessmap_fragment:Bl,metalnessmap_pars_fragment:Ol,morphinstance_vertex:kl,morphcolor_vertex:Gl,morphnormal_vertex:zl,morphtarget_pars_vertex:Vl,morphtarget_vertex:Hl,normal_fragment_begin:Wl,normal_fragment_maps:Xl,normal_pars_fragment:ql,normal_pars_vertex:Yl,normal_vertex:$l,normalmap_pars_fragment:Kl,clearcoat_normal_fragment_begin:Zl,clearcoat_normal_fragment_maps:Jl,clearcoat_pars_fragment:jl,iridescence_pars_fragment:Ql,opaque_fragment:eh,packing:th,premultiplied_alpha_fragment:nh,project_vertex:ih,dithering_fragment:sh,dithering_pars_fragment:rh,roughnessmap_fragment:ah,roughnessmap_pars_fragment:oh,shadowmap_pars_fragment:ch,shadowmap_pars_vertex:lh,shadowmap_vertex:hh,shadowmask_pars_fragment:uh,skinbase_vertex:dh,skinning_pars_vertex:fh,skinning_vertex:ph,skinnormal_vertex:mh,specularmap_fragment:gh,specularmap_pars_fragment:_h,tonemapping_fragment:vh,tonemapping_pars_fragment:xh,transmission_fragment:Mh,transmission_pars_fragment:Sh,uv_pars_fragment:yh,uv_pars_vertex:Eh,uv_vertex:Th,worldpos_vertex:wh,background_vert:bh,background_frag:Ah,backgroundCube_vert:Rh,backgroundCube_frag:Ch,cube_vert:Ph,cube_frag:Lh,depth_vert:Ih,depth_frag:Dh,distanceRGBA_vert:Uh,distanceRGBA_frag:Nh,equirect_vert:Fh,equirect_frag:Bh,linedashed_vert:Oh,linedashed_frag:kh,meshbasic_vert:Gh,meshbasic_frag:zh,meshlambert_vert:Vh,meshlambert_frag:Hh,meshmatcap_vert:Wh,meshmatcap_frag:Xh,meshnormal_vert:qh,meshnormal_frag:Yh,meshphong_vert:$h,meshphong_frag:Kh,meshphysical_vert:Zh,meshphysical_frag:Jh,meshtoon_vert:jh,meshtoon_frag:Qh,points_vert:eu,points_frag:tu,shadow_vert:nu,shadow_frag:iu,sprite_vert:su,sprite_frag:ru},oe={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},sn={basic:{uniforms:Lt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ke(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Lt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Lt([oe.lights,oe.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};sn.physical={uniforms:Lt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const is={r:0,b:0,g:0},Dn=new an,au=new ot;function ou(i,e,t,n,s,r,o){const a=new ke(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(h===void 0&&(h=new k(new Nt(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ci(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Dn.copy(m.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(au.makeRotationFromEuler(Dn)),h.material.toneMapped=Je.getTransfer(_.colorSpace)!==et,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new k(new mn(2,2),new wn({name:"BackgroundMaterial",uniforms:ci(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,m){p.getRGB(is,lo(i)),n.buffers.color.setClear(is.r,is.g,is.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function cu(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function u(L,z,B,q,H){let J=!1;if(o){const j=v(q,B,z);l!==j&&(l=j,f(l.object)),J=m(L,q,B,H),J&&y(L,q,B,H)}else{const j=z.wireframe===!0;(l.geometry!==q.id||l.program!==B.id||l.wireframe!==j)&&(l.geometry=q.id,l.program=B.id,l.wireframe=j,J=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,D(L,z,B,q),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,z,B){const q=B.wireframe===!0;let H=a[L.id];H===void 0&&(H={},a[L.id]=H);let J=H[z.id];J===void 0&&(J={},H[z.id]=J);let j=J[q];return j===void 0&&(j=p(d()),J[q]=j),j}function p(L){const z=[],B=[],q=[];for(let H=0;H<s;H++)z[H]=0,B[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:q,object:L,attributes:{},index:null}}function m(L,z,B,q){const H=l.attributes,J=z.attributes;let j=0;const Q=B.getAttributes();for(const le in Q)if(Q[le].location>=0){const V=H[le];let te=J[le];if(te===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),V===void 0||V.attribute!==te||te&&V.data!==te.data)return!0;j++}return l.attributesNum!==j||l.index!==q}function y(L,z,B,q){const H={},J=z.attributes;let j=0;const Q=B.getAttributes();for(const le in Q)if(Q[le].location>=0){let V=J[le];V===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const te={};te.attribute=V,V&&V.data&&(te.data=V.data),H[le]=te,j++}l.attributes=H,l.attributesNum=j,l.index=q}function _(){const L=l.newAttributes;for(let z=0,B=L.length;z<B;z++)L[z]=0}function T(L){P(L,0)}function P(L,z){const B=l.newAttributes,q=l.enabledAttributes,H=l.attributeDivisors;B[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),H[L]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),H[L]=z)}function R(){const L=l.newAttributes,z=l.enabledAttributes;for(let B=0,q=z.length;B<q;B++)z[B]!==L[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function b(L,z,B,q,H,J,j){j===!0?i.vertexAttribIPointer(L,z,B,H,J):i.vertexAttribPointer(L,z,B,q,H,J)}function D(L,z,B,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=q.attributes,J=B.getAttributes(),j=z.defaultAttributeValues;for(const Q in J){const le=J[Q];if(le.location>=0){let ye=H[Q];if(ye===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ye=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ye=L.instanceColor)),ye!==void 0){const V=ye.normalized,te=ye.itemSize,se=t.get(ye);if(se===void 0)continue;const _e=se.buffer,ve=se.type,ge=se.bytesPerElement,Ze=n.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||ye.gpuType===1013);if(ye.isInterleavedBufferAttribute){const Pe=ye.data,O=Pe.stride,St=ye.offset;if(Pe.isInstancedInterleavedBuffer){for(let Te=0;Te<le.locationSize;Te++)P(le.location+Te,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Te=0;Te<le.locationSize;Te++)T(le.location+Te);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Te=0;Te<le.locationSize;Te++)b(le.location+Te,te/le.locationSize,ve,V,O*ge,(St+te/le.locationSize*Te)*ge,Ze)}else{if(ye.isInstancedBufferAttribute){for(let Pe=0;Pe<le.locationSize;Pe++)P(le.location+Pe,ye.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Pe=0;Pe<le.locationSize;Pe++)T(le.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Pe=0;Pe<le.locationSize;Pe++)b(le.location+Pe,te/le.locationSize,ve,V,te*ge,te/le.locationSize*Pe*ge,Ze)}}else if(j!==void 0){const V=j[Q];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(le.location,V);break;case 3:i.vertexAttrib3fv(le.location,V);break;case 4:i.vertexAttrib4fv(le.location,V);break;default:i.vertexAttrib1fv(le.location,V)}}}}R()}function F(){$();for(const L in a){const z=a[L];for(const B in z){const q=z[B];for(const H in q)g(q[H].object),delete q[H];delete z[B]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const B in z){const q=z[B];for(const H in q)g(q[H].object),delete q[H];delete z[B]}delete a[L.id]}function w(L){for(const z in a){const B=a[z];if(B[L.id]===void 0)continue;const q=B[L.id];for(const H in q)g(q[H].object),delete q[H];delete B[L.id]}}function $(){K(),h=!0,l!==c&&(l=c,f(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:K,dispose:F,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:T,disableUnusedAttributes:R}}function lu(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function hu(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=o||e.has("OES_texture_float"),P=_&&T,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:R}}function uu(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Nn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,_=y*4;let T=m.clippingState||null;c.value=T,T=h(g,d,_,f);for(let P=0;P!==_;++P)T[P]=t[P];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,T=f;_!==v;++_,T+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function du(i){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yc(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class po extends ho{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,jr=[.125,.215,.35,.446,.526,.582],Bn=20,$s=new po,Qr=new ke;let Ks=null,Zs=0,Js=0;const Fn=(1+Math.sqrt(5))/2,ni=1/Fn,ea=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Fn,ni),new I(0,Fn,-ni),new I(ni,0,Fn),new I(-ni,0,Fn),new I(Fn,ni,0),new I(-Fn,ni,0)];class ta{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,Zs,Js),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:bn,depthBuffer:!1},s=na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fu(r)),this._blurMaterial=pu(r,e,t)}return s}_compileMaterial(e){const t=new k(this._lodPlanes[0],e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,n,s){const a=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qr),h.toneMapping=0,h.autoClear=!1;const f=new _s({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new k(new Nt,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(Qr),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const _=this._cubeSize;ss(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ss(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$s)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ea[(s-1)%ea.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new k(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Bn;p>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const m=[];let y=0;for(let b=0;b<Bn;++b){const D=b/v,F=Math.exp(-D*D/2);m.push(F),b===0?y+=F:b<p&&(y+=2*F)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const T=this._sizeLods[s],P=3*T*(s>_-si?s-_+si:0),R=4*(this._cubeSize-T);ss(t,P,R,3*T,2*T),c.setRenderTarget(t),c.render(u,$s)}}function fu(i){const e=[],t=[],n=[];let s=i;const r=i-si+1+jr.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-si?c=jr[o-i+si-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let R=0;R<f;R++){const b=R%3*2/3-1,D=R>2?0:-1,F=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];y.set(F,v*g*R),_.set(d,p*g*R);const x=[R,R,R,R,R,R];T.set(x,m*g*R)}const P=new At;P.setAttribute("position",new Yt(y,v)),P.setAttribute("uv",new Yt(_,p)),P.setAttribute("faceIndex",new Yt(T,m)),e.push(P),s>si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function na(i,e,t){const n=new kn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pu(i,e,t){const n=new Float32Array(Bn),s=new I(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ia(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sa(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ta(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ta(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _u(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,T=y.length;_<T;_+=3){const P=y[_+0],R=y[_+1],b=y[_+2];d.push(P,R,R,b,b,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,T=y.length/3-1;_<T;_+=3){const P=_+0,R=_+1,b=_+2;d.push(P,R,R,b,b,P)}}else return;const p=new(eo(d)?co:oo)(d,1);p.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function vu(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,v){if(v===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,v),t.update(g,r,v)}function d(f,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let m=0;for(let y=0;y<v;y++)m+=g[y];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function xu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mu(i,e){return i[0]-e[0]}function Su(i,e){return Math.abs(e[1])-Math.abs(i[1])}function yu(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let $=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",$)};v!==void 0&&v.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let R=0;p===!0&&(R=1),m===!0&&(R=2),y===!0&&(R=3);let b=h.attributes.position.count*R,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*D*4*g),x=new io(F,b,D,g);x.type=1015,x.needsUpdate=!0;const w=R*4;for(let K=0;K<g;K++){const L=_[K],z=T[K],B=P[K],q=b*D*4*K;for(let H=0;H<L.count;H++){const J=H*w;p===!0&&(o.fromBufferAttribute(L,H),F[q+J+0]=o.x,F[q+J+1]=o.y,F[q+J+2]=o.z,F[q+J+3]=0),m===!0&&(o.fromBufferAttribute(z,H),F[q+J+4]=o.x,F[q+J+5]=o.y,F[q+J+6]=o.z,F[q+J+7]=0),y===!0&&(o.fromBufferAttribute(B,H),F[q+J+8]=o.x,F[q+J+9]=o.y,F[q+J+10]=o.z,F[q+J+11]=B.itemSize===4?o.w:1)}}v={count:g,texture:x,size:new pe(b,D)},r.set(h,v),h.addEventListener("dispose",$)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let p=0;for(let y=0;y<d.length;y++)p+=d[y];const m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const f=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){const T=g[_];T[0]=_,T[1]=d[_]}g.sort(Su);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Mu);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const T=a[_],P=T[0],R=T[1];P!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+_)!==v[P]&&h.setAttribute("morphTarget"+_,v[P]),p&&h.getAttribute("morphNormal"+_)!==p[P]&&h.setAttribute("morphNormal"+_,p[P]),s[_]=R,m+=R):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}const y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Eu(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class mo extends Ut{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const go=new Ut,_o=new mo(1,1);_o.compareFunction=515;const vo=new io,xo=new rc,Mo=new uo,ra=[],aa=[],oa=new Float32Array(16),ca=new Float32Array(9),la=new Float32Array(4);function di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ra[s];if(r===void 0&&(r=new Float32Array(s),ra[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ys(i,e){let t=aa[e];t===void 0&&(t=new Int32Array(e),aa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Au(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Ru(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;la.set(n),i.uniformMatrix2fv(this.addr,!1,la),mt(t,n)}}function Cu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ca.set(n),i.uniformMatrix3fv(this.addr,!1,ca),mt(t,n)}}function Pu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;oa.set(n),i.uniformMatrix4fv(this.addr,!1,oa),mt(t,n)}}function Lu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Du(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Uu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Nu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Ou(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function ku(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?_o:go;t.setTexture2D(e||r,s)}function Gu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xo,s)}function zu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mo,s)}function Vu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vo,s)}function Hu(i){switch(i){case 5126:return Tu;case 35664:return wu;case 35665:return bu;case 35666:return Au;case 35674:return Ru;case 35675:return Cu;case 35676:return Pu;case 5124:case 35670:return Lu;case 35667:case 35671:return Iu;case 35668:case 35672:return Du;case 35669:case 35673:return Uu;case 5125:return Nu;case 36294:return Fu;case 36295:return Bu;case 36296:return Ou;case 35678:case 36198:case 36298:case 36306:case 35682:return ku;case 35679:case 36299:case 36307:return Gu;case 35680:case 36300:case 36308:case 36293:return zu;case 36289:case 36303:case 36311:case 36292:return Vu}}function Wu(i,e){i.uniform1fv(this.addr,e)}function Xu(i,e){const t=di(e,this.size,2);i.uniform2fv(this.addr,t)}function qu(i,e){const t=di(e,this.size,3);i.uniform3fv(this.addr,t)}function Yu(i,e){const t=di(e,this.size,4);i.uniform4fv(this.addr,t)}function $u(i,e){const t=di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ku(i,e){const t=di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zu(i,e){const t=di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ju(i,e){i.uniform1iv(this.addr,e)}function ju(i,e){i.uniform2iv(this.addr,e)}function Qu(i,e){i.uniform3iv(this.addr,e)}function ed(i,e){i.uniform4iv(this.addr,e)}function td(i,e){i.uniform1uiv(this.addr,e)}function nd(i,e){i.uniform2uiv(this.addr,e)}function id(i,e){i.uniform3uiv(this.addr,e)}function sd(i,e){i.uniform4uiv(this.addr,e)}function rd(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||go,r[o])}function ad(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xo,r[o])}function od(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mo,r[o])}function cd(i,e,t){const n=this.cache,s=e.length,r=ys(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vo,r[o])}function ld(i){switch(i){case 5126:return Wu;case 35664:return Xu;case 35665:return qu;case 35666:return Yu;case 35674:return $u;case 35675:return Ku;case 35676:return Zu;case 5124:case 35670:return Ju;case 35667:case 35671:return ju;case 35668:case 35672:return Qu;case 35669:case 35673:return ed;case 5125:return td;case 36294:return nd;case 36295:return id;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return cd}}class hd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hu(t.type)}}class ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ld(t.type)}}class dd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const js=/(\w+)(\])?(\[|\.)?/g;function ha(i,e){i.seq.push(e),i.map[e.id]=e}function fd(i,e,t){const n=i.name,s=n.length;for(js.lastIndex=0;;){const r=js.exec(n),o=js.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ha(t,l===void 0?new hd(a,i,e):new ud(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new dd(a),ha(t,u)),t=u}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fd(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ua(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pd=37297;let md=0;function gd(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function _d(i){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i);let n;switch(e===t?n="":e===ps&&t===fs?n="LinearDisplayP3ToLinearSRGB":e===fs&&t===ps&&(n="LinearSRGBToLinearDisplayP3"),i){case bn:case Ms:return[n,"LinearTransferOETF"];case nn:case mr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function da(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gd(i.getShaderSource(e),o)}else return s}function vd(i,e){const t=_d(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xd(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Md(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ri).join(`
`)}function Sd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ri).join(`
`)}function yd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ed(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ri(i){return i!==""}function fa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Td=/^[ \t]*#include +<([\w\d./]+)>/gm;function or(i){return i.replace(Td,bd)}const wd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bd(i,e){let t=Be[e];if(t===void 0){const n=wd.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return or(t)}const Ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(i){return i.replace(Ad,Rd)}function Rd(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ga(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Pd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ld(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Id(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Dd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ud(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Cd(t),l=Pd(t),h=Ld(t),u=Id(t),d=Dd(t),f=t.isWebGL2?"":Md(t),g=Sd(t),v=yd(r),p=s.createProgram();let m,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ri).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ri).join(`
`),y.length>0&&(y+=`
`)):(m=[ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ri).join(`
`),y=[f,ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Be.tonemapping_pars_fragment:"",t.toneMapping!==0?xd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,vd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ri).join(`
`)),o=or(o),o=fa(o,t),o=pa(o,t),a=or(a),a=fa(a,t),a=pa(a,t),o=ma(o),a=ma(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=_+m+o,P=_+y+a,R=ua(s,s.VERTEX_SHADER,T),b=ua(s,s.FRAGMENT_SHADER,P);s.attachShader(p,R),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D($){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(b).trim();let B=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,b);else{const H=da(s,R,"vertex"),J=da(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+K+`
`+H+`
`+J)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||z==="")&&(q=!1);q&&($.diagnostics={runnable:B,programLog:K,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:y}})}s.deleteShader(R),s.deleteShader(b),F=new us(s,p),x=Ed(s,p)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,pd)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=md++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=b,this}let Nd=0;class Fd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bd(e),t.set(e,n)),n}}class Bd{constructor(e){this.id=Nd++,this.code=e,this.usedTimes=0}}function Od(i,e,t,n,s,r,o){const a=new ro,c=new Fd,l=new Set,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,$,K,L){const z=K.fog,B=L.geometry,q=x.isMeshStandardMaterial?K.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),J=H&&H.mapping===306?H.image.height:null,j=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=Q!==void 0?Q.length:0;let ye=0;B.morphAttributes.position!==void 0&&(ye=1),B.morphAttributes.normal!==void 0&&(ye=2),B.morphAttributes.color!==void 0&&(ye=3);let V,te,se,_e;if(j){const je=sn[j];V=je.vertexShader,te=je.fragmentShader}else V=x.vertexShader,te=x.fragmentShader,c.update(x),se=c.getVertexShaderID(x),_e=c.getFragmentShaderID(x);const ve=i.getRenderTarget(),ge=L.isInstancedMesh===!0,Ze=L.isBatchedMesh===!0,Pe=!!x.map,O=!!x.matcap,St=!!H,Te=!!x.aoMap,Ve=!!x.lightMap,be=!!x.bumpMap,qe=!!x.normalMap,Ge=!!x.displacementMap,He=!!x.emissiveMap,lt=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,Z=x.clearcoat>0,ee=x.iridescence>0,ie=x.sheen>0,ne=x.transmission>0,Ue=M&&!!x.anisotropyMap,Ae=Z&&!!x.clearcoatMap,ce=Z&&!!x.clearcoatNormalMap,ue=Z&&!!x.clearcoatRoughnessMap,Ne=ee&&!!x.iridescenceMap,re=ee&&!!x.iridescenceThicknessMap,ut=ie&&!!x.sheenColorMap,We=ie&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,xe=!!x.specularColorMap,Me=!!x.specularIntensityMap,Ye=ne&&!!x.transmissionMap,Ie=ne&&!!x.thicknessMap,it=!!x.gradientMap,U=!!x.alphaMap,he=x.alphaTest>0,W=!!x.alphaHash,ae=!!x.extensions;let de=0;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(de=i.toneMapping);const Xe={isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:te,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ze,instancing:ge,instancingColor:ge&&L.instanceColor!==null,instancingMorph:ge&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:bn,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:O,envMap:St,envMapMode:St&&H.mapping,envMapCubeUVHeight:J,aoMap:Te,lightMap:Ve,bumpMap:be,normalMap:qe,displacementMap:f&&Ge,emissiveMap:He,normalMapObjectSpace:qe&&x.normalMapType===1,normalMapTangentSpace:qe&&x.normalMapType===0,metalnessMap:lt,roughnessMap:C,anisotropy:M,anisotropyMap:Ue,clearcoat:Z,clearcoatMap:Ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:ue,iridescence:ee,iridescenceMap:Ne,iridescenceThicknessMap:re,sheen:ie,sheenColorMap:ut,sheenRoughnessMap:We,specularMap:Ee,specularColorMap:xe,specularIntensityMap:Me,transmission:ne,transmissionMap:Ye,thicknessMap:Ie,gradientMap:it,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:he,alphaHash:W,combine:x.combine,mapUv:Pe&&p(x.map.channel),aoMapUv:Te&&p(x.aoMap.channel),lightMapUv:Ve&&p(x.lightMap.channel),bumpMapUv:be&&p(x.bumpMap.channel),normalMapUv:qe&&p(x.normalMap.channel),displacementMapUv:Ge&&p(x.displacementMap.channel),emissiveMapUv:He&&p(x.emissiveMap.channel),metalnessMapUv:lt&&p(x.metalnessMap.channel),roughnessMapUv:C&&p(x.roughnessMap.channel),anisotropyMapUv:Ue&&p(x.anisotropyMap.channel),clearcoatMapUv:Ae&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(x.sheenRoughnessMap.channel),specularMapUv:Ee&&p(x.specularMap.channel),specularColorMapUv:xe&&p(x.specularColorMap.channel),specularIntensityMapUv:Me&&p(x.specularIntensityMap.channel),transmissionMapUv:Ye&&p(x.transmissionMap.channel),thicknessMapUv:Ie&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qe||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Pe||U),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ae&&x.extensions.derivatives===!0,extensionFragDepth:ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function y(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)w.push($),w.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(_(w,x),T(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function T(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const w=v[x.type];let $;if(w){const K=sn[w];$=vc.clone(K.uniforms)}else $=x.uniforms;return $}function R(x,w){let $;for(let K=0,L=h.length;K<L;K++){const z=h[K];if(z.cacheKey===w){$=z,++$.usedTimes;break}}return $===void 0&&($=new Ud(i,w,x,r),h.push($)),$}function b(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function D(x){c.remove(x)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:b,releaseShaderCache:D,programs:h,dispose:F}}function kd(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _a(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function va(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||Gd),n.length>1&&n.sort(d||_a),s.length>1&&s.sort(d||_a)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function zd(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new va,i.set(n,[o])):s>=r.length?(o=new va,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Hd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wd=0;function Xd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qd(i,e){const t=new Vd,n=Hd(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);const r=new I,o=new ot,a=new ot;function c(h,u){let d=0,f=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let v=0,p=0,m=0,y=0,_=0,T=0,P=0,R=0,b=0,D=0,F=0;h.sort(Xd);const x=u===!0?Math.PI:1;for(let $=0,K=h.length;$<K;$++){const L=h[$],z=L.color,B=L.intensity,q=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*B*x,f+=z.g*B*x,g+=z.b*B*x;else if(L.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(L.sh.coefficients[J],B);F++}else if(L.isDirectionalLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const j=L.shadow,Q=n.get(L);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,s.directionalShadow[v]=Q,s.directionalShadowMap[v]=H,s.directionalShadowMatrix[v]=L.shadow.matrix,T++}s.directional[v]=J,v++}else if(L.isSpotLight){const J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(z).multiplyScalar(B*x),J.distance=q,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,s.spot[m]=J;const j=L.shadow;if(L.map&&(s.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[m]=j.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,s.spotShadow[m]=Q,s.spotShadowMap[m]=H,R++}m++}else if(L.isRectAreaLight){const J=t.get(L);J.color.copy(z).multiplyScalar(B),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=J,y++}else if(L.isPointLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*x),J.distance=L.distance,J.decay=L.decay,L.castShadow){const j=L.shadow,Q=n.get(L);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=H,s.pointShadowMatrix[p]=L.shadow.matrix,P++}s.point[p]=J,p++}else if(L.isHemisphereLight){const J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(B*x),J.groundColor.copy(L.groundColor).multiplyScalar(B*x),s.hemi[_]=J,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==T||w.numPointShadows!==P||w.numSpotShadows!==R||w.numSpotMaps!==b||w.numLightProbes!==F)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=y,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+b-D,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=F,w.directionalLength=v,w.pointLength=p,w.spotLength=m,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=T,w.numPointShadows=P,w.numSpotShadows=R,w.numSpotMaps=b,w.numLightProbes=F,s.version=Wd++)}function l(h,u){let d=0,f=0,g=0,v=0,p=0;const m=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const T=h[y];if(T.isDirectionalLight){const P=s.directional[d];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),d++}else if(T.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const P=s.rectArea[v];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const P=s.point[f];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const P=s.hemi[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:s}}function xa(i,e){const t=new qd(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Yd(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new xa(i,e),t.set(r,[c])):o>=a.length?(c=new xa(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class $d extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kd extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jd(i,e,t){let n=new _r;const s=new pe,r=new pe,o=new xt,a=new $d({depthPacking:3201}),c=new Kd,l={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Zd,fragmentShader:Jd}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new k(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(R,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const F=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),$=i.state;$.setBlending(0),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=m!==3&&this.type===3,L=m===3&&this.type!==3;for(let z=0,B=R.length;z<B;z++){const q=R[z],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||K===!0||L===!0){const Q=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new kn(s.x,s.y,Q),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const j=H.getViewportCount();for(let Q=0;Q<j;Q++){const le=H.getViewport(Q);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),$.viewport(o),H.updateMatrices(q,Q),n=H.getFrustum(),T(b,D,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===3&&y(H,D),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(F,x,w)};function y(R,b){const D=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,D,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,D,f,v,null)}function _(R,b,D,F){let x=null;const w=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=x.uuid,K=b.uuid;let L=l[$];L===void 0&&(L={},l[$]=L);let z=L[K];z===void 0&&(z=x.clone(),L[K]=z,b.addEventListener("dispose",P)),x=z}if(x.visible=b.visible,x.wireframe=b.wireframe,F===3?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=i.properties.get(x);$.light=D}return x}function T(R,b,D,F,x){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const K=e.update(R),L=R.material;if(Array.isArray(L)){const z=K.groups;for(let B=0,q=z.length;B<q;B++){const H=z[B],J=L[H.materialIndex];if(J&&J.visible){const j=_(R,J,F,x);R.onBeforeShadow(i,R,b,D,K,j,H),i.renderBufferDirect(D,null,K,j,R,H),R.onAfterShadow(i,R,b,D,K,j,H)}}}else if(L.visible){const z=_(R,L,F,x);R.onBeforeShadow(i,R,b,D,K,z,null),i.renderBufferDirect(D,null,K,z,R,null),R.onAfterShadow(i,R,b,D,K,z,null)}}const $=R.children;for(let K=0,L=$.length;K<L;K++)T($[K],b,D,F,x)}function P(R){R.target.removeEventListener("dispose",P);for(const D in l){const F=l[D],x=R.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}function Qd(i,e,t){const n=t.isWebGL2;function s(){let U=!1;const he=new xt;let W=null;const ae=new xt(0,0,0,0);return{setMask:function(de){W!==de&&!U&&(i.colorMask(de,de,de,de),W=de)},setLocked:function(de){U=de},setClear:function(de,Xe,je,yt,Gt){Gt===!0&&(de*=yt,Xe*=yt,je*=yt),he.set(de,Xe,je,yt),ae.equals(he)===!1&&(i.clearColor(de,Xe,je,yt),ae.copy(he))},reset:function(){U=!1,W=null,ae.set(-1,0,0,0)}}}function r(){let U=!1,he=null,W=null,ae=null;return{setTest:function(de){de?ge(i.DEPTH_TEST):Ze(i.DEPTH_TEST)},setMask:function(de){he!==de&&!U&&(i.depthMask(de),he=de)},setFunc:function(de){if(W!==de){switch(de){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=de}},setLocked:function(de){U=de},setClear:function(de){ae!==de&&(i.clearDepth(de),ae=de)},reset:function(){U=!1,he=null,W=null,ae=null}}}function o(){let U=!1,he=null,W=null,ae=null,de=null,Xe=null,je=null,yt=null,Gt=null;return{setTest:function(Qe){U||(Qe?ge(i.STENCIL_TEST):Ze(i.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!U&&(i.stencilMask(Qe),he=Qe)},setFunc:function(Qe,Rt,en){(W!==Qe||ae!==Rt||de!==en)&&(i.stencilFunc(Qe,Rt,en),W=Qe,ae=Rt,de=en)},setOp:function(Qe,Rt,en){(Xe!==Qe||je!==Rt||yt!==en)&&(i.stencilOp(Qe,Rt,en),Xe=Qe,je=Rt,yt=en)},setLocked:function(Qe){U=Qe},setClear:function(Qe){Gt!==Qe&&(i.clearStencil(Qe),Gt=Qe)},reset:function(){U=!1,he=null,W=null,ae=null,de=null,Xe=null,je=null,yt=null,Gt=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,v=[],p=null,m=!1,y=null,_=null,T=null,P=null,R=null,b=null,D=null,F=new ke(0,0,0),x=0,w=!1,$=null,K=null,L=null,z=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=J>=2);let Q=null,le={};const ye=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),te=new xt().fromArray(ye),se=new xt().fromArray(V);function _e(U,he,W,ae){const de=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(U,Xe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<W;je++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(he+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Xe}const ve={};ve[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ge(i.DEPTH_TEST),c.setFunc(3),Ge(!1),He(1),ge(i.CULL_FACE),be(0);function ge(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Ze(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Pe(U,he){return f[U]!==he?(i.bindFramebuffer(U,he),f[U]=he,n&&(U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function O(U,he){let W=v,ae=!1;if(U){W=g.get(he),W===void 0&&(W=[],g.set(he,W));const de=U.textures;if(W.length!==de.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,je=de.length;Xe<je;Xe++)W[Xe]=i.COLOR_ATTACHMENT0+Xe;W.length=de.length,ae=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,ae=!0);if(ae)if(t.isWebGL2)i.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function St(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const Te={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};if(n)Te[103]=i.MIN,Te[104]=i.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Te[103]=U.MIN_EXT,Te[104]=U.MAX_EXT)}const Ve={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function be(U,he,W,ae,de,Xe,je,yt,Gt,Qe){if(U===0){m===!0&&(Ze(i.BLEND),m=!1);return}if(m===!1&&(ge(i.BLEND),m=!0),U!==5){if(U!==y||Qe!==w){if((_!==100||R!==100)&&(i.blendEquation(i.FUNC_ADD),_=100,R=100),Qe)switch(U){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,P=null,b=null,D=null,F.set(0,0,0),x=0,y=U,w=Qe}return}de=de||he,Xe=Xe||W,je=je||ae,(he!==_||de!==R)&&(i.blendEquationSeparate(Te[he],Te[de]),_=he,R=de),(W!==T||ae!==P||Xe!==b||je!==D)&&(i.blendFuncSeparate(Ve[W],Ve[ae],Ve[Xe],Ve[je]),T=W,P=ae,b=Xe,D=je),(yt.equals(F)===!1||Gt!==x)&&(i.blendColor(yt.r,yt.g,yt.b,Gt),F.copy(yt),x=Gt),y=U,w=!1}function qe(U,he){U.side===2?Ze(i.CULL_FACE):ge(i.CULL_FACE);let W=U.side===1;he&&(W=!W),Ge(W),U.blending===1&&U.transparent===!1?be(0):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);const ae=U.stencilWrite;l.setTest(ae),ae&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){$!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),$=U)}function He(U){U!==0?(ge(i.CULL_FACE),U!==K&&(U===1?i.cullFace(i.BACK):U===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ze(i.CULL_FACE),K=U}function lt(U){U!==L&&(H&&i.lineWidth(U),L=U)}function C(U,he,W){U?(ge(i.POLYGON_OFFSET_FILL),(z!==he||B!==W)&&(i.polygonOffset(he,W),z=he,B=W)):Ze(i.POLYGON_OFFSET_FILL)}function M(U){U?ge(i.SCISSOR_TEST):Ze(i.SCISSOR_TEST)}function Z(U){U===void 0&&(U=i.TEXTURE0+q-1),Q!==U&&(i.activeTexture(U),Q=U)}function ee(U,he,W){W===void 0&&(Q===null?W=i.TEXTURE0+q-1:W=Q);let ae=le[W];ae===void 0&&(ae={type:void 0,texture:void 0},le[W]=ae),(ae.type!==U||ae.texture!==he)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(U,he||ve[U]),ae.type=U,ae.texture=he)}function ie(){const U=le[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){te.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function Me(U){se.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function Ye(U,he){let W=u.get(he);W===void 0&&(W=new WeakMap,u.set(he,W));let ae=W.get(U);ae===void 0&&(ae=i.getUniformBlockIndex(he,U.name),W.set(U,ae))}function Ie(U,he){const ae=u.get(he).get(U);h.get(he)!==ae&&(i.uniformBlockBinding(he,ae,U.__bindingPointIndex),h.set(he,ae))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,le={},f={},g=new WeakMap,v=[],p=null,m=!1,y=null,_=null,T=null,P=null,R=null,b=null,D=null,F=new ke(0,0,0),x=0,w=!1,$=null,K=null,L=null,z=null,B=null,te.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ge,disable:Ze,bindFramebuffer:Pe,drawBuffers:O,useProgram:St,setBlending:be,setMaterial:qe,setFlipSided:Ge,setCullFace:He,setLineWidth:lt,setPolygonOffset:C,setScissorTest:M,activeTexture:Z,bindTexture:ee,unbindTexture:ie,compressedTexImage2D:ne,compressedTexImage3D:Ue,texImage2D:We,texImage3D:Ee,updateUBOMapping:Ye,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:ut,texSubImage2D:Ae,texSubImage3D:ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ne,scissor:xe,viewport:Me,reset:it}}function ef(i,e,t,n,s,r,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return g?new OffscreenCanvas(C,M):gs("canvas")}function p(C,M,Z,ee){let ie=1;const ne=lt(C);if((ne.width>ee||ne.height>ee)&&(ie=ee/Math.max(ne.width,ne.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ue=M?ms:Math.floor,Ae=Ue(ie*ne.width),ce=Ue(ie*ne.height);d===void 0&&(d=v(Ae,ce));const ue=Z?v(Ae,ce):d;return ue.width=Ae,ue.height=ce,ue.getContext("2d").drawImage(C,0,0,Ae,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Ae+"x"+ce+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){const M=lt(C);return ar(M.width)&&ar(M.height)}function y(C){return a?!1:C.wrapS!==1001||C.wrapT!==1001||C.minFilter!==1003&&C.minFilter!==1006}function _(C,M){return C.generateMipmaps&&M&&C.minFilter!==1003&&C.minFilter!==1006}function T(C){i.generateMipmap(C)}function P(C,M,Z,ee,ie=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=M;if(M===i.RED&&(Z===i.FLOAT&&(ne=i.R32F),Z===i.HALF_FLOAT&&(ne=i.R16F),Z===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ne=i.R8UI),Z===i.UNSIGNED_SHORT&&(ne=i.R16UI),Z===i.UNSIGNED_INT&&(ne=i.R32UI),Z===i.BYTE&&(ne=i.R8I),Z===i.SHORT&&(ne=i.R16I),Z===i.INT&&(ne=i.R32I)),M===i.RG&&(Z===i.FLOAT&&(ne=i.RG32F),Z===i.HALF_FLOAT&&(ne=i.RG16F),Z===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ne=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ne=i.RG16UI),Z===i.UNSIGNED_INT&&(ne=i.RG32UI),Z===i.BYTE&&(ne=i.RG8I),Z===i.SHORT&&(ne=i.RG16I),Z===i.INT&&(ne=i.RG32I)),M===i.RGBA){const Ue=ie?ds:Je.getTransfer(ee);Z===i.FLOAT&&(ne=i.RGBA32F),Z===i.HALF_FLOAT&&(ne=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ne=Ue===et?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(C,M,Z){return _(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){return C===1003||C===1004||C===1005?i.NEAREST:i.LINEAR}function D(C){const M=C.target;M.removeEventListener("dispose",D),x(M),M.isVideoTexture&&u.delete(M)}function F(C){const M=C.target;M.removeEventListener("dispose",F),$(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const Z=C.source,ee=f.get(Z);if(ee){const ie=ee[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(C),Object.keys(ee).length===0&&f.delete(Z)}n.remove(C)}function w(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const Z=C.source,ee=f.get(Z);delete ee[M.__cacheKey],o.memory.textures--}function $(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ie=0;ie<M.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(M.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[ee]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=C.textures;for(let ee=0,ie=Z.length;ee<ie;ee++){const ne=n.get(Z[ee]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(Z[ee])}n.remove(C)}let K=0;function L(){K=0}function z(){const C=K;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),K+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const Z=n.get(C);if(C.isVideoTexture&&Ge(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,C,M);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+M)}function H(C,M){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){se(Z,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+M)}function J(C,M){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){se(Z,C,M);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+M)}function j(C,M){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){_e(Z,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+M)}const Q={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},le={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ye={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function V(C,M,Z){if(M.type===1015&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(i.texParameteri(C,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[M.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==1001||M.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,b(M.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==1003&&M.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function te(C,M){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",D));const ee=M.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const ne=B(M);if(ne!==C.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ie[ne].usedTimes++;const Ue=ie[C.__cacheKey];Ue!==void 0&&(ie[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&w(M)),C.__cacheKey=ne,C.__webglTexture=ie[ne].texture}return Z}function se(C,M,Z){let ee=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=i.TEXTURE_3D);const ie=te(C,M),ne=M.source;t.bindTexture(ee,C.__webglTexture,i.TEXTURE0+Z);const Ue=n.get(ne);if(ne.version!==Ue.__version||ie===!0){t.activeTexture(i.TEXTURE0+Z);const Ae=Je.getPrimaries(Je.workingColorSpace),ce=M.colorSpace===En?null:Je.getPrimaries(M.colorSpace),ue=M.colorSpace===En||Ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ne=y(M)&&m(M.image)===!1;let re=p(M.image,Ne,!1,s.maxTextureSize);re=He(M,re);const ut=m(re)||a,We=r.convert(M.format,M.colorSpace);let Ee=r.convert(M.type),xe=P(M.internalFormat,We,Ee,M.colorSpace,M.isVideoTexture);V(ee,M,ut);let Me;const Ye=M.mipmaps,Ie=a&&M.isVideoTexture!==!0&&xe!==36196,it=Ue.__version===void 0||ie===!0,U=ne.dataReady,he=R(M,re,ut);if(M.isDepthTexture)xe=i.DEPTH_COMPONENT,a?M.type===1015?xe=i.DEPTH_COMPONENT32F:M.type===1014?xe=i.DEPTH_COMPONENT24:M.type===1020?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:M.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===1026&&xe===i.DEPTH_COMPONENT&&M.type!==1012&&M.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=1014,Ee=r.convert(M.type)),M.format===1027&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,M.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=1020,Ee=r.convert(M.type))),it&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,xe,re.width,re.height,0,We,Ee,null));else if(M.isDataTexture)if(Ye.length>0&&ut){Ie&&it&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ye[0].width,Ye[0].height);for(let W=0,ae=Ye.length;W<ae;W++)Me=Ye[W],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Me.width,Me.height,We,Ee,Me.data):t.texImage2D(i.TEXTURE_2D,W,xe,Me.width,Me.height,0,We,Ee,Me.data);M.generateMipmaps=!1}else Ie?(it&&t.texStorage2D(i.TEXTURE_2D,he,xe,re.width,re.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,We,Ee,re.data)):t.texImage2D(i.TEXTURE_2D,0,xe,re.width,re.height,0,We,Ee,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ie&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Ye[0].width,Ye[0].height,re.depth);for(let W=0,ae=Ye.length;W<ae;W++)Me=Ye[W],M.format!==1023?We!==null?Ie?U&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,re.depth,We,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,xe,Me.width,Me.height,re.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,re.depth,We,Ee,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,xe,Me.width,Me.height,re.depth,0,We,Ee,Me.data)}else{Ie&&it&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ye[0].width,Ye[0].height);for(let W=0,ae=Ye.length;W<ae;W++)Me=Ye[W],M.format!==1023?We!==null?Ie?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Me.width,Me.height,We,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,W,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Me.width,Me.height,We,Ee,Me.data):t.texImage2D(i.TEXTURE_2D,W,xe,Me.width,Me.height,0,We,Ee,Me.data)}else if(M.isDataArrayTexture)Ie?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,re.width,re.height,re.depth),U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,We,Ee,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,We,Ee,re.data);else if(M.isData3DTexture)Ie?(it&&t.texStorage3D(i.TEXTURE_3D,he,xe,re.width,re.height,re.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,We,Ee,re.data)):t.texImage3D(i.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,We,Ee,re.data);else if(M.isFramebufferTexture){if(it)if(Ie)t.texStorage2D(i.TEXTURE_2D,he,xe,re.width,re.height);else{let W=re.width,ae=re.height;for(let de=0;de<he;de++)t.texImage2D(i.TEXTURE_2D,de,xe,W,ae,0,We,Ee,null),W>>=1,ae>>=1}}else if(Ye.length>0&&ut){if(Ie&&it){const W=lt(Ye[0]);t.texStorage2D(i.TEXTURE_2D,he,xe,W.width,W.height)}for(let W=0,ae=Ye.length;W<ae;W++)Me=Ye[W],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,We,Ee,Me):t.texImage2D(i.TEXTURE_2D,W,xe,We,Ee,Me);M.generateMipmaps=!1}else if(Ie){if(it){const W=lt(re);t.texStorage2D(i.TEXTURE_2D,he,xe,W.width,W.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,Ee,re)}else t.texImage2D(i.TEXTURE_2D,0,xe,We,Ee,re);_(M,ut)&&T(ee),Ue.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _e(C,M,Z){if(M.image.length!==6)return;const ee=te(C,M),ie=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Z);const ne=n.get(ie);if(ie.version!==ne.__version||ee===!0){t.activeTexture(i.TEXTURE0+Z);const Ue=Je.getPrimaries(Je.workingColorSpace),Ae=M.colorSpace===En?null:Je.getPrimaries(M.colorSpace),ce=M.colorSpace===En||Ue===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,re=[];for(let W=0;W<6;W++)!ue&&!Ne?re[W]=p(M.image[W],!1,!0,s.maxCubemapSize):re[W]=Ne?M.image[W].image:M.image[W],re[W]=He(M,re[W]);const ut=re[0],We=m(ut)||a,Ee=r.convert(M.format,M.colorSpace),xe=r.convert(M.type),Me=P(M.internalFormat,Ee,xe,M.colorSpace),Ye=a&&M.isVideoTexture!==!0,Ie=ne.__version===void 0||ee===!0,it=ie.dataReady;let U=R(M,ut,We);V(i.TEXTURE_CUBE_MAP,M,We);let he;if(ue){Ye&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,U,Me,ut.width,ut.height);for(let W=0;W<6;W++){he=re[W].mipmaps;for(let ae=0;ae<he.length;ae++){const de=he[ae];M.format!==1023?Ee!==null?Ye?it&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,0,0,de.width,de.height,Ee,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,Me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,0,0,de.width,de.height,Ee,xe,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae,Me,de.width,de.height,0,Ee,xe,de.data)}}}else{if(he=M.mipmaps,Ye&&Ie){he.length>0&&U++;const W=lt(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,U,Me,W.width,W.height)}for(let W=0;W<6;W++)if(Ne){Ye?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,re[W].width,re[W].height,Ee,xe,re[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Me,re[W].width,re[W].height,0,Ee,xe,re[W].data);for(let ae=0;ae<he.length;ae++){const Xe=he[ae].image[W].image;Ye?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,0,0,Xe.width,Xe.height,Ee,xe,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,Me,Xe.width,Xe.height,0,Ee,xe,Xe.data)}}else{Ye?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ee,xe,re[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Me,Ee,xe,re[W]);for(let ae=0;ae<he.length;ae++){const de=he[ae];Ye?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,0,0,Ee,xe,de.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,ae+1,Me,Ee,xe,de.image[W])}}}_(M,We)&&T(i.TEXTURE_CUBE_MAP),ne.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ve(C,M,Z,ee,ie,ne){const Ue=r.convert(Z.format,Z.colorSpace),Ae=r.convert(Z.type),ce=P(Z.internalFormat,Ue,Ae,Z.colorSpace);if(!n.get(M).__hasExternalTextures){const Ne=Math.max(1,M.width>>ne),re=Math.max(1,M.height>>ne);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,ce,Ne,re,M.depth,0,Ue,Ae,null):t.texImage2D(ie,ne,ce,Ne,re,0,Ue,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),qe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,n.get(Z).__webglTexture,0,be(M)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,n.get(Z).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,M,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ee=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||qe(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===1015?ee=i.DEPTH_COMPONENT32F:ie.type===1014&&(ee=i.DEPTH_COMPONENT24));const ne=be(M);qe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,ee,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ee,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ee=be(M);Z&&qe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,M.width,M.height):qe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ee=M.textures;for(let ie=0;ie<ee.length;ie++){const ne=ee[ie],Ue=r.convert(ne.format,ne.colorSpace),Ae=r.convert(ne.type),ce=P(ne.internalFormat,Ue,Ae,ne.colorSpace),ue=be(M);Z&&qe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ce,M.width,M.height):qe(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,ie=be(M);if(M.depthTexture.format===1026)qe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===1027)qe(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const M=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ze(M.__webglFramebuffer,C)}else if(Z){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=i.createRenderbuffer(),ge(M.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ge(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(C,M,Z){const ee=n.get(C);M!==void 0&&ve(ee.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Pe(C)}function St(C){const M=C.texture,Z=n.get(C),ee=n.get(M);C.addEventListener("dispose",F);const ie=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Ue=ie.length>1,Ae=m(C)||a;if(Ue||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=M.version,o.memory.textures++),ne){Z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[ce]=[];for(let ue=0;ue<M.mipmaps.length;ue++)Z.__webglFramebuffer[ce][ue]=i.createFramebuffer()}else Z.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)Z.__webglFramebuffer[ce]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ue)if(s.drawBuffers)for(let ce=0,ue=ie.length;ce<ue;ce++){const Ne=n.get(ie[ce]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&qe(C)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const ue=ie[ce];Z.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ce]);const Ne=r.convert(ue.format,ue.colorSpace),re=r.convert(ue.type),ut=P(ue.internalFormat,Ne,re,ue.colorSpace,C.isXRRenderTarget===!0),We=be(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,Ae);for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ve(Z.__webglFramebuffer[ce][ue],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else ve(Z.__webglFramebuffer[ce],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(M,Ae)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ce=0,ue=ie.length;ce<ue;ce++){const Ne=ie[ce],re=n.get(Ne);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),V(i.TEXTURE_2D,Ne,Ae),ve(Z.__webglFramebuffer,C,Ne,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),_(Ne,Ae)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),V(ce,M,Ae),a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)ve(Z.__webglFramebuffer[ue],C,M,i.COLOR_ATTACHMENT0,ce,ue);else ve(Z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ce,0);_(M,Ae)&&T(ce),t.unbindTexture()}C.depthBuffer&&Pe(C)}function Te(C){const M=m(C)||a,Z=C.textures;for(let ee=0,ie=Z.length;ee<ie;ee++){const ne=Z[ee];if(_(ne,M)){const Ue=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(ne).__webglTexture;t.bindTexture(Ue,Ae),T(Ue),t.unbindTexture()}}}function Ve(C){if(a&&C.samples>0&&qe(C)===!1){const M=C.textures,Z=C.width,ee=C.height;let ie=i.COLOR_BUFFER_BIT;const ne=[],Ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),ce=M.length>1;if(ce)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){ne.push(i.COLOR_ATTACHMENT0+ue),C.depthBuffer&&ne.push(Ue);const Ne=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(Ne===!1&&(C.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ue]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),ce){const re=n.get(M[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,ie,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ue]);const Ne=n.get(M[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function be(C){return Math.min(s.maxSamples,C.samples)}function qe(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function He(C,M){const Z=C.colorSpace,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===1035||Z!==bn&&Z!==En&&(Je.getTransfer(Z)===et?a===!1?e.has("EXT_sRGB")===!0&&ee===1023?(C.format=1035,C.minFilter=1006,C.generateMipmaps=!1):M=to.sRGBToLinear(M):(ee!==1023||ie!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),M}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=O,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function tf(i,e,t){const n=t.isWebGL2;function s(r,o=En){let a;const c=Je.getTransfer(o);if(r===1009)return i.UNSIGNED_BYTE;if(r===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return i.BYTE;if(r===1011)return i.SHORT;if(r===1012)return i.UNSIGNED_SHORT;if(r===1013)return i.INT;if(r===1014)return i.UNSIGNED_INT;if(r===1015)return i.FLOAT;if(r===1016)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return i.ALPHA;if(r===1023)return i.RGBA;if(r===1024)return i.LUMINANCE;if(r===1025)return i.LUMINANCE_ALPHA;if(r===1026)return i.DEPTH_COMPONENT;if(r===1027)return i.DEPTH_STENCIL;if(r===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return i.RED;if(r===1029)return i.RED_INTEGER;if(r===1030)return i.RG;if(r===1031)return i.RG_INTEGER;if(r===1033)return i.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(c===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return c===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return c===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class nf extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Re extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sf={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const rf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,af=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class of{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new wn({extensions:{fragDepth:!0},vertexShader:rf,fragmentShader:af,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new k(new mn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cf extends hi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new of,p=t.getContextAttributes();let m=null,y=null;const _=[],T=[],P=new pe;let R=null;const b=new Xt;b.layers.enable(1),b.viewport=new xt;const D=new Xt;D.layers.enable(2),D.viewport=new xt;const F=[b,D],x=new nf;x.layers.enable(1),x.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=_[V];return te===void 0&&(te=new Qs,_[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=_[V];return te===void 0&&(te=new Qs,_[V]=te),te.getGripSpace()},this.getHand=function(V){let te=_[V];return te===void 0&&(te=new Qs,_[V]=te),te.getHandSpace()};function K(V){const te=T.indexOf(V.inputSource);if(te===-1)return;const se=_[te];se!==void 0&&(se.update(V.inputSource,V.frame,l||o),se.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",z);for(let V=0;V<_.length;V++){const te=T[V];te!==null&&(T[V]=null,_[V].disconnect(te))}w=null,$=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,y=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",L),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new kn(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,se=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?1027:1026,se=p.stencil?1020:1014);const ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new kn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new mo(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ge=e.properties.get(y);ge.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(V){for(let te=0;te<V.removed.length;te++){const se=V.removed[te],_e=T.indexOf(se);_e>=0&&(T[_e]=null,_[_e].disconnect(se))}for(let te=0;te<V.added.length;te++){const se=V.added[te];let _e=T.indexOf(se);if(_e===-1){for(let ge=0;ge<_.length;ge++)if(ge>=T.length){T.push(se),_e=ge;break}else if(T[ge]===null){T[ge]=se,_e=ge;break}if(_e===-1)break}const ve=_[_e];ve&&ve.connect(se)}}const B=new I,q=new I;function H(V,te,se){B.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const _e=B.distanceTo(q),ve=te.projectionMatrix.elements,ge=se.projectionMatrix.elements,Ze=ve[14]/(ve[10]-1),Pe=ve[14]/(ve[10]+1),O=(ve[9]+1)/ve[5],St=(ve[9]-1)/ve[5],Te=(ve[8]-1)/ve[0],Ve=(ge[8]+1)/ge[0],be=Ze*Te,qe=Ze*Ve,Ge=_e/(-Te+Ve),He=Ge*-Te;te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(He),V.translateZ(Ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const lt=Ze+Ge,C=Pe+Ge,M=be-He,Z=qe+(_e-He),ee=O*Pe/C*lt,ie=St*Pe/C*lt;V.projectionMatrix.makePerspective(M,Z,ee,ie,lt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;v.texture!==null&&(V.near=v.depthNear,V.far=v.depthFar),x.near=D.near=b.near=V.near,x.far=D.far=b.far=V.far,(w!==x.near||$!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,$=x.far,b.near=w,b.far=$,D.near=w,D.far=$,b.updateProjectionMatrix(),D.updateProjectionMatrix(),V.updateProjectionMatrix());const te=V.parent,se=x.cameras;J(x,te);for(let _e=0;_e<se.length;_e++)J(se[_e],te);se.length===2?H(x,b,D):x.projectionMatrix.copy(b.projectionMatrix),j(V,x,te)};function j(V,te,se){se===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null};let Q=null;function le(V,te){if(h=te.getViewerPose(l||o),g=te,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let _e=!1;se.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let ge=0;ge<se.length;ge++){const Ze=se[ge];let Pe=null;if(f!==null)Pe=f.getViewport(Ze);else{const St=u.getViewSubImage(d,Ze);Pe=St.viewport,ge===0&&(e.setRenderTargetTextures(y,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(y))}let O=F[ge];O===void 0&&(O=new Xt,O.layers.enable(ge),O.viewport=new xt,F[ge]=O),O.matrix.fromArray(Ze.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Ze.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(O)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const ge=u.getDepthInformation(se[0]);ge&&ge.isValid&&ge.texture&&v.init(e,ge,s.renderState)}}for(let se=0;se<_.length;se++){const _e=T[se],ve=_[se];_e!==null&&ve!==void 0&&ve.update(_e,te,l||o)}v.render(e,x),Q&&Q(V,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ye=new fo;ye.setAnimationLoop(le),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const Un=new an,lf=new ot;function hf(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,lo(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,T=y.envMapRotation;if(_&&(p.envMap.value=_,Un.copy(T),Un.x*=-1,Un.y*=-1,Un.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),p.envMapRotation.value.setFromMatrix4(lf.makeRotationFromEuler(Un)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*P,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uf(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const T=_.program;n.uniformBlockBinding(y,T)}function l(y,_){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",p));const P=_.program;n.updateUBOMapping(y,P);const R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const _=u();y.__bindingPointIndex=_;const T=i.createBuffer(),P=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],T=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,b=T.length;R<b;R++){const D=Array.isArray(T[R])?T[R]:[T[R]];for(let F=0,x=D.length;F<x;F++){const w=D[F];if(f(w,R,F,P)===!0){const $=w.__offset,K=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let z=0;z<K.length;z++){const B=K[z],q=v(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,$+L,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,T,P){const R=y.value,b=_+"_"+T;if(P[b]===void 0)return typeof R=="number"||typeof R=="boolean"?P[b]=R:P[b]=R.clone(),!0;{const D=P[b];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[b]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(y){const _=y.uniforms;let T=0;const P=16;for(let b=0,D=_.length;b<D;b++){const F=Array.isArray(_[b])?_[b]:[_[b]];for(let x=0,w=F.length;x<w;x++){const $=F[x],K=Array.isArray($.value)?$.value:[$.value];for(let L=0,z=K.length;L<z;L++){const B=K[L],q=v(B),H=T%P;H!==0&&P-H<q.boundary&&(T+=P-H),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=q.storage}}}const R=T%P;return R>0&&(T+=P-R),y.__size=T,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class So{constructor(e={}){const{canvas:t=Qo(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let T=!1,P=0,R=0,b=null,D=-1,F=null;const x=new xt,w=new xt;let $=null;const K=new ke(0);let L=0,z=t.width,B=t.height,q=1,H=null,J=null;const j=new xt(0,0,z,B),Q=new xt(0,0,z,B);let le=!1;const ye=new _r;let V=!1,te=!1,se=null;const _e=new ot,ve=new pe,ge=new I,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return b===null?q:1}let O=n;function St(E,N){for(let X=0;X<E.length;X++){const Y=E[X],G=t.getContext(Y,N);if(G!==null)return G}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pr}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",he,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),O=St(N,E),O===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Ve,be,qe,Ge,He,lt,C,M,Z,ee,ie,ne,Ue,Ae,ce,ue,Ne,re,ut,We,Ee,xe,Me;function Ye(){Te=new gu(O),Ve=new hu(O,Te,e),Te.init(Ve),Ee=new tf(O,Te,Ve),be=new Qd(O,Te,Ve),qe=new xu(O),Ge=new kd,He=new ef(O,Te,be,Ge,Ve,Ee,qe),lt=new du(_),C=new mu(_),M=new wc(O,Ve),xe=new cu(O,Te,M,Ve),Z=new _u(O,M,qe,xe),ee=new Eu(O,Z,M,qe),re=new yu(O,Ve,He),ce=new uu(Ge),ie=new Od(_,lt,C,Te,Ve,xe,ce),ne=new hf(_,Ge),Ue=new zd,Ae=new Yd(Te,Ve),Ne=new ou(_,lt,C,be,ee,d,c),ue=new jd(_,ee,Ve),Me=new uf(O,qe,Ve,be),ut=new lu(O,Te,qe,Ve),We=new vu(O,Te,qe,Ve),qe.programs=ie.programs,_.capabilities=Ve,_.extensions=Te,_.properties=Ge,_.renderLists=Ue,_.shadowMap=ue,_.state=be,_.info=qe}Ye();const Ie=new cf(_,O);this.xr=Ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(z,B,!1))},this.getSize=function(E){return E.set(z,B)},this.setSize=function(E,N,X=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,B=N,t.width=Math.floor(E*q),t.height=Math.floor(N*q),X===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(z*q,B*q).floor()},this.setDrawingBufferSize=function(E,N,X){z=E,B=N,q=X,t.width=Math.floor(E*X),t.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,N,X,Y){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,N,X,Y),be.viewport(x.copy(j).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,N,X,Y){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,X,Y),be.scissor(w.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){be.setScissorTest(le=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,N=!0,X=!0){let Y=0;if(E){let G=!1;if(b!==null){const fe=b.texture.format;G=fe===1033||fe===1031||fe===1029}if(G){const fe=b.texture.type,Se=fe===1009||fe===1014||fe===1012||fe===1020||fe===1017||fe===1018,we=Ne.getClearColor(),Ce=Ne.getClearAlpha(),ze=we.r,Le=we.g,De=we.b;Se?(f[0]=ze,f[1]=Le,f[2]=De,f[3]=Ce,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=ze,g[1]=Le,g[2]=De,g[3]=Ce,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}N&&(Y|=O.DEPTH_BUFFER_BIT),X&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ue.dispose(),Ae.dispose(),Ge.dispose(),lt.dispose(),C.dispose(),ee.dispose(),xe.dispose(),Me.dispose(),ie.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Gt),Ie.removeEventListener("sessionend",Qe),se&&(se.dispose(),se=null),Rt.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=qe.autoReset,N=ue.enabled,X=ue.autoUpdate,Y=ue.needsUpdate,G=ue.type;Ye(),qe.autoReset=E,ue.enabled=N,ue.autoUpdate=X,ue.needsUpdate=Y,ue.type=G}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function W(E){const N=E.target;N.removeEventListener("dispose",W),ae(N)}function ae(E){de(E),Ge.remove(E)}function de(E){const N=Ge.get(E).programs;N!==void 0&&(N.forEach(function(X){ie.releaseProgram(X)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,Y,G,fe){N===null&&(N=Ze);const Se=G.isMesh&&G.matrixWorld.determinant()<0,we=Do(E,N,X,Y,G);be.setMaterial(Y,Se);let Ce=X.index,ze=1;if(Y.wireframe===!0){if(Ce=Z.getWireframeAttribute(X),Ce===void 0)return;ze=2}const Le=X.drawRange,De=X.attributes.position;let ht=Le.start*ze,Ft=(Le.start+Le.count)*ze;fe!==null&&(ht=Math.max(ht,fe.start*ze),Ft=Math.min(Ft,(fe.start+fe.count)*ze)),Ce!==null?(ht=Math.max(ht,0),Ft=Math.min(Ft,Ce.count)):De!=null&&(ht=Math.max(ht,0),Ft=Math.min(Ft,De.count));const gt=Ft-ht;if(gt<0||gt===1/0)return;xe.setup(G,Y,we,X,Ce);let cn,rt=ut;if(Ce!==null&&(cn=M.get(Ce),rt=We,rt.setIndex(cn)),G.isMesh)Y.wireframe===!0?(be.setLineWidth(Y.wireframeLinewidth*Pe()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(G.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),be.setLineWidth(Fe*Pe()),G.isLineSegments?rt.setMode(O.LINES):G.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else G.isPoints?rt.setMode(O.POINTS):G.isSprite&&rt.setMode(O.TRIANGLES);if(G.isBatchedMesh)rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)rt.renderInstances(ht,gt,G.count);else if(X.isInstancedBufferGeometry){const Fe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ws=Math.min(X.instanceCount,Fe);rt.renderInstances(ht,gt,ws)}else rt.render(ht,gt)};function Xe(E,N,X){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,Bi(E,N,X),E.side=0,E.needsUpdate=!0,Bi(E,N,X),E.side=2):Bi(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),p=Ae.get(X),p.init(),y.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(_._useLegacyLights);const Y=new Set;return E.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const we=fe[Se];Xe(we,X,G),Y.add(we)}else Xe(fe,X,G),Y.add(fe)}),y.pop(),p=null,Y},this.compileAsync=function(E,N,X=null){const Y=this.compile(E,N,X);return new Promise(G=>{function fe(){if(Y.forEach(function(Se){Ge.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){G(E);return}setTimeout(fe,10)}Te.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let je=null;function yt(E){je&&je(E)}function Gt(){Rt.stop()}function Qe(){Rt.start()}const Rt=new fo;Rt.setAnimationLoop(yt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(E){je=E,Ie.setAnimationLoop(E),E===null?Rt.stop():Rt.start()},Ie.addEventListener("sessionstart",Gt),Ie.addEventListener("sessionend",Qe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(N),N=Ie.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,b),p=Ae.get(E,y.length),p.init(),y.push(p),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ye.setFromProjectionMatrix(_e),te=this.localClippingEnabled,V=ce.init(this.clippingPlanes,te),v=Ue.get(E,m.length),v.init(),m.push(v),en(E,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,J),this.info.render.frame++,V===!0&&ce.beginShadows();const X=p.state.shadowsArray;if(ue.render(X,E,N),V===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1)&&Ne.render(v,E),p.setupLights(_._useLegacyLights),N.isArrayCamera){const Y=N.cameras;for(let G=0,fe=Y.length;G<fe;G++){const Se=Y[G];br(v,E,Se,Se.viewport)}}else br(v,E,N);b!==null&&(He.updateMultisampleRenderTarget(b),He.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(_,E,N),xe.resetDefaultState(),D=-1,F=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function en(E,N,X,Y){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ye.intersectsSprite(E)){Y&&ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Se=ee.update(E),we=E.material;we.visible&&v.push(E,Se,we,X,ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ye.intersectsObject(E))){const Se=ee.update(E),we=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ge.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ge.copy(Se.boundingSphere.center)),ge.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(we)){const Ce=Se.groups;for(let ze=0,Le=Ce.length;ze<Le;ze++){const De=Ce[ze],ht=we[De.materialIndex];ht&&ht.visible&&v.push(E,Se,ht,X,ge.z,De)}}else we.visible&&v.push(E,Se,we,X,ge.z,null)}}const fe=E.children;for(let Se=0,we=fe.length;Se<we;Se++)en(fe[Se],N,X,Y)}function br(E,N,X,Y){const G=E.opaque,fe=E.transmissive,Se=E.transparent;p.setupLightsView(X),V===!0&&ce.setGlobalState(_.clippingPlanes,X),fe.length>0&&Io(G,fe,N,X),Y&&be.viewport(x.copy(Y)),G.length>0&&Fi(G,N,X),fe.length>0&&Fi(fe,N,X),Se.length>0&&Fi(Se,N,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Io(E,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const fe=Ve.isWebGL2;se===null&&(se=new kn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:fe?4:0})),_.getDrawingBufferSize(ve),fe?se.setSize(ve.x,ve.y):se.setSize(ms(ve.x),ms(ve.y));const Se=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(K),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const we=_.toneMapping;_.toneMapping=0,Fi(E,X,Y),He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se);let Ce=!1;for(let ze=0,Le=N.length;ze<Le;ze++){const De=N[ze],ht=De.object,Ft=De.geometry,gt=De.material,cn=De.group;if(gt.side===2&&ht.layers.test(Y.layers)){const rt=gt.side;gt.side=1,gt.needsUpdate=!0,Ar(ht,X,Y,Ft,gt,cn),gt.side=rt,gt.needsUpdate=!0,Ce=!0}}Ce===!0&&(He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se)),_.setRenderTarget(Se),_.setClearColor(K,L),_.toneMapping=we}function Fi(E,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let G=0,fe=E.length;G<fe;G++){const Se=E[G],we=Se.object,Ce=Se.geometry,ze=Y===null?Se.material:Y,Le=Se.group;we.layers.test(X.layers)&&Ar(we,N,X,Ce,ze,Le)}}function Ar(E,N,X,Y,G,fe){E.onBeforeRender(_,N,X,Y,G,fe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(_,N,X,Y,E,fe),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,_.renderBufferDirect(X,N,Y,G,E,fe),G.side=0,G.needsUpdate=!0,_.renderBufferDirect(X,N,Y,G,E,fe),G.side=2):_.renderBufferDirect(X,N,Y,G,E,fe),E.onAfterRender(_,N,X,Y,G,fe)}function Bi(E,N,X){N.isScene!==!0&&(N=Ze);const Y=Ge.get(E),G=p.state.lights,fe=p.state.shadowsArray,Se=G.state.version,we=ie.getParameters(E,G.state,fe,N,X),Ce=ie.getProgramCacheKey(we);let ze=Y.programs;Y.environment=E.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(E.isMeshStandardMaterial?C:lt).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",W),ze=new Map,Y.programs=ze);let Le=ze.get(Ce);if(Le!==void 0){if(Y.currentProgram===Le&&Y.lightsStateVersion===Se)return Cr(E,we),Le}else we.uniforms=ie.getUniforms(E),E.onBuild(X,we,_),E.onBeforeCompile(we,_),Le=ie.acquireProgram(we,Ce),ze.set(Ce,Le),Y.uniforms=we.uniforms;const De=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=ce.uniform),Cr(E,we),Y.needsLights=No(E),Y.lightsStateVersion=Se,Y.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Le,Y.uniformsList=null,Le}function Rr(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=us.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Cr(E,N){const X=Ge.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Do(E,N,X,Y,G){N.isScene!==!0&&(N=Ze),He.resetTextureUnits();const fe=N.fog,Se=Y.isMeshStandardMaterial?N.environment:null,we=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:bn,Ce=(Y.isMeshStandardMaterial?C:lt).get(Y.envMap||Se),ze=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Le=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,Ft=!!X.morphAttributes.color;let gt=0;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=_.toneMapping);const cn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rt=cn!==void 0?cn.length:0,Fe=Ge.get(Y),ws=p.state.lights;if(V===!0&&(te===!0||E!==F)){const zt=E===F&&Y.id===D;ce.setState(Y,E,zt)}let st=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ws.state.version||Fe.outputColorSpace!==we||G.isBatchedMesh&&Fe.batching===!1||!G.isBatchedMesh&&Fe.batching===!0||G.isInstancedMesh&&Fe.instancing===!1||!G.isInstancedMesh&&Fe.instancing===!0||G.isSkinnedMesh&&Fe.skinning===!1||!G.isSkinnedMesh&&Fe.skinning===!0||G.isInstancedMesh&&Fe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Fe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Fe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Fe.instancingMorph===!1&&G.morphTexture!==null||Fe.envMap!==Ce||Y.fog===!0&&Fe.fog!==fe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ce.numPlanes||Fe.numIntersection!==ce.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Le||Fe.morphTargets!==De||Fe.morphNormals!==ht||Fe.morphColors!==Ft||Fe.toneMapping!==gt||Ve.isWebGL2===!0&&Fe.morphTargetsCount!==rt)&&(st=!0):(st=!0,Fe.__version=Y.version);let An=Fe.currentProgram;st===!0&&(An=Bi(Y,N,G));let Pr=!1,fi=!1,bs=!1;const Et=An.getUniforms(),Rn=Fe.uniforms;if(be.useProgram(An.program)&&(Pr=!0,fi=!0,bs=!0),Y.id!==D&&(D=Y.id,fi=!0),Pr||F!==E){Et.setValue(O,"projectionMatrix",E.projectionMatrix),Et.setValue(O,"viewMatrix",E.matrixWorldInverse);const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(O,ge.setFromMatrixPosition(E.matrixWorld)),Ve.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Et.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,fi=!0,bs=!0)}if(G.isSkinnedMesh){Et.setOptional(O,G,"bindMatrix"),Et.setOptional(O,G,"bindMatrixInverse");const zt=G.skeleton;zt&&(Ve.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Et.setValue(O,"boneTexture",zt.boneTexture,He)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Et.setOptional(O,G,"batchingTexture"),Et.setValue(O,"batchingTexture",G._matricesTexture,He));const As=X.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&Ve.isWebGL2===!0)&&re.update(G,X,An),(fi||Fe.receiveShadow!==G.receiveShadow)&&(Fe.receiveShadow=G.receiveShadow,Et.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Rn.envMap.value=Ce,Rn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),fi&&(Et.setValue(O,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&Uo(Rn,bs),fe&&Y.fog===!0&&ne.refreshFogUniforms(Rn,fe),ne.refreshMaterialUniforms(Rn,Y,q,B,se),us.upload(O,Rr(Fe),Rn,He)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(us.upload(O,Rr(Fe),Rn,He),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Et.setValue(O,"center",G.center),Et.setValue(O,"modelViewMatrix",G.modelViewMatrix),Et.setValue(O,"normalMatrix",G.normalMatrix),Et.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const zt=Y.uniformsGroups;for(let Rs=0,Fo=zt.length;Rs<Fo;Rs++)if(Ve.isWebGL2){const Lr=zt[Rs];Me.update(Lr,An),Me.bind(Lr,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function Uo(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function No(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,N,X){Ge.get(E.texture).__webglTexture=N,Ge.get(E.depthTexture).__webglTexture=X;const Y=Ge.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const X=Ge.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){b=E,P=N,R=X;let Y=!0,G=null,fe=!1,Se=!1;if(E){const Ce=Ge.get(E);Ce.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):Ce.__webglFramebuffer===void 0?He.setupRenderTarget(E):Ce.__hasExternalTextures&&He.rebindTextures(E,Ge.get(E.texture).__webglTexture,Ge.get(E.depthTexture).__webglTexture);const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Le=Ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?G=Le[N][X]:G=Le[N],fe=!0):Ve.isWebGL2&&E.samples>0&&He.useMultisampledRTT(E)===!1?G=Ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[X]:G=Le,x.copy(E.viewport),w.copy(E.scissor),$=E.scissorTest}else x.copy(j).multiplyScalar(q).floor(),w.copy(Q).multiplyScalar(q).floor(),$=le;if(be.bindFramebuffer(O.FRAMEBUFFER,G)&&Ve.drawBuffers&&Y&&be.drawBuffers(E,G),be.viewport(x),be.scissor(w),be.setScissorTest($),fe){const Ce=Ge.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,X)}else if(Se){const Ce=Ge.get(E.texture),ze=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,X||0,ze)}D=-1},this.readRenderTargetPixels=function(E,N,X,Y,G,fe,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){be.bindFramebuffer(O.FRAMEBUFFER,we);try{const Ce=E.texture,ze=Ce.format,Le=Ce.type;if(ze!==1023&&Ee.convert(ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===1016&&(Te.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Le!==1009&&Ee.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===1015&&(Ve.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-Y&&X>=0&&X<=E.height-G&&O.readPixels(N,X,Y,G,Ee.convert(ze),Ee.convert(Le),fe)}finally{const Ce=b!==null?Ge.get(b).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,N,X=0){const Y=Math.pow(2,-X),G=Math.floor(N.image.width*Y),fe=Math.floor(N.image.height*Y);He.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,E.x,E.y,G,fe),be.unbindTexture()},this.copyTextureToTexture=function(E,N,X,Y=0){const G=N.image.width,fe=N.image.height,Se=Ee.convert(X.format),we=Ee.convert(X.type);He.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,E.x,E.y,G,fe,Se,we,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Y,E.x,E.y,Se,we,N.image),Y===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X,Y,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=Math.round(E.max.x-E.min.x),Se=Math.round(E.max.y-E.min.y),we=E.max.z-E.min.z+1,Ce=Ee.convert(Y.format),ze=Ee.convert(Y.type);let Le;if(Y.isData3DTexture)He.setTexture3D(Y,0),Le=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)He.setTexture2DArray(Y,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const De=O.getParameter(O.UNPACK_ROW_LENGTH),ht=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ft=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),cn=O.getParameter(O.UNPACK_SKIP_IMAGES),rt=X.isCompressedTexture?X.mipmaps[G]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Le,G,N.x,N.y,N.z,fe,Se,we,Ce,ze,rt.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,G,N.x,N.y,N.z,fe,Se,we,Ce,rt.data):O.texSubImage3D(Le,G,N.x,N.y,N.z,fe,Se,we,Ce,ze,rt),O.pixelStorei(O.UNPACK_ROW_LENGTH,De),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ft),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,cn),G===0&&Y.generateMipmaps&&O.generateMipmap(Le),be.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){P=0,R=0,b=null,be.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mr?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ms?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class df extends So{}df.prototype.isWebGL1Renderer=!0;class xr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new xr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ff extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cr extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ma=new ot,lr=new so,rs=new Ss,as=new I;class Sa extends Mt{constructor(e=new At,t=new cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),rs.radius+=r,e.ray.intersectsSphere(rs)===!1)return;Ma.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Ma);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=l.getX(g);as.fromBufferAttribute(u,p),ya(as,p,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)as.fromBufferAttribute(u,g),ya(as,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ya(i,e,t,n,s,r,o){const a=lr.distanceSqToPoint(i);if(a<t){const c=new I;lr.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new pe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],o=[],a=new I,c=new ot;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mr extends on{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pf extends Mr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sr(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const os=new I,er=new Sr,tr=new Sr,nr=new Sr;class mf extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(os.subVectors(s[0],s[1]).add(s[0]),l=os);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(os.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=os),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),er.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,p),tr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,p),nr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(er.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),tr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),nr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(er.calc(c),tr.calc(c),nr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ea(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function gf(i,e){const t=1-i;return t*t*e}function _f(i,e){return 2*(1-i)*i*e}function vf(i,e){return i*i*e}function Ti(i,e,t,n){return gf(i,e)+_f(i,t)+vf(i,n)}function xf(i,e){const t=1-i;return t*t*t*e}function Mf(i,e){const t=1-i;return 3*t*t*i*e}function Sf(i,e){return 3*(1-i)*i*i*e}function yf(i,e){return i*i*i*e}function wi(i,e,t,n,s){return xf(i,e)+Mf(i,t)+Sf(i,n)+yf(i,s)}class yo extends on{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wi(e,s.x,r.x,o.x,a.x),wi(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ef extends on{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wi(e,s.x,r.x,o.x,a.x),wi(e,s.y,r.y,o.y,a.y),wi(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eo extends on{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tf extends on{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class To extends on{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ti(e,s.x,r.x,o.x),Ti(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends on{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ti(e,s.x,r.x,o.x),Ti(e,s.y,r.y,o.y),Ti(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wo extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ea(a,c.x,l.x,h.x,u.x),Ea(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:pf,CatmullRomCurve3:mf,CubicBezierCurve:yo,CubicBezierCurve3:Ef,EllipseCurve:Mr,LineCurve:Eo,LineCurve3:Tf,QuadraticBezierCurve:To,QuadraticBezierCurve3:wf,SplineCurve:wo});class bf extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}}class wa extends bf{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Eo(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new To(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new yo(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Mr(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class me extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function y(){const T=new I,P=new I;let R=0;const b=(t-e)/n;for(let D=0;D<=r;D++){const F=[],x=D/r,w=x*(t-e)+e;for(let $=0;$<=s;$++){const K=$/s,L=K*c+a,z=Math.sin(L),B=Math.cos(L);P.x=w*z,P.y=-x*n+p,P.z=w*B,u.push(P.x,P.y,P.z),T.set(z,b,B).normalize(),d.push(T.x,T.y,T.z),f.push(K,1-x),F.push(g++)}v.push(F)}for(let D=0;D<s;D++)for(let F=0;F<r;F++){const x=v[F][D],w=v[F+1][D],$=v[F+1][D+1],K=v[F][D+1];h.push(x,w,K),h.push(w,$,K),R+=6}l.addGroup(m,R,0),m+=R}function _(T){const P=g,R=new pe,b=new I;let D=0;const F=T===!0?e:t,x=T===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const w=g;for(let $=0;$<=s;$++){const L=$/s*c+a,z=Math.cos(L),B=Math.sin(L);b.x=F*B,b.y=p*x,b.z=F*z,u.push(b.x,b.y,b.z),d.push(0,x,0),R.x=z*.5+.5,R.y=B*.5*x+.5,f.push(R.x,R.y),g++}for(let $=0;$<s;$++){const K=P+$,L=w+$;T===!0?h.push(L,L+1,K):h.push(L+1,L,K),D+=3}l.addGroup(m,D,T===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new me(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tt extends me{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new tt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new I,T=new I,P=new I;for(let R=0;R<t.length;R+=3)f(t[R+0],_),f(t[R+1],T),f(t[R+2],P),c(_,T,P,y)}function c(y,_,T,P){const R=P+1,b=[];for(let D=0;D<=R;D++){b[D]=[];const F=y.clone().lerp(T,D/R),x=_.clone().lerp(T,D/R),w=R-D;for(let $=0;$<=w;$++)$===0&&D===R?b[D][$]=F:b[D][$]=F.clone().lerp(x,$/w)}for(let D=0;D<R;D++)for(let F=0;F<2*(R-D)-1;F++){const x=Math.floor(F/2);F%2===0?(d(b[D][x+1]),d(b[D+1][x]),d(b[D][x])):(d(b[D][x+1]),d(b[D+1][x+1]),d(b[D+1][x]))}}function l(y){const _=new I;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(y),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){const y=new I;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const T=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;o.push(T,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const _=o[y+0],T=o[y+2],P=o[y+4],R=Math.max(_,T,P),b=Math.min(_,T,P);R>.9&&b<.1&&(_<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const T=y*3;_.x=e[T+0],_.y=e[T+1],_.z=e[T+2]}function g(){const y=new I,_=new I,T=new I,P=new I,R=new pe,b=new pe,D=new pe;for(let F=0,x=0;F<r.length;F+=9,x+=6){y.set(r[F+0],r[F+1],r[F+2]),_.set(r[F+3],r[F+4],r[F+5]),T.set(r[F+6],r[F+7],r[F+8]),R.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),P.copy(y).add(_).add(T).divideScalar(3);const w=p(P);v(R,x+0,y,w),v(b,x+2,_,w),v(D,x+4,T,w)}}function v(y,_,T,P){P<0&&y.x===1&&(o[_]=y.x-1),T.x===0&&T.z===0&&(o[_]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.vertices,e.indices,e.radius,e.details)}}class bo extends wa{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new wa().fromJSON(s))}return this}}const Af={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ao(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=If(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Li(r,o,t,a,c,f,0),o}};function Ao(i,e,t,n,s){let r,o;if(s===Hf(i,e,t,n)>0)for(r=e;r<t;r+=n)o=ba(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=ba(r,i[r],i[r+1],o);return o&&Es(o,o.next)&&(Di(o),o=o.next),o}function Gn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Es(t,t.next)||at(t.prev,t,t.next)===0)){if(Di(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Li(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Bf(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Cf(i,n,s,r):Rf(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Di(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Pf(Gn(i),e,t),Li(i,e,t,n,s,r,2)):o===2&&Lf(i,e,t,n,s,r):Li(Gn(i),e,t,n,s,r,1);break}}}function Rf(i){const e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ai(s,a,r,c,o,l,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cf(i,e,t,n){const s=i.prev,r=i,o=i.next;if(at(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=hr(f,g,e,t,n),y=hr(v,p,e,t,n);let _=i.prevZ,T=i.nextZ;for(;_&&_.z>=m&&T&&T.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&ai(a,h,c,u,l,d,_.x,_.y)&&at(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&ai(a,h,c,u,l,d,T.x,T.y)&&at(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&ai(a,h,c,u,l,d,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=y;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&ai(a,h,c,u,l,d,T.x,T.y)&&at(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Pf(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Es(s,r)&&Ro(s,n,n.next,r)&&Ii(s,r)&&Ii(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Di(n),Di(n.next),n=i=r),n=n.next}while(n!==i);return Gn(n)}function Lf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gf(o,a)){let c=Co(o,a);o=Gn(o,o.next),c=Gn(c,c.next),Li(o,e,t,n,s,r,0),Li(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function If(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ao(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(kf(l));for(s.sort(Df),r=0;r<s.length;r++)t=Uf(s[r],t);return t}function Df(i,e){return i.x-e.x}function Uf(i,e){const t=Nf(i,e);if(!t)return e;const n=Co(t,i);return Gn(n,n.next),Gn(t,t.next)}function Nf(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&ai(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ii(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ff(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Ff(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function Bf(i,e,t,n){let s=i;do s.z===0&&(s.z=hr(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Of(s)}function Of(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function hr(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ai(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zf(i,e)&&(Ii(i,e)&&Ii(e,i)&&Vf(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||Es(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Es(i,e){return i.x===e.x&&i.y===e.y}function Ro(i,e,t,n){const s=ls(at(i,e,t)),r=ls(at(i,e,n)),o=ls(at(t,n,i)),a=ls(at(t,n,e));return!!(s!==r&&o!==a||s===0&&cs(i,t,e)||r===0&&cs(i,n,e)||o===0&&cs(t,i,n)||a===0&&cs(t,e,n))}function cs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ls(i){return i>0?1:i<0?-1:0}function zf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ro(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ii(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function Vf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Co(i,e){const t=new ur(i.i,i.x,i.y),n=new ur(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ba(i,e,t,n){const s=new ur(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Di(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ur(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class bi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return bi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Aa(e),Ra(n,e);let o=e.length;t.forEach(Aa);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ra(n,t[c]);const a=Af.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Aa(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ra(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Er extends yr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Er(e.radius,e.detail)}}class vs extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new I,g=new pe;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const y=m+p,_=y,T=y+n+1,P=y+n+2,R=y+1;a.push(_,T,R),a.push(T,P,R)}}this.setIndex(a),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tr extends At{constructor(e=new bo([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;bi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];bi.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=bi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],_=y[0]+u,T=y[1]+u,P=y[2]+u;n.push(_,T,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Wf(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Tr(n,e.curveSegments)}}function Wf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ke extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let T=0;m===0&&o===0?T=.5/t:m===n&&c===Math.PI&&(T=-.5/t);for(let P=0;P<=t;P++){const R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(R+T,1-_),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const _=h[m][y+1],T=h[m][y],P=h[m+1][y],R=h[m+1][y+1];(m!==0||o>0)&&f.push(_,T,R),(m!==n-1||c<Math.PI)&&f.push(T,P,R)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class It extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ts extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xf extends Ts{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class qf extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ir=new ot,Ca=new I,Pa=new I;class Yf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ca.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ca),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $f extends Yf{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kf extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new $f}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zf extends wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pr);class Jf{constructor(e){A(this,"scene");A(this,"camera");A(this,"renderer");A(this,"dirLight");A(this,"hemiLight");A(this,"ambientLight");this.scene=new ff,this.scene.background=new ke(7390719),this.scene.fog=new xr(7390719,75,230);const t=window.innerWidth/window.innerHeight;this.camera=new Xt(60,t,.1,300),this.camera.position.set(0,5,8),this.renderer=new So({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.hemiLight=new qf(16777215,10868391,.95),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.ambientLight=new Zf(16777215,.55),this.scene.add(this.ambientLight),this.dirLight=new Kf(16777215,1.6),this.dirLight.position.set(20,35,15),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120;const n=22;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),window.addEventListener("resize",this.onWindowResize.bind(this))}setSkyColor(e,t,n){this.scene.background=new ke(e),this.scene.fog&&this.scene.fog.color.setHex(n),this.hemiLight.color.setHex(e),this.hemiLight.groundColor.setHex(t)}onWindowResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}updateLightTarget(e){this.dirLight.position.set(e.x+20,e.y+35,e.z+15),this.dirLight.target.position.copy(e),this.dirLight.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}class jf{constructor(){A(this,"ctx",null);A(this,"isMuted",!1);A(this,"engineOsc",null);A(this,"engineHarmonic",null);A(this,"engineFilter",null);A(this,"engineGain",null);A(this,"engineLFO",null);A(this,"engineLFOGain",null);A(this,"musicInterval",null);A(this,"isMusicPlaying",!1);A(this,"lastLaneSwitchTime",0)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted?(this.engineGain&&(this.engineGain.gain.value=0),this.stopMusic()):this.startMusic(),!this.isMuted}getMuted(){return this.isMuted}playLaneSwitchSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;if(!(e-this.lastLaneSwitchTime<.05)){this.lastLaneSwitchTime=e;try{const t=Math.floor(this.ctx.sampleRate*.035),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<t;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(t*.3));const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1100,e),o.Q.setValueAtTime(1,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.04,e),a.gain.exponentialRampToValueAtTime(.001,e+.035),r.connect(o),o.connect(a),a.connect(this.ctx.destination),r.start(e)}catch{const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(80,e+.03),n.gain.setValueAtTime(.02,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.03)}}}playCoinSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(390,e+.07),n.type="lowpass",n.frequency.setValueAtTime(700,e),s.gain.setValueAtTime(.085,e),s.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.08)}playGemSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[392,493.88].forEach((n,s)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+s*.04),o.type="lowpass",o.frequency.setValueAtTime(800,e),a.gain.setValueAtTime(.09,e+s*.04),a.gain.exponentialRampToValueAtTime(.001,e+s*.04+.14),r.connect(o),o.connect(a),a.connect(this.ctx.destination),r.start(e+s*.04),r.stop(e+s*.04+.15)})}playJumpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(240,e),t.frequency.exponentialRampToValueAtTime(620,e+.14),n.gain.setValueAtTime(.16,e),n.gain.exponentialRampToValueAtTime(.001,e+.16),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.17)}playSlideSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(110,e+.18),n.gain.setValueAtTime(.14,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.19)}playVehicleDuckSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(260,e),t.frequency.exponentialRampToValueAtTime(75,e+.2),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.22)}playDriftScreechSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(540,e),t.frequency.linearRampToValueAtTime(420,e+.12),t.frequency.exponentialRampToValueAtTime(160,e+.3),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.3)}playWaterSplashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=Math.floor(this.ctx.sampleRate*.22),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<t;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(this.ctx.sampleRate*.065));const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1400,e),o.frequency.exponentialRampToValueAtTime(450,e+.2),o.Q.setValueAtTime(1.5,e);const a=this.ctx.createGain();a.gain.setValueAtTime(.12,e),a.gain.exponentialRampToValueAtTime(.001,e+.22),r.connect(o),o.connect(a),a.connect(this.ctx.destination),r.start(e)}playMountSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+s*.07),o.gain.setValueAtTime(.18,e+s*.07),o.gain.exponentialRampToValueAtTime(.001,e+s*.07+.18),r.connect(o),o.connect(this.ctx.destination),r.start(e+s*.07),r.stop(e+s*.07+.19)})}playLevelUpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((n,s)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+s*.08),o.gain.setValueAtTime(.22,e+s*.08),o.gain.exponentialRampToValueAtTime(.001,e+s*.08+.32),r.connect(o),o.connect(this.ctx.destination),r.start(e+s*.08),r.stop(e+s*.08+.33)})}playSmashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(35,e+.22),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.23)}playCrashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(25,e+.35),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}startVehicleEngine(){if(this.isMuted||this.engineOsc||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="triangle",this.engineOsc.frequency.setValueAtTime(110,e),this.engineHarmonic=this.ctx.createOscillator(),this.engineHarmonic.type="sine",this.engineHarmonic.frequency.setValueAtTime(165,e),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(380,e),this.engineLFO=this.ctx.createOscillator(),this.engineLFO.type="sine",this.engineLFO.frequency.setValueAtTime(14,e),this.engineLFOGain=this.ctx.createGain(),this.engineLFOGain.gain.setValueAtTime(.007,e),this.engineLFO.connect(this.engineLFOGain.gain),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.025,e),this.engineOsc.connect(this.engineFilter),this.engineHarmonic.connect(this.engineFilter),this.engineFilter.connect(this.engineLFOGain),this.engineLFOGain.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start(e),this.engineHarmonic.start(e),this.engineLFO.start(e)}revEngine(){if(!this.engineOsc||!this.ctx)return;const e=this.ctx.currentTime;this.engineOsc.frequency.cancelScheduledValues(e),this.engineOsc.frequency.setValueAtTime(this.engineOsc.frequency.value,e),this.engineOsc.frequency.linearRampToValueAtTime(195,e+.12),this.engineOsc.frequency.exponentialRampToValueAtTime(115,e+.38),this.engineHarmonic&&(this.engineHarmonic.frequency.cancelScheduledValues(e),this.engineHarmonic.frequency.linearRampToValueAtTime(290,e+.12),this.engineHarmonic.frequency.exponentialRampToValueAtTime(170,e+.38)),this.engineLFO&&(this.engineLFO.frequency.linearRampToValueAtTime(22,e+.12),this.engineLFO.frequency.linearRampToValueAtTime(14,e+.38))}setEngineSpeed(e){if(!this.engineOsc||!this.ctx)return;const t=105+e*55;this.engineOsc.frequency.setTargetAtTime(t,this.ctx.currentTime,.08),this.engineHarmonic&&this.engineHarmonic.frequency.setTargetAtTime(t*1.5,this.ctx.currentTime,.08),this.engineLFO&&this.engineLFO.frequency.setTargetAtTime(13+e*7,this.ctx.currentTime,.08)}stopVehicleEngine(){if(this.engineOsc){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null}if(this.engineHarmonic){try{this.engineHarmonic.stop(),this.engineHarmonic.disconnect()}catch{}this.engineHarmonic=null}if(this.engineLFO){try{this.engineLFO.stop(),this.engineLFO.disconnect()}catch{}this.engineLFO=null}if(this.engineLFOGain){try{this.engineLFOGain.disconnect()}catch{}this.engineLFOGain=null}if(this.engineFilter){try{this.engineFilter.disconnect()}catch{}this.engineFilter=null}if(this.engineGain){try{this.engineGain.disconnect()}catch{}this.engineGain=null}}playExhaustPopSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[0,.055].forEach((t,n)=>{if(!this.ctx)return;const s=e+t,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n===0?120:145,s),r.frequency.exponentialRampToValueAtTime(35,s+.04),o.gain.setValueAtTime(.18,s),o.gain.exponentialRampToValueAtTime(.001,s+.045),r.connect(o),o.connect(this.ctx.destination),r.start(s),r.stop(s+.05);const a=Math.floor(this.ctx.sampleRate*.025),c=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=c.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*Math.exp(-f/(a*.2));const h=this.ctx.createBufferSource();h.buffer=c;const u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(n===0?1700:2100,s),u.Q.setValueAtTime(1.5,s);const d=this.ctx.createGain();d.gain.setValueAtTime(.12,s),d.gain.exponentialRampToValueAtTime(.001,s+.025),h.connect(u),u.connect(d),d.connect(this.ctx.destination),h.start(s)})}playNitroBlastSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(420,e),t.frequency.exponentialRampToValueAtTime(1600,e+.22),n.gain.setValueAtTime(.001,e),n.gain.linearRampToValueAtTime(.14,e+.15),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.36),this.playExhaustPopSound();const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(85,e+.06),s.frequency.exponentialRampToValueAtTime(25,e+.5);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(280,e+.06),r.gain.setValueAtTime(.25,e+.06),r.gain.exponentialRampToValueAtTime(.001,e+.5),s.connect(o),o.connect(r),r.connect(this.ctx.destination),s.start(e+.06),s.stop(e+.52)}startMusic(){if(this.isMuted||this.isMusicPlaying||(this.initContext(),!this.ctx))return;this.isMusicPlaying=!0;const e=[523.25,659.25,783.99,1046.5,880,783.99,659.25,783.99,587.33,698.46,880,1174.66,1046.5,880,783.99,659.25],t=[130.81,130.81,130.81,130.81,110,110,110,110,146.83,146.83,146.83,146.83,98,98,123.47,130.81];let n=0;this.musicInterval=window.setInterval(()=>{if(this.isMuted||!this.ctx||!this.isMusicPlaying)return;const s=this.ctx.currentTime,r=e[n%e.length],o=t[n%t.length];n++;const a=this.ctx.createOscillator(),c=this.ctx.createGain();if(a.type="sine",a.frequency.setValueAtTime(r,s),c.gain.setValueAtTime(.035,s),c.gain.exponentialRampToValueAtTime(1e-4,s+.15),a.connect(c),c.connect(this.ctx.destination),a.start(s),a.stop(s+.15),n%2===0){const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(o,s),h.gain.setValueAtTime(.04,s),h.gain.exponentialRampToValueAtTime(1e-4,s+.18),l.connect(h),h.connect(this.ctx.destination),l.start(s),l.stop(s+.18)}},150)}pauseMusic(){this.stopMusic()}stopMusic(){this.isMusicPlaying=!1,this.musicInterval!==null&&(clearInterval(this.musicInterval),this.musicInterval=null)}}class Qf{constructor(){A(this,"queuedActions",[]);A(this,"touchStartX",0);A(this,"touchStartY",0);A(this,"touchStartTime",0);A(this,"longPressTimer",null);A(this,"hasTriggeredLongPress",!1);A(this,"isEnabled",!0);A(this,"onPauseToggle");window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove.bind(this),{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel.bind(this),{passive:!0})}setEnabled(e){this.isEnabled=e,e||(this.clearHoldTimer(),this.queuedActions=[])}triggerBoost(){this.isEnabled&&this.queuedActions.push("boost")}handleKeyDown(e){if(e.key==="Escape"||e.key==="p"||e.key==="P"){this.onPauseToggle?.();return}this.isEnabled&&(e.code==="Space"||e.key===" "?this.queuedActions.push("boost"):e.key==="ArrowLeft"||e.key==="a"||e.key==="A"?this.queuedActions.push("left"):e.key==="ArrowRight"||e.key==="d"||e.key==="D"?this.queuedActions.push("right"):e.key==="ArrowUp"||e.key==="w"||e.key==="W"?this.queuedActions.push("jump"):(e.key==="ArrowDown"||e.key==="s"||e.key==="S")&&this.queuedActions.push("slide"))}handleTouchStart(e){!this.isEnabled||e.touches.length===0||(this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartTime=performance.now(),this.hasTriggeredLongPress=!1,this.clearHoldTimer(),this.longPressTimer=setTimeout(()=>{this.isEnabled&&!this.hasTriggeredLongPress&&(this.hasTriggeredLongPress=!0,this.queuedActions.push("boost"))},320))}handleTouchMove(e){if(e.touches.length===0)return;const t=e.touches[0].clientX,n=e.touches[0].clientY;(t-this.touchStartX)**2+(n-this.touchStartY)**2>400&&this.clearHoldTimer()}handleTouchEnd(e){if(this.clearHoldTimer(),!this.isEnabled||e.changedTouches.length===0)return;if(this.hasTriggeredLongPress){this.hasTriggeredLongPress=!1;return}const t=e.changedTouches[0].clientX-this.touchStartX,n=e.changedTouches[0].clientY-this.touchStartY;if(performance.now()-this.touchStartTime>650)return;const r=25;Math.abs(t)<r&&Math.abs(n)<r||(Math.abs(t)>Math.abs(n)?t>0?this.queuedActions.push("right"):this.queuedActions.push("left"):n<0?this.queuedActions.push("jump"):this.queuedActions.push("slide"))}handleTouchCancel(){this.clearHoldTimer()}clearHoldTimer(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}popAction(){return this.queuedActions.length>0?this.queuedActions.shift():null}clear(){this.clearHoldTimer(),this.queuedActions=[]}}const vi=[{levelNumber:1,name:"Sunburst Boardwalk",subtitle:"Seaside Town, Beach & Palm Trees",targetDistance:1440,biome:"boardwalk",baseSpeed:19,obstacleDensity:.65,hasMovingRobots:!1,rewardCoins:150},{levelNumber:2,name:"Downtown Plaza",subtitle:"Rainy Avenues, Skyscrapers & Neon",targetDistance:1600,biome:"plaza",baseSpeed:23,obstacleDensity:.85,hasMovingRobots:!0,rewardCoins:250},{levelNumber:3,name:"Pinecrest Forest",subtitle:"Alpine Snow, Cabins & Mountain Woods",targetDistance:1760,biome:"forest",baseSpeed:26,obstacleDensity:.95,hasMovingRobots:!0,rewardCoins:350},{levelNumber:4,name:"Amusement Pier",subtitle:"Neon Carnival & Rapid Dodges",targetDistance:1920,biome:"pier",baseSpeed:29,obstacleDensity:1.1,hasMovingRobots:!0,rewardCoins:450},{levelNumber:5,name:"Cyber Circuit",subtitle:"Electric Lasers & High Voltage",targetDistance:2080,biome:"cyber",baseSpeed:32,obstacleDensity:1.25,hasMovingRobots:!0,rewardCoins:600},{levelNumber:6,name:"Candy Wonderland",subtitle:"Sweet Chaos & Hyper Velocity",targetDistance:2240,biome:"candy",baseSpeed:35,obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:800}],kt={nova:{id:"nova",name:"Nova",title:"The Maker",perk:"+15% Speed & Ultra Agility",speedBonus:1.15,vehicleDurationBonus:1,magnetRangeBonus:1,hasPermanentMagnet:!1,laneAgilityBonus:1.35,smashMultiplier:1,gemPrice:0},leo:{id:"leo",name:"Leo",title:"The Baker",perk:"+35% Vehicle Fuel & 2x Smash Multiplier",speedBonus:1,vehicleDurationBonus:1.35,magnetRangeBonus:1,hasPermanentMagnet:!1,laneAgilityBonus:1,smashMultiplier:2,gemPrice:10},skye:{id:"skye",name:"Skye",title:"The Explorer",perk:"🧲 Permanent Magnet Aura (Always Pulls Coins!)",speedBonus:1.05,vehicleDurationBonus:1,magnetRangeBonus:1.4,hasPermanentMagnet:!0,laneAgilityBonus:1,smashMultiplier:1,gemPrice:20}},Qt={van:{id:"van",name:"Sweet-Treat Van",title:"Heavy Bumper Delivery",ability:"Shield Bumper & Crash Armor",description:"Bumper smashes crates & cones, and armor absorbs 1 heavy collision!",hasBumperShield:!0,hasMagnetAura:!1,hasTurboShockwave:!1,absorbsRoadblocks:!0,coinMultiplier:1,speedMultiplier:1,baseDurationSeconds:22,gemPrice:0},buggy:{id:"buggy",name:"Neon Buggy",title:"All-Terrain Cruiser",ability:"3-Lane Magnet & 2x Coins",description:"Electromagnetic field pulls all coins across 3 lanes with 2x coin multiplier!",hasBumperShield:!1,hasMagnetAura:!0,hasTurboShockwave:!1,absorbsRoadblocks:!1,coinMultiplier:2,speedMultiplier:1.05,baseDurationSeconds:20,gemPrice:15},scooter:{id:"scooter",name:"Eco Scooter",title:"Retro High-Speed Moped",ability:"Max Velocity & Agile Cornering",description:"+25% speed velocity, extreme 35° leaning cornering & swift handling!",hasBumperShield:!1,hasMagnetAura:!1,hasTurboShockwave:!1,absorbsRoadblocks:!1,coinMultiplier:1,speedMultiplier:1.25,baseDurationSeconds:18,gemPrice:25}},hs=[{id:1,name:"Sunburst Stroll",targetDistance:1200,targetCoins:35,targetSmashes:0,biome:"boardwalk"},{id:2,name:"Sweet Smash Delivery",targetDistance:2560,targetCoins:75,targetSmashes:5,biome:"plaza"},{id:3,name:"Pier Turbo Cruise",targetDistance:4e3,targetCoins:130,targetSmashes:10,biome:"pier"}],La="blockville_best_distance",Ia="blockville_best_score",Da="blockville_total_coins",Ua="blockville_total_gems",Na="blockville_unlocked_chars",Fa="blockville_unlocked_vehs",Ba="blockville_customization";class ep{constructor(){A(this,"mode","endless");A(this,"currentStageIndex",0);A(this,"characterId","nova");A(this,"vehicleId","van");A(this,"paletteId","classic");A(this,"unlockedCharacters",new Set(["nova"]));A(this,"unlockedVehicles",new Set(["van"]));A(this,"distance",0);A(this,"starCoins",0);A(this,"diamondGems",0);A(this,"smashes",0);A(this,"multiplier",1);A(this,"speed",18);A(this,"baseSpeed",18);A(this,"currentLevel",1);A(this,"levelDistance",0);A(this,"revivesUsedInRun",0);A(this,"maxRevivesPerRun",1);A(this,"isRunFinalized",!1);A(this,"runsCompleted",0);A(this,"hasRemovedAds",!1);A(this,"bestDistance",0);A(this,"bestScore",0);A(this,"totalCoinsSaved",0);A(this,"totalGemsSaved",15);this.loadPersistedData()}canRevive(){return this.revivesUsedInRun<this.maxRevivesPerRun}shouldShowInterstitialAd(){return this.hasRemovedAds?!1:this.runsCompleted>0&&this.runsCompleted%2===0}loadPersistedData(){try{this.hasRemovedAds=localStorage.getItem("blockville_iap_no_ads")==="true",this.bestDistance=parseFloat(localStorage.getItem(La)||"0"),this.bestScore=parseInt(localStorage.getItem(Ia)||"0",10),this.totalCoinsSaved=parseInt(localStorage.getItem(Da)||"0",10);const e=localStorage.getItem(Ua);e!==null&&(this.totalGemsSaved=parseInt(e,10));const t=localStorage.getItem(Na);if(t){const r=JSON.parse(t);Array.isArray(r)&&r.forEach(o=>this.unlockedCharacters.add(o))}this.unlockedCharacters.add("nova");const n=localStorage.getItem(Fa);if(n){const r=JSON.parse(n);Array.isArray(r)&&r.forEach(o=>this.unlockedVehicles.add(o))}this.unlockedVehicles.add("van");const s=localStorage.getItem(Ba);if(s){const r=JSON.parse(s);r.characterId&&kt[r.characterId]&&(this.characterId=r.characterId),r.vehicleId&&Qt[r.vehicleId]&&(this.vehicleId=r.vehicleId),r.paletteId&&(this.paletteId=r.paletteId)}}catch{}}savePersistedData(){try{localStorage.setItem(La,this.bestDistance.toFixed(0)),localStorage.setItem(Ia,this.bestScore.toString()),localStorage.setItem(Da,this.totalCoinsSaved.toString()),localStorage.setItem(Ua,this.totalGemsSaved.toString()),localStorage.setItem(Na,JSON.stringify(Array.from(this.unlockedCharacters))),localStorage.setItem(Fa,JSON.stringify(Array.from(this.unlockedVehicles))),localStorage.setItem(Ba,JSON.stringify({characterId:this.characterId,vehicleId:this.vehicleId,paletteId:this.paletteId}))}catch{}}isCharacterUnlocked(e){return this.unlockedCharacters.has(e)}isVehicleUnlocked(e){return this.unlockedVehicles.has(e)}unlockCharacter(e){const t=kt[e];return t?this.unlockedCharacters.has(e)?!0:this.totalGemsSaved>=t.gemPrice?(this.totalGemsSaved-=t.gemPrice,this.unlockedCharacters.add(e),this.savePersistedData(),!0):!1:!1}unlockVehicle(e){const t=Qt[e];return t?this.unlockedVehicles.has(e)?!0:this.totalGemsSaved>=t.gemPrice?(this.totalGemsSaved-=t.gemPrice,this.unlockedVehicles.add(e),this.savePersistedData(),!0):!1:!1}getCurrentLevelDef(){const e=Math.min(this.currentLevel-1,vi.length-1),t=vi[e];if(this.currentLevel>vi.length){const n=this.currentLevel-5;return{levelNumber:this.currentLevel,name:`Hyper Zone ${this.currentLevel}`,subtitle:"Ultimate Reflex Gauntlet",targetDistance:500+n*100,biome:vi[(this.currentLevel-1)%vi.length].biome,baseSpeed:Math.min(42,34+n*1.5),obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:250}}return t}resetRun(){this.distance=0,this.starCoins=0,this.diamondGems=0,this.smashes=0,this.currentLevel=1,this.levelDistance=0,this.multiplier=1,this.revivesUsedInRun=0,this.isRunFinalized=!1,this.baseSpeed=this.getCurrentLevelDef().baseSpeed*kt[this.characterId].speedBonus,this.speed=this.baseSpeed}updateDistanceAndSpeed(e,t=1){const n=this.getCurrentLevelDef();this.baseSpeed=n.baseSpeed*kt[this.characterId].speedBonus,this.speed=this.baseSpeed*t;const s=this.speed*e;this.distance+=s,this.levelDistance+=s}checkLevelUp(){const e=this.getCurrentLevelDef();return this.levelDistance>=e.targetDistance?(this.currentLevel++,this.levelDistance=0,this.multiplier=Math.min(10,this.currentLevel),this.addCoins(e.rewardCoins),this.getCurrentLevelDef()):null}addCoins(e=1){this.starCoins+=e*this.multiplier}addGems(e=1){this.diamondGems+=e}addSmash(){const e=kt[this.characterId]?.smashMultiplier||1;this.smashes+=e}calculateTotalScore(){return Math.floor(this.distance*2+this.starCoins*15+this.diamondGems*100+this.smashes*50)}getRunStats(e=!1){const t=this.calculateTotalScore(),n=this.distance>this.bestDistance,s=t>this.bestScore;return{distance:Math.floor(this.distance),starCoins:this.starCoins,gems:this.diamondGems,smashes:this.smashes,score:t,isNewHighDistance:n,isNewHighScore:s,stageCompleted:e}}finalizeRun(e=!1){const t=this.getRunStats(e);return this.isRunFinalized||(this.isRunFinalized=!0,this.runsCompleted++,t.isNewHighDistance&&(this.bestDistance=this.distance),t.isNewHighScore&&(this.bestScore=t.score),this.totalCoinsSaved+=this.starCoins,this.totalGemsSaved+=this.diamondGems,this.savePersistedData()),t}getActiveStage(){return this.mode!=="stage"?null:hs[this.currentStageIndex]||hs[0]}checkStageCompletion(){const e=this.getActiveStage();return e?this.distance>=e.targetDistance&&this.starCoins>=e.targetCoins&&this.smashes>=e.targetSmashes:!1}advanceStage(){const e=(this.currentStageIndex+1)*250;return this.addCoins(e),this.multiplier=Math.min(10,this.multiplier+1),this.currentStageIndex++,this.currentStageIndex<hs.length?{nextStage:hs[this.currentStageIndex],rewardCoins:e}:(this.mode="endless",this.currentLevel=4,{nextStage:null,rewardCoins:e})}}const Oa={classic:{primary:16738740,secondary:16775654,accent:5099745,chassis:12216520,wheelRim:16766287,highlight:58998},sunset:{primary:16740419,secondary:16766287,accent:16728193,chassis:6111287,wheelRim:16771899,highlight:2541274},cyber:{primary:58998,secondary:8146431,accent:58879,chassis:2171169,wheelRim:16717636,highlight:16776960},candy:{primary:15753874,secondary:16773494,accent:8508666,chassis:11771355,wheelRim:16747136,highlight:16777215}},ft=class ft{static getPlastic(e,t=.18,n=0){const s=`${e}_${t}_${n}`;if(!this.materialCache.has(s)){const r=new Ts({color:new ke(e),roughness:t,metalness:n,flatShading:!1});this.materialCache.set(s,r)}return this.materialCache.get(s)}static addStuds(e,t,n,s,r,o=2,a=2){const c=o>1?t/(o+.5):0,l=a>1?n/(a+.5):0,h=o>1?-((o-1)*c)/2:0,u=a>1?-((a-1)*l)/2:0;for(let d=0;d<o;d++)for(let f=0;f<a;f++){const g=new k(this.studGeometry,r);g.position.set(h+d*c,s+.04,u+f*l),g.castShadow=!0,g.receiveShadow=!0,e.add(g)}}static createBlock(e,t,n,s,r=!0){const o=new Nt(e,t,n),a=new k(o,s);return a.castShadow=r,a.receiveShadow=!0,a}};A(ft,"materialCache",new Map),A(ft,"SkinTone",ft.getPlastic(16767916,.4,0)),A(ft,"WhitePlastic",ft.getPlastic(16316922,.15,0)),A(ft,"BlackRubber",ft.getPlastic(2040865,.8,0)),A(ft,"Chrome",ft.getPlastic(15658734,.1,.85)),A(ft,"GoldStar",ft.getPlastic(16766720,.15,.1)),A(ft,"CyanGem",ft.getPlastic(58879,.1,.05)),A(ft,"RubyGem",ft.getPlastic(16717636,.1,.05)),A(ft,"GlassWindshield",new Xf({color:8444159,transparent:!0,opacity:.65,roughness:.1,transmission:.6,ior:1.4})),A(ft,"studGeometry",new me(.18,.18,.08,12));let S=ft;class tp{constructor(){A(this,"group");A(this,"particles",[]);A(this,"studGeom",new me(.12,.12,.08,8));A(this,"cubeGeom",new Nt(.2,.2,.2));this.group=new Re}getParticleMesh(e=!0,t=16766287){const n=S.getPlastic(t,.2,0),s=e?this.studGeom:this.cubeGeom,r=new k(s,n);return r.castShadow=!0,r}emitExhaust(e,t=5099745){const n=this.getParticleMesh(!0,t);n.position.copy(e),n.position.x+=(Math.random()-.5)*.2,n.position.y+=(Math.random()-.5)*.1,n.scale.setScalar(.7+Math.random()*.4),this.group.add(n),this.particles.push({mesh:n,velocity:new I((Math.random()-.5)*.8,.5+Math.random()*.8,3+Math.random()*2),angularVelocity:new I(Math.random()*4,Math.random()*4,Math.random()*4),life:0,maxLife:.4+Math.random()*.3,scaleInitial:n.scale.x})}emitSmashDebris(e,t=[16738740,16766287,58879,16740419]){for(let s=0;s<18;s++){const r=t[Math.floor(Math.random()*t.length)],o=Math.random()>.4,a=this.getParticleMesh(o,r);a.position.copy(e),a.position.x+=(Math.random()-.5)*.4,a.position.y+=.2+Math.random()*.4,a.scale.setScalar(.9+Math.random()*.5),this.group.add(a);const c=Math.random()*Math.PI*2,l=4+Math.random()*6;this.particles.push({mesh:a,velocity:new I(Math.cos(c)*l,3.5+Math.random()*5,Math.sin(c)*l*.8),angularVelocity:new I((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),life:0,maxLife:.7+Math.random()*.5,scaleInitial:a.scale.x})}}emitPickupSparkles(e,t=16766720){for(let s=0;s<8;s++){const r=this.getParticleMesh(!0,t);r.position.copy(e),r.scale.setScalar(.6+Math.random()*.4),this.group.add(r),this.particles.push({mesh:r,velocity:new I((Math.random()-.5)*3,2+Math.random()*3.5,(Math.random()-.5)*3),angularVelocity:new I(Math.random()*6,Math.random()*6,Math.random()*6),life:0,maxLife:.45+Math.random()*.2,scaleInitial:r.scale.x})}}emitGroundSparks(e,t=16776960){for(let s=0;s<4;s++){const r=this.getParticleMesh(!0,t);r.position.copy(e),r.position.x+=(Math.random()-.5)*.8,r.position.y=.05+Math.random()*.1,r.position.z+=(Math.random()-.5)*.5,r.scale.setScalar(.4+Math.random()*.3),this.group.add(r),this.particles.push({mesh:r,velocity:new I((Math.random()-.5)*4.5,.8+Math.random()*2.2,5+Math.random()*6),angularVelocity:new I(Math.random()*10,Math.random()*10,Math.random()*10),life:0,maxLife:.25+Math.random()*.15,scaleInitial:r.scale.x})}}emitDriftSmokeSpray(e,t=!1){const n=t?[8508666,11789820,14808574,16777215]:[14737632,16119285,15658734,16771899],s=7;for(let r=0;r<s;r++){const o=n[Math.floor(Math.random()*n.length)],a=this.getParticleMesh(!1,o);a.position.copy(e),a.position.x+=(Math.random()-.5)*1.2,a.position.y=.08+Math.random()*.25,a.position.z+=(Math.random()-.5)*.6,a.scale.setScalar(.7+Math.random()*.6),this.group.add(a),this.particles.push({mesh:a,velocity:new I((Math.random()-.5)*(t?6.5:4.5),1.8+Math.random()*(t?3.5:2),4+Math.random()*5),angularVelocity:new I((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),life:0,maxLife:.45+Math.random()*.3,scaleInitial:a.scale.x})}}update(e){for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];if(s.life+=e,s.life>=s.maxLife){this.group.remove(s.mesh),s.mesh.geometry.dispose(),this.particles.splice(n,1);continue}s.velocity.y+=-14*e,s.mesh.position.addScaledVector(s.velocity,e),s.mesh.rotation.x+=s.angularVelocity.x*e,s.mesh.rotation.y+=s.angularVelocity.y*e,s.mesh.rotation.z+=s.angularVelocity.z*e;const r=s.life/s.maxLife,o=s.scaleInitial*(1-r);s.mesh.scale.setScalar(Math.max(.001,o))}}clear(){for(const e of this.particles)this.group.remove(e.mesh),e.mesh.geometry.dispose();this.particles=[]}}class np{constructor(e){A(this,"camera");A(this,"currentLookAt",new I);A(this,"shakeTrauma",0);A(this,"targetFov",60);A(this,"showcaseAngle",0);this.camera=e}setFov(e){this.targetFov=e}addTrauma(e){this.shakeTrauma=Math.min(1,this.shakeTrauma+e)}resetTrauma(){this.shakeTrauma=0}updateFollow(e,t,n,s){let r=60;t&&(r=72),n&&(r=80),this.targetFov=r,this.camera.fov=bt.lerp(this.camera.fov,this.targetFov,s*5),this.camera.updateProjectionMatrix();const o=t?9.2:7.6,a=t?4.8:4.2,c=e.x*.75,l=e.y*.35+a,h=e.z+o;if(this.camera.position.x=bt.lerp(this.camera.position.x,c,s*12),this.camera.position.y=bt.lerp(this.camera.position.y,l,s*8),this.camera.position.z=bt.lerp(this.camera.position.z,h,s*16),this.shakeTrauma>0){const d=(Math.random()-.5)*.7*this.shakeTrauma,f=(Math.random()-.5)*.7*this.shakeTrauma;this.camera.position.x+=d,this.camera.position.y+=f,this.shakeTrauma=Math.max(0,this.shakeTrauma-s*2.2)}const u=e.y*.5+(t?1.4:1.2);this.currentLookAt.set(e.x*.6,u,e.z-6),this.camera.lookAt(this.currentLookAt),this.camera.rotation.z=0}updateShowcase(e,t){this.camera.fov=bt.lerp(this.camera.fov,50,t*4),this.camera.updateProjectionMatrix(),this.showcaseAngle+=t*.6;const n=8.5;this.camera.position.set(e.x+Math.sin(this.showcaseAngle)*n,e.y+3.6,e.z+Math.cos(this.showcaseAngle)*n),this.camera.lookAt(e.x,e.y+1.2,e.z)}}class xi{static buildCharacter(e){const t=new Re;t.name=`character_${e}`;const n=new Re;n.position.y=.85,t.add(n);const s=new Re;s.position.y=.35,n.add(s);const r=new Re;r.position.y=.72,s.add(r);const o=new Re;o.position.set(-.46,.48,0),s.add(o);const a=new Re;a.position.set(.46,.48,0),s.add(a);const c=new Re;c.position.set(-.22,0,0),n.add(c);const l=new Re;l.position.set(.22,0,0),n.add(l);let h,u;const d=S.SkinTone,f=S.getPlastic(1713022,.1,0),g=S.getPlastic(14162784,.2,0),v=S.createBlock(.44,.44,.44,d);r.add(v);const p=new me(.045,.045,.02,10);p.rotateX(Math.PI/2);const m=new k(p,f);m.position.set(-.11,.04,.23),r.add(m);const y=new k(p,f);y.position.set(.11,.04,.23),r.add(y);const _=new It(.07,.02,8,12,Math.PI);_.rotateZ(Math.PI);const T=new k(_,g);T.position.set(0,-.08,.23),r.add(T);const P=new me(.09,.09,.14,10);if(P.rotateX(Math.PI/2),e==="nova"){const R=S.getPlastic(12216520,.25,0),b=S.getPlastic(1668818,.3,0),D=S.getPlastic(58879,.18,0),F=S.createBlock(.62,.65,.38,R);s.add(F);const x=S.createBlock(.38,.18,.06,S.getPlastic(11225020,.25,0));x.position.set(0,-.15,.2),s.add(x);const w=S.getPlastic(4073251,.2,0),$=S.getPlastic(16728193,.15,0),K=S.createBlock(.48,.22,.48,w);K.position.set(0,.22,0),r.add(K);const L=S.createBlock(.44,.38,.14,w);L.position.set(0,-.04,-.22),r.add(L),[-.23,.23].forEach(j=>{const Q=S.createBlock(.08,.32,.32,w);Q.position.set(j,.02,0),r.add(Q)});const z=new k(new Ke(.15,10,10),w);z.position.set(0,.25,-.26),r.add(z);const B=new k(new Ke(.06,8,8),$);B.position.set(0,.28,-.29),r.add(B),[-.11,.11].forEach(j=>{const Q=S.createBlock(.12,.09,.06,$);Q.position.set(j,.28,-.29),Q.rotation.z=j>0?.35:-.35,r.add(Q)}),[-.06,.06].forEach(j=>{const Q=S.createBlock(.05,.22,.03,$);Q.position.set(j,.16,-.3),Q.rotation.z=j>0?-.2:.2,Q.rotation.x=-.25,r.add(Q)});const q=new k(new me(.12,.1,.35,10),w);q.position.set(0,.12,-.38),q.rotation.x=-.55,r.add(q);const H=new k(new tt(.11,.4,10),w);H.position.set(0,-.06,-.46),H.rotation.x=-.35,r.add(H),[-1,1].forEach(j=>{const Q=j===-1?o:a,le=S.createBlock(.24,.48,.24,R);le.position.y=-.24,Q.add(le);const ye=new k(P,d);ye.position.set(0,-.52,.04),Q.add(ye)});const J=S.createBlock(.56,.22,.34,b);n.add(J),[c,l].forEach(j=>{const Q=S.createBlock(.22,.28,.24,b);Q.position.y=-.14,j.add(Q);const le=S.createBlock(.2,.32,.22,d);le.position.y=-.44,j.add(le);const ye=S.createBlock(.24,.16,.36,D);ye.position.set(0,-.68,.06),j.add(ye)})}else if(e==="leo"){const R=S.getPlastic(16777215,.2,0),b=S.getPlastic(166097,.2,0),D=S.getPlastic(3622735,.25,0),F=S.getPlastic(16766287,.15,0),x=S.getPlastic(15277667,.15,0),w=S.getPlastic(16752640,.2,0),$=S.createBlock(.62,.65,.38,b);s.add($);const K=S.createBlock(.48,.62,.06,R);K.position.set(0,-.02,.18),s.add(K);const L=new k(new me(.26,.26,.12,16),R);L.position.set(0,.24,0),r.add(L);const z=new k(new me(.38,.24,.28,16),R);z.position.set(0,.42,0),r.add(z);const B=S.createBlock(.46,.12,.46,w);B.position.set(0,.18,0),r.add(B),[-1,1].forEach(H=>{const J=H===-1?o:a,j=S.createBlock(.24,.48,.24,b);j.position.y=-.24,J.add(j);const Q=new k(P,d);Q.position.set(0,-.52,.04),J.add(Q)});const q=S.createBlock(.56,.22,.34,D);n.add(q),h=[],u=[],[c,l].forEach((H,J)=>{const j=S.createBlock(.22,.58,.24,D);j.position.y=-.29,H.add(j);const Q=S.createBlock(.26,.18,.38,F);Q.position.set(0,-.66,.04),H.add(Q);const le=new me(.08,.08,.06,10);le.rotateZ(Math.PI/2);const ye=J===0?h:u;[-.15,.15].forEach(V=>{[-.1,.1].forEach(te=>{const se=new k(le,x);se.position.set(V,-.78,.04+te),H.add(se),ye.push(se)})})})}else{const R=S.getPlastic(16740419,.2,0),b=S.getPlastic(5125166,.3,0),D=S.getPlastic(5533306,.25,0),F=S.getPlastic(4073251,.25,0),x=S.getPlastic(2503224,.15,0),w=S.getPlastic(58879,.1,0),$=S.getPlastic(3021836,.2,0),K=S.createBlock(.62,.65,.38,R);s.add(K);const L=S.createBlock(.64,.1,.4,b);L.position.set(0,-.28,0),s.add(L);const z=S.createBlock(.12,.14,.1,b);z.position.set(-.24,-.28,.2),s.add(z);const B=S.createBlock(.12,.14,.1,b);B.position.set(.24,-.28,.2),s.add(B);const q=S.createBlock(.48,.3,.48,$);q.position.set(0,.16,0),r.add(q);const H=S.createBlock(.44,.38,.14,$);H.position.set(0,-.04,-.22),r.add(H),[-.22,.22].forEach(V=>{const te=S.createBlock(.1,.36,.12,$);te.position.set(V,-.12,-.16),te.rotation.z=V>0?-.15:.15,r.add(te);const se=S.createBlock(.12,.05,.14,w);se.position.set(V*1.05,-.26,-.16),r.add(se)});const J=S.createBlock(.46,.12,.12,x);J.position.set(0,.22,.22),r.add(J);const j=new me(.065,.065,.04,10);j.rotateX(Math.PI/2);const Q=new k(j,w);Q.position.set(-.12,.22,.28),r.add(Q);const le=new k(j,w);le.position.set(.12,.22,.28),r.add(le),[-1,1].forEach(V=>{const te=V===-1?o:a,se=S.createBlock(.24,.48,.24,R);se.position.y=-.24,te.add(se);const _e=new k(P,d);_e.position.set(0,-.52,.04),te.add(_e)});const ye=S.createBlock(.56,.22,.34,D);n.add(ye),[c,l].forEach(V=>{const te=S.createBlock(.22,.48,.24,D);te.position.y=-.24,V.add(te);const se=S.createBlock(.25,.28,.36,F);se.position.set(0,-.62,.05),V.add(se)})}return{model:t,rig:{root:t,hips:n,torso:s,head:r,leftArm:o,rightArm:a,leftLeg:c,rightLeg:l,leftSkateWheels:h,rightSkateWheels:u}}}static updateAnimation(e,t,n,s,r){const{root:o,hips:a,torso:c,head:l,leftArm:h,rightArm:u,leftLeg:d,rightLeg:f,leftSkateWheels:g,rightSkateWheels:v}=e;if(o.rotation.set(0,Math.PI,0),a.rotation.set(0,0,0),c.rotation.set(0,0,0),l.rotation.set(0,0,0),t==="running"){const m=Math.sin(n*16)*.75,y=-m*.85;if(d.rotation.x=m,f.rotation.x=-m,h.rotation.x=y,u.rotation.x=-y,a.position.y=.85+Math.abs(Math.sin(n*16))*.12,c.rotation.y=Math.sin(n*16)*.12,c.rotation.z=s*.35,o.rotation.z=s*.25,g&&v){for(const _ of g)_.rotation.x+=r*20;for(const _ of v)_.rotation.x+=r*20}}else t==="jumping"?(d.rotation.x=-.8,f.rotation.x=-.5,h.rotation.x=-1.6,u.rotation.x=-1.6,h.rotation.z=-.4,u.rotation.z=.4,c.rotation.x=.2,a.position.y=1):t==="sliding"?(c.rotation.x=.7,a.position.y=.35,d.rotation.x=-.5,f.rotation.x=-.5,h.rotation.x=.8,u.rotation.x=.8):t==="mounting"?(o.rotation.y+=r*12,d.rotation.x=-.6,f.rotation.x=-.6,h.rotation.z=-.8,u.rotation.z=.8):t==="crashed"&&(o.rotation.x=Math.PI/2.5,a.position.y=.3,h.rotation.x=1.2,u.rotation.x=1.2)}static poseInVehicle(e,t,n=!1,s=!1){const{root:r,hips:o,torso:a,head:c,leftArm:l,rightArm:h,leftLeg:u,rightLeg:d}=e;r.rotation.set(0,Math.PI,0),n?(o.position.set(0,s?.35:.22,.12),a.rotation.set(.65,0,-t*.2),c.rotation.set(-.4,-t*.3,0),u.rotation.set(-1.6,.3,0),d.rotation.set(-1.6,-.3,0),l.rotation.set(-1.5,.4+t*.5,-.3),h.rotation.set(-1.5,-.4+t*.5,.3)):s?(o.position.set(0,.54,.08),a.rotation.set(.05,0,-t*.35),c.rotation.set(.08,-t*.4,0),u.rotation.set(-.85,.18,0),d.rotation.set(-.85,-.18,0),l.rotation.set(-1.05,.25+t*.5,-.18),h.rotation.set(-1.05,-.25+t*.5,.18)):(o.position.set(0,.45,.05),a.rotation.set(-.15,0,-t*.18),c.rotation.set(.1,-t*.2,0),u.rotation.set(-1.4,.2,0),d.rotation.set(-1.4,-.2,0),l.rotation.set(-1.1,.3+t*.4,-.2),h.rotation.set(-1.1,-.3+t*.4,.2))}}class ka{static buildVehicle(e,t){const n=Oa[t]||Oa.classic,s=new Re;s.name=`vehicle_${e}`;const r=new Re;s.add(r);const o=new Re;r.add(o);const a=[],c=[];let l,h;const u=new I(-.6,.4,1.6),d=new I(.6,.4,1.6),f=S.getPlastic(n.primary,.16,0),g=S.getPlastic(n.secondary,.16,0),v=S.getPlastic(n.accent,.16,0),p=S.getPlastic(n.chassis,.22,0),m=S.getPlastic(n.wheelRim,.18,0),y=S.BlackRubber,_=S.Chrome,T=(P,R)=>{const b=new k(new me(P,P,R,16),y);b.castShadow=!0,b.receiveShadow=!0,b.rotation.z=Math.PI/2;const D=new k(new me(P*.65,P*.65,R+.02,12),m);b.add(D);const F=new k(new me(P*.25,P*.25,R+.04,8),_);return b.add(F),c.push(b),b};if(e==="van"){const P=S.createBlock(1.8,.35,3.4,p);P.position.y=.5,r.add(P);const R=S.createBlock(1.7,1.3,2,f);R.position.set(0,1.25,.6),r.add(R),S.addStuds(R,1.5,1.8,.65,f,4,4);const b=S.createBlock(1.6,1,1.2,g);b.position.set(0,1.05,-.9),r.add(b);const D=new k(new Nt(1.4,.65,.08),S.GlassWindshield);D.position.set(0,1.25,-1.52),D.rotation.x=-.15,r.add(D),h=S.createBlock(1.9,.45,.3,v),h.position.set(0,.48,-1.8),S.addStuds(h,1.8,.25,.22,v,4,1),r.add(h),[-.65,.65].forEach(B=>{const q=new k(new me(.12,.12,.08,12),S.getPlastic(16771899,.1,0));q.rotation.x=Math.PI/2,q.position.set(B,.75,-1.55),r.add(q)});const F=new Re;F.position.set(0,2.1,.6);const x=S.getPlastic(16744619,.15,0),w=new k(new It(.55,.25,12,24),x);w.rotation.x=Math.PI/2,F.add(w);const $=new k(new tt(.28,.45,12),S.getPlastic(16777215,.15,0));$.position.y=.25,F.add($);const K=new k(new Ke(.12,10,10),S.getPlastic(13959168,.1,0));K.position.y=.52,F.add(K),r.add(F),l=F,o.position.set(0,.72,-.5);const L=.42,z=.32;[-.95,.95].forEach(B=>{const q=new Re;q.position.set(B,L,-1.05);const H=T(L,z);q.add(H),r.add(q),a.push(q)}),[-.95,.95].forEach(B=>{const q=T(L,z);q.position.set(B,L,.95),r.add(q)}),u.set(-.7,.45,1.75),d.set(.7,.45,1.75)}else if(e==="buggy"){const P=S.createBlock(1.5,.3,3,f);P.position.y=.55,r.add(P);const R=v,b=new me(.06,.06,1.4,8);[-.65,.65].forEach(z=>{const B=new k(b,R);B.position.set(z,1.25,-.4),B.rotation.x=.25,r.add(B);const q=new k(b,R);q.position.set(z,1.25,.6),q.rotation.x=-.25,r.add(q)});const D=S.createBlock(1.4,.1,.9,g);D.position.set(0,1.85,.1),S.addStuds(D,1.2,.7,.05,g,3,2),r.add(D),h=S.createBlock(1.6,.3,.25,p),h.position.set(0,.5,-1.6),r.add(h);const F=new k(new me(.04,.04,1.2,8),_);F.position.set(.55,1.6,1.2),F.rotation.z=-.15,r.add(F);const x=new Re;x.position.set(.72,2.2,1.2);const w=new k(new It(.25,.08,8,16,Math.PI),S.RubyGem);w.rotation.z=Math.PI,x.add(w),[-.25,.25].forEach(z=>{const B=S.createBlock(.14,.18,.14,_);B.position.set(z,.12,0),x.add(B)}),r.add(x),l=x,o.position.set(0,.65,-.05);const $=.38,K=.52,L=.36;[-.88,.88].forEach(z=>{const B=new Re;B.position.set(z,$,-1.1);const q=T($,L);B.add(q),r.add(B),a.push(B)}),[-.95,.95].forEach(z=>{const B=T(K,L+.08);B.position.set(z,K,.9),r.add(B)}),u.set(-.6,.55,1.55),d.set(.6,.55,1.55)}else{const P=S.createBlock(.55,.14,1.5,p);P.position.set(0,.38,-.1),r.add(P),[-.16,0,.16].forEach(se=>{const _e=new k(new Nt(.06,.04,1.1),y);_e.position.set(se,.47,-.1),r.add(_e)});const R=S.createBlock(.85,.85,.12,f);R.position.set(0,.85,-.85),R.rotation.x=-.12,r.add(R),S.addStuds(R,.65,.65,.04,f,2,2);const b=new k(new me(.04,.04,.88,8),_);b.rotation.z=Math.PI/2,b.position.set(0,1.28,-.9),r.add(b);const D=S.createBlock(.68,.6,1.15,f);D.position.set(0,.65,.72),r.add(D);const F=S.createBlock(.48,.12,.8,g);F.position.set(0,.98,.45),r.add(F);const x=S.createBlock(.42,.08,.72,v);x.position.set(0,1.06,.45),r.add(x);const w=new Re;w.position.set(0,.96,1.25);const $=new k(new Nt(.55,.05,.4),_);w.add($);const K=S.createBlock(.45,.35,.35,g);K.position.set(0,.22,0),S.addStuds(K,.35,.25,.04,g,2,1),w.add(K);const L=new k(new me(.02,.02,.6,8),_);L.position.set(.2,.4,.1),w.add(L);const z=S.createBlock(.2,.12,.03,v);z.position.set(.1,.65,.1),w.add(z),r.add(w),l=z,h=S.createBlock(.75,.14,.12,_),h.position.set(0,.38,-1.35),r.add(h),o.position.set(0,.48,.05);const B=.35,q=.22,H=new Re;H.position.set(0,B,-1.15);const J=T(B,q);H.add(J),[-.14,.14].forEach(se=>{const _e=new k(new me(.035,.035,.65,8),_);_e.position.set(se,.26,0),H.add(_e)});const j=new k(new me(.045,.045,.75,8),_);j.position.set(0,.75,.08),j.rotation.x=-.15,H.add(j);const Q=new k(new me(.035,.035,.9,8),_);Q.rotation.z=Math.PI/2,Q.position.set(0,1.15,.14),H.add(Q),[-.42,.42].forEach(se=>{const _e=new k(new me(.048,.048,.16,8),y);_e.rotation.z=Math.PI/2,_e.position.set(se,1.15,.14),H.add(_e)});const le=new k(new me(.12,.1,.14,12),_);le.rotation.x=Math.PI/2,le.position.set(0,1.15,.04),H.add(le);const ye=new k(new Ke(.1,12,12),S.getPlastic(16771899,.1,0));ye.position.set(0,1.15,-.04),H.add(ye),[-.32,.32].forEach(se=>{const _e=new k(new me(.015,.015,.22,6),_);_e.position.set(se,1.3,.14),H.add(_e);const ve=new k(new me(.07,.07,.02,10),_);ve.rotation.x=Math.PI/2,ve.position.set(se,1.42,.14),H.add(ve)}),r.add(H),a.push(H);const V=T(B,q);V.position.set(0,B,.78),r.add(V);const te=new k(new me(.05,.06,.55,8),_);te.rotation.x=Math.PI/2,te.position.set(.38,.32,.85),r.add(te),u.set(.38,.32,1.15),d.set(.38,.32,1.15)}return{model:s,parts:{root:s,chassis:r,cockpitAnchor:o,frontWheelPivots:a,allWheels:c,topperMesh:l,leftExhaustPos:u,rightExhaustPos:d,bumperMesh:h}}}static updatePhysics(e,t,n,s,r,o=!1,a=!1){const{chassis:c,frontWheelPivots:l,allWheels:h,topperMesh:u}=e,d=-n*.85;for(const y of l)y.rotation.y=bt.lerp(y.rotation.y,d,r*16);const f=t/.4*r;for(const y of h)y.rotation.x+=f;const g=-s*.18;c.rotation.z=bt.lerp(c.rotation.z,g,r*10);const v=o?24:14,p=o?.04:.025,m=Math.sin(performance.now()*.001*v)*p;a?(c.position.y=bt.lerp(c.position.y,-.42,r*18),c.rotation.x=bt.lerp(c.rotation.x,.12,r*16),c.scale.y=bt.lerp(c.scale.y,.72,r*18)):(c.position.y=bt.lerp(c.position.y,m,r*14),c.rotation.x=bt.lerp(c.rotation.x,t/40*.03,r*10),c.scale.y=bt.lerp(c.scale.y,1,r*14)),u&&(u.rotation.y+=r*(a?6:2.5))}}const ip=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),sp=function(i,e){return new URL(i,e).href},Ga={},Po=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=sp(l,n),l in Ga)return;Ga[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":ip,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var li;(function(i){i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE"})(li||(li={}));class sr extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const rp=i=>{var e,t;return i?.androidBridge?"android":!((t=(e=i?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},ap=i=>{const e=i.CapacitorCustomPlatform||null,t=i.Capacitor||{},n=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:rp(i),r=()=>s()!=="web",o=u=>{const d=l.get(u);return!!(d?.platforms.has(s())||a(u))},a=u=>{var d;return(d=t.PluginHeaders)===null||d===void 0?void 0:d.find(f=>f.name===u)},c=u=>i.console.error(u),l=new Map,h=(u,d={})=>{const f=l.get(u);if(f)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),f.proxy;const g=s(),v=a(u);let p;const m=async()=>(!p&&g in d?p=typeof d[g]=="function"?p=await d[g]():p=d[g]:e!==null&&!p&&"web"in d&&(p=typeof d.web=="function"?p=await d.web():p=d.web),p),y=(D,F)=>{var x,w;if(v){const $=v?.methods.find(K=>F===K.name);if($)return $.rtype==="promise"?K=>t.nativePromise(u,F.toString(),K):(K,L)=>t.nativeCallback(u,F.toString(),K,L);if(D)return(x=D[F])===null||x===void 0?void 0:x.bind(D)}else{if(D)return(w=D[F])===null||w===void 0?void 0:w.bind(D);throw new sr(`"${u}" plugin is not implemented on ${g}`,li.Unimplemented)}},_=D=>{let F;const x=(...w)=>{const $=m().then(K=>{const L=y(K,D);if(L){const z=L(...w);return F=z?.remove,z}else throw new sr(`"${u}.${D}()" is not implemented on ${g}`,li.Unimplemented)});return D==="addListener"&&($.remove=async()=>F()),$};return x.toString=()=>`${D.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:D,writable:!1,configurable:!1}),x},T=_("addListener"),P=_("removeListener"),R=(D,F)=>{const x=T({eventName:D},F),w=async()=>{const K=await x;P({eventName:D,callbackId:K},F)},$=new Promise(K=>x.then(()=>K({remove:w})));return $.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await w()},$},b=new Proxy({},{get(D,F){switch(F){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return v?R:T;case"removeListener":return P;default:return _(F)}}});return n[u]=b,l.set(u,{name:u,proxy:b,platforms:new Set([...Object.keys(d),...v?[g]:[]])}),b};return t.convertFileSrc||(t.convertFileSrc=u=>u),t.getPlatform=s,t.handleError=c,t.isNativePlatform=r,t.isPluginAvailable=o,t.registerPlugin=h,t.Exception=sr,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},op=i=>i.Capacitor=ap(i),jt=op(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ni=jt.registerPlugin;class Lo{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,t);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const s=this.listeners[e];if(!s){if(n){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}s.forEach(r=>r(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new jt.Exception(e,li.Unimplemented)}unavailable(e="not available"){return new jt.Exception(e,li.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const s=n.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}}const za=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Va=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class cp extends Lo{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[s,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Va(s).trim(),r=Va(r).trim(),t[s]=r}),t}async setCookie(e){try{const t=za(e.key),n=za(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",r=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${s}; path=${r}; ${o};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Ni("CapacitorCookies",{web:()=>new cp});const lp=async i=>new Promise((e,t)=>{const n=new FileReader;n.onload=()=>{const s=n.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},n.onerror=s=>t(s),n.readAsDataURL(i)}),hp=(i={})=>{const e=Object.keys(i);return Object.keys(i).map(s=>s.toLocaleLowerCase()).reduce((s,r,o)=>(s[r]=i[e[o]],s),{})},up=(i,e=!0)=>i?Object.entries(i).reduce((n,s)=>{const[r,o]=s;let a,c;return Array.isArray(o)?(c="",o.forEach(l=>{a=e?encodeURIComponent(l):l,c+=`${r}=${a}&`}),c.slice(0,-1)):(a=e?encodeURIComponent(o):o,c=`${r}=${a}`),`${n}&${c}`},"").substr(1):null,dp=(i,e={})=>{const t=Object.assign({method:i.method||"GET",headers:i.headers},e),s=hp(i.headers)["content-type"]||"";if(typeof i.data=="string")t.body=i.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[o,a]of Object.entries(i.data||{}))r.set(o,a);t.body=r.toString()}else if(s.includes("multipart/form-data")||i.data instanceof FormData){const r=new FormData;if(i.data instanceof FormData)i.data.forEach((a,c)=>{r.append(c,a)});else for(const a of Object.keys(i.data))r.append(a,i.data[a]);t.body=r;const o=new Headers(t.headers);o.delete("content-type"),t.headers=o}else(s.includes("application/json")||typeof i.data=="object")&&(t.body=JSON.stringify(i.data));return t};class fp extends Lo{async request(e){const t=dp(e,e.webFetchExtra),n=up(e.params,e.shouldEncodeUrlParams),s=n?`${e.url}?${n}`:e.url,r=await fetch(s,t),o=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?e:{};o.includes("application/json")&&(a="json");let c,l;switch(a){case"arraybuffer":case"blob":l=await r.blob(),c=await lp(l);break;case"json":c=await r.json();break;case"document":case"text":default:c=await r.text()}const h={};return r.headers.forEach((u,d)=>{h[d]=u}),{data:c,headers:h,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Ni("CapacitorHttp",{web:()=>new fp});var Ai;(function(i){i.Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT"})(Ai||(Ai={}));var xs;(function(i){i.Success="SUCCESS",i.Warning="WARNING",i.Error="ERROR"})(xs||(xs={}));const Mi=Ni("Haptics",{web:()=>Po(()=>import("./web--ZVL01Q9.js"),[],import.meta.url).then(i=>new i.HapticsWeb)});var Ha;(function(i){i.Dark="DARK",i.Light="LIGHT",i.Default="DEFAULT"})(Ha||(Ha={}));var Wa;(function(i){i.None="NONE",i.Slide="SLIDE",i.Fade="FADE"})(Wa||(Wa={}));const pp=Ni("StatusBar");class $e{static async hideStatusBar(){if(this.isAvailable)try{await pp.hide()}catch{}}static async lightImpact(){if(this.isAvailable)try{await Mi.impact({style:Ai.Light})}catch{}}static async mediumImpact(){if(this.isAvailable)try{await Mi.impact({style:Ai.Medium})}catch{}}static async heavyImpact(){if(this.isAvailable)try{await Mi.impact({style:Ai.Heavy})}catch{}}static async celebration(){if(this.isAvailable)try{await Mi.notification({type:xs.Success})}catch{}}static async warning(){if(this.isAvailable)try{await Mi.notification({type:xs.Warning})}catch{}}}A($e,"isAvailable",jt.isNativePlatform());const dr=3.2,pn=[-dr,0,dr],yn=class yn{constructor(e,t,n,s,r){A(this,"group");A(this,"characterId");A(this,"vehicleId");A(this,"paletteId");A(this,"avatarModel");A(this,"avatarRig");A(this,"vehicleModel");A(this,"vehicleParts");A(this,"currentLane",1);A(this,"targetX",0);A(this,"currentX",0);A(this,"y",0);A(this,"jumpY",0);A(this,"z",0);A(this,"mode","on_foot");A(this,"movementState","running");A(this,"verticalVelocity",0);A(this,"gravity",-32);A(this,"jumpForce",13.5);A(this,"slideTimer",0);A(this,"maxSlideDuration",.75);A(this,"vehicleDuration",0);A(this,"maxVehicleDuration",20);A(this,"transitionTimer",0);A(this,"mountTransitionDuration",.55);A(this,"hasShield",!1);A(this,"vanArmorShield",!1);A(this,"boostCharges",0);A(this,"magnetTimer",0);A(this,"turboTimer",0);A(this,"invulnerabilityTimer",0);A(this,"driftTimer",0);A(this,"driftDirection",1);A(this,"driftTireSmokeTimer",0);A(this,"runCycleTime",0);A(this,"particleSystem");A(this,"audioManager");A(this,"playerBox",new Tn);this.characterId=e,this.vehicleId=t,this.paletteId=n,this.particleSystem=s,this.audioManager=r,this.group=new Re,this.rebuildMeshes()}rebuildMeshes(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);const e=xi.buildCharacter(this.characterId);this.avatarModel=e.model,this.avatarRig=e.rig;const t=ka.buildVehicle(this.vehicleId,this.paletteId);this.vehicleModel=t.model,this.vehicleParts=t.parts,this.mode==="on_foot"?(this.vehicleModel.visible=!1,this.group.add(this.avatarModel)):(this.vehicleModel.visible=!0,this.vehicleParts.cockpitAnchor.add(this.avatarModel),xi.poseInVehicle(this.avatarRig,0,!1,this.vehicleId==="scooter"),this.group.add(this.vehicleModel))}setCustomization(e,t,n){this.characterId=e,this.vehicleId=t,this.paletteId=n,this.rebuildMeshes()}setShowcasePreview(e){this.mode=e?"in_vehicle":"on_foot",this.rebuildMeshes()}reset(){this.currentLane=1,this.targetX=pn[1],this.currentX=pn[1],this.y=0,this.jumpY=0,this.z=0,this.group.rotation.set(0,0,0),this.verticalVelocity=0,this.slideTimer=0,this.mode="on_foot",this.movementState="running",this.vehicleDuration=0,this.transitionTimer=0,this.hasShield=!1,this.vanArmorShield=!1,this.boostCharges=0,this.magnetTimer=0,this.turboTimer=0,this.invulnerabilityTimer=0,this.driftTimer=0,this.driftTireSmokeTimer=0,this.runCycleTime=0,this.group.visible=!0,this.rebuildMeshes(),this.audioManager.stopVehicleEngine()}revive(){this.movementState="running",this.verticalVelocity=0,this.jumpY=0,this.slideTimer=0,this.hasShield=!0,this.invulnerabilityTimer=3.5,this.group.visible=!0,this.rebuildMeshes()}moveLeft(){this.currentLane>0&&this.movementState!=="crashed"&&(this.currentLane--,this.targetX=pn[this.currentLane],this.audioManager.playLaneSwitchSound(),this.mode==="in_vehicle"&&this.audioManager.revEngine(),$e.mediumImpact())}moveRight(){this.currentLane<pn.length-1&&this.movementState!=="crashed"&&(this.currentLane++,this.targetX=pn[this.currentLane],this.audioManager.playLaneSwitchSound(),this.mode==="in_vehicle"&&this.audioManager.revEngine(),$e.mediumImpact())}jump(){(this.movementState==="running"||this.mode==="in_vehicle"&&this.jumpY<=.05)&&(this.verticalVelocity=this.jumpForce,this.movementState="jumping",this.slideTimer=0,this.audioManager.playJumpSound(),$e.mediumImpact())}slide(){this.movementState==="running"||this.mode==="in_vehicle"?(this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.mode==="in_vehicle"?(this.audioManager.playVehicleDuckSound(),this.audioManager.playExhaustPopSound()):this.audioManager.playSlideSound(),$e.mediumImpact()):this.movementState==="jumping"&&(this.verticalVelocity=-22,this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.audioManager.playSlideSound(),$e.mediumImpact())}addBoostCharge(){this.boostCharges=Math.min(3,this.boostCharges+1),this.audioManager.playMountSound(),$e.heavyImpact()}useBoost(){return this.boostCharges>0?(this.boostCharges--,this.activateTurbo(),$e.heavyImpact(),!0):!1}triggerDrift(e=0,t=!1){this.driftTimer=1.2,this.driftDirection=e!==0?e:Math.random()>.5?1:-1,this.audioManager.playDriftScreechSound(),$e.heavyImpact();const n=this.group.position.clone();n.y=.08,this.particleSystem.emitDriftSmokeSpray(n,t),this.particleSystem.emitGroundSparks(n,t?58879:16771899)}mountVehicle(){if(this.mode==="in_vehicle"){this.vehicleDuration=Math.min(this.maxVehicleDuration,this.vehicleDuration+10),this.audioManager.playMountSound();return}this.mode="in_vehicle",this.movementState="mounting",this.transitionTimer=this.mountTransitionDuration;const e=kt[this.characterId],t=Qt[this.vehicleId];this.maxVehicleDuration=t.baseDurationSeconds*e.vehicleDurationBonus,this.vehicleDuration=this.maxVehicleDuration,this.vanArmorShield=t.absorbsRoadblocks,this.verticalVelocity=9.5,this.group.remove(this.avatarModel),this.vehicleParts.cockpitAnchor.add(this.avatarModel),xi.poseInVehicle(this.avatarRig,0),this.vehicleModel.visible=!0,this.vehicleModel.position.set(0,-.6,2),this.group.add(this.vehicleModel),this.audioManager.playMountSound(),this.audioManager.startVehicleEngine(),this.particleSystem.emitSmashDebris(this.group.position,[58879,16738740,16766287]),$e.heavyImpact()}dismountVehicle(e=!1){this.mode==="in_vehicle"&&(this.mode="on_foot",this.vehicleDuration=0,this.vanArmorShield=!1,this.turboTimer=0,this.audioManager.stopVehicleEngine(),this.vehicleParts.cockpitAnchor.remove(this.avatarModel),this.group.remove(this.vehicleModel),this.vehicleModel.visible=!1,this.group.add(this.avatarModel),this.verticalVelocity=e?7:6,this.movementState="jumping",this.particleSystem.emitSmashDebris(this.group.position,[16728193,16771899,58998]),$e.heavyImpact())}activateTurbo(){this.turboTimer=4.5,this.particleSystem.emitSmashDebris(this.group.position,[16771584,58879,16728193]),this.audioManager.playNitroBlastSound()}update(e,t){this.invulnerabilityTimer>0&&(this.invulnerabilityTimer-=e,this.group.visible=Math.floor(Date.now()/80)%2===0,this.invulnerabilityTimer<=0&&(this.invulnerabilityTimer=0,this.group.visible=!0));const n=kt[this.characterId]?.laneAgilityBonus||1;this.targetX=pn[this.currentLane],this.currentX=bt.lerp(this.currentX,this.targetX,e*(14*n));const s=(this.targetX-this.currentX)/dr;(this.y>0||this.verticalVelocity!==0)&&(this.verticalVelocity+=this.gravity*e,this.y+=this.verticalVelocity*e,this.y<=0&&(this.y=0,this.verticalVelocity=0,(this.movementState==="jumping"||this.movementState==="mounting")&&(this.movementState="running"))),this.movementState==="sliding"&&(this.slideTimer-=e,this.slideTimer<=0&&(this.slideTimer=0,this.movementState="running"));const r=this.movementState==="sliding";if(this.mode==="in_vehicle"){if(this.transitionTimer>0){this.transitionTimer-=e;const h=1-Math.max(0,this.transitionTimer/this.mountTransitionDuration);this.vehicleModel.position.z=bt.lerp(2,0,h),this.vehicleModel.position.y=bt.lerp(-.6,0,h)}else this.vehicleModel.position.set(0,0,0);if(this.vehicleDuration-=e,this.vehicleDuration<=0&&this.dismountVehicle(!1),Math.random()<.7){const h=new I;this.vehicleModel.localToWorld(h.copy(this.vehicleParts.leftExhaustPos)),this.particleSystem.emitExhaust(h,this.paletteId==="cyber"?58879:16738740)}if(ka.updatePhysics(this.vehicleParts,t,s,s,e,this.turboTimer>0,r),r){const h=this.group.position.clone();h.y=.05,this.particleSystem.emitGroundSparks(h,16766287)}this.audioManager.setEngineSpeed(t/30)}if(this.magnetTimer>0&&(this.magnetTimer-=e),this.turboTimer>0&&(this.turboTimer-=e),this.runCycleTime+=e*(t/18),this.mode==="on_foot")xi.updateAnimation(this.avatarRig,this.movementState,this.runCycleTime,s,e);else{const h=this.vehicleId==="scooter";xi.poseInVehicle(this.avatarRig,s,r,h)}const o=this.mode==="in_vehicle"&&this.vehicleId==="scooter",a=this.targetX-this.currentX;let c=-a*(o?.32:.22),l=-a*(o?.65:this.mode==="in_vehicle"?.32:.24);if(this.driftTimer>0){this.driftTimer-=e;const h=Math.min(1,this.driftTimer/.8),u=this.driftDirection*.68*h;c+=u,l-=this.driftDirection*.35*h,this.driftTireSmokeTimer+=e,this.driftTireSmokeTimer>=.05&&(this.driftTireSmokeTimer=0,yn._driftPos.copy(this.group.position),yn._driftPos.y=.05,yn._driftPos.x+=(Math.random()-.5)*.4,this.particleSystem.emitDriftSmokeSpray(yn._driftPos,!1),this.particleSystem.emitGroundSparks(yn._driftPos,16766287))}this.group.rotation.set(0,c,l),this.group.position.set(this.currentX,this.y,this.z)}getBoundingBox(){const e=this.mode==="in_vehicle"?1:.45,t=this.movementState==="sliding"?.7:this.mode==="in_vehicle"?1.8:1.7,n=this.mode==="in_vehicle"?1.6:.5;return this.playerBox.min.set(this.currentX-e,this.y,this.z-n),this.playerBox.max.set(this.currentX+e,this.y+t,this.z+n),this.playerBox}};A(yn,"_driftPos",new I);let fr=yn;class Jt{static getBiome(e){switch(e){case"boardwalk":return this.boardwalkBiome;case"plaza":return this.plazaBiome;case"forest":return this.forestBiome;case"pier":return this.pierBiome;case"cyber":return this.cyberBiome;case"candy":return this.candyBiome}}}A(Jt,"boardwalkBiome",{name:"Sunburst Boardwalk",roadColor:3622735,curbColor:58879,sidewalkColor:16774557,skyColor:8508666,fogColor:8508666,groundColor:16769154,buildSceneryProp:(e,t)=>{const n=new Re,s=e==="left"?-1:1,r=t%5;if(r===0){const o=S.getPlastic(7951688,.35,0),a=S.getPlastic(3046706,.22,0),c=S.getPlastic(4431943,.22,0),l=S.getPlastic(5125166,.3,0);let h=0,u=0;const d=(Math.sin(t*.7)*.12+.15)*s;for(let g=0;g<7;g++){const v=.36-g*.02,p=.33-g*.02,m=.75,y=new k(new me(p,v,m,10),o);u+=m*.5,h+=Math.sin(g*.4)*d,y.position.set(h,u,0),y.rotation.z=-d*(g*.18),y.castShadow=!0,n.add(y),u+=m*.5;const _=new k(new It(p+.02,.04,6,12),o);_.position.set(h,u,0),_.rotation.x=Math.PI/2,n.add(_)}[-.18,0,.18].forEach((g,v)=>{const p=new k(new Ke(.18,8,8),l);p.position.set(h+g,u-.2,v%2===0?.16:-.16),n.add(p)});const f=10;for(let g=0;g<f;g++){const v=g*Math.PI*2/f+t*.2,p=g%2===0,m=p?c:a,y=new Re;y.position.set(h,u,0),y.rotation.y=v;const _=p?2.4:1.9,T=p?.42:.68,P=S.createBlock(.38,.06,_,m);P.position.set(0,0,_*.45),P.rotation.x=T,y.add(P);const R=new k(new tt(.24,.8,4),m);R.position.set(0,-Math.sin(T)*_*.45,_*.85),R.rotation.x=T+.3,y.add(R),n.add(y)}}else if(r===1){const o=S.getPlastic(16777215,.2,0),a=S.getPlastic(13959168,.2,0),c=S.getPlastic(58879,.2,0),l=2.4;[-.7,.7].forEach(v=>{[-.7,.7].forEach(p=>{const m=new k(new me(.08,.08,l,8),S.getPlastic(9268835,.3,0));m.position.set(v,l*.5,p),n.add(m)})});const h=S.createBlock(1.8,1.4,1.8,o);h.position.y=l+.7,n.add(h);const u=S.createBlock(1.85,.25,1.85,a);u.position.y=l+.7,n.add(u);const d=S.createBlock(1.2,.5,1.9,S.getPlastic(8444159,.1,0));d.position.y=l+.85,n.add(d);const f=new k(new tt(1.6,.9,4),c);f.position.y=l+1.85,f.rotation.y=Math.PI/4,n.add(f);const g=new k(new It(.3,.09,8,16),a);g.position.set(s*.95,l+.7,0),g.rotation.y=Math.PI/2,n.add(g)}else if(r===2){const o=[16301008,11722715,16775620,13747433],a=S.getPlastic(o[t%o.length],.25,0),c=S.WhitePlastic,l=S.getPlastic(16740419,.25,0),h=S.createBlock(3,3.8,2.6,a);h.position.y=1.9,n.add(h);const u=S.createBlock(2.2,.15,.8,c);u.position.set(0,2.1,s*-1.5),n.add(u);const d=S.createBlock(2.2,.5,.08,c);d.position.set(0,2.4,s*-1.85),n.add(d);const f=S.createBlock(1.4,.25,.35,S.getPlastic(9268835,.3,0));f.position.set(0,.9,s*-1.4),n.add(f),[-.45,0,.45].forEach(v=>{const p=new k(new Ke(.16,6,6),S.getPlastic(16728193,.15,0));p.position.set(v,1.1,s*-1.4),n.add(p)});const g=new k(new tt(2.5,1.4,4),l);g.position.y=4.5,g.rotation.y=Math.PI/4,n.add(g)}else if(r===3){const o=S.getPlastic(16744619,.2,0),a=S.getPlastic(16771899,.2,0),c=S.WhitePlastic,l=S.createBlock(2.6,1.4,1.8,o);l.position.y=.7,n.add(l);const h=S.createBlock(2.8,.12,2,S.getPlastic(5099745,.2,0));h.position.y=1.42,n.add(h);for(let v=0;v<5;v++){const p=v%2===0?a:c,m=S.createBlock(.5,.15,1.8,p);m.position.set(-1+v*.5,2.3,0),m.rotation.x=.2,n.add(m)}const u=new k(new tt(.35,.8,8),S.getPlastic(14142664,.3,0));u.rotation.z=Math.PI,u.position.set(0,2.7,0),n.add(u);const d=new k(new Ke(.42,10,10),S.getPlastic(58879,.15,0));d.position.set(0,3.2,0),n.add(d);const f=new k(new me(.04,.04,2.2,6),S.Chrome);f.position.set(s*1.6,1.1,0),n.add(f);const g=new k(new tt(1.2,.5,10),S.getPlastic(16728193,.2,0));g.position.set(s*1.6,2.2,0),n.add(g)}else{const o=S.getPlastic(6111287,.35,0),a=S.createBlock(2,1.1,.2,o);a.position.y=.55,n.add(a);const c=[58879,16717636,7798531];[-.6,0,.6].forEach((h,u)=>{const d=S.createBlock(.38,2.2,.08,S.getPlastic(c[u],.15,0));d.position.set(h,1.1,.15),d.rotation.z=(u-1)*.08,n.add(d)});const l=S.createBlock(.8,.45,1.4,S.getPlastic(16766287,.2,0));l.position.set(s*1.5,.22,0),l.rotation.x=-.15,n.add(l)}return n},buildWideBackdrop:(e,t)=>{const n=new Re;if(e==="right")if(t%2===0){const r=S.createBlock(1.6,.7,3.8,S.WhitePlastic);r.position.y=.25,n.add(r);const o=S.createBlock(1.4,.08,3.5,S.getPlastic(14142664,.4,0));o.position.y=.62,n.add(o);const a=new k(new me(.06,.06,4.5,8),S.Chrome);a.position.set(0,2.8,0),n.add(a);const c=new bo;c.moveTo(0,0),c.lineTo(0,3.8),c.lineTo(2,.4),c.closePath();const l=new Tr(c),h=[16728193,58879,16771584],u=S.getPlastic(h[t%h.length],.15,0),d=new k(l,u);d.position.set(.04,.9,-.2),d.rotation.y=.25,n.add(d)}else{const r=new k(new tt(.8,1.8,8),S.getPlastic(16717636,.2,0));r.position.y=.9,n.add(r);const o=new k(new Ke(.3,8,8),S.getPlastic(16771899,.1,0));o.position.y=1.95,n.add(o)}else{const s=[16744619,8444159,11766015,11010027],r=S.getPlastic(s[t%s.length],.2,0),o=S.GlassWindshield,a=9.5+t%3*2.5,c=S.createBlock(5.6,a,5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<=4;h++)[-1.6,0,1.6].forEach(u=>{const d=S.createBlock(.85,1.1,.1,o);d.position.set(u,h*1.9,2.52),n.add(d)});const l=new k(new tt(1.6,.6,10),S.getPlastic(16732754,.2,0));l.position.set(0,a+.8,0),n.add(l)}return n}}),A(Jt,"plazaBiome",{name:"Downtown Plaza",roadColor:2503224,curbColor:16766287,sidewalkColor:14737632,skyColor:6600182,fogColor:6600182,groundColor:8505220,buildSceneryProp:(e,t)=>{const n=new Re,s=e==="left"?-1:1,r=t%5;if(r===0){const o=[3754411,35195,6174129,3622735],a=S.getPlastic(o[t%o.length],.25,0),c=S.getPlastic(8444159,.1,0),l=S.WhitePlastic,h=7.5,u=S.createBlock(3.4,h,2.8,a);u.position.y=h*.5,n.add(u);for(let g=0;g<4;g++)[-.9,0,.9].forEach(v=>{const p=S.createBlock(.65,.95,.1,c);p.position.set(v,1.4+g*1.5,s*-1.42),n.add(p)});const d=S.createBlock(3.6,.35,3,l);d.position.y=h+.15,n.add(d);const f=new k(new me(.7,.7,1.2,12),S.getPlastic(9268835,.3,0));f.position.set(.6,h+.9,0),n.add(f)}else if(r===1){const o=S.getPlastic(12216520,.25,0),a=S.getPlastic(16740419,.2,0),c=S.createBlock(2.6,5.5,2.6,o);c.position.y=2.75,n.add(c);const l=new k(new me(.65,.65,.12,16),S.WhitePlastic);l.rotation.x=Math.PI/2,l.position.set(0,4.4,s*-1.35),n.add(l);const h=S.createBlock(.08,.45,.15,S.getPlastic(2171169,.2,0));h.position.set(0,4.5,s*-1.4),n.add(h);const u=new k(new tt(2,2.6,4),a);u.position.y=6.8,u.rotation.y=Math.PI/4,n.add(u);const d=new k(new Ke(.2,8,8),S.GoldStar);d.position.y=8.2,n.add(d)}else if(r===2){const o=S.getPlastic(15483002,.25,0),a=S.getPlastic(58879,.18,0),c=S.createBlock(3.2,3.6,2.4,o);c.position.y=1.8,n.add(c);const l=S.createBlock(2.2,1.4,.1,S.getPlastic(8444159,.1,0));l.position.set(0,1.2,s*-1.22),n.add(l);const h=S.createBlock(2.6,.35,1.2,a);h.position.set(0,2.1,s*-1.6),h.rotation.x=.2,n.add(h);const u=new k(new me(.45,.45,.65,10),S.Chrome);u.position.set(s*1.6,.32,0),n.add(u);const d=new k(new me(.12,.1,.18,8),S.WhitePlastic);d.position.set(s*1.6,.74,0),n.add(d)}else if(r===3){const o=S.getPlastic(2503224,.2,0),a=S.getPlastic(16771899,.1,0),c=new k(new me(.1,.14,3.8,8),o);c.position.y=1.9,n.add(c),[-.55,.55].forEach(u=>{const d=S.createBlock(.6,.08,.08,o);d.position.set(u*.5,3.6,0),n.add(d);const f=new k(new Ke(.28,10,10),a);f.position.set(u,3.45,0),n.add(f);const g=new k(new tt(.2,.25,6),S.getPlastic(9268835,.3,0));g.position.set(u,3.1,0),n.add(g)});const l=S.createBlock(1.4,.35,1.4,S.getPlastic(7901340,.3,0));l.position.y=.18,n.add(l);const h=new k(new Ke(.35,8,8),S.getPlastic(15277667,.2,0));h.position.y=.45,n.add(h)}else{const o=S.getPlastic(1668818,.2,0),a=S.getPlastic(8444159,.1,0),c=S.createBlock(2.4,.12,1.4,o);c.position.set(0,2.4,0),n.add(c);const l=S.createBlock(2.2,2.2,.08,a);l.position.set(0,1.2,s*-.6),n.add(l);const h=S.createBlock(1.8,.4,.45,S.getPlastic(6111287,.3,0));h.position.set(0,.25,s*-.2),n.add(h);const u=new k(new me(.18,.22,.7,8),S.getPlastic(13959168,.2,0));u.position.set(s*1.6,.35,.5),n.add(u)}return n},buildWideBackdrop:(e,t)=>{const n=new Re,s=[1713022,19776,3218322,2503224,12000284],r=S.getPlastic(s[t%s.length],.2,0),o=S.getPlastic(8444159,.1,0),a=12+t%4*3.5,c=S.createBlock(6.5,a,5.5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<Math.floor(a/2.2);h++)[-2,0,2].forEach(u=>{const d=S.createBlock(1.1,1.2,.1,o);d.position.set(u,h*2.2,2.8),n.add(d)});const l=new k(new me(.08,.15,4.5,8),S.Chrome);return l.position.set(0,a+2.25,0),n.add(l),n}}),A(Jt,"forestBiome",{name:"Pinecrest Forest",roadColor:4073251,curbColor:7162945,sidewalkColor:9268835,skyColor:8440772,fogColor:8440772,groundColor:3046706,buildSceneryProp:(e,t)=>{const n=new Re,s=e==="left"?-1:1,r=t%5;if(r===0||r===3){const o=S.getPlastic(5125166,.35,0),a=S.getPlastic(1793568,.25,0),c=S.getPlastic(3046706,.25,0),l=S.getPlastic(4431943,.25,0),h=new k(new me(.3,.42,5.5,10),o);h.position.y=2.75,h.castShadow=!0,n.add(h),[{y:3.2,r:2.1,h:1.6,mat:a},{y:4.2,r:1.7,h:1.5,mat:c},{y:5.1,r:1.3,h:1.4,mat:c},{y:5.9,r:.8,h:1.3,mat:l}].forEach(d=>{const f=new k(new tt(d.r,d.h,8),d.mat);f.position.y=d.y,f.castShadow=!0,n.add(f)})}else if(r===1){const o=S.getPlastic(7162945,.35,0),a=S.getPlastic(4073251,.35,0),c=S.getPlastic(7901340,.3,0),l=S.createBlock(3.2,2.6,2.6,o);l.position.y=1.3,n.add(l);const h=new k(new tt(2.6,1.6,4),a);h.position.y=3.4,h.rotation.y=Math.PI/4,n.add(h);const u=S.createBlock(.6,3.2,.6,c);u.position.set(.9,2.6,.6),n.add(u),[0,.4,.8].forEach((f,g)=>{const v=new k(new Ke(.2+g*.08,8,8),S.WhitePlastic);v.position.set(.9+Math.sin(g)*.15,4.4+f,.6),n.add(v)});const d=S.createBlock(1.2,.6,.6,S.getPlastic(9268835,.35,0));d.position.set(s*1.8,.3,0),n.add(d)}else if(r===2){const o=S.getPlastic(58879,.1,0),a=S.getPlastic(6111287,.3,0),c=S.getPlastic(10395294,.3,0),l=S.createBlock(2.4,.08,3.6,o);l.position.set(0,.04,0),n.add(l),[-.8,.2,.7].forEach((u,d)=>{const f=new k(new Ke(.22,6,6),c);f.position.set(u,.12,(d-1)*.8),f.scale.set(1.4,.6,1.1),n.add(f)});const h=S.createBlock(1.2,.2,2.2,a);h.position.set(0,.35,0),n.add(h),[-.55,.55].forEach(u=>{const d=S.createBlock(.08,.45,2.2,a);d.position.set(u,.65,0),n.add(d)})}else{const o=S.getPlastic(7162945,.35,0),a=S.createBlock(.12,.12,3.2,o);a.position.set(0,.7,0),n.add(a);const c=S.createBlock(.12,.12,3.2,o);c.position.set(0,.35,0),n.add(c),[-1.4,0,1.4].forEach(h=>{const u=S.createBlock(.18,.9,.18,o);u.position.set(0,.45,h),n.add(u)});const l=S.getPlastic(16717636,.15,0);[-.4,.3].forEach((h,u)=>{const d=new k(new me(.08,.1,.35,8),S.WhitePlastic);d.position.set(h,.18,.8+u*.3),n.add(d);const f=new k(new Ke(.24,8,8),l);f.position.set(h,.36,.8+u*.3),f.scale.set(1,.6,1),n.add(f)})}return n},buildWideBackdrop:(e,t)=>{const n=new Re;if(t%2===0){const r=S.getPlastic(1793568,.3,0),o=S.getPlastic(5125166,.4,0);[-2.4,0,2.4].forEach((a,c)=>{const l=8.5+c*1.5,h=new k(new me(.32,.48,l,8),o);h.position.set(a,l*.5,c%2===0?1.2:-1.2),n.add(h);for(let u=0;u<5;u++){const d=new k(new tt(2.6-u*.4,2.4,8),r);d.position.set(a,l*.38+u*1.5,c%2===0?1.2:-1.2),n.add(d)}})}else{const r=S.getPlastic(6111287,.4,0),o=S.getPlastic(3622735,.3,0),a=S.createBlock(5.4,3.6,4.2,r);a.position.y=1.8,n.add(a);const c=new k(new tt(4.4,2.5,4),o);c.position.set(0,4.6,0),c.rotation.y=Math.PI/4,n.add(c);const l=S.createBlock(.8,4.4,.8,S.getPlastic(7901340,.4,0));l.position.set(1.9,3.4,.8),n.add(l)}return n}}),A(Jt,"pierBiome",{name:"Amusement Pier",roadColor:9795021,curbColor:58879,sidewalkColor:13538264,skyColor:6056896,fogColor:7964363,groundColor:2001125,buildSceneryProp:(e,t)=>{const n=new Re,s=e==="left"?-1:1,r=t%4;if(r===0){const o=S.getPlastic(16766464,.15,0),a=new k(new It(3.2,.15,8,24),o);a.position.y=4.2,a.rotation.y=s*.3,n.add(a);const c=new k(new me(.3,.3,.2,12),S.Chrome);c.position.y=4.2,n.add(c),[-1.4,1.4].forEach(l=>{const h=new k(new me(.12,.14,4.8,8),S.getPlastic(3622735,.2,0));h.position.set(l,2.4,0),h.rotation.z=-l*.18,n.add(h)})}else if(r===1){const o=S.getPlastic(16717636,.15,0),a=new k(new It(2.6,.2,8,24),o);a.position.set(0,3,0),a.rotation.y=e==="left"?.3:-.3,n.add(a),[-1.8,1.8].forEach(c=>{const l=S.createBlock(.25,3.2,.25,S.WhitePlastic);l.position.set(c,1.6,0),n.add(l)})}else if(r===2){const o=S.getPlastic(58879,.18,0),a=S.createBlock(2.2,2.4,1.8,o);a.position.y=1.2,n.add(a);const c=S.createBlock(2.6,.55,.2,S.getPlastic(16771899,.15,0));c.position.set(0,2.45,.95),n.add(c);const l=new k(new Ke(.42,8,8),S.getPlastic(9268835,.3,0));l.position.set(0,1.4,1),n.add(l)}else{const o=new k(new me(.1,.1,4.2,8),S.WhitePlastic);o.position.y=2.1,n.add(o);const a=[16771899,58879,16717636,7798531,14696699];for(let c=0;c<5;c++){const l=new k(new Ke(.38,10,10),S.getPlastic(a[c],.12,0));l.position.set(Math.sin(c*1.3)*.45,4.2+c*.25,Math.cos(c*1.3)*.45),n.add(l)}}return n},buildWideBackdrop:(e,t)=>{const n=new Re;if(t%2===0){const r=new k(new It(5.5,.22,8,30),S.getPlastic(16766464,.15,0));r.position.y=7,r.rotation.y=e==="left"?.35:-.35,n.add(r),[-2.2,2.2].forEach(o=>{const a=new k(new me(.18,.22,8,8),S.getPlastic(3622735,.2,0));a.position.set(o,4,0),a.rotation.z=-o*.15,n.add(a)})}else{const r=new k(new tt(4.2,4.5,10),S.getPlastic(16717636,.15,0));r.position.y=2.25,n.add(r)}return n}}),A(Jt,"cyberBiome",{name:"Cyber Circuit",roadColor:3754411,curbColor:58998,sidewalkColor:5533306,skyColor:2001125,fogColor:4367861,groundColor:35195,buildSceneryProp:(e,t)=>{const n=new Re,s=t%3;if(s===0){const r=S.getPlastic(58879,.1,0),o=S.getPlastic(3622735,.2,0),a=S.createBlock(1.6,.7,1.6,o);a.position.y=.35,n.add(a);const c=new k(new me(.35,.4,5,6),r);c.position.y=2.85,n.add(c),[3.5,4.6].forEach(l=>{const h=new k(new It(.75,.08,8,16),S.getPlastic(7798531,.1,0));h.position.y=l,h.rotation.x=Math.PI/2,n.add(h)})}else if(s===1){const r=S.createBlock(.9,4.2,.9,S.getPlastic(16717636,.2,0));r.position.y=2.1,n.add(r);const o=new k(new tt(.6,1,3),S.getPlastic(16776960,.1,0));o.position.set(0,4.3,0),o.rotation.z=e==="left"?-Math.PI/2:Math.PI/2,n.add(o)}else{const r=S.createBlock(1.8,2.8,1.6,S.getPlastic(4342338,.25,0));r.position.y=1.4,n.add(r),[1,1.7,2.3].forEach(o=>{const a=S.createBlock(1.85,.15,.9,S.getPlastic(58879,.1,0));a.position.set(0,o,0),n.add(a)})}return n},buildWideBackdrop:(e,t)=>{const n=new Re,s=S.createBlock(4.5,14+t%3*3,4.5,S.getPlastic(1713022,.15,0));s.position.y=7,n.add(s);const r=new k(new me(.12,.2,5,6),S.getPlastic(58879,.1,0));return r.position.y=16.5,n.add(r),n}}),A(Jt,"candyBiome",{name:"Candy Wonderland",roadColor:4854924,curbColor:16774557,sidewalkColor:13538264,skyColor:16301008,fogColor:16301008,groundColor:16764092,buildSceneryProp:(e,t)=>{const n=new Re,s=t%3;if(s===0){const r=new k(new me(.14,.14,4,8),S.WhitePlastic);r.position.y=2,n.add(r);const o=new k(new me(1.4,1.4,.35,18),S.getPlastic(16728193,.15,0));o.rotation.x=Math.PI/2,o.rotation.y=e==="left"?.3:-.3,o.position.y=4,n.add(o);const a=new k(new me(.8,.8,.38,12),S.WhitePlastic);a.rotation.x=Math.PI/2,a.position.y=4,n.add(a)}else if(s===1){const r=S.getPlastic(58998,.15,0),o=S.createBlock(1.4,2,1.2,r);o.position.y=1,n.add(o);const a=new k(new Ke(.65,10,10),r);a.position.y=2.35,n.add(a),[-.45,.45].forEach(c=>{const l=new k(new Ke(.22,6,6),r);l.position.set(c,2.9,0),n.add(l)})}else{const r=new k(new me(1.3,.9,1.2,12),S.getPlastic(14142664,.3,0));r.position.y=.6,n.add(r);const o=new k(new Ke(1.15,12,12),S.getPlastic(8445674,.18,0));o.position.y=1.7,n.add(o);const a=new k(new Ke(.35,8,8),S.getPlastic(13959168,.1,0));a.position.y=2.8,n.add(a)}return n},buildWideBackdrop:(e,t)=>{const n=new Re,s=10+t%3*2,r=new k(new me(.5,.5,s,12),S.WhitePlastic);r.position.y=s*.5,n.add(r);const o=new k(new Ke(3,12,12),S.getPlastic(16728193,.15,0));return o.position.y=s+1.5,n.add(o),n}});const qt=36,Ct=11.2,Si=qt,tn=new I;class mp{constructor(){A(this,"group");A(this,"chunkIndex",0);A(this,"biome","boardwalk");A(this,"obstacles",[]);A(this,"pickups",[]);A(this,"roadMesh");A(this,"leftCurb");A(this,"rightCurb");A(this,"leftSidewalk");A(this,"rightSidewalk");A(this,"leftLandscape");A(this,"rightLandscape");A(this,"oceanMesh");A(this,"sceneryGroup",new Re);this.group=new Re,this.buildBaseRoad(),this.group.add(this.sceneryGroup)}buildBaseRoad(){const e=new mn(Ct,Si);e.rotateX(-Math.PI/2),this.roadMesh=new k(e,S.getPlastic(16769154,.35,0)),this.roadMesh.receiveShadow=!0,this.group.add(this.roadMesh);const t=new Nt(.6,.35,Si);this.leftCurb=new k(t,S.getPlastic(5099745,.25,0)),this.leftCurb.position.set(-Ct/2-.3,.175,0),this.leftCurb.receiveShadow=!0,this.group.add(this.leftCurb),this.rightCurb=new k(t,S.getPlastic(5099745,.25,0)),this.rightCurb.position.set(Ct/2+.3,.175,0),this.rightCurb.receiveShadow=!0,this.group.add(this.rightCurb);const n=new mn(8,Si);n.rotateX(-Math.PI/2),this.leftSidewalk=new k(n,S.getPlastic(16775620,.45,0)),this.leftSidewalk.position.set(-Ct/2-4.3,-.01,0),this.leftSidewalk.receiveShadow=!0,this.group.add(this.leftSidewalk),this.rightSidewalk=new k(n,S.getPlastic(16775620,.45,0)),this.rightSidewalk.position.set(Ct/2+4.3,-.01,0),this.rightSidewalk.receiveShadow=!0,this.group.add(this.rightSidewalk);const s=new mn(80,Si);s.rotateX(-Math.PI/2),this.leftLandscape=new k(s,S.getPlastic(8505220,.5,0)),this.leftLandscape.position.set(-Ct/2-48,-.04,0),this.leftLandscape.receiveShadow=!0,this.group.add(this.leftLandscape),this.rightLandscape=new k(s,S.getPlastic(8505220,.5,0)),this.rightLandscape.position.set(Ct/2+48,-.04,0),this.rightLandscape.receiveShadow=!0,this.group.add(this.rightLandscape);const r=new mn(75,Si);r.rotateX(-Math.PI/2),this.oceanMesh=new k(r,S.getPlastic(45311,.08,0)),this.oceanMesh.position.set(Ct/2+45.5,-.02,0),this.oceanMesh.receiveShadow=!0,this.group.add(this.oceanMesh);const o=S.getPlastic(3622735,.4,0),a=S.getPlastic(16777215,.15,0),c=new Nt(.24,.04,1.8),l=new Nt(Ct-.2,.02,.12),h=new me(.18,.18,.08,10),u=S.getPlastic(16777215,.2,0);for(let d=-qt/2+2;d<qt/2;d+=3.6){const f=new k(l,o);f.position.set(0,.01,d),f.receiveShadow=!0,this.group.add(f),[-3.2/2,pn[2]/2].forEach(g=>{const v=new k(c,a);v.position.set(g,.025,d),v.receiveShadow=!0,this.group.add(v)}),[-Ct/2-.3,Ct/2+.3].forEach(g=>{const v=new k(h,u);v.position.set(g,.38,d),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v)})}}init(e,t,n,s=!1,r=1){this.chunkIndex=e,this.biome=t,this.group.position.set(0,0,n),this.group.rotation.set(0,0,0);const o=Jt.getBiome(t);this.roadMesh.material=S.getPlastic(o.roadColor,.35,0),this.leftCurb.material=S.getPlastic(o.curbColor,.25,0),this.rightCurb.material=S.getPlastic(o.curbColor,.25,0),this.leftSidewalk.material=S.getPlastic(o.sidewalkColor,.45,0),this.rightSidewalk.material=S.getPlastic(o.sidewalkColor,.45,0);const a=S.getPlastic(o.groundColor,.45,0);this.leftLandscape.material=a,this.rightLandscape.material=a;const c=t==="boardwalk"||t==="pier";this.oceanMesh.visible=c,t==="boardwalk"&&(this.rightSidewalk.material=S.getPlastic(16774557,.45,0),this.rightLandscape.material=S.getPlastic(16769154,.45,0)),this.clearDynamicObjects();let l=this.chunkIndex*12;for(let h=-qt/2+3.6;h<=qt/2-3.6;h+=7.2){const u=o.buildSceneryProp("left",l++),d=-Ct/2-(l%2===0?3.8:2.6);u.position.set(d,0,h),this.sceneryGroup.add(u);const f=o.buildSceneryProp("right",l++),g=Ct/2+(l%2===0?3.8:2.6);f.position.set(g,0,h),this.sceneryGroup.add(f)}for(let h=-qt/2+7.2;h<=qt/2-7.2;h+=14.4){const u=o.buildWideBackdrop("left",l++);u.position.set(-Ct/2-24,0,h),this.sceneryGroup.add(u);const d=o.buildWideBackdrop("right",l++),f=t==="boardwalk"?32:24;d.position.set(Ct/2+f,0,h),this.sceneryGroup.add(d)}s||this.populateObstaclesAndPickups(r)}populateObstaclesAndPickups(e=1){const t=e===1?.8:e===2?.85:.9;if(Math.random()<t){const r=Math.floor(Math.random()*3),o=this.selectRandomObstacle(e);this.spawnObstacle(o,r,-8);const a=e===2?.25:e>=3?.35:0;if(a>0&&Math.random()<a){const c=[0,1,2].filter(d=>d!==r),l=c[Math.floor(Math.random()*c.length)],h=Math.random(),u=h<.45?"low_barrier":h<.75?"traffic_cone":"slick_puddle";this.spawnObstacle(u,l,-8)}}const s=Math.random();if(s<.22){const r=Math.floor(Math.random()*3),o=Math.random();let a="vehicle_key";o<.25?a="vehicle_key":o<.65?a="nitro_boost":o<.85?a="toy_wrench":a="heart_shield",this.spawnPickup(a,r,8)}else if(s<.62){const r=Math.floor(Math.random()*3);[-2,0,2].forEach(a=>{this.spawnPickup("star_coin",r,8+a)})}else if(s<.7){const r=Math.floor(Math.random()*3);this.spawnPickup("diamond_gem",r,8)}}selectRandomObstacle(e=1){const t=Math.random();return e===1?t<.16?"slick_puddle":t<.46?"low_barrier":t<.72?"high_arch":t<.88?"traffic_cone":"crate_stack":e===2?t<.15?"slick_puddle":t<.4?"low_barrier":t<.65?"high_arch":t<.82?"roadblock":t<.92?"traffic_cone":"crate_stack":e===3?t<.14?"slick_puddle":t<.35?"low_barrier":t<.55?"laser_gate":t<.75?"robot_patrol":t<.9?"roadblock":"crate_stack":t<.12?"slick_puddle":t<.35?"laser_gate":t<.6?"robot_patrol":t<.85?"roadblock":"high_arch"}spawnObstacle(e,t,n){const s=new Re,r=pn[t];s.position.set(r,0,n);let o=!1;const a=new I(-.75,0,-.25),c=new I(.75,.75,.25);if(e==="low_barrier"){const h=S.getPlastic(16717636,.15,0),u=S.WhitePlastic,d=S.getPlastic(16771899,.15,0),f=S.createBlock(2,.28,.2,h);f.position.y=.65,s.add(f),[-.6,-.2,.2,.6].forEach(g=>{const v=S.createBlock(.18,.3,.22,d);v.position.set(g,.65,0),s.add(v)}),[-.85,.85].forEach(g=>{const v=S.createBlock(.18,.7,.18,u);v.position.set(g,.35,0),s.add(v);const p=S.createBlock(.24,.08,.45,u);p.position.set(g,.04,0),s.add(p)}),a.set(-.75,0,-.2),c.set(.75,.7,.2),o=!0}else if(e==="high_arch"){const h=S.getPlastic(2171169,.2,0),u=S.getPlastic(16766464,.15,0),d=S.getPlastic(16717636,.15,0),f=S.createBlock(2.2,.55,.25,u);f.position.y=1.45,s.add(f),[-.6,-.2,.2,.6].forEach(g=>{const v=S.createBlock(.18,.57,.27,d);v.position.set(g,1.45,0),s.add(v)}),[-1.25,1.25].forEach(g=>{const v=S.createBlock(.22,1.8,.22,h);v.position.set(g,.9,0),s.add(v);const p=new k(new Ke(.12,8,8),S.getPlastic(16717636,.1,0));p.position.set(g,1.6,.15),s.add(p)}),a.set(-.75,1.05,-.25),c.set(.75,1.8,.25),o=!0}else if(e==="crate_stack"){const h=S.getPlastic(9268835,.35,0),u=S.createBlock(.85,.85,.85,h);u.position.y=.42,S.addStuds(u,.75,.75,.42,h,2,2),s.add(u);const d=S.createBlock(.65,.65,.65,h);d.position.set(.08,1.15,.04),s.add(d),a.set(-.45,0,-.35),c.set(.45,1.25,.35),o=!0}else if(e==="traffic_cone"){const h=S.getPlastic(16739584,.2,0),u=S.WhitePlastic;[-.4,.4].forEach(d=>{const f=S.createBlock(.45,.08,.45,h);f.position.set(d,.04,0),s.add(f);const g=new k(new tt(.22,.75,12),h);g.position.set(d,.42,0),s.add(g);const v=new k(new me(.14,.17,.15,12),u);v.position.set(d,.38,0),s.add(v)}),a.set(-.45,0,-.25),c.set(.45,.65,.25),o=!0}else if(e==="laser_gate"){const h=S.getPlastic(2171169,.2,0),u=S.getPlastic(16717636,.1,0);[-1.25,1.25].forEach(f=>{const g=S.createBlock(.22,2.2,.22,h);g.position.set(f,1.1,0),s.add(g);const v=new k(new Ke(.16,8,8),S.getPlastic(58879,.1,0));v.position.set(f,1.35,0),s.add(v)});const d=S.createBlock(2.2,.16,.16,u);d.position.y=1.35,s.add(d),a.set(-.75,1,-.25),c.set(.75,1.65,.25),o=!0}else if(e==="robot_patrol"){const h=S.getPlastic(16766464,.2,0),u=S.getPlastic(58879,.2,0),d=new k(new me(.55,.65,.45,12),h);d.position.y=.32,s.add(d),[-.55,.55].forEach(g=>{const v=new k(new me(.24,.24,.18,10),u);v.position.set(g,.16,.3),v.rotation.x=Math.PI/2,s.add(v)});const f=new k(new Ke(.2,10,10),S.getPlastic(16717636,.1,0));f.position.y=.65,s.add(f),a.set(-.45,0,-.45),c.set(.45,.75,.45),o=!0}else if(e==="slick_puddle"){const h=this.biome==="forest",u=new Ts({color:h?14808574:5227511,roughness:.05,metalness:.1,transparent:!0,opacity:.75}),d=new mn(2.7,5);d.rotateX(-Math.PI/2);const f=new k(d,u);f.position.y=.025,s.add(f);const g=S.getPlastic(h?58879:16771899,.1,0);[-1.15,1.15].forEach(v=>{[-2,0,2].forEach(p=>{const m=new k(new me(.14,.14,.1,10),g);m.position.set(v,.05,p),s.add(m)})}),a.set(-1.2,0,-2.4),c.set(1.2,.8,2.4),o=!0}else{const h=S.getPlastic(13959168,.25,0),u=S.WhitePlastic,d=S.createBlock(2.2,1.1,.55,h);d.position.y=.55,s.add(d),[-.55,0,.55].forEach(f=>{const g=S.createBlock(.28,1.12,.57,u);g.position.set(f,.55,0),s.add(g)}),[-.8,.8].forEach(f=>{const g=new k(new me(.12,.14,.15,8),S.getPlastic(2171169,.2,0));g.position.set(f,1.15,0),s.add(g);const v=new k(new Ke(.14,8,8),S.getPlastic(16755456,.1,0));v.position.set(f,1.28,0),s.add(v)}),a.set(-.85,0,-.3),c.set(.85,1.15,.3),o=!1}this.group.add(s);const l=new Tn;this.obstacles.push({mesh:s,type:e,lane:t,z:n,boundingBox:l,hitboxOffsetMin:a,hitboxOffsetMax:c,isSmashed:!1,canSmash:o,isMoving:e==="robot_patrol",patrolBaseX:r,patrolPhase:Math.random()*Math.PI*2})}spawnPickup(e,t,n){const s=new Re,r=pn[t];if(s.position.set(r,1,n),e==="star_coin"){const a=new me(.42,.42,.14,16);a.rotateX(Math.PI/2);const c=new k(a,S.GoldStar);c.castShadow=!0,s.add(c);const l=new k(new tt(.2,.18,5),S.getPlastic(16771899,.1,0));l.position.z=.08,s.add(l)}else if(e==="diamond_gem"){const a=new k(new Er(.45,0),S.CyanGem);a.scale.set(1,1.4,1),a.castShadow=!0,s.add(a)}else if(e==="vehicle_key"){const a=new k(new It(.35,.09,10,16),S.GoldStar);s.add(a);const c=S.createBlock(.1,.45,.08,S.GoldStar);c.position.y=-.45,s.add(c);const l=S.createBlock(.2,.12,.08,S.GoldStar);l.position.set(.08,-.55,0),s.add(l)}else if(e==="heart_shield"){const a=S.getPlastic(16728193,.1,0),c=new k(new Ke(.22,10,10),a);c.position.set(-.14,.14,0),s.add(c);const l=new k(new Ke(.22,10,10),a);l.position.set(.14,.14,0),s.add(l);const h=new k(new tt(.35,.5,12),a);h.rotation.z=Math.PI,h.position.set(0,-.12,0),s.add(h)}else if(e==="nitro_boost"){const a=S.getPlastic(58879,.15,0),c=S.getPlastic(16739584,.15,0),l=S.getPlastic(16771584,.1,0),h=new k(new me(.24,.24,.65,12),a);s.add(h);const u=new k(new tt(.25,.35,12),c);u.position.y=.45,s.add(u);const d=new k(new It(.26,.04,6,12),l);d.rotation.x=Math.PI/2,s.add(d)}else{const a=S.Chrome,c=new k(new It(.25,.08,8,12,Math.PI*1.5),a);s.add(c);const l=S.createBlock(.12,.55,.08,a);l.position.y=-.38,s.add(l)}this.group.add(s);const o=new Tn;this.pickups.push({mesh:s,type:e,lane:t,z:n,boundingBox:o,isCollected:!1})}updateBoundingBoxes(){for(const e of this.obstacles)e.isSmashed||(e.mesh.updateMatrixWorld(!0),e.mesh.getWorldPosition(tn),e.boundingBox.min.copy(tn).add(e.hitboxOffsetMin),e.boundingBox.max.copy(tn).add(e.hitboxOffsetMax));for(const e of this.pickups)e.isCollected||(e.mesh.updateMatrixWorld(!0),e.mesh.getWorldPosition(tn),e.boundingBox.min.set(tn.x-.55,tn.y-.55,tn.z-.55),e.boundingBox.max.set(tn.x+.55,tn.y+.55,tn.z+.55))}updateVisuals(e){for(const t of this.pickups)t.isCollected||(t.mesh.rotation.y+=e*3.5,t.mesh.position.y=1+Math.sin(performance.now()*.003+t.z)*.15);for(const t of this.obstacles)if(!t.isSmashed&&t.isMoving&&typeof t.patrolBaseX=="number"){const n=t.patrolPhase||0;t.mesh.position.x=t.patrolBaseX+Math.sin(performance.now()*.0025+n)*.55,t.mesh.rotation.y+=e*3}}clearDynamicObjects(){for(;this.sceneryGroup.children.length>0;)this.sceneryGroup.remove(this.sceneryGroup.children[0]);for(const e of this.obstacles)this.group.remove(e.mesh);this.obstacles=[];for(const e of this.pickups)this.group.remove(e.mesh);this.pickups=[]}}class gp{constructor(){A(this,"group",new Re);A(this,"clouds",[]);A(this,"sunGroup",new Re);A(this,"moonGroup",new Re);A(this,"starsGroup",new Re);A(this,"weatherPoints");A(this,"weatherPositions");A(this,"weatherVelocities");A(this,"weatherCount",280);A(this,"weatherMaterial");A(this,"currentBiome","boardwalk");A(this,"weatherType","none");this.buildSun(),this.buildMoon(),this.buildStars(),this.buildClouds(),this.buildWeatherParticles(),this.group.add(this.sunGroup),this.group.add(this.moonGroup),this.group.add(this.starsGroup),this.group.add(this.weatherPoints)}buildSun(){const e=new Ts({color:16773494,emissive:16766287,emissiveIntensity:.95,roughness:.15,metalness:0}),t=new k(new Ke(5.2,20,20),e);this.sunGroup.add(t);const n=new _s({color:16771584,transparent:!0,opacity:.45,side:2}),s=new k(new vs(5.2,8.5,32),n);this.sunGroup.add(s);const r=new _s({color:16766287,transparent:!0,opacity:.22,side:2}),o=new k(new vs(8.5,13,32),r);this.sunGroup.add(o);const a=S.getPlastic(16771584,.1,0);for(let l=0;l<12;l++){const h=l*Math.PI*2/12,u=new k(new Nt(1.2,4.4,.8),a);u.position.set(Math.cos(h)*7.6,Math.sin(h)*7.6,0),u.rotation.z=h+Math.PI/2,this.sunGroup.add(u)}const c=S.getPlastic(16777215,.1,0);[-1,1].forEach(l=>{const h=new k(new tt(.8,8,4),c);h.rotation.z=Math.PI/2*l,h.position.set(l*5,0,.2),this.sunGroup.add(h);const u=new k(new tt(.8,8,4),c);u.rotation.z=l===1?0:Math.PI,u.position.set(0,l*5,.2),this.sunGroup.add(u)}),this.sunGroup.position.set(22,38,-90)}buildMoon(){const e=S.getPlastic(16775620,.1,0),t=new k(new It(3.6,1.2,12,24,Math.PI*1.3),e);t.rotation.z=.5,this.moonGroup.add(t),this.moonGroup.position.set(-28,38,-90),this.moonGroup.visible=!1}buildStars(){const e=new At,t=160,n=new Float32Array(t*3);for(let r=0;r<t;r++)n[r*3]=(Math.random()-.5)*160,n[r*3+1]=25+Math.random()*45,n[r*3+2]=-120+Math.random()*120;e.setAttribute("position",new Yt(n,3));const s=new cr({color:16777215,size:1.6,transparent:!0,opacity:.85});this.starsGroup.add(new Sa(e,s)),this.starsGroup.visible=!1}buildClouds(){const e=S.getPlastic(16777215,.35,0),t=[{x:-45,y:32,z:-20,scale:1.4,speed:1.2},{x:35,y:36,z:-45,scale:1.6,speed:.9},{x:-25,y:28,z:-70,scale:1.2,speed:1.5},{x:42,y:30,z:-95,scale:1.5,speed:1.1},{x:-38,y:34,z:-125,scale:1.7,speed:.8},{x:28,y:32,z:-150,scale:1.3,speed:1.3},{x:-18,y:38,z:-175,scale:1.5,speed:1},{x:48,y:35,z:-5,scale:1.4,speed:1.4}];for(const n of t){const s=new Re,r=5;for(let o=0;o<r;o++){const a=1.8+Math.random()*1.2,c=new k(new Ke(a,8,8),e);c.position.set((o-2)*1.8,(Math.random()-.5)*.8,(Math.random()-.5)*1.2),c.scale.set(1.1,.8,.9),s.add(c)}s.scale.setScalar(n.scale),s.position.set(n.x,n.y,n.z),this.group.add(s),this.clouds.push({group:s,baseX:n.x,baseY:n.y,baseZ:n.z,speed:n.speed})}}buildWeatherParticles(){this.weatherCount=750;const e=new At;this.weatherPositions=new Float32Array(this.weatherCount*3),this.weatherVelocities=new Float32Array(this.weatherCount*3);for(let t=0;t<this.weatherCount;t++)this.resetParticle(t,0,!0);e.setAttribute("position",new Yt(this.weatherPositions,3)),this.weatherMaterial=new cr({color:16777215,size:.2,transparent:!0,opacity:.85}),this.weatherPoints=new Sa(e,this.weatherMaterial)}resetParticle(e,t=0,n=!1){const s=e*3;this.weatherPositions[s]=(Math.random()-.5)*48,this.weatherPositions[s+1]=n?Math.random()*22:18+Math.random()*6,this.weatherPositions[s+2]=t-90+Math.random()*110,this.weatherType==="rain"?(this.weatherVelocities[s]=-1.8+(Math.random()-.5)*.6,this.weatherVelocities[s+1]=-(20+Math.random()*8),this.weatherVelocities[s+2]=(Math.random()-.5)*.4):(this.weatherVelocities[s]=(Math.random()-.5)*.7,this.weatherVelocities[s+1]=-(3+Math.random()*2.5),this.weatherVelocities[s+2]=(Math.random()-.5)*.4)}setBiome(e){this.currentBiome=e,e==="boardwalk"?(this.weatherType="none",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1):e==="plaza"?(this.weatherType="rain",this.sunGroup.visible=!1,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(11789820),this.weatherMaterial.size=.32,this.weatherMaterial.opacity=.75):e==="forest"?(this.weatherType="snow",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(16777215),this.weatherMaterial.size=.18,this.weatherMaterial.opacity=.9):e==="cyber"?(this.weatherType="cyber",this.sunGroup.visible=!1,this.moonGroup.visible=!0,this.starsGroup.visible=!0,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(58879),this.weatherMaterial.size=.28,this.weatherMaterial.opacity=.65):(this.weatherType="none",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1)}update(e,t){for(const n of this.clouds)n.group.position.x+=n.speed*t*.8,n.group.position.x>65&&(n.group.position.x=-65),n.group.position.z=e-90+(n.baseZ%120+120)%120;if(this.sunGroup.position.set(20,36,e-92),this.sunGroup.rotation.z+=t*.12,this.moonGroup.position.set(-24,36,e-92),this.starsGroup.position.z=e-60,this.weatherPoints.visible){const n=this.weatherPoints.geometry.attributes.position.array;for(let s=0;s<this.weatherCount;s++){const r=s*3;this.weatherType==="snow"?n[r]+=(this.weatherVelocities[r]+Math.sin(performance.now()*.003+s)*.4)*t:n[r]+=this.weatherVelocities[r]*t,n[r+1]+=this.weatherVelocities[r+1]*t,n[r+2]+=this.weatherVelocities[r+2]*t,(n[r+1]<.1||n[r+2]>e+12)&&this.resetParticle(s,e,!1)}this.weatherPoints.geometry.attributes.position.needsUpdate=!0}}}const Dt=new I,ct=new I,rr=new I;class _p{constructor(e,t,n,s,r){A(this,"group");A(this,"skyManager",new gp);A(this,"chunks",[]);A(this,"numChunks",10);A(this,"currentBiome","boardwalk");A(this,"chunkCounter",0);A(this,"sceneRenderer");A(this,"particleSystem");A(this,"audioManager");A(this,"gameState");A(this,"floatingText");this.sceneRenderer=e,this.particleSystem=t,this.audioManager=n,this.gameState=s,this.floatingText=r,this.group=new Re,this.group.add(this.skyManager.group);for(let o=0;o<this.numChunks;o++){const a=new mp;this.chunks.push(a),this.group.add(a.group)}}reset(e="boardwalk"){this.currentBiome=e,this.chunkCounter=0;const t=Jt.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(t.skyColor,t.groundColor,t.fogColor),this.skyManager.setBiome(this.currentBiome);for(let n=0;n<this.numChunks;n++){const s=this.chunks[n],r=-n*qt;s.init(this.chunkCounter++,this.currentBiome,r,n<=1,this.gameState.currentLevel)}}getCurrentBiomeName(){return Jt.getBiome(this.currentBiome).name}clearObstaclesAhead(e=40){for(const t of this.chunks)for(const n of t.obstacles)if(!n.isSmashed){const s=t.group.position.z+n.mesh.position.z;s>=-e&&s<=15&&(n.isSmashed=!0,n.mesh.visible=!1)}}update(e,t){const s=this.gameState.speed*t;for(const c of this.chunks)c.group.position.z+=s;this.updateBiomeProgression(),this.recycleChunks();const r=e.z;for(const c of this.chunks)c.updateVisuals(t),Math.abs(c.group.position.z-r)<qt*2.2&&c.updateBoundingBoxes();const o=this.checkCollisions(e),a=this.gameState.mode==="stage"&&this.gameState.checkStageCompletion();return this.skyManager.update(e.z,t),{crashed:o,stageWon:a}}updateBiomeProgression(){if(this.gameState.mode==="stage"){const t=this.gameState.getActiveStage();if(t&&t.biome!==this.currentBiome){this.currentBiome=t.biome;const n=Jt.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(n.skyColor,n.groundColor,n.fogColor),this.skyManager.setBiome(this.currentBiome)}return}const e=this.gameState.getCurrentLevelDef().biome;if(e!==this.currentBiome){this.currentBiome=e;const t=Jt.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(t.skyColor,t.groundColor,t.fogColor),this.skyManager.setBiome(this.currentBiome)}}recycleChunks(){for(const e of this.chunks)if(e.group.position.z>qt){let t=0;for(const s of this.chunks)s.group.position.z<t&&(t=s.group.position.z);const n=t-qt;e.init(this.chunkCounter++,this.currentBiome,n,!1,this.gameState.currentLevel)}}checkCollisions(e){const t=e.getBoundingBox(),n=e.group.position,s=e.mode==="in_vehicle",r=Qt[e.vehicleId],o=kt[e.characterId],a=o.hasPermanentMagnet,c=a||s&&r.hasMagnetAura||e.magnetTimer>0,l=a?5.5:6,h=s&&r.hasMagnetAura?8:l*o.magnetRangeBonus;for(const u of this.chunks)if(!(Math.abs(u.group.position.z-n.z)>qt*1.2)){for(const d of u.pickups)if(!d.isCollected&&(d.mesh.getWorldPosition(Dt),c&&d.type==="star_coin"&&Dt.distanceTo(n)<h&&(rr.copy(n),u.group.worldToLocal(rr),d.mesh.position.lerp(rr,.24)),t.intersectsBox(d.boundingBox)))if(d.isCollected=!0,d.mesh.visible=!1,d.type==="star_coin"){const f=s&&r.coinMultiplier||1;this.gameState.addCoins(f),this.audioManager.playCoinSound(),$e.lightImpact(),this.particleSystem.emitPickupSparkles(Dt,16766720);const g=15*this.gameState.multiplier*f;this.floatingText.spawn(Dt,`+${g}${f>1?" (2x!)":""}`,"#FFD700","⭐")}else d.type==="diamond_gem"?(this.gameState.addGems(1),this.audioManager.playGemSound(),$e.mediumImpact(),this.particleSystem.emitPickupSparkles(Dt,58879),this.floatingText.spawn(Dt,"+100 (💎+1)","#00E5FF","💎",!0)):d.type==="nitro_boost"?(e.addBoostCharge(),$e.heavyImpact(),this.particleSystem.emitPickupSparkles(Dt,58879),this.floatingText.spawn(Dt,"+1 NITRO BOOST! 🚀","#00E5FF","🚀",!0)):d.type==="vehicle_key"?(e.mountVehicle(),$e.heavyImpact(),this.particleSystem.emitPickupSparkles(Dt,16766287),this.floatingText.spawn(Dt,"MOUNT RIDE!","#FF4081","🔑",!0)):d.type==="heart_shield"?(e.hasShield=!0,this.audioManager.playGemSound(),$e.mediumImpact(),this.particleSystem.emitPickupSparkles(Dt,16728193),this.floatingText.spawn(Dt,"SHIELD ON!","#FF4081","💖",!0)):d.type==="toy_wrench"&&(s&&(e.vehicleDuration=Math.min(e.maxVehicleDuration,e.vehicleDuration+10)),this.audioManager.playMountSound(),$e.lightImpact(),this.particleSystem.emitPickupSparkles(Dt,58998),this.floatingText.spawn(Dt,"+10s FUEL","#00E676","🔧"));for(const d of u.obstacles)if(!d.isSmashed&&t.intersectsBox(d.boundingBox)){if(d.mesh.getWorldPosition(ct),d.type==="low_barrier"&&(e.y>.45||e.movementState==="jumping")||(d.type==="high_arch"||d.type==="laser_gate")&&(e.movementState==="sliding"||e.y<.2&&t.max.y<d.boundingBox.min.y))continue;if(d.type==="slick_puddle"){d.isSmashed=!0,d.mesh.visible=!1;const f=e.movementState==="sliding";this.audioManager.playWaterSplashSound(),this.audioManager.playDriftScreechSound(),f?(this.gameState.addSmash(),$e.mediumImpact(),e.triggerDrift(Math.random()>.5?1:-1,!0),this.particleSystem.emitDriftSmokeSpray(ct,!0),this.particleSystem.emitGroundSparks(ct,58879),this.floatingText.spawn(ct,"SICK DRIFT! 🏎️💨 +150","#00E5FF","🌊",!0)):($e.heavyImpact(),e.triggerDrift(Math.random()>.5?1:-1,!0),this.particleSystem.emitDriftSmokeSpray(ct,!0),this.particleSystem.emitGroundSparks(ct,16748800),this.floatingText.spawn(ct,"⚠️ SLICK SKID! SLIDE TO DRIFT!","#FF9100","⚠️",!0));continue}if(s){if(e.turboTimer>0){d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$e.heavyImpact(),this.particleSystem.emitSmashDebris(ct),this.floatingText.spawn(ct,"TURBO SMASH! +100","#FFEA00","⚡",!0);continue}if(d.type==="crate_stack"||d.type==="traffic_cone"){d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$e.mediumImpact(),this.particleSystem.emitSmashDebris(ct),this.floatingText.spawn(ct,"+50","#FF7043","💥");continue}if(e.vanArmorShield){e.vanArmorShield=!1,d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$e.heavyImpact(),this.particleSystem.emitSmashDebris(ct,[16766287,16738740,58879]),this.floatingText.spawn(ct,"ARMOR SAVED!","#FFD54F","🛡️",!0);continue}d.isSmashed=!0,d.mesh.visible=!1,this.audioManager.playCrashSound(),$e.heavyImpact(),this.particleSystem.emitSmashDebris(ct,[13959168,16771899,16728193,58879]),this.floatingText.spawn(ct,"CRASH EJECT!","#FF1744","💥",!0),e.dismountVehicle(!0);continue}if(d.type==="crate_stack"||d.type==="traffic_cone"){d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$e.mediumImpact(),this.particleSystem.emitSmashDebris(ct),this.floatingText.spawn(ct,"+30","#FF7043","💥");continue}if(e.invulnerabilityTimer>0){d.isSmashed=!0,d.mesh.visible=!1,this.audioManager.playSmashSound(),$e.mediumImpact(),this.particleSystem.emitSmashDebris(ct,[58879,16766720]),this.floatingText.spawn(ct,"INVINCIBLE!","#00E5FF","⭐");continue}if(e.hasShield){e.hasShield=!1,d.isSmashed=!0,d.mesh.visible=!1,this.audioManager.playSmashSound(),$e.mediumImpact(),this.particleSystem.emitSmashDebris(ct,[16728193,16777215]),this.floatingText.spawn(ct,"SHIELD SAVED!","#FF4081","💖");continue}return this.audioManager.playCrashSound(),$e.heavyImpact(),this.particleSystem.emitSmashDebris(ct,[16732754,2503224]),e.movementState="crashed",!0}}return!1}}class vp{constructor(e,t,n){A(this,"gameState");A(this,"player");A(this,"onConfirmCallback");A(this,"selectedCharacter");A(this,"selectedVehicle");A(this,"selectedPalette");A(this,"activeTab","characters");this.gameState=e,this.player=t,this.onConfirmCallback=n,this.selectedCharacter=e.characterId,this.selectedVehicle=e.vehicleId,this.selectedPalette=e.paletteId,this.initEventListeners()}initEventListeners(){const e=document.getElementById("tab-characters"),t=document.getElementById("tab-vehicles"),n=document.getElementById("roster-characters"),s=document.getElementById("roster-vehicles");e?.addEventListener("click",()=>{this.activeTab="characters",e.classList.add("active"),t?.classList.remove("active"),n?.classList.remove("hidden"),s?.classList.add("hidden"),this.syncShowcase()}),t?.addEventListener("click",()=>{this.activeTab="vehicles",t.classList.add("active"),e?.classList.remove("active"),s?.classList.remove("hidden"),n?.classList.add("hidden"),this.syncShowcase()});const r=document.querySelectorAll("#roster-characters .roster-card");r.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");if(!(!h||!kt[h])){if(!this.gameState.isCharacterUnlocked(h)){this.gameState.unlockCharacter(h)?(this.selectedCharacter=h,this.refreshCardLocks(),this.syncShowcase()):(l.classList.add("shake-anim"),setTimeout(()=>l.classList.remove("shake-anim"),400));return}this.selectedCharacter=h,r.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase()}})});const o=document.querySelectorAll("#roster-vehicles .roster-card");o.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");if(!(!h||!Qt[h])){if(!this.gameState.isVehicleUnlocked(h)){this.gameState.unlockVehicle(h)?(this.selectedVehicle=h,this.refreshCardLocks(),this.syncShowcase()):(l.classList.add("shake-anim"),setTimeout(()=>l.classList.remove("shake-anim"),400));return}this.selectedVehicle=h,o.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase()}})});const a=document.querySelectorAll(".swatch-btn");a.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-palette");h&&(this.selectedPalette=h,a.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase())})}),document.getElementById("btn-select-confirm")?.addEventListener("click",()=>{this.confirmLoadout()})}open(){this.selectedCharacter=this.gameState.characterId,this.selectedVehicle=this.gameState.vehicleId,this.selectedPalette=this.gameState.paletteId,this.refreshCardLocks(),this.syncShowcase()}refreshCardLocks(){const e=document.getElementById("garage-gems");e&&(e.innerText=`${this.gameState.totalGemsSaved}`);const t=document.getElementById("garage-coins");t&&(t.innerText=`${this.gameState.totalCoinsSaved}`),document.querySelectorAll("#roster-characters .roster-card").forEach(n=>{const s=n.getAttribute("data-id"),r=this.gameState.isCharacterUnlocked(s),o=kt[s];if(n.getAttribute("data-id")===this.selectedCharacter?n.classList.add("active"):n.classList.remove("active"),r){n.classList.remove("locked");const a=n.querySelector(".lock-tag");a&&a.remove()}else{n.classList.add("locked");let a=n.querySelector(".lock-tag");a||(a=document.createElement("div"),a.className="lock-tag",n.appendChild(a)),a.innerHTML=`🔒 UNLOCK: 💎 ${o.gemPrice}`}}),document.querySelectorAll("#roster-vehicles .roster-card").forEach(n=>{const s=n.getAttribute("data-id"),r=this.gameState.isVehicleUnlocked(s),o=Qt[s];if(n.getAttribute("data-id")===this.selectedVehicle?n.classList.add("active"):n.classList.remove("active"),r){n.classList.remove("locked");const a=n.querySelector(".lock-tag");a&&a.remove()}else{n.classList.add("locked");let a=n.querySelector(".lock-tag");a||(a=document.createElement("div"),a.className="lock-tag",n.appendChild(a)),a.innerHTML=`🔒 UNLOCK: 💎 ${o.gemPrice}`}}),document.querySelectorAll(".swatch-btn").forEach(n=>{n.getAttribute("data-palette")===this.selectedPalette?n.classList.add("active"):n.classList.remove("active")})}syncShowcase(){this.player.setCustomization(this.selectedCharacter,this.selectedVehicle,this.selectedPalette),this.player.setShowcasePreview(this.activeTab==="vehicles")}confirmLoadout(){this.player.setShowcasePreview(!1),this.gameState.characterId=this.selectedCharacter,this.gameState.vehicleId=this.selectedVehicle,this.gameState.paletteId=this.selectedPalette,this.gameState.savePersistedData();const e=document.getElementById("menu-selected-avatar");e&&(e.innerText=`Avatar: ${kt[this.selectedCharacter].name}`);const t=document.getElementById("menu-selected-vehicle");t&&(t.innerText=`Ride: ${Qt[this.selectedVehicle].name}`),this.onConfirmCallback()}}class xp{constructor(e,t,n){A(this,"gameState");A(this,"player");A(this,"audioManager");A(this,"garageView");A(this,"hudScreen");A(this,"mainMenu");A(this,"garageScreen");A(this,"stageScreen");A(this,"instructionsScreen");A(this,"gameOverScreen");A(this,"pauseScreen");A(this,"btnSound");A(this,"btnPause");A(this,"biomeBanner");A(this,"starCount");A(this,"gemCount");A(this,"distanceCounterWrap");A(this,"distanceVal");A(this,"speedMeter");A(this,"multiplierBadge");A(this,"missionCard");A(this,"missionTitle");A(this,"missionProgressBar");A(this,"missionFraction");A(this,"vehicleMeterContainer");A(this,"vehicleMeterName");A(this,"vehicleMeterAbility");A(this,"vehicleMeterFill");A(this,"vehicleTimerText");A(this,"hudLevelBadge");A(this,"hudLevelName");A(this,"levelProgressBar");A(this,"levelFraction");A(this,"levelUpBanner");A(this,"levelUpSub");A(this,"actionPrompt");A(this,"menuBestDistance");A(this,"menuBestScore");A(this,"btnHudBoost");A(this,"hudBoostBadge");A(this,"saveMeModal");A(this,"btnSaveMeAction");A(this,"saveMeBtnIcon");A(this,"saveMeBtnTitle");A(this,"saveMeBtnSub");A(this,"btnSaveMeForfeit");A(this,"btnSaveMeNoAds");A(this,"vipStoreModal");A(this,"btnBuyNoAds");A(this,"btnRestorePurchases");A(this,"btnCloseVip");A(this,"btnTopNoAds");A(this,"btnMenuNoAds");A(this,"btnPauseNoAds");A(this,"onStartGame",()=>{});A(this,"onPauseGame",()=>{});A(this,"onResumeGame",()=>{});A(this,"onRestartGame",()=>{});A(this,"onTriggerBoost",()=>{});A(this,"onQuitToMenu",()=>{});A(this,"onSaveMeRevive",()=>{});A(this,"onSaveMeForfeit",()=>{});A(this,"onBuyNoAds",()=>{});A(this,"onRestorePurchases",()=>{});this.gameState=e,this.player=t,this.audioManager=n,this.cacheDOMElements(),this.garageView=new vp(this.gameState,this.player,()=>{this.closeGarage()}),this.bindEvents(),this.updateMenuStats()}cacheDOMElements(){this.hudScreen=document.getElementById("hud-screen"),this.mainMenu=document.getElementById("main-menu"),this.garageScreen=document.getElementById("garage-screen"),this.stageScreen=document.getElementById("stage-screen"),this.instructionsScreen=document.getElementById("instructions-screen"),this.gameOverScreen=document.getElementById("game-over-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.btnSound=document.getElementById("btn-sound"),this.btnPause=document.getElementById("btn-pause"),this.biomeBanner=document.getElementById("biome-banner"),this.starCount=document.getElementById("star-count"),this.gemCount=document.getElementById("gem-count"),this.distanceCounterWrap=document.getElementById("distance-counter-wrap"),this.distanceVal=document.getElementById("distance-value"),this.speedMeter=document.getElementById("speed-meter"),this.multiplierBadge=document.getElementById("multiplier-badge"),this.hudLevelBadge=document.getElementById("hud-level-badge"),this.hudLevelName=document.getElementById("hud-level-name"),this.levelProgressBar=document.getElementById("level-progress-bar"),this.levelFraction=document.getElementById("level-fraction"),this.levelUpBanner=document.getElementById("level-up-banner"),this.levelUpSub=document.getElementById("level-up-sub"),this.missionCard=document.getElementById("mission-card"),this.missionTitle=document.getElementById("mission-title"),this.missionProgressBar=document.getElementById("mission-progress-bar"),this.missionFraction=document.getElementById("mission-fraction"),this.vehicleMeterContainer=document.getElementById("vehicle-meter-container"),this.vehicleMeterName=document.getElementById("vehicle-meter-name"),this.vehicleMeterAbility=document.getElementById("vehicle-meter-ability"),this.vehicleMeterFill=document.getElementById("vehicle-meter-fill"),this.vehicleTimerText=document.getElementById("vehicle-timer-text"),this.actionPrompt=document.getElementById("action-prompt"),this.menuBestDistance=document.getElementById("menu-best-distance"),this.menuBestScore=document.getElementById("menu-best-score"),this.btnHudBoost=document.getElementById("btn-hud-boost"),this.hudBoostBadge=document.getElementById("hud-boost-badge"),this.saveMeModal=document.getElementById("save-me-modal"),this.btnSaveMeAction=document.getElementById("btn-save-me-action"),this.saveMeBtnIcon=document.getElementById("save-me-btn-icon"),this.saveMeBtnTitle=document.getElementById("save-me-btn-title"),this.saveMeBtnSub=document.getElementById("save-me-btn-sub"),this.btnSaveMeForfeit=document.getElementById("btn-save-me-forfeit"),this.btnSaveMeNoAds=document.getElementById("btn-save-me-no-ads"),this.vipStoreModal=document.getElementById("vip-store-modal"),this.btnBuyNoAds=document.getElementById("btn-buy-no-ads"),this.btnRestorePurchases=document.getElementById("btn-restore-purchases"),this.btnCloseVip=document.getElementById("btn-close-vip"),this.btnTopNoAds=document.getElementById("btn-top-no-ads"),this.btnMenuNoAds=document.getElementById("btn-menu-no-ads"),this.btnPauseNoAds=document.getElementById("btn-pause-no-ads")}bindEvents(){this.btnSound.addEventListener("click",()=>{const e=this.audioManager.toggleMute();this.btnSound.innerText=e?"🔊":"🔇"}),this.btnPause.addEventListener("click",()=>{this.showPauseModal()}),this.btnHudBoost?.addEventListener("click",()=>{this.onTriggerBoost()}),document.getElementById("btn-play-endless")?.addEventListener("click",()=>{this.onStartGame("endless")}),document.getElementById("btn-play-stages")?.addEventListener("click",()=>{this.stageScreen.classList.remove("hidden")}),document.querySelectorAll(".stage-item .btn-start-stage").forEach((e,t)=>{e.addEventListener("click",()=>{this.stageScreen.classList.add("hidden"),this.onStartGame("stage",t)})}),document.getElementById("btn-close-stages")?.addEventListener("click",()=>{this.stageScreen.classList.add("hidden")}),document.getElementById("btn-open-garage")?.addEventListener("click",()=>{this.openGarage()}),document.getElementById("btn-close-garage")?.addEventListener("click",()=>{this.closeGarage()}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.instructionsScreen.classList.remove("hidden")}),document.getElementById("btn-close-instructions")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.getElementById("btn-instructions-gotit")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-char");t&&kt[t]&&(this.gameState.characterId=t,this.gameState.savePersistedData(),this.player.setCustomization(t,this.gameState.vehicleId,this.gameState.paletteId),this.player.setShowcasePreview(!1),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-veh");t&&Qt[t]&&(this.gameState.vehicleId=t,this.gameState.savePersistedData(),this.player.setCustomization(this.gameState.characterId,t,this.gameState.paletteId),this.player.setShowcasePreview(!0),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.getElementById("btn-resume")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onResumeGame()}),document.getElementById("btn-restart")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-quit")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onQuitToMenu()}),this.btnSaveMeAction?.addEventListener("click",()=>{this.onSaveMeRevive()}),this.btnSaveMeForfeit?.addEventListener("click",()=>{this.hideSaveMeModal(),this.onSaveMeForfeit()}),this.btnSaveMeNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnTopNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnMenuNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnPauseNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnBuyNoAds?.addEventListener("click",()=>{this.onBuyNoAds()}),this.btnRestorePurchases?.addEventListener("click",()=>{this.onRestorePurchases()}),this.btnCloseVip?.addEventListener("click",()=>{this.closeVipModal()}),document.getElementById("btn-retry")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-back-hub")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu()}),document.getElementById("btn-go-garage")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu(),this.openGarage()})}openGarage(){this.mainMenu.classList.add("hidden"),this.garageScreen.classList.remove("hidden"),this.garageView.open()}closeGarage(){this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.updateMenuStats()}showMainMenu(){this.hideSaveMeModal(),this.closeVipModal(),this.hudScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.stageScreen.classList.add("hidden"),this.instructionsScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.btnPause.classList.add("hidden"),this.distanceCounterWrap?.classList.add("hidden"),this.multiplierBadge?.classList.add("hidden"),this.biomeBanner?.classList.remove("hidden"),this.updateMenuStats()}showInGameHUD(){this.hideSaveMeModal(),this.closeVipModal(),this.mainMenu.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.hudScreen.classList.remove("hidden"),this.btnPause.classList.remove("hidden"),this.distanceCounterWrap?.classList.remove("hidden"),this.multiplierBadge?.classList.remove("hidden"),this.biomeBanner?.classList.add("hidden")}showPauseModal(){this.pauseScreen.classList.remove("hidden"),this.onPauseGame()}resumeGame(){this.pauseScreen.classList.add("hidden"),this.onResumeGame()}showSaveMeModal(e){this.hudScreen.classList.add("hidden"),this.distanceCounterWrap?.classList.add("hidden"),this.multiplierBadge?.classList.add("hidden"),this.saveMeModal.classList.remove("hidden"),e?(this.saveMeBtnIcon.innerText="⚡",this.saveMeBtnTitle.innerText="FREE VIP REVIVE",this.saveMeBtnSub.innerText="INSTANT +1 LIFE & SHIELD (NO ADS)",this.btnSaveMeNoAds.classList.add("hidden")):(this.saveMeBtnIcon.innerText="📺",this.saveMeBtnTitle.innerText="WATCH AD TO REVIVE",this.saveMeBtnSub.innerText="+1 LIFE & INVINCIBILITY SHIELD",this.btnSaveMeNoAds.classList.remove("hidden"))}hideSaveMeModal(){this.saveMeModal?.classList.add("hidden")}openVipModal(){this.vipStoreModal?.classList.remove("hidden")}closeVipModal(){this.vipStoreModal?.classList.add("hidden")}updateVipStatus(e){e&&(this.btnTopNoAds&&(this.btnTopNoAds.innerText="👑 VIP ACTIVE",this.btnTopNoAds.classList.add("vip-active")),this.btnMenuNoAds&&(this.btnMenuNoAds.innerHTML='<span class="btn-text">👑 VIP PASS ACTIVE</span><span class="btn-sub">Zero Ads & Free Revives Unlocked</span>'),this.btnPauseNoAds&&(this.btnPauseNoAds.innerText="👑 VIP ACTIVE"),this.btnBuyNoAds&&(this.btnBuyNoAds.innerText="VIP UNLOCKED ✅",this.btnBuyNoAds.classList.add("disabled")))}showGameOverModal(e){this.hideSaveMeModal(),this.hudScreen.classList.add("hidden"),this.distanceCounterWrap?.classList.add("hidden"),this.multiplierBadge?.classList.add("hidden"),this.gameOverScreen.classList.remove("hidden");const t=document.getElementById("game-over-badge"),n=document.getElementById("game-over-title"),s=document.getElementById("new-high-score-banner");e.stageCompleted?(t&&(t.innerText="STAGE COMPLETE!"),n&&(n.innerText="VICTORY!")):(t&&(t.innerText="CRASHED!"),n&&(n.innerText="RUN FINISHED")),document.getElementById("final-distance").innerText=`${e.distance}m`,document.getElementById("final-coins").innerText=`${e.starCoins}`,document.getElementById("final-smash").innerText=`${e.smashes}`,document.getElementById("final-total-score").innerText=`${e.score}`,s&&(e.isNewHighScore||e.isNewHighDistance?s.classList.remove("hidden"):s.classList.add("hidden"))}hideGameOverModal(){this.gameOverScreen.classList.add("hidden")}updateHUD(e){this.biomeBanner.innerText=e,this.starCount.innerText=`${this.gameState.starCoins}`,this.gemCount.innerText=`${this.gameState.diamondGems}`,this.distanceVal.innerHTML=`${Math.floor(this.gameState.distance)} <small>m</small>`,this.speedMeter.innerText=`${Math.floor(this.gameState.speed)} m/s`,this.multiplierBadge.innerText=`${this.gameState.multiplier}x`;const t=this.gameState.getCurrentLevelDef();this.hudLevelBadge&&(this.hudLevelBadge.innerText=`LVL ${this.gameState.currentLevel}`),this.hudLevelName&&(this.hudLevelName.innerText=t.name);const n=Math.min(100,Math.max(0,this.gameState.levelDistance/t.targetDistance*100));if(this.levelProgressBar&&(this.levelProgressBar.style.width=`${n}%`),this.levelFraction&&(this.levelFraction.innerText=`${Math.floor(this.gameState.levelDistance)} / ${t.targetDistance}m`),this.btnHudBoost&&this.hudBoostBadge&&(this.player.boostCharges>0?(this.btnHudBoost.classList.remove("hidden"),this.hudBoostBadge.innerText=`x${this.player.boostCharges}`):this.btnHudBoost.classList.add("hidden")),this.player.mode==="in_vehicle"){this.vehicleMeterContainer.classList.remove("hidden");const s=Qt[this.player.vehicleId];this.vehicleMeterName.innerText=s.name.toUpperCase(),this.vehicleMeterAbility.innerText=s.ability.toUpperCase();const r=Math.max(0,Math.min(100,this.player.vehicleDuration/this.player.maxVehicleDuration*100));this.vehicleMeterFill.style.width=`${r}%`,this.vehicleTimerText.innerText=`${Math.max(0,this.player.vehicleDuration).toFixed(1)}s`}else this.vehicleMeterContainer.classList.add("hidden");if(this.gameState.mode==="stage"){this.missionCard.classList.remove("hidden");const s=this.gameState.getActiveStage();if(s){this.missionTitle.innerText=s.name;const r=Math.min(1,(this.gameState.distance/s.targetDistance+this.gameState.starCoins/s.targetCoins+(s.targetSmashes>0?this.gameState.smashes/s.targetSmashes:1))/(s.targetSmashes>0?3:2));this.missionProgressBar.style.width=`${r*100}%`,this.missionFraction.innerText=`${Math.floor(this.gameState.distance)}m / ${s.targetDistance}m`}}else this.missionCard.classList.add("hidden")}showLevelUpAnnouncement(e,t,n,s){if(!this.levelUpBanner)return;const r=this.levelUpBanner.querySelector(".level-up-title");r&&(r.textContent=`🎉 LEVEL ${e}: ${t.toUpperCase()}! 🎉`),this.levelUpSub&&(this.levelUpSub.textContent=`${n} (+${s}⭐ Bonus)`),this.levelUpBanner.classList.remove("hidden"),setTimeout(()=>{this.levelUpBanner.classList.add("hidden")},2400)}showActionPrompt(e){this.actionPrompt.innerText=e,this.actionPrompt.classList.remove("hidden"),setTimeout(()=>{this.actionPrompt.classList.add("hidden")},1200)}updateMenuStats(){this.menuBestDistance.innerText=`${Math.floor(this.gameState.bestDistance)}m`,this.menuBestScore.innerText=`${this.gameState.bestScore}`;const e=document.getElementById("menu-selected-avatar");e&&(e.innerText=`Avatar: ${kt[this.gameState.characterId].name}`);const t=document.getElementById("menu-selected-vehicle");t&&(t.innerText=`Ride: ${Qt[this.gameState.vehicleId].name}`),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(n=>{n.getAttribute("data-char")===this.gameState.characterId?n.classList.add("active"):n.classList.remove("active")}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(n=>{n.getAttribute("data-veh")===this.gameState.vehicleId?n.classList.add("active"):n.classList.remove("active")})}}class Mp{constructor(e){A(this,"container");A(this,"camera");A(this,"items",[]);this.camera=e;let t=document.getElementById("floating-scores-container");if(!t){t=document.createElement("div"),t.id="floating-scores-container",t.className="floating-scores-container";const n=document.getElementById("ui-container");n?n.appendChild(t):document.body.appendChild(t)}this.container=t}spawn(e,t,n="#FFD700",s="",r=!1){const o=document.createElement("div");o.className=`floating-score ${r?"major-score":""}`,o.style.color=n,s?o.innerHTML=`<span class="score-icon">${s}</span> <span class="score-txt">${t}</span>`:o.innerText=t,this.container.appendChild(o),this.items.push({element:o,worldPos:e.clone().add(new I(0,.8,0)),velocity:new I((Math.random()-.5)*.8,3.2+Math.random()*1.2,0),life:0,maxLife:r?1.4:.9})}update(e){const t=window.innerWidth,n=window.innerHeight,s=new I;for(let r=this.items.length-1;r>=0;r--){const o=this.items[r];if(o.life+=e,o.life>=o.maxLife){o.element.remove(),this.items.splice(r,1);continue}if(o.worldPos.addScaledVector(o.velocity,e),o.velocity.y*=.94,s.copy(o.worldPos).project(this.camera),s.z>1){o.element.style.display="none";continue}o.element.style.display="flex";const a=(s.x*.5+.5)*t,c=(-(s.y*.5)+.5)*n,l=o.life/o.maxLife,h=l<.2?.4+l/.2*.85:Math.max(.6,1.25-l*.6),u=l>.6?1-(l-.6)/.4:1;o.element.style.transform=`translate(-50%, -50%) translate3d(${a}px, ${c}px, 0) scale(${h})`,o.element.style.opacity=`${u}`}}clear(){for(const e of this.items)e.element.remove();this.items=[]}}var Xa;(function(i){i.General="General",i.ParentalGuidance="ParentalGuidance",i.Teen="Teen",i.MatureAudience="MatureAudience"})(Xa||(Xa={}));var qa;(function(i){i.SizeChanged="bannerAdSizeChanged",i.Loaded="bannerAdLoaded",i.FailedToLoad="bannerAdFailedToLoad",i.Opened="bannerAdOpened",i.Closed="bannerAdClosed",i.AdImpression="bannerAdImpression"})(qa||(qa={}));var Ya;(function(i){i.TOP_CENTER="TOP_CENTER",i.CENTER="CENTER",i.BOTTOM_CENTER="BOTTOM_CENTER"})(Ya||(Ya={}));var $a;(function(i){i.BANNER="BANNER",i.FULL_BANNER="FULL_BANNER",i.LARGE_BANNER="LARGE_BANNER",i.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",i.LEADERBOARD="LEADERBOARD",i.ADAPTIVE_BANNER="ADAPTIVE_BANNER",i.SMART_BANNER="SMART_BANNER"})($a||($a={}));var Ri;(function(i){i.Loaded="interstitialAdLoaded",i.FailedToLoad="interstitialAdFailedToLoad",i.Showed="interstitialAdShowed",i.FailedToShow="interstitialAdFailedToShow",i.Dismissed="interstitialAdDismissed"})(Ri||(Ri={}));var Ka;(function(i){i.Loaded="onRewardedInterstitialAdLoaded",i.FailedToLoad="onRewardedInterstitialAdFailedToLoad",i.Showed="onRewardedInterstitialAdShowed",i.FailedToShow="onRewardedInterstitialAdFailedToShow",i.Dismissed="onRewardedInterstitialAdDismissed",i.Rewarded="onRewardedInterstitialAdReward"})(Ka||(Ka={}));var Ci;(function(i){i.Loaded="onRewardedVideoAdLoaded",i.FailedToLoad="onRewardedVideoAdFailedToLoad",i.Showed="onRewardedVideoAdShowed",i.FailedToShow="onRewardedVideoAdFailedToShow",i.Dismissed="onRewardedVideoAdDismissed",i.Rewarded="onRewardedVideoAdReward"})(Ci||(Ci={}));var Za;(function(i){i.NOT_REQUIRED="NOT_REQUIRED",i.OBTAINED="OBTAINED",i.REQUIRED="REQUIRED",i.UNKNOWN="UNKNOWN"})(Za||(Za={}));var Ja;(function(i){i[i.DISABLED=0]="DISABLED",i[i.EEA=1]="EEA",i[i.NOT_EEA=2]="NOT_EEA",i[i.US=3]="US",i[i.OTHER=4]="OTHER"})(Ja||(Ja={}));const Ht=Ni("AdMob",{web:()=>Po(()=>import("./web-B1EicZsE.js"),[],import.meta.url).then(i=>new i.AdMobWeb)});class Wt{static async initialize(){if(!this.isInitialized&&(this.isInitialized=!0,jt.isNativePlatform()))try{await Ht.initialize({initializeForTesting:!1}),await Ht.requestTrackingAuthorization().catch(()=>{}),console.log("[AdService] Native AdMob initialized successfully"),this.setupEventListeners(),this.preloadRewarded(),this.preloadInterstitial()}catch(e){console.warn("[AdService] Native AdMob init error (falling back to web simulator):",e)}}static setupEventListeners(){try{Ht.addListener(Ci.Loaded,()=>{this.isRewardedReady=!0,console.log("[AdService] Native Rewarded Ad loaded and ready")}),Ht.addListener(Ci.FailedToLoad,e=>{this.isRewardedReady=!1,console.warn("[AdService] Rewarded Ad failed to load:",e)}),Ht.addListener(Ci.Dismissed,()=>{this.isRewardedReady=!1,this.preloadRewarded()}),Ht.addListener(Ri.Loaded,()=>{this.isInterstitialReady=!0,console.log("[AdService] Native Interstitial Ad loaded and ready")}),Ht.addListener(Ri.FailedToLoad,e=>{this.isInterstitialReady=!1,console.warn("[AdService] Interstitial Ad failed to load:",e)}),Ht.addListener(Ri.Dismissed,()=>{this.isInterstitialReady=!1,this.preloadInterstitial()})}catch(e){console.warn("[AdService] Event listener registration note:",e)}}static async preloadRewarded(){if(jt.isNativePlatform())try{await Ht.prepareRewardVideoAd({adId:this.IOS_REWARDED_AD_ID}),this.isRewardedReady=!0}catch(e){console.warn("[AdService] Rewarded preload attempt note:",e)}}static async preloadInterstitial(){if(jt.isNativePlatform())try{await Ht.prepareInterstitial({adId:this.IOS_INTERSTITIAL_AD_ID}),this.isInterstitialReady=!0}catch(e){console.warn("[AdService] Interstitial preload attempt note:",e)}}static async showRewardedVideo(){if(this.isShowingAd)return!1;this.isShowingAd=!0;try{if(jt.isNativePlatform())try{this.isRewardedReady||await this.preloadRewarded();const t=await Ht.showRewardVideoAd();return this.isShowingAd=!1,!!t}catch(t){console.warn("[AdService] Native rewarded playback failed, falling back to simulator:",t);const n=await this.playWebSimulatorAd("rewarded");return this.isShowingAd=!1,n}const e=await this.playWebSimulatorAd("rewarded");return this.isShowingAd=!1,e}catch(e){return console.error("[AdService] Error showing rewarded ad:",e),this.isShowingAd=!1,!1}}static async showInterstitialAd(){if(this.isShowingAd)return!1;this.isShowingAd=!0;try{if(jt.isNativePlatform())try{return this.isInterstitialReady||await this.preloadInterstitial(),await Ht.showInterstitial(),this.isShowingAd=!1,!0}catch(t){console.warn("[AdService] Native interstitial playback failed, falling back to simulator:",t);const n=await this.playWebSimulatorAd("interstitial");return this.isShowingAd=!1,n}const e=await this.playWebSimulatorAd("interstitial");return this.isShowingAd=!1,e}catch(e){return console.error("[AdService] Error showing interstitial ad:",e),this.isShowingAd=!1,!1}}static playWebSimulatorAd(e){return new Promise(t=>{const n=document.getElementById("ad-modal-screen"),s=document.querySelector(".ad-sponsor-tag"),r=document.getElementById("ad-timer-countdown"),o=document.getElementById("ad-progress-fill"),a=document.getElementById("btn-ad-skip"),c=document.getElementById("ad-reward-ready");if(!n||!r||!o){t(!0);return}s&&(s.innerText=e==="rewarded"?"📺 SPONSORED REWARD AD":"⚡ SPONSORED INTERSTITIAL"),n.classList.remove("hidden"),c&&c.classList.add("hidden"),a&&(a.classList.add("disabled"),a.innerText="Ad closing in 3s..."),o.style.width="0%";let l=3;r.innerText=`${l}s`;const h=Date.now(),u=2800,d=setInterval(()=>{const v=Date.now()-h,p=Math.min(100,v/u*100);o.style.width=`${p}%`;const m=Math.max(0,Math.ceil((u-v)/1e3));r.innerText=`${m}s`,m<=0&&(clearInterval(d),c&&(c.innerText=e==="rewarded"?"🎉 REWARD VERIFIED! RESUME YOUR RUN 🎉":"✅ SPONSOR COMPLETED",c.classList.remove("hidden")),a&&(a.classList.remove("disabled"),a.innerText=e==="rewarded"?"COLLECT +1 LIFE ✨":"CONTINUE TO RESULTS ⏩"))},50),f=()=>{clearInterval(d),n.classList.add("hidden"),g();const v=Date.now()-h>=u-200;t(v)},g=()=>{a?.removeEventListener("click",f)};a?.addEventListener("click",f)})}}A(Wt,"isInitialized",!1),A(Wt,"isShowingAd",!1),A(Wt,"IOS_REWARDED_AD_ID","ca-app-pub-4591561386928109/7320350068"),A(Wt,"IOS_INTERSTITIAL_AD_ID","ca-app-pub-4591561386928109/8409150587"),A(Wt,"TEST_REWARDED_AD_ID","ca-app-pub-3940256099942544/1712485313"),A(Wt,"TEST_INTERSTITIAL_AD_ID","ca-app-pub-3940256099942544/4411468910"),A(Wt,"isRewardedReady",!1),A(Wt,"isInterstitialReady",!1);const Sp="com.ozkerd.blockville.removeads",ja="blockville_iap_no_ads";class On{static initialize(){try{localStorage.getItem(ja)==="true"&&(this.removeAdsActive=!0)}catch{}}static isRemoveAdsActive(){return this.removeAdsActive}static async purchaseRemoveAds(){try{if(jt.isNativePlatform()){const e=window;if(e.CdvPurchase?.store)return await e.CdvPurchase.store.order(Sp),this.setRemoveAdsActive(!0),{success:!0}}return this.setRemoveAdsActive(!0),{success:!0}}catch(e){return{success:!1,error:e instanceof Error?e.message:"Purchase cancelled"}}}static async restorePurchases(){try{if(jt.isNativePlatform()){const t=window;t.CdvPurchase?.store&&await t.CdvPurchase.store.restorePurchases()}return{success:!0,restored:this.isRemoveAdsActive()}}catch{return{success:!1,restored:!1}}}static setRemoveAdsActive(e){this.removeAdsActive=e;try{localStorage.setItem(ja,e?"true":"false")}catch{}this.onStatusChange&&this.onStatusChange(e)}}A(On,"removeAdsActive",!1),A(On,"onStatusChange",null);class Qa{constructor(){A(this,"canvas");A(this,"sceneRenderer");A(this,"audioManager");A(this,"inputManager");A(this,"gameState");A(this,"particleSystem");A(this,"cameraController");A(this,"player");A(this,"trackManager");A(this,"uiManager");A(this,"floatingText");A(this,"appState","menu");A(this,"lastTime",0);A(this,"crashTimer",0);A(this,"isCrashing",!1);this.canvas=document.getElementById("game-canvas"),this.sceneRenderer=new Jf(this.canvas),this.audioManager=new jf,this.inputManager=new Qf,this.gameState=new ep,this.particleSystem=new tp,this.cameraController=new np(this.sceneRenderer.camera),this.floatingText=new Mp(this.sceneRenderer.camera),this.player=new fr(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId,this.particleSystem,this.audioManager),this.trackManager=new _p(this.sceneRenderer,this.particleSystem,this.audioManager,this.gameState,this.floatingText),this.sceneRenderer.scene.add(this.trackManager.group),this.sceneRenderer.scene.add(this.player.group),this.sceneRenderer.scene.add(this.particleSystem.group),this.uiManager=new xp(this.gameState,this.player,this.audioManager),this.setupUIHandlers(),$e.hideStatusBar(),Wt.initialize(),On.initialize(),On.isRemoveAdsActive()&&(this.gameState.hasRemovedAds=!0,this.uiManager.updateVipStatus(!0)),On.onStatusChange=e=>{this.gameState.hasRemovedAds=e,this.uiManager.updateVipStatus(e)},this.trackManager.reset("boardwalk"),this.lastTime=performance.now(),requestAnimationFrame(this.gameLoop.bind(this))}setupUIHandlers(){this.uiManager.onStartGame=(e,t)=>{this.gameState.mode=e,typeof t=="number"&&(this.gameState.currentStageIndex=t),this.startRun()},this.uiManager.onPauseGame=()=>{this.appState==="playing"&&(this.appState="paused",this.inputManager.setEnabled(!1),this.audioManager.pauseMusic(),this.audioManager.stopVehicleEngine())},this.uiManager.onResumeGame=()=>{this.appState==="paused"&&(this.appState="playing",this.inputManager.setEnabled(!0),this.audioManager.startMusic(),this.player.mode==="in_vehicle"&&this.audioManager.startVehicleEngine())},this.inputManager.onPauseToggle=()=>{this.appState==="playing"?this.uiManager.showPauseModal():this.appState==="paused"&&this.uiManager.resumeGame()},this.uiManager.onRestartGame=()=>{this.gameState.isRunFinalized||this.gameState.finalizeRun(!1),this.startRun()},this.uiManager.onSaveMeRevive=async()=>{this.gameState.hasRemovedAds?this.reviveGame():await Wt.showRewardedVideo()&&this.reviveGame()},this.uiManager.onSaveMeForfeit=async()=>{const e=this.gameState.finalizeRun(!1);this.gameState.shouldShowInterstitialAd()&&await Wt.showInterstitialAd(),this.uiManager.showGameOverModal(e)},this.uiManager.onBuyNoAds=async()=>{(await On.purchaseRemoveAds()).success&&(this.gameState.hasRemovedAds=!0,this.gameState.totalGemsSaved+=100,this.gameState.savePersistedData(),this.uiManager.updateVipStatus(!0),this.audioManager.playLevelUpSound(),$e.celebration(),this.uiManager.closeVipModal(),this.floatingText.spawn(this.player.group.position,"VIP UNLOCKED! +100💎","#FFD700","👑",!0))},this.uiManager.onRestorePurchases=async()=>{(await On.restorePurchases()).restored&&(this.gameState.hasRemovedAds=!0,this.uiManager.updateVipStatus(!0),this.audioManager.playGemSound(),$e.celebration(),this.uiManager.closeVipModal())},this.uiManager.onTriggerBoost=()=>{this.inputManager.triggerBoost()},this.uiManager.onQuitToMenu=()=>{this.gameState.isRunFinalized||this.gameState.finalizeRun(!1),this.appState="menu",this.inputManager.setEnabled(!1),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine(),this.player.reset(),this.trackManager.reset("boardwalk"),this.floatingText.clear(),this.uiManager.showMainMenu()}}startRun(){this.gameState.resetRun(),this.player.setCustomization(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId),this.player.reset();const e=this.gameState.mode==="stage"&&this.gameState.getActiveStage()?.biome||"boardwalk";this.trackManager.reset(e),this.particleSystem.clear(),this.floatingText.clear(),this.inputManager.clear(),this.inputManager.setEnabled(!0),this.appState="playing",this.isCrashing=!1,this.crashTimer=0,this.uiManager.showInGameHUD(),this.audioManager.startMusic()}gameLoop(e){requestAnimationFrame(this.gameLoop.bind(this));const t=Math.min((e-this.lastTime)*.001,.05);if(this.lastTime=e,this.appState==="menu"){const n=new I(0,0,0);this.player.group.position.set(0,0,0),this.cameraController.updateShowcase(n,t),this.particleSystem.update(t),this.sceneRenderer.render();return}if(this.appState==="paused"){this.sceneRenderer.render();return}if(this.appState==="playing"){let n=this.inputManager.popAction();for(;n;)n==="left"?this.player.moveLeft():n==="right"?this.player.moveRight():n==="jump"?this.player.jump():n==="slide"?this.player.slide():n==="boost"&&(this.player.useBoost()?(this.floatingText.spawn(this.player.group.position,"NITRO BOOST! 🚀","#00E5FF","⚡",!0),this.cameraController.addTrauma(.35)):this.player.jump()),n=this.inputManager.popAction();const r=this.player.mode==="in_vehicle"&&Qt[this.player.vehicleId]?.speedMultiplier||1,o=this.player.turboTimer>0?1.5:1;this.gameState.updateDistanceAndSpeed(t,r*o);const a=this.gameState.checkLevelUp();a&&(this.audioManager.playLevelUpSound(),$e.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),this.floatingText.spawn(this.player.group.position,`+${a.rewardCoins} LEVEL UP!`,"#76FF03","🏆",!0),this.uiManager.showLevelUpAnnouncement(a.levelNumber,a.name,a.subtitle,a.rewardCoins)),this.player.update(t,this.gameState.speed);const{crashed:c,stageWon:l}=this.trackManager.update(this.player,t),h=this.player.mode==="in_vehicle",u=this.player.turboTimer>0;if(this.cameraController.updateFollow(this.player.group.position,h,u,t),this.sceneRenderer.updateLightTarget(this.player.group.position),this.particleSystem.update(t),this.floatingText.update(t),this.uiManager.updateHUD(this.trackManager.getCurrentBiomeName()),c&&!this.isCrashing&&(this.isCrashing=!0,this.crashTimer=.85,this.cameraController.addTrauma(.9),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine()),this.isCrashing&&(this.crashTimer-=t,this.crashTimer<=0))if(this.appState="game_over",this.inputManager.setEnabled(!1),$e.warning(),this.gameState.canRevive())this.uiManager.showSaveMeModal(this.gameState.hasRemovedAds);else{const f=this.gameState.finalizeRun(!1);this.gameState.shouldShowInterstitialAd()?Wt.showInterstitialAd().then(()=>{this.uiManager.showGameOverModal(f)}):this.uiManager.showGameOverModal(f)}if(this.gameState.mode==="stage"&&l){const d=this.gameState.advanceStage();this.audioManager.playLevelUpSound(),$e.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),d.nextStage?(this.floatingText.spawn(this.player.group.position,`+${d.rewardCoins} STAGE CLEAR!`,"#00E5FF","🏆",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentStageIndex+1,d.nextStage.name,`Stage Goal Cleared! Entering ${d.nextStage.name}`,d.rewardCoins)):(this.floatingText.spawn(this.player.group.position,`+${d.rewardCoins} ALL STAGES CLEARED!`,"#76FF03","👑",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentLevel,"ALL STAGES CLEARED!","Entering Endless Master Gauntlet! Keep Going!",d.rewardCoins))}}(this.appState==="game_over"||this.appState==="victory")&&(this.particleSystem.update(t),this.floatingText.update(t)),this.sceneRenderer.render()}reviveGame(){this.appState="playing",this.isCrashing=!1,this.crashTimer=0,this.inputManager.setEnabled(!0),this.cameraController.resetTrauma(),this.gameState.revivesUsedInRun++,this.player.revive(),this.trackManager.clearObstaclesAhead(45),this.audioManager.startMusic(),this.audioManager.playLevelUpSound(),$e.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[58879,16766720,16728193,7798531]),this.floatingText.spawn(this.player.group.position,"REVIVED! +3.5s SHIELD!","#00E5FF","💖",!0),this.uiManager.hideSaveMeModal(),this.uiManager.hideGameOverModal(),this.uiManager.showInGameHUD()}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{new Qa}):new Qa;export{Za as A,Ai as I,xs as N,Lo as W};
