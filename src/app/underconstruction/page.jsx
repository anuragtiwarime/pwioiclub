import Head from "next/head";
import Link from "next/link";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fadedDarkBlue">
      <Head>
        <title>Under Construction - PW IOI</title>
        <meta name="description" content="Page Under Construction" />
      </Head>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Stay Tuned!</h1>
        <p className="text-lg mb-6">
          We are working hard on the website. Check back soon.
        </p>
        <Link href="/">
          <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Return Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
