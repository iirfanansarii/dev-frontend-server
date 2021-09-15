const signupFields = [
  {
    error: 'error',
    id: 'name',
    label: 'Name',
    placehoder: 'Alien',
    helperText: 'Enter your name',
    variant: 'filled'
  },
  {
    error: 'error',
    id: 'email',
    label: 'Email',
    placehoder: 'alien@gmail.com',
    helperText: 'Enter your mail',
    variant: 'filled'
  },
  {
    error: 'error',
    id: 'password',
    label: 'Password',
    placehoder: 'Alien@Exist',
    helperText: 'Enter your password',
    variant: 'filled'
  }
];

const signinFields = [
  {
    error: 'error',
    id: 'email',
    label: 'Email',
    // defaultValue: 'alien@gmail.com',
    placehoder: 'alien@gmail.com',
    helperText: 'Enter your mail',
    variant: 'filled'
  },
  {
    error: 'error',
    id: 'password',
    label: 'Password',
    // defaultValue: 'Alien@Exist',
    placehoder: 'Alien@Exist',
    helperText: 'Enter your password',
    variant: 'filled'
  }
];
module.exports = {
  signupFields,
  signinFields
};
