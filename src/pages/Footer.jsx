
import React from "react";
import { Link } from "react-router";
import Img_12 from "@/images/image copy 11.png";
import Img_13 from "@/images/image copy 12.png";
import Img_14 from "@/images/image copy 13.png";
import Img_16 from "@/images/image copy 14.png";
import Img_17 from "@/images/image copy 15.png";
import Img_15 from "@/images/image copy.png";

const Footer = () => {
  const services = [
    {
      image: Img_12,
      title: "Garden Care",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
    {
      image: Img_13,
      title: "Plant Renovation",
      description:
        "We help you make your home greener with beautiful indoor plants.",
    },
    {
      image: Img_14,
      title: "Watering Garden",
      description:
        "Discover everything you need to keep your plants healthy and fresh.",
    },
  ];

  const footerLinks = [
    {
      title: "My Account",
      links: ["My Account", "Our stores", "Contact us", "Career", "Specials"],
    },
    {
      title: "Help & Guide",
      links: [
        "Help Center",
        "How to Buy",
        "Shipping & Delivery",
        "Product Policy",
        "How to Return",
      ],
    },
    {
      title: "Categories",
      links: [
        "House Plants",
        "Potter Plants",
        "Seeds",
        "Small Plants",
        "Accessories",
      ],
    },
  ];

  return (
    <footer className="mt-16 bg-white dark:bg-[#111827] text-gray-800 dark:text-gray-200 transition-colors duration-300">

      {/* Services and Newsletter */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 md:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center sm:items-start gap-4 lg:flex-col lg:border-r lg:border-gray-100 lg:dark:border-gray-800 lg:pr-5"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-[#F4F8F4] dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 bg-[#F7FAF7] dark:bg-gray-800/70 rounded-2xl p-5">
            <h3 className="font-bold text-lg mb-3">
              Join Our Newsletter
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-6">
              Get updates about new plants, special offers and discounts.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:border-[#46A358]"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                className="min-w-0 flex-1 px-3 py-3 text-sm outline-none bg-transparent"
              />

              <button
                type="submit"
                className="bg-[#46A358] hover:bg-[#398c48] text-white px-4 py-3 text-sm font-semibold transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-[#EDF6EF] dark:bg-[#17251D] border-y border-[#DCEBDD] dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-5 py-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">

            <Link to="/" className="flex justify-center sm:justify-start">
              <img
                src={Img_15}
                alt="GreenShop"
                className="w-36 object-contain"
              />
            </Link>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 18S3 12.5 3 8a7 7 0 1 1 14 0c0 4.5-7 10-7 10Z"
                  stroke="#46A358"
                  strokeWidth="1.5"
                />
                <circle cx="10" cy="8" r="2.5" stroke="#46A358" strokeWidth="1.5" />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">
                70 West Buckingham Ave.
                <br />
                Farmingdale, NY 11735
              </span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="14" rx="3" stroke="#46A358" strokeWidth="1.5" />
                <path d="m3 5 7 6 7-6" stroke="#46A358" strokeWidth="1.5" />
              </svg>
              <span>contact@greenshop.com</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M6 2h3l2 4-2 2c1 2 2 3 4 4l2-2 3 2v3c0 1-1 2-2 2C8 17 3 12 2 5c0-2 2-3 4-3Z"
                  stroke="#46A358"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+88 01911 717 490</span>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-base mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#46A358] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social and Payment */}
          <div className="col-span-2 lg:col-span-1">

            <h3 className="font-bold text-base mb-4">
              Social Media
            </h3>

            <img
              src={Img_16}
              alt="Social Media"
              className="w-[150px] object-contain mb-7"
            />

            <h3 className="font-bold text-base mb-4">
              We Accept
            </h3>

            <img
              src={Img_17}
              alt="Payment Methods"
              className="w-[180px] max-w-full object-contain"
            />

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © 2026 GreenShop. All Rights Reserved.
          </p>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Made with <span className="text-red-500">♥</span> for plant lovers
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
