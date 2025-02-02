var xt=Object.defineProperty;var kt=(t,e,n)=>e in t?xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>kt(t,typeof e!="symbol"?e+"":e,n);import{M as q,c as S,a4 as Lt,b as et,aw as wt,t as Dt,r as w,w as it,b3 as Gt,o as g,f as p,n as at,D as Z,A as Ut,p as A,F as L,i as $,g as Y,h as D,j as G,k as F,ax as T,V as U,m as tt,_ as nt}from"./index-C5JhQ1yR.js";import{V as $t}from"./VTextField-tRh7ossA.js";import{b as Ft}from"./betterSplit-CW8NIeFU.js";var V=(t=>(t.title="title",t.textus="textus",t.versio="versio",t))(V||{});const Pe=["title","textus","versio"];var jt=(t=>(t.search="search",t.browse="browse",t))(jt||{});const Je=["search","browse"],Bt="(?:a|e|i|iͧ|o|u|ä|å|ë|ö|ü|á|á̧|â|ä|å|é|ê|ë|í|î|ó|ô|ö|ú|û|ü|ā|ā́|ă|ą̂|ē|ĕ|ī|ı|ō|ŏ|ū|ŭ|ŭ́|ə|ə́|и|о|ю|ạ|ạ|ạ́|ậ|ắ|ẹ|ọ|ộ|ụ|ụ̂|а|о|у|э|ы|и|ь)",Ht="(?:b|b́|c|c̄|d|f|f̣|g|h|j|k|k̇|l|m|n|n̄|p|p̄|p̣|q|q̣|r|r̄|r̄̄|s|s̄|t|t́|v|w|x|y|z|z̄|ç|ć|č|ğ|ġ|ģ|ķ|ń|ň|ŕ|ś|ŝ|ş|ş́|ş̇|š|ţ|ž|ǧ|ǧ̣|Ɂ|ɧ|ʔ|ʕ|ʕ́|ʕ̣|ʾ|ʿ|б|в|й|к|п|р|с|т|х|ҫ|ҫ́|ҫ̂|ҫ̄|ع|ḅ|ḇ|ḉ|ḍ|ḏ|ḏ̣|ḏ̣̣|ḥ|ḳ|ḳ̇|ḷ|ṃ|ṅ|ṇ|ṗ|ṛ|ṝ|ṡ|ṣ|ṫ|ṭ|ṯ|ẓ|ẖ|ﻉ)",Kt=new RegExp("[\\\\]v","gi"),Yt=new RegExp("[\\\\]c","gi"),qt=q.memoize(function(e){return e.replace(Kt,Bt).replace(Yt,Ht)});class z{constructor(e){X(this,"_value");this._value=e||""}get value(){return this._value}set value(e){this._value=e||""}get valueNormalized(){return qt(this.value)}get isEmpty(){return!this.value}get regex(){return RegExp(this.valueNormalized,"iu")}static instantiate(e){return new z(e)}}class ze{constructor(e){X(this,"data");this.data=q.mapValues(e,z.instantiate)}get searchersArr(){return q.values(this.data)}get areAllEmpty(){return this.searchersArr.every(e=>e.isEmpty)}get test(){return e=>q.keys(this.data).every(n=>this.data[n].regex.test(e[n]))}}var P=(t=>(t.turoyo="turoyo",t.urmi="urmi",t.maalula="maalula",t))(P||{});const Vt=()=>{const t=Lt();return S(()=>t.path.split("/")[1])};function Pt(t){return new Promise(e=>setTimeout(e,t))}const Jt="a á ä ā b ḅ c č ç d ḍ ḏ ḏ̣ e é ē ə f g ǧ ġ ģ h ḥ i í î ī ı j k ḳ l m ṃ ň ṇ o ó ö p q r ṛ s š ṡ ş ṣ t ţ ṭ ṯ u ú ü ụ v w x y z ž ʔ ʕ",zt=Jt.split(/\s+/),Wt="a ä b ʙ c č ç d e ǝ ə f g Ģ h i I ı j k l m n o ö p q r s ş ṣ ș t ţ ṭ ț u ü v w x y z ž ƶ а ә б в г д е ж з и й к л м н о п р с т у ф х һ ц ч ш щ ъ ы ь э ю я",Xt=Wt.split(/\s+/),Qt="ʔ ʕ a á ā b c ć č d ḍ ḏ ḏ̣ e é ē ə f g ǧ ġ h ḥ i í ī k ḳ l ḷ m n o ō p r s š ṣ t ṭ ṯ u ú ū w x y z ž ẓ",Zt=Qt.split(/\s+/),te={[P.turoyo]:zt,[P.urmi]:Xt,[P.maalula]:Zt},ee=()=>{const t=Vt();return S(()=>te[t.value])},ne={class:"working-block"},se={class:"keyboard specific-keys"},oe={key:1,class:"keyboard common-keys"},ie={key:2,class:"submit-wrapper"},ae=et({__name:"Keyboard",props:{value:{default:""},inputName:{default:""},visible:{type:Boolean,default:!1},type:{default:"full"},inputEl:{default:null}},emits:["submit","update:visible"],setup(t,{emit:e}){const n=e,s=wt(),o=Dt(s,"isDark"),i=w(0),a=w(0),r=w(null),l=w(t.value),E=[String.raw`\v`,String.raw`\c`,"^","$","\\"],m=["⬅","space","del","backspace","⮕"],y=ee(),c=w(null);it(()=>{c.value=r.value||t.inputEl},{flush:"sync"}),it(()=>{l.value=t.value});function u(f){l.value=f,ot()}function v(){n("update:visible",!1)}function O(){n("submit",l.value),v()}function ot(){var f,h;i.value=((f=c.value)==null?void 0:f.selectionStart)||0,a.value=((h=c.value)==null?void 0:h.selectionEnd)||0}async function Tt(){await Pt(20),ot()}function W(f,h){if(!c.value)return;const d=l.value||"";i.value=c.value.selectionStart||0,a.value=c.value.selectionEnd||0;const{buttonValueMod:I,selectionStartMod:_,selectionEndMod:R}=Mt({buttonValue:f,selectionStart:i.value,selectionEnd:a.value,existingValue:d});c.value.value=d.slice(0,_)+I+d.slice(R,d.length),l.value=c.value.value,c.value.focus(),i.value=c.value.selectionStart=_+I.length,a.value=c.value.selectionEnd=_+I.length,t.type==="regex"&&n("submit",l.value)}Gt(()=>{r.value=document.querySelector(".keyboard-wrapper .v-text-field input"),i.value=a.value=t.value.length});function Mt({buttonValue:f,selectionStart:h,selectionEnd:d,existingValue:I}){let _,R=h,x=d;return f==="backspace"?(h>0&&h===d&&(R=h-1),_=""):f==="del"?(h<I.length&&h===d&&(x=d+1),_=""):f==="space"?_=" ":f==="⬅"?(h<d?x=h:(R=Math.max(0,h-1),x=R),_=""):f==="⮕"?(h<d?R=d:(R=Math.min(I.length,h+1),x=R),_=""):(_=f,R=h,x=d),{buttonValueMod:_,selectionStartMod:R,selectionEndMod:x}}return(f,h)=>f.visible?(g(),p("div",{key:0,class:T([f.type,"keyboard-wrapper"])},[at("div",ne,[f.type==="full"?(g(),Z($t,{key:0,ref_key:"inputElement",ref:r,label:f.inputName,"model-value":l.value,class:"input",density:"compact",variant:"outlined",clearable:"",onFocus:Tt,"onUpdate:modelValue":u,onKeyup:Ut(O,["enter","native"])},null,8,["label","model-value"])):A("",!0),at("div",se,[E?(g(),p(L,{key:0},$(E,d=>Y(U,{key:d,color:"warning",variant:"outlined",class:T({invert:o.value}),rounded:"",onClick:I=>W(d)},{default:D(()=>[G(F(d),1)]),_:2},1032,["class","onClick"])),64)):A("",!0),tt(y)&&f.type==="full"?(g(!0),p(L,{key:1},$(tt(y),d=>(g(),Z(U,{key:d,variant:"outlined",rounded:"",onClick:I=>W(d)},{default:D(()=>[G(F(d),1)]),_:2},1032,["onClick"]))),128)):A("",!0)]),m&&f.type==="full"?(g(),p("div",oe,[(g(),p(L,null,$(m,d=>Y(U,{key:d,class:T({invert:o.value}),color:"teal",rounded:"",size:"large",variant:"outlined",onClick:I=>W(d)},{default:D(()=>[G(F(d),1)]),_:2},1032,["class","onClick"])),64))])):A("",!0),f.type==="full"?(g(),p("div",ie,[Y(U,{class:"mr-5",variant:"outlined",onClick:v},{default:D(()=>h[0]||(h[0]=[G(" Cancel ")])),_:1}),Y(U,{color:"primary",variant:"outlined",class:T({invert:o.value}),onClick:O},{default:D(()=>h[1]||(h[1]=[G(" Search ")])),_:1},8,["class"])])):A("",!0)])],2)):A("",!0)}}),We=nt(ae,[["__scopeId","data-v-4d58c8a6"]]);var rt;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(rt||(rt={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(lt||(lt={}));var ct;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(ct||(ct={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=["user","model","function","system"];var dt;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(dt||(dt={}));var ft;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(ft||(ft={}));var ht;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(ht||(ht={}));var gt;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(gt||(gt={}));var j;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(j||(j={}));var vt;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(vt||(vt={}));var Et;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Et||(Et={}));var pt;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(pt||(pt={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class k extends C{constructor(e,n){super(e),this.response=n}}class St extends C{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class N extends C{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="https://generativelanguage.googleapis.com",le="v1beta",ce="0.21.0",ue="genai-js";var M;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(M||(M={}));class de{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||le;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||re}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function fe(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${ue}/${ce}`),e.join(" ")}async function he(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",fe(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new N(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new N(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new N(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function ge(t,e,n,s,o,i){const a=new de(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},Ce(i)),{method:"POST",headers:await he(a),body:o})}}async function K(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:l}=await ge(t,e,n,s,o,i);return ve(r,l,a)}async function ve(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){Ee(o,t)}return s.ok||await pe(s,t),s}function Ee(t,e){let n=t;throw t instanceof St||t instanceof N||(n=new C(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function pe(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new St(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function Ce(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),J(t.candidates[0]))throw new k(`${b(t)}`,t);return me(t)}else if(t.promptFeedback)throw new k(`Text not available. ${b(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),J(t.candidates[0]))throw new k(`${b(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Ct(t)[0]}else if(t.promptFeedback)throw new k(`Function call not available. ${b(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),J(t.candidates[0]))throw new k(`${b(t)}`,t);return Ct(t)}else if(t.promptFeedback)throw new k(`Function call not available. ${b(t)}`,t)},t}function me(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Ct(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const ye=[j.RECITATION,j.SAFETY,j.LANGUAGE];function J(t){return!!t.finishReason&&ye.includes(t.finishReason)}function b(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];J(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function B(t){return this instanceof B?(this.v=t,this):new B(t)}function _e(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(u){return new Promise(function(v,O){i.push([c,u,v,O])>1||r(c,u)})})}function r(c,u){try{l(s[c](u))}catch(v){y(i[0][3],v)}}function l(c){c.value instanceof B?Promise.resolve(c.value.v).then(E,m):y(i[0][2],c)}function E(c){r("next",c)}function m(c){r("throw",c)}function y(c,u){c(u),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Re(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=we(e),[s,o]=n.tee();return{stream:Ie(s),response:Oe(o)}}async function Oe(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return st(Se(e));e.push(o)}}function Ie(t){return _e(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield B(n.read());if(o)break;yield yield B(st(s))}})}function we(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new C("Failed to parse stream"));return}s.close();return}o+=a;let l=o.match(mt),E;for(;l;){try{E=JSON.parse(l[1])}catch{s.error(new C(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(E),o=o.substring(l[0].length),l=o.match(mt)}return i()})}}})}function Se(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e,n,s){const o=await K(e,M.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return Re(o)}async function bt(t,e,n,s){const i=await(await K(e,M.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:st(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function H(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Ae(e)}function Ae(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new C("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new C("No content is provided for sending chat message.");return s?e:n}function be(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new N("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=H(t);s.contents=[i]}return{generateContentRequest:s}}function yt(t){let e;return t.contents?e=t:e={contents:[H(t)]},t.systemInstruction&&(e.systemInstruction=Nt(t.systemInstruction)),e}function Ne(t){return typeof t=="string"||Array.isArray(t)?{content:H(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Te={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Me(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new C(`First content should be with role 'user', got ${s}`);if(!ut.includes(s))throw new C(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(ut)}`);if(!Array.isArray(o))throw new C("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new C("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of _t)l in r&&(i[l]+=1);const a=Te[s];for(const r of _t)if(!a.includes(r)&&i[r]>0)throw new C(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="SILENT_ERROR";class xe{constructor(e,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(Me(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var s,o,i,a,r,l;await this._sendPromise;const E=H(e),m={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,E]},y=Object.assign(Object.assign({},this._requestOptions),n);let c;return this._sendPromise=this._sendPromise.then(()=>bt(this._apiKey,this.model,m,y)).then(u=>{var v;if(u.response.candidates&&u.response.candidates.length>0){this._history.push(E);const O=Object.assign({parts:[],role:"model"},(v=u.response.candidates)===null||v===void 0?void 0:v[0].content);this._history.push(O)}else{const O=b(u.response);O&&console.warn(`sendMessage() was unsuccessful. ${O}. Inspect response object for details.`)}c=u}),await this._sendPromise,c}async sendMessageStream(e,n={}){var s,o,i,a,r,l;await this._sendPromise;const E=H(e),m={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,E]},y=Object.assign(Object.assign({},this._requestOptions),n),c=At(this._apiKey,this.model,m,y);return this._sendPromise=this._sendPromise.then(()=>c).catch(u=>{throw new Error(Rt)}).then(u=>u.response).then(u=>{if(u.candidates&&u.candidates.length>0){this._history.push(E);const v=Object.assign({},u.candidates[0].content);v.role||(v.role="model"),this._history.push(v)}else{const v=b(u);v&&console.warn(`sendMessageStream() was unsuccessful. ${v}. Inspect response object for details.`)}}).catch(u=>{u.message!==Rt&&console.error(u)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e,n,s){return(await K(e,M.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e,n,s){return(await K(e,M.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function De(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await K(e,M.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,s={}){this.apiKey=e,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Nt(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var s;const o=yt(e),i=Object.assign(Object.assign({},this._requestOptions),n);return bt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(e,n={}){var s;const o=yt(e),i=Object.assign(Object.assign({},this._requestOptions),n);return At(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(e){var n;return new xe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const s=be(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return ke(this.apiKey,this.model,s,o)}async embedContent(e,n={}){const s=Ne(e),o=Object.assign(Object.assign({},this._requestOptions),n);return Le(this.apiKey,this.model,s,o)}async batchEmbedContents(e,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return De(this.apiKey,this.model,e,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new C("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Ot(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,s){if(!e.name)throw new N("Cached content must contain a `name` field.");if(!e.model)throw new N("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&e[a]&&(n==null?void 0:n[a])!==e[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(r===l)continue}throw new N(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Ot(this.apiKey,i,s)}}const Ue="AIzaSyBa_4MJS5ZVbyBKcYDQAYukKvKRYGta7vc",It=new Ge(Ue),Q=It&&It.getGenerativeModel({model:"gemini-1.5-flash"}),$e=t=>{const e=w(!1),n=w(!1),s=t.join(" or ");function o(a){return`extract only ${s} parts of the following text, give their translation into english, no other commentaries or explanations, return html fragment not md, give translations of the words in ${s} if they differ from forms used: ${a}, wrap in html tags and add bullets for readability`}async function i(a){e.value=!0;const r=o(a),l=await(Q==null?void 0:Q.generateContent(r)),E=await(l==null?void 0:l.response.text().replace(/`/g,"").replace(/^html/,"").replace(a,""))||"";return e.value=!1,n.value=!0,E}return{isLoading:e,isReady:n,getTranslation:i}},Fe=["innerHTML"],je=et({__name:"TranslateAI",props:{languages:{default:()=>[]},str:{}},setup(t){const e=w(),n=w(!1);async function s(){if(!t.languages.length||n.value)return;const{getTranslation:o}=$e(t.languages);n.value=!0,e.value=await o(t.str),n.value=!1}return(o,i)=>(g(),p(L,null,[e.value?(g(),p("div",{key:1,class:"hint",onClick:i[0]||(i[0]=a=>e.value="")},"Collapse")):(g(),p("div",{key:0,onClick:s,class:T(["hint",{shimmer:n.value}])},F(`Translate from ${o.languages.join(" and ")}`),3)),e.value?(g(),p("div",{key:2,innerHTML:e.value,class:"translation"},null,8,Fe)):A("",!0)],64))}}),Be=nt(je,[["__scopeId","data-v-6b1d56a4"]]),He=et({__name:"GrepLine",props:{str:{default:""},searcher:{default:()=>new z},lineName:{default:""},translationLanguage:{type:[String,Boolean]}},setup(t){const{isDark:e}=wt(),n=S(()=>t.str.split(`
`)),s=S(()=>n.value.map(l=>!t.searcher||t.searcher.isEmpty?[l]:Ft(l,t.searcher.regex))),o=S(()=>t.lineName===V.title),i=S(()=>!t.lineName||t.lineName===V.textus),a=S(()=>t.lineName===V.versio),r=S(()=>({"line-title":o.value,textus:i.value,versio:a.value}));return(l,E)=>(g(),p("div",{class:T([r.value,"grep-line"])},[(g(!0),p(L,null,$(s.value,(m,y)=>(g(),p("div",{key:y},[(g(!0),p(L,null,$(m,(c,u)=>(g(),p("span",{key:u,class:T({highlight:u%2,invert:tt(e)})},F(c),3))),128))]))),128)),l.translationLanguage?(g(),Z(Be,{key:0,languages:[l.translationLanguage],str:l.str},null,8,["languages","str"])):A("",!0)],2))}}),Xe=nt(He,[["__scopeId","data-v-1e986bbd"]]);export{Je as D,Xe as G,We as K,P as L,ze as S,Pe as a,jt as b,z as c,Pt as s,Vt as u};
