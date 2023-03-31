// import React, { useState } from 'react';
// import './style.scss';


// export function Search(): JSX.Element {
//   let defaultValue = localStorage.getItem('value');
//   if (defaultValue) {
//     defaultValue = JSON.parse(defaultValue);
//   }
//   const [valueChange, setValueChange] = useState(defaultValue ? defaultValue : '');

//   const saveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValueChange(e.target.value);
//     localStorage.setItem("value", JSON.stringify(e.target.value));

//   };

//   return (
//     <div className='search'>
//       <input type="search" className="search__input" value={valueChange} onChange={saveChange} />
//       <button className="button">Search</button>
//     </div>
//   );
// }
