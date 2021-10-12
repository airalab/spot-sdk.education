import '~/assets/style/reset.css'
import '~/assets/style/base.css'

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LayoutInside from '~/layouts/Inside.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('LayoutInside', LayoutInside)

  if(isClient){
    head.script.push({
      src: 'https://www.googletagmanager.com/gtag/js?id='+ process.env.GRIDSOME_GOOGLE_ANALYTICS_ID,
      async: true
    })
    head.script.push({
      innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '" + process.env.GRIDSOME_GOOGLE_ANALYTICS_ID + "');"
   })
  }
}
