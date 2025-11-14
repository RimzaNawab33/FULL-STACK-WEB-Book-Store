import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import User from '../../../../Backend/User/User.Model';
import toast from 'react-hot-toast';

const LogOut = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleFunction = () => {
        try {
            setAuthUser({
                ...authUser,
                User: null
            })
            localStorage.removeItem("users");
            toast.success("LogOut Successfully");
            
         setTimeout(() => {
         window.location.reload();
         }, 3000);
    
            
        } catch (error) {
            toast.error("Error:" + error.message);
            setTimeout(() => {}, 2000);
        }
    }
  return (
    <div>
        <button className='px-3 py-2 text-white bg-red-500 rounded-md cursor-pointer'
        onClick={handleFunction}
        >
         LogOut
        </button>
      
    </div>
  )
}

export default LogOut
