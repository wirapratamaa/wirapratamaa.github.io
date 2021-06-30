"use strict";var precacheConfig=[["/index.html","140f01dfdafbf561619c97e5f2878b6b"],["/static/css/main.eed3b739.css","e06d4bd09053430f82a4950f61b11c03"],["/static/js/main.85ca1ee6.js","84345e957d8ec236392312071cba8471"],["/static/media/bac.20e5d772.png","20e5d7726101b41951cbbe1008015930"],["/static/media/background.bf989778.webp","bf989778565c49da91f9e0ef13dbdc5c"],["/static/media/background.e95d0563.webp","e95d05630894e5403e569fdaa0a2b61a"],["/static/media/bootstrap-4.ffded238.svg","ffded2381d25dd906406d6e07f91dea5"],["/static/media/css3.3707da3c.svg","3707da3c6a394c7ee2523273f8d98a25"],["/static/media/digital-ocean.add23917.svg","add239172d50d6ad18d2ac3cea6257a1"],["/static/media/git-icon.1190a19c.svg","1190a19ce3cc940741a60137a1e074cb"],["/static/media/github.567f006b.svg","567f006b9ca974f343db1c9c79920074"],["/static/media/heroku.b38ff61a.svg","b38ff61aa327fbdc24f7b1dad7d04d1a"],["/static/media/html-5.676e8188.svg","676e8188f003ed5d4882a0d0f378dad3"],["/static/media/javascript.2d2e31cc.svg","2d2e31cc63a96c7e6044f52d30fd21b9"],["/static/media/macOS.35e9242b.png","35e9242bbe316e91b44440efa63d3ad2"],["/static/media/material-ui-1.82291019.svg","82291019f34ab54a677c456a84127cc3"],["/static/media/mssql.54d7bddc.svg","54d7bddcd3019ec3c3b23db00160ccef"],["/static/media/php.44403f1e.svg","44403f1eece67c892a0c6a6791da5ad4"],["/static/media/profile.ae2ac4ff.JPG","ae2ac4ffa9f3f0c57cd2dcd273840c36"],["/static/media/react-bootstrap.83fe61b0.svg","83fe61b05935f090b671b08aeb77b63d"],["/static/media/react-router.02419671.svg","024196716802e272adb3cbefb81fd557"],["/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/static/media/slide3.77d6a39c.jpg","77d6a39c050439ec40213f7ea9ba5653"],["/static/media/styled-components.e79a42b9.svg","e79a42b9281a3b30f1302d5452f9884f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});