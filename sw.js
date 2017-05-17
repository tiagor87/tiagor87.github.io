'use strict';

this.addEventListener('install', (event) => {});

this.addEventListener('fetch', (event) => {
    if (new URL(event.url) === 'google.com') {
        event.respondWith(new Response('Teste'));
    }
});