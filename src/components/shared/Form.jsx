"use client"
import React from 'react';
import { toast } from 'react-toastify';


const Form = () => {

  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Booking Successfull")
  }
  return (
    <div>
      <form onSubmit={handleClick} className="space-y-2">

        <div>
          <label className="block font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="01XXXXXXXXX"
            required
            className="mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            rows="2"
            cols="30"
            placeholder="Enter your address"
            required
            className="mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>


        <button type='submit'  className="btn btn-wide rounded-3xl hover:border-black">
          Confirm Booking
        </button>

      </form>

    </div>
  );
};

export default Form;