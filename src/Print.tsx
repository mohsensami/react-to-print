// components/Print.tsx
import React, { ReactNode } from "react";

type PrintProps = {
  children: ReactNode; // محتوایی که باید چاپ بشه
  triggerLabel?: string; // متن دکمه چاپ
  className?: string; // کلاس برای استایل کلی
  documentTitle?: string; // عنوان سند
  pageStyle?: string; // CSS دلخواه
  buttonStyle?: React.CSSProperties; // استایل دکمه
  hideButton?: boolean; // آیا دکمه چاپ مخفی بشه؟
};

const Print: React.FC<PrintProps> = ({
  children,
  triggerLabel = "چاپ",
  className = "",
  documentTitle = "سند چاپی",
  pageStyle = "",
  buttonStyle = {},
  hideButton = false,
}) => {
  const printContent = () => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${documentTitle}</title>
          <style>
            ${pageStyle}
          </style>
        </head>
        <body>
          <div id="print-area">${
            document.getElementById("print-container")?.innerHTML || ""
          }</div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    // Delay print to allow rendering
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <div className={className}>
      {!hideButton && (
        <button onClick={printContent} style={buttonStyle}>
          {triggerLabel}
        </button>
      )}
      <div id="print-container" style={{ display: "none" }}>
        {children}
      </div>
    </div>
  );
};

export default Print;
