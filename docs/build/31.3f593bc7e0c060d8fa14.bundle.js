webpackJsonp([31],{485:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),c=l(1),d=function(e){return e&&e.__esModule?e:{default:e}}(c),s=l(237),o=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={show:!1,input:"",coolData:{list:[],actions:[{className:"btn btn-sm btn-info",text:d.default.createElement("i",{className:"glyphicon glyphicon-ok"}),getDisabled:function(e,t){return t%2},onClick:function(e){console.log(e,"onclick")}},{className:"btn btn-sm btn-danger",text:"删除",onClick:function(e){console.log(e,"onclick")}}],columns:[{field:"id",name:"序号",render:function(e){return"D00"+e}},{field:"name",name:"商品名"},{field:"price",name:"成本价"}],loading:!0}},l.onFocus=l.onFocus.bind(l),l.onHide=l.onHide.bind(l),l.handleEnter=l.handleEnter.bind(l),l}return r(t,e),u(t,[{key:"onFocus",value:function(){var e=this;this.setState({show:!0,coolData:Object.assign(this.state.coolData,{loading:!0})}),setTimeout(function(){e.setState({loading:!1,coolData:Object.assign(e.state.coolData,{loading:!1,list:[{id:"0001",name:"大白菜",price:22.12,actionStatus:[0]},{id:"0002",name:"大白菜",price:22.12},{id:"0003",name:"大白菜",price:22.12,actionStatus:[0,1]},{id:"0004",name:"大白菜",price:22.12,actionStatus:[1,0]},{id:"0005",name:"大白菜",price:22.12},{id:"00015",name:"大白菜",price:22.12},{id:"00013",name:"大白菜",price:22.12,actionStatus:[1,1]}]})})},1e3)}},{key:"handleEnter",value:function(e){console.log(e,this.state.coolData.list[e]),this.setState({input:this.state.coolData.list[e].name,show:!1})}},{key:"onHide",value:function(){this.setState({show:!1})}},{key:"render",value:function(){return d.default.createElement("div",{style:{width:"400px"}},d.default.createElement(s.DropSelect,{show:this.state.show,loading:this.state.loading,data:this.state.coolData,onHide:this.onHide,onEnter:this.handleEnter},d.default.createElement("input",{value:this.state.input,className:"form-control",onFocus:this.onFocus,placeholder:"支持键盘上下键选中，回车选择"})))}}]),t}(d.default.Component),m=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return r(t,e),u(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return d.default.createElement("div",{className:"doc"},d.default.createElement("h2",{id:"dropselect"},d.default.createElement("a",{className:"header-anchor",href:"#dropselect","aria-hidden":"true"},"¶")," DropSelect"),d.default.createElement("p",null,"下拉选择组件。支持键盘上下键操作，回车选择"),d.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},d.default.createElement("div",{className:"doc-demo-instance"},d.default.createElement("h4",null,"Example"),d.default.createElement(o,null)),d.default.createElement("div",{className:"doc-demo-meta"},d.default.createElement("div",{className:"doc-demo-code"},d.default.createElement("pre",null,d.default.createElement("code",{className:"language-js"},d.default.createElement("span",{className:"hljs-class"},d.default.createElement("span",{className:"hljs-keyword"},"class")," ",d.default.createElement("span",{className:"hljs-title"},"DropSelectWrap")," ",d.default.createElement("span",{className:"hljs-keyword"},"extends")," ",d.default.createElement("span",{className:"hljs-title"},"React"),".",d.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",d.default.createElement("br",null),"    ",d.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",d.default.createElement("br",null),"        ",d.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"show"),": ",d.default.createElement("span",{className:"hljs-literal"},"false"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"input"),": ",d.default.createElement("span",{className:"hljs-string"},"''"),",",d.default.createElement("br",null),"            ",d.default.createElement("span",{className:"hljs-attr"},"coolData"),": ","{",d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-attr"},"list"),": [],",d.default.createElement("br",null),"                ",d.default.createElement("span",{className:"hljs-attr"},"actions"),": [","{",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"className"),": ",d.default.createElement("span",{className:"hljs-string"},'"btn btn-sm btn-info"'),",",d.default.createElement("br",null),"                    ",d.default.createElement("span",{className:"hljs-attr"},"text"),': <i className="glyphicon glyphicon-ok"/>,',d.default.createElement("br",null),"                    getDisabled: (value, i) => ","{",d.default.createElement("br",null),"                        return i % 2;",d.default.createElement("br",null),"                    ","}",",",d.default.createElement("br",null),"                    onClick: function (col) ","{",d.default.createElement("br",null),"                        console.log(col, 'onclick');",d.default.createElement("br",null),"                    ","}",d.default.createElement("br",null),"                ","}",", ","{",d.default.createElement("br",null),'                    className: "btn btn-sm btn-danger",',d.default.createElement("br",null),"                    text: '删除',",d.default.createElement("br",null),"                    onClick: function (col) ","{",d.default.createElement("br",null),"                        console.log(col, 'onclick');",d.default.createElement("br",null),"                    ","}",d.default.createElement("br",null),"                ","}","],",d.default.createElement("br",null),"                columns: [","{",d.default.createElement("br",null),"                    field: 'id',",d.default.createElement("br",null),"                    name: '序号',",d.default.createElement("br",null),"                    render: function (value) ","{",d.default.createElement("br",null),"                        return 'D00' + value;",d.default.createElement("br",null),"                    ","}",d.default.createElement("br",null),"                ","}",", ","{",d.default.createElement("br",null),"                    field: 'name',",d.default.createElement("br",null),"                    name: '商品名'",d.default.createElement("br",null),"                ","}",", ","{",d.default.createElement("br",null),"                    field: 'price',",d.default.createElement("br",null),"                    name: '成本价'",d.default.createElement("br",null),"                ","}","],",d.default.createElement("br",null),"                loading: true",d.default.createElement("br",null),"            ","}",d.default.createElement("br",null),"        ","}",";",d.default.createElement("br",null),"        this.onFocus = ::this.onFocus;",d.default.createElement("br",null),"        this.onHide = ::this.onHide;",d.default.createElement("br",null),"        this.handleEnter = ::this.handleEnter;",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    onFocus() ","{",d.default.createElement("br",null),"        this.setState(","{",d.default.createElement("br",null),"            show: true,",d.default.createElement("br",null),"            coolData: Object.assign(this.state.coolData,","{",d.default.createElement("br",null),"                loading: true",d.default.createElement("br",null),"            ","}",")",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"               ",d.default.createElement("br",null),"        setTimeout(() => ","{",d.default.createElement("br",null),"            this.setState(","{",d.default.createElement("br",null),"                loading: false,",d.default.createElement("br",null),"                coolData: Object.assign(this.state.coolData, ","{",d.default.createElement("br",null),"                    loading: false,",d.default.createElement("br",null),"                    list: [","{",d.default.createElement("br",null),"                        id: '0001',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12,",d.default.createElement("br",null),"                        actionStatus: [0]",d.default.createElement("br",null),"                    ","}",", ","{",d.default.createElement("br",null),"                        id: '0002',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12",d.default.createElement("br",null),"                    ","}",", ","{",d.default.createElement("br",null),"                        id: '0003',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12,",d.default.createElement("br",null),"                        actionStatus: [0, 1]",d.default.createElement("br",null),"                    ","}",", ","{",d.default.createElement("br",null),"                        id: '0004',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12,",d.default.createElement("br",null),"                        actionStatus: [1, 0]",d.default.createElement("br",null),"                    ","}",", ","{",d.default.createElement("br",null),"                        id: '0005',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12",d.default.createElement("br",null),"                    ","}",", ","{",d.default.createElement("br",null),"                        id: '00015',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12",d.default.createElement("br",null),"                    ","}",", ","{",d.default.createElement("br",null),"                        id: '00013',",d.default.createElement("br",null),"                        name: '大白菜',",d.default.createElement("br",null),"                        price: 22.12,",d.default.createElement("br",null),"                        actionStatus: [1, 1]",d.default.createElement("br",null),"                    ","}","]",d.default.createElement("br",null),"                ","}",")",d.default.createElement("br",null),"            ","}",");",d.default.createElement("br",null),"        ","}",", 1000);",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    handleEnter(index) ","{",d.default.createElement("br",null),"        console.log(index, this.state.coolData.list[index]);",d.default.createElement("br",null),"        this.setState(","{",d.default.createElement("br",null),"            input: this.state.coolData.list[index].name,",d.default.createElement("br",null),"            show: false",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    onHide() ","{",d.default.createElement("br",null),"        this.setState(","{",d.default.createElement("br",null),"            show: false",d.default.createElement("br",null),"        ","}",");",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"    ",d.default.createElement("br",null),"    render() ","{",d.default.createElement("br",null),"        return (",d.default.createElement("br",null),"            <div style=","{","{","width: '400px'","}","}",">",d.default.createElement("br",null),"                <DropSelect",d.default.createElement("br",null),"                    show=","{","this.state.show","}",d.default.createElement("br",null),"                    loading=","{","this.state.loading","}",d.default.createElement("br",null),"                    data=","{","this.state.coolData","}",d.default.createElement("br",null),"                    onHide=","{","this.onHide","}",d.default.createElement("br",null),"                    onEnter=","{","this.handleEnter","}",d.default.createElement("br",null),"                >",d.default.createElement("br",null),"                    <input value=","{","this.state.input","}",' className="form-control" onFocus=',"{","this.onFocus","}",' placeholder="支持键盘上下键选中，回车选择"/>',d.default.createElement("br",null),"                </DropSelect>",d.default.createElement("br",null),"            </div>",d.default.createElement("br",null),"        );",d.default.createElement("br",null),"    ","}",d.default.createElement("br",null),"}",d.default.createElement("br",null))),d.default.createElement("pre",null,d.default.createElement("code",{className:"language-jsx"},"<DropSelectWrap/>",d.default.createElement("br",null)))),d.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},d.default.createElement("i",null)))),d.default.createElement("h3",{id:"props"},d.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"show (bool|isRequired)")," 是否显示"),d.default.createElement("li",null,d.default.createElement("code",null,"data (object)")," 数据对象，参见demo"),d.default.createElement("li",null,d.default.createElement("code",null,"onEnter (func)")," 点击回车时触发"),d.default.createElement("li",null,d.default.createElement("code",null,"onHide (func)")," 隐藏时触发")))}}]),t}(d.default.Component);t.default=m}});