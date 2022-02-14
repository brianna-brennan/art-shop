import { useState } from 'react';
import './AuthPage.css';

import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
    <main className="AuthPage">
      <h1> Welcome to Mia's Art Shop. Sign in or sign up to start shopping!</h1>
<div><br></br>
        <button className="btn-sm"  onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
      </div><br></br>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
    </div>
  );
}