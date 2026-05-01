"use client"

import Link from "next/link";


const LoginPage = () => {
  return (
    <div className="p-5 md:p-0">
      <div className=' flex flex-col md:flex-row gap-10  container bg-linear-to-r from-cyan-400 via-blue-900 to-[#020024] mx-auto my-10 p-10 rounded-2xl'>

        <div className='p-0 md:p-10 '>

          <p className='text-2xl font-bold'>Welcome Back!</p>
          <div className="hidden md:block">
            <p>to,
              <span className='text-4xl font-bold'>QurbaniHat – Livestock <br /> Booking Platform</span>
            </p>
            <p className="mt-2">A modern livestock marketplace where users can explore <br /> animals for Qurbani such as cows and goats.</p>

            <div className="mt-10 text-6xl opacity-50">
              🐄 🐐 🐑
            </div>
          </div>

        </div>

        <div className='p-0 md:p-10'>

          <div className="boder bg-blue-950 p-10 md:p-15 rounded-2xl">
            <form>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">Email</legend>
                <input
                  type="email"
                  required
                  className="text-white border-b border-gray-400  p-2.5 outline-none "
                  placeholder="type here" />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">Password</legend>
                <input
                  type="text"
                  required
                  className="text-white   border-b border-gray-400  p-2.5 outline-none "
                  placeholder="type here" />
              </fieldset>

              <div className="flex justify-between mt-3">
                <div></div>

                <button className="btn ">Login</button>
              </div>


            </form>

            <div className="mt-2">
              <p className="text-white">Dont have any account?
                <Link className="text-blue-500 ml-2 underline" href={'/register'}>Register</Link>
              </p>
            </div>

          </div>


        </div>

      </div>
    </div>
  );
};

export default LoginPage;