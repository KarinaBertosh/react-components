import React from 'react';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';


export default function FormPage(): JSX.Element {
  return (
    <>
      <Header />
      <h3>
        You can order flowers by filling out the form.
      </h3>
      <Form />
    </>
  );
}