// App.tsx
import React from "react";
import Print from "@mohsensami/Print";

const App: React.FC = () => {
  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h2>پیش‌نمایش چاپ</h2>

      <Print
        triggerLabel="چاپ گزارش"
        documentTitle="گزارش کاری"
        pageStyle={`
          body { font-family: sans-serif; direction: rtl; padding: 2rem; }
          h1 { color: darkblue; }
        `}
      >
        <div>
          <h1>عنوان گزارش</h1>
          <p>این یک متن نمونه برای چاپ است.</p>
          <ul>
            <li>آیتم اول</li>
            <li>آیتم دوم</li>
          </ul>
        </div>
      </Print>
    </div>
  );
};

export default App;
