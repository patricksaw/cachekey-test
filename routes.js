const { nextRoutes } = require('@layer0/next')
const { Router } = require('@layer0/core/router')

const { API, SSR, cacheResponse } = require('./cache')

module.exports = new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.next/static/service-worker.js')
  })
  .match('/', cacheResponse(SSR))
  .match('/api', cacheResponse(API))
  .match('/s/:categorySlug*', cacheResponse(SSR))
  .match('/api/s/:categorySlug*', cacheResponse(API))
  .match('/p/:productId', cacheResponse(SSR))
  .match('/api/p/:productId', cacheResponse(API))
  .use(nextRoutes)
  .fallback(({ proxy }) => proxy('legacy'))
