import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import './styles.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  ref?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { label, htmlFor, ...otherProps },
  ref
) => {
  return (
    <div className='text-input-container'>
      <label className='label' htmlFor={htmlFor}>
        {label}
      </label>
      <input {...otherProps} id={htmlFor} type='text' ref={ref} />
    </div>
  );
};

const TextInput = React.forwardRef(Input);

export default React.memo(TextInput);
