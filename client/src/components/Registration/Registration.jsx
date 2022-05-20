import React from 'react';
import FormItem from '../FormItem/FormItem';

const Registration = () => {
  return (
    <div>
      Registration
      <FormItem
        title="Регистрация"
        input={{ email: 'Email', password: 'Пароль' }}
        button={{ submit: 'Зарегистрироваться', redirect: 'Войти' }}
        infoText="Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку."
        link="/login"
        formType="registration"
      />
    </div>
  );
}

export default Registration;
