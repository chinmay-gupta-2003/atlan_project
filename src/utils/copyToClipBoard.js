import { toast } from "react-toastify";

export const copyToClipboard = (queryText, option) => {
  navigator.clipboard
    .writeText(queryText)
    .then(() => {
      toast.success(`${option || "Query"} copied to clipboard!`);
    })
    .catch(() => {
      toast.error("Failed to copy query.");
    });
};
