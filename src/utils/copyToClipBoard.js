import { toast } from "react-toastify";

export const copyToClipboard = (queryText) => {
  navigator.clipboard
    .writeText(queryText)
    .then(() => {
      toast.success("Query copied to clipboard!");
    })
    .catch(() => {
      toast.error("Failed to copy query.");
    });
};
