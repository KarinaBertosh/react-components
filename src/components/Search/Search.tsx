import React from 'react';
import './style.scss';

export class Search extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      valueChange: JSON.parse(localStorage.getItem("value")!) || '',
    };
    
  }

  saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ valueChange: e.target.value });
    localStorage.setItem("value", JSON.stringify(e.target.value));
  };

  render() {
    return (
      <div className='search'>
        <input type="search" className="search__input" value={this.state.valueChange} onChange={this.saveChange}/>
        <button className="button">Search</button>
      </div>
    );
  }

}
