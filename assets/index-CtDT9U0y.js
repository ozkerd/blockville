var Wo=Object.defineProperty;var Xo=(s,t,e)=>t in s?Wo(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var w=(s,t,e)=>Xo(s,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xr="162";const Tn="",sn="srgb",An="srgb-linear",Mr="display-p3",Es="display-p3-linear",ps="linear",ee="srgb",ms="rec709",gs="p3";const Br="300 es";class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Or=1234567;const Ti=Math.PI/180,Ii=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function Sr(s,t){return(s%t+t)%t}function qo(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Yo(s,t,e){return s!==t?(e-s)/(t-s):0}function wi(s,t,e){return(1-e)*s+e*t}function $o(s,t,e,n){return wi(s,t,1-Math.exp(-e*n))}function Ko(s,t=1){return t-Math.abs(Sr(s,t*2)-t)}function Zo(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jo(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jo(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qo(s,t){return s+Math.random()*(t-s)}function tc(s){return s*(.5-Math.random())}function ec(s){s!==void 0&&(Or=s);let t=Or+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nc(s){return s*Ti}function ic(s){return s*Ii}function hr(s){return(s&s-1)===0&&s!==0}function sc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _s(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rc(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ae={DEG2RAD:Ti,RAD2DEG:Ii,generateUUID:Vn,clamp:xe,euclideanModulo:Sr,mapLinear:qo,inverseLerp:Yo,lerp:wi,damp:$o,pingpong:Ko,smoothstep:Zo,smootherstep:Jo,randInt:jo,randFloat:Qo,randFloatSpread:tc,seededRandom:ec,degToRad:nc,radToDeg:ic,isPowerOfTwo:hr,ceilPowerOfTwo:sc,floorPowerOfTwo:_s,setQuaternionFromProperEuler:rc,normalize:Le,denormalize:si};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],y=i[1],_=i[4],T=i[7],P=i[2],C=i[5],A=i[8];return r[0]=o*v+a*y+c*P,r[3]=o*p+a*_+c*C,r[6]=o*m+a*T+c*A,r[1]=l*v+h*y+u*P,r[4]=l*p+h*_+u*C,r[7]=l*m+h*T+u*A,r[2]=d*v+f*y+g*P,r[5]=d*p+f*_+g*C,r[8]=d*m+f*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Ot;function ro(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ac(){const s=vs("canvas");return s.style.display="block",s}const kr={};function oc(s){s in kr||(kr[s]=!0,console.warn(s))}const Gr=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zr=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[An]:{transfer:ps,primaries:ms,toReference:s=>s,fromReference:s=>s},[sn]:{transfer:ee,primaries:ms,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Es]:{transfer:ps,primaries:gs,toReference:s=>s.applyMatrix3(zr),fromReference:s=>s.applyMatrix3(Gr)},[Mr]:{transfer:ee,primaries:gs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zr),fromReference:s=>s.applyMatrix3(Gr).convertLinearToSRGB()}},cc=new Set([An,Es]),Jt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Gi[t].toReference,i=Gi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Gi[s].primaries},getTransfer:function(s){return s===Tn?ps:Gi[s].transfer}};function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hn;class ao{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=vs("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lc=0;class oo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ds(i[o].image)):r.push(Ds(i[o]))}else r=Ds(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ds(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hc=0;class Ne extends ui{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=1001,i=1001,r=1006,o=1008,a=1023,c=1009,l=Ne.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Vn(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=300;Ne.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,T=(f+1)/2,P=(m+1)/2,C=(h+d)/4,A=(u+v)/4,D=(g+p)/4;return _>T&&_>P?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=C/n,r=A/n):T>P?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=C/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=D/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uc extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class co extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let p=1-a;const m=c*d+l*f+h*g+u*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const P=Math.sqrt(_),C=Math.atan2(P,m*y);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const T=a*y;if(c=c*p+d*T,l=l*p+f*T,h=h*p+g*T,u=u*p+v*T,p===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new I,Vr=new Fi;class wn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ze):Ze.fromBufferAttribute(r,o),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gi),Vi.subVectors(this.max,gi),Wn.subVectors(t.a,gi),Xn.subVectors(t.b,gi),qn.subVectors(t.c,gi),_n.subVectors(Xn,Wn),vn.subVectors(qn,Xn),Pn.subVectors(Wn,qn);let e=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!Us(e,Wn,Xn,qn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,Wn,Xn,qn,Vi))?!1:(Hi.crossVectors(_n,vn),e=[Hi.x,Hi.y,Hi.z],Us(e,Wn,Xn,qn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new I,new I,new I,new I,new I,new I,new I,new I],Ze=new I,zi=new wn,Wn=new I,Xn=new I,qn=new I,_n=new I,vn=new I,Pn=new I,gi=new I,Vi=new I,Hi=new I,Ln=new I;function Us(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ln.fromArray(s,r);const a=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),c=t.dot(Ln),l=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fc=new wn,_i=new I,Fs=new I;class Ts{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_i.subVectors(t,this.center);const e=_i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(_i,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_i.copy(t.center).add(Fs)),this.expandByPoint(_i.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new I,Bs=new I,Wi=new I,xn=new I,Os=new I,Xi=new I,ks=new I;class lo{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bs.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Bs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wi),a=xn.dot(this.direction),c=-xn.dot(Wi),l=xn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bs).addScaledVector(Wi,d),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){Os.subVectors(e,t),Xi.subVectors(n,t),ks.crossVectors(Os,Xi);let o=this.direction.dot(ks),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,t);const c=a*this.direction.dot(Xi.crossVectors(xn,Xi));if(c<0)return null;const l=a*this.direction.dot(Os.cross(xn));if(l<0||c+l>o)return null;const h=-a*xn.dot(ks);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,p)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),r=1/Yn.setFromMatrixColumn(t,1).length(),o=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pc,t,mc)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Mn.crossVectors(n,Fe),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Mn.crossVectors(n,Fe)),Mn.normalize(),qi.crossVectors(Fe,Mn),i[0]=Mn.x,i[4]=qi.x,i[8]=Fe.x,i[1]=Mn.y,i[5]=qi.y,i[9]=Fe.y,i[2]=Mn.z,i[6]=qi.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],y=n[3],_=n[7],T=n[11],P=n[15],C=i[0],A=i[4],D=i[8],F=i[12],x=i[1],b=i[5],X=i[9],K=i[13],L=i[2],V=i[6],B=i[10],q=i[14],Y=i[3],J=i[7],et=i[11],Q=i[15];return r[0]=o*C+a*x+c*L+l*Y,r[4]=o*A+a*b+c*V+l*J,r[8]=o*D+a*X+c*B+l*et,r[12]=o*F+a*K+c*q+l*Q,r[1]=h*C+u*x+d*L+f*Y,r[5]=h*A+u*b+d*V+f*J,r[9]=h*D+u*X+d*B+f*et,r[13]=h*F+u*K+d*q+f*Q,r[2]=g*C+v*x+p*L+m*Y,r[6]=g*A+v*b+p*V+m*J,r[10]=g*D+v*X+p*B+m*et,r[14]=g*F+v*K+p*q+m*Q,r[3]=y*C+_*x+T*L+P*Y,r[7]=y*A+_*b+T*V+P*J,r[11]=y*D+_*X+T*B+P*et,r[15]=y*F+_*K+T*q+P*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+p*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=u*p*l-v*d*l+v*c*f-a*p*f-u*c*m+a*d*m,_=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,T=h*v*l-g*u*l+g*a*f-o*v*f-h*a*m+o*u*m,P=g*u*c-h*v*c-g*a*d+o*v*d+h*a*p-o*u*p,C=e*y+n*_+i*T+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=y*A,t[1]=(v*d*r-u*p*r-v*i*f+n*p*f+u*i*m-n*d*m)*A,t[2]=(a*p*r-v*c*r+v*i*l-n*p*l-a*i*m+n*c*m)*A,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*A,t[4]=_*A,t[5]=(h*p*r-g*d*r+g*i*f-e*p*f-h*i*m+e*d*m)*A,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*m-e*c*m)*A,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*A,t[8]=T*A,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*m-e*u*m)*A,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*m+e*a*m)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=P*A,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*p+e*u*p)*A,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*p-e*a*p)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,y=c*l,_=c*h,T=c*u,P=n.x,C=n.y,A=n.z;return i[0]=(1-(v+m))*P,i[1]=(f+T)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(f-T)*C,i[5]=(1-(d+m))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(g+_)*A,i[9]=(p-y)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Yn.set(i[0],i[1],i[2]).length();const o=Yn.set(i[4],i[5],i[6]).length(),a=Yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const l=1/r,h=1/o,u=1/a;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=2e3){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===2e3)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=2e3){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h;let g,v;if(a===2e3)g=(o+r)*u,v=-2*u;else if(a===2001)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new I,Je=new oe,pc=new I(0,0,0),mc=new I(1,1,1),Mn=new I,qi=new I,Fe=new I,Hr=new oe,Wr=new Fi;class cn{constructor(t=0,e=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wr.setFromEuler(this),this.setFromQuaternion(Wr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gc=0;const Xr=new I,$n=new Fi,fn=new oe,Yi=new I,vi=new I,_c=new I,vc=new Fi,qr=new I(1,0,0),Yr=new I(0,1,0),$r=new I(0,0,1),xc={type:"added"},Mc={type:"removed"},Gs={type:"childadded",child:null},zs={type:"childremoved",child:null};class Se extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new I,e=new cn,n=new Fi,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ot}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(qr,t)}rotateY(t){return this.rotateOnAxis(Yr,t)}rotateZ(t){return this.rotateOnAxis($r,t)}translateOnAxis(t,e){return Xr.copy(t).applyQuaternion(this.quaternion),this.position.add(Xr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qr,t)}translateY(t){return this.translateOnAxis(Yr,t)}translateZ(t){return this.translateOnAxis($r,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(vi,Yi,this.up):fn.lookAt(Yi,vi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(fn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mc),zs.child=t,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,t,_c),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,vc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new I(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new I,pn=new I,Vs=new I,mn=new I,Kn=new I,Zn=new I,Kr=new I,Hs=new I,Ws=new I,Xs=new I;class an{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),pn.subVectors(n,e),Vs.subVectors(t,e);const o=je.dot(je),a=je.dot(pn),c=je.dot(Vs),l=pn.dot(pn),h=pn.dot(Vs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),pn.subVectors(t,e),je.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Kn.subVectors(i,n),Zn.subVectors(r,n),Hs.subVectors(t,n);const c=Kn.dot(Hs),l=Zn.dot(Hs);if(c<=0&&l<=0)return e.copy(n);Ws.subVectors(t,i);const h=Kn.dot(Ws),u=Zn.dot(Ws);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Kn,o);Xs.subVectors(t,r);const f=Kn.dot(Xs),g=Zn.dot(Xs);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Zn,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Kr.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Kr,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(Kn,o).addScaledVector(Zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Sr(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qs(o,r,t+1/3),this.g=qs(o,r,t),this.b=qs(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=uo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(xe(be.r*255,0,255))*65536+Math.round(xe(be.g*255,0,255))*256+Math.round(xe(be.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=sn){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL($i);const n=wi(Sn.h,$i.h,e),i=wi(Sn.s,$i.s,e),r=wi(Sn.l,$i.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new kt;kt.NAMES=uo;let Sc=0;class di extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xs extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new I,Ki=new pt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return oc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ki.fromBufferAttribute(this,e),Ki.applyMatrix3(t),this.setXY(e,Ki.x,Ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class fo extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class po extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yc=0;const We=new oe,Ys=new Se,Jn=new I,Be=new wn,xi=new wn,ve=new I;class Ce extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ro(t)?po:fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Be.min,xi.min),Be.expandByPoint(ve),ve.addVectors(Be.max,xi.max),Be.expandByPoint(ve)):(Be.expandByPoint(xi.min),Be.expandByPoint(xi.max))}Be.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(Jn.fromBufferAttribute(t,l),ve.add(Jn)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;const l=new I,h=new I,u=new I,d=new pt,f=new pt,g=new pt,v=new I,p=new I;function m(D,F,x){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(b),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[D].add(v),a[F].add(v),a[x].add(v),c[D].add(p),c[F].add(p),c[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,F=y.length;D<F;++D){const x=y[D],b=x.start,X=x.count;for(let K=b,L=b+X;K<L;K+=3)m(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const _=new I,T=new I,P=new I,C=new I;function A(D){P.fromBufferAttribute(i,D),C.copy(P);const F=a[D];_.copy(F),_.sub(P.multiplyScalar(P.dot(F))).normalize(),T.crossVectors(C,F);const b=T.dot(c[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,b)}for(let D=0,F=y.length;D<F;++D){const x=y[D],b=x.start,X=x.count;for(let K=b,L=b+X;K<L;K+=3)A(t.getX(K+0)),A(t.getX(K+1)),A(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zr=new oe,In=new lo,Zi=new Ts,Jr=new I,jn=new I,Qn=new I,ti=new I,$s=new I,Ji=new I,ji=new pt,Qi=new pt,ts=new pt,jr=new I,Qr=new I,ta=new I,es=new I,ns=new I;class k extends Se{constructor(t=new Ce,e=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ji.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&($s.fromBufferAttribute(u,t),o?Ji.addScaledVector($s,h):Ji.addScaledVector($s.sub(e),h))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(Zi.containsPoint(In.origin)===!1&&(In.intersectSphere(Zi,Jr)===null||In.origin.distanceToSquared(Jr)>(t.far-t.near)**2))&&(Zr.copy(r).invert(),In.copy(t.ray).applyMatrix4(Zr),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,P=_;T<P;T+=3){const C=a.getX(T),A=a.getX(T+1),D=a.getX(T+2);i=is(this,m,t,n,l,h,u,C,A,D),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),T=a.getX(p+2);i=is(this,o,t,n,l,h,u,y,_,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,P=_;T<P;T+=3){const C=T,A=T+1,D=T+2;i=is(this,m,t,n,l,h,u,C,A,D),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,T=p+2;i=is(this,o,t,n,l,h,u,y,_,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ec(s,t,e,n,i,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===0,a),c===null)return null;ns.copy(a),ns.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ns);return l<e.near||l>e.far?null:{distance:l,point:ns.clone(),object:s}}function is(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,jn),s.getVertexPosition(c,Qn),s.getVertexPosition(l,ti);const h=Ec(s,t,e,n,jn,Qn,ti,es);if(h){i&&(ji.fromBufferAttribute(i,a),Qi.fromBufferAttribute(i,c),ts.fromBufferAttribute(i,l),h.uv=an.getInterpolation(es,jn,Qn,ti,ji,Qi,ts,new pt)),r&&(ji.fromBufferAttribute(r,a),Qi.fromBufferAttribute(r,c),ts.fromBufferAttribute(r,l),h.uv1=an.getInterpolation(es,jn,Qn,ti,ji,Qi,ts,new pt)),o&&(jr.fromBufferAttribute(o,a),Qr.fromBufferAttribute(o,c),ta.fromBufferAttribute(o,l),h.normal=an.getInterpolation(es,jn,Qn,ti,jr,Qr,ta,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};an.getNormal(jn,Qn,ti,u.normal),h.face=u}return h}class ze extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(v,p,m,y,_,T,P,C,A,D,F){const x=T/A,b=P/D,X=T/2,K=P/2,L=C/2,V=A+1,B=D+1;let q=0,Y=0;const J=new I;for(let et=0;et<B;et++){const Q=et*b-K;for(let it=0;it<V;it++){const yt=it*x-X;J[v]=yt*y,J[p]=Q*_,J[m]=L,l.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=C>0?1:-1,h.push(J.x,J.y,J.z),u.push(it/A),u.push(1-et/D),q+=1}}for(let et=0;et<D;et++)for(let Q=0;Q<A;Q++){const it=d+Q+V*et,yt=d+Q+V*(et+1),G=d+(Q+1)+V*(et+1),tt=d+(Q+1)+V*et;c.push(it,yt,tt),c.push(yt,G,tt),Y+=6}a.addGroup(f,Y,F),f+=Y,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function li(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=li(s[e]);for(const i in n)t[i]=n[i]}return t}function Tc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mo(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const wc={clone:li,merge:Ie};var bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.uniformsGroups=Tc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class go extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new I,ea=new pt,na=new pt;class Ye extends go{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ii*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,ea,na),e.subVectors(na,ea)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class Cc extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(ei,ni,t,e);i.layers=this.layers,this.add(i);const r=new Ye(ei,ni,t,e);r.layers=this.layers,this.add(r);const o=new Ye(ei,ni,t,e);o.layers=this.layers,this.add(o);const a=new Ye(ei,ni,t,e);a.layers=this.layers,this.add(a);const c=new Ye(ei,ni,t,e);c.layers=this.layers,this.add(c);const l=new Ye(ei,ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _o extends Ne{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rc extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _o(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ze(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new k(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Cc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ks=new I,Pc=new I,Lc=new Ot;class Fn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ks.subVectors(n,e).cross(Pc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ks),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lc.getNormalMatrix(t),i=this.coplanarPoint(Ks).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Ts,ss=new I;class yr{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],p=i[11],m=i[12],y=i[13],_=i[14],T=i[15];if(n[0].setComponents(c-r,d-l,p-f,T-m).normalize(),n[1].setComponents(c+r,d+l,p+f,T+m).normalize(),n[2].setComponents(c+o,d+h,p+g,T+y).normalize(),n[3].setComponents(c-o,d-h,p-g,T-y).normalize(),n[4].setComponents(c-a,d-u,p-v,T-_).normalize(),e===2e3)n[5].setComponents(c+a,d+u,p+v,T+_).normalize();else if(e===2001)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ss.x=i.normal.x>0?t.max.x:t.min.x,ss.y=i.normal.y>0?t.max.y:t.min.y,ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ic(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];e?s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class on extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let _=0;_<l;_++){const T=_*u-r;g.push(T,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const _=y+l*m,T=y+l*(m+1),P=y+1+l*(m+1),C=y+1+l*m;f.push(_,T,C),f.push(T,P,C)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nc=`#ifdef USE_ALPHAHASH
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
#endif`,Uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kc=`#ifdef USE_AOMAP
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
#endif`,Gc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc=`#ifdef USE_BATCHING
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
#endif`,Vc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qc=`#ifdef USE_IRIDESCENCE
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
#endif`,Yc=`#ifdef USE_BUMPMAP
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
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,el=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nl=`#define PI 3.141592653589793
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
} // validated`,il=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sl=`vec3 transformedNormal = objectNormal;
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
#endif`,rl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,al=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ol=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ll="gl_FragColor = linearToOutputTexel( gl_FragColor );",hl=`
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
}`,ul=`#ifdef USE_ENVMAP
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
#endif`,dl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fl=`#ifdef USE_ENVMAP
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
#endif`,pl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ml=`#ifdef USE_ENVMAP
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
#endif`,gl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_l=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ml=`#ifdef USE_GRADIENTMAP
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
}`,Sl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,El=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wl=`uniform bool receiveShadow;
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
#endif`,bl=`#ifdef USE_ENVMAP
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
#endif`,Al=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ll=`PhysicalMaterial material;
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
#endif`,Il=`struct PhysicalMaterial {
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
}`,Dl=`
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
#endif`,Nl=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ul=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ol=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hl=`#if defined( USE_POINTS_UV )
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
#endif`,Wl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ql=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yl=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$l=`#ifdef USE_MORPHNORMALS
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
#endif`,Kl=`#ifdef USE_MORPHTARGETS
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
#endif`,Zl=`#ifdef USE_MORPHTARGETS
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
#endif`,Jl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ql=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nh=`#ifdef USE_NORMALMAP
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
#endif`,ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vh=`float getShadowMask() {
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
}`,xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
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
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
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
#endif`,Eh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ah=`#ifdef USE_TRANSMISSION
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
#endif`,Ch=`#ifdef USE_TRANSMISSION
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ih=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
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
}`,Uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kh=`#include <common>
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
}`,Gh=`#if DEPTH_PACKING == 3200
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
}`,zh=`#define DISTANCE
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
}`,Vh=`#define DISTANCE
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
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
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
}`,qh=`uniform vec3 diffuse;
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
}`,Yh=`#include <common>
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
}`,$h=`uniform vec3 diffuse;
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
}`,Kh=`#define LAMBERT
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
}`,Zh=`#define LAMBERT
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
}`,Jh=`#define MATCAP
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
}`,jh=`#define MATCAP
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
}`,Qh=`#define NORMAL
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
}`,tu=`#define NORMAL
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
}`,eu=`#define PHONG
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
}`,nu=`#define PHONG
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
}`,iu=`#define STANDARD
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
}`,su=`#define STANDARD
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
}`,ru=`#define TOON
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
}`,au=`#define TOON
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
}`,ou=`uniform float size;
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
}`,cu=`uniform vec3 diffuse;
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
}`,lu=`#include <common>
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
}`,hu=`uniform vec3 color;
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
}`,uu=`uniform float rotation;
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
}`,du=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Dc,alphahash_pars_fragment:Nc,alphamap_fragment:Uc,alphamap_pars_fragment:Fc,alphatest_fragment:Bc,alphatest_pars_fragment:Oc,aomap_fragment:kc,aomap_pars_fragment:Gc,batching_pars_vertex:zc,batching_vertex:Vc,begin_vertex:Hc,beginnormal_vertex:Wc,bsdfs:Xc,iridescence_fragment:qc,bumpmap_pars_fragment:Yc,clipping_planes_fragment:$c,clipping_planes_pars_fragment:Kc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Jc,color_fragment:jc,color_pars_fragment:Qc,color_pars_vertex:tl,color_vertex:el,common:nl,cube_uv_reflection_fragment:il,defaultnormal_vertex:sl,displacementmap_pars_vertex:rl,displacementmap_vertex:al,emissivemap_fragment:ol,emissivemap_pars_fragment:cl,colorspace_fragment:ll,colorspace_pars_fragment:hl,envmap_fragment:ul,envmap_common_pars_fragment:dl,envmap_pars_fragment:fl,envmap_pars_vertex:pl,envmap_physical_pars_fragment:bl,envmap_vertex:ml,fog_vertex:gl,fog_pars_vertex:_l,fog_fragment:vl,fog_pars_fragment:xl,gradientmap_pars_fragment:Ml,lightmap_fragment:Sl,lightmap_pars_fragment:yl,lights_lambert_fragment:El,lights_lambert_pars_fragment:Tl,lights_pars_begin:wl,lights_toon_fragment:Al,lights_toon_pars_fragment:Cl,lights_phong_fragment:Rl,lights_phong_pars_fragment:Pl,lights_physical_fragment:Ll,lights_physical_pars_fragment:Il,lights_fragment_begin:Dl,lights_fragment_maps:Nl,lights_fragment_end:Ul,logdepthbuf_fragment:Fl,logdepthbuf_pars_fragment:Bl,logdepthbuf_pars_vertex:Ol,logdepthbuf_vertex:kl,map_fragment:Gl,map_pars_fragment:zl,map_particle_fragment:Vl,map_particle_pars_fragment:Hl,metalnessmap_fragment:Wl,metalnessmap_pars_fragment:Xl,morphinstance_vertex:ql,morphcolor_vertex:Yl,morphnormal_vertex:$l,morphtarget_pars_vertex:Kl,morphtarget_vertex:Zl,normal_fragment_begin:Jl,normal_fragment_maps:jl,normal_pars_fragment:Ql,normal_pars_vertex:th,normal_vertex:eh,normalmap_pars_fragment:nh,clearcoat_normal_fragment_begin:ih,clearcoat_normal_fragment_maps:sh,clearcoat_pars_fragment:rh,iridescence_pars_fragment:ah,opaque_fragment:oh,packing:ch,premultiplied_alpha_fragment:lh,project_vertex:hh,dithering_fragment:uh,dithering_pars_fragment:dh,roughnessmap_fragment:fh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:gh,shadowmap_vertex:_h,shadowmask_pars_fragment:vh,skinbase_vertex:xh,skinning_pars_vertex:Mh,skinning_vertex:Sh,skinnormal_vertex:yh,specularmap_fragment:Eh,specularmap_pars_fragment:Th,tonemapping_fragment:wh,tonemapping_pars_fragment:bh,transmission_fragment:Ah,transmission_pars_fragment:Ch,uv_pars_fragment:Rh,uv_pars_vertex:Ph,uv_vertex:Lh,worldpos_vertex:Ih,background_vert:Dh,background_frag:Nh,backgroundCube_vert:Uh,backgroundCube_frag:Fh,cube_vert:Bh,cube_frag:Oh,depth_vert:kh,depth_frag:Gh,distanceRGBA_vert:zh,distanceRGBA_frag:Vh,equirect_vert:Hh,equirect_frag:Wh,linedashed_vert:Xh,linedashed_frag:qh,meshbasic_vert:Yh,meshbasic_frag:$h,meshlambert_vert:Kh,meshlambert_frag:Zh,meshmatcap_vert:Jh,meshmatcap_frag:jh,meshnormal_vert:Qh,meshnormal_frag:tu,meshphong_vert:eu,meshphong_frag:nu,meshphysical_vert:iu,meshphysical_frag:su,meshtoon_vert:ru,meshtoon_frag:au,points_vert:ou,points_frag:cu,shadow_vert:lu,shadow_frag:hu,sprite_vert:uu,sprite_frag:du},ct={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},rn={basic:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ie([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ie([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ie([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ie([ct.points,ct.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ie([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ie([ct.common,ct.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ie([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ie([ct.sprite,ct.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ie([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ie([ct.lights,ct.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};rn.physical={uniforms:Ie([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const rs={r:0,b:0,g:0},Nn=new cn,fu=new oe;function pu(s,t,e,n,i,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(p,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(h===void 0&&(h=new k(new ze(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:li(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Nn.copy(m.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fu.makeRotationFromEuler(Nn)),h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ee,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new k(new on(2,2),new bn({name:"BackgroundMaterial",uniforms:li(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,m){p.getRGB(rs,mo(s)),n.buffers.color.setClear(rs.r,rs.g,rs.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function mu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function u(L,V,B,q,Y){let J=!1;if(o){const et=v(q,B,V);l!==et&&(l=et,f(l.object)),J=m(L,q,B,Y),J&&y(L,q,B,Y)}else{const et=V.wireframe===!0;(l.geometry!==q.id||l.program!==B.id||l.wireframe!==et)&&(l.geometry=q.id,l.program=B.id,l.wireframe=et,J=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,D(L,V,B,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,V,B){const q=B.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let J=Y[V.id];J===void 0&&(J={},Y[V.id]=J);let et=J[q];return et===void 0&&(et=p(d()),J[q]=et),et}function p(L){const V=[],B=[],q=[];for(let Y=0;Y<i;Y++)V[Y]=0,B[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:B,attributeDivisors:q,object:L,attributes:{},index:null}}function m(L,V,B,q){const Y=l.attributes,J=V.attributes;let et=0;const Q=B.getAttributes();for(const it in Q)if(Q[it].location>=0){const G=Y[it];let tt=J[it];if(tt===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),G===void 0||G.attribute!==tt||tt&&G.data!==tt.data)return!0;et++}return l.attributesNum!==et||l.index!==q}function y(L,V,B,q){const Y={},J=V.attributes;let et=0;const Q=B.getAttributes();for(const it in Q)if(Q[it].location>=0){let G=J[it];G===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));const tt={};tt.attribute=G,G&&G.data&&(tt.data=G.data),Y[it]=tt,et++}l.attributes=Y,l.attributesNum=et,l.index=q}function _(){const L=l.newAttributes;for(let V=0,B=L.length;V<B;V++)L[V]=0}function T(L){P(L,0)}function P(L,V){const B=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;B[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),Y[L]!==V&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),Y[L]=V)}function C(){const L=l.newAttributes,V=l.enabledAttributes;for(let B=0,q=V.length;B<q;B++)V[B]!==L[B]&&(s.disableVertexAttribArray(B),V[B]=0)}function A(L,V,B,q,Y,J,et){et===!0?s.vertexAttribIPointer(L,V,B,Y,J):s.vertexAttribPointer(L,V,B,q,Y,J)}function D(L,V,B,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const Y=q.attributes,J=B.getAttributes(),et=V.defaultAttributeValues;for(const Q in J){const it=J[Q];if(it.location>=0){let yt=Y[Q];if(yt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),yt!==void 0){const G=yt.normalized,tt=yt.itemSize,at=e.get(yt);if(at===void 0)continue;const gt=at.buffer,_t=at.type,mt=at.bytesPerElement,Kt=n.isWebGL2===!0&&(_t===s.INT||_t===s.UNSIGNED_INT||yt.gpuType===1013);if(yt.isInterleavedBufferAttribute){const Pt=yt.data,O=Pt.stride,ye=yt.offset;if(Pt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<it.locationSize;Tt++)P(it.location+Tt,Pt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Tt=0;Tt<it.locationSize;Tt++)T(it.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Tt=0;Tt<it.locationSize;Tt++)A(it.location+Tt,tt/it.locationSize,_t,G,O*mt,(ye+tt/it.locationSize*Tt)*mt,Kt)}else{if(yt.isInstancedBufferAttribute){for(let Pt=0;Pt<it.locationSize;Pt++)P(it.location+Pt,yt.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Pt=0;Pt<it.locationSize;Pt++)T(it.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Pt=0;Pt<it.locationSize;Pt++)A(it.location+Pt,tt/it.locationSize,_t,G,tt*mt,tt/it.locationSize*Pt*mt,Kt)}}else if(et!==void 0){const G=et[Q];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(it.location,G);break;case 3:s.vertexAttrib3fv(it.location,G);break;case 4:s.vertexAttrib4fv(it.location,G);break;default:s.vertexAttrib1fv(it.location,G)}}}}C()}function F(){X();for(const L in a){const V=a[L];for(const B in V){const q=V[B];for(const Y in q)g(q[Y].object),delete q[Y];delete V[B]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const B in V){const q=V[B];for(const Y in q)g(q[Y].object),delete q[Y];delete V[B]}delete a[L.id]}function b(L){for(const V in a){const B=a[V];if(B[L.id]===void 0)continue;const q=B[L.id];for(const Y in q)g(q[Y].object),delete q[Y];delete B[L.id]}}function X(){K(),h=!0,l!==c&&(l=c,f(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:X,resetDefaultState:K,dispose:F,releaseStatesOfGeometry:x,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:T,disableUnusedAttributes:C}}function gu(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function _u(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,T=o||t.has("OES_texture_float"),P=_&&T,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:C}}function vu(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Fn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,_=y*4;let T=m.clippingState||null;c.value=T,T=h(g,d,_,f);for(let P=0;P!==_;++P)T[P]=e[P];m.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,T=f;_!==v;++_,T+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function xu(s){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xo extends go{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,ia=[.125,.215,.35,.446,.526,.582],On=20,Zs=new xo,sa=new kt;let Js=null,js=0,Qs=0;const Bn=(1+Math.sqrt(5))/2,ii=1/Bn,ra=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Bn,ii),new I(0,Bn,-ii),new I(ii,0,Bn),new I(-ii,0,Bn),new I(Bn,ii,0),new I(-Bn,ii,0)];class aa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Js=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=la(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,js,Qs),t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:An,depthBuffer:!1},i=oa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mu(r)),this._blurMaterial=Su(r,t,e)}return i}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,n,i){const a=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sa),h.toneMapping=0,h.autoClear=!1;const f=new xs({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new k(new ze,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(sa),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const _=this._cubeSize;as(i,y*_,m>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=la()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ca());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;as(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ra[(i-1)%ra.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new k(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*On-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):On;p>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const m=[];let y=0;for(let A=0;A<On;++A){const D=A/v,F=Math.exp(-D*D/2);m.push(F),A===0?y+=F:A<p&&(y+=2*F)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const T=this._sizeLods[i],P=3*T*(i>_-ri?i-_+ri:0),C=4*(this._cubeSize-T);as(e,P,C,3*T,2*T),c.setRenderTarget(e),c.render(u,Zs)}}function Mu(s){const t=[],e=[],n=[];let i=s;const r=s-ri+1+ia.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ri?c=ia[o-s+ri-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,D=C>2?0:-1,F=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(F,v*g*C),_.set(d,p*g*C);const x=[C,C,C,C,C,C];T.set(x,m*g*C)}const P=new Ce;P.setAttribute("position",new Ke(y,v)),P.setAttribute("uv",new Ke(_,p)),P.setAttribute("faceIndex",new Ke(T,m)),t.push(P),i>ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oa(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Su(s,t,e){const n=new Float32Array(On),i=new I(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Er(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ca(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Er(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function la(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Er(){return`

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
	`}function yu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new aa(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new aa(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Eu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tu(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,T=y.length;_<T;_+=3){const P=y[_+0],C=y[_+1],A=y[_+2];d.push(P,C,C,A,A,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,T=y.length/3-1;_<T;_+=3){const P=_+0,C=_+1,A=_+2;d.push(P,C,C,A,A,P)}}else return;const p=new(ro(d)?po:fo)(d,1);p.version=v;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function wu(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,v){if(v===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,v),e.update(g,r,v)}function d(f,g,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let m=0;for(let y=0;y<v;y++)m+=g[y];e.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function bu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Au(s,t){return s[0]-t[0]}function Cu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ru(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Me,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let X=function(){x.dispose(),r.delete(h),h.removeEventListener("dispose",X)};v!==void 0&&v.texture.dispose();const p=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let C=0;p===!0&&(C=1),m===!0&&(C=2),y===!0&&(C=3);let A=h.attributes.position.count*C,D=1;A>t.maxTextureSize&&(D=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const F=new Float32Array(A*D*4*g),x=new co(F,A,D,g);x.type=1015,x.needsUpdate=!0;const b=C*4;for(let K=0;K<g;K++){const L=_[K],V=T[K],B=P[K],q=A*D*4*K;for(let Y=0;Y<L.count;Y++){const J=Y*b;p===!0&&(o.fromBufferAttribute(L,Y),F[q+J+0]=o.x,F[q+J+1]=o.y,F[q+J+2]=o.z,F[q+J+3]=0),m===!0&&(o.fromBufferAttribute(V,Y),F[q+J+4]=o.x,F[q+J+5]=o.y,F[q+J+6]=o.z,F[q+J+7]=0),y===!0&&(o.fromBufferAttribute(B,Y),F[q+J+8]=o.x,F[q+J+9]=o.y,F[q+J+10]=o.z,F[q+J+11]=B.itemSize===4?o.w:1)}}v={count:g,texture:x,size:new pt(A,D)},r.set(h,v),h.addEventListener("dispose",X)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let p=0;for(let y=0;y<d.length;y++)p+=d[y];const m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const f=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){const T=g[_];T[0]=_,T[1]=d[_]}g.sort(Cu);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Au);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const T=a[_],P=T[0],C=T[1];P!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+_)!==v[P]&&h.setAttribute("morphTarget"+_,v[P]),p&&h.getAttribute("morphNormal"+_)!==p[P]&&h.setAttribute("morphNormal"+_,p[P]),i[_]=C,m+=C):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Pu(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Mo extends Ne{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const So=new Ne,yo=new Mo(1,1);yo.compareFunction=515;const Eo=new co,To=new dc,wo=new _o,ha=[],ua=[],da=new Float32Array(16),fa=new Float32Array(9),pa=new Float32Array(4);function fi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ha[i];if(r===void 0&&(r=new Float32Array(i),ha[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ws(s,t){let e=ua[t];e===void 0&&(e=new Int32Array(t),ua[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Iu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Du(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function Nu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Uu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;pa.set(n),s.uniformMatrix2fv(this.addr,!1,pa),ge(e,n)}}function Fu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;fa.set(n),s.uniformMatrix3fv(this.addr,!1,fa),ge(e,n)}}function Bu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;da.set(n),s.uniformMatrix4fv(this.addr,!1,da),ge(e,n)}}function Ou(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ku(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function Gu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function zu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Vu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Hu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function Wu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Xu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function qu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?yo:So;e.setTexture2D(t||r,i)}function Yu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||To,i)}function $u(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wo,i)}function Ku(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Eo,i)}function Zu(s){switch(s){case 5126:return Lu;case 35664:return Iu;case 35665:return Du;case 35666:return Nu;case 35674:return Uu;case 35675:return Fu;case 35676:return Bu;case 5124:case 35670:return Ou;case 35667:case 35671:return ku;case 35668:case 35672:return Gu;case 35669:case 35673:return zu;case 5125:return Vu;case 36294:return Hu;case 36295:return Wu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return qu;case 35679:case 36299:case 36307:return Yu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return Ku}}function Ju(s,t){s.uniform1fv(this.addr,t)}function ju(s,t){const e=fi(t,this.size,2);s.uniform2fv(this.addr,e)}function Qu(s,t){const e=fi(t,this.size,3);s.uniform3fv(this.addr,e)}function td(s,t){const e=fi(t,this.size,4);s.uniform4fv(this.addr,e)}function ed(s,t){const e=fi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nd(s,t){const e=fi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function id(s,t){const e=fi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sd(s,t){s.uniform1iv(this.addr,t)}function rd(s,t){s.uniform2iv(this.addr,t)}function ad(s,t){s.uniform3iv(this.addr,t)}function od(s,t){s.uniform4iv(this.addr,t)}function cd(s,t){s.uniform1uiv(this.addr,t)}function ld(s,t){s.uniform2uiv(this.addr,t)}function hd(s,t){s.uniform3uiv(this.addr,t)}function ud(s,t){s.uniform4uiv(this.addr,t)}function dd(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||So,r[o])}function fd(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||To,r[o])}function pd(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||wo,r[o])}function md(s,t,e){const n=this.cache,i=t.length,r=ws(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Eo,r[o])}function gd(s){switch(s){case 5126:return Ju;case 35664:return ju;case 35665:return Qu;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return sd;case 35667:case 35671:return rd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return cd;case 36294:return ld;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}class _d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zu(e.type)}}class vd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gd(e.type)}}class xd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const tr=/(\w+)(\])?(\[|\.)?/g;function ma(s,t){s.seq.push(t),s.map[t.id]=t}function Md(s,t,e){const n=s.name,i=n.length;for(tr.lastIndex=0;;){const r=tr.exec(n),o=tr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ma(e,l===void 0?new _d(a,s,t):new vd(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new xd(a),ma(e,u)),e=u}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Md(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ga(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Sd=37297;let yd=0;function Ed(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Td(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===gs&&e===ms?n="LinearDisplayP3ToLinearSRGB":t===ms&&e===gs&&(n="LinearSRGBToLinearDisplayP3"),s){case An:case Es:return[n,"LinearTransferOETF"];case sn:case Mr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _a(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ed(s.getShaderSource(t),o)}else return i}function wd(s,t){const e=Td(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function bd(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ad(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function Cd(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ai).join(`
