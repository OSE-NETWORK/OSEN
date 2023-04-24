import React from "react";
// import styles from "./about.module.css";


function About() {
  return (
    <div>
      <div className="bg-white"></div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 lg:mb-12">About us</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:mr-8">
            {/* <img src={image1} alt="Image 1" className="rounded-lg mb-4 sm:mb-0" /> */}
          </div>
          <div className="flex-1 lg:mx-8">
            <p className="my-4 sm:my-8 lg:my-12">
              At OS.Devcommunity, we believe that everyone, irrespective of their college or branch, technical or non-technical background, can make it big. We're a community of learners, where people come together to learn, grow, and thrive. Our mission is to provide hands-on training in various fields of computer science, and create an inclusive community that focuses on a learn-by-doing approach.
            </p>
            <p className="my-4 sm:my-8 lg:my-12">
              We're passionate about technology and education, and we want to share our knowledge with as many people as possible. Whether you're a beginner or an experienced developer, there's always something new to learn at OS.Devcommunity. Our training programs are designed to be practical, interactive, and engaging, so that you can learn by doing.
            </p>
            <p className="my-4 sm:my-8 lg:my-12">
              Our community is open to everyone who shares our passion for learning and growth. We welcome people from all backgrounds and skill levels, and we strive to create a supportive and inclusive environment where everyone can thrive. Join us today and start your journey towards success in the exciting world of computer science!
            </p>
          </div>
          <div className="flex-1 lg:ml-8">
            {/* <img src={image3} alt="Image 3" className="rounded-lg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
