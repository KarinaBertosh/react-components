import { useReducer, useState } from 'react';
import { Header } from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useAppDispatch, useAppSelector } from '@/hook/redux';
import { setUser } from '@/store/reducers/UserAuth';
import { getAllUsers, writeUserData } from '@/types/user';
import { Link } from 'react-router-dom';
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react';


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const forms = {
  reg: 'reg',
  logIn: 'logIn'
};



export default function FormPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<string>(forms.logIn);
  const dispatch = useAppDispatch();

  const handling = async (e: any) => {
    e.preventDefault();

    if (currentForm === forms.reg) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }));
          console.log('success');
          setIsAuth(true);
          const newUser = {
            userId: user.uid, email: email,
          };
          writeUserData(newUser);
        }).catch(() => alert('Email not correct'));
    }

    if (currentForm === forms.logIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }));
          setIsAuth(true);
          console.log('success');
        }).catch(() => alert('Email or password invalid'));
    }
  };

  return (
    <>
      <Header inputDisabled={true} />
      {
        <>
          {isAuth
            ? currentForm === forms.reg ? "Registration was successful." : 'Authorization was successful.'
          :
          <>
            <form className="form">
              <div className="title">{currentForm === forms.reg ? 'Registration' : 'Log in'}</div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e: any) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">Please indicate false email and password</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} className="form-control" id="exampleInputPassword1" onChange={(e: any) => setPassword(e.target.value)} />
              </div>
              <div>{error ? error : ''}</div>
              <button type="submit" className="btn btn-primary" onClick={(e: any) => handling(e)} >Submit</button>
            </form>
            {
              currentForm === forms.reg
                ? <div className="changeForm" onClick={() => setCurrentForm(forms.logIn)}>I have an account, I want to log in</div>
                : <div className="changeForm" onClick={() => setCurrentForm(forms.reg)}>I don&apos;t have an account, I want to log in</div>
            }
          </>
          }
        </>
      }
    </>
  );
};

