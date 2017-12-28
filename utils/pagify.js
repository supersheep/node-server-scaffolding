const pagify = async (q, page, pageSize, withRelated) => {
  const data = await q.fetchPage({
    pageSize, // Defaults to 10 if not specified
    page, // Defaults to 1 if not specified
    withRelated // Passed to Model#fetchAll
  })
  page = +page
  const total = await q.count()

  return {
    total,
    page,
    pageSize,
    data
  }
}

module.exports = pagify