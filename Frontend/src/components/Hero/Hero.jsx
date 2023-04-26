import React from "react";
<<<<<<< HEAD:Frontend/Components/Hero/hero.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

=======
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
>>>>>>> 0e80ff79b3230aa9115b51b64d44b36cc0ac679c:Frontend/src/components/Hero/Hero.jsx
function Hero() {
  return (
    <section className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
        </div>

        <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl" style={{fontSize: "4rem"}}>

            OS . Dev community
          </h1>
          <p className="mt-6 text-lg leading-9 text-black-600">
          <span style={{ fontWeight: "bold" }}>This is a</span>{" "}
            <span style={{ color: "green", fontSize: "1.5rem" }}>
              {" "}
              community{" "}
            </span>
            which provides{" "}
            <span style={{ color: "green", fontSize: "1.5rem" }}>
              {" "}
              Free{" "}
            </span>{" "}
            <span style={{ fontWeight: "bold" }}>hands-on training in various</span><span style={{ color: "green", fontSize: "1.5rem" }}>
              {" "}
              fields of computer science {" "}
            </span>  <span style={{ fontWeight: "bold" }}>and have an
            inclusive community focusing on a learn by doing approach.</span>
          </p>
          <div className="mt-8">
          <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-w-2 flex-auto rounded-md border-0 bg-white/5 px-7 py-2 text-green shadow-sm ring-1 ring-inset ring-white/10"
                      placeholder="Enter your email"
                    />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Join us
            </button>
          </div>
          <div className="flex justify-center mt-12 space-x-4">
            <a
              href="https://twitter.com/"
              className="text-blue-600 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-blue-600 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/"
              className="text-black-600 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
            </a>
            <a
              href="https://t.me/OS_Dev_Community"
              className="text-blue-600 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTelegram} className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
