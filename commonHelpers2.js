import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),r=t.querySelector('[name="email"]'),o=t.querySelector('[name="message"]');t.addEventListener("input",function(){const e={email:r.value.trim(),message:o.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))});if(localStorage.getItem("feedback-form-state")!==null){const e=JSON.parse(localStorage.getItem("feedback-form-state"));r.value=e.email||"",o.value=e.message||""}t.addEventListener("submit",function(e){e.preventDefault();const a={email:r.value.trim(),message:o.value.trim()};if(!a.email||!a.message){alert("Please fill in both fields of the form.");return}console.log(a),localStorage.removeItem("feedback-form-state"),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map