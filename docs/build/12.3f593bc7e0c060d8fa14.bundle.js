webpackJsonp([12],{504:function(e,l,t){"use strict";function a(e){if(Array.isArray(e)){for(var l=0,t=Array(e.length);l<e.length;l++)t[l]=e[l];return t}return Array.from(e)}function n(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function r(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function s(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var c=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),u=t(1),d=function(e){return e&&e.__esModule?e:{default:e}}(u),m=t(237),f=function(e){function l(e){n(this,l);var t=r(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={list:[{id:3,name:"小明",age:"10"},{id:4,name:"小红",age:"15",_gm_select:!0},{id:5,name:"小蓝",age:"20"}]},t.handleSelect=t.handleSelect.bind(t),t.handleSelectAll=t.handleSelectAll.bind(t),t.isDisabled=t.isDisabled.bind(t),t}return s(l,e),c(l,[{key:"handleSelect",value:function(e,l){console.log("onSelect",e,l);var t=[].concat(a(this.state.list));t[l]._gm_select=e,this.setState({list:t})}},{key:"handleSelectAll",value:function(e,l){var t=this;console.log("onSelectAll",e,l);var n=[].concat(a(this.state.list));n.map(function(l){t.isDisabled(l)||(l._gm_select=e)}),this.setState({list:n})}},{key:"isDisabled",value:function(e){return e.age>18}},{key:"render",value:function(){return d.default.createElement(m.Sheet,{list:this.state.list},d.default.createElement(m.SheetColumn,{field:"id",name:"id"}),d.default.createElement(m.SheetColumn,{field:"name",name:"名字"}),d.default.createElement(m.SheetColumn,{field:"age",name:"年龄"}),d.default.createElement(m.SheetSelect,{onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,isDisabled:this.isDisabled}))}}]),l}(d.default.Component),i=function(e){function l(e){n(this,l);var t=r(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return s(l,e),c(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return d.default.createElement("div",{className:"doc"},d.default.createElement("h2",{id:"sheetselect"},d.default.createElement("a",{className:"header-anchor",href:"#sheetselect","aria-hidden":"true"},"¶")," SheetSelect"),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(f,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-description"},d.default.createElement("p",null,"操作行为")),d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"SheetWrap")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"list"),": [","{",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"id"),": ",d.default.createElement("span",{className:"hljs-number"},"3"),",",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'小明'"),",",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"age"),": ",d.default.createElement("span",{className:"hljs-string"},"'10'"),d.default.createElement("br",null),"                  ","}",", ","{",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"id"),": ",d.default.createElement("span",{className:"hljs-number"},"4"),",",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'小红'"),",",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"age"),": ",d.default.createElement("span",{className:"hljs-string"},"'15'"),",",d.default.createElement("br",null),"                      ",d.default.createElement("span",{className:"hljs-attr"},"_gm_select"),": ",d.default.createElement("span",{className:"hljs-literal"},"true"),d.default.createElement("br",null),"                  ","}",", ","{",d.default.createElement("br",null),"                     ",d.default.createElement("span",{className:"hljs-attr"},"id"),": ",d.default.createElement("span",{className:"hljs-number"},"5"),",",d.default.createElement("br",null),"                     ",d.default.createElement("span",{className:"hljs-attr"},"name"),": ",d.default.createElement("span",{className:"hljs-string"},"'小蓝'"),",",d.default.createElement("br",null),"                     ",d.default.createElement("span",{className:"hljs-attr"},"age"),": ",d.default.createElement("span",{className:"hljs-string"},"'20'"),d.default.createElement("br",null),"                  ","}","]",d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"        ",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect = ::",d.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelect;",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelectAll = ::",d.default.createElement("span",{className:"hljs-keyword"},"this"),".handleSelectAll;",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".isDisabled = ::",d.default.createElement("span",{className:"hljs-keyword"},"this"),".isDisabled;",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleSelect(checked, index)","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",d.default.createElement("span",{className:"hljs-string"},"'onSelect'"),", checked, index);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"const")," list = [...this.state.list];",d.default.createElement("br",null),"        list[index]._gm_select = checked;",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",d.default.createElement("br",null),"            list",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleSelectAll(checked, index)","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-built_in"},"console"),".log(",d.default.createElement("span",{className:"hljs-string"},"'onSelectAll'"),", checked, index);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"const")," list = [...this.state.list];",d.default.createElement("br",null),"        list.map(",d.default.createElement("span",{className:"hljs-function"},d.default.createElement("span",{className:"hljs-params"},"line")," =>")," ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-keyword"},"if"),"(!",d.default.createElement("span",{className:"hljs-keyword"},"this"),".isDisabled(line))",d.default.createElement("br",null),"                line._gm_select = checked;",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",d.default.createElement("br",null),"            list",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    isDisabled(line)","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," line.age > ",d.default.createElement("span",{className:"hljs-number"},"18"),";",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"return")," (",d.default.createElement("br",null),"           <Sheet list=","{","this.state.list","}",">",d.default.createElement("br",null),'               <SheetColumn field="id" name="id"/>',d.default.createElement("br",null),'               <SheetColumn field="name" name="名字"/>',d.default.createElement("br",null),'               <SheetColumn field="age" name="年龄"/>',d.default.createElement("br",null),"               <SheetSelect ",d.default.createElement("br",null),"                   onSelect=","{","this.handleSelect","}"," ",d.default.createElement("br",null),"                   onSelectAll=","{","this.handleSelectAll","}",d.default.createElement("br",null),"                   isDisabled=","{","this.isDisabled","}",d.default.createElement("br",null),"               />",d.default.createElement("br",null),"           </Sheet>",d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<SheetWrap/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},d.default.createElement("i",null)))),d.default.createElement("h3",{id:"props"},d.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"onSelect (func|isRequired)")),d.default.createElement("li",null,d.default.createElement("code",null,"onSelectAll (func|isRequired)")),d.default.createElement("li",null,d.default.createElement("code",null,"isDisabled (func)"))),d.default.createElement("p",null,"一但用到",d.default.createElement("code",null,"SheetSelect"),"，就约定了数据eList中的",d.default.createElement("code",null,"_gm_select"),"字段，",d.default.createElement("code",null,"_gm_select"),"为bool是选中。",d.default.createElement("code",null,"onSelect"),"当选择一行时触发，参数为是否选中",d.default.createElement("code",null,"checked"),"，和当前索引",d.default.createElement("code",null,"index"),"。",d.default.createElement("code",null,"onSelectAll"),"当选择所有的时候触发，参数为是否选择",d.default.createElement("code",null,"checked"),"。 需要根据select事件自动修改_gm_select属性。",d.default.createElement("code",null,"isDisabled"),"参数为当前行数据，返回",d.default.createElement("code",null,"true"),"or",d.default.createElement("code",null,"false"),"，表示是当前行是否可被选中"))}}]),l}(d.default.Component);l.default=i}});