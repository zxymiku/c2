!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.fd54cbd7.js","./File-legacy.6dee3192.js","./icon-legacy.9b17d0dd.js","./index-legacy.6eb9021c.js","./index-legacy.7b1fdd18.js","./index-legacy.6add8f43.js","./Layout-legacy.dc9e3594.js","./index-legacy.83e9434e.js","./FolderTree-legacy.22f271ad.js"],(function(e){"use strict";var t,r,i,o,c,u;return{setters:[function(n){t=n.a,r=n.d,i=n.h,o=n.B,c=n.Q},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),a=n(r(!1),2),l=a[0],f=a[1];return i(u,{get children(){return i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();