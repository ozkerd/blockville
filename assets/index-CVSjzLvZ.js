(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pr="162",Lc=0,Zr=1,Dc=2,No=1,Fo=2,on=3,bn=0,De=1,cn=2,yn=0,pi=1,Jr=2,Kr=3,jr=4,Ic=5,zn=100,Uc=101,Nc=102,Qr=103,ta=104,Fc=200,Oc=201,Bc=202,kc=203,gr=204,_r=205,zc=206,Gc=207,Vc=208,Hc=209,Wc=210,Xc=211,qc=212,Yc=213,$c=214,Zc=0,Jc=1,Kc=2,xs=3,jc=4,Qc=5,tl=6,el=7,Oo=0,nl=1,il=2,En=0,sl=1,rl=2,al=3,Bo=4,ol=5,cl=6,ll=7,ko=300,gi=301,_i=302,vr=303,xr=304,bs=306,Mr=1e3,qe=1001,Sr=1002,Ce=1003,ea=1004,Ti=1005,Le=1006,Ns=1007,Vn=1008,Tn=1009,hl=1010,ul=1011,Lr=1012,zo=1013,Mn=1014,ln=1015,Oi=1016,Go=1017,Vo=1018,Hn=1020,dl=1021,Ye=1023,fl=1024,pl=1025,Wn=1026,vi=1027,ml=1028,Ho=1029,gl=1030,Wo=1031,Xo=1033,Fs=33776,Os=33777,Bs=33778,ks=33779,na=35840,ia=35841,sa=35842,ra=35843,qo=36196,aa=37492,oa=37496,ca=37808,la=37809,ha=37810,ua=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,_a=37817,va=37818,xa=37819,Ma=37820,Sa=37821,zs=36492,ya=36494,Ea=36495,_l=36283,Ta=36284,wa=36285,ba=36286,vl=3200,xl=3201,Yo=0,Ml=1,vn="",Ze="srgb",Rn="srgb-linear",Dr="display-p3",As="display-p3-linear",Ms="linear",jt="srgb",Ss="rec709",ys="p3",$n=7680,Aa=519,Sl=512,yl=513,El=514,$o=515,Tl=516,wl=517,bl=518,Al=519,Ca=35044,Ra="300 es",yr=1035,hn=2e3,Es=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pa=1234567;const Di=Math.PI/180,Bi=180/Math.PI;function Yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function Ir(s,t){return(s%t+t)%t}function Cl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Rl(s,t,e){return s!==t?(e-s)/(t-s):0}function Ii(s,t,e){return(1-e)*s+e*t}function Pl(s,t,e,n){return Ii(s,t,1-Math.exp(-e*n))}function Ll(s,t=1){return t-Math.abs(Ir(s,t*2)-t)}function Dl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Il(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ul(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Nl(s,t){return s+Math.random()*(t-s)}function Fl(s){return s*(.5-Math.random())}function Ol(s){s!==void 0&&(Pa=s);let t=Pa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bl(s){return s*Di}function kl(s){return s*Bi}function Er(s){return(s&s-1)===0&&s!==0}function zl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ts(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gl(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:Di,RAD2DEG:Bi,generateUUID:Yn,clamp:me,euclideanModulo:Ir,mapLinear:Cl,inverseLerp:Rl,lerp:Ii,damp:Pl,pingpong:Ll,smoothstep:Dl,smootherstep:Il,randInt:Ul,randFloat:Nl,randFloatSpread:Fl,seededRandom:Ol,degToRad:Bl,radToDeg:kl,isPowerOfTwo:Er,ceilPowerOfTwo:zl,floorPowerOfTwo:Ts,setQuaternionFromProperEuler:Gl,normalize:be,denormalize:hi};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],E=i[1],_=i[4],S=i[7],R=i[2],C=i[5],b=i[8];return r[0]=o*v+a*E+c*R,r[3]=o*m+a*_+c*C,r[6]=o*p+a*S+c*b,r[1]=l*v+h*E+u*R,r[4]=l*m+h*_+u*C,r[7]=l*p+h*S+u*b,r[2]=d*v+f*E+g*R,r[5]=d*m+f*_+g*C,r[8]=d*p+f*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ot;function Zo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vl(){const s=ws("canvas");return s.style.display="block",s}const La={};function Hl(s){s in La||(La[s]=!0,console.warn(s))}const Da=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ia=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xi={[Rn]:{transfer:Ms,primaries:Ss,toReference:s=>s,fromReference:s=>s},[Ze]:{transfer:jt,primaries:Ss,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[As]:{transfer:Ms,primaries:ys,toReference:s=>s.applyMatrix3(Ia),fromReference:s=>s.applyMatrix3(Da)},[Dr]:{transfer:jt,primaries:ys,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ia),fromReference:s=>s.applyMatrix3(Da).convertLinearToSRGB()}},Wl=new Set([Rn,As]),Zt={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Wl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Xi[t].toReference,i=Xi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Xi[s].primaries},getTransfer:function(s){return s===vn?Ms:Xi[s].transfer}};function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zn;class Jo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=ws("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xl=0;class Ko{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hs(i[o].image)):r.push(Hs(i[o]))}else r=Hs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ql=0;class Ie extends Mi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=qe,i=qe,r=Le,o=Vn,a=Ye,c=Tn,l=Ie.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Yn(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case qe:t.x=t.x<0?0:1;break;case Sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case qe:t.y=t.y<0?0:1;break;case Sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=ko;Ie.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,S=(f+1)/2,R=(p+1)/2,C=(h+d)/4,b=(u+v)/4,D=(g+m)/4;return _>S&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=C/n,r=b/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=D/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=D/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ko(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,E=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,p*E);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const S=a*E;if(c=c*m+d*S,l=l*m+f*S,h=h*m+g*S,u=u*m+v*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new L,Ua=new Vi;class An{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(r,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(t.matrixWorld),this.union(qi)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Yi.subVectors(this.max,wi),Jn.subVectors(t.a,wi),Kn.subVectors(t.b,wi),jn.subVectors(t.c,wi),dn.subVectors(Kn,Jn),fn.subVectors(jn,Kn),Dn.subVectors(Jn,jn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Dn.z,Dn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Dn.z,0,-Dn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Dn.y,Dn.x,0];return!Xs(e,Jn,Kn,jn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,Jn,Kn,jn,Yi))?!1:($i.crossVectors(dn,fn),e=[$i.x,$i.y,$i.z],Xs(e,Jn,Kn,jn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new L,new L,new L,new L,new L,new L,new L,new L],He=new L,qi=new An,Jn=new L,Kn=new L,jn=new L,dn=new L,fn=new L,Dn=new L,wi=new L,Yi=new L,$i=new L,In=new L;function Xs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=t.dot(In),l=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zl=new An,bi=new L,qs=new L;class Cs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(qs)),this.expandByPoint(bi.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new L,Ys=new L,Zi=new L,pn=new L,$s=new L,Ji=new L,Zs=new L;class Qo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ys.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Ys);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zi),a=pn.dot(this.direction),c=-pn.dot(Zi),l=pn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ys).addScaledVector(Zi,d),f}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,i,r){$s.subVectors(e,t),Ji.subVectors(n,t),Zs.crossVectors($s,Ji);let o=this.direction.dot(Zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);const c=a*this.direction.dot(Ji.crossVectors(pn,Ji));if(c<0)return null;const l=a*this.direction.dot($s.cross(pn));if(l<0||c+l>o)return null;const h=-a*pn.dot(Zs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),o=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jl,t,Kl)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),mn.crossVectors(n,Fe),mn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),mn.crossVectors(n,Fe)),mn.normalize(),Ki.crossVectors(Fe,mn),i[0]=mn.x,i[4]=Ki.x,i[8]=Fe.x,i[1]=mn.y,i[5]=Ki.y,i[9]=Fe.y,i[2]=mn.z,i[6]=Ki.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],E=n[3],_=n[7],S=n[11],R=n[15],C=i[0],b=i[4],D=i[8],H=i[12],x=i[1],w=i[5],$=i[9],J=i[13],P=i[2],z=i[6],N=i[10],q=i[14],O=i[3],Z=i[7],K=i[11],et=i[15];return r[0]=o*C+a*x+c*P+l*O,r[4]=o*b+a*w+c*z+l*Z,r[8]=o*D+a*$+c*N+l*K,r[12]=o*H+a*J+c*q+l*et,r[1]=h*C+u*x+d*P+f*O,r[5]=h*b+u*w+d*z+f*Z,r[9]=h*D+u*$+d*N+f*K,r[13]=h*H+u*J+d*q+f*et,r[2]=g*C+v*x+m*P+p*O,r[6]=g*b+v*w+m*z+p*Z,r[10]=g*D+v*$+m*N+p*K,r[14]=g*H+v*J+m*q+p*et,r[3]=E*C+_*x+S*P+R*O,r[7]=E*b+_*w+S*z+R*Z,r[11]=E*D+_*$+S*N+R*K,r[15]=E*H+_*J+S*q+R*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,_=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,S=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,R=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,C=e*E+n*_+i*S+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=E*b,t[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*b,t[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*p+n*c*p)*b,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*b,t[4]=_*b,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*b,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*b,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*b,t[8]=S*b,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*b,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=R*b,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,E=c*l,_=c*h,S=c*u,R=n.x,C=n.y,b=n.z;return i[0]=(1-(v+p))*R,i[1]=(f+S)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(f-S)*C,i[5]=(1-(d+p))*C,i[6]=(m+E)*C,i[7]=0,i[8]=(g+_)*b,i[9]=(m-E)*b,i[10]=(1-(d+v))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qn.set(i[0],i[1],i[2]).length();const o=Qn.set(i[4],i[5],i[6]).length(),a=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],We.copy(this);const l=1/r,h=1/o,u=1/a;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=u,We.elements[9]*=u,We.elements[10]*=u,e.setFromRotationMatrix(We),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===hn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Es)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=hn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h;let g,v;if(a===hn)g=(o+r)*u,v=-2*u;else if(a===Es)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new L,We=new ie,Jl=new L(0,0,0),Kl=new L(1,1,1),mn=new L,Ki=new L,Fe=new L,Na=new ie,Fa=new Vi;class je{constructor(t=0,e=0,n=0,i=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jl=0;const Oa=new L,ti=new Vi,sn=new ie,ji=new L,Ai=new L,Ql=new L,th=new Vi,Ba=new L(1,0,0),ka=new L(0,1,0),za=new L(0,0,1),eh={type:"added"},nh={type:"removed"},Js={type:"childadded",child:null},Ks={type:"childremoved",child:null};class _e extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new L,e=new je,n=new Vi,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ot}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(Ba,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ba,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ai,ji,this.up):sn.lookAt(ji,Ai,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(sn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(eh),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Ql),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new L(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new L,rn=new L,js=new L,an=new L,ei=new L,ni=new L,Ga=new L,Qs=new L,tr=new L,er=new L;class Ke{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Xe.subVectors(t,e),i.cross(Xe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Xe.subVectors(i,e),rn.subVectors(n,e),js.subVectors(t,e);const o=Xe.dot(Xe),a=Xe.dot(rn),c=Xe.dot(js),l=rn.dot(rn),h=rn.dot(js),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c)}static isFrontFacing(t,e,n,i){return Xe.subVectors(n,e),rn.subVectors(t,e),Xe.cross(rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Xe.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ei.subVectors(i,n),ni.subVectors(r,n),Qs.subVectors(t,n);const c=ei.dot(Qs),l=ni.dot(Qs);if(c<=0&&l<=0)return e.copy(n);tr.subVectors(t,i);const h=ei.dot(tr),u=ni.dot(tr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ei,o);er.subVectors(t,r);const f=ei.dot(er),g=ni.dot(er);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ni,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ga.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ga,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(ei,o).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Ir(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nr(o,r,t+1/3),this.g=nr(o,r,t),this.b=nr(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Zt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(me(Ee.r*255,0,255))*65536+Math.round(me(Ee.g*255,0,255))*256+Math.round(me(Ee.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ze){Zt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Qi);const n=Ii(gn.h,Qi.h,e),i=Ii(gn.s,Qi.s,e),r=Ii(gn.l,Qi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Bt;Bt.NAMES=ec;let ih=0;class Si extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=pi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=_r,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nc extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new L,ts=new ft;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),t}}class ic extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sh=0;const ze=new ie,ir=new _e,ii=new L,Oe=new An,Ci=new An,fe=new L;class Pe extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zo(t)?sc:ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Oe.min,Ci.min),Oe.expandByPoint(fe),fe.addVectors(Oe.max,Ci.max),Oe.expandByPoint(fe)):(Oe.expandByPoint(Ci.min),Oe.expandByPoint(Ci.max))}Oe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fe.fromBufferAttribute(a,l),c&&(ii.fromBufferAttribute(t,l),fe.add(ii)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new L,c[D]=new L;const l=new L,h=new L,u=new L,d=new ft,f=new ft,g=new ft,v=new L,m=new L;function p(D,H,x){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,H),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[D].add(v),a[H].add(v),a[x].add(v),c[D].add(m),c[H].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,H=E.length;D<H;++D){const x=E[D],w=x.start,$=x.count;for(let J=w,P=w+$;J<P;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const _=new L,S=new L,R=new L,C=new L;function b(D){R.fromBufferAttribute(i,D),C.copy(R);const H=a[D];_.copy(H),_.sub(R.multiplyScalar(R.dot(H))).normalize(),S.crossVectors(C,H);const w=S.dot(c[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,w)}for(let D=0,H=E.length;D<H;++D){const x=E[D],w=x.start,$=x.count;for(let J=w,P=w+$;J<P;J+=3)b(t.getX(J+0)),b(t.getX(J+1)),b(t.getX(J+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new ie,Un=new Qo,es=new Cs,Ha=new L,si=new L,ri=new L,ai=new L,sr=new L,ns=new L,is=new ft,ss=new ft,rs=new ft,Wa=new L,Xa=new L,qa=new L,as=new L,os=new L;class k extends _e{constructor(t=new Pe,e=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ns.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(sr.fromBufferAttribute(u,t),o?ns.addScaledVector(sr,h):ns.addScaledVector(sr.sub(e),h))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(es.containsPoint(Un.origin)===!1&&(Un.intersectSphere(es,Ha)===null||Un.origin.distanceToSquared(Ha)>(t.far-t.near)**2))&&(Va.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Va),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,R=_;S<R;S+=3){const C=a.getX(S),b=a.getX(S+1),D=a.getX(S+2);i=cs(this,p,t,n,l,h,u,C,b,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);i=cs(this,o,t,n,l,h,u,E,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,R=_;S<R;S+=3){const C=S,b=S+1,D=S+2;i=cs(this,p,t,n,l,h,u,C,b,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const E=m,_=m+1,S=m+2;i=cs(this,o,t,n,l,h,u,E,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function rh(s,t,e,n,i,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===bn,a),c===null)return null;os.copy(a),os.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:s}}function cs(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,si),s.getVertexPosition(c,ri),s.getVertexPosition(l,ai);const h=rh(s,t,e,n,si,ri,ai,as);if(h){i&&(is.fromBufferAttribute(i,a),ss.fromBufferAttribute(i,c),rs.fromBufferAttribute(i,l),h.uv=Ke.getInterpolation(as,si,ri,ai,is,ss,rs,new ft)),r&&(is.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,c),rs.fromBufferAttribute(r,l),h.uv1=Ke.getInterpolation(as,si,ri,ai,is,ss,rs,new ft)),o&&(Wa.fromBufferAttribute(o,a),Xa.fromBufferAttribute(o,c),qa.fromBufferAttribute(o,l),h.normal=Ke.getInterpolation(as,si,ri,ai,Wa,Xa,qa,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new L,materialIndex:0};Ke.getNormal(si,ri,ai,u.normal),h.face=u}return h}class Ue extends Pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(v,m,p,E,_,S,R,C,b,D,H){const x=S/b,w=R/D,$=S/2,J=R/2,P=C/2,z=b+1,N=D+1;let q=0,O=0;const Z=new L;for(let K=0;K<N;K++){const et=K*w-J;for(let ut=0;ut<z;ut++){const yt=ut*x-$;Z[v]=yt*E,Z[m]=et*_,Z[p]=P,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ut/b),u.push(1-K/D),q+=1}}for(let K=0;K<D;K++)for(let et=0;et<b;et++){const ut=d+et+z*K,yt=d+et+z*(K+1),G=d+(et+1)+z*(K+1),Q=d+(et+1)+z*K;c.push(ut,yt,Q),c.push(yt,G,Q),O+=6}a.addGroup(f,O,H),f+=O,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=xi(s[e]);for(const i in n)t[i]=n[i]}return t}function ah(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rc(s){return s.getRenderTarget()===null?s.outputColorSpace:Zt.workingColorSpace}const oh={clone:xi,merge:Ae};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ac extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new L,Ya=new ft,$a=new ft;class Ge extends ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Ya,$a),e.subVectors($a,Ya)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Di*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oi=-90,ci=1;class hh extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(oi,ci,t,e);i.layers=this.layers,this.add(i);const r=new Ge(oi,ci,t,e);r.layers=this.layers,this.add(r);const o=new Ge(oi,ci,t,e);o.layers=this.layers,this.add(o);const a=new Ge(oi,ci,t,e);a.layers=this.layers,this.add(a);const c=new Ge(oi,ci,t,e);c.layers=this.layers,this.add(c);const l=new Ge(oi,ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class oc extends Ie{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new oc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ue(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:yn});r.uniforms.tEquirect.value=e;const o=new k(i,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Le),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const rr=new L,dh=new L,fh=new Ot;class Bn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=rr.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fh.getNormalMatrix(t),i=this.coplanarPoint(rr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Cs,ls=new L;class Ur{constructor(t=new Bn,e=new Bn,n=new Bn,i=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],E=i[13],_=i[14],S=i[15];if(n[0].setComponents(c-r,d-l,m-f,S-p).normalize(),n[1].setComponents(c+r,d+l,m+f,S+p).normalize(),n[2].setComponents(c+o,d+h,m+g,S+E).normalize(),n[3].setComponents(c-o,d-h,m-g,S-E).normalize(),n[4].setComponents(c-a,d-u,m-v,S-_).normalize(),e===hn)n[5].setComponents(c+a,d+u,m+v,S+_).normalize();else if(e===Es)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ls.x=i.normal.x>0?t.max.x:t.min.x,ls.y=i.normal.y>0?t.max.y:t.min.y,ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ph(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Sn extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let _=0;_<l;_++){const S=_*u-r;g.push(S,-E,0),v.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const _=E+l*p,S=E+l*(p+1),R=E+1+l*(p+1),C=E+1+l*p;f.push(_,S,C),f.push(S,R,C)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gh=`#ifdef USE_ALPHAHASH
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
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
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
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ah=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
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
#endif`,Rh=`#ifdef USE_BUMPMAP
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
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
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
} // validated`,kh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",qh=`
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
}`,Yh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
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
}`,iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
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
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fu=`PhysicalMaterial material;
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
#endif`,pu=`struct PhysicalMaterial {
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
}`,mu=`
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ru=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
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
#endif`,Lu=`#ifdef USE_MORPHTARGETS
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
#endif`,Du=`#ifdef USE_MORPHTARGETS
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
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bu=`#ifdef USE_NORMALMAP
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
#endif`,ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,td=`float getShadowMask() {
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
}`,ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nd=`#ifdef USE_SKINNING
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
#endif`,id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sd=`#ifdef USE_SKINNING
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
#endif`,rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ld=`#ifdef USE_TRANSMISSION
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
#endif`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
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
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
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
}`,yd=`#if DEPTH_PACKING == 3200
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
}`,Ed=`#define DISTANCE
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
}`,Td=`#define DISTANCE
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
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`uniform float scale;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Rd=`#include <common>
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ld=`#define LAMBERT
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
}`,Dd=`#define LAMBERT
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
}`,Id=`#define MATCAP
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
}`,Ud=`#define MATCAP
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
}`,Nd=`#define NORMAL
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
}`,Fd=`#define NORMAL
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
}`,Od=`#define PHONG
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
}`,Bd=`#define PHONG
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
}`,kd=`#define STANDARD
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
}`,zd=`#define STANDARD
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
}`,Gd=`#define TOON
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
}`,Vd=`#define TOON
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
}`,Hd=`uniform float size;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#include <common>
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
}`,qd=`uniform vec3 color;
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
}`,Yd=`uniform float rotation;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:mh,alphahash_pars_fragment:gh,alphamap_fragment:_h,alphamap_pars_fragment:vh,alphatest_fragment:xh,alphatest_pars_fragment:Mh,aomap_fragment:Sh,aomap_pars_fragment:yh,batching_pars_vertex:Eh,batching_vertex:Th,begin_vertex:wh,beginnormal_vertex:bh,bsdfs:Ah,iridescence_fragment:Ch,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Ih,color_fragment:Uh,color_pars_fragment:Nh,color_pars_vertex:Fh,color_vertex:Oh,common:Bh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:zh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Vh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Wh,colorspace_fragment:Xh,colorspace_pars_fragment:qh,envmap_fragment:Yh,envmap_common_pars_fragment:$h,envmap_pars_fragment:Zh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:cu,envmap_vertex:Kh,fog_vertex:jh,fog_pars_vertex:Qh,fog_fragment:tu,fog_pars_fragment:eu,gradientmap_pars_fragment:nu,lightmap_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:lu,lights_toon_pars_fragment:hu,lights_phong_fragment:uu,lights_phong_pars_fragment:du,lights_physical_fragment:fu,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:gu,lights_fragment_end:_u,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:yu,map_pars_fragment:Eu,map_particle_fragment:Tu,map_particle_pars_fragment:wu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Cu,morphcolor_vertex:Ru,morphnormal_vertex:Pu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Du,normal_fragment_begin:Iu,normal_fragment_maps:Uu,normal_pars_fragment:Nu,normal_pars_vertex:Fu,normal_vertex:Ou,normalmap_pars_fragment:Bu,clearcoat_normal_fragment_begin:ku,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Gu,iridescence_pars_fragment:Vu,opaque_fragment:Hu,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:qu,dithering_fragment:Yu,dithering_pars_fragment:$u,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:ju,shadowmap_vertex:Qu,shadowmask_pars_fragment:td,skinbase_vertex:ed,skinning_pars_vertex:nd,skinning_vertex:id,skinnormal_vertex:sd,specularmap_fragment:rd,specularmap_pars_fragment:ad,tonemapping_fragment:od,tonemapping_pars_fragment:cd,transmission_fragment:ld,transmission_pars_fragment:hd,uv_pars_fragment:ud,uv_pars_vertex:dd,uv_vertex:fd,worldpos_vertex:pd,background_vert:md,background_frag:gd,backgroundCube_vert:_d,backgroundCube_frag:vd,cube_vert:xd,cube_frag:Md,depth_vert:Sd,depth_frag:yd,distanceRGBA_vert:Ed,distanceRGBA_frag:Td,equirect_vert:wd,equirect_frag:bd,linedashed_vert:Ad,linedashed_frag:Cd,meshbasic_vert:Rd,meshbasic_frag:Pd,meshlambert_vert:Ld,meshlambert_frag:Dd,meshmatcap_vert:Id,meshmatcap_frag:Ud,meshnormal_vert:Nd,meshnormal_frag:Fd,meshphong_vert:Od,meshphong_frag:Bd,meshphysical_vert:kd,meshphysical_frag:zd,meshtoon_vert:Gd,meshtoon_frag:Vd,points_vert:Hd,points_frag:Wd,shadow_vert:Xd,shadow_frag:qd,sprite_vert:Yd,sprite_frag:$d},at={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Je={basic:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([at.lights,at.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Je.physical={uniforms:Ae([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const hs={r:0,b:0,g:0},Fn=new je,Zd=new ie;function Jd(s,t,e,n,i,r,o){const a=new Bt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let E=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===bs)?(h===void 0&&(h=new k(new Ue(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:xi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fn.copy(p.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Fn)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==jt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new k(new Sn(2,2),new Cn({name:"BackgroundMaterial",uniforms:xi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(hs,rc(s)),n.buffers.color.setClear(hs.r,hs.g,hs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function Kd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,z,N,q,O){let Z=!1;if(o){const K=v(q,N,z);l!==K&&(l=K,f(l.object)),Z=p(P,q,N,O),Z&&E(P,q,N,O)}else{const K=z.wireframe===!0;(l.geometry!==q.id||l.program!==N.id||l.wireframe!==K)&&(l.geometry=q.id,l.program=N.id,l.wireframe=K,Z=!0)}O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(P,z,N,q),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,z,N){const q=N.wireframe===!0;let O=a[P.id];O===void 0&&(O={},a[P.id]=O);let Z=O[z.id];Z===void 0&&(Z={},O[z.id]=Z);let K=Z[q];return K===void 0&&(K=m(d()),Z[q]=K),K}function m(P){const z=[],N=[],q=[];for(let O=0;O<i;O++)z[O]=0,N[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:N,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,z,N,q){const O=l.attributes,Z=z.attributes;let K=0;const et=N.getAttributes();for(const ut in et)if(et[ut].location>=0){const G=O[ut];let Q=Z[ut];if(Q===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),G===void 0||G.attribute!==Q||Q&&G.data!==Q.data)return!0;K++}return l.attributesNum!==K||l.index!==q}function E(P,z,N,q){const O={},Z=z.attributes;let K=0;const et=N.getAttributes();for(const ut in et)if(et[ut].location>=0){let G=Z[ut];G===void 0&&(ut==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ut==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));const Q={};Q.attribute=G,G&&G.data&&(Q.data=G.data),O[ut]=Q,K++}l.attributes=O,l.attributesNum=K,l.index=q}function _(){const P=l.newAttributes;for(let z=0,N=P.length;z<N;z++)P[z]=0}function S(P){R(P,0)}function R(P,z){const N=l.newAttributes,q=l.enabledAttributes,O=l.attributeDivisors;N[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),O[P]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),O[P]=z)}function C(){const P=l.newAttributes,z=l.enabledAttributes;for(let N=0,q=z.length;N<q;N++)z[N]!==P[N]&&(s.disableVertexAttribArray(N),z[N]=0)}function b(P,z,N,q,O,Z,K){K===!0?s.vertexAttribIPointer(P,z,N,O,Z):s.vertexAttribPointer(P,z,N,q,O,Z)}function D(P,z,N,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const O=q.attributes,Z=N.getAttributes(),K=z.defaultAttributeValues;for(const et in Z){const ut=Z[et];if(ut.location>=0){let yt=O[et];if(yt===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(yt=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(yt=P.instanceColor)),yt!==void 0){const G=yt.normalized,Q=yt.itemSize,rt=e.get(yt);if(rt===void 0)continue;const gt=rt.buffer,_t=rt.type,pt=rt.bytesPerElement,Yt=n.isWebGL2===!0&&(_t===s.INT||_t===s.UNSIGNED_INT||yt.gpuType===zo);if(yt.isInterleavedBufferAttribute){const Rt=yt.data,F=Rt.stride,ve=yt.offset;if(Rt.isInstancedInterleavedBuffer){for(let Et=0;Et<ut.locationSize;Et++)R(ut.location+Et,Rt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Et=0;Et<ut.locationSize;Et++)S(ut.location+Et);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Et=0;Et<ut.locationSize;Et++)b(ut.location+Et,Q/ut.locationSize,_t,G,F*pt,(ve+Q/ut.locationSize*Et)*pt,Yt)}else{if(yt.isInstancedBufferAttribute){for(let Rt=0;Rt<ut.locationSize;Rt++)R(ut.location+Rt,yt.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Rt=0;Rt<ut.locationSize;Rt++)S(ut.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Rt=0;Rt<ut.locationSize;Rt++)b(ut.location+Rt,Q/ut.locationSize,_t,G,Q*pt,Q/ut.locationSize*Rt*pt,Yt)}}else if(K!==void 0){const G=K[et];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(ut.location,G);break;case 3:s.vertexAttrib3fv(ut.location,G);break;case 4:s.vertexAttrib4fv(ut.location,G);break;default:s.vertexAttrib1fv(ut.location,G)}}}}C()}function H(){$();for(const P in a){const z=a[P];for(const N in z){const q=z[N];for(const O in q)g(q[O].object),delete q[O];delete z[N]}delete a[P]}}function x(P){if(a[P.id]===void 0)return;const z=a[P.id];for(const N in z){const q=z[N];for(const O in q)g(q[O].object),delete q[O];delete z[N]}delete a[P.id]}function w(P){for(const z in a){const N=a[z];if(N[P.id]===void 0)continue;const q=N[P.id];for(const O in q)g(q[O].object),delete q[O];delete N[P.id]}}function $(){J(),h=!0,l!==c&&(l=c,f(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:$,resetDefaultState:J,dispose:H,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:S,disableUnusedAttributes:C}}function jd(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=o||t.has("OES_texture_float"),R=_&&S,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:C}}function tf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Bn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,_=E*4;let S=p.clippingState||null;c.value=S,S=h(g,d,_,f);for(let R=0;R!==_;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=f;_!==v;++_,S+=4)o.copy(u[_]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ef(s){let t=new WeakMap;function e(o,a){return a===vr?o.mapping=gi:a===xr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vr||a===xr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new uh(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class lc extends ac{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ui=4,Za=[.125,.215,.35,.446,.526,.582],Gn=20,ar=new lc,Ja=new Bt;let or=null,cr=0,lr=0;const kn=(1+Math.sqrt(5))/2,li=1/kn,Ka=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,kn,li),new L(0,kn,-li),new L(li,0,kn),new L(-li,0,kn),new L(kn,li,0),new L(-kn,li,0)];class ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){or=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(or,cr,lr),t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),or=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),lr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Oi,format:Ye,colorSpace:Rn,depthBuffer:!1},i=Qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nf(r)),this._blurMaterial=sf(r,t,e)}return i}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,i){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ja),h.toneMapping=En,h.autoClear=!1;const f=new nc({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new k(new Ue,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ja),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;us(i,E*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gi||t.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=to());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ka[(i-1)%Ka.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new k(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const p=[];let E=0;for(let b=0;b<Gn;++b){const D=b/v,H=Math.exp(-D*D/2);p.push(H),b===0?E+=H:b<m&&(E+=2*H)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const S=this._sizeLods[i],R=3*S*(i>_-ui?i-_+ui:0),C=4*(this._cubeSize-S);us(e,R,C,3*S,2*S),c.setRenderTarget(e),c.render(u,ar)}}function nf(s){const t=[],e=[],n=[];let i=s;const r=s-ui+1+Za.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ui?c=Za[o-s+ui-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*f),_=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let C=0;C<f;C++){const b=C%3*2/3-1,D=C>2?0:-1,H=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];E.set(H,v*g*C),_.set(d,m*g*C);const x=[C,C,C,C,C,C];S.set(x,p*g*C)}const R=new Pe;R.setAttribute("position",new Ve(E,v)),R.setAttribute("uv",new Ve(_,m)),R.setAttribute("faceIndex",new Ve(S,p)),t.push(R),i>ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qa(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function sf(s,t,e){const n=new Float32Array(Gn),i=new L(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nr(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function to(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nr(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function eo(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Nr(){return`

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
	`}function rf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===vr||c===xr,h=c===gi||c===_i;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ja(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ja(s));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function af(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function of(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let _=0,S=E.length;_<S;_+=3){const R=E[_+0],C=E[_+1],b=E[_+2];d.push(R,C,C,b,b,R)}}else if(g!==void 0){const E=g.array;v=g.version;for(let _=0,S=E.length/3-1;_<S;_+=3){const R=_+0,C=_+1,b=_+2;d.push(R,C,C,b,b,R)}}else return;const m=new(Zo(d)?sc:ic)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function cf(s,t,e,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,v),e.update(g,r,v)}function d(f,g,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let p=0;for(let E=0;E<v;E++)p+=g[E];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function lf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hf(s,t){return s[0]-t[0]}function uf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function df(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let J=function(){w.dispose(),r.delete(h),h.removeEventListener("dispose",J)};var f=J;m!==void 0&&m.texture.dispose();const p=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let b=0;p===!0&&(b=1),E===!0&&(b=2),_===!0&&(b=3);let D=h.attributes.position.count*b,H=1;D>t.maxTextureSize&&(H=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const x=new Float32Array(D*H*4*v),w=new jo(x,D,H,v);w.type=ln,w.needsUpdate=!0;const $=b*4;for(let P=0;P<v;P++){const z=S[P],N=R[P],q=C[P],O=D*H*4*P;for(let Z=0;Z<z.count;Z++){const K=Z*$;p===!0&&(o.fromBufferAttribute(z,Z),x[O+K+0]=o.x,x[O+K+1]=o.y,x[O+K+2]=o.z,x[O+K+3]=0),E===!0&&(o.fromBufferAttribute(N,Z),x[O+K+4]=o.x,x[O+K+5]=o.y,x[O+K+6]=o.z,x[O+K+7]=0),_===!0&&(o.fromBufferAttribute(q,Z),x[O+K+8]=o.x,x[O+K+9]=o.y,x[O+K+10]=o.z,x[O+K+11]=q.itemSize===4?o.w:1)}}m={count:v,texture:w,size:new ft(D,H)},r.set(h,m),h.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let p=0;for(let _=0;_<d.length;_++)p+=d[_];const E=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",E),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];n[h.id]=v}for(let S=0;S<g;S++){const R=v[S];R[0]=S,R[1]=d[S]}v.sort(uf);for(let S=0;S<8;S++)S<g&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(hf);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const R=a[S],C=R[0],b=R[1];C!==Number.MAX_SAFE_INTEGER&&b?(m&&h.getAttribute("morphTarget"+S)!==m[C]&&h.setAttribute("morphTarget"+S,m[C]),p&&h.getAttribute("morphNormal"+S)!==p[C]&&h.setAttribute("morphNormal"+S,p[C]),i[S]=b,E+=b):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),p&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const _=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ff(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class hc extends Ie{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=Mn),n===void 0&&h===vi&&(n=Hn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=c!==void 0?c:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uc=new Ie,dc=new hc(1,1);dc.compareFunction=$o;const fc=new jo,pc=new $l,mc=new oc,no=[],io=[],so=new Float32Array(16),ro=new Float32Array(9),ao=new Float32Array(4);function yi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=no[i];if(r===void 0&&(r=new Float32Array(i),no[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function he(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Rs(s,t){let e=io[t];e===void 0&&(e=new Int32Array(t),io[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ao.set(n),s.uniformMatrix2fv(this.addr,!1,ao),ue(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ro.set(n),s.uniformMatrix3fv(this.addr,!1,ro),ue(e,n)}}function Mf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;so.set(n),s.uniformMatrix4fv(this.addr,!1,so),ue(e,n)}}function Sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?dc:uc;e.setTexture2D(t||r,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pc,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mc,i)}function Df(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fc,i)}function If(s){switch(s){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return Mf;case 5124:case 35670:return Sf;case 35667:case 35671:return yf;case 35668:case 35672:return Ef;case 35669:case 35673:return Tf;case 5125:return wf;case 36294:return bf;case 36295:return Af;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Df}}function Uf(s,t){s.uniform1fv(this.addr,t)}function Nf(s,t){const e=yi(t,this.size,2);s.uniform2fv(this.addr,e)}function Ff(s,t){const e=yi(t,this.size,3);s.uniform3fv(this.addr,e)}function Of(s,t){const e=yi(t,this.size,4);s.uniform4fv(this.addr,e)}function Bf(s,t){const e=yi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kf(s,t){const e=yi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function zf(s,t){const e=yi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gf(s,t){s.uniform1iv(this.addr,t)}function Vf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Wf(s,t){s.uniform4iv(this.addr,t)}function Xf(s,t){s.uniform1uiv(this.addr,t)}function qf(s,t){s.uniform2uiv(this.addr,t)}function Yf(s,t){s.uniform3uiv(this.addr,t)}function $f(s,t){s.uniform4uiv(this.addr,t)}function Zf(s,t,e){const n=this.cache,i=t.length,r=Rs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uc,r[o])}function Jf(s,t,e){const n=this.cache,i=t.length,r=Rs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pc,r[o])}function Kf(s,t,e){const n=this.cache,i=t.length,r=Rs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mc,r[o])}function jf(s,t,e){const n=this.cache,i=t.length,r=Rs(e,i);he(n,r)||(s.uniform1iv(this.addr,r),ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fc,r[o])}function Qf(s){switch(s){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return kf;case 35676:return zf;case 5124:case 35670:return Gf;case 35667:case 35671:return Vf;case 35668:case 35672:return Hf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return jf}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=If(e.type)}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}}class np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function oo(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,e){const n=s.name,i=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),o=hr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){oo(e,l===void 0?new tp(a,s,t):new ep(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new np(a),oo(e,u)),e=u}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ip(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function co(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const sp=37297;let rp=0;function ap(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function op(s){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s);let n;switch(t===e?n="":t===ys&&e===Ss?n="LinearDisplayP3ToLinearSRGB":t===Ss&&e===ys&&(n="LinearSRGBToLinearDisplayP3"),s){case Rn:case As:return[n,"LinearTransferOETF"];case Ze:case Dr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function lo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ap(s.getShaderSource(t),o)}else return i}function cp(s,t){const e=op(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lp(s,t){let e;switch(t){case sl:e="Linear";break;case rl:e="Reinhard";break;case al:e="OptimizedCineon";break;case Bo:e="ACESFilmic";break;case cl:e="AgX";break;case ll:e="Neutral";break;case ol:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function hp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}function up(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(di).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function di(s){return s!==""}function ho(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tr(s){return s.replace(pp,gp)}const mp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gp(s,t){let e=Ft[t];if(e===void 0){const n=mp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tr(e)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(s){return s.replace(_p,vp)}function vp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function po(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function xp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===No?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Mp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function yp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case nl:t="ENVMAP_BLENDING_MIX";break;case il:t="ENVMAP_BLENDING_ADD";break}return t}function Ep(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=xp(e),l=Mp(e),h=Sp(e),u=yp(e),d=Ep(e),f=e.isWebGL2?"":hp(e),g=up(e),v=dp(r),m=i.createProgram();let p,E,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(di).join(`
