'use strict'

const only = require('./helper/only.js')

module.exports = function debugF(options = {}) {
	if (typeof options !== 'object') {
		options = {}
	}
	const disabled = options.disabled || false
	const mode = options.mode || 'response'

	return async function debug(ctx, nextMiddleware) {
		if (disabled) {
			return await nextMiddleware()
		}

		await nextMiddleware()
		const request = only(
			ctx.request,
			'headers url origin href method path query querystring search host hostname protocol secure ips ip subdomains body rawBody params'
		)

		const response = only(ctx.response, 'headers status message body')

		const message = {
			request,
			response,
		}

		if (mode === 'console') {
			console.log(message)
		} else {
			ctx.body = message
		}
	}
}
