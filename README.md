# React Print Hook

A simple and reliable React hook for printing specific content from your React application.

## Features

| Feature              | Description                                        |
| -------------------- | -------------------------------------------------- |
| 🖨️ Easy to Use       | Simple hook implementation with minimal setup      |
| 🎯 Targeted Printing | Print only specific parts of your application      |
| 🎨 Customizable      | Add custom styles for print layout                 |
| 🔄 Reliable          | Uses native browser print functionality            |
| 🚫 No Popups         | No reliance on popup windows that might be blocked |

## Installation

```bash
npm install @mohsensami/react-to-print
# or
yarn add @mohsensami/react-to-print
```

## Usage

### Basic Usage

```tsx
import { usePrint } from "./lib/usePrint";

const MyComponent: React.FC = () => {
  const { printRef, triggerPrint } = usePrint();

  return (
    <div className="App">
      <div>
        <div className="p-4">
          <div>Content that won't be printed</div>
          <div ref={printRef}>
            <h1>Printable Content</h1>
            <p>
              This content will be sent to the printer when you click the
              button.
            </p>
          </div>
          <button onClick={triggerPrint}>Print</button>
        </div>
      </div>
    </div>
  );
};
```

### Hook API

The `usePrint` hook returns an object with the following properties:

| Property       | Type                              | Description                                          |
| -------------- | --------------------------------- | ---------------------------------------------------- |
| `printRef`     | `React.RefObject<HTMLDivElement>` | Reference to the element containing content to print |
| `triggerPrint` | `() => void`                      | Function to trigger the print dialog                 |

### How It Works

1. **Reference Setup**: The `printRef` is attached to the element containing the content you want to print
2. **Print Trigger**: When `triggerPrint` is called:
   - Captures the content of the referenced element
   - Temporarily replaces the page content with the print content
   - Applies print-specific styles
   - Opens the browser's print dialog
   - Restores the original page content after printing

### Print-Specific Styling

The hook automatically applies some basic print styles, but you can customize them by modifying the `style` object in the `usePrint` hook:

```tsx
const style = document.createElement("style");
style.innerHTML = `
  @media print {
    body { 
      font-family: Arial, sans-serif; 
      margin: 20px;
      color: #000;
    }
    h1 { 
      color: #333;
      margin-bottom: 20px;
    }
    /* Add your custom print styles here */
  }
`;
```

## Example with Table

Here's an example showing how to print a table:

```tsx
import { usePrint } from "./lib/usePrint";

const TableExample: React.FC = () => {
  const { printRef, triggerPrint } = usePrint();

  return (
    <div>
      <div ref={printRef}>
        <h2>Employee Data</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Developer</td>
              <td>Engineering</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Designer</td>
              <td>Creative</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={triggerPrint}>Print Table</button>
    </div>
  );
};
```

## Best Practices

1. **Keep Print Content Simple**: Avoid complex layouts and animations in print content
2. **Use Print-Specific Styles**: Utilize `@media print` to optimize the printed output
3. **Test Across Browsers**: Different browsers may handle printing slightly differently
4. **Consider Page Breaks**: Use `page-break-before` and `page-break-after` CSS properties when needed

## License

MIT
