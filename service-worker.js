"use strict";var precacheConfig=[["/wirapratamaa.github.io/index.html","047a1c6fd41e6e5fd3418eafd2975b50"],["/wirapratamaa.github.io/static/css/main.01ec0a31.css","2d994e5001db52cb21a55e2048d58797"],["/wirapratamaa.github.io/static/js/main.a389f74a.js","db0042be2b88a9f4c2e1e23c41bc5c54"],["/wirapratamaa.github.io/static/media/bac.20e5d772.png","20e5d7726101b41951cbbe1008015930"],["/wirapratamaa.github.io/static/media/background.bf989778.webp","bf989778565c49da91f9e0ef13dbdc5c"],["/wirapratamaa.github.io/static/media/background.e95d0563.webp","e95d05630894e5403e569fdaa0a2b61a"],["/wirapratamaa.github.io/static/media/bootstrap-4.ffded238.svg","ffded2381d25dd906406d6e07f91dea5"],["/wirapratamaa.github.io/static/media/css3.3707da3c.svg","3707da3c6a394c7ee2523273f8d98a25"],["/wirapratamaa.github.io/static/media/digital-ocean.add23917.svg","add239172d50d6ad18d2ac3cea6257a1"],["/wirapratamaa.github.io/static/media/git-icon.1190a19c.svg","1190a19ce3cc940741a60137a1e074cb"],["/wirapratamaa.github.io/static/media/github.567f006b.svg","567f006b9ca974f343db1c9c79920074"],["/wirapratamaa.github.io/static/media/heroku.b38ff61a.svg","b38ff61aa327fbdc24f7b1dad7d04d1a"],["/wirapratamaa.github.io/static/media/html-5.676e8188.svg","676e8188f003ed5d4882a0d0f378dad3"],["/wirapratamaa.github.io/static/media/javascript.2d2e31cc.svg","2d2e31cc63a96c7e6044f52d30fd21b9"],["/wirapratamaa.github.io/static/media/macOS.35e9242b.png","35e9242bbe316e91b44440efa63d3ad2"],["/wirapratamaa.github.io/static/media/material-ui-1.82291019.svg","82291019f34ab54a677c456a84127cc3"],["/wirapratamaa.github.io/static/media/mssql.54d7bddc.svg","54d7bddcd3019ec3c3b23db00160ccef"],["/wirapratamaa.github.io/static/media/php.44403f1e.svg","44403f1eece67c892a0c6a6791da5ad4"],["/wirapratamaa.github.io/static/media/profile.ae2ac4ff.JPG","ae2ac4ffa9f3f0c57cd2dcd273840c36"],["/wirapratamaa.github.io/static/media/react-bootstrap.83fe61b0.svg","83fe61b05935f090b671b08aeb77b63d"],["/wirapratamaa.github.io/static/media/react-router.02419671.svg","024196716802e272adb3cbefb81fd557"],["/wirapratamaa.github.io/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/wirapratamaa.github.io/static/media/slide3.77d6a39c.jpg","77d6a39c050439ec40213f7ea9ba5653"],["/wirapratamaa.github.io/static/media/styled-components.e79a42b9.svg","e79a42b9281a3b30f1302d5452f9884f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,i){var r=new URL(a);return i&&r.pathname.match(i)||(r.search+=(r.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],i=new URL(e,self.location),r=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),r]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return i.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),a=urlsToCacheKeys.has(t));var r="/wirapratamaa.github.io/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});