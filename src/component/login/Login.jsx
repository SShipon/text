
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/useContextProjects';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/register');
  };

  //  for signUp
  const loginOnSubmit = async(data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User login Successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          reset();
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
   <section>
             <div className="lg:p-20 pt-20">
          <div>
          <form
            onSubmit={handleSubmit(loginOnSubmit)}
            className="w-full max-w-lg mx-auto p-4 rounded-lg shadow-md bg-slate-900"
          >
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'provide a valid email',
                  },
                })}
               className="w-full px-3  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
              />

              <label className="label">
                {errors.email?.type === 'required' && (
                  <p className="text-red-600 my-2">{errors.email?.message}</p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="text-red-600 my-2">{errors.email?.message}</p>
                )}
              </label>
            </div>
            {/* Email */}

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: 'provide a valid password',
                  },
                })}
                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
              />

              <label className="label">
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
              </label>

              {/* Forgot password */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {/* Forgot password */}
            </div>
            {/* Password */}

            <div className="form-control ">
              <button type="submit"  className="about__hero__btn:hover gradient-border  font-bold">
                Login
              </button>
            </div>
          </form>
          <p className="mt-3 text-center">
            Do not have an account
            <Link
              className="text-green-600 font-bold px-2 "
              to="/register"
              onClick={navigateSignUp}
            >
              Please SignUp
            </Link>
          </p>
          </div>
        </div>
         <ToastContainer />
   </section>
  );
};

export default Login;