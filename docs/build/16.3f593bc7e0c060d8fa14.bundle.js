webpackJsonp([16],{500:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var m=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),u=l(1),r=function(e){return e&&e.__esModule?e:{default:e}}(u),c=l(237),f=[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}],s=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return d(t,e),m(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return r.default.createElement("div",{className:"doc"},r.default.createElement("h2",{id:"sheet"},r.default.createElement("a",{className:"header-anchor",href:"#sheet","aria-hidden":"true"},"¶")," Sheet"),r.default.createElement("p",null,"更React风格化。给开发者更多控制，更多灵活。"),r.default.createElement("p",null,"配合的组件",r.default.createElement("a",{href:"#/doc/SheetColumn"},"SheetColumn")," ",r.default.createElement("a",{href:"#/doc/SheetAction"},"SheetAction")," ",r.default.createElement("a",{href:"#/doc/SheetSelect"},"SheetSelect")," ",r.default.createElement("a",{href:"#/doc/SheetBatchAction"},"SheetBatchAction")," ",r.default.createElement("a",{href:"#/doc/Sheet?anchor=pagination-paginationtext"},"Pagination")),r.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},r.default.createElement("div",{className:"doc-demo-instance"},r.default.createElement("h4",null,"Example"),r.default.createElement(c.Sheet,{list:f},r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}))),r.default.createElement("div",{className:"doc-demo-meta"},r.default.createElement("div",{className:"doc-demo-description"},r.default.createElement("p",null,"一个简单的demo")),r.default.createElement("div",{className:"doc-demo-code"},r.default.createElement("pre",null,r.default.createElement("code",{className:"language-js"},r.default.createElement("span",{className:"hljs-keyword"},"const")," list= [","{",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"id"),": ",r.default.createElement("span",{className:"hljs-number"},"3"),",",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"name"),": ",r.default.createElement("span",{className:"hljs-string"},"'小明'"),",",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"age"),": ",r.default.createElement("span",{className:"hljs-string"},"'10'"),r.default.createElement("br",null),"}",", ","{",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"id"),": ",r.default.createElement("span",{className:"hljs-number"},"4"),",",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"name"),": ",r.default.createElement("span",{className:"hljs-string"},"'小红'"),",",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"age"),": ",r.default.createElement("span",{className:"hljs-string"},"'15'"),",",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",r.default.createElement("span",{className:"hljs-literal"},"true"),r.default.createElement("br",null),"}",", ","{",r.default.createElement("br",null),"   ",r.default.createElement("span",{className:"hljs-attr"},"id"),": ",r.default.createElement("span",{className:"hljs-number"},"5"),",",r.default.createElement("br",null),"   ",r.default.createElement("span",{className:"hljs-attr"},"name"),": ",r.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",r.default.createElement("br",null),"   ",r.default.createElement("span",{className:"hljs-attr"},"age"),": ",r.default.createElement("span",{className:"hljs-string"},"'20'"),r.default.createElement("br",null),"}","];",r.default.createElement("br",null))),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-jsx"},"<Sheet list=","{","list","}",">",r.default.createElement("br",null),'    <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'    <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'    <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),"</Sheet>",r.default.createElement("br",null)))),r.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},r.default.createElement("i",null)))),r.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode13?"doc-demo-code-active":"")},r.default.createElement("div",{className:"doc-demo-instance"},r.default.createElement("h4",null,"Example"),r.default.createElement(c.Flex,null,r.default.createElement(c.Flex,{flex:!0,column:!0},r.default.createElement(c.Sheet,{list:f,loading:!0},r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}))),r.default.createElement("div",{className:"gm-padding5"}),r.default.createElement(c.Flex,{flex:!0,column:!0},r.default.createElement(c.Sheet,{list:[],enableEmptyTip:!0},r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}))))),r.default.createElement("div",{className:"doc-demo-meta"},r.default.createElement("div",{className:"doc-demo-description"},r.default.createElement("p",null,"loading 和 没有数据")),r.default.createElement("div",{className:"doc-demo-code"},r.default.createElement("pre",null,r.default.createElement("code",{className:"language-jsx"},"<Flex>",r.default.createElement("br",null),"    <Flex flex column> ",r.default.createElement("br",null),"        <Sheet list=","{","list","}"," loading=","{","true","}",">",r.default.createElement("br",null),'            <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'            <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'            <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),"        </Sheet>",r.default.createElement("br",null),"    </Flex>",r.default.createElement("br",null),'    <div className="gm-padding5"/>',r.default.createElement("br",null),"    <Flex flex column> ",r.default.createElement("br",null),"        <Sheet list=","{","[]","}"," enableEmptyTip>",r.default.createElement("br",null),'            <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'            <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'            <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),"        </Sheet>",r.default.createElement("br",null),"    </Flex>",r.default.createElement("br",null),"</Flex> ",r.default.createElement("br",null)))),r.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,13)},r.default.createElement("i",null)))),r.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode16?"doc-demo-code-active":"")},r.default.createElement("div",{className:"doc-demo-instance"},r.default.createElement("h4",null,"Example"),r.default.createElement(c.Sheet,{list:f,getTrProps:function(e){return 1===e?{className:"warning"}:{}}},r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}))),r.default.createElement("div",{className:"doc-demo-meta"},r.default.createElement("div",{className:"doc-demo-description"},r.default.createElement("p",null,"tr传props自定义行")),r.default.createElement("div",{className:"doc-demo-code"},r.default.createElement("pre",null,r.default.createElement("code",{className:"language-jsx"},"<Sheet list=","{","list","}"," getTrProps=","{","index => (index === ",r.default.createElement("span",{className:"hljs-number"},"1")," ? ","{",r.default.createElement("br",null),"    ",r.default.createElement("span",{className:"hljs-attr"},"className"),": ",r.default.createElement("span",{className:"hljs-string"},"'warning'"),r.default.createElement("br",null),"}"," : ","{","}",")","}",">",r.default.createElement("br",null),'    <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'    <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'    <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),"</Sheet>",r.default.createElement("br",null)))),r.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,16)},r.default.createElement("i",null)))),r.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode19?"doc-demo-code-active":"")},r.default.createElement("div",{className:"doc-demo-instance"},r.default.createElement("h4",null,"Example"),r.default.createElement("div",{style:{width:"300px"}},r.default.createElement(c.Sheet,{list:f,scrollX:!0},r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}),r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}),r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}),r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}),r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"}),r.default.createElement(c.SheetColumn,{field:"id",name:"id"}),r.default.createElement(c.SheetColumn,{field:"name",name:"名字"}),r.default.createElement(c.SheetColumn,{field:"age",name:"年龄"})))),r.default.createElement("div",{className:"doc-demo-meta"},r.default.createElement("div",{className:"doc-demo-description"},r.default.createElement("p",null,"table 滚动。但是要调用方保证可滚动。 比如没有足够的宽度。")),r.default.createElement("div",{className:"doc-demo-code"},r.default.createElement("pre",null,r.default.createElement("code",{className:"language-jsx"},"<div style=","{","{",r.default.createElement("span",{className:"hljs-attr"},"width"),": ",r.default.createElement("span",{className:"hljs-string"},"'300px'"),"}","}",">",r.default.createElement("br",null),"    <Sheet list=","{","list","}"," scrollX>",r.default.createElement("br",null),'        <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'        <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'        <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),'        <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'        <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'        <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),'        <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'        <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'        <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),'        <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'        <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'        <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),'        <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'        <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'        <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),'        <SheetColumn field="id" name="id"/>',r.default.createElement("br",null),'        <SheetColumn field="name" name="名字"/>',r.default.createElement("br",null),'        <SheetColumn field="age" name="年龄"/>',r.default.createElement("br",null),"    </Sheet>",r.default.createElement("br",null),"</div>",r.default.createElement("br",null)))),r.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,19)},r.default.createElement("i",null)))),r.default.createElement("h3",{id:"props"},r.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("code",null,"list (Array|isRequired)")," 是列表的数据，最好是数组。 当然有人没注意传了obj（非常不推荐）。"),r.default.createElement("li",null,r.default.createElement("code",null,"loading (bool)")," true显示loading状态，false显示数据"),r.default.createElement("li",null,r.default.createElement("code",null,"enableEmptyTip (bool|string|element)")," true则显示默认的“没有数据”文案，其他值string or element则直接显示"),r.default.createElement("li",null,r.default.createElement("code",null,"className (string)")),r.default.createElement("li",null,r.default.createElement("code",null,"getTrProps (func)")," 自定义",r.default.createElement("code",null,"tr"),"的props，提供",r.default.createElement("code",null,"index"),"索引，返回 object。"),r.default.createElement("li",null,r.default.createElement("code",null,"scrollX (bool)")," 是否允许table横向滚动。 但是table是否具备横向滚动的条件要调用方保证")),r.default.createElement("h3",{id:"pagination-paginationtext"},r.default.createElement("a",{className:"header-anchor",href:"#pagination-paginationtext","aria-hidden":"true"},"¶")," Pagination PaginationText"),r.default.createElement("p",null,"如需页码传入",r.default.createElement("code",null,"Pagination"),"或者",r.default.createElement("code",null,"PaginationText"),"组件。 Sheet会自动安排在页码应该什么位置。一般只用Pagination就好。"),r.default.createElement("pre",null,r.default.createElement("code",{className:"language-jsx"},"<Pagination data=","{",r.default.createElement("span",{className:"hljs-keyword"},"this"),".state.pagination","}"," toPage=","{",r.default.createElement("span",{className:"hljs-keyword"},"this"),".handlePage","}","/>",r.default.createElement("br",null),r.default.createElement("span",{className:"xml"},r.default.createElement("span",{className:"hljs-tag"},"<",r.default.createElement("span",{className:"hljs-name"},"PaginationText")," ",r.default.createElement("span",{className:"hljs-attr"},"data"),"=",r.default.createElement("span",{className:"hljs-string"},"{","this.state.pagination","}","/"),">"),r.default.createElement("br",null)))))}}]),t}(r.default.Component);t.default=s}});