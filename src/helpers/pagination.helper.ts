export function getPagination(page: string, size: string) {
  const limit = +size;
  const offset = +page * limit;
  return { limit, offset };
}

export function getPagingData(rows: any[], count: number, page: string, limit: number) {
  const currentPage = +page;
  const totalPages = Math.ceil(count / limit);
  return { totalItems: count, data: rows, totalPages, currentPage };
}
