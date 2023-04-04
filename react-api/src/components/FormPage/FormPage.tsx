import React from 'react';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';


export const FormPage = (): JSX.Element =>  {
  return (
    <>
      <Header />
      <h3>
        You can order flowers by filling out the form
      </h3>
      <Form />
    </>
  );
}