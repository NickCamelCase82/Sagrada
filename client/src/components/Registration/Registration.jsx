import React from 'react';
import './Registration.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormItem from '../FormItem/FormItem';

export default function Registration() {
  const inputs = useSelector((store) => store.registrationInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Registration = () => {
    return (
      <div>
        Registration
        <FormItem
          title="Регистрация"
          input={{ email: 'email', password: 'Пароль' }}
          button={{ submit: 'Зарегистрироваться', redirect: 'Войти' }}
          link="/login"
          formType="registration"
        />
      </div>
    );
  };
  const registrationHandler = async (e) => {
    e.preventDefault();

    const toBack = await fetch('http://localhost:3001/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const fromBack = await toBack.json();
    dispatch({ type: 'SET_USER', payload: fromBack });
    //dispatch({ type: 'CLEAR_DATA', payload: {} });
    navigate('/', { fromBack });
  };

  return (
    <>
      <div>Registration</div>

      <form onSubmit={registrationHandler}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            value={inputs.email ?? ''}
            onChange={(e) =>
              dispatch({
                type: 'USER_TYPING',
                payload: { [e.target.name]: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            value={inputs.password ?? ''}
            onChange={(e) =>
              dispatch({
                type: 'USER_TYPING',
                payload: { [e.target.name]: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLogin" className="form-label">
            Login
          </label>
          <input
            type="login"
            name="login"
            className="form-control"
            id="inputLogin"
            value={inputs.login ?? ''}
            onChange={(e) =>
              dispatch({
                type: 'USER_TYPING',
                payload: { [e.target.name]: e.target.value },
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
