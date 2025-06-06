import {type ChangeEvent, type FormEvent, useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginUser} from '../../store/action';

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
  const isValidPassword = (value: string) => /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (!email || !password) {
      setError('We can’t recognize this email \nand password combination. Please try again.');
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
    }

    if (isValidEmail(email) && isValidPassword(password)) {
      setError(null);
    }
  }, [password, email]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    dispatch(loginUser({ email, password }));
  };

  return (
    <form action="#" className="sign-in__form" method="post" onSubmit={handleFormSubmit}>
      {error && (
        <div className="sign-in__message">
          <p>{error}</p>
        </div>
      )}
      <div className="sign-in__fields">
        <div className={`sign-in__field${!isValidEmail(email) ? ' sign-in__field--error' : ''}`}>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="email"
            id="user-email"
            value={email}
            onChange={handleEmailChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="password"
            id="user-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

export default LoginForm;
