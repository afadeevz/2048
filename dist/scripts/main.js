'use strict';for(var k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},m=k,n=["Array","prototype","fill"],r=0;r<n.length-1;r++){var t=n[r];t in m||(m[t]={});m=m[t]}
var u=n[n.length-1],v=m[u],w=v?v:function(a,b,c){var d=this.length||0;0>b&&(b=Math.max(0,d+b));if(null==c||c>d)c=d;c=Number(c);0>c&&(c=Math.max(0,d+c));for(b=Number(b||0);b<c;b++)this[b]=a;return this};w!=v&&null!=w&&l(m,u,{configurable:!0,writable:!0,value:w});var x={G:"right",H:"up",F:"left",D:"down"};function y(a){return Math.min(a-1,Math.floor(Math.random()*a))}function z(a){this.a=a;this.m=this.i=this.level=null;this.status="empty"}
function A(a){a.level=null;a.i=null;a.m=null;a.status="empty"}z.prototype.moveTo=function(a){this.l||(a.level=this.level,a.m=this.m,a.i=this.i,a.status="moved",A(this))};z.prototype.w=function(a){return this.a===a.a&&this.level===a.level};z.prototype.clone=function(){var a=new z(this.a);a.level=this.level;a.m=this.m;a.i=this.i;a.status=this.status;return a};
k.Object.defineProperties(z.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return"empty"==this.status}},A:{configurable:!0,enumerable:!0,get:function(){return"merged"!=this.status&&"empty"!=this.status}},C:{configurable:!0,enumerable:!0,get:function(){return this.l?null:Math.pow(2,this.level)}}});function B(a,b,c){this.g=a;this.b=b;this.h=c;this.a=[];for(a=0;a<this.c;a++)this.a.push(new z(a));this.f=0;this.status="inProgress";E(this);E(this)}
B.prototype.clone=function(){var a=new B(this.g,this.b,this.h);a.f=this.f;a.a=[];for(var b=0;b<this.c;b++)a.a.push(this.a[b].clone());return a};B.prototype.w=function(a){var b=this.f===a.f&&this.g===a.g&&this.b===a.b;if(b)for(var c=0;c<this.c;c++)if(!this.a[c].w(a.a[c])){b=!1;break}return b};function E(a){if(!a.j){do var b=y(a.c);while(!a.a[b].l);a=a.a[b];a.level=1+Math.floor(y(10)/9);a.status="spawned"}}
function F(a,b,c){var d=b+c,e=a.a[b],f=a.a[d],g;if(g=0<=d&&d<a.c)g=Math.floor(d/a.b)-Math.floor(b/a.b),b=d%a.b-b%a.b,g=1==Math.abs(g)&&!Math.abs(b)||!Math.abs(g)&&1==Math.abs(b);g&&(f.l||F(a,d,c),f.l?(e.moveTo(f),F(a,d,c)):e.A&&f.A&&e.level==f.level&&(e.l||(f.level++,f.i.push(e.i[0]),f.m.push(e.m[0]),f.status="merged",A(e)),a.f+=f.C))}
function G(a,b){var c=a.clone(),d={right:1};d.up=-a.b;d.left=-1;d.down=a.b;for(var e=0;e<a.c;e++){var f=a.a[e];f.l||(f.i=[f.a],f.m=[f.level],f.status="still")}for(e=0;e<a.c;e++)F(a,e,d[b]);if(a.w(c))return!1;E(a);a.s?a.status="lost":"inProgress"==a.status&&a.o?a.status="won":"won"==a.status&&(a.status="continued");return!0}
k.Object.defineProperties(B.prototype,{c:{configurable:!0,enumerable:!0,get:function(){return this.g*this.b}},j:{configurable:!0,enumerable:!0,get:function(){for(var a=!0,b=0;b<this.c;b++)if(this.a[b].l){a=!1;break}return a}},s:{configurable:!0,enumerable:!0,get:function(){var a=this.j;if(a)for(var b in x)if(G(this.clone(),x[b])){a=!1;break}return a}},o:{configurable:!0,enumerable:!0,get:function(){for(var a=!1,b=0;b<this.c;b++)if(this.a[b].level>=this.h){a=!0;break}return a}}});
function H(a,b,c){var d=this;this.g=a;this.a=this.g.getContext("2d");this.j=b;this.f=c;this.b=this.c=null;this.h={x:null,y:null};I(this);window.addEventListener("resize",function(){I(d)})}function I(a){var b=(1+9*a.f)/(1+9*a.j),c=Math.min(.7*window.innerWidth,.7*b*window.innerHeight),b=c/b;a.c=c/(1+9*a.f);a.b=8*a.c;a.g.style.width=c+"px";a.g.width=c;a.g.style.height=b+"px";a.g.height=b;a.h={x:c,y:b}}
function J(a,b,c,d,e,f,g){g=void 0===g?0:g;a.a.fillStyle=f;a.a.beginPath();b+=g;a.a.moveTo(b,c);b+=d-2*g;a.a.lineTo(b,c);c+=g;a.a.arc(b,c,g,-Math.PI/2,0);b+=g;c+=e-2*g;a.a.lineTo(b,c);b-=g;a.a.arc(b,c,g,0,Math.PI/2);b-=d-2*g;c+=g;a.a.lineTo(b,c);c-=g;a.a.arc(b,c,g,Math.PI/2,Math.PI);b-=g;c-=e-2*g;a.a.lineTo(b,c);a.a.arc(b+g,c,g,Math.PI,3*Math.PI/2);a.a.fill()}
function K(a,b,c,d,e){var f=Math.pow(2,d%10).toString()+["","K","M"][Math.floor(d/10)],g=2<d?"#F9F6F2":"#776E65";c=a.c+c*(a.b+a.c)+a.b/2;b=a.c+b*(a.b+a.c)+a.b/2;e=a.b*(void 0===e?1:e);var h="#EEE4DA #EDE0C8 #F2B179 #F59563 #F67C5F #F76E4F #EDCF72 #EDCC61 #EDC850 #EDC53F #EDC22E".split(" ");J(a,c-e/2,b-e/2,e,e,11<d?h[10]:h[d-1],e/25);a.a.textAlign="center";a.a.textBaseline="middle";a.a.fillStyle=g;a.a.font=2*e/3+"px Arial";a.a.fillText(f,c-e/2+e/2,b-e/2+e/2,e)}
function N(a){this.f=a;this.a=0;this.b=[];this.c=new Date}
function O(a){if(1!=a.b.length||1!=a.a)1==a.a&&(a.a=0,a.b.shift()),a.a+=a.g,1<a.a&&(a.a=1);a.c=new Date;var b=a.f,c=a.b[0];a=a.a;a=void 0===a?1:a;var d=b.h.x,e=b.h.y;b.a.clearRect(0,0,b.h.x,b.h.y);J(b,0,0,d,e,"#BBADA0",d/50);for(d=0;d<b.j;d++)for(e=0;e<b.f;e++)J(b,b.c+e*(b.b+b.c),b.c+d*(b.b+b.c),b.b,b.b,"#CDC1B4",b.b/25);a=void 0===a?1:a;for(d=0;d<b.j;d++)for(e=0;e<b.f;e++){var f=d*b.f+e;if(!c.a[f].l){var g=b,f=c.a[f],h=a,h=void 0===h?1:h,C=Math.floor(f.a/g.f),D=f.a%g.f;if("empty"!=f.status&&"spawned"!=
f.status)for(var p=0;p<f.i.length;p++){var L=Math.floor(f.i[p]/g.f),M=f.i[p]%g.f,q=Math.min(h/.5,1),q=3*Math.pow(q,2)-2*Math.pow(q,3);K(g,L+(C-L)*q,M+(D-M)*q,f.m[p])}.5<h&&(h=(h-.5)/.5,"spawned"==f.status&&K(g,C,D,f.level,h),"merged"==f.status&&K(g,C,D,f.level,-Math.pow(h,2)+h+1))}}}k.Object.defineProperties(N.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return(new Date-this.c)/1E3/.2*this.b.length}}});function P(a,b,c,d){this.a=a;this.f=b;this.c=c;this.b=d}
P.prototype.clone=function(){return new P(this.a,this.f,this.c,this.b)};function Q(a){this.f=a;this.a=a.getContext("2d");this.c={};this.c.inProgress={v:!0,text:null,u:null,color:new P(255,255,255,0)};this.c.continued={v:!0,text:null,u:null,color:new P(255,255,255,0)};this.c.won={v:!1,text:"You win!",u:"#F8F5F1",color:new P(237,194,46,.5)};this.c.lost={v:!1,text:"Game over!",u:"#776E65",color:new P(237,227,217,.5)};this.b=this.c.inProgress;this.color=this.b.color.clone()}
function R(a,b){a.b=a.c[b]}function S(a){var b=a.f.scrollWidth,c=a.f.scrollHeight,d=a.color,e=a.b.color;d.a=(24*d.a+e.a)/25;d.f=(24*d.f+e.f)/25;d.c=(24*d.c+e.c)/25;d.b=(24*d.b+e.b)/25;d=a.color;a.a.fillStyle="rgba("+d.a.toFixed()+","+d.f.toFixed()+","+d.c.toFixed()+","+d.b.toFixed(2)+")";a.a.fillRect(0,0,b,c);a.b.v||(d=a.b.u,e=a.b.text,a.a.textAlign="center",a.a.textBaseline="middle",a.a.fillStyle=d,a.a.font=c/5+"px Arial",a.a.fillText(e,b/2,c/2,7*b/8))}
function T(){var a=this;this.a=[];window.addEventListener("keydown",function(b){var c=b.code;if(new Date>=a.b){var d={KeyW:"up",ArrowUp:"up",KeyA:"left",ArrowLeft:"left",KeyS:"down",ArrowDown:"down",KeyD:"right",ArrowRight:"right"}[c];void 0!==d&&a.a.push(d)}"ArrowUp"!=c&&"ArrowDown"!=c||b.preventDefault()});this.b=new Date}
function U(a,b,c,d){var e=this;this.j=b;this.h=c;this.o=d;this.B=new H(a,b,c);this.f=new N(this.B);this.s=new Q(a);this.c=new T;this.g=this.b=0;this.a=new B(this.j,this.h,this.o);this.f.b.push(this.a.clone());document.getElementById("restartButton").addEventListener("mousedown",function(){e.a=new B(e.j,e.h,e.o);e.c.a=[];e.f.b.push(e.a.clone());V(e)})}
function W(a){for(;a.c.a.length;){var b=a.c.a.shift();G(a.a,b)&&a.f.b.push(a.a.clone());"won"==a.a.status&&(b=a.c,b.a=[],b.b=new Date((new Date).valueOf()+2500))}}function V(a){if(a.b!=a.a.f){var b=document.getElementById("gameScore");a.b=a.a.f;b.innerHTML=a.b}a.b>a.g&&(b=document.getElementById("bestScore"),a.g=a.b,b.innerHTML=a.g)}function X(a){W(a);V(a);O(a.f);R(a.s,a.a.status);S(a.s);window.requestAnimationFrame(function(){X(a)})}U.prototype.start=function(){X(this)};
(new U(document.getElementById("gameCanvas"),4,4,11)).start();