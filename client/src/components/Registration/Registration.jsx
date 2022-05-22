import React from 'react';
import FormItem from '../FormItem/FormItem';

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
}

export default Registration;
