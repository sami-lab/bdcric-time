import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Encryption from 'object-encrypt-decrypt';

function Profile() {
  const history = useRouter();
  const [user, setUser] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('InRva2VuIg==')) {
      history.push('/login');
    }
    const u = localStorage.getItem('InRva2VuIg==')
      ? Encryption.decrypt(localStorage.getItem('InRva2VuIg=='))
      : null;
    setUser(u);
  }, [user]);

  const logout = () => {
    localStorage.removeItem('InRva2VuIg==');
    history.push('/login');
  };

  return (
    <>
      <Head>
        <title>
          {user ? user.user_display_name + ' - BDCricTime' : 'BDCricTime'}
        </title>
      </Head>
      {/*    login-area-stert*/}
      <div className="login-area">
        <div className="container log-c">
          <div className="full-login-text">
            <div className="full-login">
              <form>
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
                        Logged In As
                        <br />
                        <h3 style={{ color: '#07888A' }}>
                          {user ? user.user_display_name : ''}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="bottom-log">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-signup">
                    <h3>Want to logout ?</h3>
                    <button type="submit" onClick={logout}>
                      Logout
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

export default Profile;
