(function(i,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(i=typeof globalThis<"u"?globalThis:i||self,a(i["ash-js"]={}))})(this,function(i){"use strict";function a(e){return new Promise(o=>setTimeout(o,e))}console.log("ash-js loaded correctly!");let s="_Object";window[s]=(e="",o={},t=[""])=>{var n=document.createElement(e);for(key in o)n.setAttribute(key,o[key]);return(typeof t=="string"||t[0]===void 0)&&(t=[t]),t.forEach(r=>{typeof r=="string"?n.appendChild(document.createTextNode(r)):n.appendChild(r)}),n},window._css=(e={})=>{let o="";for(let t in e)o+=`
`+t+": "+e[t]+";";return o};for(let e of["html","head","body","title","h1","h2","h3","h4","h5","h6","p","b","i","em","mark","small","strong","sub","sup","br","wbr","abbr","address","bdi","bdo","pre","u","blockquote","cite","code","q","rt","samp","del","s","ins","ruby","dfn","rp","kbd","meter","progress","template","time","form","input","textarea","button","fieldset","legend","datalist","output","label","select","optgroup","option","iframe","img","map","area","canvas","figure","picture","svg","figcaption","audio","source","track","video","a","link","nav","ul","ol","li","dl","dt","dd","table","caption","th","tr","td","thead","tbody","tfoot","col","colgroup","style","div","span","header","footer","main","section","article","aside","details","dialog","summary","data","meta","base","script","noscript","embed","object","param"])window["_"+e]=new Function("attributes","children","return "+s+'("'+e+'", attributes, children)');let d={wait:{ms:a}};i.ash=d,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
