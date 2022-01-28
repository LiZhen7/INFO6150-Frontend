import { useState } from 'react';
import { fetchRegister } from './fake-services';

import './register.css';

function Register() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');

    function registerDemo(e) {
        e.preventDefault();
        fetchRegister({ username: name, password: pwd })
            .then(userInfo => {
                setErr('Registered successfully!');
            })
            .catch(error => {
                setErr(`${error[`error`]}`);
            });
    }

    return (
        <div className="register">
            <p>REGISTER</p>
            <form onSubmit={registerDemo}>
                <label>
                    *UserName:
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </label>
                <label>
                    *Password:
                    <input type="password" value={pwd} onChange={(e) => { setPwd(e.target.value) }} />
                </label>
                <label>
                    *Email:
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <input className='register__button' type="submit" value="SUBMIT"
                    disabled={(!name) || (!pwd) || (!email)} />
            </form>
            <div className='errorNotice'>{err}</div>
            <div className='registerNote'>Already Register? Please Login.</div>
        </div>
    );
}

export default Register;