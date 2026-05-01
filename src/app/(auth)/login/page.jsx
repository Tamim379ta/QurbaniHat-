"use client"

import Image from "next/image";
import bgImage from '@/assets/login.png'


const LoginPage = () => {
  return (
    <div className=' flex flex-col gap-10  container bg-linear-to-r from-cyan-400 via-blue-900 to-[#020024] mx-auto my-10 p-10 rounded-2xl'>

      <div className='p-10'>

        <p className='text-2xl font-bold'>Welcome Back!</p>
        <p>to,
          <span className='text-4xl font-bold'>QurbaniHat – Livestock <br /> Booking Platform</span>
        </p>
        <p className="mt-2">A modern livestock marketplace where users can explore <br /> animals for Qurbani such as cows and goats.</p>

         <div className="mt-10 text-6xl opacity-50">
          🐄 🐐 🐑
        </div>

      </div>

      <div className='p-10'>

        <div className="boder bg-blue-950 p-15 rounded-2xl">
          <form>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                type="email"
                className="text-white border-b border-gray-400  p-2.5 outline-none "
                placeholder="type here" />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                type="text"
                className="text-white   border-b border-gray-400  p-2.5 outline-none "
                placeholder="type here" />
            </fieldset>

            <div className="flex justify-between mt-3">
              <div></div>

              <button className="btn ">Login</button>
            </div>
          </form>

        </div>

      </div>



    </div>
  );
};

export default LoginPage;