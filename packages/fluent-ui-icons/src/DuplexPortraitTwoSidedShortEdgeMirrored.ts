import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M128.109 0v2032l1663.9-381V0h-1663.9zM1664.02 128v1285l-216.986-261h88.994v-128H1340.04l-106.993-128h302.981V768H384.098v128h628.962l-109.993 128H384.098v128h409.975L684.08 1280H384.1v128h189.987l-317.98 371V128h1407.91zm-452.98 1192l-82.994-100-481.971 562-278.983 64 755.954-882 495.97 595-364.978 84 121.992-125-81.995-99-269.983 277-167.99 38zm-186.99-680h511.969V256H1024.05v384zm128-256h255.984v128H1152.05V384zm-767.956 0h511.969V256H384.094v128zm0 256h511.969V512H384.094v128z'
    }
  ]
]

export default createIcon(jsx, 'DuplexPortraitTwoSidedShortEdgeMirrored')
