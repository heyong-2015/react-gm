webpackJsonp([1],{479:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(237),f=n(523),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"handleClick",value:function(){f.history.push({pathname:"/demo",query:{a:1,name:"李雅堂"}})}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("div",null,"原生分割线",a.default.createElement("hr",null),a.default.createElement(c.Divider,null),"中间又文字的分割线",a.default.createElement(c.Divider,null,"asdf"),a.default.createElement("button",{onClick:this.handleClick},"push")))}}]),t}(a.default.Component);t.default=s},523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var r=n(70),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=n(36),l=(0,u.processHistory)((0,o.default)());t.history=l}});