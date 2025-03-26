const tableDataMapping = {
  101: "users.json",
  102: "profiles.json",
  103: "roles.json",
  104: "permissions.json",
  105: "audit_logs.json",
  201: "products.json",
  202: "categories.json",
  203: "brands.json",
  204: "product_reviews.json",
  205: "discounts.json",
  301: "orders.json",
  302: "order_items.json",
  303: "payments.json",
  304: "shipment_tracking.json",
  305: "returns.json",
  401: "stock.json",
  402: "suppliers.json",
  403: "warehouses.json",
  404: "purchase_orders.json",
  405: "inventory_transactions.json",
};

export const getTableData = async (tableId) => {
  if (!tableDataMapping[tableId])
    throw new Error(`No data file mapped for table ID: ${tableId}`);

  try {
    const response = await fetch(`/data/${tableDataMapping[tableId]}`);
    if (!response.ok)
      throw new Error(`Failed to fetch data for table ID: ${tableId}`);

    return await response.json();
  } catch (error) {
    console.error("Error fetching table data:", error);

    return [];
  }
};
