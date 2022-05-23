import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Main.module.css';
import img from '../../img/main-page/main.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Main = () => {
  const user = useSelector((state) => state.user);
  console.log(user.userLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3002/session', {
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((user) => dispatch({ type: 'SET_USER', payload: user }));
  }, []);

  return (
    <div className={classes.mainPage}>
      <div className={classes.mainImgDiv}>
        <img src={img} alt="sagrada-img" className={classes.mainImg} />
        <Link to="/rules" type="button" className={classes.mainRulesLink}>
          Правила
        </Link>
        <Link to="/login" type="button" className={classes.mainLoginLink}>
          Логин
        </Link>
        <Link to="/register" type="button" className={classes.mainRegisterLink}>
          Регистрация
        </Link>
        <Link to="/game" type="button" className={classes.mainPlayLink}>
          Играть
        </Link>
      </div>
    </div>
  );
};

export default Main;
