
import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import Logo from "@/images/image copy.png";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const defaultSettings = {
  theme: "light",
  language: "en",
  selectedCatalog: "1",
};

const Layout = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [settings, setSettings] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("settings") || "{}");

    return { ...defaultSettings, ...saved, };
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const dark = settings.theme === "dark";

  const setDark = (value) => {
    setSettings((prev) => ({ ...prev, theme: value ? "dark" : "light", }));
  };

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = (path) =>
    `relative text-base font-semibold transition-colors duration-200 ${location.pathname === path
      ? "text-[#46A358]"
      : dark
        ? "text-gray-300 hover:text-[#46A358]"
        : "text-gray-700 hover:text-[#46A358]"
    }`;

  const mobileLinkClass = (path) =>
    `flex flex-col items-center justify-center gap-1 transition-colors ${location.pathname === path
      ? "text-[#46A358]"
      : dark
        ? "text-gray-400"
        : "text-gray-400"
    }`;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${dark
        ? "dark bg-[#111827] text-gray-100"
        : "bg-white text-gray-900"
        }`}
    >
      <header
        className={`fixed top-0 left-0 z-[100] w-full border-b transition-colors duration-300 ${dark
          ? "bg-[#111827]/95 border-[#263244]"
          : "bg-white/95 border-gray-100"
          } backdrop-blur-md`}
      >
        <nav className="container mx-auto flex h-[72px] items-center justify-between px-4 md:px-8 lg:px-12">

          <Link to="myaccount" className="shrink-0">
            <img
              src={Logo}
              alt="GreenShop"
              className="w-[135px] sm:w-[155px] object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className={navLinkClass("/")}>
              {t("home")}
            </Link>

            <Link to="/shop" className={navLinkClass("/shop")}>
              {t("shop")}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-5">

            <Link
              to="/favorite"
              className="hidden md:block relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden md:block"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
              </svg>
            </Link>
                    <Link
              to="/login"
              className="px-7 py-2.5 rounded-xl bg-[#46A358] text-white font-semibold hover:bg-[#398c48] hover:shadow-lg transition-all duration-300"
            >
              {t("login")}
            </Link>

            <LanguageSwitcher />

            <ThemeToggle dark={dark} setDark={setDark} />
          </div>

          <div className="flex md:hidden items-center gap-3">

            <Link to="/favorite" className="p-2">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition ${dark
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-800"
                }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full border-t shadow-xl p-5 ${dark
              ? "bg-[#111827] border-gray-700"
              : "bg-white border-gray-100"
              }`}
          >
            <div className="flex flex-col gap-5">

              <Link to="/" className={navLinkClass("/")}>
                {t("home")}
              </Link>

              <Link to="/shop" className={navLinkClass("/shop")}>
                {t("shop")}
              </Link>

              <Link
                to="/myaccount"
                className={navLinkClass("/myaccount")}
              >
                My Account
              </Link>

              <Link
                to="/login"
                className="w-full text-center py-3 rounded-xl bg-[#46A358] text-white font-semibold"
              >
                {t("login")}
              </Link>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-500">
                  Language
                </span>
                <LanguageSwitcher />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Theme
                </span>
                <ThemeToggle dark={dark} setDark={setDark} />
              </div>

            </div>
          </div>
        )}
      </header>

      <main className="pt-[72px] pb-24 md:pb-0">
        <Outlet />
      </main>

      <div
        className={`md:hidden fixed bottom-0 left-0 z-[100] w-full border-t backdrop-blur-xl ${dark
          ? "bg-[#111827]/95 border-gray-700"
          : "bg-white/95 border-gray-100"
          }`}
      >
        <div className="grid grid-cols-4 items-center h-[68px] px-3">

          <Link to="/" className={mobileLinkClass("/")}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" />
            </svg>
            <span className="text-[11px] font-medium">
              {t("home")}
            </span>
          </Link>

          <Link to="/favorite" className={mobileLinkClass("/favorite")}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
            </svg>
            <span className="text-[11px] font-medium">
              Favorite
            </span>
          </Link>

          <Link to="/shop" className={mobileLinkClass("/shop")}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.8h8.8a2 2 0 0 0 2-1.6L22 8H6" />
              <circle cx="10" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
            </svg>
            <span className="text-[11px] font-medium">
              {t("shop")}
            </span>
          </Link>

          <Link
            to="/myaccount"
            className={mobileLinkClass("/myaccount")}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
            <span className="text-[11px] font-medium">
              Account
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Layout;
