"use strict";(self.webpackChunkadmin_pwa=self.webpackChunkadmin_pwa||[]).push([[545],{7545:function(e,t,a){a.r(t);var r=a(1413),s=a(5861),n=a(9439),d=a(7757),i=a.n(d),l=a(2791),u=a(9126),o=a(4321),c=a(2888),m=a(3975),x=a(184),b=(0,l.lazy)((function(){return a.e(939).then(a.t.bind(a,1939,23))}));t.default=function(e){var t,a=e.api,d=e.index,h=(0,l.useState)(!1),f=(0,n.Z)(h,2),y=f[0],p=f[1],g=(0,l.useState)("body"),j=(0,n.Z)(g,2),k=j[0],w=j[1],v=(0,l.useState)({}),S=(0,n.Z)(v,2),N=S[0],T=S[1],q=(0,l.useState)(!1),Z=(0,n.Z)(q,2),O=Z[0],R=Z[1],_=(0,l.useState)([]),C=(0,n.Z)(_,2),D=C[0],z=C[1],E=(0,l.useState)(14),P=(0,n.Z)(E,2),V=P[0],F=P[1],H=(0,l.useState)({}),B=(0,n.Z)(H,2),I=B[0],M=B[1],W=(0,l.useState)({}),A=(0,n.Z)(W,2),G=A[0],L=A[1],Q=(0,l.useState)({}),U=(0,n.Z)(Q,2),Y=U[0],J=U[1],K=(0,l.useState)({status:"",statusText:"",time:"0 ms"}),X=(0,n.Z)(K,2),$=X[0],ee=X[1],te={overflowWrap:"break-word",wordBreak:"break-all",width:"100%",fontSize:V,padding:"1.5rem 1rem",maxHeight:"600px",overflowY:"auto"};(0,l.useMemo)((function(){T(a.body.params),M(a.query.params),L(a.headers.params),J(a.url.variables)}),[a.body.params,a.headers.params,a.query.params,a.url.variables]);var ae=(0,l.useCallback)((function(e){z(e)}),[]);(0,l.useEffect)((function(){a.headers.isRequired?w("headers"):a.body.isRequired?w("body"):a.query.isRequired?w("query"):w("")}),[a.body.isRequired,a.headers.isRequired,a.query.isRequired]);var re=function(){var e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,m.Z.interceptors.request.use((function(e){var t=(0,r.Z)({},e);return t.metadata={startTime:new Date},t}),(function(e){return Promise.reject(e)})),m.Z.interceptors.response.use((function(e){var t=(0,r.Z)({},e);return t.config.metadata.endTime=new Date,t.duration=t.config.metadata.endTime-t.config.metadata.startTime,t}),(function(e){var t=(0,r.Z)({},e);return t.config.metadata.endTime=new Date,t.duration=t.config.metadata.endTime-t.config.metadata.startTime,Promise.reject(t)})),e.next=6,(0,m.Z)({method:a.method,url:a.url.path+(0!==Object.keys(Y).length?"/".concat(Object.values(Y)):""),headers:G,params:I,data:a.body.isRequired&&Object.keys(N).length>0?N:a.body.params,timeout:4e3});case 6:t=e.sent,ae(t.data),ee({status:t.status,statusText:t.statusText,time:t.duration+" ms"}),R(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),ae(e.t0.response.data),ee({status:e.t0.response.status,statusText:e.t0.response.statusText,time:e.t0.duration+" ms"}),R(!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),se={method:a.method,url:c.T+a.url.path+(0!==Object.keys(Y).length?"/".concat(Object.values(Y)):"")};return(0,x.jsxs)("div",{className:"my-4",children:[(0,x.jsxs)("button",{onClick:function(){p(!y),0!==Object.keys(D).length&&D.length>=50&&ae({})},className:"w-full cursor-pointer ".concat(y?"rounded-b-none rounded-tl-2xl rounded-tr-2xl":"rounded-full"," flex items-center border-transparent bg-white px-1 py-1 dark:border dark:border-gray-600 dark:bg-gray-800 "),children:[(0,x.jsx)("span",{className:"flex items-center justify-center px-2.5 py-1 ".concat(y?"bg-green-700 text-white dark:bg-green-600":"bg-gray-300 dark:bg-gray-600"," mr-1 rounded-full font-medium  dark:text-white"),children:d+1}),y?(0,x.jsx)(u.SZO,{className:"normal-transition font-ubuntu text-base font-medium dark:text-white lg:text-lg"}):(0,x.jsx)(u.AV3,{className:"normal-transition font-ubuntu text-base font-medium dark:text-white lg:text-lg"}),(0,x.jsx)("h1",{className:"font-ubuntu ml-3 text-base font-medium dark:text-white lg:text-lg",children:a.name})]}),y&&(0,x.jsxs)("div",{className:"border-t-none animate__animated animate__fadeIn rounded-t-none rounded-bl-2xl rounded-br-2xl border-0 border-gray-400 bg-white py-3 px-5 dark:border dark:border-gray-600 dark:bg-gray-900",children:[(0,x.jsxs)("h1",{className:"font-ubuntu my-3 text-lg dark:text-white flex",children:[(0,x.jsx)("span",{className:" ".concat("GET"===a.method?"text-green-700 dark:text-green-500":"POST"===a.method?"text-[#FF6C37]":"PUT"===a.method?"text-blue-700 dark:text-blue-500":"text-red-700 dark:text-red-500","  font-semibold"),children:a.method}),":",(0,x.jsx)("span",{className:"ml-2 font-medium dark:text-gray-300",children:se.url})]}),(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(b,{src:se,name:!1,onEdit:function(e){return T(e.updated_src)},iconStyle:"square",style:te,theme:"bright",displayDataTypes:!0,displayObjectSize:!0})}),(0,x.jsx)("h1",{className:"font-ubuntu my-3 text-lg font-semibold dark:text-white",children:"Description:"}),(0,x.jsx)("div",{className:"font-ubuntu mb-5 rounded-md bg-gray-100 p-5 text-lg font-normal dark:bg-gray-800 dark:text-white",dangerouslySetInnerHTML:{__html:a.description?a.description:""}}),(0,x.jsxs)("div",{className:"flex w-full items-center",children:[[{name:"headers",label:"Headers"},{name:"body",label:"Body"},{name:"query",label:"Query"},{name:"pathVariables",label:"Path Variables"}].map((function(e){return(0,x.jsx)("div",{onClick:function(){return w(e.name)},className:"".concat(k===e.name?" border-b-2 border-gray-700 dark:border-[#FF6C37]":"border-b-2 border-transparent"," font-ubuntu mr-5 cursor-pointer text-lg font-medium dark:text-white"),children:e.label},e.name)})),(0,x.jsx)("button",{onClick:re,className:"font-base lg:font-lg font-ubuntu normal-transition py-.5 items-end justify-self-end rounded-md border border-gray-600 px-3 font-medium hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white",children:"Send"})]}),(0,x.jsx)("div",{className:"my-4",children:a.body.isRequired&&"body"===k?(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(b,{src:N,name:!1,onEdit:function(e){return T(e.updated_src)},iconStyle:"square",style:te,theme:"bright",displayDataTypes:!0,displayObjectSize:!0})}):null}),(0,x.jsx)("div",{className:"my-4",children:a.query.isRequired&&"query"===k?(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(b,{src:I,name:!1,onEdit:function(e){return M(e.updated_src)},iconStyle:"square",style:te,theme:"bright",displayDataTypes:!0,displayObjectSize:!0})}):null}),(0,x.jsx)("div",{className:"my-4",children:a.headers.isRequired&&"headers"===k?(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(b,{src:G,name:!1,onEdit:function(e){return L(e.updated_src)},iconStyle:"square",style:te,theme:"bright",displayDataTypes:!0,displayObjectSize:!0})}):null}),(0,x.jsx)("div",{className:"my-4",children:0!==Object.keys(a.url.variables).length&&"pathVariables"===k?(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(b,{src:Y,name:!1,onEdit:function(e){return J(e.updated_src)},iconStyle:"square",style:te,theme:"bright",displayDataTypes:!0,displayObjectSize:!0})}):null}),O||0===Object.keys(D).length?O?(0,x.jsx)(o.Z,{}):null:(0,x.jsxs)("div",{className:"mt-5",children:[(0,x.jsxs)("div",{className:"flex items-center justify-between",children:[(0,x.jsxs)("div",{className:"mb-3 flex items-center",children:[(0,x.jsx)("h1",{className:"font-ubuntu text-base font-medium dark:text-white lg:text-lg",children:"Request Result"}),(0,x.jsx)("button",{onClick:function(){return ae({})},className:"font-base lg:font-lg font-ubuntu normal-transition py-.5 ml-5 items-end justify-self-end rounded-md border border-gray-600 px-3 font-medium hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white",children:"Reset"})]}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsxs)("div",{className:"mr-4 flex items-center justify-between",children:[(0,x.jsx)("button",{onClick:function(){return V>14&&F((function(e){return e-1}))},className:"font-base font-ubuntu items-end justify-self-end border-gray-600 px-1 py-px font-medium text-gray-600 hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white lg:text-lg"+(V<=14?" cursor-not-allowed":""),children:(0,x.jsx)(u.TVH,{})}),(0,x.jsx)("p",{className:"font-ubuntu mx-2 text-base font-normal dark:text-white lg:text-lg",children:V}),(0,x.jsx)("button",{onClick:function(){return V<36&&F((function(e){return e+1}))},className:"font-base font-ubuntu items-end justify-self-end border-gray-600 px-1 py-px font-medium text-gray-600 hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white lg:text-lg"+(V>=36?" cursor-not-allowed":""),children:(0,x.jsx)(u.iTs,{})})]}),(0,x.jsxs)("p",{className:"font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",children:["Status:",(0,x.jsxs)("span",{className:null!==(t=$.status)&&void 0!==t&&t.toString().startsWith("2",0)?"ml-1 font-medium text-green-600 dark:font-normal dark:text-green-400":"ml-1 font-medium text-red-500 dark:font-normal",children:[$.status," ",$.statusText]})]}),(0,x.jsxs)("p",{className:"font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",children:["Time:",(0,x.jsx)("span",{className:"ml-1 font-normal text-green-600 dark:font-normal dark:text-green-400",children:$.time})]})]})]}),(0,x.jsx)(l.Suspense,{fallback:(0,x.jsx)(o.Z,{}),children:(0,x.jsx)(b,{src:D,name:!1,iconStyle:"square",style:te,theme:"bright",displayDataTypes:!1,displayObjectSize:!0})})]})]})]})}}}]);
//# sourceMappingURL=545.dba2f42b.chunk.js.map