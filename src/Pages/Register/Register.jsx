import loginImg from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
const Register = () => {

    const { createUser, updateNameAndPhoto } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { email, password, name } = data;

        createUser(email, password)
            .then(result => {
                updateNameAndPhoto(name)
                const user = result.user
                console.log(user)
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
