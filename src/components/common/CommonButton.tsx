type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const CommonButton: React.FC<ButtonProps> = ({ label, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {label}
    </button>
  );
};

export default CommonButton;