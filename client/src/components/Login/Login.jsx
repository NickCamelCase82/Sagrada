import React from 'react';
import FormItem from '../FormItem/FormItem';

export default function Login() {
  return (
    <div>
      Login
      <FormItem
        title="Вход"
        input={{ email: 'Email', password: 'Пароль' }}
        button={{ submit: 'Войти', redirect: 'Регистрация' }}
        infoText="Восстановить пароль"
        link="/register"
        formType="login"
      />
    </div>
  );
}
