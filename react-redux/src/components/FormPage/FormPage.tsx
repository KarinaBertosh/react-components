import React from 'react';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';


export const FormPage = (): JSX.Element =>  {
  return (
    <>
      <Header />
      <h3>
      You can fill out the form to receive episodes
      </h3>
      <Form />
    </>
  );
}