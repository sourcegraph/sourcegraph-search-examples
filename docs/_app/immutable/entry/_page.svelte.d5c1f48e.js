import{S as B,i as H,s as K,k as b,q as L,a as S,l as x,m as A,r as G,h as p,c as R,n as _,b as F,G as g,J as ue,H as W,K as X,L as he,e as te,u as Y,g as P,v as de,f as ge,d as M,y as J,z as q,A as z,B as Q,w as pe,M as me,N as _e,o as Ee}from"../chunks/index.d3eba4ba.js";const y={FRAMEWORK:"Framework",LANGUAGE:"Language",PATTERN_TYPE:"Pattern Type",PLATFORM:"Platform",USE_CASE:"Use Case"},ve=[{name:"OAuth2",category:y.FRAMEWORK,tag:"framework:oauth2"},{name:"React",category:y.FRAMEWORK,tag:"framework:react"},{name:"Go",category:y.LANGUAGE,tag:"language:go"},{name:"Java",category:y.LANGUAGE,tag:"language:java"},{name:"JavaScript",category:y.LANGUAGE,tag:"language:javascript"},{name:"JSON",category:y.LANGUAGE,tag:"language:json"},{name:"Ruby",category:y.LANGUAGE,tag:"language:ruby"},{name:"TypeScript",category:y.LANGUAGE,tag:"language:typescript"},{name:"YAML",category:y.LANGUAGE,tag:"language:yaml"},{name:"Literal",category:y.PATTERN_TYPE,tag:"pattern_type:literal"},{name:"Regular Expression",category:y.PATTERN_TYPE,tag:"pattern_type:regexp"},{name:"Structural",category:y.PATTERN_TYPE,tag:"pattern_type:structural"},{name:"Docker",category:y.PLATFORM,tag:"platform:docker"},{name:"Github",category:y.PLATFORM,tag:"platform:github"},{name:"Kubernetes",category:y.PLATFORM,tag:"platform:kubernetes"},{name:"Code Health",category:y.USE_CASE,tag:"use_case:code_health"},{name:"Code Intelligence",category:y.USE_CASE,tag:"use_case:code_intelligence"},{name:"Code Reuse",category:y.USE_CASE,tag:"use_case:code_reuse"},{name:"DevOps",category:y.USE_CASE,tag:"use_case:devops"},{name:"Security",category:y.USE_CASE,tag:"use_case:security"}];function be(){return y}function xe(){let s=ve;return s.forEach(e=>e.selected=!1),s}function le(s,e,l){const t=s.slice();return t[8]=e[l],t}function ae(s,e,l){const t=s.slice();return t[11]=e[l],t}function re(s){let e,l=s[11].name+"",t,a,f,n;function u(){return s[5](s[11])}return{c(){e=b("button"),t=L(l),this.h()},l(r){e=x(r,"BUTTON",{class:!0});var o=A(e);t=G(o,l),o.forEach(p),this.h()},h(){_(e,"class",a=(s[11].selected?"bg-slate-300":"bg-slate-100")+" whitespace-nowrap border-solid border-2 border-black rounded-full p-1 m-1")},m(r,o){F(r,e,o),g(e,t),f||(n=ue(e,"click",u),f=!0)},p(r,o){s=r,o&1&&l!==(l=s[11].name+"")&&Y(t,l),o&1&&a!==(a=(s[11].selected?"bg-slate-300":"bg-slate-100")+" whitespace-nowrap border-solid border-2 border-black rounded-full p-1 m-1")&&_(e,"class",a)},d(r){r&&p(e),f=!1,n()}}}function se(s){let e,l=s[11].category===s[8]&&re(s);return{c(){l&&l.c(),e=te()},l(t){l&&l.l(t),e=te()},m(t,a){l&&l.m(t,a),F(t,e,a)},p(t,a){t[11].category===t[8]?l?l.p(t,a):(l=re(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&p(e)}}}function ne(s){let e,l,t=s[8]+"",a,f,n,u,r=s[0],o=[];for(let i=0;i<r.length;i+=1)o[i]=se(ae(s,r,i));return{c(){e=b("details"),l=b("summary"),a=L(t),f=S(),n=b("div");for(let i=0;i<o.length;i+=1)o[i].c();u=S(),this.h()},l(i){e=x(i,"DETAILS",{class:!0});var c=A(e);l=x(c,"SUMMARY",{class:!0});var h=A(l);a=G(h,t),h.forEach(p),f=R(c),n=x(c,"DIV",{class:!0});var w=A(n);for(let T=0;T<o.length;T+=1)o[T].l(w);w.forEach(p),u=R(c),c.forEach(p),this.h()},h(){_(l,"class","text-base font-bold"),_(n,"class","flex flex-row flex-wrap"),_(e,"class","bg-slate-100 m-2 p-4 flex flex-column rounded-xl open:bg-slate-200 duration-300 w-full")},m(i,c){F(i,e,c),g(e,l),g(l,a),g(e,f),g(e,n);for(let h=0;h<o.length;h+=1)o[h].m(n,null);g(e,u)},p(i,c){if(c&7){r=i[0];let h;for(h=0;h<r.length;h+=1){const w=ae(i,r,h);o[h]?o[h].p(w,c):(o[h]=se(w),o[h].c(),o[h].m(n,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=r.length}},d(i){i&&p(e),X(o,i)}}}function Ae(s){let e,l,t,a,f,n,u=Object.values(s[1]),r=[];for(let o=0;o<u.length;o+=1)r[o]=ne(le(s,u,o));return{c(){e=b("button"),l=L("Clear All"),t=S(),a=b("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=x(o,"BUTTON",{class:!0});var i=A(e);l=G(i,"Clear All"),i.forEach(p),t=R(o),a=x(o,"DIV",{class:!0});var c=A(a);for(let h=0;h<r.length;h+=1)r[h].l(c);c.forEach(p),this.h()},h(){_(e,"class","border-solid border-2 border-black rounded-full p-1 m-1 bg-slate-200"),_(a,"class","flex flex-row flex-wrap w-full")},m(o,i){F(o,e,i),g(e,l),F(o,t,i),F(o,a,i);for(let c=0;c<r.length;c+=1)r[c].m(a,null);f||(n=ue(e,"click",s[3]),f=!0)},p(o,[i]){if(i&7){u=Object.values(o[1]);let c;for(c=0;c<u.length;c+=1){const h=le(o,u,c);r[c]?r[c].p(h,i):(r[c]=ne(h),r[c].c(),r[c].m(a,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=u.length}},i:W,o:W,d(o){o&&p(e),o&&p(t),o&&p(a),X(r,o),f=!1,n()}}}function ye(s,e,l){let{appliedFilters:t}=e;const a=he();let f=xe();const n=be();function u(c){c.selected=!c.selected,r()}function r(){l(4,t=f.filter(h=>h.selected));let c=[];t.forEach(h=>{c.push(h.tag)}),a("filter",{tags:c}),l(4,t),l(0,f)}function o(){l(4,t=[]),a("filter",{tags:[]}),f.forEach(c=>c.selected=!1),l(0,f)}const i=c=>u(c);return s.$$set=c=>{"appliedFilters"in c&&l(4,t=c.appliedFilters)},[f,n,u,o,t,i]}class we extends B{constructor(e){super(),H(this,e,ye,Ae,K,{appliedFilters:4})}}function oe(s,e,l){const t=s.slice();return t[1]=e[l],t}function ce(s){let e,l=s[1]+"",t,a;return{c(){e=b("div"),t=L(l),a=S(),this.h()},l(f){e=x(f,"DIV",{class:!0});var n=A(e);t=G(n,l),a=R(n),n.forEach(p),this.h()},h(){_(e,"class","rounded-full bg-slate-100 p-1 m-1")},m(f,n){F(f,e,n),g(e,t),g(e,a)},p(f,n){n&1&&l!==(l=f[1]+"")&&Y(t,l)},d(f){f&&p(e)}}}function $e(s){let e,l,t=s[0].name+"",a,f,n,u=s[0].description+"",r,o,i,c,h,w=s[0].syntax+"",T,N,$,k,D,I,C=s[0].tags,d=[];for(let m=0;m<C.length;m+=1)d[m]=ce(oe(s,C,m));return{c(){e=b("details"),l=b("summary"),a=L(t),f=S(),n=b("div"),r=L(u),o=S(),i=b("div");for(let m=0;m<d.length;m+=1)d[m].c();c=S(),h=b("code"),T=L(w),N=S(),$=b("div"),k=b("a"),D=L("view on sourcegraph.com"),this.h()},l(m){e=x(m,"DETAILS",{class:!0});var E=A(e);l=x(E,"SUMMARY",{class:!0});var v=A(l);a=G(v,t),v.forEach(p),f=R(E),n=x(E,"DIV",{class:!0});var U=A(n);r=G(U,u),U.forEach(p),o=R(E),i=x(E,"DIV",{class:!0});var V=A(i);for(let Z=0;Z<d.length;Z+=1)d[Z].l(V);V.forEach(p),c=R(E),h=x(E,"CODE",{class:!0});var O=A(h);T=G(O,w),O.forEach(p),N=R(E),$=x(E,"DIV",{class:!0});var j=A($);k=x(j,"A",{href:!0,target:!0,rel:!0});var ee=A(k);D=G(ee,"view on sourcegraph.com"),ee.forEach(p),j.forEach(p),E.forEach(p),this.h()},h(){_(l,"class","text-base font-bold"),_(n,"class","p-2 text-base italic"),_(i,"class","pb-3 flex flex-row flex-wrap"),_(h,"class","bg-white text-base font-bold whitespace-nowrap overflow-scroll rounded-xl p-2"),_(k,"href",I=s[0].exampleLink),_(k,"target","_blank"),_(k,"rel","noreferrer"),_($,"class","text-center text-blue-600 visited:text-purple-600 pt-2"),_(e,"class","bg-slate-100 m-2 p-4 flex flex-row rounded-xl open:bg-slate-200 duration-300")},m(m,E){F(m,e,E),g(e,l),g(l,a),g(e,f),g(e,n),g(n,r),g(e,o),g(e,i);for(let v=0;v<d.length;v+=1)d[v].m(i,null);g(e,c),g(e,h),g(h,T),g(e,N),g(e,$),g($,k),g(k,D)},p(m,[E]){if(E&1&&t!==(t=m[0].name+"")&&Y(a,t),E&1&&u!==(u=m[0].description+"")&&Y(r,u),E&1){C=m[0].tags;let v;for(v=0;v<C.length;v+=1){const U=oe(m,C,v);d[v]?d[v].p(U,E):(d[v]=ce(U),d[v].c(),d[v].m(i,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=C.length}E&1&&w!==(w=m[0].syntax+"")&&Y(T,w),E&1&&I!==(I=m[0].exampleLink)&&_(k,"href",I)},i:W,o:W,d(m){m&&p(e),X(d,m)}}}function ke(s,e,l){let{result:t}=e;return s.$$set=a=>{"result"in a&&l(0,t=a.result)},[t]}class Te extends B{constructor(e){super(),H(this,e,ke,$e,K,{result:0})}}function ie(s,e,l){const t=s.slice();return t[1]=e[l],t}function fe(s){let e,l;return e=new Te({props:{result:s[1]}}),{c(){J(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){z(e,t,a),l=!0},p(t,a){const f={};a&1&&(f.result=t[1]),e.$set(f)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Se(s){let e,l,t=s[0],a=[];for(let n=0;n<t.length;n+=1)a[n]=fe(ie(s,t,n));const f=n=>M(a[n],1,1,()=>{a[n]=null});return{c(){e=b("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=x(n,"DIV",{class:!0});var u=A(e);for(let r=0;r<a.length;r+=1)a[r].l(u);u.forEach(p),this.h()},h(){_(e,"class","flex flex-col p-2 w-full")},m(n,u){F(n,e,u);for(let r=0;r<a.length;r+=1)a[r].m(e,null);l=!0},p(n,[u]){if(u&1){t=n[0];let r;for(r=0;r<t.length;r+=1){const o=ie(n,t,r);a[r]?(a[r].p(o,u),P(a[r],1)):(a[r]=fe(o),a[r].c(),P(a[r],1),a[r].m(e,null))}for(de(),r=t.length;r<a.length;r+=1)f(r);ge()}},i(n){if(!l){for(let u=0;u<t.length;u+=1)P(a[u]);l=!0}},o(n){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)M(a[u]);l=!1},d(n){n&&p(e),X(a,n)}}}function Re(s,e,l){let{filteredExamples:t}=e;return s.$$set=a=>{"filteredExamples"in a&&l(0,t=a.filteredExamples)},[t]}class Fe extends B{constructor(e){super(),H(this,e,Re,Se,K,{filteredExamples:0})}}function Le(s){let e,l,t,a,f,n,u,r,o,i,c,h,w,T,N,$,k,D;i=new we({}),i.$on("filter",s[1]),i.$on("reset",s[2]);function I(d){s[3](d)}let C={};return s[0]!==void 0&&(C.filteredExamples=s[0]),$=new Fe({props:C}),pe.push(()=>me($,"filteredExamples",I)),{c(){e=b("div"),l=b("h1"),t=L("Sourcegraph Search Examples"),a=S(),f=b("div"),n=b("div"),u=b("h2"),r=L("Filters"),o=S(),J(i.$$.fragment),c=S(),h=b("div"),w=b("h2"),T=L("Examples"),N=S(),J($.$$.fragment),this.h()},l(d){e=x(d,"DIV",{class:!0});var m=A(e);l=x(m,"H1",{class:!0});var E=A(l);t=G(E,"Sourcegraph Search Examples"),E.forEach(p),m.forEach(p),a=R(d),f=x(d,"DIV",{class:!0});var v=A(f);n=x(v,"DIV",{class:!0});var U=A(n);u=x(U,"H2",{class:!0});var V=A(u);r=G(V,"Filters"),V.forEach(p),o=R(U),q(i.$$.fragment,U),U.forEach(p),c=R(v),h=x(v,"DIV",{class:!0});var O=A(h);w=x(O,"H2",{class:!0});var j=A(w);T=G(j,"Examples"),j.forEach(p),N=R(O),q($.$$.fragment,O),O.forEach(p),v.forEach(p),this.h()},h(){_(l,"class","p-4 text-4xl text-center"),_(e,"class","w-full"),_(u,"class","p-2 text-3xl"),_(n,"class","flex flex-col p-4 w-1/4"),_(w,"class","p-2 text-3xl"),_(h,"class","flex flex-col p-4 w-3/4"),_(f,"class","w-full flex flex-row p-4")},m(d,m){F(d,e,m),g(e,l),g(l,t),F(d,a,m),F(d,f,m),g(f,n),g(n,u),g(u,r),g(n,o),z(i,n,null),g(f,c),g(f,h),g(h,w),g(w,T),g(h,N),z($,h,null),D=!0},p(d,[m]){const E={};!k&&m&1&&(k=!0,E.filteredExamples=d[0],_e(()=>k=!1)),$.$set(E)},i(d){D||(P(i.$$.fragment,d),P($.$$.fragment,d),D=!0)},o(d){M(i.$$.fragment,d),M($.$$.fragment,d),D=!1},d(d){d&&p(e),d&&p(a),d&&p(f),Q(i),Q($)}}}function Ge(s,e){return s.filter(t=>t.tags.includes(e))}function Ue(s,e,l){let t=[],a=[];Ee(async()=>{let r=window.location.href;r.endsWith("/")&&(r=r.slice(0,-1)),t=await(await fetch(`${r}/examples.json`)).json(),l(0,a=t)});function f(r){l(0,a=t),r.detail.tags.forEach(i=>{l(0,a=Ge(a,i))})}function n(){l(0,a=t)}function u(r){a=r,l(0,a)}return[a,f,n,u]}class Ce extends B{constructor(e){super(),H(this,e,Ue,Le,K,{})}}function De(s){let e,l;return e=new Ce({}),{c(){J(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){z(e,t,a),l=!0},p:W,i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}class Oe extends B{constructor(e){super(),H(this,e,null,De,K,{})}}export{Oe as default};
