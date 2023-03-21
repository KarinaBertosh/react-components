import React from 'react';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';


export default class FormPage extends React.Component {
  render() {
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
}