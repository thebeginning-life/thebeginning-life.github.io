(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{LZFG:function(e,t,a){e.exports={articleList:"PostsListing-module--article-list--3ReSK",articleBox:"PostsListing-module--article-box--3M6_I",right:"PostsListing-module--right--2MxCO",meta:"PostsListing-module--meta--3cFzL"}},ccoC:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),i=a("TJpk"),o=a.n(i),l=a("83Zx"),s=a("lPsB"),c=a("IpnI"),d=a.n(c);t.default=function(e){var t=e.data,a=e.pageContext;return r.a.createElement(l.a,null,r.a.createElement("main",null,r.a.createElement(o.a,{title:'Posts tagged as "'+a.tag+'" | '+d.a.siteTitle}),r.a.createElement(s.a,{postEdges:t.allMarkdownRemark.edges})))};var m="4174360325"},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("LZFG"),l=a.n(o);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return r.a.createElement("div",{className:l.a.articleList},a.map((function(e){return r.a.createElement(i.Link,{to:e.path,key:e.title},r.a.createElement("article",{className:l.a.articleBox},r.a.createElement("div",{className:l.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:l.a.meta},e.date," — ",r.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),r.a.createElement("p",null,e.excerpt))))})))}}}]);
//# sourceMappingURL=component---src-templates-tag-js-c8e08a04451b377f234b.js.map