"use strict";(self.webpackChunkvickyhella_github_io=self.webpackChunkvickyhella_github_io||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,h=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Basics",sidebar_position:1},c=void 0,u={unversionedId:"development/linux_commands/linux_commands",id:"development/linux_commands/linux_commands",title:"Basics",description:"Introduction",source:"@site/docs/development/linux_commands/linux_commands.md",sourceDirName:"development/linux_commands",slug:"/development/linux_commands/",permalink:"/docs/development/linux_commands/",editUrl:"https://github.com/vickyhella/vickyhella.github.io/edit/main/docs/development/linux_commands/linux_commands.md",tags:[],version:"current",lastUpdatedBy:"vickyhella",lastUpdatedAt:1679051368,formattedLastUpdatedAt:"3/17/2023",sidebarPosition:1,frontMatter:{title:"Basics",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Common Collocation Mistakes",permalink:"/docs/translation/collocation/"},next:{title:"Command Operators",permalink:"/docs/development/linux_commands/command_operators"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Absolute and Relative Paths",id:"absolute-and-relative-paths",level:2},{value:"Environments",id:"environments",level:2},{value:"<code>echo $PATH</code>",id:"echo-path",level:3},{value:"<code>export PATH</code>",id:"export-path",level:3},{value:"<code>which</code>",id:"which",level:3},{value:"Shortcuts",id:"shortcuts",level:2},{value:"References",id:"references",level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"This section introduces commands that I use a lot when dealing with text. They are categorized according to their use cases. This document introduces only the basics."),(0,l.kt)("h2",{id:"absolute-and-relative-paths"},"Absolute and Relative Paths"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},". # current directory\n./ # Current directory, same as .\n../ # One level up, i.e., the parent directory of the current directory\n../../ # Two levels up, i.e., the parent of the parent directory\n")),(0,l.kt)("h2",{id:"environments"},"Environments"),(0,l.kt)("p",null,"Before running a command, sometimes we need to ensure that the environment is properly set."),(0,l.kt)("h3",{id:"echo-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"echo $PATH")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# show the current PATH\necho $PATH\n")),(0,l.kt)("h3",{id:"export-path"},(0,l.kt)("inlineCode",{parentName:"h3"},"export PATH")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# add a path to PATH (using ":" for separation)\nexport PATH=$PATH:<other-path> # by appending one\nexport PATH=<other-path>:$PATH # by adding one to the beginning\n')),(0,l.kt)("h3",{id:"which"},(0,l.kt)("inlineCode",{parentName:"h3"},"which")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# query the path of a command line tool\nwhich <command-line-tool>\n")),(0,l.kt)("h2",{id:"shortcuts"},"Shortcuts"),(0,l.kt)("p",null,"The following shortcuts can be useful in the terminal."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl + L"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e05\u9664\u5c4f\u5e55\u5e76\u5c06\u5f53\u524d\u884c\u79fb\u5230\u9875\u9762\u9876\u90e8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl + C"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d\u6b62\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u547d\u4ee4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shift + PageUp"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5411\u4e0a\u6eda\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shift + PageDown"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5411\u4e0b\u6eda\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl + U"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u5149\u6807\u4f4d\u7f6e\u5220\u9664\u5230\u884c\u9996\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl + K"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u5149\u6807\u4f4d\u7f6e\u5220\u9664\u5230\u884c\u5c3e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl + W"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u5149\u6807\u4f4d\u7f6e\u524d\u4e00\u4e2a\u5355\u8bcd\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl + D"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u95ed Shell \u4f1a\u8bdd\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2191\uff0c\u2193"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5df2\u6267\u884c\u547d\u4ee4\u7684\u5386\u53f2\u8bb0\u5f55\u3002")))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.rapidtables.com/code/linux/index.html"},"Repid TableL: Linux Commands"))))}m.isMDXComponent=!0}}]);