"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[8469],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={title:"Bash",sidebar_position:1},i=void 0,l={unversionedId:"programming-languages/bash/bash",id:"programming-languages/bash/bash",title:"Bash",description:"Introduction",source:"@site/docs/programming-languages/bash/bash.md",sourceDirName:"programming-languages/bash",slug:"/programming-languages/bash/",permalink:"/docs/programming-languages/bash/",draft:!1,editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/programming-languages/bash/bash.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",lastUpdatedAt:1686818999,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:1,frontMatter:{title:"Bash",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Boosting Productivity",permalink:"/docs/development-basics/boosting-productivity"},next:{title:"Python",permalink:"/docs/programming-languages/python/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Define variables",id:"define-variables",level:2},{value:"<code>echo</code> variables",id:"echo-variables",level:2},{value:"<code>export</code> variables",id:"export-variables",level:2},{value:"<code>if</code> statement",id:"if-statement",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This page documents bash syntax that I've learned."),(0,r.kt)("h2",{id:"define-variables"},"Define variables"),(0,r.kt)("p",null,"In Bash, you can define a variable by using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'variable_name=value\n# Example:\nname="John"\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There should be no spaces around the equals (=) sign.")),(0,r.kt)("p",null,"Variables in Bash are not typed, so you don't need to specify the data type. They can hold strings, numbers, or any other type of data."),(0,r.kt)("h2",{id:"echo-variables"},(0,r.kt)("inlineCode",{parentName:"h2"},"echo")," variables"),(0,r.kt)("p",null,"To access the value of a variable, you can use the variable name preceded by the dollar sign ($):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo $name\n")),(0,r.kt)("p",null,"You can also assign the output of a command to a variable using command substitution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"current_date=$(date)\n")),(0,r.kt)("p",null,"In this example, the output of the date command is assigned to the current_date variable."),(0,r.kt)("h2",{id:"export-variables"},(0,r.kt)("inlineCode",{parentName:"h2"},"export")," variables"),(0,r.kt)("p",null,"Variables in Bash are by default local to the current shell or script. If you want to export a variable to be accessible by other scripts or programs, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export MY_VARIABLE_1\nexport MY_VARIABLE="Hello, World!"\n')),(0,r.kt)("p",null,"It can then be imported. For an example of how a Bash variable is imported and used in a Python script, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/programming-languages/python/import-bash-variables"},"Importing Bash Variables"),"."),(0,r.kt)("h2",{id:"if-statement"},(0,r.kt)("inlineCode",{parentName:"h2"},"if")," statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'if [[ "$fname" == "a.txt" || "$fname" == "c.txt" ]]; then \n  echo Hello # a command to run if the condition is met\nfi\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More info"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"=="),": if ",(0,r.kt)("inlineCode",{parentName:"li"},"$fname")," equals to ",(0,r.kt)("inlineCode",{parentName:"li"},"a.txt")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"c txt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\\\"),": True if either expression1 or expression2 is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&&"),": True if both expression1 and expression2 are true.")))}d.isMDXComponent=!0}}]);