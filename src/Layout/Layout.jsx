
import DarkModeToggle from "@/components/DarkModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router";

const Layout = () => {
      const { t } = useTranslation();
    
    return (
        <div className="min-h-screen bg-[#D7D7D7] text-gray-900 transition-colors duration-300 dark:bg-[#0B1120] dark:text-white">
            <nav className="fixed top-0 z-50 flex w-full items-center justify-end bg-white/30 px-10 py-4 shadow-sm backdrop-blur-2xl transition-colors duration-300 dark:bg-black/40">
                <div className="flex w-full items-center justify-end gap-10">
                    <Link
                        className="text-xl text-gray-900 transition-colors hover:text-blue-600 text-white dark:hover:text-blue-400"
                        to="/">
                        {t("home")}
                    </Link>
                    <Link
                        className="text-xl text-gray-900 transition-colors hover:text-blue-600 text-white dark:hover:text-blue-400"
                        to="/">
                         {t("about")}
                    </Link>
                    <Link
                        className="text-xl text-gray-900 transition-colors hover:text-blue-600 text-white dark:hover:text-blue-400"
                        to="/">
                       {t('products')}
                    </Link>
                    <Link
                        className="rounded-2xl bg-white px-3 py-2 text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                        to="/" >
                        {t('contact')}
                    </Link>

                    <DarkModeToggle />
                    <LanguageSwitcher/>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
