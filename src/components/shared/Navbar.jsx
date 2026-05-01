import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import Logo from '@/assets/logo.png'
import { BiLogIn } from 'react-icons/bi';

const Navbar = () => {
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
      <div className="navbar-end gap-2">
        <Link className='btn' href={'/login'}>Login <BiLogIn/></Link>
        <Link className='btn' href={'/register'}>Register <BiLogIn/></Link>
      </div>
    </div>
  );
};

export default Navbar;