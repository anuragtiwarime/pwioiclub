import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor); // Cleanup listener
  }, []);

  return (
    <div style={{ backgroundColor: color }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href="/">
        
            <Image src="/logo.png" alt="Logo" width={200} height={50} />
          
        </Link>
        <ul style={{ color: textColor }} className='hidden sm:flex'>
        <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/UnderConstruction'>Blog</Link>
          </li>
          <li className='p-4'>
            <Link href='/UnderConstruction'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/UnderConstruction'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/UnderConstruction'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
