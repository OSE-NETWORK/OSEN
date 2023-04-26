import React from "react";
import Image from 'next/image';

function About() {
  return (
    <div className="p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-center">
      
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-8">About us</h1>
        <p className="text-lg mb-6">
          At OS.Devcommunity, we believe that everyone, irrespective of their
          college or branch, technical or non-technical background, can make it
          big. We're a community of learners, where people come together to
          learn, grow, and thrive. Our mission is to provide hands-on training
          in various fields of computer science, and create an inclusive
          community that focuses on a learn-by-doing approach.
        </p>
        <p className="text-lg mb-4">
          We're passionate about technology and education, and we want to share
          our knowledge with as many people as possible. Whether you're a
          beginner or an experienced developer, there's always something new to
          learn at OS.Devcommunity. Our training programs are designed to be
          practical, interactive, and engaging, so that you can learn by doing.
        </p>
        <p className="text-lg">
          Our community is open to everyone who shares our passion for learning
          and growth. We welcome people from all backgrounds and skill levels,
          and we strive to create a supportive and inclusive environment where
          everyone can thrive. Join us today and start your journey towards
          success in the exciting world of computer science!
        </p>
      </div>
      <div className="md:w-1/2 md:pl-12">
        <Image src="/Images/ab.png" alt="A boy" width={500} height={500} />
      </div>
    </div>
  );
}

export default About;
