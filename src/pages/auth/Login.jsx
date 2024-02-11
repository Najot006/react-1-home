import React from 'react'
import useAuthStore from './../../store/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {login} = useAuthStore()
  const navigate = useNavigate()
  const save =(e)=>{
    e.preventDefault();
    login({
      username: e.target[0].value,
      password: e.target[1].value
    })
    let token = localStorage.getItem("token")
    if (token) {
      navigate("/main")
    }
  }
  return (
  <div className='mt-20'>
      <div   class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-[700px] mt-60">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1  className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">Login</h1>
        <form onSubmit={save} className="space-y-4 md:space-y-6">
        <div className="flex-col">
          <label for='text' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
         <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="username" />
         </div>
         <div>
          <label for='text' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="text" placeholder=". . . . ." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />  
         </div>
          <button type="submit" class="w-full bg-white text-black bg-white-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-white-700 dark:focus:ring-primary-800">save</button>
        </form>
      </div>
    </div>
  </div>
  );
}
