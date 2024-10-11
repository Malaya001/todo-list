import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FootComponent = () => {
  return ( 
    <footer className="bg-black text-gray-400 py-4 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center lg:px-8 sm:px-6 gap-5">
        <div className="text-sm font-mono hover:text-white">
          <p>© 2020 Your Company, Inc. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex flex-row gap-6">
            <li className="hover:text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </li>
            <li className="hover:text-white">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </li>
            <li className="hover:text-white">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            </li>
            <li className="hover:text-white">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </li>
            <li className="hover:text-white">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FootComponent