`)}function Rd(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pd(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ai(s){return s!==""}function va(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ld=/^[ \t]*#include +<([\w\d./]+)>/gm;function ur(s){return s.replace(Ld,Dd)}const Id=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dd(s,t){let e=Bt[t];if(e===void 0){const n=Id.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ur(e)}const Nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ma(s){return s.replace(Nd,Ud)}function Ud(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sa(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Bd(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Od(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function kd(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Gd(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zd(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Fd(e),l=Bd(e),h=Od(e),u=kd(e),d=Gd(e),f=e.isWebGL2?"":Ad(e),g=Cd(e),v=Rd(r),p=i.createProgram();let m,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ai).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ai).join(`
`),y.length>0&&(y+=`
`)):(m=[Sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),y=[f,Sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Bt.tonemapping_pars_fragment:"",e.toneMapping!==0?bd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,wd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ai).join(`
`)),o=ur(o),o=va(o,e),o=xa(o,e),a=ur(a),a=va(a,e),a=xa(a,e),o=Ma(o),a=Ma(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Br?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Br?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=_+m+o,P=_+y+a,C=ga(i,i.VERTEX_SHADER,T),A=ga(i,i.FRAGMENT_SHADER,P);i.attachShader(p,C),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(X){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(A).trim();let B=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,C,A);else{const Y=_a(i,C,"vertex"),J=_a(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+K+`
`+Y+`
`+J)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||V==="")&&(q=!1);q&&(X.diagnostics={runnable:B,programLog:K,vertexShader:{log:L,prefix:m},fragmentShader:{log:V,prefix:y}})}i.deleteShader(C),i.deleteShader(A),F=new fs(i,p),x=Pd(i,p)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(p,Sd)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Vd=0;class Hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wd(t),e.set(t,n)),n}}class Wd{constructor(t){this.id=Vd++,this.code=t,this.usedTimes=0}}function Xd(s,t,e,n,i,r,o){const a=new ho,c=new Hd,l=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,X,K,L){const V=K.fog,B=L.geometry,q=x.isMeshStandardMaterial?K.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),J=Y&&Y.mapping===306?Y.image.height:null,et=v[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=Q!==void 0?Q.length:0;let yt=0;B.morphAttributes.position!==void 0&&(yt=1),B.morphAttributes.normal!==void 0&&(yt=2),B.morphAttributes.color!==void 0&&(yt=3);let G,tt,at,gt;if(et){const Qt=rn[et];G=Qt.vertexShader,tt=Qt.fragmentShader}else G=x.vertexShader,tt=x.fragmentShader,c.update(x),at=c.getVertexShaderID(x),gt=c.getFragmentShaderID(x);const _t=s.getRenderTarget(),mt=L.isInstancedMesh===!0,Kt=L.isBatchedMesh===!0,Pt=!!x.map,O=!!x.matcap,ye=!!Y,Tt=!!x.aoMap,Vt=!!x.lightMap,bt=!!x.bumpMap,qt=!!x.normalMap,Gt=!!x.displacementMap,Ht=!!x.emissiveMap,he=!!x.metalnessMap,R=!!x.roughnessMap,M=x.anisotropy>0,Z=x.clearcoat>0,j=x.iridescence>0,st=x.sheen>0,nt=x.transmission>0,Nt=M&&!!x.anisotropyMap,At=Z&&!!x.clearcoatMap,lt=Z&&!!x.clearcoatNormalMap,ut=Z&&!!x.clearcoatRoughnessMap,Ut=j&&!!x.iridescenceMap,rt=j&&!!x.iridescenceThicknessMap,de=st&&!!x.sheenColorMap,Wt=st&&!!x.sheenRoughnessMap,Et=!!x.specularMap,vt=!!x.specularColorMap,xt=!!x.specularIntensityMap,Yt=nt&&!!x.transmissionMap,It=nt&&!!x.thicknessMap,ie=!!x.gradientMap,N=!!x.alphaMap,ht=x.alphaTest>0,H=!!x.alphaHash,ot=!!x.extensions;let dt=0;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Xt={isWebGL2:u,shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:tt,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Kt,instancing:mt,instancingColor:mt&&L.instanceColor!==null,instancingMorph:mt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:An,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:O,envMap:ye,envMapMode:ye&&Y.mapping,envMapCubeUVHeight:J,aoMap:Tt,lightMap:Vt,bumpMap:bt,normalMap:qt,displacementMap:f&&Gt,emissiveMap:Ht,normalMapObjectSpace:qt&&x.normalMapType===1,normalMapTangentSpace:qt&&x.normalMapType===0,metalnessMap:he,roughnessMap:R,anisotropy:M,anisotropyMap:Nt,clearcoat:Z,clearcoatMap:At,clearcoatNormalMap:lt,clearcoatRoughnessMap:ut,iridescence:j,iridescenceMap:Ut,iridescenceThicknessMap:rt,sheen:st,sheenColorMap:de,sheenRoughnessMap:Wt,specularMap:Et,specularColorMap:vt,specularIntensityMap:xt,transmission:nt,transmissionMap:Yt,thicknessMap:It,gradientMap:ie,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:ht,alphaHash:H,combine:x.combine,mapUv:Pt&&p(x.map.channel),aoMapUv:Tt&&p(x.aoMap.channel),lightMapUv:Vt&&p(x.lightMap.channel),bumpMapUv:bt&&p(x.bumpMap.channel),normalMapUv:qt&&p(x.normalMap.channel),displacementMapUv:Gt&&p(x.displacementMap.channel),emissiveMapUv:Ht&&p(x.emissiveMap.channel),metalnessMapUv:he&&p(x.metalnessMap.channel),roughnessMapUv:R&&p(x.roughnessMap.channel),anisotropyMapUv:Nt&&p(x.anisotropyMap.channel),clearcoatMapUv:At&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(x.sheenRoughnessMap.channel),specularMapUv:Et&&p(x.specularMap.channel),specularColorMapUv:vt&&p(x.specularColorMap.channel),specularIntensityMapUv:xt&&p(x.specularIntensityMap.channel),transmissionMapUv:Yt&&p(x.transmissionMap.channel),thicknessMapUv:It&&p(x.thicknessMap.channel),alphaMapUv:N&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(qt||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Pt||N),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ot&&x.extensions.derivatives===!0,extensionFragDepth:ot&&x.extensions.fragDepth===!0,extensionDrawBuffers:ot&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ot&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function y(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)b.push(X),b.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(_(b,x),T(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.instancingMorph&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.normalMapObjectSpace&&a.enable(7),b.normalMapTangentSpace&&a.enable(8),b.clearcoat&&a.enable(9),b.iridescence&&a.enable(10),b.alphaTest&&a.enable(11),b.vertexColors&&a.enable(12),b.vertexAlphas&&a.enable(13),b.vertexUv1s&&a.enable(14),b.vertexUv2s&&a.enable(15),b.vertexUv3s&&a.enable(16),b.vertexTangents&&a.enable(17),b.anisotropy&&a.enable(18),b.alphaHash&&a.enable(19),b.batching&&a.enable(20),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const b=v[x.type];let X;if(b){const K=rn[b];X=wc.clone(K.uniforms)}else X=x.uniforms;return X}function C(x,b){let X;for(let K=0,L=h.length;K<L;K++){const V=h[K];if(V.cacheKey===b){X=V,++X.usedTimes;break}}return X===void 0&&(X=new zd(s,b,x,r),h.push(X)),X}function A(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function D(x){c.remove(x)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:F}}function qd(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Yd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ya(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ea(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),t++,m}function a(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||Yd),n.length>1&&n.sort(d||ya),i.length>1&&i.sort(d||ya)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function $d(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ea,s.set(n,[o])):i>=r.length?(o=new Ea,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kd(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Zd(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jd=0;function jd(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Qd(s,t){const e=new Kd,n=Zd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const r=new I,o=new oe,a=new oe;function c(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let v=0,p=0,m=0,y=0,_=0,T=0,P=0,C=0,A=0,D=0,F=0;h.sort(jd);const x=u===!0?Math.PI:1;for(let X=0,K=h.length;X<K;X++){const L=h[X],V=L.color,B=L.intensity,q=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*B*x,f+=V.g*B*x,g+=V.b*B*x;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],B);F++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const et=L.shadow,Q=n.get(L);Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize=et.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=L.shadow.matrix,T++}i.directional[v]=J,v++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(V).multiplyScalar(B*x),J.distance=q,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[m]=J;const et=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,et.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[m]=et.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize=et.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=Y,C++}m++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(V).multiplyScalar(B),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=J,y++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*x),J.distance=L.distance,J.decay=L.decay,L.castShadow){const et=L.shadow,Q=n.get(L);Q.shadowBias=et.bias,Q.shadowNormalBias=et.normalBias,Q.shadowRadius=et.radius,Q.shadowMapSize=et.mapSize,Q.shadowCameraNear=et.camera.near,Q.shadowCameraFar=et.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=L.shadow.matrix,P++}i.point[p]=J,p++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(B*x),J.groundColor.copy(L.groundColor).multiplyScalar(B*x),i.hemi[_]=J,_++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==v||b.pointLength!==p||b.spotLength!==m||b.rectAreaLength!==y||b.hemiLength!==_||b.numDirectionalShadows!==T||b.numPointShadows!==P||b.numSpotShadows!==C||b.numSpotMaps!==A||b.numLightProbes!==F)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=F,b.directionalLength=v,b.pointLength=p,b.spotLength=m,b.rectAreaLength=y,b.hemiLength=_,b.numDirectionalShadows=T,b.numPointShadows=P,b.numSpotShadows=C,b.numSpotMaps=A,b.numLightProbes=F,i.version=Jd++)}function l(h,u){let d=0,f=0,g=0,v=0,p=0;const m=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const T=h[y];if(T.isDirectionalLight){const P=i.directional[d];P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),d++}else if(T.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const P=i.rectArea[v];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const P=i.point[f];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function Ta(s,t){const e=new Qd(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function tf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Ta(s,t),e.set(r,[c])):o>=a.length?(c=new Ta(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class ef extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nf extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rf=`uniform sampler2D shadow_pass;
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
}`;function af(s,t,e){let n=new yr;const i=new pt,r=new pt,o=new Me,a=new ef({depthPacking:3201}),c=new nf,l={},h=e.maxTextureSize,u={0:1,1:0,2:2},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:sf,fragmentShader:rf}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new k(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(C,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const F=s.getRenderTarget(),x=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),X=s.state;X.setBlending(0),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=m!==3&&this.type===3,L=m===3&&this.type!==3;for(let V=0,B=C.length;V<B;V++){const q=C[V],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const J=Y.getFrameExtents();if(i.multiply(J),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,Y.mapSize.y=r.y)),Y.map===null||K===!0||L===!0){const Q=this.type!==3?{minFilter:1003,magFilter:1003}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gn(i.x,i.y,Q),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const et=Y.getViewportCount();for(let Q=0;Q<et;Q++){const it=Y.getViewport(Q);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),X.viewport(o),Y.updateMatrices(q,Q),n=Y.getFrustum(),T(A,D,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===3&&y(Y,D),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(F,x,b)};function y(C,A){const D=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,D,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,D,f,v,null)}function _(C,A,D,F){let x=null;const b=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)x=b;else if(x=D.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=x.uuid,K=A.uuid;let L=l[X];L===void 0&&(L={},l[X]=L);let V=L[K];V===void 0&&(V=x.clone(),L[K]=V,A.addEventListener("dispose",P)),x=V}if(x.visible=A.visible,x.wireframe=A.wireframe,F===3?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=s.properties.get(x);X.light=D}return x}function T(C,A,D,F,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===3)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const K=t.update(C),L=C.material;if(Array.isArray(L)){const V=K.groups;for(let B=0,q=V.length;B<q;B++){const Y=V[B],J=L[Y.materialIndex];if(J&&J.visible){const et=_(C,J,F,x);C.onBeforeShadow(s,C,A,D,K,et,Y),s.renderBufferDirect(D,null,K,et,C,Y),C.onAfterShadow(s,C,A,D,K,et,Y)}}}else if(L.visible){const V=_(C,L,F,x);C.onBeforeShadow(s,C,A,D,K,V,null),s.renderBufferDirect(D,null,K,V,C,null),C.onAfterShadow(s,C,A,D,K,V,null)}}const X=C.children;for(let K=0,L=X.length;K<L;K++)T(X[K],A,D,F,x)}function P(C){C.target.removeEventListener("dispose",P);for(const D in l){const F=l[D],x=C.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}function of(s,t,e){const n=e.isWebGL2;function i(){let N=!1;const ht=new Me;let H=null;const ot=new Me(0,0,0,0);return{setMask:function(dt){H!==dt&&!N&&(s.colorMask(dt,dt,dt,dt),H=dt)},setLocked:function(dt){N=dt},setClear:function(dt,Xt,Qt,Ee,Ve){Ve===!0&&(dt*=Ee,Xt*=Ee,Qt*=Ee),ht.set(dt,Xt,Qt,Ee),ot.equals(ht)===!1&&(s.clearColor(dt,Xt,Qt,Ee),ot.copy(ht))},reset:function(){N=!1,H=null,ot.set(-1,0,0,0)}}}function r(){let N=!1,ht=null,H=null,ot=null;return{setTest:function(dt){dt?mt(s.DEPTH_TEST):Kt(s.DEPTH_TEST)},setMask:function(dt){ht!==dt&&!N&&(s.depthMask(dt),ht=dt)},setFunc:function(dt){if(H!==dt){switch(dt){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}H=dt}},setLocked:function(dt){N=dt},setClear:function(dt){ot!==dt&&(s.clearDepth(dt),ot=dt)},reset:function(){N=!1,ht=null,H=null,ot=null}}}function o(){let N=!1,ht=null,H=null,ot=null,dt=null,Xt=null,Qt=null,Ee=null,Ve=null;return{setTest:function(te){N||(te?mt(s.STENCIL_TEST):Kt(s.STENCIL_TEST))},setMask:function(te){ht!==te&&!N&&(s.stencilMask(te),ht=te)},setFunc:function(te,Re,en){(H!==te||ot!==Re||dt!==en)&&(s.stencilFunc(te,Re,en),H=te,ot=Re,dt=en)},setOp:function(te,Re,en){(Xt!==te||Qt!==Re||Ee!==en)&&(s.stencilOp(te,Re,en),Xt=te,Qt=Re,Ee=en)},setLocked:function(te){N=te},setClear:function(te){Ve!==te&&(s.clearStencil(te),Ve=te)},reset:function(){N=!1,ht=null,H=null,ot=null,dt=null,Xt=null,Qt=null,Ee=null,Ve=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,v=[],p=null,m=!1,y=null,_=null,T=null,P=null,C=null,A=null,D=null,F=new kt(0,0,0),x=0,b=!1,X=null,K=null,L=null,V=null,B=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(et)[1]),Y=J>=1):et.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Y=J>=2);let Q=null,it={};const yt=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),tt=new Me().fromArray(yt),at=new Me().fromArray(G);function gt(N,ht,H,ot){const dt=new Uint8Array(4),Xt=s.createTexture();s.bindTexture(N,Xt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<H;Qt++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(ht,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(ht+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return Xt}const _t={};_t[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(s.DEPTH_TEST),c.setFunc(3),Gt(!1),Ht(1),mt(s.CULL_FACE),bt(0);function mt(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function Kt(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function Pt(N,ht){return f[N]!==ht?(s.bindFramebuffer(N,ht),f[N]=ht,n&&(N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ht),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ht)),!0):!1}function O(N,ht){let H=v,ot=!1;if(N){H=g.get(ht),H===void 0&&(H=[],g.set(ht,H));const dt=N.textures;if(H.length!==dt.length||H[0]!==s.COLOR_ATTACHMENT0){for(let Xt=0,Qt=dt.length;Xt<Qt;Xt++)H[Xt]=s.COLOR_ATTACHMENT0+Xt;H.length=dt.length,ot=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,ot=!0);if(ot)if(e.isWebGL2)s.drawBuffers(H);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ye(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const Tt={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(n)Tt[103]=s.MIN,Tt[104]=s.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(Tt[103]=N.MIN_EXT,Tt[104]=N.MAX_EXT)}const Vt={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function bt(N,ht,H,ot,dt,Xt,Qt,Ee,Ve,te){if(N===0){m===!0&&(Kt(s.BLEND),m=!1);return}if(m===!1&&(mt(s.BLEND),m=!0),N!==5){if(N!==y||te!==b){if((_!==100||C!==100)&&(s.blendEquation(s.FUNC_ADD),_=100,C=100),te)switch(N){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,P=null,A=null,D=null,F.set(0,0,0),x=0,y=N,b=te}return}dt=dt||ht,Xt=Xt||H,Qt=Qt||ot,(ht!==_||dt!==C)&&(s.blendEquationSeparate(Tt[ht],Tt[dt]),_=ht,C=dt),(H!==T||ot!==P||Xt!==A||Qt!==D)&&(s.blendFuncSeparate(Vt[H],Vt[ot],Vt[Xt],Vt[Qt]),T=H,P=ot,A=Xt,D=Qt),(Ee.equals(F)===!1||Ve!==x)&&(s.blendColor(Ee.r,Ee.g,Ee.b,Ve),F.copy(Ee),x=Ve),y=N,b=!1}function qt(N,ht){N.side===2?Kt(s.CULL_FACE):mt(s.CULL_FACE);let H=N.side===1;ht&&(H=!H),Gt(H),N.blending===1&&N.transparent===!1?bt(0):bt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const ot=N.stencilWrite;l.setTest(ot),ot&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),R(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(N){X!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),X=N)}function Ht(N){N!==0?(mt(s.CULL_FACE),N!==K&&(N===1?s.cullFace(s.BACK):N===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Kt(s.CULL_FACE),K=N}function he(N){N!==L&&(Y&&s.lineWidth(N),L=N)}function R(N,ht,H){N?(mt(s.POLYGON_OFFSET_FILL),(V!==ht||B!==H)&&(s.polygonOffset(ht,H),V=ht,B=H)):Kt(s.POLYGON_OFFSET_FILL)}function M(N){N?mt(s.SCISSOR_TEST):Kt(s.SCISSOR_TEST)}function Z(N){N===void 0&&(N=s.TEXTURE0+q-1),Q!==N&&(s.activeTexture(N),Q=N)}function j(N,ht,H){H===void 0&&(Q===null?H=s.TEXTURE0+q-1:H=Q);let ot=it[H];ot===void 0&&(ot={type:void 0,texture:void 0},it[H]=ot),(ot.type!==N||ot.texture!==ht)&&(Q!==H&&(s.activeTexture(H),Q=H),s.bindTexture(N,ht||_t[N]),ot.type=N,ot.texture=ht)}function st(){const N=it[Q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(N){tt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function xt(N){at.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),at.copy(N))}function Yt(N,ht){let H=u.get(ht);H===void 0&&(H=new WeakMap,u.set(ht,H));let ot=H.get(N);ot===void 0&&(ot=s.getUniformBlockIndex(ht,N.name),H.set(N,ot))}function It(N,ht){const ot=u.get(ht).get(N);h.get(ht)!==ot&&(s.uniformBlockBinding(ht,ot,N.__bindingPointIndex),h.set(ht,ot))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Q=null,it={},f={},g=new WeakMap,v=[],p=null,m=!1,y=null,_=null,T=null,P=null,C=null,A=null,D=null,F=new kt(0,0,0),x=0,b=!1,X=null,K=null,L=null,V=null,B=null,tt.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:mt,disable:Kt,bindFramebuffer:Pt,drawBuffers:O,useProgram:ye,setBlending:bt,setMaterial:qt,setFlipSided:Gt,setCullFace:Ht,setLineWidth:he,setPolygonOffset:R,setScissorTest:M,activeTexture:Z,bindTexture:j,unbindTexture:st,compressedTexImage2D:nt,compressedTexImage3D:Nt,texImage2D:Wt,texImage3D:Et,updateUBOMapping:Yt,uniformBlockBinding:It,texStorage2D:rt,texStorage3D:de,texSubImage2D:At,texSubImage3D:lt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ut,scissor:vt,viewport:xt,reset:ie}}function cf(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return g?new OffscreenCanvas(R,M):vs("canvas")}function p(R,M,Z,j){let st=1;const nt=he(R);if((nt.width>j||nt.height>j)&&(st=j/Math.max(nt.width,nt.height)),st<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Nt=M?_s:Math.floor,At=Nt(st*nt.width),lt=Nt(st*nt.height);d===void 0&&(d=v(At,lt));const ut=Z?v(At,lt):d;return ut.width=At,ut.height=lt,ut.getContext("2d").drawImage(R,0,0,At,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+At+"x"+lt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){const M=he(R);return hr(M.width)&&hr(M.height)}function y(R){return a?!1:R.wrapS!==1001||R.wrapT!==1001||R.minFilter!==1003&&R.minFilter!==1006}function _(R,M){return R.generateMipmaps&&M&&R.minFilter!==1003&&R.minFilter!==1006}function T(R){s.generateMipmap(R)}function P(R,M,Z,j,st=!1){if(a===!1)return M;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=M;if(M===s.RED&&(Z===s.FLOAT&&(nt=s.R32F),Z===s.HALF_FLOAT&&(nt=s.R16F),Z===s.UNSIGNED_BYTE&&(nt=s.R8)),M===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(nt=s.R8UI),Z===s.UNSIGNED_SHORT&&(nt=s.R16UI),Z===s.UNSIGNED_INT&&(nt=s.R32UI),Z===s.BYTE&&(nt=s.R8I),Z===s.SHORT&&(nt=s.R16I),Z===s.INT&&(nt=s.R32I)),M===s.RG&&(Z===s.FLOAT&&(nt=s.RG32F),Z===s.HALF_FLOAT&&(nt=s.RG16F),Z===s.UNSIGNED_BYTE&&(nt=s.RG8)),M===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(nt=s.RG8UI),Z===s.UNSIGNED_SHORT&&(nt=s.RG16UI),Z===s.UNSIGNED_INT&&(nt=s.RG32UI),Z===s.BYTE&&(nt=s.RG8I),Z===s.SHORT&&(nt=s.RG16I),Z===s.INT&&(nt=s.RG32I)),M===s.RGBA){const Nt=st?ps:Jt.getTransfer(j);Z===s.FLOAT&&(nt=s.RGBA32F),Z===s.HALF_FLOAT&&(nt=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(nt=Nt===ee?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function C(R,M,Z){return _(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===1003||R===1004||R===1005?s.NEAREST:s.LINEAR}function D(R){const M=R.target;M.removeEventListener("dispose",D),x(M),M.isVideoTexture&&u.delete(M)}function F(R){const M=R.target;M.removeEventListener("dispose",F),X(M)}function x(R){const M=n.get(R);if(M.__webglInit===void 0)return;const Z=R.source,j=f.get(Z);if(j){const st=j[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(R),Object.keys(j).length===0&&f.delete(Z)}n.remove(R)}function b(R){const M=n.get(R);s.deleteTexture(M.__webglTexture);const Z=R.source,j=f.get(Z);delete j[M.__cacheKey],o.memory.textures--}function X(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let st=0;st<M.__webglFramebuffer[j].length;st++)s.deleteFramebuffer(M.__webglFramebuffer[j][st]);else s.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)s.deleteFramebuffer(M.__webglFramebuffer[j]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=R.textures;for(let j=0,st=Z.length;j<st;j++){const nt=n.get(Z[j]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Z[j])}n.remove(R)}let K=0;function L(){K=0}function V(){const R=K;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),K+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const Z=n.get(R);if(R.isVideoTexture&&Gt(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(Z,R,M);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+M)}function Y(R,M){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){at(Z,R,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+M)}function J(R,M){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){at(Z,R,M);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+M)}function et(R,M){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){gt(Z,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+M)}const Q={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},it={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR},yt={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function G(R,M,Z){if(M.type===1015&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(s.texParameteri(R,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,it[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,it[M.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==1001||M.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,A(M.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==1003&&M.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,yt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function tt(R,M){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D));const j=M.source;let st=f.get(j);st===void 0&&(st={},f.set(j,st));const nt=B(M);if(nt!==R.__cacheKey){st[nt]===void 0&&(st[nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[nt].usedTimes++;const Nt=st[R.__cacheKey];Nt!==void 0&&(st[R.__cacheKey].usedTimes--,Nt.usedTimes===0&&b(M)),R.__cacheKey=nt,R.__webglTexture=st[nt].texture}return Z}function at(R,M,Z){let j=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=s.TEXTURE_3D);const st=tt(R,M),nt=M.source;e.bindTexture(j,R.__webglTexture,s.TEXTURE0+Z);const Nt=n.get(nt);if(nt.version!==Nt.__version||st===!0){e.activeTexture(s.TEXTURE0+Z);const At=Jt.getPrimaries(Jt.workingColorSpace),lt=M.colorSpace===Tn?null:Jt.getPrimaries(M.colorSpace),ut=M.colorSpace===Tn||At===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Ut=y(M)&&m(M.image)===!1;let rt=p(M.image,Ut,!1,i.maxTextureSize);rt=Ht(M,rt);const de=m(rt)||a,Wt=r.convert(M.format,M.colorSpace);let Et=r.convert(M.type),vt=P(M.internalFormat,Wt,Et,M.colorSpace,M.isVideoTexture);G(j,M,de);let xt;const Yt=M.mipmaps,It=a&&M.isVideoTexture!==!0&&vt!==36196,ie=Nt.__version===void 0||st===!0,N=nt.dataReady,ht=C(M,rt,de);if(M.isDepthTexture)vt=s.DEPTH_COMPONENT,a?M.type===1015?vt=s.DEPTH_COMPONENT32F:M.type===1014?vt=s.DEPTH_COMPONENT24:M.type===1020?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:M.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===1026&&vt===s.DEPTH_COMPONENT&&M.type!==1012&&M.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=1014,Et=r.convert(M.type)),M.format===1027&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,M.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=1020,Et=r.convert(M.type))),ie&&(It?e.texStorage2D(s.TEXTURE_2D,1,vt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,vt,rt.width,rt.height,0,Wt,Et,null));else if(M.isDataTexture)if(Yt.length>0&&de){It&&ie&&e.texStorage2D(s.TEXTURE_2D,ht,vt,Yt[0].width,Yt[0].height);for(let H=0,ot=Yt.length;H<ot;H++)xt=Yt[H],It?N&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,xt.width,xt.height,Wt,Et,xt.data):e.texImage2D(s.TEXTURE_2D,H,vt,xt.width,xt.height,0,Wt,Et,xt.data);M.generateMipmaps=!1}else It?(ie&&e.texStorage2D(s.TEXTURE_2D,ht,vt,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,Wt,Et,rt.data)):e.texImage2D(s.TEXTURE_2D,0,vt,rt.width,rt.height,0,Wt,Et,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){It&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,vt,Yt[0].width,Yt[0].height,rt.depth);for(let H=0,ot=Yt.length;H<ot;H++)xt=Yt[H],M.format!==1023?Wt!==null?It?N&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,xt.width,xt.height,rt.depth,Wt,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,vt,xt.width,xt.height,rt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,xt.width,xt.height,rt.depth,Wt,Et,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,vt,xt.width,xt.height,rt.depth,0,Wt,Et,xt.data)}else{It&&ie&&e.texStorage2D(s.TEXTURE_2D,ht,vt,Yt[0].width,Yt[0].height);for(let H=0,ot=Yt.length;H<ot;H++)xt=Yt[H],M.format!==1023?Wt!==null?It?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,xt.width,xt.height,Wt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,xt.width,xt.height,Wt,Et,xt.data):e.texImage2D(s.TEXTURE_2D,H,vt,xt.width,xt.height,0,Wt,Et,xt.data)}else if(M.isDataArrayTexture)It?(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,vt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Wt,Et,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,Wt,Et,rt.data);else if(M.isData3DTexture)It?(ie&&e.texStorage3D(s.TEXTURE_3D,ht,vt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Wt,Et,rt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,Wt,Et,rt.data);else if(M.isFramebufferTexture){if(ie)if(It)e.texStorage2D(s.TEXTURE_2D,ht,vt,rt.width,rt.height);else{let H=rt.width,ot=rt.height;for(let dt=0;dt<ht;dt++)e.texImage2D(s.TEXTURE_2D,dt,vt,H,ot,0,Wt,Et,null),H>>=1,ot>>=1}}else if(Yt.length>0&&de){if(It&&ie){const H=he(Yt[0]);e.texStorage2D(s.TEXTURE_2D,ht,vt,H.width,H.height)}for(let H=0,ot=Yt.length;H<ot;H++)xt=Yt[H],It?N&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,Wt,Et,xt):e.texImage2D(s.TEXTURE_2D,H,vt,Wt,Et,xt);M.generateMipmaps=!1}else if(It){if(ie){const H=he(rt);e.texStorage2D(s.TEXTURE_2D,ht,vt,H.width,H.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,Et,rt)}else e.texImage2D(s.TEXTURE_2D,0,vt,Wt,Et,rt);_(M,de)&&T(j),Nt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function gt(R,M,Z){if(M.image.length!==6)return;const j=tt(R,M),st=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Z);const nt=n.get(st);if(st.version!==nt.__version||j===!0){e.activeTexture(s.TEXTURE0+Z);const Nt=Jt.getPrimaries(Jt.workingColorSpace),At=M.colorSpace===Tn?null:Jt.getPrimaries(M.colorSpace),lt=M.colorSpace===Tn||Nt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Ut=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let H=0;H<6;H++)!ut&&!Ut?rt[H]=p(M.image[H],!1,!0,i.maxCubemapSize):rt[H]=Ut?M.image[H].image:M.image[H],rt[H]=Ht(M,rt[H]);const de=rt[0],Wt=m(de)||a,Et=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),xt=P(M.internalFormat,Et,vt,M.colorSpace),Yt=a&&M.isVideoTexture!==!0,It=nt.__version===void 0||j===!0,ie=st.dataReady;let N=C(M,de,Wt);G(s.TEXTURE_CUBE_MAP,M,Wt);let ht;if(ut){Yt&&It&&e.texStorage2D(s.TEXTURE_CUBE_MAP,N,xt,de.width,de.height);for(let H=0;H<6;H++){ht=rt[H].mipmaps;for(let ot=0;ot<ht.length;ot++){const dt=ht[ot];M.format!==1023?Et!==null?Yt?ie&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot,0,0,dt.width,dt.height,Et,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot,xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?ie&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot,0,0,dt.width,dt.height,Et,vt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot,xt,dt.width,dt.height,0,Et,vt,dt.data)}}}else{if(ht=M.mipmaps,Yt&&It){ht.length>0&&N++;const H=he(rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,N,xt,H.width,H.height)}for(let H=0;H<6;H++)if(Ut){Yt?ie&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,rt[H].width,rt[H].height,Et,vt,rt[H].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,xt,rt[H].width,rt[H].height,0,Et,vt,rt[H].data);for(let ot=0;ot<ht.length;ot++){const Xt=ht[ot].image[H].image;Yt?ie&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot+1,0,0,Xt.width,Xt.height,Et,vt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot+1,xt,Xt.width,Xt.height,0,Et,vt,Xt.data)}}else{Yt?ie&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Et,vt,rt[H]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,xt,Et,vt,rt[H]);for(let ot=0;ot<ht.length;ot++){const dt=ht[ot];Yt?ie&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot+1,0,0,Et,vt,dt.image[H]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ot+1,xt,Et,vt,dt.image[H])}}}_(M,Wt)&&T(s.TEXTURE_CUBE_MAP),nt.__version=st.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function _t(R,M,Z,j,st,nt){const Nt=r.convert(Z.format,Z.colorSpace),At=r.convert(Z.type),lt=P(Z.internalFormat,Nt,At,Z.colorSpace);if(!n.get(M).__hasExternalTextures){const Ut=Math.max(1,M.width>>nt),rt=Math.max(1,M.height>>nt);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,nt,lt,Ut,rt,M.depth,0,Nt,At,null):e.texImage2D(st,nt,lt,Ut,rt,0,Nt,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),qt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,st,n.get(Z).__webglTexture,0,bt(M)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,st,n.get(Z).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(R,M,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let j=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Z||qt(M)){const st=M.depthTexture;st&&st.isDepthTexture&&(st.type===1015?j=s.DEPTH_COMPONENT32F:st.type===1014&&(j=s.DEPTH_COMPONENT24));const nt=bt(M);qt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,j,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,j,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const j=bt(M);Z&&qt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,M.width,M.height):qt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const j=M.textures;for(let st=0;st<j.length;st++){const nt=j[st],Nt=r.convert(nt.format,nt.colorSpace),At=r.convert(nt.type),lt=P(nt.internalFormat,Nt,At,nt.colorSpace),ut=bt(M);Z&&qt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,lt,M.width,M.height):qt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,lt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,lt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Kt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,st=bt(M);if(M.depthTexture.format===1026)qt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===1027)qt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(R){const M=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Kt(M.__webglFramebuffer,R)}else if(Z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=s.createRenderbuffer(),mt(M.__webglDepthbuffer[j],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),mt(M.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function O(R,M,Z){const j=n.get(R);M!==void 0&&_t(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Pt(R)}function ye(R){const M=R.texture,Z=n.get(R),j=n.get(M);R.addEventListener("dispose",F);const st=R.textures,nt=R.isWebGLCubeRenderTarget===!0,Nt=st.length>1,At=m(R)||a;if(Nt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=M.version,o.memory.textures++),nt){Z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[lt]=[];for(let ut=0;ut<M.mipmaps.length;ut++)Z.__webglFramebuffer[lt][ut]=s.createFramebuffer()}else Z.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)Z.__webglFramebuffer[lt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Nt)if(i.drawBuffers)for(let lt=0,ut=st.length;lt<ut;lt++){const Ut=n.get(st[lt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&qt(R)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let lt=0;lt<st.length;lt++){const ut=st[lt];Z.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[lt]);const Ut=r.convert(ut.format,ut.colorSpace),rt=r.convert(ut.type),de=P(ut.internalFormat,Ut,rt,ut.colorSpace,R.isXRRenderTarget===!0),Wt=bt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(Z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),G(s.TEXTURE_CUBE_MAP,M,At);for(let lt=0;lt<6;lt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)_t(Z.__webglFramebuffer[lt][ut],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else _t(Z.__webglFramebuffer[lt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);_(M,At)&&T(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let lt=0,ut=st.length;lt<ut;lt++){const Ut=st[lt],rt=n.get(Ut);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),G(s.TEXTURE_2D,Ut,At),_t(Z.__webglFramebuffer,R,Ut,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),_(Ut,At)&&T(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?lt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,j.__webglTexture),G(lt,M,At),a&&M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)_t(Z.__webglFramebuffer[ut],R,M,s.COLOR_ATTACHMENT0,lt,ut);else _t(Z.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,lt,0);_(M,At)&&T(lt),e.unbindTexture()}R.depthBuffer&&Pt(R)}function Tt(R){const M=m(R)||a,Z=R.textures;for(let j=0,st=Z.length;j<st;j++){const nt=Z[j];if(_(nt,M)){const Nt=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(nt).__webglTexture;e.bindTexture(Nt,At),T(Nt),e.unbindTexture()}}}function Vt(R){if(a&&R.samples>0&&qt(R)===!1){const M=R.textures,Z=R.width,j=R.height;let st=s.COLOR_BUFFER_BIT;const nt=[],Nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(R),lt=M.length>1;if(lt)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){nt.push(s.COLOR_ATTACHMENT0+ut),R.depthBuffer&&nt.push(Nt);const Ut=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Ut===!1&&(R.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),lt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[ut]),Ut===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Nt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Nt])),lt){const rt=n.get(M[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,Z,j,0,0,Z,j,st,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,At.__webglColorRenderbuffer[ut]);const Ut=n.get(M[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function bt(R){return Math.min(i.maxSamples,R.samples)}function qt(R){const M=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Gt(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Ht(R,M){const Z=R.colorSpace,j=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===1035||Z!==An&&Z!==Tn&&(Jt.getTransfer(Z)===ee?a===!1?t.has("EXT_sRGB")===!0&&j===1023?(R.format=1035,R.minFilter=1006,R.generateMipmaps=!1):M=ao.sRGBToLinear(M):(j!==1023||st!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),M}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=O,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=qt}function lf(s,t,e){const n=e.isWebGL2;function i(r,o=Tn){let a;const c=Jt.getTransfer(o);if(r===1009)return s.UNSIGNED_BYTE;if(r===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return s.BYTE;if(r===1011)return s.SHORT;if(r===1012)return s.UNSIGNED_SHORT;if(r===1013)return s.INT;if(r===1014)return s.UNSIGNED_INT;if(r===1015)return s.FLOAT;if(r===1016)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return s.ALPHA;if(r===1023)return s.RGBA;if(r===1024)return s.LUMINANCE;if(r===1025)return s.LUMINANCE_ALPHA;if(r===1026)return s.DEPTH_COMPONENT;if(r===1027)return s.DEPTH_STENCIL;if(r===1035)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return s.RED;if(r===1029)return s.RED_INTEGER;if(r===1030)return s.RG;if(r===1031)return s.RG_INTEGER;if(r===1033)return s.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779)if(c===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===35840||r===35841||r===35842||r===35843)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===36196)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===37492||r===37496)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===37492)return c===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===37808)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===36492||r===36494||r===36495)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===36492)return c===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===36283||r===36284||r===36285||r===36286)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===1020?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class hf extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ct extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uf={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const df=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ff=`
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

}`;class pf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new bn({extensions:{fragDepth:!0},vertexShader:df,fragmentShader:ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new k(new on(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class mf extends ui{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new pf,p=e.getContextAttributes();let m=null,y=null;const _=[],T=[],P=new pt;let C=null;const A=new Ye;A.layers.enable(1),A.viewport=new Me;const D=new Ye;D.layers.enable(2),D.viewport=new Me;const F=[A,D],x=new hf;x.layers.enable(1),x.layers.enable(2);let b=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let tt=_[G];return tt===void 0&&(tt=new er,_[G]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(G){let tt=_[G];return tt===void 0&&(tt=new er,_[G]=tt),tt.getGripSpace()},this.getHand=function(G){let tt=_[G];return tt===void 0&&(tt=new er,_[G]=tt),tt.getHandSpace()};function K(G){const tt=T.indexOf(G.inputSource);if(tt===-1)return;const at=_[tt];at!==void 0&&(at.update(G.inputSource,G.frame,l||o),at.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",V);for(let G=0;G<_.length;G++){const tt=T[G];tt!==null&&(T[G]=null,_[G].disconnect(tt))}b=null,X=null,v.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",L),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gn(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,at=null,gt=null;p.depth&&(gt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?1027:1026,at=p.stencil?1020:1014);const _t={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Gn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Mo(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const mt=t.properties.get(y);mt.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(G){for(let tt=0;tt<G.removed.length;tt++){const at=G.removed[tt],gt=T.indexOf(at);gt>=0&&(T[gt]=null,_[gt].disconnect(at))}for(let tt=0;tt<G.added.length;tt++){const at=G.added[tt];let gt=T.indexOf(at);if(gt===-1){for(let mt=0;mt<_.length;mt++)if(mt>=T.length){T.push(at),gt=mt;break}else if(T[mt]===null){T[mt]=at,gt=mt;break}if(gt===-1)break}const _t=_[gt];_t&&_t.connect(at)}}const B=new I,q=new I;function Y(G,tt,at){B.setFromMatrixPosition(tt.matrixWorld),q.setFromMatrixPosition(at.matrixWorld);const gt=B.distanceTo(q),_t=tt.projectionMatrix.elements,mt=at.projectionMatrix.elements,Kt=_t[14]/(_t[10]-1),Pt=_t[14]/(_t[10]+1),O=(_t[9]+1)/_t[5],ye=(_t[9]-1)/_t[5],Tt=(_t[8]-1)/_t[0],Vt=(mt[8]+1)/mt[0],bt=Kt*Tt,qt=Kt*Vt,Gt=gt/(-Tt+Vt),Ht=Gt*-Tt;tt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ht),G.translateZ(Gt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const he=Kt+Gt,R=Pt+Gt,M=bt-Ht,Z=qt+(gt-Ht),j=O*Pt/R*he,st=ye*Pt/R*he;G.projectionMatrix.makePerspective(M,Z,j,st,he,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function J(G,tt){tt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(tt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),x.near=D.near=A.near=G.near,x.far=D.far=A.far=G.far,(b!==x.near||X!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,X=x.far,A.near=b,A.far=X,D.near=b,D.far=X,A.updateProjectionMatrix(),D.updateProjectionMatrix(),G.updateProjectionMatrix());const tt=G.parent,at=x.cameras;J(x,tt);for(let gt=0;gt<at.length;gt++)J(at[gt],tt);at.length===2?Y(x,A,D):x.projectionMatrix.copy(A.projectionMatrix),et(G,x,tt)};function et(G,tt,at){at===null?G.matrix.copy(tt.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(tt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ii*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let Q=null;function it(G,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let gt=!1;at.length!==x.cameras.length&&(x.cameras.length=0,gt=!0);for(let mt=0;mt<at.length;mt++){const Kt=at[mt];let Pt=null;if(f!==null)Pt=f.getViewport(Kt);else{const ye=u.getViewSubImage(d,Kt);Pt=ye.viewport,mt===0&&(t.setRenderTargetTextures(y,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(y))}let O=F[mt];O===void 0&&(O=new Ye,O.layers.enable(mt),O.viewport=new Me,F[mt]=O),O.matrix.fromArray(Kt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Kt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),gt===!0&&x.cameras.push(O)}const _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const mt=u.getDepthInformation(at[0]);mt&&mt.isValid&&mt.texture&&v.init(t,mt,i.renderState)}}for(let at=0;at<_.length;at++){const gt=T[at],_t=_[at];gt!==null&&_t!==void 0&&_t.update(gt,tt,l||o)}v.render(t,x),Q&&Q(G,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const yt=new vo;yt.setAnimationLoop(it),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}}const Un=new cn,gf=new oe;function _f(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mo(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,_,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,T=y.envMapRotation;if(_&&(p.envMap.value=_,Un.copy(T),Un.x*=-1,Un.y*=-1,Un.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),p.envMapRotation.value.setFromMatrix4(gf.makeRotationFromEuler(Un)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const P=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*P,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vf(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const T=_.program;n.uniformBlockBinding(y,T)}function l(y,_){let T=i[y.id];T===void 0&&(g(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",p));const P=_.program;n.updateUBOMapping(y,P);const C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){const _=u();y.__bindingPointIndex=_;const T=s.createBuffer(),P=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,T),T}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],T=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,A=T.length;C<A;C++){const D=Array.isArray(T[C])?T[C]:[T[C]];for(let F=0,x=D.length;F<x;F++){const b=D[F];if(f(b,C,F,P)===!0){const X=b.__offset,K=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let V=0;V<K.length;V++){const B=K[V],q=v(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,X+L,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,T,P){const C=y.value,A=_+"_"+T;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const D=P[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(y){const _=y.uniforms;let T=0;const P=16;for(let A=0,D=_.length;A<D;A++){const F=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,b=F.length;x<b;x++){const X=F[x],K=Array.isArray(X.value)?X.value:[X.value];for(let L=0,V=K.length;L<V;L++){const B=K[L],q=v(B),Y=T%P;Y!==0&&P-Y<q.boundary&&(T+=P-Y),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=q.storage}}}const C=T%P;return C>0&&(T+=P-C),y.__size=T,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class bo{constructor(t={}){const{canvas:e=ac(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let T=!1,P=0,C=0,A=null,D=-1,F=null;const x=new Me,b=new Me;let X=null;const K=new kt(0);let L=0,V=e.width,B=e.height,q=1,Y=null,J=null;const et=new Me(0,0,V,B),Q=new Me(0,0,V,B);let it=!1;const yt=new yr;let G=!1,tt=!1,at=null;const gt=new oe,_t=new pt,mt=new I,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return A===null?q:1}let O=n;function ye(E,U){for(let W=0;W<E.length;W++){const $=E[W],z=e.getContext($,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xr}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),O=ye(U,E),O===null)throw ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Tt,Vt,bt,qt,Gt,Ht,he,R,M,Z,j,st,nt,Nt,At,lt,ut,Ut,rt,de,Wt,Et,vt,xt;function Yt(){Tt=new Eu(O),Vt=new _u(O,Tt,t),Tt.init(Vt),Et=new lf(O,Tt,Vt),bt=new of(O,Tt,Vt),qt=new bu(O),Gt=new qd,Ht=new cf(O,Tt,bt,Gt,Vt,Et,qt),he=new xu(_),R=new yu(_),M=new Ic(O,Vt),vt=new mu(O,Tt,M,Vt),Z=new Tu(O,M,qt,vt),j=new Pu(O,Z,M,qt),rt=new Ru(O,Vt,Ht),lt=new vu(Gt),st=new Xd(_,he,R,Tt,Vt,vt,lt),nt=new _f(_,Gt),Nt=new $d,At=new tf(Tt,Vt),Ut=new pu(_,he,R,bt,j,d,c),ut=new af(_,j,Vt),xt=new vf(O,qt,Vt,bt),de=new gu(O,Tt,qt,Vt),Wt=new wu(O,Tt,qt,Vt),qt.programs=st.programs,_.capabilities=Vt,_.extensions=Tt,_.properties=Gt,_.renderLists=Nt,_.shadowMap=ut,_.state=bt,_.info=qt}Yt();const It=new mf(_,O);this.xr=It,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(V,B,!1))},this.getSize=function(E){return E.set(V,B)},this.setSize=function(E,U,W=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,B=U,e.width=Math.floor(E*q),e.height=Math.floor(U*q),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*q,B*q).floor()},this.setDrawingBufferSize=function(E,U,W){V=E,B=U,q=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,U,W,$){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,U,W,$),bt.viewport(x.copy(et).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,U,W,$){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,U,W,$),bt.scissor(b.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){bt.setScissorTest(it=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(E=!0,U=!0,W=!0){let $=0;if(E){let z=!1;if(A!==null){const ft=A.texture.format;z=ft===1033||ft===1031||ft===1029}if(z){const ft=A.texture.type,Mt=ft===1009||ft===1014||ft===1012||ft===1020||ft===1017||ft===1018,wt=Ut.getClearColor(),Rt=Ut.getClearAlpha(),zt=wt.r,Lt=wt.g,Dt=wt.b;Mt?(f[0]=zt,f[1]=Lt,f[2]=Dt,f[3]=Rt,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=zt,g[1]=Lt,g[2]=Dt,g[3]=Rt,O.clearBufferiv(O.COLOR,0,g))}else $|=O.COLOR_BUFFER_BIT}U&&($|=O.DEPTH_BUFFER_BIT),W&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Nt.dispose(),At.dispose(),Gt.dispose(),he.dispose(),R.dispose(),j.dispose(),vt.dispose(),xt.dispose(),st.dispose(),It.dispose(),It.removeEventListener("sessionstart",Ve),It.removeEventListener("sessionend",te),at&&(at.dispose(),at=null),Re.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=qt.autoReset,U=ut.enabled,W=ut.autoUpdate,$=ut.needsUpdate,z=ut.type;Yt(),qt.autoReset=E,ut.enabled=U,ut.autoUpdate=W,ut.needsUpdate=$,ut.type=z}function ht(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function H(E){const U=E.target;U.removeEventListener("dispose",H),ot(U)}function ot(E){dt(E),Gt.remove(E)}function dt(E){const U=Gt.get(E).programs;U!==void 0&&(U.forEach(function(W){st.releaseProgram(W)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,$,z,ft){U===null&&(U=Kt);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,wt=Go(E,U,W,$,z);bt.setMaterial($,Mt);let Rt=W.index,zt=1;if($.wireframe===!0){if(Rt=Z.getWireframeAttribute(W),Rt===void 0)return;zt=2}const Lt=W.drawRange,Dt=W.attributes.position;let ue=Lt.start*zt,Ue=(Lt.start+Lt.count)*zt;ft!==null&&(ue=Math.max(ue,ft.start*zt),Ue=Math.min(Ue,(ft.start+ft.count)*zt)),Rt!==null?(ue=Math.max(ue,0),Ue=Math.min(Ue,Rt.count)):Dt!=null&&(ue=Math.max(ue,0),Ue=Math.min(Ue,Dt.count));const _e=Ue-ue;if(_e<0||_e===1/0)return;vt.setup(z,$,wt,W,Rt);let hn,re=de;if(Rt!==null&&(hn=M.get(Rt),re=Wt,re.setIndex(hn)),z.isMesh)$.wireframe===!0?(bt.setLineWidth($.wireframeLinewidth*Pt()),re.setMode(O.LINES)):re.setMode(O.TRIANGLES);else if(z.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),bt.setLineWidth(Ft*Pt()),z.isLineSegments?re.setMode(O.LINES):z.isLineLoop?re.setMode(O.LINE_LOOP):re.setMode(O.LINE_STRIP)}else z.isPoints?re.setMode(O.POINTS):z.isSprite&&re.setMode(O.TRIANGLES);if(z.isBatchedMesh)re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)re.renderInstances(ue,_e,z.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,As=Math.min(W.instanceCount,Ft);re.renderInstances(ue,_e,As)}else re.render(ue,_e)};function Xt(E,U,W){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,ki(E,U,W),E.side=0,E.needsUpdate=!0,ki(E,U,W),E.side=2):ki(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),p=At.get(W),p.init(),y.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(_._useLegacyLights);const $=new Set;return E.traverse(function(z){const ft=z.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){const wt=ft[Mt];Xt(wt,W,z),$.add(wt)}else Xt(ft,W,z),$.add(ft)}),y.pop(),p=null,$},this.compileAsync=function(E,U,W=null){const $=this.compile(E,U,W);return new Promise(z=>{function ft(){if($.forEach(function(Mt){Gt.get(Mt).currentProgram.isReady()&&$.delete(Mt)}),$.size===0){z(E);return}setTimeout(ft,10)}Tt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Qt=null;function Ee(E){Qt&&Qt(E)}function Ve(){Re.stop()}function te(){Re.start()}const Re=new vo;Re.setAnimationLoop(Ee),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(E){Qt=E,It.setAnimationLoop(E),E===null?Re.stop():Re.start()},It.addEventListener("sessionstart",Ve),It.addEventListener("sessionend",te),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(U),U=It.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,A),p=At.get(E,y.length),p.init(),y.push(p),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),yt.setFromProjectionMatrix(gt),tt=this.localClippingEnabled,G=lt.init(this.clippingPlanes,tt),v=Nt.get(E,m.length),v.init(),m.push(v),en(E,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,J),this.info.render.frame++,G===!0&&lt.beginShadows();const W=p.state.shadowsArray;if(ut.render(W,E,U),G===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1)&&Ut.render(v,E),p.setupLights(_._useLegacyLights),U.isArrayCamera){const $=U.cameras;for(let z=0,ft=$.length;z<ft;z++){const Mt=$[z];Lr(v,E,Mt,Mt.viewport)}}else Lr(v,E,U);A!==null&&(Ht.updateMultisampleRenderTarget(A),Ht.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,U),vt.resetDefaultState(),D=-1,F=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function en(E,U,W,$){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||yt.intersectsSprite(E)){$&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const Mt=j.update(E),wt=E.material;wt.visible&&v.push(E,Mt,wt,W,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||yt.intersectsObject(E))){const Mt=j.update(E),wt=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),mt.copy(Mt.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(wt)){const Rt=Mt.groups;for(let zt=0,Lt=Rt.length;zt<Lt;zt++){const Dt=Rt[zt],ue=wt[Dt.materialIndex];ue&&ue.visible&&v.push(E,Mt,ue,W,mt.z,Dt)}}else wt.visible&&v.push(E,Mt,wt,W,mt.z,null)}}const ft=E.children;for(let Mt=0,wt=ft.length;Mt<wt;Mt++)en(ft[Mt],U,W,$)}function Lr(E,U,W,$){const z=E.opaque,ft=E.transmissive,Mt=E.transparent;p.setupLightsView(W),G===!0&&lt.setGlobalState(_.clippingPlanes,W),ft.length>0&&ko(z,ft,U,W),$&&bt.viewport(x.copy($)),z.length>0&&Oi(z,U,W),ft.length>0&&Oi(ft,U,W),Mt.length>0&&Oi(Mt,U,W),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ko(E,U,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ft=Vt.isWebGL2;at===null&&(at=new Gn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:ft?4:0})),_.getDrawingBufferSize(_t),ft?at.setSize(_t.x,_t.y):at.setSize(_s(_t.x),_s(_t.y));const Mt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(K),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const wt=_.toneMapping;_.toneMapping=0,Oi(E,W,$),Ht.updateMultisampleRenderTarget(at),Ht.updateRenderTargetMipmap(at);let Rt=!1;for(let zt=0,Lt=U.length;zt<Lt;zt++){const Dt=U[zt],ue=Dt.object,Ue=Dt.geometry,_e=Dt.material,hn=Dt.group;if(_e.side===2&&ue.layers.test($.layers)){const re=_e.side;_e.side=1,_e.needsUpdate=!0,Ir(ue,W,$,Ue,_e,hn),_e.side=re,_e.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ht.updateMultisampleRenderTarget(at),Ht.updateRenderTargetMipmap(at)),_.setRenderTarget(Mt),_.setClearColor(K,L),_.toneMapping=wt}function Oi(E,U,W){const $=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ft=E.length;z<ft;z++){const Mt=E[z],wt=Mt.object,Rt=Mt.geometry,zt=$===null?Mt.material:$,Lt=Mt.group;wt.layers.test(W.layers)&&Ir(wt,U,W,Rt,zt,Lt)}}function Ir(E,U,W,$,z,ft){E.onBeforeRender(_,U,W,$,z,ft),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,U,W,$,E,ft),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,_.renderBufferDirect(W,U,$,z,E,ft),z.side=0,z.needsUpdate=!0,_.renderBufferDirect(W,U,$,z,E,ft),z.side=2):_.renderBufferDirect(W,U,$,z,E,ft),E.onAfterRender(_,U,W,$,z,ft)}function ki(E,U,W){U.isScene!==!0&&(U=Kt);const $=Gt.get(E),z=p.state.lights,ft=p.state.shadowsArray,Mt=z.state.version,wt=st.getParameters(E,z.state,ft,U,W),Rt=st.getProgramCacheKey(wt);let zt=$.programs;$.environment=E.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(E.isMeshStandardMaterial?R:he).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",H),zt=new Map,$.programs=zt);let Lt=zt.get(Rt);if(Lt!==void 0){if($.currentProgram===Lt&&$.lightsStateVersion===Mt)return Nr(E,wt),Lt}else wt.uniforms=st.getUniforms(E),E.onBuild(W,wt,_),E.onBeforeCompile(wt,_),Lt=st.acquireProgram(wt,Rt),zt.set(Rt,Lt),$.uniforms=wt.uniforms;const Dt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=lt.uniform),Nr(E,wt),$.needsLights=Vo(E),$.lightsStateVersion=Mt,$.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMap.value=z.state.directionalShadowMap,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotShadowMap.value=z.state.spotShadowMap,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMap.value=z.state.pointShadowMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Lt,$.uniformsList=null,Lt}function Dr(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=fs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Nr(E,U){const W=Gt.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Go(E,U,W,$,z){U.isScene!==!0&&(U=Kt),Ht.resetTextureUnits();const ft=U.fog,Mt=$.isMeshStandardMaterial?U.environment:null,wt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:An,Rt=($.isMeshStandardMaterial?R:he).get($.envMap||Mt),zt=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Lt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Dt=!!W.morphAttributes.position,ue=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color;let _e=0;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=_.toneMapping);const hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=hn!==void 0?hn.length:0,Ft=Gt.get($),As=p.state.lights;if(G===!0&&(tt===!0||E!==F)){const He=E===F&&$.id===D;lt.setState($,E,He)}let se=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==As.state.version||Ft.outputColorSpace!==wt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Rt||$.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==lt.numPlanes||Ft.numIntersection!==lt.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==Lt||Ft.morphTargets!==Dt||Ft.morphNormals!==ue||Ft.morphColors!==Ue||Ft.toneMapping!==_e||Vt.isWebGL2===!0&&Ft.morphTargetsCount!==re)&&(se=!0):(se=!0,Ft.__version=$.version);let Cn=Ft.currentProgram;se===!0&&(Cn=ki($,U,z));let Ur=!1,mi=!1,Cs=!1;const Te=Cn.getUniforms(),Rn=Ft.uniforms;if(bt.useProgram(Cn.program)&&(Ur=!0,mi=!0,Cs=!0),$.id!==D&&(D=$.id,mi=!0),Ur||F!==E){Te.setValue(O,"projectionMatrix",E.projectionMatrix),Te.setValue(O,"viewMatrix",E.matrixWorldInverse);const He=Te.map.cameraPosition;He!==void 0&&He.setValue(O,mt.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&Te.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Te.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,mi=!0,Cs=!0)}if(z.isSkinnedMesh){Te.setOptional(O,z,"bindMatrix"),Te.setOptional(O,z,"bindMatrixInverse");const He=z.skeleton;He&&(Vt.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Te.setValue(O,"boneTexture",He.boneTexture,Ht)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Te.setOptional(O,z,"batchingTexture"),Te.setValue(O,"batchingTexture",z._matricesTexture,Ht));const Rs=W.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&Vt.isWebGL2===!0)&&rt.update(z,W,Cn),(mi||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,Te.setValue(O,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Rn.envMap.value=Rt,Rn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),mi&&(Te.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&zo(Rn,Cs),ft&&$.fog===!0&&nt.refreshFogUniforms(Rn,ft),nt.refreshMaterialUniforms(Rn,$,q,B,at),fs.upload(O,Dr(Ft),Rn,Ht)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(fs.upload(O,Dr(Ft),Rn,Ht),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Te.setValue(O,"center",z.center),Te.setValue(O,"modelViewMatrix",z.modelViewMatrix),Te.setValue(O,"normalMatrix",z.normalMatrix),Te.setValue(O,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const He=$.uniformsGroups;for(let Ps=0,Ho=He.length;Ps<Ho;Ps++)if(Vt.isWebGL2){const Fr=He[Ps];xt.update(Fr,Cn),xt.bind(Fr,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function zo(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Vo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,W){Gt.get(E.texture).__webglTexture=U,Gt.get(E.depthTexture).__webglTexture=W;const $=Gt.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const W=Gt.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){A=E,P=U,C=W;let $=!0,z=null,ft=!1,Mt=!1;if(E){const Rt=Gt.get(E);Rt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Rt.__webglFramebuffer===void 0?Ht.setupRenderTarget(E):Rt.__hasExternalTextures&&Ht.rebindTextures(E,Gt.get(E.texture).__webglTexture,Gt.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Lt=Gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?z=Lt[U][W]:z=Lt[U],ft=!0):Vt.isWebGL2&&E.samples>0&&Ht.useMultisampledRTT(E)===!1?z=Gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?z=Lt[W]:z=Lt,x.copy(E.viewport),b.copy(E.scissor),X=E.scissorTest}else x.copy(et).multiplyScalar(q).floor(),b.copy(Q).multiplyScalar(q).floor(),X=it;if(bt.bindFramebuffer(O.FRAMEBUFFER,z)&&Vt.drawBuffers&&$&&bt.drawBuffers(E,z),bt.viewport(x),bt.scissor(b),bt.setScissorTest(X),ft){const Rt=Gt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,W)}else if(Mt){const Rt=Gt.get(E.texture),zt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,W||0,zt)}D=-1},this.readRenderTargetPixels=function(E,U,W,$,z,ft,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){bt.bindFramebuffer(O.FRAMEBUFFER,wt);try{const Rt=E.texture,zt=Rt.format,Lt=Rt.type;if(zt!==1023&&Et.convert(zt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Lt===1016&&(Tt.has("EXT_color_buffer_half_float")||Vt.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(Lt!==1009&&Et.convert(Lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===1015&&(Vt.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-$&&W>=0&&W<=E.height-z&&O.readPixels(U,W,$,z,Et.convert(zt),Et.convert(Lt),ft)}finally{const Rt=A!==null?Gt.get(A).__webglFramebuffer:null;bt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(E,U,W=0){const $=Math.pow(2,-W),z=Math.floor(U.image.width*$),ft=Math.floor(U.image.height*$);Ht.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,E.x,E.y,z,ft),bt.unbindTexture()},this.copyTextureToTexture=function(E,U,W,$=0){const z=U.image.width,ft=U.image.height,Mt=Et.convert(W.format),wt=Et.convert(W.type);Ht.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,E.x,E.y,z,ft,Mt,wt,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,$,E.x,E.y,Mt,wt,U.image),$===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,W,$,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=Math.round(E.max.x-E.min.x),Mt=Math.round(E.max.y-E.min.y),wt=E.max.z-E.min.z+1,Rt=Et.convert($.format),zt=Et.convert($.type);let Lt;if($.isData3DTexture)Ht.setTexture3D($,0),Lt=O.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Ht.setTexture2DArray($,0),Lt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Dt=O.getParameter(O.UNPACK_ROW_LENGTH),ue=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ue=O.getParameter(O.UNPACK_SKIP_PIXELS),_e=O.getParameter(O.UNPACK_SKIP_ROWS),hn=O.getParameter(O.UNPACK_SKIP_IMAGES),re=W.isCompressedTexture?W.mipmaps[z]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(Lt,z,U.x,U.y,U.z,ft,Mt,wt,Rt,zt,re.data):$.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,z,U.x,U.y,U.z,ft,Mt,wt,Rt,re.data):O.texSubImage3D(Lt,z,U.x,U.y,U.z,ft,Mt,wt,Rt,zt,re),O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),O.pixelStorei(O.UNPACK_SKIP_ROWS,_e),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hn),z===0&&$.generateMipmaps&&O.generateMipmap(Lt),bt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ht.setTextureCube(E,0):E.isData3DTexture?Ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ht.setTexture2DArray(E,0):Ht.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,bt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mr?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Es?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xf extends bo{}xf.prototype.isWebGL1Renderer=!0;class Tr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Tr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mf extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dr extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wa=new oe,fr=new lo,os=new Ts,cs=new I;class ba extends Se{constructor(t=new Ce,e=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),os.radius+=r,t.ray.intersectsSphere(os)===!1)return;wa.copy(i).invert(),fr.copy(t.ray).applyMatrix4(wa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=l.getX(g);cs.fromBufferAttribute(u,p),Aa(cs,p,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)cs.fromBufferAttribute(u,g),Aa(cs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Aa(s,t,e,n,i,r,o){const a=fr.distanceSqToPoint(s);if(a<e){const c=new I;fr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new pt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],r=[],o=[],a=new I,c=new oe;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(xe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wr extends ln{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Sf extends wr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function br(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ls=new I,nr=new br,ir=new br,sr=new br;class yf extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ls.subVectors(i[0],i[1]).add(i[0]),l=ls);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ls.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ls),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),nr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,p),ir.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,p),sr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(nr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ir.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(nr.calc(c),ir.calc(c),sr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ca(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Ef(s,t){const e=1-s;return e*e*t}function Tf(s,t){return 2*(1-s)*s*t}function wf(s,t){return s*s*t}function bi(s,t,e,n){return Ef(s,t)+Tf(s,e)+wf(s,n)}function bf(s,t){const e=1-s;return e*e*e*t}function Af(s,t){const e=1-s;return 3*e*e*s*t}function Cf(s,t){return 3*(1-s)*s*s*t}function Rf(s,t){return s*s*s*t}function Ai(s,t,e,n,i){return bf(s,t)+Af(s,e)+Cf(s,n)+Rf(s,i)}class Ao extends ln{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ai(t,i.x,r.x,o.x,a.x),Ai(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pf extends ln{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ai(t,i.x,r.x,o.x,a.x),Ai(t,i.y,r.y,o.y,a.y),Ai(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Co extends ln{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends ln{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ro extends ln{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(bi(t,i.x,r.x,o.x),bi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends ln{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(bi(t,i.x,r.x,o.x),bi(t,i.y,r.y,o.y),bi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Po extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ca(a,c.x,l.x,h.x,u.x),Ca(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var Ra=Object.freeze({__proto__:null,ArcCurve:Sf,CatmullRomCurve3:yf,CubicBezierCurve:Ao,CubicBezierCurve3:Pf,EllipseCurve:wr,LineCurve:Co,LineCurve3:Lf,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:If,SplineCurve:Po});class Df extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ra[i.type]().fromJSON(i))}return this}}class Pa extends Df{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Co(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ro(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Ao(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new wr(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class St extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function y(){const T=new I,P=new I;let C=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const F=[],x=D/r,b=x*(e-t)+t;for(let X=0;X<=i;X++){const K=X/i,L=K*c+a,V=Math.sin(L),B=Math.cos(L);P.x=b*V,P.y=-x*n+p,P.z=b*B,u.push(P.x,P.y,P.z),T.set(V,A,B).normalize(),d.push(T.x,T.y,T.z),f.push(K,1-x),F.push(g++)}v.push(F)}for(let D=0;D<i;D++)for(let F=0;F<r;F++){const x=v[F][D],b=v[F+1][D],X=v[F+1][D+1],K=v[F][D+1];h.push(x,b,K),h.push(b,X,K),C+=6}l.addGroup(m,C,0),m+=C}function _(T){const P=g,C=new pt,A=new I;let D=0;const F=T===!0?t:e,x=T===!0?1:-1;for(let X=1;X<=i;X++)u.push(0,p*x,0),d.push(0,x,0),f.push(.5,.5),g++;const b=g;for(let X=0;X<=i;X++){const L=X/i*c+a,V=Math.cos(L),B=Math.sin(L);A.x=F*B,A.y=p*x,A.z=F*V,u.push(A.x,A.y,A.z),d.push(0,x,0),C.x=V*.5+.5,C.y=B*.5*x+.5,f.push(C.x,C.y),g++}for(let X=0;X<i;X++){const K=P+X,L=b+X;T===!0?h.push(L,L+1,K):h.push(L+1,L,K),D+=3}l.addGroup(m,D,T===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class le extends St{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new le(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ar extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new I,T=new I,P=new I;for(let C=0;C<e.length;C+=3)f(e[C+0],_),f(e[C+1],T),f(e[C+2],P),c(_,T,P,y)}function c(y,_,T,P){const C=P+1,A=[];for(let D=0;D<=C;D++){A[D]=[];const F=y.clone().lerp(T,D/C),x=_.clone().lerp(T,D/C),b=C-D;for(let X=0;X<=b;X++)X===0&&D===C?A[D][X]=F:A[D][X]=F.clone().lerp(x,X/b)}for(let D=0;D<C;D++)for(let F=0;F<2*(C-D)-1;F++){const x=Math.floor(F/2);F%2===0?(d(A[D][x+1]),d(A[D+1][x]),d(A[D][x])):(d(A[D][x+1]),d(A[D+1][x+1]),d(A[D+1][x]))}}function l(y){const _=new I;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(y),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){const y=new I;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const T=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;o.push(T,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const _=o[y+0],T=o[y+2],P=o[y+4],C=Math.max(_,T,P),A=Math.min(_,T,P);C>.9&&A<.1&&(_<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const T=y*3;_.x=t[T+0],_.y=t[T+1],_.z=t[T+2]}function g(){const y=new I,_=new I,T=new I,P=new I,C=new pt,A=new pt,D=new pt;for(let F=0,x=0;F<r.length;F+=9,x+=6){y.set(r[F+0],r[F+1],r[F+2]),_.set(r[F+3],r[F+4],r[F+5]),T.set(r[F+6],r[F+7],r[F+8]),C.set(o[x+0],o[x+1]),A.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),P.copy(y).add(_).add(T).divideScalar(3);const b=p(P);v(C,x+0,y,b),v(A,x+2,_,b),v(D,x+4,T,b)}}function v(y,_,T,P){P<0&&y.x===1&&(o[_]=y.x-1),T.x===0&&T.z===0&&(o[_]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.vertices,t.indices,t.radius,t.details)}}class Lo extends Pa{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Pa().fromJSON(i))}return this}}const Nf={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Io(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=kf(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Di(r,o,e,a,c,f,0),o}};function Io(s,t,e,n,i){let r,o;if(i===Zf(s,t,e,n)>0)for(r=t;r<e;r+=n)o=La(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=La(r,s[r],s[r+1],o);return o&&bs(o,o.next)&&(Ui(o),o=o.next),o}function zn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||ae(e.prev,e,e.next)===0)){if(Ui(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Di(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Wf(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Ff(s,n,i,r):Uf(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Ui(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Bf(zn(s),t,e),Di(s,t,e,n,i,r,2)):o===2&&Of(s,t,e,n,i,r):Di(zn(s),t,e,n,i,r,1);break}}}function Uf(s){const t=s.prev,e=s,n=s.next;if(ae(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&oi(i,a,r,c,o,l,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ff(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ae(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=pr(f,g,t,e,n),y=pr(v,p,t,e,n);let _=s.prevZ,T=s.nextZ;for(;_&&_.z>=m&&T&&T.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&oi(a,h,c,u,l,d,_.x,_.y)&&ae(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==i&&T!==o&&oi(a,h,c,u,l,d,T.x,T.y)&&ae(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&oi(a,h,c,u,l,d,_.x,_.y)&&ae(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=y;){if(T.x>=f&&T.x<=v&&T.y>=g&&T.y<=p&&T!==i&&T!==o&&oi(a,h,c,u,l,d,T.x,T.y)&&ae(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Bf(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!bs(i,r)&&Do(i,n,n.next,r)&&Ni(i,r)&&Ni(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ui(n),Ui(n.next),n=s=r),n=n.next}while(n!==s);return zn(n)}function Of(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yf(o,a)){let c=No(o,a);o=zn(o,o.next),c=zn(c,c.next),Di(o,t,e,n,i,r,0),Di(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function kf(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Io(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(qf(l));for(i.sort(Gf),r=0;r<i.length;r++)e=zf(i[r],e);return e}function Gf(s,t){return s.x-t.x}function zf(s,t){const e=Vf(s,t);if(!e)return t;const n=No(e,s);return zn(n,n.next),zn(e,e.next)}function Vf(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&oi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ni(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Hf(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Hf(s,t){return ae(s.prev,s,t.prev)<0&&ae(t.next,s,s.next)<0}function Wf(s,t,e,n){let i=s;do i.z===0&&(i.z=pr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Xf(i)}function Xf(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function pr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function qf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function oi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Yf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$f(s,t)&&(Ni(s,t)&&Ni(t,s)&&Kf(s,t)&&(ae(s.prev,s,t.prev)||ae(s,t.prev,t))||bs(s,t)&&ae(s.prev,s,s.next)>0&&ae(t.prev,t,t.next)>0)}function ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function bs(s,t){return s.x===t.x&&s.y===t.y}function Do(s,t,e,n){const i=us(ae(s,t,e)),r=us(ae(s,t,n)),o=us(ae(e,n,s)),a=us(ae(e,n,t));return!!(i!==r&&o!==a||i===0&&hs(s,e,t)||r===0&&hs(s,n,t)||o===0&&hs(e,s,n)||a===0&&hs(e,t,n))}function hs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function us(s){return s>0?1:s<0?-1:0}function $f(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Do(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ni(s,t){return ae(s.prev,s,s.next)<0?ae(s,t,s.next)>=0&&ae(s,s.prev,t)>=0:ae(s,t,s.prev)<0||ae(s,s.next,t)<0}function Kf(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function No(s,t){const e=new mr(s.i,s.x,s.y),n=new mr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function La(s,t,e,n){const i=new mr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ui(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zf(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ci{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ci.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ia(t),Da(n,t);let o=t.length;e.forEach(Ia);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Da(n,e[c]);const a=Nf.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ia(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Da(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Cr extends Ar{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cr(t.radius,t.detail)}}class Ms extends Ce{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new I,g=new pt;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const p=v*(n+1);for(let m=0;m<n;m++){const y=m+p,_=y,T=y+n+1,P=y+n+2,C=y+1;a.push(_,T,C),a.push(T,P,C)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Rr extends Ce{constructor(t=new Lo([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ne(i,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Ci.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=Ci.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],_=y[0]+u,T=y[1]+u,P=y[2]+u;n.push(_,T,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Jf(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Rr(n,t.curveSegments)}}function Jf(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class jt extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let T=0;m===0&&o===0?T=.5/e:m===n&&c===Math.PI&&(T=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(C+T,1-_),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const _=h[m][y+1],T=h[m][y],P=h[m+1][y],C=h[m+1][y+1];(m!==0||o>0)&&f.push(_,T,C),(m!==n-1||c<Math.PI)&&f.push(T,P,C)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oe extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(v),u.y=(t+e*Math.cos(p))*Math.sin(v),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bi extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jf extends Bi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pr extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Qf extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rr=new oe,Na=new I,Ua=new I;class tp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Na.setFromMatrixPosition(t.matrixWorld),e.position.copy(Na),Ua.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ua),e.updateMatrixWorld(),rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ep extends tp{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class np extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ep}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ip extends Pr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xr);class sp{constructor(t){w(this,"scene");w(this,"camera");w(this,"renderer");w(this,"dirLight");w(this,"hemiLight");w(this,"ambientLight");this.scene=new Mf,this.scene.background=new kt(7390719),this.scene.fog=new Tr(7390719,75,230);const e=window.innerWidth/window.innerHeight;this.camera=new Ye(60,e,.1,300),this.camera.position.set(0,5,8),this.renderer=new bo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.25,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.hemiLight=new Qf(16777215,10868391,.95),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.ambientLight=new ip(16777215,.55),this.scene.add(this.ambientLight),this.dirLight=new np(16777215,1.6),this.dirLight.position.set(20,35,15),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=1024,this.dirLight.shadow.mapSize.height=1024,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120;const n=22;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),window.addEventListener("resize",this.onWindowResize.bind(this))}setSkyColor(t,e,n){this.scene.background=new kt(t),this.scene.fog&&this.scene.fog.color.setHex(n),this.hemiLight.color.setHex(t),this.hemiLight.groundColor.setHex(e)}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}updateLightTarget(t){this.dirLight.position.set(t.x+20,t.y+35,t.z+15),this.dirLight.target.position.copy(t),this.dirLight.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}class rp{constructor(){w(this,"ctx",null);w(this,"isMuted",!1);w(this,"engineOsc",null);w(this,"engineHarmonic",null);w(this,"engineFilter",null);w(this,"engineGain",null);w(this,"engineLFO",null);w(this,"engineLFOGain",null);w(this,"musicInterval",null);w(this,"isMusicPlaying",!1);w(this,"lastLaneSwitchTime",0);w(this,"laneSwitchBuffer",null);w(this,"splashBuffer",null);w(this,"exhaustSnapBuffer",null)}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.createNoiseBuffers()}this.ctx.state==="suspended"&&this.ctx.resume()}createNoiseBuffers(){if(!this.ctx)return;const t=Math.floor(this.ctx.sampleRate*.035);this.laneSwitchBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.laneSwitchBuffer.getChannelData(0);for(let a=0;a<t;a++)e[a]=(Math.random()*2-1)*Math.exp(-a/(t*.3));const n=Math.floor(this.ctx.sampleRate*.22);this.splashBuffer=this.ctx.createBuffer(1,n,this.ctx.sampleRate);const i=this.splashBuffer.getChannelData(0);for(let a=0;a<n;a++)i[a]=(Math.random()*2-1)*Math.exp(-a/(this.ctx.sampleRate*.065));const r=Math.floor(this.ctx.sampleRate*.025);this.exhaustSnapBuffer=this.ctx.createBuffer(1,r,this.ctx.sampleRate);const o=this.exhaustSnapBuffer.getChannelData(0);for(let a=0;a<r;a++)o[a]=(Math.random()*2-1)*Math.exp(-a/(r*.2))}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted?(this.engineGain&&(this.engineGain.gain.value=0),this.stopMusic()):this.startMusic(),!this.isMuted}getMuted(){return this.isMuted}playLaneSwitchSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;if(!(t-this.lastLaneSwitchTime<.05)){this.lastLaneSwitchTime=t;try{this.laneSwitchBuffer||this.createNoiseBuffers();const e=this.ctx.createBufferSource();e.buffer=this.laneSwitchBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1100,t),n.Q.setValueAtTime(1,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.04,t),i.gain.exponentialRampToValueAtTime(.001,t+.035),e.connect(n),n.connect(i),i.connect(this.ctx.destination),e.start(t)}catch{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(200,t),e.frequency.exponentialRampToValueAtTime(80,t+.03),n.gain.setValueAtTime(.02,t),n.gain.exponentialRampToValueAtTime(.001,t+.03),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.03)}}}playCoinSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(480,t),e.frequency.exponentialRampToValueAtTime(390,t+.07),n.type="lowpass",n.frequency.setValueAtTime(700,t),i.gain.setValueAtTime(.085,t),i.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.08)}playGemSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;[392,493.88].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+i*.04),o.type="lowpass",o.frequency.setValueAtTime(800,t),a.gain.setValueAtTime(.09,t+i*.04),a.gain.exponentialRampToValueAtTime(.001,t+i*.04+.14),r.connect(o),o.connect(a),a.connect(this.ctx.destination),r.start(t+i*.04),r.stop(t+i*.04+.15)})}playJumpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(240,t),e.frequency.exponentialRampToValueAtTime(620,t+.14),n.gain.setValueAtTime(.16,t),n.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.17)}playSlideSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(110,t+.18),n.gain.setValueAtTime(.14,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.19)}playVehicleDuckSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(75,t+.2),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.22)}playDriftScreechSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(540,t),e.frequency.linearRampToValueAtTime(420,t+.12),e.frequency.exponentialRampToValueAtTime(160,t+.3),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.3)}playWaterSplashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;this.splashBuffer||this.createNoiseBuffers();const e=this.ctx.createBufferSource();e.buffer=this.splashBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1400,t),n.frequency.exponentialRampToValueAtTime(450,t+.2),n.Q.setValueAtTime(1.5,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.12,t),i.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(i),i.connect(this.ctx.destination),e.start(t)}playMountSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.07),o.gain.setValueAtTime(.18,t+i*.07),o.gain.exponentialRampToValueAtTime(.001,t+i*.07+.18),r.connect(o),o.connect(this.ctx.destination),r.start(t+i*.07),r.stop(t+i*.07+.19)})}playLevelUpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((n,i)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.08),o.gain.setValueAtTime(.22,t+i*.08),o.gain.exponentialRampToValueAtTime(.001,t+i*.08+.32),r.connect(o),o.connect(this.ctx.destination),r.start(t+i*.08),r.stop(t+i*.08+.33)})}playSmashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(35,t+.22),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.23)}playCrashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(25,t+.35),n.gain.setValueAtTime(.35,t),n.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.36)}startVehicleEngine(){if(this.isMuted||this.engineOsc||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="triangle",this.engineOsc.frequency.setValueAtTime(110,t),this.engineHarmonic=this.ctx.createOscillator(),this.engineHarmonic.type="sine",this.engineHarmonic.frequency.setValueAtTime(165,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(380,t),this.engineLFO=this.ctx.createOscillator(),this.engineLFO.type="sine",this.engineLFO.frequency.setValueAtTime(14,t),this.engineLFOGain=this.ctx.createGain(),this.engineLFOGain.gain.setValueAtTime(.007,t),this.engineLFO.connect(this.engineLFOGain.gain),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.025,t),this.engineOsc.connect(this.engineFilter),this.engineHarmonic.connect(this.engineFilter),this.engineFilter.connect(this.engineLFOGain),this.engineLFOGain.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start(t),this.engineHarmonic.start(t),this.engineLFO.start(t)}revEngine(){if(!this.engineOsc||!this.ctx)return;const t=this.ctx.currentTime;this.engineOsc.frequency.cancelScheduledValues(t),this.engineOsc.frequency.setValueAtTime(this.engineOsc.frequency.value,t),this.engineOsc.frequency.linearRampToValueAtTime(195,t+.12),this.engineOsc.frequency.exponentialRampToValueAtTime(115,t+.38),this.engineHarmonic&&(this.engineHarmonic.frequency.cancelScheduledValues(t),this.engineHarmonic.frequency.linearRampToValueAtTime(290,t+.12),this.engineHarmonic.frequency.exponentialRampToValueAtTime(170,t+.38)),this.engineLFO&&(this.engineLFO.frequency.linearRampToValueAtTime(22,t+.12),this.engineLFO.frequency.linearRampToValueAtTime(14,t+.38))}setEngineSpeed(t){if(!this.engineOsc||!this.ctx)return;const e=105+t*55;this.engineOsc.frequency.setTargetAtTime(e,this.ctx.currentTime,.08),this.engineHarmonic&&this.engineHarmonic.frequency.setTargetAtTime(e*1.5,this.ctx.currentTime,.08),this.engineLFO&&this.engineLFO.frequency.setTargetAtTime(13+t*7,this.ctx.currentTime,.08)}stopVehicleEngine(){if(this.engineOsc){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null}if(this.engineHarmonic){try{this.engineHarmonic.stop(),this.engineHarmonic.disconnect()}catch{}this.engineHarmonic=null}if(this.engineLFO){try{this.engineLFO.stop(),this.engineLFO.disconnect()}catch{}this.engineLFO=null}if(this.engineLFOGain){try{this.engineLFOGain.disconnect()}catch{}this.engineLFOGain=null}if(this.engineFilter){try{this.engineFilter.disconnect()}catch{}this.engineFilter=null}if(this.engineGain){try{this.engineGain.disconnect()}catch{}this.engineGain=null}}playExhaustPopSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;[0,.055].forEach((e,n)=>{if(!this.ctx)return;const i=t+e,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n===0?120:145,i),r.frequency.exponentialRampToValueAtTime(35,i+.04),o.gain.setValueAtTime(.18,i),o.gain.exponentialRampToValueAtTime(.001,i+.045),r.connect(o),o.connect(this.ctx.destination),r.start(i),r.stop(i+.05),this.exhaustSnapBuffer||this.createNoiseBuffers();const a=this.ctx.createBufferSource();a.buffer=this.exhaustSnapBuffer;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(n===0?1700:2100,i),c.Q.setValueAtTime(1.5,i);const l=this.ctx.createGain();l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.001,i+.025),a.connect(c),c.connect(l),l.connect(this.ctx.destination),a.start(i)})}playNitroBlastSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(420,t),e.frequency.exponentialRampToValueAtTime(1600,t+.22),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.14,t+.15),n.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.36),this.playExhaustPopSound();const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(85,t+.06),i.frequency.exponentialRampToValueAtTime(25,t+.5);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(280,t+.06),r.gain.setValueAtTime(.25,t+.06),r.gain.exponentialRampToValueAtTime(.001,t+.5),i.connect(o),o.connect(r),r.connect(this.ctx.destination),i.start(t+.06),i.stop(t+.52)}startMusic(){if(this.isMuted||this.isMusicPlaying||(this.initContext(),!this.ctx))return;this.isMusicPlaying=!0;const t=[523.25,659.25,783.99,1046.5,880,783.99,659.25,783.99,587.33,698.46,880,1174.66,1046.5,880,783.99,659.25],e=[130.81,130.81,130.81,130.81,110,110,110,110,146.83,146.83,146.83,146.83,98,98,123.47,130.81];let n=0;this.musicInterval=window.setInterval(()=>{if(this.isMuted||!this.ctx||!this.isMusicPlaying)return;const i=this.ctx.currentTime,r=t[n%t.length],o=e[n%e.length];n++;const a=this.ctx.createOscillator(),c=this.ctx.createGain();if(a.type="sine",a.frequency.setValueAtTime(r,i),c.gain.setValueAtTime(.035,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.15),a.connect(c),c.connect(this.ctx.destination),a.start(i),a.stop(i+.15),n%2===0){const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(o,i),h.gain.setValueAtTime(.04,i),h.gain.exponentialRampToValueAtTime(1e-4,i+.18),l.connect(h),h.connect(this.ctx.destination),l.start(i),l.stop(i+.18)}},150)}pauseMusic(){this.stopMusic()}stopMusic(){this.isMusicPlaying=!1,this.musicInterval!==null&&(clearInterval(this.musicInterval),this.musicInterval=null)}}class ap{constructor(){w(this,"queuedActions",[]);w(this,"touchStartX",0);w(this,"touchStartY",0);w(this,"touchStartTime",0);w(this,"longPressTimer",null);w(this,"hasTriggeredLongPress",!1);w(this,"isEnabled",!0);w(this,"onPauseToggle");window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove.bind(this),{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel.bind(this),{passive:!0})}setEnabled(t){this.isEnabled=t,t||(this.clearHoldTimer(),this.queuedActions=[])}triggerBoost(){this.isEnabled&&this.queuedActions.push("boost")}handleKeyDown(t){if(t.key==="Escape"||t.key==="p"||t.key==="P"){this.onPauseToggle?.();return}this.isEnabled&&(t.code==="Space"||t.key===" "?this.queuedActions.push("boost"):t.key==="ArrowLeft"||t.key==="a"||t.key==="A"?this.queuedActions.push("left"):t.key==="ArrowRight"||t.key==="d"||t.key==="D"?this.queuedActions.push("right"):t.key==="ArrowUp"||t.key==="w"||t.key==="W"?this.queuedActions.push("jump"):(t.key==="ArrowDown"||t.key==="s"||t.key==="S")&&this.queuedActions.push("slide"))}handleTouchStart(t){!this.isEnabled||t.touches.length===0||(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=performance.now(),this.hasTriggeredLongPress=!1,this.clearHoldTimer(),this.longPressTimer=setTimeout(()=>{this.isEnabled&&!this.hasTriggeredLongPress&&(this.hasTriggeredLongPress=!0,this.queuedActions.push("boost"))},320))}handleTouchMove(t){if(t.touches.length===0)return;const e=t.touches[0].clientX,n=t.touches[0].clientY;(e-this.touchStartX)**2+(n-this.touchStartY)**2>400&&this.clearHoldTimer()}handleTouchEnd(t){if(this.clearHoldTimer(),!this.isEnabled||t.changedTouches.length===0)return;if(this.hasTriggeredLongPress){this.hasTriggeredLongPress=!1;return}const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;if(performance.now()-this.touchStartTime>650)return;const r=25;Math.abs(e)<r&&Math.abs(n)<r||(Math.abs(e)>Math.abs(n)?e>0?this.queuedActions.push("right"):this.queuedActions.push("left"):n<0?this.queuedActions.push("jump"):this.queuedActions.push("slide"))}handleTouchCancel(){this.clearHoldTimer()}clearHoldTimer(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}popAction(){return this.queuedActions.length>0?this.queuedActions.shift():null}clear(){this.clearHoldTimer(),this.queuedActions=[]}}const Mi=[{levelNumber:1,name:"Sunburst Boardwalk",subtitle:"Seaside Town, Beach & Palm Trees",targetDistance:1440,biome:"boardwalk",baseSpeed:21,obstacleDensity:.65,hasMovingRobots:!1,rewardCoins:150},{levelNumber:2,name:"Downtown Plaza",subtitle:"Rainy Avenues, Skyscrapers & Neon",targetDistance:1600,biome:"plaza",baseSpeed:24,obstacleDensity:.85,hasMovingRobots:!0,rewardCoins:250},{levelNumber:3,name:"Pinecrest Forest",subtitle:"Alpine Snow, Cabins & Mountain Woods",targetDistance:1760,biome:"forest",baseSpeed:27,obstacleDensity:.95,hasMovingRobots:!0,rewardCoins:350},{levelNumber:4,name:"Amusement Pier",subtitle:"Neon Carnival & Rapid Dodges",targetDistance:1920,biome:"pier",baseSpeed:30,obstacleDensity:1.1,hasMovingRobots:!0,rewardCoins:450},{levelNumber:5,name:"Cyber Circuit",subtitle:"Electric Lasers & High Voltage",targetDistance:2080,biome:"cyber",baseSpeed:33,obstacleDensity:1.25,hasMovingRobots:!0,rewardCoins:600},{levelNumber:6,name:"Candy Wonderland",subtitle:"Sweet Chaos & Hyper Velocity",targetDistance:2240,biome:"candy",baseSpeed:36,obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:800}],ke={nova:{id:"nova",name:"Nova",title:"Star Runner",perk:"+15% Speed & Agility",speedBonus:1.15,vehicleDurationBonus:1,magnetRangeBonus:1,hasPermanentMagnet:!1,laneAgilityBonus:1.35,smashMultiplier:1,gemPrice:0},leo:{id:"leo",name:"Leo",title:"Dash Runner",perk:"+35% Fuel & 2x Smash",speedBonus:1.08,vehicleDurationBonus:1.35,magnetRangeBonus:1,hasPermanentMagnet:!1,laneAgilityBonus:1.15,smashMultiplier:2,gemPrice:0},skye:{id:"skye",name:"Skye",title:"Explorer",perk:"Permanent Coin Magnet",speedBonus:1.05,vehicleDurationBonus:1,magnetRangeBonus:1.4,hasPermanentMagnet:!0,laneAgilityBonus:1,smashMultiplier:1,gemPrice:15}},tn={van:{id:"van",name:"Sweet-Treat Van",title:"Heavy Bumper Delivery",ability:"Shield Bumper & Crash Armor",description:"Bumper smashes crates & cones, and armor absorbs 1 heavy collision!",hasBumperShield:!0,hasMagnetAura:!1,hasTurboShockwave:!1,absorbsRoadblocks:!0,coinMultiplier:1,speedMultiplier:1,baseDurationSeconds:22,gemPrice:0},buggy:{id:"buggy",name:"Neon Buggy",title:"All-Terrain Cruiser",ability:"3-Lane Magnet & 2x Coins",description:"Electromagnetic field pulls all coins across 3 lanes with 2x coin multiplier!",hasBumperShield:!1,hasMagnetAura:!0,hasTurboShockwave:!1,absorbsRoadblocks:!1,coinMultiplier:2,speedMultiplier:1.05,baseDurationSeconds:20,gemPrice:15},scooter:{id:"scooter",name:"Eco Scooter",title:"Retro High-Speed Moped",ability:"Max Velocity & Agile Cornering",description:"+25% speed velocity, extreme 35° leaning cornering & swift handling!",hasBumperShield:!1,hasMagnetAura:!1,hasTurboShockwave:!1,absorbsRoadblocks:!1,coinMultiplier:1,speedMultiplier:1.25,baseDurationSeconds:18,gemPrice:25}},ds=[{id:1,name:"Sunburst Stroll",targetDistance:1200,targetCoins:35,targetSmashes:0,biome:"boardwalk"},{id:2,name:"Sweet Smash Delivery",targetDistance:2560,targetCoins:75,targetSmashes:5,biome:"plaza"},{id:3,name:"Pier Turbo Cruise",targetDistance:4e3,targetCoins:130,targetSmashes:10,biome:"pier"}],Fa="blockville_best_distance",Ba="blockville_best_score",Oa="blockville_total_coins",ka="blockville_total_gems",Ga="blockville_unlocked_chars",za="blockville_unlocked_vehs",Va="blockville_customization";class op{constructor(){w(this,"mode","endless");w(this,"currentStageIndex",0);w(this,"characterId","nova");w(this,"vehicleId","van");w(this,"paletteId","classic");w(this,"unlockedCharacters",new Set(["nova","leo"]));w(this,"unlockedVehicles",new Set(["van"]));w(this,"distance",0);w(this,"starCoins",0);w(this,"diamondGems",0);w(this,"smashes",0);w(this,"multiplier",1);w(this,"speed",18);w(this,"baseSpeed",18);w(this,"currentLevel",1);w(this,"levelDistance",0);w(this,"revivesUsedInRun",0);w(this,"maxRevivesPerRun",1);w(this,"isRunFinalized",!1);w(this,"runsCompleted",0);w(this,"hasRemovedAds",!1);w(this,"bestDistance",0);w(this,"bestScore",0);w(this,"totalCoinsSaved",0);w(this,"totalGemsSaved",15);this.loadPersistedData()}canRevive(){return this.revivesUsedInRun<this.maxRevivesPerRun}shouldShowInterstitialAd(){return this.hasRemovedAds?!1:this.runsCompleted>0&&this.runsCompleted%2===0}loadPersistedData(){try{this.hasRemovedAds=localStorage.getItem("blockville_iap_no_ads")==="true",this.bestDistance=parseFloat(localStorage.getItem(Fa)||"0"),this.bestScore=parseInt(localStorage.getItem(Ba)||"0",10),this.totalCoinsSaved=parseInt(localStorage.getItem(Oa)||"0",10);const t=localStorage.getItem(ka);t!==null&&(this.totalGemsSaved=parseInt(t,10));const e=localStorage.getItem(Ga);if(e){const r=JSON.parse(e);Array.isArray(r)&&r.forEach(o=>this.unlockedCharacters.add(o))}this.unlockedCharacters.add("nova"),this.unlockedCharacters.add("leo");const n=localStorage.getItem(za);if(n){const r=JSON.parse(n);Array.isArray(r)&&r.forEach(o=>this.unlockedVehicles.add(o))}this.unlockedVehicles.add("van");const i=localStorage.getItem(Va);if(i){const r=JSON.parse(i);r.characterId&&ke[r.characterId]&&(this.characterId=r.characterId),r.vehicleId&&tn[r.vehicleId]&&(this.vehicleId=r.vehicleId),r.paletteId&&(this.paletteId=r.paletteId)}}catch{}}savePersistedData(){try{localStorage.setItem(Fa,this.bestDistance.toFixed(0)),localStorage.setItem(Ba,this.bestScore.toString()),localStorage.setItem(Oa,this.totalCoinsSaved.toString()),localStorage.setItem(ka,this.totalGemsSaved.toString()),localStorage.setItem(Ga,JSON.stringify(Array.from(this.unlockedCharacters))),localStorage.setItem(za,JSON.stringify(Array.from(this.unlockedVehicles))),localStorage.setItem(Va,JSON.stringify({characterId:this.characterId,vehicleId:this.vehicleId,paletteId:this.paletteId}))}catch{}}isCharacterUnlocked(t){return this.unlockedCharacters.has(t)}isVehicleUnlocked(t){return this.unlockedVehicles.has(t)}unlockCharacter(t){const e=ke[t];return e?this.unlockedCharacters.has(t)?!0:this.totalGemsSaved>=e.gemPrice?(this.totalGemsSaved-=e.gemPrice,this.unlockedCharacters.add(t),this.savePersistedData(),!0):!1:!1}unlockVehicle(t){const e=tn[t];return e?this.unlockedVehicles.has(t)?!0:this.totalGemsSaved>=e.gemPrice?(this.totalGemsSaved-=e.gemPrice,this.unlockedVehicles.add(t),this.savePersistedData(),!0):!1:!1}getCurrentLevelDef(){const t=Math.min(this.currentLevel-1,Mi.length-1),e=Mi[t];if(this.currentLevel>Mi.length){const n=this.currentLevel-5;return{levelNumber:this.currentLevel,name:`Hyper Zone ${this.currentLevel}`,subtitle:"Ultimate Reflex Gauntlet",targetDistance:500+n*100,biome:Mi[(this.currentLevel-1)%Mi.length].biome,baseSpeed:Math.min(42,34+n*1.5),obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:250}}return e}resetRun(){this.distance=0,this.starCoins=0,this.diamondGems=0,this.smashes=0,this.currentLevel=1,this.levelDistance=0,this.multiplier=1,this.revivesUsedInRun=0,this.isRunFinalized=!1,this.baseSpeed=this.getCurrentLevelDef().baseSpeed*ke[this.characterId].speedBonus,this.speed=this.baseSpeed}updateDistanceAndSpeed(t,e=1){const n=this.getCurrentLevelDef();this.baseSpeed=n.baseSpeed*ke[this.characterId].speedBonus,this.speed=this.baseSpeed*e;const i=this.speed*t;this.distance+=i,this.levelDistance+=i}checkLevelUp(){const t=this.getCurrentLevelDef();return this.levelDistance>=t.targetDistance?(this.currentLevel++,this.levelDistance=0,this.multiplier=Math.min(10,this.currentLevel),this.addCoins(t.rewardCoins),this.getCurrentLevelDef()):null}addCoins(t=1){this.starCoins+=t*this.multiplier}addGems(t=1){this.diamondGems+=t}addSmash(){const t=ke[this.characterId]?.smashMultiplier||1;this.smashes+=t}calculateTotalScore(){return Math.floor(this.distance*2+this.starCoins*15+this.diamondGems*100+this.smashes*50)}getRunStats(t=!1){const e=this.calculateTotalScore(),n=this.distance>this.bestDistance,i=e>this.bestScore;return{distance:Math.floor(this.distance),starCoins:this.starCoins,gems:this.diamondGems,smashes:this.smashes,score:e,isNewHighDistance:n,isNewHighScore:i,stageCompleted:t}}finalizeRun(t=!1){const e=this.getRunStats(t);return this.isRunFinalized||(this.isRunFinalized=!0,this.runsCompleted++,e.isNewHighDistance&&(this.bestDistance=this.distance),e.isNewHighScore&&(this.bestScore=e.score),this.totalCoinsSaved+=this.starCoins,this.totalGemsSaved+=this.diamondGems,this.savePersistedData()),e}getActiveStage(){return this.mode!=="stage"?null:ds[this.currentStageIndex]||ds[0]}checkStageCompletion(){const t=this.getActiveStage();return t?this.distance>=t.targetDistance&&this.starCoins>=t.targetCoins&&this.smashes>=t.targetSmashes:!1}advanceStage(){const t=(this.currentStageIndex+1)*250;return this.addCoins(t),this.multiplier=Math.min(10,this.multiplier+1),this.currentStageIndex++,this.currentStageIndex<ds.length?{nextStage:ds[this.currentStageIndex],rewardCoins:t}:(this.mode="endless",this.currentLevel=4,{nextStage:null,rewardCoins:t})}}class Zt{static getBox(t,e,n){const i=`${t.toFixed(2)}_${e.toFixed(2)}_${n.toFixed(2)}`;let r=this.boxMap.get(i);return r||(r=new ze(t,e,n),this.boxMap.set(i,r)),r}static getCylinder(t,e,n,i=10){const r=`${t.toFixed(2)}_${e.toFixed(2)}_${n.toFixed(2)}_${i}`;let o=this.cylinderMap.get(r);return o||(o=new St(t,e,n,i),this.cylinderMap.set(r,o)),o}static getSphere(t,e=12,n=8){const i=`${t.toFixed(2)}_${e}_${n}`;let r=this.sphereMap.get(i);return r||(r=new jt(t,e,n),this.sphereMap.set(i,r)),r}static getPlane(t,e){const n=`${t.toFixed(2)}_${e.toFixed(2)}`;let i=this.planeMap.get(n);return i||(i=new on(t,e),this.planeMap.set(n,i)),i}static getCone(t,e,n=10){const i=`${t.toFixed(2)}_${e.toFixed(2)}_${n}`;let r=this.coneMap.get(i);return r||(r=new le(t,e,n),this.coneMap.set(i,r)),r}static getTorus(t,e,n=8,i=12,r=Math.PI*2){const o=`${t.toFixed(2)}_${e.toFixed(2)}_${n}_${i}_${r.toFixed(2)}`;let a=this.torusMap.get(o);return a||(a=new Oe(t,e,n,i,r),this.torusMap.set(o,a)),a}static getOctahedron(t,e=0){const n=`${t.toFixed(2)}_${e}`;let i=this.octahedronMap.get(n);return i||(i=new Cr(t,e),this.octahedronMap.set(n,i)),i}static clear(){for(const t of this.boxMap.values())t.dispose();for(const t of this.cylinderMap.values())t.dispose();for(const t of this.sphereMap.values())t.dispose();for(const t of this.planeMap.values())t.dispose();for(const t of this.coneMap.values())t.dispose();for(const t of this.torusMap.values())t.dispose();for(const t of this.octahedronMap.values())t.dispose();this.boxMap.clear(),this.cylinderMap.clear(),this.sphereMap.clear(),this.planeMap.clear(),this.coneMap.clear(),this.torusMap.clear(),this.octahedronMap.clear()}}w(Zt,"boxMap",new Map),w(Zt,"cylinderMap",new Map),w(Zt,"sphereMap",new Map),w(Zt,"planeMap",new Map),w(Zt,"coneMap",new Map),w(Zt,"torusMap",new Map),w(Zt,"octahedronMap",new Map);const Ha={classic:{primary:16738740,secondary:16775654,accent:5099745,chassis:12216520,wheelRim:16766287,highlight:58998},sunset:{primary:16740419,secondary:16766287,accent:16728193,chassis:6111287,wheelRim:16771899,highlight:2541274},cyber:{primary:58998,secondary:8146431,accent:58879,chassis:2171169,wheelRim:16717636,highlight:16776960},candy:{primary:15753874,secondary:16773494,accent:8508666,chassis:11771355,wheelRim:16747136,highlight:16777215}},pe=class pe{static getPlastic(t,e=.18,n=0){const i=`${t}_${e}_${n}`;if(!this.materialCache.has(i)){const r=new Bi({color:new kt(t),roughness:e,metalness:n,flatShading:!1});this.materialCache.set(i,r)}return this.materialCache.get(i)}static addStuds(t,e,n,i,r,o=2,a=2){const c=o>1?e/(o+.5):0,l=a>1?n/(a+.5):0,h=o>1?-((o-1)*c)/2:0,u=a>1?-((a-1)*l)/2:0;for(let d=0;d<o;d++)for(let f=0;f<a;f++){const g=new k(this.studGeometry,r);g.position.set(h+d*c,i+.04,u+f*l),g.castShadow=!0,g.receiveShadow=!0,t.add(g)}}static createBlock(t,e,n,i,r=!0){const o=Zt.getBox(t,e,n),a=new k(o,i);return a.castShadow=r,a.receiveShadow=!0,a}};w(pe,"materialCache",new Map),w(pe,"SkinTone",pe.getPlastic(16767916,.4,0)),w(pe,"WhitePlastic",pe.getPlastic(16316922,.15,0)),w(pe,"BlackRubber",pe.getPlastic(2040865,.8,0)),w(pe,"Chrome",pe.getPlastic(15658734,.1,.85)),w(pe,"GoldStar",pe.getPlastic(16766720,.15,.1)),w(pe,"CyanGem",pe.getPlastic(58879,.1,.05)),w(pe,"RubyGem",pe.getPlastic(16717636,.1,.05)),w(pe,"GlassWindshield",new jf({color:8444159,transparent:!0,opacity:.65,roughness:.1,transmission:.6,ior:1.4})),w(pe,"studGeometry",new St(.18,.18,.08,12));let S=pe;class cp{constructor(){w(this,"group");w(this,"activeParticles",[]);w(this,"pool",[]);w(this,"studGeom",Zt.getCylinder(.12,.12,.08,8));w(this,"cubeGeom",Zt.getBox(.2,.2,.2));this.group=new Ct}acquireParticle(t,e){const n=S.getPlastic(e,.2,0),i=t?this.studGeom:this.cubeGeom;let r=this.pool.pop();if(r)r.mesh.geometry=i,r.mesh.material=n,r.mesh.visible=!0;else{const o=new k(i,n);o.castShadow=!0,this.group.add(o),r={mesh:o,velocity:new I,angularVelocity:new I,life:0,maxLife:.5,scaleInitial:1}}return this.activeParticles.push(r),r}emitExhaust(t,e=5099745){const n=this.acquireParticle(!0,e),i=n.mesh;i.position.copy(t),i.position.x+=(Math.random()-.5)*.2,i.position.y+=(Math.random()-.5)*.1;const r=.7+Math.random()*.4;i.scale.setScalar(r),n.velocity.set((Math.random()-.5)*.8,.5+Math.random()*.8,3+Math.random()*2),n.angularVelocity.set(Math.random()*4,Math.random()*4,Math.random()*4),n.life=0,n.maxLife=.4+Math.random()*.3,n.scaleInitial=r}emitSmashDebris(t,e=[16738740,16766287,58879,16740419]){for(let i=0;i<16;i++){const r=e[Math.floor(Math.random()*e.length)],o=Math.random()>.4,a=this.acquireParticle(o,r),c=a.mesh;c.position.copy(t),c.position.x+=(Math.random()-.5)*.4,c.position.y+=.2+Math.random()*.4;const l=.9+Math.random()*.5;c.scale.setScalar(l);const h=Math.random()*Math.PI*2,u=4+Math.random()*6;a.velocity.set(Math.cos(h)*u,3.5+Math.random()*5,Math.sin(h)*u*.8),a.angularVelocity.set((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),a.life=0,a.maxLife=.7+Math.random()*.5,a.scaleInitial=l}}emitPickupSparkles(t,e=16766720){for(let i=0;i<6;i++){const r=this.acquireParticle(!0,e),o=r.mesh;o.position.copy(t);const a=.6+Math.random()*.4;o.scale.setScalar(a),r.velocity.set((Math.random()-.5)*3,2+Math.random()*3.5,(Math.random()-.5)*3),r.angularVelocity.set(Math.random()*6,Math.random()*6,Math.random()*6),r.life=0,r.maxLife=.45+Math.random()*.2,r.scaleInitial=a}}emitGroundSparks(t,e=16776960){for(let i=0;i<4;i++){const r=this.acquireParticle(!0,e),o=r.mesh;o.position.copy(t),o.position.x+=(Math.random()-.5)*.8,o.position.y=.05+Math.random()*.1,o.position.z+=(Math.random()-.5)*.5;const a=.4+Math.random()*.3;o.scale.setScalar(a),r.velocity.set((Math.random()-.5)*4.5,.8+Math.random()*2.2,5+Math.random()*6),r.angularVelocity.set(Math.random()*10,Math.random()*10,Math.random()*10),r.life=0,r.maxLife=.25+Math.random()*.15,r.scaleInitial=a}}emitDriftSmokeSpray(t,e=!1){const n=e?[8508666,11789820,14808574,16777215]:[14737632,16119285,15658734,16771899],i=6;for(let r=0;r<i;r++){const o=n[Math.floor(Math.random()*n.length)],a=this.acquireParticle(!1,o),c=a.mesh;c.position.copy(t),c.position.x+=(Math.random()-.5)*1.2,c.position.y=.08+Math.random()*.25,c.position.z+=(Math.random()-.5)*.6;const l=.7+Math.random()*.6;c.scale.setScalar(l),a.velocity.set((Math.random()-.5)*(e?6.5:4.5),1.8+Math.random()*(e?3.5:2),4+Math.random()*5),a.angularVelocity.set((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8),a.life=0,a.maxLife=.45+Math.random()*.3,a.scaleInitial=l}}update(t){for(let n=this.activeParticles.length-1;n>=0;n--){const i=this.activeParticles[n];if(i.life+=t,i.life>=i.maxLife){i.mesh.visible=!1,this.activeParticles.splice(n,1),this.pool.push(i);continue}i.velocity.y+=-14*t,i.mesh.position.addScaledVector(i.velocity,t),i.mesh.rotation.x+=i.angularVelocity.x*t,i.mesh.rotation.y+=i.angularVelocity.y*t,i.mesh.rotation.z+=i.angularVelocity.z*t;const r=i.life/i.maxLife,o=i.scaleInitial*(1-r);i.mesh.scale.setScalar(Math.max(.001,o))}}clear(){for(const t of this.activeParticles)t.mesh.visible=!1,this.pool.push(t);this.activeParticles=[]}}class lp{constructor(t){w(this,"camera");w(this,"currentLookAt",new I);w(this,"shakeTrauma",0);w(this,"targetFov",60);w(this,"showcaseAngle",0);this.camera=t}setFov(t){this.targetFov=t}addTrauma(t){this.shakeTrauma=Math.min(1,this.shakeTrauma+t)}resetTrauma(){this.shakeTrauma=0}snapToFollow(t,e){this.targetFov=e?72:60,this.camera.fov=this.targetFov,this.camera.updateProjectionMatrix();const n=e?9.2:7.6,i=e?4.8:4.2;this.camera.position.set(t.x*.75,t.y*.35+i,t.z+n);const r=t.y*.5+(e?1.4:1.2);this.currentLookAt.set(t.x*.6,r,t.z-6),this.camera.lookAt(this.currentLookAt),this.camera.rotation.z=0}updateFollow(t,e,n,i){let r=60;e&&(r=72),n&&(r=80),this.targetFov=r,this.camera.fov=Ae.lerp(this.camera.fov,this.targetFov,i*5),this.camera.updateProjectionMatrix();const o=e?9.2:7.6,a=e?4.8:4.2,c=t.x*.75,l=t.y*.35+a,h=t.z+o;if(this.camera.position.x=Ae.lerp(this.camera.position.x,c,i*12),this.camera.position.y=Ae.lerp(this.camera.position.y,l,i*8),this.camera.position.z=Ae.lerp(this.camera.position.z,h,i*16),this.shakeTrauma>0){const d=(Math.random()-.5)*.7*this.shakeTrauma,f=(Math.random()-.5)*.7*this.shakeTrauma;this.camera.position.x+=d,this.camera.position.y+=f,this.shakeTrauma=Math.max(0,this.shakeTrauma-i*2.2)}const u=t.y*.5+(e?1.4:1.2);this.currentLookAt.set(t.x*.6,u,t.z-6),this.camera.lookAt(this.currentLookAt),this.camera.rotation.z=0}updateShowcase(t,e){this.camera.fov=Ae.lerp(this.camera.fov,50,e*4),this.camera.updateProjectionMatrix(),this.showcaseAngle+=e*.6;const n=8.5;this.camera.position.set(t.x+Math.sin(this.showcaseAngle)*n,t.y+3.6,t.z+Math.cos(this.showcaseAngle)*n),this.camera.lookAt(t.x,t.y+1.2,t.z)}}class Si{static buildCharacter(t){const e=new Ct;e.name=`character_${t}`;const n=new Ct;n.position.y=.85,e.add(n);const i=new Ct;i.position.y=.35,n.add(i);const r=new Ct;r.position.y=.72,i.add(r);const o=new Ct;o.position.set(-.46,.48,0),i.add(o);const a=new Ct;a.position.set(.46,.48,0),i.add(a);const c=new Ct;c.position.set(-.22,0,0),n.add(c);const l=new Ct;l.position.set(.22,0,0),n.add(l);let h,u;const d=S.SkinTone,f=S.getPlastic(1713022,.1,0),g=S.getPlastic(14162784,.2,0),v=S.createBlock(.44,.44,.44,d);r.add(v);const p=new St(.045,.045,.02,10);p.rotateX(Math.PI/2);const m=new k(p,f);m.position.set(-.11,.04,.23),r.add(m);const y=new k(p,f);y.position.set(.11,.04,.23),r.add(y);const _=new Oe(.07,.02,8,12,Math.PI);_.rotateZ(Math.PI);const T=new k(_,g);T.position.set(0,-.08,.23),r.add(T);const P=new St(.09,.09,.14,10);if(P.rotateX(Math.PI/2),t==="nova"){const C=S.getPlastic(16728193,.22,0),A=S.getPlastic(16744619,.22,0),D=S.getPlastic(15277667,.25,0),F=S.getPlastic(16728193,.18,0),x=S.createBlock(.62,.65,.38,C);i.add(x);const b=S.createBlock(.38,.18,.06,A);b.position.set(0,-.15,.2),i.add(b);const X=S.getPlastic(4073251,.2,0),K=S.getPlastic(16716947,.15,0),L=S.createBlock(.48,.22,.48,X);L.position.set(0,.22,0),r.add(L);const V=S.createBlock(.44,.38,.14,X);V.position.set(0,-.04,-.22),r.add(V),[-.23,.23].forEach(Q=>{const it=S.createBlock(.08,.32,.32,X);it.position.set(Q,.02,0),r.add(it)});const B=new k(new jt(.15,10,10),X);B.position.set(0,.25,-.26),r.add(B);const q=new k(new jt(.06,8,8),K);q.position.set(0,.28,-.29),r.add(q),[-.11,.11].forEach(Q=>{const it=S.createBlock(.12,.09,.06,K);it.position.set(Q,.28,-.29),it.rotation.z=Q>0?.35:-.35,r.add(it)}),[-.06,.06].forEach(Q=>{const it=S.createBlock(.05,.22,.03,K);it.position.set(Q,.16,-.3),it.rotation.z=Q>0?-.2:.2,it.rotation.x=-.25,r.add(it)});const Y=new k(new St(.12,.1,.35,10),X);Y.position.set(0,.12,-.38),Y.rotation.x=-.55,r.add(Y);const J=new k(new le(.11,.4,10),X);J.position.set(0,-.06,-.46),J.rotation.x=-.35,r.add(J),[-1,1].forEach(Q=>{const it=Q===-1?o:a,yt=S.createBlock(.24,.48,.24,C);yt.position.y=-.24,it.add(yt);const G=new k(P,d);G.position.set(0,-.52,.04),it.add(G)});const et=S.createBlock(.56,.22,.34,D);n.add(et),[c,l].forEach(Q=>{const it=S.createBlock(.22,.28,.24,D);it.position.y=-.14,Q.add(it);const yt=S.createBlock(.2,.32,.22,d);yt.position.y=-.44,Q.add(yt);const G=S.createBlock(.24,.16,.36,F);G.position.set(0,-.68,.06),Q.add(G)})}else if(t==="leo"){const C=S.getPlastic(1668818,.22,0),A=S.getPlastic(166097,.2,0),D=S.getPlastic(87963,.18,0),F=S.getPlastic(870305,.25,0),x=S.getPlastic(58879,.18,0),b=S.getPlastic(5125166,.2,0),X=S.createBlock(.62,.65,.38,C);i.add(X);const K=S.createBlock(.06,.6,.04,S.WhitePlastic);K.position.set(0,0,.2),i.add(K);const L=new k(new St(.28,.28,.16,16),A);L.position.set(0,.24,0),r.add(L);const V=new k(new jt(.28,12,12,0,Math.PI*2,0,Math.PI/2),A);V.position.set(0,.3,0),r.add(V);const B=S.createBlock(.38,.06,.26,D);B.position.set(0,.2,.24),r.add(B);const q=S.createBlock(.46,.12,.46,b);q.position.set(0,.16,0),r.add(q),[-1,1].forEach(J=>{const et=J===-1?o:a,Q=S.createBlock(.24,.48,.24,C);Q.position.y=-.24,et.add(Q);const it=new k(P,d);it.position.set(0,-.52,.04),et.add(it)});const Y=S.createBlock(.56,.22,.34,F);n.add(Y),[c,l].forEach(J=>{const et=S.createBlock(.22,.58,.24,F);et.position.y=-.29,J.add(et);const Q=S.createBlock(.26,.16,.38,x);Q.position.set(0,-.66,.06),J.add(Q)})}else{const C=S.getPlastic(16740419,.2,0),A=S.getPlastic(5125166,.3,0),D=S.getPlastic(5533306,.25,0),F=S.getPlastic(4073251,.25,0),x=S.getPlastic(2503224,.15,0),b=S.getPlastic(58879,.1,0),X=S.getPlastic(3021836,.2,0),K=S.createBlock(.62,.65,.38,C);i.add(K);const L=S.createBlock(.64,.1,.4,A);L.position.set(0,-.28,0),i.add(L);const V=S.createBlock(.12,.14,.1,A);V.position.set(-.24,-.28,.2),i.add(V);const B=S.createBlock(.12,.14,.1,A);B.position.set(.24,-.28,.2),i.add(B);const q=S.createBlock(.48,.3,.48,X);q.position.set(0,.16,0),r.add(q);const Y=S.createBlock(.44,.38,.14,X);Y.position.set(0,-.04,-.22),r.add(Y),[-.22,.22].forEach(G=>{const tt=S.createBlock(.1,.36,.12,X);tt.position.set(G,-.12,-.16),tt.rotation.z=G>0?-.15:.15,r.add(tt);const at=S.createBlock(.12,.05,.14,b);at.position.set(G*1.05,-.26,-.16),r.add(at)});const J=S.createBlock(.46,.12,.12,x);J.position.set(0,.22,.22),r.add(J);const et=new St(.065,.065,.04,10);et.rotateX(Math.PI/2);const Q=new k(et,b);Q.position.set(-.12,.22,.28),r.add(Q);const it=new k(et,b);it.position.set(.12,.22,.28),r.add(it),[-1,1].forEach(G=>{const tt=G===-1?o:a,at=S.createBlock(.24,.48,.24,C);at.position.y=-.24,tt.add(at);const gt=new k(P,d);gt.position.set(0,-.52,.04),tt.add(gt)});const yt=S.createBlock(.56,.22,.34,D);n.add(yt),[c,l].forEach(G=>{const tt=S.createBlock(.22,.48,.24,D);tt.position.y=-.24,G.add(tt);const at=S.createBlock(.25,.28,.36,F);at.position.set(0,-.62,.05),G.add(at)})}return{model:e,rig:{root:e,hips:n,torso:i,head:r,leftArm:o,rightArm:a,leftLeg:c,rightLeg:l,leftSkateWheels:h,rightSkateWheels:u}}}static updateAnimation(t,e,n,i,r){const{root:o,hips:a,torso:c,head:l,leftArm:h,rightArm:u,leftLeg:d,rightLeg:f,leftSkateWheels:g,rightSkateWheels:v}=t;if(o.rotation.set(0,Math.PI,0),a.rotation.set(0,0,0),c.rotation.set(0,0,0),l.rotation.set(0,0,0),e==="running"){const m=Math.sin(n*16)*.75,y=-m*.85;if(d.rotation.x=m,f.rotation.x=-m,h.rotation.x=y,u.rotation.x=-y,a.position.y=.85+Math.abs(Math.sin(n*16))*.12,c.rotation.y=Math.sin(n*16)*.12,c.rotation.z=i*.35,o.rotation.z=i*.25,g&&v){for(const _ of g)_.rotation.x+=r*20;for(const _ of v)_.rotation.x+=r*20}}else e==="jumping"?(d.rotation.x=-.8,f.rotation.x=-.5,h.rotation.x=-1.6,u.rotation.x=-1.6,h.rotation.z=-.4,u.rotation.z=.4,c.rotation.x=.2,a.position.y=1):e==="sliding"?(c.rotation.x=.7,a.position.y=.35,d.rotation.x=-.5,f.rotation.x=-.5,h.rotation.x=.8,u.rotation.x=.8):e==="mounting"?(o.rotation.y+=r*12,d.rotation.x=-.6,f.rotation.x=-.6,h.rotation.z=-.8,u.rotation.z=.8):e==="crashed"&&(o.rotation.x=Math.PI/2.5,a.position.y=.3,h.rotation.x=1.2,u.rotation.x=1.2)}static poseInVehicle(t,e,n=!1,i=!1){const{root:r,hips:o,torso:a,head:c,leftArm:l,rightArm:h,leftLeg:u,rightLeg:d}=t;r.rotation.set(0,Math.PI,0),n?(o.position.set(0,i?.35:.22,.12),a.rotation.set(.65,0,-e*.2),c.rotation.set(-.4,-e*.3,0),u.rotation.set(-1.6,.3,0),d.rotation.set(-1.6,-.3,0),l.rotation.set(-1.5,.4+e*.5,-.3),h.rotation.set(-1.5,-.4+e*.5,.3)):i?(o.position.set(0,.54,.08),a.rotation.set(.05,0,-e*.35),c.rotation.set(.08,-e*.4,0),u.rotation.set(-.85,.18,0),d.rotation.set(-.85,-.18,0),l.rotation.set(-1.05,.25+e*.5,-.18),h.rotation.set(-1.05,-.25+e*.5,.18)):(o.position.set(0,.45,.05),a.rotation.set(-.15,0,-e*.18),c.rotation.set(.1,-e*.2,0),u.rotation.set(-1.4,.2,0),d.rotation.set(-1.4,-.2,0),l.rotation.set(-1.1,.3+e*.4,-.2),h.rotation.set(-1.1,-.3+e*.4,.2))}}class Wa{static buildVehicle(t,e){const n=Ha[e]||Ha.classic,i=new Ct;i.name=`vehicle_${t}`;const r=new Ct;i.add(r);const o=new Ct;r.add(o);const a=[],c=[];let l,h;const u=new I(-.6,.4,1.6),d=new I(.6,.4,1.6),f=S.getPlastic(n.primary,.16,0),g=S.getPlastic(n.secondary,.16,0),v=S.getPlastic(n.accent,.16,0),p=S.getPlastic(n.chassis,.22,0),m=S.getPlastic(n.wheelRim,.18,0),y=S.BlackRubber,_=S.Chrome,T=(P,C)=>{const A=new k(new St(P,P,C,16),y);A.castShadow=!0,A.receiveShadow=!0,A.rotation.z=Math.PI/2;const D=new k(new St(P*.65,P*.65,C+.02,12),m);A.add(D);const F=new k(new St(P*.25,P*.25,C+.04,8),_);return A.add(F),c.push(A),A};if(t==="van"){const P=S.createBlock(1.8,.35,3.4,p);P.position.y=.5,r.add(P);const C=S.createBlock(1.7,1.3,2,f);C.position.set(0,1.25,.6),r.add(C),S.addStuds(C,1.5,1.8,.65,f,4,4);const A=S.createBlock(1.6,1,1.2,g);A.position.set(0,1.05,-.9),r.add(A);const D=new k(new ze(1.4,.65,.08),S.GlassWindshield);D.position.set(0,1.25,-1.52),D.rotation.x=-.15,r.add(D),h=S.createBlock(1.9,.45,.3,v),h.position.set(0,.48,-1.8),S.addStuds(h,1.8,.25,.22,v,4,1),r.add(h),[-.65,.65].forEach(B=>{const q=new k(new St(.12,.12,.08,12),S.getPlastic(16771899,.1,0));q.rotation.x=Math.PI/2,q.position.set(B,.75,-1.55),r.add(q)});const F=new Ct;F.position.set(0,2.1,.6);const x=S.getPlastic(16744619,.15,0),b=new k(new Oe(.55,.25,12,24),x);b.rotation.x=Math.PI/2,F.add(b);const X=new k(new le(.28,.45,12),S.getPlastic(16777215,.15,0));X.position.y=.25,F.add(X);const K=new k(new jt(.12,10,10),S.getPlastic(13959168,.1,0));K.position.y=.52,F.add(K),r.add(F),l=F,o.position.set(0,.72,-.5);const L=.42,V=.32;[-.95,.95].forEach(B=>{const q=new Ct;q.position.set(B,L,-1.05);const Y=T(L,V);q.add(Y),r.add(q),a.push(q)}),[-.95,.95].forEach(B=>{const q=T(L,V);q.position.set(B,L,.95),r.add(q)}),u.set(-.7,.45,1.75),d.set(.7,.45,1.75)}else if(t==="buggy"){const P=S.createBlock(1.5,.3,3,f);P.position.y=.55,r.add(P);const C=v,A=new St(.06,.06,1.4,8);[-.65,.65].forEach(V=>{const B=new k(A,C);B.position.set(V,1.25,-.4),B.rotation.x=.25,r.add(B);const q=new k(A,C);q.position.set(V,1.25,.6),q.rotation.x=-.25,r.add(q)});const D=S.createBlock(1.4,.1,.9,g);D.position.set(0,1.85,.1),S.addStuds(D,1.2,.7,.05,g,3,2),r.add(D),h=S.createBlock(1.6,.3,.25,p),h.position.set(0,.5,-1.6),r.add(h);const F=new k(new St(.04,.04,1.2,8),_);F.position.set(.55,1.6,1.2),F.rotation.z=-.15,r.add(F);const x=new Ct;x.position.set(.72,2.2,1.2);const b=new k(new Oe(.25,.08,8,16,Math.PI),S.RubyGem);b.rotation.z=Math.PI,x.add(b),[-.25,.25].forEach(V=>{const B=S.createBlock(.14,.18,.14,_);B.position.set(V,.12,0),x.add(B)}),r.add(x),l=x,o.position.set(0,.65,-.05);const X=.38,K=.52,L=.36;[-.88,.88].forEach(V=>{const B=new Ct;B.position.set(V,X,-1.1);const q=T(X,L);B.add(q),r.add(B),a.push(B)}),[-.95,.95].forEach(V=>{const B=T(K,L+.08);B.position.set(V,K,.9),r.add(B)}),u.set(-.6,.55,1.55),d.set(.6,.55,1.55)}else{const P=S.createBlock(.55,.14,1.5,p);P.position.set(0,.38,-.1),r.add(P),[-.16,0,.16].forEach(at=>{const gt=new k(new ze(.06,.04,1.1),y);gt.position.set(at,.47,-.1),r.add(gt)});const C=S.createBlock(.85,.85,.12,f);C.position.set(0,.85,-.85),C.rotation.x=-.12,r.add(C),S.addStuds(C,.65,.65,.04,f,2,2);const A=new k(new St(.04,.04,.88,8),_);A.rotation.z=Math.PI/2,A.position.set(0,1.28,-.9),r.add(A);const D=S.createBlock(.68,.6,1.15,f);D.position.set(0,.65,.72),r.add(D);const F=S.createBlock(.48,.12,.8,g);F.position.set(0,.98,.45),r.add(F);const x=S.createBlock(.42,.08,.72,v);x.position.set(0,1.06,.45),r.add(x);const b=new Ct;b.position.set(0,.96,1.25);const X=new k(new ze(.55,.05,.4),_);b.add(X);const K=S.createBlock(.45,.35,.35,g);K.position.set(0,.22,0),S.addStuds(K,.35,.25,.04,g,2,1),b.add(K);const L=new k(new St(.02,.02,.6,8),_);L.position.set(.2,.4,.1),b.add(L);const V=S.createBlock(.2,.12,.03,v);V.position.set(.1,.65,.1),b.add(V),r.add(b),l=V,h=S.createBlock(.75,.14,.12,_),h.position.set(0,.38,-1.35),r.add(h),o.position.set(0,.48,.05);const B=.35,q=.22,Y=new Ct;Y.position.set(0,B,-1.15);const J=T(B,q);Y.add(J),[-.14,.14].forEach(at=>{const gt=new k(new St(.035,.035,.65,8),_);gt.position.set(at,.26,0),Y.add(gt)});const et=new k(new St(.045,.045,.75,8),_);et.position.set(0,.75,.08),et.rotation.x=-.15,Y.add(et);const Q=new k(new St(.035,.035,.9,8),_);Q.rotation.z=Math.PI/2,Q.position.set(0,1.15,.14),Y.add(Q),[-.42,.42].forEach(at=>{const gt=new k(new St(.048,.048,.16,8),y);gt.rotation.z=Math.PI/2,gt.position.set(at,1.15,.14),Y.add(gt)});const it=new k(new St(.12,.1,.14,12),_);it.rotation.x=Math.PI/2,it.position.set(0,1.15,.04),Y.add(it);const yt=new k(new jt(.1,12,12),S.getPlastic(16771899,.1,0));yt.position.set(0,1.15,-.04),Y.add(yt),[-.32,.32].forEach(at=>{const gt=new k(new St(.015,.015,.22,6),_);gt.position.set(at,1.3,.14),Y.add(gt);const _t=new k(new St(.07,.07,.02,10),_);_t.rotation.x=Math.PI/2,_t.position.set(at,1.42,.14),Y.add(_t)}),r.add(Y),a.push(Y);const G=T(B,q);G.position.set(0,B,.78),r.add(G);const tt=new k(new St(.05,.06,.55,8),_);tt.rotation.x=Math.PI/2,tt.position.set(.38,.32,.85),r.add(tt),u.set(.38,.32,1.15),d.set(.38,.32,1.15)}return{model:i,parts:{root:i,chassis:r,cockpitAnchor:o,frontWheelPivots:a,allWheels:c,topperMesh:l,leftExhaustPos:u,rightExhaustPos:d,bumperMesh:h}}}static updatePhysics(t,e,n,i,r,o=!1,a=!1){const{chassis:c,frontWheelPivots:l,allWheels:h,topperMesh:u}=t,d=-n*.85;for(const y of l)y.rotation.y=Ae.lerp(y.rotation.y,d,r*16);const f=e/.4*r;for(const y of h)y.rotation.x+=f;const g=-i*.18;c.rotation.z=Ae.lerp(c.rotation.z,g,r*10);const v=o?24:14,p=o?.04:.025,m=Math.sin(performance.now()*.001*v)*p;a?(c.position.y=Ae.lerp(c.position.y,-.42,r*18),c.rotation.x=Ae.lerp(c.rotation.x,.12,r*16),c.scale.y=Ae.lerp(c.scale.y,.72,r*18)):(c.position.y=Ae.lerp(c.position.y,m,r*14),c.rotation.x=Ae.lerp(c.rotation.x,e/40*.03,r*10),c.scale.y=Ae.lerp(c.scale.y,1,r*14)),u&&(u.rotation.y+=r*(a?6:2.5))}}const hp=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),up=function(s,t){return new URL(s,t).href},Xa={},Uo=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=up(l,n),l in Xa)return;Xa[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===l&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":hp,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var hi;(function(s){s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE"})(hi||(hi={}));class ar extends Error{constructor(t,e,n){super(t),this.message=t,this.code=e,this.data=n}}const dp=s=>{var t,e;return s?.androidBridge?"android":!((e=(t=s?.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||e===void 0)&&e.bridge?"ios":"web"},fp=s=>{const t=s.CapacitorCustomPlatform||null,e=s.Capacitor||{},n=e.Plugins=e.Plugins||{},i=()=>t!==null?t.name:dp(s),r=()=>i()!=="web",o=u=>{const d=l.get(u);return!!(d?.platforms.has(i())||a(u))},a=u=>{var d;return(d=e.PluginHeaders)===null||d===void 0?void 0:d.find(f=>f.name===u)},c=u=>s.console.error(u),l=new Map,h=(u,d={})=>{const f=l.get(u);if(f)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),f.proxy;const g=i(),v=a(u);let p;const m=async()=>(!p&&g in d?p=typeof d[g]=="function"?p=await d[g]():p=d[g]:t!==null&&!p&&"web"in d&&(p=typeof d.web=="function"?p=await d.web():p=d.web),p),y=(D,F)=>{var x,b;if(v){const X=v?.methods.find(K=>F===K.name);if(X)return X.rtype==="promise"?K=>e.nativePromise(u,F.toString(),K):(K,L)=>e.nativeCallback(u,F.toString(),K,L);if(D)return(x=D[F])===null||x===void 0?void 0:x.bind(D)}else{if(D)return(b=D[F])===null||b===void 0?void 0:b.bind(D);throw new ar(`"${u}" plugin is not implemented on ${g}`,hi.Unimplemented)}},_=D=>{let F;const x=(...b)=>{const X=m().then(K=>{const L=y(K,D);if(L){const V=L(...b);return F=V?.remove,V}else throw new ar(`"${u}.${D}()" is not implemented on ${g}`,hi.Unimplemented)});return D==="addListener"&&(X.remove=async()=>F()),X};return x.toString=()=>`${D.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:D,writable:!1,configurable:!1}),x},T=_("addListener"),P=_("removeListener"),C=(D,F)=>{const x=T({eventName:D},F),b=async()=>{const K=await x;P({eventName:D,callbackId:K},F)},X=new Promise(K=>x.then(()=>K({remove:b})));return X.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await b()},X},A=new Proxy({},{get(D,F){switch(F){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return v?C:T;case"removeListener":return P;default:return _(F)}}});return n[u]=A,l.set(u,{name:u,proxy:A,platforms:new Set([...Object.keys(d),...v?[g]:[]])}),A};return e.convertFileSrc||(e.convertFileSrc=u=>u),e.getPlatform=i,e.handleError=c,e.isNativePlatform=r,e.isPluginAvailable=o,e.registerPlugin=h,e.Exception=ar,e.DEBUG=!!e.DEBUG,e.isLoggingEnabled=!!e.isLoggingEnabled,e},pp=s=>s.Capacitor=fp(s),Ge=pp(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),pi=Ge.registerPlugin;class Fo{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(e);const r=this.windowListeners[t];r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,e);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,n){const i=this.listeners[t];if(!i){if(n){let r=this.retainedEventArguments[t];r||(r=[]),r.push(e),this.retainedEventArguments[t]=r}return}i.forEach(r=>r(e))}hasListeners(t){var e;return!!(!((e=this.listeners[t])===null||e===void 0)&&e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:n=>{this.notifyListeners(e,n)}}}unimplemented(t="not implemented"){return new Ge.Exception(t,hi.Unimplemented)}unavailable(t="not available"){return new Ge.Exception(t,hi.Unavailable)}async removeListener(t,e){const n=this.listeners[t];if(!n)return;const i=n.indexOf(e);this.listeners[t].splice(i,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(n=>{this.notifyListeners(t,n)}))}}const qa=s=>encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Ya=s=>s.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class mp extends Fo{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(n=>{if(n.length<=0)return;let[i,r]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Ya(i).trim(),r=Ya(r).trim(),e[i]=r}),e}async setCookie(t){try{const e=qa(t.key),n=qa(t.value),i=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",r=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${n||""}${i}; path=${r}; ${o};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}pi("CapacitorCookies",{web:()=>new mp});const gp=async s=>new Promise((t,e)=>{const n=new FileReader;n.onload=()=>{const i=n.result;t(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>e(i),n.readAsDataURL(s)}),_p=(s={})=>{const t=Object.keys(s);return Object.keys(s).map(i=>i.toLocaleLowerCase()).reduce((i,r,o)=>(i[r]=s[t[o]],i),{})},vp=(s,t=!0)=>s?Object.entries(s).reduce((n,i)=>{const[r,o]=i;let a,c;return Array.isArray(o)?(c="",o.forEach(l=>{a=t?encodeURIComponent(l):l,c+=`${r}=${a}&`}),c.slice(0,-1)):(a=t?encodeURIComponent(o):o,c=`${r}=${a}`),`${n}&${c}`},"").substr(1):null,xp=(s,t={})=>{const e=Object.assign({method:s.method||"GET",headers:s.headers},t),i=_p(s.headers)["content-type"]||"";if(typeof s.data=="string")e.body=s.data;else if(i.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[o,a]of Object.entries(s.data||{}))r.set(o,a);e.body=r.toString()}else if(i.includes("multipart/form-data")||s.data instanceof FormData){const r=new FormData;if(s.data instanceof FormData)s.data.forEach((a,c)=>{r.append(c,a)});else for(const a of Object.keys(s.data))r.append(a,s.data[a]);e.body=r;const o=new Headers(e.headers);o.delete("content-type"),e.headers=o}else(i.includes("application/json")||typeof s.data=="object")&&(e.body=JSON.stringify(s.data));return e};class Mp extends Fo{async request(t){const e=xp(t,t.webFetchExtra),n=vp(t.params,t.shouldEncodeUrlParams),i=n?`${t.url}?${n}`:t.url,r=await fetch(i,e),o=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?t:{};o.includes("application/json")&&(a="json");let c,l;switch(a){case"arraybuffer":case"blob":l=await r.blob(),c=await gp(l);break;case"json":c=await r.json();break;case"document":case"text":default:c=await r.text()}const h={};return r.headers.forEach((u,d)=>{h[d]=u}),{data:c,headers:h,status:r.status,url:r.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}pi("CapacitorHttp",{web:()=>new Mp});var Ri;(function(s){s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT"})(Ri||(Ri={}));var Ss;(function(s){s.Success="SUCCESS",s.Warning="WARNING",s.Error="ERROR"})(Ss||(Ss={}));const yi=pi("Haptics",{web:()=>Uo(()=>import("./web-DE-jWP17.js"),[],import.meta.url).then(s=>new s.HapticsWeb)});var $a;(function(s){s.Dark="DARK",s.Light="LIGHT",s.Default="DEFAULT"})($a||($a={}));var Ka;(function(s){s.None="NONE",s.Slide="SLIDE",s.Fade="FADE"})(Ka||(Ka={}));const Sp=pi("StatusBar");class $t{static async hideStatusBar(){if(this.isAvailable)try{await Sp.hide()}catch{}}static async lightImpact(){if(this.isAvailable)try{await yi.impact({style:Ri.Light})}catch{}}static async mediumImpact(){if(this.isAvailable)try{await yi.impact({style:Ri.Medium})}catch{}}static async heavyImpact(){if(this.isAvailable)try{await yi.impact({style:Ri.Heavy})}catch{}}static async celebration(){if(this.isAvailable)try{await yi.notification({type:Ss.Success})}catch{}}static async warning(){if(this.isAvailable)try{await yi.notification({type:Ss.Warning})}catch{}}}w($t,"isAvailable",Ge.isNativePlatform());const gr=3.2,gn=[-gr,0,gr],En=class En{constructor(t,e,n,i,r){w(this,"group");w(this,"characterId");w(this,"vehicleId");w(this,"paletteId");w(this,"avatarModel");w(this,"avatarRig");w(this,"vehicleModel");w(this,"vehicleParts");w(this,"currentLane",1);w(this,"targetX",0);w(this,"currentX",0);w(this,"y",0);w(this,"jumpY",0);w(this,"z",0);w(this,"mode","on_foot");w(this,"movementState","running");w(this,"verticalVelocity",0);w(this,"gravity",-32);w(this,"jumpForce",13.5);w(this,"slideTimer",0);w(this,"maxSlideDuration",.75);w(this,"vehicleDuration",0);w(this,"maxVehicleDuration",20);w(this,"transitionTimer",0);w(this,"mountTransitionDuration",.55);w(this,"hasShield",!1);w(this,"vanArmorShield",!1);w(this,"boostCharges",0);w(this,"magnetTimer",0);w(this,"turboTimer",0);w(this,"invulnerabilityTimer",0);w(this,"isScreenshotMode",!1);w(this,"driftTimer",0);w(this,"driftDirection",1);w(this,"driftTireSmokeTimer",0);w(this,"runCycleTime",0);w(this,"particleSystem");w(this,"audioManager");w(this,"playerBox",new wn);this.characterId=t,this.vehicleId=e,this.paletteId=n,this.particleSystem=i,this.audioManager=r,this.group=new Ct,this.rebuildMeshes()}rebuildMeshes(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);const t=Si.buildCharacter(this.characterId);this.avatarModel=t.model,this.avatarRig=t.rig;const e=Wa.buildVehicle(this.vehicleId,this.paletteId);this.vehicleModel=e.model,this.vehicleParts=e.parts,this.mode==="on_foot"?(this.vehicleModel.visible=!1,this.group.add(this.avatarModel)):(this.vehicleModel.visible=!0,this.vehicleParts.cockpitAnchor.add(this.avatarModel),Si.poseInVehicle(this.avatarRig,0,!1,this.vehicleId==="scooter"),this.group.add(this.vehicleModel))}setCustomization(t,e,n){this.characterId=t,this.vehicleId=e,this.paletteId=n,this.rebuildMeshes()}setShowcasePreview(t){this.mode=t?"in_vehicle":"on_foot",this.rebuildMeshes()}reset(){this.currentLane=1,this.targetX=gn[1],this.currentX=gn[1],this.y=0,this.jumpY=0,this.z=0,this.group.rotation.set(0,0,0),this.verticalVelocity=0,this.slideTimer=0,this.mode="on_foot",this.movementState="running",this.vehicleDuration=0,this.transitionTimer=0,this.hasShield=!1,this.vanArmorShield=!1,this.boostCharges=0,this.magnetTimer=0,this.turboTimer=0,this.invulnerabilityTimer=0,this.driftTimer=0,this.driftTireSmokeTimer=0,this.runCycleTime=0,this.group.visible=!0,this.rebuildMeshes(),this.audioManager.stopVehicleEngine()}revive(){this.movementState="running",this.verticalVelocity=0,this.y=0,this.jumpY=0,this.slideTimer=0,this.hasShield=!0,this.invulnerabilityTimer=3.5,this.group.visible=!0,this.rebuildMeshes()}moveLeft(){this.currentLane>0&&this.movementState!=="crashed"&&(this.currentLane--,this.targetX=gn[this.currentLane],this.audioManager.playLaneSwitchSound(),this.mode==="in_vehicle"&&this.audioManager.revEngine(),$t.mediumImpact())}moveRight(){this.currentLane<gn.length-1&&this.movementState!=="crashed"&&(this.currentLane++,this.targetX=gn[this.currentLane],this.audioManager.playLaneSwitchSound(),this.mode==="in_vehicle"&&this.audioManager.revEngine(),$t.mediumImpact())}jump(){(this.movementState==="running"||this.mode==="in_vehicle"&&this.y<=.05)&&(this.verticalVelocity=this.jumpForce,this.movementState="jumping",this.slideTimer=0,this.audioManager.playJumpSound(),$t.mediumImpact())}slide(){this.movementState==="running"||this.mode==="in_vehicle"?(this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.mode==="in_vehicle"?(this.audioManager.playVehicleDuckSound(),this.audioManager.playExhaustPopSound()):this.audioManager.playSlideSound(),$t.mediumImpact()):this.movementState==="jumping"&&(this.verticalVelocity=-22,this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.audioManager.playSlideSound(),$t.mediumImpact())}addBoostCharge(){this.boostCharges=Math.min(3,this.boostCharges+1),this.audioManager.playMountSound(),$t.heavyImpact()}useBoost(){return this.boostCharges>0?(this.boostCharges--,this.activateTurbo(),$t.heavyImpact(),!0):!1}triggerDrift(t=0,e=!1){this.driftTimer=1.2,this.driftDirection=t!==0?t:Math.random()>.5?1:-1,this.audioManager.playDriftScreechSound(),$t.heavyImpact();const n=this.group.position.clone();n.y=.08,this.particleSystem.emitDriftSmokeSpray(n,e),this.particleSystem.emitGroundSparks(n,e?58879:16771899)}mountVehicle(){if(this.mode==="in_vehicle"){this.vehicleDuration=Math.min(this.maxVehicleDuration,this.vehicleDuration+10),this.audioManager.playMountSound();return}this.mode="in_vehicle",this.movementState="mounting",this.transitionTimer=this.mountTransitionDuration;const t=ke[this.characterId],e=tn[this.vehicleId];this.maxVehicleDuration=e.baseDurationSeconds*t.vehicleDurationBonus,this.vehicleDuration=this.maxVehicleDuration,this.vanArmorShield=e.absorbsRoadblocks,this.verticalVelocity=9.5,this.group.remove(this.avatarModel),this.vehicleParts.cockpitAnchor.add(this.avatarModel),Si.poseInVehicle(this.avatarRig,0),this.vehicleModel.visible=!0,this.vehicleModel.position.set(0,-.6,2),this.group.add(this.vehicleModel),this.audioManager.playMountSound(),this.audioManager.startVehicleEngine(),this.particleSystem.emitSmashDebris(this.group.position,[58879,16738740,16766287]),$t.heavyImpact()}dismountVehicle(t=!1){this.mode==="in_vehicle"&&(this.mode="on_foot",this.vehicleDuration=0,this.vanArmorShield=!1,this.turboTimer=0,this.audioManager.stopVehicleEngine(),this.vehicleParts.cockpitAnchor.remove(this.avatarModel),this.group.remove(this.vehicleModel),this.vehicleModel.visible=!1,this.group.add(this.avatarModel),this.verticalVelocity=t?7:6,this.movementState="jumping",this.particleSystem.emitSmashDebris(this.group.position,[16728193,16771899,58998]),$t.heavyImpact())}activateTurbo(){this.turboTimer=4.5,this.particleSystem.emitSmashDebris(this.group.position,[16771584,58879,16728193]),this.audioManager.playNitroBlastSound()}update(t,e){this.isScreenshotMode?this.group.visible=!0:this.invulnerabilityTimer>0&&(this.invulnerabilityTimer-=t,this.group.visible=Math.floor(Date.now()/80)%2===0,this.invulnerabilityTimer<=0&&(this.invulnerabilityTimer=0,this.group.visible=!0));const n=ke[this.characterId]?.laneAgilityBonus||1;this.targetX=gn[this.currentLane],this.currentX=Ae.lerp(this.currentX,this.targetX,t*(14*n));const i=(this.targetX-this.currentX)/gr;(this.y>0||this.verticalVelocity!==0)&&(this.verticalVelocity+=this.gravity*t,this.y+=this.verticalVelocity*t,this.y<=0&&(this.y=0,this.verticalVelocity=0,(this.movementState==="jumping"||this.movementState==="mounting")&&(this.movementState="running"))),this.movementState==="sliding"&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.movementState="running"));const r=this.movementState==="sliding";if(this.mode==="in_vehicle"){if(this.transitionTimer>0){this.transitionTimer-=t;const h=1-Math.max(0,this.transitionTimer/this.mountTransitionDuration);this.vehicleModel.position.z=Ae.lerp(2,0,h),this.vehicleModel.position.y=Ae.lerp(-.6,0,h)}else this.vehicleModel.position.set(0,0,0);if(this.vehicleDuration-=t,this.vehicleDuration<=0&&this.dismountVehicle(!1),Math.random()<.7){const h=new I;this.vehicleModel.localToWorld(h.copy(this.vehicleParts.leftExhaustPos)),this.particleSystem.emitExhaust(h,this.paletteId==="cyber"?58879:16738740)}if(Wa.updatePhysics(this.vehicleParts,e,i,i,t,this.turboTimer>0,r),r){const h=this.group.position.clone();h.y=.05,this.particleSystem.emitGroundSparks(h,16766287)}this.audioManager.setEngineSpeed(e/30)}if(this.magnetTimer>0&&(this.magnetTimer-=t),this.turboTimer>0&&(this.turboTimer-=t),this.runCycleTime+=t*(e/18),this.mode==="on_foot")Si.updateAnimation(this.avatarRig,this.movementState,this.runCycleTime,i,t);else{const h=this.vehicleId==="scooter";Si.poseInVehicle(this.avatarRig,i,r,h)}const o=this.mode==="in_vehicle"&&this.vehicleId==="scooter",a=this.targetX-this.currentX;let c=-a*(o?.32:.22),l=-a*(o?.65:this.mode==="in_vehicle"?.32:.24);if(this.driftTimer>0){this.driftTimer-=t;const h=Math.min(1,this.driftTimer/.8),u=this.driftDirection*.68*h;c+=u,l-=this.driftDirection*.35*h,this.driftTireSmokeTimer+=t,this.driftTireSmokeTimer>=.05&&(this.driftTireSmokeTimer=0,En._driftPos.copy(this.group.position),En._driftPos.y=.05,En._driftPos.x+=(Math.random()-.5)*.4,this.particleSystem.emitDriftSmokeSpray(En._driftPos,!1),this.particleSystem.emitGroundSparks(En._driftPos,16766287))}this.group.rotation.set(0,c,l),this.group.position.set(this.currentX,this.y,this.z)}getBoundingBox(){const t=this.mode==="in_vehicle"?1:.45,e=this.movementState==="sliding"?.7:this.mode==="in_vehicle"?1.8:1.7,n=this.mode==="in_vehicle"?1.6:.5;return this.playerBox.min.set(this.currentX-t,this.y,this.z-n),this.playerBox.max.set(this.currentX+t,this.y+e,this.z+n),this.playerBox}};w(En,"_driftPos",new I);let _r=En;class Qe{static getBiome(t){switch(t){case"boardwalk":return this.boardwalkBiome;case"plaza":return this.plazaBiome;case"forest":return this.forestBiome;case"pier":return this.pierBiome;case"cyber":return this.cyberBiome;case"candy":return this.candyBiome}}}w(Qe,"boardwalkBiome",{name:"Sunburst Boardwalk",roadColor:3622735,curbColor:58879,sidewalkColor:16774557,skyColor:8508666,fogColor:8508666,groundColor:16769154,buildSceneryProp:(t,e)=>{const n=new Ct,i=t==="left"?-1:1,r=e%5;if(r===0){const o=S.getPlastic(7951688,.35,0),a=S.getPlastic(3046706,.22,0),c=S.getPlastic(4431943,.22,0),l=S.getPlastic(5125166,.3,0);let h=0,u=0;const d=(Math.sin(e*.7)*.12+.15)*i;for(let g=0;g<7;g++){const v=.36-g*.02,p=.33-g*.02,m=.75,y=new k(new St(p,v,m,10),o);u+=m*.5,h+=Math.sin(g*.4)*d,y.position.set(h,u,0),y.rotation.z=-d*(g*.18),y.castShadow=!0,n.add(y),u+=m*.5;const _=new k(new Oe(p+.02,.04,6,12),o);_.position.set(h,u,0),_.rotation.x=Math.PI/2,n.add(_)}[-.18,0,.18].forEach((g,v)=>{const p=new k(new jt(.18,8,8),l);p.position.set(h+g,u-.2,v%2===0?.16:-.16),n.add(p)});const f=10;for(let g=0;g<f;g++){const v=g*Math.PI*2/f+e*.2,p=g%2===0,m=p?c:a,y=new Ct;y.position.set(h,u,0),y.rotation.y=v;const _=p?2.4:1.9,T=p?.42:.68,P=S.createBlock(.38,.06,_,m);P.position.set(0,0,_*.45),P.rotation.x=T,y.add(P);const C=new k(new le(.24,.8,4),m);C.position.set(0,-Math.sin(T)*_*.45,_*.85),C.rotation.x=T+.3,y.add(C),n.add(y)}}else if(r===1){const o=S.getPlastic(16777215,.2,0),a=S.getPlastic(13959168,.2,0),c=S.getPlastic(58879,.2,0),l=2.4;[-.7,.7].forEach(v=>{[-.7,.7].forEach(p=>{const m=new k(new St(.08,.08,l,8),S.getPlastic(9268835,.3,0));m.position.set(v,l*.5,p),n.add(m)})});const h=S.createBlock(1.8,1.4,1.8,o);h.position.y=l+.7,n.add(h);const u=S.createBlock(1.85,.25,1.85,a);u.position.y=l+.7,n.add(u);const d=S.createBlock(1.2,.5,1.9,S.getPlastic(8444159,.1,0));d.position.y=l+.85,n.add(d);const f=new k(new le(1.6,.9,4),c);f.position.y=l+1.85,f.rotation.y=Math.PI/4,n.add(f);const g=new k(new Oe(.3,.09,8,16),a);g.position.set(i*.95,l+.7,0),g.rotation.y=Math.PI/2,n.add(g)}else if(r===2){const o=[16301008,11722715,16775620,13747433],a=S.getPlastic(o[e%o.length],.25,0),c=S.WhitePlastic,l=S.getPlastic(16740419,.25,0),h=S.createBlock(3,3.8,2.6,a);h.position.y=1.9,n.add(h);const u=S.createBlock(2.2,.15,.8,c);u.position.set(0,2.1,i*-1.5),n.add(u);const d=S.createBlock(2.2,.5,.08,c);d.position.set(0,2.4,i*-1.85),n.add(d);const f=S.createBlock(1.4,.25,.35,S.getPlastic(9268835,.3,0));f.position.set(0,.9,i*-1.4),n.add(f),[-.45,0,.45].forEach(v=>{const p=new k(new jt(.16,6,6),S.getPlastic(16728193,.15,0));p.position.set(v,1.1,i*-1.4),n.add(p)});const g=new k(new le(2.5,1.4,4),l);g.position.y=4.5,g.rotation.y=Math.PI/4,n.add(g)}else if(r===3){const o=S.getPlastic(16744619,.2,0),a=S.getPlastic(16771899,.2,0),c=S.WhitePlastic,l=S.createBlock(2.6,1.4,1.8,o);l.position.y=.7,n.add(l);const h=S.createBlock(2.8,.12,2,S.getPlastic(5099745,.2,0));h.position.y=1.42,n.add(h);for(let v=0;v<5;v++){const p=v%2===0?a:c,m=S.createBlock(.5,.15,1.8,p);m.position.set(-1+v*.5,2.3,0),m.rotation.x=.2,n.add(m)}const u=new k(new le(.35,.8,8),S.getPlastic(14142664,.3,0));u.rotation.z=Math.PI,u.position.set(0,2.7,0),n.add(u);const d=new k(new jt(.42,10,10),S.getPlastic(58879,.15,0));d.position.set(0,3.2,0),n.add(d);const f=new k(new St(.04,.04,2.2,6),S.Chrome);f.position.set(i*1.6,1.1,0),n.add(f);const g=new k(new le(1.2,.5,10),S.getPlastic(16728193,.2,0));g.position.set(i*1.6,2.2,0),n.add(g)}else{const o=S.getPlastic(6111287,.35,0),a=S.createBlock(2,1.1,.2,o);a.position.y=.55,n.add(a);const c=[58879,16717636,7798531];[-.6,0,.6].forEach((h,u)=>{const d=S.createBlock(.38,2.2,.08,S.getPlastic(c[u],.15,0));d.position.set(h,1.1,.15),d.rotation.z=(u-1)*.08,n.add(d)});const l=S.createBlock(.8,.45,1.4,S.getPlastic(16766287,.2,0));l.position.set(i*1.5,.22,0),l.rotation.x=-.15,n.add(l)}return n},buildWideBackdrop:(t,e)=>{const n=new Ct;if(t==="right")if(e%2===0){const r=S.createBlock(1.6,.7,3.8,S.WhitePlastic);r.position.y=.25,n.add(r);const o=S.createBlock(1.4,.08,3.5,S.getPlastic(14142664,.4,0));o.position.y=.62,n.add(o);const a=new k(new St(.06,.06,4.5,8),S.Chrome);a.position.set(0,2.8,0),n.add(a);const c=new Lo;c.moveTo(0,0),c.lineTo(0,3.8),c.lineTo(2,.4),c.closePath();const l=new Rr(c),h=[16728193,58879,16771584],u=S.getPlastic(h[e%h.length],.15,0),d=new k(l,u);d.position.set(.04,.9,-.2),d.rotation.y=.25,n.add(d)}else{const r=new k(new le(.8,1.8,8),S.getPlastic(16717636,.2,0));r.position.y=.9,n.add(r);const o=new k(new jt(.3,8,8),S.getPlastic(16771899,.1,0));o.position.y=1.95,n.add(o)}else{const i=[16744619,8444159,11766015,11010027],r=S.getPlastic(i[e%i.length],.2,0),o=S.GlassWindshield,a=9.5+e%3*2.5,c=S.createBlock(5.6,a,5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<=4;h++)[-1.6,0,1.6].forEach(u=>{const d=S.createBlock(.85,1.1,.1,o);d.position.set(u,h*1.9,2.52),n.add(d)});const l=new k(new le(1.6,.6,10),S.getPlastic(16732754,.2,0));l.position.set(0,a+.8,0),n.add(l)}return n}}),w(Qe,"plazaBiome",{name:"Downtown Plaza",roadColor:2503224,curbColor:16766287,sidewalkColor:14737632,skyColor:6600182,fogColor:6600182,groundColor:8505220,buildSceneryProp:(t,e)=>{const n=new Ct,i=t==="left"?-1:1,r=e%5;if(r===0){const o=[3754411,35195,6174129,3622735],a=S.getPlastic(o[e%o.length],.25,0),c=S.getPlastic(8444159,.1,0),l=S.WhitePlastic,h=7.5,u=S.createBlock(3.4,h,2.8,a);u.position.y=h*.5,n.add(u);for(let g=0;g<4;g++)[-.9,0,.9].forEach(v=>{const p=S.createBlock(.65,.95,.1,c);p.position.set(v,1.4+g*1.5,i*-1.42),n.add(p)});const d=S.createBlock(3.6,.35,3,l);d.position.y=h+.15,n.add(d);const f=new k(new St(.7,.7,1.2,12),S.getPlastic(9268835,.3,0));f.position.set(.6,h+.9,0),n.add(f)}else if(r===1){const o=S.getPlastic(12216520,.25,0),a=S.getPlastic(16740419,.2,0),c=S.createBlock(2.6,5.5,2.6,o);c.position.y=2.75,n.add(c);const l=new k(new St(.65,.65,.12,16),S.WhitePlastic);l.rotation.x=Math.PI/2,l.position.set(0,4.4,i*-1.35),n.add(l);const h=S.createBlock(.08,.45,.15,S.getPlastic(2171169,.2,0));h.position.set(0,4.5,i*-1.4),n.add(h);const u=new k(new le(2,2.6,4),a);u.position.y=6.8,u.rotation.y=Math.PI/4,n.add(u);const d=new k(new jt(.2,8,8),S.GoldStar);d.position.y=8.2,n.add(d)}else if(r===2){const o=S.getPlastic(15483002,.25,0),a=S.getPlastic(58879,.18,0),c=S.createBlock(3.2,3.6,2.4,o);c.position.y=1.8,n.add(c);const l=S.createBlock(2.2,1.4,.1,S.getPlastic(8444159,.1,0));l.position.set(0,1.2,i*-1.22),n.add(l);const h=S.createBlock(2.6,.35,1.2,a);h.position.set(0,2.1,i*-1.6),h.rotation.x=.2,n.add(h);const u=new k(new St(.45,.45,.65,10),S.Chrome);u.position.set(i*1.6,.32,0),n.add(u);const d=new k(new St(.12,.1,.18,8),S.WhitePlastic);d.position.set(i*1.6,.74,0),n.add(d)}else if(r===3){const o=S.getPlastic(2503224,.2,0),a=S.getPlastic(16771899,.1,0),c=new k(new St(.1,.14,3.8,8),o);c.position.y=1.9,n.add(c),[-.55,.55].forEach(u=>{const d=S.createBlock(.6,.08,.08,o);d.position.set(u*.5,3.6,0),n.add(d);const f=new k(new jt(.28,10,10),a);f.position.set(u,3.45,0),n.add(f);const g=new k(new le(.2,.25,6),S.getPlastic(9268835,.3,0));g.position.set(u,3.1,0),n.add(g)});const l=S.createBlock(1.4,.35,1.4,S.getPlastic(7901340,.3,0));l.position.y=.18,n.add(l);const h=new k(new jt(.35,8,8),S.getPlastic(15277667,.2,0));h.position.y=.45,n.add(h)}else{const o=S.getPlastic(1668818,.2,0),a=S.getPlastic(8444159,.1,0),c=S.createBlock(2.4,.12,1.4,o);c.position.set(0,2.4,0),n.add(c);const l=S.createBlock(2.2,2.2,.08,a);l.position.set(0,1.2,i*-.6),n.add(l);const h=S.createBlock(1.8,.4,.45,S.getPlastic(6111287,.3,0));h.position.set(0,.25,i*-.2),n.add(h);const u=new k(new St(.18,.22,.7,8),S.getPlastic(13959168,.2,0));u.position.set(i*1.6,.35,.5),n.add(u)}return n},buildWideBackdrop:(t,e)=>{const n=new Ct,i=[1713022,19776,3218322,2503224,12000284],r=S.getPlastic(i[e%i.length],.2,0),o=S.getPlastic(8444159,.1,0),a=12+e%4*3.5,c=S.createBlock(6.5,a,5.5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<Math.floor(a/2.2);h++)[-2,0,2].forEach(u=>{const d=S.createBlock(1.1,1.2,.1,o);d.position.set(u,h*2.2,2.8),n.add(d)});const l=new k(new St(.08,.15,4.5,8),S.Chrome);return l.position.set(0,a+2.25,0),n.add(l),n}}),w(Qe,"forestBiome",{name:"Pinecrest Forest",roadColor:4073251,curbColor:7162945,sidewalkColor:9268835,skyColor:8440772,fogColor:8440772,groundColor:3046706,buildSceneryProp:(t,e)=>{const n=new Ct,i=t==="left"?-1:1,r=e%5;if(r===0||r===3){const o=S.getPlastic(5125166,.35,0),a=S.getPlastic(1793568,.25,0),c=S.getPlastic(3046706,.25,0),l=S.getPlastic(4431943,.25,0),h=new k(new St(.3,.42,5.5,10),o);h.position.y=2.75,h.castShadow=!0,n.add(h),[{y:3.2,r:2.1,h:1.6,mat:a},{y:4.2,r:1.7,h:1.5,mat:c},{y:5.1,r:1.3,h:1.4,mat:c},{y:5.9,r:.8,h:1.3,mat:l}].forEach(d=>{const f=new k(new le(d.r,d.h,8),d.mat);f.position.y=d.y,f.castShadow=!0,n.add(f)})}else if(r===1){const o=S.getPlastic(7162945,.35,0),a=S.getPlastic(4073251,.35,0),c=S.getPlastic(7901340,.3,0),l=S.createBlock(3.2,2.6,2.6,o);l.position.y=1.3,n.add(l);const h=new k(new le(2.6,1.6,4),a);h.position.y=3.4,h.rotation.y=Math.PI/4,n.add(h);const u=S.createBlock(.6,3.2,.6,c);u.position.set(.9,2.6,.6),n.add(u),[0,.4,.8].forEach((f,g)=>{const v=new k(new jt(.2+g*.08,8,8),S.WhitePlastic);v.position.set(.9+Math.sin(g)*.15,4.4+f,.6),n.add(v)});const d=S.createBlock(1.2,.6,.6,S.getPlastic(9268835,.35,0));d.position.set(i*1.8,.3,0),n.add(d)}else if(r===2){const o=S.getPlastic(58879,.1,0),a=S.getPlastic(6111287,.3,0),c=S.getPlastic(10395294,.3,0),l=S.createBlock(2.4,.08,3.6,o);l.position.set(0,.04,0),n.add(l),[-.8,.2,.7].forEach((u,d)=>{const f=new k(new jt(.22,6,6),c);f.position.set(u,.12,(d-1)*.8),f.scale.set(1.4,.6,1.1),n.add(f)});const h=S.createBlock(1.2,.2,2.2,a);h.position.set(0,.35,0),n.add(h),[-.55,.55].forEach(u=>{const d=S.createBlock(.08,.45,2.2,a);d.position.set(u,.65,0),n.add(d)})}else{const o=S.getPlastic(7162945,.35,0),a=S.createBlock(.12,.12,3.2,o);a.position.set(0,.7,0),n.add(a);const c=S.createBlock(.12,.12,3.2,o);c.position.set(0,.35,0),n.add(c),[-1.4,0,1.4].forEach(h=>{const u=S.createBlock(.18,.9,.18,o);u.position.set(0,.45,h),n.add(u)});const l=S.getPlastic(16717636,.15,0);[-.4,.3].forEach((h,u)=>{const d=new k(new St(.08,.1,.35,8),S.WhitePlastic);d.position.set(h,.18,.8+u*.3),n.add(d);const f=new k(new jt(.24,8,8),l);f.position.set(h,.36,.8+u*.3),f.scale.set(1,.6,1),n.add(f)})}return n},buildWideBackdrop:(t,e)=>{const n=new Ct;if(e%2===0){const r=S.getPlastic(1793568,.3,0),o=S.getPlastic(5125166,.4,0);[-2.4,0,2.4].forEach((a,c)=>{const l=8.5+c*1.5,h=new k(new St(.32,.48,l,8),o);h.position.set(a,l*.5,c%2===0?1.2:-1.2),n.add(h);for(let u=0;u<5;u++){const d=new k(new le(2.6-u*.4,2.4,8),r);d.position.set(a,l*.38+u*1.5,c%2===0?1.2:-1.2),n.add(d)}})}else{const r=S.getPlastic(6111287,.4,0),o=S.getPlastic(3622735,.3,0),a=S.createBlock(5.4,3.6,4.2,r);a.position.y=1.8,n.add(a);const c=new k(new le(4.4,2.5,4),o);c.position.set(0,4.6,0),c.rotation.y=Math.PI/4,n.add(c);const l=S.createBlock(.8,4.4,.8,S.getPlastic(7901340,.4,0));l.position.set(1.9,3.4,.8),n.add(l)}return n}}),w(Qe,"pierBiome",{name:"Amusement Pier",roadColor:9795021,curbColor:58879,sidewalkColor:13538264,skyColor:6056896,fogColor:7964363,groundColor:2001125,buildSceneryProp:(t,e)=>{const n=new Ct,i=t==="left"?-1:1,r=e%4;if(r===0){const o=S.getPlastic(16766464,.15,0),a=new k(new Oe(3.2,.15,8,24),o);a.position.y=4.2,a.rotation.y=i*.3,n.add(a);const c=new k(new St(.3,.3,.2,12),S.Chrome);c.position.y=4.2,n.add(c),[-1.4,1.4].forEach(l=>{const h=new k(new St(.12,.14,4.8,8),S.getPlastic(3622735,.2,0));h.position.set(l,2.4,0),h.rotation.z=-l*.18,n.add(h)})}else if(r===1){const o=S.getPlastic(16717636,.15,0),a=new k(new Oe(2.6,.2,8,24),o);a.position.set(0,3,0),a.rotation.y=t==="left"?.3:-.3,n.add(a),[-1.8,1.8].forEach(c=>{const l=S.createBlock(.25,3.2,.25,S.WhitePlastic);l.position.set(c,1.6,0),n.add(l)})}else if(r===2){const o=S.getPlastic(58879,.18,0),a=S.createBlock(2.2,2.4,1.8,o);a.position.y=1.2,n.add(a);const c=S.createBlock(2.6,.55,.2,S.getPlastic(16771899,.15,0));c.position.set(0,2.45,.95),n.add(c);const l=new k(new jt(.42,8,8),S.getPlastic(9268835,.3,0));l.position.set(0,1.4,1),n.add(l)}else{const o=new k(new St(.1,.1,4.2,8),S.WhitePlastic);o.position.y=2.1,n.add(o);const a=[16771899,58879,16717636,7798531,14696699];for(let c=0;c<5;c++){const l=new k(new jt(.38,10,10),S.getPlastic(a[c],.12,0));l.position.set(Math.sin(c*1.3)*.45,4.2+c*.25,Math.cos(c*1.3)*.45),n.add(l)}}return n},buildWideBackdrop:(t,e)=>{const n=new Ct;if(e%2===0){const r=new k(new Oe(5.5,.22,8,30),S.getPlastic(16766464,.15,0));r.position.y=7,r.rotation.y=t==="left"?.35:-.35,n.add(r),[-2.2,2.2].forEach(o=>{const a=new k(new St(.18,.22,8,8),S.getPlastic(3622735,.2,0));a.position.set(o,4,0),a.rotation.z=-o*.15,n.add(a)})}else{const r=new k(new le(4.2,4.5,10),S.getPlastic(16717636,.15,0));r.position.y=2.25,n.add(r)}return n}}),w(Qe,"cyberBiome",{name:"Cyber Circuit",roadColor:3754411,curbColor:58998,sidewalkColor:5533306,skyColor:2001125,fogColor:4367861,groundColor:35195,buildSceneryProp:(t,e)=>{const n=new Ct,i=e%3;if(i===0){const r=S.getPlastic(58879,.1,0),o=S.getPlastic(3622735,.2,0),a=S.createBlock(1.6,.7,1.6,o);a.position.y=.35,n.add(a);const c=new k(new St(.35,.4,5,6),r);c.position.y=2.85,n.add(c),[3.5,4.6].forEach(l=>{const h=new k(new Oe(.75,.08,8,16),S.getPlastic(7798531,.1,0));h.position.y=l,h.rotation.x=Math.PI/2,n.add(h)})}else if(i===1){const r=S.createBlock(.9,4.2,.9,S.getPlastic(16717636,.2,0));r.position.y=2.1,n.add(r);const o=new k(new le(.6,1,3),S.getPlastic(16776960,.1,0));o.position.set(0,4.3,0),o.rotation.z=t==="left"?-Math.PI/2:Math.PI/2,n.add(o)}else{const r=S.createBlock(1.8,2.8,1.6,S.getPlastic(4342338,.25,0));r.position.y=1.4,n.add(r),[1,1.7,2.3].forEach(o=>{const a=S.createBlock(1.85,.15,.9,S.getPlastic(58879,.1,0));a.position.set(0,o,0),n.add(a)})}return n},buildWideBackdrop:(t,e)=>{const n=new Ct,i=S.createBlock(4.5,14+e%3*3,4.5,S.getPlastic(1713022,.15,0));i.position.y=7,n.add(i);const r=new k(new St(.12,.2,5,6),S.getPlastic(58879,.1,0));return r.position.y=16.5,n.add(r),n}}),w(Qe,"candyBiome",{name:"Candy Wonderland",roadColor:4854924,curbColor:16774557,sidewalkColor:13538264,skyColor:16301008,fogColor:16301008,groundColor:16764092,buildSceneryProp:(t,e)=>{const n=new Ct,i=e%3;if(i===0){const r=new k(new St(.14,.14,4,8),S.WhitePlastic);r.position.y=2,n.add(r);const o=new k(new St(1.4,1.4,.35,18),S.getPlastic(16728193,.15,0));o.rotation.x=Math.PI/2,o.rotation.y=t==="left"?.3:-.3,o.position.y=4,n.add(o);const a=new k(new St(.8,.8,.38,12),S.WhitePlastic);a.rotation.x=Math.PI/2,a.position.y=4,n.add(a)}else if(i===1){const r=S.getPlastic(58998,.15,0),o=S.createBlock(1.4,2,1.2,r);o.position.y=1,n.add(o);const a=new k(new jt(.65,10,10),r);a.position.y=2.35,n.add(a),[-.45,.45].forEach(c=>{const l=new k(new jt(.22,6,6),r);l.position.set(c,2.9,0),n.add(l)})}else{const r=new k(new St(1.3,.9,1.2,12),S.getPlastic(14142664,.3,0));r.position.y=.6,n.add(r);const o=new k(new jt(1.15,12,12),S.getPlastic(8445674,.18,0));o.position.y=1.7,n.add(o);const a=new k(new jt(.35,8,8),S.getPlastic(13959168,.1,0));a.position.y=2.8,n.add(a)}return n},buildWideBackdrop:(t,e)=>{const n=new Ct,i=10+e%3*2,r=new k(new St(.5,.5,i,12),S.WhitePlastic);r.position.y=i*.5,n.add(r);const o=new k(new jt(3,12,12),S.getPlastic(16728193,.15,0));return o.position.y=i+1.5,n.add(o),n}});const Bo=new St(.42,.42,.14,16);Bo.rotateX(Math.PI/2);const Oo=new on(2.7,5);Oo.rotateX(-Math.PI/2);const yp=new Bi({color:5227511,roughness:.05,metalness:.1,transparent:!0,opacity:.75}),Ep=new Bi({color:14808574,roughness:.05,metalness:.1,transparent:!0,opacity:.75}),$e=36,Pe=11.2,Ei=$e,nn=new I;class Tp{constructor(){w(this,"group");w(this,"chunkIndex",0);w(this,"biome","boardwalk");w(this,"obstacles",[]);w(this,"pickups",[]);w(this,"roadMesh");w(this,"leftCurb");w(this,"rightCurb");w(this,"leftSidewalk");w(this,"rightSidewalk");w(this,"leftLandscape");w(this,"rightLandscape");w(this,"oceanMesh");w(this,"sceneryGroup",new Ct);this.group=new Ct,this.buildBaseRoad(),this.group.add(this.sceneryGroup)}buildBaseRoad(){const t=new on(Pe,Ei);t.rotateX(-Math.PI/2),this.roadMesh=new k(t,S.getPlastic(16769154,.35,0)),this.roadMesh.receiveShadow=!0,this.group.add(this.roadMesh);const e=new ze(.6,.35,Ei);this.leftCurb=new k(e,S.getPlastic(5099745,.25,0)),this.leftCurb.position.set(-Pe/2-.3,.175,0),this.leftCurb.receiveShadow=!0,this.group.add(this.leftCurb),this.rightCurb=new k(e,S.getPlastic(5099745,.25,0)),this.rightCurb.position.set(Pe/2+.3,.175,0),this.rightCurb.receiveShadow=!0,this.group.add(this.rightCurb);const n=new on(8,Ei);n.rotateX(-Math.PI/2),this.leftSidewalk=new k(n,S.getPlastic(16775620,.45,0)),this.leftSidewalk.position.set(-Pe/2-4.3,-.01,0),this.leftSidewalk.receiveShadow=!0,this.group.add(this.leftSidewalk),this.rightSidewalk=new k(n,S.getPlastic(16775620,.45,0)),this.rightSidewalk.position.set(Pe/2+4.3,-.01,0),this.rightSidewalk.receiveShadow=!0,this.group.add(this.rightSidewalk);const i=new on(80,Ei);i.rotateX(-Math.PI/2),this.leftLandscape=new k(i,S.getPlastic(8505220,.5,0)),this.leftLandscape.position.set(-Pe/2-48,-.04,0),this.leftLandscape.receiveShadow=!0,this.group.add(this.leftLandscape),this.rightLandscape=new k(i,S.getPlastic(8505220,.5,0)),this.rightLandscape.position.set(Pe/2+48,-.04,0),this.rightLandscape.receiveShadow=!0,this.group.add(this.rightLandscape);const r=new on(75,Ei);r.rotateX(-Math.PI/2),this.oceanMesh=new k(r,S.getPlastic(45311,.08,0)),this.oceanMesh.position.set(Pe/2+45.5,-.02,0),this.oceanMesh.receiveShadow=!0,this.group.add(this.oceanMesh);const o=S.getPlastic(3622735,.4,0),a=S.getPlastic(16777215,.15,0),c=new ze(.24,.04,1.8),l=new ze(Pe-.2,.02,.12),h=new St(.18,.18,.08,10),u=S.getPlastic(16777215,.2,0);for(let d=-$e/2+2;d<$e/2;d+=3.6){const f=new k(l,o);f.position.set(0,.01,d),f.receiveShadow=!0,this.group.add(f),[-3.2/2,gn[2]/2].forEach(g=>{const v=new k(c,a);v.position.set(g,.025,d),v.receiveShadow=!0,this.group.add(v)}),[-Pe/2-.3,Pe/2+.3].forEach(g=>{const v=new k(h,u);v.position.set(g,.38,d),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v)})}}init(t,e,n,i=!1,r=1){this.chunkIndex=t,this.biome=e,this.group.position.set(0,0,n),this.group.rotation.set(0,0,0);const o=Qe.getBiome(e);this.roadMesh.material=S.getPlastic(o.roadColor,.35,0),this.leftCurb.material=S.getPlastic(o.curbColor,.25,0),this.rightCurb.material=S.getPlastic(o.curbColor,.25,0),this.leftSidewalk.material=S.getPlastic(o.sidewalkColor,.45,0),this.rightSidewalk.material=S.getPlastic(o.sidewalkColor,.45,0);const a=S.getPlastic(o.groundColor,.45,0);this.leftLandscape.material=a,this.rightLandscape.material=a;const c=e==="boardwalk"||e==="pier";this.oceanMesh.visible=c,e==="boardwalk"&&(this.rightSidewalk.material=S.getPlastic(16774557,.45,0),this.rightLandscape.material=S.getPlastic(16769154,.45,0)),this.clearDynamicObjects();let l=this.chunkIndex*12;for(let h=-$e/2+3.6;h<=$e/2-3.6;h+=7.2){const u=o.buildSceneryProp("left",l++),d=-Pe/2-(l%2===0?3.8:2.6);u.position.set(d,0,h),this.sceneryGroup.add(u);const f=o.buildSceneryProp("right",l++),g=Pe/2+(l%2===0?3.8:2.6);f.position.set(g,0,h),this.sceneryGroup.add(f)}for(let h=-$e/2+7.2;h<=$e/2-7.2;h+=14.4){const u=o.buildWideBackdrop("left",l++);u.position.set(-Pe/2-24,0,h),this.sceneryGroup.add(u);const d=o.buildWideBackdrop("right",l++),f=e==="boardwalk"?32:24;d.position.set(Pe/2+f,0,h),this.sceneryGroup.add(d)}i||this.populateObstaclesAndPickups(r)}populateObstaclesAndPickups(t=1){const e=t===1?.8:t===2?.85:.9;if(Math.random()<e){const r=Math.floor(Math.random()*3),o=this.selectRandomObstacle(t);this.spawnObstacle(o,r,-8);const a=t===2?.25:t>=3?.35:0;if(a>0&&Math.random()<a){const c=[0,1,2].filter(d=>d!==r),l=c[Math.floor(Math.random()*c.length)],h=Math.random(),u=h<.45?"low_barrier":h<.75?"traffic_cone":"slick_puddle";this.spawnObstacle(u,l,-8)}}const i=Math.random();if(i<.45){const r=Math.floor(Math.random()*3),o=Math.random();let a="vehicle_key";o<.45?a="vehicle_key":o<.8?a="nitro_boost":o<.9?a="toy_wrench":a="heart_shield",this.spawnPickup(a,r,8)}else if(i<.75){const r=Math.floor(Math.random()*3);[-2,0,2].forEach(a=>{this.spawnPickup("star_coin",r,8+a)})}else if(i<.82){const r=Math.floor(Math.random()*3);this.spawnPickup("diamond_gem",r,8)}}selectRandomObstacle(t=1){const e=Math.random();return t===1?e<.16?"slick_puddle":e<.46?"low_barrier":e<.72?"high_arch":e<.88?"traffic_cone":"crate_stack":t===2?e<.15?"slick_puddle":e<.4?"low_barrier":e<.65?"high_arch":e<.82?"roadblock":e<.92?"traffic_cone":"crate_stack":t===3?e<.14?"slick_puddle":e<.35?"low_barrier":e<.55?"laser_gate":e<.75?"robot_patrol":e<.9?"roadblock":"crate_stack":e<.12?"slick_puddle":e<.35?"laser_gate":e<.6?"robot_patrol":e<.85?"roadblock":"high_arch"}spawnObstacle(t,e,n){const i=new Ct,r=gn[e];i.position.set(r,0,n);let o=!1;const a=new I(-.75,0,-.25),c=new I(.75,.75,.25);if(t==="low_barrier"){const h=S.getPlastic(16717636,.15,0),u=S.WhitePlastic,d=S.getPlastic(16771899,.15,0),f=S.createBlock(2,.28,.2,h);f.position.y=.65,i.add(f),[-.6,-.2,.2,.6].forEach(g=>{const v=S.createBlock(.18,.3,.22,d);v.position.set(g,.65,0),i.add(v)}),[-.85,.85].forEach(g=>{const v=S.createBlock(.18,.7,.18,u);v.position.set(g,.35,0),i.add(v);const p=S.createBlock(.24,.08,.45,u);p.position.set(g,.04,0),i.add(p)}),a.set(-.75,0,-.2),c.set(.75,.7,.2),o=!0}else if(t==="high_arch"){const h=S.getPlastic(2171169,.2,0),u=S.getPlastic(16766464,.15,0),d=S.getPlastic(16717636,.15,0),f=S.createBlock(2.2,.55,.25,u);f.position.y=1.45,i.add(f),[-.6,-.2,.2,.6].forEach(g=>{const v=S.createBlock(.18,.57,.27,d);v.position.set(g,1.45,0),i.add(v)}),[-1.25,1.25].forEach(g=>{const v=S.createBlock(.22,1.8,.22,h);v.position.set(g,.9,0),i.add(v);const p=new k(Zt.getSphere(.12,8,8),S.getPlastic(16717636,.1,0));p.position.set(g,1.6,.15),i.add(p)}),a.set(-.75,1.05,-.25),c.set(.75,1.8,.25),o=!0}else if(t==="crate_stack"){const h=S.getPlastic(9268835,.35,0),u=S.createBlock(.85,.85,.85,h);u.position.y=.42,S.addStuds(u,.75,.75,.42,h,2,2),i.add(u);const d=S.createBlock(.65,.65,.65,h);d.position.set(.08,1.15,.04),i.add(d),a.set(-.45,0,-.35),c.set(.45,1.25,.35),o=!0}else if(t==="traffic_cone"){const h=S.getPlastic(16739584,.2,0),u=S.WhitePlastic;[-.4,.4].forEach(d=>{const f=S.createBlock(.45,.08,.45,h);f.position.set(d,.04,0),i.add(f);const g=new k(Zt.getCone(.22,.75,12),h);g.position.set(d,.42,0),i.add(g);const v=new k(Zt.getCylinder(.14,.17,.15,12),u);v.position.set(d,.38,0),i.add(v)}),a.set(-.45,0,-.25),c.set(.45,.65,.25),o=!0}else if(t==="laser_gate"){const h=S.getPlastic(2171169,.2,0),u=S.getPlastic(16717636,.1,0);[-1.25,1.25].forEach(f=>{const g=S.createBlock(.22,2.2,.22,h);g.position.set(f,1.1,0),i.add(g);const v=new k(Zt.getSphere(.16,8,8),S.getPlastic(58879,.1,0));v.position.set(f,1.35,0),i.add(v)});const d=S.createBlock(2.2,.16,.16,u);d.position.y=1.35,i.add(d),a.set(-.75,1,-.25),c.set(.75,1.65,.25),o=!0}else if(t==="robot_patrol"){const h=S.getPlastic(16766464,.2,0),u=S.getPlastic(58879,.2,0),d=new k(Zt.getCylinder(.55,.65,.45,12),h);d.position.y=.32,i.add(d),[-.55,.55].forEach(g=>{const v=new k(Zt.getCylinder(.24,.24,.18,10),u);v.position.set(g,.16,.3),v.rotation.x=Math.PI/2,i.add(v)});const f=new k(Zt.getSphere(.2,10,10),S.getPlastic(16717636,.1,0));f.position.y=.65,i.add(f),a.set(-.45,0,-.45),c.set(.45,.75,.45),o=!0}else if(t==="slick_puddle"){const h=this.biome==="forest",u=h?Ep:yp,d=new k(Oo,u);d.position.y=.025,i.add(d);const f=S.getPlastic(h?58879:16771899,.1,0),g=Zt.getCylinder(.14,.14,.1,10);[-1.15,1.15].forEach(v=>{[-2,0,2].forEach(p=>{const m=new k(g,f);m.position.set(v,.05,p),i.add(m)})}),a.set(-1.2,0,-2.4),c.set(1.2,.8,2.4),o=!0}else{const h=S.getPlastic(13959168,.25,0),u=S.WhitePlastic,d=S.createBlock(2.2,1.1,.55,h);d.position.y=.55,i.add(d),[-.55,0,.55].forEach(v=>{const p=S.createBlock(.28,1.12,.57,u);p.position.set(v,.55,0),i.add(p)});const f=Zt.getCylinder(.12,.14,.15,8),g=Zt.getSphere(.14,8,8);[-.8,.8].forEach(v=>{const p=new k(f,S.getPlastic(2171169,.2,0));p.position.set(v,1.15,0),i.add(p);const m=new k(g,S.getPlastic(16755456,.1,0));m.position.set(v,1.28,0),i.add(m)}),a.set(-.85,0,-.3),c.set(.85,1.15,.3),o=!1}this.group.add(i);const l=new wn;this.obstacles.push({mesh:i,type:t,lane:e,z:n,boundingBox:l,hitboxOffsetMin:a,hitboxOffsetMax:c,isSmashed:!1,canSmash:o,isMoving:t==="robot_patrol",patrolBaseX:r,patrolPhase:Math.random()*Math.PI*2})}spawnPickup(t,e,n){const i=new Ct,r=gn[e];if(i.position.set(r,1,n),t==="star_coin"){const a=new k(Bo,S.GoldStar);a.castShadow=!0,i.add(a);const c=new k(Zt.getCone(.2,.18,5),S.getPlastic(16771899,.1,0));c.position.z=.08,i.add(c)}else if(t==="diamond_gem"){const a=new k(Zt.getOctahedron(.45,0),S.CyanGem);a.scale.set(1,1.4,1),a.castShadow=!0,i.add(a)}else if(t==="vehicle_key"){const a=new k(Zt.getTorus(.35,.09,10,16),S.GoldStar);i.add(a);const c=S.createBlock(.1,.45,.08,S.GoldStar);c.position.y=-.45,i.add(c);const l=S.createBlock(.2,.12,.08,S.GoldStar);l.position.set(.08,-.55,0),i.add(l)}else if(t==="heart_shield"){const a=S.getPlastic(16728193,.1,0),c=Zt.getSphere(.22,10,10),l=new k(c,a);l.position.set(-.14,.14,0),i.add(l);const h=new k(c,a);h.position.set(.14,.14,0),i.add(h);const u=new k(Zt.getCone(.35,.5,12),a);u.rotation.z=Math.PI,u.position.set(0,-.12,0),i.add(u)}else if(t==="nitro_boost"){const a=S.getPlastic(58879,.15,0),c=S.getPlastic(16739584,.15,0),l=S.getPlastic(16771584,.1,0),h=new k(Zt.getCylinder(.24,.24,.65,12),a);i.add(h);const u=new k(Zt.getCone(.25,.35,12),c);u.position.y=.45,i.add(u);const d=new k(Zt.getTorus(.26,.04,6,12),l);d.rotation.x=Math.PI/2,i.add(d)}else{const a=S.Chrome,c=new k(Zt.getTorus(.25,.08,8,12,Math.PI*1.5),a);i.add(c);const l=S.createBlock(.12,.55,.08,a);l.position.y=-.38,i.add(l)}this.group.add(i);const o=new wn;this.pickups.push({mesh:i,type:t,lane:e,z:n,boundingBox:o,isCollected:!1})}updateBoundingBoxes(){for(const t of this.obstacles)t.isSmashed||(t.mesh.updateMatrixWorld(!0),t.mesh.getWorldPosition(nn),t.boundingBox.min.copy(nn).add(t.hitboxOffsetMin),t.boundingBox.max.copy(nn).add(t.hitboxOffsetMax));for(const t of this.pickups)t.isCollected||(t.mesh.updateMatrixWorld(!0),t.mesh.getWorldPosition(nn),t.boundingBox.min.set(nn.x-.55,nn.y-.55,nn.z-.55),t.boundingBox.max.set(nn.x+.55,nn.y+.55,nn.z+.55))}updateVisuals(t){for(const e of this.pickups)e.isCollected||(e.mesh.rotation.y+=t*3.5,e.mesh.position.y=1+Math.sin(performance.now()*.003+e.z)*.15);for(const e of this.obstacles)if(!e.isSmashed&&e.isMoving&&typeof e.patrolBaseX=="number"){const n=e.patrolPhase||0;e.mesh.position.x=e.patrolBaseX+Math.sin(performance.now()*.0025+n)*.55,e.mesh.rotation.y+=t*3}}clearDynamicObjects(){for(;this.sceneryGroup.children.length>0;)this.sceneryGroup.remove(this.sceneryGroup.children[0]);for(const t of this.obstacles)this.group.remove(t.mesh);this.obstacles=[];for(const t of this.pickups)this.group.remove(t.mesh);this.pickups=[]}}class wp{constructor(){w(this,"group",new Ct);w(this,"clouds",[]);w(this,"sunGroup",new Ct);w(this,"moonGroup",new Ct);w(this,"starsGroup",new Ct);w(this,"weatherPoints");w(this,"weatherPositions");w(this,"weatherVelocities");w(this,"weatherCount",280);w(this,"weatherMaterial");w(this,"currentBiome","boardwalk");w(this,"weatherType","none");this.buildSun(),this.buildMoon(),this.buildStars(),this.buildClouds(),this.buildWeatherParticles(),this.group.add(this.sunGroup),this.group.add(this.moonGroup),this.group.add(this.starsGroup),this.group.add(this.weatherPoints)}buildSun(){const t=new Bi({color:16773494,emissive:16766287,emissiveIntensity:.95,roughness:.15,metalness:0}),e=new k(new jt(5.2,20,20),t);this.sunGroup.add(e);const n=new xs({color:16771584,transparent:!0,opacity:.45,side:2}),i=new k(new Ms(5.2,8.5,32),n);this.sunGroup.add(i);const r=new xs({color:16766287,transparent:!0,opacity:.22,side:2}),o=new k(new Ms(8.5,13,32),r);this.sunGroup.add(o);const a=S.getPlastic(16771584,.1,0);for(let l=0;l<12;l++){const h=l*Math.PI*2/12,u=new k(new ze(1.2,4.4,.8),a);u.position.set(Math.cos(h)*7.6,Math.sin(h)*7.6,0),u.rotation.z=h+Math.PI/2,this.sunGroup.add(u)}const c=S.getPlastic(16777215,.1,0);[-1,1].forEach(l=>{const h=new k(new le(.8,8,4),c);h.rotation.z=Math.PI/2*l,h.position.set(l*5,0,.2),this.sunGroup.add(h);const u=new k(new le(.8,8,4),c);u.rotation.z=l===1?0:Math.PI,u.position.set(0,l*5,.2),this.sunGroup.add(u)}),this.sunGroup.position.set(22,38,-90)}buildMoon(){const t=S.getPlastic(16775620,.1,0),e=new k(new Oe(3.6,1.2,12,24,Math.PI*1.3),t);e.rotation.z=.5,this.moonGroup.add(e),this.moonGroup.position.set(-28,38,-90),this.moonGroup.visible=!1}buildStars(){const t=new Ce,e=160,n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*160,n[r*3+1]=25+Math.random()*45,n[r*3+2]=-120+Math.random()*120;t.setAttribute("position",new Ke(n,3));const i=new dr({color:16777215,size:1.6,transparent:!0,opacity:.85});this.starsGroup.add(new ba(t,i)),this.starsGroup.visible=!1}buildClouds(){const t=S.getPlastic(16777215,.35,0),e=[{x:-45,y:32,z:-20,scale:1.4,speed:1.2},{x:35,y:36,z:-45,scale:1.6,speed:.9},{x:-25,y:28,z:-70,scale:1.2,speed:1.5},{x:42,y:30,z:-95,scale:1.5,speed:1.1},{x:-38,y:34,z:-125,scale:1.7,speed:.8},{x:28,y:32,z:-150,scale:1.3,speed:1.3},{x:-18,y:38,z:-175,scale:1.5,speed:1},{x:48,y:35,z:-5,scale:1.4,speed:1.4}];for(const n of e){const i=new Ct,r=5;for(let o=0;o<r;o++){const a=1.8+Math.random()*1.2,c=new k(new jt(a,8,8),t);c.position.set((o-2)*1.8,(Math.random()-.5)*.8,(Math.random()-.5)*1.2),c.scale.set(1.1,.8,.9),i.add(c)}i.scale.setScalar(n.scale),i.position.set(n.x,n.y,n.z),this.group.add(i),this.clouds.push({group:i,baseX:n.x,baseY:n.y,baseZ:n.z,speed:n.speed})}}buildWeatherParticles(){this.weatherCount=750;const t=new Ce;this.weatherPositions=new Float32Array(this.weatherCount*3),this.weatherVelocities=new Float32Array(this.weatherCount*3);for(let e=0;e<this.weatherCount;e++)this.resetParticle(e,0,!0);t.setAttribute("position",new Ke(this.weatherPositions,3)),this.weatherMaterial=new dr({color:16777215,size:.2,transparent:!0,opacity:.85}),this.weatherPoints=new ba(t,this.weatherMaterial)}resetParticle(t,e=0,n=!1){const i=t*3;this.weatherPositions[i]=(Math.random()-.5)*48,this.weatherPositions[i+1]=n?Math.random()*22:18+Math.random()*6,this.weatherPositions[i+2]=e-90+Math.random()*110,this.weatherType==="rain"?(this.weatherVelocities[i]=-1.8+(Math.random()-.5)*.6,this.weatherVelocities[i+1]=-(20+Math.random()*8),this.weatherVelocities[i+2]=(Math.random()-.5)*.4):(this.weatherVelocities[i]=(Math.random()-.5)*.7,this.weatherVelocities[i+1]=-(3+Math.random()*2.5),this.weatherVelocities[i+2]=(Math.random()-.5)*.4)}setBiome(t){this.currentBiome=t,t==="boardwalk"?(this.weatherType="none",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1):t==="plaza"?(this.weatherType="rain",this.sunGroup.visible=!1,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(11789820),this.weatherMaterial.size=.32,this.weatherMaterial.opacity=.75):t==="forest"?(this.weatherType="snow",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(16777215),this.weatherMaterial.size=.18,this.weatherMaterial.opacity=.9):t==="cyber"?(this.weatherType="cyber",this.sunGroup.visible=!1,this.moonGroup.visible=!0,this.starsGroup.visible=!0,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(58879),this.weatherMaterial.size=.28,this.weatherMaterial.opacity=.65):(this.weatherType="none",this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1)}update(t,e){for(const n of this.clouds)n.group.position.x+=n.speed*e*.8,n.group.position.x>65&&(n.group.position.x=-65),n.group.position.z=t-90+(n.baseZ%120+120)%120;if(this.sunGroup.position.set(20,36,t-92),this.sunGroup.rotation.z+=e*.12,this.moonGroup.position.set(-24,36,t-92),this.starsGroup.position.z=t-60,this.weatherPoints.visible){const n=this.weatherPoints.geometry.attributes.position.array;for(let i=0;i<this.weatherCount;i++){const r=i*3;this.weatherType==="snow"?n[r]+=(this.weatherVelocities[r]+Math.sin(performance.now()*.003+i)*.4)*e:n[r]+=this.weatherVelocities[r]*e,n[r+1]+=this.weatherVelocities[r+1]*e,n[r+2]+=this.weatherVelocities[r+2]*e,(n[r+1]<.1||n[r+2]>t+12)&&this.resetParticle(i,t,!1)}this.weatherPoints.geometry.attributes.position.needsUpdate=!0}}}const De=new I,ce=new I,or=new I;class bp{constructor(t,e,n,i,r){w(this,"group");w(this,"skyManager",new wp);w(this,"chunks",[]);w(this,"numChunks",10);w(this,"currentBiome","boardwalk");w(this,"chunkCounter",0);w(this,"sceneRenderer");w(this,"particleSystem");w(this,"audioManager");w(this,"gameState");w(this,"floatingText");this.sceneRenderer=t,this.particleSystem=e,this.audioManager=n,this.gameState=i,this.floatingText=r,this.group=new Ct,this.group.add(this.skyManager.group);for(let o=0;o<this.numChunks;o++){const a=new Tp;this.chunks.push(a),this.group.add(a.group)}}reset(t="boardwalk"){this.currentBiome=t,this.chunkCounter=0;const e=Qe.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(e.skyColor,e.groundColor,e.fogColor),this.skyManager.setBiome(this.currentBiome);for(let n=0;n<this.numChunks;n++){const i=this.chunks[n],r=-n*$e;i.init(this.chunkCounter++,this.currentBiome,r,n<=1,this.gameState.currentLevel)}}getCurrentBiomeName(){return Qe.getBiome(this.currentBiome).name}clearObstaclesAhead(t=40){for(const e of this.chunks)for(const n of e.obstacles)if(!n.isSmashed){const i=e.group.position.z+n.mesh.position.z;i>=-t&&i<=15&&(n.isSmashed=!0,n.mesh.visible=!1)}}update(t,e){const i=this.gameState.speed*e;for(const c of this.chunks)c.group.position.z+=i;this.updateBiomeProgression(),this.recycleChunks();const r=t.z;for(const c of this.chunks)c.updateVisuals(e),Math.abs(c.group.position.z-r)<$e*2.2&&c.updateBoundingBoxes();const o=this.checkCollisions(t),a=this.gameState.mode==="stage"&&this.gameState.checkStageCompletion();return this.skyManager.update(t.z,e),{crashed:o,stageWon:a}}updateBiomeProgression(){if(this.gameState.mode==="stage"){const e=this.gameState.getActiveStage();if(e&&e.biome!==this.currentBiome){this.currentBiome=e.biome;const n=Qe.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(n.skyColor,n.groundColor,n.fogColor),this.skyManager.setBiome(this.currentBiome)}return}const t=this.gameState.getCurrentLevelDef().biome;if(t!==this.currentBiome){this.currentBiome=t;const e=Qe.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(e.skyColor,e.groundColor,e.fogColor),this.skyManager.setBiome(this.currentBiome)}}recycleChunks(){for(const t of this.chunks)if(t.group.position.z>$e){let e=0;for(const i of this.chunks)i.group.position.z<e&&(e=i.group.position.z);const n=e-$e;t.init(this.chunkCounter++,this.currentBiome,n,!1,this.gameState.currentLevel)}}checkCollisions(t){const e=t.getBoundingBox(),n=t.group.position,i=t.mode==="in_vehicle",r=tn[t.vehicleId],o=ke[t.characterId],a=o.hasPermanentMagnet,c=a||i&&r.hasMagnetAura||t.magnetTimer>0,l=a?5.5:6,h=i&&r.hasMagnetAura?8:l*o.magnetRangeBonus;for(const u of this.chunks)if(!(Math.abs(u.group.position.z-n.z)>$e*1.2)){for(const d of u.pickups)if(!d.isCollected&&(d.mesh.getWorldPosition(De),c&&d.type==="star_coin"&&De.distanceTo(n)<h&&(or.copy(n),u.group.worldToLocal(or),d.mesh.position.lerp(or,.24)),e.intersectsBox(d.boundingBox)))if(d.isCollected=!0,d.mesh.visible=!1,d.type==="star_coin"){const f=i&&r.coinMultiplier||1;this.gameState.addCoins(f),this.audioManager.playCoinSound(),$t.lightImpact(),this.particleSystem.emitPickupSparkles(De,16766720);const g=15*this.gameState.multiplier*f;this.floatingText.spawn(De,`+${g}${f>1?" (2x!)":""}`,"#FFD700","⭐")}else d.type==="diamond_gem"?(this.gameState.addGems(1),this.audioManager.playGemSound(),$t.mediumImpact(),this.particleSystem.emitPickupSparkles(De,58879),this.floatingText.spawn(De,"+100 (💎+1)","#00E5FF","💎",!0)):d.type==="nitro_boost"?(t.addBoostCharge(),$t.heavyImpact(),this.particleSystem.emitPickupSparkles(De,58879),this.floatingText.spawn(De,"+1 NITRO BOOST! 🚀","#00E5FF","🚀",!0)):d.type==="vehicle_key"?(t.mountVehicle(),$t.heavyImpact(),this.particleSystem.emitPickupSparkles(De,16766287),this.floatingText.spawn(De,"MOUNT RIDE!","#FF4081","🔑",!0)):d.type==="heart_shield"?(t.hasShield=!0,this.audioManager.playGemSound(),$t.mediumImpact(),this.particleSystem.emitPickupSparkles(De,16728193),this.floatingText.spawn(De,"SHIELD ON!","#FF4081","💖",!0)):d.type==="toy_wrench"&&(i&&(t.vehicleDuration=Math.min(t.maxVehicleDuration,t.vehicleDuration+10)),this.audioManager.playMountSound(),$t.lightImpact(),this.particleSystem.emitPickupSparkles(De,58998),this.floatingText.spawn(De,"+10s FUEL","#00E676","🔧"));for(const d of u.obstacles)if(!d.isSmashed&&e.intersectsBox(d.boundingBox)){if(d.mesh.getWorldPosition(ce),d.type==="low_barrier"&&(t.y>.45||t.movementState==="jumping")||(d.type==="high_arch"||d.type==="laser_gate")&&(t.movementState==="sliding"||t.y<.2&&e.max.y<d.boundingBox.min.y))continue;if(d.type==="slick_puddle"){d.isSmashed=!0,d.mesh.visible=!1;const f=t.movementState==="sliding";this.audioManager.playWaterSplashSound(),this.audioManager.playDriftScreechSound(),f?(this.gameState.addSmash(),$t.mediumImpact(),t.triggerDrift(Math.random()>.5?1:-1,!0),this.particleSystem.emitDriftSmokeSpray(ce,!0),this.particleSystem.emitGroundSparks(ce,58879),this.floatingText.spawn(ce,"SICK DRIFT! 🏎️💨 +150","#00E5FF","🌊",!0)):($t.heavyImpact(),t.triggerDrift(Math.random()>.5?1:-1,!0),this.particleSystem.emitDriftSmokeSpray(ce,!0),this.particleSystem.emitGroundSparks(ce,16748800),this.floatingText.spawn(ce,"⚠️ SLICK SKID! SLIDE TO DRIFT!","#FF9100","⚠️",!0));continue}if(t.isScreenshotMode)continue;if(i){if(t.turboTimer>0){d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$t.heavyImpact(),this.particleSystem.emitSmashDebris(ce),this.floatingText.spawn(ce,"TURBO SMASH! +100","#FFEA00","⚡",!0);continue}if(d.type==="crate_stack"||d.type==="traffic_cone"){d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$t.mediumImpact(),this.particleSystem.emitSmashDebris(ce),this.floatingText.spawn(ce,"+50","#FF7043","💥");continue}if(t.vanArmorShield){t.vanArmorShield=!1,d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$t.heavyImpact(),this.particleSystem.emitSmashDebris(ce,[16766287,16738740,58879]),this.floatingText.spawn(ce,"ARMOR SAVED!","#FFD54F","🛡️",!0);continue}d.isSmashed=!0,d.mesh.visible=!1,this.audioManager.playCrashSound(),$t.heavyImpact(),this.particleSystem.emitSmashDebris(ce,[13959168,16771899,16728193,58879]),this.floatingText.spawn(ce,"CRASH EJECT!","#FF1744","💥",!0),t.dismountVehicle(!0);continue}if(d.type==="crate_stack"||d.type==="traffic_cone"){d.isSmashed=!0,d.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),$t.mediumImpact(),this.particleSystem.emitSmashDebris(ce),this.floatingText.spawn(ce,"+30","#FF7043","💥");continue}if(t.invulnerabilityTimer>0){d.isSmashed=!0,d.mesh.visible=!1,this.audioManager.playSmashSound(),$t.mediumImpact(),this.particleSystem.emitSmashDebris(ce,[58879,16766720]),this.floatingText.spawn(ce,"INVINCIBLE!","#00E5FF","⭐");continue}if(t.hasShield){t.hasShield=!1,d.isSmashed=!0,d.mesh.visible=!1,this.audioManager.playSmashSound(),$t.mediumImpact(),this.particleSystem.emitSmashDebris(ce,[16728193,16777215]),this.floatingText.spawn(ce,"SHIELD SAVED!","#FF4081","💖");continue}return this.audioManager.playCrashSound(),$t.heavyImpact(),this.particleSystem.emitSmashDebris(ce,[16732754,2503224]),t.movementState="crashed",!0}}return!1}}class Ap{constructor(t,e,n){w(this,"gameState");w(this,"player");w(this,"onConfirmCallback");w(this,"selectedCharacter");w(this,"selectedVehicle");w(this,"selectedPalette");w(this,"activeTab","characters");this.gameState=t,this.player=e,this.onConfirmCallback=n,this.selectedCharacter=t.characterId,this.selectedVehicle=t.vehicleId,this.selectedPalette=t.paletteId,this.initEventListeners()}initEventListeners(){const t=document.getElementById("tab-characters"),e=document.getElementById("tab-vehicles"),n=document.getElementById("roster-characters"),i=document.getElementById("roster-vehicles");t?.addEventListener("click",()=>{this.activeTab="characters",t.classList.add("active"),e?.classList.remove("active"),n?.classList.remove("hidden"),i?.classList.add("hidden"),this.syncShowcase()}),e?.addEventListener("click",()=>{this.activeTab="vehicles",e.classList.add("active"),t?.classList.remove("active"),i?.classList.remove("hidden"),n?.classList.add("hidden"),this.syncShowcase()});const r=document.querySelectorAll("#roster-characters .roster-card");r.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");if(!(!h||!ke[h])){if(!this.gameState.isCharacterUnlocked(h)){this.gameState.unlockCharacter(h)?(this.selectedCharacter=h,this.refreshCardLocks(),this.syncShowcase()):(l.classList.add("shake-anim"),setTimeout(()=>l.classList.remove("shake-anim"),400));return}this.selectedCharacter=h,r.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase()}})});const o=document.querySelectorAll("#roster-vehicles .roster-card");o.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");if(!(!h||!tn[h])){if(!this.gameState.isVehicleUnlocked(h)){this.gameState.unlockVehicle(h)?(this.selectedVehicle=h,this.refreshCardLocks(),this.syncShowcase()):(l.classList.add("shake-anim"),setTimeout(()=>l.classList.remove("shake-anim"),400));return}this.selectedVehicle=h,o.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase()}})});const a=document.querySelectorAll(".swatch-btn");a.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-palette");h&&(this.selectedPalette=h,a.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase())})}),document.getElementById("btn-select-confirm")?.addEventListener("click",()=>{this.confirmLoadout()})}open(){this.selectedCharacter=this.gameState.characterId,this.selectedVehicle=this.gameState.vehicleId,this.selectedPalette=this.gameState.paletteId,this.refreshCardLocks(),this.syncShowcase()}refreshCardLocks(){const t=document.getElementById("garage-gems");t&&(t.innerText=`${this.gameState.totalGemsSaved}`);const e=document.getElementById("garage-coins");e&&(e.innerText=`${this.gameState.totalCoinsSaved}`),document.querySelectorAll("#roster-characters .roster-card").forEach(n=>{const i=n.getAttribute("data-id"),r=this.gameState.isCharacterUnlocked(i),o=ke[i];if(n.getAttribute("data-id")===this.selectedCharacter?n.classList.add("active"):n.classList.remove("active"),r){n.classList.remove("locked");const a=n.querySelector(".lock-tag");a&&a.remove()}else{n.classList.add("locked");let a=n.querySelector(".lock-tag");a||(a=document.createElement("div"),a.className="lock-tag",n.appendChild(a)),a.innerHTML=`🔒 UNLOCK: 💎 ${o.gemPrice}`}}),document.querySelectorAll("#roster-vehicles .roster-card").forEach(n=>{const i=n.getAttribute("data-id"),r=this.gameState.isVehicleUnlocked(i),o=tn[i];if(n.getAttribute("data-id")===this.selectedVehicle?n.classList.add("active"):n.classList.remove("active"),r){n.classList.remove("locked");const a=n.querySelector(".lock-tag");a&&a.remove()}else{n.classList.add("locked");let a=n.querySelector(".lock-tag");a||(a=document.createElement("div"),a.className="lock-tag",n.appendChild(a)),a.innerHTML=`🔒 UNLOCK: 💎 ${o.gemPrice}`}}),document.querySelectorAll(".swatch-btn").forEach(n=>{n.getAttribute("data-palette")===this.selectedPalette?n.classList.add("active"):n.classList.remove("active")})}syncShowcase(){this.player.setCustomization(this.selectedCharacter,this.selectedVehicle,this.selectedPalette),this.player.setShowcasePreview(this.activeTab==="vehicles")}confirmLoadout(){this.player.setShowcasePreview(!1),this.gameState.characterId=this.selectedCharacter,this.gameState.vehicleId=this.selectedVehicle,this.gameState.paletteId=this.selectedPalette,this.gameState.savePersistedData();const t=document.getElementById("menu-selected-avatar");t&&(t.innerText=`Avatar: ${ke[this.selectedCharacter].name}`);const e=document.getElementById("menu-selected-vehicle");e&&(e.innerText=`Ride: ${tn[this.selectedVehicle].name}`),this.onConfirmCallback()}}class Cp{constructor(t,e,n){w(this,"gameState");w(this,"player");w(this,"audioManager");w(this,"garageView");w(this,"hudScreen");w(this,"mainMenu");w(this,"garageScreen");w(this,"stageScreen");w(this,"instructionsScreen");w(this,"gameOverScreen");w(this,"pauseScreen");w(this,"btnSound");w(this,"btnPause");w(this,"biomeBanner");w(this,"starCount");w(this,"gemCount");w(this,"distanceCounterWrap");w(this,"distanceVal");w(this,"speedMeter");w(this,"multiplierBadge");w(this,"missionCard");w(this,"missionTitle");w(this,"missionProgressBar");w(this,"missionFraction");w(this,"vehicleMeterContainer");w(this,"vehicleMeterName");w(this,"vehicleMeterAbility");w(this,"vehicleMeterFill");w(this,"vehicleTimerText");w(this,"hudLevelBadge");w(this,"hudLevelName");w(this,"levelProgressBar");w(this,"levelFraction");w(this,"levelUpBanner");w(this,"levelUpSub");w(this,"actionPrompt");w(this,"menuBestDistance");w(this,"menuBestScore");w(this,"btnHudBoost");w(this,"hudBoostBadge");w(this,"saveMeModal");w(this,"btnSaveMeAction");w(this,"saveMeBtnIcon");w(this,"saveMeBtnTitle");w(this,"saveMeBtnSub");w(this,"btnSaveMeForfeit");w(this,"btnSaveMeNoAds");w(this,"vipStoreModal");w(this,"btnBuyNoAds");w(this,"btnRestorePurchases");w(this,"btnCloseVip");w(this,"btnTopNoAds");w(this,"btnMenuNoAds");w(this,"btnPauseNoAds");w(this,"touchControls",null);w(this,"touchControlsTimeout",null);w(this,"lastBiomeName","");w(this,"lastStarCoins",-1);w(this,"lastDiamondGems",-1);w(this,"lastDistanceFloor",-1);w(this,"lastSpeedFloor",-1);w(this,"lastMultiplier",-1);w(this,"lastLevel",-1);w(this,"lastLevelPct",-1);w(this,"lastBoostCharges",-1);w(this,"lastVehicleMode",!1);w(this,"lastVehicleDuration",-1);w(this,"onStartGame",()=>{});w(this,"onPauseGame",()=>{});w(this,"onResumeGame",()=>{});w(this,"onRestartGame",()=>{});w(this,"onTriggerBoost",()=>{});w(this,"onQuitToMenu",()=>{});w(this,"onSaveMeRevive",()=>{});w(this,"onSaveMeForfeit",()=>{});w(this,"onBuyNoAds",()=>{});w(this,"onRestorePurchases",()=>{});this.gameState=t,this.player=e,this.audioManager=n,this.cacheDOMElements(),this.garageView=new Ap(this.gameState,this.player,()=>{this.closeGarage()}),this.bindEvents(),this.updateMenuStats()}cacheDOMElements(){this.hudScreen=document.getElementById("hud-screen"),this.mainMenu=document.getElementById("main-menu"),this.garageScreen=document.getElementById("garage-screen"),this.stageScreen=document.getElementById("stage-screen"),this.instructionsScreen=document.getElementById("instructions-screen"),this.gameOverScreen=document.getElementById("game-over-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.btnSound=document.getElementById("btn-sound"),this.btnPause=document.getElementById("btn-pause"),this.biomeBanner=document.getElementById("biome-banner"),this.starCount=document.getElementById("star-count"),this.gemCount=document.getElementById("gem-count"),this.distanceCounterWrap=document.getElementById("distance-counter-wrap"),this.distanceVal=document.getElementById("distance-value"),this.speedMeter=document.getElementById("speed-meter"),this.multiplierBadge=document.getElementById("multiplier-badge"),this.hudLevelBadge=document.getElementById("hud-level-badge"),this.hudLevelName=document.getElementById("hud-level-name"),this.levelProgressBar=document.getElementById("level-progress-bar"),this.levelFraction=document.getElementById("level-fraction"),this.levelUpBanner=document.getElementById("level-up-banner"),this.levelUpSub=document.getElementById("level-up-sub"),this.missionCard=document.getElementById("mission-card"),this.missionTitle=document.getElementById("mission-title"),this.missionProgressBar=document.getElementById("mission-progress-bar"),this.missionFraction=document.getElementById("mission-fraction"),this.vehicleMeterContainer=document.getElementById("vehicle-meter-container"),this.vehicleMeterName=document.getElementById("vehicle-meter-name"),this.vehicleMeterAbility=document.getElementById("vehicle-meter-ability"),this.vehicleMeterFill=document.getElementById("vehicle-meter-fill"),this.vehicleTimerText=document.getElementById("vehicle-timer-text"),this.actionPrompt=document.getElementById("action-prompt"),this.menuBestDistance=document.getElementById("menu-best-distance"),this.menuBestScore=document.getElementById("menu-best-score"),this.btnHudBoost=document.getElementById("btn-hud-boost"),this.hudBoostBadge=document.getElementById("hud-boost-badge"),this.saveMeModal=document.getElementById("save-me-modal"),this.btnSaveMeAction=document.getElementById("btn-save-me-action"),this.saveMeBtnIcon=document.getElementById("save-me-btn-icon"),this.saveMeBtnTitle=document.getElementById("save-me-btn-title"),this.saveMeBtnSub=document.getElementById("save-me-btn-sub"),this.btnSaveMeForfeit=document.getElementById("btn-save-me-forfeit"),this.btnSaveMeNoAds=document.getElementById("btn-save-me-no-ads"),this.vipStoreModal=document.getElementById("vip-store-modal"),this.btnBuyNoAds=document.getElementById("btn-buy-no-ads"),this.btnRestorePurchases=document.getElementById("btn-restore-purchases"),this.btnCloseVip=document.getElementById("btn-close-vip"),this.btnTopNoAds=document.getElementById("btn-top-no-ads"),this.btnMenuNoAds=document.getElementById("btn-menu-no-ads"),this.btnPauseNoAds=document.getElementById("btn-pause-no-ads"),this.touchControls=document.getElementById("touch-controls")}bindEvents(){this.btnSound.addEventListener("click",()=>{const t=this.audioManager.toggleMute();this.btnSound.innerText=t?"🔊":"🔇"}),this.btnPause.addEventListener("click",()=>{this.showPauseModal()}),this.btnHudBoost?.addEventListener("click",()=>{this.onTriggerBoost()}),document.getElementById("btn-play-endless")?.addEventListener("click",()=>{this.onStartGame("endless")}),document.getElementById("btn-play-stages")?.addEventListener("click",()=>{this.stageScreen.classList.remove("hidden")}),document.querySelectorAll(".stage-item .btn-start-stage").forEach((t,e)=>{t.addEventListener("click",()=>{this.stageScreen.classList.add("hidden"),this.onStartGame("stage",e)})}),document.getElementById("btn-close-stages")?.addEventListener("click",()=>{this.stageScreen.classList.add("hidden")}),document.getElementById("btn-open-garage")?.addEventListener("click",()=>{this.openGarage()}),document.getElementById("btn-close-garage")?.addEventListener("click",()=>{this.closeGarage()}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.instructionsScreen.classList.remove("hidden")}),document.getElementById("btn-close-instructions")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.getElementById("btn-instructions-gotit")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-char");e&&ke[e]&&(this.gameState.characterId=e,this.gameState.savePersistedData(),this.player.setCustomization(e,this.gameState.vehicleId,this.gameState.paletteId),this.player.setShowcasePreview(!1),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-veh");e&&tn[e]&&(this.gameState.vehicleId=e,this.gameState.savePersistedData(),this.player.setCustomization(this.gameState.characterId,e,this.gameState.paletteId),this.player.setShowcasePreview(!0),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.getElementById("btn-resume")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onResumeGame()}),document.getElementById("btn-restart")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-quit")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onQuitToMenu()}),this.btnSaveMeAction?.addEventListener("click",()=>{this.onSaveMeRevive()}),this.btnSaveMeForfeit?.addEventListener("click",()=>{this.hideSaveMeModal(),this.onSaveMeForfeit()}),this.btnSaveMeNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnTopNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnMenuNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnPauseNoAds?.addEventListener("click",()=>{this.openVipModal()}),this.btnBuyNoAds?.addEventListener("click",()=>{this.onBuyNoAds()}),this.btnRestorePurchases?.addEventListener("click",()=>{this.onRestorePurchases()}),this.btnCloseVip?.addEventListener("click",()=>{this.closeVipModal()}),document.getElementById("btn-retry")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-back-hub")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu()}),document.getElementById("btn-go-garage")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu(),this.openGarage()})}openGarage(){this.mainMenu.classList.add("hidden"),this.garageScreen.classList.remove("hidden"),this.garageView.open()}closeGarage(){this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.updateMenuStats()}showMainMenu(){this.touchControlsTimeout!==null&&(window.clearTimeout(this.touchControlsTimeout),this.touchControlsTimeout=null),this.touchControls?.classList.remove("fade-out"),this.hideSaveMeModal(),this.closeVipModal(),this.hudScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.stageScreen.classList.add("hidden"),this.instructionsScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.btnPause.classList.add("hidden"),this.distanceCounterWrap?.classList.add("hidden"),this.multiplierBadge?.classList.add("hidden"),this.biomeBanner?.classList.remove("hidden"),this.gameState.hasRemovedAds||this.btnTopNoAds?.classList.remove("hidden"),this.updateMenuStats()}showInGameHUD(){this.hideSaveMeModal(),this.closeVipModal(),this.mainMenu.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.hudScreen.classList.remove("hidden"),this.btnPause.classList.remove("hidden"),this.distanceCounterWrap?.classList.remove("hidden"),this.multiplierBadge?.classList.remove("hidden"),this.biomeBanner?.classList.add("hidden"),this.btnTopNoAds?.classList.add("hidden"),this.touchControls&&(this.touchControls.classList.remove("fade-out","hidden"),this.touchControlsTimeout!==null&&window.clearTimeout(this.touchControlsTimeout),this.touchControlsTimeout=window.setTimeout(()=>{this.touchControls?.classList.add("fade-out"),this.touchControlsTimeout=null},1e4))}showPauseModal(){this.pauseScreen.classList.remove("hidden"),this.onPauseGame()}resumeGame(){this.pauseScreen.classList.add("hidden"),this.onResumeGame()}showSaveMeModal(t){this.hudScreen.classList.add("hidden"),this.distanceCounterWrap?.classList.add("hidden"),this.multiplierBadge?.classList.add("hidden"),this.saveMeModal.classList.remove("hidden"),t?(this.saveMeBtnIcon.innerText="⚡",this.saveMeBtnTitle.innerText="FREE VIP REVIVE",this.saveMeBtnSub.innerText="INSTANT +1 LIFE & SHIELD (NO ADS)",this.btnSaveMeNoAds.classList.add("hidden")):(this.saveMeBtnIcon.innerText="📺",this.saveMeBtnTitle.innerText="WATCH AD TO REVIVE",this.saveMeBtnSub.innerText="+1 LIFE & INVINCIBILITY SHIELD",this.btnSaveMeNoAds.classList.remove("hidden"))}hideSaveMeModal(){this.saveMeModal?.classList.add("hidden")}openVipModal(){this.vipStoreModal?.classList.remove("hidden")}closeVipModal(){this.vipStoreModal?.classList.add("hidden")}updateVipStatus(t){t&&(this.btnTopNoAds&&(this.btnTopNoAds.innerText="👑 VIP ACTIVE",this.btnTopNoAds.classList.add("vip-active")),this.btnMenuNoAds&&(this.btnMenuNoAds.innerHTML='<span class="btn-text">👑 VIP PASS ACTIVE</span><span class="btn-sub">Zero Ads & Free Revives Unlocked</span>'),this.btnPauseNoAds&&(this.btnPauseNoAds.innerText="👑 VIP ACTIVE"),this.btnBuyNoAds&&(this.btnBuyNoAds.innerText="VIP UNLOCKED ✅",this.btnBuyNoAds.classList.add("disabled")))}showGameOverModal(t){this.touchControlsTimeout!==null&&(window.clearTimeout(this.touchControlsTimeout),this.touchControlsTimeout=null),this.hideSaveMeModal(),this.hudScreen.classList.add("hidden"),this.distanceCounterWrap?.classList.add("hidden"),this.multiplierBadge?.classList.add("hidden"),this.gameOverScreen.classList.remove("hidden"),this.gameState.hasRemovedAds||this.btnTopNoAds?.classList.remove("hidden");const e=document.getElementById("game-over-badge"),n=document.getElementById("game-over-title"),i=document.getElementById("new-high-score-banner");t.stageCompleted?(e&&(e.innerText="STAGE COMPLETE!"),n&&(n.innerText="VICTORY!")):(e&&(e.innerText="CRASHED!"),n&&(n.innerText="RUN FINISHED")),document.getElementById("final-distance").innerText=`${t.distance}m`,document.getElementById("final-coins").innerText=`${t.starCoins}`,document.getElementById("final-smash").innerText=`${t.smashes}`,document.getElementById("final-total-score").innerText=`${t.score}`,i&&(t.isNewHighScore||t.isNewHighDistance?i.classList.remove("hidden"):i.classList.add("hidden"))}hideGameOverModal(){this.gameOverScreen.classList.add("hidden")}updateHUD(t){this.lastBiomeName!==t&&(this.lastBiomeName=t,this.biomeBanner.textContent=t),this.lastStarCoins!==this.gameState.starCoins&&(this.lastStarCoins=this.gameState.starCoins,this.starCount.textContent=`${this.lastStarCoins}`),this.lastDiamondGems!==this.gameState.diamondGems&&(this.lastDiamondGems=this.gameState.diamondGems,this.gemCount.textContent=`${this.lastDiamondGems}`);const e=Math.floor(this.gameState.distance);this.lastDistanceFloor!==e&&(this.lastDistanceFloor=e,this.distanceVal.textContent=`${e} m`);const n=Math.floor(this.gameState.speed);this.lastSpeedFloor!==n&&(this.lastSpeedFloor=n,this.speedMeter.textContent=`${n} m/s`),this.lastMultiplier!==this.gameState.multiplier&&(this.lastMultiplier=this.gameState.multiplier,this.multiplierBadge.textContent=`${this.lastMultiplier}x`);const i=this.gameState.getCurrentLevelDef();this.lastLevel!==this.gameState.currentLevel&&(this.lastLevel=this.gameState.currentLevel,this.hudLevelBadge&&(this.hudLevelBadge.textContent=`LVL ${this.lastLevel}`),this.hudLevelName&&(this.hudLevelName.textContent=i.name));const r=Math.floor(Math.min(100,Math.max(0,this.gameState.levelDistance/i.targetDistance*100)));this.lastLevelPct!==r&&(this.lastLevelPct=r,this.levelProgressBar&&(this.levelProgressBar.style.width=`${r}%`),this.levelFraction&&(this.levelFraction.textContent=`${Math.floor(this.gameState.levelDistance)} / ${i.targetDistance}m`)),this.btnHudBoost&&this.hudBoostBadge&&this.lastBoostCharges!==this.player.boostCharges&&(this.lastBoostCharges=this.player.boostCharges,this.lastBoostCharges>0?(this.btnHudBoost.classList.remove("hidden"),this.hudBoostBadge.textContent=`x${this.lastBoostCharges}`):this.btnHudBoost.classList.add("hidden"));const o=this.player.mode==="in_vehicle";if(this.lastVehicleMode!==o)if(this.lastVehicleMode=o,o){this.vehicleMeterContainer.classList.remove("hidden");const a=tn[this.player.vehicleId];this.vehicleMeterName.textContent=a.name.toUpperCase(),this.vehicleMeterAbility.textContent=a.ability.toUpperCase()}else this.vehicleMeterContainer.classList.add("hidden");if(o){const a=Math.max(0,this.player.vehicleDuration),c=Math.round(a*10)/10;if(this.lastVehicleDuration!==c){this.lastVehicleDuration=c;const l=Math.max(0,Math.min(100,a/this.player.maxVehicleDuration*100));this.vehicleMeterFill.style.width=`${l}%`,this.vehicleTimerText.textContent=`${c.toFixed(1)}s`}}if(this.gameState.mode==="stage"){this.missionCard.classList.remove("hidden");const a=this.gameState.getActiveStage();if(a){this.missionTitle.innerText=a.name;const c=Math.min(1,(this.gameState.distance/a.targetDistance+this.gameState.starCoins/a.targetCoins+(a.targetSmashes>0?this.gameState.smashes/a.targetSmashes:1))/(a.targetSmashes>0?3:2));this.missionProgressBar.style.width=`${c*100}%`,this.missionFraction.innerText=`${Math.floor(this.gameState.distance)}m / ${a.targetDistance}m`}}else this.missionCard.classList.add("hidden")}showLevelUpAnnouncement(t,e,n,i){if(!this.levelUpBanner)return;const r=this.levelUpBanner.querySelector(".level-up-title");r&&(r.textContent=`🎉 LEVEL ${t}: ${e.toUpperCase()}! 🎉`),this.levelUpSub&&(this.levelUpSub.textContent=`${n} (+${i}⭐ Bonus)`),this.levelUpBanner.classList.remove("hidden"),setTimeout(()=>{this.levelUpBanner.classList.add("hidden")},2400)}showActionPrompt(t){this.actionPrompt.innerText=t,this.actionPrompt.classList.remove("hidden"),setTimeout(()=>{this.actionPrompt.classList.add("hidden")},1200)}updateMenuStats(){this.menuBestDistance.innerText=`${Math.floor(this.gameState.bestDistance)}m`,this.menuBestScore.innerText=`${this.gameState.bestScore}`;const t=document.getElementById("menu-selected-avatar");t&&(t.innerText=`Avatar: ${ke[this.gameState.characterId].name}`);const e=document.getElementById("menu-selected-vehicle");e&&(e.innerText=`Ride: ${tn[this.gameState.vehicleId].name}`),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(n=>{n.getAttribute("data-char")===this.gameState.characterId?n.classList.add("active"):n.classList.remove("active")}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(n=>{n.getAttribute("data-veh")===this.gameState.vehicleId?n.classList.add("active"):n.classList.remove("active")})}}const ys=class ys{constructor(t){w(this,"container");w(this,"camera");w(this,"items",[]);w(this,"pool",[]);this.camera=t;let e=document.getElementById("floating-scores-container");if(!e){e=document.createElement("div"),e.id="floating-scores-container",e.className="floating-scores-container";const n=document.getElementById("ui-container");n?n.appendChild(e):document.body.appendChild(e)}this.container=e}spawn(t,e,n="#FFD700",i="",r=!1){let o=this.pool.pop();if(!o){const c=document.createElement("div");this.container.appendChild(c),o={element:c,worldPos:new I,velocity:new I,life:0,maxLife:1,active:!0}}const a=o.element;a.className=`floating-score ${r?"major-score":""}`,a.style.color=n,a.style.display="flex",a.style.opacity="1",i?a.innerHTML=`<span class="score-icon">${i}</span> <span class="score-txt">${e}</span>`:a.textContent=e,o.worldPos.copy(t),o.worldPos.y+=.8,o.velocity.set((Math.random()-.5)*.8,3.2+Math.random()*1.2,0),o.life=0,o.maxLife=r?1.4:.9,o.active=!0,this.items.push(o)}update(t){const e=window.innerWidth,n=window.innerHeight,i=ys._tempVec;for(let r=this.items.length-1;r>=0;r--){const o=this.items[r];if(o.life+=t,o.life>=o.maxLife){o.active=!1,o.element.style.display="none",this.items.splice(r,1),this.pool.push(o);continue}if(o.worldPos.addScaledVector(o.velocity,t),o.velocity.y*=.94,i.copy(o.worldPos).project(this.camera),i.z>1){o.element.style.display="none";continue}o.element.style.display="flex";const a=(i.x*.5+.5)*e,c=(-(i.y*.5)+.5)*n,l=o.life/o.maxLife,h=l<.2?.4+l/.2*.85:Math.max(.6,1.25-l*.6),u=l>.6?1-(l-.6)/.4:1;o.element.style.transform=`translate(-50%, -50%) translate3d(${a}px, ${c}px, 0) scale(${h})`,o.element.style.opacity=`${u}`}}clear(){for(const t of this.items)t.active=!1,t.element.style.display="none",this.pool.push(t);this.items=[]}};w(ys,"_tempVec",new I);let vr=ys;var Za;(function(s){s.General="General",s.ParentalGuidance="ParentalGuidance",s.Teen="Teen",s.MatureAudience="MatureAudience"})(Za||(Za={}));var Ja;(function(s){s.SizeChanged="bannerAdSizeChanged",s.Loaded="bannerAdLoaded",s.FailedToLoad="bannerAdFailedToLoad",s.Opened="bannerAdOpened",s.Closed="bannerAdClosed",s.AdImpression="bannerAdImpression"})(Ja||(Ja={}));var ja;(function(s){s.TOP_CENTER="TOP_CENTER",s.CENTER="CENTER",s.BOTTOM_CENTER="BOTTOM_CENTER"})(ja||(ja={}));var Qa;(function(s){s.BANNER="BANNER",s.FULL_BANNER="FULL_BANNER",s.LARGE_BANNER="LARGE_BANNER",s.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",s.LEADERBOARD="LEADERBOARD",s.ADAPTIVE_BANNER="ADAPTIVE_BANNER",s.SMART_BANNER="SMART_BANNER"})(Qa||(Qa={}));var Pi;(function(s){s.Loaded="interstitialAdLoaded",s.FailedToLoad="interstitialAdFailedToLoad",s.Showed="interstitialAdShowed",s.FailedToShow="interstitialAdFailedToShow",s.Dismissed="interstitialAdDismissed"})(Pi||(Pi={}));var to;(function(s){s.Loaded="onRewardedInterstitialAdLoaded",s.FailedToLoad="onRewardedInterstitialAdFailedToLoad",s.Showed="onRewardedInterstitialAdShowed",s.FailedToShow="onRewardedInterstitialAdFailedToShow",s.Dismissed="onRewardedInterstitialAdDismissed",s.Rewarded="onRewardedInterstitialAdReward"})(to||(to={}));var Li;(function(s){s.Loaded="onRewardedVideoAdLoaded",s.FailedToLoad="onRewardedVideoAdFailedToLoad",s.Showed="onRewardedVideoAdShowed",s.FailedToShow="onRewardedVideoAdFailedToShow",s.Dismissed="onRewardedVideoAdDismissed",s.Rewarded="onRewardedVideoAdReward"})(Li||(Li={}));var eo;(function(s){s.NOT_REQUIRED="NOT_REQUIRED",s.OBTAINED="OBTAINED",s.REQUIRED="REQUIRED",s.UNKNOWN="UNKNOWN"})(eo||(eo={}));var no;(function(s){s[s.DISABLED=0]="DISABLED",s[s.EEA=1]="EEA",s[s.NOT_EEA=2]="NOT_EEA",s[s.US=3]="US",s[s.OTHER=4]="OTHER"})(no||(no={}));const Xe=pi("AdMob",{web:()=>Uo(()=>import("./web-C_97-T8i.js"),[],import.meta.url).then(s=>new s.AdMobWeb)});class qe{static async initialize(){if(!this.isInitialized&&(this.isInitialized=!0,Ge.isNativePlatform()))try{await Xe.initialize({initializeForTesting:!1}),await Xe.requestTrackingAuthorization().catch(()=>{}),console.log("[AdService] Native AdMob initialized successfully"),this.setupEventListeners(),this.preloadRewarded(),this.preloadInterstitial()}catch(t){console.warn("[AdService] Native AdMob init error (falling back to web simulator):",t)}}static setupEventListeners(){try{Xe.addListener(Li.Loaded,()=>{this.isRewardedReady=!0,console.log("[AdService] Native Rewarded Ad loaded and ready")}),Xe.addListener(Li.FailedToLoad,t=>{this.isRewardedReady=!1,console.warn("[AdService] Rewarded Ad failed to load:",t)}),Xe.addListener(Li.Dismissed,()=>{this.isRewardedReady=!1,this.preloadRewarded()}),Xe.addListener(Pi.Loaded,()=>{this.isInterstitialReady=!0,console.log("[AdService] Native Interstitial Ad loaded and ready")}),Xe.addListener(Pi.FailedToLoad,t=>{this.isInterstitialReady=!1,console.warn("[AdService] Interstitial Ad failed to load:",t)}),Xe.addListener(Pi.Dismissed,()=>{this.isInterstitialReady=!1,this.preloadInterstitial()})}catch(t){console.warn("[AdService] Event listener registration note:",t)}}static async preloadRewarded(){if(Ge.isNativePlatform())try{await Xe.prepareRewardVideoAd({adId:this.IOS_REWARDED_AD_ID}),this.isRewardedReady=!0}catch(t){console.warn("[AdService] Rewarded preload attempt note:",t)}}static async preloadInterstitial(){if(Ge.isNativePlatform())try{await Xe.prepareInterstitial({adId:this.IOS_INTERSTITIAL_AD_ID}),this.isInterstitialReady=!0}catch(t){console.warn("[AdService] Interstitial preload attempt note:",t)}}static async showRewardedVideo(){if(this.isShowingAd)return!1;this.isShowingAd=!0;try{if(Ge.isNativePlatform())try{this.isRewardedReady||await this.preloadRewarded();const e=await Xe.showRewardVideoAd();return this.isShowingAd=!1,!!e}catch(e){console.warn("[AdService] Native rewarded playback failed, falling back to simulator:",e);const n=await this.playWebSimulatorAd("rewarded");return this.isShowingAd=!1,n}const t=await this.playWebSimulatorAd("rewarded");return this.isShowingAd=!1,t}catch(t){return console.error("[AdService] Error showing rewarded ad:",t),this.isShowingAd=!1,!1}}static async showInterstitialAd(){if(this.isShowingAd)return!1;this.isShowingAd=!0;try{if(Ge.isNativePlatform())try{return this.isInterstitialReady||await this.preloadInterstitial(),await Xe.showInterstitial(),this.isShowingAd=!1,!0}catch(e){console.warn("[AdService] Native interstitial playback failed, falling back to simulator:",e);const n=await this.playWebSimulatorAd("interstitial");return this.isShowingAd=!1,n}const t=await this.playWebSimulatorAd("interstitial");return this.isShowingAd=!1,t}catch(t){return console.error("[AdService] Error showing interstitial ad:",t),this.isShowingAd=!1,!1}}static playWebSimulatorAd(t){return new Promise(e=>{const n=document.getElementById("ad-modal-screen"),i=document.querySelector(".ad-sponsor-tag"),r=document.getElementById("ad-timer-countdown"),o=document.getElementById("ad-progress-fill"),a=document.getElementById("btn-ad-skip"),c=document.getElementById("ad-reward-ready");if(!n||!r||!o){e(!0);return}i&&(i.innerText=t==="rewarded"?"📺 SPONSORED REWARD AD":"⚡ SPONSORED INTERSTITIAL"),n.classList.remove("hidden"),c&&c.classList.add("hidden"),a&&(a.classList.add("disabled"),a.innerText="Ad closing in 3s..."),o.style.width="0%";let l=3;r.innerText=`${l}s`;const h=Date.now(),u=2800,d=setInterval(()=>{const v=Date.now()-h,p=Math.min(100,v/u*100);o.style.width=`${p}%`;const m=Math.max(0,Math.ceil((u-v)/1e3));r.innerText=`${m}s`,m<=0&&(clearInterval(d),c&&(c.innerText=t==="rewarded"?"🎉 REWARD VERIFIED! RESUME YOUR RUN 🎉":"✅ SPONSOR COMPLETED",c.classList.remove("hidden")),a&&(a.classList.remove("disabled"),a.innerText=t==="rewarded"?"COLLECT +1 LIFE ✨":"CONTINUE TO RESULTS ⏩"))},50),f=()=>{clearInterval(d),n.classList.add("hidden"),g();const v=Date.now()-h>=u-200;e(v)},g=()=>{a?.removeEventListener("click",f)};a?.addEventListener("click",f)})}}w(qe,"isInitialized",!1),w(qe,"isShowingAd",!1),w(qe,"IOS_REWARDED_AD_ID","ca-app-pub-4591561386928109/7320350068"),w(qe,"IOS_INTERSTITIAL_AD_ID","ca-app-pub-4591561386928109/8409150587"),w(qe,"TEST_REWARDED_AD_ID","ca-app-pub-3940256099942544/1712485313"),w(qe,"TEST_INTERSTITIAL_AD_ID","ca-app-pub-3940256099942544/4411468910"),w(qe,"isRewardedReady",!1),w(qe,"isInterstitialReady",!1);const cr="com.btp.blockville.pro",io="blockville_iap_no_ads",lr=pi("StoreKit");class kn{static async initialize(){try{localStorage.getItem(io)==="true"&&(this.removeAdsActive=!0),Ge.isNativePlatform()&&(await lr.checkPro({productId:cr})).isPro&&this.setRemoveAdsActive(!0)}catch{}}static isRemoveAdsActive(){return this.removeAdsActive}static async purchaseRemoveAds(){try{if(Ge.isNativePlatform()){const t=await lr.purchase({productId:cr});return t.success&&t.unlocked?(this.setRemoveAdsActive(!0),{success:!0}):t.cancelled?{success:!1,error:"Purchase cancelled"}:{success:!1,error:t.error||"Purchase failed"}}return this.setRemoveAdsActive(!0),{success:!0}}catch(t){return{success:!1,error:t instanceof Error?t.message:"Purchase cancelled"}}}static async restorePurchases(){try{if(Ge.isNativePlatform()){const e=await lr.restore({productId:cr});return e.success&&e.restored?(this.setRemoveAdsActive(!0),{success:!0,restored:!0}):{success:!0,restored:!1}}return{success:!0,restored:this.isRemoveAdsActive()}}catch{return{success:!1,restored:!1}}}static setRemoveAdsActive(t){this.removeAdsActive=t;try{localStorage.setItem(io,t?"true":"false")}catch{}this.onStatusChange&&this.onStatusChange(t)}}w(kn,"removeAdsActive",!1),w(kn,"onStatusChange",null);class so{constructor(){w(this,"canvas");w(this,"sceneRenderer");w(this,"audioManager");w(this,"inputManager");w(this,"gameState");w(this,"particleSystem");w(this,"cameraController");w(this,"player");w(this,"trackManager");w(this,"uiManager");w(this,"floatingText");w(this,"appState","menu");w(this,"lastTime",0);w(this,"crashTimer",0);w(this,"isCrashing",!1);if(!Ge.isNativePlatform()&&typeof window<"u"&&window.location.hostname.includes("github.io")&&!window.location.search.includes("test=1")){document.body.innerHTML=`
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0F172A; color: #FFFFFF; font-family: -apple-system, sans-serif; padding: 24px; text-align: center;">
          <div style="max-width: 440px; background: #1E293B; border: 1px solid #334155; border-radius: 20px; padding: 36px 24px; box-shadow: 0 12px 32px rgba(0,0,0,0.4);">
            <div style="font-size: 3rem; margin-bottom: 12px;">🏎️</div>
            <h1 style="font-size: 1.5rem; margin: 0 0 12px; color: #4ADE80;">Blockville: Rush &amp; Ride</h1>
            <p style="color: #F8FAFC; font-size: 0.98rem; font-weight: 600; line-height: 1.5; margin: 0 0 8px;">
              This game is exclusively designed for iOS mobile devices. Please download on the App Store to play.
            </p>
            <p style="color: #94A3B8; font-size: 0.88rem; line-height: 1.5; margin: 0 0 24px;">
              Bu oyun sadece mobil cihazlar için tasarlanmış resmi bir iOS oyunudur. Oynamak için lütfen App Store üzerinden indirin.
            </p>
            <div style="padding-top: 16px; border-top: 1px solid #334155; font-size: 0.85rem;">
              <a href="./support.html" style="color: #38BDF8; text-decoration: none; margin-right: 16px; font-weight: 600;">Support &amp; FAQ / Destek</a>
              <a href="./privacy.html" style="color: #94A3B8; text-decoration: none;">Privacy Policy / Gizlilik</a>
            </div>
          </div>
        </div>
      `,this.canvas=document.createElement("canvas"),this.sceneRenderer=null,this.audioManager=null,this.inputManager=null,this.gameState=null,this.particleSystem=null,this.cameraController=null,this.floatingText=null,this.player=null,this.trackManager=null,this.uiManager=null;return}this.canvas=document.getElementById("game-canvas"),this.sceneRenderer=new sp(this.canvas),this.audioManager=new rp,this.inputManager=new ap,this.gameState=new op,this.particleSystem=new cp,this.cameraController=new lp(this.sceneRenderer.camera),this.floatingText=new vr(this.sceneRenderer.camera),this.player=new _r(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId,this.particleSystem,this.audioManager),this.trackManager=new bp(this.sceneRenderer,this.particleSystem,this.audioManager,this.gameState,this.floatingText),this.sceneRenderer.scene.add(this.trackManager.group),this.sceneRenderer.scene.add(this.player.group),this.sceneRenderer.scene.add(this.particleSystem.group),this.uiManager=new Cp(this.gameState,this.player,this.audioManager),this.setupUIHandlers(),$t.hideStatusBar(),qe.initialize(),kn.initialize(),kn.isRemoveAdsActive()&&(this.gameState.hasRemovedAds=!0,this.uiManager.updateVipStatus(!0)),kn.onStatusChange=t=>{this.gameState.hasRemovedAds=t,this.uiManager.updateVipStatus(t)},this.trackManager.reset("boardwalk"),this.handleUrlParams(),this.lastTime=performance.now(),requestAnimationFrame(this.gameLoop.bind(this))}handleUrlParams(){const t=new URLSearchParams(window.location.search),e=t.get("screen"),n=t.get("char"),i=t.get("veh"),r=t.get("biome");n&&["nova","leo","skye"].includes(n)&&(this.gameState.characterId=n),i&&["van","buggy","scooter"].includes(i)&&(this.gameState.vehicleId=i),this.player.setCustomization(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId),this.uiManager.updateMenuStats(),e==="play"?(this.player.isScreenshotMode=!0,this.startRun(),r&&["boardwalk","plaza","forest"].includes(r)&&this.trackManager.reset(r),this.gameState.distance=285,this.gameState.starCoins=42,this.gameState.diamondGems=6,this.gameState.multiplier=2,this.cameraController.snapToFollow(this.player.group.position,!1)):e==="vehicle"?(this.player.isScreenshotMode=!0,this.startRun(),r&&["boardwalk","plaza","forest"].includes(r)&&this.trackManager.reset(r),this.player.mountVehicle(),this.gameState.distance=580,this.gameState.starCoins=86,this.gameState.diamondGems=14,this.gameState.multiplier=3,this.cameraController.snapToFollow(this.player.group.position,!0)):e==="garage"?this.uiManager.openGarage():e==="vip"&&this.uiManager.openVipModal()}setupUIHandlers(){this.uiManager.onStartGame=(t,e)=>{this.gameState.mode=t,typeof e=="number"&&(this.gameState.currentStageIndex=e),this.startRun()},this.uiManager.onPauseGame=()=>{this.appState==="playing"&&(this.appState="paused",this.inputManager.setEnabled(!1),this.audioManager.pauseMusic(),this.audioManager.stopVehicleEngine())},this.uiManager.onResumeGame=()=>{this.appState==="paused"&&(this.appState="playing",this.inputManager.setEnabled(!0),this.audioManager.startMusic(),this.player.mode==="in_vehicle"&&this.audioManager.startVehicleEngine())},this.inputManager.onPauseToggle=()=>{this.appState==="playing"?this.uiManager.showPauseModal():this.appState==="paused"&&this.uiManager.resumeGame()},this.uiManager.onRestartGame=()=>{this.gameState.isRunFinalized||this.gameState.finalizeRun(!1),this.startRun()},this.uiManager.onSaveMeRevive=async()=>{this.gameState.hasRemovedAds?this.reviveGame():await qe.showRewardedVideo()&&this.reviveGame()},this.uiManager.onSaveMeForfeit=async()=>{const t=this.gameState.finalizeRun(!1);this.gameState.shouldShowInterstitialAd()&&await qe.showInterstitialAd(),this.uiManager.showGameOverModal(t)},this.uiManager.onBuyNoAds=async()=>{(await kn.purchaseRemoveAds()).success&&(this.gameState.hasRemovedAds=!0,this.gameState.totalGemsSaved+=100,this.gameState.savePersistedData(),this.uiManager.updateVipStatus(!0),this.audioManager.playLevelUpSound(),$t.celebration(),this.uiManager.closeVipModal(),this.floatingText.spawn(this.player.group.position,"VIP UNLOCKED! +100💎","#FFD700","👑",!0))},this.uiManager.onRestorePurchases=async()=>{(await kn.restorePurchases()).restored&&(this.gameState.hasRemovedAds=!0,this.uiManager.updateVipStatus(!0),this.audioManager.playGemSound(),$t.celebration(),this.uiManager.closeVipModal())},this.uiManager.onTriggerBoost=()=>{this.inputManager.triggerBoost()},this.uiManager.onQuitToMenu=()=>{this.gameState.isRunFinalized||this.gameState.finalizeRun(!1),this.appState="menu",this.inputManager.setEnabled(!1),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine(),this.player.reset(),this.trackManager.reset("boardwalk"),this.floatingText.clear(),this.uiManager.showMainMenu()}}startRun(){this.gameState.resetRun(),this.player.setCustomization(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId),this.player.reset();const t=this.gameState.mode==="stage"&&this.gameState.getActiveStage()?.biome||"boardwalk";this.trackManager.reset(t),this.particleSystem.clear(),this.floatingText.clear(),this.inputManager.clear(),this.inputManager.setEnabled(!0),this.appState="playing",this.isCrashing=!1,this.crashTimer=0,this.uiManager.showInGameHUD(),this.audioManager.startMusic()}gameLoop(t){requestAnimationFrame(this.gameLoop.bind(this));const e=Math.min((t-this.lastTime)*.001,.05);if(this.lastTime=t,this.appState==="menu"){const n=new I(0,0,0);this.player.group.position.set(0,0,0),this.cameraController.updateShowcase(n,e),this.particleSystem.update(e),this.sceneRenderer.render();return}if(this.appState==="paused"){this.sceneRenderer.render();return}if(this.appState==="playing"){let n=this.inputManager.popAction();for(;n;)n==="left"?this.player.moveLeft():n==="right"?this.player.moveRight():n==="jump"?this.player.jump():n==="slide"?this.player.slide():n==="boost"&&(this.player.useBoost()?(this.floatingText.spawn(this.player.group.position,"NITRO BOOST! 🚀","#00E5FF","⚡",!0),this.cameraController.addTrauma(.35)):this.player.jump()),n=this.inputManager.popAction();const r=this.player.mode==="in_vehicle"&&tn[this.player.vehicleId]?.speedMultiplier||1,o=this.player.turboTimer>0?1.65:1;this.gameState.updateDistanceAndSpeed(e,r*o);const a=this.gameState.checkLevelUp();a&&(this.audioManager.playLevelUpSound(),$t.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),this.floatingText.spawn(this.player.group.position,`+${a.rewardCoins} LEVEL UP!`,"#76FF03","🏆",!0),this.uiManager.showLevelUpAnnouncement(a.levelNumber,a.name,a.subtitle,a.rewardCoins)),this.player.update(e,this.gameState.speed);const{crashed:c,stageWon:l}=this.trackManager.update(this.player,e),h=this.player.mode==="in_vehicle",u=this.player.turboTimer>0;if(this.cameraController.updateFollow(this.player.group.position,h,u,e),this.sceneRenderer.updateLightTarget(this.player.group.position),this.particleSystem.update(e),this.floatingText.update(e),this.uiManager.updateHUD(this.trackManager.getCurrentBiomeName()),c&&!this.isCrashing&&(this.isCrashing=!0,this.crashTimer=.85,this.cameraController.addTrauma(.9),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine()),this.isCrashing&&(this.crashTimer-=e,this.crashTimer<=0))if(this.appState="game_over",this.inputManager.setEnabled(!1),$t.warning(),this.gameState.canRevive())this.uiManager.showSaveMeModal(this.gameState.hasRemovedAds);else{const f=this.gameState.finalizeRun(!1);this.gameState.shouldShowInterstitialAd()?qe.showInterstitialAd().then(()=>{this.uiManager.showGameOverModal(f)}):this.uiManager.showGameOverModal(f)}if(this.gameState.mode==="stage"&&l){const d=this.gameState.advanceStage();this.audioManager.playLevelUpSound(),$t.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),d.nextStage?(this.floatingText.spawn(this.player.group.position,`+${d.rewardCoins} STAGE CLEAR!`,"#00E5FF","🏆",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentStageIndex+1,d.nextStage.name,`Stage Goal Cleared! Entering ${d.nextStage.name}`,d.rewardCoins)):(this.floatingText.spawn(this.player.group.position,`+${d.rewardCoins} ALL STAGES CLEARED!`,"#76FF03","👑",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentLevel,"ALL STAGES CLEARED!","Entering Endless Master Gauntlet! Keep Going!",d.rewardCoins))}}(this.appState==="game_over"||this.appState==="victory")&&(this.particleSystem.update(e),this.floatingText.update(e)),this.sceneRenderer.render()}reviveGame(){this.appState="playing",this.isCrashing=!1,this.crashTimer=0,this.inputManager.setEnabled(!0),this.cameraController.resetTrauma(),this.gameState.revivesUsedInRun++,this.player.revive(),this.trackManager.clearObstaclesAhead(45),this.audioManager.startMusic(),this.audioManager.playLevelUpSound(),$t.celebration(),this.particleSystem.emitSmashDebris(this.player.group.position,[58879,16766720,16728193,7798531]),this.floatingText.spawn(this.player.group.position,"REVIVED! +3.5s SHIELD!","#00E5FF","💖",!0),this.uiManager.hideSaveMeModal(),this.uiManager.hideGameOverModal(),this.uiManager.showInGameHUD()}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{new so}):new so;export{eo as A,Ri as I,Ss as N,Fo as W};
