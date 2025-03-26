import { tableDataMapping } from "constants/mappings";

export const getTableData = async (tableId) => {
  if (!tableDataMapping[tableId])
    throw new Error(`No data file mapped for table ID: ${tableId}`);

  try {
    const response = await fetch(`/tableData/${tableDataMapping[tableId]}`);
    if (!response.ok)
      throw new Error(`Failed to fetch data for table ID: ${tableId}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching table data:", error);

    return [];
  }
};
