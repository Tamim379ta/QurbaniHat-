"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {

  const pathName = usePathname()
  const IsActive = pathName === href
  return (

    <Link
      className={`${IsActive && 'underline text-green-800'}`}
      href={href}>{children}
    </Link>


  );
};

export default Navlink;