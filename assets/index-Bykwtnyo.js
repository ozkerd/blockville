var go=Object.defineProperty;var _o=(i,t,e)=>t in i?go(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var L=(i,t,e)=>_o(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nr="162";const mn="",Ze="srgb",xn="srgb-linear",ir="display-p3",ls="display-p3-linear",ts="linear",te="srgb",es="rec709",ns="p3";const Mr="300 es";class ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sr=1234567;const fi=Math.PI/180,xi=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function sr(i,t){return(i%t+t)%t}function vo(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xo(i,t,e){return i!==t?(e-i)/(t-i):0}function pi(i,t,e){return(1-e)*i+e*t}function Mo(i,t,e,n){return pi(i,t,1-Math.exp(-e*n))}function So(i,t=1){return t-Math.abs(sr(i,t*2)-t)}function yo(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Eo(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function To(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wo(i,t){return i+Math.random()*(t-i)}function bo(i){return i*(.5-Math.random())}function Ao(i){i!==void 0&&(Sr=i);let t=Sr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Co(i){return i*fi}function Ro(i){return i*xi}function Ks(i){return(i&i-1)===0&&i!==0}function Po(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function is(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lo(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _e={DEG2RAD:fi,RAD2DEG:xi,generateUUID:In,clamp:ve,euclideanModulo:sr,mapLinear:vo,inverseLerp:xo,lerp:pi,damp:Mo,pingpong:So,smoothstep:yo,smootherstep:Eo,randInt:To,randFloat:wo,randFloatSpread:bo,seededRandom:Ao,degToRad:Co,radToDeg:Ro,isPowerOfTwo:Ks,ceilPowerOfTwo:Po,floorPowerOfTwo:is,setQuaternionFromProperEuler:Lo,normalize:Pe,denormalize:Kn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],y=s[1],_=s[4],T=s[7],R=s[2],A=s[5],b=s[8];return r[0]=o*v+a*y+c*R,r[3]=o*p+a*_+c*A,r[6]=o*m+a*T+c*b,r[1]=l*v+h*y+d*R,r[4]=l*p+h*_+d*A,r[7]=l*m+h*T+d*b,r[2]=u*v+f*y+g*R,r[5]=u*p+f*_+g*A,r[8]=u*m+f*T+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xs.makeScale(t,e)),this}rotate(t){return this.premultiply(xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Ot;function Ua(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Do(){const i=ss("canvas");return i.style.display="block",i}const yr={};function Io(i){i in yr||(yr[i]=!0,console.warn(i))}const Er=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tr=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bi={[xn]:{transfer:ts,primaries:es,toReference:i=>i,fromReference:i=>i},[Ze]:{transfer:te,primaries:es,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ls]:{transfer:ts,primaries:ns,toReference:i=>i.applyMatrix3(Tr),fromReference:i=>i.applyMatrix3(Er)},[ir]:{transfer:te,primaries:ns,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Tr),fromReference:i=>i.applyMatrix3(Er).convertLinearToSRGB()}},Uo=new Set([xn,ls]),Jt={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uo.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=bi[t].toReference,s=bi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return bi[i].primaries},getTransfer:function(i){return i===mn?ts:bi[i].transfer}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Un;class Na{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=ss("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let No=0;class Fa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:No++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ss(s[o].image)):r.push(Ss(s[o]))}else r=Ss(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Na.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fo=0;class Ie extends ni{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=Ie.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fo++}),this.uuid=In(),this.name="",this.source=new Fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=300;Ie.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,T=(f+1)/2,R=(m+1)/2,A=(h+u)/4,b=(d+v)/4,I=(g+p)/4;return _>T&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=b/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bo extends ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ba extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let p=1-a;const m=c*u+l*f+h*g+d*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const T=a*y;if(c=c*p+u*T,l=l*p+f*T,h=h*p+g*T,d=d*p+v*T,p===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ys.copy(this).projectOnVector(t),this.sub(ys)}reflect(t){return this.sub(ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new D,wr=new Ei;class _n{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(r,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ai.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ai.copy(n.boundingBox)),Ai.applyMatrix4(t.matrixWorld),this.union(Ai)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ai),Ci.subVectors(this.max,ai),Nn.subVectors(t.a,ai),Fn.subVectors(t.b,ai),Bn.subVectors(t.c,ai),ln.subVectors(Fn,Nn),hn.subVectors(Bn,Fn),yn.subVectors(Nn,Bn);let e=[0,-ln.z,ln.y,0,-hn.z,hn.y,0,-yn.z,yn.y,ln.z,0,-ln.x,hn.z,0,-hn.x,yn.z,0,-yn.x,-ln.y,ln.x,0,-hn.y,hn.x,0,-yn.y,yn.x,0];return!Es(e,Nn,Fn,Bn,Ci)||(e=[1,0,0,0,1,0,0,0,1],!Es(e,Nn,Fn,Bn,Ci))?!1:(Ri.crossVectors(ln,hn),e=[Ri.x,Ri.y,Ri.z],Es(e,Nn,Fn,Bn,Ci))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new D,new D,new D,new D,new D,new D,new D,new D],We=new D,Ai=new _n,Nn=new D,Fn=new D,Bn=new D,ln=new D,hn=new D,yn=new D,ai=new D,Ci=new D,Ri=new D,En=new D;function Es(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){En.fromArray(i,r);const a=s.x*Math.abs(En.x)+s.y*Math.abs(En.y)+s.z*Math.abs(En.z),c=t.dot(En),l=e.dot(En),h=n.dot(En);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ko=new _n,oi=new D,Ts=new D;class hs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ko.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oi.subVectors(t,this.center);const e=oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oi.copy(t.center).add(Ts)),this.expandByPoint(oi.copy(t.center).sub(Ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new D,ws=new D,Pi=new D,un=new D,bs=new D,Li=new D,As=new D;class Oa{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ws.copy(t).add(e).multiplyScalar(.5),Pi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(ws);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pi),a=un.dot(this.direction),c=-un.dot(Pi),l=un.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ws).addScaledVector(Pi,u),f}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){bs.subVectors(e,t),Li.subVectors(n,t),As.crossVectors(bs,Li);let o=this.direction.dot(As),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,t);const c=a*this.direction.dot(Li.crossVectors(un,Li));if(c<0)return null;const l=a*this.direction.dot(bs.cross(un));if(l<0||c+l>o)return null;const h=-a*un.dot(As);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,v,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,v,p)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),o=1/On.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Go,t,zo)}lookAt(t,e,n){const s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),dn.crossVectors(n,Fe),dn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),dn.crossVectors(n,Fe)),dn.normalize(),Di.crossVectors(Fe,dn),s[0]=dn.x,s[4]=Di.x,s[8]=Fe.x,s[1]=dn.y,s[5]=Di.y,s[9]=Fe.y,s[2]=dn.z,s[6]=Di.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],T=n[11],R=n[15],A=s[0],b=s[4],I=s[8],F=s[12],x=s[1],w=s[5],$=s[9],K=s[13],P=s[2],z=s[6],B=s[10],q=s[14],H=s[3],J=s[7],j=s[11],Q=s[15];return r[0]=o*A+a*x+c*P+l*H,r[4]=o*b+a*w+c*z+l*J,r[8]=o*I+a*$+c*B+l*j,r[12]=o*F+a*K+c*q+l*Q,r[1]=h*A+d*x+u*P+f*H,r[5]=h*b+d*w+u*z+f*J,r[9]=h*I+d*$+u*B+f*j,r[13]=h*F+d*K+u*q+f*Q,r[2]=g*A+v*x+p*P+m*H,r[6]=g*b+v*w+p*z+m*J,r[10]=g*I+v*$+p*B+m*j,r[14]=g*F+v*K+p*q+m*Q,r[3]=y*A+_*x+T*P+R*H,r[7]=y*b+_*w+T*z+R*J,r[11]=y*I+_*$+T*B+R*j,r[15]=y*F+_*K+T*q+R*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+v*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+p*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=d*p*l-v*u*l+v*c*f-a*p*f-d*c*m+a*u*m,_=g*u*l-h*p*l-g*c*f+o*p*f+h*c*m-o*u*m,T=h*v*l-g*d*l+g*a*f-o*v*f-h*a*m+o*d*m,R=g*d*c-h*v*c-g*a*u+o*v*u+h*a*p-o*d*p,A=e*y+n*_+s*T+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=y*b,t[1]=(v*u*r-d*p*r-v*s*f+n*p*f+d*s*m-n*u*m)*b,t[2]=(a*p*r-v*c*r+v*s*l-n*p*l-a*s*m+n*c*m)*b,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*b,t[4]=_*b,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*b,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*m-e*c*m)*b,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*b,t[8]=T*b,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*m-e*d*m)*b,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*m+e*a*m)*b,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*b,t[12]=R*b,t[13]=(h*v*s-g*d*s+g*n*u-e*v*u-h*n*p+e*d*p)*b,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*p-e*a*p)*b,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,v=o*h,p=o*d,m=a*d,y=c*l,_=c*h,T=c*d,R=n.x,A=n.y,b=n.z;return s[0]=(1-(v+m))*R,s[1]=(f+T)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-T)*A,s[5]=(1-(u+m))*A,s[6]=(p+y)*A,s[7]=0,s[8]=(g+_)*b,s[9]=(p-y)*b,s[10]=(1-(u+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=On.set(s[0],s[1],s[2]).length();const o=On.set(s[4],s[5],s[6]).length(),a=On.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const l=1/r,h=1/o,d=1/a;return Xe.elements[0]*=l,Xe.elements[1]*=l,Xe.elements[2]*=l,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(a===2e3)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,f=(n+s)*h;let g,v;if(a===2e3)g=(o+r)*d,v=-2*d;else if(a===2001)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const On=new D,Xe=new oe,Go=new D(0,0,0),zo=new D(1,1,1),dn=new D,Di=new D,Fe=new D,br=new oe,Ar=new Ei;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return br.makeRotationFromQuaternion(t),this.setFromRotationMatrix(br,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ar.setFromEuler(this),this.setFromQuaternion(Ar,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vo=0;const Cr=new D,kn=new Ei,rn=new oe,Ii=new D,ci=new D,Ho=new D,Wo=new Ei,Rr=new D(1,0,0),Pr=new D(0,1,0),Lr=new D(0,0,1),Xo={type:"added"},qo={type:"removed"},Cs={type:"childadded",child:null},Rs={type:"childremoved",child:null};class Me extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new D,e=new Qe,n=new Ei,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ot}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(Rr,t)}rotateY(t){return this.rotateOnAxis(Pr,t)}rotateZ(t){return this.rotateOnAxis(Lr,t)}translateOnAxis(t,e){return Cr.copy(t).applyQuaternion(this.quaternion),this.position.add(Cr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rr,t)}translateY(t){return this.translateOnAxis(Pr,t)}translateZ(t){return this.translateOnAxis(Lr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ii.copy(t):Ii.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(ci,Ii,this.up):rn.lookAt(Ii,ci,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),kn.setFromRotationMatrix(rn),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xo),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qo),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,t,Ho),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,Wo,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new D,an=new D,Ps=new D,on=new D,Gn=new D,zn=new D,Dr=new D,Ls=new D,Ds=new D,Is=new D;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),an.subVectors(n,e),Ps.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(an),c=qe.dot(Ps),l=an.dot(an),h=an.dot(Ps),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),an.subVectors(t,e),qe.cross(an).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),an.subVectors(this.a,this.b),qe.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gn.subVectors(s,n),zn.subVectors(r,n),Ls.subVectors(t,n);const c=Gn.dot(Ls),l=zn.dot(Ls);if(c<=0&&l<=0)return e.copy(n);Ds.subVectors(t,s);const h=Gn.dot(Ds),d=zn.dot(Ds);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gn,o);Is.subVectors(t,r);const f=Gn.dot(Is),g=zn.dot(Is);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(zn,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Dr.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Dr,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(Gn,o).addScaledVector(zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Us(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=sr(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Us(o,r,t+1/3),this.g=Us(o,r,t),this.b=Us(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Ga[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(ve(be.r*255,0,255))*65536+Math.round(ve(be.g*255,0,255))*256+Math.round(ve(be.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ze){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Ui);const n=pi(fn.h,Ui.h,e),s=pi(fn.s,Ui.s,e),r=pi(fn.l,Ui.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new kt;kt.NAMES=Ga;let Yo=0;class ii extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yo++}),this.uuid=In(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rs extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new D,Ni=new pt;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Io("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ni.fromBufferAttribute(this,e),Ni.applyMatrix3(t),this.setXY(e,Ni.x,Ni.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class za extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Va extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $o=0;const ze=new oe,Ns=new Me,Vn=new D,Be=new _n,li=new _n,ge=new D;class Ae extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$o++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ua(t)?Va:za)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Ns.lookAt(t),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];li.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Be.min,li.min),Be.expandByPoint(ge),ge.addVectors(Be.max,li.max),Be.expandByPoint(ge)):(Be.expandByPoint(li.min),Be.expandByPoint(li.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ge.fromBufferAttribute(a,l),c&&(Vn.fromBufferAttribute(t,l),ge.add(Vn)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;const l=new D,h=new D,d=new D,u=new pt,f=new pt,g=new pt,v=new D,p=new D;function m(I,F,x){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[I].add(v),a[F].add(v),a[x].add(v),c[I].add(p),c[F].add(p),c[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,F=y.length;I<F;++I){const x=y[I],w=x.start,$=x.count;for(let K=w,P=w+$;K<P;K+=3)m(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const _=new D,T=new D,R=new D,A=new D;function b(I){R.fromBufferAttribute(s,I),A.copy(R);const F=a[I];_.copy(F),_.sub(R.multiplyScalar(R.dot(F))).normalize(),T.crossVectors(A,F);const w=T.dot(c[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,w)}for(let I=0,F=y.length;I<F;++I){const x=y[I],w=x.start,$=x.count;for(let K=w,P=w+$;K<P;K+=3)b(t.getX(K+0)),b(t.getX(K+1)),b(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new He(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ir=new oe,Tn=new Oa,Fi=new hs,Ur=new D,Hn=new D,Wn=new D,Xn=new D,Fs=new D,Bi=new D,Oi=new pt,ki=new pt,Gi=new pt,Nr=new D,Fr=new D,Br=new D,zi=new D,Vi=new D;class k extends Me{constructor(t=new Ae,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Fs.fromBufferAttribute(d,t),o?Bi.addScaledVector(Fs,h):Bi.addScaledVector(Fs.sub(e),h))}e.add(Bi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(r),Tn.copy(t.ray).recast(t.near),!(Fi.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Fi,Ur)===null||Tn.origin.distanceToSquared(Ur)>(t.far-t.near)**2))&&(Ir.copy(r).invert(),Tn.copy(t.ray).applyMatrix4(Ir),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,R=_;T<R;T+=3){const A=a.getX(T),b=a.getX(T+1),I=a.getX(T+2);s=Hi(this,m,t,n,l,h,d,A,b,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),T=a.getX(p+2);s=Hi(this,o,t,n,l,h,d,y,_,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,R=_;T<R;T+=3){const A=T,b=T+1,I=T+2;s=Hi(this,m,t,n,l,h,d,A,b,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,T=p+2;s=Hi(this,o,t,n,l,h,d,y,_,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ko(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;Vi.copy(a),Vi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vi);return l<e.near||l>e.far?null:{distance:l,point:Vi.clone(),object:i}}function Hi(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Hn),i.getVertexPosition(c,Wn),i.getVertexPosition(l,Xn);const h=Ko(i,t,e,n,Hn,Wn,Xn,zi);if(h){s&&(Oi.fromBufferAttribute(s,a),ki.fromBufferAttribute(s,c),Gi.fromBufferAttribute(s,l),h.uv=je.getInterpolation(zi,Hn,Wn,Xn,Oi,ki,Gi,new pt)),r&&(Oi.fromBufferAttribute(r,a),ki.fromBufferAttribute(r,c),Gi.fromBufferAttribute(r,l),h.uv1=je.getInterpolation(zi,Hn,Wn,Xn,Oi,ki,Gi,new pt)),o&&(Nr.fromBufferAttribute(o,a),Fr.fromBufferAttribute(o,c),Br.fromBufferAttribute(o,l),h.normal=je.getInterpolation(zi,Hn,Wn,Xn,Nr,Fr,Br,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};je.getNormal(Hn,Wn,Xn,d.normal),h.face=d}return h}class Ue extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function g(v,p,m,y,_,T,R,A,b,I,F){const x=T/b,w=R/I,$=T/2,K=R/2,P=A/2,z=b+1,B=I+1;let q=0,H=0;const J=new D;for(let j=0;j<B;j++){const Q=j*w-K;for(let lt=0;lt<z;lt++){const yt=lt*x-$;J[v]=yt*y,J[p]=Q*_,J[m]=P,l.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=A>0?1:-1,h.push(J.x,J.y,J.z),d.push(lt/b),d.push(1-j/I),q+=1}}for(let j=0;j<I;j++)for(let Q=0;Q<b;Q++){const lt=u+Q+z*j,yt=u+Q+z*(j+1),V=u+(Q+1)+z*(j+1),et=u+(Q+1)+z*j;c.push(lt,yt,et),c.push(yt,V,et),H+=6}a.addGroup(f,H,F),f+=H,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=ti(i[e]);for(const s in n)t[s]=n[s]}return t}function Zo(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ha(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt.workingColorSpace}const Jo={clone:ti,merge:Le};var jo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jo,this.fragmentShader=Qo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ti(t.uniforms),this.uniformsGroups=Zo(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wa extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new D,Or=new pt,kr=new pt;class Ve extends Wa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,Or,kr),e.subVectors(kr,Or)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qn=-90,Yn=1;class tc extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(qn,Yn,t,e);s.layers=this.layers,this.add(s);const r=new Ve(qn,Yn,t,e);r.layers=this.layers,this.add(r);const o=new Ve(qn,Yn,t,e);o.layers=this.layers,this.add(o);const a=new Ve(qn,Yn,t,e);a.layers=this.layers,this.add(a);const c=new Ve(qn,Yn,t,e);c.layers=this.layers,this.add(c);const l=new Ve(qn,Yn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xa extends Ie{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ec extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new k(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Bs=new D,nc=new D,ic=new Ot;class Cn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bs.subVectors(n,e).cross(nc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ic.getNormalMatrix(t),s=this.coplanarPoint(Bs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new hs,Wi=new D;class rr{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],y=s[13],_=s[14],T=s[15];if(n[0].setComponents(c-r,u-l,p-f,T-m).normalize(),n[1].setComponents(c+r,u+l,p+f,T+m).normalize(),n[2].setComponents(c+o,u+h,p+g,T+y).normalize(),n[3].setComponents(c-o,u-h,p-g,T-y).normalize(),n[4].setComponents(c-a,u-d,p-v,T-_).normalize(),e===2e3)n[5].setComponents(c+a,u+d,p+v,T+_).normalize();else if(e===2001)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Wi.x=s.normal.x>0?t.max.x:t.min.x,Wi.y=s.normal.y>0?t.max.y:t.min.y,Wi.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qa(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sc(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const d=l.array,u=l.usage,f=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),l.onUploadCallback();let v;if(d instanceof Float32Array)v=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=i.SHORT;else if(d instanceof Uint32Array)v=i.UNSIGNED_INT;else if(d instanceof Int32Array)v=i.INT;else if(d instanceof Int8Array)v=i.BYTE;else if(d instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){const u=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,l),f.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];e?i.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count):i.bufferSubData(d,m.start*u.BYTES_PER_ELEMENT,u.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):i.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class cn extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let _=0;_<l;_++){const T=_*d-r;g.push(T,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const _=y+l*m,T=y+l*(m+1),R=y+1+l*(m+1),A=y+1+l*m;f.push(_,T,A),f.push(T,R,A)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ac=`#ifdef USE_ALPHAHASH
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
#endif`,oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uc=`#ifdef USE_AOMAP
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
#endif`,dc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fc=`#ifdef USE_BATCHING
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
#endif`,pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_c=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vc=`#ifdef USE_IRIDESCENCE
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
#endif`,xc=`#ifdef USE_BUMPMAP
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
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cc=`#define PI 3.141592653589793
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
} // validated`,Rc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pc=`vec3 transformedNormal = objectNormal;
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
#endif`,Lc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fc=`
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
}`,Bc=`#ifdef USE_ENVMAP
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
#endif`,Oc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kc=`#ifdef USE_ENVMAP
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
#endif`,Gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zc=`#ifdef USE_ENVMAP
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
#endif`,Vc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qc=`#ifdef USE_GRADIENTMAP
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
}`,Yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$c=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jc=`uniform bool receiveShadow;
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
#endif`,jc=`#ifdef USE_ENVMAP
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
#endif`,Qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,el=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,il=`PhysicalMaterial material;
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
#endif`,sl=`struct PhysicalMaterial {
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
}`,rl=`
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
#endif`,al=`#if defined( RE_IndirectDiffuse )
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
#endif`,ol=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ll=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ul=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ml=`#if defined( USE_POINTS_UV )
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
#endif`,gl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_l=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xl=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ml=`#ifdef USE_MORPHNORMALS
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
#endif`,Sl=`#ifdef USE_MORPHTARGETS
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
#endif`,yl=`#ifdef USE_MORPHTARGETS
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
#endif`,El=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Al=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cl=`#ifdef USE_NORMALMAP
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
#endif`,Rl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ll=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Il=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ul=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ol=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wl=`float getShadowMask() {
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
}`,Xl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ql=`#ifdef USE_SKINNING
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
#endif`,Yl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$l=`#ifdef USE_SKINNING
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
#endif`,Kl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ql=`#ifdef USE_TRANSMISSION
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
#endif`,th=`#ifdef USE_TRANSMISSION
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
#endif`,eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ah=`uniform sampler2D t2D;
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
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ch=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uh=`#include <common>
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
}`,dh=`#if DEPTH_PACKING == 3200
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
}`,fh=`#define DISTANCE
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
}`,ph=`#define DISTANCE
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
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_h=`uniform float scale;
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
}`,vh=`uniform vec3 diffuse;
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
}`,xh=`#include <common>
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
}`,Mh=`uniform vec3 diffuse;
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
}`,Sh=`#define LAMBERT
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
}`,yh=`#define LAMBERT
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
}`,Eh=`#define MATCAP
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
}`,Th=`#define MATCAP
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
}`,wh=`#define NORMAL
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
}`,bh=`#define NORMAL
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
}`,Ah=`#define PHONG
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
}`,Ch=`#define PHONG
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
}`,Rh=`#define STANDARD
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
}`,Ph=`#define STANDARD
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
}`,Lh=`#define TOON
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
}`,Dh=`#define TOON
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
}`,Ih=`uniform float size;
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
}`,Uh=`uniform vec3 diffuse;
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
}`,Nh=`#include <common>
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
}`,Fh=`uniform vec3 color;
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
}`,Bh=`uniform float rotation;
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
}`,Oh=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:rc,alphahash_pars_fragment:ac,alphamap_fragment:oc,alphamap_pars_fragment:cc,alphatest_fragment:lc,alphatest_pars_fragment:hc,aomap_fragment:uc,aomap_pars_fragment:dc,batching_pars_vertex:fc,batching_vertex:pc,begin_vertex:mc,beginnormal_vertex:gc,bsdfs:_c,iridescence_fragment:vc,bumpmap_pars_fragment:xc,clipping_planes_fragment:Mc,clipping_planes_pars_fragment:Sc,clipping_planes_pars_vertex:yc,clipping_planes_vertex:Ec,color_fragment:Tc,color_pars_fragment:wc,color_pars_vertex:bc,color_vertex:Ac,common:Cc,cube_uv_reflection_fragment:Rc,defaultnormal_vertex:Pc,displacementmap_pars_vertex:Lc,displacementmap_vertex:Dc,emissivemap_fragment:Ic,emissivemap_pars_fragment:Uc,colorspace_fragment:Nc,colorspace_pars_fragment:Fc,envmap_fragment:Bc,envmap_common_pars_fragment:Oc,envmap_pars_fragment:kc,envmap_pars_vertex:Gc,envmap_physical_pars_fragment:jc,envmap_vertex:zc,fog_vertex:Vc,fog_pars_vertex:Hc,fog_fragment:Wc,fog_pars_fragment:Xc,gradientmap_pars_fragment:qc,lightmap_fragment:Yc,lightmap_pars_fragment:$c,lights_lambert_fragment:Kc,lights_lambert_pars_fragment:Zc,lights_pars_begin:Jc,lights_toon_fragment:Qc,lights_toon_pars_fragment:tl,lights_phong_fragment:el,lights_phong_pars_fragment:nl,lights_physical_fragment:il,lights_physical_pars_fragment:sl,lights_fragment_begin:rl,lights_fragment_maps:al,lights_fragment_end:ol,logdepthbuf_fragment:cl,logdepthbuf_pars_fragment:ll,logdepthbuf_pars_vertex:hl,logdepthbuf_vertex:ul,map_fragment:dl,map_pars_fragment:fl,map_particle_fragment:pl,map_particle_pars_fragment:ml,metalnessmap_fragment:gl,metalnessmap_pars_fragment:_l,morphinstance_vertex:vl,morphcolor_vertex:xl,morphnormal_vertex:Ml,morphtarget_pars_vertex:Sl,morphtarget_vertex:yl,normal_fragment_begin:El,normal_fragment_maps:Tl,normal_pars_fragment:wl,normal_pars_vertex:bl,normal_vertex:Al,normalmap_pars_fragment:Cl,clearcoat_normal_fragment_begin:Rl,clearcoat_normal_fragment_maps:Pl,clearcoat_pars_fragment:Ll,iridescence_pars_fragment:Dl,opaque_fragment:Il,packing:Ul,premultiplied_alpha_fragment:Nl,project_vertex:Fl,dithering_fragment:Bl,dithering_pars_fragment:Ol,roughnessmap_fragment:kl,roughnessmap_pars_fragment:Gl,shadowmap_pars_fragment:zl,shadowmap_pars_vertex:Vl,shadowmap_vertex:Hl,shadowmask_pars_fragment:Wl,skinbase_vertex:Xl,skinning_pars_vertex:ql,skinning_vertex:Yl,skinnormal_vertex:$l,specularmap_fragment:Kl,specularmap_pars_fragment:Zl,tonemapping_fragment:Jl,tonemapping_pars_fragment:jl,transmission_fragment:Ql,transmission_pars_fragment:th,uv_pars_fragment:eh,uv_pars_vertex:nh,uv_vertex:ih,worldpos_vertex:sh,background_vert:rh,background_frag:ah,backgroundCube_vert:oh,backgroundCube_frag:ch,cube_vert:lh,cube_frag:hh,depth_vert:uh,depth_frag:dh,distanceRGBA_vert:fh,distanceRGBA_frag:ph,equirect_vert:mh,equirect_frag:gh,linedashed_vert:_h,linedashed_frag:vh,meshbasic_vert:xh,meshbasic_frag:Mh,meshlambert_vert:Sh,meshlambert_frag:yh,meshmatcap_vert:Eh,meshmatcap_frag:Th,meshnormal_vert:wh,meshnormal_frag:bh,meshphong_vert:Ah,meshphong_frag:Ch,meshphysical_vert:Rh,meshphysical_frag:Ph,meshtoon_vert:Lh,meshtoon_frag:Dh,points_vert:Ih,points_frag:Uh,shadow_vert:Nh,shadow_frag:Fh,sprite_vert:Bh,sprite_frag:Oh},ot={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Je={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Je.physical={uniforms:Le([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Xi={r:0,b:0,g:0},bn=new Qe,kh=new oe;function Gh(i,t,e,n,s,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(p,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(h===void 0&&(h=new k(new Ue(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:ti(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bn.copy(m.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kh.makeRotationFromEuler(bn)),h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==te,(d!==_||u!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new k(new cn(2,2),new vn({name:"BackgroundMaterial",uniforms:ti(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,m){p.getRGB(Xi,Ha(i)),n.buffers.color.setClear(Xi.r,Xi.g,Xi.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function zh(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function d(P,z,B,q,H){let J=!1;if(o){const j=v(q,B,z);l!==j&&(l=j,f(l.object)),J=m(P,q,B,H),J&&y(P,q,B,H)}else{const j=z.wireframe===!0;(l.geometry!==q.id||l.program!==B.id||l.wireframe!==j)&&(l.geometry=q.id,l.program=B.id,l.wireframe=j,J=!0)}H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,I(P,z,B,q),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,z,B){const q=B.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let J=H[z.id];J===void 0&&(J={},H[z.id]=J);let j=J[q];return j===void 0&&(j=p(u()),J[q]=j),j}function p(P){const z=[],B=[],q=[];for(let H=0;H<s;H++)z[H]=0,B[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:q,object:P,attributes:{},index:null}}function m(P,z,B,q){const H=l.attributes,J=z.attributes;let j=0;const Q=B.getAttributes();for(const lt in Q)if(Q[lt].location>=0){const V=H[lt];let et=J[lt];if(et===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),V===void 0||V.attribute!==et||et&&V.data!==et.data)return!0;j++}return l.attributesNum!==j||l.index!==q}function y(P,z,B,q){const H={},J=z.attributes;let j=0;const Q=B.getAttributes();for(const lt in Q)if(Q[lt].location>=0){let V=J[lt];V===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));const et={};et.attribute=V,V&&V.data&&(et.data=V.data),H[lt]=et,j++}l.attributes=H,l.attributesNum=j,l.index=q}function _(){const P=l.newAttributes;for(let z=0,B=P.length;z<B;z++)P[z]=0}function T(P){R(P,0)}function R(P,z){const B=l.newAttributes,q=l.enabledAttributes,H=l.attributeDivisors;B[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),H[P]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),H[P]=z)}function A(){const P=l.newAttributes,z=l.enabledAttributes;for(let B=0,q=z.length;B<q;B++)z[B]!==P[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function b(P,z,B,q,H,J,j){j===!0?i.vertexAttribIPointer(P,z,B,H,J):i.vertexAttribPointer(P,z,B,q,H,J)}function I(P,z,B,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const H=q.attributes,J=B.getAttributes(),j=z.defaultAttributeValues;for(const Q in J){const lt=J[Q];if(lt.location>=0){let yt=H[Q];if(yt===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(yt=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(yt=P.instanceColor)),yt!==void 0){const V=yt.normalized,et=yt.itemSize,st=e.get(yt);if(st===void 0)continue;const _t=st.buffer,vt=st.type,mt=st.bytesPerElement,$t=n.isWebGL2===!0&&(vt===i.INT||vt===i.UNSIGNED_INT||yt.gpuType===1013);if(yt.isInterleavedBufferAttribute){const Pt=yt.data,O=Pt.stride,Se=yt.offset;if(Pt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<lt.locationSize;Tt++)R(lt.location+Tt,Pt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Tt=0;Tt<lt.locationSize;Tt++)T(lt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Tt=0;Tt<lt.locationSize;Tt++)b(lt.location+Tt,et/lt.locationSize,vt,V,O*mt,(Se+et/lt.locationSize*Tt)*mt,$t)}else{if(yt.isInstancedBufferAttribute){for(let Pt=0;Pt<lt.locationSize;Pt++)R(lt.location+Pt,yt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Pt=0;Pt<lt.locationSize;Pt++)T(lt.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Pt=0;Pt<lt.locationSize;Pt++)b(lt.location+Pt,et/lt.locationSize,vt,V,et*mt,et/lt.locationSize*Pt*mt,$t)}}else if(j!==void 0){const V=j[Q];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(lt.location,V);break;case 3:i.vertexAttrib3fv(lt.location,V);break;case 4:i.vertexAttrib4fv(lt.location,V);break;default:i.vertexAttrib1fv(lt.location,V)}}}}A()}function F(){$();for(const P in a){const z=a[P];for(const B in z){const q=z[B];for(const H in q)g(q[H].object),delete q[H];delete z[B]}delete a[P]}}function x(P){if(a[P.id]===void 0)return;const z=a[P.id];for(const B in z){const q=z[B];for(const H in q)g(q[H].object),delete q[H];delete z[B]}delete a[P.id]}function w(P){for(const z in a){const B=a[z];if(B[P.id]===void 0)continue;const q=B[P.id];for(const H in q)g(q[H].object),delete q[H];delete B[P.id]}}function $(){K(),h=!0,l!==c&&(l=c,f(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:$,resetDefaultState:K,dispose:F,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:T,disableUnusedAttributes:A}}function Vh(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,u){if(u===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,d,u),e.update(d,r,u)}function l(h,d,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Hh(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,T=o||t.has("OES_texture_float"),R=_&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:A}}function Wh(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Cn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,_=y*4;let T=m.clippingState||null;c.value=T,T=h(g,u,_,f);for(let R=0;R!==_;++R)T[R]=e[R];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,T=f;_!==v;++_,T+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Xh(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ec(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ya extends Wa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zn=4,Gr=[.125,.215,.35,.446,.526,.582],Pn=20,Os=new Ya,zr=new kt;let ks=null,Gs=0,zs=0;const Rn=(1+Math.sqrt(5))/2,$n=1/Rn,Vr=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Rn,$n),new D(0,Rn,-$n),new D($n,0,Rn),new D(-$n,0,Rn),new D(Rn,$n,0),new D(-Rn,$n,0)];class Hr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ks=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ks,Gs,zs),t.scissorTest=!1,qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ks=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:xn,depthBuffer:!1},s=Wr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wr(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qh(r)),this._blurMaterial=Yh(r,t,e)}return s}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,Os)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(zr),h.toneMapping=0,h.autoClear=!1;const f=new rs({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new k(new Ue,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(zr),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const _=this._cubeSize;qi(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xr());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;qi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Os)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vr[(s-1)%Vr.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new k(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Pn;p>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);const m=[];let y=0;for(let b=0;b<Pn;++b){const I=b/v,F=Math.exp(-I*I/2);m.push(F),b===0?y+=F:b<p&&(y+=2*F)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const T=this._sizeLods[s],R=3*T*(s>_-Zn?s-_+Zn:0),A=4*(this._cubeSize-T);qi(e,R,A,3*T,2*T),c.setRenderTarget(e),c.render(d,Os)}}function qh(i){const t=[],e=[],n=[];let s=i;const r=i-Zn+1+Gr.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zn?c=Gr[o-i+Zn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,I=A>2?0:-1,F=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];y.set(F,v*g*A),_.set(u,p*g*A);const x=[A,A,A,A,A,A];T.set(x,m*g*A)}const R=new Ae;R.setAttribute("position",new He(y,v)),R.setAttribute("uv",new He(_,p)),R.setAttribute("faceIndex",new He(T,m)),t.push(R),s>Zn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wr(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yh(i,t,e){const n=new Float32Array(Pn),s=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ar(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xr(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ar(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function qr(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ar(){return`

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
	`}function $h(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Hr(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Hr(i));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zh(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,T=y.length;_<T;_+=3){const R=y[_+0],A=y[_+1],b=y[_+2];u.push(R,A,A,b,b,R)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,T=y.length/3-1;_<T;_+=3){const R=_+0,A=_+1,b=_+2;u.push(R,A,A,b,b,R)}}else return;const p=new(Ua(u)?Va:za)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Jh(i,t,e,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),e.update(g,r,1)}function d(f,g,v){if(v===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,v),e.update(g,r,v)}function u(f,g,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let m=0;for(let y=0;y<v;y++)m+=g[y];e.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function jh(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qh(i,t){return i[0]-t[0]}function tu(i,t){return Math.abs(t[1])-Math.abs(i[1])}function eu(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let $=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",$)};v!==void 0&&v.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let A=0;p===!0&&(A=1),m===!0&&(A=2),y===!0&&(A=3);let b=h.attributes.position.count*A,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const F=new Float32Array(b*I*4*g),x=new Ba(F,b,I,g);x.type=1015,x.needsUpdate=!0;const w=A*4;for(let K=0;K<g;K++){const P=_[K],z=T[K],B=R[K],q=b*I*4*K;for(let H=0;H<P.count;H++){const J=H*w;p===!0&&(o.fromBufferAttribute(P,H),F[q+J+0]=o.x,F[q+J+1]=o.y,F[q+J+2]=o.z,F[q+J+3]=0),m===!0&&(o.fromBufferAttribute(z,H),F[q+J+4]=o.x,F[q+J+5]=o.y,F[q+J+6]=o.z,F[q+J+7]=0),y===!0&&(o.fromBufferAttribute(B,H),F[q+J+8]=o.x,F[q+J+9]=o.y,F[q+J+10]=o.z,F[q+J+11]=B.itemSize===4?o.w:1)}}v={count:g,texture:x,size:new pt(b,I)},r.set(h,v),h.addEventListener("dispose",$)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let p=0;for(let y=0;y<u.length;y++)p+=u[y];const m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",m),d.getUniforms().setValue(i,"morphTargetInfluences",u)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const f=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){const T=g[_];T[0]=_,T[1]=u[_]}g.sort(tu);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Qh);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const T=a[_],R=T[0],A=T[1];R!==Number.MAX_SAFE_INTEGER&&A?(v&&h.getAttribute("morphTarget"+_)!==v[R]&&h.setAttribute("morphTarget"+_,v[R]),p&&h.getAttribute("morphNormal"+_)!==p[R]&&h.setAttribute("morphNormal"+_,p[R]),s[_]=A,m+=A):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}const y=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function nu(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class $a extends Ie{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ka=new Ie,Za=new $a(1,1);Za.compareFunction=515;const Ja=new Ba,ja=new Oo,Qa=new Xa,Yr=[],$r=[],Kr=new Float32Array(16),Zr=new Float32Array(9),Jr=new Float32Array(4);function si(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yr[s];if(r===void 0&&(r=new Float32Array(s),Yr[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function us(i,t){let e=$r[t];e===void 0&&(e=new Int32Array(t),$r[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function iu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function su(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function ru(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function au(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function ou(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Jr.set(n),i.uniformMatrix2fv(this.addr,!1,Jr),pe(e,n)}}function cu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Zr.set(n),i.uniformMatrix3fv(this.addr,!1,Zr),pe(e,n)}}function lu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Kr.set(n),i.uniformMatrix4fv(this.addr,!1,Kr),pe(e,n)}}function hu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function du(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function fu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function pu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function _u(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function vu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Za:Ka;e.setTexture2D(t||r,s)}function xu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ja,s)}function Mu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qa,s)}function Su(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ja,s)}function yu(i){switch(i){case 5126:return iu;case 35664:return su;case 35665:return ru;case 35666:return au;case 35674:return ou;case 35675:return cu;case 35676:return lu;case 5124:case 35670:return hu;case 35667:case 35671:return uu;case 35668:case 35672:return du;case 35669:case 35673:return fu;case 5125:return pu;case 36294:return mu;case 36295:return gu;case 36296:return _u;case 35678:case 36198:case 36298:case 36306:case 35682:return vu;case 35679:case 36299:case 36307:return xu;case 35680:case 36300:case 36308:case 36293:return Mu;case 36289:case 36303:case 36311:case 36292:return Su}}function Eu(i,t){i.uniform1fv(this.addr,t)}function Tu(i,t){const e=si(t,this.size,2);i.uniform2fv(this.addr,e)}function wu(i,t){const e=si(t,this.size,3);i.uniform3fv(this.addr,e)}function bu(i,t){const e=si(t,this.size,4);i.uniform4fv(this.addr,e)}function Au(i,t){const e=si(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cu(i,t){const e=si(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ru(i,t){const e=si(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pu(i,t){i.uniform1iv(this.addr,t)}function Lu(i,t){i.uniform2iv(this.addr,t)}function Du(i,t){i.uniform3iv(this.addr,t)}function Iu(i,t){i.uniform4iv(this.addr,t)}function Uu(i,t){i.uniform1uiv(this.addr,t)}function Nu(i,t){i.uniform2uiv(this.addr,t)}function Fu(i,t){i.uniform3uiv(this.addr,t)}function Bu(i,t){i.uniform4uiv(this.addr,t)}function Ou(i,t,e){const n=this.cache,s=t.length,r=us(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ka,r[o])}function ku(i,t,e){const n=this.cache,s=t.length,r=us(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ja,r[o])}function Gu(i,t,e){const n=this.cache,s=t.length,r=us(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qa,r[o])}function zu(i,t,e){const n=this.cache,s=t.length,r=us(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ja,r[o])}function Vu(i){switch(i){case 5126:return Eu;case 35664:return Tu;case 35665:return wu;case 35666:return bu;case 35674:return Au;case 35675:return Cu;case 35676:return Ru;case 5124:case 35670:return Pu;case 35667:case 35671:return Lu;case 35668:case 35672:return Du;case 35669:case 35673:return Iu;case 5125:return Uu;case 36294:return Nu;case 36295:return Fu;case 36296:return Bu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ou;case 35679:case 36299:case 36307:return ku;case 35680:case 36300:case 36308:case 36293:return Gu;case 36289:case 36303:case 36311:case 36292:return zu}}class Hu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yu(e.type)}}class Wu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vu(e.type)}}class Xu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Vs=/(\w+)(\])?(\[|\.)?/g;function jr(i,t){i.seq.push(t),i.map[t.id]=t}function qu(i,t,e){const n=i.name,s=n.length;for(Vs.lastIndex=0;;){const r=Vs.exec(n),o=Vs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jr(e,l===void 0?new Hu(a,i,t):new Wu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Xu(a),jr(e,d)),e=d}}}class Qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qu(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Qr(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yu=37297;let $u=0;function Ku(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Zu(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===ns&&e===es?n="LinearDisplayP3ToLinearSRGB":t===es&&e===ns&&(n="LinearSRGBToLinearDisplayP3"),i){case xn:case ls:return[n,"LinearTransferOETF"];case Ze:case ir:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ta(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ku(i.getShaderSource(t),o)}else return s}function Ju(i,t){const e=Zu(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ju(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Qu(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jn).join(`
