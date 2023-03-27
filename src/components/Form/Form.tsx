import React, { useState } from 'react';
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

export function Form(): JSX.Element {
  const [name, setName] = useState(React.createRef<HTMLInputElement>());
  const [date, setDate] = useState(React.createRef<HTMLInputElement>());
  const [country, setCountry] = useState(React.createRef<HTMLInputElement>());
  const [agreement, setAgreement] = useState(React.createRef<HTMLInputElement>());
  const [male, setMale] = useState(React.createRef<HTMLInputElement>());
  const [female, setFemale] = useState(React.createRef<HTMLInputElement>());
  const [photo, setPhoto] = useState(React.createRef<FileList | null | undefined>());
  const [cardsForm, setCardsForm] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validate(
      name.current?.value,
      date.current?.value,
      country.current?.value,
      agreement.current?.checked,
      male.current?.checked,
      female.current?.checked,
      photo.current?.files[0]
    );
    if (errors[0].length > 0 || errors[1].length > 0 || errors[2].length > 0
      || errors[3].length > 0 || errors[4].length > 0 || errors[5].length > 0) {
      setErrors(errors);
      return;
    }

    alert('The order has been sent');

    const file = photo.current?.files[0];

    const newCard = {
      currentName: name.current?.value,
      currentDate: date.current?.value,
      currentCountry: country.current?.value,
      currentAgreement: agreement.current?.checked,
      currentMale: male.current?.checked,
      currentFemale: female.current?.checked,
      currentPhoto: URL.createObjectURL(file),
    };

    setCardsForm([...cardsForm, newCard]);
    setErrors([]);

    clearForm();

  };

  const clearForm = () => {
    name.current.value = '';
    date.current.value = '';
    country.current.value = '';
    agreement.current.checked = false;
    male.current.checked = false;
    female.current.checked = false;
    female.current.checked = false;
    photo.current.value = '';
  };

  const getCards = () => {
    return (
      cardsForm.map((c: ICardForm) => (
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
  };


  return (
    <div data-testid="form">
      <form onSubmit={handleSubmit} className="form">
        <label role='name'>
          Name:
          <input type="text" ref={name} data-testid="name" />
        </label>
        <p className='error' key={'0'}>{errors[0] ? `${errors[0]}` : ''}</p>
        <label>
          Date of delivery:
          <input type="date" min="2023-03-28" max="2023-05-31" ref={date} data-testid="date" />
        </label>
        <div className='error' key={'1'}>{errors[1] ? `${errors[1]}` : ''}</div>
        <label>
          List of countries:
          <select ref={country} defaultValue={'default'}>
            <option disabled value={'default'}></option>
            <option >Czechia</option>
            <option>Germany</option>
            <option>Poland</option>
          </select>
        </label>
        <div className='error' key={'2'}>{errors[2] ? `${errors[2]}` : ''}</div>
        <label className='radio-and-checkbox'>
          I consent to my personal data
          <input type="checkbox" ref={agreement} />
        </label>
        <div className='error' key={'3'}>{errors[3] ? `${errors[3]}` : ''}</div>
        <label className='radio-and-checkbox'>
          <input type="radio" id="male" name="gender" value="male"
            ref={male}></input>
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"
            ref={female}></input>
          <label htmlFor="female">Female</label>
        </label>
        <div className='error' key={'4'}>{errors[4] ? `${errors[4]}` : ''}</div>
        <label>
          Profile picture
          <input id="file" accept="image/*" type="file" ref={photo} />
        </label>
        <div className='error' key={'5'}>{errors[5] ? `${errors[5]}` : ''}</div>
        <input type="submit" value="Submit" className='button' data-testid="submit" />
      </form>
      <div className='cards'>
        {getCards()}
      </div>
    </div>
  );
}