(this["webpackJsonpclick-counter"]=this["webpackJsonpclick-counter"]||[]).push([[0],{26:function(e,t,n){},30:function(e,t,n){e.exports=n(44)},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(15),o=n(17),i=n(18),c=n(0),l=n.n(c),u=n(12),s=n.n(u),m=n(6),h=n(10),d=(n(35),n(36),n(26),n(8));function g(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"jumbotron col-10 offset-1"},l.a.createElement("h1",null,"Author Quiz"),l.a.createElement("p",null,"Select the book written by Author shown.")))}function b(e){var t=e.author,n=e.books,a=e.highlight,r=e.onAnswerSelected;return l.a.createElement("div",{id:"turn",className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"green",wrong:"red"}[e]}(a)}},l.a.createElement("div",{className:"col-4 offset-1"},l.a.createElement("img",{src:t.imageUrl,className:"authorimage",alt:"Author"})),l.a.createElement("div",{className:"col-6"},n.map((function(e,t){return l.a.createElement(p,{title:e,key:e,onClick:r})}))))}function p(e){var t=e.title,n=e.onClick;return l.a.createElement("div",{className:"answer",onClick:function(){return n(t)}},l.a.createElement("h4",null,t," "))}function f(e){var t=e.show,n=e.onContinue;return l.a.createElement("div",{className:"row continue"},t?l.a.createElement("div",{className:"col-11"},l.a.createElement("button",{className:"btn btn-primary btn-lg float-right",onClick:n},"Continue")):null)}function E(){return l.a.createElement("div",{className:"row",id:"footer"},l.a.createElement("div",{className:"col-12"},l.a.createElement("p",{className:"text-muted credit"},"All images are from ",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki"}," wiki ")," page.")))}var k=Object(d.b)((function(e){return{turnData:e.turnData,highlight:e.highlight}}),(function(e){return{onAnswerSelected:function(t){console.log("dispatching in answer_selected"+t),e({type:"ANSWER_SELECTED",answer:t})},onContinueHandler:function(){return e({type:"CONTINUE"})}}}))((function(e){var t=e.turnData,n=e.highlight,a=e.onAnswerSelected,r=e.onContinueHandler;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(g,null),l.a.createElement(b,Object.assign({},t,{highlight:n,onAnswerSelected:a})),l.a.createElement(f,{show:"correct"===n,onContinue:r}),l.a.createElement("p",null,l.a.createElement(h.b,{to:"/add"},"Add Author")),l.a.createElement(E,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(24),A=n(29),w=n(9),C=(n(43),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={name:"",imageUrl:"",bookTemp:"",books:[]},r.onChangeHandler=r.onChangeHandler.bind(Object(w.a)(r)),r.onSubmitHandler=r.onSubmitHandler.bind(Object(w.a)(r)),r.bookAddHandler=r.bookAddHandler.bind(Object(w.a)(r)),r}return Object(r.a)(n,[{key:"bookAddHandler",value:function(e){e.preventDefault(),this.setState({books:this.state.books.concat(this.state.bookTemp),bookTemp:""})}},{key:"onSubmitHandler",value:function(e){e.preventDefault(),this.props.onAddAuthorForm(this.state)}},{key:"onChangeHandler",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.onSubmitHandler},l.a.createElement("div",{className:"AddAuthorForm__input"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.onChangeHandler})),l.a.createElement("div",{className:"AddAuthorForm__input"},l.a.createElement("label",{htmlFor:"imageUrl"},"Image URL"),l.a.createElement("input",{type:"text",name:"imageUrl",value:this.state.imageUrl,onChange:this.onChangeHandler})),l.a.createElement("div",{className:"AddAuthorForm__input"},this.state.books.map((function(e){return l.a.createElement("p",{key:e},e)})),l.a.createElement("label",{htmlFor:"bookTemp"},"Book"),l.a.createElement("input",{type:"text",name:"bookTemp",value:this.state.bookTemp,onChange:this.onChangeHandler}),l.a.createElement("button",{onClick:this.bookAddHandler},"+")),l.a.createElement("input",{type:"submit",value:"Add Author"}))}}]),n}(l.a.Component));var j=Object(d.b)((function(e){return e}),(function(e,t){return{onAddAuthorForm:function(n){e({type:"ADD_AUTHOR",author:n}),t.history.push("/")}}}))((function(e){e.match;var t=e.onAddAuthorForm;return l.a.createElement("div",{className:"AddAuthorForm"},l.a.createElement("h1",null,"Add Author form"),l.a.createElement(C,{onAddAuthorForm:t}))})),O=Object(m.e)(j),y=n(16),N=[{name:"Mark Twain",imageUrl:"authors/MarkTwain.jpg",imageSource:"Wikimedia commons",books:["The Adventures of Huckleberry Finn","Life on Mississippi","Roughing It"]},{name:"William Shakespeare",imageUrl:"authors/William.jpg",imageSource:"Wikimedia commons",books:["Four Tragedies","Sonnet 130","The rape of Lucrece"]},{name:"J.K. Rowling",imageUrl:"authors/Rowling.jpg",imageSource:"Wikimedia commons",books:["Harry Potter","Lethal White","Career of Evil"]}];function S(e){console.log(e.length);var t=e.reduce((function(e,t,n){return e.concat(t.books)}),[]),n=Object(v.shuffle)(t).slice(0,4),a=Object(v.sample)(n);return{books:n,author:e.find((function(e){return e.books.some((function(e){return e===a}))}))}}var H=y.b((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authors:N,turnData:S(N),highlight:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWER_SELECTED":console.log(t);var n=e.turnData.author.books.some((function(e){return e===t.answer}));return Object.assign({},e,{highlight:n?"correct":"wrong"});case"CONTINUE":return Object.assign({},e,{highlight:"",turnData:S(N)});case"ADD_AUTHOR":return Object.assign({},e,{authors:N.push(t.author)});default:return e}return e})),T=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.history;return l.a.createElement(O,{onAddAuthorForm:function(t){N.push(t),console.log(N.length),e.push("/")}})}}]),n}(l.a.Component);Object(m.e)(T);s.a.render(l.a.createElement(d.a,{store:H},l.a.createElement(h.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:k}),l.a.createElement(m.a,{path:"/add",component:O}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.98ce7fcc.chunk.js.map