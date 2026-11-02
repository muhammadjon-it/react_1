
import React from "react";
 function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-12 h-12 flex items-center justify-center
      rounded-full border border-gray-300
      bg-gray-100 text-gray-700
      hover:bg-gray-200 hover:scale-105
      transition-all duration-300
      dark:bg-gray-800 dark:text-yellow-400
      dark:border-gray-600 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {dark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42" />
          <path d="m17.65 17.65 1.42 1.42M2 12h2m16 0h2" />
          <path d="m6.35 17.65-1.42 1.42m14.14-14.14-1.42 1.42" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397Z" />
        </svg>
      )}
    </button>
  );
}


export default ThemeToggle
