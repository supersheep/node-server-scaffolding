const db = require('../db')
const bookshelf = require('bookshelf')(db)
bookshelf.plugin('pagination')
bookshelf.plugin('virtuals')

class Base extends bookshelf.Model {
  constructor (data) {
    super(data)
    this.on('saving', () => {
      return this.set('updateTime', new Date())
    })
    this.on('creating', () => {
      return this.set('addTime', new Date())
    })
  }
}
module.exports = Base