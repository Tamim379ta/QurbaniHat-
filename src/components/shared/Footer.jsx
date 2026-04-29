import Image from 'next/image';
import Logo from '@/assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-base-300 text-base-content p-10'>
      <footer className="footer sm:footer-horizontal">

        {/* Brand */}
        <aside>
          <Image
            src={Logo}
            alt='QurbaniHat'
            width={200}
            height={200}
          />
          <p>
            Trusted platform for buying & booking livestock
            <br />
            Safe • Reliable • Fast
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Marketplace</h6>
          <a className="link link-hover">All Animals</a>
          <a className="link link-hover">Cows</a>
          <a className="link link-hover">Goats</a>
          <a className="link link-hover">Sheep</a>
        </nav>

        <nav>
          <h6 className="footer-title">User</h6>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">My Bookings</a>
          <a className="link link-hover">Wishlist</a>
          <a className="link link-hover">Login / Register</a>
        </nav>

        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">How it Works</a>
        </nav>



      </footer>

      <div className='bg-base-300 flex flex-col md:flex-row justify-between items-center'>
        <div className="text-center mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} QurbaniHat  — Built for safe & smart livestock trading.
        </div>
        <div>
          <ul className='flex gap-2 text-2xl'>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>


    </div>

  );
};

export default Footer;