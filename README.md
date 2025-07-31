# @mohsensami/print

## 📄 React Print Component

A simple and powerful React component for printing custom content with full customization capabilities.

## 🚀 Features

- ✅ **Simple Integration**: Easy to use React component
- ✅ **Customizable Styling**: Full control over print styles
- ✅ **Flexible Content**: Print any React content
- ✅ **RTL Support**: Built-in support for Persian/Arabic content
- ✅ **TypeScript**: Full TypeScript support
- ✅ **Lightweight**: Minimal bundle size
- ✅ **Customizable Button**: Hide button or customize its appearance

---

## 📦 Installation

```bash
npm install @mohsensami/print
```

```bash
yarn add @mohsensami/print
```

```bash
pnpm add @mohsensami/print
```

---

## 🎯 Quick Start

```tsx
import React from "react";
import Print from "@mohsensami/print";

function App() {
  return (
    <Print triggerLabel="Print Report">
      <div>
        <h1>Monthly Report</h1>
        <p>This content will be printed</p>
      </div>
    </Print>
  );
}
```

---

## 📚 API Documentation

### Props

| Prop            | Type                  | Default            | Description               |
| --------------- | --------------------- | ------------------ | ------------------------- |
| `children`      | `ReactNode`           | -                  | Content to be printed     |
| `triggerLabel`  | `string`              | `"Print"`          | Print button text         |
| `className`     | `string`              | `""`               | CSS class for component   |
| `documentTitle` | `string`              | `"Print Document"` | Document title for print  |
| `pageStyle`     | `string`              | `""`               | Custom CSS for print page |
| `buttonStyle`   | `React.CSSProperties` | `{}`               | Print button style        |
| `hideButton`    | `boolean`             | `false`            | Hide print button         |

---

## 💡 Usage Examples

### Example 1: Simple Print

```tsx
import Print from "@mohsensami/print";

<Print>
  <div>
    <h1>Document Title</h1>
    <p>Document content</p>
  </div>
</Print>;
```

### Example 2: Print with Custom Styling

```tsx
<Print
  triggerLabel="Print Report"
  documentTitle="Financial Report"
  pageStyle={`
    body { 
      font-family: 'Arial', sans-serif; 
      direction: ltr; 
      padding: 2rem; 
      line-height: 1.6;
    }
    h1 { 
      color: #2c3e50; 
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f8f9fa;
    }
  `}
>
  <div>
    <h1>Monthly Financial Report</h1>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Income</td>
          <td>$1,000,000</td>
          <td>2024/01/15</td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td>$500,000</td>
          <td>2024/01/20</td>
        </tr>
      </tbody>
    </table>
  </div>
</Print>
```

### Example 3: Print without Button

```tsx
<Print hideButton={true}>
  <div>Hidden content for printing</div>
</Print>;

// Using ref for programmatic printing
const printRef = useRef();

// Print via code
printRef.current?.printContent();
```

### Example 4: Custom Button

```tsx
<Print
  triggerLabel="🖨️ Print Invoice"
  buttonStyle={{
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  }}
>
  <div>
    <h1>Sales Invoice</h1>
    {/* Invoice content */}
  </div>
</Print>
```

---

## 🎨 Styling Tips

### Recommended Print Styles

```css
/* Base styles for printing */
body {
  font-family: "Arial", "Helvetica", sans-serif;
  direction: ltr;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 20px;
}

/* Headings */
h1,
h2,
h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: left;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
}

/* Lists */
ul,
ol {
  margin: 10px 0;
  padding-left: 20px;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
}

/* Page breaks */
@media print {
  .no-print {
    display: none !important;
  }

  body {
    margin: 0;
    padding: 15px;
  }
}
```

---

## 🔧 Development

### Install Dependencies

```bash
npm install
```

### Build Project

```bash
npm run build
```

### Run Example

```bash
cd example
npm install
npm run dev
```

---

## 📋 Requirements

- React 17.0.0 or higher
- React DOM 17.0.0 or higher

---

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- React Community
- TypeScript Team
- Rollup Team

---

## 📞 Support

For questions and issues:

- GitHub Issues: [Create Issue](https://github.com/your-repo/issues)
- Email: your-email@example.com

---

<div align="center">

**⭐ If this project was helpful, please give it a star! ⭐**

</div>
