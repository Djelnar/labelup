export const getUsers = async ({ list, page = 0 }) => {
  const raw = await fetch(`${list}Users.json`)
  const data = await raw.json()
  const accounts = data[`${list}Users`]
  const totalCount = accounts.length
  let onNextPage = totalCount - ((page + 1) * 3)
  if (onNextPage >= 3) {
    onNextPage = 3
  }
  if (onNextPage <= 0) {
    onNextPage = null
  }
  return {
    accountsList: {
      accounts: accounts.slice(page*3, page*3 + 3),
      pagination: {
        nextPage: onNextPage === 0 ? null : page + 1,
        onNextPage,
        totalCount
      },
      list
    }
  }
}