import {React,useState} from "react";
import styles from './AuthPage.module.css';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Click here to Sign Up' : 'Click here to Log In'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}

