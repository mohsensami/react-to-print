import { usePrint } from "./lib/usePrint";

const MyComponent: React.FC = () => {
  const { printRef, triggerPrint } = usePrint();
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
