"use client"
import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';


const Form = () => {


  const handleClick = (e) => {

    e.preventDefault();
    toast.success("Booking Successfull")
    e.target.reset();
  }
  return (
    <div className='border p-3 border-taupe-400 rounded-xl shadow-xl'>
      <h1 className='font-semibold text-xl mb-2'>Booking Form</h1>
      <form onSubmit={handleClick} >

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Full Name</legend>
          <input required type="text" className="input" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend"> Email Address</legend>
          <input required type="=email" className="input" placeholder="Enter your email" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend"> Phone Number</legend>
          <input required type="number" className="input" placeholder="01XXXXXXXXX" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Address</legend>
          <textarea required  className="textarea resize-none h-14 min-h-0" placeholder="Enter your address"></textarea>
        </fieldset>


        <button type='submit' className="btn btn-wide rounded-3xl bg-linear-to-r from-cyan-400 via-blue-900 to-[#020024] text-white hover:border-2 hover:border-accent-hover mt-2">
         <MdDone/> Confirm Booking
        </button>

      </form>

    </div>
  );
};

export default Form;