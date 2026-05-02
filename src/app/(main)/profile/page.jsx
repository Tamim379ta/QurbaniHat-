"use client"
import UpdateModal from '@/components/shared/Modal';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProfilePage = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className='max-w-96 bg-base-100 shadow-2xl rounded-2xl my-10 p-10 mx-auto flex justify-center'>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data?.user) {
    router.push('/login');
  }

  const { user } = data;

  return (
    <div className=' max-w-96 bg-base-100 shadow-2xl rounded-2xl my-10 p-10  mx-auto '>
      <div className='flex justify-center '>
        <Avatar size='lg'>
          <Avatar.Image alt="user name" src={user.image} referrerPolicy='no-referrer' />
          <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
        </Avatar>

      </div>
      <p className='text-center text-2xl my-2 font-semibold'>{user.name}</p>
      <p className='text-center text-gray-400'>{user.email}</p>

      <div className='flex justify-center mt-2'>
        <UpdateModal/>
      </div>
    </div>
  );
};

export default ProfilePage;