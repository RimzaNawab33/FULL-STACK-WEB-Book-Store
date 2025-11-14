import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
     const userInfo = {
        Email: data.email,
        Password: data.password,
      };

      try {
        const res = await axios.post("http://localhost:4001/User/LogIn", userInfo);
        console.log('signup response:', res.data);
        const saved = res.data.user || res.data.User || res.data;
        // save user object (fallback to whole res.data if user not present)
       
        toast.success('LoggedIn Successful');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
        localStorage.setItem("users", JSON.stringify(saved));
        window.location.reload();
      }, 1000);
      } catch (err) {
        console.log('LogIn error:', err.response || err.message || err);
        if (err.response && err.response.data && err.response.data.message) {
      
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);

        } else {
          toast.error("Error: " + (err.message || err));
           setTimeout(() => {}, 3000);
        }
      }
  }

  return (
    <div className="dark:bg-slate-900 dark:text-white">
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}
      >
        ✕</Link>
    
    <h3 className="text-lg font-bold">LogIn</h3>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input
        {...register("email", { required: true })} 
         type="text"
         placeholder='Enter your email' 
         className='px-3 py-1 border rounded-md outline-none w-80' />
         <br />
         {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}

    </div>
    <div className='mt-4 space-y-2'>
        <span>password</span>
        <br />
        <input type="text"
        {...register("password", { required: true })} 
         placeholder='Enter your password' 
        className='px-3 py-1 border rounded-md outline-none w-80' />
        <br />
        {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}

    </div>
   <div className='flex items-center justify-around mt-4'>
    <div>
        <button className='px-4 py-2 mt-2 text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700'>Login</button>
    </div>
    <div>
        <h4 className='text-lg font-normal'>Not registered? <Link to="/signup" className='text-blue-500 underline cursor-pointer'>SignUp</Link></h4>
    </div>
   </div>
   </form>
  </div>
  </dialog>
      
    </div>
  )
}

export default Login;
