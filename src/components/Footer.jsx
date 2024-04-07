import React from "react";

const Footer = () => {
  return (
    <footer className="pb-6 sm:pb-10 mt-8">
      <div className="w-full max-w-base mx-auto px-5 space-y-4">
        <p className="text-oast-midnight-300 text-sm font-bold">
          Caststudio © 2024
        </p>

        {/* links */}
        <div className="flex flex-col sm:flex-row sm:justify-between flex-wrap gap-4">
          <div className="flex gap-6 items-center">
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://twitter.com/CastelloCoin"
            >
              Twitter
            </a>
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://www.instagram.com/castellocoin/"
            >
              Instagram
            </a>
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://www.facebook.com/people/Castello-Coin/100076359850814/"
            >
              Facebook
            </a>
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://t.me/castellocoin"
            >
              Telegram
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              href="mailto:s.wenzel@caststud.io"
            >
              Contact
            </a>
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://docsend.com/view/7v8aa9s3yej7mdrb"
            >
              Imprint
            </a>
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://docsend.com/view/wbuzguefsjmtcbus"
            >
              Privacy
            </a>
            <a
              className="text-oast-midnight-300 text-sm hover:text-oast-primary-dark"
              target="_blank"
              href="https://docsend.com/view/dxr5bgvajhiyg9vj"
            >
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
