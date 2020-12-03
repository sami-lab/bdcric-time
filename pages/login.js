import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Encryption from 'object-encrypt-decrypt';

function Login() {
  const history = useRouter();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameError(false);
    setPasswordError(false);
    setLoading(true);

    if (username && password) {
      axios
        .post('https://www.bdcrictime.com/wp-json/jwt-auth/v1/token', {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(Encryption.encrypt('token'));
          localStorage.setItem(
            'InRva2VuIg==',
            Encryption.encrypt(response.data)
          );
          history.push('/profile');
        })
        .catch(function (error) {
          if (error.response.data.code === '[jwt_auth] invalid_username') {
            setUsernameError(true);
            setPassword('');
          } else if (
            error.response.data.code === '[jwt_auth] incorrect_password'
          ) {
            setPasswordError(true);
          }
          setErrorMessage(error.response.data.message);
          setLoading(false);
        });
    }
    if (!username) {
      setUsernameError(true);
      setErrorMessage('<strong>Error</strong>: The username field is empty.');
      setLoading(false);
    }
    if (!password) {
      setPasswordError(true);
      setErrorMessage('<strong>Error</strong>: The password field is empty.');
      setLoading(false);
    }
    if (!username && !password) {
      setErrorMessage(
        '<strong>Error</strong>: The username and password field is empty.'
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('InRva2VuIg==')) {
      history.push('/profile');
    }
  });

  return (
    <>
      <Head>
        <title>Login - BDCricTime</title>
      </Head>
      {/*    login-area-stert*/}
      <div className="login-area">
        <div className="container log-c">
          <div className="full-login-text">
            <div className="full-login">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-logo">
                      <Link href="/">
                        <a>
                          <img src="/img/site-main-logo.svg" alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-form">
                      <div className="login-contact">
                        <input
                          type="text"
                          placeholder="Username/E-mail Address"
                          className={usernameError ? 'error' : null}
                          value={username}
                          onChange={handleChangeUsername}
                        />
                        <div className="login-pass">
                          <input
                            type={seePassword ? 'text' : 'password'}
                            placeholder="Password"
                            className={passwordError ? 'error' : null}
                            value={password}
                            onChange={handleChangePassword}
                          />
                          <img
                            src="/assets/img/eye-icon.svg"
                            alt=""
                            onClick={() => setSeePassword(!seePassword)}
                            className={seePassword ? null : 'hidden'}
                          />
                        </div>
                        <span
                          dangerouslySetInnerHTML={{ __html: errorMessage }}
                        />
                        <button type="submit">
                          {loading ? 'Please wait...' : 'Log In'}
                        </button>
                        {/* <Link href="#"><a>Forgot Password?</a></Link>
                      <h4><span>Or, log In with</span></h4> */}
                      </div>
                      {/* <div className="login-link">
                      <Link href="#"><a><img src="assets/img/facebook-icon.svg" alt="" />Facebook</a></Link>
                      <Link href="#" ><a className="color-bt"><img src="assets/img/google-icon.svg" alt="" />Google</a></Link>
                    </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="bottom-log">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-signup">
                    <h3>Don't have an account ?</h3>
                    <button
                      type="submit"
                      onClick={() => history.push('/signup')}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
