(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const l="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let d=(e=21)=>{let o="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)o+=l[n[e]&63];return o};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var p=w;function a(){return new DOMException("The request is not allowed","NotAllowedError")}async function y(e){if(!navigator.clipboard)throw a();return navigator.clipboard.writeText(e)}async function f(e){const o=document.createElement("span");o.textContent=e,o.style.whiteSpace="pre",o.style.webkitUserSelect="auto",o.style.userSelect="all",document.body.appendChild(o);const n=window.getSelection(),c=window.document.createRange();n.removeAllRanges(),c.selectNode(o),n.addRange(c);let t=!1;try{t=window.document.execCommand("copy")}finally{n.removeAllRanges(),window.document.body.removeChild(o)}if(!t)throw a()}async function w(e){try{await y(e)}catch(o){try{await f(e)}catch(n){throw n||o||a()}}}const m=u(p),g=document.querySelector("#newPasswordBtn"),h=document.querySelector("#copyBtn"),i=document.querySelector("#generatedPassword");g.addEventListener("click",()=>{const e=d();i.innerHTML=e}),h.addEventListener("click",()=>{m(i.innerHTML),alert("Password copied to clipboard!")});
