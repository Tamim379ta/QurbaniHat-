"use client"

import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import Logo from '@/assets/logo.png'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { authClient } from '@/lib/auth-client';
import { Avatar } from "@heroui/react";

const Navbar = () => {


  const userData = authClient.useSession()
  const users = userData.data

  const links = (
    <>

      <li><Navlink href={'/'}>Home</Navlink></li>
      <li><Navlink href={'/all-animals'}>All Animals</Navlink></li>
      <li><Navlink href={'/profile'}>Profile</Navlink></li>

    </>
  )
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link href={'/'}>
          <Image
            src={Logo}
            alt='QurbaniHat'
            width={150}
            height={100}
          />

        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      {
        users ? (
          <div className="navbar-end gap-2">
            <p className='hidden md:block'> Hi, {users.user.name}</p>
            <Avatar>
              <Avatar.Image alt="user name" src={users.user.image} referrerPolicy='no-referrer' />
              <Avatar.Fallback>{users.user.name[0]}</Avatar.Fallback>
            </Avatar>
            <button className='btn' onClick={async() => await authClient.signOut()} >Logout <BiLogOut/></button>
          </div>

        ) : (
          <div className="navbar-end gap-2">
            <Link className='btn' href={'/login'}>Login <BiLogIn /></Link>
            <Link className='btn' href={'/register'}>Register <BiLogIn /></Link>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;