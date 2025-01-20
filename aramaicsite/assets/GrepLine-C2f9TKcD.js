var xe=Object.defineProperty;var ke=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Q=(e,t,n)=>ke(e,typeof t!="symbol"?t+"":t,n);import{M as q,c as R,a3 as Le,b as J,ax as Se,t as De,r as p,w as ee,b9 as Ge,o as g,f as C,n as ae,D as te,A as $e,p as b,F as L,i as U,g as Y,h as D,j as G,k as F,ay as T,V as $,m as ne,_ as se,an as Ue,ak as Fe,Z as je,bU as Be,bJ as He}from"./index-lZQCigip.js";import{V as Ke}from"./VTextField-DkRUSsOU.js";import{b as Ye}from"./betterSplit-CW8NIeFU.js";var V=(e=>(e.title="title",e.textus="textus",e.versio="versio",e))(V||{});const en=["title","textus","versio"];var qe=(e=>(e.search="search",e.browse="browse",e))(qe||{});const tn=["search","browse"],Ve="(?:a|e|i|iͧ|o|u|ä|å|ë|ö|ü|á|á̧|â|ä|å|é|ê|ë|í|î|ó|ô|ö|ú|û|ü|ā|ā́|ă|ą̂|ē|ĕ|ī|ı|ō|ŏ|ū|ŭ|ŭ́|ə|ə́|и|о|ю|ạ|ạ|ạ́|ậ|ắ|ẹ|ọ|ộ|ụ|ụ̂|а|о|у|э|ы|и|ь)",Pe="(?:b|b́|c|c̄|d|f|f̣|g|h|j|k|k̇|l|m|n|n̄|p|p̄|p̣|q|q̣|r|r̄|r̄̄|s|s̄|t|t́|v|w|x|y|z|z̄|ç|ć|č|ğ|ġ|ģ|ķ|ń|ň|ŕ|ś|ŝ|ş|ş́|ş̇|š|ţ|ž|ǧ|ǧ̣|Ɂ|ɧ|ʔ|ʕ|ʕ́|ʕ̣|ʾ|ʿ|б|в|й|к|п|р|с|т|х|ҫ|ҫ́|ҫ̂|ҫ̄|ع|ḅ|ḇ|ḉ|ḍ|ḏ|ḏ̣|ḏ̣̣|ḥ|ḳ|ḳ̇|ḷ|ṃ|ṅ|ṇ|ṗ|ṛ|ṝ|ṡ|ṣ|ṫ|ṭ|ṯ|ẓ|ẖ|ﻉ)",ze=new RegExp("[\\\\]v","gi"),Je=new RegExp("[\\\\]c","gi"),We=q.memoize(function(t){return t.replace(ze,Ve).replace(Je,Pe)});class W{constructor(t){Q(this,"_value");this._value=t||""}get value(){return this._value}set value(t){this._value=t||""}get valueNormalized(){return We(this.value)}get isEmpty(){return!this.value}get regex(){return RegExp(this.valueNormalized,"iu")}static instantiate(t){return new W(t)}}class nn{constructor(t){Q(this,"data");this.data=q.mapValues(t,W.instantiate)}get searchersArr(){return q.values(this.data)}get areAllEmpty(){return this.searchersArr.every(t=>t.isEmpty)}get test(){return t=>q.keys(this.data).every(n=>this.data[n].regex.test(t[n]))}}var P=(e=>(e.turoyo="turoyo",e.urmi="urmi",e.maalula="maalula",e))(P||{});const Xe=()=>{const e=Le();return R(()=>e.path.split("/")[1])};function Qe(e){return new Promise(t=>setTimeout(t,e))}const Ze="a á ä ā b ḅ c č ç d ḍ ḏ ḏ̣ e é ē ə f g ǧ ġ ģ h ḥ i í î ī ı j k ḳ l m ṃ ň ṇ o ó ö p q r ṛ s š ṡ ş ṣ t ţ ṭ ṯ u ú ü ụ v w x y z ž ʔ ʕ",et=Ze.split(/\s+/),tt="a ä b ʙ c č ç d e ǝ ə f g Ģ h i I ı j k l m n o ö p q r s ş ṣ ș t ţ ṭ ț u ü v w x y z ž ƶ а ә б в г д е ж з и й к л м н о п р с т у ф х һ ц ч ш щ ъ ы ь э ю я",nt=tt.split(/\s+/),st="ʔ ʕ a á ā b c ć č d ḍ ḏ ḏ̣ e é ē ə f g ǧ ġ h ḥ i í ī k ḳ l ḷ m n o ō p r s š ṣ t ṭ ṯ u ú ū w x y z ž ẓ",ot=st.split(/\s+/),it={[P.turoyo]:et,[P.urmi]:nt,[P.maalula]:ot},at=()=>{const e=Xe();return R(()=>it[e.value])},rt={class:"working-block"},lt={class:"keyboard specific-keys"},ct={key:1,class:"keyboard common-keys"},ut={key:2,class:"submit-wrapper"},dt=J({__name:"Keyboard",props:{value:{default:""},inputName:{default:""},visible:{type:Boolean,default:!1},type:{default:"full"},inputEl:{default:null}},emits:["submit","update:visible"],setup(e,{emit:t}){const n=t,s=Se(),o=De(s,"isDark"),i=p(0),a=p(0),l=p(null),r=p(e.value),v=[String.raw`\v`,String.raw`\c`,"^","$","\\"],y=["⬅","space","del","backspace","⮕"],_=at(),c=p(null);ee(()=>{c.value=l.value||e.inputEl},{flush:"sync"}),ee(()=>{r.value=e.value});function u(h){r.value=h,ie()}function E(){n("update:visible",!1)}function I(){n("submit",r.value),E()}function ie(){var h,d;i.value=((h=c.value)==null?void 0:h.selectionStart)||0,a.value=((d=c.value)==null?void 0:d.selectionEnd)||0}async function Te(){await Qe(20),ie()}function X(h){if(!c.value)return;const d=r.value;i.value=c.value.selectionStart||0,a.value=c.value.selectionEnd||0;const{buttonValueMod:f,selectionStartMod:O,selectionEndMod:S}=Me({buttonValue:h,selectionStart:i.value,selectionEnd:a.value,existingValue:d});c.value.value=d.slice(0,O)+f+d.slice(S,d.length),r.value=c.value.value,c.value.focus(),i.value=c.value.selectionStart=O+f.length,a.value=c.value.selectionEnd=O+f.length,e.type==="regex"&&n("submit",r.value)}Ge(()=>{l.value=document.querySelector(".keyboard-wrapper .v-text-field input"),i.value=a.value=e.value.length});function Me({buttonValue:h,selectionStart:d,selectionEnd:f,existingValue:O}){let S,w=d,x=f;return h==="backspace"?(d>0&&d===f&&(w=d-1),S=""):h==="del"?(d<O.length&&d===f&&(x=f+1),S=""):h==="space"?S=" ":h==="⬅"?(d<f?x=d:(w=Math.max(0,d-1),x=w),S=""):h==="⮕"?(d<f?w=f:(w=Math.min(O.length,d+1),x=w),S=""):(S=h,w=d,x=f),{buttonValueMod:S,selectionStartMod:w,selectionEndMod:x}}return(h,d)=>h.visible?(g(),C("div",{key:0,class:T([h.type,"keyboard-wrapper"])},[ae("div",rt,[h.type==="full"?(g(),te(Ke,{key:0,label:h.inputName,"model-value":r.value,class:"input",density:"compact",variant:"outlined",clearable:"",onFocus:Te,"onUpdate:modelValue":u,onKeyup:$e(I,["enter","native"])},null,8,["label","model-value"])):b("",!0),ae("div",lt,[v?(g(),C(L,{key:0},U(v,f=>Y($,{key:f,color:"warning",variant:"outlined",class:T({invert:o.value}),rounded:"",onClick:O=>X(f)},{default:D(()=>[G(F(f),1)]),_:2},1032,["class","onClick"])),64)):b("",!0),ne(_)&&h.type==="full"?(g(!0),C(L,{key:1},U(ne(_),f=>(g(),te($,{key:f,variant:"outlined",rounded:"",onClick:O=>X(f)},{default:D(()=>[G(F(f),1)]),_:2},1032,["onClick"]))),128)):b("",!0)]),y&&h.type==="full"?(g(),C("div",ct,[(g(),C(L,null,U(y,f=>Y($,{key:f,class:T({invert:o.value}),color:"teal",rounded:"",size:"large",variant:"outlined",onClick:O=>X(f)},{default:D(()=>[G(F(f),1)]),_:2},1032,["class","onClick"])),64))])):b("",!0),h.type==="full"?(g(),C("div",ut,[Y($,{class:"mr-5",variant:"outlined",onClick:E},{default:D(()=>d[0]||(d[0]=[G(" Cancel ")])),_:1}),Y($,{color:"primary",variant:"outlined",class:T({invert:o.value}),onClick:I},{default:D(()=>d[1]||(d[1]=[G(" Search ")])),_:1},8,["class"])])):b("",!0)])],2)):b("",!0)}}),sn=se(dt,[["__scopeId","data-v-0465c6c1"]]),ft=Symbol("isEager"),ht={isEager:ft},on=J({__name:"InfiniteScroll",props:{el:{default:null},items:{},chunkSize:{default:50}},setup(e){const t=Ue(ht.isEager,p(!1)),n=Fe([]);je(t,()=>{n.value=e.items});const s=p(null),o=p(0),i=p(null);ee(()=>{o.value=e.chunkSize,i.value=e.el||s.value});const a=R(()=>e.items.slice(0,o.value)),l=R(()=>t.value?n.value:a.value);return Be(i,()=>{o.value+=e.chunkSize},{distance:50,canLoadMore:()=>!t.value&&o.value<e.items.length}),(r,v)=>(g(),C("div",{ref_key:"internalEl",ref:s},[He(r.$slots,"default",{items:l.value})],512))}});var re;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(re||(re={}));/**
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
 */var le;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(le||(le={}));var ce;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(ce||(ce={}));/**
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
 */const ue=["user","model","function","system"];var de;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(de||(de={}));var fe;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(fe||(fe={}));var he;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(he||(he={}));var ge;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(ge||(ge={}));var j;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"})(j||(j={}));var ve;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(ve||(ve={}));var Ee;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(Ee||(Ee={}));var Ce;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(Ce||(Ce={}));/**
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
 */class m extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class k extends m{constructor(t,n){super(t),this.response=n}}class we extends m{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class N extends m{}/**
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
 */const gt="https://generativelanguage.googleapis.com",vt="v1beta",Et="0.21.0",Ct="genai-js";var M;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(M||(M={}));class mt{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||vt;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||gt}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function pt(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${Ct}/${Et}`),t.join(" ")}async function yt(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",pt(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new N(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new N(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new N(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function _t(e,t,n,s,o,i){const a=new mt(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},St(i)),{method:"POST",headers:await yt(a),body:o})}}async function K(e,t,n,s,o,i={},a=fetch){const{url:l,fetchOptions:r}=await _t(e,t,n,s,o,i);return Rt(l,r,a)}async function Rt(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){It(o,e)}return s.ok||await Ot(s,e),s}function It(e,t){let n=e;throw e instanceof we||e instanceof N||(n=new m(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Ot(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new we(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function St(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function oe(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),z(e.candidates[0]))throw new k(`${A(e)}`,e);return wt(e)}else if(e.promptFeedback)throw new k(`Text not available. ${A(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),z(e.candidates[0]))throw new k(`${A(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),me(e)[0]}else if(e.promptFeedback)throw new k(`Function call not available. ${A(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),z(e.candidates[0]))throw new k(`${A(e)}`,e);return me(e)}else if(e.promptFeedback)throw new k(`Function call not available. ${A(e)}`,e)},e}function wt(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function me(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const bt=[j.RECITATION,j.SAFETY,j.LANGUAGE];function z(e){return!!e.finishReason&&bt.includes(e.finishReason)}function A(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];z(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function B(e){return this instanceof B?(this.v=e,this):new B(e)}function At(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(c){s[c]&&(o[c]=function(u){return new Promise(function(E,I){i.push([c,u,E,I])>1||l(c,u)})})}function l(c,u){try{r(s[c](u))}catch(E){_(i[0][3],E)}}function r(c){c.value instanceof B?Promise.resolve(c.value.v).then(v,y):_(i[0][2],c)}function v(c){l("next",c)}function y(c){l("throw",c)}function _(c,u){c(u),i.shift(),i.length&&l(i[0][0],i[0][1])}}/**
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
 */const pe=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Nt(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=xt(t),[s,o]=n.tee();return{stream:Mt(s),response:Tt(o)}}async function Tt(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return oe(kt(t));t.push(o)}}function Mt(e){return At(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield B(n.read());if(o)break;yield yield B(oe(s))}})}function xt(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:a,done:l})=>{if(l){if(o.trim()){s.error(new m("Failed to parse stream"));return}s.close();return}o+=a;let r=o.match(pe),v;for(;r;){try{v=JSON.parse(r[1])}catch{s.error(new m(`Error parsing JSON response: "${r[1]}"`));return}s.enqueue(v),o=o.substring(r[0].length),r=o.match(pe)}return i()})}}})}function kt(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const l of o.content.parts)l.text&&(a.text=l.text),l.functionCall&&(a.functionCall=l.functionCall),l.executableCode&&(a.executableCode=l.executableCode),l.codeExecutionResult&&(a.codeExecutionResult=l.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function be(e,t,n,s){const o=await K(t,M.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return Nt(o)}async function Ae(e,t,n,s){const i=await(await K(t,M.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:oe(i)}}/**
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
 */function Ne(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function H(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Lt(t)}function Lt(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new m("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new m("No content is provided for sending chat message.");return s?t:n}function Dt(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new N("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=H(e);s.contents=[i]}return{generateContentRequest:s}}function ye(e){let t;return e.contents?t=e:t={contents:[H(e)]},e.systemInstruction&&(t.systemInstruction=Ne(e.systemInstruction)),t}function Gt(e){return typeof e=="string"||Array.isArray(e)?{content:H(e)}:e}/**
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
 */const _e=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],$t={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ut(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new m(`First content should be with role 'user', got ${s}`);if(!ue.includes(s))throw new m(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(ue)}`);if(!Array.isArray(o))throw new m("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new m("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of o)for(const r of _e)r in l&&(i[r]+=1);const a=$t[s];for(const l of _e)if(!a.includes(l)&&i[l]>0)throw new m(`Content with role '${s}' can't contain '${l}' part`);t=!0}}/**
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
 */const Re="SILENT_ERROR";class Ft{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Ut(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,a,l,r;await this._sendPromise;const v=H(t),y={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,v]},_=Object.assign(Object.assign({},this._requestOptions),n);let c;return this._sendPromise=this._sendPromise.then(()=>Ae(this._apiKey,this.model,y,_)).then(u=>{var E;if(u.response.candidates&&u.response.candidates.length>0){this._history.push(v);const I=Object.assign({parts:[],role:"model"},(E=u.response.candidates)===null||E===void 0?void 0:E[0].content);this._history.push(I)}else{const I=A(u.response);I&&console.warn(`sendMessage() was unsuccessful. ${I}. Inspect response object for details.`)}c=u}),await this._sendPromise,c}async sendMessageStream(t,n={}){var s,o,i,a,l,r;await this._sendPromise;const v=H(t),y={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(r=this.params)===null||r===void 0?void 0:r.cachedContent,contents:[...this._history,v]},_=Object.assign(Object.assign({},this._requestOptions),n),c=be(this._apiKey,this.model,y,_);return this._sendPromise=this._sendPromise.then(()=>c).catch(u=>{throw new Error(Re)}).then(u=>u.response).then(u=>{if(u.candidates&&u.candidates.length>0){this._history.push(v);const E=Object.assign({},u.candidates[0].content);E.role||(E.role="model"),this._history.push(E)}else{const E=A(u);E&&console.warn(`sendMessageStream() was unsuccessful. ${E}. Inspect response object for details.`)}}).catch(u=>{u.message!==Re&&console.error(u)}),c}}/**
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
 */async function jt(e,t,n,s){return(await K(t,M.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function Bt(e,t,n,s){return(await K(t,M.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Ht(e,t,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await K(t,M.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class Ie{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ne(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=ye(t),i=Object.assign(Object.assign({},this._requestOptions),n);return Ae(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=ye(t),i=Object.assign(Object.assign({},this._requestOptions),n);return be(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new Ft(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Dt(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return jt(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=Gt(t),o=Object.assign(Object.assign({},this._requestOptions),n);return Bt(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Ht(this.apiKey,this.model,t,s)}}/**
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
 */class Kt{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new m("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Ie(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new N("Cached content must contain a `name` field.");if(!t.model)throw new N("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&t[a]&&(n==null?void 0:n[a])!==t[a]){if(a==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,r=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(l===r)continue}throw new N(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${t[a]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new Ie(this.apiKey,i,s)}}const Yt="AIzaSyBa_4MJS5ZVbyBKcYDQAYukKvKRYGta7vc",Oe=new Kt(Yt),Z=Oe&&Oe.getGenerativeModel({model:"gemini-1.5-flash"}),qt=e=>{const t=p(!1),n=p(!1),s=e.join(" or ");function o(a){return`extract only ${s} parts of the following text, give their translation into english, no other commentaries or explanations, return html fragment not md, give translations of the words in ${s} if they differ from forms used: ${a}, wrap in html tags and add bullets for readability`}async function i(a){t.value=!0;const l=o(a),r=await(Z==null?void 0:Z.generateContent(l)),v=await(r==null?void 0:r.response.text().replace(/`/g,"").replace(/^html/,"").replace(a,""))||"";return t.value=!1,n.value=!0,v}return{isLoading:t,isReady:n,getTranslation:i}},Vt=["innerHTML"],Pt=J({__name:"TranslateAI",props:{languages:{default:()=>[]},str:{}},setup(e){const t=p(),n=p(!1);async function s(){if(!e.languages.length||n.value)return;const{getTranslation:o}=qt(e.languages);n.value=!0,t.value=await o(e.str),n.value=!1}return(o,i)=>(g(),C(L,null,[t.value?(g(),C("div",{key:1,class:"hint",onClick:i[0]||(i[0]=a=>t.value="")},"Collapse")):(g(),C("div",{key:0,onClick:s,class:T(["hint",{shimmer:n.value}])},F(`Translate from ${o.languages.join(" and ")}`),3)),t.value?(g(),C("div",{key:2,innerHTML:t.value,class:"translation"},null,8,Vt)):b("",!0)],64))}}),zt=se(Pt,[["__scopeId","data-v-6b1d56a4"]]),Jt=J({__name:"GrepLine",props:{str:{default:""},searcher:{default:()=>new W},lineName:{default:""},translationLanguage:{type:[String,Boolean]}},setup(e){const{isDark:t}=Se(),n=R(()=>e.str.split(`
`)),s=R(()=>n.value.map(r=>!e.searcher||e.searcher.isEmpty?[r]:Ye(r,e.searcher.regex))),o=R(()=>e.lineName===V.title),i=R(()=>!e.lineName||e.lineName===V.textus),a=R(()=>e.lineName===V.versio),l=R(()=>({"line-title":o.value,textus:i.value,versio:a.value}));return(r,v)=>(g(),C("div",{class:T([l.value,"grep-line"])},[(g(!0),C(L,null,U(s.value,(y,_)=>(g(),C("div",{key:_},[(g(!0),C(L,null,U(y,(c,u)=>(g(),C("span",{key:u,class:T({highlight:u%2,invert:ne(t)})},F(c),3))),128))]))),128)),r.translationLanguage?(g(),te(zt,{key:0,languages:[r.translationLanguage],str:r.str},null,8,["languages","str"])):b("",!0)],2))}}),an=se(Jt,[["__scopeId","data-v-1e986bbd"]]);export{tn as D,an as G,ht as I,sn as K,P as L,nn as S,on as _,en as a,qe as b,W as c,Qe as s,Xe as u};
