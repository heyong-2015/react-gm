webpackJsonp([26],{490:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(i),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return u(t,e),a(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return c.default.createElement("div",{className:"doc"})}}]),t}(c.default.Component);t.default=f}});