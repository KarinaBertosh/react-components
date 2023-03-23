import React from 'react';
import { CardForm } from '../CardForm/CardForm';
import { ICardForm } from '../cards';
import './style.scss';

function validate(name: string, date: string, country: string, agreement: boolean, male: boolean, female: boolean, photo: any) {
  const errors = [];
  if (name.length === 0) {
    errors.push("Name can't be empty");
  }
  if (name.length < 2) {
    errors.push("Name is too short");
  }
  if (date.length === 0) {
    errors.push("Select a date");
  }
  if (country.length === 0 || country === 'default') {
    errors.push("Choose the country");
  }
  if (agreement === false) {
    errors.push(`To submit an order, you must agree to "I consent to my personal data"`);
  }
  if (male === false && female === false) {
    errors.push("You need to choose a gender");
  }
  if (photo === undefined) {
    errors.push("Add photo");
  }

  return errors;
}

export class Form extends React.Component {
  constructor(props: []) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: React.createRef<HTMLInputElement>(),
      date: React.createRef<HTMLInputElement>(),
      country: React.createRef<HTMLSelectElement>(),
      agreement: React.createRef<HTMLInputElement>(),
      male: React.createRef<HTMLInputElement>(),
      female: React.createRef<HTMLInputElement>(),
      photo: React.createRef<FileList | null | undefined>(),
      cardsForm: [],
      errors: []
    };
  }


  handleSubmit(event: any) {
    event.preventDefault();

    const errors = validate(
      this.state.name.current.value,
      this.state.date.current?.value,
      this.state.country.current.value,
      this.state.agreement.current?.checked,
      this.state.male.current?.checked,
      this.state.female.current?.checked,
      this.state.photo.current?.files[0]
    );
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    alert('The order has been sent');

    const file = this.state.photo.current?.files[0];

    const newCard = {
      currentName: this.state.name.current?.value,
      currentDate: this.state.date.current?.value,
      currentCountry: this.state.country.current?.value,
      currentAgreement: this.state.agreement.current?.checked,
      currentMale: this.state.male.current?.checked,
      currentFemale: this.state.female.current?.checked,
      currentPhoto: URL.createObjectURL(file),
    };

    this.setState({ cardsForm: [...this.state.cardsForm, newCard],  errors: [] });
    this.clearForm();

  }

  clearForm() {
    this.state.name.current.value = '';
    this.state.date.current.value = '';
    this.state.country.current.value = '';
    this.state.agreement.current.checked = false;
    this.state.male.current.checked = false;
    this.state.female.current.checked = false;
    this.state.female.current.checked = false;
    this.state.photo.current.value = '';
  }

  getCards() {
    return (
      this.state.cardsForm.map((c: ICardForm) => (
        <CardForm
          key={c.currentDate}
          currentName={c.currentName}
          currentDate={c.currentDate}
          currentCountry={c.currentCountry}
          currentAgreement={c.currentAgreement}
          currentMale={c.currentMale}
          currentFemale={c.currentFemale}
          currentPhoto={c.currentPhoto}
        />
      ))
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <div data-testid="form">
        <form onSubmit={this.handleSubmit} className="form">
          {errors.map((e: string) => (
            <p className='error' key={e}>Error: {e}</p>
          ))}
          <label role='name'>
            Name:
            <input type="text" ref={this.state.name} />
          </label>
          <label>
            Date of delivery:
            <input type="date" min="2023-03-28" max="2023-05-31" ref={this.state.date} />
          </label>
          <label>
            List of countries:
            <select ref={this.state.country} defaultValue={'default'}>
              <option disabled value={'default'}></option>
              <option >Czechia</option>
              <option>Germany</option>
              <option>Poland</option>
            </select>
          </label>
          <label className='radio-and-checkbox'>
            I consent to my personal data
            <input type="checkbox" ref={this.state.agreement} />
          </label>
          <label className='radio-and-checkbox'>
            <input type="radio" id="male" name="gender" value="male"
              ref={this.state.male}></input>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"
              ref={this.state.female}></input>
            <label htmlFor="female">Female</label>
          </label>
          <label>
            Profile picture
            <input id="file" accept="image/*" type="file" ref={this.state.photo} />
          </label>
          <input type="submit" value="Submit" className='button' />
        </form>
        <div className='cards'>
          {this.getCards()}
        </div>
      </div>
    );
  }
}