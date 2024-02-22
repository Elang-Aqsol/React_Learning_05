// Define the type for props
type Button = {
  onClick: () => void;
};

const PreButton: React.FC<Button> = ({ onClick }) => {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
      onClick={onClick}
    >
      Previous
    </button>
  );
};

const NextButton: React.FC<Button> = ({ onClick }) => {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
      onClick={onClick}
    >
      Next
    </button>
  );
};

export { PreButton, NextButton };
