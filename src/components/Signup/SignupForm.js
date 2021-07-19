import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../Error';

import { signUp } from '../../apiCall/userSlice';

import { Form } from '../Styles.styled';

const SignUpForm = () => {
  const signUpLoader = useSelector(state => state.user.loaders.signUp);
  const signUpError = useSelector(state => state.user.errors.signUp);

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    dispatch(signUp(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/formdata">
      <div>
        <input
          name="email"
          placeholder="Email"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
            },
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
            maxLength: {
              value: 80,
              message: 'Maximum 80 characters',
            },
          })}
        />
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>
      </div>
      <div>
        <input
          name="name"
          placeholder="Name"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
            },
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
            maxLength: {
              value: 80,
              message: 'Maximum 80 characters',
            },
          })}
        />
        <p>{errors.name && errors.name.message}</p>
      </div>
      <div>
        <input
          name="nickname"
          placeholder="Username"
          ref={register({
            required: {
              value: true,
              message: 'This field is mandatory',
            },
            minLength: {
              value: 2,
              message: 'Minimum 2 characters',
            },
            maxLength: {
              value: 80,
              message: 'Maximum 80 characters',
            },
          })}
        />
        <p>{errors.nickname && errors.nickname.message}</p>
      </div>

      {signUpLoader ? (
        <button type="submit" disabled aria-disabled>
          Signing you up...
        </button>
      ) : (
        <button type="submit">Sign up</button>
      )}

      {(signUpError && <Error errors={signUpError} />) || null}
    </Form>
  );
};

export default SignUpForm;
