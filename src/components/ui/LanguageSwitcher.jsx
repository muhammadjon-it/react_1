
import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

const handleChange = (event) => {
    const newLanguage = event.target.value;

    i18n.changeLanguage(newLanguage);

    const settings = JSON.parse(
        localStorage.getItem("settings") || "{}"
    );

    localStorage.setItem("settings",JSON.stringify({...settings,language: newLanguage, }));
};
    return (
        <select
            value={i18n.resolvedLanguage || i18n.language}
            onChange={handleChange}
            className="px-1 py-2 rounded-lg border border-gray-300
      bg-white text-gray-800 outline-none cursor-pointer
      hover:border-green-500 transition-all
      dark:bg-[#0B0F19] dark:text-gray-100
      dark:border-[#1E2636]"
        >
            <option value="en">EN</option>
            <option value="ru">RU</option>
        </select>
    )
}

export default LanguageSwitcher
