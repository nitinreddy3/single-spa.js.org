(window.webpackJsonp=window.webpackJsonp||[]).push([[67,15,30],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a(195),o=a(240),i=a(190);var m=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=a(241);t.default=function(e){var t=e.metadata,a=e.items,n=e.sidebar,i=Object(l.default)().siteConfig.title,u=t.blogDescription,f=t.blogTitle,d="/"===t.permalink?i:f;return r.a.createElement(c.a,{title:d,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},a.map((function(e){var t=e.content;return r.a.createElement(o.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.a.createElement(t,null))})),r.a.createElement(m,{metadata:t})))))}},196:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(194),o=a.n(c),i=a(190),m=a(22),s=a(191);t.a=function(){var e=Object(m.default)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,c=(void 0===a?{}:a).footer,u=Object(r.useState)((function(){return"undefined"!=typeof localStorage&&"true"!==localStorage.getItem("hide-workshop-banner")})),f=u[0],d=u[1];if(!c)return null;Object(r.useEffect)((function(){f||localStorage.setItem("hide-workshop-banner",!0)}),[f]);var g=c.copyright,h=c.links,p=void 0===h?[]:h,E=c.logo;return l.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===c.style})},l.a.createElement("div",{className:"container"},p&&p.length>0&&l.a.createElement("div",{className:"row footer__links"},p.map((function(e,a){return l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,c,o){return l.a.createElement(r.Fragment,{key:c},l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&l.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(s.a)(e.to)}),e.label),e.html&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),o.length-1===c&&2===a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},l.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+t.organizationName+"&repo="+t.projectName+"&type=star&count=true&size=small"})),l.a.createElement("li",{key:"license",className:"footer__item"},l.a.createElement("a",{href:Object(s.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),l.a.createElement("div",{className:"text--center"},E&&E.src&&l.a.createElement("img",{className:"footer__logo margin-bottom--sm",alt:E.alt,src:Object(s.a)(E.src)}),l.a.createElement("div",null,"Originally developed at ",l.a.createElement("a",{href:"https://getcanopy.com"},"Canopy")),g&&g,f&&l.a.createElement("div",{className:"footer__banner"},l.a.createElement("div",null,"Learn microfrontends from the single-spa core team at single-spa-workshop.com!"),l.a.createElement("div",{class:"footer__banner--actions"},l.a.createElement("div",{role:"button",tabIndex:0,onClick:function(){return d(!1)}},"Dismiss"),l.a.createElement("a",{href:"https://single-spa-workshop.com",target:"_blank",rel:"noopener"},"View Courses"))))))}},203:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(190),o=a(207),i=a(204),m=a(56),s=a.n(m);t.a={codehtml:function(e){var t=e.children;return l.a.createElement("code",null,t)},code:function(e){var t=e.children;return"string"==typeof t?l.a.createElement(o.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e)},pre:function(e){return l.a.createElement("pre",Object(n.a)({className:s.a.mdxCodeBlock},e))},h1:Object(i.a)("h1"),h2:Object(i.a)("h2"),h3:Object(i.a)("h3"),h4:Object(i.a)("h4"),h5:Object(i.a)("h5"),h6:Object(i.a)("h6")}}}]);