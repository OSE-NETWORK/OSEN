import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa';
import {BiChevronRight} from 'react-icons/bi'

function Footer() {
  return (
    <>
      <div className = "bg-gray-800 pt-52 p-8 text-gray-200">
        <div className = "max-w-7xl mx-auto">

          <div className = "flex gap-2 justify-between max-md:flex-col max-md:text-center">   
            <div className = "">
              <h4 className = "text-3xl pb-4 font-bold font-title">
                OS.Dev
                <span className = "text-blue-400">community</span>
              </h4>
              <p className = "text-gray-500 pb-2">Join 25,000+ others and never miss out our Latest Updates.</p>
              <form action = "" className = "flex flex-row max-sm:flex-col max-sm:items-center">
                <input type = "text" className = "text-gray-500 w-2/3 p-2 focus:border-blue-400 max-sm:mb-2" placeholder = "Enter your email" />
                <button className = "bg-blue-500 hover:bg-blue-700 duration-300 w-2/3 p-2 font-semibold">Subscribe</button>
              </form>
            </div>

            <div className = "flex justify-between">
              <div className = "mb-5 md:mx-40">
                <h4 className = "pb-4 text-xl font-semibold">Resources</h4>
                <ul className = "text-gray-500">
                  <li className = "pb-2 flex">
                    <BiChevronRight className = "relative text-blue-400" size = {25} />
                    <span className = "hover:text-blue-400 cursor-pointer font-semibold duration-200">OS.Dev</span>
                  </li>
                  <li className = "pb-2 flex">
                    <BiChevronRight className = "relative text-blue-400" size = {25} />
                    <a href = "https://tailwindcss.com/" target = "_blank" rel = "noreferrer" className = "hover:text-blue-400 cursor-pointer font-semibold duration-200">Tailwind CSS</a>
                  </li>
                  <li className = "pb-2 flex">
                    <BiChevronRight className = "relative text-blue-400" size = {25} />
                    <a href = "https://nextjs.org/" target = "_blank" rel = "noreferrer" className = "hover:text-blue-400 cursor-pointer font-semibold duration-200">Next Js</a>
                  </li>
                </ul>
              </div>

              <div className = "mb-5">
                <h4 className = "pb-4 text-xl font-semibold">Legal</h4>
                <ul className = "text-gray-500">
                  <li className = "pb-2 flex">
                    <BiChevronRight className = "relative text-blue-400" size = {25} />
                    <span className = "hover:text-blue-400 cursor-pointer font-semibold duration-200">Privacy Policy</span>
                  </li>
                  <li className = "pb-2 flex">
                    <BiChevronRight className = "relative text-blue-400" size = {25} />
                    <span className = "hover:text-blue-400 cursor-pointer font-semibold duration-200">Terms & Conditions</span>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className = "bg-gray-600 text-gray-400 flex max-sm:flex-col justify-between items-center px-10 py-1 font-semibold text-center">
        <div className = "text-base">© 2022-2023 OS.Devco™. All Rights Reserved.</div>
        <div className = "flex justify-center items-center gap-4">
            <FaDribbble className = "text-xl cursor-pointer" />
            <FaFacebook className = "text-xl cursor-pointer" />
            <FaInstagram className = "text-xl cursor-pointer" />
            <FaLinkedin className = "text-xl cursor-pointer" />
            <FaTwitter className = "text-xl cursor-pointer" />
            <FaYoutube className = "text-xl cursor-pointer" />
          </div>
      </div>
    </>
  )
}

export default Footer