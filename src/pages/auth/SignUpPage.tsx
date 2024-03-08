import React from 'react';

import { TextInput } from '@components';

interface Props {};

const SignUpPage: React.FC<Props> = props => {
  const {} = props;

  return (
   <div data-testid='signup-page'>
    <div>
      <h1>Sign Up</h1>
      <h6>Create an account and start your Bookish adventure!</h6>
    </div>
    <div>
      <label htmlFor='name'>Name</label>
      <input id='name' type="text" placeholder='Your name' />
      <label htmlFor='email'>Email</label>
      <input id='email' type="text" placeholder='Your email' />
    </div>
    <TextInput htmlFor='firstName' label='Name' />
   </div>
  );
};

export default SignUpPage;