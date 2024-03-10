import React from 'react';

import { TextInput } from '@components';

interface Props {}

const SignUpPage: React.FC<Props> = (props) => {
	const {} = props;

	return (
		<div data-testid="signup-page">
			<div>
				<h1>Sign Up</h1>
				<h6>Create an account and start your Bookish adventure!</h6>
			</div>
			<div>
			  <TextInput htmlFor="firstName" label="Name" />
			  <TextInput htmlFor="email" label="Email" />
			</div>
		</div>
	);
};

export default SignUpPage;
