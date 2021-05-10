export function getPagination(page: string, size: string) {
  const limit = +size;
  const offset = +page * limit;
  return { limit, offset };
}

export function getPagingData(data: { rows: any[]; count: number }, page: string, limit: number) {
  const { count: totalItems, rows } = data;
  const currentPage = +page;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, data: rows, totalPages, currentPage };
}
