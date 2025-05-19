import { useRef } from "react";

interface PrintStyles {
  beforePrint?: React.CSSProperties;
  afterPrint?: React.CSSProperties;
}

export const usePrint = (styles?: PrintStyles) => {
  const printRef = useRef<HTMLDivElement | null>(null);

  const triggerPrint = () => {
    if (printRef.current) {
      // Create a new window for printing
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;

      // Get the content to print
      const printContent = printRef.current.innerHTML;

      // Convert style objects to CSS strings
      const beforePrintStyles = styles?.beforePrint
        ? Object.entries(styles.beforePrint)
            .map(
              ([key, value]) =>
                `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}`
            )
            .join(";")
        : "";

      const afterPrintStyles = styles?.afterPrint
        ? Object.entries(styles.afterPrint)
            .map(
              ([key, value]) =>
                `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}`
            )
            .join(";")
        : "";

      // Write the content to the new window
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                margin: 20px;
                ${beforePrintStyles}
              }
              @media print {
                body { 
                  ${afterPrintStyles}
                }
                @page {
                  size: auto;
                  margin: 20mm;
                }
              }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `);

      // Close the document to ensure all content is loaded
      printWindow.document.close();

      // Wait for the content to load before printing
      printWindow.onload = () => {
        printWindow.print();
        // Close the window after printing
        printWindow.close();
      };
    }
  };

  return { printRef, triggerPrint };
};
