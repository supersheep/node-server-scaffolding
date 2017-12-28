class BizError extends Error {
  constructor (message) {
    super(message)
  }
}

global.BizError = BizError

module.exports = BizError