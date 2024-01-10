import React, { useState } from 'react';

const Footer = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here.
    // For now, just log the enrollment number to the console.
    console.log(enrollmentNumber);
  };

  return (
    <footer className="bg-fadedDarkBlue text-white text-center p-4">
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
          {/* Column 1: About / Contact Info */}
          <div>
            <h3 className='font-bold mb-4'>About PW IOI</h3>
            <p>
              PW IOI is dedicated to shaping the future of education with innovative approaches and excellence in teaching.
            </p>
          </div>

          {/* Column 2: Social Media Links */}
          <div>
            <h3 className='font-bold mb-4'>Follow Us</h3>
            {/* Add your social media links here */}
            <p>Instagram</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>

          {/* Column 3: Enrollment Form */}
          <div>
            <h3 className='font-bold mb-4'>Get Daily Updates</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Enrollment Number"
                className="text-black mb-4"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <p>© {new Date().getFullYear()} PW IOI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
