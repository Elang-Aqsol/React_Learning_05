const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
import { useState } from "react";
import { PreButton, NextButton } from "./components/Button";

function App() {
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setSteps((step) => (step > 1 ? step - 1 : step));
  }
  function handleNext() {
    setSteps((step) => (step < 3 ? step + 1 : step));
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <PreButton onClick={handlePrevious} />
            <NextButton onClick={handleNext} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
