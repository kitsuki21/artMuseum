export const getPageCount = (totalCount: number, limit: number): any => {
  return Math.ceil(totalCount / limit);
};