`),p.length>0&&(p+=`
`),E=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(di).join(`
`),E.length>0&&(E+=`
`)):(p=[po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),E=[f,po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Ft.tonemapping_pars_fragment:"",e.toneMapping!==En?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,cp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(di).join(`
`)),o=Tr(o),o=ho(o,e),o=uo(o,e),a=Tr(a),a=ho(a,e),a=uo(a,e),o=fo(o),a=fo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=_+p+o,R=_+E+a,C=co(i,i.VERTEX_SHADER,S),b=co(i,i.FRAGMENT_SHADER,R);i.attachShader(m,C),i.attachShader(m,b),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D($){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(b).trim();let N=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,b);else{const O=lo(i,C,"vertex"),Z=lo(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+J+`
`+O+`
`+Z)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||z==="")&&(q=!1);q&&($.diagnostics={runnable:N,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:E}})}i.deleteShader(C),i.deleteShader(b),H=new vs(i,m),x=fp(i,m)}let H;this.getUniforms=function(){return H===void 0&&D(this),H};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(m,sp)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=b,this}let wp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ap(t),e.set(t,n)),n}}class Ap{constructor(t){this.id=wp++,this.code=t,this.usedTimes=0}}function Cp(s,t,e,n,i,r,o){const a=new tc,c=new bp,l=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,w,$,J,P){const z=J.fog,N=P.geometry,q=x.isMeshStandardMaterial?J.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),Z=O&&O.mapping===bs?O.image.height:null,K=v[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ut=et!==void 0?et.length:0;let yt=0;N.morphAttributes.position!==void 0&&(yt=1),N.morphAttributes.normal!==void 0&&(yt=2),N.morphAttributes.color!==void 0&&(yt=3);let G,Q,rt,gt;if(K){const Jt=Je[K];G=Jt.vertexShader,Q=Jt.fragmentShader}else G=x.vertexShader,Q=x.fragmentShader,c.update(x),rt=c.getVertexShaderID(x),gt=c.getFragmentShaderID(x);const _t=s.getRenderTarget(),pt=P.isInstancedMesh===!0,Yt=P.isBatchedMesh===!0,Rt=!!x.map,F=!!x.matcap,ve=!!O,Et=!!x.aoMap,Gt=!!x.lightMap,wt=!!x.bumpMap,Xt=!!x.normalMap,kt=!!x.displacementMap,Vt=!!x.emissiveMap,ae=!!x.metalnessMap,A=!!x.roughnessMap,M=x.anisotropy>0,Y=x.clearcoat>0,j=x.iridescence>0,nt=x.sheen>0,tt=x.transmission>0,It=M&&!!x.anisotropyMap,bt=Y&&!!x.clearcoatMap,ot=Y&&!!x.clearcoatNormalMap,lt=Y&&!!x.clearcoatRoughnessMap,Ut=j&&!!x.iridescenceMap,it=j&&!!x.iridescenceThicknessMap,ce=nt&&!!x.sheenColorMap,Ht=nt&&!!x.sheenRoughnessMap,St=!!x.specularMap,vt=!!x.specularColorMap,xt=!!x.specularIntensityMap,qt=tt&&!!x.transmissionMap,Lt=tt&&!!x.thicknessMap,Qt=!!x.gradientMap,I=!!x.alphaMap,ct=x.alphaTest>0,V=!!x.alphaHash,st=!!x.extensions;let ht=En;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Wt={isWebGL2:u,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:Q,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Yt,instancing:pt,instancingColor:pt&&P.instanceColor!==null,instancingMorph:pt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Rn,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:F,envMap:ve,envMapMode:ve&&O.mapping,envMapCubeUVHeight:Z,aoMap:Et,lightMap:Gt,bumpMap:wt,normalMap:Xt,displacementMap:f&&kt,emissiveMap:Vt,normalMapObjectSpace:Xt&&x.normalMapType===Ml,normalMapTangentSpace:Xt&&x.normalMapType===Yo,metalnessMap:ae,roughnessMap:A,anisotropy:M,anisotropyMap:It,clearcoat:Y,clearcoatMap:bt,clearcoatNormalMap:ot,clearcoatRoughnessMap:lt,iridescence:j,iridescenceMap:Ut,iridescenceThicknessMap:it,sheen:nt,sheenColorMap:ce,sheenRoughnessMap:Ht,specularMap:St,specularColorMap:vt,specularIntensityMap:xt,transmission:tt,transmissionMap:qt,thicknessMap:Lt,gradientMap:Qt,opaque:x.transparent===!1&&x.blending===pi&&x.alphaToCoverage===!1,alphaMap:I,alphaTest:ct,alphaHash:V,combine:x.combine,mapUv:Rt&&m(x.map.channel),aoMapUv:Et&&m(x.aoMap.channel),lightMapUv:Gt&&m(x.lightMap.channel),bumpMapUv:wt&&m(x.bumpMap.channel),normalMapUv:Xt&&m(x.normalMap.channel),displacementMapUv:kt&&m(x.displacementMap.channel),emissiveMapUv:Vt&&m(x.emissiveMap.channel),metalnessMapUv:ae&&m(x.metalnessMap.channel),roughnessMapUv:A&&m(x.roughnessMap.channel),anisotropyMapUv:It&&m(x.anisotropyMap.channel),clearcoatMapUv:bt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(x.sheenRoughnessMap.channel),specularMapUv:St&&m(x.specularMap.channel),specularColorMapUv:vt&&m(x.specularColorMap.channel),specularIntensityMapUv:xt&&m(x.specularIntensityMap.channel),transmissionMapUv:qt&&m(x.transmissionMap.channel),thicknessMapUv:Lt&&m(x.thicknessMap.channel),alphaMapUv:I&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Xt||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(Rt||I),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:st&&x.extensions.derivatives===!0,extensionFragDepth:st&&x.extensions.fragDepth===!0,extensionDrawBuffers:st&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function E(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const $ in x.defines)w.push($),w.push(x.defines[$]);return x.isRawShaderMaterial===!1&&(_(w,x),S(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.instancingMorph&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.normalMapObjectSpace&&a.enable(7),w.normalMapTangentSpace&&a.enable(8),w.clearcoat&&a.enable(9),w.iridescence&&a.enable(10),w.alphaTest&&a.enable(11),w.vertexColors&&a.enable(12),w.vertexAlphas&&a.enable(13),w.vertexUv1s&&a.enable(14),w.vertexUv2s&&a.enable(15),w.vertexUv3s&&a.enable(16),w.vertexTangents&&a.enable(17),w.anisotropy&&a.enable(18),w.alphaHash&&a.enable(19),w.batching&&a.enable(20),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const w=v[x.type];let $;if(w){const J=Je[w];$=oh.clone(J.uniforms)}else $=x.uniforms;return $}function C(x,w){let $;for(let J=0,P=h.length;J<P;J++){const z=h[J];if(z.cacheKey===w){$=z,++$.usedTimes;break}}return $===void 0&&($=new Tp(s,w,x,r),h.push($)),$}function b(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function D(x){c.remove(x)}function H(){c.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:R,acquireProgram:C,releaseProgram:b,releaseShaderCache:D,programs:h,dispose:H}}function Rp(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Pp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function go(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Pp),n.length>1&&n.sort(d||mo),i.length>1&&i.sort(d||mo)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Lp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new go,s.set(n,[o])):i>=r.length?(o=new go,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Up=0;function Np(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Fp(s,t){const e=new Dp,n=Ip(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new ie,a=new ie;function c(h,u){let d=0,f=0,g=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let v=0,m=0,p=0,E=0,_=0,S=0,R=0,C=0,b=0,D=0,H=0;h.sort(Np);const x=u===!0?Math.PI:1;for(let $=0,J=h.length;$<J;$++){const P=h[$],z=P.color,N=P.intensity,q=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*N*x,f+=z.g*N*x,g+=z.b*N*x;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],N);H++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const K=P.shadow,et=n.get(P);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,i.directionalShadow[v]=et,i.directionalShadowMap[v]=O,i.directionalShadowMatrix[v]=P.shadow.matrix,S++}i.directional[v]=Z,v++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(z).multiplyScalar(N*x),Z.distance=q,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[p]=Z;const K=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,K.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=K.matrix,P.castShadow){const et=n.get(P);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,i.spotShadow[p]=et,i.spotShadowMap[p]=O,C++}p++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(z).multiplyScalar(N),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=Z,E++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*x),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const K=P.shadow,et=n.get(P);et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,i.pointShadow[m]=et,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=Z,m++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(N*x),Z.groundColor.copy(P.groundColor).multiplyScalar(N*x),i.hemi[_]=Z,_++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==v||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==E||w.hemiLength!==_||w.numDirectionalShadows!==S||w.numPointShadows!==R||w.numSpotShadows!==C||w.numSpotMaps!==b||w.numLightProbes!==H)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=E,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=C+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=H,w.directionalLength=v,w.pointLength=m,w.spotLength=p,w.rectAreaLength=E,w.hemiLength=_,w.numDirectionalShadows=S,w.numPointShadows=R,w.numSpotShadows=C,w.numSpotMaps=b,w.numLightProbes=H,i.version=Up++)}function l(h,u){let d=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let E=0,_=h.length;E<_;E++){const S=h[E];if(S.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function _o(s,t){const e=new Fp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Op(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new _o(s,t),e.set(r,[c])):o>=a.length?(c=new _o(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Bp extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kp extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
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
}`;function Vp(s,t,e){let n=new Ur;const i=new ft,r=new ft,o=new ge,a=new Bp({depthPacking:xl}),c=new kp,l={},h=e.maxTextureSize,u={[bn]:De,[De]:bn,[cn]:cn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:zp,fragmentShader:Gp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new k(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let p=this.type;this.render=function(C,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const H=s.getRenderTarget(),x=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),$=s.state;$.setBlending(yn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=p!==on&&this.type===on,P=p===on&&this.type!==on;for(let z=0,N=C.length;z<N;z++){const q=C[z],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const Z=O.getFrameExtents();if(i.multiply(Z),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||J===!0||P===!0){const et=this.type!==on?{minFilter:Ce,magFilter:Ce}:{};O.map!==null&&O.map.dispose(),O.map=new Xn(i.x,i.y,et),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const K=O.getViewportCount();for(let et=0;et<K;et++){const ut=O.getViewport(et);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),$.viewport(o),O.updateMatrices(q,et),n=O.getFrustum(),S(b,D,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===on&&E(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(H,x,w)};function E(C,b){const D=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(b,null,D,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(b,null,D,f,v,null)}function _(C,b,D,H){let x=null;const w=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=x.uuid,J=b.uuid;let P=l[$];P===void 0&&(P={},l[$]=P);let z=P[J];z===void 0&&(z=x.clone(),P[J]=z,b.addEventListener("dispose",R)),x=z}if(x.visible=b.visible,x.wireframe=b.wireframe,H===on?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=s.properties.get(x);$.light=D}return x}function S(C,b,D,H,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===on)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const J=t.update(C),P=C.material;if(Array.isArray(P)){const z=J.groups;for(let N=0,q=z.length;N<q;N++){const O=z[N],Z=P[O.materialIndex];if(Z&&Z.visible){const K=_(C,Z,H,x);C.onBeforeShadow(s,C,b,D,J,K,O),s.renderBufferDirect(D,null,J,K,C,O),C.onAfterShadow(s,C,b,D,J,K,O)}}}else if(P.visible){const z=_(C,P,H,x);C.onBeforeShadow(s,C,b,D,J,z,null),s.renderBufferDirect(D,null,J,z,C,null),C.onAfterShadow(s,C,b,D,J,z,null)}}const $=C.children;for(let J=0,P=$.length;J<P;J++)S($[J],b,D,H,x)}function R(C){C.target.removeEventListener("dispose",R);for(const D in l){const H=l[D],x=C.target.uuid;x in H&&(H[x].dispose(),delete H[x])}}}function Hp(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ct=new ge;let V=null;const st=new ge(0,0,0,0);return{setMask:function(ht){V!==ht&&!I&&(s.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){I=ht},setClear:function(ht,Wt,Jt,xe,Be){Be===!0&&(ht*=xe,Wt*=xe,Jt*=xe),ct.set(ht,Wt,Jt,xe),st.equals(ct)===!1&&(s.clearColor(ht,Wt,Jt,xe),st.copy(ct))},reset:function(){I=!1,V=null,st.set(-1,0,0,0)}}}function r(){let I=!1,ct=null,V=null,st=null;return{setTest:function(ht){ht?pt(s.DEPTH_TEST):Yt(s.DEPTH_TEST)},setMask:function(ht){ct!==ht&&!I&&(s.depthMask(ht),ct=ht)},setFunc:function(ht){if(V!==ht){switch(ht){case Zc:s.depthFunc(s.NEVER);break;case Jc:s.depthFunc(s.ALWAYS);break;case Kc:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case jc:s.depthFunc(s.EQUAL);break;case Qc:s.depthFunc(s.GEQUAL);break;case tl:s.depthFunc(s.GREATER);break;case el:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=ht}},setLocked:function(ht){I=ht},setClear:function(ht){st!==ht&&(s.clearDepth(ht),st=ht)},reset:function(){I=!1,ct=null,V=null,st=null}}}function o(){let I=!1,ct=null,V=null,st=null,ht=null,Wt=null,Jt=null,xe=null,Be=null;return{setTest:function(Kt){I||(Kt?pt(s.STENCIL_TEST):Yt(s.STENCIL_TEST))},setMask:function(Kt){ct!==Kt&&!I&&(s.stencilMask(Kt),ct=Kt)},setFunc:function(Kt,Te,$e){(V!==Kt||st!==Te||ht!==$e)&&(s.stencilFunc(Kt,Te,$e),V=Kt,st=Te,ht=$e)},setOp:function(Kt,Te,$e){(Wt!==Kt||Jt!==Te||xe!==$e)&&(s.stencilOp(Kt,Te,$e),Wt=Kt,Jt=Te,xe=$e)},setLocked:function(Kt){I=Kt},setClear:function(Kt){Be!==Kt&&(s.clearStencil(Kt),Be=Kt)},reset:function(){I=!1,ct=null,V=null,st=null,ht=null,Wt=null,Jt=null,xe=null,Be=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,v=[],m=null,p=!1,E=null,_=null,S=null,R=null,C=null,b=null,D=null,H=new Bt(0,0,0),x=0,w=!1,$=null,J=null,P=null,z=null,N=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),O=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),O=Z>=2);let et=null,ut={};const yt=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),Q=new ge().fromArray(yt),rt=new ge().fromArray(G);function gt(I,ct,V,st){const ht=new Uint8Array(4),Wt=s.createTexture();s.bindTexture(I,Wt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<V;Jt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ct,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(ct+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return Wt}const _t={};_t[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),pt(s.DEPTH_TEST),c.setFunc(xs),kt(!1),Vt(Zr),pt(s.CULL_FACE),wt(yn);function pt(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Yt(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Rt(I,ct){return f[I]!==ct?(s.bindFramebuffer(I,ct),f[I]=ct,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ct),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ct)),!0):!1}function F(I,ct){let V=v,st=!1;if(I){V=g.get(ct),V===void 0&&(V=[],g.set(ct,V));const ht=I.textures;if(V.length!==ht.length||V[0]!==s.COLOR_ATTACHMENT0){for(let Wt=0,Jt=ht.length;Wt<Jt;Wt++)V[Wt]=s.COLOR_ATTACHMENT0+Wt;V.length=ht.length,st=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,st=!0);if(st)if(e.isWebGL2)s.drawBuffers(V);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ve(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const Et={[zn]:s.FUNC_ADD,[Uc]:s.FUNC_SUBTRACT,[Nc]:s.FUNC_REVERSE_SUBTRACT};if(n)Et[Qr]=s.MIN,Et[ta]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Et[Qr]=I.MIN_EXT,Et[ta]=I.MAX_EXT)}const Gt={[Fc]:s.ZERO,[Oc]:s.ONE,[Bc]:s.SRC_COLOR,[gr]:s.SRC_ALPHA,[Wc]:s.SRC_ALPHA_SATURATE,[Vc]:s.DST_COLOR,[zc]:s.DST_ALPHA,[kc]:s.ONE_MINUS_SRC_COLOR,[_r]:s.ONE_MINUS_SRC_ALPHA,[Hc]:s.ONE_MINUS_DST_COLOR,[Gc]:s.ONE_MINUS_DST_ALPHA,[Xc]:s.CONSTANT_COLOR,[qc]:s.ONE_MINUS_CONSTANT_COLOR,[Yc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(I,ct,V,st,ht,Wt,Jt,xe,Be,Kt){if(I===yn){p===!0&&(Yt(s.BLEND),p=!1);return}if(p===!1&&(pt(s.BLEND),p=!0),I!==Ic){if(I!==E||Kt!==w){if((_!==zn||C!==zn)&&(s.blendEquation(s.FUNC_ADD),_=zn,C=zn),Kt)switch(I){case pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.ONE,s.ONE);break;case Kr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,R=null,b=null,D=null,H.set(0,0,0),x=0,E=I,w=Kt}return}ht=ht||ct,Wt=Wt||V,Jt=Jt||st,(ct!==_||ht!==C)&&(s.blendEquationSeparate(Et[ct],Et[ht]),_=ct,C=ht),(V!==S||st!==R||Wt!==b||Jt!==D)&&(s.blendFuncSeparate(Gt[V],Gt[st],Gt[Wt],Gt[Jt]),S=V,R=st,b=Wt,D=Jt),(xe.equals(H)===!1||Be!==x)&&(s.blendColor(xe.r,xe.g,xe.b,Be),H.copy(xe),x=Be),E=I,w=!1}function Xt(I,ct){I.side===cn?Yt(s.CULL_FACE):pt(s.CULL_FACE);let V=I.side===De;ct&&(V=!V),kt(V),I.blending===pi&&I.transparent===!1?wt(yn):wt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const st=I.stencilWrite;l.setTest(st),st&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),A(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){$!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),$=I)}function Vt(I){I!==Lc?(pt(s.CULL_FACE),I!==J&&(I===Zr?s.cullFace(s.BACK):I===Dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Yt(s.CULL_FACE),J=I}function ae(I){I!==P&&(O&&s.lineWidth(I),P=I)}function A(I,ct,V){I?(pt(s.POLYGON_OFFSET_FILL),(z!==ct||N!==V)&&(s.polygonOffset(ct,V),z=ct,N=V)):Yt(s.POLYGON_OFFSET_FILL)}function M(I){I?pt(s.SCISSOR_TEST):Yt(s.SCISSOR_TEST)}function Y(I){I===void 0&&(I=s.TEXTURE0+q-1),et!==I&&(s.activeTexture(I),et=I)}function j(I,ct,V){V===void 0&&(et===null?V=s.TEXTURE0+q-1:V=et);let st=ut[V];st===void 0&&(st={type:void 0,texture:void 0},ut[V]=st),(st.type!==I||st.texture!==ct)&&(et!==V&&(s.activeTexture(V),et=V),s.bindTexture(I,ct||_t[I]),st.type=I,st.texture=ct)}function nt(){const I=ut[et];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(I){Q.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function xt(I){rt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function qt(I,ct){let V=u.get(ct);V===void 0&&(V=new WeakMap,u.set(ct,V));let st=V.get(I);st===void 0&&(st=s.getUniformBlockIndex(ct,I.name),V.set(I,st))}function Lt(I,ct){const st=u.get(ct).get(I);h.get(ct)!==st&&(s.uniformBlockBinding(ct,st,I.__bindingPointIndex),h.set(ct,st))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},et=null,ut={},f={},g=new WeakMap,v=[],m=null,p=!1,E=null,_=null,S=null,R=null,C=null,b=null,D=null,H=new Bt(0,0,0),x=0,w=!1,$=null,J=null,P=null,z=null,N=null,Q.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:pt,disable:Yt,bindFramebuffer:Rt,drawBuffers:F,useProgram:ve,setBlending:wt,setMaterial:Xt,setFlipSided:kt,setCullFace:Vt,setLineWidth:ae,setPolygonOffset:A,setScissorTest:M,activeTexture:Y,bindTexture:j,unbindTexture:nt,compressedTexImage2D:tt,compressedTexImage3D:It,texImage2D:Ht,texImage3D:St,updateUBOMapping:qt,uniformBlockBinding:Lt,texStorage2D:it,texStorage3D:ce,texSubImage2D:bt,texSubImage3D:ot,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ut,scissor:vt,viewport:xt,reset:Qt}}function Wp(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return g?new OffscreenCanvas(A,M):ws("canvas")}function m(A,M,Y,j){let nt=1;const tt=ae(A);if((tt.width>j||tt.height>j)&&(nt=j/Math.max(tt.width,tt.height)),nt<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const It=M?Ts:Math.floor,bt=It(nt*tt.width),ot=It(nt*tt.height);d===void 0&&(d=v(bt,ot));const lt=Y?v(bt,ot):d;return lt.width=bt,lt.height=ot,lt.getContext("2d").drawImage(A,0,0,bt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+bt+"x"+ot+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){const M=ae(A);return Er(M.width)&&Er(M.height)}function E(A){return a?!1:A.wrapS!==qe||A.wrapT!==qe||A.minFilter!==Ce&&A.minFilter!==Le}function _(A,M){return A.generateMipmaps&&M&&A.minFilter!==Ce&&A.minFilter!==Le}function S(A){s.generateMipmap(A)}function R(A,M,Y,j,nt=!1){if(a===!1)return M;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=M;if(M===s.RED&&(Y===s.FLOAT&&(tt=s.R32F),Y===s.HALF_FLOAT&&(tt=s.R16F),Y===s.UNSIGNED_BYTE&&(tt=s.R8)),M===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(tt=s.R8UI),Y===s.UNSIGNED_SHORT&&(tt=s.R16UI),Y===s.UNSIGNED_INT&&(tt=s.R32UI),Y===s.BYTE&&(tt=s.R8I),Y===s.SHORT&&(tt=s.R16I),Y===s.INT&&(tt=s.R32I)),M===s.RG&&(Y===s.FLOAT&&(tt=s.RG32F),Y===s.HALF_FLOAT&&(tt=s.RG16F),Y===s.UNSIGNED_BYTE&&(tt=s.RG8)),M===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(tt=s.RG8UI),Y===s.UNSIGNED_SHORT&&(tt=s.RG16UI),Y===s.UNSIGNED_INT&&(tt=s.RG32UI),Y===s.BYTE&&(tt=s.RG8I),Y===s.SHORT&&(tt=s.RG16I),Y===s.INT&&(tt=s.RG32I)),M===s.RGBA){const It=nt?Ms:Zt.getTransfer(j);Y===s.FLOAT&&(tt=s.RGBA32F),Y===s.HALF_FLOAT&&(tt=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(tt=It===jt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function C(A,M,Y){return _(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Ce&&A.minFilter!==Le?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){return A===Ce||A===ea||A===Ti?s.NEAREST:s.LINEAR}function D(A){const M=A.target;M.removeEventListener("dispose",D),x(M),M.isVideoTexture&&u.delete(M)}function H(A){const M=A.target;M.removeEventListener("dispose",H),$(M)}function x(A){const M=n.get(A);if(M.__webglInit===void 0)return;const Y=A.source,j=f.get(Y);if(j){const nt=j[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(A),Object.keys(j).length===0&&f.delete(Y)}n.remove(A)}function w(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const Y=A.source,j=f.get(Y);delete j[M.__cacheKey],o.memory.textures--}function $(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let nt=0;nt<M.__webglFramebuffer[j].length;nt++)s.deleteFramebuffer(M.__webglFramebuffer[j][nt]);else s.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)s.deleteFramebuffer(M.__webglFramebuffer[j]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=A.textures;for(let j=0,nt=Y.length;j<nt;j++){const tt=n.get(Y[j]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(Y[j])}n.remove(A)}let J=0;function P(){J=0}function z(){const A=J;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),J+=1,A}function N(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function q(A,M){const Y=n.get(A);if(A.isVideoTexture&&kt(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Y,A,M);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+M)}function O(A,M){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){rt(Y,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+M)}function Z(A,M){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){rt(Y,A,M);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+M)}function K(A,M){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){gt(Y,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+M)}const et={[Mr]:s.REPEAT,[qe]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},ut={[Ce]:s.NEAREST,[ea]:s.NEAREST_MIPMAP_NEAREST,[Ti]:s.NEAREST_MIPMAP_LINEAR,[Le]:s.LINEAR,[Ns]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},yt={[Sl]:s.NEVER,[Al]:s.ALWAYS,[yl]:s.LESS,[$o]:s.LEQUAL,[El]:s.EQUAL,[bl]:s.GEQUAL,[Tl]:s.GREATER,[wl]:s.NOTEQUAL};function G(A,M,Y){if(M.type===ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Le||M.magFilter===Ns||M.magFilter===Ti||M.magFilter===Vn||M.minFilter===Le||M.minFilter===Ns||M.minFilter===Ti||M.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(s.texParameteri(A,s.TEXTURE_WRAP_S,et[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,et[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,et[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ut[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ut[M.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==qe||M.wrapT!==qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,b(M.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Ce&&M.minFilter!==Le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,yt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ce||M.minFilter!==Ti&&M.minFilter!==Vn||M.type===ln&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Oi&&t.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Q(A,M){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D));const j=M.source;let nt=f.get(j);nt===void 0&&(nt={},f.set(j,nt));const tt=N(M);if(tt!==A.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),nt[tt].usedTimes++;const It=nt[A.__cacheKey];It!==void 0&&(nt[A.__cacheKey].usedTimes--,It.usedTimes===0&&w(M)),A.__cacheKey=tt,A.__webglTexture=nt[tt].texture}return Y}function rt(A,M,Y){let j=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=s.TEXTURE_3D);const nt=Q(A,M),tt=M.source;e.bindTexture(j,A.__webglTexture,s.TEXTURE0+Y);const It=n.get(tt);if(tt.version!==It.__version||nt===!0){e.activeTexture(s.TEXTURE0+Y);const bt=Zt.getPrimaries(Zt.workingColorSpace),ot=M.colorSpace===vn?null:Zt.getPrimaries(M.colorSpace),lt=M.colorSpace===vn||bt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ut=E(M)&&p(M.image)===!1;let it=m(M.image,Ut,!1,i.maxTextureSize);it=Vt(M,it);const ce=p(it)||a,Ht=r.convert(M.format,M.colorSpace);let St=r.convert(M.type),vt=R(M.internalFormat,Ht,St,M.colorSpace,M.isVideoTexture);G(j,M,ce);let xt;const qt=M.mipmaps,Lt=a&&M.isVideoTexture!==!0&&vt!==qo,Qt=It.__version===void 0||nt===!0,I=tt.dataReady,ct=C(M,it,ce);if(M.isDepthTexture)vt=s.DEPTH_COMPONENT,a?M.type===ln?vt=s.DEPTH_COMPONENT32F:M.type===Mn?vt=s.DEPTH_COMPONENT24:M.type===Hn?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:M.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Wn&&vt===s.DEPTH_COMPONENT&&M.type!==Lr&&M.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Mn,St=r.convert(M.type)),M.format===vi&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,M.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Hn,St=r.convert(M.type))),Qt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,vt,it.width,it.height,0,Ht,St,null));else if(M.isDataTexture)if(qt.length>0&&ce){Lt&&Qt&&e.texStorage2D(s.TEXTURE_2D,ct,vt,qt[0].width,qt[0].height);for(let V=0,st=qt.length;V<st;V++)xt=qt[V],Lt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,xt.width,xt.height,Ht,St,xt.data):e.texImage2D(s.TEXTURE_2D,V,vt,xt.width,xt.height,0,Ht,St,xt.data);M.generateMipmaps=!1}else Lt?(Qt&&e.texStorage2D(s.TEXTURE_2D,ct,vt,it.width,it.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,Ht,St,it.data)):e.texImage2D(s.TEXTURE_2D,0,vt,it.width,it.height,0,Ht,St,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Lt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,vt,qt[0].width,qt[0].height,it.depth);for(let V=0,st=qt.length;V<st;V++)xt=qt[V],M.format!==Ye?Ht!==null?Lt?I&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,it.depth,Ht,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,vt,xt.width,xt.height,it.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,it.depth,Ht,St,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,vt,xt.width,xt.height,it.depth,0,Ht,St,xt.data)}else{Lt&&Qt&&e.texStorage2D(s.TEXTURE_2D,ct,vt,qt[0].width,qt[0].height);for(let V=0,st=qt.length;V<st;V++)xt=qt[V],M.format!==Ye?Ht!==null?Lt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,xt.width,xt.height,Ht,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,xt.width,xt.height,Ht,St,xt.data):e.texImage2D(s.TEXTURE_2D,V,vt,xt.width,xt.height,0,Ht,St,xt.data)}else if(M.isDataArrayTexture)Lt?(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,vt,it.width,it.height,it.depth),I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Ht,St,it.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,Ht,St,it.data);else if(M.isData3DTexture)Lt?(Qt&&e.texStorage3D(s.TEXTURE_3D,ct,vt,it.width,it.height,it.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Ht,St,it.data)):e.texImage3D(s.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,Ht,St,it.data);else if(M.isFramebufferTexture){if(Qt)if(Lt)e.texStorage2D(s.TEXTURE_2D,ct,vt,it.width,it.height);else{let V=it.width,st=it.height;for(let ht=0;ht<ct;ht++)e.texImage2D(s.TEXTURE_2D,ht,vt,V,st,0,Ht,St,null),V>>=1,st>>=1}}else if(qt.length>0&&ce){if(Lt&&Qt){const V=ae(qt[0]);e.texStorage2D(s.TEXTURE_2D,ct,vt,V.width,V.height)}for(let V=0,st=qt.length;V<st;V++)xt=qt[V],Lt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Ht,St,xt):e.texImage2D(s.TEXTURE_2D,V,vt,Ht,St,xt);M.generateMipmaps=!1}else if(Lt){if(Qt){const V=ae(it);e.texStorage2D(s.TEXTURE_2D,ct,vt,V.width,V.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,St,it)}else e.texImage2D(s.TEXTURE_2D,0,vt,Ht,St,it);_(M,ce)&&S(j),It.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function gt(A,M,Y){if(M.image.length!==6)return;const j=Q(A,M),nt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+Y);const tt=n.get(nt);if(nt.version!==tt.__version||j===!0){e.activeTexture(s.TEXTURE0+Y);const It=Zt.getPrimaries(Zt.workingColorSpace),bt=M.colorSpace===vn?null:Zt.getPrimaries(M.colorSpace),ot=M.colorSpace===vn||It===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ut=M.image[0]&&M.image[0].isDataTexture,it=[];for(let V=0;V<6;V++)!lt&&!Ut?it[V]=m(M.image[V],!1,!0,i.maxCubemapSize):it[V]=Ut?M.image[V].image:M.image[V],it[V]=Vt(M,it[V]);const ce=it[0],Ht=p(ce)||a,St=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),xt=R(M.internalFormat,St,vt,M.colorSpace),qt=a&&M.isVideoTexture!==!0,Lt=tt.__version===void 0||j===!0,Qt=nt.dataReady;let I=C(M,ce,Ht);G(s.TEXTURE_CUBE_MAP,M,Ht);let ct;if(lt){qt&&Lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,I,xt,ce.width,ce.height);for(let V=0;V<6;V++){ct=it[V].mipmaps;for(let st=0;st<ct.length;st++){const ht=ct[st];M.format!==Ye?St!==null?qt?Qt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st,0,0,ht.width,ht.height,St,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st,xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?Qt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st,0,0,ht.width,ht.height,St,vt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st,xt,ht.width,ht.height,0,St,vt,ht.data)}}}else{if(ct=M.mipmaps,qt&&Lt){ct.length>0&&I++;const V=ae(it[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,I,xt,V.width,V.height)}for(let V=0;V<6;V++)if(Ut){qt?Qt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,it[V].width,it[V].height,St,vt,it[V].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,xt,it[V].width,it[V].height,0,St,vt,it[V].data);for(let st=0;st<ct.length;st++){const Wt=ct[st].image[V].image;qt?Qt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st+1,0,0,Wt.width,Wt.height,St,vt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st+1,xt,Wt.width,Wt.height,0,St,vt,Wt.data)}}else{qt?Qt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,St,vt,it[V]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,xt,St,vt,it[V]);for(let st=0;st<ct.length;st++){const ht=ct[st];qt?Qt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st+1,0,0,St,vt,ht.image[V]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,st+1,xt,St,vt,ht.image[V])}}}_(M,Ht)&&S(s.TEXTURE_CUBE_MAP),tt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function _t(A,M,Y,j,nt,tt){const It=r.convert(Y.format,Y.colorSpace),bt=r.convert(Y.type),ot=R(Y.internalFormat,It,bt,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const Ut=Math.max(1,M.width>>tt),it=Math.max(1,M.height>>tt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,ot,Ut,it,M.depth,0,It,bt,null):e.texImage2D(nt,tt,ot,Ut,it,0,It,bt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Xt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,nt,n.get(Y).__webglTexture,0,wt(M)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,nt,n.get(Y).__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(A,M,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let j=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||Xt(M)){const nt=M.depthTexture;nt&&nt.isDepthTexture&&(nt.type===ln?j=s.DEPTH_COMPONENT32F:nt.type===Mn&&(j=s.DEPTH_COMPONENT24));const tt=wt(M);Xt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,j,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,j,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const j=wt(M);Y&&Xt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,M.width,M.height):Xt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const j=M.textures;for(let nt=0;nt<j.length;nt++){const tt=j[nt],It=r.convert(tt.format,tt.colorSpace),bt=r.convert(tt.type),ot=R(tt.internalFormat,It,bt,tt.colorSpace),lt=wt(M);Y&&Xt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ot,M.width,M.height):Xt(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,ot,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ot,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Yt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,nt=wt(M);if(M.depthTexture.format===Wn)Xt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===vi)Xt(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const M=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Yt(M.__webglFramebuffer,A)}else if(Y){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=s.createRenderbuffer(),pt(M.__webglDepthbuffer[j],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),pt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function F(A,M,Y){const j=n.get(A);M!==void 0&&_t(j.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Rt(A)}function ve(A){const M=A.texture,Y=n.get(A),j=n.get(M);A.addEventListener("dispose",H);const nt=A.textures,tt=A.isWebGLCubeRenderTarget===!0,It=nt.length>1,bt=p(A)||a;if(It||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=M.version,o.memory.textures++),tt){Y.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ot]=[];for(let lt=0;lt<M.mipmaps.length;lt++)Y.__webglFramebuffer[ot][lt]=s.createFramebuffer()}else Y.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)Y.__webglFramebuffer[ot]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(It)if(i.drawBuffers)for(let ot=0,lt=nt.length;ot<lt;ot++){const Ut=n.get(nt[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Xt(A)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ot=0;ot<nt.length;ot++){const lt=nt[ot];Y.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);const Ut=r.convert(lt.format,lt.colorSpace),it=r.convert(lt.type),ce=R(lt.internalFormat,Ut,it,lt.colorSpace,A.isXRRenderTarget===!0),Ht=wt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,ce,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),G(s.TEXTURE_CUBE_MAP,M,bt);for(let ot=0;ot<6;ot++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)_t(Y.__webglFramebuffer[ot][lt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,lt);else _t(Y.__webglFramebuffer[ot],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);_(M,bt)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ot=0,lt=nt.length;ot<lt;ot++){const Ut=nt[ot],it=n.get(Ut);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),G(s.TEXTURE_2D,Ut,bt),_t(Y.__webglFramebuffer,A,Ut,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),_(Ut,bt)&&S(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ot=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,j.__webglTexture),G(ot,M,bt),a&&M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)_t(Y.__webglFramebuffer[lt],A,M,s.COLOR_ATTACHMENT0,ot,lt);else _t(Y.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,ot,0);_(M,bt)&&S(ot),e.unbindTexture()}A.depthBuffer&&Rt(A)}function Et(A){const M=p(A)||a,Y=A.textures;for(let j=0,nt=Y.length;j<nt;j++){const tt=Y[j];if(_(tt,M)){const It=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,bt=n.get(tt).__webglTexture;e.bindTexture(It,bt),S(It),e.unbindTexture()}}}function Gt(A){if(a&&A.samples>0&&Xt(A)===!1){const M=A.textures,Y=A.width,j=A.height;let nt=s.COLOR_BUFFER_BIT;const tt=[],It=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(A),ot=M.length>1;if(ot)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){tt.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&tt.push(It);const Ut=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(Ut===!1&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),ot&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[lt]),Ut===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[It]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[It])),ot){const it=n.get(M[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,Y,j,0,0,Y,j,nt,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[lt]);const Ut=n.get(M[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function wt(A){return Math.min(i.maxSamples,A.samples)}function Xt(A){const M=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Vt(A,M){const Y=A.colorSpace,j=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===yr||Y!==Rn&&Y!==vn&&(Zt.getTransfer(Y)===jt?a===!1?t.has("EXT_sRGB")===!0&&j===Ye?(A.format=yr,A.minFilter=Le,A.generateMipmaps=!1):M=Jo.sRGBToLinear(M):(j!==Ye||nt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=F,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Xt}function Xp(s,t,e){const n=e.isWebGL2;function i(r,o=vn){let a;const c=Zt.getTransfer(o);if(r===Tn)return s.UNSIGNED_BYTE;if(r===Go)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hl)return s.BYTE;if(r===ul)return s.SHORT;if(r===Lr)return s.UNSIGNED_SHORT;if(r===zo)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===ln)return s.FLOAT;if(r===Oi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===dl)return s.ALPHA;if(r===Ye)return s.RGBA;if(r===fl)return s.LUMINANCE;if(r===pl)return s.LUMINANCE_ALPHA;if(r===Wn)return s.DEPTH_COMPONENT;if(r===vi)return s.DEPTH_STENCIL;if(r===yr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ml)return s.RED;if(r===Ho)return s.RED_INTEGER;if(r===gl)return s.RG;if(r===Wo)return s.RG_INTEGER;if(r===Xo)return s.RGBA_INTEGER;if(r===Fs||r===Os||r===Bs||r===ks)if(c===jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===na||r===ia||r===sa||r===ra)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===na)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qo)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===aa||r===oa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===aa)return c===jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===oa)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ca||r===la||r===ha||r===ua||r===da||r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===Ma||r===Sa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ca)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===la)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ha)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ua)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===da)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fa)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pa)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ma)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ga)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_a)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===va)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xa)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ma)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sa)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zs||r===ya||r===Ea)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===zs)return c===jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ya)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ea)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_l||r===Ta||r===wa||r===ba)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===zs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ta)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ba)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class qp extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ie,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Cn({extensions:{fragDepth:!0},vertexShader:$p,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new k(new Sn(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Kp extends Mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Jp,m=e.getContextAttributes();let p=null,E=null;const _=[],S=[],R=new ft;let C=null;const b=new Ge;b.layers.enable(1),b.viewport=new ge;const D=new Ge;D.layers.enable(2),D.viewport=new ge;const H=[b,D],x=new qp;x.layers.enable(1),x.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=_[G];return Q===void 0&&(Q=new ur,_[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=_[G];return Q===void 0&&(Q=new ur,_[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=_[G];return Q===void 0&&(Q=new ur,_[G]=Q),Q.getHandSpace()};function J(G){const Q=S.indexOf(G.inputSource);if(Q===-1)return;const rt=_[Q];rt!==void 0&&(rt.update(G.inputSource,G.frame,l||o),rt.dispatchEvent({type:G.type,data:G.inputSource}))}function P(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",z);for(let G=0;G<_.length;G++){const Q=S[G];Q!==null&&(S[G]=null,_[G].disconnect(Q))}w=null,$=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",P),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Ye,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,rt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?vi:Wn,rt=m.stencil?Hn:Mn);const _t={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Xn(d.textureWidth,d.textureHeight,{format:Ye,type:Tn,depthTexture:new hc(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const pt=t.properties.get(E);pt.__ignoreDepthValues=d.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(G){for(let Q=0;Q<G.removed.length;Q++){const rt=G.removed[Q],gt=S.indexOf(rt);gt>=0&&(S[gt]=null,_[gt].disconnect(rt))}for(let Q=0;Q<G.added.length;Q++){const rt=G.added[Q];let gt=S.indexOf(rt);if(gt===-1){for(let pt=0;pt<_.length;pt++)if(pt>=S.length){S.push(rt),gt=pt;break}else if(S[pt]===null){S[pt]=rt,gt=pt;break}if(gt===-1)break}const _t=_[gt];_t&&_t.connect(rt)}}const N=new L,q=new L;function O(G,Q,rt){N.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(rt.matrixWorld);const gt=N.distanceTo(q),_t=Q.projectionMatrix.elements,pt=rt.projectionMatrix.elements,Yt=_t[14]/(_t[10]-1),Rt=_t[14]/(_t[10]+1),F=(_t[9]+1)/_t[5],ve=(_t[9]-1)/_t[5],Et=(_t[8]-1)/_t[0],Gt=(pt[8]+1)/pt[0],wt=Yt*Et,Xt=Yt*Gt,kt=gt/(-Et+Gt),Vt=kt*-Et;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Vt),G.translateZ(kt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ae=Yt+kt,A=Rt+kt,M=wt-Vt,Y=Xt+(gt-Vt),j=F*Rt/A*ae,nt=ve*Rt/A*ae;G.projectionMatrix.makePerspective(M,Y,j,nt,ae,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),x.near=D.near=b.near=G.near,x.far=D.far=b.far=G.far,(w!==x.near||$!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,$=x.far,b.near=w,b.far=$,D.near=w,D.far=$,b.updateProjectionMatrix(),D.updateProjectionMatrix(),G.updateProjectionMatrix());const Q=G.parent,rt=x.cameras;Z(x,Q);for(let gt=0;gt<rt.length;gt++)Z(rt[gt],Q);rt.length===2?O(x,b,D):x.projectionMatrix.copy(b.projectionMatrix),K(G,x,Q)};function K(G,Q,rt){rt===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(rt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Bi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let et=null;function ut(G,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let gt=!1;rt.length!==x.cameras.length&&(x.cameras.length=0,gt=!0);for(let pt=0;pt<rt.length;pt++){const Yt=rt[pt];let Rt=null;if(f!==null)Rt=f.getViewport(Yt);else{const ve=u.getViewSubImage(d,Yt);Rt=ve.viewport,pt===0&&(t.setRenderTargetTextures(E,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(E))}let F=H[pt];F===void 0&&(F=new Ge,F.layers.enable(pt),F.viewport=new ge,H[pt]=F),F.matrix.fromArray(Yt.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Yt.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(x.matrix.copy(F.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),gt===!0&&x.cameras.push(F)}const _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const pt=u.getDepthInformation(rt[0]);pt&&pt.isValid&&pt.texture&&v.init(t,pt,i.renderState)}}for(let rt=0;rt<_.length;rt++){const gt=S[rt],_t=_[rt];gt!==null&&_t!==void 0&&_t.update(gt,Q,l||o)}v.render(t,x),et&&et(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const yt=new cc;yt.setAnimationLoop(ut),this.setAnimationLoop=function(G){et=G},this.dispose=function(){}}}const On=new je,jp=new ie;function Qp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),_=E.envMap,S=E.envMapRotation;if(_&&(m.envMap.value=_,On.copy(S),On.x*=-1,On.y*=-1,On.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(On)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tm(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,_){const S=_.program;n.uniformBlockBinding(E,S)}function l(E,_){let S=i[E.id];S===void 0&&(g(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(E,R);const C=t.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){const _=u();E.__bindingPointIndex=_;const S=s.createBuffer(),R=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=i[E.id],S=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,b=S.length;C<b;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let H=0,x=D.length;H<x;H++){const w=D[H];if(f(w,C,H,R)===!0){const $=w.__offset,J=Array.isArray(w.value)?w.value:[w.value];let P=0;for(let z=0;z<J.length;z++){const N=J[z],q=v(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,$+P,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,_,S,R){const C=E.value,b=_+"_"+S;if(R[b]===void 0)return typeof C=="number"||typeof C=="boolean"?R[b]=C:R[b]=C.clone(),!0;{const D=R[b];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return R[b]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(E){const _=E.uniforms;let S=0;const R=16;for(let b=0,D=_.length;b<D;b++){const H=Array.isArray(_[b])?_[b]:[_[b]];for(let x=0,w=H.length;x<w;x++){const $=H[x],J=Array.isArray($.value)?$.value:[$.value];for(let P=0,z=J.length;P<z;P++){const N=J[P],q=v(N),O=S%R;O!==0&&R-O<q.boundary&&(S+=R-O),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=q.storage}}}const C=S%R;return C>0&&(S+=R-C),E.__size=S,E.__cache={},this}function v(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function m(E){const _=E.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class gc{constructor(t={}){const{canvas:e=Vl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const _=this;let S=!1,R=0,C=0,b=null,D=-1,H=null;const x=new ge,w=new ge;let $=null;const J=new Bt(0);let P=0,z=e.width,N=e.height,q=1,O=null,Z=null;const K=new ge(0,0,z,N),et=new ge(0,0,z,N);let ut=!1;const yt=new Ur;let G=!1,Q=!1,rt=null;const gt=new ie,_t=new ft,pt=new L,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return b===null?q:1}let F=n;function ve(T,U){for(let W=0;W<T.length;W++){const X=T[W],B=e.getContext(X,U);if(B!==null)return B}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pr}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),F=ve(U,T),F===null)throw ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Et,Gt,wt,Xt,kt,Vt,ae,A,M,Y,j,nt,tt,It,bt,ot,lt,Ut,it,ce,Ht,St,vt,xt;function qt(){Et=new af(F),Gt=new Qd(F,Et,t),Et.init(Gt),St=new Xp(F,Et,Gt),wt=new Hp(F,Et,Gt),Xt=new lf(F),kt=new Rp,Vt=new Wp(F,Et,wt,kt,Gt,St,Xt),ae=new ef(_),A=new rf(_),M=new ph(F,Gt),vt=new Kd(F,Et,M,Gt),Y=new of(F,M,Xt,vt),j=new ff(F,Y,M,Xt),it=new df(F,Gt,Vt),ot=new tf(kt),nt=new Cp(_,ae,A,Et,Gt,vt,ot),tt=new Qp(_,kt),It=new Lp,bt=new Op(Et,Gt),Ut=new Jd(_,ae,A,wt,j,d,c),lt=new Vp(_,j,Gt),xt=new tm(F,Xt,Gt,wt),ce=new jd(F,Et,Xt,Gt),Ht=new cf(F,Et,Xt,Gt),Xt.programs=nt.programs,_.capabilities=Gt,_.extensions=Et,_.properties=kt,_.renderLists=It,_.shadowMap=lt,_.state=wt,_.info=Xt}qt();const Lt=new Kp(_,F);this.xr=Lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(z,N,!1))},this.getSize=function(T){return T.set(z,N)},this.setSize=function(T,U,W=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,N=U,e.width=Math.floor(T*q),e.height=Math.floor(U*q),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(z*q,N*q).floor()},this.setDrawingBufferSize=function(T,U,W){z=T,N=U,q=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,U,W,X){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,U,W,X),wt.viewport(x.copy(K).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(et)},this.setScissor=function(T,U,W,X){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,U,W,X),wt.scissor(w.copy(et).multiplyScalar(q).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){wt.setScissorTest(ut=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(T=!0,U=!0,W=!0){let X=0;if(T){let B=!1;if(b!==null){const dt=b.texture.format;B=dt===Xo||dt===Wo||dt===Ho}if(B){const dt=b.texture.type,Mt=dt===Tn||dt===Mn||dt===Lr||dt===Hn||dt===Go||dt===Vo,Tt=Ut.getClearColor(),Ct=Ut.getClearAlpha(),zt=Tt.r,Pt=Tt.g,Dt=Tt.b;Mt?(f[0]=zt,f[1]=Pt,f[2]=Dt,f[3]=Ct,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=zt,g[1]=Pt,g[2]=Dt,g[3]=Ct,F.clearBufferiv(F.COLOR,0,g))}else X|=F.COLOR_BUFFER_BIT}U&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),It.dispose(),bt.dispose(),kt.dispose(),ae.dispose(),A.dispose(),j.dispose(),vt.dispose(),xt.dispose(),nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Be),Lt.removeEventListener("sessionend",Kt),rt&&(rt.dispose(),rt=null),Te.stop()};function Qt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Xt.autoReset,U=lt.enabled,W=lt.autoUpdate,X=lt.needsUpdate,B=lt.type;qt(),Xt.autoReset=T,lt.enabled=U,lt.autoUpdate=W,lt.needsUpdate=X,lt.type=B}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function V(T){const U=T.target;U.removeEventListener("dispose",V),st(U)}function st(T){ht(T),kt.remove(T)}function ht(T){const U=kt.get(T).programs;U!==void 0&&(U.forEach(function(W){nt.releaseProgram(W)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,X,B,dt){U===null&&(U=Yt);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=Ac(T,U,W,X,B);wt.setMaterial(X,Mt);let Ct=W.index,zt=1;if(X.wireframe===!0){if(Ct=Y.getWireframeAttribute(W),Ct===void 0)return;zt=2}const Pt=W.drawRange,Dt=W.attributes.position;let oe=Pt.start*zt,Ne=(Pt.start+Pt.count)*zt;dt!==null&&(oe=Math.max(oe,dt.start*zt),Ne=Math.min(Ne,(dt.start+dt.count)*zt)),Ct!==null?(oe=Math.max(oe,0),Ne=Math.min(Ne,Ct.count)):Dt!=null&&(oe=Math.max(oe,0),Ne=Math.min(Ne,Dt.count));const de=Ne-oe;if(de<0||de===1/0)return;vt.setup(B,X,Tt,W,Ct);let tn,ee=ce;if(Ct!==null&&(tn=M.get(Ct),ee=Ht,ee.setIndex(tn)),B.isMesh)X.wireframe===!0?(wt.setLineWidth(X.wireframeLinewidth*Rt()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(B.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),wt.setLineWidth(Nt*Rt()),B.isLineSegments?ee.setMode(F.LINES):B.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else B.isPoints?ee.setMode(F.POINTS):B.isSprite&&ee.setMode(F.TRIANGLES);if(B.isBatchedMesh)ee.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ee.renderInstances(oe,de,B.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ls=Math.min(W.instanceCount,Nt);ee.renderInstances(oe,de,Ls)}else ee.render(oe,de)};function Wt(T,U,W){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=De,T.needsUpdate=!0,Wi(T,U,W),T.side=bn,T.needsUpdate=!0,Wi(T,U,W),T.side=cn):Wi(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),m=bt.get(W),m.init(),E.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(_._useLegacyLights);const X=new Set;return T.traverse(function(B){const dt=B.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const Tt=dt[Mt];Wt(Tt,W,B),X.add(Tt)}else Wt(dt,W,B),X.add(dt)}),E.pop(),m=null,X},this.compileAsync=function(T,U,W=null){const X=this.compile(T,U,W);return new Promise(B=>{function dt(){if(X.forEach(function(Mt){kt.get(Mt).currentProgram.isReady()&&X.delete(Mt)}),X.size===0){B(T);return}setTimeout(dt,10)}Et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Jt=null;function xe(T){Jt&&Jt(T)}function Be(){Te.stop()}function Kt(){Te.start()}const Te=new cc;Te.setAnimationLoop(xe),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(T){Jt=T,Lt.setAnimationLoop(T),T===null?Te.stop():Te.start()},Lt.addEventListener("sessionstart",Be),Lt.addEventListener("sessionend",Kt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,b),m=bt.get(T,E.length),m.init(),E.push(m),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),yt.setFromProjectionMatrix(gt),Q=this.localClippingEnabled,G=ot.init(this.clippingPlanes,Q),v=It.get(T,p.length),v.init(),p.push(v),$e(T,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(O,Z),this.info.render.frame++,G===!0&&ot.beginShadows();const W=m.state.shadowsArray;if(lt.render(W,T,U),G===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1)&&Ut.render(v,T),m.setupLights(_._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let B=0,dt=X.length;B<dt;B++){const Mt=X[B];Hr(v,T,Mt,Mt.viewport)}}else Hr(v,T,U);b!==null&&(Vt.updateMultisampleRenderTarget(b),Vt.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,U),vt.resetDefaultState(),D=-1,H=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function $e(T,U,W,X){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||yt.intersectsSprite(T)){X&&pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);const Mt=j.update(T),Tt=T.material;Tt.visible&&v.push(T,Mt,Tt,W,pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||yt.intersectsObject(T))){const Mt=j.update(T),Tt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pt.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),pt.copy(Mt.boundingSphere.center)),pt.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Tt)){const Ct=Mt.groups;for(let zt=0,Pt=Ct.length;zt<Pt;zt++){const Dt=Ct[zt],oe=Tt[Dt.materialIndex];oe&&oe.visible&&v.push(T,Mt,oe,W,pt.z,Dt)}}else Tt.visible&&v.push(T,Mt,Tt,W,pt.z,null)}}const dt=T.children;for(let Mt=0,Tt=dt.length;Mt<Tt;Mt++)$e(dt[Mt],U,W,X)}function Hr(T,U,W,X){const B=T.opaque,dt=T.transmissive,Mt=T.transparent;m.setupLightsView(W),G===!0&&ot.setGlobalState(_.clippingPlanes,W),dt.length>0&&bc(B,dt,U,W),X&&wt.viewport(x.copy(X)),B.length>0&&Hi(B,U,W),dt.length>0&&Hi(dt,U,W),Mt.length>0&&Hi(Mt,U,W),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function bc(T,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const dt=Gt.isWebGL2;rt===null&&(rt=new Xn(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?Oi:Tn,minFilter:Vn,samples:dt?4:0})),_.getDrawingBufferSize(_t),dt?rt.setSize(_t.x,_t.y):rt.setSize(Ts(_t.x),Ts(_t.y));const Mt=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(J),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Tt=_.toneMapping;_.toneMapping=En,Hi(T,W,X),Vt.updateMultisampleRenderTarget(rt),Vt.updateRenderTargetMipmap(rt);let Ct=!1;for(let zt=0,Pt=U.length;zt<Pt;zt++){const Dt=U[zt],oe=Dt.object,Ne=Dt.geometry,de=Dt.material,tn=Dt.group;if(de.side===cn&&oe.layers.test(X.layers)){const ee=de.side;de.side=De,de.needsUpdate=!0,Wr(oe,W,X,Ne,de,tn),de.side=ee,de.needsUpdate=!0,Ct=!0}}Ct===!0&&(Vt.updateMultisampleRenderTarget(rt),Vt.updateRenderTargetMipmap(rt)),_.setRenderTarget(Mt),_.setClearColor(J,P),_.toneMapping=Tt}function Hi(T,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let B=0,dt=T.length;B<dt;B++){const Mt=T[B],Tt=Mt.object,Ct=Mt.geometry,zt=X===null?Mt.material:X,Pt=Mt.group;Tt.layers.test(W.layers)&&Wr(Tt,U,W,Ct,zt,Pt)}}function Wr(T,U,W,X,B,dt){T.onBeforeRender(_,U,W,X,B,dt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,U,W,X,T,dt),B.transparent===!0&&B.side===cn&&B.forceSinglePass===!1?(B.side=De,B.needsUpdate=!0,_.renderBufferDirect(W,U,X,B,T,dt),B.side=bn,B.needsUpdate=!0,_.renderBufferDirect(W,U,X,B,T,dt),B.side=cn):_.renderBufferDirect(W,U,X,B,T,dt),T.onAfterRender(_,U,W,X,B,dt)}function Wi(T,U,W){U.isScene!==!0&&(U=Yt);const X=kt.get(T),B=m.state.lights,dt=m.state.shadowsArray,Mt=B.state.version,Tt=nt.getParameters(T,B.state,dt,U,W),Ct=nt.getProgramCacheKey(Tt);let zt=X.programs;X.environment=T.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(T.isMeshStandardMaterial?A:ae).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",V),zt=new Map,X.programs=zt);let Pt=zt.get(Ct);if(Pt!==void 0){if(X.currentProgram===Pt&&X.lightsStateVersion===Mt)return qr(T,Tt),Pt}else Tt.uniforms=nt.getUniforms(T),T.onBuild(W,Tt,_),T.onBeforeCompile(Tt,_),Pt=nt.acquireProgram(Tt,Ct),zt.set(Ct,Pt),X.uniforms=Tt.uniforms;const Dt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=ot.uniform),qr(T,Tt),X.needsLights=Rc(T),X.lightsStateVersion=Mt,X.needsLights&&(Dt.ambientLightColor.value=B.state.ambient,Dt.lightProbe.value=B.state.probe,Dt.directionalLights.value=B.state.directional,Dt.directionalLightShadows.value=B.state.directionalShadow,Dt.spotLights.value=B.state.spot,Dt.spotLightShadows.value=B.state.spotShadow,Dt.rectAreaLights.value=B.state.rectArea,Dt.ltc_1.value=B.state.rectAreaLTC1,Dt.ltc_2.value=B.state.rectAreaLTC2,Dt.pointLights.value=B.state.point,Dt.pointLightShadows.value=B.state.pointShadow,Dt.hemisphereLights.value=B.state.hemi,Dt.directionalShadowMap.value=B.state.directionalShadowMap,Dt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Dt.spotShadowMap.value=B.state.spotShadowMap,Dt.spotLightMatrix.value=B.state.spotLightMatrix,Dt.spotLightMap.value=B.state.spotLightMap,Dt.pointShadowMap.value=B.state.pointShadowMap,Dt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Pt,X.uniformsList=null,Pt}function Xr(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=vs.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function qr(T,U){const W=kt.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Ac(T,U,W,X,B){U.isScene!==!0&&(U=Yt),Vt.resetTextureUnits();const dt=U.fog,Mt=X.isMeshStandardMaterial?U.environment:null,Tt=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rn,Ct=(X.isMeshStandardMaterial?A:ae).get(X.envMap||Mt),zt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,Ne=!!W.morphAttributes.color;let de=En;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(de=_.toneMapping);const tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=tn!==void 0?tn.length:0,Nt=kt.get(X),Ls=m.state.lights;if(G===!0&&(Q===!0||T!==H)){const ke=T===H&&X.id===D;ot.setState(X,T,ke)}let te=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ls.state.version||Nt.outputColorSpace!==Tt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==Ct||X.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Pt||Nt.morphTargets!==Dt||Nt.morphNormals!==oe||Nt.morphColors!==Ne||Nt.toneMapping!==de||Gt.isWebGL2===!0&&Nt.morphTargetsCount!==ee)&&(te=!0):(te=!0,Nt.__version=X.version);let Pn=Nt.currentProgram;te===!0&&(Pn=Wi(X,U,B));let Yr=!1,Ei=!1,Ds=!1;const Se=Pn.getUniforms(),Ln=Nt.uniforms;if(wt.useProgram(Pn.program)&&(Yr=!0,Ei=!0,Ds=!0),X.id!==D&&(D=X.id,Ei=!0),Yr||H!==T){Se.setValue(F,"projectionMatrix",T.projectionMatrix),Se.setValue(F,"viewMatrix",T.matrixWorldInverse);const ke=Se.map.cameraPosition;ke!==void 0&&ke.setValue(F,pt.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&Se.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,Ei=!0,Ds=!0)}if(B.isSkinnedMesh){Se.setOptional(F,B,"bindMatrix"),Se.setOptional(F,B,"bindMatrixInverse");const ke=B.skeleton;ke&&(Gt.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Se.setValue(F,"boneTexture",ke.boneTexture,Vt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Se.setOptional(F,B,"batchingTexture"),Se.setValue(F,"batchingTexture",B._matricesTexture,Vt));const Is=W.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0&&Gt.isWebGL2===!0)&&it.update(B,W,Pn),(Ei||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,Se.setValue(F,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ln.envMap.value=Ct,Ln.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Ei&&(Se.setValue(F,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Cc(Ln,Ds),dt&&X.fog===!0&&tt.refreshFogUniforms(Ln,dt),tt.refreshMaterialUniforms(Ln,X,q,N,rt),vs.upload(F,Xr(Nt),Ln,Vt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vs.upload(F,Xr(Nt),Ln,Vt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(F,"center",B.center),Se.setValue(F,"modelViewMatrix",B.modelViewMatrix),Se.setValue(F,"normalMatrix",B.normalMatrix),Se.setValue(F,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ke=X.uniformsGroups;for(let Us=0,Pc=ke.length;Us<Pc;Us++)if(Gt.isWebGL2){const $r=ke[Us];xt.update($r,Pn),xt.bind($r,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Cc(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Rc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,W){kt.get(T.texture).__webglTexture=U,kt.get(T.depthTexture).__webglTexture=W;const X=kt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const W=kt.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){b=T,R=U,C=W;let X=!0,B=null,dt=!1,Mt=!1;if(T){const Ct=kt.get(T);Ct.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1):Ct.__webglFramebuffer===void 0?Vt.setupRenderTarget(T):Ct.__hasExternalTextures&&Vt.rebindTextures(T,kt.get(T.texture).__webglTexture,kt.get(T.depthTexture).__webglTexture);const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Pt=kt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?B=Pt[U][W]:B=Pt[U],dt=!0):Gt.isWebGL2&&T.samples>0&&Vt.useMultisampledRTT(T)===!1?B=kt.get(T).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[W]:B=Pt,x.copy(T.viewport),w.copy(T.scissor),$=T.scissorTest}else x.copy(K).multiplyScalar(q).floor(),w.copy(et).multiplyScalar(q).floor(),$=ut;if(wt.bindFramebuffer(F.FRAMEBUFFER,B)&&Gt.drawBuffers&&X&&wt.drawBuffers(T,B),wt.viewport(x),wt.scissor(w),wt.setScissorTest($),dt){const Ct=kt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,W)}else if(Mt){const Ct=kt.get(T.texture),zt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,zt)}D=-1},this.readRenderTargetPixels=function(T,U,W,X,B,dt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){wt.bindFramebuffer(F.FRAMEBUFFER,Tt);try{const Ct=T.texture,zt=Ct.format,Pt=Ct.type;if(zt!==Ye&&St.convert(zt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Pt===Oi&&(Et.has("EXT_color_buffer_half_float")||Gt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Pt!==Tn&&St.convert(Pt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===ln&&(Gt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-X&&W>=0&&W<=T.height-B&&F.readPixels(U,W,X,B,St.convert(zt),St.convert(Pt),dt)}finally{const Ct=b!==null?kt.get(b).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(T,U,W=0){const X=Math.pow(2,-W),B=Math.floor(U.image.width*X),dt=Math.floor(U.image.height*X);Vt.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,T.x,T.y,B,dt),wt.unbindTexture()},this.copyTextureToTexture=function(T,U,W,X=0){const B=U.image.width,dt=U.image.height,Mt=St.convert(W.format),Tt=St.convert(W.type);Vt.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,T.x,T.y,B,dt,Mt,Tt,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,X,T.x,T.y,Mt,Tt,U.image),X===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W,X,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=Math.round(T.max.x-T.min.x),Mt=Math.round(T.max.y-T.min.y),Tt=T.max.z-T.min.z+1,Ct=St.convert(X.format),zt=St.convert(X.type);let Pt;if(X.isData3DTexture)Vt.setTexture3D(X,0),Pt=F.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Vt.setTexture2DArray(X,0),Pt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Dt=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ne=F.getParameter(F.UNPACK_SKIP_PIXELS),de=F.getParameter(F.UNPACK_SKIP_ROWS),tn=F.getParameter(F.UNPACK_SKIP_IMAGES),ee=W.isCompressedTexture?W.mipmaps[B]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(Pt,B,U.x,U.y,U.z,dt,Mt,Tt,Ct,zt,ee.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,B,U.x,U.y,U.z,dt,Mt,Tt,Ct,ee.data):F.texSubImage3D(Pt,B,U.x,U.y,U.z,dt,Mt,Tt,Ct,zt,ee),F.pixelStorei(F.UNPACK_ROW_LENGTH,Dt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,de),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tn),B===0&&X.generateMipmaps&&F.generateMipmap(Pt),wt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Vt.setTextureCube(T,0):T.isData3DTexture?Vt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Vt.setTexture2DArray(T,0):Vt.setTexture2D(T,0),wt.unbindTexture()},this.resetState=function(){R=0,C=0,b=null,wt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Dr?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===As?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class em extends gc{}em.prototype.isWebGL1Renderer=!0;class Fr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Fr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nm extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wr extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vo=new ie,br=new Qo,ds=new Cs,fs=new L;class xo extends _e{constructor(t=new Pe,e=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;vo.copy(i).invert(),br.copy(t.ray).applyMatrix4(vo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);fs.fromBufferAttribute(u,m),Mo(fs,m,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)fs.fromBufferAttribute(u,g),Mo(fs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mo(s,t,e,n,i,r,o){const a=br.distanceSqToPoint(s);if(a<e){const c=new L;br.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ft:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],r=[],o=[],a=new L,c=new ie;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(me(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(me(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Or extends Qe{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class im extends Or{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Br(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ps=new L,dr=new Br,fr=new Br,pr=new Br;class sm extends Qe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ps.subVectors(i[0],i[1]).add(i[0]),l=ps);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ps.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),dr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),fr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),pr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(dr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),pr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(dr.calc(c),fr.calc(c),pr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function So(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function rm(s,t){const e=1-s;return e*e*t}function am(s,t){return 2*(1-s)*s*t}function om(s,t){return s*s*t}function Ui(s,t,e,n){return rm(s,t)+am(s,e)+om(s,n)}function cm(s,t){const e=1-s;return e*e*e*t}function lm(s,t){const e=1-s;return 3*e*e*s*t}function hm(s,t){return 3*(1-s)*s*s*t}function um(s,t){return s*s*s*t}function Ni(s,t,e,n,i){return cm(s,t)+lm(s,e)+hm(s,n)+um(s,i)}class _c extends Qe{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(t,i.x,r.x,o.x,a.x),Ni(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dm extends Qe{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(t,i.x,r.x,o.x,a.x),Ni(t,i.y,r.y,o.y,a.y),Ni(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vc extends Qe{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends Qe{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends Qe{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ui(t,i.x,r.x,o.x),Ui(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pm extends Qe{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ui(t,i.x,r.x,o.x),Ui(t,i.y,r.y,o.y),Ui(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(So(a,c.x,l.x,h.x,u.x),So(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var yo=Object.freeze({__proto__:null,ArcCurve:im,CatmullRomCurve3:sm,CubicBezierCurve:_c,CubicBezierCurve3:dm,EllipseCurve:Or,LineCurve:vc,LineCurve3:fm,QuadraticBezierCurve:xc,QuadraticBezierCurve3:pm,SplineCurve:Mc});class mm extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new yo[i.type]().fromJSON(i))}return this}}class Eo extends mm{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vc(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new xc(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new _c(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Or(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mt extends Pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;E(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function E(){const S=new L,R=new L;let C=0;const b=(e-t)/n;for(let D=0;D<=r;D++){const H=[],x=D/r,w=x*(e-t)+t;for(let $=0;$<=i;$++){const J=$/i,P=J*c+a,z=Math.sin(P),N=Math.cos(P);R.x=w*z,R.y=-x*n+m,R.z=w*N,u.push(R.x,R.y,R.z),S.set(z,b,N).normalize(),d.push(S.x,S.y,S.z),f.push(J,1-x),H.push(g++)}v.push(H)}for(let D=0;D<i;D++)for(let H=0;H<r;H++){const x=v[H][D],w=v[H+1][D],$=v[H+1][D+1],J=v[H][D+1];h.push(x,w,J),h.push(w,$,J),C+=6}l.addGroup(p,C,0),p+=C}function _(S){const R=g,C=new ft,b=new L;let D=0;const H=S===!0?t:e,x=S===!0?1:-1;for(let $=1;$<=i;$++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const w=g;for(let $=0;$<=i;$++){const P=$/i*c+a,z=Math.cos(P),N=Math.sin(P);b.x=H*N,b.y=m*x,b.z=H*z,u.push(b.x,b.y,b.z),d.push(0,x,0),C.x=z*.5+.5,C.y=N*.5*x+.5,f.push(C.x,C.y),g++}for(let $=0;$<i;$++){const J=R+$,P=w+$;S===!0?h.push(P,P+1,J):h.push(P+1,P,J),D+=3}l.addGroup(p,D,S===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class se extends mt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new se(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kr extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const _=new L,S=new L,R=new L;for(let C=0;C<e.length;C+=3)f(e[C+0],_),f(e[C+1],S),f(e[C+2],R),c(_,S,R,E)}function c(E,_,S,R){const C=R+1,b=[];for(let D=0;D<=C;D++){b[D]=[];const H=E.clone().lerp(S,D/C),x=_.clone().lerp(S,D/C),w=C-D;for(let $=0;$<=w;$++)$===0&&D===C?b[D][$]=H:b[D][$]=H.clone().lerp(x,$/w)}for(let D=0;D<C;D++)for(let H=0;H<2*(C-D)-1;H++){const x=Math.floor(H/2);H%2===0?(d(b[D][x+1]),d(b[D+1][x]),d(b[D][x])):(d(b[D][x+1]),d(b[D+1][x+1]),d(b[D+1][x]))}}function l(E){const _=new L;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(E),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function h(){const E=new L;for(let _=0;_<r.length;_+=3){E.x=r[_+0],E.y=r[_+1],E.z=r[_+2];const S=m(E)/2/Math.PI+.5,R=p(E)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const _=o[E+0],S=o[E+2],R=o[E+4],C=Math.max(_,S,R),b=Math.min(_,S,R);C>.9&&b<.1&&(_<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,_){const S=E*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const E=new L,_=new L,S=new L,R=new L,C=new ft,b=new ft,D=new ft;for(let H=0,x=0;H<r.length;H+=9,x+=6){E.set(r[H+0],r[H+1],r[H+2]),_.set(r[H+3],r[H+4],r[H+5]),S.set(r[H+6],r[H+7],r[H+8]),C.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),R.copy(E).add(_).add(S).divideScalar(3);const w=m(R);v(C,x+0,E,w),v(b,x+2,_,w),v(D,x+4,S,w)}}function v(E,_,S,R){R<0&&E.x===1&&(o[_]=E.x-1),S.x===0&&S.z===0&&(o[_]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.vertices,t.indices,t.radius,t.details)}}class Sc extends Eo{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Eo().fromJSON(i))}return this}}const gm={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=yc(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Sm(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ki(r,o,e,a,c,f,0),o}};function yc(s,t,e,n,i){let r,o;if(i===Dm(s,t,e,n)>0)for(r=t;r<e;r+=n)o=To(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=To(r,s[r],s[r+1],o);return o&&Ps(o,o.next)&&(Gi(o),o=o.next),o}function qn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ps(e,e.next)||ne(e.prev,e,e.next)===0)){if(Gi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ki(s,t,e,n,i,r,o){if(!s)return;!o&&r&&bm(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?vm(s,n,i,r):_m(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Gi(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=xm(qn(s),t,e),ki(s,t,e,n,i,r,2)):o===2&&Mm(s,t,e,n,i,r):ki(qn(s),t,e,n,i,r,1);break}}}function _m(s){const t=s.prev,e=s,n=s.next;if(ne(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fi(i,a,r,c,o,l,g.x,g.y)&&ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vm(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ne(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ar(f,g,t,e,n),E=Ar(v,m,t,e,n);let _=s.prevZ,S=s.nextZ;for(;_&&_.z>=p&&S&&S.z<=E;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&fi(a,h,c,u,l,d,_.x,_.y)&&ne(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&fi(a,h,c,u,l,d,S.x,S.y)&&ne(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&fi(a,h,c,u,l,d,_.x,_.y)&&ne(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=E;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&fi(a,h,c,u,l,d,S.x,S.y)&&ne(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xm(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ps(i,r)&&Ec(i,n,n.next,r)&&zi(i,r)&&zi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Gi(n),Gi(n.next),n=s=r),n=n.next}while(n!==s);return qn(n)}function Mm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rm(o,a)){let c=Tc(o,a);o=qn(o,o.next),c=qn(c,c.next),ki(o,t,e,n,i,r,0),ki(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Sm(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=yc(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Cm(l));for(i.sort(ym),r=0;r<i.length;r++)e=Em(i[r],e);return e}function ym(s,t){return s.x-t.x}function Em(s,t){const e=Tm(s,t);if(!e)return t;const n=Tc(e,s);return qn(n,n.next),qn(e,e.next)}function Tm(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&fi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),zi(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&wm(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function wm(s,t){return ne(s.prev,s,t.prev)<0&&ne(t.next,s,s.next)<0}function bm(s,t,e,n){let i=s;do i.z===0&&(i.z=Ar(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Am(i)}function Am(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Ar(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Cm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function fi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Rm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Pm(s,t)&&(zi(s,t)&&zi(t,s)&&Lm(s,t)&&(ne(s.prev,s,t.prev)||ne(s,t.prev,t))||Ps(s,t)&&ne(s.prev,s,s.next)>0&&ne(t.prev,t,t.next)>0)}function ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ps(s,t){return s.x===t.x&&s.y===t.y}function Ec(s,t,e,n){const i=gs(ne(s,t,e)),r=gs(ne(s,t,n)),o=gs(ne(e,n,s)),a=gs(ne(e,n,t));return!!(i!==r&&o!==a||i===0&&ms(s,e,t)||r===0&&ms(s,n,t)||o===0&&ms(e,s,n)||a===0&&ms(e,t,n))}function ms(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function gs(s){return s>0?1:s<0?-1:0}function Pm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ec(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zi(s,t){return ne(s.prev,s,s.next)<0?ne(s,t,s.next)>=0&&ne(s,s.prev,t)>=0:ne(s,t,s.prev)<0||ne(s,s.next,t)<0}function Lm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Tc(s,t){const e=new Cr(s.i,s.x,s.y),n=new Cr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function To(s,t,e,n){const i=new Cr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dm(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Fi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Fi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];wo(t),bo(n,t);let o=t.length;e.forEach(wo);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,bo(n,e[c]);const a=gm.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function wo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class zr extends kr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zr(t.radius,t.detail)}}class Gr extends Pe{constructor(t=new Sc([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new re(i,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Fi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];Fi.isClockWise(E)===!0&&(g[m]=E.reverse())}const v=Fi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];f=f.concat(E)}for(let m=0,p=f.length;m<p;m++){const E=f[m];i.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=v.length;m<p;m++){const E=v[m],_=E[0]+u,S=E[1]+u,R=E[2]+u;n.push(_,S,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Im(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Gr(n,t.curveSegments)}}function Im(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class $t extends Pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],_=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const C=R/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+S,1-_),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const _=h[p][E+1],S=h[p][E],R=h[p+1][E],C=h[p+1][E+1];(p!==0||o>0)&&f.push(_,S,C),(p!==n-1||c<Math.PI)&&f.push(S,R,C)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Re extends Pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;o.push(v,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wc extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Um extends wc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Vr extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Nm extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mr=new ie,Ao=new L,Co=new L;class Fm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ao.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ao),Co.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Co),e.updateMatrixWorld(),mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Om extends Fm{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class km extends Vr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);class zm{scene;camera;renderer;dirLight;hemiLight;ambientLight;constructor(t){this.scene=new nm,this.scene.background=new Bt(7390719),this.scene.fog=new Fr(7390719,.012);const e=window.innerWidth/window.innerHeight;this.camera=new Ge(60,e,.1,300),this.camera.position.set(0,5,8),this.renderer=new gc({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Bo,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fo,this.hemiLight=new Nm(16777215,8505220,.75),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.ambientLight=new km(16775620,.35),this.scene.add(this.ambientLight),this.dirLight=new Bm(16777215,1.4),this.dirLight.position.set(20,35,15),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=120;const n=22;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),window.addEventListener("resize",this.onWindowResize.bind(this))}setSkyColor(t,e,n){this.scene.background=new Bt(t),this.scene.fog&&this.scene.fog.color.setHex(n),this.hemiLight.color.setHex(t),this.hemiLight.groundColor.setHex(e)}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}updateLightTarget(t){this.dirLight.position.set(t.x+20,t.y+35,t.z+15),this.dirLight.target.position.copy(t),this.dirLight.target.updateMatrixWorld()}render(){this.renderer.render(this.scene,this.camera)}}class Gm{ctx=null;isMuted=!1;engineOsc=null;engineGain=null;musicInterval=null;isMusicPlaying=!1;constructor(){}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted?(this.engineGain&&(this.engineGain.gain.value=0),this.stopMusic()):this.startMusic(),!this.isMuted}getMuted(){return this.isMuted}playCoinSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(987.77,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(1318.51,this.ctx.currentTime+.1),e.gain.setValueAtTime(.18,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.22),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.22)}playGemSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",e.type="triangle",t.frequency.setValueAtTime(1046.5,this.ctx.currentTime),e.frequency.setValueAtTime(1567.98,this.ctx.currentTime+.08),n.gain.setValueAtTime(.2,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),t.connect(n),e.connect(n),n.connect(this.ctx.destination),t.start(),e.start(this.ctx.currentTime+.08),t.stop(this.ctx.currentTime+.35),e.stop(this.ctx.currentTime+.35)}playJumpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(260,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(650,this.ctx.currentTime+.16),e.gain.setValueAtTime(.18,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.18),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.18)}playSlideSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(450,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(140,this.ctx.currentTime+.22),e.gain.setValueAtTime(.12,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.22),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.22)}playVehicleDuckSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(320,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.25),e.gain.setValueAtTime(.25,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.28),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.28)}playMountSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((e,n)=>{if(!this.ctx)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e,this.ctx.currentTime+n*.08),r.gain.setValueAtTime(.2,this.ctx.currentTime+n*.08),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.08+.2),i.connect(r),r.connect(this.ctx.destination),i.start(this.ctx.currentTime+n*.08),i.stop(this.ctx.currentTime+n*.08+.2)})}playLevelUpSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;[523.25,659.25,783.99,1046.5,1318.51].forEach((e,n)=>{if(!this.ctx)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e,this.ctx.currentTime+n*.09),r.gain.setValueAtTime(.25,this.ctx.currentTime+n*.09),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.09+.35),i.connect(r),r.connect(this.ctx.destination),i.start(this.ctx.currentTime+n*.09),i.stop(this.ctx.currentTime+n*.09+.35)})}playSmashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.28),e.gain.setValueAtTime(.3,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.28),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.28)}playCrashSound(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(140,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.4),e.gain.setValueAtTime(.4,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.4),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.4)}startVehicleEngine(){this.isMuted||this.engineOsc||(this.initContext(),this.ctx&&(this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineOsc.type="triangle",this.engineOsc.frequency.setValueAtTime(95,this.ctx.currentTime),this.engineGain.gain.setValueAtTime(.06,this.ctx.currentTime),this.engineOsc.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start()))}setEngineSpeed(t){if(!this.engineOsc||!this.ctx)return;const e=80+t*110;this.engineOsc.frequency.setTargetAtTime(e,this.ctx.currentTime,.05)}stopVehicleEngine(){if(this.engineOsc){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null,this.engineGain=null}}startMusic(){if(this.isMuted||this.isMusicPlaying||(this.initContext(),!this.ctx))return;this.isMusicPlaying=!0;const t=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,659.25,783.99,987.77,783.99,523.25,783.99,1046.5,783.99];let e=0;this.musicInterval=window.setInterval(()=>{if(this.isMuted||!this.ctx||!this.isMusicPlaying)return;const n=t[e%t.length];e++;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n,this.ctx.currentTime),r.gain.setValueAtTime(.035,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.16),i.connect(r),r.connect(this.ctx.destination),i.start(),i.stop(this.ctx.currentTime+.16)},170)}pauseMusic(){this.stopMusic()}stopMusic(){this.isMusicPlaying=!1,this.musicInterval!==null&&(clearInterval(this.musicInterval),this.musicInterval=null)}}class Vm{queuedActions=[];touchStartX=0;touchStartY=0;touchStartTime=0;isEnabled=!0;constructor(){window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0})}setEnabled(t){this.isEnabled=t,t||(this.queuedActions=[])}onPauseToggle;handleKeyDown(t){if(t.key==="Escape"||t.key==="p"||t.key==="P"){this.onPauseToggle?.();return}this.isEnabled&&(t.key==="ArrowLeft"||t.key==="a"||t.key==="A"?this.queuedActions.push("left"):t.key==="ArrowRight"||t.key==="d"||t.key==="D"?this.queuedActions.push("right"):t.key==="ArrowUp"||t.key==="w"||t.key==="W"||t.key===" "?this.queuedActions.push("jump"):(t.key==="ArrowDown"||t.key==="s"||t.key==="S")&&this.queuedActions.push("slide"))}handleTouchStart(t){!this.isEnabled||t.touches.length===0||(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=performance.now())}handleTouchEnd(t){if(!this.isEnabled||t.changedTouches.length===0)return;const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;if(performance.now()-this.touchStartTime>600)return;const r=25;Math.abs(e)<r&&Math.abs(n)<r||(Math.abs(e)>Math.abs(n)?e>0?this.queuedActions.push("right"):this.queuedActions.push("left"):n<0?this.queuedActions.push("jump"):this.queuedActions.push("slide"))}popAction(){return this.queuedActions.length>0?this.queuedActions.shift():null}clear(){this.queuedActions=[]}}const Ri=[{levelNumber:1,name:"Heartlake Boardwalk",subtitle:"Seaside Town, Beach & Palm Trees",targetDistance:1800,biome:"boardwalk",baseSpeed:19,obstacleDensity:.65,hasMovingRobots:!1,rewardCoins:150},{levelNumber:2,name:"Downtown Plaza",subtitle:"Skyscrapers, Avenues & Boutiques",targetDistance:2e3,biome:"plaza",baseSpeed:23,obstacleDensity:.85,hasMovingRobots:!0,rewardCoins:250},{levelNumber:3,name:"Pinecrest Forest",subtitle:"Whispering Woods, Cabins & Streams",targetDistance:2200,biome:"forest",baseSpeed:26,obstacleDensity:.95,hasMovingRobots:!0,rewardCoins:350},{levelNumber:4,name:"Amusement Pier",subtitle:"Neon Carnival & Rapid Dodges",targetDistance:2400,biome:"pier",baseSpeed:29,obstacleDensity:1.1,hasMovingRobots:!0,rewardCoins:450},{levelNumber:5,name:"Cyber Circuit",subtitle:"Electric Lasers & High Voltage",targetDistance:2600,biome:"cyber",baseSpeed:32,obstacleDensity:1.25,hasMovingRobots:!0,rewardCoins:600},{levelNumber:6,name:"Candy Wonderland",subtitle:"Sweet Chaos & Hyper Velocity",targetDistance:2800,biome:"candy",baseSpeed:35,obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:800}],un={nova:{id:"nova",name:"Nova",title:"The Maker",perk:"+10% Speed & Lane Agility",speedBonus:1.1,vehicleDurationBonus:1,magnetRangeBonus:1},leo:{id:"leo",name:"Leo",title:"The Baker",perk:"+20% Vehicle Ride Duration",speedBonus:1,vehicleDurationBonus:1.2,magnetRangeBonus:1},skye:{id:"skye",name:"Skye",title:"The Explorer",perk:"+35% Coin Magnet Pull Range",speedBonus:1,vehicleDurationBonus:1,magnetRangeBonus:1.35}},wn={van:{id:"van",name:"Sweet-Treat Van",title:"Heavy Bumper Delivery",ability:"Shield Bumper",description:"Bumper shield smashes through crates and cones with burst debris!",hasBumperShield:!0,hasMagnetAura:!1,hasTurboShockwave:!1,baseDurationSeconds:20},buggy:{id:"buggy",name:"Neon Buggy",title:"All-Terrain Cruiser",ability:"Magnet Aura",description:"Strong electromagnetic field pulls star coins across all 3 lanes!",hasBumperShield:!1,hasMagnetAura:!0,hasTurboShockwave:!1,baseDurationSeconds:20},scooter:{id:"scooter",name:"Eco Scooter",title:"Retro Turbo Moped",ability:"Turbo Shockwave",description:"Turbo thrusters clear obstacles and grant speed bursts!",hasBumperShield:!1,hasMagnetAura:!1,hasTurboShockwave:!0,baseDurationSeconds:18}},_s=[{id:1,name:"Heartlake Stroll",targetDistance:1500,targetCoins:40,targetSmashes:0,biome:"boardwalk"},{id:2,name:"Sweet Smash Delivery",targetDistance:3200,targetCoins:90,targetSmashes:5,biome:"plaza"},{id:3,name:"Pier Turbo Cruise",targetDistance:5e3,targetCoins:160,targetSmashes:10,biome:"pier"}],Ro="blockville_best_distance",Po="blockville_best_score",Lo="blockville_total_coins",Do="blockville_customization";class Hm{mode="endless";currentStageIndex=0;characterId="nova";vehicleId="van";paletteId="classic";distance=0;starCoins=0;diamondGems=0;smashes=0;multiplier=1;speed=18;baseSpeed=18;currentLevel=1;levelDistance=0;bestDistance=0;bestScore=0;totalCoinsSaved=0;constructor(){this.loadPersistedData()}loadPersistedData(){try{this.bestDistance=parseFloat(localStorage.getItem(Ro)||"0"),this.bestScore=parseInt(localStorage.getItem(Po)||"0",10),this.totalCoinsSaved=parseInt(localStorage.getItem(Lo)||"0",10);const t=localStorage.getItem(Do);if(t){const e=JSON.parse(t);e.characterId&&un[e.characterId]&&(this.characterId=e.characterId),e.vehicleId&&wn[e.vehicleId]&&(this.vehicleId=e.vehicleId),e.paletteId&&(this.paletteId=e.paletteId)}}catch{}}savePersistedData(){try{localStorage.setItem(Ro,this.bestDistance.toFixed(0)),localStorage.setItem(Po,this.bestScore.toString()),localStorage.setItem(Lo,this.totalCoinsSaved.toString()),localStorage.setItem(Do,JSON.stringify({characterId:this.characterId,vehicleId:this.vehicleId,paletteId:this.paletteId}))}catch{}}getCurrentLevelDef(){const t=Math.min(this.currentLevel-1,Ri.length-1),e=Ri[t];if(this.currentLevel>Ri.length){const n=this.currentLevel-5;return{levelNumber:this.currentLevel,name:`Hyper Zone ${this.currentLevel}`,subtitle:"Ultimate Reflex Gauntlet",targetDistance:500+n*100,biome:Ri[(this.currentLevel-1)%Ri.length].biome,baseSpeed:Math.min(42,34+n*1.5),obstacleDensity:1.4,hasMovingRobots:!0,rewardCoins:250}}return e}resetRun(){this.distance=0,this.starCoins=0,this.diamondGems=0,this.smashes=0,this.currentLevel=1,this.levelDistance=0,this.multiplier=1,this.baseSpeed=this.getCurrentLevelDef().baseSpeed*un[this.characterId].speedBonus,this.speed=this.baseSpeed}updateDistanceAndSpeed(t,e=1){const n=this.getCurrentLevelDef();this.baseSpeed=n.baseSpeed*un[this.characterId].speedBonus,this.speed=this.baseSpeed*e;const i=this.speed*t;this.distance+=i,this.levelDistance+=i}checkLevelUp(){const t=this.getCurrentLevelDef();return this.levelDistance>=t.targetDistance?(this.currentLevel++,this.levelDistance=0,this.multiplier=Math.min(10,this.currentLevel),this.addCoins(t.rewardCoins),this.getCurrentLevelDef()):null}addCoins(t=1){this.starCoins+=t*this.multiplier}addGems(t=1){this.diamondGems+=t}addSmash(){this.smashes++}calculateTotalScore(){return Math.floor(this.distance*2+this.starCoins*15+this.diamondGems*100+this.smashes*50)}finalizeRun(t=!1){const e=this.calculateTotalScore(),n=this.distance>this.bestDistance,i=e>this.bestScore;return n&&(this.bestDistance=this.distance),i&&(this.bestScore=e),this.totalCoinsSaved+=this.starCoins,this.savePersistedData(),{distance:Math.floor(this.distance),starCoins:this.starCoins,gems:this.diamondGems,smashes:this.smashes,score:e,isNewHighDistance:n,isNewHighScore:i,stageCompleted:t}}getActiveStage(){return this.mode!=="stage"?null:_s[this.currentStageIndex]||_s[0]}checkStageCompletion(){const t=this.getActiveStage();return t?this.distance>=t.targetDistance&&this.starCoins>=t.targetCoins&&this.smashes>=t.targetSmashes:!1}advanceStage(){const t=(this.currentStageIndex+1)*250;return this.addCoins(t),this.multiplier=Math.min(10,this.multiplier+1),this.currentStageIndex++,this.currentStageIndex<_s.length?{nextStage:_s[this.currentStageIndex],rewardCoins:t}:(this.mode="endless",this.currentLevel=4,{nextStage:null,rewardCoins:t})}}const Io={classic:{primary:16738740,secondary:16775654,accent:5099745,chassis:12216520,wheelRim:16766287,highlight:58998},sunset:{primary:16740419,secondary:16766287,accent:16728193,chassis:6111287,wheelRim:16771899,highlight:2541274},cyber:{primary:58998,secondary:8146431,accent:58879,chassis:2171169,wheelRim:16717636,highlight:16776960},candy:{primary:15753874,secondary:16773494,accent:8508666,chassis:11771355,wheelRim:16747136,highlight:16777215}};class y{static materialCache=new Map;static getPlastic(t,e=.18,n=0){const i=`${t}_${e}_${n}`;if(!this.materialCache.has(i)){const r=new wc({color:new Bt(t),roughness:e,metalness:n,flatShading:!1});this.materialCache.set(i,r)}return this.materialCache.get(i)}static SkinTone=this.getPlastic(16767916,.4,0);static WhitePlastic=this.getPlastic(16316922,.15,0);static BlackRubber=this.getPlastic(2040865,.8,0);static Chrome=this.getPlastic(15658734,.1,.85);static GoldStar=this.getPlastic(16766720,.15,.1);static CyanGem=this.getPlastic(58879,.1,.05);static RubyGem=this.getPlastic(16717636,.1,.05);static GlassWindshield=new Um({color:8444159,transparent:!0,opacity:.65,roughness:.1,transmission:.6,ior:1.4});static studGeometry=new mt(.18,.18,.08,12);static addStuds(t,e,n,i,r,o=2,a=2){const c=o>1?e/(o+.5):0,l=a>1?n/(a+.5):0,h=o>1?-((o-1)*c)/2:0,u=a>1?-((a-1)*l)/2:0;for(let d=0;d<o;d++)for(let f=0;f<a;f++){const g=new k(this.studGeometry,r);g.position.set(h+d*c,i+.04,u+f*l),g.castShadow=!0,g.receiveShadow=!0,t.add(g)}}static createBlock(t,e,n,i,r=!0){const o=new Ue(t,e,n),a=new k(o,i);return a.castShadow=r,a.receiveShadow=!0,a}}class Wm{group;particles=[];studGeom=new mt(.12,.12,.08,8);cubeGeom=new Ue(.2,.2,.2);constructor(){this.group=new At}getParticleMesh(t=!0,e=16766287){const n=y.getPlastic(e,.2,0),i=t?this.studGeom:this.cubeGeom,r=new k(i,n);return r.castShadow=!0,r}emitExhaust(t,e=5099745){const n=this.getParticleMesh(!0,e);n.position.copy(t),n.position.x+=(Math.random()-.5)*.2,n.position.y+=(Math.random()-.5)*.1,n.scale.setScalar(.7+Math.random()*.4),this.group.add(n),this.particles.push({mesh:n,velocity:new L((Math.random()-.5)*.8,.5+Math.random()*.8,3+Math.random()*2),angularVelocity:new L(Math.random()*4,Math.random()*4,Math.random()*4),life:0,maxLife:.4+Math.random()*.3,scaleInitial:n.scale.x})}emitSmashDebris(t,e=[16738740,16766287,58879,16740419]){for(let i=0;i<18;i++){const r=e[Math.floor(Math.random()*e.length)],o=Math.random()>.4,a=this.getParticleMesh(o,r);a.position.copy(t),a.position.x+=(Math.random()-.5)*.4,a.position.y+=.2+Math.random()*.4,a.scale.setScalar(.9+Math.random()*.5),this.group.add(a);const c=Math.random()*Math.PI*2,l=4+Math.random()*6;this.particles.push({mesh:a,velocity:new L(Math.cos(c)*l,3.5+Math.random()*5,Math.sin(c)*l*.8),angularVelocity:new L((Math.random()-.5)*15,(Math.random()-.5)*15,(Math.random()-.5)*15),life:0,maxLife:.7+Math.random()*.5,scaleInitial:a.scale.x})}}emitPickupSparkles(t,e=16766720){for(let i=0;i<8;i++){const r=this.getParticleMesh(!0,e);r.position.copy(t),r.scale.setScalar(.6+Math.random()*.4),this.group.add(r),this.particles.push({mesh:r,velocity:new L((Math.random()-.5)*3,2+Math.random()*3.5,(Math.random()-.5)*3),angularVelocity:new L(Math.random()*6,Math.random()*6,Math.random()*6),life:0,maxLife:.45+Math.random()*.2,scaleInitial:r.scale.x})}}emitGroundSparks(t,e=16776960){for(let i=0;i<4;i++){const r=this.getParticleMesh(!0,e);r.position.copy(t),r.position.x+=(Math.random()-.5)*.8,r.position.y=.05+Math.random()*.1,r.position.z+=(Math.random()-.5)*.5,r.scale.setScalar(.4+Math.random()*.3),this.group.add(r),this.particles.push({mesh:r,velocity:new L((Math.random()-.5)*4.5,.8+Math.random()*2.2,5+Math.random()*6),angularVelocity:new L(Math.random()*10,Math.random()*10,Math.random()*10),life:0,maxLife:.25+Math.random()*.15,scaleInitial:r.scale.x})}}update(t){for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life+=t,i.life>=i.maxLife){this.group.remove(i.mesh),i.mesh.geometry.dispose(),this.particles.splice(n,1);continue}i.velocity.y+=-14*t,i.mesh.position.addScaledVector(i.velocity,t),i.mesh.rotation.x+=i.angularVelocity.x*t,i.mesh.rotation.y+=i.angularVelocity.y*t,i.mesh.rotation.z+=i.angularVelocity.z*t;const r=i.life/i.maxLife,o=i.scaleInitial*(1-r);i.mesh.scale.setScalar(Math.max(.001,o))}}clear(){for(const t of this.particles)this.group.remove(t.mesh),t.mesh.geometry.dispose();this.particles=[]}}class Xm{camera;currentLookAt=new L;shakeTrauma=0;targetFov=60;showcaseAngle=0;constructor(t){this.camera=t}setFov(t){this.targetFov=t}addTrauma(t){this.shakeTrauma=Math.min(1,this.shakeTrauma+t)}updateFollow(t,e,n,i){let r=60;e&&(r=72),n&&(r=80),this.targetFov=r,this.camera.fov=pe.lerp(this.camera.fov,this.targetFov,i*5),this.camera.updateProjectionMatrix();const o=e?9.2:7.6,a=e?4.8:4.2,c=t.x*.75,l=t.y*.35+a,h=t.z+o;if(this.camera.position.x=pe.lerp(this.camera.position.x,c,i*12),this.camera.position.y=pe.lerp(this.camera.position.y,l,i*8),this.camera.position.z=pe.lerp(this.camera.position.z,h,i*16),this.shakeTrauma>0){const f=(Math.random()-.5)*.7*this.shakeTrauma,g=(Math.random()-.5)*.7*this.shakeTrauma;this.camera.position.x+=f,this.camera.position.y+=g,this.shakeTrauma=Math.max(0,this.shakeTrauma-i*2.2)}const u=t.y*.5+(e?1.4:1.2),d=new L(t.x*.6,u,t.z-6);this.currentLookAt.lerp(d,i*14),this.camera.lookAt(this.currentLookAt)}updateShowcase(t,e){this.camera.fov=pe.lerp(this.camera.fov,50,e*4),this.camera.updateProjectionMatrix(),this.showcaseAngle+=e*.6;const n=8.5;this.camera.position.set(t.x+Math.sin(this.showcaseAngle)*n,t.y+3.6,t.z+Math.cos(this.showcaseAngle)*n),this.camera.lookAt(t.x,t.y+1.2,t.z)}}class Pi{static buildCharacter(t){const e=new At;e.name=`character_${t}`;const n=new At;n.position.y=.85,e.add(n);const i=new At;i.position.y=.35,n.add(i);const r=new At;r.position.y=.72,i.add(r);const o=new At;o.position.set(-.46,.48,0),i.add(o);const a=new At;a.position.set(.46,.48,0),i.add(a);const c=new At;c.position.set(-.22,0,0),n.add(c);const l=new At;l.position.set(.22,0,0),n.add(l);let h,u;const d=y.SkinTone,f=y.getPlastic(1713022,.1,0),g=y.getPlastic(14162784,.2,0),v=y.createBlock(.44,.44,.44,d);r.add(v);const m=new mt(.045,.045,.02,10);m.rotateX(Math.PI/2);const p=new k(m,f);p.position.set(-.11,.04,.23),r.add(p);const E=new k(m,f);E.position.set(.11,.04,.23),r.add(E);const _=new Re(.07,.02,8,12,Math.PI);_.rotateZ(Math.PI);const S=new k(_,g);S.position.set(0,-.08,.23),r.add(S);const R=new mt(.09,.09,.14,10);if(R.rotateX(Math.PI/2),t==="nova"){const C=y.getPlastic(12216520,.25,0),b=y.getPlastic(1668818,.3,0),D=y.getPlastic(58879,.18,0),H=y.getPlastic(4073251,.2,0),x=y.createBlock(.62,.65,.38,C);i.add(x);const w=y.createBlock(.38,.18,.06,y.getPlastic(11225020,.25,0));w.position.set(0,-.15,.2),i.add(w);const $=y.createBlock(.48,.22,.48,H);$.position.set(0,.22,0),r.add($);const J=new k(new $t(.14,10,10),H);J.position.set(0,.24,-.26),r.add(J);const P=new k(new Re(.08,.03,8,12),D);P.position.set(0,.24,-.24),r.add(P);const z=new k(new se(.12,.45,10),H);z.rotation.x=-Math.PI/3,z.position.set(0,.08,-.42),r.add(z),[-1,1].forEach(q=>{const O=q===-1?o:a,Z=y.createBlock(.24,.48,.24,C);Z.position.y=-.24,O.add(Z);const K=new k(R,d);K.position.set(0,-.52,.04),O.add(K)});const N=y.createBlock(.56,.22,.34,b);n.add(N),[c,l].forEach(q=>{const O=y.createBlock(.22,.28,.24,b);O.position.y=-.14,q.add(O);const Z=y.createBlock(.2,.32,.22,d);Z.position.y=-.44,q.add(Z);const K=y.createBlock(.24,.16,.36,D);K.position.set(0,-.68,.06),q.add(K)})}else if(t==="leo"){const C=y.getPlastic(16777215,.2,0),b=y.getPlastic(166097,.2,0),D=y.getPlastic(3622735,.25,0),H=y.getPlastic(16766287,.15,0),x=y.getPlastic(15277667,.15,0),w=y.getPlastic(16752640,.2,0),$=y.createBlock(.62,.65,.38,b);i.add($);const J=y.createBlock(.48,.62,.06,C);J.position.set(0,-.02,.18),i.add(J);const P=new k(new mt(.26,.26,.12,16),C);P.position.set(0,.24,0),r.add(P);const z=new k(new mt(.38,.24,.28,16),C);z.position.set(0,.42,0),r.add(z);const N=y.createBlock(.46,.12,.46,w);N.position.set(0,.18,0),r.add(N),[-1,1].forEach(O=>{const Z=O===-1?o:a,K=y.createBlock(.24,.48,.24,b);K.position.y=-.24,Z.add(K);const et=new k(R,d);et.position.set(0,-.52,.04),Z.add(et)});const q=y.createBlock(.56,.22,.34,D);n.add(q),h=[],u=[],[c,l].forEach((O,Z)=>{const K=y.createBlock(.22,.58,.24,D);K.position.y=-.29,O.add(K);const et=y.createBlock(.26,.18,.38,H);et.position.set(0,-.66,.04),O.add(et);const ut=new mt(.08,.08,.06,10);ut.rotateZ(Math.PI/2);const yt=Z===0?h:u;[-.15,.15].forEach(G=>{[-.1,.1].forEach(Q=>{const rt=new k(ut,x);rt.position.set(G,-.78,.04+Q),O.add(rt),yt.push(rt)})})})}else{const C=y.getPlastic(16740419,.2,0),b=y.getPlastic(5125166,.3,0),D=y.getPlastic(5533306,.25,0),H=y.getPlastic(4073251,.25,0),x=y.getPlastic(2503224,.15,0),w=y.getPlastic(58879,.1,0),$=y.getPlastic(3021836,.2,0),J=y.createBlock(.62,.65,.38,C);i.add(J);const P=y.createBlock(.64,.1,.4,b);P.position.set(0,-.28,0),i.add(P);const z=y.createBlock(.12,.14,.1,b);z.position.set(-.24,-.28,.2),i.add(z);const N=y.createBlock(.12,.14,.1,b);N.position.set(.24,-.28,.2),i.add(N);const q=y.createBlock(.48,.3,.48,$);q.position.set(0,.16,0),r.add(q);const O=y.createBlock(.46,.12,.12,x);O.position.set(0,.22,.22),r.add(O);const Z=new mt(.065,.065,.04,10);Z.rotateX(Math.PI/2);const K=new k(Z,w);K.position.set(-.12,.22,.28),r.add(K);const et=new k(Z,w);et.position.set(.12,.22,.28),r.add(et),[-1,1].forEach(yt=>{const G=yt===-1?o:a,Q=y.createBlock(.24,.48,.24,C);Q.position.y=-.24,G.add(Q);const rt=new k(R,d);rt.position.set(0,-.52,.04),G.add(rt)});const ut=y.createBlock(.56,.22,.34,D);n.add(ut),[c,l].forEach(yt=>{const G=y.createBlock(.22,.48,.24,D);G.position.y=-.24,yt.add(G);const Q=y.createBlock(.25,.28,.36,H);Q.position.set(0,-.62,.05),yt.add(Q)})}return{model:e,rig:{root:e,hips:n,torso:i,head:r,leftArm:o,rightArm:a,leftLeg:c,rightLeg:l,leftSkateWheels:h,rightSkateWheels:u}}}static updateAnimation(t,e,n,i,r){const{root:o,hips:a,torso:c,head:l,leftArm:h,rightArm:u,leftLeg:d,rightLeg:f,leftSkateWheels:g,rightSkateWheels:v}=t;if(o.rotation.set(0,Math.PI,0),a.rotation.set(0,0,0),c.rotation.set(0,0,0),l.rotation.set(0,0,0),e==="running"){const p=Math.sin(n*16)*.75,E=-p*.85;if(d.rotation.x=p,f.rotation.x=-p,h.rotation.x=E,u.rotation.x=-E,a.position.y=.85+Math.abs(Math.sin(n*16))*.12,c.rotation.y=Math.sin(n*16)*.12,c.rotation.z=i*.35,o.rotation.z=i*.25,g&&v){for(const _ of g)_.rotation.x+=r*20;for(const _ of v)_.rotation.x+=r*20}}else e==="jumping"?(d.rotation.x=-.8,f.rotation.x=-.5,h.rotation.x=-1.6,u.rotation.x=-1.6,h.rotation.z=-.4,u.rotation.z=.4,c.rotation.x=.2,a.position.y=1):e==="sliding"?(c.rotation.x=.7,a.position.y=.35,d.rotation.x=-.5,f.rotation.x=-.5,h.rotation.x=.8,u.rotation.x=.8):e==="mounting"?(o.rotation.y+=r*12,d.rotation.x=-.6,f.rotation.x=-.6,h.rotation.z=-.8,u.rotation.z=.8):e==="crashed"&&(o.rotation.x=Math.PI/2.5,a.position.y=.3,h.rotation.x=1.2,u.rotation.x=1.2)}static poseInVehicle(t,e,n=!1,i=!1){const{root:r,hips:o,torso:a,head:c,leftArm:l,rightArm:h,leftLeg:u,rightLeg:d}=t;r.rotation.set(0,Math.PI,0),n?(o.position.set(0,i?.35:.22,.12),a.rotation.set(.65,0,-e*.2),c.rotation.set(-.4,-e*.3,0),u.rotation.set(-1.6,.3,0),d.rotation.set(-1.6,-.3,0),l.rotation.set(-1.5,.4+e*.5,-.3),h.rotation.set(-1.5,-.4+e*.5,.3)):i?(o.position.set(0,.54,.08),a.rotation.set(.05,0,-e*.35),c.rotation.set(.08,-e*.4,0),u.rotation.set(-.85,.18,0),d.rotation.set(-.85,-.18,0),l.rotation.set(-1.05,.25+e*.5,-.18),h.rotation.set(-1.05,-.25+e*.5,.18)):(o.position.set(0,.45,.05),a.rotation.set(-.15,0,-e*.18),c.rotation.set(.1,-e*.2,0),u.rotation.set(-1.4,.2,0),d.rotation.set(-1.4,-.2,0),l.rotation.set(-1.1,.3+e*.4,-.2),h.rotation.set(-1.1,-.3+e*.4,.2))}}class Uo{static buildVehicle(t,e){const n=Io[e]||Io.classic,i=new At;i.name=`vehicle_${t}`;const r=new At;i.add(r);const o=new At;r.add(o);const a=[],c=[];let l,h;const u=new L(-.6,.4,1.6),d=new L(.6,.4,1.6),f=y.getPlastic(n.primary,.16,0),g=y.getPlastic(n.secondary,.16,0),v=y.getPlastic(n.accent,.16,0),m=y.getPlastic(n.chassis,.22,0),p=y.getPlastic(n.wheelRim,.18,0),E=y.BlackRubber,_=y.Chrome,S=(R,C)=>{const b=new k(new mt(R,R,C,16),E);b.castShadow=!0,b.receiveShadow=!0,b.rotation.z=Math.PI/2;const D=new k(new mt(R*.65,R*.65,C+.02,12),p);b.add(D);const H=new k(new mt(R*.25,R*.25,C+.04,8),_);return b.add(H),c.push(b),b};if(t==="van"){const R=y.createBlock(1.8,.35,3.4,m);R.position.y=.5,r.add(R);const C=y.createBlock(1.7,1.3,2,f);C.position.set(0,1.25,.6),r.add(C),y.addStuds(C,1.5,1.8,.65,f,4,4);const b=y.createBlock(1.6,1,1.2,g);b.position.set(0,1.05,-.9),r.add(b);const D=new k(new Ue(1.4,.65,.08),y.GlassWindshield);D.position.set(0,1.25,-1.52),D.rotation.x=-.15,r.add(D),h=y.createBlock(1.9,.45,.3,v),h.position.set(0,.48,-1.8),y.addStuds(h,1.8,.25,.22,v,4,1),r.add(h),[-.65,.65].forEach(N=>{const q=new k(new mt(.12,.12,.08,12),y.getPlastic(16771899,.1,0));q.rotation.x=Math.PI/2,q.position.set(N,.75,-1.55),r.add(q)});const H=new At;H.position.set(0,2.1,.6);const x=y.getPlastic(16744619,.15,0),w=new k(new Re(.55,.25,12,24),x);w.rotation.x=Math.PI/2,H.add(w);const $=new k(new se(.28,.45,12),y.getPlastic(16777215,.15,0));$.position.y=.25,H.add($);const J=new k(new $t(.12,10,10),y.getPlastic(13959168,.1,0));J.position.y=.52,H.add(J),r.add(H),l=H,o.position.set(0,.72,-.5);const P=.42,z=.32;[-.95,.95].forEach(N=>{const q=new At;q.position.set(N,P,-1.05);const O=S(P,z);q.add(O),r.add(q),a.push(q)}),[-.95,.95].forEach(N=>{const q=S(P,z);q.position.set(N,P,.95),r.add(q)}),u.set(-.7,.45,1.75),d.set(.7,.45,1.75)}else if(t==="buggy"){const R=y.createBlock(1.5,.3,3,f);R.position.y=.55,r.add(R);const C=v,b=new mt(.06,.06,1.4,8);[-.65,.65].forEach(z=>{const N=new k(b,C);N.position.set(z,1.25,-.4),N.rotation.x=.25,r.add(N);const q=new k(b,C);q.position.set(z,1.25,.6),q.rotation.x=-.25,r.add(q)});const D=y.createBlock(1.4,.1,.9,g);D.position.set(0,1.85,.1),y.addStuds(D,1.2,.7,.05,g,3,2),r.add(D),h=y.createBlock(1.6,.3,.25,m),h.position.set(0,.5,-1.6),r.add(h);const H=new k(new mt(.04,.04,1.2,8),_);H.position.set(.55,1.6,1.2),H.rotation.z=-.15,r.add(H);const x=new At;x.position.set(.72,2.2,1.2);const w=new k(new Re(.25,.08,8,16,Math.PI),y.RubyGem);w.rotation.z=Math.PI,x.add(w),[-.25,.25].forEach(z=>{const N=y.createBlock(.14,.18,.14,_);N.position.set(z,.12,0),x.add(N)}),r.add(x),l=x,o.position.set(0,.65,-.05);const $=.38,J=.52,P=.36;[-.88,.88].forEach(z=>{const N=new At;N.position.set(z,$,-1.1);const q=S($,P);N.add(q),r.add(N),a.push(N)}),[-.95,.95].forEach(z=>{const N=S(J,P+.08);N.position.set(z,J,.9),r.add(N)}),u.set(-.6,.55,1.55),d.set(.6,.55,1.55)}else{const R=y.createBlock(.55,.14,1.5,m);R.position.set(0,.38,-.1),r.add(R),[-.16,0,.16].forEach(rt=>{const gt=new k(new Ue(.06,.04,1.1),E);gt.position.set(rt,.47,-.1),r.add(gt)});const C=y.createBlock(.85,.85,.12,f);C.position.set(0,.85,-.85),C.rotation.x=-.12,r.add(C),y.addStuds(C,.65,.65,.04,f,2,2);const b=new k(new mt(.04,.04,.88,8),_);b.rotation.z=Math.PI/2,b.position.set(0,1.28,-.9),r.add(b);const D=y.createBlock(.68,.6,1.15,f);D.position.set(0,.65,.72),r.add(D);const H=y.createBlock(.48,.12,.8,g);H.position.set(0,.98,.45),r.add(H);const x=y.createBlock(.42,.08,.72,v);x.position.set(0,1.06,.45),r.add(x);const w=new At;w.position.set(0,.96,1.25);const $=new k(new Ue(.55,.05,.4),_);w.add($);const J=y.createBlock(.45,.35,.35,g);J.position.set(0,.22,0),y.addStuds(J,.35,.25,.04,g,2,1),w.add(J);const P=new k(new mt(.02,.02,.6,8),_);P.position.set(.2,.4,.1),w.add(P);const z=y.createBlock(.2,.12,.03,v);z.position.set(.1,.65,.1),w.add(z),r.add(w),l=z,h=y.createBlock(.75,.14,.12,_),h.position.set(0,.38,-1.35),r.add(h),o.position.set(0,.48,.05);const N=.35,q=.22,O=new At;O.position.set(0,N,-1.15);const Z=S(N,q);O.add(Z),[-.14,.14].forEach(rt=>{const gt=new k(new mt(.035,.035,.65,8),_);gt.position.set(rt,.26,0),O.add(gt)});const K=new k(new mt(.045,.045,.75,8),_);K.position.set(0,.75,.08),K.rotation.x=-.15,O.add(K);const et=new k(new mt(.035,.035,.9,8),_);et.rotation.z=Math.PI/2,et.position.set(0,1.15,.14),O.add(et),[-.42,.42].forEach(rt=>{const gt=new k(new mt(.048,.048,.16,8),E);gt.rotation.z=Math.PI/2,gt.position.set(rt,1.15,.14),O.add(gt)});const ut=new k(new mt(.12,.1,.14,12),_);ut.rotation.x=Math.PI/2,ut.position.set(0,1.15,.04),O.add(ut);const yt=new k(new $t(.1,12,12),y.getPlastic(16771899,.1,0));yt.position.set(0,1.15,-.04),O.add(yt),[-.32,.32].forEach(rt=>{const gt=new k(new mt(.015,.015,.22,6),_);gt.position.set(rt,1.3,.14),O.add(gt);const _t=new k(new mt(.07,.07,.02,10),_);_t.rotation.x=Math.PI/2,_t.position.set(rt,1.42,.14),O.add(_t)}),r.add(O),a.push(O);const G=S(N,q);G.position.set(0,N,.78),r.add(G);const Q=new k(new mt(.05,.06,.55,8),_);Q.rotation.x=Math.PI/2,Q.position.set(.38,.32,.85),r.add(Q),u.set(.38,.32,1.15),d.set(.38,.32,1.15)}return{model:i,parts:{root:i,chassis:r,cockpitAnchor:o,frontWheelPivots:a,allWheels:c,topperMesh:l,leftExhaustPos:u,rightExhaustPos:d,bumperMesh:h}}}static updatePhysics(t,e,n,i,r,o=!1,a=!1){const{chassis:c,frontWheelPivots:l,allWheels:h,topperMesh:u}=t,d=-n*.85;for(const E of l)E.rotation.y=pe.lerp(E.rotation.y,d,r*16);const f=e/.4*r;for(const E of h)E.rotation.x+=f;const g=-i*.18;c.rotation.z=pe.lerp(c.rotation.z,g,r*10);const v=o?24:14,m=o?.04:.025,p=Math.sin(performance.now()*.001*v)*m;a?(c.position.y=pe.lerp(c.position.y,-.42,r*18),c.rotation.x=pe.lerp(c.rotation.x,.12,r*16),c.scale.y=pe.lerp(c.scale.y,.72,r*18)):(c.position.y=pe.lerp(c.position.y,p,r*14),c.rotation.x=pe.lerp(c.rotation.x,e/40*.03,r*10),c.scale.y=pe.lerp(c.scale.y,1,r*14)),u&&(u.rotation.y+=r*(a?6:2.5))}}const Rr=3.2,xn=[-Rr,0,Rr];class qm{group;characterId;vehicleId;paletteId;avatarModel;avatarRig;vehicleModel;vehicleParts;currentLane=1;targetX=0;currentX=0;y=0;z=0;mode="on_foot";movementState="running";verticalVelocity=0;gravity=-32;jumpForce=13.5;slideTimer=0;maxSlideDuration=.75;vehicleDuration=0;maxVehicleDuration=20;transitionTimer=0;mountTransitionDuration=.55;hasShield=!1;magnetTimer=0;turboTimer=0;runCycleTime=0;particleSystem;audioManager;constructor(t,e,n,i,r){this.characterId=t,this.vehicleId=e,this.paletteId=n,this.particleSystem=i,this.audioManager=r,this.group=new At,this.rebuildMeshes()}rebuildMeshes(){for(;this.group.children.length>0;)this.group.remove(this.group.children[0]);const t=Pi.buildCharacter(this.characterId);this.avatarModel=t.model,this.avatarRig=t.rig;const e=Uo.buildVehicle(this.vehicleId,this.paletteId);this.vehicleModel=e.model,this.vehicleParts=e.parts,this.mode==="on_foot"?(this.vehicleModel.visible=!1,this.group.add(this.avatarModel)):(this.vehicleModel.visible=!0,this.vehicleParts.cockpitAnchor.add(this.avatarModel),Pi.poseInVehicle(this.avatarRig,0,!1,this.vehicleId==="scooter"),this.group.add(this.vehicleModel))}setCustomization(t,e,n){this.characterId=t,this.vehicleId=e,this.paletteId=n,this.rebuildMeshes()}setShowcasePreview(t){this.mode=t?"in_vehicle":"on_foot",this.rebuildMeshes()}reset(){this.currentLane=1,this.targetX=xn[1],this.currentX=xn[1],this.y=0,this.z=0,this.verticalVelocity=0,this.slideTimer=0,this.mode="on_foot",this.movementState="running",this.vehicleDuration=0,this.transitionTimer=0,this.hasShield=!1,this.magnetTimer=0,this.turboTimer=0,this.runCycleTime=0,this.rebuildMeshes(),this.audioManager.stopVehicleEngine()}moveLeft(){this.currentLane>0&&this.movementState!=="crashed"&&(this.currentLane--,this.targetX=xn[this.currentLane],this.audioManager.playSlideSound())}moveRight(){this.currentLane<xn.length-1&&this.movementState!=="crashed"&&(this.currentLane++,this.targetX=xn[this.currentLane],this.audioManager.playSlideSound())}jump(){(this.movementState==="running"||this.mode==="in_vehicle"&&this.y<=.05)&&(this.verticalVelocity=this.jumpForce,this.movementState="jumping",this.slideTimer=0,this.audioManager.playJumpSound())}slide(){this.movementState==="running"||this.mode==="in_vehicle"?(this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.mode==="in_vehicle"?this.audioManager.playVehicleDuckSound():this.audioManager.playSlideSound()):this.movementState==="jumping"&&(this.verticalVelocity=-22,this.movementState="sliding",this.slideTimer=this.maxSlideDuration,this.audioManager.playSlideSound())}mountVehicle(){if(this.mode==="in_vehicle"){this.vehicleDuration=Math.min(this.maxVehicleDuration,this.vehicleDuration+10),this.audioManager.playMountSound();return}this.mode="in_vehicle",this.movementState="mounting",this.transitionTimer=this.mountTransitionDuration;const t=un[this.characterId],e=wn[this.vehicleId];this.maxVehicleDuration=e.baseDurationSeconds*t.vehicleDurationBonus,this.vehicleDuration=this.maxVehicleDuration,this.verticalVelocity=9.5,this.group.remove(this.avatarModel),this.vehicleParts.cockpitAnchor.add(this.avatarModel),Pi.poseInVehicle(this.avatarRig,0),this.vehicleModel.visible=!0,this.vehicleModel.position.set(0,-.6,2),this.group.add(this.vehicleModel),this.audioManager.playMountSound(),this.audioManager.startVehicleEngine(),this.particleSystem.emitSmashDebris(this.group.position,[58879,16738740,16766287])}dismountVehicle(t=!1){this.mode==="in_vehicle"&&(this.mode="on_foot",this.vehicleDuration=0,this.turboTimer=0,this.audioManager.stopVehicleEngine(),this.vehicleParts.cockpitAnchor.remove(this.avatarModel),this.group.remove(this.vehicleModel),this.vehicleModel.visible=!1,this.group.add(this.avatarModel),this.verticalVelocity=t?7:6,this.movementState="jumping",this.particleSystem.emitSmashDebris(this.group.position,[16728193,16771899,58998]))}activateTurbo(){this.turboTimer=5,this.audioManager.playMountSound()}update(t,e){this.currentX=pe.lerp(this.currentX,this.targetX,t*14);const n=(this.targetX-this.currentX)/Rr;(this.y>0||this.verticalVelocity!==0)&&(this.verticalVelocity+=this.gravity*t,this.y+=this.verticalVelocity*t,this.y<=0&&(this.y=0,this.verticalVelocity=0,(this.movementState==="jumping"||this.movementState==="mounting")&&(this.movementState="running"))),this.movementState==="sliding"&&(this.slideTimer-=t,this.slideTimer<=0&&(this.slideTimer=0,this.movementState="running"));const i=this.movementState==="sliding";if(this.mode==="in_vehicle"){if(this.transitionTimer>0){this.transitionTimer-=t;const l=1-Math.max(0,this.transitionTimer/this.mountTransitionDuration);this.vehicleModel.position.z=pe.lerp(2,0,l),this.vehicleModel.position.y=pe.lerp(-.6,0,l)}else this.vehicleModel.position.set(0,0,0);if(this.vehicleDuration-=t,this.vehicleDuration<=0&&this.dismountVehicle(!1),Math.random()<.7){const l=new L;this.vehicleModel.localToWorld(l.copy(this.vehicleParts.leftExhaustPos)),this.particleSystem.emitExhaust(l,this.paletteId==="cyber"?58879:16738740)}if(Uo.updatePhysics(this.vehicleParts,e,n,n,t,this.turboTimer>0,i),i){const l=this.group.position.clone();l.y=.05,this.particleSystem.emitGroundSparks(l,16766287)}this.audioManager.setEngineSpeed(e/30)}if(this.magnetTimer>0&&(this.magnetTimer-=t),this.turboTimer>0&&(this.turboTimer-=t),this.runCycleTime+=t*(e/18),this.mode==="on_foot")Pi.updateAnimation(this.avatarRig,this.movementState,this.runCycleTime,n,t);else{const l=this.vehicleId==="scooter";Pi.poseInVehicle(this.avatarRig,n,i,l)}const r=this.mode==="in_vehicle"&&this.vehicleId==="scooter",o=this.targetX-this.currentX,a=-o*(r?.32:.22),c=-o*(r?.65:this.mode==="in_vehicle"?.32:.24);this.group.rotation.y=pe.lerp(this.group.rotation.y,a,t*14),this.group.rotation.z=pe.lerp(this.group.rotation.z,c,t*14),this.group.position.set(this.currentX,this.y,this.z)}getBoundingBox(){const t=new An,e=this.mode==="in_vehicle"?1:.45,n=this.movementState==="sliding"?.7:this.mode==="in_vehicle"?1.8:1.7,i=this.mode==="in_vehicle"?1.6:.5;return t.min.set(this.currentX-e,this.y,this.z-i),t.max.set(this.currentX+e,this.y+n,this.z+i),t}}class Li{static getBiome(t){switch(t){case"boardwalk":return this.boardwalkBiome;case"plaza":return this.plazaBiome;case"forest":return this.forestBiome;case"pier":return this.pierBiome;case"cyber":return this.cyberBiome;case"candy":return this.candyBiome}}static boardwalkBiome={name:"Heartlake Boardwalk",roadColor:16769154,curbColor:5099745,sidewalkColor:16775620,skyColor:8508666,fogColor:8508666,groundColor:16774557,buildSceneryProp:(t,e)=>{const n=new At,i=t==="left"?-1:1,r=e%5;if(r===0){const o=y.getPlastic(7951688,.35,0),a=y.getPlastic(3046706,.22,0),c=y.getPlastic(4431943,.22,0),l=y.getPlastic(5125166,.3,0);let h=0,u=0;const d=(Math.sin(e*.7)*.12+.15)*i;for(let g=0;g<7;g++){const v=.36-g*.02,m=.33-g*.02,p=.75,E=new k(new mt(m,v,p,10),o);u+=p*.5,h+=Math.sin(g*.4)*d,E.position.set(h,u,0),E.rotation.z=-d*(g*.18),E.castShadow=!0,n.add(E),u+=p*.5;const _=new k(new Re(m+.02,.04,6,12),o);_.position.set(h,u,0),_.rotation.x=Math.PI/2,n.add(_)}[-.18,0,.18].forEach((g,v)=>{const m=new k(new $t(.18,8,8),l);m.position.set(h+g,u-.2,v%2===0?.16:-.16),n.add(m)});const f=10;for(let g=0;g<f;g++){const v=g*Math.PI*2/f+e*.2,m=g%2===0,p=m?c:a,E=new At;E.position.set(h,u,0),E.rotation.y=v;const _=m?2.4:1.9,S=m?.42:.68,R=y.createBlock(.38,.06,_,p);R.position.set(0,0,_*.45),R.rotation.x=S,E.add(R);const C=new k(new se(.24,.8,4),p);C.position.set(0,-Math.sin(S)*_*.45,_*.85),C.rotation.x=S+.3,E.add(C),n.add(E)}}else if(r===1){const o=y.getPlastic(16777215,.2,0),a=y.getPlastic(13959168,.2,0),c=y.getPlastic(58879,.2,0),l=2.4;[-.7,.7].forEach(v=>{[-.7,.7].forEach(m=>{const p=new k(new mt(.08,.08,l,8),y.getPlastic(9268835,.3,0));p.position.set(v,l*.5,m),n.add(p)})});const h=y.createBlock(1.8,1.4,1.8,o);h.position.y=l+.7,n.add(h);const u=y.createBlock(1.85,.25,1.85,a);u.position.y=l+.7,n.add(u);const d=y.createBlock(1.2,.5,1.9,y.getPlastic(8444159,.1,0));d.position.y=l+.85,n.add(d);const f=new k(new se(1.6,.9,4),c);f.position.y=l+1.85,f.rotation.y=Math.PI/4,n.add(f);const g=new k(new Re(.3,.09,8,16),a);g.position.set(i*.95,l+.7,0),g.rotation.y=Math.PI/2,n.add(g)}else if(r===2){const o=[16301008,11722715,16775620,13747433],a=y.getPlastic(o[e%o.length],.25,0),c=y.WhitePlastic,l=y.getPlastic(16740419,.25,0),h=y.createBlock(3,3.8,2.6,a);h.position.y=1.9,n.add(h);const u=y.createBlock(2.2,.15,.8,c);u.position.set(0,2.1,i*-1.5),n.add(u);const d=y.createBlock(2.2,.5,.08,c);d.position.set(0,2.4,i*-1.85),n.add(d);const f=y.createBlock(1.4,.25,.35,y.getPlastic(9268835,.3,0));f.position.set(0,.9,i*-1.4),n.add(f),[-.45,0,.45].forEach(v=>{const m=new k(new $t(.16,6,6),y.getPlastic(16728193,.15,0));m.position.set(v,1.1,i*-1.4),n.add(m)});const g=new k(new se(2.5,1.4,4),l);g.position.y=4.5,g.rotation.y=Math.PI/4,n.add(g)}else if(r===3){const o=y.getPlastic(16744619,.2,0),a=y.getPlastic(16771899,.2,0),c=y.WhitePlastic,l=y.createBlock(2.6,1.4,1.8,o);l.position.y=.7,n.add(l);const h=y.createBlock(2.8,.12,2,y.getPlastic(5099745,.2,0));h.position.y=1.42,n.add(h);for(let v=0;v<5;v++){const m=v%2===0?a:c,p=y.createBlock(.5,.15,1.8,m);p.position.set(-1+v*.5,2.3,0),p.rotation.x=.2,n.add(p)}const u=new k(new se(.35,.8,8),y.getPlastic(14142664,.3,0));u.rotation.z=Math.PI,u.position.set(0,2.7,0),n.add(u);const d=new k(new $t(.42,10,10),y.getPlastic(58879,.15,0));d.position.set(0,3.2,0),n.add(d);const f=new k(new mt(.04,.04,2.2,6),y.Chrome);f.position.set(i*1.6,1.1,0),n.add(f);const g=new k(new se(1.2,.5,10),y.getPlastic(16728193,.2,0));g.position.set(i*1.6,2.2,0),n.add(g)}else{const o=y.getPlastic(6111287,.35,0),a=y.createBlock(2,1.1,.2,o);a.position.y=.55,n.add(a);const c=[58879,16717636,7798531];[-.6,0,.6].forEach((h,u)=>{const d=y.createBlock(.38,2.2,.08,y.getPlastic(c[u],.15,0));d.position.set(h,1.1,.15),d.rotation.z=(u-1)*.08,n.add(d)});const l=y.createBlock(.8,.45,1.4,y.getPlastic(16766287,.2,0));l.position.set(i*1.5,.22,0),l.rotation.x=-.15,n.add(l)}return n},buildWideBackdrop:(t,e)=>{const n=new At;if(t==="right")if(e%2===0){const r=y.createBlock(1.6,.7,3.8,y.WhitePlastic);r.position.y=.25,n.add(r);const o=y.createBlock(1.4,.08,3.5,y.getPlastic(14142664,.4,0));o.position.y=.62,n.add(o);const a=new k(new mt(.06,.06,4.5,8),y.Chrome);a.position.set(0,2.8,0),n.add(a);const c=new Sc;c.moveTo(0,0),c.lineTo(0,3.8),c.lineTo(2,.4),c.closePath();const l=new Gr(c),h=[16728193,58879,16771584],u=y.getPlastic(h[e%h.length],.15,0),d=new k(l,u);d.position.set(.04,.9,-.2),d.rotation.y=.25,n.add(d)}else{const r=new k(new se(.8,1.8,8),y.getPlastic(16717636,.2,0));r.position.y=.9,n.add(r);const o=new k(new $t(.3,8,8),y.getPlastic(16771899,.1,0));o.position.y=1.95,n.add(o)}else{const i=[16744619,8444159,11766015,11010027],r=y.getPlastic(i[e%i.length],.2,0),o=y.GlassWindshield,a=9.5+e%3*2.5,c=y.createBlock(5.6,a,5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<=4;h++)[-1.6,0,1.6].forEach(u=>{const d=y.createBlock(.85,1.1,.1,o);d.position.set(u,h*1.9,2.52),n.add(d)});const l=new k(new se(1.6,.6,10),y.getPlastic(16732754,.2,0));l.position.set(0,a+.8,0),n.add(l)}return n}};static plazaBiome={name:"Downtown Plaza",roadColor:9479342,curbColor:16766287,sidewalkColor:13621468,skyColor:6600182,fogColor:6600182,groundColor:8505220,buildSceneryProp:(t,e)=>{const n=new At,i=t==="left"?-1:1,r=e%5;if(r===0){const o=[3754411,35195,6174129,3622735],a=y.getPlastic(o[e%o.length],.25,0),c=y.getPlastic(8444159,.1,0),l=y.WhitePlastic,h=7.5,u=y.createBlock(3.4,h,2.8,a);u.position.y=h*.5,n.add(u);for(let g=0;g<4;g++)[-.9,0,.9].forEach(v=>{const m=y.createBlock(.65,.95,.1,c);m.position.set(v,1.4+g*1.5,i*-1.42),n.add(m)});const d=y.createBlock(3.6,.35,3,l);d.position.y=h+.15,n.add(d);const f=new k(new mt(.7,.7,1.2,12),y.getPlastic(9268835,.3,0));f.position.set(.6,h+.9,0),n.add(f)}else if(r===1){const o=y.getPlastic(12216520,.25,0),a=y.getPlastic(16740419,.2,0),c=y.createBlock(2.6,5.5,2.6,o);c.position.y=2.75,n.add(c);const l=new k(new mt(.65,.65,.12,16),y.WhitePlastic);l.rotation.x=Math.PI/2,l.position.set(0,4.4,i*-1.35),n.add(l);const h=y.createBlock(.08,.45,.15,y.getPlastic(2171169,.2,0));h.position.set(0,4.5,i*-1.4),n.add(h);const u=new k(new se(2,2.6,4),a);u.position.y=6.8,u.rotation.y=Math.PI/4,n.add(u);const d=new k(new $t(.2,8,8),y.GoldStar);d.position.y=8.2,n.add(d)}else if(r===2){const o=y.getPlastic(15483002,.25,0),a=y.getPlastic(58879,.18,0),c=y.createBlock(3.2,3.6,2.4,o);c.position.y=1.8,n.add(c);const l=y.createBlock(2.2,1.4,.1,y.getPlastic(8444159,.1,0));l.position.set(0,1.2,i*-1.22),n.add(l);const h=y.createBlock(2.6,.35,1.2,a);h.position.set(0,2.1,i*-1.6),h.rotation.x=.2,n.add(h);const u=new k(new mt(.45,.45,.65,10),y.Chrome);u.position.set(i*1.6,.32,0),n.add(u);const d=new k(new mt(.12,.1,.18,8),y.WhitePlastic);d.position.set(i*1.6,.74,0),n.add(d)}else if(r===3){const o=y.getPlastic(2503224,.2,0),a=y.getPlastic(16771899,.1,0),c=new k(new mt(.1,.14,3.8,8),o);c.position.y=1.9,n.add(c),[-.55,.55].forEach(u=>{const d=y.createBlock(.6,.08,.08,o);d.position.set(u*.5,3.6,0),n.add(d);const f=new k(new $t(.28,10,10),a);f.position.set(u,3.45,0),n.add(f);const g=new k(new se(.2,.25,6),y.getPlastic(9268835,.3,0));g.position.set(u,3.1,0),n.add(g)});const l=y.createBlock(1.4,.35,1.4,y.getPlastic(7901340,.3,0));l.position.y=.18,n.add(l);const h=new k(new $t(.35,8,8),y.getPlastic(15277667,.2,0));h.position.y=.45,n.add(h)}else{const o=y.getPlastic(1668818,.2,0),a=y.getPlastic(8444159,.1,0),c=y.createBlock(2.4,.12,1.4,o);c.position.set(0,2.4,0),n.add(c);const l=y.createBlock(2.2,2.2,.08,a);l.position.set(0,1.2,i*-.6),n.add(l);const h=y.createBlock(1.8,.4,.45,y.getPlastic(6111287,.3,0));h.position.set(0,.25,i*-.2),n.add(h);const u=new k(new mt(.18,.22,.7,8),y.getPlastic(13959168,.2,0));u.position.set(i*1.6,.35,.5),n.add(u)}return n},buildWideBackdrop:(t,e)=>{const n=new At,i=[1713022,19776,3218322,2503224,12000284],r=y.getPlastic(i[e%i.length],.2,0),o=y.getPlastic(8444159,.1,0),a=12+e%4*3.5,c=y.createBlock(6.5,a,5.5,r);c.position.y=a*.5,n.add(c);for(let h=1;h<Math.floor(a/2.2);h++)[-2,0,2].forEach(u=>{const d=y.createBlock(1.1,1.2,.1,o);d.position.set(u,h*2.2,2.8),n.add(d)});const l=new k(new mt(.08,.15,4.5,8),y.Chrome);return l.position.set(0,a+2.25,0),n.add(l),n}};static forestBiome={name:"Pinecrest Forest",roadColor:9268835,curbColor:6111287,sidewalkColor:10586239,skyColor:8440772,fogColor:8440772,groundColor:3046706,buildSceneryProp:(t,e)=>{const n=new At,i=t==="left"?-1:1,r=e%5;if(r===0||r===3){const o=y.getPlastic(5125166,.35,0),a=y.getPlastic(1793568,.25,0),c=y.getPlastic(3046706,.25,0),l=y.getPlastic(4431943,.25,0),h=new k(new mt(.3,.42,5.5,10),o);h.position.y=2.75,h.castShadow=!0,n.add(h),[{y:3.2,r:2.1,h:1.6,mat:a},{y:4.2,r:1.7,h:1.5,mat:c},{y:5.1,r:1.3,h:1.4,mat:c},{y:5.9,r:.8,h:1.3,mat:l}].forEach(d=>{const f=new k(new se(d.r,d.h,8),d.mat);f.position.y=d.y,f.castShadow=!0,n.add(f)})}else if(r===1){const o=y.getPlastic(7162945,.35,0),a=y.getPlastic(4073251,.35,0),c=y.getPlastic(7901340,.3,0),l=y.createBlock(3.2,2.6,2.6,o);l.position.y=1.3,n.add(l);const h=new k(new se(2.6,1.6,4),a);h.position.y=3.4,h.rotation.y=Math.PI/4,n.add(h);const u=y.createBlock(.6,3.2,.6,c);u.position.set(.9,2.6,.6),n.add(u),[0,.4,.8].forEach((f,g)=>{const v=new k(new $t(.2+g*.08,8,8),y.WhitePlastic);v.position.set(.9+Math.sin(g)*.15,4.4+f,.6),n.add(v)});const d=y.createBlock(1.2,.6,.6,y.getPlastic(9268835,.35,0));d.position.set(i*1.8,.3,0),n.add(d)}else if(r===2){const o=y.getPlastic(58879,.1,0),a=y.getPlastic(6111287,.3,0),c=y.getPlastic(10395294,.3,0),l=y.createBlock(2.4,.08,3.6,o);l.position.set(0,.04,0),n.add(l),[-.8,.2,.7].forEach((u,d)=>{const f=new k(new $t(.22,6,6),c);f.position.set(u,.12,(d-1)*.8),f.scale.set(1.4,.6,1.1),n.add(f)});const h=y.createBlock(1.2,.2,2.2,a);h.position.set(0,.35,0),n.add(h),[-.55,.55].forEach(u=>{const d=y.createBlock(.08,.45,2.2,a);d.position.set(u,.65,0),n.add(d)})}else{const o=y.getPlastic(7162945,.35,0),a=y.createBlock(.12,.12,3.2,o);a.position.set(0,.7,0),n.add(a);const c=y.createBlock(.12,.12,3.2,o);c.position.set(0,.35,0),n.add(c),[-1.4,0,1.4].forEach(h=>{const u=y.createBlock(.18,.9,.18,o);u.position.set(0,.45,h),n.add(u)});const l=y.getPlastic(16717636,.15,0);[-.4,.3].forEach((h,u)=>{const d=new k(new mt(.08,.1,.35,8),y.WhitePlastic);d.position.set(h,.18,.8+u*.3),n.add(d);const f=new k(new $t(.24,8,8),l);f.position.set(h,.36,.8+u*.3),f.scale.set(1,.6,1),n.add(f)})}return n},buildWideBackdrop:(t,e)=>{const n=new At;if(e%2===0){const r=y.getPlastic(1793568,.3,0),o=y.getPlastic(5125166,.4,0);[-2.4,0,2.4].forEach((a,c)=>{const l=8.5+c*1.5,h=new k(new mt(.32,.48,l,8),o);h.position.set(a,l*.5,c%2===0?1.2:-1.2),n.add(h);for(let u=0;u<5;u++){const d=new k(new se(2.6-u*.4,2.4,8),r);d.position.set(a,l*.38+u*1.5,c%2===0?1.2:-1.2),n.add(d)}})}else{const r=y.getPlastic(6111287,.4,0),o=y.getPlastic(3622735,.3,0),a=y.createBlock(5.4,3.6,4.2,r);a.position.y=1.8,n.add(a);const c=new k(new se(4.4,2.5,4),o);c.position.set(0,4.6,0),c.rotation.y=Math.PI/4,n.add(c);const l=y.createBlock(.8,4.4,.8,y.getPlastic(7901340,.4,0));l.position.set(1.9,3.4,.8),n.add(l)}return n}};static pierBiome={name:"Amusement Pier",roadColor:8280002,curbColor:58879,sidewalkColor:12216520,skyColor:1713022,fogColor:2635155,groundColor:870305,buildSceneryProp:(t,e)=>{const n=new At,i=t==="left"?-1:1,r=e%4;if(r===0){const o=y.getPlastic(16766464,.15,0),a=new k(new Re(3.2,.15,8,24),o);a.position.y=4.2,a.rotation.y=i*.3,n.add(a);const c=new k(new mt(.3,.3,.2,12),y.Chrome);c.position.y=4.2,n.add(c),[-1.4,1.4].forEach(l=>{const h=new k(new mt(.12,.14,4.8,8),y.getPlastic(3622735,.2,0));h.position.set(l,2.4,0),h.rotation.z=-l*.18,n.add(h)})}else if(r===1){const o=y.getPlastic(16717636,.15,0),a=new k(new Re(2.6,.2,8,24),o);a.position.set(0,3,0),a.rotation.y=t==="left"?.3:-.3,n.add(a),[-1.8,1.8].forEach(c=>{const l=y.createBlock(.25,3.2,.25,y.WhitePlastic);l.position.set(c,1.6,0),n.add(l)})}else if(r===2){const o=y.getPlastic(58879,.18,0),a=y.createBlock(2.2,2.4,1.8,o);a.position.y=1.2,n.add(a);const c=y.createBlock(2.6,.55,.2,y.getPlastic(16771899,.15,0));c.position.set(0,2.45,.95),n.add(c);const l=new k(new $t(.42,8,8),y.getPlastic(9268835,.3,0));l.position.set(0,1.4,1),n.add(l)}else{const o=new k(new mt(.1,.1,4.2,8),y.WhitePlastic);o.position.y=2.1,n.add(o);const a=[16771899,58879,16717636,7798531,14696699];for(let c=0;c<5;c++){const l=new k(new $t(.38,10,10),y.getPlastic(a[c],.12,0));l.position.set(Math.sin(c*1.3)*.45,4.2+c*.25,Math.cos(c*1.3)*.45),n.add(l)}}return n},buildWideBackdrop:(t,e)=>{const n=new At;if(e%2===0){const r=new k(new Re(5.5,.22,8,30),y.getPlastic(16766464,.15,0));r.position.y=7,r.rotation.y=t==="left"?.35:-.35,n.add(r),[-2.2,2.2].forEach(o=>{const a=new k(new mt(.18,.22,8,8),y.getPlastic(3622735,.2,0));a.position.set(o,4,0),a.rotation.z=-o*.15,n.add(a)})}else{const r=new k(new se(4.2,4.5,10),y.getPlastic(16717636,.15,0));r.position.y=2.25,n.add(r)}return n}};static cyberBiome={name:"Cyber Circuit",roadColor:1713022,curbColor:58998,sidewalkColor:2503224,skyColor:870305,fogColor:870305,groundColor:19776,buildSceneryProp:(t,e)=>{const n=new At,i=e%3;if(i===0){const r=y.getPlastic(58879,.1,0),o=y.getPlastic(3622735,.2,0),a=y.createBlock(1.6,.7,1.6,o);a.position.y=.35,n.add(a);const c=new k(new mt(.35,.4,5,6),r);c.position.y=2.85,n.add(c),[3.5,4.6].forEach(l=>{const h=new k(new Re(.75,.08,8,16),y.getPlastic(7798531,.1,0));h.position.y=l,h.rotation.x=Math.PI/2,n.add(h)})}else if(i===1){const r=y.createBlock(.9,4.2,.9,y.getPlastic(16717636,.2,0));r.position.y=2.1,n.add(r);const o=new k(new se(.6,1,3),y.getPlastic(16776960,.1,0));o.position.set(0,4.3,0),o.rotation.z=t==="left"?-Math.PI/2:Math.PI/2,n.add(o)}else{const r=y.createBlock(1.8,2.8,1.6,y.getPlastic(4342338,.25,0));r.position.y=1.4,n.add(r),[1,1.7,2.3].forEach(o=>{const a=y.createBlock(1.85,.15,.9,y.getPlastic(58879,.1,0));a.position.set(0,o,0),n.add(a)})}return n},buildWideBackdrop:(t,e)=>{const n=new At,i=y.createBlock(4.5,14+e%3*3,4.5,y.getPlastic(1713022,.15,0));i.position.y=7,n.add(i);const r=new k(new mt(.12,.2,5,6),y.getPlastic(58879,.1,0));return r.position.y=16.5,n.add(r),n}};static candyBiome={name:"Candy Wonderland",roadColor:16027569,curbColor:16774557,sidewalkColor:13538264,skyColor:16301008,fogColor:16301008,groundColor:16764092,buildSceneryProp:(t,e)=>{const n=new At,i=e%3;if(i===0){const r=new k(new mt(.14,.14,4,8),y.WhitePlastic);r.position.y=2,n.add(r);const o=new k(new mt(1.4,1.4,.35,18),y.getPlastic(16728193,.15,0));o.rotation.x=Math.PI/2,o.rotation.y=t==="left"?.3:-.3,o.position.y=4,n.add(o);const a=new k(new mt(.8,.8,.38,12),y.WhitePlastic);a.rotation.x=Math.PI/2,a.position.y=4,n.add(a)}else if(i===1){const r=y.getPlastic(58998,.15,0),o=y.createBlock(1.4,2,1.2,r);o.position.y=1,n.add(o);const a=new k(new $t(.65,10,10),r);a.position.y=2.35,n.add(a),[-.45,.45].forEach(c=>{const l=new k(new $t(.22,6,6),r);l.position.set(c,2.9,0),n.add(l)})}else{const r=new k(new mt(1.3,.9,1.2,12),y.getPlastic(14142664,.3,0));r.position.y=.6,n.add(r);const o=new k(new $t(1.15,12,12),y.getPlastic(8445674,.18,0));o.position.y=1.7,n.add(o);const a=new k(new $t(.35,8,8),y.getPlastic(13959168,.1,0));a.position.y=2.8,n.add(a)}return n},buildWideBackdrop:(t,e)=>{const n=new At,i=10+e%3*2,r=new k(new mt(.5,.5,i,12),y.WhitePlastic);r.position.y=i*.5,n.add(r);const o=new k(new $t(3,12,12),y.getPlastic(16728193,.15,0));return o.position.y=i+1.5,n.add(o),n}}}const Me=36,we=11.2;class Ym{group;chunkIndex=0;biome="boardwalk";obstacles=[];pickups=[];roadMesh;leftCurb;rightCurb;leftSidewalk;rightSidewalk;leftLandscape;rightLandscape;oceanMesh;sceneryGroup=new At;constructor(){this.group=new At,this.buildBaseRoad(),this.group.add(this.sceneryGroup)}buildBaseRoad(){const t=new Sn(we,Me);t.rotateX(-Math.PI/2),this.roadMesh=new k(t,y.getPlastic(16769154,.35,0)),this.roadMesh.receiveShadow=!0,this.group.add(this.roadMesh);const e=new Ue(.6,.35,Me);this.leftCurb=new k(e,y.getPlastic(5099745,.25,0)),this.leftCurb.position.set(-we/2-.3,.175,0),this.leftCurb.receiveShadow=!0,this.group.add(this.leftCurb),this.rightCurb=new k(e,y.getPlastic(5099745,.25,0)),this.rightCurb.position.set(we/2+.3,.175,0),this.rightCurb.receiveShadow=!0,this.group.add(this.rightCurb);const n=new Sn(8,Me);n.rotateX(-Math.PI/2),this.leftSidewalk=new k(n,y.getPlastic(16775620,.45,0)),this.leftSidewalk.position.set(-we/2-4.3,-.01,0),this.leftSidewalk.receiveShadow=!0,this.group.add(this.leftSidewalk),this.rightSidewalk=new k(n,y.getPlastic(16775620,.45,0)),this.rightSidewalk.position.set(we/2+4.3,-.01,0),this.rightSidewalk.receiveShadow=!0,this.group.add(this.rightSidewalk);const i=new Sn(80,Me);i.rotateX(-Math.PI/2),this.leftLandscape=new k(i,y.getPlastic(8505220,.5,0)),this.leftLandscape.position.set(-we/2-48,-.04,0),this.leftLandscape.receiveShadow=!0,this.group.add(this.leftLandscape),this.rightLandscape=new k(i,y.getPlastic(8505220,.5,0)),this.rightLandscape.position.set(we/2+48,-.04,0),this.rightLandscape.receiveShadow=!0,this.group.add(this.rightLandscape);const r=new Sn(75,Me);r.rotateX(-Math.PI/2),this.oceanMesh=new k(r,y.getPlastic(45311,.08,0)),this.oceanMesh.position.set(we/2+45.5,-.02,0),this.oceanMesh.receiveShadow=!0,this.group.add(this.oceanMesh);const o=y.getPlastic(3622735,.4,0),a=y.getPlastic(16777215,.15,0),c=new Ue(.24,.04,1.8),l=new Ue(we-.2,.02,.12),h=new mt(.18,.18,.08,10),u=y.getPlastic(16777215,.2,0);for(let d=-Me/2+2;d<Me/2;d+=3.6){const f=new k(l,o);f.position.set(0,.01,d),f.receiveShadow=!0,this.group.add(f),[-3.2/2,xn[2]/2].forEach(g=>{const v=new k(c,a);v.position.set(g,.025,d),v.receiveShadow=!0,this.group.add(v)}),[-we/2-.3,we/2+.3].forEach(g=>{const v=new k(h,u);v.position.set(g,.38,d),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v)})}}init(t,e,n,i=!1,r=1){this.chunkIndex=t,this.biome=e,this.group.position.set(0,0,n);const o=Li.getBiome(e);this.roadMesh.material=y.getPlastic(o.roadColor,.35,0),this.leftCurb.material=y.getPlastic(o.curbColor,.25,0),this.rightCurb.material=y.getPlastic(o.curbColor,.25,0),this.leftSidewalk.material=y.getPlastic(o.sidewalkColor,.45,0),this.rightSidewalk.material=y.getPlastic(o.sidewalkColor,.45,0);const a=y.getPlastic(o.groundColor,.45,0);this.leftLandscape.material=a,this.rightLandscape.material=a;const c=e==="boardwalk"||e==="pier";this.oceanMesh.visible=c,e==="boardwalk"&&(this.rightSidewalk.material=y.getPlastic(16774557,.45,0),this.rightLandscape.material=y.getPlastic(16769154,.45,0)),this.clearDynamicObjects();let l=this.chunkIndex*12;for(let h=-Me/2+3.6;h<=Me/2-3.6;h+=7.2){const u=o.buildSceneryProp("left",l++),d=-we/2-(l%2===0?3.8:2.6);u.position.set(d,0,h),this.sceneryGroup.add(u);const f=o.buildSceneryProp("right",l++),g=we/2+(l%2===0?3.8:2.6);f.position.set(g,0,h),this.sceneryGroup.add(f)}for(let h=-Me/2+7.2;h<=Me/2-7.2;h+=14.4){const u=o.buildWideBackdrop("left",l++);u.position.set(-we/2-24,0,h),this.sceneryGroup.add(u);const d=o.buildWideBackdrop("right",l++),f=e==="boardwalk"?32:24;d.position.set(we/2+f,0,h),this.sceneryGroup.add(d)}i||this.populateObstaclesAndPickups(r)}populateObstaclesAndPickups(t=1){[-Me/4,Me/4].forEach(n=>{const i=Math.floor(Math.random()*3),r=this.selectRandomObstacle(t);if(this.spawnObstacle(r,i,n),t>=3&&Math.random()<.45){const a=[0,1,2].filter(h=>h!==i),c=a[Math.floor(Math.random()*a.length)],l=t>=4?"laser_gate":"low_barrier";this.spawnObstacle(l,c,n)}[0,1,2].filter(a=>a!==i).forEach(a=>{if(Math.random()<.8){const c=this.selectRandomPickup();this.spawnPickup(c,a,n+(Math.random()-.5)*4)}})})}selectRandomObstacle(t=1){const e=Math.random();return t===1?e<.35?"low_barrier":e<.65?"high_arch":e<.85?"crate_stack":"traffic_cone":t===2?e<.25?"low_barrier":e<.45?"high_arch":e<.65?"crate_stack":e<.82?"robot_patrol":"roadblock":t===3?e<.22?"low_barrier":e<.42?"laser_gate":e<.62?"robot_patrol":e<.8?"roadblock":"crate_stack":e<.28?"laser_gate":e<.52?"robot_patrol":e<.76?"roadblock":e<.88?"low_barrier":"crate_stack"}selectRandomPickup(){const t=Math.random();return t<.65?"star_coin":t<.78?"diamond_gem":t<.88?"vehicle_key":t<.94?"toy_wrench":"coin_magnet"}spawnObstacle(t,e,n){const i=new At,r=xn[e];i.position.set(r,0,n);let o=!1;const a=new L(-.75,0,-.25),c=new L(.75,.75,.25);if(t==="low_barrier"){const h=y.getPlastic(16732754,.2,0),u=y.WhitePlastic,d=y.createBlock(2,.25,.18,h);d.position.y=.65,i.add(d),[-.85,.85].forEach(f=>{const g=y.createBlock(.18,.7,.18,u);g.position.set(f,.35,0),i.add(g)}),a.set(-.75,0,-.2),c.set(.75,.7,.2),o=!0}else if(t==="high_arch"){const h=y.getPlastic(8146431,.2,0),u=y.getPlastic(16771899,.2,0),d=y.getPlastic(16717636,.2,0),f=y.createBlock(2.2,.55,.25,u);f.position.y=1.45,i.add(f),[-.6,0,.6].forEach(g=>{const v=y.createBlock(.2,.57,.27,d);v.position.set(g,1.45,0),i.add(v)}),[-1.25,1.25].forEach(g=>{const v=y.createBlock(.22,1.8,.22,h);v.position.set(g,.9,0),i.add(v)}),a.set(-.75,1.05,-.25),c.set(.75,1.8,.25),o=!0}else if(t==="crate_stack"){const h=y.getPlastic(9268835,.35,0),u=y.createBlock(.85,.85,.85,h);u.position.y=.42,y.addStuds(u,.75,.75,.42,h,2,2),i.add(u);const d=y.createBlock(.65,.65,.65,h);d.position.set(.08,1.15,.04),i.add(d),a.set(-.45,0,-.35),c.set(.45,1.25,.35),o=!0}else if(t==="traffic_cone"){const h=y.getPlastic(16739584,.2,0),u=y.WhitePlastic;[-.4,.4].forEach(d=>{const f=y.createBlock(.45,.08,.45,h);f.position.set(d,.04,0),i.add(f);const g=new k(new se(.22,.75,12),h);g.position.set(d,.42,0),i.add(g);const v=new k(new mt(.14,.17,.15,12),u);v.position.set(d,.38,0),i.add(v)}),a.set(-.45,0,-.25),c.set(.45,.65,.25),o=!0}else if(t==="laser_gate"){const h=y.getPlastic(2171169,.2,0),u=y.getPlastic(16717636,.1,0);[-1.25,1.25].forEach(f=>{const g=y.createBlock(.22,2.2,.22,h);g.position.set(f,1.1,0),i.add(g);const v=new k(new $t(.16,8,8),y.getPlastic(58879,.1,0));v.position.set(f,1.35,0),i.add(v)});const d=y.createBlock(2.2,.16,.16,u);d.position.y=1.35,i.add(d),a.set(-.75,1,-.25),c.set(.75,1.65,.25),o=!0}else if(t==="robot_patrol"){const h=y.getPlastic(16766464,.2,0),u=y.getPlastic(58879,.2,0),d=new k(new mt(.55,.65,.45,12),h);d.position.y=.32,i.add(d),[-.55,.55].forEach(g=>{const v=new k(new mt(.24,.24,.18,10),u);v.position.set(g,.16,.3),v.rotation.x=Math.PI/2,i.add(v)});const f=new k(new $t(.2,10,10),y.getPlastic(16717636,.1,0));f.position.y=.65,i.add(f),a.set(-.45,0,-.45),c.set(.45,.75,.45),o=!0}else{const h=y.getPlastic(13959168,.25,0),u=y.WhitePlastic,d=y.createBlock(2.2,1.1,.55,h);d.position.y=.55,i.add(d),[-.55,0,.55].forEach(f=>{const g=y.createBlock(.28,1.12,.57,u);g.position.set(f,.55,0),i.add(g)}),a.set(-.85,0,-.3),c.set(.85,1.15,.3),o=!1}this.group.add(i);const l=new An;this.obstacles.push({mesh:i,type:t,lane:e,z:n,boundingBox:l,hitboxOffsetMin:a,hitboxOffsetMax:c,isSmashed:!1,canSmash:o,isMoving:t==="robot_patrol",patrolBaseX:r,patrolPhase:Math.random()*Math.PI*2})}spawnPickup(t,e,n){const i=new At,r=xn[e];if(i.position.set(r,1,n),t==="star_coin"){const a=new mt(.42,.42,.14,16);a.rotateX(Math.PI/2);const c=new k(a,y.GoldStar);c.castShadow=!0,i.add(c);const l=new k(new se(.2,.18,5),y.getPlastic(16771899,.1,0));l.position.z=.08,i.add(l)}else if(t==="diamond_gem"){const a=new k(new zr(.45,0),y.CyanGem);a.scale.set(1,1.4,1),a.castShadow=!0,i.add(a)}else if(t==="vehicle_key"){const a=new k(new Re(.35,.09,10,16),y.GoldStar);i.add(a);const c=y.createBlock(.1,.45,.08,y.GoldStar);c.position.y=-.45,i.add(c);const l=y.createBlock(.2,.12,.08,y.GoldStar);l.position.set(.08,-.55,0),i.add(l)}else if(t==="heart_shield"){const a=y.getPlastic(16728193,.1,0),c=new k(new $t(.22,10,10),a);c.position.set(-.14,.14,0),i.add(c);const l=new k(new $t(.22,10,10),a);l.position.set(.14,.14,0),i.add(l);const h=new k(new se(.35,.5,12),a);h.rotation.z=Math.PI,h.position.set(0,-.12,0),i.add(h)}else{const a=y.Chrome,c=new k(new Re(.25,.08,8,12,Math.PI*1.5),a);i.add(c);const l=y.createBlock(.12,.55,.08,a);l.position.y=-.38,i.add(l)}this.group.add(i);const o=new An;this.pickups.push({mesh:i,type:t,lane:e,z:n,boundingBox:o,isCollected:!1})}updateBoundingBoxes(){const t=new L;for(const e of this.obstacles)e.isSmashed||(e.mesh.updateMatrixWorld(!0),e.mesh.getWorldPosition(t),e.boundingBox.min.copy(t).add(e.hitboxOffsetMin),e.boundingBox.max.copy(t).add(e.hitboxOffsetMax));for(const e of this.pickups)e.isCollected||(e.mesh.updateMatrixWorld(!0),e.boundingBox.setFromObject(e.mesh))}updateVisuals(t){for(const e of this.pickups)e.isCollected||(e.mesh.rotation.y+=t*3.5,e.mesh.position.y=1+Math.sin(performance.now()*.003+e.z)*.15);for(const e of this.obstacles)if(!e.isSmashed&&e.isMoving&&typeof e.patrolBaseX=="number"){const n=e.patrolPhase||0;e.mesh.position.x=e.patrolBaseX+Math.sin(performance.now()*.0025+n)*.55,e.mesh.rotation.y+=t*3}}clearDynamicObjects(){for(;this.sceneryGroup.children.length>0;)this.sceneryGroup.remove(this.sceneryGroup.children[0]);for(const t of this.obstacles)this.group.remove(t.mesh);this.obstacles=[];for(const t of this.pickups)this.group.remove(t.mesh);this.pickups=[]}}class $m{group=new At;clouds=[];sunGroup=new At;moonGroup=new At;starsGroup=new At;weatherPoints;weatherPositions;weatherVelocities;weatherCount=280;weatherMaterial;currentBiome="boardwalk";constructor(){this.buildSun(),this.buildMoon(),this.buildStars(),this.buildClouds(),this.buildWeatherParticles(),this.group.add(this.sunGroup),this.group.add(this.moonGroup),this.group.add(this.starsGroup),this.group.add(this.weatherPoints)}buildSun(){const t=y.getPlastic(16766287,.1,0),e=new k(new $t(4.5,16,16),t);this.sunGroup.add(e);const n=y.getPlastic(16771584,.1,0);for(let i=0;i<8;i++){const r=i*Math.PI*2/8,o=new k(new Ue(1.2,3.2,.8),n);o.position.set(Math.cos(r)*6.5,Math.sin(r)*6.5,0),o.rotation.z=r+Math.PI/2,this.sunGroup.add(o)}this.sunGroup.position.set(38,48,85)}buildMoon(){const t=y.getPlastic(16775620,.1,0),e=new k(new Re(3.6,1.2,12,24,Math.PI*1.3),t);e.rotation.z=.5,this.moonGroup.add(e),this.moonGroup.position.set(-36,46,80),this.moonGroup.visible=!1}buildStars(){const t=new Pe,e=120,n=new Float32Array(e*3);for(let r=0;r<e;r++)n[r*3]=(Math.random()-.5)*160,n[r*3+1]=30+Math.random()*40,n[r*3+2]=-20+Math.random()*160;t.setAttribute("position",new Ve(n,3));const i=new wr({color:16777215,size:1.6,transparent:!0,opacity:.85});this.starsGroup.add(new xo(t,i)),this.starsGroup.visible=!1}buildClouds(){const t=y.getPlastic(16777215,.35,0),e=[{x:-45,y:32,z:20,scale:1.4,speed:1.2},{x:35,y:36,z:45,scale:1.6,speed:.9},{x:-25,y:28,z:70,scale:1.2,speed:1.5},{x:42,y:30,z:95,scale:1.5,speed:1.1},{x:-38,y:34,z:125,scale:1.7,speed:.8},{x:28,y:32,z:150,scale:1.3,speed:1.3},{x:-18,y:38,z:175,scale:1.5,speed:1},{x:48,y:35,z:5,scale:1.4,speed:1.4}];for(const n of e){const i=new At,r=5;for(let o=0;o<r;o++){const a=1.8+Math.random()*1.2,c=new k(new $t(a,8,8),t);c.position.set((o-2)*1.8,(Math.random()-.5)*.8,(Math.random()-.5)*1.2),c.scale.set(1.1,.8,.9),i.add(c)}i.scale.setScalar(n.scale),i.position.set(n.x,n.y,n.z),this.group.add(i),this.clouds.push({group:i,baseX:n.x,baseY:n.y,baseZ:n.z,speed:n.speed})}}buildWeatherParticles(){const t=new Pe;this.weatherPositions=new Float32Array(this.weatherCount*3),this.weatherVelocities=new Float32Array(this.weatherCount*3);for(let e=0;e<this.weatherCount;e++)this.resetParticle(e,!0);t.setAttribute("position",new Ve(this.weatherPositions,3)),this.weatherMaterial=new wr({color:16777215,size:.5,transparent:!0,opacity:.75}),this.weatherPoints=new xo(t,this.weatherMaterial)}resetParticle(t,e=!1){const n=t*3;this.weatherPositions[n]=(Math.random()-.5)*44,this.weatherPositions[n+1]=e?Math.random()*22:20+Math.random()*5,this.weatherPositions[n+2]=-15+Math.random()*75,this.weatherVelocities[n]=(Math.random()-.5)*.8,this.weatherVelocities[n+1]=-(4+Math.random()*4),this.weatherVelocities[n+2]=(Math.random()-.5)*.5}setBiome(t){this.currentBiome=t,t==="boardwalk"?(this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1):t==="plaza"?(this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1):t==="forest"?(this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(16777215),this.weatherMaterial.opacity=.85,this.weatherMaterial.size=.65):t==="cyber"?(this.sunGroup.visible=!1,this.moonGroup.visible=!0,this.starsGroup.visible=!0,this.weatherPoints.visible=!0,this.weatherMaterial.color.setHex(58879),this.weatherMaterial.opacity=.55,this.weatherMaterial.size=.45):(this.sunGroup.visible=!0,this.moonGroup.visible=!1,this.starsGroup.visible=!1,this.weatherPoints.visible=!1)}update(t,e){for(const n of this.clouds){n.group.position.x+=n.speed*e*.8,n.group.position.x>65&&(n.group.position.x=-65);const i=(n.baseZ-t%160+160)%160;n.group.position.z=t+i-20}if(this.sunGroup.position.set(28,34,t+75),this.sunGroup.rotation.z+=e*.15,this.moonGroup.position.set(-32,34,t+75),this.starsGroup.position.z=t,this.weatherPoints.visible){const n=this.weatherPoints.geometry.attributes.position.array;for(let i=0;i<this.weatherCount;i++){const r=i*3;n[r]+=this.weatherVelocities[r]*e,n[r+1]+=this.weatherVelocities[r+1]*e,n[r+2]+=this.weatherVelocities[r+2]*e,(n[r+1]<.1||n[r+2]<t-10)&&(n[r]=(Math.random()-.5)*44,n[r+1]=18+Math.random()*4,n[r+2]=t+Math.random()*65)}this.weatherPoints.geometry.attributes.position.needsUpdate=!0}}}class Zm{group;skyManager=new $m;chunks=[];numChunks=10;currentBiome="boardwalk";chunkCounter=0;sceneRenderer;particleSystem;audioManager;gameState;floatingText;constructor(t,e,n,i,r){this.sceneRenderer=t,this.particleSystem=e,this.audioManager=n,this.gameState=i,this.floatingText=r,this.group=new At,this.group.add(this.skyManager.group);for(let o=0;o<this.numChunks;o++){const a=new Ym;this.chunks.push(a),this.group.add(a.group)}}reset(t="boardwalk"){this.currentBiome=t,this.chunkCounter=0;const e=Li.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(e.skyColor,e.groundColor,e.fogColor),this.skyManager.setBiome(this.currentBiome);for(let n=0;n<this.numChunks;n++){const i=this.chunks[n],r=-n*Me;i.init(this.chunkCounter++,this.currentBiome,r,n<=1)}}getCurrentBiomeName(){return Li.getBiome(this.currentBiome).name}update(t,e){const i=this.gameState.speed*e;for(const a of this.chunks)a.group.position.z+=i;this.updateBiomeProgression(),this.recycleChunks();for(const a of this.chunks)a.updateVisuals(e),a.updateBoundingBoxes();const r=this.checkCollisions(t),o=this.gameState.mode==="stage"&&this.gameState.checkStageCompletion();return this.skyManager.update(t.z,e),{crashed:r,stageWon:o}}updateBiomeProgression(){if(this.gameState.mode==="stage"){const e=this.gameState.getActiveStage();if(e&&e.biome!==this.currentBiome){this.currentBiome=e.biome;const n=Li.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(n.skyColor,n.groundColor,n.fogColor),this.skyManager.setBiome(this.currentBiome)}return}const t=this.gameState.getCurrentLevelDef().biome;if(t!==this.currentBiome){this.currentBiome=t;const e=Li.getBiome(this.currentBiome);this.sceneRenderer.setSkyColor(e.skyColor,e.groundColor,e.fogColor),this.skyManager.setBiome(this.currentBiome)}}recycleChunks(){for(const t of this.chunks)if(t.group.position.z>Me){let e=0;for(const i of this.chunks)i.group.position.z<e&&(e=i.group.position.z);const n=e-Me;t.init(this.chunkCounter++,this.currentBiome,n,!1,this.gameState.currentLevel)}}checkCollisions(t){const e=t.getBoundingBox(),n=t.group.position,i=t.mode==="in_vehicle",r=wn[t.vehicleId],o=un[t.characterId],a=6,c=i&&r.hasMagnetAura||t.magnetTimer>0,l=a*o.magnetRangeBonus;for(const h of this.chunks)if(!(Math.abs(h.group.position.z-n.z)>Me*1.2)){for(const u of h.pickups){if(u.isCollected)continue;const d=new L;if(u.mesh.getWorldPosition(d),c&&u.type==="star_coin"&&d.distanceTo(n)<l){const g=h.group.worldToLocal(n.clone());u.mesh.position.lerp(g,.22)}if(e.intersectsBox(u.boundingBox))if(u.isCollected=!0,u.mesh.visible=!1,u.type==="star_coin"){this.gameState.addCoins(1),this.audioManager.playCoinSound(),this.particleSystem.emitPickupSparkles(d,16766720);const f=15*this.gameState.multiplier;this.floatingText.spawn(d,`+${f}`,"#FFD700","⭐")}else u.type==="diamond_gem"?(this.gameState.addGems(1),this.audioManager.playGemSound(),this.particleSystem.emitPickupSparkles(d,58879),this.floatingText.spawn(d,"+100","#00E5FF","💎",!0)):u.type==="vehicle_key"?(t.mountVehicle(),this.particleSystem.emitPickupSparkles(d,16766287),this.floatingText.spawn(d,"MOUNT RIDE!","#FF4081","🔑",!0)):u.type==="heart_shield"?(t.hasShield=!0,this.audioManager.playGemSound(),this.particleSystem.emitPickupSparkles(d,16728193),this.floatingText.spawn(d,"SHIELD ON!","#FF4081","💖",!0)):u.type==="toy_wrench"&&(i&&(t.vehicleDuration=Math.min(t.maxVehicleDuration,t.vehicleDuration+10)),this.audioManager.playMountSound(),this.particleSystem.emitPickupSparkles(d,58998),this.floatingText.spawn(d,"+10s FUEL","#00E676","🔧"))}for(const u of h.obstacles)if(!u.isSmashed&&e.intersectsBox(u.boundingBox)){const d=new L;if(u.mesh.getWorldPosition(d),u.type==="low_barrier"&&(t.y>.45||t.movementState==="jumping")||(u.type==="high_arch"||u.type==="laser_gate")&&(t.movementState==="sliding"||t.y<.2&&e.max.y<u.boundingBox.min.y))continue;if(i){if(t.turboTimer>0){u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),this.particleSystem.emitSmashDebris(d),this.floatingText.spawn(d,"TURBO SMASH! +100","#FFEA00","⚡",!0);continue}if(u.type==="crate_stack"||u.type==="traffic_cone"){u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),this.particleSystem.emitSmashDebris(d),this.floatingText.spawn(d,"+50","#FF7043","💥");continue}u.isSmashed=!0,u.mesh.visible=!1,this.audioManager.playCrashSound(),this.particleSystem.emitSmashDebris(d,[13959168,16771899,16728193,58879]),this.floatingText.spawn(d,"CRASH EJECT!","#FF1744","💥",!0),t.dismountVehicle(!0);continue}if(u.type==="crate_stack"||u.type==="traffic_cone"){u.isSmashed=!0,u.mesh.visible=!1,this.gameState.addSmash(),this.audioManager.playSmashSound(),this.particleSystem.emitSmashDebris(d),this.floatingText.spawn(d,"+30","#FF7043","💥");continue}if(t.hasShield){t.hasShield=!1,u.isSmashed=!0,u.mesh.visible=!1,this.audioManager.playSmashSound(),this.particleSystem.emitSmashDebris(d,[16728193,16777215]),this.floatingText.spawn(d,"SHIELD SAVED!","#FF4081","💖");continue}return this.audioManager.playCrashSound(),this.particleSystem.emitSmashDebris(d,[16732754,2503224]),t.movementState="crashed",!0}}return!1}}class Jm{gameState;player;onConfirmCallback;selectedCharacter;selectedVehicle;selectedPalette;constructor(t,e,n){this.gameState=t,this.player=e,this.onConfirmCallback=n,this.selectedCharacter=t.characterId,this.selectedVehicle=t.vehicleId,this.selectedPalette=t.paletteId,this.initEventListeners()}activeTab="characters";initEventListeners(){const t=document.getElementById("tab-characters"),e=document.getElementById("tab-vehicles"),n=document.getElementById("roster-characters"),i=document.getElementById("roster-vehicles");t?.addEventListener("click",()=>{this.activeTab="characters",t.classList.add("active"),e?.classList.remove("active"),n?.classList.remove("hidden"),i?.classList.add("hidden"),this.syncShowcase()}),e?.addEventListener("click",()=>{this.activeTab="vehicles",e.classList.add("active"),t?.classList.remove("active"),i?.classList.remove("hidden"),n?.classList.add("hidden"),this.syncShowcase()});const r=document.querySelectorAll("#roster-characters .roster-card");r.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");h&&un[h]&&(this.selectedCharacter=h,r.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase())})});const o=document.querySelectorAll("#roster-vehicles .roster-card");o.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-id");h&&wn[h]&&(this.selectedVehicle=h,o.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase())})});const a=document.querySelectorAll(".swatch-btn");a.forEach(l=>{l.addEventListener("click",()=>{const h=l.getAttribute("data-palette");h&&(this.selectedPalette=h,a.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.syncShowcase())})}),document.getElementById("btn-select-confirm")?.addEventListener("click",()=>{this.confirmLoadout()})}open(){this.selectedCharacter=this.gameState.characterId,this.selectedVehicle=this.gameState.vehicleId,this.selectedPalette=this.gameState.paletteId,document.querySelectorAll("#roster-characters .roster-card").forEach(t=>{t.getAttribute("data-id")===this.selectedCharacter?t.classList.add("active"):t.classList.remove("active")}),document.querySelectorAll("#roster-vehicles .roster-card").forEach(t=>{t.getAttribute("data-id")===this.selectedVehicle?t.classList.add("active"):t.classList.remove("active")}),document.querySelectorAll(".swatch-btn").forEach(t=>{t.getAttribute("data-palette")===this.selectedPalette?t.classList.add("active"):t.classList.remove("active")}),this.syncShowcase()}syncShowcase(){this.player.setCustomization(this.selectedCharacter,this.selectedVehicle,this.selectedPalette),this.player.setShowcasePreview(this.activeTab==="vehicles")}confirmLoadout(){this.player.setShowcasePreview(!1),this.gameState.characterId=this.selectedCharacter,this.gameState.vehicleId=this.selectedVehicle,this.gameState.paletteId=this.selectedPalette,this.gameState.savePersistedData();const t=document.getElementById("menu-selected-avatar");t&&(t.innerText=`Avatar: ${un[this.selectedCharacter].name}`);const e=document.getElementById("menu-selected-vehicle");e&&(e.innerText=`Ride: ${wn[this.selectedVehicle].name}`),this.onConfirmCallback()}}class Km{gameState;player;audioManager;garageView;hudScreen;mainMenu;garageScreen;stageScreen;instructionsScreen;gameOverScreen;pauseScreen;btnSound;btnPause;biomeBanner;starCount;gemCount;distanceVal;speedMeter;multiplierBadge;missionCard;missionTitle;missionProgressBar;missionFraction;vehicleMeterContainer;vehicleMeterName;vehicleMeterAbility;vehicleMeterFill;vehicleTimerText;hudLevelBadge;hudLevelName;levelProgressBar;levelFraction;levelUpBanner;levelUpSub;actionPrompt;menuBestDistance;menuBestScore;onStartGame=()=>{};onPauseGame=()=>{};onResumeGame=()=>{};onRestartGame=()=>{};onQuitToMenu=()=>{};constructor(t,e,n){this.gameState=t,this.player=e,this.audioManager=n,this.cacheDOMElements(),this.garageView=new Jm(this.gameState,this.player,()=>{this.closeGarage()}),this.bindEvents(),this.updateMenuStats()}cacheDOMElements(){this.hudScreen=document.getElementById("hud-screen"),this.mainMenu=document.getElementById("main-menu"),this.garageScreen=document.getElementById("garage-screen"),this.stageScreen=document.getElementById("stage-screen"),this.instructionsScreen=document.getElementById("instructions-screen"),this.gameOverScreen=document.getElementById("game-over-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.btnSound=document.getElementById("btn-sound"),this.btnPause=document.getElementById("btn-pause"),this.biomeBanner=document.getElementById("biome-banner"),this.starCount=document.getElementById("star-count"),this.gemCount=document.getElementById("gem-count"),this.distanceVal=document.getElementById("distance-value"),this.speedMeter=document.getElementById("speed-meter"),this.multiplierBadge=document.getElementById("multiplier-badge"),this.hudLevelBadge=document.getElementById("hud-level-badge"),this.hudLevelName=document.getElementById("hud-level-name"),this.levelProgressBar=document.getElementById("level-progress-bar"),this.levelFraction=document.getElementById("level-fraction"),this.levelUpBanner=document.getElementById("level-up-banner"),this.levelUpSub=document.getElementById("level-up-sub"),this.missionCard=document.getElementById("mission-card"),this.missionTitle=document.getElementById("mission-title"),this.missionProgressBar=document.getElementById("mission-progress-bar"),this.missionFraction=document.getElementById("mission-fraction"),this.vehicleMeterContainer=document.getElementById("vehicle-meter-container"),this.vehicleMeterName=document.getElementById("vehicle-meter-name"),this.vehicleMeterAbility=document.getElementById("vehicle-meter-ability"),this.vehicleMeterFill=document.getElementById("vehicle-meter-fill"),this.vehicleTimerText=document.getElementById("vehicle-timer-text"),this.actionPrompt=document.getElementById("action-prompt"),this.menuBestDistance=document.getElementById("menu-best-distance"),this.menuBestScore=document.getElementById("menu-best-score")}bindEvents(){this.btnSound.addEventListener("click",()=>{const t=this.audioManager.toggleMute();this.btnSound.innerText=t?"🔊":"🔇"}),this.btnPause.addEventListener("click",()=>{this.showPauseModal()}),document.getElementById("btn-play-endless")?.addEventListener("click",()=>{this.onStartGame("endless")}),document.getElementById("btn-play-stages")?.addEventListener("click",()=>{this.stageScreen.classList.remove("hidden")}),document.querySelectorAll(".stage-item .btn-start-stage").forEach((t,e)=>{t.addEventListener("click",()=>{this.stageScreen.classList.add("hidden"),this.onStartGame("stage",e)})}),document.getElementById("btn-close-stages")?.addEventListener("click",()=>{this.stageScreen.classList.add("hidden")}),document.getElementById("btn-open-garage")?.addEventListener("click",()=>{this.openGarage()}),document.getElementById("btn-close-garage")?.addEventListener("click",()=>{this.closeGarage()}),document.getElementById("btn-how-to-play")?.addEventListener("click",()=>{this.instructionsScreen.classList.remove("hidden")}),document.getElementById("btn-close-instructions")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.getElementById("btn-instructions-gotit")?.addEventListener("click",()=>{this.instructionsScreen.classList.add("hidden")}),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-char");e&&un[e]&&(this.gameState.characterId=e,this.gameState.savePersistedData(),this.player.setCustomization(e,this.gameState.vehicleId,this.gameState.paletteId),this.player.setShowcasePreview(!1),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-veh");e&&wn[e]&&(this.gameState.vehicleId=e,this.gameState.savePersistedData(),this.player.setCustomization(this.gameState.characterId,e,this.gameState.paletteId),this.player.setShowcasePreview(!0),this.audioManager.playCoinSound(),this.updateMenuStats())})}),document.getElementById("btn-resume")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onResumeGame()}),document.getElementById("btn-restart")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-quit")?.addEventListener("click",()=>{this.pauseScreen.classList.add("hidden"),this.onQuitToMenu()}),document.getElementById("btn-retry")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onRestartGame()}),document.getElementById("btn-back-hub")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu()}),document.getElementById("btn-go-garage")?.addEventListener("click",()=>{this.gameOverScreen.classList.add("hidden"),this.onQuitToMenu(),this.openGarage()})}openGarage(){this.mainMenu.classList.add("hidden"),this.garageScreen.classList.remove("hidden"),this.garageView.open()}closeGarage(){this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.updateMenuStats()}showMainMenu(){this.hudScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.stageScreen.classList.add("hidden"),this.instructionsScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.btnPause.classList.add("hidden"),this.updateMenuStats()}showInGameHUD(){this.mainMenu.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.garageScreen.classList.add("hidden"),this.hudScreen.classList.remove("hidden"),this.btnPause.classList.remove("hidden")}showPauseModal(){this.pauseScreen.classList.remove("hidden"),this.onPauseGame()}resumeGame(){this.pauseScreen.classList.add("hidden"),this.onResumeGame()}showGameOverModal(t){this.hudScreen.classList.add("hidden"),this.gameOverScreen.classList.remove("hidden");const e=document.getElementById("game-over-badge"),n=document.getElementById("game-over-title"),i=document.getElementById("new-high-score-banner");t.stageCompleted?(e&&(e.innerText="STAGE COMPLETE!"),n&&(n.innerText="VICTORY!")):(e&&(e.innerText="CRASHED!"),n&&(n.innerText="RUN FINISHED")),document.getElementById("final-distance").innerText=`${t.distance}m`,document.getElementById("final-coins").innerText=`${t.starCoins}`,document.getElementById("final-smash").innerText=`${t.smashes}`,document.getElementById("final-total-score").innerText=`${t.score}`,i&&(t.isNewHighScore||t.isNewHighDistance?i.classList.remove("hidden"):i.classList.add("hidden"))}updateHUD(t){this.biomeBanner.innerText=t,this.starCount.innerText=`${this.gameState.starCoins}`,this.gemCount.innerText=`${this.gameState.diamondGems}`,this.distanceVal.innerHTML=`${Math.floor(this.gameState.distance)} <small>m</small>`,this.speedMeter.innerText=`${Math.floor(this.gameState.speed)} m/s`,this.multiplierBadge.innerText=`${this.gameState.multiplier}x`;const e=this.gameState.getCurrentLevelDef();this.hudLevelBadge&&(this.hudLevelBadge.innerText=`LVL ${this.gameState.currentLevel}`),this.hudLevelName&&(this.hudLevelName.innerText=e.name);const n=Math.min(100,Math.max(0,this.gameState.levelDistance/e.targetDistance*100));if(this.levelProgressBar&&(this.levelProgressBar.style.width=`${n}%`),this.levelFraction&&(this.levelFraction.innerText=`${Math.floor(this.gameState.levelDistance)} / ${e.targetDistance}m`),this.player.mode==="in_vehicle"){this.vehicleMeterContainer.classList.remove("hidden");const i=wn[this.player.vehicleId];this.vehicleMeterName.innerText=i.name.toUpperCase(),this.vehicleMeterAbility.innerText=i.ability.toUpperCase();const r=Math.max(0,Math.min(100,this.player.vehicleDuration/this.player.maxVehicleDuration*100));this.vehicleMeterFill.style.width=`${r}%`,this.vehicleTimerText.innerText=`${Math.max(0,this.player.vehicleDuration).toFixed(1)}s`}else this.vehicleMeterContainer.classList.add("hidden");if(this.gameState.mode==="stage"){this.missionCard.classList.remove("hidden");const i=this.gameState.getActiveStage();if(i){this.missionTitle.innerText=i.name;const r=Math.min(1,(this.gameState.distance/i.targetDistance+this.gameState.starCoins/i.targetCoins+(i.targetSmashes>0?this.gameState.smashes/i.targetSmashes:1))/(i.targetSmashes>0?3:2));this.missionProgressBar.style.width=`${r*100}%`,this.missionFraction.innerText=`${Math.floor(this.gameState.distance)}m / ${i.targetDistance}m`}}else this.missionCard.classList.add("hidden")}showLevelUpAnnouncement(t,e,n,i){if(!this.levelUpBanner)return;const r=this.levelUpBanner.querySelector(".level-up-title");r&&(r.textContent=`🎉 LEVEL ${t}: ${e.toUpperCase()}! 🎉`),this.levelUpSub&&(this.levelUpSub.textContent=`${n} (+${i}⭐ Bonus)`),this.levelUpBanner.classList.remove("hidden"),setTimeout(()=>{this.levelUpBanner.classList.add("hidden")},2400)}showActionPrompt(t){this.actionPrompt.innerText=t,this.actionPrompt.classList.remove("hidden"),setTimeout(()=>{this.actionPrompt.classList.add("hidden")},1200)}updateMenuStats(){this.menuBestDistance.innerText=`${Math.floor(this.gameState.bestDistance)}m`,this.menuBestScore.innerText=`${this.gameState.bestScore}`;const t=document.getElementById("menu-selected-avatar");t&&(t.innerText=`Avatar: ${un[this.gameState.characterId].name}`);const e=document.getElementById("menu-selected-vehicle");e&&(e.innerText=`Ride: ${wn[this.gameState.vehicleId].name}`),document.querySelectorAll("#quick-avatar-chips .quick-chip").forEach(n=>{n.getAttribute("data-char")===this.gameState.characterId?n.classList.add("active"):n.classList.remove("active")}),document.querySelectorAll("#quick-vehicle-chips .quick-chip").forEach(n=>{n.getAttribute("data-veh")===this.gameState.vehicleId?n.classList.add("active"):n.classList.remove("active")})}}class jm{container;camera;items=[];constructor(t){this.camera=t;let e=document.getElementById("floating-scores-container");if(!e){e=document.createElement("div"),e.id="floating-scores-container",e.className="floating-scores-container";const n=document.getElementById("ui-container");n?n.appendChild(e):document.body.appendChild(e)}this.container=e}spawn(t,e,n="#FFD700",i="",r=!1){const o=document.createElement("div");o.className=`floating-score ${r?"major-score":""}`,o.style.color=n,i?o.innerHTML=`<span class="score-icon">${i}</span> <span class="score-txt">${e}</span>`:o.innerText=e,this.container.appendChild(o),this.items.push({element:o,worldPos:t.clone().add(new L(0,.8,0)),velocity:new L((Math.random()-.5)*.8,3.2+Math.random()*1.2,0),life:0,maxLife:r?1.4:.9})}update(t){const e=window.innerWidth,n=window.innerHeight,i=new L;for(let r=this.items.length-1;r>=0;r--){const o=this.items[r];if(o.life+=t,o.life>=o.maxLife){o.element.remove(),this.items.splice(r,1);continue}if(o.worldPos.addScaledVector(o.velocity,t),o.velocity.y*=.94,i.copy(o.worldPos).project(this.camera),i.z>1){o.element.style.display="none";continue}o.element.style.display="flex";const a=(i.x*.5+.5)*e,c=(-(i.y*.5)+.5)*n,l=o.life/o.maxLife,h=l<.2?.4+l/.2*.85:Math.max(.6,1.25-l*.6),u=l>.6?1-(l-.6)/.4:1;o.element.style.transform=`translate(-50%, -50%) translate3d(${a}px, ${c}px, 0) scale(${h})`,o.element.style.opacity=`${u}`}}clear(){for(const t of this.items)t.element.remove();this.items=[]}}class Qm{canvas;sceneRenderer;audioManager;inputManager;gameState;particleSystem;cameraController;player;trackManager;uiManager;floatingText;appState="menu";lastTime=0;crashTimer=0;isCrashing=!1;constructor(){this.canvas=document.getElementById("game-canvas"),this.sceneRenderer=new zm(this.canvas),this.audioManager=new Gm,this.inputManager=new Vm,this.gameState=new Hm,this.particleSystem=new Wm,this.cameraController=new Xm(this.sceneRenderer.camera),this.floatingText=new jm(this.sceneRenderer.camera),this.player=new qm(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId,this.particleSystem,this.audioManager),this.trackManager=new Zm(this.sceneRenderer,this.particleSystem,this.audioManager,this.gameState,this.floatingText),this.sceneRenderer.scene.add(this.trackManager.group),this.sceneRenderer.scene.add(this.player.group),this.sceneRenderer.scene.add(this.particleSystem.group),this.uiManager=new Km(this.gameState,this.player,this.audioManager),this.setupUIHandlers(),this.trackManager.reset("boardwalk"),this.lastTime=performance.now(),requestAnimationFrame(this.gameLoop.bind(this))}setupUIHandlers(){this.uiManager.onStartGame=(t,e)=>{this.gameState.mode=t,typeof e=="number"&&(this.gameState.currentStageIndex=e),this.startRun()},this.uiManager.onPauseGame=()=>{this.appState==="playing"&&(this.appState="paused",this.inputManager.setEnabled(!1),this.audioManager.pauseMusic(),this.audioManager.stopVehicleEngine())},this.uiManager.onResumeGame=()=>{this.appState==="paused"&&(this.appState="playing",this.inputManager.setEnabled(!0),this.audioManager.startMusic(),this.player.mode==="in_vehicle"&&this.audioManager.startVehicleEngine())},this.inputManager.onPauseToggle=()=>{this.appState==="playing"?this.uiManager.showPauseModal():this.appState==="paused"&&this.uiManager.resumeGame()},this.uiManager.onRestartGame=()=>{this.startRun()},this.uiManager.onQuitToMenu=()=>{this.appState="menu",this.inputManager.setEnabled(!1),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine(),this.player.reset(),this.trackManager.reset("boardwalk"),this.floatingText.clear(),this.uiManager.showMainMenu()}}startRun(){this.gameState.resetRun(),this.player.setCustomization(this.gameState.characterId,this.gameState.vehicleId,this.gameState.paletteId),this.player.reset();const t=this.gameState.mode==="stage"&&this.gameState.getActiveStage()?.biome||"boardwalk";this.trackManager.reset(t),this.particleSystem.clear(),this.floatingText.clear(),this.inputManager.clear(),this.inputManager.setEnabled(!0),this.appState="playing",this.isCrashing=!1,this.crashTimer=0,this.uiManager.showInGameHUD(),this.audioManager.startMusic()}gameLoop(t){requestAnimationFrame(this.gameLoop.bind(this));const e=Math.min((t-this.lastTime)*.001,.05);if(this.lastTime=t,this.appState==="menu"){const n=new L(0,0,0);this.player.group.position.set(0,0,0),this.cameraController.updateShowcase(n,e),this.particleSystem.update(e),this.sceneRenderer.render();return}if(this.appState==="paused"){this.sceneRenderer.render();return}if(this.appState==="playing"){let n=this.inputManager.popAction();for(;n;)n==="left"?this.player.moveLeft():n==="right"?this.player.moveRight():n==="jump"?this.player.jump():n==="slide"&&this.player.slide(),n=this.inputManager.popAction();this.gameState.updateDistanceAndSpeed(e,this.player.turboTimer>0?1.4:1);const i=this.gameState.checkLevelUp();i&&(this.audioManager.playLevelUpSound(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),this.floatingText.spawn(this.player.group.position,`+${i.rewardCoins} LEVEL UP!`,"#76FF03","🏆",!0),this.uiManager.showLevelUpAnnouncement(i.levelNumber,i.name,i.subtitle,i.rewardCoins)),this.player.update(e,this.gameState.speed);const{crashed:r,stageWon:o}=this.trackManager.update(this.player,e),a=this.player.mode==="in_vehicle",c=this.player.turboTimer>0;if(this.cameraController.updateFollow(this.player.group.position,a,c,e),this.sceneRenderer.updateLightTarget(this.player.group.position),this.particleSystem.update(e),this.floatingText.update(e),this.uiManager.updateHUD(this.trackManager.getCurrentBiomeName()),r&&!this.isCrashing&&(this.isCrashing=!0,this.crashTimer=.85,this.cameraController.addTrauma(.9),this.audioManager.stopMusic(),this.audioManager.stopVehicleEngine()),this.isCrashing&&(this.crashTimer-=e,this.crashTimer<=0)){this.appState="game_over",this.inputManager.setEnabled(!1);const l=this.gameState.finalizeRun(!1);this.uiManager.showGameOverModal(l)}if(this.gameState.mode==="stage"&&o){const l=this.gameState.advanceStage();this.audioManager.playLevelUpSound(),this.particleSystem.emitSmashDebris(this.player.group.position,[16766720,58879,16728193,7798531]),l.nextStage?(this.floatingText.spawn(this.player.group.position,`+${l.rewardCoins} STAGE CLEAR!`,"#00E5FF","🏆",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentStageIndex+1,l.nextStage.name,`Stage Goal Cleared! Entering ${l.nextStage.name}`,l.rewardCoins)):(this.floatingText.spawn(this.player.group.position,`+${l.rewardCoins} ALL STAGES CLEARED!`,"#76FF03","👑",!0),this.uiManager.showLevelUpAnnouncement(this.gameState.currentLevel,"ALL STAGES CLEARED!","Entering Endless Master Gauntlet! Keep Going!",l.rewardCoins))}}(this.appState==="game_over"||this.appState==="victory")&&(this.particleSystem.update(e),this.floatingText.update(e)),this.sceneRenderer.render()}}window.addEventListener("DOMContentLoaded",()=>{new Qm});
