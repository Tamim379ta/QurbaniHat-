"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
  const userData = authClient.useSession()
  const users = userData.data
  const user = users.user
  console.log(user)
  return (
    <div className=' max-w-96 bg-base-100 shadow-2xl rounded-2xl my-10 p-10  mx-auto '>
      <div className='flex justify-center '>
        <Avatar size='lg'>
          <Avatar.Image alt="user name" src={users.user.image} referrerPolicy='no-referrer' />
          <Avatar.Fallback>{users.user.name[0]}</Avatar.Fallback>
        </Avatar>

      </div>
      <p className='text-center text-2xl my-2 font-semibold'>{user.name}</p>
      <p className='text-center text-gray-400'>{user.email}</p>


    </div>
  );
};

export default ProfilePage;