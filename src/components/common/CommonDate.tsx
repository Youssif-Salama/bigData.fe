import React, { FC } from 'react';

interface CommonDateProps {
  label?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonDate: FC<CommonDateProps> = ({ label, className, value, onChange }) => {
  return (
    <div>
      {label && <label className="mb-1 text-sm font-medium text-[#242424]">{label}</label>}
      <input
        type="date"
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonDate;
