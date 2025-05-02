import { useRef } from "react";

export const usePrint = () => {
  const printRef = useRef<HTMLDivElement | null>(null);

  const triggerPrint = () => {
    if (printRef.current) {
      const printContent = printRef.current.innerHTML;
      const originalContent = document.body.innerHTML;

      // Create a temporary div to hold the print content
      const printDiv = document.createElement("div");
      printDiv.innerHTML = printContent;

      // Replace the body content with our print content
      document.body.innerHTML = printDiv.innerHTML;

      // Add print-specific styles
      const style = document.createElement("style");
      style.innerHTML = `
        @media print {
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { color: #333; }
        }
      `;
      document.head.appendChild(style);

      // Trigger print
      window.print();

      // Restore original content
      document.body.innerHTML = originalContent;
    }
  };

  return { printRef, triggerPrint };
};
