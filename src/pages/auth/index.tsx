import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAppDispatch } from '@/hook/redux';
import { setUser } from '@/store/reducers/UserAuth';
import { writeUserData } from '@/types/user';
import { forms } from '@/types/common';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FormPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<string>(forms.logIn);
  const dispatch = useAppDispatch();

  const handling = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (currentForm === forms.reg) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }));
          setIsAuth(true);
          const newUser = {
            userId: user.uid, email: email,
          };
          writeUserData(newUser);
        }).catch(() => alert('Email not correct'));
    }

    else if (currentForm === forms.logIn) {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }));
          setIsAuth(true);
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
                  <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                  <div id="emailHelp" className="form-text">Please indicate false email and password</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" value={password} className="form-control" id="exampleInputPassword1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handling(e)} >Submit</button>
              </form>
              {
                currentForm === forms.reg
                  ? <div className="switchForm" onClick={() => setCurrentForm(forms.logIn)}>I have an account, I want to log in</div>
                  : <div className="switchForm" onClick={() => setCurrentForm(forms.reg)}>I don&apos;t have an account, I want to log in</div>
              }
            </>
          }
        </>
      }
    </>
  );
};

