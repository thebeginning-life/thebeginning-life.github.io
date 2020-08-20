/*! CMS.js v2.0.0 | MIT (c) 2018 Chris Diana | https://github.com/chrisdiana/cms.js */
var CMS=function(){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var r,s={elementId:null,layoutDirectory:null,defaultView:null,errorLayout:null,mode:"SERVER",github:null,types:[],plugins:[],frontMatterSeperator:/^---$/m,listAttributes:["tags"],dateParser:/\d{4}-\d{2}(?:-\d{2})?/,dateFormat:function(e){return[e.getMonth()+1,e.getDate(),e.getFullYear()].join("/")},extension:".md",sort:void 0,markdownEngine:null,debug:!1,messageClassName:"cms-messages",onload:function(){},onroute:function(){}},a='ERROR: No element ID or ID incorrect. Check "elementId" parameter in config.',l="ERROR: Error getting files. Make sure there is a directory for each type in config with files in it.",c="ERROR: Error getting the file",u="ERROR: Error loading layout. Check the layout file to make sure it exists.",h="WARNING: Not ready to perform action";function f(e,t){return e&&(r.innerHTML=t),t}function g(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&(200===n.status?t(n.response,!1):t(n,n.statusText))},n.send()}function p(e,t){t||(t=window.location.href),e=e.replace(/[[]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function n(e){var t=new Date(e);return new Date(t.getTime()- -6e4*t.getTimezoneOffset())}function m(e,i,r){g(e,function(e,t){var n;t&&r(e,t),r((n=e,new Function("data","var output="+JSON.stringify(n).replace(/<%=(.+?)%>/g,'"+($1)+"').replace(/<%(.+?)%>/g,'";$1\noutput+="')+";return output;")(i)),t)})}function d(e,n,t){n.container.innerHTML="",m([n.layoutDirectory,"/",e,".html"].join(""),t,function(e,t){t?f(u):n.container.innerHTML=e})}var y=function(){function e(){o(this,e),this.rules=[{regex:/(#+)(.*)/g,replacement:function(e,t,n){var i=t.length;return"<h"+i+">"+n.trim()+"</h"+i+">"}},{regex:/!\[([^[]+)\]\(([^)]+)\)/g,replacement:"<img src='$2' alt='$1'>"},{regex:/\[([^[]+)\]\(([^)]+)\)/g,replacement:"<a href='$2'>$1</a>"},{regex:/(\*\*|__)(.*?)\1/g,replacement:"<strong>$2</strong>"},{regex:/(\*|_)(.*?)\1/g,replacement:"<em>$2</em>"},{regex:/~~(.*?)~~/g,replacement:"<del>$1</del>"},{regex:/:"(.*?)":/g,replacement:"<q>$1</q>"},{regex:/```[a-z]*\n[\s\S]*?\n```/g,replacement:function(e){return"<pre>"+(e=e.replace(/```/gm,"")).trim()+"</pre>"}},{regex:/&&&[a-z]*\n[\s\S]*?\n&&&/g,replacement:function(e){return'<script type="text/javascript">'+(e=e.replace(/```/gm,"")).trim()+"<\/script>"}},{regex:/`(.*?)`/g,replacement:"<code>$1</code>"},{regex:/\n\*(.*)/g,replacement:function(e,t){return"\n<ul>\n\t<li>"+t.trim()+"</li>\n</ul>"}},{regex:/\n[0-9]+\.(.*)/g,replacement:function(e,t){return"\n<ol>\n\t<li>"+t.trim()+"</li>\n</ol>"}},{regex:/\n(&gt;|>)(.*)/g,replacement:function(e,t,n){return"\n<blockquote>"+n.trim()+"</blockquote>"}},{regex:/\n-{5,}/g,replacement:"\n<hr />"},{regex:/\n([^\n]+)\n/g,replacement:function(e,t){var n=t.trim();return/^<\/?(ul|ol|li|h|p|bl)/i.test(n)?"\n"+t+"\n":"\n<p>"+n+"</p>\n"}},{regex:/<\/ul>\s?<ul>/g,replacement:""},{regex:/<\/ol>\s?<ol>/g,replacement:""},{regex:/<\/blockquote><blockquote>/g,replacement:"\n"}]}return t(e,[{key:"render",value:function(t){return t="\n"+t+"\n",this.rules.forEach(function(e){t=t.replace(e.regex,e.replacement)}),t.trim()}}]),e}(),v=function(){function r(e,t,n,i){o(this,r),this.url=e,this.type=t,this.layout=n,this.config=i,this.html=!1,this.content,this.name,this.extension,this.title,this.excerpt,this.date,this.datetime,this.author,this.body,this.permalink,this.tags}return t(r,[{key:"getContent",value:function(n){var i=this;g(this.url,function(e,t){t&&n(e,t),i.content=e,"string"==typeof i.content&&n(e,t)})}},{key:"parseFrontMatter",value:function(){var e=this.content.split(this.config.frontMatterSeperator)[1];if(e){var n={};e.split(/\n/g).forEach(function(e){var t=e.split(":");t[1]&&(n[t[0].trim()]=t[1].trim())}),function(e,t,n){var i;for(i in void 0===t&&(t=e),t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);n&&n()}(this,n,null)}}},{key:"setListAttributes",value:function(){var t=this;this.config.listAttributes.forEach(function(e){t.hasOwnProperty(e)&&t[e]&&(t[e]=t[e].split(",").map(function(e){return e.trim()}))})}},{key:"setFilename",value:function(){this.name=this.url.substr(this.url.lastIndexOf("/")).replace("/","").replace(this.config.extension,"")}},{key:"setPermalink",value:function(){this.permalink=["#",this.type,this.name].join("/")}},{key:"setDate",value:function(){var e=new RegExp(this.config.dateParser);this.date?(this.datetime=n(this.date),this.date=this.config.dateFormat(this.datetime)):e.test(this.url)&&(this.date=e.exec(this.url),this.datetime=n(this.date),this.date=this.config.dateFormat(this.datetime))}},{key:"setBody",value:function(){var e=this.content.split(this.config.frontMatterSeperator).splice(2).join(this.config.frontMatterSeperator);if(this.html)this.body=e;else if(this.config.markdownEngine)this.body=this.config.markdownEngine(e);else{var t=new y;this.body=t.render(e)}}},{key:"parseContent",value:function(){this.setFilename(),this.setPermalink(),this.parseFrontMatter(),this.setListAttributes(),this.setDate(),this.setBody()}},{key:"render",value:function(){return d(this.layout,this.config,this)}}]),r}(),k=function(){function i(e,t,n){o(this,i),this.type=e,this.layout=t,this.config=n,this.files=[],this[e]=this.files}return t(i,[{key:"init",value:function(n){var i=this;this.getFiles(function(e,t){t&&f(l),i.loadFiles(function(e,t){t&&f(c),n()})})}},{key:"getFileListUrl",value:function(e,t){return"GITHUB"===t.mode?(n=e,i=t.github,r=[i.host,"repos",i.username,i.repo,"contents",n+"?ref="+i.branch],i.prefix&&r.splice(5,0,i.prefix),r.join("/")):e;var n,i,r}},{key:"getFileUrl",value:function(e,t){return"GITHUB"===t?e.download_url:e.getAttribute("href")}},{key:"getFileElements",value:function(e){var t;if("GITHUB"===this.config.mode)t=JSON.parse(e);else{var n=document.createElement("div");n.innerHTML=e,t=[].slice.call(n.getElementsByTagName("a"))}return t}},{key:"getFiles",value:function(n){var i=this;g(this.getFileListUrl(this.type,this.config),function(e,t){t&&n(e,t),i.getFileElements(e).forEach(function(e){var t=i.getFileUrl(e,i.config.mode);(function(e,t){if(e){var n=e.split(".").pop();return n===t.replace(".","")||"html"===n}})(t,i.config.extension)&&i.files.push(new v(t,i.type,i.layout.single,i.config))}),n(e,t)})}},{key:"loadFiles",value:function(r){var o=this,s=[];this.files.forEach(function(n,i){n.getContent(function(e,t){t&&r(e,t),s.push(i),n.parseContent(),o.files.length==s.length&&r(e,t)})})}},{key:"search",value:function(t,n){this[this.type]=this.files.filter(function(e){return 0<=e[t].toLowerCase().trim().indexOf(n.toLowerCase().trim())})}},{key:"resetSearch",value:function(){this[this.type]=this.files}},{key:"getByTag",value:function(t){this[this.type]=this.files.filter(function(e){if(t&&e.tags)return e.tags.some(function(e){return e===t})})}},{key:"getFileByPermalink",value:function(t){return this.files.filter(function(e){return e.permalink===t})[0]}},{key:"render",value:function(){return d(this.layout.list,this.config,this)}}]),i}(),x=function(){function n(e,t){o(this,n),this.ready=!1,this.collections={},this.filteredCollections={},this.state,this.view=e,this.config=Object.assign({},s,t),this.init()}return t(n,[{key:"init",value:function(){var e,t=this;this.config.debug&&(e=this.config.messageClassName,(r=document.createElement("div")).className=e,r.innerHTML="DEBUG",r.style.background="yellow",r.style.position="absolute",r.style.top="0px",document.body.appendChild(r)),this.config.elementId?(this.config.container=document.getElementById(this.config.elementId),this.config.container?this.initFileCollections(function(){t.view.addEventListener("hashchange",t.route.bind(t),!1),t.view.dispatchEvent(new HashChangeEvent("hashchange")),t.ready=!0,t.registerPlugins(),t.config.onload()}):f(this.config.debug,a)):f(this.config.debug,a)}},{key:"initFileCollections",value:function(n){var i=this,r=[],o=[];this.config.types.forEach(function(e){i.collections[e.name]=new k(e.name,e.layout,i.config),o.push(e.name)}),o.forEach(function(e,t){i.collections[e].init(function(){r.push(t),0===e.indexOf("post")&&i.collections[e][e].reverse(),o.length==r.length&&n()})})}},{key:"route",value:function(){var e=window.location.hash.split("/").map(function(e){return 0<=e.indexOf("?")&&(e=e.substring(0,e.indexOf("?"))),e}).filter(function(e){return"#"!==e}),t=e[0],n=e[1],i=this.collections[t],r=p("query")||"",o=p("tag")||"";if(this.state=window.location.hash.substr(1),t)if(n){var s=["#",t,n.trim()].join("/");i.getFileByPermalink(s).render()}else i?(r?i.search("title",r):o?i.getByTag(o):i.resetSearch(),i.render()):d(this.config.errorLayout,this.config,{});else window.location=["#",this.config.defaultView].join("/");this.config.onroute()}},{key:"registerPlugins",value:function(){var i=this;this.config.plugins.forEach(function(e){var t,n=t=(t=(t=e.toString()).substr("function ".length)).substr(0,t.indexOf("("));i[n]||(i[n]=e)})}},{key:"sort",value:function(e,t){this.ready?(this.collections[e][e].sort(t),this.collections[e].render()):f(h)}},{key:"search",value:function(e,t,n){this.ready?(this.collections[e].search(t,n),this.collections[e].render()):f(h)}}]),n}();return function(e){return new x(window,e)}}();
