(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  background: #e5e7e9;\n  color: rgb(119, 113, 113);\n}\n\ni {\n  font-size: 15px;\n  color: rgb(119, 113, 113);\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-todo-container {\n  background: #fff;\n  border: 1px solid #ccc;\n  width: 500px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  border-radius: 5px;\n}\n\n.todo-header,\n.add-todo {\n  border-bottom: 1px solid #ccc;\n  color: #222;\n}\n\n.add-todo-input {\n  border: none;\n  outline: none;\n  border-color: transparent;\n  font-size: 20px;\n  font-style: italic;\n}\n\n.todo-footer {\n  text-align: center;\n  background: #e5e7e9;\n}\n\n.list-item:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n}\n\n.list-item label {\n  padding-left: 15px;\n  color: #222;\n}\n\n.fa-ellipsis-v {\n  float: right;\n  cursor: pointer;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:o(f,r),references:1}),a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};function h(e){const{li:n,arr:t}=e,r=t.find((e=>e.description===n.textContent));r.completed=!r.completed}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,(e=>{const n=document.querySelector(".todo-list"),t=document.createElement("ul");n.appendChild(t),e.forEach((n=>{const r=document.createElement("li");r.className="list-item p-3";const o=document.createElement("input");o.type="checkbox",o.checked=n.completed;const i=document.createElement("label");i.textContent=n.description;const a=document.createElement("i");a.className="fas fa-ellipsis-v";const c={li:r,arr:e};o.addEventListener("change",h.bind(null,c)),r.appendChild(o),r.appendChild(i),r.appendChild(a),t.appendChild(r)}))})([{description:"Get groceries",completed:!1,index:1},{description:"Wash the dishes",completed:!1,index:2},{description:"Complete todo list project",completed:!1,index:3}])})()})();