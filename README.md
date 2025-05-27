# React-to-Print

A simple and customizable React hook for printing content with style control.

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
npm install react-to-print
# or
yarn add react-to-print
```

## Usage

### Basic Usage

```tsx
import { usePrint } from "./lib/usePrint";

const MyComponent: React.FC = () => {
  const { printRef, triggerPrint } = usePrint();

  return (
    <div>
      <div ref={printRef}>
        <h1>Printable Content</h1>
        <p>This content will be printed</p>
      </div>
      <button onClick={triggerPrint}>Print</button>
    </div>
  );
};
```

### Advanced Usage with Custom Styles

You can customize the appearance of your printed content using `beforePrint` and `afterPrint` styles:

```tsx
import { usePrint } from "./lib/usePrint";

const MyComponent: React.FC = () => {
  const printStyles = {
    beforePrint: {
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "14px",
      lineHeight: "1.5",
    },
    afterPrint: {
      color: "#333333",
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
    },
  };

  const { printRef, triggerPrint } = usePrint(printStyles);

  return (
    <div>
      <div ref={printRef}>
        <h1>Printable Content</h1>
        <p>This content will be printed with custom styles</p>
      </div>
      <button onClick={triggerPrint}>Print</button>
    </div>
  );
};
```

## API Reference

### usePrint Hook

The `usePrint` hook accepts an optional `styles` parameter and returns an object with the following properties:

#### Parameters

```typescript
interface PrintStyles {
  beforePrint?: React.CSSProperties; // Styles applied before printing
  afterPrint?: React.CSSProperties; // Styles applied during printing
}
```

#### Returns

```typescript
{
  printRef: React.RefObject<HTMLDivElement>;  // Ref to attach to the printable content
  triggerPrint: () => void;                  // Function to trigger the print dialog
}
```

### Style Properties

You can use any valid CSS properties in your style objects. Here are some common examples:

```typescript
const printStyles = {
  beforePrint: {
    backgroundColor: "#ffffff", // Background color
    color: "#000000", // Text color
    fontSize: "14px", // Font size
    lineHeight: "1.5", // Line height
    padding: "20px", // Padding
    margin: "0", // Margin
  },
  afterPrint: {
    color: "#333333", // Text color for printing
    fontFamily: "Arial, sans-serif", // Font family
    margin: "0", // Margin for printing
    padding: "0", // Padding for printing
  },
};
```

## How It Works

1. The `usePrint` hook creates a reference (`printRef`) that you attach to the content you want to print.
2. When `triggerPrint` is called, it:
   - Opens a new window (Note: This may be blocked by popup blockers)
   - Copies your content into it
   - Applies the specified styles
   - Sets default styles including:
     - Font family: Arial, sans-serif
     - Body margin: 20px
     - Page margin: 20mm when printing
   - Triggers the browser's print dialog
   - Closes the window after printing

## Best Practices

1. **Content Organization**

   - Only include the content you want to print within the `printRef` div
   - Keep non-printable content outside the `printRef`
   - Be aware that popup blockers might prevent the print window from opening

2. **Styling**

   - Use `beforePrint` styles for the print preview appearance
   - Use `afterPrint` styles for the final printed output
   - Test your print styles in different browsers
   - Note that the hook automatically sets some default styles:
     - Arial font family
     - 20px body margin
     - 20mm page margins when printing

3. **Performance**
   - Keep the printable content as simple as possible
   - Avoid complex layouts that might not print well
   - Consider the impact of popup blockers on your users' experience

## Browser Support

This library works in all modern browsers that support:

- React 16.8+
- ES6+
- CSS @media print
- Window.open() API (required for printing)

## License

MIT
