import React, {
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from 'react';

import './styles.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  ref?: string;
  type?: HTMLInputTypeAttribute;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { label, htmlFor, type, ...otherProps },
  ref
) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`text-input-container`}>
      <label className='label' htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={`${focused && 'focused'}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...otherProps}
        id={htmlFor}
        type={type}
        ref={ref}
      />
    </div>
  );
};

const TextInput = React.forwardRef(Input);

export default React.memo(TextInput);
