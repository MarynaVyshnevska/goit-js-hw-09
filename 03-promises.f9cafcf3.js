function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const a={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function l(t){(a.amount.value<0||a.delay.value<0||a.step.value<0)&&e(u).Notify.failure("Please, enter a number greater than 0")}a.form.addEventListener("submit",(function(t){t.preventDefault();const n={delay:Number(a.delay.value),step:Number(a.step.value),amount:Number(a.amount.value)};for(let t=1;t<=n.amount;t+=1){const o=n.delay+n.step*(t-1);setTimeout((()=>{new Promise((()=>{console.log(`# ${t} time ${o} created`),e(u).Notify.success(`Promise ${t} completed in ${o}ms`)}))}),o)}})),a.delay.addEventListener("input",l),a.step.addEventListener("input",l),a.amount.addEventListener("input",l);
//# sourceMappingURL=03-promises.f9cafcf3.js.map
