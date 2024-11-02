import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/useContextProjects';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { signUp, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/login";
  
  const navigateLogin = () => {
    navigate('/login');
   }

  const signupOnSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User login Successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        reset();
        verifyEmail();
       
        updateProfile({ displayName: data.name});
         navigate(from ,{replace:true});
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
         <div className=" lg:p-20 pt-20 ">

<div>
<form
   onSubmit={handleSubmit(signupOnSubmit)}
   className="w-full max-w-lg mx-auto p-4 rounded-lg shadow-md bg-slate-900"
 >
   {/* Name */}
   <div>
   <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input
       type="text"
       placeholder="Enter Name"
       {...register('name', {
         required: {
           value: true,
           message: 'name is required',
         },
       })}
       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
     />

     <label className="label">
       {errors.name?.type === 'required' && (
         <p className="text-red-600 my-2">{errors.name?.message}</p>
       )}
       {errors.name?.type === 'pattern' && (
         <p className="text-red-600 my-2">{errors.name?.message}</p>
       )}
     </label>
   </div>
   {/* Name */}

   {/* Email */}
   <div>
   <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input
       type="email"
       placeholder="Email"
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
     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
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
   <div>
   <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input
       type="password"
       placeholder="Password"
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
       <span className="label-text">
         Forget Password ?
         <button className="btn btn-link">Reset</button>
       </span>
     </label>
     {/* Forgot password */}
   </div>
   {/* Password */}

   <div className="form-control">
     <button
       type="submit"
    className="about__hero__btn:hover gradient-border  font-bold"
     >
       sign Up
     </button>
   </div>
 </form>  
 <p className=" mt-2 text-center">
   Already have an account
   <Link
     className="text-green-600 font-bold px-2"
     to="/login"
     onClick={navigateLogin}
   >
     Please Login
   </Link>
 </p>
</div>
</div>
<ToastContainer />
    </section>
  );
};

export default Register;