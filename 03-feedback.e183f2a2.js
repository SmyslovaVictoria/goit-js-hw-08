var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=f||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return u.Date.now()};function g(e,t,n){var a,r,i,o,f,l,u=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,i=r;return a=r=void 0,u=t,o=e.apply(i,n)}function E(e){return u=e,f=setTimeout(j,t),c?y(e):o}function S(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-u>=i}function j(){var e=d();if(S(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return g?m(n,i-(e-u)):n}(e))}function w(e){return f=void 0,b&&a?y(e):(a=r=void 0,o)}function O(){var e=d(),n=S(e);if(a=arguments,r=this,l=e,n){if(void 0===f)return E(l);if(g)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),o}return t=v(t)||0,p(n)&&(c=!!n.leading,i=(g="maxWait"in n)?s(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),u=0,a=l=r=f=void 0},O.flush=function(){return void 0===f?o:w(d())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?o(e.slice(2),f?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:a,maxWait:t,trailing:r})};const b={feedbackFormEl:document.querySelector(".feedback-form"),inputEmailEl:document.querySelector("input[name=email]"),textareaEl:document.querySelector("textarea[name=message]")};let y={};b.feedbackFormEl.addEventListener("input",t((function(e){y[e.target.name]=e.target.value;let t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500)),window.addEventListener("load",(function(){if(!localStorage.getItem("feedback-form-state"))return;let e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&(y.email=e.email,b.inputEmailEl.value=e.email);e.message&&(y.message=e.message,b.textareaEl.value=e.message)})),b.feedbackFormEl.addEventListener("submit",(function(e){e.preventDefault();let t=JSON.parse(localStorage.getItem("feedback-form-state"));if(""===t.message.value||""===t.email.value)return alert("Please fill in all the fields!");b.feedbackFormEl.reset(),localStorage.removeItem("feedback-form-state"),y={}})),console.log(parsedLocalStorageObject);
//# sourceMappingURL=03-feedback.e183f2a2.js.map
