'use strict'


const only = require('./helper/only')


module.exports = function (options = {}) {
    if (typeof options !== 'object') options = {}
    const disabled = options.disabled || false

    return async function debug(ctx, next) {
        if (disabled) return await next()

        await next()
        const request = only(ctx.request, 'headers url origin href method path query querystring search host hostname protocol secure ips ip subdomains body rawBody params')

        const response = only(ctx.response, 'headers status message body')

        ctx.body = {
            request,
            response,
        }
    }
}
