import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Image
import logo from "../assets/logo.svg";

const Header = ({handleOpenModal}) => {
  // State for controlling mobile navbar visibility
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

  // State for mobile navbar styles
  const [mobileNavbarStyles, setMobileNavbarStyles] = useState({
    display: "none",
    transform: "translateY(100%)",
    opacity: "0",
  });

  useEffect(() => {
    // Show/hide mobile navbar
    if (openMobileNavbar) {
      document.body.classList.add("overflow-y-hidden");
      setMobileNavbarStyles({
        display: "block",
        transform: "translateY(100%)",
        opacity: "1",
      });
      setTimeout(() => {
        if (openMobileNavbar) {
          setMobileNavbarStyles({
            display: "block",
            transform: "translateY(0%)",
            opacity: "1",
          });
        }
      }, 10);
    } else {
      document.body.classList.remove("overflow-y-hidden");
      setMobileNavbarStyles({
        display: "block",
        transform: "translateY(100%)",
        opacity: "0",
      });
      setTimeout(() => {
        if (!openMobileNavbar) {
          setMobileNavbarStyles({
            display: "none",
            transform: "translateY(100%)",
            opacity: "0",
          });
        }
      }, 300);
    }
  }, [openMobileNavbar]);

  // Close mobile navbar when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setOpenMobileNavbar(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  // Close mobile navbar when a link is clicked
  const handleLinkClick = () => {
    setOpenMobileNavbar(false);
  };

  return (
    <>
      {/* Header */}
      <header className="py-4">
        <div className="w-full max-w-base mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Mobile navbar toggle button */}
            <button
              onClick={() => setOpenMobileNavbar(true)}
              className="block 640:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {/* Main navigation */}
            <nav className="hidden 640:block">
              <ul className="flex items-center gap-8">
                <li>
                  <NavLink
                    to="/"
                    className="text-oast-midnight-300 font-bold hover:text-oast-primary-dark transition-all duration-300"
                  >
                    Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/join-presale"
                    className="text-oast-midnight-300 font-bold hover:text-oast-primary-dark transition-all duration-300"
                  >
                    Join the presale
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/help"
                    className="text-oast-midnight-300 font-bold hover:text-oast-primary-dark transition-all duration-300"
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Connect wallet button */}
            <button onClick={handleOpenModal} className="px-5 py-3.5 bg-oast-primary-medium rounded-xl shadow-btn text-sm text-oast-light font-bold border border-[#282b33]">
              Connect your wallet
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navbar */}
      <div
        style={{ display: mobileNavbarStyles.display }}
        className={`fixed inset-0 z-50 w-full min-h-screen 640:!hidden`}
      >
        {/* Mobile navbar contents */}
        <div
          style={{ transform: mobileNavbarStyles.transform }}
          className="relative z-10 w-full h-[calc(100%-48px)] bg-oast-main rounded-t-3xl mt-12 p-6 pt-4 transition-transform duration-300"
        >
          {/* Top bar */}
          <div className="flex justify-center w-full mb-6">
            <div className="w-[100px] h-2 bg-oast-midnight-700 rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="h-[calc(100%-32px)] overflow-y-auto space-y-12">
            {/* Navigation */}
            <nav className="mobile-nav">
              <ul className="space-y-3.5">
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                    to="/"
                  >
                    Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                    to="/join-presale"
                  >
                    Join the presale
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLinkClick}
                    className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                    to="/help"
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Social links */}
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://twitter.com/CastelloCoin"
                  target="_blank"
                  className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/castellocoin/"
                  target="_blank"
                  className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/CASTStudio.io/"
                  target="_blank"
                  className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/castellocoin"
                  target="_blank"
                  className="inline-block w-full text-3xl font-bold text-oast-midnight-100 hover:text-oast-primary-dark transition-all duration-300"
                >
                  Telegram
                </a>
              </li>
            </ul>

            {/* Additional links */}
            <div className="space-y-3.5">
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="mailto:s.wenzel@caststud.io"
                    className="w-full text-oast-midnight-300 text-sm"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://docsend.com/view/7v8aa9s3yej7mdrb"
                    target="_blank"
                    className="w-full text-oast-midnight-300 text-sm"
                  >
                    Imprint
                  </a>
                </li>
                <li>
                  <a
                    href="https://docsend.com/view/wbuzguefsjmtcbus"
                    target="_blank"
                    className="w-full text-oast-midnight-300 text-sm"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docsend.com/view/dxr5bgvajhiyg9vj"
                    target="_blank"
                    className="w-full text-oast-midnight-300 text-sm"
                  >
                    Cookie
                  </a>
                </li>
              </ul>
              <p className="text-oast-midnight-300 text-sm font-bold">
                Caststudio © 2024
              </p>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          onClick={() => setOpenMobileNavbar(false)}
          style={{ opacity: mobileNavbarStyles.opacity }}
          className="absolute inset-0 z-0 w-full h-full backdrop-filter backdrop-blur-[8px] transition-opacity duration-300"
        ></div>
      </div>
    </>
  );
};

export default Header;
