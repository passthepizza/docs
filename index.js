"use strict";
(()=>{
    var V=Object.defineProperty,Z=Object.defineProperties;
    var tt=Object.getOwnPropertyDescriptors;
    var k=Object.getOwnPropertySymbols;
    var et=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;
    var M=(e,i,t)=>i in e?V(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,C=(e,i)=>{for(var t in i||(i={}))et.call(i,t)&&M(e,t,i[t]);if(k)for(var t of k(i))ot.call(i,t)&&M(e,t,i[t]);return e},P=(e,i)=>Z(e,tt(i));
    var R=(e,i,t)=>new Promise((l,s)=>{var f=n=>{try{a(t.next(n))}catch(c){s(c)}},r=n=>{try{a(t.throw(n))}catch(c){s(c)}},a=n=>n.done?l(n.value):Promise.resolve(n.value).then(f,r);a((t=t.apply(e,i)).next())});

    var U=()=>{let e=()=>{let i=document.location.href,t=document.querySelector("body"),l=new MutationObserver(()=>{i!==document.location.href&&(i=document.location.href,window.top&&(window.top.postMessage({type:"URL_CHANGED",url:document.location.href},"http://localhost:3000")))});t&&l.observe(t,{childList:!0,subtree:!0})};window.addEventListener("load",e)};

    var O=e=>{var l;(l=window.top)==null||l.postMessage(e,"http://localhost:3000")};

    var nt=e=>{let i=window.fetch;window.fetch=function(...t){return R(this,null,function*(){var l,s,f;try{let r=yield i(...t);if(!r.ok){let a=r!=null&&r.text?yield r.text():void 0;e("non_200_response",P(C({},r),{status:r.status,url:(t==null?void 0:t[0])||r.url,body:a,method:((l=t==null?void 0:t[1])==null?void 0:l.method)||"GET",origin:window.location.origin}))}return r}catch(r){if(r instanceof TypeError)e("fetch_error",{message:r==null?void 0:r.message,stack:r==null?void 0:r.stack,url:t==null?void 0:t[0],method:((s=t==null?void 0:t[1])==null?void 0:s.method)||"GET",origin:window.location.origin});else{let a={url:t==null?void 0:t[0],method:((f=t==null?void 0:t[1])==null?void 0:f.method)||"GET",origin:window.location.origin,message:"Unknown fetch error",stack:"Not available"};typeof r=="object"&&r!==null&&"message"in r&&typeof r.message=="string"&&(a.message=r.message),typeof r=="object"&&r!==null&&"stack"in r&&typeof r.stack=="string"&&(a.stack=r.stack),e("fetch_error",a)}throw r}})}},W=(()=>{let e=!1,i=({message:t,lineno:l,colno:s,filename:f,error:r})=>({message:t,lineno:l,colno:s,filename:f,stack:r==null?void 0:r.stack});return()=>{if(e)return;let t=new Set,l=a=>{let{lineno:n,colno:c,filename:E,message:y}=a;return`${y}|${E}|${n}|${c}`};nt((a,n)=>R(void 0,null,function*(){a==="non_200_response"?O({type:"FETCH_ERROR",error:{message:`failed to call url ${n.url} with status ${n.status} and statusText ${n.statusText}`,status:n.status,statusText:n.statusText,url:n.url,body:n.body}}):a==="fetch_error"&&O({type:"FETCH_ERROR",error:n})}));let f=a=>t.has(a)?!0:(t.add(a),setTimeout(()=>t.delete(a),5e3),!1),r=a=>{let n=l(a);if(f(n))return;let c=i(a);O({type:"RUNTIME_ERROR",error:c})};window.addEventListener("error",r),window.addEventListener("unhandledrejection",a=>{var E,y,_,T,A;if(!((E=a.reason)!=null&&E.stack))return;let n=((y=a.reason)==null?void 0:y.stack)||((_=a.reason)==null?void 0:_.message)||String(a.reason);if(f(n))return;let c={message:((T=a.reason)==null?void 0:T.message)||"Unhandled promise rejection",stack:((A=a.reason)==null?void 0:A.stack)||String(a.reason)};O({type:"UNHANDLED_PROMISE_REJECTION",error:c})}),e=!0}})();

    var G=class{constructor(i){this.message=`[Circular Reference to ${i}]`}},u=class{constructor(i,t){this._type=i,this.value=t}},rt={maxDepth:10,indent:2,includeSymbols:!0,preserveTypes:!0,maxStringLength:1e4,maxArrayLength:100,maxObjectKeys:100};
    function L(e,i={},t=new WeakMap,l="root"){let s=C(C({},rt),i);if(l.split(".").length>s.maxDepth)return new u("MaxDepthReached",`[Max depth of ${s.maxDepth} reached]`);if(e===void 0)return new u("undefined","undefined");if(e===null)return null;if(typeof e=="string")return e.length>s.maxStringLength?new u("String",`${e.slice(0,s.maxStringLength)}... [${e.length-s.maxStringLength} more characters]`):e;if(typeof e=="number")return Number.isNaN(e)?new u("Number","NaN"):Number.isFinite(e)?e:new u("Number",e>0?"Infinity":"-Infinity");if(typeof e=="boolean")return e;if(typeof e=="bigint")return new u("BigInt",e.toString());if(typeof e=="symbol")return new u("Symbol",e.toString());if(typeof e=="function")return new u("Function",{name:e.name||"anonymous",stringValue:e.toString().slice(0,s.maxStringLength)});if(e&&typeof e=="object"){if(t.has(e))return new G(t.get(e));t.set(e,l)}if(e instanceof Error){let n={name:e.name,message:e.message,stack:e.stack};for(let c of Object.getOwnPropertyNames(e))n[c]||(n[c]=L(e[c],s,t,`${l}.${c}`));return new u("Error",n)}if(e instanceof Date)return new u("Date",{iso:e.toISOString(),value:e.valueOf(),local:e.toString()});if(e instanceof RegExp)return new u("RegExp",{source:e.source,flags:e.flags,string:e.toString()});if(e instanceof Promise)return new u("Promise","[Promise]");if(e instanceof WeakMap||e instanceof WeakSet)return new u(e.constructor.name,"["+e.constructor.name+"]");if(e instanceof Set){let n=Array.from(e);return n.length>s.maxArrayLength?new u("Set",{values:n.slice(0,s.maxArrayLength).map((c,E)=>L(c,s,t,`${l}.Set[${E}]`)),truncated:n.length-s.maxArrayLength}):new u("Set",{values:n.map((c,E)=>L(c,s,t,`${l}.Set[${E}]`))})}if(e instanceof Map){let n={},c=0,E=0;for(let[y,_]of e.entries()){if(E>=s.maxObjectKeys){c++;continue}let T=typeof y=="object"?JSON.stringify(L(y,s,t,`${l}.MapKey`)):String(y);n[T]=L(_,s,t,`${l}.Map[${T}]`),E++}return new u("Map",{entries:n,truncated:c||void 0})}if(ArrayBuffer.isView(e)){let n=e;return new u(e.constructor.name,{length:n.length,byteLength:n.byteLength,sample:Array.from(n.slice(0,10))})}if(Array.isArray(e))return e.length>s.maxArrayLength?e.slice(0,s.maxArrayLength).map((n,c)=>L(n,s,t,`${l}[${c}]`)).concat([`... ${e.length-s.maxArrayLength} more items`]):e.map((n,c)=>L(n,s,t,`${l}[${c}]`));let f={},r=[...Object.getOwnPropertyNames(e)];s.includeSymbols&&r.push(...Object.getOwnPropertySymbols(e).map(n=>n.toString()));let a=0;return r.slice(0,s.maxObjectKeys).forEach(n=>{try{let c=e[n];f[n]=L(c,s,t,`${l}.${n}`)}catch(c){f[n]=new u("Error",`[Unable to serialize: ${c.message}]`)}}),r.length>s.maxObjectKeys&&(a=r.length-s.maxObjectKeys,f["..."]=`${a} more properties`),f}
    var st={log:console.log,warn:console.warn,error:console.error},it={log:"info",warn:"warning",error:"error"},j=(()=>{let e=!1;return()=>{if(e)return;let i=t=>{console[t]=(...l)=>{st[t].apply(console,l);let s=null;if(t==="warn"||t==="error"){let r=new Error;r.stack&&(s=r.stack.split(`
`).slice(2).join(`
`))}let f=l.map(r=>L(r,{maxDepth:5,includeSymbols:!0,preserveTypes:!0}));O({type:"CONSOLE_OUTPUT",level:it[t],message:f.map(r=>typeof r=="string"?r:JSON.stringify(r,null,2)).join(" ")+(s?`
`+s:""),logged_at:new Date().toISOString(),raw:f})}};i("log"),i("warn"),i("error"),e=!0}})();

    var K=(()=>{
        let e={
            HIGHLIGHT_COLOR:"#4282C1",
            HIGHLIGHT_BG:"#4285f41a",
            ALLOWED_ORIGINS:["http://localhost:3000"],
            DEBOUNCE_DELAY:10,
            Z_INDEX:1e4,
            TOOLTIP_OFFSET:25,
            MAX_TOOLTIP_WIDTH:200,
            SCROLL_DEBOUNCE:420,
            FULL_WIDTH_TOOLTIP_OFFSET:"12px",
            HIGHLIGHT_STYLE:{
                FULL_WIDTH:{OFFSET:"-10px",STYLE:"solid"},
                NORMAL:{OFFSET:"0",STYLE:"solid"}
            }
        };

        class i {
            constructor(){
                this.hoveredElement=null;
                this.isActive=!1;
                this.tooltip=null;
                this.scrollTimeout=null;
                this.mouseX=0;
                this.mouseY=0;
                this.styleElement=null;
            }
            reset(){
                this.hoveredElement=null;
                this.scrollTimeout=null;
            }
        }
        let t = new i;

        let l=(o,d)=>{
            let m;
            return(...h)=>{
                clearTimeout(m);
                m=setTimeout(()=>o(...h),d);
            }
        };

        let s=o=>{
            e.ALLOWED_ORIGINS.forEach(d=>{
                try{
                    if(!window.parent)return;
                    if(!o||typeof o!="object"){console.error("Invalid message format");return}
                    window.parent.postMessage(o,d);
                } catch(m) {
                    console.error(`Failed to send message to ${d}:`,m);
                }
            });
        };

        let f=()=>{
            t.tooltip=document.createElement("div");
            t.tooltip.className="elem-sel-tooltip";
            t.tooltip.setAttribute("role","tooltip");
            document.body.appendChild(t.tooltip);
            let o=document.createElement("style");
            o.textContent=`
                .elem-sel-tooltip {
                  position: fixed;
                  z-index: ${e.Z_INDEX};
                  pointer-events: none;
                  background-color: ${e.HIGHLIGHT_COLOR};
                  color: white;
                  padding: 4px 8px;
                  border-radius: 4px;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 1;
                  white-space: nowrap;
                  display: none;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  transition: opacity 0.2s ease-in-out;
                  margin: 0;
                }
            `;
            document.head.appendChild(o);
        };

        let r=o=>{
            if(!t.tooltip || !o) return;
            try {
                let d=o.getBoundingClientRect();
                let m=o.tagName.toLowerCase();
                let h=Math.abs(d.width - window.innerWidth) < 5;
                t.tooltip.style.maxWidth = `${e.MAX_TOOLTIP_WIDTH}px`;
                if(h) {
                    t.tooltip.style.left = e.FULL_WIDTH_TOOLTIP_OFFSET;
                    t.tooltip.style.top = e.FULL_WIDTH_TOOLTIP_OFFSET;
                } else {
                    let I = Math.max(0, d.top - e.TOOLTIP_OFFSET);
                    t.tooltip.style.left = `${Math.max(0, d.left)}px`;
                    t.tooltip.style.top = `${I}px`;
                }
                t.tooltip.textContent = m;
            } catch(d) {
                console.error("Error updating tooltip:", d);
                x();
            }
        };

        let a=o=>{
            let m = Math.abs(o.getBoundingClientRect().width - window.innerWidth) < 5 ? e.HIGHLIGHT_STYLE.FULL_WIDTH : e.HIGHLIGHT_STYLE.NORMAL;
            o.style.outline = `2px ${m.STYLE} ${e.HIGHLIGHT_COLOR}`;
            o.style.outlineOffset = m.OFFSET;
            o.style.backgroundColor = e.HIGHLIGHT_BG;
            if(t.isActive) {
                o.style.cursor = "crosshair";
            }
        };

        let n=o=>{
            o.style.outline="";
            o.style.outlineOffset="";
            o.style.backgroundColor="";
            o.style.cursor="";
        };

        let c=o=>{
            let d=o.tagName.toLowerCase()==="svg";
            let m=o.closest("svg")!==null;
            return !d && m;
        };

        let E=o=>o.hasAttribute("data-component-path") && o.hasAttribute("data-component-file") && o.hasAttribute("data-component-line");

        let y=l(o=>{
            if (!t.isActive || !E(o.target) || o.target.tagName.toLowerCase()==="html" || c(o.target)) return;
            if(t.hoveredElement) {
                let h = `[data-component-path="${t.hoveredElement.getAttribute("data-component-path")}"][data-component-file="${t.hoveredElement.getAttribute("data-component-file")}"][data-component-line="${t.hoveredElement.getAttribute("data-component-line")}"]`;
                document.querySelectorAll(h).forEach(p => {
                    if (!p.classList.contains("elem-sel-active")) {
                        n(p);
                    }
                });
            }
            t.hoveredElement = o.target;
            let d = `[data-component-path="${o.target.getAttribute("data-component-path")}"][data-component-file="${o.target.getAttribute("data-component-file")}"][data-component-line="${o.target.getAttribute("data-component-line")}"]`;
            document.querySelectorAll(d).forEach(h => {
                 if (!h.classList.contains("elem-sel-active")) {
                    a(h);
                 }
            });
            r(t.hoveredElement);
            if(t.tooltip) {
                t.tooltip.style.display = "block";
                t.tooltip.style.opacity = "1";
            }
        }, e.DEBOUNCE_DELAY);

        let _=o=>{
            let d=o.getAttribute("data-component-path")||null;
            let m=o.getAttribute("data-component-file")||null;
            let h=o.tagName.toLowerCase();
            let I=parseInt(o.getAttribute("data-component-line")||"0",10);
            let p=o.getAttribute("data-component-content")||null;
            let S=Array.from(o.children)
                .filter(g=>E(g) && g.getAttribute("data-component-path") !== d)
                .filter((g, H, N) => H === N.findIndex(D => D.getAttribute("data-component-path") === g.getAttribute("data-component-path")))
                .map(g=>({
                    filePath: g.getAttribute("data-component-path"),
                    fileName: g.getAttribute("data-component-file"),
                    elementType: g.tagName.toLowerCase(),
                    lineNumber: parseInt(g.getAttribute("data-component-line")||"0",10),
                    content: g.getAttribute("data-component-content")||null
                }));
            return {filePath:d, fileName:m, elementType:h, lineNumber:I, content:p, children:S};
        };

        let T=o=>{
            if(t.isActive && E(o.target) && o.target.tagName.toLowerCase() !== "html" && !c(o.target)) {
                o.preventDefault();
                o.stopPropagation();
                if (t.hoveredElement) {
                    let d = _(t.hoveredElement);
                    t.hoveredElement.classList.add("elem-sel-active");
                    let m = Math.abs(t.hoveredElement.getBoundingClientRect().width - window.innerWidth) < 5;
                    let h = m ? e.HIGHLIGHT_STYLE.FULL_WIDTH : e.HIGHLIGHT_STYLE.NORMAL;
                    if (m) {
                        t.hoveredElement.style.outline = `2px solid ${e.HIGHLIGHT_COLOR}`;
                        t.hoveredElement.style.outlineOffset = h.OFFSET;
                    } else {
                         t.hoveredElement.style.outline = `2px solid ${e.HIGHLIGHT_COLOR}`;
                         t.hoveredElement.style.outlineOffset = "0";
                    }
                    t.hoveredElement.style.backgroundColor = `${e.HIGHLIGHT_BG}`;
                    s({ type:"ELEMENT_CLICKED", payload:d, isMultiSelect: o.metaKey || o.ctrlKey });
                    if (!(o.metaKey || o.ctrlKey)) {
                         s({ type:"TOGGLE_PICK_AND_EDIT_REQUESTED", payload: false });
                    }
                }
            }
        };

        let A=l(()=>{
            if(t.isActive) {
                if(t.hoveredElement) {
                     let o = `[data-component-path="${t.hoveredElement.getAttribute("data-component-path")}"][data-component-file="${t.hoveredElement.getAttribute("data-component-file")}"][data-component-line="${t.hoveredElement.getAttribute("data-component-line")}"]`;
                     document.querySelectorAll(o).forEach(m => {
                         if (!m.classList.contains("elem-sel-active")) {
                            n(m);
                         }
                     });
                    t.hoveredElement=null;
                }
                x();
            }
        }, e.DEBOUNCE_DELAY);

        let x=()=>{
            if (t.tooltip) {
                t.tooltip.style.opacity="0";
                setTimeout(() => {
                    if (t.tooltip) t.tooltip.style.display = "none";
                }, 200);
            }
        };

        let $=()=>{
            t.scrollTimeout && clearTimeout(t.scrollTimeout);
            x();
            if(t.hoveredElement && !t.hoveredElement.classList.contains("elem-sel-active")){
                 n(t.hoveredElement);
            }
            t.scrollTimeout = setTimeout(()=>{
                t.scrollTimeout = null;
                let o = document.elementFromPoint(t.mouseX, t.mouseY);
                if (o && t.isActive) {
                    y({ target: o });
                }
            }, e.SCROLL_DEBOUNCE);
        };

        let v=o=>{
            if(t.isActive && (o.target.tagName.toLowerCase()==="input" || o.target.tagName.toLowerCase()==="textarea" || o.target.tagName.toLowerCase()==="select")) {
                o.preventDefault();
            }
        };

         let w=o=>{
            if(t.isActive) {
                o.preventDefault();
                o.stopPropagation();
                return false;
            }
        };

        let B=()=>{
            document.addEventListener("mouseover", y);
            document.addEventListener("mouseout", A);
            document.addEventListener("click", T, true);
            window.addEventListener("scroll", $, { passive: true });
            document.addEventListener("mousedown", v, true);
            let o = document.createElement("style");
            o.textContent=`
                * {
                  transition: none !important;
                  animation: none !important;
                  translate: none !important;
                  scroll-behavior: auto !important;
                  cursor: crosshair !important;
                }
            `;
            document.head.appendChild(o);
            t.styleElement = o;
            document.addEventListener("click", w, true);
            document.addEventListener("submit", w, true);
            document.addEventListener("touchstart", w, true);
            document.addEventListener("touchend", w, true);
        };

        let F=()=>{
            document.removeEventListener("mouseover", y);
            document.removeEventListener("mouseout", A);
            document.removeEventListener("click", T, true);
            window.removeEventListener("scroll", $);
            document.removeEventListener("mousedown", v, true);
            document.removeEventListener("click", w, true);
            document.removeEventListener("submit", w, true);
            document.removeEventListener("touchstart", w, true);
            document.removeEventListener("touchend", w, true);
            if (t.styleElement) {
                t.styleElement.remove();
                t.styleElement = null;
            }
            document.body.style.cursor = "";
            document.body.style.userSelect = "";
            document.body.style.msUserSelect = "";
            document.body.style.mozUserSelect = "";
            if(t.hoveredElement && !t.hoveredElement.classList.contains("elem-sel-active")) {
                 n(t.hoveredElement);
                 t.hoveredElement=null;
            }
            x();
        };

        let z=o=>{
            if (o.key === "Escape" && t.isActive) {
                o.preventDefault();
                o.stopPropagation();
                s({ type: "TOGGLE_PICK_AND_EDIT_REQUESTED", payload: false });
                return;
            }
            if ((o.altKey && o.key.toLowerCase() === "s") || o.key === "\xDF") {
                 o.preventDefault();
                 o.stopPropagation();
                 s({ type: "TOGGLE_PICK_AND_EDIT_REQUESTED", payload: null });
            }
        };

        let q = (o, d) => document.elementFromPoint(o, d);

        let X=o=>{
             var d;
             try {
                if (!(o?.origin) || !((d = o?.data)?.type) || !e.ALLOWED_ORIGINS.includes(o.origin)) {
                    return;
                }
                switch(o.data.type) {
                    case "TOGGLE_SELECTOR":
                        let m = !!o.data.payload;
                        if (t.isActive !== m) {
                            t.isActive = m;
                            if (t.isActive) {
                                let p = q(t.mouseX, t.mouseY);
                                p && y({ target: p });
                                B();
                            } else {
                                F();
                                document.querySelectorAll('[style*="outline"], [style*="background-color"]').forEach(S => {
                                     if (!S.classList.contains('elem-sel-active')) {
                                        n(S);
                                        S.style.cursor = "";
                                     }
                                });
                                t.reset();
                            }
                        }
                        break;
                     case "UPDATE_SELECTED_ELEMENTS":
                        if (!Array.isArray(o.data.payload)) {
                            console.error("Invalid payload for UPDATE_SELECTED_ELEMENTS");
                            return;
                        }
                        let h = o.data.payload;
                        document.querySelectorAll(".elem-sel-active").forEach(p => {
                            p.classList.remove("elem-sel-active");
                            if (p !== t.hoveredElement) {
                                n(p);
                            }
                        });
                        h.forEach(p => {
                            if (!(p?.filePath) || !(p?.fileName) || !(p?.lineNumber)) {
                                console.error("Invalid element data:", p);
                                return;
                            }
                            let { filePath: S, fileName: g, lineNumber: H } = p;
                            let N = `[data-component-path="${S}"][data-component-file="${g}"][data-component-line="${H}"]`;
                            document.querySelectorAll(N).forEach(b => {
                                b.classList.add("elem-sel-active");
                                let isFullWidth = Math.abs(b.getBoundingClientRect().width - window.innerWidth) < 5;
                                if (isFullWidth) {
                                    b.style.outline = `2px solid ${e.HIGHLIGHT_COLOR}`;
                                    b.style.outlineOffset = e.HIGHLIGHT_STYLE.FULL_WIDTH.OFFSET;
                                } else {
                                     b.style.outline = `2px solid ${e.HIGHLIGHT_COLOR}`;
                                     b.style.outlineOffset = "0";
                                }
                                b.style.backgroundColor = `${e.HIGHLIGHT_BG}`;
                            });
                        });
                        break;
                    case "GET_SELECTOR_STATE":
                        s({ type: "SELECTOR_STATE_RESPONSE", payload: { isActive: t.isActive }});
                        break;
                    default:
                        console.warn("Unknown message type:", o.data.type);
                }
             } catch (m) {
                 console.error("Error handling message:", m);
                 F();
                 t.reset();
             }
        };

        let J=o=>{
            t.mouseX = o.clientX;
            t.mouseY = o.clientY;
        };

        let Q=()=>{
            s({ type: "REQUEST_PICKER_STATE" });
            s({ type: "REQUEST_SELECTED_ELEMENTS" });
        };

        (()=>{
            try {
                window.addEventListener("message", X);
                document.addEventListener("keydown", z);
                document.addEventListener("mousemove", J);
                s({ type: "SELECTOR_SCRIPT_LOADED" });
                Q();
            } catch (o) {
                console.error("Failed to initialize selector script:", o);
            }
        })();

    })();


    var Y=()=>{
        let e=document.createElement("script");
        e.textContent=`
            ${K}
        `;
        document.head.appendChild(e);
    };

    var at=()=>{
        if (window.top !== window.self) {
            U();
            W()();
            j()();
        }
    };
    at();

})();
