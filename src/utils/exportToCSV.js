export const exportToCSV = async (setIsLoading) => {
  try {
    setIsLoading(true);

    const response = await fetch("/tableData/purchase_orders.json");
    const jsonData = await response.json();

    const headers = ["id", "supplier_id", "total_amount", "status"];
    const csvRows = [];

    csvRows.push(headers.join(","));

    jsonData.forEach((row) => {
      const values = headers.map((header) => row[header]);

      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "csv_data.csv";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error exporting CSV:", error);
  } finally {
    setIsLoading(false);
  }
};
