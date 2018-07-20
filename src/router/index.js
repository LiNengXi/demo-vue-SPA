import Index from '@/page/index/index';
import About from '@/page/about/about';

const Setting = resolve => require(['@/page/setting/setting'], resolve);
const Messages = resolve => require(['@/page/setting/children/messages'], resolve);
// const Secret = resolve => require(['@/page/setting/children/secret'], resolve);
const Secret = r => require.ensure([], () => r(require('@/page/setting/children/secret')));

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/setting',
    component: Setting,
    children: [
      {
        path: '/setting',
        redirect: '/setting/messages'
      },
      {
        path: 'messages',
        component: Messages
      },
      {
        path: 'secret',
        component: Secret
      }
    ]
  }
];
