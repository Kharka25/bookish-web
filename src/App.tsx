import React from 'react';

import { HomePage } from '@pages';
import { TextInput } from '@components';

const App: React.FC = () => {
  return (
    <>
      <HomePage />
      <TextInput label='Name' htmlFor='Name' />
    </>
  );
};

export default App;