`)}function td(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jn).join(`
`)}function ed(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jn(i){return i!==""}function ea(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function na(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const id=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(i){return i.replace(id,rd)}const sd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rd(i,t){let e=Bt[t];if(e===void 0){const n=sd.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zs(e)}const ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ia(i){return i.replace(ad,od)}function od(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function ld(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function ud(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function dd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fd(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=cd(e),l=ld(e),h=hd(e),d=ud(e),u=dd(e),f=e.isWebGL2?"":Qu(e),g=td(e),v=ed(r),p=s.createProgram();let m,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Jn).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Jn).join(`
`),y.length>0&&(y+=`
`)):(m=[sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),y=[f,sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Bt.tonemapping_pars_fragment:"",e.toneMapping!==0?ju("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Ju("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jn).join(`
`)),o=Zs(o),o=ea(o,e),o=na(o,e),a=Zs(a),a=ea(a,e),a=na(a,e),o=ia(o),a=ia(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=_+m+o,R=_+y+a,A=Qr(s,s.VERTEX_SHADER,T),b=Qr(s,s.FRAGMENT_SHADER,R);s.attachShader(p,A),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function I($){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(b).trim();let B=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,b);else{const H=ta(s,A,"vertex"),J=ta(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+K+`
`+H+`
`+J)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||z==="")&&(q=!1);q&&($.diagnostics={runnable:B,programLog:K,vertexShader:{log:P,prefix:m},fragmentShader:{log:z,prefix:y}})}s.deleteShader(A),s.deleteShader(b),F=new Qi(s,p),x=nd(s,p)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Yu)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$u++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let pd=0;class md{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gd(t),e.set(t,n)),n}}class gd{constructor(t){this.id=pd++,this.code=t,this.usedTimes=0}}function _d(i,t,e,n,s,r,o){const a=new ka,c=new md,l=new Set,h=[],d=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,w,$,K,P){const z=K.fog,B=P.geometry,q=x.isMeshStandardMaterial?K.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),J=H&&H.mapping===306?H.image.height:null,j=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,lt=Q!==void 0?Q.length:0;let yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let V,et,st,_t;if(j){const jt=Je[j];V=jt.vertexShader,et=jt.fragmentShader}else V=x.vertexShader,et=x.fragmentShader,c.update(x),st=c.getVertexShaderID(x),_t=c.getFragmentShaderID(x);const vt=i.getRenderTarget(),mt=P.isInstancedMesh===!0,$t=P.isBatchedMesh===!0,Pt=!!x.map,O=!!x.matcap,Se=!!H,Tt=!!x.aoMap,Vt=!!x.lightMap,bt=!!x.bumpMap,qt=!!x.normalMap,Gt=!!x.displacementMap,Ht=!!x.emissiveMap,ce=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,Z=x.clearcoat>0,tt=x.iridescence>0,it=x.sheen>0,nt=x.transmission>0,Ut=M&&!!x.anisotropyMap,At=Z&&!!x.clearcoatMap,ct=Z&&!!x.clearcoatNormalMap,ut=Z&&!!x.clearcoatRoughnessMap,Nt=tt&&!!x.iridescenceMap,rt=tt&&!!x.iridescenceThicknessMap,he=it&&!!x.sheenColorMap,Wt=it&&!!x.sheenRoughnessMap,Et=!!x.specularMap,xt=!!x.specularColorMap,Mt=!!x.specularIntensityMap,Yt=nt&&!!x.transmissionMap,Dt=nt&&!!x.thicknessMap,ie=!!x.gradientMap,U=!!x.alphaMap,ht=x.alphaTest>0,W=!!x.alphaHash,at=!!x.extensions;let dt=0;x.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Xt={isWebGL2:d,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:et,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:_t,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:$t,instancing:mt,instancingColor:mt&&P.instanceColor!==null,instancingMorph:mt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:xn,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:O,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:J,aoMap:Tt,lightMap:Vt,bumpMap:bt,normalMap:qt,displacementMap:f&&Gt,emissiveMap:Ht,normalMapObjectSpace:qt&&x.normalMapType===1,normalMapTangentSpace:qt&&x.normalMapType===0,metalnessMap:ce,roughnessMap:C,anisotropy:M,anisotropyMap:Ut,clearcoat:Z,clearcoatMap:At,clearcoatNormalMap:ct,clearcoatRoughnessMap:ut,iridescence:tt,iridescenceMap:Nt,iridescenceThicknessMap:rt,sheen:it,sheenColorMap:he,sheenRoughnessMap:Wt,specularMap:Et,specularColorMap:xt,specularIntensityMap:Mt,transmission:nt,transmissionMap:Yt,thicknessMap:Dt,gradientMap:ie,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:U,alphaTest:ht,alphaHash:W,combine:x.combine,mapUv:Pt&&p(x.map.channel),aoMapUv:Tt&&p(x.aoMap.channel),lightMapUv:Vt&&p(x.lightMap.channel),bumpMapUv:bt&&p(x.bumpMap.channel),normalMapUv:qt&&p(x.normalMap.channel),displacementMapUv:Gt&&p(x.displacementMap.channel),emissiveMapUv:Ht&&p(x.emissiveMap.channel),metalnessMapUv:ce&&p(x.metalnessMap.channel),roughnessMapUv:C&&p(x.roughnessMap.channel),anisotropyMapUv:Ut&&p(x.anisotropyMap.channel),clearcoatMapUv:At&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(x.sheenRoughnessMap.channel),specularMapUv:Et&&p(x.specularMap.channel),specularColorMapUv:xt&&p(x.specularColorMap.channel),specularIntensityMapUv:Mt&&p(x.specularIntensityMap.channel),transmissionMapUv:Yt&&p(x.transmissionMap.channel),thicknessMapUv:Dt&&p(x.thicknessMap.channel),alphaMapUv:U&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qt||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Pt||U),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:at&&x.extensions.derivatives===!0,extensionFragDepth:at&&x.extensions.fragDepth===!0,extensionDrawBuffers:at&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:at&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function y(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)w.push($),w.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(_(w,x),T(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function T(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const w=v[x.type];let $;if(w){const K=Je[w];$=Jo.clone(K.uniforms)}else $=x.uniforms;return $}function A(x,w){let $;for(let K=0,P=h.length;K<P;K++){const z=h[K];if(z.cacheKey===w){$=z,++$.usedTimes;break}}return $===void 0&&($=new fd(i,w,x,r),h.push($)),$}function b(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function I(x){c.remove(x)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:b,releaseShaderCache:I,programs:h,dispose:F}}function vd(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ra(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function aa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,v,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function a(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,u){e.length>1&&e.sort(d||xd),n.length>1&&n.sort(u||ra),s.length>1&&s.sort(u||ra)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Md(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new aa,i.set(n,[o])):s>=r.length?(o=new aa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new kt};break;case"SpotLight":e={position:new D,direction:new D,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function yd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ed=0;function Td(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wd(i,t){const e=new Sd,n=yd(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);const r=new D,o=new oe,a=new oe;function c(h,d){let u=0,f=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let v=0,p=0,m=0,y=0,_=0,T=0,R=0,A=0,b=0,I=0,F=0;h.sort(Td);const x=d===!0?Math.PI:1;for(let $=0,K=h.length;$<K;$++){const P=h[$],z=P.color,B=P.intensity,q=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*B*x,f+=z.g*B*x,g+=z.b*B*x;else if(P.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(P.sh.coefficients[J],B);F++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const j=P.shadow,Q=n.get(P);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,s.directionalShadow[v]=Q,s.directionalShadowMap[v]=H,s.directionalShadowMatrix[v]=P.shadow.matrix,T++}s.directional[v]=J,v++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(z).multiplyScalar(B*x),J.distance=q,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,s.spot[m]=J;const j=P.shadow;if(P.map&&(s.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&I++),s.spotLightMatrix[m]=j.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,s.spotShadow[m]=Q,s.spotShadowMap[m]=H,A++}m++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(z).multiplyScalar(B),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=J,y++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*x),J.distance=P.distance,J.decay=P.decay,P.castShadow){const j=P.shadow,Q=n.get(P);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=H,s.pointShadowMatrix[p]=P.shadow.matrix,R++}s.point[p]=J,p++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(B*x),J.groundColor.copy(P.groundColor).multiplyScalar(B*x),s.hemi[_]=J,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=f,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==T||w.numPointShadows!==R||w.numSpotShadows!==A||w.numSpotMaps!==b||w.numLightProbes!==F)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=y,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=A+b-I,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,w.directionalLength=v,w.pointLength=p,w.spotLength=m,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=T,w.numPointShadows=R,w.numSpotShadows=A,w.numSpotMaps=b,w.numLightProbes=F,s.version=Ed++)}function l(h,d){let u=0,f=0,g=0,v=0,p=0;const m=d.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const T=h[y];if(T.isDirectionalLight){const R=s.directional[u];R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),u++}else if(T.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const R=s.rectArea[v];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const R=s.point[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:s}}function oa(i,t){const e=new wd(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bd(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new oa(i,t),e.set(r,[c])):o>=a.length?(c=new oa(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ad extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cd extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pd=`uniform sampler2D shadow_pass;
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
}`;function Ld(i,t,e){let n=new rr;const s=new pt,r=new pt,o=new xe,a=new Ad({depthPacking:3201}),c=new Cd,l={},h=e.maxTextureSize,d={0:1,1:0,2:2},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Rd,fragmentShader:Pd}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new k(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(A,b,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const F=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),$=i.state;$.setBlending(0),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=m!==3&&this.type===3,P=m===3&&this.type!==3;for(let z=0,B=A.length;z<B;z++){const q=A[z],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||K===!0||P===!0){const Q=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new Ln(s.x,s.y,Q),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const j=H.getViewportCount();for(let Q=0;Q<j;Q++){const lt=H.getViewport(Q);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),$.viewport(o),H.updateMatrices(q,Q),n=H.getFrustum(),T(b,I,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===3&&y(H,I),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(F,x,w)};function y(A,b){const I=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ln(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,I,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,I,f,v,null)}function _(A,b,I,F){let x=null;const w=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)x=w;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=x.uuid,K=b.uuid;let P=l[$];P===void 0&&(P={},l[$]=P);let z=P[K];z===void 0&&(z=x.clone(),P[K]=z,b.addEventListener("dispose",R)),x=z}if(x.visible=b.visible,x.wireframe=b.wireframe,F===3?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=i.properties.get(x);$.light=I}return x}function T(A,b,I,F,x){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const K=t.update(A),P=A.material;if(Array.isArray(P)){const z=K.groups;for(let B=0,q=z.length;B<q;B++){const H=z[B],J=P[H.materialIndex];if(J&&J.visible){const j=_(A,J,F,x);A.onBeforeShadow(i,A,b,I,K,j,H),i.renderBufferDirect(I,null,K,j,A,H),A.onAfterShadow(i,A,b,I,K,j,H)}}}else if(P.visible){const z=_(A,P,F,x);A.onBeforeShadow(i,A,b,I,K,z,null),i.renderBufferDirect(I,null,K,z,A,null),A.onAfterShadow(i,A,b,I,K,z,null)}}const $=A.children;for(let K=0,P=$.length;K<P;K++)T($[K],b,I,F,x)}function R(A){A.target.removeEventListener("dispose",R);for(const I in l){const F=l[I],x=A.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}function Dd(i,t,e){const n=e.isWebGL2;function s(){let U=!1;const ht=new xe;let W=null;const at=new xe(0,0,0,0);return{setMask:function(dt){W!==dt&&!U&&(i.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){U=dt},setClear:function(dt,Xt,jt,ye,ke){ke===!0&&(dt*=ye,Xt*=ye,jt*=ye),ht.set(dt,Xt,jt,ye),at.equals(ht)===!1&&(i.clearColor(dt,Xt,jt,ye),at.copy(ht))},reset:function(){U=!1,W=null,at.set(-1,0,0,0)}}}function r(){let U=!1,ht=null,W=null,at=null;return{setTest:function(dt){dt?mt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(dt){ht!==dt&&!U&&(i.depthMask(dt),ht=dt)},setFunc:function(dt){if(W!==dt){switch(dt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=dt}},setLocked:function(dt){U=dt},setClear:function(dt){at!==dt&&(i.clearDepth(dt),at=dt)},reset:function(){U=!1,ht=null,W=null,at=null}}}function o(){let U=!1,ht=null,W=null,at=null,dt=null,Xt=null,jt=null,ye=null,ke=null;return{setTest:function(Qt){U||(Qt?mt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!U&&(i.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,Ce,Ke){(W!==Qt||at!==Ce||dt!==Ke)&&(i.stencilFunc(Qt,Ce,Ke),W=Qt,at=Ce,dt=Ke)},setOp:function(Qt,Ce,Ke){(Xt!==Qt||jt!==Ce||ye!==Ke)&&(i.stencilOp(Qt,Ce,Ke),Xt=Qt,jt=Ce,ye=Ke)},setLocked:function(Qt){U=Qt},setClear:function(Qt){ke!==Qt&&(i.clearStencil(Qt),ke=Qt)},reset:function(){U=!1,ht=null,W=null,at=null,dt=null,Xt=null,jt=null,ye=null,ke=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,v=[],p=null,m=!1,y=null,_=null,T=null,R=null,A=null,b=null,I=null,F=new kt(0,0,0),x=0,w=!1,$=null,K=null,P=null,z=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=J>=2);let Q=null,lt={};const yt=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),et=new xe().fromArray(yt),st=new xe().fromArray(V);function _t(U,ht,W,at){const dt=new Uint8Array(4),Xt=i.createTexture();i.bindTexture(U,Xt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<W;jt++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ht+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return Xt}const vt={};vt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(vt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(i.DEPTH_TEST),c.setFunc(3),Gt(!1),Ht(1),mt(i.CULL_FACE),bt(0);function mt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function $t(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Pt(U,ht){return f[U]!==ht?(i.bindFramebuffer(U,ht),f[U]=ht,n&&(U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function O(U,ht){let W=v,at=!1;if(U){W=g.get(ht),W===void 0&&(W=[],g.set(ht,W));const dt=U.textures;if(W.length!==dt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Xt=0,jt=dt.length;Xt<jt;Xt++)W[Xt]=i.COLOR_ATTACHMENT0+Xt;W.length=dt.length,at=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,at=!0);if(at)if(e.isWebGL2)i.drawBuffers(W);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Se(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const Tt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};if(n)Tt[103]=i.MIN,Tt[104]=i.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(Tt[103]=U.MIN_EXT,Tt[104]=U.MAX_EXT)}const Vt={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function bt(U,ht,W,at,dt,Xt,jt,ye,ke,Qt){if(U===0){m===!0&&($t(i.BLEND),m=!1);return}if(m===!1&&(mt(i.BLEND),m=!0),U!==5){if(U!==y||Qt!==w){if((_!==100||A!==100)&&(i.blendEquation(i.FUNC_ADD),_=100,A=100),Qt)switch(U){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,R=null,b=null,I=null,F.set(0,0,0),x=0,y=U,w=Qt}return}dt=dt||ht,Xt=Xt||W,jt=jt||at,(ht!==_||dt!==A)&&(i.blendEquationSeparate(Tt[ht],Tt[dt]),_=ht,A=dt),(W!==T||at!==R||Xt!==b||jt!==I)&&(i.blendFuncSeparate(Vt[W],Vt[at],Vt[Xt],Vt[jt]),T=W,R=at,b=Xt,I=jt),(ye.equals(F)===!1||ke!==x)&&(i.blendColor(ye.r,ye.g,ye.b,ke),F.copy(ye),x=ke),y=U,w=!1}function qt(U,ht){U.side===2?$t(i.CULL_FACE):mt(i.CULL_FACE);let W=U.side===1;ht&&(W=!W),Gt(W),U.blending===1&&U.transparent===!1?bt(0):bt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);const at=U.stencilWrite;l.setTest(at),at&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),C(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){$!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),$=U)}function Ht(U){U!==0?(mt(i.CULL_FACE),U!==K&&(U===1?i.cullFace(i.BACK):U===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),K=U}function ce(U){U!==P&&(H&&i.lineWidth(U),P=U)}function C(U,ht,W){U?(mt(i.POLYGON_OFFSET_FILL),(z!==ht||B!==W)&&(i.polygonOffset(ht,W),z=ht,B=W)):$t(i.POLYGON_OFFSET_FILL)}function M(U){U?mt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function Z(U){U===void 0&&(U=i.TEXTURE0+q-1),Q!==U&&(i.activeTexture(U),Q=U)}function tt(U,ht,W){W===void 0&&(Q===null?W=i.TEXTURE0+q-1:W=Q);let at=lt[W];at===void 0&&(at={type:void 0,texture:void 0},lt[W]=at),(at.type!==U||at.texture!==ht)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(U,ht||vt[U]),at.type=U,at.texture=ht)}function it(){const U=lt[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Wt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Mt(U){st.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),st.copy(U))}function Yt(U,ht){let W=d.get(ht);W===void 0&&(W=new WeakMap,d.set(ht,W));let at=W.get(U);at===void 0&&(at=i.getUniformBlockIndex(ht,U.name),W.set(U,at))}function Dt(U,ht){const at=d.get(ht).get(U);h.get(ht)!==at&&(i.uniformBlockBinding(ht,at,U.__bindingPointIndex),h.set(ht,at))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,lt={},f={},g=new WeakMap,v=[],p=null,m=!1,y=null,_=null,T=null,R=null,A=null,b=null,I=null,F=new kt(0,0,0),x=0,w=!1,$=null,K=null,P=null,z=null,B=null,et.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:mt,disable:$t,bindFramebuffer:Pt,drawBuffers:O,useProgram:Se,setBlending:bt,setMaterial:qt,setFlipSided:Gt,setCullFace:Ht,setLineWidth:ce,setPolygonOffset:C,setScissorTest:M,activeTexture:Z,bindTexture:tt,unbindTexture:it,compressedTexImage2D:nt,compressedTexImage3D:Ut,texImage2D:Wt,texImage3D:Et,updateUBOMapping:Yt,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:he,texSubImage2D:At,texSubImage3D:ct,compressedTexSubImage2D:ut,compressedTexSubImage3D:Nt,scissor:xt,viewport:Mt,reset:ie}}function Id(i,t,e,n,s,r,o){const a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,d=new WeakMap;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return g?new OffscreenCanvas(C,M):ss("canvas")}function p(C,M,Z,tt){let it=1;const nt=ce(C);if((nt.width>tt||nt.height>tt)&&(it=tt/Math.max(nt.width,nt.height)),it<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ut=M?is:Math.floor,At=Ut(it*nt.width),ct=Ut(it*nt.height);u===void 0&&(u=v(At,ct));const ut=Z?v(At,ct):u;return ut.width=At,ut.height=ct,ut.getContext("2d").drawImage(C,0,0,At,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+At+"x"+ct+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){const M=ce(C);return Ks(M.width)&&Ks(M.height)}function y(C){return a?!1:C.wrapS!==1001||C.wrapT!==1001||C.minFilter!==1003&&C.minFilter!==1006}function _(C,M){return C.generateMipmaps&&M&&C.minFilter!==1003&&C.minFilter!==1006}function T(C){i.generateMipmap(C)}function R(C,M,Z,tt,it=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=M;if(M===i.RED&&(Z===i.FLOAT&&(nt=i.R32F),Z===i.HALF_FLOAT&&(nt=i.R16F),Z===i.UNSIGNED_BYTE&&(nt=i.R8)),M===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.R8UI),Z===i.UNSIGNED_SHORT&&(nt=i.R16UI),Z===i.UNSIGNED_INT&&(nt=i.R32UI),Z===i.BYTE&&(nt=i.R8I),Z===i.SHORT&&(nt=i.R16I),Z===i.INT&&(nt=i.R32I)),M===i.RG&&(Z===i.FLOAT&&(nt=i.RG32F),Z===i.HALF_FLOAT&&(nt=i.RG16F),Z===i.UNSIGNED_BYTE&&(nt=i.RG8)),M===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Z===i.UNSIGNED_INT&&(nt=i.RG32UI),Z===i.BYTE&&(nt=i.RG8I),Z===i.SHORT&&(nt=i.RG16I),Z===i.INT&&(nt=i.RG32I)),M===i.RGBA){const Ut=it?ts:Jt.getTransfer(tt);Z===i.FLOAT&&(nt=i.RGBA32F),Z===i.HALF_FLOAT&&(nt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(nt=Ut===te?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function A(C,M,Z){return _(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){return C===1003||C===1004||C===1005?i.NEAREST:i.LINEAR}function I(C){const M=C.target;M.removeEventListener("dispose",I),x(M),M.isVideoTexture&&d.delete(M)}function F(C){const M=C.target;M.removeEventListener("dispose",F),$(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const Z=C.source,tt=f.get(Z);if(tt){const it=tt[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(C),Object.keys(tt).length===0&&f.delete(Z)}n.remove(C)}function w(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const Z=C.source,tt=f.get(Z);delete tt[M.__cacheKey],o.memory.textures--}function $(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let it=0;it<M.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(M.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=C.textures;for(let tt=0,it=Z.length;tt<it;tt++){const nt=n.get(Z[tt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Z[tt])}n.remove(C)}let K=0;function P(){K=0}function z(){const C=K;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),K+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const Z=n.get(C);if(C.isVideoTexture&&Gt(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(Z,C,M);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+M)}function H(C,M){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){st(Z,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+M)}function J(C,M){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){st(Z,C,M);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+M)}function j(C,M){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){_t(Z,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+M)}const Q={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},lt={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},yt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function V(C,M,Z){if(M.type===1015&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(i.texParameteri(C,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Q[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,lt[M.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==1001||M.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,b(M.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==1003&&M.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,yt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(C,M){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const tt=M.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const nt=B(M);if(nt!==C.__cacheKey){it[nt]===void 0&&(it[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),it[nt].usedTimes++;const Ut=it[C.__cacheKey];Ut!==void 0&&(it[C.__cacheKey].usedTimes--,Ut.usedTimes===0&&w(M)),C.__cacheKey=nt,C.__webglTexture=it[nt].texture}return Z}function st(C,M,Z){let tt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=i.TEXTURE_3D);const it=et(C,M),nt=M.source;e.bindTexture(tt,C.__webglTexture,i.TEXTURE0+Z);const Ut=n.get(nt);if(nt.version!==Ut.__version||it===!0){e.activeTexture(i.TEXTURE0+Z);const At=Jt.getPrimaries(Jt.workingColorSpace),ct=M.colorSpace===mn?null:Jt.getPrimaries(M.colorSpace),ut=M.colorSpace===mn||At===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Nt=y(M)&&m(M.image)===!1;let rt=p(M.image,Nt,!1,s.maxTextureSize);rt=Ht(M,rt);const he=m(rt)||a,Wt=r.convert(M.format,M.colorSpace);let Et=r.convert(M.type),xt=R(M.internalFormat,Wt,Et,M.colorSpace,M.isVideoTexture);V(tt,M,he);let Mt;const Yt=M.mipmaps,Dt=a&&M.isVideoTexture!==!0&&xt!==36196,ie=Ut.__version===void 0||it===!0,U=nt.dataReady,ht=A(M,rt,he);if(M.isDepthTexture)xt=i.DEPTH_COMPONENT,a?M.type===1015?xt=i.DEPTH_COMPONENT32F:M.type===1014?xt=i.DEPTH_COMPONENT24:M.type===1020?xt=i.DEPTH24_STENCIL8:xt=i.DEPTH_COMPONENT16:M.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===1026&&xt===i.DEPTH_COMPONENT&&M.type!==1012&&M.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=1014,Et=r.convert(M.type)),M.format===1027&&xt===i.DEPTH_COMPONENT&&(xt=i.DEPTH_STENCIL,M.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=1020,Et=r.convert(M.type))),ie&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,xt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,Wt,Et,null));else if(M.isDataTexture)if(Yt.length>0&&he){Dt&&ie&&e.texStorage2D(i.TEXTURE_2D,ht,xt,Yt[0].width,Yt[0].height);for(let W=0,at=Yt.length;W<at;W++)Mt=Yt[W],Dt?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,Wt,Et,Mt.data):e.texImage2D(i.TEXTURE_2D,W,xt,Mt.width,Mt.height,0,Wt,Et,Mt.data);M.generateMipmaps=!1}else Dt?(ie&&e.texStorage2D(i.TEXTURE_2D,ht,xt,rt.width,rt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Wt,Et,rt.data)):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,Wt,Et,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Dt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,xt,Yt[0].width,Yt[0].height,rt.depth);for(let W=0,at=Yt.length;W<at;W++)Mt=Yt[W],M.format!==1023?Wt!==null?Dt?U&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,rt.depth,Wt,Mt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,xt,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,rt.depth,Wt,Et,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,xt,Mt.width,Mt.height,rt.depth,0,Wt,Et,Mt.data)}else{Dt&&ie&&e.texStorage2D(i.TEXTURE_2D,ht,xt,Yt[0].width,Yt[0].height);for(let W=0,at=Yt.length;W<at;W++)Mt=Yt[W],M.format!==1023?Wt!==null?Dt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,Wt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,xt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,Wt,Et,Mt.data):e.texImage2D(i.TEXTURE_2D,W,xt,Mt.width,Mt.height,0,Wt,Et,Mt.data)}else if(M.isDataArrayTexture)Dt?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,xt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Wt,Et,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,rt.width,rt.height,rt.depth,0,Wt,Et,rt.data);else if(M.isData3DTexture)Dt?(ie&&e.texStorage3D(i.TEXTURE_3D,ht,xt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Wt,Et,rt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,rt.width,rt.height,rt.depth,0,Wt,Et,rt.data);else if(M.isFramebufferTexture){if(ie)if(Dt)e.texStorage2D(i.TEXTURE_2D,ht,xt,rt.width,rt.height);else{let W=rt.width,at=rt.height;for(let dt=0;dt<ht;dt++)e.texImage2D(i.TEXTURE_2D,dt,xt,W,at,0,Wt,Et,null),W>>=1,at>>=1}}else if(Yt.length>0&&he){if(Dt&&ie){const W=ce(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ht,xt,W.width,W.height)}for(let W=0,at=Yt.length;W<at;W++)Mt=Yt[W],Dt?U&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Wt,Et,Mt):e.texImage2D(i.TEXTURE_2D,W,xt,Wt,Et,Mt);M.generateMipmaps=!1}else if(Dt){if(ie){const W=ce(rt);e.texStorage2D(i.TEXTURE_2D,ht,xt,W.width,W.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,Et,rt)}else e.texImage2D(i.TEXTURE_2D,0,xt,Wt,Et,rt);_(M,he)&&T(tt),Ut.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _t(C,M,Z){if(M.image.length!==6)return;const tt=et(C,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Z);const nt=n.get(it);if(it.version!==nt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Z);const Ut=Jt.getPrimaries(Jt.workingColorSpace),At=M.colorSpace===mn?null:Jt.getPrimaries(M.colorSpace),ct=M.colorSpace===mn||Ut===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let W=0;W<6;W++)!ut&&!Nt?rt[W]=p(M.image[W],!1,!0,s.maxCubemapSize):rt[W]=Nt?M.image[W].image:M.image[W],rt[W]=Ht(M,rt[W]);const he=rt[0],Wt=m(he)||a,Et=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Mt=R(M.internalFormat,Et,xt,M.colorSpace),Yt=a&&M.isVideoTexture!==!0,Dt=nt.__version===void 0||tt===!0,ie=it.dataReady;let U=A(M,he,Wt);V(i.TEXTURE_CUBE_MAP,M,Wt);let ht;if(ut){Yt&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,U,Mt,he.width,he.height);for(let W=0;W<6;W++){ht=rt[W].mipmaps;for(let at=0;at<ht.length;at++){const dt=ht[at];M.format!==1023?Et!==null?Yt?ie&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at,0,0,dt.width,dt.height,Et,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at,Mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at,0,0,dt.width,dt.height,Et,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at,Mt,dt.width,dt.height,0,Et,xt,dt.data)}}}else{if(ht=M.mipmaps,Yt&&Dt){ht.length>0&&U++;const W=ce(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,U,Mt,W.width,W.height)}for(let W=0;W<6;W++)if(Nt){Yt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,rt[W].width,rt[W].height,Et,xt,rt[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Mt,rt[W].width,rt[W].height,0,Et,xt,rt[W].data);for(let at=0;at<ht.length;at++){const Xt=ht[at].image[W].image;Yt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at+1,0,0,Xt.width,Xt.height,Et,xt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at+1,Mt,Xt.width,Xt.height,0,Et,xt,Xt.data)}}else{Yt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Et,xt,rt[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Mt,Et,xt,rt[W]);for(let at=0;at<ht.length;at++){const dt=ht[at];Yt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at+1,0,0,Et,xt,dt.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,at+1,Mt,Et,xt,dt.image[W])}}}_(M,Wt)&&T(i.TEXTURE_CUBE_MAP),nt.__version=it.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function vt(C,M,Z,tt,it,nt){const Ut=r.convert(Z.format,Z.colorSpace),At=r.convert(Z.type),ct=R(Z.internalFormat,Ut,At,Z.colorSpace);if(!n.get(M).__hasExternalTextures){const Nt=Math.max(1,M.width>>nt),rt=Math.max(1,M.height>>nt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,ct,Nt,rt,M.depth,0,Ut,At,null):e.texImage2D(it,nt,ct,Nt,rt,0,Ut,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),qt(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,n.get(Z).__webglTexture,0,bt(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,n.get(Z).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(C,M,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let tt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||qt(M)){const it=M.depthTexture;it&&it.isDepthTexture&&(it.type===1015?tt=i.DEPTH_COMPONENT32F:it.type===1014&&(tt=i.DEPTH_COMPONENT24));const nt=bt(M);qt(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,tt,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,tt,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,tt,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const tt=bt(M);Z&&qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,M.width,M.height):qt(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const tt=M.textures;for(let it=0;it<tt.length;it++){const nt=tt[it],Ut=r.convert(nt.format,nt.colorSpace),At=r.convert(nt.type),ct=R(nt.internalFormat,Ut,At,nt.colorSpace),ut=bt(M);Z&&qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,ct,M.width,M.height):qt(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const tt=n.get(M.depthTexture).__webglTexture,it=bt(M);if(M.depthTexture.format===1026)qt(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(M.depthTexture.format===1027)qt(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const M=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");$t(M.__webglFramebuffer,C)}else if(Z){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=i.createRenderbuffer(),mt(M.__webglDepthbuffer[tt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),mt(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(C,M,Z){const tt=n.get(C);M!==void 0&&vt(tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Pt(C)}function Se(C){const M=C.texture,Z=n.get(C),tt=n.get(M);C.addEventListener("dispose",F);const it=C.textures,nt=C.isWebGLCubeRenderTarget===!0,Ut=it.length>1,At=m(C)||a;if(Ut||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=M.version,o.memory.textures++),nt){Z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[ct]=[];for(let ut=0;ut<M.mipmaps.length;ut++)Z.__webglFramebuffer[ct][ut]=i.createFramebuffer()}else Z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)Z.__webglFramebuffer[ct]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Ut)if(s.drawBuffers)for(let ct=0,ut=it.length;ct<ut;ct++){const Nt=n.get(it[ct]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&qt(C)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){const ut=it[ct];Z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ct]);const Nt=r.convert(ut.format,ut.colorSpace),rt=r.convert(ut.type),he=R(ut.internalFormat,Nt,rt,ut.colorSpace,C.isXRRenderTarget===!0),Wt=bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,he,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,At);for(let ct=0;ct<6;ct++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)vt(Z.__webglFramebuffer[ct][ut],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ut);else vt(Z.__webglFramebuffer[ct],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);_(M,At)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let ct=0,ut=it.length;ct<ut;ct++){const Nt=it[ct],rt=n.get(Nt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),V(i.TEXTURE_2D,Nt,At),vt(Z.__webglFramebuffer,C,Nt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),_(Nt,At)&&T(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,tt.__webglTexture),V(ct,M,At),a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)vt(Z.__webglFramebuffer[ut],C,M,i.COLOR_ATTACHMENT0,ct,ut);else vt(Z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ct,0);_(M,At)&&T(ct),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Tt(C){const M=m(C)||a,Z=C.textures;for(let tt=0,it=Z.length;tt<it;tt++){const nt=Z[tt];if(_(nt,M)){const Ut=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(nt).__webglTexture;e.bindTexture(Ut,At),T(Ut),e.unbindTexture()}}}function Vt(C){if(a&&C.samples>0&&qt(C)===!1){const M=C.textures,Z=C.width,tt=C.height;let it=i.COLOR_BUFFER_BIT;const nt=[],Ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(C),ct=M.length>1;if(ct)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){nt.push(i.COLOR_ATTACHMENT0+ut),C.depthBuffer&&nt.push(Ut);const Nt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Nt===!1&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[ut]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ut]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ut])),ct){const rt=n.get(M[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,Z,tt,0,0,Z,tt,it,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,At.__webglColorRenderbuffer[ut]);const Nt=n.get(M[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function bt(C){return Math.min(s.maxSamples,C.samples)}function qt(C){const M=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Gt(C){const M=o.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function Ht(C,M){const Z=C.colorSpace,tt=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===1035||Z!==xn&&Z!==mn&&(Jt.getTransfer(Z)===te?a===!1?t.has("EXT_sRGB")===!0&&tt===1023?(C.format=1035,C.minFilter=1006,C.generateMipmaps=!1):M=Na.sRGBToLinear(M):(tt!==1023||it!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),M}function ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=O,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=qt}function Ud(i,t,e){const n=e.isWebGL2;function s(r,o=mn){let a;const c=Jt.getTransfer(o);if(r===1009)return i.UNSIGNED_BYTE;if(r===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return i.BYTE;if(r===1011)return i.SHORT;if(r===1012)return i.UNSIGNED_SHORT;if(r===1013)return i.INT;if(r===1014)return i.UNSIGNED_INT;if(r===1015)return i.FLOAT;if(r===1016)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return i.ALPHA;if(r===1023)return i.RGBA;if(r===1024)return i.LUMINANCE;if(r===1025)return i.LUMINANCE_ALPHA;if(r===1026)return i.DEPTH_COMPONENT;if(r===1027)return i.DEPTH_STENCIL;if(r===1035)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return i.RED;if(r===1029)return i.RED_INTEGER;if(r===1030)return i.RG;if(r===1031)return i.RG_INTEGER;if(r===1033)return i.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(c===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return c===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return c===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return c===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Nd extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ct extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Od=`
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

}`;class kd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new vn({extensions:{fragDepth:!0},vertexShader:Bd,fragmentShader:Od,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new k(new cn(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Gd extends ni{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=new kd,p=e.getContextAttributes();let m=null,y=null;const _=[],T=[],R=new pt;let A=null;const b=new Ve;b.layers.enable(1),b.viewport=new xe;const I=new Ve;I.layers.enable(2),I.viewport=new xe;const F=[b,I],x=new Nd;x.layers.enable(1),x.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let et=_[V];return et===void 0&&(et=new Hs,_[V]=et),et.getTargetRaySpace()},this.getControllerGrip=function(V){let et=_[V];return et===void 0&&(et=new Hs,_[V]=et),et.getGripSpace()},this.getHand=function(V){let et=_[V];return et===void 0&&(et=new Hs,_[V]=et),et.getHandSpace()};function K(V){const et=T.indexOf(V.inputSource);if(et===-1)return;const st=_[et];st!==void 0&&(st.update(V.inputSource,V.frame,l||o),st.dispatchEvent({type:V.type,data:V.inputSource}))}function P(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",z);for(let V=0;V<_.length;V++){const et=T[V];et!==null&&(T[V]=null,_[V].disconnect(et))}w=null,$=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,y=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",P),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ln(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,st=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?1027:1026,st=p.stencil?1020:1014);const vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ln(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new $a(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const mt=t.properties.get(y);mt.__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(V){for(let et=0;et<V.removed.length;et++){const st=V.removed[et],_t=T.indexOf(st);_t>=0&&(T[_t]=null,_[_t].disconnect(st))}for(let et=0;et<V.added.length;et++){const st=V.added[et];let _t=T.indexOf(st);if(_t===-1){for(let mt=0;mt<_.length;mt++)if(mt>=T.length){T.push(st),_t=mt;break}else if(T[mt]===null){T[mt]=st,_t=mt;break}if(_t===-1)break}const vt=_[_t];vt&&vt.connect(st)}}const B=new D,q=new D;function H(V,et,st){B.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(st.matrixWorld);const _t=B.distanceTo(q),vt=et.projectionMatrix.elements,mt=st.projectionMatrix.elements,$t=vt[14]/(vt[10]-1),Pt=vt[14]/(vt[10]+1),O=(vt[9]+1)/vt[5],Se=(vt[9]-1)/vt[5],Tt=(vt[8]-1)/vt[0],Vt=(mt[8]+1)/mt[0],bt=$t*Tt,qt=$t*Vt,Gt=_t/(-Tt+Vt),Ht=Gt*-Tt;et.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ht),V.translateZ(Gt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ce=$t+Gt,C=Pt+Gt,M=bt-Ht,Z=qt+(_t-Ht),tt=O*Pt/C*ce,it=Se*Pt/C*ce;V.projectionMatrix.makePerspective(M,Z,tt,it,ce,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,et){et===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(et.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;v.texture!==null&&(V.near=v.depthNear,V.far=v.depthFar),x.near=I.near=b.near=V.near,x.far=I.far=b.far=V.far,(w!==x.near||$!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,$=x.far,b.near=w,b.far=$,I.near=w,I.far=$,b.updateProjectionMatrix(),I.updateProjectionMatrix(),V.updateProjectionMatrix());const et=V.parent,st=x.cameras;J(x,et);for(let _t=0;_t<st.length;_t++)J(st[_t],et);st.length===2?H(x,b,I):x.projectionMatrix.copy(b.projectionMatrix),j(V,x,et)};function j(V,et,st){st===null?V.matrix.copy(et.matrixWorld):(V.matrix.copy(st.matrixWorld),V.matrix.invert(),V.matrix.multiply(et.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(et.projectionMatrix),V.projectionMatrixInverse.copy(et.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=xi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null};let Q=null;function lt(V,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let _t=!1;st.length!==x.cameras.length&&(x.cameras.length=0,_t=!0);for(let mt=0;mt<st.length;mt++){const $t=st[mt];let Pt=null;if(f!==null)Pt=f.getViewport($t);else{const Se=d.getViewSubImage(u,$t);Pt=Se.viewport,mt===0&&(t.setRenderTargetTextures(y,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(y))}let O=F[mt];O===void 0&&(O=new Ve,O.layers.enable(mt),O.viewport=new xe,F[mt]=O),O.matrix.fromArray($t.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray($t.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_t===!0&&x.cameras.push(O)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const mt=d.getDepthInformation(st[0]);mt&&mt.isValid&&mt.texture&&v.init(t,mt,s.renderState)}}for(let st=0;st<_.length;st++){const _t=T[st],vt=_[st];_t!==null&&vt!==void 0&&vt.update(_t,et,l||o)}v.render(t,x),Q&&Q(V,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const yt=new qa;yt.setAnimationLoop(lt),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const An=new Qe,zd=new oe;function Vd(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ha(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,_,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,T=y.envMapRotation;if(_&&(p.envMap.value=_,An.copy(T),An.x*=-1,An.y*=-1,An.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),p.envMapRotation.value.setFromMatrix4(zd.makeRotationFromEuler(An)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hd(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const T=_.program;n.uniformBlockBinding(y,T)}function l(y,_){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",p));const R=_.program;n.updateUBOMapping(y,R);const A=t.render.frame;r[y.id]!==A&&(u(y),r[y.id]=A)}function h(y){const _=d();y.__bindingPointIndex=_;const T=i.createBuffer(),R=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,b=T.length;A<b;A++){const I=Array.isArray(T[A])?T[A]:[T[A]];for(let F=0,x=I.length;F<x;F++){const w=I[F];if(f(w,A,F,R)===!0){const $=w.__offset,K=Array.isArray(w.value)?w.value:[w.value];let P=0;for(let z=0;z<K.length;z++){const B=K[z],q=v(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,$+P,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,T,R){const A=y.value,b=_+"_"+T;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const I=R[b];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[b]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){const _=y.uniforms;let T=0;const R=16;for(let b=0,I=_.length;b<I;b++){const F=Array.isArray(_[b])?_[b]:[_[b]];for(let x=0,w=F.length;x<w;x++){const $=F[x],K=Array.isArray($.value)?$.value:[$.value];for(let P=0,z=K.length;P<z;P++){const B=K[P],q=v(B),H=T%R;H!==0&&R-H<q.boundary&&(T+=R-H),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=q.storage}}}const A=T%R;return A>0&&(T+=R-A),y.__size=T,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class to{constructor(t={}){const{canvas:e=Do(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let T=!1,R=0,A=0,b=null,I=-1,F=null;const x=new xe,w=new xe;let $=null;const K=new kt(0);let P=0,z=e.width,B=e.height,q=1,H=null,J=null;const j=new xe(0,0,z,B),Q=new xe(0,0,z,B);let lt=!1;const yt=new rr;let V=!1,et=!1,st=null;const _t=new oe,vt=new pt,mt=new D,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return b===null?q:1}let O=n;function Se(E,N){for(let X=0;X<E.length;X++){const Y=E[X],G=e.getContext(Y,N);if(G!==null)return G}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nr}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),O=Se(N,E),O===null)throw Se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Tt,Vt,bt,qt,Gt,Ht,ce,C,M,Z,tt,it,nt,Ut,At,ct,ut,Nt,rt,he,Wt,Et,xt,Mt;function Yt(){Tt=new Kh(O),Vt=new Hh(O,Tt,t),Tt.init(Vt),Et=new Ud(O,Tt,Vt),bt=new Dd(O,Tt,Vt),qt=new jh(O),Gt=new vd,Ht=new Id(O,Tt,bt,Gt,Vt,Et,qt),ce=new Xh(_),C=new $h(_),M=new sc(O,Vt),xt=new zh(O,Tt,M,Vt),Z=new Zh(O,M,qt,xt),tt=new nu(O,Z,M,qt),rt=new eu(O,Vt,Ht),ct=new Wh(Gt),it=new _d(_,ce,C,Tt,Vt,xt,ct),nt=new Vd(_,Gt),Ut=new Md,At=new bd(Tt,Vt),Nt=new Gh(_,ce,C,bt,tt,u,c),ut=new Ld(_,tt,Vt),Mt=new Hd(O,qt,Vt,bt),he=new Vh(O,Tt,qt,Vt),Wt=new Jh(O,Tt,qt,Vt),qt.programs=it.programs,_.capabilities=Vt,_.extensions=Tt,_.properties=Gt,_.renderLists=Ut,_.shadowMap=ut,_.state=bt,_.info=qt}Yt();const Dt=new Gd(_,O);this.xr=Dt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(z,B,!1))},this.getSize=function(E){return E.set(z,B)},this.setSize=function(E,N,X=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,B=N,e.width=Math.floor(E*q),e.height=Math.floor(N*q),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(z*q,B*q).floor()},this.setDrawingBufferSize=function(E,N,X){z=E,B=N,q=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,N,X,Y){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,N,X,Y),bt.viewport(x.copy(j).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,N,X,Y){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,X,Y),bt.scissor(w.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){bt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,N=!0,X=!0){let Y=0;if(E){let G=!1;if(b!==null){const ft=b.texture.format;G=ft===1033||ft===1031||ft===1029}if(G){const ft=b.texture.type,St=ft===1009||ft===1014||ft===1012||ft===1020||ft===1017||ft===1018,wt=Nt.getClearColor(),Rt=Nt.getClearAlpha(),zt=wt.r,Lt=wt.g,It=wt.b;St?(f[0]=zt,f[1]=Lt,f[2]=It,f[3]=Rt,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=zt,g[1]=Lt,g[2]=It,g[3]=Rt,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}N&&(Y|=O.DEPTH_BUFFER_BIT),X&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Ut.dispose(),At.dispose(),Gt.dispose(),ce.dispose(),C.dispose(),tt.dispose(),xt.dispose(),Mt.dispose(),it.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",ke),Dt.removeEventListener("sessionend",Qt),st&&(st.dispose(),st=null),Ce.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=qt.autoReset,N=ut.enabled,X=ut.autoUpdate,Y=ut.needsUpdate,G=ut.type;Yt(),qt.autoReset=E,ut.enabled=N,ut.autoUpdate=X,ut.needsUpdate=Y,ut.type=G}function ht(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function W(E){const N=E.target;N.removeEventListener("dispose",W),at(N)}function at(E){dt(E),Gt.remove(E)}function dt(E){const N=Gt.get(E).programs;N!==void 0&&(N.forEach(function(X){it.releaseProgram(X)}),E.isShaderMaterial&&it.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,Y,G,ft){N===null&&(N=$t);const St=G.isMesh&&G.matrixWorld.determinant()<0,wt=uo(E,N,X,Y,G);bt.setMaterial(Y,St);let Rt=X.index,zt=1;if(Y.wireframe===!0){if(Rt=Z.getWireframeAttribute(X),Rt===void 0)return;zt=2}const Lt=X.drawRange,It=X.attributes.position;let le=Lt.start*zt,Ne=(Lt.start+Lt.count)*zt;ft!==null&&(le=Math.max(le,ft.start*zt),Ne=Math.min(Ne,(ft.start+ft.count)*zt)),Rt!==null?(le=Math.max(le,0),Ne=Math.min(Ne,Rt.count)):It!=null&&(le=Math.max(le,0),Ne=Math.min(Ne,It.count));const me=Ne-le;if(me<0||me===1/0)return;xt.setup(G,Y,wt,X,Rt);let en,re=he;if(Rt!==null&&(en=M.get(Rt),re=Wt,re.setIndex(en)),G.isMesh)Y.wireframe===!0?(bt.setLineWidth(Y.wireframeLinewidth*Pt()),re.setMode(O.LINES)):re.setMode(O.TRIANGLES);else if(G.isLine){let Ft=Y.linewidth;Ft===void 0&&(Ft=1),bt.setLineWidth(Ft*Pt()),G.isLineSegments?re.setMode(O.LINES):G.isLineLoop?re.setMode(O.LINE_LOOP):re.setMode(O.LINE_STRIP)}else G.isPoints?re.setMode(O.POINTS):G.isSprite&&re.setMode(O.TRIANGLES);if(G.isBatchedMesh)re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)re.renderInstances(le,me,G.count);else if(X.isInstancedBufferGeometry){const Ft=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ms=Math.min(X.instanceCount,Ft);re.renderInstances(le,me,ms)}else re.render(le,me)};function Xt(E,N,X){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,wi(E,N,X),E.side=0,E.needsUpdate=!0,wi(E,N,X),E.side=2):wi(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),p=At.get(X),p.init(),y.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(_._useLegacyLights);const Y=new Set;return E.traverse(function(G){const ft=G.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const wt=ft[St];Xt(wt,X,G),Y.add(wt)}else Xt(ft,X,G),Y.add(ft)}),y.pop(),p=null,Y},this.compileAsync=function(E,N,X=null){const Y=this.compile(E,N,X);return new Promise(G=>{function ft(){if(Y.forEach(function(St){Gt.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){G(E);return}setTimeout(ft,10)}Tt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let jt=null;function ye(E){jt&&jt(E)}function ke(){Ce.stop()}function Qt(){Ce.start()}const Ce=new qa;Ce.setAnimationLoop(ye),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){jt=E,Dt.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},Dt.addEventListener("sessionstart",ke),Dt.addEventListener("sessionend",Qt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(N),N=Dt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,b),p=At.get(E,y.length),p.init(),y.push(p),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),yt.setFromProjectionMatrix(_t),et=this.localClippingEnabled,V=ct.init(this.clippingPlanes,et),v=Ut.get(E,m.length),v.init(),m.push(v),Ke(E,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,J),this.info.render.frame++,V===!0&&ct.beginShadows();const X=p.state.shadowsArray;if(ut.render(X,E,N),V===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1)&&Nt.render(v,E),p.setupLights(_._useLegacyLights),N.isArrayCamera){const Y=N.cameras;for(let G=0,ft=Y.length;G<ft;G++){const St=Y[G];pr(v,E,St,St.viewport)}}else pr(v,E,N);b!==null&&(Ht.updateMultisampleRenderTarget(b),Ht.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(_,E,N),xt.resetDefaultState(),I=-1,F=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ke(E,N,X,Y){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||yt.intersectsSprite(E)){Y&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const St=tt.update(E),wt=E.material;wt.visible&&v.push(E,St,wt,X,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||yt.intersectsObject(E))){const St=tt.update(E),wt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),mt.copy(St.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(wt)){const Rt=St.groups;for(let zt=0,Lt=Rt.length;zt<Lt;zt++){const It=Rt[zt],le=wt[It.materialIndex];le&&le.visible&&v.push(E,St,le,X,mt.z,It)}}else wt.visible&&v.push(E,St,wt,X,mt.z,null)}}const ft=E.children;for(let St=0,wt=ft.length;St<wt;St++)Ke(ft[St],N,X,Y)}function pr(E,N,X,Y){const G=E.opaque,ft=E.transmissive,St=E.transparent;p.setupLightsView(X),V===!0&&ct.setGlobalState(_.clippingPlanes,X),ft.length>0&&ho(G,ft,N,X),Y&&bt.viewport(x.copy(Y)),G.length>0&&Ti(G,N,X),ft.length>0&&Ti(ft,N,X),St.length>0&&Ti(St,N,X),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ho(E,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ft=Vt.isWebGL2;st===null&&(st=new Ln(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:ft?4:0})),_.getDrawingBufferSize(vt),ft?st.setSize(vt.x,vt.y):st.setSize(is(vt.x),is(vt.y));const St=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(K),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const wt=_.toneMapping;_.toneMapping=0,Ti(E,X,Y),Ht.updateMultisampleRenderTarget(st),Ht.updateRenderTargetMipmap(st);let Rt=!1;for(let zt=0,Lt=N.length;zt<Lt;zt++){const It=N[zt],le=It.object,Ne=It.geometry,me=It.material,en=It.group;if(me.side===2&&le.layers.test(Y.layers)){const re=me.side;me.side=1,me.needsUpdate=!0,mr(le,X,Y,Ne,me,en),me.side=re,me.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ht.updateMultisampleRenderTarget(st),Ht.updateRenderTargetMipmap(st)),_.setRenderTarget(St),_.setClearColor(K,P),_.toneMapping=wt}function Ti(E,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ft=E.length;G<ft;G++){const St=E[G],wt=St.object,Rt=St.geometry,zt=Y===null?St.material:Y,Lt=St.group;wt.layers.test(X.layers)&&mr(wt,N,X,Rt,zt,Lt)}}function mr(E,N,X,Y,G,ft){E.onBeforeRender(_,N,X,Y,G,ft),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(_,N,X,Y,E,ft),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,_.renderBufferDirect(X,N,Y,G,E,ft),G.side=0,G.needsUpdate=!0,_.renderBufferDirect(X,N,Y,G,E,ft),G.side=2):_.renderBufferDirect(X,N,Y,G,E,ft),E.onAfterRender(_,N,X,Y,G,ft)}function wi(E,N,X){N.isScene!==!0&&(N=$t);const Y=Gt.get(E),G=p.state.lights,ft=p.state.shadowsArray,St=G.state.version,wt=it.getParameters(E,G.state,ft,N,X),Rt=it.getProgramCacheKey(wt);let zt=Y.programs;Y.environment=E.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(E.isMeshStandardMaterial?C:ce).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",W),zt=new Map,Y.programs=zt);let Lt=zt.get(Rt);if(Lt!==void 0){if(Y.currentProgram===Lt&&Y.lightsStateVersion===St)return _r(E,wt),Lt}else wt.uniforms=it.getUniforms(E),E.onBuild(X,wt,_),E.onBeforeCompile(wt,_),Lt=it.acquireProgram(wt,Rt),zt.set(Rt,Lt),Y.uniforms=wt.uniforms;const It=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=ct.uniform),_r(E,wt),Y.needsLights=po(E),Y.lightsStateVersion=St,Y.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.directionalShadowMap.value=G.state.directionalShadowMap,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotShadowMap.value=G.state.spotShadowMap,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMap.value=G.state.pointShadowMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Lt,Y.uniformsList=null,Lt}function gr(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Qi.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function _r(E,N){const X=Gt.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function uo(E,N,X,Y,G){N.isScene!==!0&&(N=$t),Ht.resetTextureUnits();const ft=N.fog,St=Y.isMeshStandardMaterial?N.environment:null,wt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xn,Rt=(Y.isMeshStandardMaterial?C:ce).get(Y.envMap||St),zt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Lt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!X.morphAttributes.position,le=!!X.morphAttributes.normal,Ne=!!X.morphAttributes.color;let me=0;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(me=_.toneMapping);const en=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=en!==void 0?en.length:0,Ft=Gt.get(Y),ms=p.state.lights;if(V===!0&&(et===!0||E!==F)){const Ge=E===F&&Y.id===I;ct.setState(Y,E,Ge)}let se=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ms.state.version||Ft.outputColorSpace!==wt||G.isBatchedMesh&&Ft.batching===!1||!G.isBatchedMesh&&Ft.batching===!0||G.isInstancedMesh&&Ft.instancing===!1||!G.isInstancedMesh&&Ft.instancing===!0||G.isSkinnedMesh&&Ft.skinning===!1||!G.isSkinnedMesh&&Ft.skinning===!0||G.isInstancedMesh&&Ft.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ft.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ft.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ft.instancingMorph===!1&&G.morphTexture!==null||Ft.envMap!==Rt||Y.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ct.numPlanes||Ft.numIntersection!==ct.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==Lt||Ft.morphTargets!==It||Ft.morphNormals!==le||Ft.morphColors!==Ne||Ft.toneMapping!==me||Vt.isWebGL2===!0&&Ft.morphTargetsCount!==re)&&(se=!0):(se=!0,Ft.__version=Y.version);let Mn=Ft.currentProgram;se===!0&&(Mn=wi(Y,N,G));let vr=!1,ri=!1,gs=!1;const Te=Mn.getUniforms(),Sn=Ft.uniforms;if(bt.useProgram(Mn.program)&&(vr=!0,ri=!0,gs=!0),Y.id!==I&&(I=Y.id,ri=!0),vr||F!==E){Te.setValue(O,"projectionMatrix",E.projectionMatrix),Te.setValue(O,"viewMatrix",E.matrixWorldInverse);const Ge=Te.map.cameraPosition;Ge!==void 0&&Ge.setValue(O,mt.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,ri=!0,gs=!0)}if(G.isSkinnedMesh){Te.setOptional(O,G,"bindMatrix"),Te.setOptional(O,G,"bindMatrixInverse");const Ge=G.skeleton;Ge&&(Vt.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),Te.setValue(O,"boneTexture",Ge.boneTexture,Ht)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Te.setOptional(O,G,"batchingTexture"),Te.setValue(O,"batchingTexture",G._matricesTexture,Ht));const _s=X.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0&&Vt.isWebGL2===!0)&&rt.update(G,X,Mn),(ri||Ft.receiveShadow!==G.receiveShadow)&&(Ft.receiveShadow=G.receiveShadow,Te.setValue(O,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Sn.envMap.value=Rt,Sn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),ri&&(Te.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&fo(Sn,gs),ft&&Y.fog===!0&&nt.refreshFogUniforms(Sn,ft),nt.refreshMaterialUniforms(Sn,Y,q,B,st),Qi.upload(O,gr(Ft),Sn,Ht)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qi.upload(O,gr(Ft),Sn,Ht),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(O,"center",G.center),Te.setValue(O,"modelViewMatrix",G.modelViewMatrix),Te.setValue(O,"normalMatrix",G.normalMatrix),Te.setValue(O,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ge=Y.uniformsGroups;for(let vs=0,mo=Ge.length;vs<mo;vs++)if(Vt.isWebGL2){const xr=Ge[vs];Mt.update(xr,Mn),Mt.bind(xr,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function fo(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function po(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,N,X){Gt.get(E.texture).__webglTexture=N,Gt.get(E.depthTexture).__webglTexture=X;const Y=Gt.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const X=Gt.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){b=E,R=N,A=X;let Y=!0,G=null,ft=!1,St=!1;if(E){const Rt=Gt.get(E);Rt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):Rt.__webglFramebuffer===void 0?Ht.setupRenderTarget(E):Rt.__hasExternalTextures&&Ht.rebindTextures(E,Gt.get(E.texture).__webglTexture,Gt.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(St=!0);const Lt=Gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?G=Lt[N][X]:G=Lt[N],ft=!0):Vt.isWebGL2&&E.samples>0&&Ht.useMultisampledRTT(E)===!1?G=Gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[X]:G=Lt,x.copy(E.viewport),w.copy(E.scissor),$=E.scissorTest}else x.copy(j).multiplyScalar(q).floor(),w.copy(Q).multiplyScalar(q).floor(),$=lt;if(bt.bindFramebuffer(O.FRAMEBUFFER,G)&&Vt.drawBuffers&&Y&&bt.drawBuffers(E,G),bt.viewport(x),bt.scissor(w),bt.setScissorTest($),ft){const Rt=Gt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,X)}else if(St){const Rt=Gt.get(E.texture),zt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,X||0,zt)}I=-1},this.readRenderTargetPixels=function(E,N,X,Y,G,ft,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){bt.bindFramebuffer(O.FRAMEBUFFER,wt);try{const Rt=E.texture,zt=Rt.format,Lt=Rt.type;if(zt!==1023&&Et.convert(zt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Lt===1016&&(Tt.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Lt!==1009&&Et.convert(Lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===1015&&(Vt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-Y&&X>=0&&X<=E.height-G&&O.readPixels(N,X,Y,G,Et.convert(zt),Et.convert(Lt),ft)}finally{const Rt=b!==null?Gt.get(b).__webglFramebuffer:null;bt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(E,N,X=0){const Y=Math.pow(2,-X),G=Math.floor(N.image.width*Y),ft=Math.floor(N.image.height*Y);Ht.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,E.x,E.y,G,ft),bt.unbindTexture()},this.copyTextureToTexture=function(E,N,X,Y=0){const G=N.image.width,ft=N.image.height,St=Et.convert(X.format),wt=Et.convert(X.type);Ht.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,E.x,E.y,G,ft,St,wt,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,St,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Y,E.x,E.y,St,wt,N.image),Y===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X,Y,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=Math.round(E.max.x-E.min.x),St=Math.round(E.max.y-E.min.y),wt=E.max.z-E.min.z+1,Rt=Et.convert(Y.format),zt=Et.convert(Y.type);let Lt;if(Y.isData3DTexture)Ht.setTexture3D(Y,0),Lt=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)Ht.setTexture2DArray(Y,0),Lt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const It=O.getParameter(O.UNPACK_ROW_LENGTH),le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ne=O.getParameter(O.UNPACK_SKIP_PIXELS),me=O.getParameter(O.UNPACK_SKIP_ROWS),en=O.getParameter(O.UNPACK_SKIP_IMAGES),re=X.isCompressedTexture?X.mipmaps[G]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Lt,G,N.x,N.y,N.z,ft,St,wt,Rt,zt,re.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,G,N.x,N.y,N.z,ft,St,wt,Rt,re.data):O.texSubImage3D(Lt,G,N.x,N.y,N.z,ft,St,wt,Rt,zt,re),O.pixelStorei(O.UNPACK_ROW_LENGTH,It),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),O.pixelStorei(O.UNPACK_SKIP_ROWS,me),O.pixelStorei(O.UNPACK_SKIP_IMAGES,en),G===0&&Y.generateMipmaps&&O.generateMipmap(Lt),bt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ht.setTextureCube(E,0):E.isData3DTexture?Ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ht.setTexture2DArray(E,0):Ht.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,bt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ir?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===ls?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Wd extends to{}Wd.prototype.isWebGL1Renderer=!0;class or{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new or(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xd extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Js extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ca=new oe,js=new Oa,Yi=new hs,$i=new D;class la extends Me{constructor(t=new Ae,e=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),Yi.radius+=r,t.ray.intersectsSphere(Yi)===!1)return;ca.copy(s).invert(),js.copy(t.ray).applyMatrix4(ca);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const p=l.getX(g);$i.fromBufferAttribute(d,p),ha($i,p,c,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)$i.fromBufferAttribute(d,g),ha($i,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ha(i,t,e,n,s,r,o){const a=js.distanceSqToPoint(i);if(a<e){const c=new D;js.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,c=new oe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ve(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cr extends tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qd extends cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lr(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ki=new D,Ws=new lr,Xs=new lr,qs=new lr;class Yd extends tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ki.subVectors(s[0],s[1]).add(s[0]),l=Ki);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ki.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ki),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ws.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,p),Xs.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,p),qs.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Ws.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Xs.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),qs.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Ws.calc(c),Xs.calc(c),qs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ua(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function $d(i,t){const e=1-i;return e*e*t}function Kd(i,t){return 2*(1-i)*i*t}function Zd(i,t){return i*i*t}function mi(i,t,e,n){return $d(i,t)+Kd(i,e)+Zd(i,n)}function Jd(i,t){const e=1-i;return e*e*e*t}function jd(i,t){const e=1-i;return 3*e*e*i*t}function Qd(i,t){return 3*(1-i)*i*i*t}function tf(i,t){return i*i*i*t}function gi(i,t,e,n,s){return Jd(i,t)+jd(i,e)+Qd(i,n)+tf(i,s)}class eo extends tn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gi(t,s.x,r.x,o.x,a.x),gi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ef extends tn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gi(t,s.x,r.x,o.x,a.x),gi(t,s.y,r.y,o.y,a.y),gi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class no extends tn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends tn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class io extends tn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mi(t,s.x,r.x,o.x),mi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends tn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(mi(t,s.x,r.x,o.x),mi(t,s.y,r.y,o.y),mi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class so extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ua(a,c.x,l.x,h.x,d.x),ua(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var da=Object.freeze({__proto__:null,ArcCurve:qd,CatmullRomCurve3:Yd,CubicBezierCurve:eo,CubicBezierCurve3:ef,EllipseCurve:cr,LineCurve:no,LineCurve3:nf,QuadraticBezierCurve:io,QuadraticBezierCurve3:sf,SplineCurve:so});class rf extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new da[s.type]().fromJSON(s))}return this}}class fa extends rf{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new no(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new io(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new eo(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new so(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new cr(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gt extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function y(){const T=new D,R=new D;let A=0;const b=(e-t)/n;for(let I=0;I<=r;I++){const F=[],x=I/r,w=x*(e-t)+t;for(let $=0;$<=s;$++){const K=$/s,P=K*c+a,z=Math.sin(P),B=Math.cos(P);R.x=w*z,R.y=-x*n+p,R.z=w*B,d.push(R.x,R.y,R.z),T.set(z,b,B).normalize(),u.push(T.x,T.y,T.z),f.push(K,1-x),F.push(g++)}v.push(F)}for(let I=0;I<s;I++)for(let F=0;F<r;F++){const x=v[F][I],w=v[F+1][I],$=v[F+1][I+1],K=v[F][I+1];h.push(x,w,K),h.push(w,$,K),A+=6}l.addGroup(m,A,0),m+=A}function _(T){const R=g,A=new pt,b=new D;let I=0;const F=T===!0?t:e,x=T===!0?1:-1;for(let $=1;$<=s;$++)d.push(0,p*x,0),u.push(0,x,0),f.push(.5,.5),g++;const w=g;for(let $=0;$<=s;$++){const P=$/s*c+a,z=Math.cos(P),B=Math.sin(P);b.x=F*B,b.y=p*x,b.z=F*z,d.push(b.x,b.y,b.z),u.push(0,x,0),A.x=z*.5+.5,A.y=B*.5*x+.5,f.push(A.x,A.y),g++}for(let $=0;$<s;$++){const K=R+$,P=w+$;T===!0?h.push(P,P+1,K):h.push(P+1,P,K),I+=3}l.addGroup(m,I,T===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ee extends gt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ee(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new D,T=new D,R=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],_),f(e[A+1],T),f(e[A+2],R),c(_,T,R,y)}function c(y,_,T,R){const A=R+1,b=[];for(let I=0;I<=A;I++){b[I]=[];const F=y.clone().lerp(T,I/A),x=_.clone().lerp(T,I/A),w=A-I;for(let $=0;$<=w;$++)$===0&&I===A?b[I][$]=F:b[I][$]=F.clone().lerp(x,$/w)}for(let I=0;I<A;I++)for(let F=0;F<2*(A-I)-1;F++){const x=Math.floor(F/2);F%2===0?(u(b[I][x+1]),u(b[I+1][x]),u(b[I][x])):(u(b[I][x+1]),u(b[I+1][x+1]),u(b[I+1][x]))}}function l(y){const _=new D;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(y),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){const y=new D;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const T=p(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;o.push(T,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],T=o[y+2],R=o[y+4],A=Math.max(_,T,R),b=Math.min(_,T,R);A>.9&&b<.1&&(_<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,_){const T=y*3;_.x=t[T+0],_.y=t[T+1],_.z=t[T+2]}function g(){const y=new D,_=new D,T=new D,R=new D,A=new pt,b=new pt,I=new pt;for(let F=0,x=0;F<r.length;F+=9,x+=6){y.set(r[F+0],r[F+1],r[F+2]),_.set(r[F+3],r[F+4],r[F+5]),T.set(r[F+6],r[F+7],r[F+8]),A.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),R.copy(y).add(_).add(T).divideScalar(3);const w=p(R);v(A,x+0,y,w),v(b,x+2,_,w),v(I,x+4,T,w)}}function v(y,_,T,R){R<0&&y.x===1&&(o[_]=y.x-1),T.x===0&&T.z===0&&(o[_]=R/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.vertices,t.indices,t.radius,t.details)}}class ro extends fa{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new fa().fromJSON(s))}return this}}const af={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ao(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=uf(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Mi(r,o,e,a,c,f,0),o}};function ao(i,t,e,n,s){let r,o;if(s===yf(i,t,e,n)>0)for(r=t;r<e;r+=n)o=pa(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=pa(r,i[r],i[r+1],o);return o&&ds(o,o.next)&&(yi(o),o=o.next),o}function Dn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ds(e,e.next)||ae(e.prev,e,e.next)===0)){if(yi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mi(i,t,e,n,s,r,o){if(!i)return;!o&&r&&gf(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?cf(i,n,s,r):of(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),yi(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=lf(Dn(i),t,e),Mi(i,t,e,n,s,r,2)):o===2&&hf(i,t,e,n,s,r):Mi(Dn(i),t,e,n,s,r,1);break}}}function of(i){const t=i.prev,e=i,n=i.next;if(ae(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&jn(s,a,r,c,o,l,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ae(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,v=a>c?a>l?a:l:c>l?c:l,p=h>d?h>u?h:u:d>u?d:u,m=Qs(f,g,t,e,n),y=Qs(v,p,t,e,n);let _=i.prevZ,T=i.nextZ;for(;_&&_.z>=m&&T&&T.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&jn(a,h,c,d,l,u,_.x,_.y)&&ae(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&jn(a,h,c,d,l,u,T.x,T.y)&&ae(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&jn(a,h,c,d,l,u,_.x,_.y)&&ae(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=y;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&jn(a,h,c,d,l,u,T.x,T.y)&&ae(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function lf(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ds(s,r)&&oo(s,n,n.next,r)&&Si(s,r)&&Si(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),yi(n),yi(n.next),n=i=r),n=n.next}while(n!==i);return Dn(n)}function hf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xf(o,a)){let c=co(o,a);o=Dn(o,o.next),c=Dn(c,c.next),Mi(o,t,e,n,s,r,0),Mi(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function uf(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ao(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(vf(l));for(s.sort(df),r=0;r<s.length;r++)e=ff(s[r],e);return e}function df(i,t){return i.x-t.x}function ff(i,t){const e=pf(i,t);if(!e)return t;const n=co(e,i);return Dn(n,n.next),Dn(e,e.next)}function pf(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&jn(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Si(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&mf(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function mf(i,t){return ae(i.prev,i,t.prev)<0&&ae(t.next,i,i.next)<0}function gf(i,t,e,n){let s=i;do s.z===0&&(s.z=Qs(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_f(s)}function _f(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Qs(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jn(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mf(i,t)&&(Si(i,t)&&Si(t,i)&&Sf(i,t)&&(ae(i.prev,i,t.prev)||ae(i,t.prev,t))||ds(i,t)&&ae(i.prev,i,i.next)>0&&ae(t.prev,t,t.next)>0)}function ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ds(i,t){return i.x===t.x&&i.y===t.y}function oo(i,t,e,n){const s=Ji(ae(i,t,e)),r=Ji(ae(i,t,n)),o=Ji(ae(e,n,i)),a=Ji(ae(e,n,t));return!!(s!==r&&o!==a||s===0&&Zi(i,e,t)||r===0&&Zi(i,n,t)||o===0&&Zi(e,i,n)||a===0&&Zi(e,t,n))}function Zi(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ji(i){return i>0?1:i<0?-1:0}function Mf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&oo(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Si(i,t){return ae(i.prev,i,i.next)<0?ae(i,t,i.next)>=0&&ae(i,i.prev,t)>=0:ae(i,t,i.prev)<0||ae(i,i.next,t)<0}function Sf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function co(i,t){const e=new tr(i.i,i.x,i.y),n=new tr(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pa(i,t,e,n){const s=new tr(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class _i{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ma(t),ga(n,t);let o=t.length;e.forEach(ma);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ga(n,e[c]);const a=af.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ma(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ga(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ur extends hr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ur(t.radius,t.detail)}}class as extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,f=new D,g=new pt;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const p=v*(n+1);for(let m=0;m<n;m++){const y=m+p,_=y,T=y+n+1,R=y+n+2,A=y+1;a.push(_,T,A),a.push(T,R,A)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class dr extends Ae{constructor(t=new ro([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function l(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;_i.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];_i.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=_i.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],_=y[0]+d,T=y[1]+d,R=y[2]+d;n.push(_,T,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ef(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new dr(n,t.curveSegments)}}function Ef(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Kt extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let T=0;m===0&&o===0?T=.5/e:m===n&&c===Math.PI&&(T=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(A+T,1-_),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const _=h[m][y+1],T=h[m][y],R=h[m+1][y],A=h[m+1][y+1];(m!==0||o>0)&&f.push(_,T,A),(m!==n-1||c<Math.PI)&&f.push(T,R,A)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fs extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tf extends fs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fr extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class wf extends fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ys=new oe,_a=new D,va=new D;class bf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_a.setFromMatrixPosition(t.matrixWorld),e.position.copy(_a),va.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(va),e.updateMatrixWorld(),Ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ys)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Af extends bf{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cf extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Af}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rf extends fr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nr);class Pf{constructor(t){L(this,"scene");L(this,"camera");L(this,"renderer");L(this,"dirLight");L(this,"hemiLight");L(this,"ambientLight");this.scene=new Xd,this.scene.background=new kt(7390719),this.scene.fog=new or(7390719,.012);const e=window.innerWidth/window.innerHeight;this.camera=new Ve(60,e,.1,300),this.camera.position.set(0,5,8),this.renderer=new to({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.hemiLight=new wf(16777215,8505220,.75),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.ambientLight=new Rf(16775620,.35),this.scene.add(this.ambientLight),this.dirLight=new Cf(16777215,1.4),this.dirLight.position.set(20,35,15),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120;const n=22;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),window.addEventListener("resize",this.onWindowResize.bind(this))}setSkyColor(t,e,n){this.scene.background=new kt(t),this.scene.fog&&this.scene.fog.color.setHex(n),this.hemiLight.color.setHex(t),this.hemiLight.groundColor.setHex(e)}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}updateLightTarget(t){this.dirLight.position.set(t.x+20,t.y+35,t.z+15),this.dirLight.target.position.copy(t),this.dirLight.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}class Lf{constructor(){L(this,"ctx",null);L(this,"isMuted",!1);L(this,"engineOsc",null);L(this,"engineGain",null);L(this,"musicInterval",null);L(this,"isMusicPlaying",!1)}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted?(this.engineGain&&(this.engineGain.gain.value=0),this.stopMusic()):this.startMusic(),!this.isMuted}getMuted(){return this.isMuted}playCoinSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(987.77,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(1318.51,this.ctx.currentTime+.1),e.gain.setValueAtTime(.18,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.22),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.22)}playGemSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",e.type="triangle",t.frequency.setValueAtTime(1046.5,this.ctx.currentTime),e.frequency.setValueAtTime(1567.98,this.ctx.currentTime+.08),n.gain.setValueAtTime(.2,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),t.connect(n),e.connect(n),n.connect(this.ctx.destination),t.start(),e.start(this.ctx.currentTime+.08),t.stop(this.ctx.currentTime+.35),e.stop(this.ctx.currentTime+.35)}playJumpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(260,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(650,this.ctx.currentTime+.16),e.gain.setValueAtTime(.18,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.18),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.18)}playSlideSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(450,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(140,this.ctx.currentTime+.22),e.gain.setValueAtTime(.12,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.22),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.22)}playVehicleDuckSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(320,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.25),e.gain.setValueAtTime(.25,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.28),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.28)}playDriftScreechSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(740,this.ctx.currentTime),t.frequency.linearRampToValueAtTime(520,this.ctx.currentTime+.15),t.frequency.exponentialRampToValueAtTime(180,this.ctx.currentTime+.4),e.gain.setValueAtTime(.28,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.4),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.4)}playMountSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((e,n)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,this.ctx.currentTime+n*.08),r.gain.setValueAtTime(.2,this.ctx.currentTime+n*.08),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.08+.2),s.connect(r),r.connect(this.ctx.destination),s.start(this.ctx.currentTime+n*.08),s.stop(this.ctx.currentTime+n*.08+.2)})}playLevelUpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;[523.25,659.25,783.99,1046.5,1318.51].forEach((e,n)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,this.ctx.currentTime+n*.09),r.gain.setValueAtTime(.25,this.ctx.currentTime+n*.09),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.09+.35),s.connect(r),r.connect(this.ctx.destination),s.start(this.ctx.currentTime+n*.09),s.stop(this.ctx.currentTime+n*.09+.35)})}playSmashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.28),e.gain.setValueAtTime(.3,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.28),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.28)}playCrashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.4),e.gain.setValueAtTime(.4,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.4),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.4)}startVehicleEngine(){this.isMuted||this.engineOsc||(this.initContext(),this.ctx&&(this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineOsc.type="triangle",this.engineOsc.frequency.setValueAtTime(95,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(.06,this.ctx.currentTime),this.engineOsc.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start()))}setEngineSpeed(t){if(!this.engineOsc||!this.ctx)return;const e=80+t*110;this.engineOsc.frequency.setTargetAtTime(e,this.ctx.currentTime,.05)}stopVehicleEngine(){if(this.engineOsc){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null,this.engineGain=null}}startMusic(){if(this.isMuted||this.isMusicPlaying||(this.initContext(),!this.ctx))return;this.isMusicPlaying=!0;const t=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,659.25,783.99,987.77,783.99,523.25,783.99,1046.5,783.99];let e=0;this.musicInterval=window.setInterval(()=>{if(this.isMuted||!this.ctx||!this.isMusicPlaying)return;const n=t[e%t.length];e++;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,this.ctx.currentTime),r.gain.setValueAtTime(.035,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.16),s.connect(r),r.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+.16)},170)}pauseMusic(){this.stopMusic()}stopMusic(){this.isMusicPlaying=!1,this.musicInterval!==null&&(clearInterval(this.musicInterval),this.musicInterval=null)}}class Df{constructor(){L(this,"queuedActions",[]);L(this,"touchStartX",0);L(this,"touchStartY",0);L(this,"touchStartTime",0);L(this,"longPressTimer",null);L(this,"hasTriggeredLongPress",!1);L(this,"isEnabled",!0);L(this,"onPauseToggle");window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove.bind(this),{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel.bind(this),{passive:!0})}setEnabled(t){this.isEnabled=t,t||(this.clearHoldTimer(),this.queuedActions=[])}triggerBoost(){this.isEnabled&&this.queuedActions.push("boost")}handleKeyDown(t){if(t.key==="Escape"||t.key==="p"||t.key==="P"){this.onPauseToggle?.();return}this.isEnabled&&(t.code==="Space"||t.key===" "?this.queuedActions.push("boost"):t.key==="ArrowLeft"||t.key==="a"||t.key==="A"?this.queuedActions.push("left"):t.key==="ArrowRight"||t.key==="d"||t.key==="D"?this.queuedActions.push("right"):t.key==="ArrowUp"||t.key==="w"||t.key==="W"?this.queuedActions.push("jump"):(t.key==="ArrowDown"||t.key==="s"||t.key==="S")&&this.queuedActions.push("slide"))}handleTouchStart(t){!this.isEnabled||t.touches.length===0||(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=performance.now(),this.hasTriggeredLongPress=!1,this.clearHoldTimer(),this.longPressTimer=setTimeout(()=>{this.isEnabled&&!this.hasTriggeredLongPress&&(this.hasTriggeredLongPress=!0,this.queuedActions.push("boost"))},320))}handleTouchMove(t){if(t.touches.length===0)return;const e=t.touches[0].clientX,n=t.touches[0].clientY;(e-this.touchStartX)**2+(n-this.touchStartY)**2>400&&this.clearHoldTimer()}handleTouchEnd(t){if(this.clearHoldTimer(),!this.isEnabled||t.changedTouches.length===0)return;if(this.hasTriggeredLongPress){this.hasTriggeredLongPress=!1;return}const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;if(performance.now()-this.touchStartTime>650)return;const r=25;Math.abs(e)<r&&Math.abs(n)<r||(Math.abs(e)>Math.abs(n)?e>0?this.queuedActions.push("right"):this.queuedActions.push("left"):n<0?this.queuedActions.push("jump"):this.queuedActions.push("slide"))}handleTouchCancel(){this.clearHoldTimer()}clearHoldTimer(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}popAction(){return this.queuedActions.length>0?this.queuedActions.shift():null}clear(){this.clearHoldTimer(),this.queuedActions=[]}}const hi=[{levelNumber:1,name:"Sunburst Boardwalk",subtitle:"Seaside Town, Beach & Palm Trees",targetDistance:1440,biome:"boardwalk",baseSpeed:19,obstacleDensity:.65,hasMovingRobots:!1,rewardCoins:150},{levelNumber:2,name:"Downtown Plaza",subtitle:"Rainy Avenues, Skyscrapers & Neon",targetDistance:1600,biome:"plaza",baseSpeed:23,obstacleDensity:.85,hasMovingRobots:!0,rewardCoins:250},{levelNumber:3,name:"Pinecrest Forest",subtitle:"Alpine Snow, Cabins & Mountain Woods",targetDistance:1760,biome:"forest",baseSpeed:26,obstacleDensity:.95,hasMovingRobots:!0,rewardCoins:350},{levelNumber:4,name:"Amusement Pier",subtitle:"Neon Carnival & Rapid Dodges",targetDistance:1920,biome:"pier",baseSpeed:29,obstacleDensity:1.1,hasMovingRobots:!0,rewardCoins:450},{levelNumber:5,name:"Cyber Circuit",subtitle:"Electric Lasers & High Voltage",targetDistance:2080,biome:"cyber",baseSpeed:32,obstacleDensity:1.25,hasMovingRobots:!0,rewardCoins:600},{levelNumber:6,name:"Candy Wonderland",subtitle:"Sweet Chaos & Hyper Velocity",targetDistance:2240,biome:"candy",baseSpeed:35,obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:800}],Oe={nova:{id:"nova",name:"Nova",title:"The Maker",perk:"+15% Speed & Ultra Agility",speedBonus:1.15,vehicleDurationBonus:1,magnetRangeBonus:1,hasPermanentMagnet:!1,laneAgilityBonus:1.35,smashMultiplier:1,gemPrice:0},leo:{id:"leo",name:"Leo",title:"The Baker",perk:"+35% Vehicle Fuel & 2x Smash Multiplier",speedBonus:1,vehicleDurationBonus:1.35,magnetRangeBonus:1,hasPermanentMagnet:!1,laneAgilityBonus:1,smashMultiplier:2,gemPrice:10},skye:{id:"skye",name:"Skye",title:"The Explorer",perk:"🧲 Permanent Magnet Aura (Always Pulls Coins!)",speedBonus:1.05,vehicleDurationBonus:1,magnetRangeBonus:1.4,hasPermanentMagnet:!0,laneAgilityBonus:1,smashMultiplier:1,gemPrice:20}},$e={van:{id:"van",name:"Sweet-Treat Van",title:"Heavy Bumper Delivery",ability:"Shield Bumper & Crash Armor",description:"Bumper smashes crates & cones, and armor absorbs 1 heavy collision!",hasBumperShield:!0,hasMagnetAura:!1,hasTurboShockwave:!1,absorbsRoadblocks:!0,coinMultiplier:1,speedMultiplier:1,baseDurationSeconds:22,gemPrice:0},buggy:{id:"buggy",name:"Neon Buggy",title:"All-Terrain Cruiser",ability:"3-Lane Magnet & 2x Coins",description:"Electromagnetic field pulls all coins across 3 lanes with 2x coin multiplier!",hasBumperShield:!1,hasMagnetAura:!0,hasTurboShockwave:!1,absorbsRoadblocks:!1,coinMultiplier:2,speedMultiplier:1.05,baseDurationSeconds:20,gemPrice:15},scooter:{id:"scooter",name:"Eco Scooter",title:"Retro High-Speed Moped",ability:"Max Velocity & Agile Cornering",description:"+25% speed velocity, extreme 35° leaning cornering & swift handling!",hasBumperShield:!1,hasMagnetAura:!1,hasTurboShockwave:!1,absorbsRoadblocks:!1,coinMultiplier:1,speedMultiplier:1.25,baseDurationSeconds:18,gemPrice:25}},ji=[{id:1,name:"Sunburst Stroll",targetDistance:1200,targetCoins:35,targetSmashes:0,biome:"boardwalk"},{id:2,name:"Sweet Smash Delivery",targetDistance:2560,targetCoins:75,targetSmashes:5,biome:"plaza"},{id:3,name:"Pier Turbo Cruise",targetDistance:4e3,targetCoins:130,targetSmashes:10,biome:"pier"}],xa="blockville_best_distance",Ma="blockville_best_score",Sa="blockville_total_coins",ya="blockville_total_gems",Ea="blockville_unlocked_chars",Ta="blockville_unlocked_vehs",wa="blockville_customization";class If{constructor(){L(this,"mode","endless");L(this,"currentStageIndex",0);L(this,"characterId","nova");L(this,"vehicleId","van");L(this,"paletteId","classic");L(this,"unlockedCharacters",new Set(["nova"]));L(this,"unlockedVehicles",new Set(["van"]));L(this,"distance",0);L(this,"starCoins",0);L(this,"diamondGems",0);L(this,"smashes",0);L(this,"multiplier",1);L(this,"speed",18);L(this,"baseSpeed",18);L(this,"currentLevel",1);L(this,"levelDistance",0);L(this,"bestDistance",0);L(this,"bestScore",0);L(this,"totalCoinsSaved",0);L(this,"totalGemsSaved",15);this.loadPersistedData()}loadPersistedData(){try{this.bestDistance=parseFloat(localStorage.getItem(xa)||"0"),this.bestScore=parseInt(localStorage.getItem(Ma)||"0",10),this.totalCoinsSaved=parseInt(localStorage.getItem(Sa)||"0",10);const t=localStorage.getItem(ya);t!==null&&(this.totalGemsSaved=parseInt(t,10));const e=localStorage.getItem(Ea);if(e){const r=JSON.parse(e);Array.isArray(r)&&r.forEach(o=>this.unlockedCharacters.add(o))}this.unlockedCharacters.add("nova");const n=localStorage.getItem(Ta);if(n){const r=JSON.parse(n);Array.isArray(r)&&r.forEach(o=>this.unlockedVehicles.add(o))}this.unlockedVehicles.add("van");const s=localStorage.getItem(wa);if(s){const r=JSON.parse(s);r.characterId&&Oe[r.characterId]&&(this.characterId=r.characterId),r.vehicleId&&$e[r.vehicleId]&&(this.vehicleId=r.vehicleId),r.paletteId&&(this.paletteId=r.paletteId)}}catch{}}savePersistedData(){try{localStorage.setItem(xa,this.bestDistance.toFixed(0)),localStorage.setItem(Ma,this.bestScore.toString()),localStorage.setItem(Sa,this.totalCoinsSaved.toString()),localStorage.setItem(ya,this.totalGemsSaved.toString()),localStorage.setItem(Ea,JSON.stringify(Array.from(this.unlockedCharacters))),localStorage.setItem(Ta,JSON.stringify(Array.from(this.unlockedVehicles))),localStorage.setItem(wa,JSON.stringify({characterId:this.characterId,vehicleId:this.vehicleId,paletteId:this.paletteId}))}catch{}}isCharacterUnlocked(t){return this.unlockedCharacters.has(t)}isVehicleUnlocked(t){return this.unlockedVehicles.has(t)}unlockCharacter(t){const e=Oe[t];return e?this.unlockedCharacters.has(t)?!0:this.totalGemsSaved>=e.gemPrice?(this.totalGemsSaved-=e.gemPrice,this.unlockedCharacters.add(t),this.savePersistedData(),!0):!1:!1}unlockVehicle(t){const e=$e[t];return e?this.unlockedVehicles.has(t)?!0:this.totalGemsSaved>=e.gemPrice?(this.totalGemsSaved-=e.gemPrice,this.unlockedVehicles.add(t),this.savePersistedData(),!0):!1:!1}getCurrentLevelDef(){const t=Math.min(this.currentLevel-1,hi.length-1),e=hi[t];if(this.currentLevel>hi.length){const n=this.currentLevel-5;return{levelNumber:this.currentLevel,name:`Hyper Zone ${this.currentLevel}`,subtitle:"Ultimate Reflex Gauntlet",targetDistance:500+n*100,biome:hi[(this.currentLevel-1)%hi.length].biome,baseSpeed:Math.min(42,34+n*1.5),obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:250}}return e}resetRun(){this.distance=0,this.starCoins=0,this.diamondGems=0,this.smashes=0,this.currentLevel=1,this.levelDistance=0,this.multiplier=1,this.baseSpeed=this.getCurrentLevelDef().baseSpeed*Oe[this.characterId].speedBonus,this.speed=this.baseSpeed}updateDistanceAndSpeed(t,e=1){const n=this.getCurrentLevelDef();this.baseSpeed=n.baseSpeed*Oe[this.characterId].speedBonus,this.speed=this.baseSpeed*e;const s=this.speed*t;this.distance+=s,this.levelDistance+=s}checkLevelUp(){const t=this.getCurrentLevelDef();return this.levelDistance>=t.targetDistance?(this.currentLevel++,this.levelDistance=0,this.multiplier=Math.min(10,this.currentLevel),this.addCoins(t.rewardCoins),this.getCurrentLevelDef()):null}addCoins(t=1){this.starCoins+=t*this.multiplier}addGems(t=1){this.diamondGems+=t}addSmash(){const t=Oe[this.characterId]?.smashMultiplier||1;this.smashes+=t}calculateTotalScore(){return Math.floor(this.distance*2+this.starCoins*15+this.diamondGems*100+this.smashes*50)}finalizeRun(t=!1){const e=this.calculateTotalScore(),n=this.distance>this.bestDistance,s=e>this.bestScore;return n&&(this.bestDistance=this.distance),s&&(this.bestScore=e),this.totalCoinsSaved+=this.starCoins,this.totalGemsSaved+=this.diamondGems,this.savePersistedData(),{distance:Math.floor(this.distance),starCoins:this.starCoins,gems:this.diamondGems,smashes:this.smashes,score:e,isNewHighDistance:n,isNewHighScore:s,stageCompleted:t}}getActiveStage(){return this.mode!=="stage"?null:ji[this.currentStageIndex]||ji[0]}checkStageCompletion(){const t=this.getActiveStage();return t?this.distance>=t.targetDistance&&this.starCoins>=t.targetCoins&&this.smashes>=t.targetSmashes:!1}advanceStage(){const t=(this.currentStageIndex+1)*250;return this.addCoins(t),this.multiplier=Math.min(10,this.multiplier+1),this.currentStageIndex++,this.currentStageIndex<ji.length?{nextStage:ji[this.currentStageIndex],rewardCoins:t}:(this.mode="endless",this.currentLevel=4,{nextStage:null,rewardCoins:t})}}const ba={classic:{primary:16738740,secondary:16775654,accent:5099745,chassis:12216520,wheelRim:16766287,highlight:58998},sunset:{primary:16740419,secondary:16766287,accent:16728193,chassis:6111287,wheelRim:16771899,highlight:2541274},cyber:{primary:58998,secondary:8146431,accent:58879,chassis:2171169,wheelRim:16717636,highlight:16776960},candy:{primary:15753874,secondary:16773494,accent:8508666,chassis:11771355,wheelRim:16747136,highlight:16777215}},de=class de{static getPlastic(t,e=.18,n=0){const s=`${t}_${e}_${n}`;if(!this.materialCache.has(s)){const r=new fs({color:new kt(t),roughness:e,metalness:n,flatShading:!1});this.materialCache.set(s,r)}return this.materialCache.get(s)}static addStuds(t,e,n,s,r,o=2,a=2){const c=o>1?e/(o+.5):0,l=a>1?n/(a+.5):0,h=o>1?-((o-1)*c)/2:0,d=a>1?-((a-1)*l)/2:0;for(let u=0;u<o;u++)for(let f=0;f<a;f++){const g=new k(this.studGeometry,r);g.position.set(h+u*c,s+.04,d+f*l),g.castShadow=!0,g.receiveShadow=!0,t.add(g)}}static createBlock(t,e,n,s,r=!0){const o=new Ue(t,e,n),a=new k(o,s);return a.castShadow=r,a.receiveShadow=!0,a}};L(de,"materialCache",new Map),L(de,"SkinTone",de.getPlastic(16767916,.4,0)),L(de,"WhitePlastic",de.getPlastic(16316922,.15,0)),L(de,"BlackRubber",de.getPlastic(2040865,.8,0)),L(de,"Chrome",de.getPlastic(15658734,.1,.85)),L(de,"GoldStar",de.getPlastic(16766720,.15,.1)),L(de,"CyanGem",de.getPlastic(58879,.1,.05)),L(de,"RubyGem",de.getPlastic(16717636,.1,.05)),L(de,"GlassWindshield",new Tf({color:8444159,transparent:!0,opacity:.65,roughness:.1,transmission:.6,ior:1.4})),L(de,"studGeometry",new gt(.18,.18,.08,12));let S=de;class Uf{constructor(){L(this,"group");L(this,"particles",[]);L(this,"studGeom",new gt(.12,.12,.08,8));L(this,"cubeGeom",new Ue(.2,.2,.2));this.group=new Ct}getParticleMesh(t=!0,e=16766287){const n=S.getPlastic(e,.2,0),s=t?this.studGeom:this.cubeGeom,r=new k(s,n);return r.castShadow=!0,r}emitExhaust(t,e=5099745){const n=this.getParticleMesh(!0,e);n.position.copy(t),n.position.x+=(Math.random()-.5)*.2,n.position.y+=(Math.random()-.5)*.1,n.scale.setScalar(.7+Math.random()*.4),this.group.add(n),this.particles.push({mesh:n,velocity:new D((Math.random()-.5)*.8,.5+Math.random()*.8,3+Math.random()*2),angularVelocity:new D(Math.random()*4,Math.random()*4,Math.random()*4),life:0,maxLife:.4+Math.random()*.3,scaleInitial:n.scale.x})}emitSmashDebris(t,e=[16738740,16766287,58879,16740419]){for(let s=0;s<18;s++){const r=e[Math.floor(Math.random()*e.length)],o=Math.random()>.4,a=this.getParticleMesh(o,r);a.position.copy(t),a.position.x+=(Math.random()-.5)*.4,a.position.y+=.2+Math.random()*.4,a.scale.setScalar(.9+Math.random()*.5),this.group.add(a);const c=Math.random()*Math.PI*2,l=4+Math.random()*6;this.particles.push({mesh:a,velocity:new D(Math.cos(c)*l,3.5+Math.random()*5,Math.sin(c)*l*.8),angularVelocity:new D((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),life:0,maxLife:.7+Math.random()*.5,scaleInitial:a.scale.x})}}emitPickupSparkles(t,e=16766720){for(let s=0;s<8;s++){const r=this.getParticleMesh(!0,e);r.position.copy(t),r.scale.setScalar(.6+Math.random()*.4),this.group.add(r),this.particles.push({mesh:r,velocity:new D((Math.random()-.5)*3,2+Math.random()*3.5,(Math.random()-.5)*3),angularVelocity:new D(Math.random()*6,Math.random()*6,Math.random()*6),life:0,maxLife:.45+Math.random()*.2,scaleInitial:r.scale.x})}}emitGroundSparks(t,e=16776960){for(let s=0;s<4;s++){const r=this.getParticleMesh(!0,e);r.position.copy(t),r.position.x+=(Math.random()-.5)*.8,r.position.y=.05+Math.random()*.1,r.position.z+=(Math.random()-.5)*.5,r.scale.setScalar(.4+Math.random()*.3),this.group.add(r),this.particles.push({mesh:r,velocity:new D((Math.random()-.5)*4.5,.8+Math.random()*2.2,5+Math.random()*6),angularVelocity:new D(Math.random()*10,Math.random()*10,Math.random()*10),life:0,maxLife:.25+Math.random()*.15,scaleInitial:r.scale.x})}}emitDriftSmokeSpray(t,e=!1){const n=e?[8508666,11789820,14808574,16777215]:[14737632,16119285,15658734,16771899],s=7;for(let r=0;r<s;r++){const o=n[Math.floor(Math.random()*n.length)],a=this.getParticleMesh(!1,o);a.position.copy(t),a.position.x+=(Math.random()-.5)*1.2,a.position.y=.08+Math.random()*.25,a.position.z+=(Math.random()-.5)*.6,a.scale.setScalar(.7+Math.random()*.6),this.group.add(a),this.particles.push({mesh:a,velocity:new D((Math.random()-.5)*(e?6.5:4.5),1.8+Math.random()*(e?3.5:2),4+Math.random()*5),angularVelocity:new D((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),life:0,maxLife:.45+Math.random()*.3,scaleInitial:a.scale.x})}}update(t){for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];if(s.life+=t,s.life>=s.maxLife){this.group.remove(s.mesh),s.mesh.geometry.dispose(),this.particles.splice(n,1);continue}s.velocity.y+=-14*t,s.mesh.position.addScaledVector(s.velocity,t),s.mesh.rotation.x+=s.angularVelocity.x*t,s.mesh.rotation.y+=s.angularVelocity.y*t,s.mesh.rotation.z+=s.angularVelocity.z*t;const r=s.life/s.maxLife,o=s.scaleInitial*(1-r);s.mesh.scale.setScalar(Math.max(.001,o))}}clear(){for(const t of this.particles)this.group.remove(t.mesh),t.mesh.geometry.dispose();this.particles=[]}}class Nf{constructor(t){L(this,"camera");L(this,"currentLookAt",new D);L(this,"shakeTrauma",0);L(this,"targetFov",60);L(this,"showcaseAngle",0);this.camera=t}setFov(t){this.targetFov=t}addTrauma(t){this.shakeTrauma=Math.min(1,this.shakeTrauma+t)}updateFollow(t,e,n,s){let r=60;e&&(r=72),n&&(r=80),this.targetFov=r,this.camera.fov=_e.lerp(this.camera.fov,this.targetFov,s*5),this.camera.updateProjectionMatrix();const o=e?9.2:7.6,a=e?4.8:4.2,c=t.x*.75,l=t.y*.35+a,h=t.z+o;if(this.camera.position.x=_e.lerp(this.camera.position.x,c,s*12),this.camera.position.y=_e.lerp(this.camera.position.y,l,s*8),this.camera.position.z=_e.lerp(this.camera.position.z,h,s*16),this.shakeTrauma>0){const f=(Math.random()-.5)*.7*this.shakeTrauma,g=(Math.random()-.5)*.7*this.shakeTrauma;this.camera.position.x+=f,this.camera.position.y+=g,this.shakeTrauma=Math.max(0,this.shakeTrauma-s*2.2)}const d=t.y*.5+(e?1.4:1.2),u=new D(t.x*.6,d,t.z-6);this.currentLookAt.lerp(u,s*14),this.camera.lookAt(this.currentLookAt)}updateShowcase(t,e){this.camera.fov=_e.lerp(this.camera.fov,50,e*4),this.camera.updateProjectionMatrix(),this.showcaseAngle+=e*.6;const n=8.5;this.camera.position.set(t.x+Math.sin(this.showcaseAngle)*n,t.y+3.6,t.z+Math.cos(this.showcaseAngle)*n),this.camera.lookAt(t.x,t.y+1.2,t.z)}}class ui{static buildCharacter(t){const e=new Ct;e.name=`character_${t}`;const n=new Ct;n.position.y=.85,e.add(n);const s=new Ct;s.position.y=.35,n.add(s);const r=new Ct;r.position.y=.72,s.add(r);const o=new Ct;o.position.set(-.46,.48,0),s.add(o);const a=new Ct;a.position.set(.46,.48,0),s.add(a);const c=new Ct;c.position.set(-.22,0,0),n.add(c);const l=new Ct;l.position.set(.22,0,0),n.add(l);let h,d;const u=S.SkinTone,f=S.getPlastic(1713022,.1,0),g=S.getPlastic(14162784,.2,0),v=S.createBlock(.44,.44,.44,u);r.add(v);const p=new gt(.045,.045,.02,10);p.rotateX(Math.PI/2);const m=new k(p,f);m.position.set(-.11,.04,.23),r.add(m);const y=new k(p,f);y.position.set(.11,.04,.23),r.add(y);const _=new De(.07,.02,8,12,Math.PI);_.rotateZ(Math.PI);const T=new k(_,g);T.position.set(0,-.08,.23),r.add(T);const R=new gt(.09,.09,.14,10);if(R.rotateX(Math.PI/2),t==="nova"){const A=S.getPlastic(12216520,.25,0),b=S.getPlastic(1668818,.3,0),I=S.getPlastic(58879,.18,0),F=S.createBlock(.62,.65,.38,A);s.add(F);const x=S.createBlock(.38,.18,.06,S.getPlastic(11225020,.25,0));x.position.set(0,-.15,.2),s.add(x);const w=S.getPlastic(4073251,.2,0),$=S.getPlastic(16728193,.15,0),K=S.createBlock(.48,.22,.48,w);K.position.set(0,.22,0),r.add(K);const P=S.createBlock(.44,.38,.14,w);P.position.set(0,-.04,-.22),r.add(P),[-.23,.23].forEach(j=>{const Q=S.createBlock(.08,.32,.32,w);Q.position.set(j,.02,0),r.add(Q)});const z=new k(new Kt(.15,10,10),w);z.position.set(0,.25,-.26),r.add(z);const B=new k(new Kt(.06,8,8),$);B.position.set(0,.28,-.29),r.add(B),[-.11,.11].forEach(j=>{const Q=S.createBlock(.12,.09,.06,$);Q.position.set(j,.28,-.29),Q.rotation.z=j>0?.35:-.35,r.add(Q)}),[-.06,.06].forEach(j=>{const Q=S.createBlock(.05,.22,.03,$);Q.position.set(j,.16,-.3),Q.rotation.z=j>0?-.2:.2,Q.rotation.x=-.25,r.add(Q)});const q=new k(new gt(.12,.1,.35,10),w);q.position.set(0,.12,-.38),q.rotation.x=-.55,r.add(q);const H=new k(new ee(.11,.4,10),w);H.position.set(0,-.06,-.46),H.rotation.x=-.35,r.add(H),[-1,1].forEach(j=>{const Q=j===-1?o:a,lt=S.createBlock(.24,.48,.24,A);lt.position.y=-.24,Q.add(lt);const yt=new k(R,u);yt.position.set(0,-.52,.04),Q.add(yt)});const J=S.createBlock(.56,.22,.34,b);n.add(J),[c,l].forEach(j=>{const Q=S.createBlock(.22,.28,.24,b);Q.position.y=-.14,j.add(Q);const lt=S.createBlock(.2,.32,.22,u);lt.position.y=-.44,j.add(lt);const yt=S.createBlock(.24,.16,.36,I);yt.position.set(0,-.68,.06),j.add(yt)})}else if(t==="leo"){const A=S.getPlastic(16777215,.2,0),b=S.getPlastic(166097,.2,0),I=S.getPlastic(3622735,.25,0),F=S.getPlastic(16766287,.15,0),x=S.getPlastic(15277667,.15,0),w=S.getPlastic(16752640,.2,0),$=S.createBlock(.62,.65,.38,b);s.add($);const K=S.createBlock(.48,.62,.06,A);K.position.set(0,-.02,.18),s.add(K);const P=new k(new gt(.26,.26,.12,16),A);P.position.set(0,.24,0),r.add(P);const z=new k(new gt(.38,.24,.28,16),A);z.position.set(0,.42,0),r.add(z);const B=S.createBlock(.46,.12,.46,w);B.position.set(0,.18,0),r.add(B),[-1,1].forEach(H=>{const J=H===-1?o:a,j=S.createBlock(.24,.48,.24,b);j.position.y=-.24,J.add(j);const Q=new k(R,u);Q.position.set(0,-.52,.04),J.add(Q)});const q=S.createBlock(.56,.22,.34,I);n.add(q),h=[],d=[],[c,l].forEach((H,J)=>{const j=S.createBlock(.22,.58,.24,I);j.position.y=-.29,H.add(j);const Q=S.createBlock(.26,.18,.38,F);Q.position.set(0,-.66,.04),H.add(Q);const lt=new gt(.08,.08,.06,10);lt.rotateZ(Math.PI/2);const yt=J===0?h:d;[-.15,.15].forEach(V=>{[-.1,.1].forEach(et=>{const st=new k(lt,x);st.position.set(V,-.78,.04+et),H.add(st),yt.push(st)})})})}else{const A=S.getPlastic(16740419,.2,0),b=S.getPlastic(5125166,.3,0),I=S.getPlastic(5533306,.25,0),F=S.getPlastic(4073251,.25,0),x=S.getPlastic(2503224,.15,0),w=S.getPlastic(58879,.1,0),$=S.getPlastic(3021836,.2,0),K=S.createBlock(.62,.65,.38,A);s.add(K);const P=S.createBlock(.64,.1,.4,b);P.position.set(0,-.28,0),s.add(P);const z=S.createBlock(.12,.14,.1,b);z.position.set(-.24,-.28,.2),s.add(z);const B=S.createBlock(.12,.14,.1,b);B.position.set(.24,-.28,.2),s.add(B);const q=S.createBlock(.48,.3,.48,$);q.position.set(0,.16,0),r.add(q);const H=S.createBlock(.44,.38,.14,$);H.position.set(0,-.04,-.22),r.add(H),[-.22,.22].forEach(V=>{const et=S.createBlock(.1,.36,.12,$);et.position.set(V,-.12,-.16),et.rotation.z=V>0?-.15:.15,r.add(et);const st=S.createBlock(.12,.05,.14,w);st.position.set(V*1.05,-.26,-.16),r.add(st)});const J=S.createBlock(.46,.12,.12,x);J.position.set(0,.22,.22),r.add(J);const j=new gt(.065,.065,.04,10);j.rotateX(Math.PI/2);const Q=new k(j,w);Q.position.set(-.12,.22,.28),r.add(Q);const lt=new k(j,w);lt.position.set(.12,.22,.28),r.add(lt),[-1,1].forEach(V=>{const et=V===-1?o:a,st=S.createBlock(.24,.48,.24,A);st.position.y=-.24,et.add(st);const _t=new k(R,u);_t.position.set(0,-.52,.04),et.add(_t)});const yt=S.createBlock(.56,.22,.34,I);n.add(yt),[c,l].forEach(V=>{const et=S.createBlock(.22,.48,.24,I);et.position.y=-.24,V.add(et);const st=S.createBlock(.25,.28,.36,F);st.position.set(0,-.62,.05),V.add(st)})}return{model:e,rig:{root:e,hips:n,torso:s,head:r,leftArm:o,rightArm:a,leftLeg:c,rightLeg:l,leftSkateWheels:h,rightSkateWheels:d}}}static updateAnimation(t,e,n,s,r){const{root:o,hips:a,torso:c,head:l,leftArm:h,rightArm:d,leftLeg:u,rightLeg:f,leftSkateWheels:g,rightSkateWheels:v}=t;if(o.rotation.set(0,Math.PI,0),a.rotation.set(0,0,0),c.rotation.set(0,0,0),l.rotation.set(0,0,0),e==="running"){const m=Math.sin(n*16)*.75,y=-m*.85;if(u.rotation.x=m,f.rotation.x=-m,h.rotation.x=y,d.rotation.x=-y,a.position.y=.85+Math.abs(Math.sin(n*16))*.12,c.rotation.y=Math.sin(n*16)*.12,c.rotation.z=s*.35,o.rotation.z=s*.25,g&&v){for(const _ of g)_.rotation.x+=r*20;for(const _ of v)_.rotation.x+=r*20}}else e==="jumping"?(u.rotation.x=-.8,f.rotation.x=-.5,h.rotation.x=-1.6,d.rotation.x=-1.6,h.rotation.z=-.4,d.rotation.z=.4,c.rotation.x=.2,a.position.y=1):e==="sliding"?(c.rotation.x=.7,a.position.y=.35,u.rotation.x=-.5,f.rotation.x=-.5,h.rotation.x=.8,d.rotation.x=.8):e==="mounting"?(o.rotation.y+=r*12,u.rotation.x=-.6,f.rotation.x=-.6,h.rotation.z=-.8,d.rotation.z=.8):e==="crashed"&&(o.rotation.x=Math.PI/2.5,a.position.y=.3,h.rotation.x=1.2,d.rotation.x=1.2)}static poseInVehicle(t,e,n=!1,s=!1){const{root:r,hips:o,torso:a,head:c,leftArm:l,rightArm:h,leftLeg:d,rightLeg:u}=t;r.rotation.set(0,Math.PI,0),n?(o.position.set(0,s?.35:.22,.12),a.rotation.set(.65,0,-e*.2),c.rotation.set(-.4,-e*.3,0),d.rotation.set(-1.6,.3,0),u.rotation.set(-1.6,-.3,0),l.rotation.set(-1.5,.4+e*.5,-.3),h.rotation.set(-1.5,-.4+e*.5,.3)):s?(o.position.set(0,.54,.08),a.rotation.set(.05,0,-e*.35),c.rotation.set(.08,-e*.4,0),d.rotation.set(-.85,.18,0),u.rotation.set(-.85,-.18,0),l.rotation.set(-1.05,.25+e*.5,-.18),h.rotation.set(-1.05,-.25+e*.5,.18)):(o.position.set(0,.45,.05),a.rotation.set(-.15,0,-e*.18),c.rotation.set(.1,-e*.2,0),d.rotation.set(-1.4,.2,0),u.rotation.set(-1.4,-.2,0),l.rotation.set(-1.1,.3+e*.4,-.2),h.rotation.set(-1.1,-.3+e*.4,.2))}}class Aa{static buildVehicle(t,e){const n=ba[e]||ba.classic,s=new Ct;s.name=`vehicle_${t}`;const r=new Ct;s.add(r);const o=new Ct;r.add(o);const a=[],c=[];let l,h;const d=new D(-.6,.4,1.6),u=new D(.6,.4,1.6),f=S.getPlastic(n.primary,.16,0),g=S.getPlastic(n.secondary,.16,0),v=S.getPlastic(n.accent,.16,0),p=S.getPlastic(n.chassis,.22,0),m=S.getPlastic(n.wheelRim,.18,0),y=S.BlackRubber,_=S.Chrome,T=(R,A)=>{const b=new k(new gt(R,R,A,16),y);b.castShadow=!0,b.receiveShadow=!0,b.rotation.z=Math.PI/2;const I=new k(new gt(R*.65,R*.65,A+.02,12),m);b.add(I);const F=new k(new gt(R*.25,R*.25,A+.04,8),_);return b.add(F),c.push(b),b};if(t==="van"){const R=S.createBlock(1.8,.35,3.4,p);R.position.y=.5,r.add(R);const A=S.createBlock(1.7,1.3,2,f);A.position.set(0,1.25,.6),r.add(A),S.addStuds(A,1.5,1.8,.65,f,4,4);const b=S.createBlock(1.6,1,1.2,g);b.position.set(0,1.05,-.9),r.add(b);const I=new k(new Ue(1.4,.65,.08),S.GlassWindshield);I.position.set(0,1.25,-1.52),I.rotation.x=-.15,r.add(I),h=S.createBlock(1.9,.45,.3,v),h.position.set(0,.48,-1.8),S.addStuds(h,1.8,.25,.22,v,4,1),r.add(h),[-.65,.65].forEach(B=>{const q=new k(new gt(.12,.12,.08,12),S.getPlastic(16771899,.1,0));q.rotation.x=Math.PI/2,q.position.set(B,.75,-1.55),r.add(q)});const F=new Ct;F.position.set(0,2.1,.6);const x=S.getPlastic(16744619,.15,0),w=new k(new De(.55,.25,12,24),x);w.rotation.x=Math.PI/2,F.add(w);const $=new k(new ee(.28,.45,12),S.getPlastic(16777215,.15,0));$.position.y=.25,F.add($);const K=new k(new Kt(.12,10,10),S.getPlastic(13959168,.1,0));K.position.y=.52,F.add(K),r.add(F),l=F,o.position.set(0,.72,-.5);const P=.42,z=.32;[-.95,.95].forEach(B=>{const q=new Ct;q.position.set(B,P,-1.05);const H=T(P,z);q.add(H),r.add(q),a.push(q)}),[-.95,.95].forEach(B=>{const q=T(P,z);q.position.set(B,P,.95),r.add(q)}),d.set(-.7,.45,1.75),u.set(.7,.45,1.75)}else if(t==="buggy"){const R=S.createBlock(1.5,.3,3,f);R.position.y=.55,r.add(R);const A=v,b=new gt(.06,.06,1.4,8);[-.65,.65].forEach(z=>{const B=new k(b,A);B.position.set(z,1.25,-.4),B.rotation.x=.25,r.add(B);const q=new k(b,A);q.position.set(z,1.25,.6),q.rotation.x=-.25,r.add(q)});const I=S.createBlock(1.4,.1,.9,g);I.position.set(0,1.85,.1),S.addStuds(I,1.2,.7,.05,g,3,2),r.add(I),h=S.createBlock(1.6,.3,.25,p),h.position.set(0,.5,-1.6),r.add(h);const F=new k(new gt(.04,.04,1.2,8),_);F.position.set(.55,1.6,1.2),F.rotation.z=-.15,r.add(F);const x=new Ct;x.position.set(.72,2.2,1.2);const w=new k(new De(.25,.08,8,16,Math.PI),S.RubyGem);w.rotation.z=Math.PI,x.add(w),[-.25,.25].forEach(z=>{const B=S.createBlock(.14,.18,.14,_);B.position.set(z,.12,0),x.add(B)}),r.add(x),l=x,o.position.set(0,.65,-.05);const $=.38,K=.52,P=.36;[-.88,.88].forEach(z=>{const B=new Ct;B.position.set(z,$,-1.1);const q=T($,P);B.add(q),r.add(B),a.push(B)}),[-.95,.95].forEach(z=>{const B=T(K,P+.08);B.position.set(z,K,.9),r.add(B)}),d.set(-.6,.55,1.55),u.set(.6,.55,1.55)}else{const R=S.createBlock(.55,.14,1.5,p);R.position.set(0,.38,-.1),r.add(R),[-.16,0,.16].forEach(st=>{const _t=new k(new Ue(.06,.04,1.1),y);_t.position.set(st,.47,-.1),r.add(_t)});const A=S.createBlock(.85,.85,.12,f);A.position.set(0,.85,-.85),A.rotation.x=-.12,r.add(A),S.addStuds(A,.65,.65,.04,f,2,2);const b=new k(new gt(.04,.04,.88,8),_);b.rotation.z=Math.PI/2,b.position.set(0,1.28,-.9),r.add(b);const I=S.createBlock(.68,.6,1.15,f);I.position.set(0,.65,.72),r.add(I);const F=S.createBlock(.48,.12,.8,g);F.position.set(0,.98,.45),r.add(F);const x=S.createBlock(.42,.08,.72,v);x.position.set(0,1.06,.45),r.add(x);const w=new Ct;w.position.set(0,.96,1.25);const $=new k(new Ue(.55,.05,.4),_);w.add($);const K=S.createBlock(.45,.35,.35,g);K.position.set(0,.22,0),S.addStuds(K,.35,.25,.04,g,2,1),w.add(K);const P=new k(new gt(.02,.02,.6,8),_);P.position.set(.2,.4,.1),w.add(P);const z=S.createBlock(.2,.12,.03,v);z.position.set(.1,.65,.1),w.add(z),r.add(w),l=z,h=S.createBlock(.75,.14,.12,_),h.position.set(0,.38,-1.35),r.add(h),o.position.set(0,.48,.05);const B=.35,q=.22,H=new Ct;H.position.set(0,B,-1.15);const J=T(B,q);H.add(J),[-.14,.14].forEach(st=>{const _t=new k(new gt(.035,.035,.65,8),_);_t.position.set(st,.26,0),H.add(_t)});const j=new k(new gt(.045,.045,.75,8),_);j.position.set(0,.75,.08),j.rotation.x=-.15,H.add(j);const Q=new k(new gt(.035,.035,.9,8),_);Q.rotation.z=Math.PI/2,Q.position.set(0,1.15,.14),H.add(Q),[-.42,.42].forEach(st=>{const _t=new k(new gt(.048,.048,.16,8),y);_t.rotation.z=Math.PI/2,_t.position.set(st,1.15,.14),H.add(_t)});const lt=new k(new gt(.12,.1,.14,12),_);lt.rotation.x=Math.PI/2,lt.position.set(0,1.15,.04),H.add(lt);const yt=new k(new Kt(.1,12,12),S.getPlastic(16771899,.1,0));yt.position.set(0,1.15,-.04),H.add(yt),[-.32,.32].forEach(st=>{const _t=new k(new gt(.015,.015,.22,6),_);_t.position.set(st,1.3,.14),H.add(_t);const vt=new k(new gt(.07,.07,.02,10),_);vt.rotation.x=Math.PI/2,vt.position.set(st,1.42,.14),H.add(vt)}),r.add(H),a.push(H);const V=T(B,q);V.position.set(0,B,.78),r.add(V);const et=new k(new gt(.05,.06,.55,8),_);et.rotation.x=Math.PI/2,et.position.set(.38,.32,.85),r.add(et),d.set(.38,.32,1.15),u.set(.38,.32,1.15)}return{model:s,parts:{root:s,chassis:r,cockpitAnchor:o,frontWheelPivots:a,allWheels:c,topperMesh:l,leftExhaustPos:d,rightExhaustPos:u,bumperMesh:h}}}static updatePhysics(t,e,n,s,r,o=!1,a=!1){const{chassis:c,frontWheelPivots:l,allWheels:h,topperMesh:d}=t,u=-n*.85;for(const y of l)y.rotation.y=_e.lerp(y.rotation.y,u,r*16);const f=e/.4*r;for(const y of h)y.rotation.x+=f;const g=-s*.18;c.rotation.z=_e.lerp(c.rotation.z,g,r*10);const v=o?24:14,p=o?.04:.025,m=Math.sin(performance.now()*.001*v)*p;a?(c.position.y=_e.lerp(c.position.y,-.42,r*18),c.rotation.x=_e.lerp(c.rotation.x,.12,r*16),c.scale.y=_e.lerp(c.scale.y,.72,r*18)):(c.position.y=_e.lerp(c.position.y,m,r*14),c.rotation.x=_e.lerp(c.rotation.x,e/40*.03,r*10),c.scale.y=_e.lerp(c.scale.y,1,r*14)),d&&(d.rotation.y+=r*(a?6:2.5))}}const Ff=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Bf=function(i,t){return new URL(i,t).href},Ca={},Of=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(l=>{if(l=Bf(l,n),l in Ca)return;Ca[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Ff,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var ei;(function(i){i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE"})(ei||(ei={}));class $s extends Error{constructor(t,e,n){super(t),this.message=t,this.code=e,this.data=n}}const kf=i=>{var t,e;return i?.androidBridge?"android":!((e=(t=i?.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||e===void 0)&&e.bridge?"ios":"web"},Gf=i=>{const t=i.CapacitorCustomPlatform||null,e=i.Capacitor||{},n=e.Plugins=e.Plugins||{},s=()=>t!==null?t.name:kf(i),r=()=>s()!=="web",o=d=>{const u=l.get(d);return!!(u?.platforms.has(s())||a(d))},a=d=>{var u;return(u=e.PluginHeaders)===null||u===void 0?void 0:u.find(f=>f.name===d)},c=d=>i.console.error(d),l=new Map,h=(d,u={})=>{const f=l.get(d);if(f)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),f.proxy;const g=s(),v=a(d);let p;const m=async()=>(!p&&g in u?p=typeof u[g]=="function"?p=await u[g]():p=u[g]:t!==null&&!p&&"web"in u&&(p=typeof u.web=="function"?p=await u.web():p=u.web),p),y=(I,F)=>{var x,w;if(v){const $=v?.methods.find(K=>F===K.name);if($)return $.rtype==="promise"?K=>e.nativePromise(d,F.toString(),K):(K,P)=>e.nativeCallback(d,F.toString(),K,P);if(I)return(x=I[F])===null||x===void 0?void 0:x.bind(I)}else{if(I)return(w=I[F])===null||w===void 0?void 0:w.bind(I);throw new $s(`"${d}" plugin is not implemented on ${g}`,ei.Unimplemented)}},_=I=>{let F;const x=(...w)=>{const $=m().then(K=>{const P=y(K,I);if(P){const z=P(...w);return F=z?.remove,z}else throw new $s(`"${d}.${I}()" is not implemented on ${g}`,ei.Unimplemented)});return I==="addListener"&&($.remove=async()=>F()),$};return x.toString=()=>`${I.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:I,writable:!1,configurable:!1}),x},T=_("addListener"),R=_("removeListener"),A=(I,F)=>{const x=T({eventName:I},F),w=async()=>{const K=await x;R({eventName:I,callbackId:K},F)},$=new Promise(K=>x.then(()=>K({remove:w})));return $.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await w()},$},b=new Proxy({},{get(I,F){switch(F){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return v?A:T;case"removeListener":return R;default:return _(F)}}});return n[d]=b,l.set(d,{name:d,proxy:b,platforms:new Set([...Object.keys(u),...v?[g]:[]])}),b};return e.convertFileSrc||(e.convertFileSrc=d=>d),e.getPlatform=s,e.handleError=c,e.isNativePlatform=r,e.isPluginAvailable=o,e.registerPlugin=h,e.Exception=$s,e.DEBUG=!!e.DEBUG,e.isLoggingEnabled=!!e.isLoggingEnabled,e},zf=i=>i.Capacitor=Gf(i),os=zf(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ps=os.registerPlugin;class lo{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(e);const r=this.windowListeners[t];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,e);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,n){const s=this.listeners[t];if(!s){if(n){let r=this.retainedEventArguments[t];r||(r=[]),r.push(e),this.retainedEventArguments[t]=r}return}s.forEach(r=>r(e))}hasListeners(t){var e;return!!(!((e=this.listeners[t])===null||e===void 0)&&e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:n=>{this.notifyListeners(e,n)}}}unimplemented(t="not implemented"){return new os.Exception(t,ei.Unimplemented)}unavailable(t="not available"){return new os.Exception(t,ei.Unavailable)}async removeListener(t,e){const n=this.listeners[t];if(!n)return;const s=n.indexOf(e);this.listeners[t].splice(s,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(n=>{this.notifyListeners(t,n)}))}}const Ra=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Pa=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Vf extends lo{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(n=>{if(n.length<=0)return;let[s,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Pa(s).trim(),r=Pa(r).trim(),e[s]=r}),e}async setCookie(t){try{const e=Ra(t.key),n=Ra(t.value),s=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",r=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${n||""}${s}; path=${r}; ${o};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}ps("CapacitorCookies",{web:()=>new Vf});const Hf=async i=>new Promise((t,e)=>{const n=new FileReader;n.onload=()=>{const s=n.result;t(s.indexOf(",")>=0?s.split(",")[1]:s)},n.onerror=s=>e(s),n.readAsDataURL(i)}),Wf=(i={})=>{const t=Object.keys(i);return Object.keys(i).map(s=>s.toLocaleLowerCase()).reduce((s,r,o)=>(s[r]=i[t[o]],s),{})},Xf=(i,t=!0)=>i?Object.entries(i).reduce((n,s)=>{const[r,o]=s;let a,c;return Array.isArray(o)?(c="",o.forEach(l=>{a=t?encodeURIComponent(l):l,c+=`${r}=${a}&`}),c.slice(0,-1)):(a=t?encodeURIComponent(o):o,c=`${r}=${a}`),`${n}&${c}`},"").substr(1):null,qf=(i,t={})=>{const e=Object.assign({method:i.method||"GET",headers:i.headers},t),s=Wf(i.headers)["content-type"]||"";if(typeof i.data=="string")e.body=i.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[o,a]of Object.entries(i.data||{}))r.set(o,a);e.body=r.toString()}else if(s.includes("multipart/form-data")||i.data instanceof FormData){const r=new FormData;if(i.data instanceof FormData)i.data.forEach((a,c)=>{r.append(c,a)});else for(const a of Object.keys(i.data))r.append(a,i.data[a]);e.body=r;const o=new Headers(e.headers);o.delete("content-type"),e.headers=o}else(s.includes("application/json")||typeof i.data=="object")&&(e.body=JSON.stringify(i.data));return e};class Yf extends lo{async request(t){const e=qf(t,t.webFetchExtra),n=Xf(t.params,t.shouldEncodeUrlParams),s=n?`${t.url}?${n}`:t.url,r=await fetch(s,e),o=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?t:{};o.includes("application/json")&&(a="json");let c,l;switch(a){case"arraybuffer":case"blob":l=await r.blob(),c=await Hf(l);break;case"json":c=await r.json();break;case"document":case"text":default:c=await r.text()}const h={};return r.headers.forEach((d,u)=>{h[u]=d}),{data:c,headers:h,status:r.status,url:r.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}ps("CapacitorHttp",{web:()=>new Yf});var vi;(function(i){i.Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT"})(vi||(vi={}));var cs;(function(i){i.Success="SUCCESS",i.Warning="WARNING",i.Error="ERROR"})(cs||(cs={}));const di=ps("Haptics",{web:()=>Of(()=>import("./web-CES8PfGl.js"),[],import.meta.url).then(i=>new i.HapticsWeb)});var La;(function(i){i.Dark="DARK",i.Light="LIGHT",i.Default="DEFAULT"})(La||(La={}));var Da;(function(i){i.None="NONE",i.Slide="SLIDE",i.Fade="FADE"})(Da||(Da={}));const $f=ps("StatusBar");class Zt{static async hideStatusBar(){if(this.isAvailable)try{await $f.hide()}catch{}}static async lightImpact(){if(this.isAvailable)try{await di.impact({style:vi.Light})}catch{}}static async mediumImpact(){if(this.isAvailable)try{await di.impact({style:vi.Medium})}catch{}}static async heavyImpact(){if(this.isAvailable)try{await di.impact({style:vi.Heavy})}catch{}}static async celebration(){if(this.isAvailable)try{await di.notification({type:cs.Success})}catch{}}static async warning(){if(this.isAvailable)try{await di.notification({type:cs.Warning})}catch{}}}L(Zt,"isAvailable",os.isNativePlatform());const er=3.2,gn=[-er,0,er];class Kf{constructor(t,e,n,s,r){L(this,"group");L(this,"characterId");L(this,"vehicleId");L(this,"paletteId");L(this,"avatarModel");L(this,"avatarRig");L(this,"vehicleModel");L(this,"vehicleParts");L(this,"currentLane",1);L(this,"targetX",0);L(this,"currentX",0);L(this,"y",0);L(this,"z",0);L(this,"mode","on_foot");L(this,"movementState","running");L(this,"verticalVelocity",0);L(this,"gravity",-32);L(this,"jumpForce",13.5);L(this,"slideTimer",0);L(this,"maxSlideDuration",.75);L(this,"vehicleDuration",0);L(this,"maxVehicleDuration",20);L(this,"transitionTimer",0);L(this,"mountTransitionDuration",.55);L(this,"hasShield",!1);L(this,"vanArmorShield",!1);L(this,"boostCharges",0);L(this,"magnetTimer",0);L(this,"turboTimer",0);L(this,"driftTimer",0);L(this,"driftDirection",1);L(this,"driftTireSmokeTimer",0);L(this,"runCycleTime",0);L(this,"particleSystem");L(this,"audioManager");this.characterId=t,this.vehicleId=e,this.paletteId=n,this.particleSystem=s,this.audioManager=r,this.group=new Ct,this.rebuildMeshes()}rebuildMeshes(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);const t=ui.buildCharacter(this.characterId);this.avatarModel=t.model,this.avatarRig=t.rig;const e=Aa.buildVehicle(this.vehicleId,this.paletteId);this.vehicleModel=e.model,this.vehicleParts=e.parts,this.mode==="on_foot"?(this.vehicleModel.visible=!1,this.group.add(this.avatarModel)):(this.vehicleModel.visible=!0,this.vehicleParts.cockpitAnchor.add(this.avatarModel),ui.poseInVehicle(this.avatarRig,0,!1,this.vehicleId==="scooter"),this.group.add(this.vehicleModel))}setCustomization(t,e,n){this.characterId=t,this.vehicleId=e,this.paletteId=n,this.rebuildMeshes()}setShowcasePreview(t){this.mode=t?"in_vehicle":"on_foot",this.rebuildMeshes()}reset(){this.currentLane=1,this.targetX=gn[1],this.currentX=gn[1],this.y=0,this.z=0,this.verticalVelocity=0,this.slideTimer=0,this.mode="on_foot",this.movementState="running",this.vehicleDuration=0,this.transitionTimer=0,this.hasShield=!1,this.vanArmorShield=!1,this.boostCharges=0,this.magnetTimer=0,this.turboTimer=0,this.driftTimer=0,this.driftTireSmokeTimer=0,this.runCycleTime=0,this.rebuildMeshes(),this.audioManager.stopVehicleEngine()}moveLeft(){this.currentLane>0&&this.movementState!=="crashed"&&(this.currentLane--,this.targetX=gn[this.currentLane],this.audioManager.playSlideSound(),Zt.mediumImpact())}moveRight(){this.currentLane<gn.length-1&&this.movementState!=="crashed"&&(this.currentLane++,this.targetX=gn[this.currentLane],this.audioManager.playSlideSound(),Zt.mediumImpact())}jump(){(this.movementState==="running"||this.mode==="in_vehicle"&&this.y<=.05)&&(this.verticalVelocity=this.jumpForce,this.movementState="jumping",this.slideTimer=0,this.audioManager.playJumpSound(),Zt.mediumImpact())}slide(){this.movementState==="running"||this.mode==="in_vehicle"?(this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.mode==="in_vehicle"?this.audioManager.playVehicleDuckSound():this.audioManager.playSlideSound(),Zt.mediumImpact()):this.movementState==="jumping"&&(this.verticalVelocity=-22,this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.audioManager.playSlideSound(),Zt.mediumImpact())}addBoostCharge(){this.boostCharges=Math.min(3,this.boostCharges+1),this.audioManager.playMountSound(),Zt.heavyImpact()}useBoost(){return this.boostCharges>0?(this.boostCharges--,this.activateTurbo(),Zt.heavyImpact(),!0):!1}triggerDrift(t=0,e=!1){this.driftTimer=1.2,this.driftDirection=t!==0?t:Math.random()>.5?1:-1,this.audioManager.playDriftScreechSound(),Zt.heavyImpact();const n=this.group.position.clone();n.y=.08,this.particleSystem.emitDriftSmokeSpray(n,e),this.particleSystem.emitGroundSparks(n,e?58879:16771899)}mountVehicle(){if(this.mode==="in_vehicle"){this.vehicleDuration=Math.min(this.maxVehicleDuration,this.vehicleDuration+10),this.audioManager.playMountSound();return}this.mode="in_vehicle",this.movementState="mounting",this.transitionTimer=this.mountTransitionDuration;const t=Oe[this.characterId],e=$e[this.vehicleId];this.maxVehicleDuration=e.baseDurationSeconds*t.vehicleDurationBonus,this.vehicleDuration=this.maxVehicleDuration,this.vanArmorShield=e.absorbsRoadblocks,this.verticalVelocity=9.5,this.group.remove(this.avatarModel),this.vehicleParts.cockpitAnchor.add(this.avatarModel),ui.poseInVehicle(this.avatarRig,0),this.vehicleModel.visible=!0,this.vehicleModel.position.set(0,-.6,2),this.group.add(this.vehicleModel),this.audioManager.playMountSound(),this.audioManager.startVehicleEngine(),this.particleSystem.emitSmashDebris(this.group.position,[58879,16738740,16766287]),Zt.heavyImpact()}dismountVehicle(t=!1){this.mode==="in_vehicle"&&(this.mode="on_foot",this.vehicleDuration=0,this.vanArmorShield=!1,this.turboTimer=0,this.audioManager.stopVehicleEngine(),this.vehicleParts.cockpitAnchor.remove(this.avatarModel),this.group.remove(this.vehicleModel),this.vehicleModel.visible=!1,this.group.add(this.avatarModel),this.verticalVelocity=t?7:6,this.movementState="jumping",this.particleSystem.emitSmashDebris(this.group.position,[16728193,16771899,58998]),Zt.heavyImpact())}activateTurbo(){this.turboTimer=4.5,this.particleSystem.emitSmashDebris(this.group.position,[16771584,58879,16728193]),this.audioManager.playMountSound()}update(t,e){const n=Oe[this.characterId]?.laneAgilityBonus||1;this.currentX=_e.lerp(this.currentX,this.targetX,t*(14*n));const s=(this.targetX-this.currentX)/er;(this.y>0||this.verticalVelocity!==0)&&(this.verticalVelocity+=this.gravity*t,this.y+=this.verticalVelocity*t,this.y<=0&&(this.y=0,this.verticalVelocity=0,(this.movementState==="jumping"||this.movementState==="mounting")&&(this.movementState="running"))),this.movementState==="sliding"&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.movementState="running"));const r=this.movementState==="sliding";if(this.mode==="in_vehicle"){if(this.transitionTimer>0){this.transitionTimer-=t;const h=1-Math.max(0,this.transitionTimer/this.mountTransitionDuration);this.vehicleModel.position.z=_e.lerp(2,0,h),this.vehicleModel.position.y=_e.lerp(-.6,0,h)}else this.vehicleModel.position.set(0,0,0);if(this.vehicleDuration-=t,this.vehicleDuration<=0&&this.dismountVehicle(!1),Math.random()<.7){const h=new D;this.vehicleModel.localToWorld(h.copy(this.vehicleParts.leftExhaustPos)),this.particleSystem.emitExhaust(h,this.paletteId==="cyber"?58879:16738740)}if(Aa.updatePhysics(this.vehicleParts,e,s,s,t,this.turboTimer>0,r),r){const h=this.group.position.clone();h.y=.05,this.particleSystem.emitGroundSparks(h,16766287)}this.audioManager.setEngineSpeed(e/30)}if(this.magnetTimer>0&&(this.magnetTimer-=t),this.turboTimer>0&&(this.turboTimer-=t),this.runCycleTime+=t*(e/18),this.mode==="on_foot")ui.updateAnimation(this.avatarRig,this.movementState,this.runCycleTime,s,t);else{const h=this.vehicleId==="scooter";ui.poseInVehicle(this.avatarRig,s,r,h)}const o=this.mode==="in_vehicle"&&this.vehicleId==="scooter",a=this.targetX-this.currentX;let c=-a*(o?.32:.22),l=-a*(o?.65:this.mode==="in_vehicle"?.32:.24);if(this.driftTimer>0){this.driftTimer-=t;const h=Math.min(1,this.driftTimer/.8),d=this.driftDirection*.68*h;if(c+=d,l-=this.driftDirection*.35*h,this.driftTireSmokeTimer+=t,this.driftTireSmokeTimer>=.05){this.driftTireSmokeTimer=0;const u=this.group.position.clone();u.y=.05,u.x+=(Math.random()-.5)*.4,this.particleSystem.emitDriftSmokeSpray(u,!1),this.particleSystem.emitGroundSparks(u,16766287)}}this.group.rotation.y=_e.lerp(this.group.rotation.y,c,t*14),this.group.rotation.z=_e.lerp(this.group.rotation.z,l,t*14),this.group.position.set(this.currentX,this.y,this.z)}getBoundingBox(){const t=new _n,e=this.mode==="in_vehicle"?1:.45,n=this.movementState==="sliding"?.7:this.mode==="in_vehicle"?1.8:1.7,s=this.mode==="in_vehicle"?1.6:.5;return t.min.set(this.currentX-e,this.y,this.z-s),t.max.set(this.currentX+e,this.y+n,this.z+s),t}}class Ye{static getBiome(t){switch(t){case"boardwalk":return this.boardwalkBiome;case"plaza":return this.plazaBiome;case"forest":return this.forestBiome;case"pier":return this.pierBiome;case"cyber":return this.cyberBiome;case"candy":return this.candyBiome}}}L(Ye,"boardwalkBiome",{name:"Sunburst Boardwalk",roadColor:16769154,curbColor:5099745,sidewalkColor:16775620,skyColor:8508666,fogColor:8508666,groundColor:16774557,buildSceneryProp:(t,e)=>{const n=new Ct,s=t==="left"?-1:1,r=e%5;if(r===0){const o=S.getPlastic(7951688,.35,0),a=S.getPlastic(3046706,.22,0),c=S.getPlastic(4431943,.22,0),l=S.getPlastic(5125166,.3,0);let h=0,d=0;const u=(Math.sin(e*.7)*.12+.15)*s;for(let g=0;g<7;g++){const v=.36-g*.02,p=.33-g*.02,m=.75,y=new k(new gt(p,v,m,10),o);d+=m*.5,h+=Math.sin(g*.4)*u,y.position.set(h,d,0),y.rotation.z=-u*(g*.18),y.castShadow=!0,n.add(y),d+=m*.5;const _=new k(new De(p+.02,.04,6,12),o);_.position.set(h,d,0),_.rotation.x=Math.PI/2,n.add(_)}[-.18,0,.18].forEach((g,v)=>{const p=new k(new Kt(.18,8,8),l);p.position.set(h+g,d-.2,v%2===0?.16:-.16),n.add(p)});const f=10;for(let g=0;g<f;g++){const v=g*Math.PI*2/f+e*.2,p=g%2===0,m=p?c:a,y=new Ct;y.position.set(h,d,0),y.rotation.y=v;const _=p?2.4:1.9,T=p?.42:.68,R=S.createBlock(.38,.06,_,m);R.position.set(0,0,_*.45),R.rotation.x=T,y.add(R);const A=new k(new ee(.24,.8,4),m);A.position.set(0,-Math.sin(T)*_*.45,_*.85),A.rotation.x=T+.3,y.add(A),n.add(y)}}else if(r===1){const o=S.getPlastic(16777215,.2,0),a=S.getPlastic(13959168,.2,0),c=S.getPlastic(58879,.2,0),l=2.4;[-.7,.7].forEach(v=>{[-.7,.7].forEach(p=>{const m=new k(new gt(.08,.08,l,8),S.getPlastic(9268835,.3,0));m.position.set(v,l*.5,p),n.add(m)})});const h=S.createBlock(1.8,1.4,1.8,o);h.position.y=l+.7,n.add(h);const d=S.createBlock(1.85,.25,1.85,a);d.position.y=l+.7,n.add(d);const u=S.createBlock(1.2,.5,1.9,S.getPlastic(8444159,.1,0));u.position.y=l+.85,n.add(u);const f=new k(new ee(1.6,.9,4),c);f.position.y=l+1.85,f.rotation.y=Math.PI/4,n.add(f);const g=new k(new De(.3,.09,8,16),a);g.position.set(s*.95,l+.7,0),g.rotation.y=Math.PI/2,n.add(g)}else if(r===2){const o=[16301008,11722715,16775620,13747433],a=S.getPlastic(o[e%o.length],.25,0),c=S.WhitePlastic,l=S.getPlastic(16740419,.25,0),h=S.createBlock(3,3.8,2.6,a);h.position.y=1.9,n.add(h);const d=S.createBlock(2.2,.15,.8,c);d.position.set(0,2.1,s*-1.5),n.add(d);const u=S.createBlock(2.2,.5,.08,c);u.position.set(0,2.4,s*-1.85),n.add(u);const f=S.createBlock(1.4,.25,.35,S.getPlastic(9268835,.3,0));f.position.set(0,.9,s*-1.4),n.add(f),[-.45,0,.45].forEach(v=>{const p=new k(new Kt(.16,6,6),S.getPlastic(16728193,.15,0));p.position.set(v,1.1,s*-1.4),n.add(p)});const g=new k(new ee(2.5,1.4,4),l);g.position.y=4.5,g.rotation.y=Math.PI/4,n.add(g)}else if(r===3){const o=S.getPlastic(16744619,.2,0),a=S.getPlastic(16771899,.2,0),c=S.WhitePlastic,l=S.createBlock(2.6,1.4,1.8,o);l.position.y=.7,n.add(l);const h=S.createBlock(2.8,.12,2,S.getPlastic(5099745,.2,0));h.position.y=1.42,n.add(h);for(let v=0;v<5;v++){const p=v%2===0?a:c,m=S.createBlock(.5,.15,1.8,p);m.position.set(-1+v*.5,2.3,0),m.rotation.x=.2,n.add(m)}const d=new k(new ee(.35,.8,8),S.getPlastic(14142664,.3,0));d.rotation.z=Math.PI,d.position.set(0,2.7,0),n.add(d);const u=new k(new Kt(.42,10,10),S.getPlastic(58879,.15,0));u.position.set(0,3.2,0),n.add(u);const f=new k(new gt(.04,.04,2.2,6),S.Chrome);f.position.set(s*1.6,1.1,0),n.add(f);const g=new k(new ee(1.2,.5,10),S.getPlastic(16728193,.2,0));g.position.set(s*1.6,2.2,0),n.add(g)}else{const o=S.getPlastic(6111287,.35,0),a=S.createBlock(2,1.1,.2,o);a.position.y=.55,n.add(a);const c=[58879,16717636,7798531];[-.6,0,.6].forEach((h,d)=>{const u=S.createBlock(.38,2.2,.08,S.getPlastic(c[d],.15,0));u.position.set(h,1.1,.15),u.rotation.z=(d-1)*.08,n.add(u)});const l=S.createBlock(.8,.45,1.4,S.getPlastic(16766287,.2,0));l.position.set(s*1.5,.22,0),l.rotation.x=-.15,n.add(l)}return n},buildWideBackdrop:(t,e)=>{const n=new Ct;if(t==="right")if(e%2===0){const r=S.createBlock(1.6,.7,3.8,S.WhitePlastic);r.position.y=.25,n.add(r);const o=S.createBlock(1.4,.08,3.5,S.getPlastic(14142664,.4,0));o.position.y=.62,n.add(o);const a=new k(new gt(.06,.06,4.5,8),S.Chrome);a.position.set(0,2.8,0),n.add(a);const c=new ro;c.moveTo(0,0),c.lineTo(0,3.8),c.lineTo(2,.4),c.closePath();const l=new dr(c),h=[16728193,58879,16771584],d=S.getPlastic(h[e%h.length],.15,0),u=new k(l,d);u.position.set(.04,.9,-.2),u.rotation.y=.25,n.add(u)}else{const r=new k(new ee(.8,1.8,8),S.getPlastic(16717636,.2,0));r.position.y=.9,n.add(r);const o=new k(new Kt(.3,8,8),S.getPlastic(16771899,.1,0));o.position.y=1.95,n.add(o)}else{const s=[16744619,8444159,11766015,11010027],r=S.getPlastic(s[e%s.length],.2,0),o=S.GlassWindshield,a=9.5+e%3*2.5,c=S.createBlock(5.6,a,5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<=4;h++)[-1.6,0,1.6].forEach(d=>{const u=S.createBlock(.85,1.1,.1,o);u.position.set(d,h*1.9,2.52),n.add(u)});const l=new k(new ee(1.6,.6,10),S.getPlastic(16732754,.2,0));l.position.set(0,a+.8,0),n.add(l)}return n}}),L(Ye,"plazaBiome",{name:"Downtown Plaza",roadColor:9479342,curbColor:16766287,sidewalkColor:13621468,skyColor:6600182,fogColor:6600182,groundColor:8505220,buildSceneryProp:(t,e)=>{const n=new Ct,s=t==="left"?-1:1,r=e%5;if(r===0){const o=[3754411,35195,6174129,3622735],a=S.getPlastic(o[e%o.length],.25,0),c=S.getPlastic(8444159,.1,0),l=S.WhitePlastic,h=7.5,d=S.createBlock(3.4,h,2.8,a);d.position.y=h*.5,n.add(d);for(let g=0;g<4;g++)[-.9,0,.9].forEach(v=>{const p=S.createBlock(.65,.95,.1,c);p.position.set(v,1.4+g*1.5,s*-1.42),n.add(p)});const u=S.createBlock(3.6,.35,3,l);u.position.y=h+.15,n.add(u);const f=new k(new gt(.7,.7,1.2,12),S.getPlastic(9268835,.3,0));f.position.set(.6,h+.9,0),n.add(f)}else if(r===1){const o=S.getPlastic(12216520,.25,0),a=S.getPlastic(16740419,.2,0),c=S.createBlock(2.6,5.5,2.6,o);c.position.y=2.75,n.add(c);const l=new k(new gt(.65,.65,.12,16),S.WhitePlastic);l.rotation.x=Math.PI/2,l.position.set(0,4.4,s*-1.35),n.add(l);const h=S.createBlock(.08,.45,.15,S.getPlastic(2171169,.2,0));h.position.set(0,4.5,s*-1.4),n.add(h);const d=new k(new ee(2,2.6,4),a);d.position.y=6.8,d.rotation.y=Math.PI/4,n.add(d);const u=new k(new Kt(.2,8,8),S.GoldStar);u.position.y=8.2,n.add(u)}else if(r===2){const o=S.getPlastic(15483002,.25,0),a=S.getPlastic(58879,.18,0),c=S.createBlock(3.2,3.6,2.4,o);c.position.y=1.8,n.add(c);const l=S.createBlock(2.2,1.4,.1,S.getPlastic(8444159,.1,0));l.position.set(0,1.2,s*-1.22),n.add(l);const h=S.createBlock(2.6,.35,1.2,a);h.position.set(0,2.1,s*-1.6),h.rotation.x=.2,n.add(h);const d=new k(new gt(.45,.45,.65,10),S.Chrome);d.position.set(s*1.6,.32,0),n.add(d);const u=new k(new gt(.12,.1,.18,8),S.WhitePlastic);u.position.set(s*1.6,.74,0),n.add(u)}else if(r===3){const o=S.getPlastic(2503224,.2,0),a=S.getPlastic(16771899,.1,0),c=new k(new gt(.1,.14,3.8,8),o);c.position.y=1.9,n.add(c),[-.55,.55].forEach(d=>{const u=S.createBlock(.6,.08,.08,o);u.position.set(d*.5,3.6,0),n.add(u);const f=new k(new Kt(.28,10,10),a);f.position.set(d,3.45,0),n.add(f);const g=new k(new ee(.2,.25,6),S.getPlastic(9268835,.3,0));g.position.set(d,3.1,0),n.add(g)});const l=S.createBlock(1.4,.35,1.4,S.getPlastic(7901340,.3,0));l.position.y=.18,n.add(l);const h=new k(new Kt(.35,8,8),S.getPlastic(15277667,.2,0));h.position.y=.45,n.add(h)}else{const o=S.getPlastic(1668818,.2,0),a=S.getPlastic(8444159,.1,0),c=S.createBlock(2.4,.12,1.4,o);c.position.set(0,2.4,0),n.add(c);const l=S.createBlock(2.2,2.2,.08,a);l.position.set(0,1.2,s*-.6),n.add(l);const h=S.createBlock(1.8,.4,.45,S.getPlastic(6111287,.3,0));h.position.set(0,.25,s*-.2),n.add(h);const d=new k(new gt(.18,.22,.7,8),S.getPlastic(13959168,.2,0));d.position.set(s*1.6,.35,.5),n.add(d)}return n},buildWideBackdrop:(t,e)=>{const n=new Ct,s=[1713022,19776,3218322,2503224,12000284],r=S.getPlastic(s[e%s.length],.2,0),o=S.getPlastic(8444159,.1,0),a=12+e%4*3.5,c=S.createBlock(6.5,a,5.5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<Math.floor(a/2.2);h++)[-2,0,2].forEach(d=>{const u=S.createBlock(1.1,1.2,.1,o);u.position.set(d,h*2.2,2.8),n.add(u)});const l=new k(new gt(.08,.15,4.5,8),S.Chrome);return l.position.set(0,a+2.25,0),n.add(l),n}}),L(Ye,"forestBiome",{name:"Pinecrest Forest",roadColor:9268835,curbColor:6111287,sidewalkColor:10586239,skyColor:8440772,fogColor:8440772,groundColor:3046706,buildSceneryProp:(t,e)=>{const n=new Ct,s=t==="left"?-1:1,r=e%5;if(r===0||r===3){const o=S.getPlastic(5125166,.35,0),a=S.getPlastic(1793568,.25,0),c=S.getPlastic(3046706,.25,0),l=S.getPlastic(4431943,.25,0),h=new k(new gt(.3,.42,5.5,10),o);h.position.y=2.75,h.castShadow=!0,n.add(h),[{y:3.2,r:2.1,h:1.6,mat:a},{y:4.2,r:1.7,h:1.5,mat:c},{y:5.1,r:1.3,h:1.4,mat:c},{y:5.9,r:.8,h:1.3,mat:l}].forEach(u=>{const f=new k(new ee(u.r,u.h,8),u.mat);f.position.y=u.y,f.castShadow=!0,n.add(f)})}else if(r===1){const o=S.getPlastic(7162945,.35,0),a=S.getPlastic(4073251,.35,0),c=S.getPlastic(7901340,.3,0),l=S.createBlock(3.2,2.6,2.6,o);l.position.y=1.3,n.add(l);const h=new k(new ee(2.6,1.6,4),a);h.position.y=3.4,h.rotation.y=Math.PI/4,n.add(h);const d=S.createBlock(.6,3.2,.6,c);d.position.set(.9,2.6,.6),n.add(d),[0,.4,.8].forEach((f,g)=>{const v=new k(new Kt(.2+g*.08,8,8),S.WhitePlastic);v.position.set(.9+Math.sin(g)*.15,4.4+f,.6),n.add(v)});const u=S.createBlock(1.2,.6,.6,S.getPlastic(9268835,.35,0));u.position.set(s*1.8,.3,0),n.add(u)}else if(r===2){const o=S.getPlastic(58879,.1,0),a=S.getPlastic(6111287,.3,0),c=S.getPlastic(10395294,.3,0),l=S.createBlock(2.4,.08,3.6,o);l.position.set(0,.04,0),n.add(l),[-.8,.2,.7].forEach((d,u)=>{const f=new k(new Kt(.22,6,6),c);f.position.set(d,.12,(u-1)*.8),f.scale.set(1.4,.6,1.1),n.add(f)});const h=S.createBlock(1.2,.2,2.2,a);h.position.set(0,.35,0),n.add(h),[-.55,.55].forEach(d=>{const u=S.createBlock(.08,.45,2.2,a);u.position.set(d,.65,0),n.add(u)})}else{const o=S.getPlastic(7162945,.35,0),a=S.createBlock(.12,.12,3.2,o);a.position.set(0,.7,0),n.add(a);const c=S.createBlock(.12,.12,3.2,o);c.position.set(0,.35,0),n.add(c),[-1.4,0,1.4].forEach(h=>{const d=S.createBlock(.18,.9,.18,o);d.position.set(0,.45,h),n.add(d)});const l=S.getPlastic(16717636,.15,0);[-.4,.3].forEach((h,d)=>{const u=new k(new gt(.08,.1,.35,8),S.WhitePlastic);u.position.set(h,.18,.8+d*.3),n.add(u);const f=new k(new Kt(.24,8,8),l);f.position.set(h,.36,.8+d*.3),f.scale.set(1,.6,1),n.add(f)})}return n},buildWideBackdrop:(t,e)=>{const n=new Ct;if(e%2===0){const r=S.getPlastic(1793568,.3,0),o=S.getPlastic(5125166,.4,0);[-2.4,0,2.4].forEach((a,c)=>{const l=8.5+c*1.5,h=new k(new gt(.32,.48,l,8),o);h.position.set(a,l*.5,c%2===0?1.2:-1.2),n.add(h);for(let d=0;d<5;d++){const u=new k(new ee(2.6-d*.4,2.4,8),r);u.position.set(a,l*.38+d*1.5,c%2===0?1.2:-1.2),n.add(u)}})}else{const r=S.getPlastic(6111287,.4,0),o=S.getPlastic(3622735,.3,0),a=S.createBlock(5.4,3.6,4.2,r);a.position.y=1.8,n.add(a);const c=new k(new ee(4.4,2.5,4),o);c.position.set(0,4.6,0),c.rotation.y=Math.PI/4,n.add(c);const l=S.createBlock(.8,4.4,.8,S.getPlastic(7901340,.4,0));l.position.set(1.9,3.4,.8),n.add(l)}return n}}),L(Ye,"pierBiome",{name:"Amusement Pier",roadColor:8280002,curbColor:58879,sidewalkColor:12216520,skyColor:1713022,fogColor:2635155,groundColor:870305,buildSceneryProp:(t,e)=>{const n=new Ct,s=t==="left"?-1:1,r=e%4;if(r===0){const o=S.getPlastic(16766464,.15,0),a=new k(new De(3.2,.15,8,24),o);a.position.y=4.2,a.rotation.y=s*.3,n.add(a);const c=new k(new gt(.3,.3,.2,12),S.Chrome);c.position.y=4.2,n.add(c),[-1.4,1.4].forEach(l=>{const h=new k(new gt(.12,.14,4.8,8),S.getPlastic(3622735,.2,0));h.position.set(l,2.4,0),h.rotation.z=-l*.18,n.add(h)})}else if(r===1){const o=S.getPlastic(16717636,.15,0),a=new k(new De(2.6,.2,8,24),o);a.position.set(0,3,0),a.rotation.y=t==="left"?.3:-.3,n.add(a),[-1.8,1.8].forEach(c=>{const l=S.createBlock(.25,3.2,.25,S.WhitePlastic);l.position.set(c,1.6,0),n.add(l)})}else if(r===2){const o=S.getPlastic(58879,.18,0),a=S.createBlock(2.2,2.4,1.8,o);a.position.y=1.2,n.add(a);const c=S.createBlock(2.6,.55,.2,S.getPlastic(16771899,.15,0));c.position.set(0,2.45,.95),n.add(c);const l=new k(new Kt(.42,8,8),S.getPlastic(9268835,.3,0));l.position.set(0,1.4,1),n.add(l)}else{const o=new k(new gt(.1,.1,4.2,8),S.WhitePlastic);o.position.y=2.1,n.add(o);const a=[16771899,58879,16717636,7798531,14696699];for(let c=0;c<5;c++){const l=new k(new Kt(.38,10,10),S.getPlastic(a[c],.12,0));l.position.set(Math.sin(c*1.3)*.45,4.2+c*.25,Math.cos(c*1.3)*.45),n.add(l)}}return n},buildWideBackdrop:(t,e)=>{const n=new Ct;if(e%2===0){const r=new k(new De(5.5,.22,8,30),S.getPlastic(16766464,.15,0));r.position.y=7,r.rotation.y=t==="left"?.35:-.35,n.add(r),[-2.2,2.2].forEach(o=>{const a=new k(new gt(.18,.22,8,8),S.getPlastic(3622735,.2,0));a.position.set(o,4,0),a.rotation.z=-o*.15,n.add(a)})}else{const r=new k(new ee(4.2,4.5,10),S.getPlastic(16717636,.15,0));r.position.y=2.25,n.add(r)}return n}}),L(Ye,"cyberBiome",{name:"Cyber Circuit",roadColor:1713022,curbColor:58998,sidewalkColor:2503224,skyColor:870305,fogColor:870305,groundColor:19776,buildSceneryProp:(t,e)=>{const n=new Ct,s=e%3;if(s===0){const r=S.getPlastic(58879,.1,0),o=S.getPlastic(3622735,.2,0),a=S.createBlock(1.6,.7,1.6,o);a.position.y=.35,n.add(a);const c=new k(new gt(.35,.4,5,6),r);c.position.y=2.85,n.add(c),[3.5,4.6].forEach(l=>{const h=new k(new De(.75,.08,8,16),S.getPlastic(7798531,.1,0));h.position.y=l,h.rotation.x=Math.PI/2,n.add(h)})}else if(s===1){const r=S.createBlock(.9,4.2,.9,S.getPlastic(16717636,.2,0));r.position.y=2.1,n.add(r);const o=new k(new ee(.6,1,3),S.getPlastic(16776960,.1,0));o.position.set(0,4.3,0),o.rotation.z=t==="left"?-Math.PI/2:Math.PI/2,n.add(o)}else{const r=S.createBlock(1.8,2.8,1.6,S.getPlastic(4342338,.25,0));r.position.y=1.4,n.add(r),[1,1.7,2.3].forEach(o=>{const a=S.createBlock(1.85,.15,.9,S.getPlastic(58879,.1,0));a.position.set(0,o,0),n.add(a)})}return n},buildWideBackdrop:(t,e)=>{const n=new Ct,s=S.createBlock(4.5,14+e%3*3,4.5,S.getPlastic(1713022,.15,0));s.position.y=7,n.add(s);const r=new k(new gt(.12,.2,5,6),S.getPlastic(58879,.1,0));return r.position.y=16.5,n.add(r),n}}),L(Ye,"candyBiome",{name:"Candy Wonderland",roadColor:16027569,curbColor:16774557,sidewalkColor:13538264,skyColor:16301008,fogColor:16301008,groundColor:16764092,buildSceneryProp:(t,e)=>{const n=new Ct,s=e%3;if(s===0){const r=new k(new gt(.14,.14,4,8),S.WhitePlastic);r.position.y=2,n.add(r);const o=new k(new gt(1.4,1.4,.35,18),S.getPlastic(16728193,.15,0));o.rotation.x=Math.PI/2,o.rotation.y=t==="left"?.3:-.3,o.position.y=4,n.add(o);const a=new k(new gt(.8,.8,.38,12),S.WhitePlastic);a.rotation.x=Math.PI/2,a.position.y=4,n.add(a)}else if(s===1){const r=S.getPlastic(58998,.15,0),o=S.createBlock(1.4,2,1.2,r);o.position.y=1,n.add(o);const a=new k(new Kt(.65,10,10),r);a.position.y=2.35,n.add(a),[-.45,.45].forEach(c=>{const l=new k(new Kt(.22,6,6),r);l.position.set(c,2.9,0),n.add(l)})}else{const r=new k(new gt(1.3,.9,1.2,12),S.getPlastic(14142664,.3,0));r.position.y=.6,n.add(r);const o=new k(new Kt(1.15,12,12),S.getPlastic(8445674,.18,0));o.position.y=1.7,n.add(o);const a=new k(new Kt(.35,8,8),S.getPlastic(13959168,.1,0));a.position.y=2.8,n.add(a)}return n},buildWideBackdrop:(t,e)=>{const n=new Ct,s=10+e%3*2,r=new k(new gt(.5,.5,s,12),S.WhitePlastic);r.position.y=s*.5,n.add(r);const o=new k(new Kt(3,12,12),S.getPlastic(16728193,.15,0));return o.position.y=s+1.5,n.add(o),n}});const Ee=36,Re=11.2;class Zf{constructor(){L(this,"group");L(this,"chunkIndex",0);L(this,"biome","boardwalk");L(this,"obstacles",[]);L(this,"pickups",[]);L(this,"roadMesh");L(this,"leftCurb");L(this,"rightCurb");L(this,"leftSidewalk");L(this,"rightSidewalk");L(this,"leftLandscape");L(this,"rightLandscape");L(this,"oceanMesh");L(this,"sceneryGroup",new Ct);this.group=new Ct,this.buildBaseRoad(),this.group.add(this.sceneryGroup)}buildBaseRoad(){const t=new cn(Re,Ee);t.rotateX(-Math.PI/2),this.roadMesh=new k(t,S.getPlastic(16769154,.35,0)),this.roadMesh.receiveShadow=!0,this.group.add(this.roadMesh);const e=new Ue(.6,.35,Ee);this.leftCurb=new k(e,S.getPlastic(5099745,.25,0)),this.leftCurb.position.set(-Re/2-.3,.175,0),this.leftCurb.receiveShadow=!0,this.group.add(this.leftCurb),this.rightCurb=new k(e,S.getPlastic(5099745,.25,0)),this.rightCurb.position.set(Re/2+.3,.175,0),this.rightCurb.receiveShadow=!0,this.group.add(this.rightCurb);const n=new cn(8,Ee);n.rotateX(-Math.PI/2),this.leftSidewalk=new k(n,S.getPlastic(16775620,.45,0)),this.leftSidewalk.position.set(-Re/2-4.3,-.01,0),this.leftSidewalk.receiveShadow=!0,this.group.add(this.leftSidewalk),this.rightSidewalk=new k(n,S.getPlastic(16775620,.45,0)),this.rightSidewalk.position.set(Re/2+4.3,-.01,0),this.rightSidewalk.receiveShadow=!0,this.group.add(this.rightSidewalk);const s=new cn(80,Ee);s.rotateX(-Math.PI/2),this.leftLandscape=new k(s,S.getPlastic(8505220,.5,0)),this.leftLandscape.position.set(-Re/2-48,-.04,0),this.leftLandscape.receiveShadow=!0,this.group.add(this.leftLandscape),this.rightLandscape=new k(s,S.getPlastic(8505220,.5,0)),this.rightLandscape.position.set(Re/2+48,-.04,0),this.rightLandscape.receiveShadow=!0,this.group.add(this.rightLandscape);const r=new cn(75,Ee);r.rotateX(-Math.PI/2),this.oceanMesh=new k(r,S.getPlastic(45311,.08,0)),this.oceanMesh.position.set(Re/2+45.5,-.02,0),this.oceanMesh.receiveShadow=!0,this.group.add(this.oceanMesh);const o=S.getPlastic(3622735,.4,0),a=S.getPlastic(16777215,.15,0),c=new Ue(.24,.04,1.8),l=new Ue(Re-.2,.02,.12),h=new gt(.18,.18,.08,10),d=S.getPlastic(16777215,.2,0);for(let u=-Ee/2+2;u<Ee/2;u+=3.6){const f=new k(l,o);f.position.set(0,.01,u),f.receiveShadow=!0,this.group.add(f),[-3.2/2,gn[2]/2].forEach(g=>{const v=new k(c,a);v.position.set(g,.025,u),v.receiveShadow=!0,this.group.add(v)}),[-Re/2-.3,Re/2+.3].forEach(g=>{const v=new k(h,d);v.position.set(g,.38,u),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v)})}}init(t,e,n,s=!1,r=1){this.chunkIndex=t,this.biome=e,this.group.position.set(0,0,n);const o=Ye.getBiome(e);this.roadMesh.material=S.getPlastic(o.roadColor,.35,0),this.leftCurb.material=S.getPlastic(o.curbColor,.25,0),this.rightCurb.material=S.getPlastic(o.curbColor,.25,0),this.leftSidewalk.material=S.getPlastic(o.sidewalkColor,.45,0),this.rightSidewalk.material=S.getPlastic(o.sidewalkColor,.45,0);const a=S.getPlastic(o.groundColor,.45,0);this.leftLandscape.material=a,this.rightLandscape.material=a;const c=e==="boardwalk"||e==="pier";this.oceanMesh.visible=c,e==="boardwalk"&&(this.rightSidewalk.material=S.getPlastic(16774557,.45,0),this.rightLandscape.material=S.getPlastic(16769154,.45,0)),this.clearDynamicObjects();let l=this.chunkIndex*12;for(let h=-Ee/2+3.6;h<=Ee/2-3.6;h+=7.2){const d=o.buildSceneryProp("left",l++),u=-Re/2-(l%2===0?3.8:2.6);d.position.set(u,0,h),this.sceneryGroup.add(d);const f=o.buildSceneryProp("right",l++),g=Re/2+(l%2===0?3.8:2.6);f.position.set(g,0,h),this.sceneryGroup.add(f)}for(let h=-Ee/2+7.2;h<=Ee/2-7.2;h+=14.4){const d=o.buildWideBackdrop("left",l++);d.position.set(-Re/2-24,0,h),this.sceneryGroup.add(d);const u=o.buildWideBackdrop("right",l++),f=e==="boardwalk"?32:24;u.position.set(Re/2+f,0,h),this.sceneryGroup.add(u)}s||this.populateObstaclesAndPickups(r)}populateObstaclesAndPickups(t=1){[-Ee/4,Ee/4].forEach(n=>{const s=Math.floor(Math.random()*3),r=this.selectRandomObstacle(t);if(this.spawnObstacle(r,s,n),t>=3&&Math.random()<.45){const a=[0,1,2].filter(h=>h!==s),c=a[Math.floor(Math.random()*a.length)],l=t>=4?"laser_gate":"low_barrier";this.spawnObstacle(l,c,n)}[0,1,2].filter(a=>a!==s).forEach(a=>{if(Math.random()<.8){const c=this.selectRandomPickup();this.spawnPickup(c,a,n+(Math.random()-.5)*4)}})})}selectRandomObstacle(t=1){if((this.biome==="plaza"||this.biome==="forest")&&this.chunkIndex%5===2)return"slick_puddle";const e=Math.random();return t===1?e<.35?"low_barrier":e<.65?"high_arch":e<.85?"crate_stack":"traffic_cone":t===2?e<.22?"low_barrier":e<.4?"high_arch":e<.6?"crate_stack":e<.8?"robot_patrol":"roadblock":t===3?e<.2?"low_barrier":e<.4?"laser_gate":e<.6?"robot_patrol":e<.78?"roadblock":"crate_stack":e<.26?"laser_gate":e<.5?"robot_patrol":e<.74?"roadblock":e<.86?"low_barrier":"crate_stack"}selectRandomPickup(){const t=Math.random();return t<.58?"star_coin":t<.72?"diamond_gem":t<.83?"vehicle_key":t<.92?"nitro_boost":t<.96?"toy_wrench":"heart_shield"}spawnObstacle(t,e,n){const s=new Ct,r=gn[e];s.position.set(r,0,n);let o=!1;const a=new D(-.75,0,-.25),c=new D(.75,.75,.25);if(t==="low_barrier"){const h=S.getPlastic(16732754,.2,0),d=S.WhitePlastic,u=S.createBlock(2,.25,.18,h);u.position.y=.65,s.add(u),[-.85,.85].forEach(f=>{const g=S.createBlock(.18,.7,.18,d);g.position.set(f,.35,0),s.add(g)}),a.set(-.75,0,-.2),c.set(.75,.7,.2),o=!0}else if(t==="high_arch"){const h=S.getPlastic(8146431,.2,0),d=S.getPlastic(16771899,.2,0),u=S.getPlastic(16717636,.2,0),f=S.createBlock(2.2,.55,.25,d);f.position.y=1.45,s.add(f),[-.6,0,.6].forEach(g=>{const v=S.createBlock(.2,.57,.27,u);v.position.set(g,1.45,0),s.add(v)}),[-1.25,1.25].forEach(g=>{const v=S.createBlock(.22,1.8,.22,h);v.position.set(g,.9,0),s.add(v)}),a.set(-.75,1.05,-.25),c.set(.75,1.8,.25),o=!0}else if(t==="crate_stack"){const h=S.getPlastic(9268835,.35,0),d=S.createBlock(.85,.85,.85,h);d.position.y=.42,S.addStuds(d,.75,.75,.42,h,2,2),s.add(d);const u=S.createBlock(.65,.65,.65,h);u.position.set(.08,1.15,.04),s.add(u),a.set(-.45,0,-.35),c.set(.45,1.25,.35),o=!0}else if(t==="traffic_cone"){const h=S.getPlastic(16739584,.2,0),d=S.WhitePlastic;[-.4,.4].forEach(u=>{const f=S.createBlock(.45,.08,.45,h);f.position.set(u,.04,0),s.add(f);const g=new k(new ee(.22,.75,12),h);g.position.set(u,.42,0),s.add(g);const v=new k(new gt(.14,.17,.15,12),d);v.position.set(u,.38,0),s.add(v)}),a.set(-.45,0,-.25),c.set(.45,.65,.25),o=!0}else if(t==="laser_gate"){const h=S.getPlastic(2171169,.2,0),d=S.getPlastic(16717636,.1,0);[-1.25,1.25].forEach(f=>{const g=S.createBlock(.22,2.2,.22,h);g.position.set(f,1.1,0),s.add(g);const v=new k(new Kt(.16,8,8),S.getPlastic(58879,.1,0));v.position.set(f,1.35,0),s.add(v)});const u=S.createBlock(2.2,.16,.16,d);u.position.y=1.35,s.add(u),a.set(-.75,1,-.25),c.set(.75,1.65,.25),o=!0}else if(t==="robot_patrol"){const h=S.getPlastic(16766464,.2,0),d=S.getPlastic(58879,.2,0),u=new k(new gt(.55,.65,.45,12),h);u.position.y=.32,s.add(u),[-.55,.55].forEach(g=>{const v=new k(new gt(.24,.24,.18,10),d);v.position.set(g,.16,.3),v.rotation.x=Math.PI/2,s.add(v)});const f=new k(new Kt(.2,10,10),S.getPlastic(16717636,.1,0));f.position.y=.65,s.add(f),a.set(-.45,0,-.45),c.set(.45,.75,.45),o=!0}else if(t==="slick_puddle"){const h=this.biome==="forest",d=new fs({color:h?14808574:5227511,roughness:.05,metalness:.1,transparent:!0,opacity:.75}),u=new cn(2.7,5);u.rotateX(-Math.PI/2);const f=new k(u,d);f.position.y=.025,s.add(f);const g=S.getPlastic(h?58879:16771899,.1,0);[-1.15,1.15].forEach(v=>{[-2,0,2].forEach(p=>{const m=new k(new gt(.14,.14,.1,10),g);m.position.set(v,.05,p),s.add(m)})}),a.set(-1.2,0,-2.4),c.set(1.2,.8,2.4),o=!0}else{const h=S.getPlastic(13959168,.25,0),d=S.WhitePlastic,u=S.createBlock(2.2,1.1,.55,h);u.position.y=.55,s.add(u),[-.55,0,.55].forEach(f=>{const g=S.createBlock(.28,1.12,.57,d);g.position.set(f,.55,0),s.add(g)}),a.set(-.85,0,-.3),c.set(.85,1.15,.3),o=!1}this.group.add(s);const l=new _n;this.obstacles.push({mesh:s,type:t,lane:e,z:n,boundingBox:l,hitboxOffsetMin:a,hitboxOffsetMax:c,isSmashed:!1,canSmash:o,isMoving:t==="robot_patrol",patrolBaseX:r,patrolPhase:Math.random()*Math.PI*2})}spawnPickup(t,e,n){const s=new Ct,r=gn[e];if(s.position.set(r,1,n),t==="star_coin"){const a=new gt(.42,.42,.14,16);a.rotateX(Math.PI/2);const c=new k(a,S.GoldStar);c.castShadow=!0,s.add(c);const l=new k(new ee(.2,.18,5),S.getPlastic(16771899,.1,0));l.position.z=.08,s.add(l)}else if(t==="diamond_gem"){const a=new k(new ur(.45,0),S.CyanGem);a.scale.set(1,1.4,1),a.castShadow=!0,s.add(a)}else if(t==="vehicle_key"){const a=new k(new De(.35,.09,10,16),S.GoldStar);s.add(a);const c=S.createBlock(.1,.45,.08,S.GoldStar);c.position.y=-.45,s.add(c);const l=S.createBlock(.2,.12,.08,S.GoldStar);l.position.set(.08,-.55,0),s.add(l)}else if(t==="heart_shield"){const a=S.getPlastic(16728193,.1,0),c=new k(new Kt(.22,10,10),a);c.position.set(-.14,.14,0),s.add(c);const l=new k(new Kt(.22,10,10),a);l.position.set(.14,.14,0),s.add(l);const h=new k(new ee(.35,.5,12),a);h.rotation.z=Math.PI,h.position.set(0,-.12,0),s.add(h)}else if(t==="nitro_boost"){const a=S.getPlastic(58879,.15,0),c=S.getPlastic(16739584,.15,0),l=S.getPlastic(16771584,.1,0),h=new k(new gt(.24,.24,.65,12),a);s.add(h);const d=new k(new ee(.25,.35,12),c);d.position.y=.45,s.add(d);const u=new k(new De(.26,.04,6,12),l);u.rotation.x=Math.PI/2,s.add(u)}else{const a=S.Chrome,c=new k(new De(.25,.08,8,12,Math.PI*1.5),a);s.add(c);const l=S.createBlock(.12,.55,.08,a);l.position.y=-.38,s.add(l)}this.group.add(s);const o=new _n;this.pickups.push({mesh:s,type:t,lane:e,z:n,boundingBox:o,isCollected:!1})}updateBoundingBoxes(){const t=new D;for(const e of this.obstacles)e.isSmashed||(e.mesh.updateMatrixWorld(!0),e.mesh.getWorldPosition(t),e.boundingBox.min.copy(t).add(e.hitboxOffsetMin),e.boundingBox.max.copy(t).add(e.hitboxOffsetMax));for(const e of this.pickups)e.isCollected||(e.mesh.updateMatrixWorld(!0),e.boundingBox.setFromObject(e.mesh))}updateVisuals(t){for(const e of this.pickups)e.isCollected||(e.mesh.rotation.y+=t*3.5,e.mesh.position.y=1+Math.sin(performance.now()*.003+e.z)*.15);for(const e of this.obstacles)if(!e.isSmashed&&e.isMoving&&typeof e.patrolBaseX=="number"){const n=e.patrolPhase||0;e.mesh.position.x=e.patrolBaseX+Math.sin(performance.now()*.0025+n)*.55,e.mesh.rotation.y+=t*3}}clearDynamicObjects(){for(;this.sceneryGroup.children.length>0;)this.sceneryGroup.remove(this.sceneryGroup.children[0]);for(const t of this.obstacles)this.group.remove(t.mesh);this.obstacles=[];for(const t of this.pickups)this.group.remove(t.mesh);this.pickups=[]}}class Jf{constructor(){L(this,"group",new Ct);L(this,"clouds",[]);L(this,"sunGroup",new Ct);L(this,"moonGroup",new Ct);L(this,"starsGroup",new Ct);L(this,"weatherPoints");L(this,"weatherPositions");L(this,"weatherVelocities");L(this,"weatherCount",280);L(this,"weatherMaterial");L(this,"currentBiome","boardwalk");L(this,"weatherType","none");this.buildSun(),this.buildMoon(),this.buildStars(),this.buildClouds(),this.buildWeatherParticles(),this.group.add(this.sunGroup),this.group.add(this.moonGroup),this.group.add(this.starsGroup),this.group.add(this.weatherPoints)}buildSun(){const t=new fs({color:16773494,emissive:16766287,emissiveIntensity:.95,roughness:.15,metalness:0}),e=new k(new Kt(5.2,20,20),t);this.sunGroup.add(e);const n=new rs({color:16771584,transparent:!0,opacity:.45,side:2}),s=new k(new as(5.2,8.5,32),n);this.sunGroup.add(s);const r=new rs({color:16766287,transparent:!0,opacity:.22,side:2}),o=new k(new as(8.5,13,32),r);this.sunGroup.add(o);const a=S.getPlastic(16771584,.1,0);for(let l=0;l<12;l++){const h=l*Math.PI*2/12,d=new k(new Ue(1.2,4.4,.8),a);d.position.set(Math.cos(h)*7.6,Math.sin(h)*7.6,0),d.rotation.z=h+Math.PI/2,this.sunGroup.add(d)}const c=S.getPlastic(16777215,.1,0);[-1,1].forEach(l=>{const h=new k(new ee(.8,8,4),c);h.rotation.z=Math.PI/2*l,h.position.set(l*5,0,.2),this.sunGroup.add(h);const d=new k(new ee(.8,8,4),c);d.rotation.z=l===1?0:Math.PI,d.position.set(0,l*5,.2),this.sunGroup.add(d)}),this.sunGroup.position.set(22,38,-90)}buildMoon(){const t=S.getPlastic(16775620,.1,0),e=new k(new De(3.6,1.2,12,24,Math.PI*1.3),t);e.rotation.z=.5,this.moonGroup.add(e),this.moonGroup.position.set(-28,38,-90),this.moonGroup.visible=!1}buildStars(){const t=new Ae,e=160,n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*160,n[r*3+1]=25+Math.random()*45,n[r*3+2]=-120+Math.random()*120;t.setAttribute("position",new He(n,3));const s=new Js({color:16777215,size:1.6,transparent:!0,opacity:.85});this.starsGroup.add(new la(t,s)),this.starsGroup.visible=!1}buildClouds(){const t=S.getPlastic(16777215,.35,0),e=[{x:-45,y:32,z:-20,scale:1.4,speed:1.2},{x:35,y:36,z:-45,scale:1.6,speed:.9},{x:-25,y:28,z:-70,scale:1.2,speed:1.5},{x:42,y:30,z:-95,scale:1.5,speed:1.1},{x:-38,y:34,z:-125,scale:1.7,speed:.8},{x:28,y:32,z:-150,scale:1.3,speed:1.3},{x:-18,y:38,z:-175,scale:1.5,speed:1},{x:48,y:35,z:-5,scale:1.4,speed:1.4}];for(const n of e){const s=new Ct,r=5;for(let o=0;o<r;o++){const a=1.8+Math.random()*1.2,c=new k(new Kt(a,8,8),t);c.position.set((o-2)*1.8,(Math.random()-.5)*.8,(Math.random()-.5)*1.2),c.scale.set(1.1,.8,.9),s.add(c)}s.scale.setScalar(n.scale),s.position.set(n.x,n.y,n.z),this.group.add(s),this.clouds.push({group:s,baseX:n.x,baseY:n.y,baseZ:n.z,speed:n.speed})}}buildWeatherParticles(){this.weatherCount=750;const t=new Ae;this.weatherPositions=new Float32Array(this.weatherCount*3),this.weatherVelocities=new Float32Array(this.weatherCount*3);for(let e=0;e<this.weatherCount;e++)this.resetParticle(e,0,!0);t.setAttribute("position",new He(this.weatherPositions,3)),this.weatherMaterial=new Js({color:16777215,size:.2,transparent:!0,opacity:.85}),this.weatherPoints=new la(t,this.weatherMaterial)}resetParticle(t,e=0,n=!1){const s=t*3;this.weatherPositions[s]=(Math.random()-.5)*48,this.weatherPositions[s+1]=n?Math.random()*22:18+Math.random()*6,this.weatherPositions[s+2]=e-90+Math.random()*110,this.weatherType==="rain"?(this.weatherVelocities[s]=-1.8+(Math.random()-.5)*.6,this.weatherVelocities[s+1]=-(20+Math.random()*8),this.weatherVelocities[s+2]=(Math.random()-.5)*.4):(this.weatherVelocities[s]=(Math.random()-.5)*.7,this.weatherVelocities[s+1]=-(3+Math.random()*2.5),this.weatherVelocities[s+2]=(Math.random()-.5)*.4)}setBiome(t){this.currentBiome=t,t==="boardwalk"?(this.weatherType="none",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1):t==="plaza"?(this.weatherType="rain",this.sunGroup.visible=!1,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(11789820),this.weatherMaterial.size=.32,this.weatherMaterial.opacity=.75):t==="forest"?(this.weatherType="snow",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(16777215),this.weatherMaterial.size=.18,this.weatherMaterial.opacity=.9):t==="cyber"?(this.weatherType="cyber",this.sunGroup.visible=!1,this.moonGroup.visible=!0,this.starsGroup.visible=!0,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(58879),this.weatherMaterial.size=.28,this.weatherMaterial.opacity=.65):(this.weatherType="none",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1)}update(t,e){for(const n of this.clouds)n.group.position.x+=n.speed*e*.8,n.group.position.x>65&&(n.group.position.x=-65),n.group.position.z=t-90+(n.baseZ%120+120)%120;if(this.sunGroup.position.set(20,36,t-92),this.sunGroup.rotation.z+=e*.12,this.moonGroup.position.set(-24,36,t-92),this.starsGroup.position.z=t-60,this.weatherPoints.visible){const n=this.weatherPoints.geometry.attributes.position.array;for(let s=0;s<this.weatherCount;s++){const r=s*3;this.weatherType==="snow"?n[r]+=(this.weatherVelocities[r]+Math.sin(performance.now()*.003+s)*.4)*e:n[r]+=this.weatherVelocities[r]*e,n[r+1]+=this.weatherVelocities[r+1]*e,n[r+2]+=this.weatherVelocities[r+2]*e,(n[r+1]<.1||n[r+2]>t+12)&&this.resetParticle(s,t,!1)}this.weatherPoints.geometry.attributes.position.needsUpdate=!0}}}class jf{constructor(t,e,n,s,r){L(this,"group");L(this,"skyManager",new Jf);L(this,"chunks",[]);L(this,"numChunks",10);L(this,"currentBiome","boardwalk");L(this,"chunkCounter",0);L(this,"sceneRenderer");L(this,"particleSystem");L(this,"audioManager");L(this,"gameState");L(this,"floatingText");this.sceneRenderer=t,this.particleSystem=e,this.audioManager=n,this.gameState=s,this.floatingText=r,this.group=new Ct,this.group.add(this.skyManager.group);for(let o=0;o<this.numChunks;o++){const a=new Zf;this.chunks.push(a),this.group.add(a.group)}}reset(t="boardwalk"){this.currentBiome=t,this.chunkCounter=0;const e=Ye.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(e.skyColor,e.groundColor,e.fogColor),this.skyManager.setBiome(this.currentBiome);for(let n=0;n<this.numChunks;n++){const s=this.chunks[n],r=-n*Ee;s.init(this.chunkCounter++,this.currentBiome,r,n<=1)}}getCurrentBiomeName(){return Ye.getBiome(this.currentBiome).name}update(t,e){const s=this.gameState.speed*e;for(const a of this.chunks)a.group.position.z+=s;this.updateBiomeProgression(),this.recycleChunks();for(const a of this.chunks)a.updateVisuals(e),a.updateBoundingBoxes();const r=this.checkCollisions(t),o=this.gameState.mode==="stage"&&this.gameState.checkStageCompletion();return this.skyManager.update(t.z,e),{crashed:r,stageWon:o}}updateBiomeProgression(){if(this.gameState.mode==="stage"){const e=this.gameState.getActiveStage();if(e&&e.biome!==this.currentBiome){this.currentBiome=e.biome;const n=Ye.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(n.skyColor,n.groundColor,n.fogColor),this.skyManager.setBiome(this.currentBiome)}return}const t=this.gameState.getCurrentLevelDef().biome;if(t!==this.currentBiome){this.currentBiome=t;const e=Ye.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(e.skyColor,e.groundColor,e.fogColor),this.skyManager.setBiome(this.currentBiome)}}recycleChunks(){for(const t of this.chunks)if(t.group.position.z>Ee){let e=0;for(const s of this.chunks)s.group.position.z<e&&(e=s.group.position.z);const n=e-Ee;t.init(this.chunkCounter++,this.currentBiome,n,!1,this.gameState.currentLevel)}}checkCollisions(t){const e=t.getBoundingBox(),n=t.group.position,s=t.mode==="in_vehicle",r=$e[t.vehicleId],o=Oe[t.characterId],a=o.hasPermanentMagnet,c=a||s&&r.hasMagnetAura||t.magnetTimer>0,l=a?5.5:6,h=s&&r.hasMagnetAura?8:l*o.magnetRangeBonus;for(const d of this.chunks)if(!(Math.abs(d.group.position.z-n.z)>Ee*1.2)){for(const u of d.pickups){if(u.isCollected)continue;const f=new D;if(u.mesh.getWorldPosition(f),c&&u.type==="star_coin"&&f.distanceTo(n)<h){const v=d.group.worldToLocal(n.clone());u.mesh.position.lerp(v,.24)}if(e.intersectsBox(u.boundingBox))if(u.isCollected=!0,u.mesh.visible=!1,u.type==="star_coin"){const g=s&&r.coinMultiplier||1;this.gameState.addCoins(g),this.audioManager.playCoinSound(),Zt.lightImpact(),this.particleSystem.emitPickupSparkles(f,16766720);const v=15*this.gameState.multiplier*g;this.floatingText.spawn(f,`+${v}${g>1?" (2x!)":""}`,"#FFD700","⭐")}else u.type==="diamond_gem"?(this.gameState.addGems(1),this.audioManager.playGemSound(),Zt.mediumImpact(),this.particleSystem.emitPickupSparkles(f,58879),this.floatingText.spawn(f,"+100 (💎+1)","#00E5FF","💎",!0)):u.type==="nitro_boost"?(t.addBoostCharge(),Zt.heavyImpact(),this.particleSystem.emitPickupSparkles(f,58879),this.floatingText.spawn(f,"+1 BOOST [SPACE]!","#00E5FF","🚀",!0)):u.type==="vehicle_key"?(t.mountVehicle(),Zt.heavyImpact(),this.particleSystem.emitPickupSparkles(f,16766287),this.floatingText.spawn(f,"MOUNT RIDE!","#FF4081","🔑",!0)):u.type==="heart_shield"?(t.hasShield=!0,this.audioManager.playGemSound(),Zt.mediumImpact(),this.particleSystem.emitPickupSparkles(f,16728193),this.floatingText.spawn(f,"SHIELD ON!","#FF4081","💖",!0)):u.type==="toy_wrench"&&(s&&(t.vehicleDuration=Math.min(t.maxVehicleDuration,t.vehicleDuration+10)),this.audioManager.playMountSound(),Zt.lightImpact(),this.particleSystem.emitPickupSparkles(f,58998),this.floatingText.spawn(f,"+10s FUEL","#00E676","🔧"))}for(const u of d.obstacles)if(!u.isSmashed&&e.intersectsBox(u.boundingBox)){const f=new D;if(u.mesh.getWorldPosition(f),u.type==="low_barrier"&&(t.y>.45||t.movementState==="jumping")||(u.type==="high_arch"||u.type==="laser_gate")&&(t.movementState==="sliding"||t.y<.2&&e.max.y<u.boundingBox.min.y))continue;if(u.type==="slick_puddle"){u.isSmashed=!0,u.mesh.visible=!1,t.movementState==="sliding"?(this.gameState.addSmash(),t.triggerDrift(Math.random()>.5?1:-1,!0),this.particleSystem.emitDriftSmokeSpray(f,!0),this.particleSystem.emitGroundSparks(f,58879),this.floatingText.spawn(f,"SICK DRIFT! 🏎️💨 +150","#00E5FF","🌊",!0)):(t.triggerDrift(Math.random()>.5?1:-1,!0),this.particleSystem.emitDriftSmokeSpray(f,!0),this.particleSystem.emitGroundSparks(f,16748800),this.floatingText.spawn(f,"⚠️ SLICK SKID! SLIDE TO DRIFT!","#FF9100","⚠️",!0));continue}if(s){if(t.turboTimer>0){u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),Zt.heavyImpact(),this.particleSystem.emitSmashDebris(f),this.floatingText.spawn(f,"TURBO SMASH! +100","#FFEA00","⚡",!0);continue}if(u.type==="crate_stack"||u.type==="traffic_cone"){u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),Zt.mediumImpact(),this.particleSystem.emitSmashDebris(f),this.floatingText.spawn(f,"+50","#FF7043","💥");continue}if(t.vanArmorShield){t.vanArmorShield=!1,u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),Zt.heavyImpact(),this.particleSystem.emitSmashDebris(f,[16766287,16738740,58879]),this.floatingText.spawn(f,"ARMOR SAVED!","#FFD54F","🛡️",!0);continue}u.isSmashed=!0,u.mesh.visible=!1,this.audioManager.playCrashSound(),Zt.heavyImpact(),this.particleSystem.emitSmashDebris(f,[13959168,16771899,16728193,58879]),this.floatingText.spawn(f,"CRASH EJECT!","#FF1744","💥",!0),t.dismountVehicle(!0);continue}if(u.type==="crate_stack"||u.type==="traffic_cone"){u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),Zt.mediumImpact(),this.particleSystem.emitSmashDebris(f),this.floatingText.spawn(f,"+30","#FF7043","💥");continue}if(t.hasShield){t.hasShield=!1,u.isSmashed=!0,u.mesh.visible=!1,this.audioManager.playSmashSound(),Zt.mediumImpact(),this.particleSystem.emitSmashDebris(f,[16728193,16777215]),this.floatingText.spawn(f,"SHIELD SAVED!","#FF4081","💖");continue}return this.audioManager.playCrashSound(),Zt.heavyImpact(),this.particleSystem.emitSmashDebris(f,[16732754,2503224]),t.movementState="crashed",!0}}return!1}}class Qf{constructor(t,e,n){L(this,"gameState");L(this,"player");L(this,"onConfirmCallback");L(this,"selectedCharacter");L(this,"selectedVehicle");L(this,"selectedPalette");L(this,"activeTab","characters");this.gameState=t,this.player=e,this.onConfirmCallback=n,this.selectedCharacter=t.characterId,this.selectedVehicle=t.vehicleId,this.selectedPalette=t.paletteId,this.initEventListeners()}initEventListeners(){const t=document.getElementById("tab-characters"),e=document.getElementById("tab-vehicles"),n=document.getElementById("roster-characters"),s=document.getElementById("roster-vehicles");t?.addEventListener("click",()=>{this.activeTab="characters",t.classList.add("active"),e?.classList.remove("active"),n?.classList.remove("hidden"),s?.classList.add("hidden"),this.syncShowcase()}),e?.addEventListener("click",()=>{this.activeTab="vehicles",e.classList.add("active"),t?.classList.remove("active"),s?.classList.remove("hidden"),n?.classList.add("hidden"),this.syncShowcase()});const r=document.querySelectorAll("#roster-characters .roster-card");r.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");if(!(!h||!Oe[h])){if(!this.gameState.isCharacterUnlocked(h)){this.gameState.unlockCharacter(h)?(this.selectedCharacter=h,this.refreshCardLocks(),this.syncShowcase()):(l.classList.add("shake-anim"),setTimeout(()=>l.classList.remove("shake-anim"),400));return}this.selectedCharacter=h,r.forEach(d=>d.classList.remove("active")),l.classList.add("active"),this.syncShowcase()}})});const o=document.querySelectorAll("#roster-vehicles .roster-card");o.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");if(!(!h||!$e[h])){if(!this.gameState.isVehicleUnlocked(h)){this.gameState.unlockVehicle(h)?(this.selectedVehicle=h,this.refreshCardLocks(),this.syncShowcase()):(l.classList.add("shake-anim"),setTimeout(()=>l.classList.remove("shake-anim"),400));return}this.selectedVehicle=h,o.forEach(d=>d.classList.remove("active")),l.classList.add("active"),this.syncShowcase()}})});const a=document.querySelectorAll(".swatch-btn");a.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-palette");h&&(this.selectedPalette=h,a.forEach(d=>d.classList.remove("active")),l.classList.add("active"),this.syncShowcase())})}),document.getElementById("btn-select-confirm")?.addEventListener("click",()=>{this.confirmLoadout()})}open(){this.selectedCharacter=this.gameState.characterId,this.selectedVehicle=this.gameState.vehicleId,this.selectedPalette=this.gameState.paletteId,this.refreshCardLocks(),this.syncShowcase()}refreshCardLocks(){const t=document.getElementById("garage-gems");t&&(t.innerText=`${this.gameState.totalGemsSaved}`);const e=document.getElementById("garage-coins");e&&(e.innerText=`${this.gameState.totalCoinsSaved}`),document.querySelectorAll("#roster-characters .roster-card").forEach(n=>{const s=n.getAttribute("data-id"),r=this.gameState.isCharacterUnlocked(s),o=Oe[s];if(n.getAttribute("data-id")===this.selectedCharacter?n.classList.add("active"):n.classList.remove("active"),r){n.classList.remove("locked");const a=n.querySelector(".lock-tag");a&&a.remove()}else{n.classList.add("locked");let a=n.querySelector(".lock-tag");a||(a=document.createElement("div"),a.className="lock-tag",n.appendChild(a)),a.innerHTML=`🔒 UNLOCK: 💎 ${o.gemPrice}`}}),document.querySelectorAll("#roster-vehicles .roster-card").forEach(n=>{const s=n.getAttribute("data-id"),r=this.gameState.isVehicleUnlocked(s),o=$e[s];if(n.getAttribute("data-id")===this.selectedVehicle?n.classList.add("active"):n.classList.remove("active"),r){n.classList.remove("locked");const a=n.querySelector(".lock-tag");a&&a.remove()}else{n.classList.add("locked");let a=n.querySelector(".lock-tag");a||(a=document.createElement("div"),a.className="lock-tag",n.appendChild(a)),a.innerHTML=`🔒 UNLOCK: 💎 ${o.gemPrice}`}}),document.querySelectorAll(".swatch-btn").forEach(n=>{n.getAttribute("data-palette")===this.selectedPalette?n.classList.add("active"):n.classList.remove("active")})}syncShowcase(){this.player.setCustomization(this.selectedCharacter,this.selectedVehicle,this.selectedPalette),this.player.setShowcasePreview(this.activeTab==="vehicles")}confirmLoadout(){this.player.setShowcasePreview(!1),this.gameState.characterId=this.selectedCharacter,this.gameState.vehicleId=this.selectedVehicle,this.gameState.paletteId=this.selectedPalette,this.gameState.savePersistedData();const t=document.getElementById("menu-selected-avatar");t&&(t.innerText=`Avatar: ${Oe[this.selectedCharacter].name}`);const e=document.getElementById("menu-selected-vehicle");e&&(e.innerText=`Ride: ${$e[this.selectedVehicle].name}`),this.onConfirmCallback()}}class tp{constructor(t,e,n){L(this,"gameState");L(this,"player");L(this,"audioManager");L(this,"garageView");L(this,"hudScreen");L(this,"mainMenu");L(this,"garageScreen");L(this,"stageScreen");L(this,"instructionsScreen");L(this,"gameOverScreen");L(this,"pauseScreen");L(this,"btnSound");L(this,"btnPause");L(this,"biomeBanner");L(this,"starCount");L(this,"gemCount");L(this,"distanceVal");L(this,"speedMeter");L(this,"multiplierBadge");L(this,"missionCard");L(this,"missionTitle");L(this,"missionProgressBar");L(this,"missionFraction");L(this,"vehicleMeterContainer");L(this,"vehicleMeterName");L(this,"vehicleMeterAbility");L(this,"vehicleMeterFill");L(this,"vehicleTimerText");L(this,"hudLevelBadge");L(this,"hudLevelName");L(this,"levelProgressBar");L(this,"levelFraction");L(this,"levelUpBanner");L(this,"levelUpSub");L(this,"actionPrompt");L(this,"menuBestDistance");L(this,"menuBestScore");L(this,"btnHudBoost");L(this,"hudBoostBadge");L(this,"onStartGame",()=>{});L(this,"onPauseGame",()=>{});L(this,"onResumeGame",()=>{});L(this,"onRestartGame",()=>{});L(this,"onTriggerBoost",()=>{});L(this,"onQuitToMenu",()=>{});this.gameState=t,this.player=e,this.audioManager=n,this.cacheDOMElements(),this.garageView=new Qf(this.gameState,this.player,()=>{this.closeGarage()}),this.bindEvents(),this.updateMenuStats()}cacheDOMElements(){this.hudScreen=document.getElementById("hud-screen"),this.mainMenu=document.getElementById("main-menu"),this.garageScreen=document.getElementById("garage-screen"),this.stageScreen=document.getElementById("stage-screen"),this.instructionsScreen=document.getElementById("instructions-screen"),this.gameOverScreen=document.getElementById("game-over-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.btnSound=document.getElementById("btn-sound"),this.btnPause=document.getElementById("btn-pause"),this.biomeBanner=document.getElementById("biome-banner"),this.starCount=document.getElementById("star-count"),this.gemCount=document.getElementById("gem-count"),this.distanceVal=document.getElementById("distance-value"),this.speedMeter=document.getElementById("speed-meter"),this.multiplierBadge=document.getElementById("multiplier-badge"),this.hudLevelBadge=document.getElementById("hud-level-badge"),this.hudLevelName=document.getElementById("hud-level-name"),this.levelProgressBar=document.getElementById("level-progress-bar"),this.levelFraction=document.getElementById("level-fraction"),this.levelUpBanner=document.getElementById("level-up-banner"),this.levelUpSub=document.getElementById("level-up-sub"),this.missionCard=document.getElementById("mission-card"),this.missionTitle=document.getElementById("mission-title"),this.missionProgressBar=document.getElementById("mission-progress-bar"),this.missionFraction=document.getElementById("mission-fraction"),this.vehicleMeterContainer=document.getElementById("vehicle-meter-container"),this.vehicleMeterName=document.getElementById("vehicle-meter-name"),this.vehicleMeterAbility=document.getElementById("vehicle-meter-ability"),this.vehicleMeterFill=document.getElementById("vehicle-meter-fill"),this.vehicleTimerText=document.getElementById("vehicle-timer-text"),this.actionPrompt=document.getElementById("action-prompt"),this.menuBestDistance=document.getElementById("menu-best-distance"),this.menuBestScore=document.getElementById("menu-best-score"),this.btnHudBoost=document.getElementById("btn-hud-boost"),this.hudBoostBadge=document.getElementById("hud-boost-badge")}bindEvents(){this.btnSound.addEventListener("click",()=>{const t=this.audioManager.toggleMute();this.btnSound.innerText=t?"🔊":"🔇"}),this.btnPause.addEventListener("click",()=>{this.showPauseModal()}),this.btnHudBoost?.addEventListener("click",()=>{this.onTriggerBoost()}),document.getElementById("btn-play-endless")?.addEventListener("click",()=>{this.onStartGame("endless")}),document.getElementById("btn-play-stages")?.addEventListener("click",()=>{this.stageScreen.classList.remove("hidden")}),document.querySelectorAll(".stage-item .btn-start-stage").forEach((t,e)=>{t.addEventListener("click",()=>{this.stageScreen.classList.add("hidden"),this.onStartGame("stage",e)})}),document.getElementById("btn-close-stages")?.addEventListener("click",()=>{this.stageScreen.classList.add("hidden")}),document.getElementById("btn-open-garage")?.addEventListener("click",()=>{this.openGarage()}),document.getElementById("btn-close-garage")?.addEventListener("click",()=>{this.closeGarage()}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.instructionsScreen.classList.remove("hidden")}),document.getElementById("btn-close-instructions")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.getElementById("btn-instructions-gotit")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-char");e&&Oe[e]&&(this.gameState.characterId=e,this.gameState.savePersistedData(),this.player.setCustomization(e,this.gameState.vehicleId,this.gameState.paletteId),this.player.setShowcasePreview(!1),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-veh");e&&$e[e]&&(this.gameState.vehicleId=e,this.gameState.savePersistedData(),this.player.setCustomization(this.gameState.characterId,e,this.gameState.paletteId),this.player.setShowcasePreview(!0),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.getElementById("btn-resume")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onResumeGame()}),document.getElementById("btn-restart")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-quit")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onQuitToMenu()}),document.getElementById("btn-retry")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-back-hub")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu()}),document.getElementById("btn-go-garage")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu(),this.openGarage()})}openGarage(){this.mainMenu.classList.add("hidden"),this.garageScreen.classList.remove("hidden"),this.garageView.open()}closeGarage(){this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.updateMenuStats()}showMainMenu(){this.hudScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.stageScreen.classList.add("hidden"),this.instructionsScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.btnPause.classList.add("hidden"),this.updateMenuStats()}showInGameHUD(){this.mainMenu.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.hudScreen.classList.remove("hidden"),this.btnPause.classList.remove("hidden")}showPauseModal(){this.pauseScreen.classList.remove("hidden"),this.onPauseGame()}resumeGame(){this.pauseScreen.classList.add("hidden"),this.onResumeGame()}showGameOverModal(t){this.hudScreen.classList.add("hidden"),this.gameOverScreen.classList.remove("hidden");const e=document.getElementById("game-over-badge"),n=document.getElementById("game-over-title"),s=document.getElementById("new-high-score-banner");t.stageCompleted?(e&&(e.innerText="STAGE COMPLETE!"),n&&(n.innerText="VICTORY!")):(e&&(e.innerText="CRASHED!"),n&&(n.innerText="RUN FINISHED")),document.getElementById("final-distance").innerText=`${t.distance}m`,document.getElementById("final-coins").innerText=`${t.starCoins}`,document.getElementById("final-smash").innerText=`${t.smashes}`,document.getElementById("final-total-score").innerText=`${t.score}`,s&&(t.isNewHighScore||t.isNewHighDistance?s.classList.remove("hidden"):s.classList.add("hidden"))}updateHUD(t){this.biomeBanner.innerText=t,this.starCount.innerText=`${this.gameState.starCoins}`,this.gemCount.innerText=`${this.gameState.diamondGems}`,this.distanceVal.innerHTML=`${Math.floor(this.gameState.distance)} <small>m</small>`,this.speedMeter.innerText=`${Math.floor(this.gameState.speed)} m/s`,this.multiplierBadge.innerText=`${this.gameState.multiplier}x`;const e=this.gameState.getCurrentLevelDef();this.hudLevelBadge&&(this.hudLevelBadge.innerText=`LVL ${this.gameState.currentLevel}`),this.hudLevelName&&(this.hudLevelName.innerText=e.name);const n=Math.min(100,Math.max(0,this.gameState.levelDistance/e.targetDistance*100));if(this.levelProgressBar&&(this.levelProgressBar.style.width=`${n}%`),this.levelFraction&&(this.levelFraction.innerText=`${Math.floor(this.gameState.levelDistance)} / ${e.targetDistance}m`),this.btnHudBoost&&this.hudBoostBadge&&(this.player.boostCharges>0?(this.btnHudBoost.classList.remove("hidden"),this.hudBoostBadge.innerText=`x${this.player.boostCharges}`):this.btnHudBoost.classList.add("hidden")),this.player.mode==="in_vehicle"){this.vehicleMeterContainer.classList.remove("hidden");const s=$e[this.player.vehicleId];this.vehicleMeterName.innerText=s.name.toUpperCase(),this.vehicleMeterAbility.innerText=s.ability.toUpperCase();const r=Math.max(0,Math.min(100,this.player.vehicleDuration/this.player.maxVehicleDuration*100));this.vehicleMeterFill.style.width=`${r}%`,this.vehicleTimerText.innerText=`${Math.max(0,this.player.vehicleDuration).toFixed(1)}s`}else this.vehicleMeterContainer.classList.add("hidden");if(this.gameState.mode==="stage"){this.missionCard.classList.remove("hidden");const s=this.gameState.getActiveStage();if(s){this.missionTitle.innerText=s.name;const r=Math.min(1,(this.gameState.distance/s.targetDistance+this.gameState.starCoins/s.targetCoins+(s.targetSmashes>0?this.gameState.smashes/s.targetSmashes:1))/(s.targetSmashes>0?3:2));this.missionProgressBar.style.width=`${r*100}%`,this.missionFraction.innerText=`${Math.floor(this.gameState.distance)}m / ${s.targetDistance}m`}}else this.missionCard.classList.add("hidden")}showLevelUpAnnouncement(t,e,n,s){if(!this.levelUpBanner)return;const r=this.levelUpBanner.querySelector(".level-up-title");r&&(r.textContent=`🎉 LEVEL ${t}: ${e.toUpperCase()}! 🎉`),this.levelUpSub&&(this.levelUpSub.textContent=`${n} (+${s}⭐ Bonus)`),this.levelUpBanner.classList.remove("hidden"),setTimeout(()=>{this.levelUpBanner.classList.add("hidden")},2400)}showActionPrompt(t){this.actionPrompt.innerText=t,this.actionPrompt.classList.remove("hidden"),setTimeout(()=>{this.actionPrompt.classList.add("hidden")},1200)}updateMenuStats(){this.menuBestDistance.innerText=`${Math.floor(this.gameState.bestDistance)}m`,this.menuBestScore.innerText=`${this.gameState.bestScore}`;const t=document.getElementById("menu-selected-avatar");t&&(t.innerText=`Avatar: ${Oe[this.gameState.characterId].name}`);const e=document.getElementById("menu-selected-vehicle");e&&(e.innerText=`Ride: ${$e[this.gameState.vehicleId].name}`),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(n=>{n.getAttribute("data-char")===this.gameState.characterId?n.classList.add("active"):n.classList.remove("active")}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(n=>{n.getAttribute("data-veh")===this.gameState.vehicleId?n.classList.add("active"):n.classList.remove("active")})}}class ep{constructor(t){L(this,"container");L(this,"camera");L(this,"items",[]);this.camera=t;let e=document.getElementById("floating-scores-container");if(!e){e=document.createElement("div"),e.id="floating-scores-container",e.className="floating-scores-container";const n=document.getElementById("ui-container");n?n.appendChild(e):document.body.appendChild(e)}this.container=e}spawn(t,e,n="#FFD700",s="",r=!1){const o=document.createElement("div");o.className=`floating-score ${r?"major-score":""}`,o.style.color=n,s?o.innerHTML=`<span class="score-icon">${s}</span> <span class="score-txt">${e}</span>`:o.innerText=e,this.container.appendChild(o),this.items.push({element:o,worldPos:t.clone().add(new D(0,.8,0)),velocity:new D((Math.random()-.5)*.8,3.2+Math.random()*1.2,0),life:0,maxLife:r?1.4:.9})}update(t){const e=window.innerWidth,n=window.innerHeight,s=new D;for(let r=this.items.length-1;r>=0;r--){const o=this.items[r];if(o.life+=t,o.life>=o.maxLife){o.element.remove(),this.items.splice(r,1);continue}if(o.worldPos.addScaledVector(o.velocity,t),o.velocity.y*=.94,s.copy(o.worldPos).project(this.camera),s.z>1){o.element.style.display="none";continue}o.element.style.display="flex";const a=(s.x*.5+.5)*e,c=(-(s.y*.5)+.5)*n,l=o.life/o.maxLife,h=l<.2?.4+l/.2*.85:Math.max(.6,1.25-l*.6),d=l>.6?1-(l-.6)/.4:1;o.element.style.transform=`translate(-50%, -50%) translate3d(${a}px, ${c}px, 0) scale(${h})`,o.element.style.opacity=`${d}`}}clear(){for(const t of this.items)t.element.remove();this.items=[]}}class Ia{constructor(){L(this,"canvas");L(this,"sceneRenderer");L(this,"audioManager");L(this,"inputManager");L(this,"gameState");L(this,"particleSystem");L(this,"cameraController");L(this,"player");L(this,"trackManager");L(this,"uiManager");L(this,"floatingText");L(this,"appState","menu");L(this,"lastTime",0);L(this,"crashTimer",0);L(this,"isCrashing",!1);this.canvas=document.getElementById("game-canvas"),this.sceneRenderer=new Pf(this.canvas),this.audioManager=new Lf,this.inputManager=new Df,this.gameState=new If,this.particleSystem=new Uf,this.cameraController=new Nf(this.sceneRenderer.camera),this.floatingText=new ep(this.sceneRenderer.camera),this.player=new Kf(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId,this.particleSystem,this.audioManager),this.trackManager=new jf(this.sceneRenderer,this.particleSystem,this.audioManager,this.gameState,this.floatingText),this.sceneRenderer.scene.add(this.trackManager.group),this.sceneRenderer.scene.add(this.player.group),this.sceneRenderer.scene.add(this.particleSystem.group),this.uiManager=new tp(this.gameState,this.player,this.audioManager),this.setupUIHandlers(),Zt.hideStatusBar(),this.trackManager.reset("boardwalk"),this.lastTime=performance.now(),requestAnimationFrame(this.gameLoop.bind(this))}setupUIHandlers(){this.uiManager.onStartGame=(t,e)=>{this.gameState.mode=t,typeof e=="number"&&(this.gameState.currentStageIndex=e),this.startRun()},this.uiManager.onPauseGame=()=>{this.appState==="playing"&&(this.appState="paused",this.inputManager.setEnabled(!1),this.audioManager.pauseMusic(),this.audioManager.stopVehicleEngine())},this.uiManager.onResumeGame=()=>{this.appState==="paused"&&(this.appState="playing",this.inputManager.setEnabled(!0),this.audioManager.startMusic(),this.player.mode==="in_vehicle"&&this.audioManager.startVehicleEngine())},this.inputManager.onPauseToggle=()=>{this.appState==="playing"?this.uiManager.showPauseModal():this.appState==="paused"&&this.uiManager.resumeGame()},this.uiManager.onRestartGame=()=>{this.startRun()},this.uiManager.onTriggerBoost=()=>{this.inputManager.triggerBoost()},this.uiManager.onQuitToMenu=()=>{this.appState="menu",this.inputManager.setEnabled(!1),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine(),this.player.reset(),this.trackManager.reset("boardwalk"),this.floatingText.clear(),this.uiManager.showMainMenu()}}startRun(){this.gameState.resetRun(),this.player.setCustomization(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId),this.player.reset();const t=this.gameState.mode==="stage"&&this.gameState.getActiveStage()?.biome||"boardwalk";this.trackManager.reset(t),this.particleSystem.clear(),this.floatingText.clear(),this.inputManager.clear(),this.inputManager.setEnabled(!0),this.appState="playing",this.isCrashing=!1,this.crashTimer=0,this.uiManager.showInGameHUD(),this.audioManager.startMusic()}gameLoop(t){requestAnimationFrame(this.gameLoop.bind(this));const e=Math.min((t-this.lastTime)*.001,.05);if(this.lastTime=t,this.appState==="menu"){const n=new D(0,0,0);this.player.group.position.set(0,0,0),this.cameraController.updateShowcase(n,e),this.particleSystem.update(e),this.sceneRenderer.render();return}if(this.appState==="paused"){this.sceneRenderer.render();return}if(this.appState==="playing"){let n=this.inputManager.popAction();for(;n;)n==="left"?this.player.moveLeft():n==="right"?this.player.moveRight():n==="jump"?this.player.jump():n==="slide"?this.player.slide():n==="boost"&&(this.player.useBoost()?(this.floatingText.spawn(this.player.group.position,"NITRO BOOST! 🚀","#00E5FF","⚡",!0),this.cameraController.addTrauma(.35)):this.player.jump()),n=this.inputManager.popAction();const r=this.player.mode==="in_vehicle"&&$e[this.player.vehicleId]?.speedMultiplier||1,o=this.player.turboTimer>0?1.5:1;this.gameState.updateDistanceAndSpeed(e,r*o);const a=this.gameState.checkLevelUp();a&&(this.audioManager.playLevelUpSound(),Zt.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),this.floatingText.spawn(this.player.group.position,`+${a.rewardCoins} LEVEL UP!`,"#76FF03","🏆",!0),this.uiManager.showLevelUpAnnouncement(a.levelNumber,a.name,a.subtitle,a.rewardCoins)),this.player.update(e,this.gameState.speed);const{crashed:c,stageWon:l}=this.trackManager.update(this.player,e),h=this.player.mode==="in_vehicle",d=this.player.turboTimer>0;if(this.cameraController.updateFollow(this.player.group.position,h,d,e),this.sceneRenderer.updateLightTarget(this.player.group.position),this.particleSystem.update(e),this.floatingText.update(e),this.uiManager.updateHUD(this.trackManager.getCurrentBiomeName()),c&&!this.isCrashing&&(this.isCrashing=!0,this.crashTimer=.85,this.cameraController.addTrauma(.9),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine()),this.isCrashing&&(this.crashTimer-=e,this.crashTimer<=0)){this.appState="game_over",this.inputManager.setEnabled(!1),Zt.warning();const u=this.gameState.finalizeRun(!1);this.uiManager.showGameOverModal(u)}if(this.gameState.mode==="stage"&&l){const u=this.gameState.advanceStage();this.audioManager.playLevelUpSound(),Zt.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),u.nextStage?(this.floatingText.spawn(this.player.group.position,`+${u.rewardCoins} STAGE CLEAR!`,"#00E5FF","🏆",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentStageIndex+1,u.nextStage.name,`Stage Goal Cleared! Entering ${u.nextStage.name}`,u.rewardCoins)):(this.floatingText.spawn(this.player.group.position,`+${u.rewardCoins} ALL STAGES CLEARED!`,"#76FF03","👑",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentLevel,"ALL STAGES CLEARED!","Entering Endless Master Gauntlet! Keep Going!",u.rewardCoins))}}(this.appState==="game_over"||this.appState==="victory")&&(this.particleSystem.update(e),this.floatingText.update(e)),this.sceneRenderer.render()}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{new Ia}):new Ia;export{vi as I,cs as N,lo as W};
