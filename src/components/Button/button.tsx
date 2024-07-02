import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, label, ...otherProps } = props;
  return (
    <div className='button'>
      <button {...otherProps} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default React.memo(Button);
