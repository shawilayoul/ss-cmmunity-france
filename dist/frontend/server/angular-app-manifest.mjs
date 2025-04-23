
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/events"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/members"
  },
  {
    "renderMode": 2,
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/admin/eventList"
  },
  {
    "renderMode": 2,
    "route": "/admin/members"
  },
  {
    "renderMode": 2,
    "route": "/admin/gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24817, hash: '01f17beaeea7616b33c3cea3eb43b026bc1ad18a3a326751bfbcbf6e5e84f144', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17146, hash: '880fe7edd5e353cc90fac7ab8f48f8578afaeb43b2ac3a0ac8a8ddadf78ed3bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 54786, hash: 'b7e85645bb6550f60a5003014c5076ff532c65cab88b96945ed76425f7372fa2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'members/index.html': {size: 121064, hash: '7bf758830a02ef41d5ab87d2155964351aaf1a4680604b0e2794359d2a8fb551', text: () => import('./assets-chunks/members_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81696, hash: 'e17f954ad12994e412a25dd0b7c19678c318fe6be639a527cc88a355e3664fb9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 108418, hash: '1e39848e6431f5aa66e6d2be789733da3eeb7e5a0e2f0de02e4e539f4a81368b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 106634, hash: 'a22a1856f8bb4d19113076ca05fc0ddb0d3e4da200ff3da1da4729565bc43f84', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 49035, hash: 'd119649322bc99d7a998d92a9cdf81f22289cb0c0ced029c85245d438252c65f', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 55881, hash: 'f75c1118b2895ad6a8be282541f8443920043f4c041910b9602b26c9f0706a20', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 55891, hash: '8f7fb2e702bee9a710794a1a8b961219cf8698078928c8fe5a3de45c3bdcdabe', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'admin/eventList/index.html': {size: 40994, hash: 'a3f187cd3aab016605bc4fc6dcde43e325b42011809ebec81eff8b51ad577054', text: () => import('./assets-chunks/admin_eventList_index_html.mjs').then(m => m.default)},
    'admin/members/index.html': {size: 119343, hash: '77704859b2cb514482e3a15d825c44247aea8003e8168b19559e3f1a30d54209', text: () => import('./assets-chunks/admin_members_index_html.mjs').then(m => m.default)},
    'admin/gallery/index.html': {size: 131036, hash: 'f6076b93d95db10c9553717f4fb71475405c6c843f58e43021f495e1cd7614e9', text: () => import('./assets-chunks/admin_gallery_index_html.mjs').then(m => m.default)},
    'styles-5A2HGV5D.css': {size: 83816, hash: 'xSt2eIV2FeI', text: () => import('./assets-chunks/styles-5A2HGV5D_css.mjs').then(m => m.default)}
  },
};
