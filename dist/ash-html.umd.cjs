(function(t){typeof define=="function"&&define.amd?define(t):t()})(function(){"use strict";let t="_Object";window[t]=(o="",e={},i=[""])=>{var n=document.createElement(o);e.onclick===void 0&&e.id!=null&&(e.onclick=e.id+"();",window[e.id]===void 0&&(window[e.id]=new Function("args","")));for(key in e)n.setAttribute(key,e[key]);return(typeof i=="string"||i[0]===void 0)&&(i=[i]),i.forEach(d=>{typeof d=="string"?n.appendChild(document.createTextNode(d)):n.appendChild(d)}),n};for(HTMLTag of["html","head","body","title","h1","h2","h3","h4","h5","h6","p","b","i","em","mark","small","strong","sub","sup","br","wbr","abbr","address","bdi","bdo","pre","u","blockquote","cite","code","q","rt","samp","del","s","ins","ruby","dfn","rp","kbd","meter","progress","template","time","form","input","textarea","button","fieldset","legend","datalist","output","label","select","optgroup","option","iframe","img","map","area","canvas","figure","picture","svg","figcaption","audio","source","track","video","a","link","nav","ul","ol","li","dl","dt","dd","table","caption","th","tr","td","thead","tbody","tfoot","col","colgroup","style","div","span","header","footer","main","section","article","aside","details","dialog","summary","data","meta","base","script","noscript","embed","object","param"])window["_"+HTMLTag]=new Function("attributes","children","return "+t+'("'+HTMLTag+'", attributes, children)')});