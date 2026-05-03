import BannerImg from '@/assets/hero.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const BannerPage = () => {
  return (
    <div>
      <div className='relative w-full'>

        <Image
          src={BannerImg}
          alt='Banner Image'
          fill
          priority
          className='object-cover'
        />

        <div className='relative w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[700px]'>

          <div className='absolute top-4 right-4 md:top-10 md:right-10 lg:top-40 lg:right-40'>
            <p className='text-2xl md:text-6xl font-bold text-white animate__animated animate__fadeInRight animate__slow'>
              QurbaniHat,
            </p>
            <p className='text-2xl md:text-6xl font-bold text-white animate__animated animate__fadeInRight animate__slow'>
              Livestock Booking <br /> Platform.
            </p>

            <Link href={'/all-animals'}>
              <button className='btn mt-2 bg-transparent text-white hover:bg-white/20 hover:scale-102 animate__animated animate__fadeInRight animate__slow'>
                See All Animals <FaArrowRight />
              </button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BannerPage;