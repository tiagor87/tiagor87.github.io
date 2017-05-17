'use strict';

this.addEventListener('install', (event) => {});

this.addEventListener('fetch', (event) => {
    if (new URL(event.request.url).href === 'https://tiagor87.github.io/teste') {
        event.respondWith(new Response('Teste'));
    }
});