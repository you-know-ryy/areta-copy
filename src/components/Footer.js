// 
import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Dapatkan koneksi dengan kami di jaringan sosial:</span>
        </div>

        <div className="flex justify-center">
          {/* Facebook */}
          <a href="#!" className="mr-6 transition-transform transform hover:scale-110 active:scale-95">
            <img src={facebook} alt="Facebook" className="h-5 w-5" />
          </a>
          {/* Twitter */}
          <a href="#!" className="mr-6 transition-transform transform hover:scale-110 active:scale-95">
            <img src={twitter} alt="Twitter" className="h-5 w-5" />
          </a>
          {/* Instagram */}
          <a href="#!" className="mr-6 transition-transform transform hover:scale-110 active:scale-95">
            <img src={instagram} alt="Instagram" className="h-5 w-5" />
          </a>
          {/* Vimeo */}
          <a href="#!" className="mr-6 transition-transform transform hover:scale-110 active:scale-95">
            <img src={vimeo} alt="Vimeo" className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Areta Section */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Areta Informatics College
            </h6>
            <p>
              Metode belajar dengan 90% Praktek 10% Teori terbukti menghantarkan mahasiswa/i kami dapat bersaing di dunia kerja dan bisnis baik dibidang IT maupun dibidang Ditigal Marketing.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Programs
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Teknik Informatika</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Sistem Informasi</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Bisnis Digital</a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Training</a>
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Settings</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Orders</a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">Help</a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198a1.875 1.875 0 01-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Dasana xenter Blok CD 68 Tangerang
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              admin@aretacollege.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 62 852 1950 7377
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black p-6 text-center text-white">
        <span>© 2013-2025 Copyright: </span>
        <a
          className="font-semibold text-white"
          href="https://aretacollege.com/"
        >
          Areta Informatics College
        </a>
      </div>
    </footer>
  );
};

export default Footer;
