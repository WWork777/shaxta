<<<<<<< HEAD
"use client";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-14">
      <div className="container">
        {/* Разделительные линии */}
        <div className="relative flex items-center w-full mb-6 sm:mb-8">
          <div className="flex-grow h-px bg-black" />
          <div className="mx-4" />
          <div className="flex-grow h-px bg-black" />
        </div>

        {/* CTA + кнопки */}
        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            Готовы обсудить участие?
            <span className="font-normal text-secondary block mt-1 text-lg md:text-xl">
              Свяжитесь удобным способом — вышлем полную презентацию и документы (по NDA).
            </span>
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-1">
            {/* Позвонить */}
            <a
              href="tel:+79039073334"
              aria-label="Позвонить"
              className="inline-flex items-center justify-center rounded-full px-5 md:px-6 py-2.5 md:py-3 bg-black text-white text-base md:text-lg font-medium hover:opacity-90 transition"
            >
              Позвонить
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/79039073334"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center justify-center rounded-full px-5 md:px-6 py-2.5 md:py-3 text-base md:text-lg font-medium text-white transition"
              style={{ backgroundColor: "#25D366" }}
            >
              WhatsApp
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/dmserhill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="inline-flex items-center justify-center rounded-full px-5 md:px-6 py-2.5 md:py-3 text-base md:text-lg font-medium text-white transition"
              style={{ backgroundColor: "#229ED9" }}
            >
              Telegram
            </a>
          </div>
        </div>

        {/* Нижняя разделительная линия (по желанию можно убрать) */}
        <div className="relative flex items-center w-full mt-6 sm:mt-8">
          <div className="flex-grow h-px bg-black" />
        </div>
      </div>
    </footer>
  );
=======
import Logo from "../logo";

const Footer = () => {
    return (
        <footer className="py-6 sm:py-14 flex items-center justify-center">
            <div className="container">
                <div className="flex flex-col gap-1.5 items-center sm:items-start">
                    <div className="relative flex items-center w-full">
                        <div className="flex-grow h-px bg-black" />
                        <div className="mx-4">
                            <Logo />
                        </div>
                        <div className="flex-grow h-px bg-black" />
                    </div>
                </div>
            </div>
        </footer>
    );
>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
};

export default Footer;
