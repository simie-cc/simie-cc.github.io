webpackJsonp([1,2],{356:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},372:function(n,e,t){var o=t(638);"string"==typeof o&&(o=[[n.i,o,""]]);t(669)(o,{});o.locals&&(n.exports=o.locals)},638:function(n,e,t){e=n.exports=t(356)(),e.i(t(639),""),e.push([n.i,"@import url(http://fonts.googleapis.com/earlyaccess/notosanstc.css);",""]),e.push([n.i,"html {\n  font-family: 'Noto Sans TC', sans-serif;\n  font-size: 140%; }\n\nbody {\n  text-align: center; }\n\nh3, h4 {\n  vertical-align: middle; }\n\nh3 {\n  font-size: 1.3em;\n  padding: 1em 0;\n  background-color: #c4ffb2;\n  /*#9BF1FF*/\n  position: relative; }\n\nh3 .sub {\n  font-size: 0.4em;\n  color: #505050;\n  display: inline-block;\n  position: absolute;\n  bottom: 5px;\n  right: 5px; }\n\nh4 {\n  font-size: 1.1em;\n  padding: 1em 0;\n  position: relative; }\n\nh5 {\n  font-size: 0.5em;\n  display: inline-block; }\n\n* {\n  box-sizing: border-box; }\n\n.menu {\n  opacity: 0.5;\n  position: absolute;\n  top: calc(50% - 16px);\n  left: 10px;\n  vertical-align: middle; }\n\nbutton {\n  font-size: 1.3em;\n  color: white;\n  background-color: #ff7d4c;\n  border: none;\n  border-radius: .1em;\n  display: inline-block;\n  margin: 0 5px;\n  padding: .4em .4em;\n  box-shadow: .05em .05em .05em #888888; }\n\n.buttons-pad {\n  text-align: center;\n  display: block;\n  clear: both;\n  padding: 10px; }\n\n@media (max-width: 400px) {\n  button {\n    margin: 0 2px; } }\n\nbutton:active {\n  transform: scale(0.98); }\n\n.host {\n  z-index: 0;\n  position: fixed;\n  top: calc(/* padding */ 1em + /* font height */ 1.6em + /* padding */ 1em + /* margin */ 0.5em);\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: scroll; }\n",""])},639:function(n,e,t){e=n.exports=t(356)(),e.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""])},669:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=p[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(l(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(l(o.parts[i],e));p[o.id]={id:o.id,refs:1,parts:a}}}}function o(n){for(var e=[],t={},o=0;o<n.length;o++){var r=n[o],i=r[0],a=r[1],s=r[2],l=r[3],c={css:a,media:s,sourceMap:l};t[i]?t[i].parts.push(c):e.push(t[i]={id:i,parts:[c]})}return e}function r(n,e){var t=m(),o=v[v.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),v.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=v.indexOf(n);e>=0&&v.splice(e,1)}function a(n){var e=document.createElement("style");return e.type="text/css",r(n,e),e}function s(n){var e=document.createElement("link");return e.rel="stylesheet",r(n,e),e}function l(n,e){var t,o,r;if(e.singleton){var l=g++;t=b||(b=a(e)),o=c.bind(null,t,l,!1),r=c.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),o=f.bind(null,t),r=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(e),o=d.bind(null,t),r=function(){i(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function c(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function f(n,e){var t=e.css,o=e.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([t],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var p={},u=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=u(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,v=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=o(n);return t(r,e),function(n){for(var i=[],a=0;a<r.length;a++){var s=r[a],l=p[s.id];l.refs--,i.push(l)}if(n){var c=o(n);t(c,e)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete p[l.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},672:function(n,e,t){n.exports=t(372)}},[672]);