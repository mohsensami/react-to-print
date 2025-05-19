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
      color: "#ff8000",
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
    },
  };

  const { printRef, triggerPrint } = usePrint(printStyles);

  return (
    <div className="App">
      <div>
        <div className="p-4">
          <div>Input not to print</div>
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

export default MyComponent;
