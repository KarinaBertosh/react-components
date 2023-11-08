import React from 'react';
import { CardForm } from '../CardForm/CardForm';
import { ICardForm } from '../types';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { cardSlice } from '../../store/reducers/CardSlice';


export const Form = (): JSX.Element => {
  const { cardsInForm } = useAppSelector((state) => state.userReducer);
  const { getCardsInForm } = cardSlice.actions;
  const dispatch = useAppDispatch();

  const renderNewCard = (data: any) => {
    const newCard = {
      name: data.name,
      date: data.date,
      country: data.country.value,
      agreement: data.agreement,
      gender: data.gender,
      photo: URL.createObjectURL(data.photo[0]),
    };
    dispatch(getCardsInForm([...cardsInForm, newCard]));
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
        {cardsInForm.map((c: ICardForm, i) =>
          <CardForm
            key={c.name + i}
            name={c.name}
            date={c.date}
            country={c.country}
            agreement={c.agreement}
            gender={c.gender}
            photo={c.photo}
          />
        )}
      </div>
    );
  };

  const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
    mode: "onBlur"
  });
  const handleRegistration = (data: object) => renderNewCard(data);
  const handleError = (errors: object) => {return errors };

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name is too short. Minimum 3 characters"
      }
    },
    date: { required: "Select a date" },
    country: { required: "Choose the country" },
    agreement: { required: `To submit an order, you must agree to "I consent to my personal data` },
    photo: { required: "Photo is required" },
    gender: { required: "You need to choose a gender" },
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