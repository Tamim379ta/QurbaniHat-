import BannerImg from '@/assets/hero.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
const BannerPage = () => {
  return (
    <div className='mt-5 '>
      <div className='relative'>

        <Image
          src={BannerImg}
          alt='Banner Image'
          width={1000}
          height={1000}
          className=' w-full'
        />


        <div className='absolute top-1 right-1 md:top-10 md:right-10 lg:top-40 lg:right-40 '>
          <p className='text-2xl md:text-6xl font-bold text-white animate__animated  animate__fadeInRight '>QurbaniHat, </p>
          <p className='text-2xl md:text-6xl font-bold text-white animate__animated  animate__fadeInRight'>Livestock Booking <br /> Platform.</p>

          <Link href={'/all-animals'}>
          <button className='btn mt-2 bg-transparent text-white hover:bg-white/20 hover:scale-102 animate__animated  animate__fadeInRight'>See All Animals <FaArrowRight/></button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default BannerPage;