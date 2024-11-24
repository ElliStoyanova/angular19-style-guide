
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 16064, hash: 'f1abaa9bf8404326e4fc589b47cfbab760932c38c2cea77d90d5e1b9bea40f3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 8002, hash: '2f6da9c232120eeb8bb6b367d4c50ef6d39e225ee6e5eb1aeed24412ab9d87f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-CLDZOYCA.css', {size: 13063, hash: 'c5L1G/uVrSs', text: () => import('./assets-chunks/styles-CLDZOYCA_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
