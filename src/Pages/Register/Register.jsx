import loginImg from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const axiosPublic = useAxiosPublic();

    const { createUser, updateNameAndPhoto } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password, name } = data;

        createUser(email, password)
            .then(() => {
                updateNameAndPhoto(name)

                const userInfo = {
                    name: name,
                    email: email
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Registration success`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className={`hero min-h-screen bg-[url('${loginBg}')] h-64 w-full bg-cover bg-center`}>
                <div className="hero-content flex space-x-[100px] justify-center">

                    <div className="card shrink-0 border w-[59%] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" required {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Enter your password" className="input input-bordered" required {...register("password", { required: true })} />
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600">Have an account yet?
                                <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline text-violet-600"> Sign In</Link>.
                            </p>
                        </form>
                    </div>



                    <div className="w-[40%] text-center lg:text-left">
                        <img src={loginImg} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register
