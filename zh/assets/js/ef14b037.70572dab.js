"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[3414],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=l,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7650:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return m}});var a=n(3117),l=(n(7294),n(3905));const r={title:"Lesson 5: Tables",sidebar_position:5,tags:["DITA","Technical Writing","XML","Tables"]},i=void 0,o={unversionedId:"dita/tables",id:"dita/tables",title:"Lesson 5: Tables",description:"The simpletable element",source:"@site/docs/dita/5-tables.md",sourceDirName:"dita",slug:"/dita/tables",permalink:"/zh/docs/dita/tables",draft:!1,editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/dita/5-tables.md",tags:[{label:"DITA",permalink:"/zh/docs/tags/dita"},{label:"Technical Writing",permalink:"/zh/docs/tags/technical-writing"},{label:"XML",permalink:"/zh/docs/tags/xml"},{label:"Tables",permalink:"/zh/docs/tags/tables"}],version:"current",lastUpdatedBy:"vickyhella",sidebarPosition:5,frontMatter:{title:"Lesson 5: Tables",sidebar_position:5,tags:["DITA","Technical Writing","XML","Tables"]},sidebar:"tutorialSidebar",previous:{title:"Lesson 4: Creating DITA Content",permalink:"/zh/docs/dita/creating-dita-content"},next:{title:"Lesson 6: Creating Relationships Among Topics",permalink:"/zh/docs/dita/creating-relationshipts-among-topics"}},s={},m=[{value:"The simpletable element",id:"the-simpletable-element",level:2},{value:"The table element",id:"the-table-element",level:2},{value:"A minimal DITA table",id:"a-minimal-dita-table",level:3},{value:"A complex DITA table",id:"a-complex-dita-table",level:3},{value:"Best practices for tables",id:"best-practices-for-tables",level:2}],d={toc:m},p="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-simpletable-element"},"The simpletable element"),(0,l.kt)("p",null,"Dita simple tables (",(0,l.kt)("inlineCode",{parentName:"p"},"<simpletable>"),") use the following elements to represent and organize tabular data:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Number"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<sthead>")),(0,l.kt)("td",{parentName:"tr",align:null},"A header row"),(0,l.kt)("td",{parentName:"tr",align:null},"There can be at most one header row.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<strow>")),(0,l.kt)("td",{parentName:"tr",align:null},"A body row"),(0,l.kt)("td",{parentName:"tr",align:null},"There must be at least one body row, but the table can contain many rows.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<stentry>")),(0,l.kt)("td",{parentName:"tr",align:null},"A simple table entry"),(0,l.kt)("td",{parentName:"tr",align:null},"Each row can contain one or more ",(0,l.kt)("inlineCode",{parentName:"td"},"<stentry>")," elements, but each row (including the header row) should include the same number of ",(0,l.kt)("inlineCode",{parentName:"td"},"<stentry>")," elements.")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<stentry>")," element contains text data or other common block and inline elements."),(0,l.kt)("p",null,"Here is an example of a table with one heading row, two body rows, and two columns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<simpletable>\n\n   <sthead>\n\n      <stentry>heading for column 1</stentry>\n\n      <stentry>heading for column 2</stentry>\n\n   </sthead>\n\n   <strow>\n\n      <stentry>row 1, column 1</stentry>\n\n      <stentry>row 1, column 2</stentry>\n\n   </strow>\n\n   <strow>\n\n      <stentry>row 2, column 1</stentry>\n\n      <stentry>row 2, column 2</stentry>\n\n   </strow>\n\n</simpletable>\n")),(0,l.kt)("p",null,"This table looks like this visually:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Untitled",src:n(3595).Z,width:"500",height:"130"})),(0,l.kt)("h2",{id:"the-table-element"},"The table element"),(0,l.kt)("p",null,"DITA tables (",(0,l.kt)("inlineCode",{parentName:"p"},"<table>"),") use the following elements to represent and organize tabular data:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Number"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<title>")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the title for the table."),(0,l.kt)("td",{parentName:"tr",align:null},"Zero or one.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<tgroup>")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the columns specifications, header rows and body rows."),(0,l.kt)("td",{parentName:"tr",align:null},"Every table must contain at least one ",(0,l.kt)("inlineCode",{parentName:"td"},"<tgroup>")," element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<colspec>")),(0,l.kt)("td",{parentName:"tr",align:null},"Defines column widths and identifying information."),(0,l.kt)("td",{parentName:"tr",align:null},"There should be one ",(0,l.kt)("inlineCode",{parentName:"td"},"<colspec>")," element per column in your table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<thead>")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the table header rows."),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("inlineCode",{parentName:"td"},"<tgroup>")," can contain at most one ",(0,l.kt)("inlineCode",{parentName:"td"},"<thead>")," element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<tbody>")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the table body rows."),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("inlineCode",{parentName:"td"},"<tgroup>")," must contain one and only one ",(0,l.kt)("inlineCode",{parentName:"td"},"<tbody> "),"element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<row>\t")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains a single row in a table."),(0,l.kt)("td",{parentName:"tr",align:null},"A ",(0,l.kt)("inlineCode",{parentName:"td"},"<thead>")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"<tbody>")," element can contain any number of ",(0,l.kt)("inlineCode",{parentName:"td"},"<row>")," elements.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<entry>\t")),(0,l.kt)("td",{parentName:"tr",align:null},"Contains data for a table cell."),(0,l.kt)("td",{parentName:"tr",align:null},"Can contain text data or other common block and inline elements. A ",(0,l.kt)("inlineCode",{parentName:"td"},"<row>")," element can contain one or more ",(0,l.kt)("inlineCode",{parentName:"td"},"<entry> "),"elements.")))),(0,l.kt)("h3",{id:"a-minimal-dita-table"},"A minimal DITA table"),(0,l.kt)("p",null,"This is an example of a minimal DITA table structure (one heading row, one body row, and three columns). Note that in this case, the ",(0,l.kt)("inlineCode",{parentName:"p"},"<tgroup>")," specifies only the ",(0,l.kt)("inlineCode",{parentName:"p"},"cols")," attribute, which is required:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},' <table>\n\n      <tgroup cols="3">\n\n        <thead>\n\n          <row>\n\n            <entry>column 1, heading row</entry>\n\n            <entry>column 2, heading row</entry>\n\n            <entry>column 3, heading row</entry>\n\n          </row>\n\n        </thead>\n\n        <tbody>\n\n          <row>\n\n            <entry>column 1, body row</entry>\n\n            <entry>column 2, body row</entry>\n\n            <entry>column 3, body row</entry>\n\n          </row>\n\n        </tbody>\n\n      </tgroup>\n\n    </table>\n')),(0,l.kt)("p",null,"The result looks like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7074).Z,width:"772",height:"80"})),(0,l.kt)("h3",{id:"a-complex-dita-table"},"A complex DITA table"),(0,l.kt)("p",null,"A table that is a little bit complex looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<table>\n\n        <title>My first table</title>\n\n        <tgroup cols="2">\n\n          <colspec colname="c1" colnum="1" colwidth="1*"/>\n\n          <colspec colname="c2" colnum="2" colwidth="4*"/>\n\n          <thead>\n\n            <row>\n\n              <entry>heading row, column 1</entry>\n\n              <entry>heading row, column 2</entry>\n\n            </row>\n\n          </thead>\n\n          <tbody>\n\n            <row>\n\n              <entry>row 1, column 1</entry>\n\n              <entry>row 1, column 2</entry>\n\n            </row>\n\n            <row>\n\n              <entry namest="c1" nameend="c2">This cell spans two columns.</entry>\n\n            </row>\n\n            <row>\n\n              <entry morerows="1">This cell spans two rows.</entry>\n\n              <entry>row 3, column 2</entry>\n\n            </row>\n\n            <row>\n\n              <entry>row 4, column 2</entry>\n\n            </row>\n\n          </tbody>\n\n        </tgroup>\n\n      </table>\n')),(0,l.kt)("p",null,"It looks like this visually:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2157).Z,width:"1046",height:"136"})),(0,l.kt)("p",null,"Notes on the table:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"<colspec>")," element uses attributes to specify the column names (",(0,l.kt)("inlineCode",{parentName:"li"},"colname"),"), numbers (",(0,l.kt)("inlineCode",{parentName:"li"},"colnum"),"), and widths (",(0,l.kt)("inlineCode",{parentName:"li"},"colwidth"),"). In this example, the ",(0,l.kt)("inlineCode",{parentName:"li"},"colwidths")," are ",(0,l.kt)("inlineCode",{parentName:"li"},"1*")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"4*"),". The asterisk indicates that the settings are proportional, so the first column gets 20% of the available width and the second column gets 80%."),(0,l.kt)("li",{parentName:"ul"},"Each row has a ",(0,l.kt)("inlineCode",{parentName:"li"},"<row>")," element with ",(0,l.kt)("inlineCode",{parentName:"li"},"<entry>")," elements for each cell.\nNotice that row 2 has only a single ",(0,l.kt)("inlineCode",{parentName:"li"},"<entry>"),". That\u2019s because the entry spans across both columns, which is specified by the name-start (",(0,l.kt)("inlineCode",{parentName:"li"},"namest"),") and name-end (",(0,l.kt)("inlineCode",{parentName:"li"},"nameend"),") attributes."),(0,l.kt)("li",{parentName:"ul"},"In row 3, the first entry spans rows 3 and 4, so there you have a ",(0,l.kt)("inlineCode",{parentName:"li"},"morerows")," attribute.")),(0,l.kt)("h2",{id:"best-practices-for-tables"},"Best practices for tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Always wrap ",(0,l.kt)("inlineCode",{parentName:"li"},"<entry>")," content in the table in ",(0,l.kt)("inlineCode",{parentName:"li"},"<p>")," tags."),(0,l.kt)("li",{parentName:"ul"},"Nesting tables, even though it's allowed, is a bad idea."),(0,l.kt)("li",{parentName:"ul"},"Consider including more rows instead of more columns."),(0,l.kt)("li",{parentName:"ul"},"In many word processing tools, people use tables to visually format content such as indented lists. In DITA, this is not done and can lead to unexpected results."),(0,l.kt)("li",{parentName:"ul"},"Consider localization text expansion in tables. Where possible,",(0,l.kt)("strong",{parentName:"li"},"design the content for up to 40% text expansion"),"."),(0,l.kt)("li",{parentName:"ul"},"The DITA standard allows graphics in table cells. However, in most cases it\u2019s best to limit these graphics to small icons in table cells."),(0,l.kt)("li",{parentName:"ul"},"Consider the possible outputs when you create tables."),(0,l.kt)("li",{parentName:"ul"},"In some cases you might want to consider using other elements, such as definition lists, which can be rendered either as a table or a glossary-style list, depending on the target output.")))}c.isMDXComponent=!0},2157:function(e,t,n){t.Z=n.p+"assets/images/complex-table-4acc79003911557e41646f7dd6773eb5.jpg"},3595:function(e,t,n){t.Z=n.p+"assets/images/simple-table-99e0207a68aee60b67c39ad6c696ddb5.jpg"},7074:function(e,t,n){t.Z=n.p+"assets/images/table-e772575b447e438263b932829a72160c.jpg"}}]);