import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PW IOI - Campus Website</title>
        <meta name='description' content='PW IOI - Empowering Education' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      
<Hero 
  heading='EVERYTHING WE AIM TO ACHIEVE' 
  message='Shaping the Future of Education, one batch at a time'
  backgroundImage='/socialImage.jpg' // Prop to set the background image
/>
    
      <Slider slides={SliderData} />

      {/* Vision Section */}
      <div className='my-10 mx-auto max-w-7xl p-6 bg-fadedDarkBlue text-white'>
        <h2 className='text-3xl font-bold text-center mb-8'>OUR VISION</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <Image src='/ig-img-1.jpeg' alt='Vision Image' width={500} height={300} className='rounded-lg' />
          <div>
            <h3 className='text-2xl font-semibold mb-3'>A perfect campus</h3>
            <p>
              We at PW IOI campus aim to achieve everything that is beyond the scope of normal
              human imagination. With our innovative clubs and excellent faculty, we provide the 
              students with everything they need to become an excelling mind in every field.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className='my-10 mx-auto max-w-7xl p-6'>
        <h2 className='text-3xl font-bold text-center mb-8'>Latest from Our Blog</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Blog Card 1 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <Image src='/blog.png' alt='Blog Image 1' width={400} height={250} className='rounded-t-lg' />
            <h3 className='text-xl font-semibold mt-2'>NEET guidance</h3>
            <p className='text-gray-600'>We have provided students with...</p>
          </div>
          {/* Blog Card 2 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <Image src='/userlmn_2d625fb6ff6558278172899ad3a0fced.webp' alt='Blog Image 2' width={400} height={250} className='rounded-t-lg' />
            <h3 className='text-xl font-semibold mt-2'>Data Science</h3>
            <p className='text-gray-600'>Stay up to date with the...</p>
          </div>
          {/* Blog Card 3 */}
          <div className='bg-white shadow-lg rounded-lg p-4'>
            <Image src='/1703166404493.jpeg' alt='Blog Image 3' width={400} height={250} className='rounded-t-lg' />
            <h3 className='text-xl font-semibold mt-2'>Competitions</h3>
            <p className='text-gray-600'>We have been organising competitions...</p>
          </div>
        </div>

        <div className='flex justify-center mt-6'>
          <Link href='/UnderConstruction'
             className='inline-block bg-blue text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300'>
              Read More
            
          </Link>
        </div>
      </div>

      {/* Results Section */}
      <div className='my-10 mx-auto max-w-4xl p-6 bg-fadedDarkBlue text-white shadow-lg rounded-lg'>
        <h2 className='text-3xl font-bold text-center mb-4'>Student Results</h2>
        <p className='text-center mb-6'>
          Access the latest academic achievements and results of our students.
        </p>
        <div className='flex justify-center'>
          <Link href='/UnderConstruction'>
            <a className='inline-block px-6 py-3 rounded hover:bg-fadedDarkBlue-700 transition duration-300'>
              View Results
            </a>
          </Link>
        </div>
      </div>

    </div>
  );
}
