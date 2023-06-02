import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleEmpty = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in all the fields');
    } else {
      setErrorMessage('');
      alert('Form submitted successfully');
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
    <div className={`login ${theme}`}>
      <div className='hero'>
        <div className='left-side'>
          <div className='overlay'></div>
          <h3>
            Welcome to the <span>Millennials</span> WorkHub!
          </h3>
          <p>
            Work flexibly from anywhere on a variety of work including
            transcription, translation, annotation, and subtitling
          </p>
        </div>
        <div className='form-container'>
          <h4>Login</h4>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <form>
            <input
              value={email}
              type='text'
              placeholder='Email*'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              type='password'
              placeholder='Password*'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button className="btn" onClick={handleEmpty} type='submit'>
            Login
          </button>
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
          <button className="btn-e"onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
};

export default Login;
