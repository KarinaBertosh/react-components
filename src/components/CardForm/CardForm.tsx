import React from 'react';
import { ICardForm } from '../cards';

export class CardForm extends React.Component{

  constructor(props: ICardForm) {
    super(props);
    this.render();
  }

  render() {
    return (
      <div className='custom-card'>
        <h3>Order</h3>
        <div className='m-t-5'>Name: {this.props.currentName}</div>
        <div className='m-t-5 price'>Date: {this.props.currentDate}</div>
        <div className='m-t-5'>Country: {this.props.currentCountry}</div>
        <div className='m-t-5'>Agreement: {this.props.currentAgreement === true ? 'yes' : 'no'} </div>
        <div className='m-t-5'>Male: {this.props.currentMale === true ? 'yes' : 'no'}</div>
        <div className='m-t-5'>Female: {this.props.currentFemale === true ? 'yes' : 'no'}</div>
        <img src={this.props.currentPhoto} alt="photo" />
      </div>
    );
  }

}