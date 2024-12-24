type InputProps = {
  label?: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

const CommonInput: React.FC<InputProps> = ({ label, type = 'text', value, onChange, placeholder, className = '' }) => {
  return (
    <div>
      {label && <label className="block mb-2 text-main font-medium">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-lg ${className}`}
      />
    </div>
  );
};

export default CommonInput;