import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Main.module.css';
import img from '../../img/main-page/main.png';

const Main = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.mainImgDiv}>
        <img src={img} alt="sagrada-img" className={classes.mainImg} />
        <Link to="/rules" type="button" className={classes.mainRulesLink}>
          Rules
        </Link>
        <Link to="/login" type="button" className={classes.mainLoginLink}>
          Login
        </Link>
        <Link to="/register" type="button" className={classes.mainRegisterLink}>
          Register
        </Link>
        <Link to="/game" type="button" className={classes.mainPlayLink}>
          Play
        </Link>
      </div>
    </div>
  );
};

export default Main;
