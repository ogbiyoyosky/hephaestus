export const asyncWrap = promise => promise.then(result => [null, result]).catch(err => [err])