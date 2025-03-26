export const sortData = (data, sortConfig) => {
  if (!sortConfig || !sortConfig.key) return data;

  return [...data].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return sortConfig.direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
};
