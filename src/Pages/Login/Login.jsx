import loginImg from '../../assets/others/authentication1.png'
import loginBg from '../../assets/others/authentication.png'

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                navigate(location?.state ? location.state : '/')

            })

            .catch(error => {
                console.error(error)
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className={`hero min-h-screen bg-[url('${loginBg}')] h-64 w-full bg-cover bg-center`}>
                <div className="hero-content flex space-x-[100px] justify-center">
                    <div className="w-[40%] text-center lg:text-left">
                        <img src={loginImg} />
                    </div>
                    <div className="card shrink-0 border w-[59%] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />

                                </label>

                                <input onBlur={handleValidateCaptcha} name='captcha' type="text" placeholder="enter captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
