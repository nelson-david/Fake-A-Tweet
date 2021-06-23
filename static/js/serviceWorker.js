console.log("GOT TO ME")

let CACHE_NAME = 'faketweetcache';
const urlsToCache = [
	'/',
	'/static/css/bootstrap.css',
	'/static/css/styles.css',
	'/static/js/bootstrap.js',
	'/static/js/html2canvas.js',
	'/static/js/scripts.js',
	'/static/js/jquery.min.js',
	'/static/img/demo_images/review_video.webm',
	'/static/img/favicon.ico',
	'/static/img/logo512.png',
	'/static/img/logo192.png',
	'/favicon.ico',
	'/create/tweet'
];

self.addEventListener('install', function(event){
	event.waitUntil(caches.open(CACHE_NAME).then(function(cache){
		console.log('Opened Cache');
		return cache.addAll(urlsToCache);
	}))
	self.skipWaiting();
})

self.addEventListener('fetch', function(event){
	event.respondWith(caches.match(event.request).then(function(response){
		if (response){
			return response;
		}
		return fetch(event.request);
	}))
})