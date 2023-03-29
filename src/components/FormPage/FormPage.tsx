import React from 'react';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';


export default class FormPage extends React.Component {
  constructor(props: []) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>
    }
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