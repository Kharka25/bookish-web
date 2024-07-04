import React, { ChangeEventHandler, useState } from 'react';

import { Button, TextInput } from '@components';
import './styles.scss';

interface SignUpDataI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type InputChangeEvent = ChangeEventHandler<HTMLInputElement>;

const SignUpPage: React.FC = () => {
  const [signupData, setSignupData] = useState<SignUpDataI>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  let disabled = true;

  function buttonDisabled() {
    disabled =
      signupData?.email.trim() === '' ||
      signupData?.firstName.trim() === '' ||
      signupData?.lastName.trim() === '' ||
      signupData?.password.trim() === '';

    return disabled;
  }

  const signUpDataHandler: InputChangeEvent = (event) => {
    const { id, value } = event.currentTarget;
    setSignupData((currentValues) => {
      return { ...currentValues, [id]: value };
    });
  };

  function handleSignUp(data: SignUpDataI) {
    console.log(signupData);
  }

  return (
    <div data-testid='signup-page' className='container'>
      <div className='heading-container'>
        <h1>Sign Up</h1>
        <h6>Create an account and start your Bookish adventure!</h6>
      </div>
      <div className='grid grid--2-cols fields-container'>
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='firstName'
          label='First name'
          placeholder='John'
          value={signupData.firstName}
        />
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='lastName'
          label='Last name'
          placeholder='Doe'
          value={signupData.lastName}
        />
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='email'
          label='Email'
          placeholder='johndoe@mail.com'
          type='email'
          required
          value={signupData.email}
        />
        <TextInput
          onChange={signUpDataHandler}
          htmlFor='password'
          label='Password'
          placeholder='*******'
          type='password'
          value={signupData.password}
        />
      </div>
      <Button
        className='btn sign-up-btn'
        onClick={() => handleSignUp(signupData)}
        disabled={buttonDisabled()}
        label='Sign Up'
      />
    </div>
  );
};

export default SignUpPage;
