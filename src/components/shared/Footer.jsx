import Image from 'next/image';
import Logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">

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

  );
};

export default Footer;