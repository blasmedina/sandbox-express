"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPagingData = exports.getPagination = void 0;
function getPagination(page, size) {
    const limit = +size;
    const offset = +page * limit;
    return { limit, offset };
}
exports.getPagination = getPagination;
function getPagingData(data, page, limit) {
    const { count: totalItems, rows } = data;
    const currentPage = +page;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, data: rows, totalPages, currentPage };
}
exports.getPagingData = getPagingData;
