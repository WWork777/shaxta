"use client";

// import { useState } from "react";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            {/* Кнопки: WhatsApp + Telegram */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://wa.me/79039073334?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%21%20%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20%D0%BF%D0%BE%20%D1%88%D0%B0%D1%85%D1%82%D0%B5%20%D0%B2%20%D0%9A%D1%83%D0%B7%D0%B1%D0%B0%D1%81%D1%81%D0%B5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open WhatsApp chat"
                className="relative cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 rounded-full 
                           text-xl font-medium text-white bg-[#25D366] hover:brightness-95 transition"
              >
                WhatsApp
              </a>

              <a
                href="https://t.me/dmserhill"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Telegram chat"
                className="relative cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 rounded-full 
                           text-xl font-medium text-white bg-[#229ED9] hover:brightness-95 transition"
              >
                Telegram
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
