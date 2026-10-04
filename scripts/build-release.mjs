import { cp, rm, access } from 'node:fs/promises';
const release = new URL('../site-release/', import.meta.url);
const output = new URL('../dist/', import.meta.url);
await access(new URL('index.html', release));
await rm(output, { recursive: true, force: true });
await cp(release, output, { recursive: true });
console.log('Prepared approved ZIP release in dist/');
