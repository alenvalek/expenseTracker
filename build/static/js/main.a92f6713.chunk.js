(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(8),i=n.n(a),r=(n(13),n(3)),o=(n(7),n(0));function j(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Expense tracker"})})}function l(e){var t=e.transactions,n=0;return Object(o.jsxs)(o.Fragment,{children:[t.map((function(e){n+=e.amount})),Object(o.jsx)("h4",{children:"Total balance: "}),Object(o.jsxs)("h1",{id:"balance",children:["$",n]})]})}function d(e){var t=e.transactions,n=0,c=0;return Object(o.jsxs)("div",{className:"inc-exp-container",children:[t.map((function(e){e.amount<=0?c+=e.amount:n+=e.amount})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Income"}),Object(o.jsxs)("p",{id:"money-plus",className:"money plus",children:["+$",n]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Expenses"}),Object(o.jsxs)("p",{id:"money-minus",className:"money minus",children:["-$",Math.abs(c)]})]})]})}var u=n(4);function b(e){var t=e.id,n=e.setTransactions,c=e.transactions,s=e.text,a=e.amount;return Object(o.jsx)("div",{children:a<=0?Object(o.jsxs)("li",{className:"minus",children:[s," ",Object(o.jsx)("span",{children:a}),Object(o.jsx)("button",{className:"delete-btn",onClick:function(e){e.preventDefault();var s=c.indexOf(c.find((function(e){return e.id==t})));c.splice(s,1),n(Object(u.a)(c))},children:"X"})]}):Object(o.jsxs)("li",{className:"plus",children:[s," ",Object(o.jsxs)("span",{children:["+",a]}),Object(o.jsx)("button",{className:"delete-btn",onClick:function(e){e.preventDefault();var s=c.indexOf(c.find((function(e){return e.id==t})));c.splice(s,1),n(Object(u.a)(c))},children:"X"})]})})}function m(e){var t=e.transactions,n=e.setTransactions;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{id:"list",className:"list",children:void 0===t||0==t.length?Object(o.jsx)("h2",{children:"No transactions.. Add one!"}):t.map((function(e){return Object(o.jsx)(b,{id:e.id,transactions:t,setTransactions:n,text:e.name,amount:e.amount},e.id)}))})})}function h(e){var t=e.transactions,n=e.setTransactions,s=Object(c.useState)(0),a=Object(r.a)(s,2),i=a[0],j=a[1],l=Object(c.useState)(""),d=Object(r.a)(l,2),b=d[0],m=d[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Add new transaction"}),Object(o.jsxs)("form",{id:"form",children:[Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"text",children:"Expense name:"}),Object(o.jsx)("input",{type:"text",id:"text",value:b,placeholder:"Enter text...",onChange:function(e){m(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(o.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(o.jsx)("input",{type:"number",id:"amount",placeholder:"Enter amount...",value:i,onChange:function(e){j(parseInt(e.target.value))}})]}),Object(o.jsx)("button",{className:"btn",onClick:function(e){if(e.preventDefault(),""==b)return alert("Must have a name");if(b.length<=2)return alert("Must have a longer name");if(0==i)return alert("Can't make a transaction with 0$!");var c={id:t[t.length-1].id+1,name:b,amount:i};t.push(c),n(Object(u.a)(t))},children:"Add transaction"})]})]})}var x=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=[{id:0,name:"Clothing",amount:-100},{id:1,name:"Food",amount:-100},{id:2,name:"Movies",amount:50}];return Object(c.useEffect)((function(){s([].concat(a))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{transactions:n}),Object(o.jsx)(d,{transactions:n}),Object(o.jsx)(m,{transactions:n,setTransactions:s}),Object(o.jsx)(h,{transactions:n,setTransactions:s})]})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.a92f6713.chunk.js.map