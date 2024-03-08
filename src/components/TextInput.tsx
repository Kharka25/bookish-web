import React from 'react';

interface Props {
  label?: string;
  htmlFor?: string;
}

const TextInput: React.FC<Props> = (props) => {
  const { label = 'label', htmlFor } = props;
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} type='text' />
    </div>
  );
};

export default React.memo(TextInput);
