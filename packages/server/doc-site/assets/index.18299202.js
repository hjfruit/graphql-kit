import { R as e } from './vendor.5aa942b8.js'
var a = { noPage: '_noPage_wzx7z_1', tips: '_tips_wzx7z_8' }
const s = () =>
  e.createElement(
    'div',
    { className: a.noPage },
    e.createElement('img', {
      src: '/assets/404@2x.ce810f0f.png',
      alt: '',
      className: a.img404,
    }),
    e.createElement(
      'p',
      { className: a.tips },
      '哎呀，出错了！你访问的页面不存在…',
    ),
  )
export { s as default }