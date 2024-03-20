/*!
 * @version 9861375b
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{x3Ps:function(e,n,r){"use strict"
r.r(n)
var a,t=r("q1tI"),l=r.n(t),o=r("55Ip"),u=r("QzYC"),c=r("VkAN"),i=r.n(c),s=r("VX74"),d=Object(s.gql)(a||(a=i()(["\nquery getAllCategories{\n    Allcategories {\n      id\n      name\n      url\n    }\n  }\n"]))),g=r("QqLL"),m=r("wc1b")
n.default=l.a.memo(function AllCategoriesMenu(e){var n=function useAllCategoriesMenu(){var e=Object(s.useQuery)(d),n=e.loading,r=e.error,a=e.data,l=e.client
return{loading:n,error:r,data:Object(t.useMemo)(function(){if(a)return a},[a]),client:l}}(),r=n.loading,a=n.error,c=n.data,i=n.client,b=Object(g.a)(e.classes)
return l.a.createElement("ul",{className:b.menuLinkWrapper},r&&"loading",a&&a.message,c&&c.Allcategories.map(function(n){return l.a.createElement("li",{key:n.id,onMouseOver:function onMouseOver(){return i&&i.query({query:m.a,variables:{url:"/".concat(n.url)}})}},l.a.createElement(o.b,{onClick:e.handleClose,to:Object(u.a)("/".concat(n.url))},n.name))}))})}}])
