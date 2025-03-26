export const setPaginationData = (data, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const filteredData = data.slice(startIndex, endIndex);

  return filteredData;
};

export const totalPages = (data, limit) => {
  return Math.ceil(data.length / limit);
};
