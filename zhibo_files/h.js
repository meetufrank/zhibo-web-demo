(function(){var h={},mt={},c={id:"dee44bac21e702aae31eae70a9e28090",dm:["www.gaosheng007.com/room/1"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,comm:0,apps:''};var p=!0,q=null,r=!1;mt.h={};mt.h.za=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Ca=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,e){var b;e.H&&(b=new Date,b.setTime(b.getTime()+e.H));document.cookie=a+"="+d+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(b?"; expires="+b.toGMTString():"")+(e.Pa?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.p={};mt.p.Ja=function(a){return document.getElementById(a)};mt.p.la=function(a){var d;for(d="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return q};
(mt.p.Aa=function(){function a(){if(!a.z){a.z=p;for(var d=0,e=b.length;d<e;d++)b[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var e=r,b=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,r);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!e)if(e=p,"complete"===document.readyState)a.z=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
k,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var b=r;try{b=window.frameElement==q}catch(n){}document.documentElement.doScroll&&b&&d()}})();return function(d){a.z?d():b.push(d)}}()).z=r;mt.event={};mt.event.c=function(a,d,e){a.attachEvent?a.attachEvent("on"+d,function(b){e.call(a,b)}):a.addEventListener&&a.addEventListener(d,e,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.k={};mt.k.parse=function(){return(new Function('return (" + source + ")'))()};
mt.k.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return a(b);case "boolean":return String(b);
default:if(b===q)return"null";if(b instanceof Array){var e=["["],l=b.length,n,f,g;for(f=0;f<l;f++)switch(g=b[f],typeof g){case "undefined":case "function":case "unknown":break;default:n&&e.push(","),e.push(mt.k.stringify(g)),n=1}e.push("]");return e.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+d(b.getMonth()+1)+"-"+d(b.getDate())+"T"+d(b.getHours())+":"+d(b.getMinutes())+":"+d(b.getSeconds())+'"';n=["{"];f=mt.k.stringify;for(l in b)if(Object.prototype.hasOwnProperty.call(b,l))switch(g=
b[l],typeof g){case "undefined":case "unknown":case "function":break;default:e&&n.push(","),e=1,n.push(f(l)+":"+f(g))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.e=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Ma=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Oa=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.F=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,d,e){var b=new Date;b.setTime(b.getTime()+e||31536E6);try{window.localStorage?(d=b.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.F()&&(mt.localStorage.f.expires=b.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,d),mt.localStorage.f.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),e=a.substring(0,d)-0;if(e&&e>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.F())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(b){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.F())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(e){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.V={};mt.V.log=function(a,d){var e=new Image,b="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[b]=e;e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=q;e=window[b]=q;d&&d(a)};e.src=a};mt.D={};
mt.D.ra=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.D.fa=function(a,d,e,b,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+b+'" src="'+d+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.j=function(a,d){var e=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return e?e[3]:q};mt.url.La=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.oa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.Q=function(a){return(a=mt.url.oa(a))?a.replace(/:\d+$/,""):a};mt.url.Ka=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.m={xa:"http://tongji.baidu.com/hm-web/welcome/ico",M:"log.hm.baidu.com/hm.gif",Z:"baidu.com",ua:"hmmd",va:"hmpl",ta:"hmkw",sa:"hmci",wa:"hmsr",o:0,i:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Na:0,da:6E5,ea:10,O:1024,ca:1,A:2147483647,W:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={l:{},c:function(a,e){this.l[a]=this.l[a]||[];this.l[a].push(e)},s:function(a,e){this.l[a]=this.l[a]||[];for(var b=this.l[a].length,k=0;k<b;k++)this.l[a][k](e)}};return h.q=a})();
(function(){function a(a,b){var k=document.createElement("script");k.charset="utf-8";d.e(b,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=q,b()}:k.onload=function(){b()});k.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var d=mt.lang;return h.load=a})();
(function(){var a=h.m,d=mt.D,e={init:function(){if(""!==c.icon){var b;b=c.icon.split("|");var e=a.xa+"?s="+c.id,l=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":b=d.fa("HolmesIcon"+a.i,l,b[2],b[3],"s="+e);break;case "gif":b='<a href="'+e+'" target="_blank"><img border="0" src="'+l+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:b='<a href="'+e+'" target="_blank">'+b[0]+"</a>"}document.write(b)}}};h.q.c("pv-b",e.init);return e})();
(function(){var a=mt.p,d=mt.event,e=mt.h,b=h.m,k=[],l={X:function(){c.ctrk&&(d.c(document,"mouseup",l.ba()),d.c(window,"unload",function(){l.B()}),setInterval(function(){l.B()},b.da))},ba:function(){return function(a){a=l.ma(a);if(""!==a){var d=(b.protocol+"//"+b.M+"?"+h.b.U().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;d+(b.A+"").length>b.O||(d+encodeURIComponent(k.join(",")+(k.length?",":"")).length+(b.A+"").length>b.O&&l.B(),k.push(a),(k.length>=b.ea||/t:a/.test(a))&&l.B())}}},
ma:function(d){if(0===b.ca){var f=d.target||d.srcElement,g=f.tagName.toLowerCase();if("embed"==g||"object"==g)return""}e.za?(f=Math.max(document.documentElement.scrollTop,document.body.scrollTop),g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),g=d.clientX+g,f=d.clientY+f):(g=d.pageX,f=d.pageY);var m=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:g-=m/2;break;case 2:g-=m}g="{x:"+g+",y:"+f+",";f=d.target||d.srcElement;
return g=(d="a"==f.tagName.toLowerCase()?f:a.la(f))?g+("t:a,u:"+encodeURIComponent(d.href)+"}"):g+"t:b}"},B:function(){0!==k.length&&(h.b.a.et=2,h.b.a.ep="["+k.join(",")+"]",h.b.g(),k=[])}};h.q.c("pv-b",l.X);return l})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.G.pa()+","+h.G.na();h.b.g()}}function d(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);f="undefined"==typeof a?p:a;if((!n||!g)&&f&&m)u=p,t=+new Date;else if(n&&g&&(!f||!m))u=r,s+=+new Date-t;n=f;g=m;x=setTimeout(d,100)}function e(a){var g=document,t="";if(a in g)t=a;else for(var b=["webkit","ms","moz","o"],s=0;s<b.length;s++){var d=b[s]+a.charAt(0).toUpperCase()+a.slice(1);if(d in g){t=
d;break}}return t}function b(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?p:r,d()}var k=mt.event,l=h.q,n=p,f=p,g=p,m=p,v=+new Date,t=v,s=0,u=p,w=e("visibilityState"),y=e("hidden"),x;d();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,a,d);k.c(window,"pageshow",d);k.c(window,"pagehide",d);"object"==typeof document.onfocusin?(k.c(document,"focusin",b),k.c(document,"focusout",b)):(k.c(window,"focus",b),
k.c(window,"blur",b))})();h.G={pa:function(){return+new Date-v},na:function(){return u?+new Date-t+s:s}};l.c("pv-b",function(){k.c(window,"unload",a())});return h.G})();
(function(){var a=mt.lang,d=h.m,e=h.load,b={ya:function(b){if((void 0===window._dxt||a.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.I();e([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),b)}},Ha:function(b){if(a.e(b,"String")||a.e(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.ga=b})();
(function(){function a(g){for(var b in g)if({}.hasOwnProperty.call(g,b)){var d=g[b];e.e(d,"Object")||e.e(d,"Array")?a(d):g[b]=String(d)}}function d(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var e=mt.lang,b=mt.k,k=h.m,l=h.q,n=h.ga,f={R:q,r:[],C:0,S:r,init:function(){f.d=0;f.R={push:function(){f.L.apply(f,arguments)}};l.c("pv-b",function(){f.ha();f.ia()});l.c("pv-d",f.ka);l.c("stag-b",function(){h.b.a.api=f.d||f.C?f.d+"_"+f.C:""});l.c("stag-d",function(){h.b.a.api=
0;f.d=0;f.C=0})},ha:function(){var a=window._hmt;if(a&&a.length)for(var b=0;b<a.length;b++){var d=a[b];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(f.d|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))f.d|=2,window._bdhm_autoPageview=d}}},ia:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,d=a.length;b<d;b++)e.e(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?f.L(a[b]):f.r.push(a[b]);window._hmt=f.R}},ka:function(){if(0<f.r.length)for(var a=0,b=f.r.length;a<b;a++)f.L(f.r[a]);f.r=q},L:function(a){if(e.e(a,"Array")){var b=a[0];if(f.hasOwnProperty(b)&&e.e(f[b],"Function"))f[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){f.d|=4;h.b.a.et=0;h.b.a.ep="";h.b.J?(h.b.a.nv=0,h.b.a.st=4):h.b.J=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=k.protocol+"//"+document.location.host+
a[1];f.S||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.d|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d(a[1])+"*"+d(a[2])+(a[3]?"*"+d(a[3]):"")+(a[4]?"*"+d(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){f.C++;for(var t=(h.b.a.cv||"*").split("!"),s=t.length;s<b-1;s++)t.push("*");t[b-1]=e+"*"+d(a[2])+"*"+d(a[3]);h.b.a.cv=t.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ba("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?k.protocol+"//"+window.location.host+a[1]:a[1],f.S=p)},_trackOrder:function(d){d=d[1];e.e(d,"Object")&&(a(d),f.d|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=b.stringify(d),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.d|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(d){d=
d[1];e.e(d,"Object")&&(a(d),d=b.stringify(d),512>=encodeURIComponent(d).length&&(f.d|=64,h.b.a.rt=d))},_trackRTEvent:function(d){d=d[1];if(e.e(d,"Object")){a(d);d=encodeURIComponent(b.stringify(d));var m=function(a){var b=h.b.a.rt;f.d|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},l=d.length;if(900>=l)m.call(this,d);else for(var l=Math.ceil(l/900),t="block|"+Math.round(Math.random()*k.A).toString(16)+"|"+l+"|",s=[],u=0;u<l;u++)s.push(u),s.push(d.substring(900*u,900*u+900)),m.call(this,t+s.join("|")),
s=[]}},_setUserId:function(a){a=a[1];n.ya();n.Ha(a)}};f.init();h.$=f;return h.$})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.J=r,this.init())}var d=mt.url,e=mt.V,b=mt.D,k=mt.lang,l=mt.cookie,n=mt.h,f=mt.localStorage,g=mt.sessionStorage,m=h.m,v=h.q;a.prototype={K:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},T:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},w:function(a){for(var b=0;b<c.dm.length;b++)if(-1<
c.dm[b].indexOf("/")){if(this.T(a,c.dm[b]))return p}else{var e=d.Q(a);if(e&&this.K(e,c.dm[b]))return p}return r},I:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.K(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},P:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.T(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},qa:function(){if(!document.referrer)return m.i-m.o>c.vdur?1:4;var a=
r;this.w(document.referrer)&&this.w(document.location.href)?a=p:(a=d.Q(document.referrer),a=this.K(a||"",document.location.hostname));return a?m.i-m.o>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||g.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.I(),path:this.P(),H:d}),d?f.set(a,b,d):g.set(a,b)}catch(e){}},Ba:function(a){try{l.set(a,"",{domain:this.I(),path:this.P(),H:-1}),g.remove(a),f.remove(a)}catch(b){}},Fa:function(){var a,b,d,e,f;m.o=this.getData("Hm_lpvt_"+
c.id)||0;13==m.o.length&&(m.o=Math.round(m.o/1E3));b=this.qa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.i-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.i);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.i,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.i);d=m.i==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.w(document.location.href)&&
(""===document.referrer||this.w(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},U:function(){for(var a=[],b=0,d=m.W.length;b<d;b++){var e=m.W[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Ga:function(){this.Fa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Ca;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=b.ra();this.a.v="1.0.98";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=d.j(a,m.ua)||"";this.a.cp=d.j(a,m.va)||"";this.a.cw=d.j(a,m.ta)||"";this.a.ci=d.j(a,m.sa)||"";this.a.cf=d.j(a,m.wa)||""},init:function(){try{this.Ga(),0===this.a.nv?this.Ea():this.N(".*"),h.b=this,this.aa(),
v.s("pv-b"),this.Da()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(m.protocol+"//"+m.M+"?"+b.join("&"))}},Da:function(){function a(){v.s("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.J=p,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.A);v.s("stag-b");var d=m.protocol+"//"+
m.M+"?"+b.U();v.s("stag-d");b.Y(d);e.log(d,function(d){b.N(d);k.e(a,"Function")&&a.call(b)})},aa:function(){var a=document.location.hash.substring(1),b=RegExp(c.id),e=-1<document.referrer.indexOf(m.Z)?p:r,f=d.j(a,"jn"),k=/^heatlink$|^select$/.test(f);a&&(b.test(a)&&e&&k)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},Y:function(a){var b=g.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");g.set("Hm_unsent_"+c.id,b)},N:function(a){var b=g.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?g.set("Hm_unsent_"+c.id,b):g.remove("Hm_unsent_"+c.id))},Ea:function(){var a=this,b=g.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){e.log(m.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.N(b)})},f=0,k=b.length;f<k;f++)d(b[f])}};return new a})();
(function(){var a=mt.p,d=mt.event,e=mt.url,b=mt.k;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var k=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.Aa(function(){n=+new Date});var f=function(){var a,d,f;f=l("navigation");d=l("request");f={netAll:d.start-f.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-f.start};a=document.referrer;var g=q;d=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])g=e.j(a,"qid"),d=e.j(a,"click_t");a=g;f.qid=a!=q?a:"";d!=q?(f.bdDom=n?n-d:0,f.bdRun=k-d,f.bdDef=l("navigation").start-d):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=b.stringify(f);h.b.g()};d.c(window,"load",function(){setTimeout(f,500)})}}catch(g){}})();
(function(){var a=h.m,d={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ia="0";document.body.appendChild(b)}}catch(d){}}},e=navigator.userAgent.toLowerCase();-1<e.indexOf("android")&&-1===e.indexOf("micromessenger")&&d.init()})();
(function(){var a=mt.lang,d=mt.event,e=mt.k;if(c.comm&&"undefined"!==typeof h.b){var b=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},k=/.*\/swt(\/)?([\?|#].*)?$/i,l={click:function(){for(var a=[],d=b(document.getElementsByTagName("a")),d=[].concat.apply(d,b(document.getElementsByTagName("area"))),d=[].concat.apply(d,b(document.getElementsByTagName("img"))),e=/openZoosUrl\(|swt/,f=/\/LR\/Chatpre\.aspx/,g=0,l=d.length;g<l;g++){var m=d[g],n=m.getAttribute("onclick"),
m=m.getAttribute("href");(e.test(n)||f.test(m)||k.test(m))&&a.push(d[g])}return a}},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},f=function(b,d){var f={n:"swt",t:"clk"};f.v=b;if(d){var g=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):q;k.test(g)?(f.sn="mediate",f.snv=g):a.e(l,"String")&&(-1===l.indexOf("openZoosUrl")&&-1!==l.indexOf("swt"))&&(g=d.getAttribute("id")||"",f.sn="wrap",f.snv=l,f.id=g)}h.b.a.et=86;h.b.a.ep=e.stringify(f);
h.b.g();for(f=+new Date;500>=+new Date-f;);},g,m="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),v=function(b,d){if(g===d)return f(m+b,d),r;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var e=0,k=d.length;e<k;e++)if(g===d[e])return f(m+b+"/"+(e+1),d[e]),r};d.c(document,"click",function(b){b=b||window.event;g=b.target||b.srcElement;var d={};for(n(l,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});g&&g!==document&&n(d,v)!==r;)g=g.parentNode})}})();
(function(){var a=mt.event,d=mt.k;if(c.comm&&"undefined"!==typeof h.b){var e=+new Date,b={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=d.stringify(b);h.b.g()};a.c(document,"click",function(){b.clk++});a.c(document,"keyup",function(){b.kb=1});a.c(window,"scroll",function(){b.sb++});a.c(window,"unload",function(){b.t=+new Date-e;k()});a.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
