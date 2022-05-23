import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const inputs = useSelector((store) => store.loginInputs);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    const toBack = await fetch('http://localhost:3002/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const fromBack = await toBack.json();
    console.log('FROM BACK', fromBack.userLogin);
    dispatch({ type: 'SET_USER', payload: fromBack });
    navigate('/');
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={loginHandler}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
