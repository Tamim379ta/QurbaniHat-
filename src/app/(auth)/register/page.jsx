"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const RegisterPAge = () => {

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const route = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handelRegister = async (data) => {


    const { data: res, error } = await authClient.signUp.email({

      name: data.name,
      email: data.email,
      password: data.password,


    });

    if (error) {
      console.error(error);
      return;
    }

    if (!error) {
      route.push('/')
    }

  }
  return (
    <div className="p-5 md:p-0">

      <div className=' flex flex-col md:flex-row gap-5 md:gap-10  container bg-linear-to-r from-cyan-400 via-blue-900 to-[#020024] mx-auto my-10 p-10 rounded-2xl'>

        <div className='p-0 md:p-10 animate__animated animate__fadeInLeft '>

          <p className='text-2xl font-bold'>Welcome to, <span className="md:hidden">QurbaniHat</span></p>
          <div className="hidden md:block">
            <p>
              <span className='text-4xl font-bold'>QurbaniHat – Livestock <br /> Booking Platform</span>
            </p>
            <p className="mt-2">A modern livestock marketplace where users can explore <br /> animals for Qurbani such as cows and goats.</p>

            <div className="mt-10 text-6xl opacity-50">
              🐄 🐐 🐑
            </div>
          </div>

        </div>

        <div className='p-0 md:p-10 animate__animated animate__fadeInRight'>

          <div className="boder bg-blue-950 p-5 md:p-15 rounded-2xl">
            <form onSubmit={handleSubmit(handelRegister)}>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">Full Name</legend>
                <input
                  {...register("name", {
                    required: "name field is required",
                  })}
                  type="name"
                  className="text-white border-b border-gray-400  p-2.5 outline-none "
                  placeholder="name" />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">Image Url</legend>
                <input
                  {...register("image", {
                    required: "image field is required",
                  })}
                  type="url"
                  className="text-white border-b border-gray-400  p-2.5 outline-none "
                  placeholder="image url" />
                {errors.name && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">Email</legend>
                <input
                  {...register("email", {
                    required: "email field is required",
                  })}
                  type="email"
                  className="text-white border-b border-gray-400  p-2.5 outline-none "
                  placeholder="email" />
                {errors.name && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">Password</legend>
                <input
                  {...register("password", {
                    required: "password field is required",
                  })}
                  type="password"
                  className="text-white   border-b border-gray-400  p-2.5 outline-none "
                  placeholder="password" />
                {errors.name && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </fieldset>

              <div className="flex flex-col gap-2 mt-3">

                <button className="btn btn-outline text-white hover:bg-white/20 ">Register</button>
                <button onClick={signIn} className="btn btn-outline text-white hover:bg-white/20"> <FcGoogle /> Continue With Google</button>
              </div>


            </form>

            <div className="mt-2">
              <p className="text-white">Already have an account?
                <Link className="text-blue-500 ml-2 underline" href={'/login'}>Login</Link>
              </p>
            </div>

          </div>


        </div>



      </div>

    </div>
  );
};

export default RegisterPAge;