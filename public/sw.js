if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const o=e=>n(e,c),r={module:{uri:c},exports:i,require:o};s[c]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),i)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2c796e83-0fee13a8cdf60dad.js",revision:"0fee13a8cdf60dad"},{url:"/_next/static/chunks/40-2e96381ff45385ea.js",revision:"2e96381ff45385ea"},{url:"/_next/static/chunks/43-ba663f77bcee779d.js",revision:"ba663f77bcee779d"},{url:"/_next/static/chunks/664-41844e7ff48658f9.js",revision:"41844e7ff48658f9"},{url:"/_next/static/chunks/7da832b5-44c99f19444495ef.js",revision:"44c99f19444495ef"},{url:"/_next/static/chunks/framework-1f10003e17636e37.js",revision:"1f10003e17636e37"},{url:"/_next/static/chunks/main-e380ed469c5a0a07.js",revision:"e380ed469c5a0a07"},{url:"/_next/static/chunks/pages/_app-988977c507b9a0df.js",revision:"988977c507b9a0df"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/components/ActionButtons-34059be2da0c6c4b.js",revision:"34059be2da0c6c4b"},{url:"/_next/static/chunks/pages/components/BackButton-46574f88e4a31574.js",revision:"46574f88e4a31574"},{url:"/_next/static/chunks/pages/components/Header-6caac98605f90e3d.js",revision:"6caac98605f90e3d"},{url:"/_next/static/chunks/pages/components/InputButton-925d02f9d5879da4.js",revision:"925d02f9d5879da4"},{url:"/_next/static/chunks/pages/components/Map-83eaa57a14d1c9ce.js",revision:"83eaa57a14d1c9ce"},{url:"/_next/static/chunks/pages/components/NavigationBar-9da0010b2e270b0b.js",revision:"9da0010b2e270b0b"},{url:"/_next/static/chunks/pages/confirm-2edb86f89a1338e5.js",revision:"2edb86f89a1338e5"},{url:"/_next/static/chunks/pages/index-0c92ca7cecd91e77.js",revision:"0c92ca7cecd91e77"},{url:"/_next/static/chunks/pages/login-3deaaadd0c9d8303.js",revision:"3deaaadd0c9d8303"},{url:"/_next/static/chunks/pages/profile-ea2173577644ee80.js",revision:"ea2173577644ee80"},{url:"/_next/static/chunks/pages/search-018eecf3178a00d4.js",revision:"018eecf3178a00d4"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/9348c8cc17849f43.css",revision:"9348c8cc17849f43"},{url:"/_next/static/sKbcVpeqDKEbo4utny66g/_buildManifest.js",revision:"71954fe6ff99ee80c79d5eead22ccf46"},{url:"/_next/static/sKbcVpeqDKEbo4utny66g/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/sKbcVpeqDKEbo4utny66g/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
