import React from 'react';
import './style.scss';

interface ISearch {
  valueChange: string;
}

export class Search extends React.Component<Record<string, never>, ISearch> {
  constructor(props: any) {
    super(props);

    let defaultValue = localStorage.getItem('value');
    if (defaultValue) {
      defaultValue = JSON.parse(defaultValue);
    }
    this.state = {
      valueChange: defaultValue ? defaultValue : '',
    };
  }

  saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ valueChange: e.target.value });
    localStorage.setItem("value", JSON.stringify(e.target.value));
  };

  render() {
    return (
      <div className='search'>
        <input type="search" className="search__input" value={this.state.valueChange} onChange={this.saveChange} />
        <button className="button">Search</button>
      </div>
    );
  }

}
