"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p
        className='text-xl rounded-xs bg-slate-200 p-3 flex justify-between items-center cursor-pointer select-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span
          className='transition-transform duration-300'
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <IoIosArrowDown />
        </span>
      </p>
      {isOpen && (
        <p className='bg-slate-100 p-3'>{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className='my-10'>
      <h1 className='text-center my-5 text-3xl font-bold'>Frequently Asked Questions</h1>

      <FAQItem
        question="What is QurbaniHat?"
        answer="QurbaniHat is an online livestock booking platform that allows users to easily browse, select, and reserve animals such as cows and goats for Qurbani."
      />

      <FAQItem
        question="How does the livestock booking system work?"
        answer="To book an animal, you first need to create an account or log in. After that, go to the animals page, browse and select your preferred livestock, and fill out the booking form with your details. Once submitted, your booking will be confirmed based on availability."
      />

      <FAQItem
        question="Are the animals healthy and verified?"
        answer="Yes, all animals listed on QurbaniHat are carefully inspected to ensure they are healthy and meet quality standards. Sellers are verified, and we aim to provide only well-maintained livestock suitable for Qurbani."
      />

      <FAQItem
        question="Can I see real images/videos of the livestock?"
        answer="Yes, each animal listing includes real images, and in some cases, videos to help you clearly see the condition and appearance before booking."
      />

      <FAQItem
        question="Do you provide weight and age details?"
        answer="Yes, every animal comes with detailed information including weight, age, breed, and price so you can make an informed decision."
      />

      <FAQItem
        question="Are the animals suitable for Qurbani according to Islamic rules?"
        answer="Yes, all animals are selected in accordance with Islamic guidelines for Qurbani, ensuring they meet the required age, health, and condition standards."
      />
    </div>
  );
};

export default FAQSection;