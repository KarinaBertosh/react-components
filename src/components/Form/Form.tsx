import React, { useState, useCallback, useEffect } from 'react';
import { CardForm } from '../CardForm/CardForm';
import { ICardForm } from '../cards';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import './style.scss';


export function Form(): JSX.Element {
  const [cardsForm, setCardsForm] = useState([]);

  const renderNewCard = (data: any) => {
    const newCard = {
      currentName: data.name,
      currentDate: data.date,
      currentCountry: data.country.value,
      currentAgreement: data.agreement,
      gender: data.gender,
      currentPhoto: URL.createObjectURL(data.photo[0]),
    };
    setCardsForm([...cardsForm, newCard]);
    reset({
      name: '',
      date: '',
      country: '',
      agreement: '',
      photo: '',
      gender: '',
    }, {
      keepErrors: true,
      keepDirty: true,
    });
  };

  const getCards = () => {
    return (
      <div className='cards'>
        {cardsForm.map((c: ICardForm, index) => (
          <div>
            <CardForm
              key={`${c.currentName} + ${index}`}
              currentName={c.currentName}
              currentDate={c.currentDate}
              currentCountry={c.currentCountry}
              currentAgreement={c.currentAgreement}
              gender={c.gender}
              currentPhoto={c.currentPhoto}
            />
          </div>
        ))}
      </div>
    );
  };

  const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
    mode: "onBlur"
  });
  const handleRegistration = (data: any) => renderNewCard(data);
  const handleError = (errors: any) => { };

  const registerOptions = {
    name: { required: "Name is required" },
    date: { required: "Date is required" },
    country: { required: "Country is required" },
    agreement: { required: "Agreement is required" },
    photo: { required: "Photo is required" },
    gender: { required: "Gender is required" },
  };

  const selectOptions = [
    { value: "Czechia", label: "Czechia" },
    { value: "Germany", label: "Germany" },
    { value: "Poland", label: "Poland" }
  ];


  return (
    <div data-testid="form">
      <form className="form" onSubmit={handleSubmit(handleRegistration, handleError)}>
        <label role='name'>
          Name:
          <input type="text" data-testid="name" name="name" {...register('name', registerOptions.name)} />
        </label>
        <div className='error'>
          {errors?.name && errors.name.message}
        </div>

        <label>
          Date of delivery:
          <input type="date" min="2023-03-28" max="2023-05-31" data-testid="date" name="date" {...register('date', registerOptions.date)} />
        </label>
        <div className='error'>
          {errors?.date && errors.date.message}
        </div>

        <Controller
          name="country"
          control={control}
          defaultValue=""
          rules={registerOptions.country}
          render={({ field }) => (
            <Select options={selectOptions} {...field} label="Text field" />
          )}
        />
        <div className='error'>
          {errors?.country && errors.country.message}
        </div>

        <label className='radio-and-checkbox'>
          I consent to my personal data
          <input type="checkbox" name="agreement" {...register('agreement', registerOptions.agreement)} />
        </label>
        <div className='error'>
          {errors?.agreement && errors.agreement.message}
        </div>

        <label className='radio-and-checkbox'>
          <input type="radio" name="gender" {...register('gender', registerOptions.gender)}
            value="male" ></input>
          <label htmlFor="male">Male</label>
          <input type="radio" id="gender" name="gender" {...register('gender', registerOptions.gender)}
            value="female"></input>
          <label htmlFor="female">Female</label>
        </label>
        <div className='error'>
          {errors?.gender && errors.gender.message}
        </div>

        <label>
          Profile picture
          <input id="file" accept="image/*" type="file" name="photo" {...register('photo', registerOptions.photo)} />
        </label>
        <div className='error'>
          {errors?.photo && errors.photo.message}
        </div>

        <input type="submit" value="Submit" className='button' data-testid="submit" />
      </form>

      {getCards()}
    </div>
  );
};