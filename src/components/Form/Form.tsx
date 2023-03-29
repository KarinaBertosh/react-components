import React from 'react';
import { CardForm } from '../CardForm/CardForm';
import { ICardForm } from '../cards';
import './style.scss';

function validate(name: string, date: string, country: string, agreement: boolean, male: boolean, female: boolean, photo: string) {
  const nameError = [];
  const dateError = [];
  const countryError = [];
  const agreementError = [];
  const genderError = [];
  const photoError = [];
  const errors = [nameError, dateError, countryError, agreementError, genderError, photoError];

  if (name.length === 0) {
    nameError.push("Error: Name can't be empty");
  }
  if (name.length < 2) {
    nameError.push("Error: Name is too short");
  }
  if (date.length === 0) {
    dateError.push("Error: Select a date");
  }
  if (country.length === 0 || country === 'default') {
    countryError.push("Error: Choose the country");
  }
  if (agreement === false) {
    agreementError.push(`Error: To submit an order, you must agree to "I consent to my personal data"`);
  }
  if (male === false && female === false) {
    genderError.push("Error: You need to choose a gender");
  }
  if (photo === undefined) {
    photoError.push("Error: Add photo");
  }

  return errors;
}

export class Form extends React.Component<{}, {
  name: string,
  date: string,
  country: string,
  agreement: boolean,
  male: boolean,
  female: boolean,
  photo: string,
  cardsForm: Array<Array>,
  errors: Array<string>,
  currentName: string,
}> {
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


  handleSubmit(event: React.FormEvent) {
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
    if (errors[0].length > 0 || errors[1].length > 0 || errors[2].length > 0
      || errors[3].length > 0 || errors[4].length > 0 || errors[5].length > 0) {
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

    this.setState({ cardsForm: [...this.state.cardsForm, newCard], errors: [] });
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
          <label role='name'>
            Name:
            <input type="text" ref={this.state.name} data-testid="name" />
          </label>
          <p className='error' key={'0'}>{errors[0] ? `${errors[0]}` : ''}</p>
          <label>
            Date of delivery:
            <input type="date" min="2023-03-28" max="2023-05-31" ref={this.state.date} data-testid="date" />
          </label>
          <div className='error' key={'1'}>{errors[1] ? `${errors[1]}` : ''}</div>
          <label>
            List of countries:
            <select ref={this.state.country} defaultValue={'default'}>
              <option disabled value={'default'}></option>
              <option >Czechia</option>
              <option>Germany</option>
              <option>Poland</option>
            </select>
          </label>
          <div className='error' key={'2'}>{errors[2] ? `${errors[2]}` : ''}</div>
          <label className='radio-and-checkbox'>
            I consent to my personal data
            <input type="checkbox" ref={this.state.agreement} />
          </label>
          <div className='error' key={'3'}>{errors[3] ? `${errors[3]}` : ''}</div>
          <label className='radio-and-checkbox'>
            <input type="radio" id="male" name="gender" value="male"
              ref={this.state.male}></input>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"
              ref={this.state.female}></input>
            <label htmlFor="female">Female</label>
          </label>
          <div className='error' key={'4'}>{errors[4] ? `${errors[4]}` : ''}</div>
          <label>
            Profile picture
            <input id="file" accept="image/*" type="file" ref={this.state.photo} />
          </label>
          <div className='error' key={'5'}>{errors[5] ? `${errors[5]}` : ''}</div>
          <input type="submit" value="Submit" className='button' data-testid="submit" />
        </form>
        <div className='cards'>
          {this.getCards()}
        </div>
      </div>
    );
  }
}