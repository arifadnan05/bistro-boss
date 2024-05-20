import loginImg from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
const Register = () => {

    const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div className={`hero min-h-screen bg-[url('${loginBg}')] h-64 w-full bg-cover bg-center`}>
            <div className="hero-content flex space-x-[100px] justify-center">
                <div className="w-[40%] text-center lg:text-left">
                    <img src={loginImg} />
                </div>
                <div className="card shrink-0 border w-[59%] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
