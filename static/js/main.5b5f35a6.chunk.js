(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),s=n(2),i=n(4),u=n(3),h=(n(13),function(e){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/set_set1/".concat(e.id,"?200x200"),alt:"roboPics"}),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email))}),m=function(e){var t=e.robots.map((function(e,t){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"800px",margin:"10px"}},e.children)},b=function(e){var t=e.onSearchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search your Robot",onChange:t}))},v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops!. That is not good!"):this.props.children}}]),n}(a.Component),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},console.log("constructor"),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})),console.log("componentDidMount")}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return console.log("render"),this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"wave -one"}),r.a.createElement("div",{className:"wave -two"}),r.a.createElement("div",{className:"wave -three"}),r.a.createElement("h1",{className:"f1"},"ROBOFRIENDS"),r.a.createElement(b,{onSearchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(m,{robots:t})))):r.a.createElement("div",null,r.a.createElement("h1",null,"Loading"))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.5b5f35a6.chunk.js.map