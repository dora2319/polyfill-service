var ENCODEINTO_BUILD=!1;!function(e){"use strict";function r(e,r){return A?e[r]:e._getter(r)}function t(e,r,t){A?e[r]=t:e._setter(r,t)}function n(){}function a(e){var r=0|e.charCodeAt(0);if(55296<=r)if(r<=56319){var t=0|e.charCodeAt(1);if(56320<=t&&t<=57343){if((r=(r<<10)+t-56613888|0)>65535)return s(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else r=65533}else r<=57343&&(r=65533);return r<=2047?s(192|r>>6,128|63&r):s(224|r>>12,128|r>>6&63,128|63&r)}function o(){}function c(e,r){var n=void 0===e?"":(""+e).replace(w,a),o=0|n.length,c=0,i=0,f=0,s=0|r.length,u=0|e.length;s<o&&(o=s);e:for(;c<o;c=c+1|0){switch((i=0|n.charCodeAt(c))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:f=f+1|0;case 8:case 9:case 10:case 11:break;case 12:case 13:if((c+1|0)<s){f=f+1|0;break}case 14:if((c+2|0)<s){f=f+1|0;break}case 15:if((c+3|0)<s){f=f+1|0;break}default:break e}t(r,c,i)}return{written:c,read:u<f?u:f}}var i,f,s=String.fromCharCode,u={}.toString,l=u.call(e.SharedArrayBuffer),d=e.Uint8Array,h=d||Array,g=d?ArrayBuffer:h,p=g.isView||function(e){return e&&"length"in e},v=u.call(g.prototype),y=(encodeURIComponent,parseInt,o.prototype),D=e.TextEncoder,w=/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,C=new(d?Uint16Array:h)(32),A=function(){return 42===new d([42,43])[0]}();n.prototype.decode=function(e){var n,a=e;if(!p(a)){if((n=u.call(a))!==v&&n!==l&&"[object Undefined]"!==n)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");a=d?new h(a):a||[]}for(var o="",c="",i=0,f=0|a.length,g=f-32|0,y=0,D=0,w=0,A=0,b=0,I=0,F=-1;i<f;){for(y=i<=g?32:f-i|0;I<y;i=i+1|0,I=I+1|0){switch((D=255&r(a,i))>>4){case 15:if((b=255&r(a,i=i+1|0))>>6!=2||247<D){i=i-1|0;break}w=(7&D)<<6|63&b,A=5,D=256;case 14:b=255&r(a,i=i+1|0),w<<=6,w|=(15&D)<<6|63&b,A=b>>6==2?A+4|0:24,D=D+256&768;case 13:case 12:b=255&r(a,i=i+1|0),w<<=6,w|=(31&D)<<6|63&b,A=A+7|0,i<f&&b>>6==2&&w>>A&&w<1114112?(D=w,w=w-65536|0,0<=w?(F=55296+(w>>10)|0,D=56320+(1023&w)|0,I<31?(t(C,I,F),I=I+1|0,F=-1):(b=F,F=D,D=b)):y=y+1|0):(D>>=8,i=i-D-1|0,D=65533),A=0,w=0,y=i<=g?32:f-i|0;default:t(C,I,D);continue;case 11:case 10:case 9:case 8:}t(C,I,65533)}if(c+=s(r(C,0),r(C,1),r(C,2),r(C,3),r(C,4),r(C,5),r(C,6),r(C,7),r(C,8),r(C,9),r(C,10),r(C,11),r(C,12),r(C,13),r(C,14),r(C,15),r(C,16),r(C,17),r(C,18),r(C,19),r(C,20),r(C,21),r(C,22),r(C,23),r(C,24),r(C,25),r(C,26),r(C,27),r(C,28),r(C,29),r(C,30),r(C,31)),I<32&&(c=c.slice(0,I-32|0)),i<f){if(t(C,0,F),I=~F>>>31,F=-1,c.length<o.length)continue}else-1!==F&&(c+=s(F));o+=c,c=""}return o},y.encode=function(e){var r,n=void 0===e?"":""+e,a=0|n.length,o=new h(8+(a<<1)|0),c=0,i=0,f=0,s=0,u=!d;for(c=0;c<a;c=c+1|0,i=i+1|0)if((f=0|n.charCodeAt(c))<=127)t(o,i,f);else if(f<=2047)t(o,i,192|f>>6),t(o,i=i+1|0,128|63&f);else{e:{if(55296<=f)if(f<=56319){if(56320<=(s=0|n.charCodeAt(c=c+1|0))&&s<=57343){if((f=(f<<10)+s-56613888|0)>65535){t(o,i,240|f>>18),t(o,i=i+1|0,128|f>>12&63),t(o,i=i+1|0,128|f>>6&63),t(o,i=i+1|0,128|63&f);continue}break e}f=65533}else f<=57343&&(f=65533);!u&&c<<1<i&&c<<1<(i-7|0)&&(u=!0,r=new h(3*a),r.set(o),o=r)}t(o,i,224|f>>12),t(o,i=i+1|0,128|f>>6&63),t(o,i=i+1|0,128|63&f)}return d?o.subarray(0,i):o.slice(0,i)},ENCODEINTO_BUILD&&(y.encodeInto=c),D?ENCODEINTO_BUILD&&!(i=D.prototype).encodeInto&&(f=new D,i.encodeInto=function(e,r){var t=0|e.length,n=0|r.length;if(t<n>>1){var a=f.encode(e);if((0|a.length)<n)return r.set(a),{read:t,written:0|a.length}}return c(e,r)}):(e.TextDecoder=n,e.TextEncoder=o)}(typeof global==""+void 0?typeof self==""+void 0?this:self:global);