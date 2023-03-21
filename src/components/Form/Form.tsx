import React from 'react';
import { CardForm } from '../CardForm/CardForm';
import { ICardForm } from '../cards';
import './style.scss';

export class Form extends React.Component {
  public name;
  public date;
  public country;
  public agreement;
  public male;
  public female;
  public photo;

  constructor(props: []) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef<HTMLInputElement>();
    this.date = React.createRef<HTMLInputElement>();
    this.country = React.createRef<HTMLSelectElement>();
    this.agreement = React.createRef<HTMLInputElement>();
    this.male = React.createRef<HTMLInputElement>();
    this.female = React.createRef<HTMLInputElement>();
    this.photo = React.createRef<FileList | null | undefined>();
    console.log(typeof (this.photo));


    this.state = {
      cardsForm: []
    };
  }
  
  handleSubmit(event: any) {
    event.preventDefault();
    alert('The order has been sent')
    const file = this.photo.current?.files[0];
    const newCard = {
      currentName: this.name.current?.value,
      currentDate: this.date.current?.value,
      currentCountry: this.country.current?.value,
      currentAgreement: this.agreement.current?.checked,
      currentMale: this.male.current?.checked,
      currentFemale: this.female.current?.checked,
      currentPhoto: URL.createObjectURL(file),
    };
    this.setState({ cardsForm: [...this.state.cardsForm, newCard] });

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
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            Name:
            <input type="text" ref={this.name} />
          </label>
          <label>
            Date of delivery:
            <input type="date" min="2023-03-28" max="2023-05-31" ref={this.date} />
          </label>
          <label>
            List of countries:
            <select ref={this.country}>
              <option>Czechia</option>
              <option>Germany</option>
              <option>Poland</option>
            </select>
          </label>
          <label className='radio-and-checkbox'>
            I consent to my personal data
            <input type="checkbox" ref={this.agreement} />
          </label>
          <label className='radio-and-checkbox'>
            <input type="radio" id="male" name="gender" value="male"
              ref={this.male}></input>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"
              ref={this.female}></input>
            <label htmlFor="female">Female</label>
          </label>
          <label>
            Profile picture
            <input id="file" accept="image/*" type="file" ref={this.photo} />
          </label>
          <input type="submit" value="Submit" className='button'/>
        </form>
        <div className='cards'>
        {this.getCards()}
        </div>
      </>
    );
  }
}