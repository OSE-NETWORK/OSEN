import React from "react";
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
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
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
  
    // <div id = "Hero" className={styles.container}>
    //   <h1 className={styles.title}>OS.Devcommunity</h1>
    //   <h3 className={styles.subtitle}>--Grow together--</h3>
    //   <p className={styles.description}>
    //     This is a <span>community</span> which provides <span>free</span> hands-on training in various
    //     fields of<span>computer science </span> and have an inclusive <span>community focusing on a
    //     learn by doing approach.</span>
    //   </p>

    //   <label>
    //   <input type="text" placeholder="your email" className={styles.input} />
    //   <button>Join us</button>

    //   </label>

    // </div>
    



// function Hero() {
//   return (
//     <div id="Hero" className={styles.container}>
//       <h1 className={styles.title}>OS.Devcommunity</h1>
//       <h3 className={styles.subtitle}>--Grow together--</h3>
//       <p className={styles.description}>
//         This is a <span>community</span> which provides <span>free</span> hands-on training in various
//         fields of <span>computer science</span> and have an inclusive <span>community focusing on a
//         learn by doing approach.</span>
//       </p>

//       <label>
//         <input type="text" placeholder="your email" className={styles.input} />
//         <button className={styles.joinButton}>Join us</button>
//       </label>

//       <div className={styles.iconContainer}>
//         <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
//         <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
//         <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
//         <a href="https://github.com/"><i className="fab fa-github"></i></a>
//       </div>


  
  );
}

export default Hero;
