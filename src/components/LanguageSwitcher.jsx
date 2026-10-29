
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || i18n.language || "tg";

    const language = currentLanguage.startsWith("ru")
        ? "ru" : currentLanguage.startsWith("en")? "en" : "tg";

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;

        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    };

    return (
        <select
            aria-label="Интихоби забон"
            value={language}
            onChange={handleLanguageChange}
            className="cursor-pointer rounded-xl border border-gray-300 bg-white px-1 py-2 text-sm text-gray-900 outline-none transition-colors hover:bg-gray-100     dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            <option value="tg">🇹🇯</option>
            <option value="ru">🇷🇺</option>
            <option value="en">en</option>
        </select>
    );
}
