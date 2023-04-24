import React from "react";
// import styles from "./hero.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
function Hero() {
  return (
    <div className="bg-white">
    <div className="relative isolate px-6 pt-14 lg:px-8">
   
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          OS . Dev community
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        This is a community  which provides free hands-on training in various
         fields of computer science  and have an inclusive community focusing on a
         learn by doing approach.
        </p>
        <div className="text-center">
            
            <div className="flex justify-center mt-12 space-x-4">
              <a href="https://twitter.com/" className="text-green-600 hover:text-gray-700">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/" className="text-green-600 hover:text-gray-700">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a href="https://github.com/" className="text-green-600 hover:text-gray-700">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
              <a href="https://t.me/OS_Dev_Community" className="text-green-600 hover:text-gray-700">
                <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    <div className="relative isolate overflow-hidden bg-white-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-gray" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-bold text-gray">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-900">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-gray" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray">No spam</dt>
              <dd className="mt-2 leading-7 text-gray">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
     
    </div>
  </div>
  </div>
  
   
      

  );
  
}

export default Hero;
