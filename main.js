(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  background: #e5e7e9;\n  color: rgb(119, 113, 113);\n}\n\ni {\n  font-size: 15px;\n  color: rgb(119, 113, 113);\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-todo-container {\n  background: #fff;\n  border: 1px solid #ccc;\n  width: 500px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n  border-radius: 5px;\n}\n\n.todo-header,\n.add-todo {\n  border-bottom: 1px solid #ccc;\n  color: #222;\n}\n\n.add-todo-input {\n  border: none;\n  outline: none;\n  border-color: transparent;\n  font-size: 20px;\n  font-style: italic;\n}\n\n.todo-footer {\n  text-align: center;\n  background: #e5e7e9;\n}\n\n.list-item:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n}\n\n.list-item label {\n  padding-left: 15px;\n  color: #222;\n}\n\n.fa-ellipsis-v,\n.fa-trash-alt {\n  float: right;\n  cursor: pointer;\n}\n",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:u,updater:r(f,o),references:1}),i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),m={};function h(e){const{li:t,arr:n,actions:o}=e,r=n.find((e=>e.description===t.textContent));r.completed=!r.completed,o.updateOne(r)}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(e,t){this.description=e,this.completed=!1,this.index=t}}const g=new class{constructor(){this.localStorage=localStorage}add(e){this.localStorage.setItem("Todos",JSON.stringify(e))}updateOne(e){const t=this.get(),n=t.findIndex((t=>t.description===e.description));t.splice(n,1,e),this.add(t)}get(){let e=JSON.parse(this.localStorage.getItem("Todos"));return null===e&&(e=[]),e}updateAll(e){this.localStorage.removeItem("Todos"),this.add(e)}},b=new class{constructor(e){this.actions=e}getTasks(){return this.actions.get()}addTask(e){const t=this.getTasks();t.push(e),this.actions.add(t)}editTaskDesc(e,t){const n=this.getTasks();n[t].description=e,this.actions.updateAll(n)}}(g),x=g.get(),y=e=>{const{li:t,editIcon:n,deleteIcon:o,label:r}=e,a=t.textContent,i=document.createElement("input");i.type="text",i.className="edit-todo-input",i.value=a,i.addEventListener("keyup",(e=>{if("Enter"===e.key){e.preventDefault();const t=x.findIndex((e=>e.description===a));b.editTaskDesc(i.value,t),window.location.reload()}})),t.removeChild(r),t.appendChild(i)};((e,t)=>{const n=document.querySelector(".todo-list"),o=document.createElement("ul");n.appendChild(o),e.forEach((n=>{const r=document.createElement("li");r.className="list-item p-3";const a=document.createElement("input");a.type="checkbox",a.checked=n.completed;const i=document.createElement("label");i.textContent=n.description;const s=document.createElement("i");s.className="fas fa-ellipsis-v";const c=document.createElement("i");c.className="far fa-trash-alt";const d={li:r,arr:e,actions:t};a.addEventListener("change",h.bind(null,d)),s.addEventListener("click",y.bind(null,{li:r,editIcon:s,deleteIcon:c,label:i})),r.appendChild(a),r.appendChild(i),r.appendChild(s),r.appendChild(c),o.appendChild(r)}))})(x,g);const k=document.querySelector(".fa-level-down-alt"),C=document.querySelector(".add-todo-input");k.addEventListener("click",(()=>{const e=C.value,t=x.length+1,n=new v(e,t);e.length>0&&(b.addTask(n,g),window.location.reload())})),C.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),k.click())}))})()})();