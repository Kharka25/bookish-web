import React, { ChangeEventHandler, useState } from 'react';

import { Button, TextInput } from '@components';

interface SignUpDataI {
  name: string;
  email: string;
  password: string;
}

type InputChangeEvent = ChangeEventHandler<HTMLInputElement>;

const SignUpPage: React.FC = () => {
  const [signupData, setSignupData] = useState<SignUpDataI>({
    name: '',
    email: '',
    password: '',
  });

  let disabled = true;

  function buttonDisabled() {
    disabled =
      signupData?.email.trim() === '' ||
      signupData?.name.trim() === '' ||
      signupData?.password.trim() === '';

    return disabled;
  }

  const signUpDataHandler: InputChangeEvent = (event) => {
    const { id, value } = event.currentTarget;
    setSignupData((currentValues) => {
      return { ...currentValues, [id]: value };
    });
  };

  return (
    <div data-testid='signup-page'>
      <div>
        <h1>Sign Up</h1>
        <h6>Create an account and start your Bookish adventure!</h6>
      </div>
      <div>
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='name'
          label='Name'
          placeholder='Your name'
          value={signupData.name}
        />
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='email'
          label='Email'
          placeholder='Your email'
          type='email'
          required
          value={signupData.email}
        />
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='password'
          label='Password'
          placeholder='Your password'
          type='password'
          value={signupData.password}
        />
        <Button disabled={buttonDisabled()} label='Sign Up' />
      </div>
    </div>
  );
};

export default SignUpPage;
