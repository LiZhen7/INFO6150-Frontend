import { useState } from 'react';
import { fetchLogin } from './fake-services';
import spinner from './logo.svg';

import './login.css';

function Login({ statusCallback }) {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function loginDemo(e) {
        e.preventDefault();
        fetchLogin(name, pwd)
            .then(userInfo => {
                setErr('Log In Success!');
                setIsLoading(true);
                setTimeout(() => statusCallback(name), 3000);
            })
            .catch(error => {
                setErr(`${error[`error`]}`);
            });
    }

    return (
        <div className="login">
            <p>LOG IN</p>
            <form onSubmit={loginDemo}>
                <label>
                    *UserName:
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </label>
                <label>
                    *Password:
                    <input type="password" value={pwd} onChange={(e) => { setPwd(e.target.value) }} />
                </label>
                {isLoading && <img src={spinner} className='submitSpinner' alt='spinner' role="status" />}
                {!isLoading && <input className='login__button' type="submit" value="SUBMIT"
                disabled={(!name) || (!pwd)} role="status" />}
            </form>
            <div className='errorNotice'>{err}</div>
            <div className='loginNote'>Note: * are required.</div>
        </div>
    );
}

export default Login;